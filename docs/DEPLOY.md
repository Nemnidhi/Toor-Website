# Deploying the website (OOR VPS)

The site is one Next.js process behind nginx. It must run as **one instance** (pm2 fork mode, not cluster): saves are queued inside the process and the enquiry sender runs on a timer in it.

Commands are run by hand on the server, one at a time. Never run the site as root.

## One-time setup

1. Linux user for the site (no login shell needed):
   `sudo adduser --system --group --home /srv/oor-website oorweb`
2. Data folder (content, uploads, enquiries, admin users) outside the code:
   `sudo mkdir -p /var/lib/oor-website && sudo chown oorweb:oorweb /var/lib/oor-website && sudo chmod 750 /var/lib/oor-website`
3. Code: clone the repository into `/srv/oor-website/app` as `oorweb`.
4. Settings: copy `.env.example` to `/srv/oor-website/app/.env.production` (owned by oorweb, mode 600). Put `CRM_LEADS_SECRET` in at a hidden prompt, never in chat or docs; the same value goes into the CRM's `WEBSITE_LEADS_SECRET`.
5. Build: `sudo -u oorweb -H bash -c 'cd /srv/oor-website/app && npm ci && npm run build'`
6. Start: `sudo -u oorweb -H bash -c 'cd /srv/oor-website/app && pm2 start npm --name oor-website -- start -- -p 3100 && pm2 save'`
7. First admin user (password typed at a hidden prompt):
   `sudo -u oorweb -H bash -c 'cd /srv/oor-website/app && DATA_DIR=/var/lib/oor-website node scripts/admin.mjs add <username> "<Name>"'`

On first start the site copies the original property list (`src/data/seed.json`) into `DATA_DIR/content.json`. From then on, `DATA_DIR` is the truth.

## nginx

```
server {
    server_name <site domain>;
    client_max_body_size 12m;            # photo uploads in /admin (10 MB each)
    location / {
        proxy_pass http://127.0.0.1:3100;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;          # used for the enquiry / sign-in rate limits
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
Then HTTPS with certbot as usual.

## Updating

`git pull`, `npm ci`, `npm run build`, `pm2 restart oor-website` (all as oorweb). Content in `DATA_DIR` is not touched. Enquiries waiting to send are kept on disk and go out after the restart.

## Backups

Back up `DATA_DIR` daily (content.json, history/, uploads/, leads/, admins.json, session.key). Restoring a property list: copy a file from `DATA_DIR/history/` over `content.json`.

## Checks after a deploy

- `/`, `/ready-to-move`, a building page and `/hostels` load.
- `/admin` asks for sign-in; signing in shows the overview.
- An enquiry from the contact form shows in the CRM as source **Website**, and under `/admin/enquiries` as "In the CRM".
