import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight, ShieldCheck, Star, MessageCircle } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";
import CountUpInView from "@/components/ui/CountUpInView";

/**
 * HeroHeadline
 * Renders explicit line breaks for predictable, responsive headline wrapping.
 */
function HeroHeadline({ text }: { text: string }) {
  return (
    <h1 className="text-display-xl font-extrabold text-white leading-[1.05] tracking-tight">
      {text.split("\n").map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {line}
        </span>
      ))}
    </h1>
  );
}

const stats = [
  { value: "6+", label: "Years in London" },
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Fully Insured" },
  { value: "5★", label: "Rated Service" },
];

export default function Hero() {
  const whatsappHref = buildWhatsAppHref(
    "Hi Chop Tree London, I'd like a free quote. Service needed: ____. Postcode: ____. I can share photos here."
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-brand-dark pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        {/* Gradient overlay — dark left, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-site px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-36 md:pb-40">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="max-w-2xl">
            {/* Label */}
            <Reveal delay={0.08} className="mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
                  Est. 2024 · Ealing, London
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.12} className="mb-6">
              <HeroHeadline text={"London's\nTrusted Tree\nSurgeons"} />
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={0.16}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Professional tree surgery, removal, and care across all London boroughs.
                Fully insured. Competitive rates. Free quotations.
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary text-base px-8 py-4 shadow-lg shadow-brand-orange/25">
                  Get a Free Quote
                  <ChevronRight size={18} />
                </Link>
                <a
                  href="tel:+447398978210"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200 text-base"
                >
                  <Phone size={18} />
                  07398 978210
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:brightness-95 transition-all duration-200 text-base"
                >
                  <MessageCircle size={18} />
                  WhatsApp Quote
                </a>
              </div>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4">
                {[
                  "Fully Insured",
                  "Free Quotations",
                  "Same-Week Service",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-white/70 text-sm font-medium"
                  >
                    <Star size={13} className="text-brand-orange fill-brand-orange" />
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="hidden lg:flex justify-end items-center">
            <Image
              src="/images/logo-brand-cutout.png"
              alt="Chop Tree London logo"
              width={520}
              height={832}
              className="w-[320px] xl:w-[420px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </Reveal>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-orange">
        <div className="container-site px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-4 md:py-5 text-center ${
                  i < stats.length - 1 ? "border-r border-white/20" : ""
                }`}
              >
                <div className="text-white text-2xl md:text-3xl font-extrabold leading-none">
                  <CountUpInView value={stat.value} />
                </div>
                <div className="text-white/80 text-xs font-medium mt-0.5 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
