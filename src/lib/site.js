// Contact details and navigation shared by every page.
export const PHONE_TEL = "tel:+919111832003";
export const PHONE_LABEL = "+91 9111 832 003";
// The WhatsApp number on the site (digits with country code). NEXT_PUBLIC_WHATSAPP_NUMBER sets it at
// build time; the company's WhatsApp app (the desk) must answer on this same number.
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919111832003").replace(/\D/g, "");
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * wa.me link with a first message the WhatsApp app reads: "(Website: <page>)" at the end, and on a
 * building's page "Hi, I'd like details about <building>." before it. Keep this wording: the app
 * matches it (server/src/integrations/website.js in the WhatsApp app).
 */
export function whatsappLink({ page = "/", property = "" } = {}) {
  const path = String(page || "/").split(/[?#]/)[0].replace(/\s+/g, "").slice(0, 200) || "/";
  const name = String(property || "").replace(/\s+/g, " ").replace(/[().]/g, "").trim().slice(0, 120);
  const text = name ? `Hi, I'd like details about ${name}. (Website: ${path})` : `Hi, I have a question. (Website: ${path})`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
export const EMAIL = "Officeonrentindore@gmail.com";
export const ADDRESS = "Gravity Mall, Plot-27, Mechanic Nagar, Scheme No. 54, Indore, Madhya Pradesh 452011";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Gravity+Mall%2C+Plot+27%2C+Mechanic+Nagar%2C+Scheme+No+54%2C+Indore%2C+Madhya+Pradesh+452011";

export const SPACE_ITEMS = [
  { label: "Ready to Move Offices", href: "/ready-to-move" },
  { label: "New Commercial Building", href: "/new-commercial-building" },
  { label: "Retail Shops / Showrooms", href: "/retail-shops-showrooms" },
  { label: "Hostels", href: "/hostels" },
  { label: "Hotels", href: "/hotels" },
];

export const DESKTOP_NAV = [
  { label: "Home", href: "/" },
  { label: "Spaces", href: "/spaces", items: SPACE_ITEMS },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const MOBILE_NAV = [
  { label: "Home", href: "/" },
  { label: "Spaces", href: "/spaces", items: SPACE_ITEMS },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Plans", href: "/plans" },
  { label: "Pricing", href: "/pricing" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

function trimSlash(path) {
  return path === "/" ? path : path.replace(/\/+$/, "");
}

/** True when `pathname` is `href` or a page under it ("/" matches only the home page). */
export function isActivePath(pathname, href) {
  if (href.startsWith("#")) return false;
  const current = trimSlash(pathname || "/");
  const target = trimSlash(href);
  return target === "/" ? current === "/" : current === target || current.startsWith(`${target}/`);
}
