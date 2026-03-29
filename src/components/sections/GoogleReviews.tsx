import { Star, ExternalLink } from "lucide-react";

const googleReviewsUrl =
  "https://www.google.com/search?q=choptree+london&oq=choptree+london&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDINCAIQLhiDARixAxiABDINCAMQABixAxjJAxiABDINCAQQABiDARixAxiABDINCAUQLhjHARjRAxiABDIGCAYQRRg8MgYIBxBFGDzSAQg0NDEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x845f87be7aae5157:0xbed821d3c5e56bf5,1,,,,";

// Add real review quotes here once you copy/paste them from Google.
const reviews: Array<{ name: string; text: string }> = [];

export default function GoogleReviews() {
  return (
    <section className="section-padding bg-white border-t border-brand-border">
      <div className="container-site">
        <div className="text-center mb-10">
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
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, i) => (
              <article key={`${review.name}-${i}`} className="rounded-2xl border border-brand-border p-6 bg-white">
                <div className="flex items-center gap-1 text-brand-orange mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-brand-orange" />
                  ))}
                </div>
                <p className="text-brand-mid leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm font-semibold text-brand-dark">{review.name}</p>
                <p className="text-xs text-brand-mid mt-0.5">Google Review</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-brand-border p-6 text-center text-brand-mid mb-8">
            Top customer quotes will appear here from your Google profile.
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
