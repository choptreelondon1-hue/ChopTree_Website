import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const promises = [
  "Fully insured — public liability & employer's liability",
  "Qualified arborists with years of hands-on experience",
  "Transparent pricing — no hidden costs, ever",
  "Same-week service available across all London boroughs",
  "Clean and tidy — we leave your property spotless",
];

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-brand-orange-pale">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1" delay={0.05}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Chop Tree London arborist team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="text-2xl font-extrabold text-brand-orange leading-none">2019</div>
                <div className="text-xs font-medium text-brand-mid mt-0.5">Established in London</div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange rounded-2xl -z-10 opacity-20" />
          </Reveal>

          {/* Content */}
          <Reveal className="order-1 lg:order-2" delay={0.12}>
            <p className="section-label mb-3">About Us</p>
            <h2 className="section-heading mb-5">
              Professional Arborists You Can Trust
            </h2>
            <p className="text-brand-mid leading-relaxed mb-4">
              Choptree London is a professional arborist business that has been providing expert
              tree services across London since 2019. Based in Ealing, our experienced team can
              handle everything from small repairs to large-scale projects.
            </p>
            <p className="text-brand-mid leading-relaxed mb-8">
              We take pride in every job and always strive to ensure our clients are completely
              satisfied — from the first call to the final clean-up.
            </p>

            {/* Promise list */}
            <ul className="space-y-3 mb-8">
              {promises.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-brand-orange flex-shrink-0 mt-0.5"
                  />
                  <span className="text-brand-dark text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              More About Us
              <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
