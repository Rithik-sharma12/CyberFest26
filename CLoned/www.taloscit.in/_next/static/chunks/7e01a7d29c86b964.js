(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 69441, e => {
    "use strict";
    var t = e.i(43476);

    function a({
        children: e,
        className: a = ""
    }) {
        return (0, t.jsx)("div", {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${a}`,
            children: e
        })
    }
    e.s(["default", () => a])
}, 30982, e => {
    "use strict";
    var t = e.i(43476);
    let a = (0, e.i(71645).memo)(function({
        opacity: e = 1,
        showMap: a = !0
    }) {
        return (0, t.jsxs)("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            style: {
                opacity: e
            },
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 bg-[#050000]"
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 opacity-100",
                style: {
                    backgroundImage: "linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    boxShadow: "inset 0 0 100px rgba(0,0,0,0.9)"
                }
            }), a && (0, t.jsx)("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/5 opacity-70",
                style: {
                    backgroundImage: 'url("/images/map-image.png")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    maskImage: "radial-gradient(circle, black 40%, transparent 80%)"
                }
            }), (0, t.jsxs)("div", {
                className: "radar-target absolute top-[20%] right-[20%] w-[150px] h-[150px] border border-dashed border-red-600/60 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.2)]",
                children: [(0, t.jsx)("div", {
                    className: "absolute w-[70%] h-[70%] border border-red-600/40 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]"
                }), (0, t.jsx)("div", {
                    className: "absolute w-[10px] h-[10px] bg-red-600 rounded-full shadow-[0_0_10px_#ff0000] animate-[pulse_2s_ease-in-out_infinite]"
                })]
            }), (0, t.jsxs)("div", {
                className: "radar-target absolute bottom-[15%] left-[10%] w-[100px] h-[100px] border border-dashed border-red-600/60 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.2)]",
                children: [(0, t.jsx)("div", {
                    className: "absolute w-[70%] h-[70%] border border-red-600/40 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]"
                }), (0, t.jsx)("div", {
                    className: "absolute w-[10px] h-[10px] bg-red-600 rounded-full shadow-[0_0_10px_#ff0000] animate-[pulse_2s_ease-in-out_infinite]"
                })]
            }), (0, t.jsxs)("div", {
                className: "radar-target absolute top-[60%] left-[50%] w-[80px] h-[80px] border border-dashed border-red-600/60 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.2)]",
                children: [(0, t.jsx)("div", {
                    className: "absolute w-[70%] h-[70%] border border-red-600/40 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]"
                }), (0, t.jsx)("div", {
                    className: "absolute w-[10px] h-[10px] bg-red-600 rounded-full shadow-[0_0_10px_#ff0000] animate-[pulse_2s_ease-in-out_infinite]"
                })]
            }), (0, t.jsxs)("div", {
                className: "absolute bottom-[50px] left-[50px] text-red-600/70 text-xs leading-relaxed hidden md:block font-mono",
                children: ["COORD: 45.912.11", (0, t.jsx)("br", {}), "SEC: A-9", (0, t.jsx)("br", {}), "STATUS: ACTIVE", (0, t.jsx)("br", {}), "||||||||||||||||||"]
            }), (0, t.jsxs)("div", {
                className: "absolute top-[50px] right-[50px] text-red-600/70 text-xs leading-relaxed text-right hidden md:block font-mono",
                children: ["SYS.MONITORING", (0, t.jsx)("br", {}), "NET.TRAFFIC: HIGH", (0, t.jsx)("br", {}), "ENCRYPTION: ON", (0, t.jsx)("br", {}), "[ LOADING... ]"]
            }), (0, t.jsx)("div", {
                className: "absolute inset-0",
                style: {
                    background: "linear-gradient(to bottom, transparent 50%, rgba(255, 0, 0, 0.05) 51%)",
                    backgroundSize: "100% 4px"
                }
            }), (0, t.jsx)("div", {
                className: "absolute left-0 w-full h-[10px] opacity-30 animate-[scan_5s_linear_infinite]",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,0,0,0.5), transparent)"
                }
            })]
        })
    });
    e.s(["default", 0, a])
}, 67585, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let n = e.r(32061);

    function r({
        reason: e,
        children: t
    }) {
        if ("undefined" == typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 9885, (e, t, a) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 52157, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(43476),
        r = e.r(74080),
        s = e.r(63599),
        l = e.r(9885),
        i = e.r(43369);

    function o({
        moduleIds: e
    }) {
        if ("undefined" != typeof window) return null;
        let t = s.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let a = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                a.push(...e)
            }
        }
        if (0 === a.length) return null;
        let o = (0, i.getDeploymentIdQueryOrEmptyString)();
        return (0, n.jsx)(n.Fragment, {
            children: a.map(e => {
                let a = `${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${o}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: a,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, r.preload)(a, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 69093, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return d
        }
    });
    let n = e.r(43476),
        r = e.r(71645),
        s = e.r(67585),
        l = e.r(52157);

    function i(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let o = {
            loader: () => Promise.resolve(i(() => null)),
            loading: null,
            ssr: !0
        },
        d = function(e) {
            let t = { ...o,
                    ...e
                },
                a = (0, r.lazy)(() => t.loader().then(i)),
                d = t.loading;

            function c(e) {
                let i = d ? (0, n.jsx)(d, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    o = !t.ssr || !!t.loading,
                    c = o ? r.Suspense : r.Fragment,
                    u = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["undefined" == typeof window ? (0, n.jsx)(l.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(a, { ...e
                        })]
                    }) : (0, n.jsx)(s.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(a, { ...e
                        })
                    });
                return (0, n.jsx)(c, { ...o ? {
                        fallback: i
                    } : {},
                    children: u
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 70703, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let n = e.r(55682)._(e.r(69093));

    function r(e, t) {
        let a = {};
        "function" == typeof e && (a.loader = e);
        let r = { ...a,
            ...t
        };
        return (0, n.default)({ ...r,
            modules: r.loadableGenerated ? .modules
        })
    }("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }), Object.assign(a.default, a), t.exports = a.default)
}, 31713, e => {
    "use strict";
    var t = e.i(43476),
        a = e.i(70703),
        n = e.i(71645),
        r = e.i(46932),
        s = e.i(57688),
        l = e.i(69441);
    let i = {
            display: "inline-block",
            whiteSpace: "pre-wrap"
        },
        o = {
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            border: 0
        };

    function d({
        text: e,
        speed: a = 50,
        maxIterations: s = 10,
        sequential: l = !1,
        revealDirection: d = "start",
        useOriginalCharsOnly: c = !1,
        characters: u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
        className: f = "",
        parentClassName: m = "",
        encryptedClassName: x = "",
        animateOn: p = "hover",
        style: b,
        onAnimationComplete: h,
        ...g
    }) {
        let [v, j] = (0, n.useState)(e), [y, w] = (0, n.useState)(!1), [_, N] = (0, n.useState)(!1), [k, S] = (0, n.useState)(new Set), [O, P] = (0, n.useState)(!1), R = (0, n.useRef)(null), I = (0, n.useRef)(!1);
        return (0, n.useEffect)(() => {
            let t, n = 0,
                r = c ? Array.from(new Set(e.split(""))).filter(e => " " !== e) : u.split(""),
                i = (e, t) => {
                    if (!c) return e.split("").map((a, n) => " " === a ? " " : t.has(n) ? e[n] : r[Math.floor(Math.random() * r.length)]).join(""); {
                        let a = e.split("").map((e, a) => ({
                                char: e,
                                isSpace: " " === e,
                                index: a,
                                isRevealed: t.has(a)
                            })),
                            n = a.filter(e => !e.isSpace && !e.isRevealed).map(e => e.char);
                        for (let e = n.length - 1; e > 0; e--) {
                            let t = Math.floor(Math.random() * (e + 1));
                            [n[e], n[t]] = [n[t], n[e]]
                        }
                        let r = 0;
                        return a.map(t => t.isSpace ? " " : t.isRevealed ? e[t.index] : n[r++]).join("")
                    }
                };
            return y ? (N(!0), t = setInterval(() => {
                S(a => {
                    if (!l) return j(i(e, a)), ++n >= s && (clearInterval(t), N(!1), j(e), h && !I.current && (I.current = !0, setTimeout(() => h(), 0))), a;
                    if (!(a.size < e.length)) return clearInterval(t), N(!1), h && !I.current && (I.current = !0, setTimeout(() => h(), 0)), a; {
                        let t = (t => {
                                let a = e.length;
                                switch (d) {
                                    case "start":
                                    default:
                                        return t.size;
                                    case "end":
                                        return a - 1 - t.size;
                                    case "center":
                                        {
                                            let e = Math.floor(a / 2),
                                                n = Math.floor(t.size / 2),
                                                r = t.size % 2 == 0 ? e + n : e - n - 1;
                                            if (r >= 0 && r < a && !t.has(r)) return r;
                                            for (let e = 0; e < a; e++)
                                                if (!t.has(e)) return e;
                                            return 0
                                        }
                                }
                            })(a),
                            n = new Set(a);
                        return n.add(t), j(i(e, n)), n
                    }
                })
            }, a)) : (j(e), S(new Set), N(!1)), () => {
                t && clearInterval(t)
            }
        }, [y, e, a, s, l, d, u, c, h]), (0, n.useEffect)(() => {
            if ("view" !== p && "both" !== p) return;
            let e = new IntersectionObserver(e => {
                    e.forEach(e => {
                        e.isIntersecting && !O && (w(!0), P(!0))
                    })
                }, {
                    root: null,
                    rootMargin: "0px",
                    threshold: .1
                }),
                t = R.current;
            return t && e.observe(t), () => {
                t && e.unobserve(t)
            }
        }, [p, O]), (0, t.jsxs)(r.motion.span, {
            className: m,
            ref: R,
            style: { ...i,
                fontFamily: "'BBH Bartle', cursive",
                ...b
            },
            ..."hover" === p || "both" === p ? {
                onMouseEnter: () => w(!0),
                onMouseLeave: () => w(!1)
            } : {},
            ...g,
            children: [(0, t.jsx)("span", {
                style: o,
                children: v
            }), (0, t.jsx)("span", {
                "aria-hidden": "true",
                style: {
                    fontFamily: "inherit"
                },
                children: v.split("").map((e, a) => {
                    let n = k.has(a) || !_ || !y;
                    return (0, t.jsx)("span", {
                        className: n ? f : x,
                        style: {
                            fontFamily: "inherit"
                        },
                        children: e
                    }, a)
                })
            })]
        })
    }
    let c = (0, n.memo)(function() {
        let e = (0, n.useRef)(null);
        return (0, n.useEffect)(() => {
            let t, a, n, r = e.current;
            if (!r) return;
            let s = r.getContext("2d", {
                alpha: !1
            });
            if (!s) return;
            let l = Math.min(window.devicePixelRatio || 1, 1),
                i = 0,
                o = 0,
                d = 0,
                c = !0,
                u = !0,
                f = new IntersectionObserver(e => {
                    (c = e[0].isIntersecting) && u && !i && (i = requestAnimationFrame(b))
                }, {
                    threshold: .1
                });
            f.observe(r);
            let m = () => {
                u = "visible" === document.visibilityState, c && u && !i && (i = requestAnimationFrame(b))
            };
            document.addEventListener("visibilitychange", m);
            let x = () => {
                    let e = r.getBoundingClientRect();
                    t = e.width * l, a = e.height * l, r.width = t, r.height = a
                },
                p = () => {
                    clearTimeout(n), n = setTimeout(x, 150)
                };
            window.addEventListener("resize", p, {
                passive: !0
            }), x();
            let b = () => {
                if (!c || !u) {
                    i = 0;
                    return
                }
                if (i = requestAnimationFrame(b), ++d % 2 != 0) return;
                s.fillStyle = "black", s.fillRect(0, 0, t, a), s.globalCompositeOperation = "screen";
                let e = a / 2,
                    n = a / 4,
                    r = .001 * o;
                for (let a = 0; a < 20; a++) {
                    let l = 1 - a / 20,
                        i = e + (a - 10) * 15 * l;
                    s.beginPath(), s.lineWidth = 1 + 2 * l, s.strokeStyle = `rgba(220, 38, 38, ${.1+.3*l})`;
                    for (let e = 0; e <= t; e += 10) {
                        let t = i + Math.sin(.002 * e + r + .2 * a) * n * l + .5 * n * Math.cos(.002 * e * 2 - r) * l;
                        0 === e ? s.moveTo(e, t) : s.lineTo(e, t)
                    }
                    s.stroke()
                }
                s.globalCompositeOperation = "source-over", s.fillStyle = "rgba(0,0,0,0.3)", s.fillRect(0, 0, 50, a), s.fillRect(t - 50, 0, 50, a), o += 3
            };
            return setTimeout(() => {
                c && u && (i = requestAnimationFrame(b))
            }, 100), () => {
                window.removeEventListener("resize", p), document.removeEventListener("visibilitychange", m), f.disconnect(), clearTimeout(n), i && cancelAnimationFrame(i)
            }
        }, []), (0, t.jsx)("canvas", {
            ref: e,
            className: "absolute inset-0 w-full h-full -z-10 pointer-events-none",
            style: {
                imageRendering: "auto"
            }
        })
    });
    var u = e.i(30982);

    function f() {
        let [e, a] = (0, n.useState)(!1), i = (0, n.useCallback)(() => {
            a(!0)
        }, []);
        return (0, t.jsxs)("section", {
            className: "relative h-screen flex items-center justify-center overflow-hidden",
            children: [(0, t.jsx)(u.default, {
                opacity: .6,
                showMap: !0
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50"
            }), (0, t.jsx)("div", {
                className: "absolute right-1/3 top-1/2 -translate-y-1/2 w-[300px] md:w-[650px] h-[300px] md:h-[650px] bg-red-700/25 blur-[100px] md:blur-[180px] rounded-full pointer-events-none"
            }), (0, t.jsx)(c, {}), (0, t.jsxs)(l.default, {
                className: "text-center z-10",
                children: [(0, t.jsxs)("div", {
                    className: "relative inline-block mb-6",
                    children: [(0, t.jsx)("span", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] text-[#ff0000]/60 -z-10 whitespace-nowrap select-none pointer-events-none drop-shadow-[0_0_30px_rgba(255,0,0,0.8)]",
                        style: {
                            fontFamily: '"Zen Dots", sans-serif'
                        },
                        children: "5.0"
                    }), (0, t.jsx)("h1", {
                        className: "text-6xl md:text-8xl font-extrabold tracking-tighter text-white relative z-10",
                        children: (0, t.jsx)(d, {
                            text: "TALOS",
                            animateOn: "view",
                            revealDirection: "center",
                            speed: 100,
                            maxIterations: 20,
                            style: {
                                fontFamily: "'BBH Bartle', cursive"
                            },
                            onAnimationComplete: i
                        })
                    })]
                }), (0, t.jsx)(r.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: e ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        ease: "easeOut"
                    },
                    className: "mt-8 flex flex-col items-center gap-6",
                    children: (0, t.jsxs)("p", {
                        className: "text-3xl md:text-4xl text-[#ff0000]/90 font-bold tracking-wider",
                        style: {
                            fontFamily: '"Zen Dots", sans-serif'
                        },
                        children: ["Feb ", (0, t.jsx)("span", {
                            className: "text-3xl md:text-4xl text-[#ffffff]/90 font-bold tracking-wider",
                            children: "4"
                        }), " 2026"]
                    })
                })]
            }), (0, t.jsxs)(r.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: e ? {
                    opacity: 1
                } : {},
                transition: {
                    delay: .5,
                    duration: 1
                },
                className: "absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 z-10 pointer-events-none",
                children: [(0, t.jsx)(r.motion.div, {
                    animate: {
                        y: [0, 10, 0]
                    },
                    transition: {
                        repeat: 1 / 0,
                        duration: 2,
                        ease: "easeInOut"
                    },
                    children: (0, t.jsx)(s.default, {
                        src: "https://img.icons8.com/?size=100&id=41202&format=png&color=FFFFFF",
                        alt: "Scroll down",
                        width: 40,
                        height: 40,
                        className: "opacity-90"
                    })
                }), (0, t.jsxs)("div", {
                    className: "space-y-2 text-center",
                    children: [(0, t.jsx)("p", {
                        className: "text-white/80 text-lg md:text-xl font-medium tracking-wide",
                        children: "Dept of Artificial Intelligence and Data Science"
                    }), (0, t.jsx)("p", {
                        className: "text-white/60 text-sm md:text-base",
                        children: "Chennai Institute Of Technology"
                    })]
                })]
            })]
        })
    }
    let m = (0, a.default)(() => e.A(70483), {
            loadableGenerated: {
                modules: [50253]
            },
            loading: () => (0, t.jsx)("div", {
                className: "h-[280px] bg-neutral-950"
            })
        }),
        x = (0, a.default)(() => e.A(45495), {
            loadableGenerated: {
                modules: [11781]
            },
            loading: () => (0, t.jsx)("div", {
                className: "h-[600px] bg-black"
            })
        }),
        p = (0, a.default)(() => e.A(21497), {
            loadableGenerated: {
                modules: [15981]
            },
            loading: () => (0, t.jsx)("div", {
                className: "h-[200px] bg-black"
            })
        }),
        b = (0, a.default)(() => e.A(75193), {
            loadableGenerated: {
                modules: [75243]
            },
            ssr: !1,
            loading: () => (0, t.jsx)("div", {
                className: "h-[100px]"
            })
        }),
        h = (0, a.default)(() => e.A(47287), {
            loadableGenerated: {
                modules: [91089]
            },
            loading: () => (0, t.jsx)("div", {
                className: "h-[400px] bg-black"
            })
        });

    function g() {
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(f, {}), (0, t.jsx)(m, {}), (0, t.jsx)(x, {}), (0, t.jsx)(p, {}), (0, t.jsx)(b, {
                texts: ["TALOS 5.0", "REGISTER NOW"],
                velocity: 50,
                className: "font-['Press_Start_2P'] text-red-600"
            }), (0, t.jsx)(h, {})]
        })
    }
    e.s(["default", () => g], 31713)
}, 70483, e => {
    e.v(t => Promise.all(["static/chunks/fe21575b0b5f54ea.js"].map(t => e.l(t))).then(() => t(50253)))
}, 45495, e => {
    e.v(t => Promise.all(["static/chunks/e33f6723ade916ab.js", "static/chunks/6c7d0a593ba1c1e8.js", "static/chunks/3a4129d84ec1a3fa.css"].map(t => e.l(t))).then(() => t(11781)))
}, 21497, e => {
    e.v(t => Promise.all(["static/chunks/1c5d9a90c84fe806.js"].map(t => e.l(t))).then(() => t(15981)))
}, 75193, e => {
    e.v(t => Promise.all(["static/chunks/c336f3f7af66aaab.js", "static/chunks/8167b1ae00f96f6b.css"].map(t => e.l(t))).then(() => t(75243)))
}, 47287, e => {
    e.v(t => Promise.all(["static/chunks/d168e50292fdf147.js"].map(t => e.l(t))).then(() => t(91089)))
}]);