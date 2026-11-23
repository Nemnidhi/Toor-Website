# The Office on Rent: website

The public website (offices, commercial buildings, retail, hostels, hotels in Indore). It is a Next.js rebuild of the earlier site and adds two things:

- **Every enquiry becomes a CRM lead.** Forms post to `/api/leads`. The site saves the enquiry to disk, then sends it signed (HMAC-SHA256) to the CRM, and retries every minute until the CRM confirms (`src/lib/leads.js`, `src/instrumentation.js`).
- **An admin at `/admin`** where the client adds, edits, orders, hides and deletes properties and photos themselves (`src/app/admin`, `src/components/admin`).

## Run locally

```
dev.bat            # http://localhost:4310, data in .\data
```
Create a local admin with `node scripts/admin.mjs add <username> "<Name>"` (set `DATA_DIR=./data` first). To send enquiries to a CRM, set `CRM_LEADS_URL` and `CRM_LEADS_SECRET` in `.env.local`. Without them, enquiries wait in `data/leads/pending`.

## Where things are

| | |
|---|---|
| Pages | `src/app/(site)/...` (detail pages: `ready-to-move/[slug]`, `new-commercial-building/[slug]`) |
| Property data | `DATA_DIR/content.json`, first copied from `src/data/seed.json`; read and written via `src/lib/content.js` |
| Photos | Original ones in `public/assets/`; uploads in `DATA_DIR/uploads`, served at `/media/...` |
| Enquiries | `DATA_DIR/leads/pending` and `DATA_DIR/leads/sent` |
| Admin users | `DATA_DIR/admins.json` (scrypt hashes), managed with `scripts/admin.mjs` |
| Change log | `DATA_DIR/audit.log`, and the previous versions in `DATA_DIR/history/` |

Deploying: `docs/DEPLOY.md`. Open decisions: `docs/DECISIONS.md`.
