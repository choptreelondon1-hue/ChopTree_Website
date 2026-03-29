import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { articles } from "@/lib/articles";

export default function ArticlesSnippet() {
  const topArticles = articles.slice(0, 3);

  return (
    <section className="section-padding bg-white border-t border-brand-border">
      <div className="container-site">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-3">Free Advice</p>
            <h2 className="section-heading">Helpful Tree Care Articles</h2>
          </div>
          <Link href="/articles" className="hidden sm:inline-flex btn-secondary">
            View All Articles
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topArticles.map((article) => (
            <article key={article.slug} className="border border-brand-border rounded-2xl overflow-hidden bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
                  {article.borough}
                </p>
                <h3 className="text-lg font-bold text-brand-dark mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-mid mb-4">{article.description}</p>
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center gap-1 text-brand-orange font-semibold">
                  Read article
                  <ChevronRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/articles" className="btn-secondary">
            View All Articles
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
