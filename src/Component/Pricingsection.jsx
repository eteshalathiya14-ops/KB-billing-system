import { Lock, RotateCcw, Headphones, Building2, Rocket, IndianRupee, Zap, Shield, Cloud, BarChart2, Bot, Users, MessageCircle, Package } from "lucide-react";

const FEATURES = [
  { icon: <Bot size={15} />,         text: "AI Invoice Auto-fill" },
  { icon: <Package size={15} />,     text: "Inventory Management" },
  { icon: <MessageCircle size={15} />, text: "WhatsApp Integration" },
  { icon: <Cloud size={15} />,       text: "Cloud Sync — Access Anywhere" },
  { icon: <BarChart2 size={15} />,   text: "Advanced Analytics & Reports" },
  { icon: <Users size={15} />,       text: "Customer Management & Loyalty" },
  { icon: <Shield size={15} />,      text: "Role & Permission Control" },
  { icon: <Zap size={15} />,         text: "WhatsApp Auto Send Invoice" },
  { icon: <Building2 size={15} />,   text: "2 Companies / Outlets" },
  { icon: <Rocket size={15} />,      text: "All Future Updates Included" },
  { icon: <Lock size={15} />,        text: "256-bit Data Encryption" },
  { icon: <RotateCcw size={15} />,   text: "Daily Backup & Restore" },
];

const TRUST = [
  { icon: <Lock size={16} />,        label: "Secure Payments" },
  { icon: <RotateCcw size={16} />,   label: "Cancel Anytime" },
  { icon: <Headphones size={16} />,  label: "Lifetime Support" },
  { icon: <Building2 size={16} />,   label: "GST Invoice Provided" },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 px-4"
      style={{ background: "linear-gradient(135deg, #f8f7fd 0%, #ede9fe 100%)" }}
    >
      {/* BG blobs */}
      <div className="pointer-events-none absolute -top-40 -left-24 w-[500px] h-[500px] rounded-full bg-[#a78bfa] opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#633CDD] opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(99,60,221,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(99,60,221,0.03) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
            style={{ background: "rgba(99,60,221,0.08)", border: "1px solid rgba(99,60,221,0.2)", color: "#633CDD" }}>
            <span className="w-2 h-2 rounded-full bg-[#633CDD] animate-pulse" />
            Simple Pricing
          </div>
          <h2 className="font-extrabold text-[#2d225a] mb-3"
            style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontFamily: "'Syne', sans-serif", lineHeight: 1.15 }}>
            One Plan.{" "}
            <span style={{ color: "#633CDD" }}>Everything Included.</span>
          </h2>
          <p className="text-[#7c6cae] text-base md:text-lg max-w-lg mx-auto">
            No tiers, no confusion. Get the full power of KB Billing at one simple price.
          </p>
        </div>

        {/* Main card */}
        <div className="relative max-w-3xl mx-auto">

          {/* Glow */}
          <div className="absolute -inset-1 rounded-[32px] blur-xl opacity-30"
            style={{ background: "linear-gradient(135deg,#633CDD,#a78bfa)" }} />

          <div className="relative rounded-[28px] overflow-hidden"
            style={{
              background: "#fff",
              border: "2px solid #633CDD",
              boxShadow: "0 32px 80px rgba(99,60,221,0.18)",
            }}>

            {/* Top badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-b-2xl"
                style={{ background: "linear-gradient(90deg,#633CDD,#a78bfa)" }}>
                <Rocket size={13} /> Most Popular Plan
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0">

              {/* LEFT — Price & CTA */}
              <div className="p-8 md:p-10 flex flex-col justify-between"
                style={{ borderRight: "1px solid #ede9fe" }}>

                <div>
                  {/* Plan name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#633CDD,#a78bfa)" }}>
                      <Rocket size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-extrabold text-xl text-[#2d225a]"
                        style={{ fontFamily: "'Syne', sans-serif" }}>
                        Professional
                      </p>
                      <p className="text-xs text-[#7c6cae]">For growing businesses</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-end gap-1 mb-1">
                      <IndianRupee size={22} className="text-[#633CDD] mb-2" />
                      <span className="text-6xl font-black text-[#633CDD] leading-none"
                        style={{ fontFamily: "'Syne', sans-serif" }}>
                        5,999
                      </span>
                      <span className="text-[#7c6cae] text-sm mb-2">/year</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="line-through text-[#b0a3d4] text-sm">₹7,999/year</span>
                      <span className="bg-[#633CDD] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        SAVE 25%
                      </span>
                    </div>
                  </div>

                  {/* Per month equivalent */}
                  <p className="text-xs text-[#7c6cae] mb-6">
                    = <strong className="text-[#633CDD]">₹499/month</strong> — billed annually
                  </p>

                  {/* Trial info */}
                  <div className="rounded-2xl p-4 mb-6"
                    style={{ background: "rgba(99,60,221,0.06)", border: "1px solid rgba(99,60,221,0.15)" }}>
                    <p className="text-sm font-bold text-[#633CDD] mb-0.5">14-Day Free Trial Included</p>
                    <p className="text-xs text-[#7c6cae]">No credit card required. Cancel anytime.</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/918780503913"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-2xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg,#633CDD,#a78bfa)",
                      boxShadow: "0 8px 24px rgba(99,60,221,0.35)",
                      fontFamily: "'Syne', sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    <Rocket size={15} className="inline mr-2 -mt-0.5" />
                    Start Free Trial
                  </a>
                  <button
                    className="w-full py-3 rounded-2xl font-semibold text-[#633CDD] text-sm transition-all hover:bg-[#ede9fe]"
                    style={{ border: "1.5px solid #d1c4f6", background: "transparent" }}
                  >
                    View Demo →
                  </button>
                </div>
              </div>

              {/* RIGHT — Features */}
              <div className="p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7c6cae] mb-5">
                  Everything included
                </p>
                <ul className="grid grid-cols-1 gap-3">
                  {FEATURES.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[#633CDD]"
                        style={{ background: "rgba(99,60,221,0.08)" }}>
                        {f.icon}
                      </span>
                      <span className="text-sm text-[#5b4a8d] font-medium">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="px-8 py-4 flex flex-wrap justify-center gap-6"
              style={{ borderTop: "1px solid #ede9fe", background: "rgba(99,60,221,0.03)" }}>
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 text-xs text-[#7c6cae] font-medium">
                  <span className="text-[#633CDD]">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-[#7c6cae] mt-8">
          500+ businesses trust KB Billing · No hidden charges · GST invoice provided
        </p>

      </div>
    </section>
  );
}