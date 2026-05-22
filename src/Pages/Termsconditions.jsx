import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, Mail, Phone } from "lucide-react";

const BRAND = "#633CDD";
const LAST_UPDATED = "May 13, 2026";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: [
      { sub: "Agreement", text: "By accessing or using KB Billing, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services." },
      { sub: "Updates", text: "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the updated terms." },
      { sub: "Eligibility", text: "You must be at least 18 years old and legally capable of entering into contracts to use KB Billing." },
    ],
  },
  {
    title: "2. Account Registration",
    content: [
      { sub: "Accurate Information", text: "You must provide accurate, complete, and current information during registration. You are responsible for keeping it up to date." },
      { sub: "Account Security", text: "You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized access." },
      { sub: "One Account per Business", text: "Each business entity should maintain only one primary account unless specifically authorized otherwise." },
      { sub: "Account Sharing", text: "Sharing account credentials with unauthorized users is strictly prohibited." },
    ],
  },
  {
    title: "3. Subscription & Payments",
    content: [
      { sub: "Free Trial", text: "New users receive a 14-day free trial with full access. No credit card is required during the trial period." },
      { sub: "Subscription Plans", text: "After the trial, continued use requires a paid subscription. Current pricing is ₹5,999/year for the Professional plan." },
      { sub: "Payment Processing", text: "Payments are processed securely through Razorpay. KB Billing does not store your payment card information." },
      { sub: "Renewal", text: "Subscriptions auto-renew annually unless cancelled at least 7 days before the renewal date." },
      { sub: "Refund Policy", text: "We offer a 7-day refund policy from the date of payment. Refund requests after 7 days will not be entertained." },
      { sub: "Price Changes", text: "We reserve the right to change pricing with 30 days prior notice via email." },
    ],
  },
  {
    title: "4. Acceptable Use",
    content: [
      { sub: "Lawful Use Only", text: "You may use KB Billing only for lawful business purposes in compliance with Indian law including GST regulations." },
      { sub: "Prohibited Activities", text: "You must not use KB Billing to engage in fraud, money laundering, tax evasion, or any illegal activity." },
      { sub: "No Reverse Engineering", text: "You may not attempt to reverse engineer, decompile, or extract source code from KB Billing." },
      { sub: "No Spam", text: "You must not use KB Billing's WhatsApp or messaging features to send unsolicited communications." },
      { sub: "Fair Usage", text: "Excessive API usage or automated scraping that degrades service for other users is prohibited." },
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      { sub: "Our IP", text: "KB Billing, its logo, software, design, and content are owned by KB Billing Business and protected by Indian copyright law." },
      { sub: "Your Data", text: "You retain full ownership of all business data you enter into KB Billing. We claim no ownership over your business information." },
      { sub: "License", text: "We grant you a limited, non-exclusive, non-transferable license to use KB Billing for your business purposes." },
      { sub: "Feedback", text: "Any feedback or suggestions you provide may be used by us to improve the platform without any obligation to you." },
    ],
  },
  {
    title: "6. Data & Privacy",
    content: [
      { sub: "Privacy Policy", text: "Your use of KB Billing is also governed by our Privacy Policy, which is incorporated into these Terms by reference." },
      { sub: "Data Backup", text: "While we take precautions to protect your data, we recommend maintaining your own backups of critical business information." },
      { sub: "Data Portability", text: "You may export your data at any time in PDF or Excel format." },
    ],
  },
  {
    title: "7. Service Availability",
    content: [
      { sub: "Uptime", text: "We target 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance." },
      { sub: "Modifications", text: "We reserve the right to modify, suspend, or discontinue any feature with reasonable notice." },
      { sub: "Force Majeure", text: "We are not liable for service interruptions caused by events beyond our control including natural disasters, internet outages, or government actions." },
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      { sub: "No Consequential Damages", text: "KB Billing shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services." },
      { sub: "Maximum Liability", text: "Our maximum liability to you is limited to the amount you paid for KB Billing in the 12 months preceding the claim." },
      { sub: "No Warranty", text: "KB Billing is provided 'as is' without warranty of any kind. We do not warrant that the service will be error-free." },
    ],
  },
  {
    title: "9. Termination",
    content: [
      { sub: "By You", text: "You may cancel your subscription at any time from your account settings. Access continues until the end of the billing period." },
      { sub: "By Us", text: "We may terminate or suspend your account immediately for violation of these Terms without prior notice or refund." },
      { sub: "Effect of Termination", text: "Upon termination, your right to use KB Billing ceases. You may export your data within 30 days of termination." },
    ],
  },
  {
    title: "10. Governing Law & Disputes",
    content: [
      { sub: "Governing Law", text: "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Surat, Gujarat." },
      { sub: "Dispute Resolution", text: "We encourage resolving disputes amicably first. Contact our support team before initiating any legal proceedings." },
      { sub: "Arbitration", text: "Unresolved disputes shall be settled through arbitration in Surat, Gujarat as per the Arbitration and Conciliation Act, 1996." },
    ],
  },
];

export default function TermsConditions() {
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
              <FileText size={28} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">Terms & Conditions</h1>
              <p className="text-white/60 text-sm mt-1">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            Please read these Terms & Conditions carefully before using KB Billing.
            By using our services, you agree to these terms.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro box */}
        <div className="rounded-2xl p-6 mb-10 border"
          style={{ background: "#f5f3ff", borderColor: "#ddd6fe" }}>
          <p className="text-sm text-violet-700 leading-relaxed">
            <strong>Important:</strong> These terms constitute a legal agreement between you and KB Billing Business,
            located in Surat, Gujarat, India. By creating an account, you agree to these terms.
            Last updated: <strong>{LAST_UPDATED}</strong>.
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
            Questions about our Terms?
          </h3>
          <p className="text-gray-500 text-sm mb-6">Contact our legal team for any clarifications.</p>
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