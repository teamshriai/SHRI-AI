/**
 * The site's version is its build date, injected by vite.config.js (`define`)
 * on every build, so it can never go stale or need bumping by hand.
 *
 * "2026-10-01" -> "v.1.10.2026" (v.D.M.YYYY). Built explicitly rather than via
 * toLocaleDateString so it reads identically in every locale.
 */
export function formatBuildVersion(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return iso || '';
  return `v.${Number(m[3])}.${Number(m[2])}.${m[1]}`;
}

export const BUILD_VERSION = formatBuildVersion(
  import.meta.env.VITE_BUILD_DATE || new Date().toISOString().slice(0, 10)
);
