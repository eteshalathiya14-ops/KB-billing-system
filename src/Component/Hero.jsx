import { useState, useEffect } from "react";
import heroImg from "../assets/heroright.png";
import {
  FileText, Package, Bot, MessageCircle, BarChart2, Users,
  Target, ArrowRight,
  Store, CheckCircle,
  Lock, RefreshCw, MapPin, Clock, Headphones,
  CreditCard,
} from "lucide-react";

const BRAND = "#633CDD";

function TypingWord({ words }) {
  const [wi, setWi] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const word = words[wi];
    if (typing) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1400);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setWi((p) => (p + 1) % words.length);
          setTyping(true);
        }, 100);
        return () => clearTimeout(t);
      }
    }
  }, [text, typing, wi, words]);
  return (
    <span style={{ color: BRAND }}>
      {text}<span className="animate-pulse" style={{ color: BRAND }}>|</span>
    </span>
  );
}

const PILLS = [
  { icon: <FileText size={13} />,    label: "GST Billing" },
  { icon: <Package size={13} />,     label: "Inventory" },
  { icon: <Bot size={13} />,         label: "AI Invoicing" },
  { icon: <MessageCircle size={13} />, label: "WhatsApp" },
  { icon: <BarChart2 size={13} />,   label: "Analytics" },
  { icon: <Users size={13} />,       label: "HRMS" },
];

export default function HeroSection() {
  const [activePill, setActivePill] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActivePill((p) => (p + 1) % PILLS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "#EBEBEB" }}>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 bg-white border px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm"
              style={{ borderColor: "#633CDD30", color: BRAND }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: BRAND }} />
              India's #1 SME Business Software
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-[44px] sm:text-[56px] font-black leading-[1.1] text-gray-900 tracking-tight">
                Your{" "}
                <TypingWord words={["Restaurant", "Retail Store", "Medical Shop", "Clothing Store", "Salon & Spa"]} />
                <br />
                <span className="relative">
                  Goes Digital
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 320 10" fill="none">
                    <path d="M2 7 C50 1,100 10,150 5 C200 0,260 9,318 4" stroke={BRAND} strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mt-6">
                Everything you need to run your business billing software, smart POS machine, inventory, and reports all in one powerful system.
                Faster billing, fewer errors, and better customer experience.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {PILLS.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActivePill(i)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200"
                  style={
                    activePill === i
                      ? { background: BRAND, borderColor: BRAND, color: "#fff", boxShadow: `0 4px 14px ${BRAND}40` }
                      : { background: "#fff", borderColor: "#e5e7eb", color: "#4b5563" }
                  }
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                className="group flex items-center gap-2 text-white font-bold text-[15px] px-8 py-4 rounded-2xl transition-all active:scale-95 hover:-translate-y-0.5 shadow-lg"
                style={{ background: BRAND, boxShadow: `0 8px 24px ${BRAND}40` }}
              >
                <Target size={16} />
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Micro badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Lock size={11} />,        label: "No credit card" },
                { icon: <CheckCircle size={11} />, label: "14 days free" },
                { icon: <MapPin size={11} />,       label: "Made in India" },
                { icon: <RefreshCw size={11} />,    label: "Cancel anytime" },
              ].map((t) => (
                <span
                  key={t.label}
                  className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm"
                >
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 scale-75"
              style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)` }}
            />
            <img
              src={heroImg}
              alt="KB Billing App — Product list, GST Invoice, Stock Alerts"
              className="relative w-full max-w-[420px] lg:max-w-[560px] object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 32px 64px rgba(99,60,221,0.25))" }}
            />
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: <Store size={16} />,      num: "500+",  label: "Active Businesses" },
            { icon: <CreditCard size={16} />, num: "₹10Cr+",label: "Transactions" },
            { icon: <Headphones size={16} />, num: "24/7",  label: "Support" },
            { icon: <Clock size={16} />,      num: "2 hrs", label: "Reply Time" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-1" style={{ color: "#a78bfa" }}>{s.icon}</div>
              <p className="text-xl font-black" style={{ color: "#a78bfa" }}>{s.num}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}