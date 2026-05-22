import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown, HelpCircle, CreditCard, Zap,
  Cloud, Shield, Smartphone, HeadphonesIcon,
  MessageCircle, Phone,
} from 'lucide-react';

const accent      = "#7C3AED";
const accentLight = "#F3E8FF";
const gradient    = "from-[#5B2EFF] via-[#7C3AED] to-[#4338CA]";

const CATEGORIES = [
  { id: 'general',  label: 'General',  icon: <HelpCircle     size={15} strokeWidth={2} /> },
  { id: 'pricing',  label: 'Pricing',  icon: <CreditCard     size={15} strokeWidth={2} /> },
  { id: 'features', label: 'Features', icon: <Zap            size={15} strokeWidth={2} /> },
  { id: 'security', label: 'Security', icon: <Shield         size={15} strokeWidth={2} /> },
  { id: 'support',  label: 'Support',  icon: <HeadphonesIcon size={15} strokeWidth={2} /> },
];

const FAQS = [
  // General
  {
    cat: 'general',
    icon: <HelpCircle size={18} strokeWidth={2} />,
    q: 'What is KB Billing?',
    a: 'KB Billing is an all-in-one business software designed for Indian SMEs. It combines GST billing, inventory management, WhatsApp marketing, AI invoicing, cloud sync, and detailed analytics — all in a single powerful platform.',
  },
  {
    cat: 'general',
    icon: <HelpCircle size={18} strokeWidth={2} />,
    q: 'Who is KB Billing for?',
    a: 'KB Billing is built for retail shops, restaurants, wholesale dealers, medical stores, electronics shops, clothing stores, and any small or medium-sized business that needs fast, accurate billing and business management.',
  },
  {
    cat: 'general',
    icon: <HelpCircle size={18} strokeWidth={2} />,
    q: 'Is KB Billing GST compliant?',
    a: 'Yes, fully. Every invoice generated through KB Billing is automatically formatted to meet Indian GST standards. GSTIN is auto-validated, taxes are calculated accurately, and reports are always audit-ready.',
  },
  {
    cat: 'general',
    icon: <Smartphone size={18} strokeWidth={2} />,
    q: 'Is KB Billing available on mobile?',
    a: 'Absolutely. KB Billing works seamlessly on mobile, tablet, and desktop. You can manage your entire business from your phone — bill customers, check stock, and view reports anytime, anywhere.',
  },

  // Pricing
  {
    cat: 'pricing',
    icon: <CreditCard size={18} strokeWidth={2} />,
    q: 'Is there a free trial?',
    a: 'Yes! We offer a 14-day free trial with full access to all features — no credit card required. Sign up and start billing in under 10 minutes.',
  },
  {
    cat: 'pricing',
    icon: <CreditCard size={18} strokeWidth={2} />,
    q: 'How much does KB Billing cost?',
    a: 'We offer flexible plans starting from an affordable monthly rate for small businesses, all the way to Enterprise plans for larger operations. Visit our Pricing page for detailed plan comparisons.',
  },
  {
    cat: 'pricing',
    icon: <CreditCard size={18} strokeWidth={2} />,
    q: 'Are there any hidden charges?',
    a: 'None whatsoever. You pay only for the plan you choose — no setup fees, no hidden charges, no surprise bills. You can cancel anytime with zero penalties.',
  },
  {
    cat: 'pricing',
    icon: <CreditCard size={18} strokeWidth={2} />,
    q: 'What is the current launch offer?',
    a: 'Sign up now and get 50% off for the first 3 months. Use code KAARYA30 at checkout for an additional 30% discount. This is a limited-time offer — grab it before it expires.',
  },

  // Features
  {
    cat: 'features',
    icon: <Zap size={18} strokeWidth={2} />,
    q: 'How does AI Invoicing work?',
    a: 'Upload any PDF, image, or document — our AI reads it and automatically fills every invoice field in under 2 seconds. No manual data entry, no errors, no wasted time.',
  },
  {
    cat: 'features',
    icon: <Cloud size={18} strokeWidth={2} />,
    q: 'What is Cloud Sync?',
    a: 'Cloud Sync keeps all your business data updated in real time across every device. Whether you switch from your phone to your laptop mid-day, everything — bills, inventory, reports — is always in sync. 99.9% uptime guaranteed.',
  },
  {
    cat: 'features',
    icon: <MessageCircle size={18} strokeWidth={2} />,
    q: 'How does WhatsApp integration work?',
    a: 'Send invoices, payment reminders, and promotional offers directly to your customers via WhatsApp — straight from KB Billing. One click, instant delivery, no copy-pasting.',
  },
  {
    cat: 'features',
    icon: <Zap size={18} strokeWidth={2} />,
    q: 'Does KB Billing work offline?',
    a: 'Yes. If your internet goes down, you can keep billing without interruption. All data is stored locally and automatically syncs to the cloud the moment your connection is restored.',
  },
  {
    cat: 'features',
    icon: <Smartphone size={18} strokeWidth={2} />,
    q: 'How many devices can I use simultaneously?',
    a: 'One KB Billing account supports up to 10 devices at the same time — mobile phones, tablets, and laptops. Perfect for businesses with multiple counters or staff members.',
  },

  // Security
  {
    cat: 'security',
    icon: <Shield size={18} strokeWidth={2} />,
    q: 'Is my business data secure?',
    a: 'Your data is protected with 256-bit AES encryption — the same standard used by banks. All data is transmitted over secure HTTPS connections and backed up automatically every 5 minutes.',
  },
  {
    cat: 'security',
    icon: <Shield size={18} strokeWidth={2} />,
    q: 'Who can access my business data?',
    a: 'Only you and the team members you authorize. KB Billing uses role-based access control — you decide exactly what each staff member can see and do.',
  },
  {
    cat: 'security',
    icon: <Shield size={18} strokeWidth={2} />,
    q: 'What happens to my data if I cancel?',
    a: 'Your data remains accessible for 30 days after cancellation. You can export everything — invoices, reports, customer data — as PDF or Excel before your account closes.',
  },

  // Support
  {
    cat: 'support',
    icon: <HeadphonesIcon size={18} strokeWidth={2} />,
    q: 'What support options are available?',
    a: 'We offer 24/7 customer support via WhatsApp, phone, and email. Our dedicated onboarding team will also help you get set up and running from day one.',
  },
  {
    cat: 'support',
    icon: <HeadphonesIcon size={18} strokeWidth={2} />,
    q: 'How long does setup take?',
    a: 'Most businesses are fully set up and billing in under 10 minutes. Our onboarding team walks you through every step — product catalog, GST setup, staff access, and more.',
  },
  {
    cat: 'support',
    icon: <HeadphonesIcon size={18} strokeWidth={2} />,
    q: 'Do you offer training for my staff?',
    a: 'Yes. We provide onboarding sessions, video tutorials, and a detailed knowledge base. Your staff can be trained and ready to use KB Billing within a day.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background:   open ? '#faf5ff' : '#fff',
        borderColor:  open ? '#c4b5fd' : '#e5e7eb',
        boxShadow:    open ? '0 4px 24px rgba(124,58,237,0.08)' : 'none',
        transitionDelay: `${index * 0.03}s`,
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Question row */}
      <div className="flex items-center gap-3 px-5 py-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? accent : accentLight,
            color:      open ? '#fff'  : accent,
          }}
        >
          {faq.icon}
        </div>

        <p className="flex-1 text-sm font-semibold text-gray-800 leading-snug">
          {faq.q}
        </p>

        <div
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: open ? accent : '#9ca3af' }}
        >
          <ChevronDown size={18} strokeWidth={2} />
        </div>
      </div>

      {/* Answer — animated */}
      <div
        style={{ height, overflow: 'hidden', transition: 'height 0.35s cubic-bezier(.22,.68,0,1.2)' }}
      >
        <div ref={bodyRef} className="px-5 pb-5 pt-1 pl-[68px]">
          <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState('general');

    const filtered = FAQS.filter(f => f.cat === activeTab);

    return (
    <section id="faq" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2"
            style={{ background: accentLight, color: accent }}>
            Got questions?
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Everything you need to know about KB Billing. Can't find the answer? Our support team is always here.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background:  activeTab === cat.id ? accent : accentLight,
                color:       activeTab === cat.id ? '#fff'  : accent,
                boxShadow:   activeTab === cat.id ? `0 4px 14px ${accent}33` : 'none',
                transform:   activeTab === cat.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3 mb-16">
          {filtered.map((faq, i) => (
            <FAQItem key={`${faq.cat}-${i}`} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`bg-gradient-to-r ${gradient} rounded-3xl p-8 md:p-10 text-center`}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          >
            <MessageCircle size={22} className="text-white" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-black text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
            Our support team is available 24/7. We typically respond within a few minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ color: accent, textDecoration: "none" }}
            >
              <MessageCircle size={15} strokeWidth={2} /> Chat with Us
            </a>
            <a
              href="https://wa.me/918780503913"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-all backdrop-blur-sm"
              style={{ textDecoration: "none" }}
            >
              <Phone size={15} strokeWidth={2} /> Book a Free Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}