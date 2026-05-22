import { useState, useRef, useEffect } from "react";
import { DownloadCloud, PackagePlus, ReceiptText, TrendingUp } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   CONFIG — Apna YouTube Video ID yahan daalo
───────────────────────────────────────────────────────────── */
const VIDEO_ID = "1Pk4jmqiROs"; // 👈 Replace with your actual YouTube video ID

/* ─────────────────────────────────────────────────────────────
   STEPS DATA
───────────────────────────────────────────────────────────── */
const STEPS = [
  { icon: <DownloadCloud size={30} strokeWidth={1.8} />, title: "Install & Register", desc: "Sign up in 30 seconds with just your mobile number. No credit card required to start." },
  { icon: <PackagePlus size={30} strokeWidth={1.8} />, title: "Add Custom Items", desc: "Import your inventory via Excel or simply scan barcodes to quickly build your store." },
  { icon: <ReceiptText size={30} strokeWidth={1.8} />, title: "Generate Bills", desc: "Create beautiful, fully GST-compliant invoices in under 10 seconds efficiently." },
  { icon: <TrendingUp size={30} strokeWidth={1.8} />, title: "Scale & Grow", desc: "Send instant offers on WhatsApp, track key sales analytics, and manage multiple branches." }
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-12 px-6 pb-[88px] bg-white relative overflow-hidden"
    >
      {/* Subtle bg blobs */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 10% 60%, rgba(109,40,217,.05) 0%, transparent 50%), radial-gradient(circle at 90% 30%, rgba(139,92,246,.06) 0%, transparent 50%)"
      }} />

      <div className="max-w-[1040px] mx-auto">

        {/* ── HEADER ── */}
        <div className={`text-center mb-5 transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 bg-[rgba(124,58,237,.08)] border border-[rgba(124,58,237,.2)] rounded-full py-1.5 px-4 text-xs font-bold text-[#7c3aed] tracking-wider uppercase mb-4">
            {/* YouTube icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch How It Works
          </div>

          <h2 className="text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold text-[#0f0720] leading-[1.18] mb-3 tracking-tight">
            See How {" "}
            <span className="text-[#7c3aed]">KB Billing</span> Works
          </h2>
          <p className="text-[15px] text-[#6b7280] max-w-[460px] mx-auto leading-[1.7]">
            Understand in just 2 minutes — from GST billing to inventory management, everything in one video.
          </p>
        </div>

        {/* ── CENTRED LAYOUT ── */}
        <div className={`flex flex-col gap-8 items-center transition-all duration-500 ease-in-out delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>

          {/* ── VIDEO PLAYER ── */}
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_24px_64px_rgba(109,40,217,.2),0_8px_24px_rgba(0,0,0,.1)] bg-[#0d0b1a] aspect-video w-full">
            {!playing ? (
              /* ── THUMBNAIL / POSTER STATE ── */
              <div className="relative w-full h-full">
                {/* Thumbnail image from YouTube */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="KB Billing Demo Video"
                  className="w-full h-full object-cover block"
                  onError={e => {
                    e.target.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(76,29,149,.55)] to-[rgba(109,40,217,.35)]" />

                {/* Channel info bar */}
                <div className="absolute top-0 left-0 right-0 bg-black/55 backdrop-blur-[8px] py-3 px-[18px] flex items-center gap-3 z-10">
                  {/* KB Logo circle */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6d28d9] to-[#8b5cf6] flex items-center justify-center text-xs font-extrabold text-white shrink-0">KB</div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-[1.2]">
                      KB Billing Business — Full Demo
                    </div>
                    <div className="text-[11px] text-white/65">KB Billing</div>
                  </div>
                  {/* Right side icons */}
                  <div className="ml-auto flex gap-3.5 items-center">
                    {[
                      <path d="M11 5h2v2h-2zM11 9h2v8h-2z" fill="rgba(255,255,255,.7)" />,
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="rgba(255,255,255,.7)" />,
                    ].map((icon, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24">{icon}</svg>
                    ))}
                  </div>
                </div>

                {/* Center play button */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/95 border-none cursor-pointer flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,.4),0_0_0_8px_rgba(255,255,255,.15)] transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] z-20 hover:scale-[1.12] hover:shadow-[0_12px_40px_rgba(0,0,0,.5),0_0_0_12px_rgba(255,255,255,.12)]"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#7c3aed" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/55 backdrop-blur-[8px] py-3 px-[18px] flex items-center justify-between z-10">
                  {/* Progress bar */}
                  <div className="flex-1 mr-4">
                    <div className="h-1 bg-white/25 rounded-sm overflow-hidden">
                      <div className="h-full w-0 bg-[#ff0000] rounded-sm" />
                    </div>
                  </div>
                  {/* YouTube logo */}
                  <svg width="72" height="16" viewBox="0 0 90 20" fill="white">
                    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" />
                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
                    <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" fill="white" />
                  </svg>
                </div>
              </div>
            ) : (
              /* ── ACTUAL YOUTUBE EMBED ── */
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                title="KB Billing Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none block"
              />
            )}
          </div>

        </div>

        {/* ── NEW HOW IT WORKS STEPS ── */}
        <div className="mt-[100px] pt-[60px] border-t border-dashed border-[#e5e7eb] relative">
          <div className="text-center mb-[60px]">
            <h3 className="text-[clamp(1.5rem,3.2vw,2.2rem)] font-extrabold text-[#111827] mb-3.5">
              Start Your Journey in <span className="text-[#7c3aed]">4 Easy Steps</span>
            </h3>
            <p className="text-base text-[#6b7280] max-w-[520px] mx-auto leading-[1.6]">
              Transition your traditional business to a smart digital ecosystem effortlessly and intuitively.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-8 relative">
            {/* Decorative dashed line for desktop */}
            <div className="hidden min-[900px]:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent z-0" />

            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center shadow-[0_12px_30px_rgba(109,40,217,.15)] border-[1.5px] border-[#ede9fe] text-[#6d28d9] mb-6 transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-110 group-hover:-translate-y-1">
                  {step.icon}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#6D28D9] text-white flex items-center justify-center text-sm font-extrabold border-2 border-white shadow-[0_4px_10px_rgba(109,40,217,.4)]">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-[17px] font-bold text-[#1f2937] mb-3">{step.title}</h4>
                <p className="text-sm text-[#6b7280] leading-[1.6] px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}