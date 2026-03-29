import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { articles, getArticleBySlug } from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `https://choptreelondon.com/articles/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: [`https://choptreelondon.com${article.image}`],
    author: {
      "@type": "Organization",
      name: "Chop Tree London",
    },
    publisher: {
      "@type": "Organization",
      name: "Chop Tree London",
    },
    mainEntityOfPage: `https://choptreelondon.com/articles/${article.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <section className="pt-28 pb-10 bg-white">
        <article className="container-site px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link href="/articles" className="inline-flex items-center gap-1 text-brand-orange font-semibold mb-6">
            <ChevronLeft size={16} />
            Back to Articles
          </Link>

          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
            {article.borough} · {article.readTime}
          </p>
          <h1 className="text-display-lg font-extrabold text-brand-dark mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-brand-mid text-lg leading-relaxed mb-8">{article.description}</p>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
          </div>

          <div className="space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">{section.heading}</h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-brand-mid leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-brand-mid">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-brand-orange-pale border border-brand-orange-light p-6">
            <h3 className="text-xl font-bold text-brand-dark mb-2">Need a Fast Quote?</h3>
            <p className="text-brand-mid mb-4">
              Send your postcode and a few photos on WhatsApp for the quickest response.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Free Quote
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
