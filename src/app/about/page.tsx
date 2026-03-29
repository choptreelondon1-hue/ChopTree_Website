import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, Clock, ThumbsUp, ChevronRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chop Tree London — a professional arborist business serving London since 2024. Based in Ealing, fully insured, and committed to quality.",
  alternates: { canonical: "https://choptreelondon.com/about" },
};

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every job is carried out to the highest professional standard. We follow British Standards (BS 3998) on all tree work.",
  },
  {
    icon: ThumbsUp,
    title: "Honest Pricing",
    description:
      "We provide detailed, transparent quotes with no hidden costs. You'll always know exactly what you're paying for.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description:
      "We turn up when we say we will, get the job done properly, and leave your property cleaner than we found it.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "We listen to what you need and work with you throughout the project. Your satisfaction is our measure of success.",
  },
];

const promises = [
  "Fully insured — public liability & employer's liability",
  "Qualified and experienced arborists",
  "Transparent, itemised quotes — no surprises",
  "All arisings cleared and site left spotless",
  "Available across all London boroughs",
  "Emergency and same-week service available",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="section-label mb-3 text-brand-orange">Our Story</p>
          <h1 className="text-display-lg font-extrabold text-white mb-4">
            About Chop Tree London
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            A London arborist business built on quality, honesty, and a genuine love of the work.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Chop Tree London team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-brand-orange rounded-2xl p-5 shadow-xl">
                <div className="text-white text-3xl font-extrabold leading-none">6+</div>
                <div className="text-white/85 text-xs font-medium mt-1">Years Serving London</div>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">Est. 2024</p>
              <h2 className="section-heading mb-5">
                Professionals You Can Count On
              </h2>
              <p className="text-brand-mid leading-relaxed mb-4">
                Choptree London was founded in 2024 with a simple mission: to bring professional,
                honest, and high-quality tree care to London homeowners and businesses. Based in
                Ealing, we have grown steadily by doing one thing well — delivering great work and
                earning the trust of our clients.
              </p>
              <p className="text-brand-mid leading-relaxed mb-4">
                Our team of experienced arborists handle everything from small pruning jobs to
                complex large-scale removals. We invest in the right equipment and training to
                make sure every job is done safely and to the highest standard.
              </p>
              <p className="text-brand-mid leading-relaxed mb-8">
                We&apos;re proud of our reputation across London and look forward to showing you
                the difference a truly professional tree service makes.
              </p>

              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="section-padding bg-brand-orange-pale">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Promise</p>
            <h2 className="section-heading mb-4">What You Can Always Expect</h2>
            <p className="text-brand-mid text-lg max-w-xl mx-auto leading-relaxed">
              Every job, every time — these are the standards we hold ourselves to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {promises.map((promise) => (
              <div key={promise} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-brand-border">
                <CheckCircle size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark text-sm font-medium">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-heading mb-4">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white border border-brand-border rounded-2xl p-6 text-center hover:border-brand-orange hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-pale flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">{value.title}</h3>
                  <p className="text-brand-mid text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
