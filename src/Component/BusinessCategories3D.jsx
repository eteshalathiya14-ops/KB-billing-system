import { useEffect, useRef } from "react";

const BRAND = "#633CDD";
const HEX = "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)";

const cats = [
  { name: "Retail Store",    tag: "GST + POS",      col: "#633CDD", d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" },
  { name: "Kirana Store",    tag: "Fast billing",   col: "#d97706", d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z M3 6h18 M16 10a4 4 0 01-8 0" },
  { name: "Restaurant",      tag: "KOT + Table",    col: "#7c3aed", d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2 M7 2v20 M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3v7" },
  { name: "Medical Store",   tag: "Expiry alerts",  col: "#0e9f6e", d: "M12 5v14 M5 12h14" },
  { name: "Clothing Store",  tag: "Size-wise",      col: "#e11d48", d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" },
  { name: "Cafe / Tea Shop", tag: "Quick order",    col: "#0284c7", d: "M18 8h1a4 4 0 010 8h-1 M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3 M10 1v3 M14 1v3" },
  { name: "Mobile Shop",     tag: "IMEI track",     col: "#7c3aed", d: "M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z M12 18h.01" },
  { name: "Salon & Spa",     tag: "Staff comm.",    col: "#db2777", d: "M6 3h12l4 6-10 13L2 9z M12 22V9" },
  { name: "Electronics",     tag: "Warranty mgmt",  col: "#0891b2", d: "M2 3h20v14H2z M8 21h8 M12 17v4" },
  { name: "Hardware Store",  tag: "Unit billing",   col: "#b45309", d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" },
  { name: "Wholesale",       tag: "Bulk orders",    col: "#059669", d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12" },
  { name: "Multi-Store",     tag: "Central mgmt",   col: "#6d28d9", d: "M2 7h20v14H2z M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" },
];

function StarCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 110 }, () => ({
      x: Math.random(), y: Math.random(), r: Math.random() * 1.3 + 0.3,
      tw: Math.random() * Math.PI * 2, spd: Math.random() * 0.012 + 0.004, b: Math.random() * 0.5 + 0.3,
    }));
    let raf;
    const draw = () => {
      canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
      const { width: w, height: h } = canvas;
      ctx.fillStyle = "#0d0b1a"; ctx.fillRect(0, 0, w, h);
      stars.forEach(s => {
        s.tw += s.spd;
        ctx.beginPath(); ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.b * (0.55 + 0.45 * Math.sin(s.tw))})`; ctx.fill();
      });
      const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.min(w, h) * 0.52);
      g.addColorStop(0, "rgba(99,60,221,.2)"); g.addColorStop(1, "rgba(99,60,221,0)");
      ctx.beginPath(); ctx.arc(w / 2, h / 2, Math.min(w, h) * 0.52, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

export default function BusinessGalaxy() {
  const galaxyRef = useRef(null);
  const rafRef    = useRef(null);
  const S = useRef({ rotX: 10, rotY: 0, tRX: 10, tRY: 0, drag: false, lmx: 0, lmy: 0, t: 0, autoSway: true });
  const tileRefs  = useRef([]);

  const isMob = typeof window !== "undefined" ? window.innerWidth < 580 : false;

  const R1 = isMob ? 70 : 124, R2 = isMob ? 128 : 218;
  const angles = [0, 60, 120, 180, 240, 300, 30, 90, 150, 210, 270, 330];
  const radii  = [R1, R1, R1, R1, R1, R1, R2, R2, R2, R2, R2, R2];

  const tiles = cats.map((cat, i) => {
    const rad = (angles[i] * Math.PI) / 180;
    return { ...cat, x: radii[i] * Math.cos(rad), y: radii[i] * Math.sin(rad), z: Math.sin(rad * 1.3) * 28 };
  });

  useEffect(() => {
    const s = S.current;
    const SWAY_AMP_X = 14, SWAY_AMP_Y = 18, SWAY_SPEED = 0.006;
    const loop = () => {
      s.t += SWAY_SPEED;
      if (s.autoSway) { s.tRX = 10 + Math.sin(s.t) * SWAY_AMP_X; s.tRY = Math.sin(s.t * 0.7 + 1.2) * SWAY_AMP_Y; }
      s.rotX += (s.tRX - s.rotX) * 0.045;
      s.rotY += (s.tRY - s.rotY) * 0.045;
      if (galaxyRef.current) galaxyRef.current.style.transform = `rotateX(${s.rotX}deg) rotateY(${s.rotY}deg)`;
      tileRefs.current.forEach((el, i) => {
        if (el) el.style.transform = `translateZ(${tiles[i].z + Math.sin(s.t * 1.2 + i * 0.55) * 7}px)`;
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafRef.current);
  }, [tiles]);

  const sceneHandlers = {
    onMouseEnter: () => { S.current.autoSway = false; },
    onMouseLeave: () => { S.current.autoSway = true; S.current.drag = false; },
    onMouseMove: (e) => {
      const s = S.current;
      if (s.drag) {
        s.tRY += (e.clientX - s.lmx) * 0.45; s.tRX -= (e.clientY - s.lmy) * 0.28;
        s.tRX = Math.max(-38, Math.min(38, s.tRX)); s.lmx = e.clientX; s.lmy = e.clientY;
      } else {
        const r = e.currentTarget.getBoundingClientRect();
        s.tRX = 10 - ((e.clientY - r.top - r.height / 2) / r.height) * 16;
        s.tRY = ((e.clientX - r.left - r.width / 2) / r.width) * 20;
      }
    },
    onMouseDown: (e) => { const s = S.current; s.drag = true; s.lmx = e.clientX; s.lmy = e.clientY; },
    onMouseUp:   () => { S.current.drag = false; },
    onTouchStart: (e) => {
      const s = S.current; s.drag = true;
      if (e.touches?.length === 1) { s.lmx = e.touches[0].clientX; s.lmy = e.touches[0].clientY; }
    },
    onTouchMove: (e) => {
      const s = S.current;
      if (s.drag && e.touches?.length === 1) {
        s.tRY += (e.touches[0].clientX - s.lmx) * 0.45;
        s.tRX -= (e.touches[0].clientY - s.lmy) * 0.28;
        s.tRX = Math.max(-38, Math.min(38, s.tRX));
        s.lmx = e.touches[0].clientX; s.lmy = e.touches[0].clientY;
      }
    },
    onTouchEnd: () => { S.current.drag = false; },
  };

  const TW = isMob ? 66  : 108;
  const TH = isMob ? 76  : 124;
  const IW = isMob ? 21  : 34;

  return (
    <section
      className="font-sans"
      style={{
        background: "#EBEBEB",
        padding: isMob ? "1.2rem 0 0" : "2.5rem 0 0",
        minHeight: isMob ? 420 : 680,
      }}
    >
      {/* Heading */}
      <div className="text-center mb-8 px-4" style={{ marginBottom: isMob ? "1.2rem" : "2rem" }}>
        <div
          className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-3"
          style={{
            color: "#a78bfa",
            background: "rgba(99,60,221,.12)",
            border: "0.5px solid rgba(99,60,221,.3)",
            letterSpacing: "0.08em",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: BRAND, animation: "blink 2s ease-in-out infinite" }}
          />
          Works for every business
        </div>

        <h2
          className="font-medium text-gray-900 leading-tight mb-1.5"
          style={{ fontSize: "clamp(1.2rem,4vw,2.2rem)" }}
        >
          Built for Every Business
        </h2>

        <p
          className="text-gray-500 max-w-[420px] mx-auto leading-relaxed"
          style={{ fontSize: isMob ? 12 : 14 }}
        >
          A dynamic ecosystem tailored for modern commerce outposts.
        </p>
      </div>

      {/* Galaxy scene */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maxWidth:   isMob ? 340 : "100vw",
          height:     isMob ? 340 : "100vh",
          margin:     "0 auto",
          background: "#0d0b1a",
          borderRadius: isMob ? 18 : 0,
          touchAction: "pan-y",
        }}
        {...sceneHandlers}
      >
        <StarCanvas />

        {/* Rings */}
        {[isMob ? 140 : 172, isMob ? 260 : 318, isMob ? 380 : 468].map((sz, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: "50%", top: "50%",
              width: sz, height: sz,
              border: "1px solid rgba(99,60,221,.18)",
              transform: "translate(-50%,-50%)",
              animation: `rp 4s ease-in-out ${i * 1.2}s infinite`,
            }}
          />
        ))}

        {/* Perspective wrapper */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: 900 }}
        >
          <div
            ref={galaxyRef}
            style={{
              position: "relative",
              width:  isMob ? 220 : 520,
              height: isMob ? 220 : 520,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Hub */}
            <div
              className="absolute flex flex-col items-center justify-center z-30"
              style={{
                left: "50%", top: "50%",
                transform: "translate(-50%,-50%) translateZ(20px)",
                width:  isMob ? 44 : 84,
                height: isMob ? 44 : 84,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#633CDD,#a78bfa)",
                animation: "hpulse 3s ease-in-out infinite",
              }}
            >
              <span
                className="font-bold text-white leading-none"
                style={{ fontSize: isMob ? 10 : 17 }}
              >
                KB
              </span>
              <span
                className="text-white/80 text-center leading-snug"
                style={{ fontSize: isMob ? 6 : 9 }}
              >
                Billing<br />Business
              </span>
            </div>

            {/* Tiles */}
            {tiles.map((cat, i) => {
              const paths = cat.d.split(" M").map((seg, j) => (
                <path key={j} d={j === 0 ? seg : "M" + seg} />
              ));
              return (
                <div
                  key={cat.name}
                  ref={el => (tileRefs.current[i] = el)}
                  className="absolute cursor-pointer"
                  style={{
                    left: `calc(50% + ${cat.x}px - ${TW / 2}px)`,
                    top:  `calc(50% + ${cat.y}px - ${TH / 2}px)`,
                    transformStyle: "preserve-3d",
                    zIndex: Math.round(cat.z + 20),
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{
                      width:     TW,
                      height:    TH,
                      clipPath:  HEX,
                      gap:       5,
                      background: `${cat.col}1e`,
                      border:    `1.5px solid ${cat.col}55`,
                      transition: "transform .3s cubic-bezier(.34,1.56,.64,1)",
                    }}
                  >
                    {/* Icon box */}
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width:        IW,
                        height:       IW,
                        borderRadius: isMob ? 6 : 9,
                        background:   `${cat.col}30`,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={cat.col}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: isMob ? 10 : 18, height: isMob ? 10 : 18 }}
                      >
                        {paths}
                      </svg>
                    </div>

                    {/* Name */}
                    <span
                      className="text-center leading-snug text-white/90 px-0.5"
                      style={{ fontSize: isMob ? 6.5 : 10.5, fontWeight: 500 }}
                    >
                      {cat.name}
                    </span>

                    {/* Tag — desktop only */}
                    {!isMob && (
                      <span
                        className="text-white/40 tracking-wide"
                        style={{ fontSize: 8.5 }}
                      >
                        {cat.tag}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) { section { min-height: 340px !important; } }
          @keyframes rp      { 0%,100%{opacity:.35} 50%{opacity:.9} }
          @keyframes hpulse  { 0%,100%{box-shadow:0 0 0 2px rgba(163,139,250,.3),0 0 40px rgba(99,60,221,.65)} 50%{box-shadow:0 0 0 6px rgba(163,139,250,.12),0 0 60px rgba(99,60,221,.95)} }
          @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:.3} }
        `}</style>
      </div>
    </section>
  );
}