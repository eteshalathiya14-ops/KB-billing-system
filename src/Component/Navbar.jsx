import { useState, useEffect, useRef } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Bot, MessageCircle, Cloud, BarChart2,
  CreditCard, ShieldCheck,
  UtensilsCrossed, Shirt, Pill, Wrench, ShoppingCart, Scissors,
  BedDouble, ShoppingBag,
  ChevronDown, Rocket, BadgePercent,
} from "lucide-react";

const BRAND = "#633CDD";

const NAV_ITEMS = [
  {
    label: "Features",
    type: "wide",
    sectionTitle: "Billing & Sales",
    items: [
      { icon: Bot,         title: "AI Invoicing",        sub: "Auto-fill from PDF/Image",           color: "bg-violet-50 text-violet-600", badge: "AI", to: "/features/ai-invoicing" },
      { icon: CreditCard,  title: "Payment Gateway",     sub: "UPI, Razorpay & cash in one place",  color: "bg-blue-50 text-blue-600",                  to: "/features/payment-gateway" },
      { icon: Cloud,       title: "Cloud Sync",          sub: "Access your data from anywhere",     color: "bg-sky-50 text-sky-600",                    to: "/features/cloud-sync" },
      { icon: BarChart2,   title: "Analytics & Reports", sub: "Daily, weekly & monthly insights",   color: "bg-emerald-50 text-emerald-600",             to: "/features/analytics" },
      { icon: ShieldCheck, title: "Customer Management", sub: "History, loyalty & credit tracking", color: "bg-amber-50 text-amber-600",                to: "/features/customer-management" },
    ],
    cta: { sub: "20+ features on one platform" },
  },
  {
    label: "Industries",
    type: "industries",
    items: [
      { icon: UtensilsCrossed, title: "Restaurant",     sub: "Table billing, KOT",           id: "restaurant" },
      { icon: Shirt,           title: "Retail",         sub: "Inventory, barcode",           id: "retail" },
      { icon: Pill,            title: "Medical Store",  sub: "Expiry, batch management",     id: "medical" },
      { icon: Wrench,          title: "Service Center", sub: "Job card, technician",         id: "service" },
      { icon: ShoppingCart,    title: "Wholesale",      sub: "Bulk, credit management",      id: "wholesale" },
      { icon: Scissors,        title: "Salon & Spa",    sub: "Service billing",              id: "salon" },
      { icon: ShoppingBag,     title: "Kirana Store",   sub: "Fast billing, GST",            id: "kiranastore" },
      { icon: BedDouble,       title: "Hotel & Lodge",  sub: "Room billing, check-in",       id: "hotel" },
    ],
  },
  { label: "Pricing",   href: "#pricing"   },
  { label: "Resources", href: "#resources" },
  { label: "FAQ",       href: "#faq"       },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  // Sticky navbar offset (matches the sticky height)
  const NAVBAR_OFFSET = 80;

  window.requestAnimationFrame(() => {
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  });
};


export default function Navbar() {
  const [open, setOpen]           = useState(null);
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(null);
    };
    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();



  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    const id = href.replace("#", "");

    // If we're already on the homepage, just scroll.
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    // Navigate home and request scroll.
    navigate("/", { state: { scrollTo: id } });
    // scroll will be handled by HomePage effect

  };


  const handleIndustryClick = (industryId) => {
    setOpen(null);
    setMobileOpen(false);

    // If we're already on the homepage, just dispatch + scroll.
    if (location.pathname === "/") {
      window.dispatchEvent(
        new CustomEvent("selectIndustry", { detail: industryId })
      );
      scrollToSection("industries");
      return;
    }

    // Navigate home and pass the selected industry via location.state.
    // HomePage will dispatch the custom event after route load.
    navigate("/", {
      state: {
        scrollTo: "industries",
        selectedIndustry: industryId,
      },
    });
  };


  return (
    <>
      {/* Offer Strip */}
      <div
        className="text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
        style={{ background: BRAND }}
      >
        <BadgePercent size={14} className="flex-shrink-0" />
        Launch Offer: 30% OFF — Code&nbsp;
        <span className="bg-white/20 border border-white/30 px-2 py-0.5 rounded-md font-bold">KAARYA30</span>
        <span className="hidden sm:inline">
          &nbsp;·&nbsp;
          <a
            href="#pricing"
            onClick={(e) => handleAnchorClick(e, "#pricing")}
            className="underline underline-offset-2 hover:no-underline"
          >
            View Plans →
          </a>
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        ref={ref}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md shadow-gray-200/50 bg-white/95 backdrop-blur-md" : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md" style={{ background: BRAND }}>
              <span className="text-white font-black text-lg">KB</span>
            </div>
            <div className="leading-none">
              <span className="block font-black text-[17px] text-gray-900 tracking-tight">KB Billing</span>
              <span className="block text-[10px] font-semibold tracking-widest uppercase -mt-0.5" style={{ color: BRAND }}>Business</span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative">

                {/* Simple anchor link (Pricing / Resources / FAQ) */}
                {item.href ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                ) : (
                  /* Dropdown button (Features / Industries) */
                  <button
                    onMouseEnter={() => item.type && setOpen(item.label)}
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      open === item.label ? "text-violet-700 bg-violet-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${open === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                )}

                {/* ── FEATURES DROPDOWN ── */}
                {item.type === "wide" && open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/60 overflow-hidden"
                    style={{ width: 280 }}  
                  >
                    <div className="p-5">  
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">
                        {item.sectionTitle}
                      </p>
                      {item.items.map((i) => {
                        const Icon = i.icon;
                        return (
                          <Link
                            key={i.title}
                            to={i.to}
                            onClick={() => setOpen(null)}
                            className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-violet-50 group transition-colors"
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${i.color}`}>
                              <Icon size={15} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-violet-700 flex items-center gap-1.5">
                                {i.title}
                                {i.badge && (
                                  <span className="text-[10px] bg-violet-100 text-violet-600 px-1.5 py-0.5 rounded font-bold">{i.badge}</span>
                                )}
                              </p>
                              <p className="text-xs text-gray-400">{i.sub}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── INDUSTRIES DROPDOWN ── */}
                {item.type === "industries" && open === item.label && (
                  <div
                    onMouseLeave={() => setOpen(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/60 overflow-hidden"
                    style={{ minWidth: 340 }}
                  >
                    <div className="p-4 grid grid-cols-2 gap-1">
                      {item.items.map((i) => {
                        const Icon = i.icon;
                        return (
                          <button
                            key={i.title}
                            type="button"
                            onClick={() => handleIndustryClick(i.id)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-violet-50 group transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-violet-100 group-hover:text-violet-600 transition-colors flex-shrink-0">
                              <Icon size={15} />
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-violet-700">{i.title}</p>
                              <p className="text-xs text-gray-400">{i.sub}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl border-2 transition-all hover:bg-violet-50"
              style={{ color: BRAND, borderColor: "#633CDD40" }}
            >
              <MessageCircle size={15} /> Book Free Demo
            </a>
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:opacity-90 active:scale-95"
              style={{ background: BRAND }}
            >
              Free Trial <Rocket size={13} />
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-5 py-5 space-y-1">

            {/* Features */}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 pt-1 pb-2">Features</p>
            {NAV_ITEMS[0].items.map((i) => (
              <Link
                key={i.title}
                to={i.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
              >
                {i.title}
              </Link>
            ))}

            {/* Industries */}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 pt-4 pb-2">Industries</p>
            <div className="grid grid-cols-2 gap-1">
              {NAV_ITEMS[1].items.map((i) => {
                const Icon = i.icon;
                return (
                  <button
                    key={i.id}
                    type="button"
                    onClick={() => handleIndustryClick(i.id)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors text-left"
                  >
                    <Icon size={14} style={{ color: BRAND, flexShrink: 0 }} />
                    {i.title}
                  </button>
                );
              })}
            </div>

            {/* Pricing / Resources / FAQ */}
            <div className="pt-3 pb-1 border-t border-gray-100 mt-3">
              {[
                { label: "Pricing",   href: "#pricing"   },
                { label: "Resources", href: "#resources" },
                { label: "FAQ",       href: "#faq"       },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleAnchorClick(e, href)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

          
          </div>
        )}
      </nav>
    </>
  );
}