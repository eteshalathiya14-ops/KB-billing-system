import { useState, useEffect, useRef } from "react";
import { Star, Quote, TrendingUp,  } from "lucide-react";

const BRAND = "#633CDD";

const REVIEWS = [
  {
    name: "Rajesh Patel",
    role: "Owner",
    business: "Patel Kirana Store",
    city: "Surat, Gujarat",
    avatar: "RP",
    color: "#633CDD",
    rating: 5,
    review:
      "We used to create bills manually, which caused mistakes and wasted time. With KB Billing, invoices are generated within seconds and GST is calculated automatically. It has made our work much faster and more accurate.",
    metric: { label: "Billing time reduced", value: "90%" },
  },
  {
    name: "Priya Mehta",
    role: "Manager",
    business: "Mehta Fashion House",
    city: "Ahmedabad, Gujarat",
    avatar: "PM",
    color: "#db2777",
    rating: 5,
    review:
      "Managing size and color-wise stock for our clothing store was difficult before. KB Billing made inventory tracking simple with barcode billing and low stock alerts. It works perfectly for fashion businesses.",
    metric: { label: "Stock accuracy improved", value: "100%" },
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Proprietor",
    business: "Kumar Medical Store",
    city: "Surat, Gujarat",
    avatar: "SK",
    color: "#0e9f6e",
    rating: 5,
    review:
      "Expiry date management is extremely important in a medical store. KB Billing automatically tracks expiry dates and batch numbers, helping us avoid selling expired medicines completely.",
    metric: { label: "Expired medicines sold", value: "Zero" },
  },
  {
    name: "Amit Shah",
    role: "Owner",
    business: "Shah Electronics",
    city: "Vadodara, Gujarat",
    avatar: "AS",
    color: "#0891b2",
    rating: 5,
    review:
      "KB Billing is excellent for IMEI tracking and warranty management. Customer records stay organized and invoices can be shared directly on WhatsApp. Our customers are very happy with the service.",
    metric: { label: "Customer satisfaction", value: "98%" },
  },
  {
    name: "Sunita Verma",
    role: "Owner",
    business: "Glow Salon & Spa",
    city: "Surat, Gujarat",
    avatar: "SV",
    color: "#d97706",
    rating: 5,
    review:
      "Appointment booking, staff commission tracking, and memberships are all managed in one place now. Earlier everything was manual, but KB Billing automated our operations and increased revenue significantly.",
    metric: { label: "Revenue increase", value: "40%" },
  },
  {
    name: "Mohammed Raza",
    role: "Partner",
    business: "Raza Wholesale Traders",
    city: "Surat, Gujarat",
    avatar: "MR",
    color: "#059669",
    rating: 5,
    review:
      "Tracking credit payments in wholesale business used to be a major challenge. KB Billing’s party-wise ledger and credit limit features helped us manage payments efficiently without missing any dues.",
    metric: { label: "Missed payments", value: "Zero" },
  },
];

const SUCCESS_STORIES = [
  {
    business: "Patel Kirana Network",
    city: "Surat",
    color: "#633CDD",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    before: "Manual billing, frequent errors, 2-hour daily reconciliation",
    after: "10-second billing, zero errors, real-time reports",
    stats: [
      { label: "Time saved daily", value: "2 hrs" },
      { label: "Billing errors", value: "0%" },
      { label: "Revenue tracked", value: "₹50L+" },
    ],
  },
  {
    business: "Mehta Restaurant Chain",
    city: "Ahmedabad",
    color: "#db2777",
    bg: "#fdf2f8",
    border: "#fbcfe8",
    before: "Paper KOT system, wrong orders, billing delays during rush hours",
    after: "Digital KOT, zero wrong orders, 2-minute table billing",
    stats: [
      { label: "Order accuracy", value: "100%" },
      { label: "Table billing time", value: "2 min" },
      { label: "Monthly orders", value: "3,000+" },
    ],
  },
  {
    business: "Gujarat Electronics Hub",
    city: "Vadodara",
    color: "#0891b2",
    bg: "#f0f9ff",
    border: "#bae6fd",
    before: "Manual IMEI records in register, warranty tracking was impossible",
    after: "Digital IMEI tracking, automated warranty alerts, GST compliance",
    stats: [
      { label: "Warranty claims resolved", value: "100%" },
      { label: "GST compliance", value: "Perfect" },
      { label: "Customer retention", value: "+35%" },
    ],
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={14}
          fill={i <= rating ? "#f59e0b" : "none"}
          stroke={i <= rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, active }) {
  return (
    <div
      className="flex-shrink-0 rounded-3xl p-6 transition-all duration-500"
      style={{
        width: "320px",
        background: "#fff",
        border: `1.5px solid ${active ? review.color + "40" : "#f3f4f6"}`,
        boxShadow: active ? `0 20px 48px ${review.color}18` : "0 2px 8px rgba(0,0,0,0.04)",
        transform: active ? "scale(1.02)" : "scale(0.97)",
        opacity: active ? 1 : 0.7,
      }}
    >
      <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4"
        style={{ background: review.color + "12" }}>
        <Quote size={16} style={{ color: review.color }} strokeWidth={2} />
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
        "{review.review}"
      </p>

      <div className="rounded-2xl px-4 py-3 mb-5 flex items-center gap-3"
        style={{ background: review.color + "08", border: `1px solid ${review.color}20` }}>
        <TrendingUp size={16} style={{ color: review.color, flexShrink: 0 }} />
        <div>
          <p className="text-xs text-gray-400">{review.metric.label}</p>
          <p className="font-black text-sm" style={{ color: review.color }}>{review.metric.value}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}aa)` }}>
          {review.avatar}
        </div>
        <div>
          <p className="font-bold text-gray-800 text-sm">{review.name}</p>
          <p className="text-xs text-gray-400">{review.role} · {review.business}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} />
            <span className="text-xs text-gray-400">{review.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoPlay, setAutoPlay]   = useState(true);
  const scrollRef  = useRef(null);

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % REVIEWS.length);
    }, 3000);
    return () => clearInterval(t);
  }, [autoPlay]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[activeIdx];
    if (!card) return;

    const containerWidth      = container.offsetWidth;
    const cardOffsetLeft      = card.offsetLeft;
    const cardWidth           = card.offsetWidth;

    const targetScroll = cardOffsetLeft - (containerWidth / 2) + (cardWidth / 2);

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeIdx]);

  return (
    <section id="reviews" className="py-24" style={{ background: "#fafafa", overflow: "hidden" }}>

      {/* ── REVIEWS ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
            style={{ background: "rgba(99,60,221,0.08)", border: "1px solid rgba(99,60,221,0.2)", color: BRAND }}>
            <Star size={12} fill={BRAND} stroke="none" /> Customer Reviews
          </div>
          <h2 className="font-extrabold text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontFamily: "'Syne', sans-serif", lineHeight: 1.15 }}>
            Loved by{" "}
            <span style={{ color: BRAND }}>500+ Businesses</span>
            <br />across India
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            Real reviews from real business owners who transformed their operations with KB Billing.
          </p>

          <div className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full bg-white border border-gray-100 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#f59e0b" stroke="none" />)}
            </div>
            <span className="font-black text-gray-900 text-base">4.9</span>
            <span className="text-gray-400 text-sm">/ 5.0 · 500+ reviews</span>
          </div>
        </div>

        {/*  overflow-x: auto on container only — not touching window scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 pb-4 snap-x snap-mandatory"
          style={{
            overflowX: "auto",
            overflowY: "hidden",   // ← page scroll prevent
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          onTouchStart={() => setAutoPlay(false)}
          onTouchEnd={() => setTimeout(() => setAutoPlay(true), 2000)}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="snap-center"
              style={{ cursor: "pointer" }}
              onClick={() => setActiveIdx(i)}
            >
              <ReviewCard review={r} active={i === activeIdx} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === activeIdx ? "24px" : "8px",
                height:     "8px",
                background: i === activeIdx ? BRAND : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── SUCCESS STORIES ── */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
            style={{ background: "rgba(99,60,221,0.08)", border: "1px solid rgba(99,60,221,0.2)", color: BRAND }}>
            <TrendingUp size={12} /> Success Stories
          </div>
          <h2 className="font-extrabold text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontFamily: "'Syne', sans-serif", lineHeight: 1.15 }}>
            Real Results,{" "}
            <span style={{ color: BRAND }}>Real Growth</span>
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto">
            See how businesses transformed their operations with KB Billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div key={story.business}
              className="rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: story.border, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

              <div className="px-6 pt-6 pb-5" style={{ background: story.bg }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: "#fff", boxShadow: `0 4px 12px ${story.color}20` }}>
                    {story.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{story.business}</p>
                    <p className="text-xs text-gray-400">{story.city}, Gujarat</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl p-3 bg-white/60">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Before KB Billing</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{story.before}</p>
                  </div>
                  <div className="rounded-xl p-3" style={{ background: story.color + "0f" }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: story.color }}>After KB Billing</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{story.after}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-5 bg-white grid grid-cols-3 gap-3">
                {story.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-black text-base" style={{ color: story.color, fontFamily: "'Syne', sans-serif" }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Hide scrollbar inside card container */
        #reviews div[style*="overflow"] ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}