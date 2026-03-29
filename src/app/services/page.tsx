import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, ChevronRight, Scissors, TreePine, Circle, ArrowUpFromLine } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Tree Services",
  description:
    "Full range of professional tree services in London: tree surgery, tree removal, stump removal, and crown lifting. Qualified arborists, fully insured. Free quotes.",
  alternates: { canonical: "https://choptreelondon.com/services" },
};

const services = [
  {
    id: "tree-surgery",
    icon: Scissors,
    title: "Tree Surgery",
    tagline: "Expert surgical care for healthy, beautiful trees",
    description:
      "Our qualified arborists carry out all types of surgical pruning, deadwooding, and health assessments. We work safely at height using professional equipment, and tailor our approach to the specific needs of each tree.",
    features: [
      "Crown thinning and reduction",
      "Deadwood removal",
      "Formative pruning for young trees",
      "Hazard assessment and reporting",
      "Work to BS 3998 standard",
    ],
    image: "/images/tree-surgery.jpg",
  },
  {
    id: "tree-removal",
    icon: TreePine,
    title: "Tree Removal",
    tagline: "Safe, controlled removal — every detail discussed upfront",
    description:
      "Whether it's a dangerous tree, one that's outgrown its space, or simply unwanted, our team will remove it safely and cleanly. We take a customised approach to every project, discussing every detail before we begin so there are no surprises.",
    features: [
      "Full tree felling and dismantling",
      "Section felling in confined spaces",
      "Clearance of all arisings",
      "Detailed quote before any work starts",
      "Emergency removal available",
    ],
    image: "/images/tree-removal.jpg",
  },
  {
    id: "stump-removal",
    icon: Circle,
    title: "Stump Removal",
    tagline: "Complete stump grinding at highly competitive rates",
    description:
      "We specialise in stump grinding and removal using powerful, modern machinery. Leave your garden clean and ready for replanting, landscaping, or turfing. We offer this service at extremely competitive rates without compromising on quality.",
    features: [
      "Stump grinding to below ground level",
      "Chip and debris clearance",
      "Site left tidy and ready for use",
      "Available as a standalone service",
      "Competitive pricing guaranteed",
    ],
    image: "/images/stump-removal.jpg",
  },
  {
    id: "crown-lifting",
    icon: ArrowUpFromLine,
    title: "Crown Lifting",
    tagline: "Raise the canopy, improve light, preserve the tree",
    description:
      "Crown lifting removes the lower branches of a tree to increase clearance below, improve natural light, and enhance the appearance of the tree — all without damaging its natural structure or long-term health.",
    features: [
      "Removal of lower branches to a specified height",
      "Improves light levels and air circulation",
      "Maintains the tree's natural form",
      "Ideal for trees near buildings, roads, or pathways",
      "Carried out to British Standards",
    ],
    image: "/images/crown-lifting.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="section-label mb-3 text-brand-orange">What We Offer</p>
          <h1 className="text-display-lg font-extrabold text-white mb-4">
            Our Tree Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Professional, fully insured arborist services across all London boroughs.
            Free quotations on every job.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-site px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-orange-pale flex items-center justify-center">
                        <Icon size={20} className="text-brand-orange" />
                      </div>
                      <p className="section-label">{service.title}</p>
                    </div>

                    <h2 className="text-display-md font-bold text-brand-dark mb-3">
                      {service.tagline}
                    </h2>
                    <p className="text-brand-mid leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle size={17} className="text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-brand-dark text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact" className="btn-primary">
                        Get a Quote
                        <ChevronRight size={16} />
                      </Link>
                      <a href="tel:+447826151347" className="btn-secondary">
                        <Phone size={16} />
                        Call Us
                      </a>
                    </div>
                  </div>
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
