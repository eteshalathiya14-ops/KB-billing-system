import { useState, useEffect } from "react";
import restaurant from "../assets/industries/restaurant.jpg";
import retail from "../assets/industries/retail.jpg";
import medicalstore from "../assets/industries/medicalstore.jpg";
import servicestore from "../assets/industries/servicestore.jpg";
import wholesale from "../assets/industries/wholesale.jpg";
import salonandspa from "../assets/industries/salon&spa.jpg";
import kirana from "../assets/industries/kirana.jpg";
import Hotel from "../assets/industries/hotel.jpg";

import {
  UtensilsCrossed, Shirt, Pill, Wrench, Package, CreditCard, BookOpen, Truck, BarChart2, RefreshCw, Scissors, Users, Ticket, Calendar, ShoppingCart, BedDouble, ClipboardList, Building2, Syringe, MessageCircle, Tag, Percent, BadgePercent, UserCheck, FileText, TrendingUp, Zap, Star,
} from "lucide-react";


const INDUSTRIES = [
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    label: "Restaurant",
    image: restaurant,
    tag: "Table billing, KOT",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Restaurant & Food Business",
    desc: "Manage your restaurant professionally with KB Billing. From table-wise billing to kitchen order tickets (KOT) and fast checkout handle rush hours smoothly with zero confusion.",
    points: [
      { icon: <Users color="#7C3AED" size={18} />, text: "Table-wise billing & management" },
      { icon: <ClipboardList color="#7C3AED" size={18} />, text: "Kitchen Order Ticket (KOT) system" },
      { icon: <BookOpen color="#7C3AED" size={18} />, text: "Category-wise menu setup" },
      { icon: <CreditCard color="#7C3AED" size={18} />, text: "Split bill & partial payment" },
      { icon: <BarChart2 color="#7C3AED" size={18} />, text: "Daily food cost & profit report" },
      { icon: <FileText color="#7C3AED" size={18} />, text: "GST invoice auto-generate" },
    ],
    stats: [{ val: "2 min", lbl: "Avg billing time" }, { val: "Zero", lbl: "Order confusion" }, { val: "GST", lbl: "Ready always" }],
  },
  {
    id: "retail",
    icon: Shirt,
    label: "Retail",
    image: retail,
    tag: "Inventory, barcode",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Retail & Clothing Store",
    desc: "Whether it's a clothing shop or any retail store, track inventory with barcode scanning, manage size and color-wise stock, and keep customers happy with fast billing.",
    points: [
      { icon: <Tag color="#7C3AED" size={18} />, text: "Barcode scanner billing" },
      { icon: <Shirt color="#7C3AED" size={18} />, text: "Size & color-wise inventory" },
      { icon: <CreditCard color="#7C3AED" size={18} />, text: "Multiple payment modes" },
      { icon: <Percent color="#7C3AED" size={18} />, text: "Price tag & label printing" },
      { icon: <Package color="#7C3AED" size={18} />, text: "Low stock auto-alert" },
      { icon: <BadgePercent color="#7C3AED" size={18} />, text: "Discount & offer management" },
    ],
    stats: [{ val: "5 sec", lbl: "Barcode billing" }, { val: "100%", lbl: "Stock accuracy" }, { val: "GST", lbl: "Compliant" }],
  },
  {
    id: "medical",
    icon: Pill,
    label: "Medical Store",
    image: medicalstore,
    tag: "Expiry, batch mgmt",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Medical & Pharmacy",
    desc: "Track every medicine in your medical store with expiry dates, batch numbers, and salt names. Avoid selling expired medicines and instantly generate GST-compliant invoices.",
    points: [
      { icon: <Calendar color="#7C3AED" size={18} />, text: "Expiry date auto-alert" },
      { icon: <BookOpen color="#7C3AED" size={18} />, text: "Batch number tracking" },
      { icon: <Syringe color="#7C3AED" size={18} />, text: "Salt / generic name search" },
      { icon: <ClipboardList color="#7C3AED" size={18} />, text: "Doctor prescription record" },
      { icon: <Building2 color="#7C3AED" size={18} />, text: "Supplier-wise purchase entry" },
      { icon: <FileText color="#7C3AED" size={18} />, text: "GST medical invoice (5%/12%)" },
    ],
    stats: [{ val: "0", lbl: "Expired medicines sold" }, { val: "Batch", lbl: "Tracked always" }, { val: "GST", lbl: "Auto-slab" }],
  },
  {
    id: "service",
    icon: Wrench,
    label: "Service Center",
    image: servicestore,
    tag: "Job card, technician",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Service Center & Repair Shop",
    desc: "Whether it's a mobile repair shop, AC service center, or any repair business create digital job cards, assign technicians, and send customer updates on WhatsApp with KB Billing.",
    points: [
      { icon: <ClipboardList color="#7C3AED" size={18} />, text: "Digital job card creation" },
      { icon: <UserCheck color="#7C3AED" size={18} />, text: "Technician-wise job assign" },
      { icon: <MessageCircle color="#7C3AED" size={18} />, text: "WhatsApp status update" },
      { icon: <RefreshCw color="#7C3AED" size={18} />, text: "Spare parts inventory" },
      { icon: <CreditCard color="#7C3AED" size={18} />, text: "Advance payment tracking" },
      { icon: <Star color="#7C3AED" size={18} />, text: "Customer feedback collection" },
    ],
    stats: [{ val: "100%", lbl: "Job visibility" }, { val: "WA", lbl: "Auto updates" }, { val: "Fast", lbl: "Delivery" }],
  },
  {
    id: "wholesale",
    icon: Package,
    label: "Wholesale",
    image: wholesale,
    tag: "Bulk, credit mgmt",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Wholesale & Distribution",
    desc: "In wholesale business, credit tracking is the most important part. With KB Billing, easily manage party-wise ledgers, credit limits, and bulk orders without missing a single payment.",
    points: [
      { icon: <Package color="#7C3AED" size={18} />, text: "Bulk order billing" },
      { icon: <CreditCard color="#7C3AED" size={18} />, text: "Party-wise credit limit" },
      { icon: <BookOpen color="#7C3AED" size={18} />, text: "Ledger & outstanding report" },
      { icon: <Truck color="#7C3AED" size={18} />, text: "Delivery challan generation" },
      { icon: <TrendingUp color="#7C3AED" size={18} />, text: "Purchase & sale comparison" },
      { icon: <RefreshCw color="#7C3AED" size={18} />, text: "Return & replacement entry" },
    ],
    stats: [{ val: "0", lbl: "Missed payments" }, { val: "Credit", lbl: "Auto-tracked" }, { val: "GST", lbl: "E-invoice ready" }],
  },
  {
    id: "salon",
    icon: Scissors,
    label: "Salon & Spa",
    image: salonandspa,
    tag: "Service billing",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Salon, Spa & Beauty Parlour",
    desc: "KB Billing for salons and spas comes with service-wise billing, staff commission tracking, and membership management everything you need to improve customer loyalty.",
    points: [
      { icon: <Scissors color="#7C3AED" size={18} />, text: "Service-wise billing" },
      { icon: <UserCheck color="#7C3AED" size={18} />, text: "Staff commission tracking" },
      { icon: <Ticket color="#7C3AED" size={18} />, text: "Membership & package" },
      { icon: <Calendar color="#7C3AED" size={18} />, text: "Appointment booking" },
      { icon: <ShoppingCart color="#7C3AED" size={18} />, text: "Product retail billing" },
      { icon: <MessageCircle color="#7C3AED" size={18} />, text: "WhatsApp appointment reminder" },
    ],
    stats: [{ val: "Staff", lbl: "Commission auto" }, { val: "Members", lbl: "Tracked" }, { val: "WA", lbl: "Reminders" }],
  },
  {
    id: "kiranastore",
    icon: ShoppingCart,
    label: "Kirana Store",
    image: kirana,
    tag: "Fast billing, GST",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Kirana & General Store",
    desc: "Whether it's morning rush or evening crowd, create bills in just 10 seconds with KB Billing for kirana stores. Manage daily items, credit accounts, and GST invoices easily.",
    points: [
      { icon: <Zap color="#7C3AED" size={18} />, text: "10 second fast billing" },
      { icon: <BookOpen color="#7C3AED" size={18} />, text: "Udhaar / credit khata" },
      { icon: <Package color="#7C3AED" size={18} />, text: "Item-wise stock tracking" },
      { icon: <Tag color="#7C3AED" size={18} />, text: "Loose item weight billing" },
      { icon: <MessageCircle color="#7C3AED" size={18} />, text: "WhatsApp pe bill bhejo" },
      { icon: <BarChart2 color="#7C3AED" size={18} />, text: "Daily closing report" },
    ],
    stats: [{ val: "10 sec", lbl: "Bill ready" }, { val: "Udhaar", lbl: "Auto-tracked" }, { val: "Zero", lbl: "Errors" }],
  },
  {
    id: "hotel",
    icon: BedDouble,
    label: "Hotel & Lodge",
    image: Hotel,
    tag: "Room, checkout",
    color: "#7C3AED", lightBg: "#f5f3ff", accent: "#ede9fe",
    title: "Hotel, Lodge & Guest House",
    desc: "Whether you run a small hotel or a large lodge, manage room-wise billing, check-in/check-out, and GST invoices easily with KB Billing. Add extra charges in just one click.",
    points: [
      { icon: <BedDouble color="#7C3AED" size={18} />, text: "Room-wise check-in & out" },
      { icon: <ClipboardList color="#7C3AED" size={18} />, text: "Guest detail & ID record" },
      { icon: <UtensilsCrossed color="#7C3AED" size={18} />, text: "Restaurant + room billing" },
      { icon: <CreditCard color="#7C3AED" size={18} />, text: "Advance & security deposit" },
      { icon: <FileText color="#7C3AED" size={18} />, text: "GST hotel invoice (12%/18%)" },
      { icon: <BarChart2 color="#7C3AED" size={18} />, text: "Occupancy report" },
    ],
    stats: [{ val: "100%", lbl: "Paperless" }, { val: "GST", lbl: "Hotel slab" }, { val: "Fast", lbl: "Checkout" }],
  },
];

function IndustryTabs({ industries, activeId, onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "48px" }}>
      {industries.map((ind) => {
        const isActive = activeId === ind.id;
        const Icon = ind.icon;
        return (
          <button
            key={ind.id}
            onClick={() => onSelect(ind.id)}
            style={{
              display: "flex", alignItems: "center", gap: "7px",
              padding: "7px 16px", borderRadius: "999px",
              fontSize: "13.5px", fontWeight: 500, cursor: "pointer",
              border: "1.5px solid #7C3AED",
              background: isActive ? "#7C3AED" : "#fff",
              color: isActive ? "#fff" : "#7C3AED",
              outline: "none",
              boxShadow: isActive ? "0 0 0 2px #ede9fe, 0 6px 18px #7C3AED33" : "none",
              transition: "all 0.22s cubic-bezier(.4,1,.7,1)",
              transform: isActive ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "#ede9fe"; e.currentTarget.style.transform = "scale(1.05)"; } }}
            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1)"; } }}
          >
            <Icon size={18} color={isActive ? "#fff" : "#7C3AED"} />
            <span style={{ marginLeft: 4 }}>{ind.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function IndustriesFeatures() {
  const [activeId, setActiveId]   = useState("restaurant");
  const [animating, setAnimating] = useState(false);

  const activeIndustry = INDUSTRIES.find(i => i.id === activeId) || INDUSTRIES[0];
  const MainIcon = activeIndustry.icon;

  // ✅ Navbar se industry select hone par event listen karo
  useEffect(() => {
    const handleSelectIndustry = (e) => {
      const id = e.detail;
      if (!id) return;

      const section = document.getElementById("industries");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // selectIndustry event received: update active tab
      setAnimating(true);
      setTimeout(() => {
        setActiveId(id);
        setAnimating(false);
      }, 300);
    };

    window.addEventListener("selectIndustry", handleSelectIndustry);
    return () => window.removeEventListener("selectIndustry", handleSelectIndustry);
  }, []);

  const handleSelect = (id) => {
    setAnimating(true);
    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 300);
  };

  return (
    //  id="industries" — Navbar scroll karne ke liye
    <section
      id="industries"
      style={{ padding: "80px 5%", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <IndustryTabs industries={INDUSTRIES} activeId={activeId} onSelect={handleSelect} />

        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "60px", alignItems: "center",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(15px)" : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          className="ind-layout"
        >
          {/* LEFT — Content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "14px",
                background: "linear-gradient(135deg, #ede9fe 0%, #c7bfff 100%)",
                boxShadow: "0 0 0 6px #ede9fe, 0 8px 32px 0 rgba(124,60,237,0.10)",
                color: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, animation: "floatY 3.2s ease-in-out infinite",
              }}>
                <MainIcon size={32} color="#7C3AED" />
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1f2937", lineHeight: 1.2, margin: 0 }}>
                {activeIndustry.title}
              </h2>
            </div>

            <p style={{ fontSize: "16px", color: "#4b5563", lineHeight: 1.7, marginBottom: "30px", maxWidth: "90%" }}>
              {activeIndustry.desc}
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              {activeIndustry.points.map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#ede9fe", color: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {pt.icon}
                  </span>
                  <span style={{ fontSize: "15px", color: "#374151", fontWeight: 500 }}>{pt.text}</span>
                </li>
              ))}
            </ul>
            
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                background: "#7C3AED",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 14px #7C3AED40",
                transition: "all 0.2s",
                textDecoration: "none",
                textAlign: "center",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#5b21b6"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#7C3AED"; e.currentTarget.style.transform = ""; }}
            >
              Start Free Trial
            </a>
          </div>

          {/* RIGHT — Image */}
          <div style={{ background: activeIndustry.lightBg, borderRadius: "24px", height: "420px", boxShadow: "0 20px 60px #D9D3E9", position: "relative", overflow: "hidden" }}>
            <img
              src={activeIndustry.image}
              alt={activeIndustry.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatY { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @media (max-width: 900px) { .ind-layout { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}