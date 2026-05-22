import { useState, useEffect, useRef } from "react";
import { Receipt, Package, MessageCircle, BarChart3, Printer, Users, Store } from "lucide-react";

const FEATURES = [
  {
    id: "gst",
    icon: Receipt,
    label: "GST Billing",
    title: "Produce GST Invoices in Seconds",
    subtitle: "Fastest billing system",
    desc: "Enter customer details and scan products — your GST invoice with auto-filled GSTIN, HSN codes, and multi-tax slabs is generated instantly. Print or share directly via WhatsApp.",
    points: [
      "Auto-detect & fill GSTIN",
      "Built-in HSN / SAC codes",
      "Multi-tax slab support",
      "Direct WhatsApp sharing",
      "PDF download & print",
    ],
    color: "#7c3aed",
    lightBg: "bg-[#f5f3ff]",
    accent: "#ede9fe",
    preview: {
      title: "GST Invoice",
      badge: "GSTIN Verified",
      badgeColor: "#059669",
      rows: [
        { label: "Rahul Sharma", sub: "GSTIN: 27AABCU9603R1ZX", right: "INV-2026-0312" },
        { label: "Lays Chips ×3", sub: "HSN: 1905  GST: 5%", right: "₹38.00" },
        { label: "Amul Milk ×2", sub: "HSN: 0401  GST: 0%", right: "₹56.00" },
        { label: "Maggi Noodles ×5", sub: "HSN: 1902  GST: 12%", right: "₹95.00" },
      ],
      total: "₹189.00",
      totalLabel: "Total (incl. GST ₹6.27)",
      footer: "✓ Valid GST Invoice  •  ✓ Auto-filed",
    },
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    title: "Smart Stock Management",
    subtitle: "Never run out of stock again",
    desc: "Track inventory in real-time with low stock alerts, barcode scanning, and expiry date management. Get instant notifications before items go out of stock.",
    points: [
      "Barcode / QR scan support",
      "Low stock auto-alerts",
      "Expiry date tracking",
      "Supplier reorder system",
      "Multi-warehouse support",
    ],
    color: "#0284c7",
    lightBg: "bg-[#eff6ff]",
    accent: "#dbeafe",
    preview: {
      title: "Stock Dashboard",
      badge: " 3 Low Stock",
      badgeColor: "#d97706",
      rows: [
        { label: "Lays Chips", sub: "Barcode: 891234567890", right: "42 units", rightColor: "#16a34a" },
        { label: "Amul Milk 1L", sub: "Expiry: 12 May 2026", right: "3 units", rightColor: "#dc2626" },
        { label: "Maggi Noodles", sub: "Barcode: 891234567891", right: "128 units", rightColor: "#16a34a" },
        { label: "Surf Excel 1kg", sub: "Reorder: 20 units", right: "8 units", rightColor: "#d97706" },
      ],
      total: "324 SKUs",
      totalLabel: "Total products tracked",
      footer: " Auto-alerts sent for 3 items",
    },
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    title: "Share Invoices on WhatsApp",
    subtitle: "Boost customer engagement",
    desc: "Send GST bills, broadcast promotional offers, and automate payment reminders directly on WhatsApp. No third-party apps needed — manage everything in one place.",
    points: [
      "Direct WhatsApp billing",
      "Bulk offer broadcasts",
      "Automated payment reminders",
      "Customer chat history",
      "Message templates",
    ],
    color: "#16a34a",
    lightBg: "bg-[#f0fdf4]",
    accent: "#dcfce7",
    preview: {
      title: "WhatsApp Sender",
      badge: " Connected",
      badgeColor: "#16a34a",
      rows: [
        { label: "Rahul Sharma", sub: "+91 98765 43210", right: "Bill Sent ✓", rightColor: "#16a34a" },
        { label: "Priya Kapoor", sub: "+91 87654 32109", right: "Offer Sent ✓", rightColor: "#16a34a" },
        { label: "Amit Verma", sub: "+91 76543 21098", right: "Reminder ✓", rightColor: "#d97706" },
        { label: "Sunita Devi", sub: "+91 65432 10987", right: "Pending…", rightColor: "#9ca3af" },
      ],
      total: "245 messages",
      totalLabel: "Sent today",
      footer: " Bulk broadcast: 1,200 customers",
    },
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    title: "Complete Financial Insights",
    subtitle: "Make data-driven decisions",
    desc: "Access daily, weekly, and monthly sales reports. Track best-selling products, peak hours, profit margins, and GST summaries — all in one clear, integrated dashboard.",
    points: [
      "Daily P&L reporting",
      "Best-selling products",
      "Peak hour analysis",
      "GST summary reports",
      "Staff-wise sales tracking",
    ],
    color: "#9333ea",
    lightBg: "bg-[#fdf4ff]",
    accent: "#f3e8ff",
    preview: {
      title: "Sales Analytics",
      badge: " +18% vs yesterday",
      badgeColor: "#16a34a",
      rows: [
        { label: "Today's Sales", sub: "142 transactions", right: "₹12,540", rightColor: "#7c3aed" },
        { label: "Top Product", sub: "Lays Chips — 84 units", right: "₹2,184", rightColor: "#7c3aed" },
        { label: "Peak Hour", sub: "6PM – 8PM", right: "₹3,820", rightColor: "#0284c7" },
        { label: "GST Collected", sub: "CGST + SGST", right: "₹634.20", rightColor: "#059669" },
      ],
      total: "₹12,540",
      totalLabel: "Today's revenue",
      footer: " Monthly report ready to download",
    },
  },
  {
    id: "pos",
    icon: Printer,
    label: "POS & Printer",
    title: "Compatible with Any Printer",
    subtitle: "Plug & play — 30 second setup",
    desc: "Seamlessly integrate with thermal, Bluetooth, and WiFi printers. Print bills actively from your mobile device, connect cash drawers, and use barcode scanners without needing a PC.",
    points: [
      "Bluetooth thermal printers",
      "WiFi network printers",
      "Cash drawer integration",
      "Barcode scanner ready",
      "USB receipt printers",
    ],
    color: "#b45309",
    lightBg: "bg-[#fff7ed]",
    accent: "#ffedd5",
    preview: {
      title: "Print Center",
      badge: " Printer Connected",
      badgeColor: "#b45309",
      rows: [
        { label: "Thermal Printer", sub: "Bluetooth • Connected", right: "Active ✓", rightColor: "#16a34a" },
        { label: "WiFi Printer", sub: "192.168.1.105", right: "Active ✓", rightColor: "#16a34a" },
        { label: "Cash Drawer", sub: "Connected via printer", right: "Ready ✓", rightColor: "#16a34a" },
        { label: "Barcode Scanner", sub: "USB HID device", right: "Ready ✓", rightColor: "#16a34a" },
      ],
      total: "1,248 prints",
      totalLabel: "This month",
      footer: " Avg print time: 2.3 seconds",
    },
  },
  {
    id: "hrms",
    icon: Users,
    label: "HRMS",
    title: "Centralized Staff Management",
    subtitle: "Grow your team without the hassle",
    desc: "Manage staff attendance, generate salary slips, and set role-based access — all from one app. Track individual sales performance, monitor attendance, and streamline payroll.",
    points: [
      "Attendance tracking",
      "Salary slip generation",
      "Role-based access",
      "Staff sales reporting",
      "Leave management",
    ],
    color: "#db2777",
    lightBg: "bg-[#fdf2f8]",
    accent: "#fce7f3",
    preview: {
      title: "Staff Dashboard",
      badge: " 6 Staff Active",
      badgeColor: "#db2777",
      rows: [
        { label: "Ravi Kumar", sub: "Cashier • Present today", right: "₹4,200 sales", rightColor: "#7c3aed" },
        { label: "Anita Singh", sub: "Manager • Present today", right: "₹8,340 sales", rightColor: "#7c3aed" },
        { label: "Suresh Patel", sub: "Billing • On Leave", right: "Absent", rightColor: "#dc2626" },
        { label: "Meera Joshi", sub: "Stock • Present today", right: "₹2,190 sales", rightColor: "#7c3aed" },
      ],
      total: "₹14,730",
      totalLabel: "Total staff sales today",
      footer: " Salary due: 5 staff on 1st June",
    },
  },
  {
    id: "multistore",
    icon: Store,
    label: "Multi-Store",
    title: "Manage All Branches Locally",
    subtitle: "Scale effortlessly",
    desc: "Whether you have 2 stores or 200 — monitor sales, inventory, and staff across all branches from a single dashboard. Maintain central control while branches operate independently.",
    points: [
      "Centralized dashboard",
      "Branch-wise P&L",
      "Shared inventory pool",
      "Inter-branch transfers",
      "Franchise management",
    ],
    color: "#6d28d9",
    lightBg: "bg-[#f5f3ff]",
    accent: "#ede9fe",
    preview: {
      title: "Branch Overview",
      badge: " 4 Branches Live",
      badgeColor: "#6d28d9",
      rows: [
        { label: "Andheri Branch", sub: "Mumbai • 8 staff", right: "₹24,500", rightColor: "#16a34a" },
        { label: "Bandra Branch", sub: "Mumbai • 5 staff", right: "₹18,200", rightColor: "#16a34a" },
        { label: "Pune Branch", sub: "Pune • 6 staff", right: "₹15,400", rightColor: "#16a34a" },
        { label: "Nashik Branch", sub: "Nashik • 4 staff", right: "₹9,800", rightColor: "#d97706" },
      ],
      total: "₹67,900",
      totalLabel: "Combined today's sales",
      footer: " All branches synced in real-time",
    },
  },
];

function AppPreview({ feature, visible }) {
  const p = feature.preview;
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-2xl border transition-all duration-400 w-full max-w-md
        ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}
        border-[1.5px]`}
      style={{
        borderColor: feature.accent,
        boxShadow: `0 24px 60px ${feature.color}22, 0 8px 24px rgba(0,0,0,.08)`,
      }}
    >
      {/* App header bar */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <feature.icon size={18} color="#fff" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-white">{p.title}</div>
            <div className="text-[10px] text-white/70">KB Billing</div>
          </div>
        </div>
        <div
          className="rounded-full px-2.5 py-1 border text-[11px] font-semibold whitespace-nowrap"
          style={{
            background: "rgba(255,255,255,.18)",
            border: "1px solid rgba(255,255,255,.3)",
            color: "#fff",
          }}
        >
          {p.badge}
        </div>
      </div>
      {/* List rows */}
      <div className="py-2">
        {p.rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-5 py-3 gap-3 ${
              i < p.rows.length - 1 ? "" : ""
            }`}
            style={{
              borderBottom: i < p.rows.length - 1 ? `1px solid ${feature.accent}` : "none",
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-[#111827] truncate">{row.label}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{row.sub}</div>
            </div>
            <div
              className="text-[13px] font-bold whitespace-nowrap"
              style={{ color: row.rightColor || "#374151" }}
            >
              {row.right}
            </div>
          </div>
        ))}
      </div>
      {/* Total bar */}
      <div
        className={`flex items-center justify-between px-5 py-3 border-t`}
        style={{ background: feature.lightBg, borderColor: feature.accent }}
      >
        <div className="text-[12px] text-gray-500">{p.totalLabel}</div>
        <div className="text-lg font-extrabold" style={{ color: feature.color }}>
          {p.total}
        </div>
      </div>
      {/* Footer note */}
      <div className="px-5 py-2.5 bg-[#fafafa] border-t border-gray-100 text-[11.5px] text-gray-400 italic">
        {p.footer}
      </div>
    </div>
  );
}

function FeatureTab({ feature, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isHighlighted = active || hovered;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-200 text-left w-full
        ${active ? "translate-x-1 border-opacity-30 shadow-md" : ""}
        ${active ? "" : isHighlighted ? "bg-[#faf8ff] border-[#ede9fe]" : "bg-transparent border-transparent"}
        ${active ? "bg-opacity-100" : ""}
        `}
      style={{
        borderColor: active ? feature.color + "50" : isHighlighted ? "#ede9fe" : "transparent",
        background: active ? feature.lightBg.replace("bg-", "#") : isHighlighted ? "#faf8ff" : "transparent",
        boxShadow: active ? `0 4px 16px ${feature.color}18` : "none",
      }}
    >
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200`}
        style={{
          background: active ? feature.color + "20" : "#f3f4f6",
          transform: active ? "scale(1.08)" : "scale(1)",
        }}
      >
        <feature.icon size={22} color={active ? feature.color : "#6b7280"} />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="font-bold text-[14px] leading-tight transition-colors duration-150"
          style={{
            color: active ? feature.color : isHighlighted ? "#374151" : "#6b7280",
          }}
        >
          {feature.label}
        </div>
        {active && (
          <div
            className="text-[11.5px] font-medium mt-1 truncate"
            style={{ color: feature.color, opacity: 0.7 }}
          >
            {feature.subtitle}
          </div>
        )}
      </div>
      {active && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke={feature.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}

export default function KeyFeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [previewVisible, setPreviewVisible] = useState(true);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);
  const autoRef = useRef(null);

  const active = FEATURES[activeIdx];

  // Intersection observer
  useEffect(() => {
    const obs = new window.IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate tabs every 4s
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setPreviewVisible(false);
      setTimeout(() => {
        setActiveIdx(prev => (prev + 1) % FEATURES.length);
        setPreviewVisible(true);
      }, 280);
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  const handleTabClick = (i) => {
    clearInterval(autoRef.current);
    if (i === activeIdx) return;
    setPreviewVisible(false);
    setTimeout(() => {
      setActiveIdx(i);
      setPreviewVisible(true);
    }, 220);
    // restart auto-rotate
    autoRef.current = setInterval(() => {
      setPreviewVisible(false);
      setTimeout(() => {
        setActiveIdx(prev => (prev + 1) % FEATURES.length);
        setPreviewVisible(true);
      }, 280);
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 px-4"
    >
      {/* bg decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 5% 50%, ${active.color}0a 0%, transparent 45%),radial-gradient(circle at 95% 30%, rgba(139,92,246,.05) 0%, transparent 50%)`,
          transition: "background-image .5s ease",
        }}
      />
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div
          className={`
            text-center mb-16 transition-all duration-500
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="inline-flex items-center gap-2 bg-[#f5f3ff] border border-[#ede9fe] rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#7c3aed] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] inline-block animate-pulse" />
            Key Features
          </div>
          <h2 className="text-[clamp(1.7rem,4vw,2.5rem)] font-extrabold text-[#0f0720] leading-[1.18] mb-3 tracking-tight">
            Everything Your <span className="text-[#7c3aed]">Business Needs</span>
          </h2>
          <p className="text-[15px] text-gray-500 max-w-md mx-auto leading-relaxed">
            From billing to inventory, WhatsApp to analytics — KB Billing has everything a modern business requires.
          </p>
        </div>
        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12 items-start transition-all duration-500">
          {/* LEFT: FEATURE TABS */}
          <div
            className={`
              flex md:flex-col gap-1.5 bg-[#faf8ff] rounded-2xl p-3 border border-[#ede9fe] shadow-[0_4px_20px_rgba(109,40,217,.06)]
              md:sticky md:top-6 overflow-x-auto md:overflow-visible
              kf-tabs
            `}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {FEATURES.map((f, i) => (
              <div key={f.id} className="min-w-[160px] md:min-w-0 flex-1">
                <FeatureTab
                  feature={f}
                  active={activeIdx === i}
                  onClick={() => handleTabClick(i)}
                />
              </div>
            ))}
          </div>
          {/* RIGHT: CONTENT + PREVIEW */}
          <div className="flex flex-col gap-8">
            {/* Feature headline & points */}
            <div
              className={`
                transition-all duration-300
                ${previewVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
              `}
            >
              {/* color pill */}
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-3`}
                style={{
                  background: active.lightBg.replace("bg-", "#"),
                  border: `1px solid ${active.accent}`,
                  color: active.color,
                }}
              >
                <active.icon size={16} /> {active.label}
              </div>
              <h3 className="text-[clamp(1.3rem,3vw,1.9rem)] font-extrabold text-[#0f0720] leading-[1.22] mb-2 tracking-tight">
                {active.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6 max-w-xl">{active.desc}</p>
              {/* Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                {active.points.map((pt, i) => (
                  <div
                    key={i}
                    className={`
                      flex items-center gap-2 transition-all duration-300
                      ${previewVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
                    `}
                    style={{
                      transitionDelay: `${0.05 + i * 0.05}s`,
                    }}
                  >
                    <div
                      className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${active.color}18` }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke={active.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-medium text-[#374151]">{pt}</span>
                  </div>
                ))}
              </div>
              
            </div>
            {/* App preview card */}
            <AppPreview feature={active} visible={previewVisible} />
            {/* progress dots */}
            <div className="flex gap-1.5 justify-center mt-2">
              {FEATURES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`transition-all duration-300 rounded-full`}
                  style={{
                    width: i === activeIdx ? 24 : 8,
                    height: 8,
                    background: i === activeIdx ? active.color : "#e5e7eb",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .kf-tabs::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}