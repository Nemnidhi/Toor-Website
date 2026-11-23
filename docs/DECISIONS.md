# Decisions

## Made (23 Nov 2026)

- **Rebuilt in-house from the saved copy.** The original site (coworking-five-brown.vercel.app, built by an outside developer whose repository we do not have) was mirrored on 23 Nov 2026 and rebuilt here page by page: same pages, text, photos and look. Nothing is fetched from the old site at run time.
- **Every enquiry goes to the CRM.** All website forms post to `/api/leads`; the enquiry is saved to disk first, then sent signed to the CRM (`POST /api/integrations/website/leads`), and retried every minute until the CRM confirms. Source in the CRM: `WEBSITE`.
- **The client edits properties themselves** at `/admin` (separate sign-in, not linked from the site): buildings (ready to move / new commercial), the retail / hostel / hotel cards, photos, order, show / hide. Admin users are added on the server with `scripts/admin.mjs`.
- **Content lives outside the code** in `DATA_DIR` (JSON file + uploads), so a code update never overwrites the client's edits. Every save keeps the previous version (200 kept) and a line in `audit.log`.

## PENDING (owner to decide)

- **Lead type for coworking / hostel / hotel enquiries.** Today: Ready to Move, New Commercial and Retail enquiries arrive as `COMMERCIAL`; coworking choices (flex desk, dedicated desk, private cabin, meeting room, virtual office), hostels and hotels arrive **untyped** (still auto-assigned). This waits on the same parked CRM decision as the WhatsApp coworking leads. Change in `src/lib/leadOptions.js` once decided.
- **contact.theofficeonrent.com.** The old site loaded some photos from it; those are now served from this site (`public/assets/contact/`). Whether that site is merged into this one or deleted is decided after its data is copied.
- **Domain.** Which domain this site goes live on (and whether the Vercel address should redirect to it).
