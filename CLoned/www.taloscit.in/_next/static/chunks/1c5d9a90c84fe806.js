(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 35382, e => {
    "use strict";
    var t = e.i(86427),
        r = e.i(71645),
        n = e.i(37806),
        i = e.i(47414);

    function s(e) {
        let s = (0, i.useConstant)(() => (0, t.motionValue)(e)),
            {
                isStatic: o
            } = (0, r.useContext)(n.MotionConfigContext);
        if (o) {
            let [, t] = (0, r.useState)(e);
            (0, r.useEffect)(() => s.on("change", t), [])
        }
        return s
    }
    e.s(["useMotionValue", () => s])
}, 58866, e => {
    "use strict";
    var t = e.i(44230);

    function r(...e) {
        let n = !Array.isArray(e[0]),
            i = n ? 0 : -1,
            s = e[0 + i],
            o = e[1 + i],
            l = e[2 + i],
            u = e[3 + i],
            a = (0, t.interpolate)(o, l, u);
        return n ? a(s) : a
    }
    e.s(["transform", () => r])
}, 95420, e => {
    "use strict";
    var t = e.i(58866),
        r = e.i(47414),
        n = e.i(87022),
        i = e.i(74008),
        s = e.i(35382);

    function o(e, t) {
        let r = (0, s.useMotionValue)(t()),
            o = () => r.set(t());
        return o(), (0, i.useIsomorphicLayoutEffect)(() => {
            let t = () => n.frame.preRender(o, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, n.cancelFrame)(o)
            }
        }), r
    }
    var l = e.i(86427);

    function u(e, r, n, i) {
        if ("function" == typeof e) {
            let t;
            return l.collectMotionValues.current = [], e(), t = o(l.collectMotionValues.current, e), l.collectMotionValues.current = void 0, t
        }
        let s = "function" == typeof r ? r : (0, t.transform)(r, n, i);
        return Array.isArray(e) ? a(e, s) : a([e], ([e]) => s(e))
    }

    function a(e, t) {
        let n = (0, r.useConstant)(() => []);
        return o(e, () => {
            n.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++) n[t] = e[t].get();
            return t(n)
        })
    }
    e.s(["useTransform", () => u], 95420)
}, 91994, e => {
    "use strict";
    e.i(86427);
    var t = e.i(83352),
        r = e.i(83411),
        n = e.i(87022);

    function i(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var s = e.i(71645),
        o = e.i(37806),
        l = e.i(35382),
        u = e.i(95420);

    function a(e, c = {}) {
        let {
            isStatic: f
        } = (0, s.useContext)(o.MotionConfigContext), d = () => (0, r.isMotionValue)(e) ? e.get() : e;
        if (f) return (0, u.useTransform)(d);
        let m = (0, l.useMotionValue)(d());
        return (0, s.useInsertionEffect)(() => (function(e, s, o) {
            let l, u = e.get(),
                a = null,
                c = u,
                f = "string" == typeof u ? u.replace(/[\d.-]/g, "") : void 0,
                d = () => {
                    a && (a.stop(), a = null)
                },
                m = () => {
                    d(), a = new t.JSAnimation({
                        keyframes: [i(e.get()), i(c)],
                        velocity: e.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...o,
                        onUpdate: l
                    })
                };
            if (e.attach((e, t) => {
                    c = e, l = e => {
                        var r, n;
                        return t((r = e, (n = f) ? r + n : r))
                    }, n.frame.postRender(m)
                }, d), (0, r.isMotionValue)(s)) {
                let t = s.on("change", t => {
                        var r, n;
                        return e.set((r = t, (n = f) ? r + n : r))
                    }),
                    r = e.on("destroy", t);
                return () => {
                    t(), r()
                }
            }
            return d
        })(m, e, c), [m, JSON.stringify(c)]), m
    }
    e.s(["useSpring", () => a], 91994)
}, 87652, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(49652);
    let n = {
        some: 0,
        all: 1
    };

    function i(e, {
        root: s,
        margin: o,
        amount: l,
        once: u = !1,
        initial: a = !1
    } = {}) {
        let [c, f] = (0, t.useState)(a);
        return (0, t.useEffect)(() => {
            if (!e.current || u && c) return;
            let t = {
                root: s && s.current || void 0,
                margin: o,
                amount: l
            };
            return function(e, t, {
                root: i,
                margin: s,
                amount: o = "some"
            } = {}) {
                let l = (0, r.resolveElements)(e),
                    u = new WeakMap,
                    a = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = u.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? u.set(e.target, r) : a.unobserve(e.target)
                                } else "function" == typeof r && (r(e), u.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: s,
                        threshold: "number" == typeof o ? o : n[o]
                    });
                return l.forEach(e => a.observe(e)), () => a.disconnect()
            }(e.current, () => (f(!0), u ? void 0 : () => f(!1)), t)
        }, [s, e, o, u, l]), c
    }
    e.s(["useInView", () => i], 87652)
}, 60925, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(69441),
        n = e.i(87652),
        i = e.i(35382),
        s = e.i(91994),
        o = e.i(71645);

    function l({
        to: e,
        from: r = 0,
        direction: l = "up",
        delay: u = 0,
        duration: a = 2,
        className: c = "",
        startWhen: f = !0,
        separator: d = "",
        onStart: m,
        onEnd: g
    }) {
        let p = (0, o.useRef)(null),
            x = (0, i.useMotionValue)("down" === l ? e : r),
            h = (0, s.useSpring)(x, {
                damping: 20 + 1 / a * 40,
                stiffness: 1 / a * 100
            }),
            v = (0, n.useInView)(p, {
                once: !0,
                margin: "0px"
            }),
            y = e => {
                let t = e.toString();
                if (t.includes(".")) {
                    let e = t.split(".")[1];
                    if (0 !== parseInt(e)) return e.length
                }
                return 0
            },
            b = Math.max(y(r), y(e)),
            w = (0, o.useCallback)(e => {
                let t = b > 0,
                    r = Intl.NumberFormat("en-US", {
                        useGrouping: !!d,
                        minimumFractionDigits: t ? b : 0,
                        maximumFractionDigits: t ? b : 0
                    }).format(e);
                return d ? r.replace(/,/g, d) : r
            }, [b, d]);
        return (0, o.useEffect)(() => {
            p.current && (p.current.textContent = w("down" === l ? e : r))
        }, [r, e, l, w]), (0, o.useEffect)(() => {
            if (v && f) {
                "function" == typeof m && m();
                let t = setTimeout(() => {
                        x.set("down" === l ? r : e)
                    }, 1e3 * u),
                    n = setTimeout(() => {
                        "function" == typeof g && g()
                    }, 1e3 * u + 1e3 * a);
                return () => {
                    clearTimeout(t), clearTimeout(n)
                }
            }
        }, [v, f, x, l, r, e, u, m, g, a]), (0, o.useEffect)(() => {
            let e = h.on("change", e => {
                p.current && (p.current.textContent = w(e))
            });
            return () => e()
        }, [h, w]), (0, t.jsx)("span", {
            className: c,
            ref: p
        })
    }

    function u() {
        return (0, t.jsx)("section", {
            className: "py-24 bg-muted/10 border-y border-white/5",
            children: (0, t.jsx)(r.default, {
                children: (0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center gap-12",
                    children: [(0, t.jsxs)("div", {
                        className: "lg:w-[25%] text-center lg:text-left",
                        children: [(0, t.jsxs)("h2", {
                            className: "text-4xl font-zen-dots mb-4 text-red-600",
                            children: ["Last Year's ", (0, t.jsx)("span", {
                                className: "text-primary",
                                children: "Legacy"
                            })]
                        }), (0, t.jsx)("p", {
                            className: "text-muted-foreground font-zen-dots",
                            children: "TALOS 2025 set new benchmarks. This year, we go beyond limits."
                        })]
                    }), (0, t.jsx)("div", {
                        className: "lg:w-[75%] grid grid-cols-2 lg:grid-cols-4 gap-4 w-full",
                        children: [{
                            label: "Participants",
                            value: 5e3,
                            suffix: "+"
                        }, {
                            label: "Events",
                            value: 16,
                            suffix: ""
                        }, {
                            label: "Prize Pool",
                            value: 100,
                            prefix: "₹",
                            suffix: "K"
                        }, {
                            label: "Colleges",
                            value: 50,
                            suffix: "+"
                        }].map((e, r) => (0, t.jsxs)("div", {
                            className: "text-center px-4 py-6 bg-black/40 rounded-xl border border-white/5 hover:border-primary/30 transition-colors",
                            children: [(0, t.jsxs)("h3", {
                                className: "text-3xl font-zen-dots text-white mb-2 flex justify-center items-center",
                                children: [e.prefix, (0, t.jsx)(l, {
                                    from: 0,
                                    to: e.value,
                                    separator: ",",
                                    direction: "up",
                                    duration: 1,
                                    className: "count-up-text"
                                }), e.suffix]
                            }), (0, t.jsx)("p", {
                                className: "text-[10px] text-red-500 uppercase tracking-wider",
                                children: e.label
                            })]
                        }, r))
                    })]
                })
            })
        })
    }
    e.s(["default", () => u], 60925)
}, 15981, e => {
    e.n(e.i(60925))
}]);