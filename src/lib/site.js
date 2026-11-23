// Contact details and navigation shared by every page.
export const PHONE_TEL = "tel:+919111832003";
export const PHONE_LABEL = "+91 9111 832 003";
export const WHATSAPP_URL = "https://wa.me/919111832003";
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
