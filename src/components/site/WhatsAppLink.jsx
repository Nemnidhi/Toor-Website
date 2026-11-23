"use client";

import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/site";

/**
 * A link that opens WhatsApp with a first message already typed: the page it came from and, on a
 * building's page, the building. The company's WhatsApp app reads both, so the chat (and its CRM lead)
 * starts knowing what the customer was looking at. A page names its property with
 * data-wa-property="..." on any element (BuildingDetail does), or the link gets `property` directly.
 */
export default function WhatsAppLink({ property = "", children, ...rest }) {
  const pathname = usePathname() || "/";
  function onClick(event) {
    if (property) return;
    const named = document.querySelector("[data-wa-property]")?.getAttribute("data-wa-property");
    if (named) event.currentTarget.href = whatsappLink({ page: pathname, property: named });
  }
  return (
    <a href={whatsappLink({ page: pathname, property })} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
