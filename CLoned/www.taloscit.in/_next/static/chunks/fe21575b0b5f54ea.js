(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 58866, e => {
    "use strict";
    var t = e.i(44230);

    function r(...e) {
        let n = !Array.isArray(e[0]),
            s = n ? 0 : -1,
            a = e[0 + s],
            i = e[1 + s],
            o = e[2 + s],
            l = e[3 + s],
            c = (0, t.interpolate)(i, o, l);
        return n ? c(a) : c
    }
    e.s(["transform", () => r])
}, 35382, e => {
    "use strict";
    var t = e.i(86427),
        r = e.i(71645),
        n = e.i(37806),
        s = e.i(47414);

    function a(e) {
        let a = (0, s.useConstant)(() => (0, t.motionValue)(e)),
            {
                isStatic: i
            } = (0, r.useContext)(n.MotionConfigContext);
        if (i) {
            let [, t] = (0, r.useState)(e);
            (0, r.useEffect)(() => a.on("change", t), [])
        }
        return a
    }
    e.s(["useMotionValue", () => a])
}, 95420, e => {
    "use strict";
    var t = e.i(58866),
        r = e.i(47414),
        n = e.i(87022),
        s = e.i(74008),
        a = e.i(35382);

    function i(e, t) {
        let r = (0, a.useMotionValue)(t()),
            i = () => r.set(t());
        return i(), (0, s.useIsomorphicLayoutEffect)(() => {
            let t = () => n.frame.preRender(i, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, n.cancelFrame)(i)
            }
        }), r
    }
    var o = e.i(86427);

    function l(e, r, n, s) {
        if ("function" == typeof e) {
            let t;
            return o.collectMotionValues.current = [], e(), t = i(o.collectMotionValues.current, e), o.collectMotionValues.current = void 0, t
        }
        let a = "function" == typeof r ? r : (0, t.transform)(r, n, s);
        return Array.isArray(e) ? c(e, a) : c([e], ([e]) => a(e))
    }

    function c(e, t) {
        let n = (0, r.useConstant)(() => []);
        return i(e, () => {
            n.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++) n[t] = e[t].get();
            return t(n)
        })
    }
    e.s(["useTransform", () => l], 95420)
}, 78510, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(46932),
        s = e.i(10542),
        a = e.i(95420);
    let i = e => {
            let t = Math.max(e - Date.now(), 0);
            return {
                days: Math.floor(t / 864e5),
                hours: Math.floor(t / 36e5 % 24),
                minutes: Math.floor(t / 6e4 % 60),
                seconds: Math.floor(t / 1e3 % 60)
            }
        },
        o = (0, r.memo)(function({
            value: e,
            label: r,
            opacityLabel: s,
            bgOpacity: a
        }) {
            let i = String(e).padStart(2, "0");
            return (0, t.jsxs)("div", {
                className: "flex flex-col items-center group relative",
                children: [a && (0, t.jsx)(n.motion.div, {
                    style: {
                        opacity: a
                    },
                    className: "absolute -inset-1 bg-black rounded-lg border border-red-900/50"
                }), (0, t.jsxs)("div", {
                    className: "w-12 h-16 md:w-24 md:h-32 relative bg-black border-4 border-[#1a1a1a] rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] overflow-hidden z-10",
                    children: [(0, t.jsx)("div", {
                        className: "absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)]"
                    }), (0, t.jsxs)("div", {
                        className: "w-full h-full relative flex items-center justify-center transform -skew-x-6 scale-90",
                        children: [(0, t.jsx)("span", {
                            className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 italic text-lg md:text-4xl tracking-widest leading-none font-dseg text-[#2a0a0a] z-0 select-none opacity-100",
                            children: "~~"
                        }), (0, t.jsx)("span", {
                            className: "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 italic text-lg md:text-4xl tracking-widest leading-none font-dseg text-[#ff0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.9)] z-10",
                            children: i
                        })]
                    })]
                }), (0, t.jsx)(n.motion.span, {
                    style: {
                        opacity: s
                    },
                    className: "mt-2 text-[8px] md:text-base uppercase text-red-500 font-bold tracking-[0.2em] font-orbitron drop-shadow-md z-10",
                    children: r
                })]
            })
        });

    function l() {
        let e = new Date("2026-02-04T08:00:00").getTime(),
            [l, c] = (0, r.useState)(!1),
            [d, u] = (0, r.useState)(() => i(e)),
            m = (0, r.useRef)(null),
            {
                scrollY: f
            } = (0, s.useScroll)(),
            [x, p] = (0, r.useState)(0),
            [g, h] = (0, r.useState)(0),
            [b, v] = (0, r.useState)(0),
            [w, y] = (0, r.useState)(.4);
        (0, r.useEffect)(() => {
            setTimeout(() => c(!0), 0);
            let t = () => {
                if (m.current) {
                    let e = m.current.getBoundingClientRect(),
                        t = document.getElementById("floating-navbar"),
                        r = Math.max(t ? t.offsetHeight : 0, 90);
                    p(e.top + window.scrollY), h(e.height), v(window.innerWidth < 768 ? 45 : r), y(window.innerWidth < 768 ? 1 : .4)
                }
            };
            t(), window.addEventListener("resize", t);
            let r = setInterval(() => u(i(e)), 1e3);
            return () => {
                clearInterval(r), window.removeEventListener("resize", t)
            }
        }, [e]);
        let _ = Object.entries(d),
            j = Math.max(0, x - 400),
            N = j + 400,
            T = [0, j, N],
            M = x + g / 2,
            S = (0, a.useTransform)(f, T, [M, M - j, b + 5]),
            z = (0, a.useTransform)(f, T, ["50%", "50%", "0%"]),
            C = (0, a.useTransform)(f, T, ["50%", "50%", "0%"]),
            k = (0, a.useTransform)(f, T, ["-50%", "-50%", "0%"]),
            E = (0, a.useTransform)(f, T, [1, 1, w]),
            A = (0, a.useTransform)(f, [j, j + 150], [1, 0]),
            V = (0, a.useTransform)(f, [j, N], [0, 1]);
        return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("div", {
                ref: m,
                className: "w-full h-[180px] md:h-[280px] relative bg-neutral-950 border-y border-red-900/30 overflow-hidden",
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#00000000,#000000)]"
                })]
            }), (0, t.jsxs)(n.motion.div, {
                style: {
                    position: "fixed",
                    top: l ? S : void 0,
                    right: z,
                    translateX: C,
                    y: k,
                    scale: E,
                    zIndex: 50,
                    transformOrigin: "right top",
                    opacity: +!!l
                },
                className: "flex flex-col items-center pointer-events-none w-auto",
                children: [(0, t.jsx)(n.motion.p, {
                    style: {
                        opacity: A
                    },
                    className: "text-primary tracking-widest uppercase text-xs md:text-sm font-semibold mb-6 text-red-500 whitespace-nowrap",
                    children: "The Countdown Begins"
                }), (0, t.jsx)("div", {
                    className: "flex justify-center items-center gap-0.5 md:gap-4 px-2 w-full",
                    children: _.map(([e, r], n) => (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, t.jsx)(o, {
                            value: l ? r : 0,
                            label: e,
                            bgOpacity: V
                        }), n < _.length - 1 && (0, t.jsx)("div", {
                            className: "text-red-500 text-sm md:text-3xl font-dseg animate-pulse mb-6 md:mb-8 mx-0.5 md:mx-2 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]",
                            children: ":"
                        })]
                    }, e))
                })]
            })]
        })
    }
    e.s(["default", () => l])
}, 50253, e => {
    e.n(e.i(78510))
}]);