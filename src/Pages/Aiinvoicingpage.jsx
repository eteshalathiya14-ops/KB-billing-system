import { Bot, Zap, Shield, TrendingUp, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Aiinvoice from "../assets/fetures/Aiinvoice.png";

const accent      = "#7C3AED";
const accentLight = "#F3E8FF";
const gradient    = "from-[#5B2EFF] via-[#7C3AED] to-[#4338CA]";

const stats = [
  { value: "10x", label: "Faster Billing" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "0",   label: "Manual Errors" },
];

const benefits = [
  { icon: Zap,        title: "Instant Auto-Fill",  desc: "AI reads PDF or image and fills all invoice fields in under 2 seconds." },
  { icon: Shield,     title: "GST Compliant",       desc: "Every invoice auto-formatted to meet Indian GST standards. GSTIN auto-validated." },
  { icon: Bot,        title: "Smart Suggestions",   desc: "AI learns your customers and suggests items, prices, and discounts automatically." },
  { icon: TrendingUp, title: "Bulk Processing",     desc: "Process hundreds of invoices at once. Upload a folder, AI handles the rest." },
];

export default function AIInvoicingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} pt-16 pb-24 px-6`}>

        {/* Decorative glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.15) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(255,255,255,0.1) 0%, transparent 65%)" }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Back */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-10 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>

          {/* Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <div className="w-full">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <Bot size={14} className="text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">AI Invoicing</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
               Create invoices before you even blink   aaaaaa.
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our AI reads any PDF, image, or document and auto-fills every invoice field instantly.
                No more manual entry, no more errors.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-white">{s.value}</p>
                    <p className="text-white/60 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                    href="https://wa.me/918780503913"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    style={{ color: accent }}
                  >
                    Start Free Trial <ArrowRight size={15} />
                </a>
                <button className="flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-all backdrop-blur-sm">
                  <Play size={13} /> Watch Demo
                </button>
              </div>
            </div>

            {/* Right — Image */}
            <div className="w-full flex justify-center items-center py-8">
              <img
                src={Aiinvoice}
                alt="AI Invoicing Preview"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.25)) drop-shadow(0 6px 16px rgba(0,0,0,0.15))",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── Benefits ── */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>
            Why it works
          </p>
          <h2 className="text-3xl font-black text-gray-900">Everything you need with AI Invoicing</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const BIcon = b.icon;
            return (
              <div key={i} className="group p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                  style={{ background: accentLight }}>
                  <BIcon size={20} style={{ color: accent }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={`bg-gradient-to-r ${gradient} mx-6 mb-16 rounded-3xl p-10 text-center`}>
        <h3 className="text-2xl font-black text-white mb-3">Ready to try AI Invoicing?</h3>
        <p className="text-white/70 mb-6 text-sm">14-day free trial. No credit card needed.</p>
        <a
          href="https://wa.me/918780503913"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-block"
          style={{ color: accent }}
        >
          Start Free Trial →
        </a>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}