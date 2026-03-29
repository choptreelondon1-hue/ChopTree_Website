import { Star, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

const googleReviewsUrl =
  "https://www.google.com/search?q=choptree+london&oq=choptree+london&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDINCAIQLhiDARixAxiABDINCAMQABixAxjJAxiABDINCAQQABiDARixAxiABDINCAUQLhjHARjRAxiABDIGCAYQRRg8MgYIBxBFGDzSAQg0NDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x845f87be7aae5157:0xbed821d3c5e56bf5,1,,,,";

const reviews = [
  {
    name: "Joseph Barrett",
    timeAgo: "9 months ago",
    text:
      "Great bunch of guys and really reasonable down to earth prices. No knee jerking eyeballs watering Mickey Mouse quotation such as many of the other ones. Rick and Zahne smashed it and tidied up everything after. These guys are hard to beat. Great job guys;well done and keep up the good work.",
  },
  {
    name: "PETRIT S",
    timeAgo: "a year ago",
    text:
      "Zak and his team were wonderful and very helpful, they completed the work very fast and quoted the job at an amazing price really really happy. Would highly recommend Zak and his team to anyone looking for tree surgeons.",
  },
  {
    name: "Amy Braid",
    timeAgo: "8 months ago",
    text: "Reliable and friendly. Would recommend. Thank you zak",
  },
];

export default function GoogleReviews() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "TreeService",
    name: "Chop Tree London",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: review.text,
    })),
  };

  return (
    <section className="section-padding bg-white border-t border-brand-border">
      <div className="container-site">
        <JsonLd data={reviewsSchema} />
        <Reveal className="text-center mb-10">
          <p className="section-label mb-3">Google Reviews</p>
          <h2 className="section-heading mb-3">Rated 5.0 by Local Customers</h2>
          <div className="inline-flex items-center gap-2 text-brand-dark font-semibold">
            <div className="flex items-center gap-0.5 text-brand-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-brand-orange" />
              ))}
            </div>
            <span>5.0 average from 3 Google reviews</span>
          </div>
          <p className="text-sm text-brand-mid mt-3">Based on public Google reviews.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={0.04 * i} className="h-full">
              <article className="h-full rounded-2xl border border-brand-border p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-brand-orange">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} className="fill-brand-orange" />
                    ))}
                  </div>
                  <span className="text-xs text-brand-mid">{review.timeAgo}</span>
                </div>
                <p className="text-brand-mid leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-brand-dark">{review.name}</p>
                  <p className="text-xs text-brand-mid mt-0.5">Google Review</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap justify-center gap-4">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ExternalLink size={16} />
            Read All on Google
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink size={16} />
            Leave a Review
          </a>
        </Reveal>
      </div>
    </section>
  );
}
