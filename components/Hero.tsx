"use client";
 
import { useEffect, useRef, useState } from "react";
 
// ─── Word data ────────────────────────────────────────────────────────────────
const WORDS = [
  { highlight: "F", rest: "ORENSIC", floatIdx: 1 },
  { highlight: "A", rest: "NALYSIS", floatIdx: 2 },
  { highlight: "C", rest: "LUB &",   floatIdx: 3 },
  { highlight: "T", rest: "RIAGE",   floatIdx: 4 },
];

export default function Hero() {
  return (
    <>
      <GlobalStyles />
      <div id="hero">
        <MainHero />
      </div>
    </>
  );
}
 
 
// ─── Letter graphics (F=gun, A=fingerprint, C=magnifier, T=detective) ─────────
function LetterGraphic({ letter }: { letter: string }) {
  if (letter === "F") return (
    <div className="letter-f-custom">
      <div className="f-vertical" /><div className="f-top" /><div className="f-middle" />
      <div className="integrated-gun" />
    </div>
  );
  if (letter === "A") return (
    <div className="letter-a-custom">
      <div className="a-left" /><div className="a-right" /><div className="a-cross" />
      <div className="fingerprint-pattern" />
    </div>
  );
  if (letter === "C") return (
    <div className="letter-c-custom">
      <div className="c-arc" />
      <div className="magnifying-glass">
        <div className="mag-lens" /><div className="mag-handle" />
      </div>
    </div>
  );
  if (letter === "T") return (
    <div className="letter-t-custom">
      <div className="t-horizontal" /><div className="t-vertical" />
      <div className="detective-figure">
        <div className="detective-hat" /><div className="detective-glasses" />
      </div>
    </div>
  );
  return null;
}
 
// ─── Main Hero ────────────────────────────────────────────────────────────────
function MainHero() {
  // Hover floating effect removed
  const [clicked, setClicked] = useState<number | null>(null);
 
  const handleClick = (i: number) => {
    setClicked(i);
    setTimeout(() => setClicked(null), 1200);
  };
 
  return (
    <div className="main-hero">
      <div className="hero-bg" />
      <div className="hero-particles" />
 
      <main className="main-content">
        <div className="main-text">
          {WORDS.map((w, i) => {
            const isClick = clicked === i;
            const cls = [
              "word-block",
              `subtle-float-${w.floatIdx}`,
              isClick ? "clicked" : "",
            ].filter(Boolean).join(" ");

            return (
              <h2
                key={w.highlight}
                className={cls}
                style={{ animationDelay: `${i * 0.3}s` }}
                onClick={() => handleClick(i)}
              >
                <span className="letter-red">{w.highlight}</span>
                <span className="letter-white">{w.rest}</span>
              </h2>
            );
          })}
        </div>
      </main>
    </div>
  );
}
 
// ─── All CSS / Keyframes ──────────────────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');
 
      /* ══════════════════════════════════════════════
         LOADING SCREEN
      ══════════════════════════════════════════════ */
 
      .ls-root {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        overflow: hidden;
        perspective: 1000px;
        background:
          radial-gradient(circle at 30% 40%, rgba(255,0,0,0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(139,0,0,0.4) 0%, transparent 40%),
          linear-gradient(135deg, #000 0%, #1a0000 25%, #330000 50%, #1a0000 75%, #000 100%);
        animation: crimeSceneFloat 15s ease-in-out infinite;
        transition: opacity 0.4s ease;
      }
      .ls-root.ls-fade { opacity: 0; pointer-events: none; }
 
      /* crime-scene dot overlay */
      .ls-root::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          radial-gradient(circle at 15% 25%, rgba(255,0,0,0.20) 3px, transparent 4px),
          radial-gradient(circle at 85% 75%, rgba(255,0,0,0.15) 2px, transparent 3px),
          radial-gradient(circle at 45% 15%, rgba(220,20,60,0.10) 2.5px, transparent 3.5px),
          radial-gradient(circle at 25% 85%, rgba(255,0,0,0.25) 4px, transparent 5px);
        background-size: 80px 80px, 60px 60px, 100px 100px, 120px 120px;
        animation: evidenceFloat 20s linear infinite;
        z-index: -1;
      }
      /* cross-hatch */
      .ls-root::after {
        content: '';
        position: absolute;
        inset: 0;
        background:
          repeating-linear-gradient( 45deg, transparent, transparent 2px, rgba(255,0,0,0.05) 2px, rgba(255,0,0,0.05) 4px),
          repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(139,0,0,0.08) 3px, rgba(139,0,0,0.08) 6px);
        z-index: -1;
      }
 
      @keyframes crimeSceneFloat {
        0%,100% { background-position: 0 0, 100px 100px, 0 0; transform: translateZ(0);    }
        50%     { background-position: 50px 25px, 150px 125px, 0 0; transform: translateZ(10px); }
      }
      @keyframes evidenceFloat {
        0%   { transform: translateY(0)     rotate(0deg)   translateZ(0);   }
        100% { transform: translateY(-20px) rotate(360deg) translateZ(5px); }
      }
 
      /* ── Gunfire stage ─────────────────────────────── */
      .gunfire-container {
        position: relative;
        width: 100%; height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
      }
 
      .firing-gun {
        position: absolute;
        left: 3%; top: 50%;
        transform: translateY(-50%) translateZ(20px);
        transform-style: preserve-3d;
        animation: gun3DFloat 4s ease-in-out infinite;
      }
 
      .gun-body {
        width: 200px; height: 100px;
        background: linear-gradient(45deg, #1a1a1a, #333, #555, #333);
        clip-path: polygon(0% 40%, 50% 40%, 50% 20%, 100% 20%, 100% 60%, 50% 60%, 50% 80%, 0% 80%);
        box-shadow:
          0 10px 30px rgba(0,0,0,0.8),
          inset 0 2px 4px rgba(255,255,255,0.1),
          0 0 20px rgba(255,0,0,0.3);
        transform: rotateY(-10deg) rotateX(5deg);
        transition: all 0.3s ease;
      }
 
      .muzzle-flash {
        position: absolute;
        right: -60px; top: 50%;
        transform: translateY(-50%) translateZ(10px);
        width: 0; height: 0; opacity: 0;
      }
      .firing-gun.fire .muzzle-flash { animation: muzzleFlash3D 0.4s ease-out; }
 
      .bullet {
        position: absolute;
        right: -40px; top: 50%;
        width: 15px; height: 8px;
        background: linear-gradient(90deg, #ffff00, #ff8800);
        border-radius: 50%;
        opacity: 0;
        box-shadow: 0 0 30px #ffff00, 0 0 60px rgba(255,255,0,0.5);
        transform: translateZ(25px);
      }
      .firing-gun.fire .bullet { animation: bulletTravel3D 0.9s ease-out 0.1s; }
 
      @keyframes gun3DFloat {
        0%,100% { transform: translateY(-50%) translateZ(20px) rotateX(0deg);  }
        25%     { transform: translateY(-55%) translateZ(25px) rotateX(2deg);  }
        50%     { transform: translateY(-45%) translateZ(30px) rotateX(-2deg); }
        75%     { transform: translateY(-50%) translateZ(25px) rotateX(1deg);  }
      }
 
      @keyframes muzzleFlash3D {
        0%  { width:0; height:0; opacity:0; transform:translateY(-50%) translateZ(10px) rotateZ(0deg); }
        25% {
          width:100px; height:80px;
          background: radial-gradient(circle, #ffff00 0%, #ff8800 30%, #ff0000 60%, transparent 100%);
          opacity:1; border-radius:50%;
          transform:translateY(-50%) translateZ(15px) rotateZ(45deg);
          box-shadow: 0 0 50px rgba(255,255,0,0.8);
        }
        50% {
          width:120px; height:100px;
          transform:translateY(-50%) translateZ(20px) rotateZ(90deg);
          box-shadow: 0 0 80px rgba(255,0,0,0.6);
        }
        100%{ width:0; height:0; opacity:0; transform:translateY(-50%) translateZ(10px) rotateZ(180deg); }
      }
 
      @keyframes bulletTravel3D {
        0%  { right:-40px;  opacity:1;   transform:translateZ(25px) rotateY(0deg);   box-shadow:0 0 30px #ffff00, 0 0 60px rgba(255,255,0,0.5); }
        50% {               opacity:0.8; transform:translateZ(30px) rotateY(180deg); box-shadow:0 0 50px #ff8800, 0 0 100px rgba(255,136,0,0.4); }
        100%{ right:-900px; opacity:0;   transform:translateZ(35px) rotateY(360deg); box-shadow:0 0 20px #ff0000, 0 0 40px rgba(255,0,0,0.3); }
      }
 
      /* ── FACT letter containers ─────────────────────── */
      .fact-creation {
        display: flex;
        gap: 40px;
        position: relative;
      }
 
      .letter-container {
        position: relative;
        width: 120px; height: 150px;
        opacity: 0; transform: scale(0);
      }
      .letter-container.create { animation: letterExplode 0.8s ease-out forwards; }
 
      @keyframes letterExplode {
        0%  { opacity:0; transform:scale(0)   rotate(180deg); }
        60% { opacity:1; transform:scale(1.2) rotate(0deg);   }
        100%{ opacity:1; transform:scale(1)   rotate(0deg);   }
      }
 
      /* ── F — gun integrated ─────────────────────────── */
      .letter-f-custom { position:relative; width:100%; height:100%; }
      .f-vertical  { position:absolute; left:20px; top:20px;  width:20px; height:110px; background:#000; border:2px solid #000; }
      .f-top       { position:absolute; left:20px; top:20px;  width:80px; height:20px;  background:#000; }
      .f-middle    { position:absolute; left:20px; top:68px;  width:60px; height:18px;  background:#000; }
      .integrated-gun {
        position:absolute; left:10px; top:35px; width:80px; height:35px;
        background:#666;
        clip-path: polygon(15% 40%, 45% 40%, 45% 25%, 85% 25%, 85% 35%, 100% 35%, 100% 65%, 85% 65%, 85% 75%, 45% 75%, 45% 60%, 15% 60%);
      }
 
      /* ── A — fingerprint ────────────────────────────── */
      .letter-a-custom { position:relative; width:100%; height:100%; }
      .a-left  { position:absolute; left:20px;  top:20px; width:16px; height:100px; background:#000; transform:skewX(-8deg); }
      .a-right { position:absolute; right:20px; top:20px; width:16px; height:100px; background:#000; transform:skewX(8deg);  }
      .a-cross { position:absolute; left:25px;  top:65px; width:70px; height:14px;  background:#000; }
      .fingerprint-pattern {
        position:absolute; left:35px; top:25px;
        width:50px; height:50px; border-radius:50%;
        border:3px solid #555;
        box-shadow: inset 0 0 0 6px #444, inset 0 0 0 10px #555, inset 0 0 0 14px #444;
        opacity:0.6;
        animation: fingerprintScan 2s ease-in-out infinite;
      }
      @keyframes fingerprintScan {
        0%,100%{ box-shadow:inset 0 0 0 6px #444,inset 0 0 0 10px #555,inset 0 0 0 14px #444; }
        50%    { box-shadow:inset 0 0 0 6px #888,inset 0 0 0 10px #666,inset 0 0 0 14px #888; }
      }
 
      /* ── C — magnifying glass ───────────────────────── */
      .letter-c-custom { position:relative; width:100%; height:100%; }
      .c-arc {
        position:absolute; left:15px; top:20px;
        width:80px; height:100px;
        border:16px solid #000;
        border-right:none;
        border-radius:50px 0 0 50px;
      }
      .magnifying-glass {
        position:absolute; right:15px; top:40px;
        animation: magnifySearch 3s ease-in-out infinite;
      }
      .mag-lens {
        width:45px; height:45px;
        border:6px solid #666; border-radius:50%;
        background:rgba(255,255,255,0.1);
        position:relative;
      }
      .mag-lens::before {
        content:''; position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        width:25px; height:25px;
        border:3px solid #333; border-radius:50%;
      }
      .mag-handle {
        position:absolute; bottom:-30px; right:-15px;
        width:30px; height:6px;
        background:#666; transform:rotate(45deg); border-radius:3px;
      }
      .mag-handle::before {
        content:''; position:absolute; bottom:-3px; right:-3px;
        width:12px; height:12px; background:#444; border-radius:50%;
      }
      @keyframes magnifySearch {
        0%,100%{ transform:translateY(0)   rotate(0deg); }
        50%    { transform:translateY(-5px) rotate(5deg); }
      }
 
      /* ── T — detective ──────────────────────────────── */
      .letter-t-custom { position:relative; width:100%; height:100%; }
      .t-horizontal { position:absolute; left:10px; top:20px; width:100px; height:18px;  background:#000; }
      .t-vertical   { position:absolute; left:50px; top:20px; width:18px;  height:110px; background:#000; }
      .detective-figure {
        position:absolute; top:-20px; left:50%;
        transform:translateX(-50%);
        animation:detectiveNod 2.5s ease-in-out infinite;
      }
      .detective-hat {
        width:60px; height:30px; background:#333;
        border-radius:30px 30px 0 0; border:3px solid #000; position:relative;
      }
      .detective-hat::after {
        content:''; position:absolute; bottom:-10px; left:20%;
        width:60%; height:10px; background:#333; border-radius:15px; border:2px solid #000;
      }
      .detective-glasses {
        position:absolute; top:30px; left:50%;
        transform:translateX(-50%);
        width:45px; height:15px;
        border:3px solid #000; border-radius:20px; background:rgba(0,0,0,0.2);
      }
      .detective-glasses::before,
      .detective-glasses::after {
        content:''; position:absolute; top:50%; transform:translateY(-50%);
        width:12px; height:12px; border:3px solid #000; border-radius:50%; background:rgba(0,0,0,0.2);
      }
      .detective-glasses::before { left:-8px; }
      .detective-glasses::after  { right:-8px; }
      @keyframes detectiveNod {
        0%,100%{ transform:translateX(-50%) translateY(0);    }
        50%    { transform:translateX(-50%) translateY(-3px); }
      }
 
      /* ── Progress bar ───────────────────────────────── */
      .loading-progress {
        position:absolute; bottom:50px; width:100%; text-align:center;
      }
      .loading-text {
        font-family:'Montserrat',sans-serif; font-size:1.2rem; color:#fff;
        margin-bottom:20px; text-shadow:0 0 10px rgba(255,255,255,0.5);
      }
      .progress-bar {
        width:300px; height:12px;
        background:rgba(255,255,255,0.2);
        border-radius:6px; margin:0 auto 10px;
        overflow:hidden; border:1px solid #666;
      }
      .progress-fill {
        height:100%;
        background:linear-gradient(90deg,#ff0000,#ff4444,#ff0000);
        background-size:200% 100%;
        animation:progressShine 1s linear infinite;
        transition:width 0.1s ease;
      }
      @keyframes progressShine {
        0%  { background-position:-200% 0; }
        100%{ background-position: 200% 0; }
      }
      .percentage {
        font-family:'Montserrat',sans-serif; font-size:1.5rem; font-weight:bold;
        color:#ff0000; text-shadow:0 0 10px rgba(255,0,0,0.8);
      }
 
      /* ══════════════════════════════════════════════
         MAIN HERO
      ══════════════════════════════════════════════ */
 
      .main-hero {
        position:relative; min-height:100vh;
        display:flex; align-items:center; justify-content:center;
        overflow:hidden;
        font-family:'Montserrat',sans-serif;
      }
 
      /* animated gradient bg */
      .hero-bg {
        position:absolute; inset:0;
        background:linear-gradient(45deg,#000000,#330000 30%,#660000 60%,#000000);
        background-size:400% 400%;
        animation:floatingGradient 10s ease-in-out infinite;
        z-index:0;
      }
      @keyframes floatingGradient {
        0%  { background-position:0%   50%; }
        50% { background-position:100% 50%; }
        100%{ background-position:0%   50%; }
      }
 
      /* floating radial particles */
      .hero-particles {
        position:absolute; inset:0;
        pointer-events:none; z-index:0;
        background-image:
          radial-gradient(circle at 20% 20%, rgba(255,0,0,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0,0,0,0.30)   0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255,0,0,0.08) 0%, transparent 50%);
        animation:floatingParticles 12s linear infinite;
      }
      @keyframes floatingParticles {
        0%  { transform:translateY(0)     rotate(0deg); }
        100%{ transform:translateY(-20px) rotate(360deg); }
      }
 
      .main-content {
        position:relative; z-index:1;
        display:flex; justify-content:center; align-items:center;
        padding:20px; text-align:center;
      }
 
      .main-text {
        transform-style:preserve-3d;
        perspective:1000px;
      }
 
      /* ── Word blocks ─────────────────────────────────── */
      .word-block {
        position:relative;
        display:inline-block;
        padding:15px 25px; margin:8px;
        border-radius:12px;
        font-size:clamp(2.5rem, 8vw, 6rem);
        font-weight:900; letter-spacing:3px;
        background:rgba(255,255,255,0.05);
        backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.1);
        text-shadow:0 4px 8px rgba(0,0,0,0.3);
        box-shadow:0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        cursor:pointer;
        transform-style:preserve-3d;
        transition:
          box-shadow  0.3s ease,
          border-color 0.3s ease,
          filter      0.3s ease;
      }
 
      /* ── Per-word continuous float (staggered phases) ── */
      .subtle-float-1 { animation:subtleFloat1 4.0s ease-in-out infinite; }
      .subtle-float-2 { animation:subtleFloat2 4.0s ease-in-out infinite; }
      .subtle-float-3 { animation:subtleFloat3 4.0s ease-in-out infinite; }
      .subtle-float-4 { animation:subtleFloat4 4.0s ease-in-out infinite; }
 
      @keyframes subtleFloat1 {
        0%,100%{ transform:translateY(0)     translateZ(0)    rotateX(0deg)  rotateY(0deg);  }
        50%    { transform:translateY(-8px)  translateZ(15px) rotateX(2deg)  rotateY(1deg);  }
      }
      @keyframes subtleFloat2 {
        0%,100%{ transform:translateY(0)     translateZ(0)    rotateX(0deg)  rotateY(0deg);  }
        50%    { transform:translateY(-6px)  translateZ(12px) rotateX(-2deg) rotateY(-1deg); }
      }
      @keyframes subtleFloat3 {
        0%,100%{ transform:translateY(0)     translateZ(0)    rotateX(0deg) rotateY(0deg); }
        50%    { transform:translateY(-10px) translateZ(18px) rotateX(3deg) rotateY(2deg); }
      }
      @keyframes subtleFloat4 {
        0%,100%{ transform:translateY(0)     translateZ(0)    rotateX(0deg)  rotateY(0deg);  }
        50%    { transform:translateY(-7px)  translateZ(14px) rotateX(-1deg) rotateY(-2deg); }
      }
 
      /* ── Hover — 3D lift ─────────────────────────────── */
      .word-block.hovered {
        animation:none !important;
        transform: translateY(-25px) translateZ(50px) scale(1.08) rotateX(15deg) rotateY(5deg) !important;
        transition:
          transform    0.6s cubic-bezier(0.175,0.885,0.32,1.275),
          text-shadow  0.3s ease,
          box-shadow   0.3s ease,
          filter       0.3s ease;
        text-shadow:
          0 20px 40px rgba(255,0,0,0.6),
          0 0 30px rgba(255,255,255,0.3),
          10px 10px 20px rgba(0,0,0,0.8);
        box-shadow:
          0 25px 50px rgba(255,0,0,0.4),
          0 0 30px rgba(255,255,255,0.2),
          inset 0 1px 0 rgba(255,255,255,0.2);
        border-color: rgba(255,0,0,0.3);
        filter: brightness(1.2);
      }
 
      /* ── Click — float3DPulse burst ─────────────────── */
      .word-block.clicked {
        animation: float3DPulse 1.2s ease-out forwards !important;
      }
 
      @keyframes float3DPulse {
        0%  {
          transform:translateY(0)     translateZ(0)    scale(1)    rotateX(0deg)  rotateY(0deg);
        }
        20% {
          transform:translateY(-40px) translateZ(80px) scale(1.15) rotateX(20deg) rotateY(10deg);
          text-shadow:0 30px 60px rgba(255,0,0,0.8), 0 0 50px rgba(255,255,255,0.5);
        }
        40% { transform:translateY(-35px) translateZ(70px) scale(1.12) rotateX(18deg) rotateY(8deg); }
        60% { transform:translateY(-30px) translateZ(60px) scale(1.10) rotateX(15deg) rotateY(5deg); }
        80% { transform:translateY(-25px) translateZ(50px) scale(1.08) rotateX(12deg) rotateY(3deg); }
        100%{
          transform:translateY(-20px) translateZ(40px) scale(1.05) rotateX(10deg) rotateY(2deg);
          text-shadow:0 20px 40px rgba(255,0,0,0.6), 0 0 30px rgba(255,255,255,0.3);
        }
      }
 
      /* ── Letter colours — matching image exactly ─────── */
      .letter-red   { color:#dc143c; display:inline; }
      .letter-white { color:#ffffff; display:inline; }
 
      /* ── Responsive ──────────────────────────────────── */
      @media (max-width:768px) {
        .fact-creation   { gap:16px; }
        .letter-container{ width:80px; height:100px; }
        .gun-body        { width:120px; height:60px; }
        .word-block      { font-size:clamp(1.8rem,10vw,3rem); padding:10px 16px; margin:5px; }
      }
    `}</style>
  );
}