import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Clock, Calendar,  CheckCircle,
  Tag, BookOpen, TrendingUp, Zap, Users,
} from "lucide-react";

const accent = "#7C3AED";
const accentLight = "#F3E8FF";
const gradient = "from-[#5B2EFF] via-[#7C3AED] to-[#4338CA]";

const ARTICLES = [
  {
    id: "1",
    tag: "GST Tips",
    tagIcon: Tag,
    title: "5 GST Invoice Mistakes Every Small Business Must Avoid",
    readTime: "4 min read",
    date: "8 May 2026",
    author: "KB Billing Team",
    content: [
      { type: "intro",     text: "GST compliance is non-negotiable for Indian businesses. Yet thousands of small business owners face notices and penalties every year — not because they're dishonest, but because of small, avoidable mistakes. Here are the 5 most common ones." },
      { type: "heading",   text: "1. Wrong GSTIN on Invoices" },
      { type: "paragraph", text: "Entering an incorrect GSTIN — either your own or your customer's — is one of the most common errors. This leads to mismatches in GSTR-2A and blocks your customer's input tax credit. Always double-check the GSTIN before saving an invoice. KB Billing auto-validates GSTINs in real time so you never enter a wrong one." },
      { type: "heading",   text: "2. Using the Wrong Invoice Date" },
      { type: "paragraph", text: "GST filing is date-sensitive. An invoice dated in the wrong month can cause a mismatch between your GSTR-1 and your customer's GSTR-2A. Always ensure your billing software captures the correct transaction date — not the date you opened the app." },
      { type: "heading",   text: "3. Applying the Wrong GST Rate" },
      { type: "paragraph", text: "India has five GST slabs: 0%, 5%, 12%, 18%, and 28%. Applying the wrong rate — even by mistake — means you're either overcharging your customer or underpaying the government. Both can lead to notices. Use HSN/SAC code-based auto-rate assignment to eliminate this risk." },
      { type: "heading",   text: "4. Not Issuing Credit Notes for Returns" },
      { type: "paragraph", text: "When a customer returns goods, you must issue a proper credit note — not just adjust the next invoice. Skipping credit notes distorts your GST liability and creates reconciliation issues during audits." },
      { type: "heading",   text: "5. Filing Returns Late (Even by a Day)" },
      { type: "paragraph", text: "Late filing attracts interest at 18% per annum plus a late fee of ₹50/day (₹20/day for nil returns). Set calendar reminders or use automated return reminders to stay on schedule. KB Billing sends you WhatsApp alerts before every due date." },
      { type: "callout",   text: "KB Billing auto-validates GSTINs, applies correct HSN-based tax rates, and sends filing reminders — so these 5 mistakes become impossible." },
    ],
  },
  {
    id: "2",
    tag: "Growth",
    tagIcon: TrendingUp,
    title: "How a Kirana Store Doubled Revenue in 6 Months — Real Data",
    readTime: "6 min read",
    date: "3 May 2026",
    author: "KB Billing Team",
    content: [
      { type: "intro",     text: "Rajesh Patel runs a mid-sized kirana store in Vadodara's Manjalpur area. In January 2026, he switched to KB Billing. By June 2026, his monthly revenue had gone from ₹3.2 lakh to ₹6.7 lakh. Here's exactly what changed." },
      { type: "heading",   text: "The Problem: No Visibility" },
      { type: "paragraph", text: "Before KB Billing, Rajesh was doing everything manually — handwritten bills, a notebook for credit customers, and no idea which products were actually making him money. He knew his store was busy, but he couldn't explain why his profits weren't growing." },
      { type: "heading",   text: "Step 1: Tracking Every Sale" },
      { type: "paragraph", text: "The first change was simple: every sale got a digital bill. Within two weeks, Rajesh discovered that 40% of his revenue came from just 12% of his products. He immediately increased shelf space for those items and stopped reordering slow-movers." },
      { type: "heading",   text: "Step 2: Reducing Credit Losses" },
      { type: "paragraph", text: "Rajesh had 67 customers with outstanding credit worth ₹1.1 lakh — money he had mentally written off. KB Billing's automatic WhatsApp reminders recovered ₹78,000 of that within 45 days. He also set credit limits so no single customer could go beyond ₹2,000 without paying first." },
      { type: "heading",   text: "Step 3: Running His First Loyalty Campaign" },
      { type: "paragraph", text: "Using KB Billing's customer segments, Rajesh identified his top 30 customers by purchase value. He sent them a WhatsApp message offering double loyalty points for one weekend. Footfall went up 34% that weekend — and many of those customers became regulars." },
      { type: "callout",   text: "The tools were always available. Rajesh just needed visibility — and that's exactly what KB Billing gave him." },
    ],
  },
  {
    id: "3",
    tag: "How-To",
    tagIcon: Zap,
    title: "How to Accept UPI Payments in Your Store — Step by Step",
    readTime: "3 min read",
    date: "28 Apr 2026",
    author: "KB Billing Team",
    content: [
      { type: "intro",     text: "UPI payments crossed 13 billion transactions in March 2026. If your store still doesn't accept UPI, you're losing customers to competitors who do. Here's how to set it up in KB Billing in under 2 minutes." },
      { type: "heading",   text: "Step 1: Link Your Bank Account" },
      { type: "paragraph", text: "Go to Settings → Payment Methods → UPI in your KB Billing dashboard. Enter your registered mobile number and select your bank. KB Billing supports all major Indian banks including SBI, HDFC, ICICI, Axis, and Kotak." },
      { type: "heading",   text: "Step 2: Generate Your Store QR Code" },
      { type: "paragraph", text: "Once your bank account is linked, click 'Generate QR'. You'll get a static QR code that you can print and place at your counter. You can also generate dynamic QR codes that are unique to each bill — this ensures every payment is auto-matched to the right invoice." },
      { type: "heading",   text: "Step 3: Enable Auto-Reconciliation" },
      { type: "paragraph", text: "Turn on 'Auto-reconcile UPI payments' in your payment settings. Now every time a customer pays via UPI, KB Billing automatically marks the invoice as paid and updates your daily sales report. No manual entry needed." },
      { type: "heading",   text: "Step 4: Test It" },
      { type: "paragraph", text: "Create a test invoice for ₹1 and scan the QR from your own phone. If the payment reflects instantly and the invoice is marked paid — you're ready. The whole setup takes under 2 minutes." },
      { type: "callout",   text: "Dynamic QR codes in KB Billing mean every payment is automatically matched to an invoice — zero manual reconciliation." },
    ],
  },
  {
    id: "4",
    tag: "Business",
    tagIcon: Users,
    title: "Customer Loyalty Programs: Are They Worth It for Small Businesses?",
    readTime: "5 min read",
    date: "22 Apr 2026",
    author: "KB Billing Team",
    content: [
      { type: "intro",     text: "Large retailers have run loyalty programs for decades. But are they practical for a kirana store, a salon, or a medical shop? The short answer: yes — if you keep it simple." },
      { type: "heading",   text: "What the Data Says" },
      { type: "paragraph", text: "Repeat customers spend 67% more per transaction than new ones. For a small business, increasing repeat visits by just 20% can grow revenue significantly without any increase in marketing spend." },
      { type: "heading",   text: "Keep It Simple: Points = Money" },
      { type: "paragraph", text: "The best loyalty programs for small businesses are the simplest ones. We recommend: 1 point for every ₹10 spent, and 100 points = ₹10 discount on the next purchase. Customers understand it immediately, and the math keeps your margins safe." },
      { type: "heading",   text: "What Doesn't Work" },
      { type: "paragraph", text: "Complex tier systems, confusing redemption rules, and points that expire too quickly all kill loyalty programs. If a customer has to think hard about how many points they have or when they expire, they'll stop caring." },
      { type: "heading",   text: "How KB Billing Automates It" },
      { type: "paragraph", text: "KB Billing automatically assigns loyalty points on every invoice, tracks each customer's balance, and sends a WhatsApp message when they're close to a redemption threshold. You don't have to manage anything manually." },
      { type: "callout",   text: "KB Billing's loyalty system runs fully automatically — points assigned, balances tracked, and redemption reminders sent via WhatsApp." },
    ],
  },
  {
    id: "5",
    tag: "Feature",
    tagIcon: BookOpen,
    title: "Why Cloud Backup Matters — A Real Incident That Changed Everything",
    readTime: "4 min read",
    date: "15 Apr 2026",
    author: "KB Billing Team",
    content: [
      { type: "intro",     text: "In February 2026, a retail store owner in Surat had his laptop stolen overnight. Three years of business data was on that machine. What happened next is a story about why cloud backup isn't optional." },
      { type: "heading",   text: "The Night Everything Could Have Been Lost" },
      { type: "paragraph", text: "Vikram Shah opened his shop at 9am to find the back door forced open and his laptop gone. His first thought wasn't about the laptop — it was about his data. Three years of customer credit records, 40,000+ invoices, and his entire product catalogue were on that machine." },
      { type: "heading",   text: "What Actually Happened" },
      { type: "paragraph", text: "Because Vikram used KB Billing, every transaction had been synced to the cloud in real time — every 5 minutes, automatically. He logged into KB Billing from a borrowed phone and saw his complete dashboard: every invoice, every customer, every pending payment. Nothing was lost." },
      { type: "heading",   text: "He Was Billing Again by 10am" },
      { type: "paragraph", text: "Vikram purchased a new laptop, installed KB Billing, logged in, and was back to full operation within an hour of opening. His customers didn't even know anything had happened. The stolen laptop became a minor inconvenience instead of a business-ending disaster." },
      { type: "heading",   text: "What This Means for Your Business" },
      { type: "paragraph", text: "Hardware fails. Laptops get stolen. Phones break. These things happen to every business eventually. KB Billing's cloud backup runs automatically every 5 minutes, encrypted with 256-bit security, with 99.9% uptime — so you never have to think about it." },
      { type: "callout",   text: "KB Billing backs up your data every 5 minutes, automatically. Your business survives hardware failure, theft, or any disaster." },
    ],
  },
];

export { ARTICLES };

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = ARTICLES.find(a => a.id === id);
  const TagIcon = article?.tagIcon;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Article not found.</p>
          <button onClick={() => navigate("/")} className="text-sm font-bold" style={{ color: accent }}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const related = ARTICLES.filter(a => a.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-white pt-12 pb-16 px-6">
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, #ede9fe 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <button
            onClick={() =>
              navigate("/", {
                state: {
                  scrollTo: "resources",
                },
              })
            }
            className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-medium mb-10 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: accentLight, color: accent }}>
              <TagIcon size={11} /> {article.tag}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400"><Clock size={11} /> {article.readTime}</span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400"><Calendar size={11} /> {article.date}</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">{article.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black" style={{ background: "linear-gradient(135deg, #5B2EFF, #7C3AED)" }}>KB</div>
              <div>
                <p className="text-sm font-bold text-gray-800">{article.author}</p>
                <p className="text-xs text-gray-400">kbbilling.in</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-6">
          {article.content.map((block, i) => {
            if (block.type === "intro")     return <p key={i} className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 pl-5" style={{ borderColor: accent }}>{block.text}</p>;
            if (block.type === "heading")   return <h2 key={i} className="text-xl font-black text-gray-900 pt-4">{block.text}</h2>;
            if (block.type === "paragraph") return <p key={i} className="text-gray-600 leading-relaxed text-base">{block.text}</p>;
            if (block.type === "callout")   return (
              <div key={i} className="rounded-2xl p-6 flex gap-4 items-start" style={{ background: accentLight }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: accent }}>
                  <CheckCircle size={15} className="text-white" />
                </div>
                <p className="text-sm font-semibold leading-relaxed" style={{ color: accent }}>{block.text}</p>
              </div>
            );
            return null;
          })}
        </div>

        {/* CTA */}
        <div className={`bg-gradient-to-r ${gradient} mt-16 rounded-3xl p-10 text-center`}>
          <h3 className="text-2xl font-black text-white mb-3">Try KB Billing Free for 14 Days</h3>
          <p className="text-white/70 mb-6 text-sm">No credit card needed. Full access from day one.</p>
          <a
            href="https://wa.me/918780503913"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-block"
            style={{ color: accent, textDecoration: "none" }}
          >
            Start Free Trial →
          </a>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h3 className="text-lg font-black text-gray-900 mb-6">More Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((a) => {
              const AIcon = a.tagIcon;
              return (
                <button
                  key={a.id}
                  onClick={() => { navigate(`/blog/${a.id}`); window.scrollTo(0, 0); }}
                  className="group text-left p-4 rounded-2xl border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all"
                >
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2" style={{ background: accentLight, color: accent }}>
                    <AIcon size={9} /> {a.tag}
                  </span>
                  <p className="text-sm font-bold text-gray-800 group-hover:text-violet-700 transition-colors leading-snug mb-1">{a.title}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={9} /> {a.readTime}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}