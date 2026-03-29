import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="section-padding bg-brand-orange">
      <div className="container-site text-center">
        <Reveal>
          <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-display-md font-extrabold text-white mb-5">
            Get Your Free Quote Today
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            No obligation. No hidden fees. Just expert advice and a fair price for any tree work across London.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-8 py-4 rounded-lg hover:bg-brand-orange-pale transition-colors shadow-lg text-base"
            >
              <MessageSquare size={18} />
              Request a Quote
            </Link>
            <a
              href="tel:+447826151347"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              <Phone size={18} />
              07826 151347
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
