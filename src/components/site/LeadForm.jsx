"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon, PhoneIcon, UserRoundIcon } from "lucide-react";
import { WORKSPACE_TYPES, TEAM_SIZES, TIMELINES } from "@/lib/leadOptions";

const iconClass = "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#078fa1]";

/**
 * The enquiry form. Every submission goes to /api/leads, which saves it on the server first and then
 * hands it to the CRM (retrying until the CRM has it). `property` names the building when the form
 * sits on a building's page.
 */
export default function LeadForm({ variant, property = "" }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const mobile = variant === "mobile";
  const hero = variant === "hero";

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.page = pathname || "/";
    payload.whatsappConsent = payload.whatsappConsent === "yes";
    if (property) payload.property = property;
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Please check the form and try again.");
      }
      setStatus("success");
      setMessage("Thanks. Our team will call you back shortly.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const selectClass = hero
    ? "min-h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-[#071225] outline-none transition focus:border-[#078fa1] focus:ring-2 focus:ring-[#078fa1]/15"
    : "min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-[#071225] outline-none transition focus:border-[#078fa1] focus:ring-2 focus:ring-[#078fa1]/15";
  const inputClass = hero
    ? "min-h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-xs font-bold text-[#071225] outline-none transition focus:border-[#078fa1] focus:ring-2 focus:ring-[#078fa1]/15"
    : "min-h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm font-semibold text-[#071225] outline-none transition focus:border-[#078fa1] focus:ring-2 focus:ring-[#078fa1]/15";
  const labelClass = hero ? "grid gap-1 text-[11px] font-black text-slate-700" : "grid gap-1.5 text-xs font-black text-slate-700";

  return (
    <form
      onSubmit={onSubmit}
      className={`text-[#071225] ${hero ? "rounded-[1.6rem] border border-white bg-white/96 p-4 shadow-[0_20px_55px_rgba(8,24,39,0.16)] backdrop-blur sm:p-5" : `rounded-2xl bg-white shadow-[0_18px_42px_rgba(8,24,39,0.16)] ${mobile ? "p-4" : "p-5 sm:p-6"}`}`}
    >
      {hero ? (
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-black uppercase text-[#078fa1]">Book a free tour</div>
            <p className="mt-1 text-xs font-bold leading-5 text-slate-500">Get pricing, availability, and a callback.</p>
          </div>
          <span className="rounded-full bg-[#071225] px-3 py-1.5 text-xs font-black text-white">Indore</span>
        </div>
      ) : null}
      {/* Left empty by people; filled in by bots. The server drops any enquiry that has it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <div className={mobile ? "grid gap-3" : hero ? "grid gap-3 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        <label className={labelClass}>
          Full Name
          <span className="relative">
            <UserRoundIcon className={iconClass} aria-hidden="true" />
            <input name="name" type="text" required maxLength={120} placeholder="Your name" className={inputClass} />
          </span>
        </label>
        <label className={labelClass}>
          Phone Number
          <span className="relative">
            <PhoneIcon className={iconClass} aria-hidden="true" />
            <input name="phone" type="tel" required maxLength={20} placeholder="Your phone number" className={inputClass} />
          </span>
        </label>
        {hero ? null : (
          <label className={labelClass}>
            Email
            <span className="relative">
              <MailIcon className={iconClass} aria-hidden="true" />
              <input name="email" type="email" maxLength={160} placeholder="name@company.com" className={inputClass} />
            </span>
          </label>
        )}
        <label className={labelClass}>
          Workspace Type
          <select name="workspaceType" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select workspace
            </option>
            {WORKSPACE_TYPES.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Team Size
          <select name="teamSize" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select size
            </option>
            {TEAM_SIZES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Move-in Timeline
          <select name="timeline" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Select timeline
            </option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      {hero ? null : (
        <label className="mt-3 grid gap-1.5 text-xs font-black text-slate-700 sm:mt-4">
          Requirements
          <textarea
            name="requirements"
            rows={mobile ? 3 : 4}
            maxLength={1000}
            placeholder="Preferred location, budget, tour time, or anything else"
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-[#071225] outline-none transition focus:border-[#078fa1] focus:ring-2 focus:ring-[#078fa1]/15"
          />
        </label>
      )}
      <label className={`flex items-start gap-2 font-bold text-slate-600 ${hero ? "mt-3 text-[11px]" : "mt-3 text-xs sm:mt-4"}`}>
        <input name="whatsappConsent" type="checkbox" value="yes" className="mt-0.5 h-4 w-4 shrink-0 accent-[#25D366]" />
        <span>Send me updates about this enquiry on WhatsApp (you can reply STOP at any time).</span>
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className={`flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff7a00] px-5 font-black text-white shadow-[0_14px_28px_rgba(255,122,0,0.25)] transition hover:bg-[#f06f00] disabled:cursor-not-allowed disabled:opacity-70 ${hero ? "mt-3 min-h-10 text-xs" : "mt-4 min-h-12 text-sm"}`}
      >
        {status === "loading" ? "Submitting..." : "Submit Enquiry"}
        {status === "success" ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
      </button>
      {message ? (
        <p role="status" className={`mt-3 rounded-xl px-3 py-2 text-center text-xs font-bold ${status === "success" ? "bg-[#e7f8ef] text-[#116b38]" : "bg-[#fff0ed] text-[#a1321e]"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
