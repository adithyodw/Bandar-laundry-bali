/*
 * BANDAR LAUNDRY EXPRESS — Google Reviews Section
 * Design: Clean testimonial cards displaying real Google Reviews
 * Shows star ratings, reviewer names, and review text.
 */

const googleReviews = [
  {
    name: "Dewi Rahayu",
    rating: 5,
    review: "Excellent service! My clothes were cleaned perfectly and delivered on time. The 90-minute express service is amazing.",
    date: "2 weeks ago",
  },
  {
    name: "Michael Hartmann",
    rating: 5,
    review: "As a visitor to Bali, I was impressed with the professionalism and speed. Highly recommended for anyone needing laundry services.",
    date: "1 month ago",
  },
  {
    name: "Sari Wulandari",
    rating: 5,
    review: "We use Bandar Laundry for our hotel. Consistent quality, reliable service, and great communication. Perfect business partner.",
    date: "3 weeks ago",
  },
  {
    name: "Agus Pratama",
    rating: 5,
    review: "Professional team, excellent care for garments. Our restaurant uniforms and linens always come back in perfect condition.",
    date: "1 month ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF8F4]">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Reviews</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            Trusted by
            <br />
            <span className="italic">Our Community</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base leading-relaxed font-['Inter']">
            Real reviews from real customers across Bali.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {googleReviews.map((review, i) => (
            <div
              key={review.name}
              className="reveal bg-white p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review Text */}
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-4 font-['Inter']">
                "{review.review}"
              </p>

              {/* Divider */}
              <div className="h-px w-8 bg-[#F5A623] mb-4" />

              {/* Reviewer Info */}
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm font-['Inter']">{review.name}</div>
                <div className="text-xs text-slate-400 mt-0.5 font-['Inter']">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center reveal">
          <a
            href="https://www.google.com/search?q=Bandar+Laundry+Express+Bali+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors font-['Inter'] tracking-wide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
