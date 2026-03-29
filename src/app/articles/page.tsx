import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Tree Care Advice & Guides",
  description:
    "Free tree care guides from Chop Tree London covering pruning, removals, stump grinding, crown lifting, and practical advice for London homeowners.",
  alternates: { canonical: "https://choptreelondon.com/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="pt-32 pb-14 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="section-label mb-3 text-brand-orange">Knowledge Hub</p>
          <h1 className="text-display-lg font-extrabold text-white mb-4">
            Tree Care Advice for London Homes
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical, no-nonsense guides to help you plan tree work safely and avoid costly mistakes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-brand-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
                    {article.borough} · {article.readTime}
                  </p>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-brand-mid leading-relaxed mb-5">{article.description}</p>
                  <Link href={`/articles/${article.slug}`} className="inline-flex items-center gap-1 text-brand-orange font-semibold">
                    Read article
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
