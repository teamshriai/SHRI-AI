#!/usr/bin/env node
/**
 * Builds the site's photo assets from licensed originals.
 *
 *   npm run images              build every set listed in SETS
 *   npm run images -- --refresh re-download the originals first
 *
 * Each set is a folder with a sources.json manifest (see
 * image-src/shri-health/sources.json): where each photo comes from (Pexels
 * or Unsplash, by id), its licence, its alt text and how to crop it. For
 * every entry the script
 *
 *   1. downloads the full-size original once into <set>/originals/
 *      (git-ignored: the manifest is the record, the originals are a cache);
 *   2. refuses it if it is smaller than the largest output, so a preview-size
 *      or low-resolution file can never end up on the site;
 *   3. auto-rotates it from EXIF, converts it to sRGB, crops it to 4:3 around
 *      the entry's focus, and resizes it (Lanczos) to every size in SIZES
 *      with a light sharpen to restore the detail downscaling softens;
 *   4. writes WebP (quality 80 unless the entry sets `quality`, effort 6)
 *      with all metadata stripped to <outDir>/<name><suffix>.webp.
 *
 * `focus` is "centre" (default), a gravity such as "west", "attention"
 * (sharp's saliency crop), or { "x": 0..1, "y": 0..1 }: where the crop sits
 * within the spare width/height (0 = left/top, 0.5 = centred, 1 = right/
 * bottom) when a photo's subject isn't centred.
 *
 * Output names never change, so swapping a photo is a manifest edit and a
 * re-run — no code change.
 */
import { existsSync } from 'node:fs';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const CLIENT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SETS = ['image-src/shri-health'];
const SIZES = [
  { suffix: '', width: 1200, height: 900 },
  { suffix: '-640', width: 640, height: 480 },
];
const WEBP = { quality: 80, effort: 6, smartSubsample: true };
const REFRESH = process.argv.includes('--refresh');

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

/** The source region with the target's aspect ratio, placed per `focus`. */
function focusBox(width, height, aspect, focus) {
  const cropWidth = Math.min(width, Math.round(height * aspect));
  const cropHeight = Math.min(height, Math.round(width / aspect));
  const clamp = (v) => Math.min(1, Math.max(0, Number.isFinite(v) ? v : 0.5));
  return {
    left: Math.round((width - cropWidth) * clamp(focus.x)),
    top: Math.round((height - cropHeight) * clamp(focus.y)),
    width: cropWidth,
    height: cropHeight,
  };
}

/** The full-size original on the source's CDN (no resize parameters). */
function originalUrl(entry) {
  switch (entry.source) {
    case 'pexels':
      return `https://images.pexels.com/photos/${entry.id}/pexels-photo-${entry.id}.jpeg`;
    case 'unsplash':
      return `https://images.unsplash.com/photo-${entry.id}?fm=jpg&q=95`;
    default:
      throw new Error(`${entry.name}: unknown source "${entry.source}" (use "pexels" or "unsplash")`);
  }
}

async function ensureOriginal(setDir, entry) {
  const dir = join(setDir, 'originals');
  const file = join(dir, `${entry.name}-${entry.source}-${entry.id}.jpg`);
  if (existsSync(file) && !REFRESH) return file;
  await mkdir(dir, { recursive: true });
  const url = originalUrl(entry);
  const res = await fetch(url);
  const type = res.headers.get('content-type') || '';
  if (!res.ok || !type.startsWith('image/')) {
    throw new Error(`${entry.name}: download failed (${res.status} ${type}) from ${url}`);
  }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

async function buildEntry(setDir, outDir, entry) {
  const source = await ensureOriginal(setDir, entry);
  const largest = SIZES[0];
  const meta = await sharp(source).rotate().metadata();
  // After rotate() the reported size can still be pre-rotation; use the
  // EXIF orientation to get the displayed dimensions.
  const turned = meta.orientation >= 5;
  const width = turned ? meta.height : meta.width;
  const height = turned ? meta.width : meta.height;
  if (width < largest.width || height < largest.height) {
    throw new Error(
      `${entry.name}: original is ${width}x${height}; at least ${largest.width}x${largest.height} is required`,
    );
  }

  const focus = entry.focus ?? 'centre';
  const box = typeof focus === 'object' ? focusBox(width, height, largest.width / largest.height, focus) : null;
  const position = focus === 'attention' ? sharp.strategy.attention : typeof focus === 'string' ? focus : 'centre';
  const webp = { ...WEBP, ...(entry.quality ? { quality: entry.quality } : {}) };
  const results = [];
  for (const size of SIZES) {
    const out = join(outDir, `${entry.name}${size.suffix}.webp`);
    let image = sharp(source).rotate().toColourspace('srgb');
    if (box) image = image.extract(box);
    await image
      .resize(size.width, size.height, { fit: 'cover', position, kernel: 'lanczos3' })
      .sharpen({ sigma: size.width >= 1000 ? 0.6 : 0.5 })
      .webp(webp)
      .toFile(out);
    results.push(`${size.width}x${size.height} ${kb((await stat(out)).size)}`);
  }
  return `${entry.name.padEnd(12)} ${entry.source.padEnd(8)} ${width}x${height} -> ${results.join(', ')}`;
}

async function buildSet(set) {
  const setDir = join(CLIENT, set);
  const manifest = JSON.parse(await readFile(join(setDir, 'sources.json'), 'utf8'));
  const outDir = join(CLIENT, manifest.outDir);
  await mkdir(outDir, { recursive: true });
  console.log(`\n${set} -> ${relative(CLIENT, outDir)}`);
  for (const entry of manifest.images) {
    if (!manifest.licenses?.[entry.source]) throw new Error(`${entry.name}: no licence recorded for "${entry.source}"`);
  }
  const lines = await Promise.all(manifest.images.map((entry) => buildEntry(setDir, outDir, entry)));
  lines.forEach((line) => console.log(`  ${line}`));
}

try {
  for (const set of SETS) await buildSet(set);
  console.log('\nDone.');
} catch (error) {
  console.error(`\nImage build failed: ${error.message}`);
  process.exit(1);
}
