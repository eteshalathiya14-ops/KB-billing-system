import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Mail, Phone } from "lucide-react";

const BRAND = "#633CDD";
const LAST_UPDATED = "May 13, 2026";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: [
      {
        sub: "Personal Information",
        text: "When you register for KB Billing, we collect your name, email address, phone number, business name, GST number, and billing address.",
      },
      {
        sub: "Business Data",
        text: "We collect business-related data you enter into the platform — including products, orders, invoices, inventory, expenses, and customer details.",
      },
      {
        sub: "Usage Data",
        text: "We automatically collect information about how you access and use our services, including your IP address, browser type, device information, pages visited, and time spent.",
      },
      {
        sub: "Payment Information",
        text: "Payment details are processed securely through our payment partners (Razorpay). We do not store your full card number or CVV on our servers.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      { sub: "Service Delivery", text: "To provide, maintain, and improve KB Billing services, process transactions, and send billing-related communications." },
      { sub: "Customer Support", text: "To respond to your queries, troubleshoot issues, and provide technical assistance via WhatsApp, phone, or email." },
      { sub: "Analytics", text: "To understand usage patterns, improve our platform, and develop new features based on user behavior." },
      { sub: "Marketing", text: "To send you updates, newsletters, and promotional offers — you can opt out at any time." },
      { sub: "Legal Compliance", text: "To comply with applicable laws, regulations, and legal processes including GST and Indian tax regulations." },
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    content: [
      { sub: "We Do NOT Sell Your Data", text: "KB Billing does not sell, trade, or rent your personal information to third parties." },
      { sub: "Service Providers", text: "We may share data with trusted third-party service providers (cloud hosting, payment gateways, analytics) strictly for providing our services." },
      { sub: "Legal Requirements", text: "We may disclose your information if required by law, court order, or government authority." },
      { sub: "Business Transfer", text: "In case of a merger or acquisition, your data may be transferred. You will be notified in advance." },
    ],
  },
  {
    title: "4. Data Security",
    content: [
      { sub: "Encryption", text: "All data is encrypted using 256-bit AES encryption — the same standard used by banks." },
      { sub: "Secure Transmission", text: "All data is transmitted over HTTPS/TLS encrypted connections." },
      { sub: "Access Control", text: "We implement strict role-based access controls. Only authorized personnel can access your data." },
      { sub: "Regular Backups", text: "Your data is automatically backed up every 5 minutes to prevent loss." },
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      { sub: "Access", text: "You have the right to access all personal data we hold about you at any time." },
      { sub: "Correction", text: "You can update or correct your personal information from your account settings." },
      { sub: "Deletion", text: "You can request deletion of your account and all associated data. See our Delete Account page for details." },
      { sub: "Data Export", text: "You can export all your business data in PDF or Excel format before account closure." },
      { sub: "Opt-out", text: "You can unsubscribe from marketing emails at any time using the unsubscribe link." },
    ],
  },
  {
    title: "6. Cookies & Tracking",
    content: [
      { sub: "Essential Cookies", text: "We use necessary cookies for authentication and session management. These cannot be disabled." },
      { sub: "Analytics Cookies", text: "We use analytics cookies to understand how users interact with our platform." },
      { sub: "Your Control", text: "You can manage cookie preferences through your browser settings." },
    ],
  },
  {
    title: "7. Data Retention",
    content: [
      { sub: "Active Accounts", text: "We retain your data for as long as your account is active or as needed to provide services." },
      { sub: "After Deletion", text: "Upon account deletion, your data is permanently removed within 30 days from our active servers." },
      { sub: "Legal Hold", text: "Some data may be retained longer if required by law (e.g., GST transaction records as per Indian tax law)." },
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      { sub: "Age Restriction", text: "KB Billing is not intended for users under 18 years of age. We do not knowingly collect personal information from minors." },
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      { sub: "Updates", text: "We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification." },
      { sub: "Continued Use", text: "Your continued use of KB Billing after changes constitutes acceptance of the updated policy." },
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative overflow-hidden pt-24 pb-14 px-6"
        style={{ background: "linear-gradient(135deg, #5B2EFF 0%, #7C3AED 50%, #4338CA 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.12) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.2)" }}>
              <Shield size={28} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">Privacy Policy</h1>
              <p className="text-white/60 text-sm mt-1">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            At KB Billing, we are committed to protecting your privacy. This policy explains how we collect,
            use, and safeguard your personal and business information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro box */}
        <div className="rounded-2xl p-6 mb-10 border"
          style={{ background: "#f5f3ff", borderColor: "#ddd6fe" }}>
          <p className="text-sm text-violet-700 leading-relaxed">
            <strong>Summary:</strong> We collect only what we need, protect it with industry-standard security,
            never sell your data, and give you full control. If you have questions, contact us at{" "}
            <a href="mailto:contact@kaaryabook.com" className="underline font-semibold">contact@kaaryabook.com</a>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((sec) => (
            <div key={sec.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2"
                style={{ borderBottom: "2px solid #ede9fe", fontFamily: "'Syne', sans-serif" }}>
                {sec.title}
              </h2>
              <div className="space-y-4">
                {sec.content.map((item) => (
                  <div key={item.sub} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: BRAND }} />
                    <div>
                      <span className="font-semibold text-gray-800 text-sm">{item.sub}: </span>
                      <span className="text-gray-500 text-sm leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #f5f3ff, #ede9fe)", border: "1px solid #ddd6fe" }}>
          <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            Questions about this Privacy Policy?
          </h3>
          <p className="text-gray-500 text-sm mb-6">Our team is here to help with any privacy concerns.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:contact@kaaryabook.com" className="flex items-center gap-2 font-semibold hover:underline" style={{ color: BRAND }}>
              <Mail size={15} /> contact@kaaryabook.com
            </a>
            <a href="https://wa.me/918780503913" className="flex items-center gap-2 font-semibold hover:underline" style={{ color: BRAND }}>
              <Phone size={15} /> +91 87805 03913
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}