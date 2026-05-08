(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// ─── Word data ────────────────────────────────────────────────────────────────
const WORDS = [
    {
        highlight: "F",
        rest: "ORENSIC",
        floatIdx: 1
    },
    {
        highlight: "A",
        rest: "NALYSIS",
        floatIdx: 2
    },
    {
        highlight: "C",
        rest: "LUB &",
        floatIdx: 3
    },
    {
        highlight: "T",
        rest: "RIAGE",
        floatIdx: 4
    }
];
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalStyles, {}, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainHero, {}, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Hero;
// ─── Letter graphics (F=gun, A=fingerprint, C=magnifier, T=detective) ─────────
function LetterGraphic({ letter }) {
    if (letter === "F") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "letter-f-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "f-vertical"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "f-top"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "f-middle"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 62
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "integrated-gun"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
    if (letter === "A") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "letter-a-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-left"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-right"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-cross"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 60
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fingerprint-pattern"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
    if (letter === "C") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "letter-c-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "c-arc"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "magnifying-glass",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mag-lens"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mag-handle"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
    if (letter === "T") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "letter-t-custom",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-horizontal"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "t-vertical"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 49,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detective-figure",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detective-hat"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detective-glasses"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 51,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
    return null;
}
_c1 = LetterGraphic;
// ─── Main Hero ────────────────────────────────────────────────────────────────
function MainHero() {
    _s();
    // Hover floating effect removed
    const [clicked, setClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClick = (i)=>{
        setClicked(i);
        setTimeout(()=>setClicked(null), 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main-hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-bg"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-particles"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "main-text",
                    children: WORDS.map((w, i)=>{
                        const isClick = clicked === i;
                        const cls = [
                            "word-block",
                            `subtle-float-${w.floatIdx}`,
                            isClick ? "clicked" : ""
                        ].filter(Boolean).join(" ");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: cls,
                            style: {
                                animationDelay: `${i * 0.3}s`
                            },
                            onClick: ()=>handleClick(i),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "letter-red",
                                    children: w.highlight
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "letter-white",
                                    children: w.rest
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, w.highlight, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(MainHero, "edsXgRT1l2BUwkJUq+Jg5XfzTk4=");
_c2 = MainHero;
// ─── All CSS / Keyframes ──────────────────────────────────────────────────────
function GlobalStyles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
        children: `
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
    `
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c3 = GlobalStyles;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Hero");
__turbopack_context__.k.register(_c1, "LetterGraphic");
__turbopack_context__.k.register(_c2, "MainHero");
__turbopack_context__.k.register(_c3, "GlobalStyles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const About = ()=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            title: 'Threat Intelligence',
            desc: 'Understanding and analyzing real-world cyber threats'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            title: 'Skill Engineering',
            desc: 'Learning through practical challenges'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: 'Collaborative Network',
            desc: 'Building a strong, security-focused community'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            title: 'Professional Mastery',
            desc: 'Developing industry-level expertise in forensics'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-bg-animate pointer-events-none absolute inset-0 z-0",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          .about-bg-animate {
            background: radial-gradient(circle at 20% 30%, #b2204940 0%, transparent 60%),
                        radial-gradient(circle at 80% 70%, #b2204940 0%, transparent 60%),
                        linear-gradient(120deg, #fff0f6 0%, #f8e1ec 100%);
            animation: aboutGradientMove 12s ease-in-out infinite;
          }
          @keyframes aboutGradientMove {
            0%,100% { background-position: 0 0, 100px 100px, 0 0; }
            50%     { background-position: 80px 40px, 180px 140px, 0 0; }
          }
          .about-bg-particle {
            position: absolute;
            border-radius: 50%;
            opacity: 0.18;
            filter: blur(1.5px);
            animation: aboutParticleFloat 8s linear infinite;
          }
          .about-bg-particle1 { width: 80px; height: 80px; left: 10%; top: 20%; background: #b22049; animation-delay: 0s; }
          .about-bg-particle2 { width: 50px; height: 50px; left: 70%; top: 60%; background: #b22049; animation-delay: 2s; }
          .about-bg-particle3 { width: 30px; height: 30px; left: 40%; top: 80%; background: #b22049; animation-delay: 4s; }
          @keyframes aboutParticleFloat {
            0%   { transform: translateY(0) scale(1); }
            50%  { transform: translateY(-30px) scale(1.2); }
            100% { transform: translateY(0) scale(1); }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-bg-particle about-bg-particle1"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-bg-particle about-bg-particle2"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-bg-particle about-bg-particle3"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: ref,
                            className: "relative",
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: isInView ? {
                                opacity: 1,
                                x: 0
                            } : {
                                opacity: 0,
                                x: -50
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-2xl overflow-hidden shadow-2xl group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                        children: `
                .about-logo-zoom {
                  transition: transform 0.5s cubic-bezier(.4,2,.6,1);
                }
                .group:hover .about-logo-zoom {
                  transform: scale(1.08);
                  animation: logoZoomPulse 0.7s;
                }
                @keyframes logoZoomPulse {
                  0%   { transform: scale(1); }
                  50%  { transform: scale(1.12); }
                  100% { transform: scale(1.08); }
                }
              `
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/Fact%20Logo.png",
                                        alt: "FACT Forensic Analysis Club & Triage Logo",
                                        className: "w-full h-96 object-cover about-logo-zoom"
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: isInView ? {
                                opacity: 1,
                                x: 0
                            } : {
                                opacity: 0,
                                x: 50
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold font-poppins mb-6",
                                    style: {
                                        color: '#b22049'
                                    },
                                    children: "Welcome to FACT Club"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 92,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 mb-8 leading-relaxed",
                                    children: "Founded at ACN’23 (Amrita Cyber Nation), FACT is a student-driven community exploring the world of forensic analysis and digital investigation. We bring together curious minds to learn, collaborate, and push boundaries in both digital and physical forensics. Whether you're a beginner or an expert, FACT is your space to grow, innovate, and uncover the truth. Join us on this exciting journey into the world of cyber forensics and triage!"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",
                                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex items-start space-x-3",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: isInView ? {
                                                opacity: 1,
                                                y: 0
                                            } : {},
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.4 + index * 0.1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                        className: "w-5 h-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/About.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/About.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold font-roboto text-gray-900 mb-1",
                                                            children: feature.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/About.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: feature.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/About.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/About.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Members.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-coverflow.mjs [app-client] (ecmascript) <export default as EffectCoverflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Particles = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden z-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-full h-full animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]"
            }, void 0, false, {
                fileName: "[project]/components/Members.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-full h-full animate-[spin_20s_linear_infinite] bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.15)_0%,transparent_70%)]"
            }, void 0, false, {
                fileName: "[project]/components/Members.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Members.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Particles;
const GuestsCarousel = ()=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [centerIndex, setCenterIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuestsCarousel.useEffect": ()=>{
            const checkMobile = {
                "GuestsCarousel.useEffect.checkMobile": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) setIsMobile(window.innerWidth < 768);
                }
            }["GuestsCarousel.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "GuestsCarousel.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["GuestsCarousel.useEffect"];
        }
    }["GuestsCarousel.useEffect"], []);
    const guests2024 = [
        {
            name: "ADITHI SURESH",
            designation: "PRESIDENT",
            organization: "3rd year Cybersecurity Student",
            photo: "/images/adithi1.jpg"
        },
        {
            name: "Vivek Reddy",
            designation: "TECHNICAL LEAD",
            organization: "3rd year Cybersecurity Student",
            photo: "/images/vivek1.jpg"
        },
        {
            name: "Phani Chandan Reddy",
            designation: "SECRETARY",
            organization: "3rd year Cybersecurity Student",
            photo: "/images/phani1.jpg"
        },
        {
            name: "Praveen Preetham",
            designation: "PHYSICAL FORENSICS CO-ORDINATOR",
            organization: "3rd year Cybersecurity Student",
            photo: "/images/praveen2.jpg"
        },
        {
            name: "Archanaa Dinakaran",
            designation: "VICE PRESIDENT",
            organization: "2nd year Cybersecurity Student",
            photo: "/images/archana1.jpg"
        },
        {
            name: "Sarany G",
            designation: "CLUB CO-ORDINATOR",
            organization: "Assistant Professor, Amrita University",
            photo: "/images/saranya.jpg"
        }
    ];
    const handleCardOpen = (index)=>{
        setExpandedIndex(index);
        swiperRef.current?.autoplay?.stop();
    };
    const handleCardClose = ()=>{
        setExpandedIndex(null);
        swiperRef.current?.autoplay?.start();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "members",
        className: "relative py-24 overflow-hidden bg-gradient-to-br from-black via-red-900 to-red-700",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Particles, {}, void 0, false, {
                fileName: "[project]/components/Members.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative text-center mb-16 z-10",
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: isInView ? {
                    opacity: 1,
                    y: 0
                } : {},
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[clamp(2.5rem,6vw,4.5rem)] font-black font-roboto text-red-600 drop-shadow-xl mb-4",
                        children: "Meet the Team"
                    }, void 0, false, {
                        fileName: "[project]/components/Members.tsx",
                        lineNumber: 121,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-text max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#b22049] via-black to-[#b22049]",
                        style: {
                            fontWeight: 500
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white",
                            children: "A focused group shaping the future through innovation and technical excellence."
                        }, void 0, false, {
                            fileName: "[project]/components/Members.tsx",
                            lineNumber: 125,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Members.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Members.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__["EffectCoverflow"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                ],
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 900,
                onSwiper: (swiper)=>swiperRef.current = swiper,
                onSlideChange: (swiper)=>{
                    setCenterIndex(swiper.realIndex);
                    if (expandedIndex !== null && expandedIndex !== swiper.realIndex) {
                        setExpandedIndex(null);
                    }
                },
                coverflowEffect: {
                    rotate: 25,
                    stretch: 0,
                    depth: 250,
                    modifier: 1.2,
                    slideShadows: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                },
                className: "w-[92%] max-w-7xl relative z-10",
                children: guests2024.map((guest, index)=>{
                    const isExpanded = expandedIndex === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        className: "flex justify-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: [
                                "group relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden",
                                "w-[380px] md:w-[500px] text-center cursor-pointer will-change-transform shadow-[0_0_60px_rgba(255,255,255,0.12)]"
                            ].join(" "),
                            whileHover: {
                                scale: 1.04
                            },
                            transition: {
                                type: "spring",
                                stiffness: 180,
                                damping: 22
                            },
                            onMouseEnter: ()=>handleCardOpen(index),
                            onMouseLeave: ()=>handleCardClose(),
                            onClick: ()=>isExpanded ? handleCardClose() : handleCardOpen(index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[320px] md:h-[400px] relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: guest.photo,
                                        alt: guest.name,
                                        className: "w-full h-full object-cover",
                                        loading: "lazy",
                                        decoding: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Members.tsx",
                                        lineNumber: 178,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Members.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 24
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 24
                                        },
                                        transition: {
                                            duration: 0.35
                                        },
                                        className: "absolute bottom-0 left-0 right-0 px-4 pb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "   mx-auto w-full rounded-2xl border border-white/15   bg-white/10 backdrop-blur-md   px-4 py-3   text-center   ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "truncate font-semibold font-roboto text-[15px] md:text-base text-white leading-tight",
                                                    children: guest.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Members.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate text-xs md:text-sm text-gray-200/90 leading-snug mt-0.5",
                                                    children: guest.designation
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Members.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1.5 flex items-center justify-center gap-2 min-w-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate text-xs md:text-sm text-gray-100/90",
                                                        children: guest.organization
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Members.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Members.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Members.tsx",
                                            lineNumber: 198,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "info", false, {
                                        fileName: "[project]/components/Members.tsx",
                                        lineNumber: 190,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Members.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Members.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/components/Members.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/Members.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Members.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GuestsCarousel, "xYz+AwxbTUIPlDunh/TnsnXXC2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = GuestsCarousel;
const __TURBOPACK__default__export__ = GuestsCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "Particles");
__turbopack_context__.k.register(_c1, "GuestsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Events.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Events
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const events = [
    {
        title: "Cyber Forensics Workshop",
        date: "March 2026",
        desc: "Hands-on digital investigation session"
    },
    {
        title: "CTF Challenge",
        date: "April 2026",
        desc: "Capture The Flag cybersecurity event"
    },
    {
        title: "Malware Analysis Lab",
        date: "May 2026",
        desc: "Reverse engineering & threat analysis"
    }
];
function Events() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "events",
        className: "relative py-20 px-6 max-w-6xl mx-auto overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": "true",
                className: "absolute inset-0 -z-10",
                initial: {
                    opacity: 0.5,
                    scale: 1
                },
                animate: {
                    opacity: 0.8,
                    scale: 1.1
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                },
                style: {
                    background: 'radial-gradient(circle at 70% 30%, #b22049 0%, #3b82f6 40%, transparent 80%)',
                    filter: 'blur(80px)'
                }
            }, void 0, false, {
                fileName: "[project]/components/Events.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center mb-12",
                children: "Upcoming Events"
            }, void 0, false, {
                fileName: "[project]/components/Events.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: events.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        className: "p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold",
                                children: e.title
                            }, void 0, false, {
                                fileName: "[project]/components/Events.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-cyan-400 mt-2",
                                children: e.date
                            }, void 0, false, {
                                fileName: "[project]/components/Events.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-2",
                                children: e.desc
                            }, void 0, false, {
                                fileName: "[project]/components/Events.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/Events.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Events.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Events.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Events;
var _c;
__turbopack_context__.k.register(_c, "Events");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function ContactForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 px-6 max-w-4xl mx-auto text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                className: "text-3xl font-bold mb-10",
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: "Contact"
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                className: "space-y-6",
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    delay: 0.2,
                    ease: "easeOut"
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                        type: "text",
                        placeholder: "Name",
                        className: "w-full p-3 bg-white/5 border border-white/10 rounded-lg",
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].input, {
                        type: "email",
                        placeholder: "Email",
                        className: "w-full p-3 bg-white/5 border border-white/10 rounded-lg",
                        initial: {
                            opacity: 0,
                            x: 30
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.4
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].textarea, {
                        placeholder: "Message",
                        className: "w-full p-3 bg-white/5 border border-white/10 rounded-lg",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.5
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "px-6 py-3 bg-cyan-400 text-black rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-300",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.97
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.6
                        },
                        viewport: {
                            once: true
                        },
                        children: "Send Message"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0ui59p.._.js.map