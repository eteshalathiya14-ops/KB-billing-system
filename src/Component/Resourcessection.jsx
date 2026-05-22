import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Clock,
  Tag,
  BookOpen,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";

const accent = "#7C3AED";
const accentLight = "#F3E8FF";

// ─── ARTICLES ────────────────────────────────────────────────
const ARTICLES = [
  {
    id: 1,
    tag: "GST Tips",
    tagIcon: Tag,
    title: "5 GST Invoice Mistakes Every Small Business Must Avoid",
    excerpt:
      "Small business owners often get trapped in these common GST mistakes. Learn how to avoid them and stay safe from penalties.",
    readTime: "4 min read",
    date: "8 May 2026",
    featured: true,
    gradient: "from-[#5B2EFF] via-[#7C3AED] to-[#4338CA]",
    author: "KB Billing Team",
    content: [],
  },
  {
    id: 2,
    tag: "Growth",
    tagIcon: TrendingUp,
    title: "How a Kirana Store Doubled Revenue in 6 Months — Real Data",
    excerpt:
      "A Vadodara kirana owner used KB Billing to double his revenue in 6 months. His full story is here.",
    readTime: "6 min read",
    date: "3 May 2026",
    featured: false,
    author: "KB Billing Team",
    content: [],
  },
  {
    id: 3,
    tag: "How-To",
    tagIcon: Zap,
    title: "How to Accept UPI Payments in Your Store — Step by Step",
    excerpt:
      "Customers are paying less cash. Setting up UPI takes just 2 minutes — the full process is explained here.",
    readTime: "3 min read",
    date: "28 Apr 2026",
    featured: false,
    author: "KB Billing Team",
    content: [],
  },
  {
    id: 4,
    tag: "Business",
    tagIcon: Users,
    title: "Customer Loyalty Programs: Are They Worth It for Small Businesses?",
    excerpt:
      "A points system brings customers back — but it needs to be set up the right way. This article explains how.",
    readTime: "5 min read",
    date: "22 Apr 2026",
    featured: false,
    author: "KB Billing Team",
    content: [],
  },
  {
    id: 5,
    tag: "Feature",
    tagIcon: BookOpen,
    title: "Why Cloud Backup Matters — A Real Incident That Changed Everything",
    excerpt:
      "A retailer's laptop was stolen — but because of KB Billing's cloud backup, not a single transaction was lost.",
    readTime: "4 min read",
    date: "15 Apr 2026",
    featured: false,
    author: "KB Billing Team",
    content: [],
  },
];

// ─── RESOURCES GRID ──────────────────────────────────────────
// ...existing imports...

function ResourcesGrid({ onSelect }) {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <section className="bg-gray-50 py-24 px-6" id="resources">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading Section */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2"
            style={{ background: accentLight, color: accent }}
          >
            Resources
          </span>
          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            Grow your business with<br />
            <span style={{ color: accent }}>actionable insights.</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base max-w-xl">
            Tips, guides and real stories — for small business owners.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {/* Featured */}
          <div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[360px] flex flex-col justify-end group cursor-pointer"
            onClick={() => onSelect(featured)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient}`} />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute top-8 left-8 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <Tag size={22} className="text-white" />
            </div>
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1.5 bg-white/20 border border-white/30 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  <Tag size={11} /> {featured.tag}
                </span>
                <span className="text-white/50 text-xs">{featured.readTime}</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-snug mb-3 group-hover:underline underline-offset-4">
                {featured.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-white text-sm font-bold">
                Read Article
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
            {rest.map((article) => {
              const TagIcon = article.tagIcon;
              return (
                <button
                  key={article.id}
                  onClick={() => onSelect(article)}
                  className="group flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-violet-100 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300 text-left bg-white w-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: accentLight }}
                  >
                    <TagIcon size={20} style={{ color: accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: accentLight, color: accent }}
                      >
                        <TagIcon size={9} /> {article.tag}
                      </span>
                      <span className="text-gray-400 text-[10px] flex items-center gap-1">
                        <Clock size={9} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 leading-snug mb-1 group-hover:text-violet-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-400">{article.date}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}

// ─── ROOT ────────────────────────────────────────────────────
export default function ResourcesSection() {
  const navigate = useNavigate();

  const handleSelect = (article) => {
    navigate(`/blog/${article.id}`);
  };

  return <ResourcesGrid onSelect={handleSelect} />;
}

