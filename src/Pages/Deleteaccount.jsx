import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, AlertTriangle, Mail, Phone, Shield, Database } from "lucide-react";

const BRAND = "#633CDD";

const WHAT_DELETED = [
  { icon: <Database size={16} />, text: "Your account and login credentials" },
  { icon: <Database size={16} />, text: "All business data — products, orders, invoices" },
  { icon: <Database size={16} />, text: "Customer and supplier records" },
  { icon: <Database size={16} />, text: "Inventory and stock history" },
  { icon: <Database size={16} />, text: "Reports and analytics data" },
  { icon: <Database size={16} />, text: "Employee and HRMS data" },
  { icon: <Database size={16} />, text: "All uploaded documents and files" },
];

const WHAT_RETAINED = [
  { icon: <Shield size={16} />, text: "GST transaction records (as required by Indian tax law — up to 7 years)" },
  { icon: <Shield size={16} />, text: "Payment receipts (for financial audit compliance)" },
  { icon: <Shield size={16} />, text: "Basic account creation logs (for fraud prevention)" },
];

const STEPS = [
  { step: "01", title: "Export Your Data",     desc: "Download all your business data in PDF or Excel format before submitting the request.", icon: <Database size={20} /> },
  { step: "02", title: "Submit ",        desc: "Fill the deletion  form below or email us at delete@kbbilling.com.", icon: <Mail size={20} /> },
  { step: "03", title: "Verification",          desc: "We will verify your identity via email or OTP within 24 hours.", icon: <Shield size={20} /> },
  { step: "04", title: "Account Deleted",       desc: "Your account and data will be permanently deleted within 30 days of verification.", icon: <Trash2 size={20} /> },
];

export default function DeleteAccount() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep]         = useState(1); 
  const [form, setForm]         = useState({ name: "", email: "", phone: "", reason: "", confirm: false });
  const [errors, setErrors]     = useState({});
  const [submitting, setSubmitting] = useState(false);

  const REASONS = [
    "I no longer use KB Billing",
    "Switching to another software",
    "Privacy concerns",
    "Too expensive",
    "Missing features I need",
    "Technical issues",
    "Temporary closure of business",
    "Other",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim())   e.name   = "Name is required";
    if (!form.email.trim())  e.email  = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim())  e.phone  = "Phone number is required";
    if (!form.reason)        e.reason = "Please select a reason";
    if (!form.confirm)       e.confirm = "Please confirm you understand the consequences";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setStep(2);
  };

const navigate = useNavigate();

const handleConfirm = () => {
  setSubmitting(true);
  setTimeout(() => {
    setSubmitting(false);
    navigate("/");
  }, 1800);
};

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative overflow-hidden pt-24 pb-14 px-6"
        style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, transparent 65%)" }} />
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
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/20">
              <Trash2 size={28} className="text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white">Delete Account</h1>
              <p className="text-white/60 text-sm mt-1">This action is permanent and cannot be undone</p>
            </div>
          </div>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            We're sorry to see you go. Before you proceed, please read the information below carefully.
            Account deletion is irreversible.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {step !== 3 && (
          <>
            {/* Warning */}
            <div className="rounded-2xl p-5 mb-10 border flex gap-4"
              style={{ background: "#fff7ed", borderColor: "#fed7aa" }}>
              <AlertTriangle size={22} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-orange-800 text-sm mb-1">Warning: This action is permanent</p>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Deleting your account will permanently remove all your business data. This cannot be undone.
                  We strongly recommend <strong>exporting your data</strong> before proceeding.
                </p>
              </div>
            </div>

            {/* What gets deleted */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-2xl p-6 border border-red-100" style={{ background: "#fff5f5" }}>
                <h3 className="font-bold text-red-700 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Trash2 size={15} /> What will be deleted
                </h3>
                <ul className="space-y-2.5">
                  {WHAT_DELETED.map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-sm text-red-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 border border-amber-100" style={{ background: "#fffbeb" }}>
                <h3 className="font-bold text-amber-700 text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Shield size={15} /> What we must retain (Legal)
                </h3>
                <ul className="space-y-2.5">
                  {WHAT_RETAINED.map((item) => (
                    <li key={item.text} className="flex items-start gap-2 text-sm text-amber-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-600 mt-4 border-t border-amber-200 pt-3">
                  As per Indian GST law, certain financial records must be maintained.
                </p>
              </div>
            </div>

            {/* Process steps */}
            <div className="mb-12">
              <h2 className="font-bold text-gray-900 text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                Deletion Process
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {STEPS.map((s, i) => (
                  <div key={s.step} className="rounded-2xl p-5 text-center border border-gray-100">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 text-white"
                      style={{ background: BRAND }}>
                      {s.icon}
                    </div>
                    <div className="text-xs font-bold text-violet-500 mb-1">Step {s.step}</div>
                    <div className="font-bold text-gray-800 text-sm mb-1">{s.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 text-gray-300">→</div>
                    )}
                  </div>
                ))}
              </div>
              
            </div>

            
          </>
        )}

        {/* ── STEP 1: Form ── */}
        {step === 1 && (
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Submit Deletion 
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input type="text" placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{ borderColor: errors.name ? "#ef4444" : "#e5e7eb" }}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Registered Email *</label>
                  <input type="email" placeholder="Email used for KB Billing"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{ borderColor: errors.email ? "#ef4444" : "#e5e7eb" }}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                <input type="tel" placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: errors.phone ? "#ef4444" : "#e5e7eb" }}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Reason for Deletion *</label>
                <select
                  value={form.reason}
                  onChange={e => setForm({ ...form, reason: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none bg-white"
                  style={{ borderColor: errors.reason ? "#ef4444" : "#e5e7eb" }}
                >
                  <option value="">Select a reason...</option>
                  {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Comments (Optional)</label>
                <textarea rows={3} placeholder="Tell us more about why you're leaving..."
                  value={form.comments}
                  onChange={e => setForm({ ...form, comments: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border"
                style={{ borderColor: errors.confirm ? "#ef4444" : "#e5e7eb", background: errors.confirm ? "#fff5f5" : "#f9fafb" }}>
                <input type="checkbox" id="confirm" checked={form.confirm}
                  onChange={e => setForm({ ...form, confirm: e.target.checked })}
                  className="mt-0.5 flex-shrink-0 w-4 h-4 accent-violet-600"
                />
                <label htmlFor="confirm" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                  I understand that deleting my account will permanently remove all my business data and this action
                  <strong className="text-gray-800"> cannot be undone</strong>. I have already exported any data I need.
                </label>
              </div>
              {errors.confirm && <p className="text-red-500 text-xs -mt-3">{errors.confirm}</p>}

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit"
                  className="px-8 py-3 rounded-xl text-white text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "#dc2626", boxShadow: "0 4px 16px rgba(220,38,38,0.3)" }}>
                  <Trash2 size={14} className="inline mr-1.5 -mt-0.5" />
                   Account Deletion
                </button>
                <Link to="/"
                  className="px-8 py-3 rounded-xl text-sm font-semibold border transition-all hover:bg-gray-50"
                  style={{ color: "#374151", borderColor: "#e5e7eb" }}>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 2: Confirm ── */}
        {step === 2 && (
          <div className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-red-100">
              <AlertTriangle size={32} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
              Are you absolutely sure?
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              You are about to permanently delete the account for:
            </p>
            <div className="rounded-2xl p-4 mb-6 border border-gray-100 bg-gray-50">
              <p className="font-bold text-gray-800">{form.name}</p>
              <p className="text-gray-500 text-sm">{form.email}</p>
            </div>
            <p className="text-sm text-red-600 font-medium mb-8">
              ⚠️ This will permanently delete ALL your business data. There is no undo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleConfirm} disabled={submitting}
                className="px-8 py-3 rounded-xl text-white text-sm font-bold disabled:opacity-70"
                style={{ background: "#dc2626" }}>
                {submitting ? "Processing..." : "Yes, Delete My Account"}
              </button>
              <button onClick={() => setStep(1)}
                className="px-8 py-3 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 text-gray-700">
                No, Keep My Account
              </button>
            </div>
          </div>
        )}

        

        {/* Contact */}
        {step === 1 && (
          <div className="mt-12 rounded-2xl p-6 border border-gray-100 bg-gray-50">
            <p className="text-sm font-semibold text-gray-700 mb-3">Need help instead? Contact us:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:contact@kaaryabook.com" className="flex items-center gap-2 font-semibold hover:underline" style={{ color: BRAND }}>
                <Mail size={14} /> contact@kaaryabook.com
              </a>
              <a href="https://wa.me/918780503913" className="flex items-center gap-2 font-semibold hover:underline" style={{ color: BRAND }}>
                <Phone size={14} /> +91 87805 03913
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}