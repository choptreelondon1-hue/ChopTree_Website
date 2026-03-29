import { MessageCircle } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/whatsapp";

const whatsappHref = buildWhatsAppHref(
  "Hi Chop Tree London, I'd like a quote. I can share photos of the job here."
);

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-4 py-3 shadow-xl shadow-black/20 hover:brightness-95 transition-all"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp Quote</span>
    </a>
  );
}
