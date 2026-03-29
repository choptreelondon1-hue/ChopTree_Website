import Link from "next/link";
import Image from "next/image";
import { Scissors, TreePine, Circle, ArrowUpFromLine, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    id: "tree-surgery",
    icon: Scissors,
    title: "Tree Surgery",
    description:
      "Expert surgical pruning and care by qualified arborists. We work safely at height using the latest equipment to keep your trees healthy and beautiful.",
    href: "/services#tree-surgery",
    image: "/images/tree-surgery.jpg",
  },
  {
    id: "tree-removal",
    icon: TreePine,
    title: "Tree Removal",
    description:
      "Safe, controlled removal of unwanted or dangerous trees. Every project is fully planned and discussed before we begin, so you know exactly what to expect.",
    href: "/services#tree-removal",
    image: "/images/tree-removal.jpg",
  },
  {
    id: "stump-removal",
    icon: Circle,
    title: "Stump Removal",
    description:
      "Complete stump grinding and removal at extremely competitive rates. Leave no trace of a felled tree — clean, fast, and tidy.",
    href: "/services#stump-removal",
    image: "/images/stump-removal.jpg",
  },
  {
    id: "crown-lifting",
    icon: ArrowUpFromLine,
    title: "Crown Lifting",
    description:
      "Raise the canopy of your trees to improve light, clearance, and aesthetics — while preserving the natural shape and health of the tree.",
    href: "/services#crown-lifting",
    image: "/images/crown-lifting.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="section-heading mb-4">
            Complete Tree Care Services
          </h2>
          <p className="text-brand-mid text-lg max-w-xl mx-auto leading-relaxed">
            From routine pruning to full removals, our experienced team handles it all —
            safely, efficiently, and at a price that's fair.
          </p>
        </Reveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={0.04 * index}>
                <Link
                  href={service.href}
                  className="group relative bg-white border border-brand-border rounded-2xl overflow-hidden hover:border-brand-orange hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-pale flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-brand-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-mid text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 mt-4 text-brand-orange text-sm font-semibold">
                    Learn more
                    <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-10">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ChevronRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
