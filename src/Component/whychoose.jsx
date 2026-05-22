import { useState, useEffect, useRef } from "react";
import {
  Receipt,
  Package,
  MessageCircle,
  BarChart,
  Users,
  Store,
  Bot,
  Printer,
  Star,
  Zap,
  Smartphone,
  ShieldCheck,
  Handshake
} from "lucide-react";

/* ─────────────────────────────────────────
   WHY CHOOSE SECTION
───────────────────────────────────────── */
const WHY_CARDS = [
  {
    num: "01", icon: <Receipt size={24} strokeWidth={2} />, title: "10-Second GST Billing",
    desc: "Enter customer name, scan product GST invoice ready. Built-in GSTIN auto-fill, HSN codes, and multi-tax support.",
    tag: "GST Compliant", tagBg: "#dcfce7", tagColor: "#166534", iconBg: "#f0fdf4",
  },
  {
    num: "02", icon: <Package size={24} strokeWidth={2} />, title: "Smart Inventory",
    desc: "Real-time stock tracking, low stock alerts, barcode scanning, and expiry date management all automatic.",
    tag: "Auto Alerts", tagBg: "#dbeafe", tagColor: "#1e40af", iconBg: "#eff6ff",
  },
  {
    num: "03", icon: <MessageCircle size={24} strokeWidth={2} />, title: "WhatsApp Marketing",
    desc: "Send bills directly to WhatsApp, broadcast offers, and stay engaged with customers no extra app needed.",
    tag: "1-Click Send", tagBg: "#f3e8ff", tagColor: "#6b21a8", iconBg: "#fdf4ff",
  },
  {
    num: "04", icon: <BarChart size={24} strokeWidth={2} />, title: "Powerful Analytics",
    desc: "Daily, weekly, and monthly reports. Best-selling products, peak hours, and profit margins clearly visible.",
    tag: "Live Reports", tagBg: "#fef3c7", tagColor: "#92400e", iconBg: "#fef9ee",
  },
  {
    num: "05", icon: <Users size={24} strokeWidth={2} />, title: "HRMS & Staff",
    desc: "Manage your team's attendance, salary, and role-based access control from a single app.",
    tag: "Team Ready", tagBg: "#ffe4e6", tagColor: "#9f1239", iconBg: "#fff1f2",
  },
  {
    num: "06", icon: <Store size={24} strokeWidth={2} />, title: "Multi-Store Support",
    desc: "Whether 2 stores or 200 monitor data, sales, and inventory for all branches on one unified dashboard.",
    tag: "Scalable", tagBg: "#dcfce7", tagColor: "#166534", iconBg: "#f0fdf4",
  },
  {
    num: "07", icon: <Bot size={24} strokeWidth={2} />, title: "AI Invoicing",
    desc: "AI dynamically fills invoice details and offers smart suggestions based on customer history for faster billing.",
    tag: "AI Powered", tagBg: "#f3e8ff", tagColor: "#6b21a8", iconBg: "#fdf4ff",
  },
  {
    num: "08", icon: <Printer size={24} strokeWidth={2} />, title: "Any Printer Support",
    desc: "Supports thermal, Bluetooth, and WiFi printers. Print bills directly from your mobile without a PC.",
    tag: "Plug & Print", tagBg: "#ffedd5", tagColor: "#9a3412", iconBg: "#fff7ed",
  },
];

function WhyCard({ card, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white border-[1.5px] rounded-[18px] py-6 px-5 relative overflow-hidden cursor-default transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] ${visible ? 'opacity-100' : 'opacity-0'} ${hovered ? 'border-[#a78bfa] -translate-y-2 scale-[1.02] shadow-[0_16px_40px_rgba(109,40,217,.16)]' : 'border-[#ede9fe] shadow-[0_2px_12px_rgba(109,40,217,.06)]'}`}
      style={{
        transform: !hovered && !visible ? "translateY(30px) scale(.97)" : undefined,
        transitionDelay: !hovered && !visible ? `${index * 0.06}s` : "0s, 0s"
      }}
    >
      {/* background overlay on hover */}
      <div className={`absolute inset-0 rounded-[16px] bg-gradient-to-br from-[rgba(139,92,246,.06)] to-[rgba(109,40,217,.03)] transition-opacity duration-200 pointer-events-none ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* big number watermark */}
      <div className="absolute top-[14px] right-4 text-[38px] font-extrabold text-[rgba(109,40,217,.07)] leading-none select-none">
        {card.num}
      </div>

      {/* icon */}
      <div className={`w-[50px] h-[50px] rounded-xl text-[#6D28D9] flex items-center justify-center text-2xl mb-3.5 transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] ${hovered ? 'scale-[1.12] -rotate-3' : 'scale-100'}`} style={{ background: card.iconBg }}>
        {card.icon}
      </div>

      <div className="text-[15px] font-bold text-[#1f2937] mb-1.5">{card.title}</div>
      <div className="text-[13px] text-[#6b7280] leading-[1.65] mb-3.5">{card.desc}</div>

      <span className="inline-block text-[11px] font-semibold py-[3px] px-2.5 rounded-full" style={{ background: card.tagBg, color: card.tagColor }}>
        {card.tag}
      </span>
    </div>
  );
}

export function WhyChooseSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-[72px] px-6 pb-12 bg-white">
      {/* Section header */}
      <div ref={titleRef} className={`text-center mb-12 transition-all duration-500 ease-in-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="inline-flex items-center gap-1.5 bg-[#f5f3ff] border border-[#ede9fe] rounded-full py-1.5 px-3.5 text-xs font-semibold text-[#7c3aed] mb-3.5">
          <Star size={12} strokeWidth={2.5} /> Why KB Billing?
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold text-[#111827] leading-[1.22] mb-2.5">
          Why Do People Choose{" "}
          <span className="text-[#7c3aed]">KB Billing</span>?
        </h2>
        <p className="text-[15px] text-[#6b7280] max-w-[480px] mx-auto leading-[1.7]">
          Over 50,000+ businesses in India use KB Billing for one simple reason — it actually works.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px] max-w-[1100px] mx-auto">
        {WHY_CARDS.map((card, i) => (
          <WhyCard key={card.num} card={card} index={i} />
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className={`mt-[52px] text-center transition-all duration-700 ease-in-out delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-sm text-[#9ca3af] mb-4">
          With all these features — in just one affordable plan
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          {[
            { icon: <Zap size={14} />, text: "Setup in 2 minutes" },
            { icon: <Smartphone size={14} />, text: "Works on any phone" },
            { icon: <ShieldCheck size={14} />, text: "Your data is safe" },
            { icon: <Handshake size={14} />, text: "24/7 Support" }
          ].map(item => (
            <span key={item.text} className="bg-[#f5f3ff] border border-[#ede9fe] rounded-full py-1.5 px-4 text-[13px] font-medium text-[#6D28D9] flex items-center gap-1.5">
              {item.icon} {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}