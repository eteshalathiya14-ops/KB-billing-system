import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Mail, Phone,
  MessageCircle, Rocket, ChevronDown, Star,
} from "lucide-react";

const BRAND = "#633CDD";

// ⬇️ Apni actual Play Store app URL yahan replace karein
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.app.kaaryabook";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const PRODUCTS = [
  { label: "AI Invoicing",        to: "/features/ai-invoicing" },
  { label: "Payment Gateway",     to: "/features/payment-gateway" },
  { label: "Cloud Sync",          to: "/features/cloud-sync" },
  { label: "Analytics & Reports", to: "/features/analytics" },
  { label: "Customer Management", to: "/features/customer-management" },
];

const INDUSTRIES = [
  { label: "Restaurant",     id: "restaurant" },
  { label: "Retail",         id: "retail" },
  { label: "Medical Store",  id: "medical" },
  { label: "Service Center", id: "service" },
  { label: "Kirana Store",   id: "kirana" },
  { label: "Salon & Spa",    id: "salon" },
  { label: "Wholesale",      id: "wholesale" },
  { label: "Hotel & Lodge",  id: "hotel" },
];

const COMPANY = [
  { label: "Pricing",            href: "#pricing",   isAnchor: true },
  { label: "Resources",          href: "#resources", isAnchor: true },
  { label: "FAQ",                href: "#faq",       isAnchor: true },
  { label: "Privacy Policy",     href: "/privacy-policy",     isAnchor: false },
  { label: "Terms & Conditions", href: "/terms-conditions",   isAnchor: false },
  { label: "Delete Account",     href: "/delete-account",     isAnchor: false , isRed: true},
];

const linkStyle = {
  fontSize: 13.5, color: "rgba(255,255,255,0.48)",
  textDecoration: "none", transition: "color 0.2s",
};

const sectionLabelStyle = {
  fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "rgba(255,255,255,0.22)", margin: 0,
};

// Desktop: always open | Mobile: accordion
function FooterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* ── Mobile header (clickable) ── */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-full flex items-center justify-between py-3"
        style={{
          background: "none", border: "none", cursor: "pointer",
          borderBottom: open ? "none" : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={sectionLabelStyle}>{title}</span>
        <ChevronDown
          size={14}
          style={{
            color: "rgba(255,255,255,0.3)", flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>

      {/* ── Mobile content (toggle) ── */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? "600px" : "0px",
          transition: "max-height 0.35s ease",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ paddingTop: 10, paddingBottom: 16 }}>{children}</div>
      </div>

      {/* ── Desktop header + content (always visible) ── */}
      <div className="hidden md:block">
        <p style={{ ...sectionLabelStyle, marginBottom: 18 }}>{title}</p>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {

  const handleIndustryClick = (e, id) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("selectIndustry", { detail: id }));
    setTimeout(() => scrollToSection("industries"), 50);
  };

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  };

  return (
    <footer style={{ background: "#1b123f", fontFamily: "'DM Sans', system-ui, sans-serif", position: "relative", overflow: "hidden" }}>

      {/* BG blobs */}
      <div style={{ position: "absolute", top: -120, left: -120, width: 400, height: 400, borderRadius: "50%", background: "#633CDD", opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, right: -80, width: 320, height: 320, borderRadius: "50%", background: "#9f7aea", opacity: 0.05, filter: "blur(60px)", pointerEvents: "none" }} />

      {/* ── CTA BANNER ── */}
      <div style={{ position: "relative", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "40px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Run your business smarter{" "}
              <span style={{ color: "#a78bfa" }}>more professionally.</span>
            </h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", margin: 0 }}>No credit card required · Cancel anytime</p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "11px 22px",
                background: BRAND,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 7,
                boxShadow: "0 0 28px rgba(99,60,221,0.4)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#7c3aed"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = BRAND; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Rocket size={14} /> Start Free Trial
            </a>
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "11px 22px",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 7,
                transition: "all 0.2s"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <MessageCircle size={14} /> Book Free Demo
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 5% 40px" }}>
        <div className="footer-main-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "48px 32px" }}>

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 13, background: BRAND, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(99,60,221,0.5)" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>KB</span>
              </div>
              <div>
                <p style={{ fontWeight: 900, fontSize: 17, color: "#fff", margin: 0 }}>KB Billing</p>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", margin: 0 }}>Business</p>
              </div>
            </div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.8, marginBottom: 22, maxWidth: 260 }}>
              India’s #1 billing software — GST invoicing, inventory, payments, and analytics, all in one place.            
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <Phone size={13} />, text: "+91 87805 03913", href: "https://wa.me/918780503913" },
                { icon: <Mail size={13} />,  text: "contact@kaaryabook.com", href: "mailto:contact@kaaryabook.com" },
                { icon: <MapPin size={13} />, text: "Amroli, Surat, Gujarat", href: "https://maps.app.goo.gl/eQhpYtCfosbTpsMp9" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ color: "#a78bfa", flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = "#c4b5fd"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.42)"}
                    >{c.text}</a>
                  ) : (
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* ── Play Store Review Button ── */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: 20,
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,193,7,0.25)",
                borderRadius: 12,
                textDecoration: "none",
                transition: "all 0.22s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,193,7,0.10)";
                e.currentTarget.style.borderColor = "rgba(255,193,7,0.55)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(255,193,7,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,193,7,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Play Store icon (SVG) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.5c.3.17.64.2.96.1L14.59 12 3.18.4a1.1 1.1 0 0 0-.96.1C1.83.84 1.5 1.4 1.5 2v20c0 .6.33 1.16.86 1.5Z" fill="#4CAF50"/>
                <path d="m14.59 12-3.3-3.3L3.18.4l11.41 11.6Z" fill="#81C784"/>
                <path d="M20.64 10.35 17.3 8.44l-2.71 2.71L17.3 13.8l3.34-1.91c.95-.54.95-2 0-2.54Z" fill="#FFC107"/>
                <path d="m3.18 23.6 8.11-8.11 3.3-3.3L3.18 23.6Z" fill="#F44336"/>
              </svg>

              <div>
                <p style={{ margin: 0, fontSize: 13, color: "#fde68a", fontWeight: 700, lineHeight: 1.4 }}>
                  Rate us on Play Store
                </p>
              </div>

              {/* Star icons */}
              <div style={{ display: "flex", gap: 1, marginLeft: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} fill="#FFC107" stroke="none" style={{ color: "#FFC107" }} />
                ))}
              </div>
            </a>
          </div>

          {/* Product */}
          <FooterSection title="Product">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {PRODUCTS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = "#e9d5ff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.48)"}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Industries */}
          <FooterSection title="Industries">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {INDUSTRIES.map(({ label, id }) => (
                <li key={id}>
                  <a href="#"
                    onClick={(e) => handleIndustryClick(e, id)}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = "#e9d5ff"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.48)"}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {COMPANY.map(({ label, href, isAnchor, isRed }) => (
                <li key={label}>
                  {isAnchor ? (
                    <a href={href}
                      onClick={(e) => handleAnchorClick(e, href)}
                      style={linkStyle}
                      onMouseEnter={e => e.currentTarget.style.color = "#e9d5ff"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.48)"}
                    >{label}</a>
                  ) : (
                    <Link to={href} style={{ ...linkStyle, color: isRed ? "#f87171" : "rgba(255,255,255,0.48)" }}
                      onMouseEnter={e => e.currentTarget.style.color = isRed ? "#ef4444" : "#e9d5ff"}
                      onMouseLeave={e => e.currentTarget.style.color = isRed ? "#f87171" : "rgba(255,255,255,0.48)"}
                    >{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", margin: 0 }}>
            © {new Date().getFullYear()} KB Billing. All rights reserved. Made with ❤️ in India.
          </p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
            {["Refund", "Support", "Status"].map((label, i, arr) => (
              <span key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <a href="#"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.22)"}
                >{label}</a>
                {i < arr.length - 1 && <span style={{ color: "rgba(255,255,255,0.12)" }}>•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; gap: 0 28px !important; }
        }
        @media (max-width: 600px) {
          .footer-main-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </footer>
  );
}