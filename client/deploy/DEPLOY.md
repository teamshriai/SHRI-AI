# Deploying www.shri-ai.org (EC2 + nginx)

The site is static: `client/dist/` is built locally, committed, and copied to
the server's web root, `/var/www/shri-ai`. The demo apps under
`/dev/<module>/` (pharmacy, clinician, …) live in the same root and are
deployed separately, so the copy below never touches them.

## 1. Build and commit (local)

```bash
cd client
npm ci
npm run images   # only when a photo in image-src/*/sources.json changed
npm run lint
npm run build
git add -A && git commit -m "…" && git push
```

## 2. Copy to the server

```bash
cd /path/to/SHRI-AI && git pull
sudo rsync -a --delete --exclude='/dev/*/' client/dist/ /var/www/shri-ai/
```

`--delete` removes old hashed bundles; `--exclude='/dev/*/'` protects the
demo apps. (`dev/index.html`, the SHRI-Health page itself, is still updated.)

## 3. nginx (once, or when these files change)

```bash
sudo cp client/deploy/nginx/shri-ai-http.conf    /etc/nginx/conf.d/
sudo cp client/deploy/nginx/shri-ai-site.conf    /etc/nginx/snippets/
sudo cp client/deploy/nginx/shri-ai-headers.conf /etc/nginx/snippets/
```

In the certbot-managed `server { listen 443 ssl; server_name www.shri-ai.org; … }`
block: make the listen line `listen 443 ssl http2;`, keep `root /var/www/shri-ai;`,
and add `include /etc/nginx/snippets/shri-ai-site.conf;` next to the demo
apps' includes. Remove any older `location /` / `location /assets/` blocks
for the site — the snippet replaces them. Then:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

What it sets up:
- gzip for HTML/CSS/JS/JSON/SVG (optional brotli, see the file);
- caching — `/assets/` and `/fonts/` one year (immutable, hashed or
  versioned names), `/images/` 30 days, pages always revalidated, errors
  never cached;
- security headers on every response;
- the SPA fallback for clean URLs;
- 301s from the old root image URLs to `/images/<section>/`.

## 4. Check

```bash
curl -sI https://www.shri-ai.org/ | grep -i cache-control              # no-cache
curl -sI -H 'Accept-Encoding: gzip' https://www.shri-ai.org/assets/$(ls client/dist/assets | grep '^index-.*\.js$') | grep -i 'content-encoding\|cache-control'
curl -sI https://www.shri-ai.org/shri-ai-logo.webp | grep -i location  # -> /images/brand/…
```
