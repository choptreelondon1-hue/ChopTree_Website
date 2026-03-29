"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { X, Phone, MessageCircle, ClipboardList } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/whatsapp";

const DISMISS_KEY = "ctl_marketing_popup_dismissed";
const DISMISS_WINDOW_MS = 24 * 60 * 60 * 1000;

export default function MarketingPopup() {
  const [open, setOpen] = useState(false);

  const whatsappHref = useMemo(
    () =>
      buildWhatsAppHref(
        "Hi Chop Tree London, don't beat around the bush. I'd like a quote and can share photos here."
      ),
    []
  );

  useEffect(() => {
    const raw = window.localStorage.getItem(DISMISS_KEY);
    const dismissedAt = raw ? Number(raw) : 0;
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_WINDOW_MS) return;

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close popup"
        className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"
        onClick={close}
      />

      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-brand-dark text-white shadow-2xl">
        <button
          type="button"
          aria-label="Close popup"
          onClick={close}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="p-6 sm:p-7">
          <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
            Quick Quote
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
            Don&apos;t beat around the bush.
            <br />
            It&apos;s time to Chop Tree.
          </h3>
          <p className="text-white/75 mb-6">
            Fast response. Free quotation. Send photos on WhatsApp and get moving today.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold hover:brightness-95 transition-all"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="tel:+447398978210"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 py-3 font-semibold hover:bg-white/20 transition-all"
            >
              <Phone size={16} />
              Call
            </a>
            <Link
              href="/contact"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-3 font-semibold hover:bg-brand-orange-hover transition-all"
            >
              <ClipboardList size={16} />
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
