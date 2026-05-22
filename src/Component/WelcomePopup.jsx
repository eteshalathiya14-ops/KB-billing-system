import { useState, useEffect } from "react";
import {
  Receipt, Package, MessageCircle, BarChart,
  Lock, Clock, Globe, X, Rocket, Gift, Phone
} from "lucide-react";

const features = [
  { icon: <Receipt size={16} strokeWidth={2.5} />,       title: "GST Billing",  sub: "Auto invoice in 10 seconds" },
  { icon: <Package size={16} strokeWidth={2.5} />,       title: "Inventory",    sub: "Low stock alerts & tracking" },
  { icon: <MessageCircle size={16} strokeWidth={2.5} />, title: "WhatsApp",     sub: "Send bills & offers instantly" },
  { icon: <BarChart size={16} strokeWidth={2.5} />,      title: "Analytics",    sub: "Daily sales & profit reports" },
];

const trust = [
  { icon: <Lock  size={11} strokeWidth={2.5} />, text: "No credit card" },
  { icon: <Clock size={11} strokeWidth={2.5} />, text: "14 days free" },
  { icon: <Globe size={11} strokeWidth={2.5} />, text: "Made in India" },
  { icon: <X     size={11} strokeWidth={2.5} />, text: "Cancel anytime" },
];

export function WelcomePopup({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("popupShown", "true");
    setTimeout(onClose, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={(e) => e.target === e.currentTarget && handleClose()}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-3"
        style={{
          background: "rgba(15,10,30,0.72)",
          backdropFilter: "blur(10px)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Card */}
        <div
          className="bg-white rounded-3xl w-full overflow-y-auto overflow-x-hidden"
          style={{
            maxWidth: "520px",
            maxHeight: "calc(100vh - 24px)",
            scrollbarWidth: "none",
            boxShadow: "0 32px 80px rgba(109,40,217,.35), 0 8px 24px rgba(0,0,0,.2)",
            transform: visible ? "scale(1) translateY(0)" : "scale(0.88) translateY(24px)",
            opacity: visible ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(.34,1.56,.64,1), opacity 0.4s ease",
          }}
        >
          {/* ── Header ── */}
          <div
            className="relative px-6 pt-6 pb-5"
            style={{ background: "linear-gradient(135deg, #6D28D9, #8B5CF6)" }}
          >
            {/* Logo row */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.2)" }}>
                KB
              </div>
              <div>
                <div className="text-white font-bold text-base leading-tight">KB Billing Business</div>
                <div className="text-white/65 text-[11px] mt-0.5">India's #1 SME Business Software</div>
              </div>
            </div>

            {/* Headline */}
            <div className="flex items-center gap-2 flex-wrap text-white font-extrabold mb-2"
              style={{ fontSize: "clamp(18px,5vw,22px)", lineHeight: 1.25 }}>
              <span>Digitize Your <span style={{ color: "#fff" }}>Business</span></span>
              <Rocket size={18} strokeWidth={2.5} style={{ color: "#fcd34d", flexShrink: 0 }} />
            </div>

            <p className="text-white text-[13px] leading-relaxed">
              GST billing, inventory, WhatsApp marketing — everything in one app.<br />
              14-day free trial, no credit card required.
            </p>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full flex items-center justify-center text-white border-none cursor-pointer transition-all hover:bg-white/30"
              style={{ background: "rgba(255,255,255,0.2)" }}
              aria-label="Close"
            >
              <X size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* ── Body ── */}
          <div className="px-5 pt-5 pb-6">

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {features.map(f => (
                <div
                  key={f.title}
                  className="flex items-start gap-2.5 rounded-2xl p-3 border"
                  style={{ background: "#f8f5ff", borderColor: "#ede9fe" }}
                >
                  <div className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#ede9fe", color: "#6D28D9" }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold mb-0.5" style={{ color: "#3b0764" }}>{f.title}</div>
                    <div className="text-[11px] leading-snug" style={{ color: "#7c3aed" }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer banner */}
            <div
              className="flex items-center gap-3 flex-wrap rounded-2xl px-4 py-3 mb-4 border"
              style={{ background: "linear-gradient(135deg,#faf5ff,#ede9fe)", borderColor: "#c4b5fd" }}
            >
              <div
                className="flex items-center gap-1.5 text-white text-[10px] font-extrabold tracking-wide px-2.5 py-1.5 rounded-full flex-shrink-0"
                style={{ background: "#7c3aed" }}
              >
                <Gift size={11} strokeWidth={2.5} /> LIMITED OFFER
              </div>
              <p className="text-[13px] font-medium leading-snug" style={{ color: "#4C1D95" }}>
                Sign up now and get a <strong className="font-extrabold">50% discount</strong> for the first 3 months!
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2.5 flex-wrap mb-3.5">
              <button
                className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 text-white text-sm font-bold py-3 px-4 rounded-2xl border-none cursor-pointer transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#6D28D9)",
                  boxShadow: "0 4px 16px rgba(109,40,217,.4)",
                }}
              >
                <Rocket size={15} strokeWidth={2.5} /> Start Free Trial
              </button>
              <button
                className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 text-sm font-semibold py-3 px-4 rounded-2xl cursor-pointer border transition-all hover:bg-[#faf5ff] hover:-translate-y-0.5"
                style={{ color: "#7c3aed", borderColor: "#c4b5fd", background: "#fff" }}
              >
                <Phone size={14} strokeWidth={2.5} /> Book a Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5">
              {trust.map((t, i) => (
                <span key={i} className="flex items-center gap-1 text-[11px] text-gray-500">
                  {t.icon} {t.text}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .wp-card::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}