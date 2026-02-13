(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 19928, t => {
    "use strict";
    let e = t => e => "string" == typeof e && e.startsWith(t),
        s = e("--"),
        i = e("var(--"),
        r = t => !!i(t) && n.test(t.split("/*")[0].trim()),
        n = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    t.s(["isCSSVariableName", () => s, "isCSSVariableToken", () => r])
}, 706, t => {
    "use strict";
    let e = (t, e, s) => t + (e - t) * s;
    t.s(["mixNumber", () => e])
}, 76959, t => {
    "use strict";
    let e = (t, e, s) => s > e ? e : s < t ? t : s;
    t.s(["clamp", () => e])
}, 76307, t => {
    "use strict";
    var e = t.i(76959);
    let s = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        },
        i = { ...s,
            transform: t => (0, e.clamp)(0, 1, t)
        },
        r = { ...s,
            default: 1
        };
    t.s(["alpha", () => i, "number", () => s, "scale", () => r])
}, 65091, t => {
    "use strict";
    let e = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        }),
        s = e("deg"),
        i = e("%"),
        r = e("px"),
        n = e("vh"),
        a = e("vw"),
        o = { ...i,
            parse: t => i.parse(t) / 100,
            transform: t => i.transform(100 * t)
        };
    t.s(["degrees", () => s, "percent", () => i, "progressPercentage", () => o, "px", () => r, "vh", () => n, "vw", () => a])
}, 65566, t => {
    "use strict";
    let e = () => {},
        s = () => {};
    t.s(["invariant", () => s, "warning", () => e])
}, 60830, t => {
    "use strict";
    let e = t => t;
    t.s(["noop", () => e])
}, 46791, t => {
    "use strict";
    let e = {};
    t.s(["MotionGlobalConfig", () => e])
}, 87022, 80248, 51571, t => {
    "use strict";
    var e = t.i(60830),
        s = t.i(46791);
    let i = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        r = {
            value: null,
            addProjectionMetrics: null
        };

    function n(t, e) {
        let n = !1,
            a = !0,
            o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            l = () => n = !0,
            u = i.reduce((t, s) => (t[s] = function(t, e) {
                let s = new Set,
                    i = new Set,
                    n = !1,
                    a = !1,
                    o = new WeakSet,
                    l = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    u = 0;

                function h(e) {
                    o.has(e) && (c.schedule(e), t()), u++, e(l)
                }
                let c = {
                    schedule: (t, e = !1, r = !1) => {
                        let a = r && n ? s : i;
                        return e && o.add(t), a.has(t) || a.add(t), t
                    },
                    cancel: t => {
                        i.delete(t), o.delete(t)
                    },
                    process: t => {
                        if (l = t, n) {
                            a = !0;
                            return
                        }
                        n = !0, [s, i] = [i, s], s.forEach(h), e && r.value && r.value.frameloop[e].push(u), u = 0, s.clear(), n = !1, a && (a = !1, c.process(t))
                    }
                };
                return c
            }(l, e ? s : void 0), t), {}),
            {
                setup: h,
                read: c,
                resolveKeyframes: d,
                preUpdate: p,
                update: m,
                preRender: f,
                render: v,
                postRender: g
            } = u,
            y = () => {
                let i = s.MotionGlobalConfig.useManualTiming ? o.timestamp : performance.now();
                n = !1, s.MotionGlobalConfig.useManualTiming || (o.delta = a ? 1e3 / 60 : Math.max(Math.min(i - o.timestamp, 40), 1)), o.timestamp = i, o.isProcessing = !0, h.process(o), c.process(o), d.process(o), p.process(o), m.process(o), f.process(o), v.process(o), g.process(o), o.isProcessing = !1, n && e && (a = !1, t(y))
            };
        return {
            schedule: i.reduce((e, s) => {
                let i = u[s];
                return e[s] = (e, s = !1, r = !1) => (!n && (n = !0, a = !0, o.isProcessing || t(y)), i.schedule(e, s, r)), e
            }, {}),
            cancel: t => {
                for (let e = 0; e < i.length; e++) u[i[e]].cancel(t)
            },
            state: o,
            steps: u
        }
    }
    t.s(["statsBuffer", () => r], 80248), t.s(["createRenderBatcher", () => n], 51571);
    let {
        schedule: a,
        cancel: o,
        state: l,
        steps: u
    } = n("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : e.noop, !0);
    t.s(["cancelFrame", () => o, "frame", () => a, "frameData", () => l, "frameSteps", () => u], 87022)
}, 63011, 60720, 30677, 98106, 66820, t => {
    "use strict";
    var e = t.i(76959),
        s = t.i(76307);
    let i = t => Math.round(1e5 * t) / 1e5;
    t.s(["sanitize", () => i], 60720);
    let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    t.s(["floatRegex", () => r], 30677);
    let n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        a = (t, e) => s => !!("string" == typeof s && n.test(s) && s.startsWith(t) || e && null != s && Object.prototype.hasOwnProperty.call(s, e)),
        o = (t, e, s) => i => {
            if ("string" != typeof i) return i;
            let [n, a, o, l] = i.match(r);
            return {
                [t]: parseFloat(n),
                [e]: parseFloat(a),
                [s]: parseFloat(o),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        };
    t.s(["isColorString", () => a, "splitColor", () => o], 98106);
    let l = { ...s.number,
            transform: t => Math.round((0, e.clamp)(0, 255, t))
        },
        u = {
            test: a("rgb", "red"),
            parse: o("red", "green", "blue"),
            transform: ({
                red: t,
                green: e,
                blue: r,
                alpha: n = 1
            }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(r) + ", " + i(s.alpha.transform(n)) + ")"
        };
    t.s(["rgba", () => u], 66820);
    let h = {
        test: a("#"),
        parse: function(t) {
            let e = "",
                s = "",
                i = "",
                r = "";
            return t.length > 5 ? (e = t.substring(1, 3), s = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), s = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, s += s, i += i, r += r), {
                red: parseInt(e, 16),
                green: parseInt(s, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1
            }
        },
        transform: u.transform
    };
    t.s(["hex", () => h], 63011)
}, 69577, 22660, 79444, t => {
    "use strict";
    var e = t.i(63011),
        s = t.i(76307),
        i = t.i(65091),
        r = t.i(60720),
        n = t.i(98106);
    let a = {
        test: (0, n.isColorString)("hsl", "hue"),
        parse: (0, n.splitColor)("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: a = 1
        }) => "hsla(" + Math.round(t) + ", " + i.percent.transform((0, r.sanitize)(e)) + ", " + i.percent.transform((0, r.sanitize)(n)) + ", " + (0, r.sanitize)(s.alpha.transform(a)) + ")"
    };
    t.s(["hsla", () => a], 22660);
    var o = t.i(66820);
    let l = {
        test: t => o.rgba.test(t) || e.hex.test(t) || a.test(t),
        parse: t => o.rgba.test(t) ? o.rgba.parse(t) : a.test(t) ? a.parse(t) : e.hex.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? o.rgba.transform(t) : a.transform(t),
        getAnimatableNone: t => {
            let e = l.parse(t);
            return e.alpha = 0, l.transform(e)
        }
    };
    t.s(["color", () => l], 79444);
    let u = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
    var h = t.i(30677);
    let c = "number",
        d = "color",
        p = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function m(t) {
        let e = t.toString(),
            s = [],
            i = {
                color: [],
                number: [],
                var: []
            },
            r = [],
            n = 0,
            a = e.replace(p, t => (l.test(t) ? (i.color.push(n), r.push(d), s.push(l.parse(t))) : t.startsWith("var(") ? (i.var.push(n), r.push("var"), s.push(t)) : (i.number.push(n), r.push(c), s.push(parseFloat(t))), ++n, "${}")).split("${}");
        return {
            values: s,
            split: a,
            indexes: i,
            types: r
        }
    }

    function f(t) {
        return m(t).values
    }

    function v(t) {
        let {
            split: e,
            types: s
        } = m(t), i = e.length;
        return t => {
            let n = "";
            for (let a = 0; a < i; a++)
                if (n += e[a], void 0 !== t[a]) {
                    let e = s[a];
                    e === c ? n += (0, r.sanitize)(t[a]) : e === d ? n += l.transform(t[a]) : n += t[a]
                }
            return n
        }
    }
    let g = t => "number" == typeof t ? 0 : l.test(t) ? l.getAnimatableNone(t) : t,
        y = {
            test: function(t) {
                return isNaN(t) && "string" == typeof t && (t.match(h.floatRegex) ? .length || 0) + (t.match(u) ? .length || 0) > 0
            },
            parse: f,
            createTransformer: v,
            getAnimatableNone: function(t) {
                let e = f(t);
                return v(t)(e.map(g))
            }
        };
    t.s(["analyseComplexValue", () => m, "complex", () => y], 69577)
}, 83411, t => {
    "use strict";
    let e = t => !!(t && t.getVelocity);
    t.s(["isMotionValue", () => e])
}, 96173, t => {
    "use strict";
    let e;
    var s = t.i(46791),
        i = t.i(87022);

    function r() {
        e = void 0
    }
    let n = {
        now: () => (void 0 === e && n.set(i.frameData.isProcessing || s.MotionGlobalConfig.useManualTiming ? i.frameData.timestamp : performance.now()), e),
        set: t => {
            e = t, queueMicrotask(r)
        }
    };
    t.s(["time", () => n])
}, 70596, 33887, 25791, t => {
    "use strict";

    function e(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }

    function s(t, e) {
        let s = t.indexOf(e);
        s > -1 && t.splice(s, 1)
    }
    t.s(["addUniqueItem", () => e, "removeItem", () => s], 33887);
    class i {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return e(this.subscriptions, t), () => s(this.subscriptions, t)
        }
        notify(t, e, s) {
            let i = this.subscriptions.length;
            if (i)
                if (1 === i) this.subscriptions[0](t, e, s);
                else
                    for (let r = 0; r < i; r++) {
                        let i = this.subscriptions[r];
                        i && i(t, e, s)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }

    function r(t, e) {
        return e ? 1e3 / e * t : 0
    }
    t.s(["SubscriptionManager", () => i], 70596), t.s(["velocityPerSecond", () => r], 25791)
}, 86427, t => {
    "use strict";
    var e = t.i(70596),
        s = t.i(25791),
        i = t.i(96173),
        r = t.i(87022);
    let n = {
        current: void 0
    };
    class a {
        constructor(t, e = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
                let e = i.time.now();
                if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                    for (let t of this.dependents) t.dirty()
            }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t, this.updatedAt = i.time.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(t = this.current) {
            this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, s) {
            this.events[t] || (this.events[t] = new e.SubscriptionManager);
            let i = this.events[t].add(s);
            return "change" === t ? () => {
                i(), r.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : i
        }
        clearListeners() {
            for (let t in this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, s) {
            this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - s
        }
        jump(t, e = !0) {
            this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ? .notify(this.current)
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            return n.current && n.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let t = i.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
            let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, s.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(), new Promise(e => {
                this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }

    function o(t, e) {
        return new a(t, e)
    }
    t.s(["collectMotionValues", () => n, "motionValue", () => o])
}, 92936, t => {
    "use strict";
    let e = "undefined" != typeof window;
    t.s(["isBrowser", () => e])
}, 37806, 47414, t => {
    "use strict";
    var e = t.i(71645);
    let s = (0, e.createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });

    function i(t) {
        let s = (0, e.useRef)(null);
        return null === s.current && (s.current = t()), s.current
    }
    t.s(["MotionConfigContext", () => s], 37806), t.s(["useConstant", () => i], 47414)
}, 74008, t => {
    "use strict";
    var e = t.i(71645);
    let s = t.i(92936).isBrowser ? e.useLayoutEffect : e.useEffect;
    t.s(["useIsomorphicLayoutEffect", () => s])
}, 38638, t => {
    "use strict";
    let e = (t, e) => s => e(t(s)),
        s = (...t) => t.reduce(e);
    t.s(["pipe", () => s])
}, 63074, 4169, t => {
    "use strict";
    let e = t => 1e3 * t,
        s = t => t / 1e3;
    t.s(["millisecondsToSeconds", () => s, "secondsToMilliseconds", () => e], 63074);
    let i = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    };
    t.s(["activeAnimations", () => i], 4169)
}, 48393, 91687, t => {
    "use strict";

    function e(t, e, s) {
        return (s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6) ? t + (e - t) * 6 * s : s < .5 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t
    }

    function s({
        hue: t,
        saturation: s,
        lightness: i,
        alpha: r
    }) {
        t /= 360, i /= 100;
        let n = 0,
            a = 0,
            o = 0;
        if (s /= 100) {
            let r = i < .5 ? i * (1 + s) : i + s - i * s,
                l = 2 * i - r;
            n = e(l, r, t + 1 / 3), a = e(l, r, t), o = e(l, r, t - 1 / 3)
        } else n = a = o = i;
        return {
            red: Math.round(255 * n),
            green: Math.round(255 * a),
            blue: Math.round(255 * o),
            alpha: r
        }
    }

    function i(t, e) {
        return s => s > 0 ? e : t
    }
    t.s(["hslaToRgba", () => s], 48393), t.s(["mixImmediate", () => i], 91687)
}, 83352, 56512, 21748, 73431, 93544, 41980, 78047, 91559, 60855, 83920, 44230, 15932, 15923, 14229, 44573, 79294, t => {
    "use strict";
    t.i(47167);
    var e = t.i(38638),
        s = t.i(76959),
        i = t.i(63074),
        r = t.i(96173),
        n = t.i(4169),
        a = t.i(65566),
        o = t.i(19928),
        l = t.i(79444),
        u = t.i(69577),
        h = t.i(63011),
        c = t.i(22660),
        d = t.i(48393),
        p = t.i(66820),
        m = t.i(91687),
        f = t.i(706);
    let v = (t, e, s) => {
            let i = t * t,
                r = s * (e * e - i) + i;
            return r < 0 ? 0 : Math.sqrt(r)
        },
        g = [h.hex, p.rgba, c.hsla];

    function y(t) {
        let e = g.find(e => e.test(t));
        if ((0, a.warning)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let s = e.parse(t);
        return e === c.hsla && (s = (0, d.hslaToRgba)(s)), s
    }
    let b = (t, e) => {
            let s = y(t),
                i = y(e);
            if (!s || !i) return (0, m.mixImmediate)(t, e);
            let r = { ...s
            };
            return t => (r.red = v(s.red, i.red, t), r.green = v(s.green, i.green, t), r.blue = v(s.blue, i.blue, t), r.alpha = (0, f.mixNumber)(s.alpha, i.alpha, t), p.rgba.transform(r))
        },
        T = new Set(["none", "hidden"]);

    function M(t, e) {
        return s => (0, f.mixNumber)(t, e, s)
    }

    function x(t) {
        return "number" == typeof t ? M : "string" == typeof t ? (0, o.isCSSVariableToken)(t) ? m.mixImmediate : l.color.test(t) ? b : A : Array.isArray(t) ? w : "object" == typeof t ? l.color.test(t) ? b : S : m.mixImmediate
    }

    function w(t, e) {
        let s = [...t],
            i = s.length,
            r = t.map((t, s) => x(t)(t, e[s]));
        return t => {
            for (let e = 0; e < i; e++) s[e] = r[e](t);
            return s
        }
    }

    function S(t, e) {
        let s = { ...t,
                ...e
            },
            i = {};
        for (let r in s) void 0 !== t[r] && void 0 !== e[r] && (i[r] = x(t[r])(t[r], e[r]));
        return t => {
            for (let e in i) s[e] = i[e](t);
            return s
        }
    }
    let A = (t, s) => {
        let i = u.complex.createTransformer(s),
            r = (0, u.analyseComplexValue)(t),
            n = (0, u.analyseComplexValue)(s);
        if (!(r.indexes.var.length === n.indexes.var.length && r.indexes.color.length === n.indexes.color.length && r.indexes.number.length >= n.indexes.number.length)) return (0, a.warning)(!0, `Complex values '${t}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, m.mixImmediate)(t, s);
        if (T.has(t) && !n.values.length || T.has(s) && !r.values.length) return T.has(t) ? e => e <= 0 ? t : s : e => e >= 1 ? s : t;
        return (0, e.pipe)(w(function(t, e) {
            let s = [],
                i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let r = 0; r < e.values.length; r++) {
                let n = e.types[r],
                    a = t.indexes[n][i[n]],
                    o = t.values[a] ? ? 0;
                s[r] = o, i[n]++
            }
            return s
        }(r, n), n.values), i)
    };

    function k(t, e, s) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof s ? (0, f.mixNumber)(t, e, s) : x(t)(t, e)
    }
    var C = t.i(87022);
    let F = t => {
            let e = ({
                timestamp: e
            }) => t(e);
            return {
                start: (t = !0) => C.frame.update(e, t),
                stop: () => (0, C.cancelFrame)(e),
                now: () => C.frameData.isProcessing ? C.frameData.timestamp : r.time.now()
            }
        },
        P = (t, e, s = 10) => {
            let i = "",
                r = Math.max(Math.round(e / s), 2);
            for (let e = 0; e < r; e++) i += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
            return `linear(${i.substring(0,i.length-2)})`
        };

    function D(t) {
        let e = 0,
            s = t.next(e);
        for (; !s.done && e < 2e4;) e += 50, s = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
    }

    function I(t, e = 100, s) {
        let r = s({ ...t,
                keyframes: [0, e]
            }),
            n = Math.min(D(r), 2e4);
        return {
            type: "keyframes",
            ease: t => r.next(n * t).value / e,
            duration: (0, i.millisecondsToSeconds)(n)
        }
    }
    t.s(["generateLinearEasing", () => P], 56512), t.s(["createGeneratorEasing", () => I], 21748);
    var V = t.i(25791);

    function O(t, e, s) {
        let i = Math.max(e - 5, 0);
        return (0, V.velocityPerSecond)(s - t(i), e - i)
    }
    let N = .01,
        E = 2,
        q = .005,
        R = .5;

    function $(t, e) {
        return t * Math.sqrt(1 - e * e)
    }
    let z = ["duration", "bounce"],
        U = ["stiffness", "damping", "mass"];

    function B(t, e) {
        return e.some(e => void 0 !== t[e])
    }

    function G(t = .3, e = .3) {
        let r, n = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t,
            {
                restSpeed: o,
                restDelta: l
            } = n,
            u = n.keyframes[0],
            h = n.keyframes[n.keyframes.length - 1],
            c = {
                done: !1,
                value: u
            },
            {
                stiffness: d,
                damping: p,
                mass: m,
                duration: f,
                velocity: v,
                isResolvedFromDuration: g
            } = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!B(t, U) && B(t, z))
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration),
                            r = i * i,
                            n = 2 * (0, s.clamp)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                        e = { ...e,
                            mass: 1,
                            stiffness: r,
                            damping: n
                        }
                    } else {
                        let r = function({
                            duration: t = 800,
                            bounce: e = .3,
                            velocity: r = 0,
                            mass: n = 1
                        }) {
                            let o, l;
                            (0, a.warning)(t <= (0, i.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let u = 1 - e;
                            u = (0, s.clamp)(.05, 1, u), t = (0, s.clamp)(.01, 10, (0, i.millisecondsToSeconds)(t)), u < 1 ? (o = e => {
                                let s = e * u,
                                    i = s * t;
                                return .001 - (s - r) / $(e, u) * Math.exp(-i)
                            }, l = e => {
                                let s = e * u * t,
                                    i = Math.pow(u, 2) * Math.pow(e, 2) * t,
                                    n = Math.exp(-s),
                                    a = $(Math.pow(e, 2), u);
                                return (s * r + r - i) * n * (-o(e) + .001 > 0 ? -1 : 1) / a
                            }) : (o = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), l = e => t * t * (r - e) * Math.exp(-e * t));
                            let h = function(t, e, s) {
                                let i = s;
                                for (let s = 1; s < 12; s++) i -= t(i) / e(i);
                                return i
                            }(o, l, 5 / t);
                            if (t = (0, i.secondsToMilliseconds)(t), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            }; {
                                let e = Math.pow(h, 2) * n;
                                return {
                                    stiffness: e,
                                    damping: 2 * u * Math.sqrt(n * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = { ...e,
                            ...r,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                return e
            }({ ...n,
                velocity: -(0, i.millisecondsToSeconds)(n.velocity || 0)
            }),
            y = v || 0,
            b = p / (2 * Math.sqrt(d * m)),
            T = h - u,
            M = (0, i.millisecondsToSeconds)(Math.sqrt(d / m)),
            x = 5 > Math.abs(T);
        if (o || (o = x ? N : E), l || (l = x ? q : R), b < 1) {
            let t = $(M, b);
            r = e => h - Math.exp(-b * M * e) * ((y + b * M * T) / t * Math.sin(t * e) + T * Math.cos(t * e))
        } else if (1 === b) r = t => h - Math.exp(-M * t) * (T + (y + M * T) * t);
        else {
            let t = M * Math.sqrt(b * b - 1);
            r = e => {
                let s = Math.exp(-b * M * e),
                    i = Math.min(t * e, 300);
                return h - s * ((y + b * M * T) * Math.sinh(i) + t * T * Math.cosh(i)) / t
            }
        }
        let w = {
            calculatedDuration: g && f || null,
            next: t => {
                let e = r(t);
                if (g) c.done = t >= f;
                else {
                    let s = 0 === t ? y : 0;
                    b < 1 && (s = 0 === t ? (0, i.secondsToMilliseconds)(y) : O(r, t, e));
                    let n = Math.abs(h - e) <= l;
                    c.done = Math.abs(s) <= o && n
                }
                return c.value = c.done ? h : e, c
            },
            toString: () => {
                let t = Math.min(D(w), 2e4),
                    e = P(e => w.next(t * e).value, t, 30);
                return t + "ms " + e
            },
            toTransition: () => {}
        };
        return w
    }

    function W({
        keyframes: t,
        velocity: e = 0,
        power: s = .8,
        timeConstant: i = 325,
        bounceDamping: r = 10,
        bounceStiffness: n = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = .5,
        restSpeed: h
    }) {
        let c, d, p = t[0],
            m = {
                done: !1,
                value: p
            },
            f = s * e,
            v = p + f,
            g = void 0 === a ? v : a(v);
        g !== v && (f = g - p);
        let y = t => -f * Math.exp(-t / i),
            b = t => g + y(t),
            T = t => {
                let e = y(t),
                    s = b(t);
                m.done = Math.abs(e) <= u, m.value = m.done ? g : s
            },
            M = t => {
                let e;
                if (e = m.value, void 0 !== o && e < o || void 0 !== l && e > l) {
                    var s;
                    c = t, d = G({
                        keyframes: [m.value, (s = m.value, void 0 === o ? l : void 0 === l || Math.abs(o - s) < Math.abs(l - s) ? o : l)],
                        velocity: O(b, t, m.value),
                        damping: r,
                        stiffness: n,
                        restDelta: u,
                        restSpeed: h
                    })
                }
            };
        return M(0), {
            calculatedDuration: null,
            next: t => {
                let e = !1;
                return (d || void 0 !== c || (e = !0, T(t), M(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || T(t), m)
            }
        }
    }
    G.applyToOptions = t => {
        let e = I(t, 100, G);
        return t.ease = e.ease, t.duration = (0, i.secondsToMilliseconds)(e.duration), t.type = "keyframes", t
    }, t.s(["spring", () => G], 73431);
    var j = t.i(60830);
    let K = (t, e, s) => (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t;

    function L(t, e, s, i) {
        return t === e && s === i ? j.noop : r => 0 === r || 1 === r ? r : K(function(t, e, s, i, r) {
            let n, a, o = 0;
            do(n = K(a = e + (s - e) / 2, i, r) - t) > 0 ? s = a : e = a; while (Math.abs(n) > 1e-7 && ++o < 12) return a
        }(r, 0, 1, t, s), e, i)
    }
    let _ = L(.42, 0, 1, 1),
        J = L(0, 0, .58, 1),
        H = L(.42, 0, .58, 1),
        Q = t => Array.isArray(t) && "number" != typeof t[0];
    t.s(["isEasingArray", () => Q], 93544);
    let X = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Y = t => e => 1 - t(1 - e),
        Z = L(.33, 1.53, .69, .99),
        tt = Y(Z),
        te = X(tt);
    t.s(["backIn", () => tt, "backInOut", () => te, "backOut", () => Z], 41980);
    let ts = t => (t *= 2) < 1 ? .5 * tt(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    t.s(["anticipate", () => ts], 78047);
    let ti = t => 1 - Math.sin(Math.acos(t)),
        tr = Y(ti),
        tn = X(ti);
    t.s(["circIn", () => ti, "circInOut", () => tn, "circOut", () => tr], 91559);
    let ta = t => Array.isArray(t) && "number" == typeof t[0];
    t.s(["isBezierDefinition", () => ta], 60855);
    let to = {
            linear: j.noop,
            easeIn: _,
            easeInOut: H,
            easeOut: J,
            circIn: ti,
            circInOut: tn,
            circOut: tr,
            backIn: tt,
            backInOut: te,
            backOut: Z,
            anticipate: ts
        },
        tl = t => {
            if (ta(t)) {
                (0, a.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [e, s, i, r] = t;
                return L(e, s, i, r)
            }
            return "string" == typeof t ? ((0, a.invariant)(void 0 !== to[t], `Invalid easing type '${t}'`, "invalid-easing-type"), to[t]) : t
        };
    var tu = t.i(46791);
    let th = (t, e, s) => {
        let i = e - t;
        return 0 === i ? 1 : (s - t) / i
    };

    function tc(t, i, {
        clamp: r = !0,
        ease: n,
        mixer: o
    } = {}) {
        let l = t.length;
        if ((0, a.invariant)(l === i.length, "Both input and output ranges must be the same length", "range-length"), 1 === l) return () => i[0];
        if (2 === l && i[0] === i[1]) return () => i[1];
        let u = t[0] === t[1];
        t[0] > t[l - 1] && (t = [...t].reverse(), i = [...i].reverse());
        let h = function(t, s, i) {
                let r = [],
                    n = i || tu.MotionGlobalConfig.mix || k,
                    a = t.length - 1;
                for (let i = 0; i < a; i++) {
                    let a = n(t[i], t[i + 1]);
                    if (s) {
                        let t = Array.isArray(s) ? s[i] || j.noop : s;
                        a = (0, e.pipe)(t, a)
                    }
                    r.push(a)
                }
                return r
            }(i, n, o),
            c = h.length,
            d = e => {
                if (u && e < t[0]) return i[0];
                let s = 0;
                if (c > 1)
                    for (; s < t.length - 2 && !(e < t[s + 1]); s++);
                let r = th(t[s], t[s + 1], e);
                return h[s](r)
            };
        return r ? e => d((0, s.clamp)(t[0], t[l - 1], e)) : d
    }

    function td(t, e) {
        let s = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
            let r = th(0, e, i);
            t.push((0, f.mixNumber)(s, 1, r))
        }
    }

    function tp(t) {
        let e = [0];
        return td(e, t.length - 1), e
    }

    function tm({
        duration: t = 300,
        keyframes: e,
        times: s,
        ease: i = "easeInOut"
    }) {
        var r;
        let n = Q(i) ? i.map(tl) : tl(i),
            a = {
                done: !1,
                value: e[0]
            },
            o = tc((r = s && s.length === e.length ? s : tp(e), r.map(e => e * t)), e, {
                ease: Array.isArray(n) ? n : e.map(() => n || H).splice(0, e.length - 1)
            });
        return {
            calculatedDuration: t,
            next: e => (a.value = o(e), a.done = e >= t, a)
        }
    }
    t.s(["progress", () => th], 83920), t.s(["interpolate", () => tc], 44230), t.s(["fillOffset", () => td], 15932), t.s(["defaultOffset", () => tp], 15923);
    let tf = t => null !== t;

    function tv(t, {
        repeat: e,
        repeatType: s = "loop"
    }, i, r = 1) {
        let n = t.filter(tf),
            a = r < 0 || e && "loop" !== s && e % 2 == 1 ? 0 : n.length - 1;
        return a && void 0 !== i ? i : n[a]
    }
    t.s(["getFinalKeyframe", () => tv], 14229);
    let tg = {
        decay: W,
        inertia: W,
        tween: tm,
        keyframes: tm,
        spring: G
    };

    function ty(t) {
        "string" == typeof t.type && (t.type = tg[t.type])
    }
    t.s(["replaceTransitionType", () => ty], 44573);
    class tb {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(t => {
                this.resolve = t
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
    }
    t.s(["WithPromise", () => tb], 79294);
    let tT = t => t / 100;
    class tM extends tb {
        constructor(t) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                let {
                    motionValue: t
                } = this.options;
                t && t.updatedAt !== r.time.now() && this.tick(r.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
            }, n.activeAnimations.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: t
            } = this;
            ty(t);
            let {
                type: s = tm,
                repeat: i = 0,
                repeatDelay: r = 0,
                repeatType: n,
                velocity: a = 0
            } = t, {
                keyframes: o
            } = t, l = s || tm;
            l !== tm && "number" != typeof o[0] && (this.mixKeyframes = (0, e.pipe)(tT, k(o[0], o[1])), o = [0, 100]);
            let u = l({ ...t,
                keyframes: o
            });
            "mirror" === n && (this.mirroredGenerator = l({ ...t,
                keyframes: [...o].reverse(),
                velocity: -a
            })), null === u.calculatedDuration && (u.calculatedDuration = D(u));
            let {
                calculatedDuration: h
            } = u;
            this.calculatedDuration = h, this.resolvedDuration = h + r, this.totalDuration = this.resolvedDuration * (i + 1) - r, this.generator = u
        }
        updateTime(t) {
            let e = Math.round(t - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
            let {
                generator: i,
                totalDuration: r,
                mixKeyframes: n,
                mirroredGenerator: a,
                resolvedDuration: o,
                calculatedDuration: l
            } = this;
            if (null === this.startTime) return i.next(0);
            let {
                delay: u = 0,
                keyframes: h,
                repeat: c,
                repeatType: d,
                repeatDelay: p,
                type: m,
                onUpdate: f,
                finalKeyframe: v
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - r / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
            let g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
                y = this.playbackSpeed >= 0 ? g < 0 : g > r;
            this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
            let b = this.currentTime,
                T = i;
            if (c) {
                let t = Math.min(this.currentTime, r) / o,
                    e = Math.floor(t),
                    i = t % 1;
                !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === d ? (i = 1 - i, p && (i -= p / o)) : "mirror" === d && (T = a)), b = (0, s.clamp)(0, 1, i) * o
            }
            let M = y ? {
                done: !1,
                value: h[0]
            } : T.next(b);
            n && (M.value = n(M.value));
            let {
                done: x
            } = M;
            y || null === l || (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
            return w && m !== W && (M.value = tv(h, this.options, v, this.speed)), f && f(M.value), w && this.finish(), M
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return (0, i.millisecondsToSeconds)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + (0, i.millisecondsToSeconds)(t)
        }
        get time() {
            return (0, i.millisecondsToSeconds)(this.currentTime)
        }
        set time(t) {
            t = (0, i.secondsToMilliseconds)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? .start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            this.updateTime(r.time.now());
            let e = this.playbackSpeed !== t;
            this.playbackSpeed = t, e && (this.time = (0, i.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: t = F,
                startTime: e
            } = this.options;
            this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay ? .();
            let s = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = s) : null !== this.holdTime ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = e ? ? s), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(r.time.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, n.activeAnimations.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
        }
    }
    t.s(["JSAnimation", () => tM], 83352)
}, 49652, t => {
    "use strict";

    function e(t, e, s) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let i = document;
            e && (i = e.current);
            let r = s ? .[t] ? ? i.querySelectorAll(t);
            return r ? Array.from(r) : []
        }
        return Array.from(t)
    }
    t.s(["resolveElements", () => e])
}]);