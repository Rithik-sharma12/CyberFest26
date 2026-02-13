(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 87652, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(49652);
    let n = {
        some: 0,
        all: 1
    };

    function i(e, {
        root: o,
        margin: s,
        amount: u,
        once: l = !1,
        initial: a = !1
    } = {}) {
        let [c, f] = (0, t.useState)(a);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: o && o.current || void 0,
                margin: s,
                amount: u
            };
            return function(e, t, {
                root: i,
                margin: o,
                amount: s = "some"
            } = {}) {
                let u = (0, r.resolveElements)(e),
                    l = new WeakMap,
                    a = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = l.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? l.set(e.target, r) : a.unobserve(e.target)
                                } else "function" == typeof r && (r(e), l.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: o,
                        threshold: "number" == typeof s ? s : n[s]
                    });
                return u.forEach(e => a.observe(e)), () => a.disconnect()
            }(e.current, () => (f(!0), l ? void 0 : () => f(!1)), t)
        }, [o, e, s, l, u]), c
    }
    e.s(["useInView", () => i], 87652)
}, 35382, e => {
    "use strict";
    var t = e.i(86427),
        r = e.i(71645),
        n = e.i(37806),
        i = e.i(47414);

    function o(e) {
        let o = (0, i.useConstant)(() => (0, t.motionValue)(e)),
            {
                isStatic: s
            } = (0, r.useContext)(n.MotionConfigContext);
        if (s) {
            let [, t] = (0, r.useState)(e);
            (0, r.useEffect)(() => o.on("change", t), [])
        }
        return o
    }
    e.s(["useMotionValue", () => o])
}, 58866, e => {
    "use strict";
    var t = e.i(44230);

    function r(...e) {
        let n = !Array.isArray(e[0]),
            i = n ? 0 : -1,
            o = e[0 + i],
            s = e[1 + i],
            u = e[2 + i],
            l = e[3 + i],
            a = (0, t.interpolate)(s, u, l);
        return n ? a(o) : a
    }
    e.s(["transform", () => r])
}, 95420, e => {
    "use strict";
    var t = e.i(58866),
        r = e.i(47414),
        n = e.i(87022),
        i = e.i(74008),
        o = e.i(35382);

    function s(e, t) {
        let r = (0, o.useMotionValue)(t()),
            s = () => r.set(t());
        return s(), (0, i.useIsomorphicLayoutEffect)(() => {
            let t = () => n.frame.preRender(s, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, n.cancelFrame)(s)
            }
        }), r
    }
    var u = e.i(86427);

    function l(e, r, n, i) {
        if ("function" == typeof e) {
            let t;
            return u.collectMotionValues.current = [], e(), t = s(u.collectMotionValues.current, e), u.collectMotionValues.current = void 0, t
        }
        let o = "function" == typeof r ? r : (0, t.transform)(r, n, i);
        return Array.isArray(e) ? a(e, o) : a([e], ([e]) => o(e))
    }

    function a(e, t) {
        let n = (0, r.useConstant)(() => []);
        return s(e, () => {
            n.length = 0;
            let r = e.length;
            for (let t = 0; t < r; t++) n[t] = e[t].get();
            return t(n)
        })
    }
    e.s(["useTransform", () => l], 95420)
}, 91994, e => {
    "use strict";
    e.i(86427);
    var t = e.i(83352),
        r = e.i(83411),
        n = e.i(87022);

    function i(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var o = e.i(71645),
        s = e.i(37806),
        u = e.i(35382),
        l = e.i(95420);

    function a(e, c = {}) {
        let {
            isStatic: f
        } = (0, o.useContext)(s.MotionConfigContext), m = () => (0, r.isMotionValue)(e) ? e.get() : e;
        if (f) return (0, l.useTransform)(m);
        let p = (0, u.useMotionValue)(m());
        return (0, o.useInsertionEffect)(() => (function(e, o, s) {
            let u, l = e.get(),
                a = null,
                c = l,
                f = "string" == typeof l ? l.replace(/[\d.-]/g, "") : void 0,
                m = () => {
                    a && (a.stop(), a = null)
                },
                p = () => {
                    m(), a = new t.JSAnimation({
                        keyframes: [i(e.get()), i(c)],
                        velocity: e.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...s,
                        onUpdate: u
                    })
                };
            if (e.attach((e, t) => {
                    c = e, u = e => {
                        var r, n;
                        return t((r = e, (n = f) ? r + n : r))
                    }, n.frame.postRender(p)
                }, m), (0, r.isMotionValue)(o)) {
                let t = o.on("change", t => {
                        var r, n;
                        return e.set((r = t, (n = f) ? r + n : r))
                    }),
                    r = e.on("destroy", t);
                return () => {
                    t(), r()
                }
            }
            return m
        })(p, e, c), [p, JSON.stringify(c)]), p
    }
    e.s(["useSpring", () => a], 91994)
}, 54599, e => {
    "use strict";
    var t = e.i(87022),
        r = e.i(33768),
        n = e.i(35382);

    function i(e) {
        let i = (0, n.useMotionValue)(e.getVelocity()),
            o = () => {
                let r = e.getVelocity();
                i.set(r), r && t.frame.update(o)
            };
        return (0, r.useMotionValueEvent)(e, "change", () => {
            t.frame.update(o, !1, !0)
        }), i
    }
    e.s(["useVelocity", () => i])
}, 76662, e => {
    "use strict";
    var t = e.i(87022),
        r = e.i(71645),
        n = e.i(37806);

    function i(e) {
        let i = (0, r.useRef)(0),
            {
                isStatic: o
            } = (0, r.useContext)(n.MotionConfigContext);
        (0, r.useEffect)(() => {
            if (o) return;
            let r = ({
                timestamp: t,
                delta: r
            }) => {
                i.current || (i.current = t), e(t - i.current, r)
            };
            return t.frame.update(r, !0), () => (0, t.cancelFrame)(r)
        }, [e])
    }
    e.s(["useAnimationFrame", () => i])
}, 37841, e => {
    e.v({
        parallax: "ScrollVelocity-module__QpPyyG__parallax",
        scroller: "ScrollVelocity-module__QpPyyG__scroller"
    })
}, 10708, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(46932),
        i = e.i(10542),
        o = e.i(91994),
        s = e.i(95420),
        u = e.i(35382),
        l = e.i(54599),
        a = e.i(76662),
        c = e.i(87652),
        f = e.i(37841);
    let m = (0, r.memo)(function({
            children: e,
            baseVelocity: f,
            scrollContainerRef: m,
            className: p = "",
            damping: g,
            stiffness: d,
            numCopies: y,
            velocityMapping: v,
            parallaxClassName: h,
            scrollerClassName: V,
            parallaxStyle: x,
            scrollerStyle: C
        }) {
            let M = (0, u.useMotionValue)(0),
                {
                    scrollY: S
                } = (0, i.useScroll)(m ? {
                    container: m
                } : {}),
                E = (0, l.useVelocity)(S),
                T = (0, o.useSpring)(E, {
                    damping: g ? ? 50,
                    stiffness: d ? ? 400
                }),
                b = (0, s.useTransform)(T, v ? .input || [0, 1e3], v ? .output || [0, 5], {
                    clamp: !1
                }),
                w = (0, r.useRef)(null),
                A = (0, r.useRef)(null),
                R = (0, c.useInView)(A, {
                    margin: "100px"
                }),
                _ = function(e) {
                    let [t, n] = (0, r.useState)(0);
                    return (0, r.useLayoutEffect)(() => {
                        let t;

                        function r() {
                            e.current && n(e.current.offsetWidth)
                        }
                        r();
                        let i = () => {
                            clearTimeout(t), t = setTimeout(r, 150)
                        };
                        return window.addEventListener("resize", i, {
                            passive: !0
                        }), () => {
                            clearTimeout(t), window.removeEventListener("resize", i)
                        }
                    }, [e]), t
                }(w),
                I = (0, s.useTransform)(M, e => {
                    var t;
                    let r;
                    return 0 === _ ? "0px" : `${r=0-(t=-_),((e-t)%r+r)%r+t}px`
                }),
                N = (0, r.useRef)(1);
            (0, a.useAnimationFrame)((e, t) => {
                if (!R) return;
                let r = N.current * f * (t / 1e3);
                0 > b.get() ? N.current = -1 : b.get() > 0 && (N.current = 1), r += N.current * r * b.get(), M.set(M.get() + r)
            });
            let j = (0, r.useMemo)(() => {
                let r = [];
                for (let n = 0; n < y; n++) r.push((0, t.jsx)("span", {
                    className: p,
                    ref: 0 === n ? w : null,
                    children: e
                }, n));
                return r
            }, [e, p, y]);
            return (0, t.jsx)("div", {
                ref: A,
                className: h,
                style: x,
                children: (0, t.jsx)(n.motion.div, {
                    className: V,
                    style: {
                        x: I,
                        ...C
                    },
                    children: j
                })
            })
        }),
        p = (0, r.memo)(function({
            scrollContainerRef: e,
            texts: r = [],
            velocity: n = 100,
            className: i = "",
            damping: o = 50,
            stiffness: s = 400,
            numCopies: u = 4,
            velocityMapping: l = {
                input: [0, 1e3],
                output: [0, 5]
            },
            parallaxClassName: a = f.default.parallax,
            scrollerClassName: c = f.default.scroller,
            parallaxStyle: p,
            scrollerStyle: g
        }) {
            return (0, t.jsx)("section", {
                children: r.map((r, f) => (0, t.jsxs)(m, {
                    className: i,
                    baseVelocity: f % 2 != 0 ? -n : n,
                    scrollContainerRef: e,
                    damping: o,
                    stiffness: s,
                    numCopies: u,
                    velocityMapping: l,
                    parallaxClassName: a,
                    scrollerClassName: c,
                    parallaxStyle: p,
                    scrollerStyle: g,
                    children: [r, " "]
                }, f))
            })
        });
    e.s(["ScrollVelocity", 0, p, "default", 0, p])
}, 75243, e => {
    e.n(e.i(10708))
}]);