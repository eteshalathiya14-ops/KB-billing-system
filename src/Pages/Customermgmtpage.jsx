import { ShieldCheck, Users, Star, Zap, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import customer from "../assets/fetures/customer.png";

const accent      = "#7C3AED";
const accentLight = "#F3E8FF";
const gradient    = "from-[#5B2EFF] via-[#7C3AED] to-[#4338CA]";

const stats = [
  { value: "360°",    label: "Customer View" },
  { value: "Auto",    label: "Loyalty Points" },
  { value: "1-click", label: "WhatsApp Follow-up" },
];

const benefits = [
  { icon: Users,       title: "Complete History",  desc: "See every purchase, payment, and interaction for every customer." },
  { icon: Star,        title: "Loyalty Program",   desc: "Auto-assign points on every purchase. Customers come back for more." },
  { icon: ShieldCheck, title: "Credit Management", desc: "Set credit limits, track dues, and auto-remind customers on WhatsApp." },
  { icon: Zap,         title: "Smart Segments",    desc: "Group customers by purchase frequency, value, or location for targeted offers." },
];

export default function CustomerMgmtPage() {
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

          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-10 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <ShieldCheck size={14} className="text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Customer Management</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Make every customer feel like a VIP.
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Build lasting relationships. Track every customer's history, preferences,
                loyalty points, and credit — all in one powerful CRM.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-white">{s.value}</p>
                    <p className="text-white/60 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
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
            <div className="flex justify-center lg:justify-end items-center relative py-8">
              <div className="relative w-full max-w-lg">
                <img
                  src={customer}
                  alt="Customer Management Preview"
                  className="w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.25)) drop-shadow(0 6px 16px rgba(0,0,0,0.15))",
                    animation: "float 4s ease-in-out infinite",
                  }}
                />
              </div>
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
          <h2 className="text-3xl font-black text-gray-900">Everything you need with Customer Management</h2>
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
        <h3 className="text-2xl font-black text-white mb-3">Ready to try Customer Management?</h3>
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