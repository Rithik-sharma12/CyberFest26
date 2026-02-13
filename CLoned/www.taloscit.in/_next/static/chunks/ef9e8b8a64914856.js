(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 46932, 81699, 92968, 57036, 57044, 78310, 31178, 21476, 97989, 30551, 97307, 6327, 45161, 64978, 89026, 36331, 69122, 72846, t => {
    "use strict";
    let e;
    var i, n = t.i(71645);
    let s = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        r = new Set(s),
        o = t => 180 * t / Math.PI,
        a = t => h(o(Math.atan2(t[1], t[0]))),
        l = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
            rotate: a,
            rotateZ: a,
            skewX: t => o(Math.atan(t[1])),
            skewY: t => o(Math.atan(t[2])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        h = t => ((t %= 360) < 0 && (t += 360), t),
        u = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        c = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        d = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: u,
            scaleY: c,
            scale: t => (u(t) + c(t)) / 2,
            rotateX: t => h(o(Math.atan2(t[6], t[5]))),
            rotateY: t => h(o(Math.atan2(-t[2], t[0]))),
            rotateZ: a,
            rotate: a,
            skewX: t => o(Math.atan(t[4])),
            skewY: t => o(Math.atan(t[1])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

    function m(t) {
        return +!!t.includes("scale")
    }

    function p(t, e) {
        let i, n;
        if (!t || "none" === t) return m(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) i = d, n = s;
        else {
            let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = l, n = e
        }
        if (!n) return m(e);
        let r = i[e],
            o = n[1].split(",").map(f);
        return "function" == typeof r ? r(o) : o[r]
    }

    function f(t) {
        return parseFloat(t.trim())
    }
    var g = t.i(19928);

    function y({
        top: t,
        left: e,
        right: i,
        bottom: n
    }) {
        return {
            x: {
                min: e,
                max: i
            },
            y: {
                min: t,
                max: n
            }
        }
    }
    var v = t.i(706);

    function x(t) {
        return void 0 === t || 1 === t
    }

    function T({
        scale: t,
        scaleX: e,
        scaleY: i
    }) {
        return !x(t) || !x(e) || !x(i)
    }

    function P(t) {
        return T(t) || w(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
    }

    function w(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
    }

    function S(t, e, i, n, s) {
        return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e
    }

    function b(t, e = 0, i = 1, n, s) {
        t.min = S(t.min, e, i, n, s), t.max = S(t.max, e, i, n, s)
    }

    function V(t, {
        x: e,
        y: i
    }) {
        b(t.x, e.translate, e.scale, e.originPoint), b(t.y, i.translate, i.scale, i.originPoint)
    }

    function A(t, e) {
        t.min = t.min + e, t.max = t.max + e
    }

    function E(t, e, i, n, s = .5) {
        let r = (0, v.mixNumber)(t.min, t.max, s);
        b(t, e, i, r, n)
    }

    function C(t, e) {
        E(t.x, e.x, e.scaleX, e.scale, e.originX), E(t.y, e.y, e.scaleY, e.scale, e.originY)
    }

    function M(t, e) {
        return y(function(t, e) {
            if (!e) return t;
            let i = e({
                    x: t.left,
                    y: t.top
                }),
                n = e({
                    x: t.right,
                    y: t.bottom
                });
            return {
                top: i.y,
                left: i.x,
                bottom: n.y,
                right: n.x
            }
        }(t.getBoundingClientRect(), e))
    }
    let D = new Set(["width", "height", "top", "left", "right", "bottom", ...s]);
    var R = t.i(76307),
        k = t.i(65091);
    let L = t => e => e.test(t),
        j = [R.number, k.px, k.percent, k.degrees, k.vw, k.vh, {
            test: t => "auto" === t,
            parse: t => t
        }],
        B = t => j.find(L(t));
    var F = t.i(65566);
    let O = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        I = t => t === R.number || t === k.px,
        U = new Set(["x", "y", "z"]),
        N = s.filter(t => !U.has(t)),
        W = {
            width: ({
                x: t
            }, {
                paddingLeft: e = "0",
                paddingRight: i = "0"
            }) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({
                y: t
            }, {
                paddingTop: e = "0",
                paddingBottom: i = "0"
            }) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {
                top: e
            }) => parseFloat(e),
            left: (t, {
                left: e
            }) => parseFloat(e),
            bottom: ({
                y: t
            }, {
                top: e
            }) => parseFloat(e) + (t.max - t.min),
            right: ({
                x: t
            }, {
                left: e
            }) => parseFloat(e) + (t.max - t.min),
            x: (t, {
                transform: e
            }) => p(e, "x"),
            y: (t, {
                transform: e
            }) => p(e, "y")
        };
    W.translateX = W.x, W.translateY = W.y;
    var $ = t.i(87022);
    let Y = new Set,
        H = !1,
        X = !1,
        z = !1;

    function K() {
        if (X) {
            let t = Array.from(Y).filter(t => t.needsMeasurement),
                e = new Set(t.map(t => t.element)),
                i = new Map;
            e.forEach(t => {
                let e, n = (e = [], N.forEach(i => {
                    let n = t.getValue(i);
                    void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")))
                }), e);
                n.length && (i.set(t, n), t.render())
            }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                t.render();
                let e = i.get(t);
                e && e.forEach(([e, i]) => {
                    t.getValue(e) ? .set(i)
                })
            }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
            })
        }
        X = !1, H = !1, Y.forEach(t => t.complete(z)), Y.clear()
    }

    function G() {
        Y.forEach(t => {
            t.readKeyframes(), t.needsMeasurement && (X = !0)
        })
    }
    class Z {
        constructor(t, e, i, n, s, r = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (Y.add(this), H || (H = !0, $.frame.read(G), $.frame.resolveKeyframes(K))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e,
                element: i,
                motionValue: n
            } = this;
            if (null === t[0]) {
                let s = n ? .get(),
                    r = t[t.length - 1];
                if (void 0 !== s) t[0] = s;
                else if (i && e) {
                    let n = i.readValue(e, r);
                    null != n && (t[0] = n)
                }
                void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0])
            }
            for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Y.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (Y.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    var _ = t.i(69577),
        q = t.i(30677);
    let J = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function Q(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(q.floatRegex) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
            r = +!!J.has(e);
        return n !== i && (r *= 100), e + "(" + r + s + ")"
    }
    let tt = /\b([a-z-]*)\(.*?\)/gu,
        te = { ..._.complex,
            getAnimatableNone: t => {
                let e = t.match(tt);
                return e ? e.map(Q).join(" ") : t
            }
        };
    var ti = t.i(79444);
    let tn = { ...R.number,
            transform: Math.round
        },
        ts = {
            rotate: k.degrees,
            rotateX: k.degrees,
            rotateY: k.degrees,
            rotateZ: k.degrees,
            scale: R.scale,
            scaleX: R.scale,
            scaleY: R.scale,
            scaleZ: R.scale,
            skew: k.degrees,
            skewX: k.degrees,
            skewY: k.degrees,
            distance: k.px,
            translateX: k.px,
            translateY: k.px,
            translateZ: k.px,
            x: k.px,
            y: k.px,
            z: k.px,
            perspective: k.px,
            transformPerspective: k.px,
            opacity: R.alpha,
            originX: k.progressPercentage,
            originY: k.progressPercentage,
            originZ: k.px
        },
        tr = {
            borderWidth: k.px,
            borderTopWidth: k.px,
            borderRightWidth: k.px,
            borderBottomWidth: k.px,
            borderLeftWidth: k.px,
            borderRadius: k.px,
            radius: k.px,
            borderTopLeftRadius: k.px,
            borderTopRightRadius: k.px,
            borderBottomRightRadius: k.px,
            borderBottomLeftRadius: k.px,
            width: k.px,
            maxWidth: k.px,
            height: k.px,
            maxHeight: k.px,
            top: k.px,
            right: k.px,
            bottom: k.px,
            left: k.px,
            padding: k.px,
            paddingTop: k.px,
            paddingRight: k.px,
            paddingBottom: k.px,
            paddingLeft: k.px,
            margin: k.px,
            marginTop: k.px,
            marginRight: k.px,
            marginBottom: k.px,
            marginLeft: k.px,
            backgroundPositionX: k.px,
            backgroundPositionY: k.px,
            ...ts,
            zIndex: tn,
            fillOpacity: R.alpha,
            strokeOpacity: R.alpha,
            numOctaves: tn
        },
        to = { ...tr,
            color: ti.color,
            backgroundColor: ti.color,
            outlineColor: ti.color,
            fill: ti.color,
            stroke: ti.color,
            borderColor: ti.color,
            borderTopColor: ti.color,
            borderRightColor: ti.color,
            borderBottomColor: ti.color,
            borderLeftColor: ti.color,
            filter: te,
            WebkitFilter: te
        },
        ta = t => to[t];

    function tl(t, e) {
        let i = ta(t);
        return i !== te && (i = _.complex), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
    }
    let th = new Set(["auto", "none", "0"]);
    class tu extends Z {
        constructor(t, e, i, n, s) {
            super(t, e, i, n, s, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                element: e,
                name: i
            } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
                let n = t[i];
                if ("string" == typeof n && (n = n.trim(), (0, g.isCSSVariableToken)(n))) {
                    let s = function t(e, i, n = 1) {
                        (0, F.invariant)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                        let [s, r] = function(t) {
                            let e = O.exec(t);
                            if (!e) return [, ];
                            let [, i, n, s] = e;
                            return [`--${i??n}`, s]
                        }(e);
                        if (!s) return;
                        let o = window.getComputedStyle(i).getPropertyValue(s);
                        if (o) {
                            let t = o.trim();
                            return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t
                        }
                        return (0, g.isCSSVariableToken)(r) ? t(r, i, n + 1) : r
                    }(n, e.current);
                    void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n)
                }
            }
            if (this.resolveNoneKeyframes(), !D.has(i) || 2 !== t.length) return;
            let [n, s] = t, r = B(n), o = B(s);
            if (r !== o)
                if (I(r) && I(o))
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    } else W[i] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e
            } = this, i = [];
            for (let e = 0; e < t.length; e++)(null === t[e] || function(t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
            }(t[e])) && i.push(e);
            i.length && function(t, e, i) {
                let n, s = 0;
                for (; s < t.length && !n;) {
                    let e = t[s];
                    "string" == typeof e && !th.has(e) && (0, _.analyseComplexValue)(e).values.length && (n = t[s]), s++
                }
                if (n && i)
                    for (let s of e) t[s] = tl(i, n)
            }(t, i, e)
        }
        measureInitialState() {
            let {
                element: t,
                unresolvedKeyframes: e,
                name: i
            } = this;
            if (!t || !t.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = W[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
            let n = e[e.length - 1];
            void 0 !== n && t.getValue(i, n).jump(n, !1)
        }
        measureEndState() {
            let {
                element: t,
                name: e,
                unresolvedKeyframes: i
            } = this;
            if (!t || !t.current) return;
            let n = t.getValue(e);
            n && n.jump(this.measuredOrigin, !1);
            let s = i.length - 1,
                r = i[s];
            i[s] = W[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    var tc = t.i(83411);
    t.i(47167);
    var td = t.i(96173),
        tm = t.i(86427);
    let tp = [...j, ti.color, _.complex],
        {
            schedule: tf
        } = (0, t.i(51571).createRenderBatcher)(queueMicrotask, !1);
    var tg = t.i(70596);
    let ty = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        tv = {};
    for (let t in ty) tv[t] = {
        isEnabled: e => ty[t].some(t => !!e[t])
    };
    let tx = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        tT = () => ({
            x: tx(),
            y: tx()
        }),
        tP = () => ({
            min: 0,
            max: 0
        }),
        tw = () => ({
            x: tP(),
            y: tP()
        });
    t.s(["createBox", () => tw, "createDelta", () => tT], 81699);
    var tS = t.i(92936);
    let tb = {
            current: null
        },
        tV = {
            current: !1
        },
        tA = new WeakMap;

    function tE(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
    }

    function tC(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    t.s(["visualElementStore", () => tA], 92968);
    let tM = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        tD = ["initial", ...tM];

    function tR(t) {
        return tE(t.animate) || tD.some(e => tC(t[e]))
    }

    function tk(t) {
        return !!(tR(t) || t.variants)
    }

    function tL(t) {
        let e = [{}, {}];
        return t ? .values.forEach((t, i) => {
            e[0][i] = t.get(), e[1][i] = t.getVelocity()
        }), e
    }

    function tj(t, e, i, n) {
        if ("function" == typeof e) {
            let [s, r] = tL(n);
            e = e(void 0 !== i ? i : t.custom, s, r)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
            let [s, r] = tL(n);
            e = e(void 0 !== i ? i : t.custom, s, r)
        }
        return e
    }
    let tB = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class tF {
        scrapeMotionValuesFromProps(t, e, i) {
            return {}
        }
        constructor({
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r
        }, o = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Z, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let t = td.time.now();
                this.renderScheduledAt < t && (this.renderScheduledAt = t, $.frame.render(this.render, !1, !0))
            };
            const {
                latestValues: a,
                renderState: l
            } = r;
            this.latestValues = a, this.baseTarget = { ...a
            }, this.initialValues = e.initial ? { ...a
            } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!s, this.isControllingVariants = tR(e), this.isVariantNode = tk(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
            const {
                willChange: h,
                ...u
            } = this.scrapeMotionValuesFromProps(e, {}, this);
            for (const t in u) {
                const e = u[t];
                void 0 !== a[t] && (0, tc.isMotionValue)(e) && e.set(a[t])
            }
        }
        mount(t) {
            this.current = t, tA.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), tV.current || function() {
                if (tV.current = !0, tS.isBrowser)
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => tb.current = t.matches;
                        t.addEventListener("change", e), e()
                    } else tb.current = !1
            }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || tb.current), this.parent ? .addChild(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
            for (let t in this.projection && this.projection.unmount(), (0, $.cancelFrame)(this.notifyUpdate), (0, $.cancelFrame)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this), this.events) this.events[t].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            let i;
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let n = r.has(t);
            n && this.onBindTransform && this.onBindTransform();
            let s = e.on("change", e => {
                this.latestValues[t] = e, this.props.onUpdate && $.frame.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                s(), i && i(), e.owner && e.stop()
            })
        }
        sortNodePosition(t) {
            return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
            let t = "animation";
            for (t in tv) {
                let e = tv[t];
                if (!e) continue;
                let {
                    isEnabled: i,
                    Feature: n
                } = e;
                if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tw()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
            for (let e = 0; e < tB.length; e++) {
                let i = tB[e];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let n = t["on" + i];
                n && (this.propEventSubscriptions[i] = this.on(i, n))
            }
            this.prevMotionValues = function(t, e, i) {
                for (let n in e) {
                    let s = e[n],
                        r = i[n];
                    if ((0, tc.isMotionValue)(s)) t.addValue(n, s);
                    else if ((0, tc.isMotionValue)(r)) t.addValue(n, (0, tm.motionValue)(s, {
                        owner: t
                    }));
                    else if (r !== s)
                        if (t.hasValue(n)) {
                            let e = t.getValue(n);
                            !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
                        } else {
                            let e = t.getStaticValue(n);
                            t.addValue(n, (0, tm.motionValue)(void 0 !== e ? e : s, {
                                owner: t
                            }))
                        }
                }
                for (let n in i) void 0 === e[n] && t.removeValue(n);
                return e
            }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            let i = this.values.get(t);
            e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let i = this.values.get(t);
            return void 0 === i && void 0 !== e && (i = (0, tm.motionValue)(null === e ? void 0 : e, {
                owner: this
            }), this.addValue(t, i)), i
        }
        readValue(t, e) {
            let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
            if (null != i) {
                let n, s;
                if ("string" == typeof i && (n = i, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || (s = i, /^0[^.\s]+$/u.test(s)))) i = parseFloat(i);
                else {
                    let n;
                    n = i, !tp.find(L(n)) && _.complex.test(e) && (i = tl(t, e))
                }
                this.setBaseTarget(t, (0, tc.isMotionValue)(i) ? i.get() : i)
            }
            return (0, tc.isMotionValue)(i) ? i.get() : i
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            let e, {
                initial: i
            } = this.props;
            if ("string" == typeof i || "object" == typeof i) {
                let n = tj(this.props, i, this.presenceContext ? .custom);
                n && (e = n[t])
            }
            if (i && void 0 !== e) return e;
            let n = this.getBaseTargetFromProps(this.props, t);
            return void 0 === n || (0, tc.isMotionValue)(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new tg.SubscriptionManager), this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
            tf.render(this.render)
        }
    }
    t.s(["VisualElement", () => tF], 57036);
    class tO extends tF {
        constructor() {
            super(...arguments), this.KeyframeResolver = tu
        }
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0
        }
        removeValueFromRenderState(t, {
            vars: e,
            style: i
        }) {
            delete e[t], delete i[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: t
            } = this.props;
            (0, tc.isMotionValue)(t) && (this.childSubscription = t.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }))
        }
    }
    let tI = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        tU = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        tN = s.length;

    function tW(t, e, i) {
        let {
            style: n,
            vars: o,
            transformOrigin: a
        } = t, l = !1, h = !1;
        for (let t in e) {
            let i = e[t];
            if (r.has(t)) {
                l = !0;
                continue
            }
            if ((0, g.isCSSVariableName)(t)) {
                o[t] = i;
                continue
            } {
                let e = tI(i, tr[t]);
                t.startsWith("origin") ? (h = !0, a[t] = e) : n[t] = e
            }
        }
        if (!e.transform && (l || i ? n.transform = function(t, e, i) {
                let n = "",
                    r = !0;
                for (let o = 0; o < tN; o++) {
                    let a = s[o],
                        l = t[a];
                    if (void 0 === l) continue;
                    let h = !0;
                    if (!(h = "number" == typeof l ? l === +!!a.startsWith("scale") : 0 === parseFloat(l)) || i) {
                        let t = tI(l, tr[a]);
                        if (!h) {
                            r = !1;
                            let e = tU[a] || a;
                            n += `${e}(${t}) `
                        }
                        i && (e[a] = t)
                    }
                }
                return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
            }(e, t.transform, i) : n.transform && (n.transform = "none")), h) {
            let {
                originX: t = "50%",
                originY: e = "50%",
                originZ: i = 0
            } = a;
            n.transformOrigin = `${t} ${e} ${i}`
        }
    }

    function t$(t, {
        style: e,
        vars: i
    }, n, s) {
        let r, o = t.style;
        for (r in e) o[r] = e[r];
        for (r in s ? .applyProjectionStyles(o, n), i) o.setProperty(r, i[r])
    }

    function tY(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let tH = {
            correct: (t, e) => {
                if (!e.target) return t;
                if ("string" == typeof t)
                    if (!k.px.test(t)) return t;
                    else t = parseFloat(t);
                let i = tY(t, e.target.x),
                    n = tY(t, e.target.y);
                return `${i}% ${n}%`
            }
        },
        tX = {
            borderRadius: { ...tH,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: tH,
            borderTopRightRadius: tH,
            borderBottomLeftRadius: tH,
            borderBottomRightRadius: tH,
            boxShadow: {
                correct: (t, {
                    treeScale: e,
                    projectionDelta: i
                }) => {
                    let n = _.complex.parse(t);
                    if (n.length > 5) return t;
                    let s = _.complex.createTransformer(t),
                        r = +("number" != typeof n[0]),
                        o = i.x.scale * e.x,
                        a = i.y.scale * e.y;
                    n[0 + r] /= o, n[1 + r] /= a;
                    let l = (0, v.mixNumber)(o, a, .5);
                    return "number" == typeof n[2 + r] && (n[2 + r] /= l), "number" == typeof n[3 + r] && (n[3 + r] /= l), s(n)
                }
            }
        };

    function tz(t, {
        layout: e,
        layoutId: i
    }) {
        return r.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!tX[t] || "opacity" === t)
    }

    function tK(t, e, i) {
        let {
            style: n
        } = t, s = {};
        for (let r in n)((0, tc.isMotionValue)(n[r]) || e.style && (0, tc.isMotionValue)(e.style[r]) || tz(r, t) || i ? .getValue(r) ? .liveStyle !== void 0) && (s[r] = n[r]);
        return s
    }
    class tG extends tO {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = t$
        }
        readValueFromInstance(t, e) {
            if (r.has(e)) return this.projection ? .isProjecting ? m(e) : ((t, e) => {
                let {
                    transform: i = "none"
                } = getComputedStyle(t);
                return p(i, e)
            })(t, e); {
                let i = window.getComputedStyle(t),
                    n = ((0, g.isCSSVariableName)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                return "string" == typeof n ? n.trim() : n
            }
        }
        measureInstanceViewportBox(t, {
            transformPagePoint: e
        }) {
            return M(t, e)
        }
        build(t, e, i) {
            tW(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return tK(t, e, i)
        }
    }
    t.s(["HTMLVisualElement", () => tG], 57044);
    let tZ = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        t_ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        tq = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };

    function tJ(t, {
        attrX: e,
        attrY: i,
        attrScale: n,
        pathLength: s,
        pathSpacing: r = 1,
        pathOffset: o = 0,
        ...a
    }, l, h, u) {
        if (tW(t, a, h), l) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return
        }
        t.attrs = t.style, t.style = {};
        let {
            attrs: c,
            style: d
        } = t;
        c.transform && (d.transform = c.transform, delete c.transform), (d.transform || c.transformOrigin) && (d.transformOrigin = c.transformOrigin ? ? "50% 50%", delete c.transformOrigin), d.transform && (d.transformBox = u ? .transformBox ? ? "fill-box", delete c.transformBox), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== n && (c.scale = n), void 0 !== s && function(t, e, i = 1, n = 0, s = !0) {
            t.pathLength = 1;
            let r = s ? t_ : tq;
            t[r.offset] = k.px.transform(-n);
            let o = k.px.transform(e),
                a = k.px.transform(i);
            t[r.array] = `${o} ${a}`
        }(c, s, r, o, !1)
    }
    let tQ = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        t0 = t => "string" == typeof t && "svg" === t.toLowerCase();

    function t1(t, e, i) {
        let n = tK(t, e, i);
        for (let i in t)((0, tc.isMotionValue)(t[i]) || (0, tc.isMotionValue)(e[i])) && (n[-1 !== s.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
        return n
    }
    class t9 extends tO {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = tw
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, e) {
            if (r.has(e)) {
                let t = ta(e);
                return t && t.default || 0
            }
            return e = tQ.has(e) ? e : tZ(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return t1(t, e, i)
        }
        build(t, e, i) {
            tJ(t, e, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(t, e, i, n) {
            for (let i in t$(t, e, void 0, n), e.attrs) t.setAttribute(tQ.has(i) ? i : tZ(i), e.attrs[i])
        }
        mount(t) {
            this.isSVGTag = t0(t.tagName), super.mount(t)
        }
    }
    t.s(["SVGVisualElement", () => t9], 78310);
    let t5 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function t3(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (t5.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1
    }
    var t2 = t.i(43476);
    let t6 = (0, n.createContext)({});
    t.s(["LayoutGroupContext", () => t6], 31178);
    let t4 = (0, n.createContext)({
        strict: !1
    });
    var t7 = t.i(37806);
    let t8 = (0, n.createContext)({});

    function et(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    let ee = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function ei(t, e, i) {
        for (let n in e)(0, tc.isMotionValue)(e[n]) || tz(n, i) || (t[n] = e[n])
    }
    let en = () => ({ ...ee(),
            attrs: {}
        }),
        es = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

    function er(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || es.has(t)
    }
    let eo = t => !er(t);
    try {
        i = (() => {
            let t = Error("Cannot find module '@emotion/is-prop-valid'");
            throw t.code = "MODULE_NOT_FOUND", t
        })().default, "function" == typeof i && (eo = t => t.startsWith("on") ? !er(t) : i(t))
    } catch {}
    let ea = (0, n.createContext)(null);
    t.s(["PresenceContext", () => ea], 21476);
    var el = t.i(47414);

    function eh(t) {
        return (0, tc.isMotionValue)(t) ? t.get() : t
    }
    let eu = t => (e, i) => {
            let s = (0, n.useContext)(t8),
                r = (0, n.useContext)(ea),
                o = () => (function({
                    scrapeMotionValuesFromProps: t,
                    createRenderState: e
                }, i, n, s) {
                    return {
                        latestValues: function(t, e, i, n) {
                            let s = {},
                                r = n(t, {});
                            for (let t in r) s[t] = eh(r[t]);
                            let {
                                initial: o,
                                animate: a
                            } = t, l = tR(t), h = tk(t);
                            e && h && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                            let u = !!i && !1 === i.initial,
                                c = (u = u || !1 === o) ? a : o;
                            if (c && "boolean" != typeof c && !tE(c)) {
                                let e = Array.isArray(c) ? c : [c];
                                for (let i = 0; i < e.length; i++) {
                                    let n = tj(t, e[i]);
                                    if (n) {
                                        let {
                                            transitionEnd: t,
                                            transition: e,
                                            ...i
                                        } = n;
                                        for (let t in i) {
                                            let e = i[t];
                                            if (Array.isArray(e)) {
                                                let t = u ? e.length - 1 : 0;
                                                e = e[t]
                                            }
                                            null !== e && (s[t] = e)
                                        }
                                        for (let e in t) s[e] = t[e]
                                    }
                                }
                            }
                            return s
                        }(i, n, s, t),
                        renderState: e()
                    }
                })(t, e, s, r);
            return i ? o() : (0, el.useConstant)(o)
        },
        ec = eu({
            scrapeMotionValuesFromProps: tK,
            createRenderState: ee
        }),
        ed = eu({
            scrapeMotionValuesFromProps: t1,
            createRenderState: en
        }),
        em = Symbol.for("motionComponentSymbol");

    function ep(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    let ef = "data-" + tZ("framerAppearId"),
        eg = (0, n.createContext)({});
    var ey = t.i(74008);

    function ev(t, {
        forwardMotionProps: e = !1
    } = {}, i, s) {
        i && function(t) {
            for (let e in t) tv[e] = { ...tv[e],
                ...t[e]
            }
        }(i);
        let r = t3(t) ? ed : ec;

        function o(i, o) {
            var a;
            let l, h = { ...(0, n.useContext)(t7.MotionConfigContext),
                    ...i,
                    layoutId: function({
                        layoutId: t
                    }) {
                        let e = (0, n.useContext)(t6).id;
                        return e && void 0 !== t ? e + "-" + t : t
                    }(i)
                },
                {
                    isStatic: u
                } = h,
                c = function(t) {
                    let {
                        initial: e,
                        animate: i
                    } = function(t, e) {
                        if (tR(t)) {
                            let {
                                initial: e,
                                animate: i
                            } = t;
                            return {
                                initial: !1 === e || tC(e) ? e : void 0,
                                animate: tC(i) ? i : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0, n.useContext)(t8));
                    return (0, n.useMemo)(() => ({
                        initial: e,
                        animate: i
                    }), [et(e), et(i)])
                }(i),
                d = r(i, u);
            if (!u && tS.isBrowser) {
                (0, n.useContext)(t4).strict;
                let e = function(t) {
                    let {
                        drag: e,
                        layout: i
                    } = tv;
                    if (!e && !i) return {};
                    let n = { ...e,
                        ...i
                    };
                    return {
                        MeasureLayout: e ? .isEnabled(t) || i ? .isEnabled(t) ? n.MeasureLayout : void 0,
                        ProjectionNode: n.ProjectionNode
                    }
                }(h);
                l = e.MeasureLayout, c.visualElement = function(t, e, i, s, r) {
                    let {
                        visualElement: o
                    } = (0, n.useContext)(t8), a = (0, n.useContext)(t4), l = (0, n.useContext)(ea), h = (0, n.useContext)(t7.MotionConfigContext).reducedMotion, u = (0, n.useRef)(null);
                    s = s || a.renderer, !u.current && s && (u.current = s(t, {
                        visualState: e,
                        parent: o,
                        props: i,
                        presenceContext: l,
                        blockInitialAnimation: !!l && !1 === l.initial,
                        reducedMotionConfig: h
                    }));
                    let c = u.current,
                        d = (0, n.useContext)(eg);
                    c && !c.projection && r && ("html" === c.type || "svg" === c.type) && function(t, e, i, n) {
                        let {
                            layoutId: s,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: h,
                            layoutCrossfade: u
                        } = e;
                        t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(t.parent)), t.projection.setOptions({
                            layoutId: s,
                            layout: r,
                            alwaysMeasureLayout: !!o || a && ep(a),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: n,
                            crossfade: u,
                            layoutScroll: l,
                            layoutRoot: h
                        })
                    }(u.current, i, r, d);
                    let m = (0, n.useRef)(!1);
                    (0, n.useInsertionEffect)(() => {
                        c && m.current && c.update(i, l)
                    });
                    let p = i[ef],
                        f = (0, n.useRef)(!!p && !window.MotionHandoffIsComplete ? .(p) && window.MotionHasOptimisedAnimation ? .(p));
                    return (0, ey.useIsomorphicLayoutEffect)(() => {
                        c && (m.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), f.current && c.animationState && c.animationState.animateChanges())
                    }), (0, n.useEffect)(() => {
                        c && (!f.current && c.animationState && c.animationState.animateChanges(), f.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ? .(p)
                        }), f.current = !1), c.enteringChildren = void 0)
                    }), c
                }(t, d, h, s, e.ProjectionNode)
            }
            return (0, t2.jsxs)(t8.Provider, {
                value: c,
                children: [l && c.visualElement ? (0, t2.jsx)(l, {
                    visualElement: c.visualElement,
                    ...h
                }) : null, function(t, e, i, {
                    latestValues: s
                }, r, o = !1) {
                    let a = (t3(t) ? function(t, e, i, s) {
                            let r = (0, n.useMemo)(() => {
                                let i = en();
                                return tJ(i, e, t0(s), t.transformTemplate, t.style), { ...i.attrs,
                                    style: { ...i.style
                                    }
                                }
                            }, [e]);
                            if (t.style) {
                                let e = {};
                                ei(e, t.style, t), r.style = { ...e,
                                    ...r.style
                                }
                            }
                            return r
                        } : function(t, e) {
                            let i, s, r = {},
                                o = (i = t.style || {}, ei(s = {}, i, t), Object.assign(s, function({
                                    transformTemplate: t
                                }, e) {
                                    return (0, n.useMemo)(() => {
                                        let i = ee();
                                        return tW(i, e, t), Object.assign({}, i.vars, i.style)
                                    }, [e])
                                }(t, e)), s);
                            return t.drag && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = o, r
                        })(e, s, r, t),
                        l = function(t, e, i) {
                            let n = {};
                            for (let s in t)("values" !== s || "object" != typeof t.values) && (eo(s) || !0 === i && er(s) || !e && !er(s) || t.draggable && s.startsWith("onDrag")) && (n[s] = t[s]);
                            return n
                        }(e, "string" == typeof t, o),
                        h = t !== n.Fragment ? { ...l,
                            ...a,
                            ref: i
                        } : {},
                        {
                            children: u
                        } = e,
                        c = (0, n.useMemo)(() => (0, tc.isMotionValue)(u) ? u.get() : u, [u]);
                    return (0, n.createElement)(t, { ...h,
                        children: c
                    })
                }(t, i, (a = c.visualElement, (0, n.useCallback)(t => {
                    t && d.onMount && d.onMount(t), a && (t ? a.mount(t) : a.unmount()), o && ("function" == typeof o ? o(t) : ep(o) && (o.current = t))
                }, [a])), d, u, e)]
            })
        }
        o.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        let a = (0, n.forwardRef)(o);
        return a[em] = t, a
    }

    function ex(t, e, i) {
        let n = t.getProps();
        return tj(n, e, void 0 !== i ? i : n.custom, t)
    }

    function eT(t, e) {
        return t ? .[e] ? ? t ? .default ? ? t
    }
    let eP = t => Array.isArray(t);

    function ew(t, e) {
        let {
            transitionEnd: i = {},
            transition: n = {},
            ...s
        } = ex(t, e) || {};
        for (let e in s = { ...s,
                ...i
            }) {
            var r;
            let i = eP(r = s[e]) ? r[r.length - 1] || 0 : r;
            t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, tm.motionValue)(i))
        }
    }
    t.s(["setTarget", () => ew], 97989);
    var eS = t.i(46791);

    function eb(t, e) {
        let i = t.getValue("willChange");
        if ((0, tc.isMotionValue)(i) && i.add) return i.add(e);
        if (!i && eS.MotionGlobalConfig.WillChange) {
            let i = new eS.MotionGlobalConfig.WillChange("auto");
            t.addValue("willChange", i), i.add(e)
        }
    }

    function eV(t) {
        t.duration = 0, t.type = "keyframes"
    }
    var eA = t.i(83352),
        eE = t.i(60830),
        eC = t.i(14229),
        eM = t.i(63074);

    function eD(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
    }
    let eR = eD(() => void 0 !== window.ScrollTimeline);
    t.s(["supportsScrollTimeline", () => eR], 30551);
    var ek = t.i(79294),
        eL = t.i(4169),
        ej = t.i(80248),
        eB = t.i(60855);
    let eF = {},
        eO = (e = eD(() => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }), () => eF.linearEasing ? ? e());
    var eI = t.i(56512);
    let eU = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eN = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: eU([0, .65, .55, 1]),
            circOut: eU([.55, 0, 1, .45]),
            backIn: eU([.31, .01, .66, -.59]),
            backOut: eU([.33, 1.53, .69, .99])
        };

    function eW(t) {
        return "function" == typeof t && "applyToOptions" in t
    }
    t.s(["isGenerator", () => eW], 97307);
    class e$ extends ek.WithPromise {
        constructor(t) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
            const {
                element: e,
                name: i,
                keyframes: n,
                pseudoElement: s,
                allowFlatten: r = !1,
                finalKeyframe: o,
                onComplete: a
            } = t;
            this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, (0, F.invariant)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const l = function({
                type: t,
                ...e
            }) {
                return eW(t) && eO() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
            }(t);
            this.animation = function(t, e, i, {
                delay: n = 0,
                duration: s = 300,
                repeat: r = 0,
                repeatType: o = "loop",
                ease: a = "easeOut",
                times: l
            } = {}, h) {
                let u = {
                    [e]: i
                };
                l && (u.offset = l);
                let c = function t(e, i) {
                    if (e) return "function" == typeof e ? eO() ? (0, eI.generateLinearEasing)(e, i) : "ease-out" : (0, eB.isBezierDefinition)(e) ? eU(e) : Array.isArray(e) ? e.map(e => t(e, i) || eN.easeOut) : eN[e]
                }(a, s);
                Array.isArray(c) && (u.easing = c), ej.statsBuffer.value && eL.activeAnimations.waapi++;
                let d = {
                    delay: n,
                    duration: s,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: r + 1,
                    direction: "reverse" === o ? "alternate" : "normal"
                };
                h && (d.pseudoElement = h);
                let m = t.animate(u, d);
                return ej.statsBuffer.value && m.finished.finally(() => {
                    eL.activeAnimations.waapi--
                }), m
            }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !s) {
                    let t = (0, eC.getFinalKeyframe)(n, this.options, o, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(t) : i.startsWith("--") ? e.style.setProperty(i, t) : e.style[i] = t, this.animation.cancel()
                }
                a ? .(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ? .()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (t) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: t
            } = this;
            "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            this.isPseudoElement || this.animation.commitStyles ? .()
        }
        get duration() {
            let t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
            return (0, eM.millisecondsToSeconds)(Number(t))
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + (0, eM.millisecondsToSeconds)(t)
        }
        get time() {
            return (0, eM.millisecondsToSeconds)(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
            this.finishedTime = null, this.animation.currentTime = (0, eM.secondsToMilliseconds)(t)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return Number(this.animation.startTime)
        }
        set startTime(t) {
            this.animation.startTime = t
        }
        attachTimeline({
            timeline: t,
            observe: e
        }) {
            return (this.allowFlatten && this.animation.effect ? .updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, t && eR()) ? (this.animation.timeline = t, eE.noop) : e(this)
        }
    }
    var eY = t.i(44573),
        eH = t.i(78047),
        eX = t.i(41980),
        ez = t.i(91559);
    let eK = {
        anticipate: eH.anticipate,
        backInOut: eX.backInOut,
        circInOut: ez.circInOut
    };
    class eG extends e$ {
        constructor(t) {
            ! function(t) {
                "string" == typeof t.ease && t.ease in eK && (t.ease = eK[t.ease])
            }(t), (0, eY.replaceTransitionType)(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
            let {
                motionValue: e,
                onUpdate: i,
                onComplete: n,
                element: s,
                ...r
            } = this.options;
            if (!e) return;
            if (void 0 !== t) return void e.set(t);
            let o = new eA.JSAnimation({ ...r,
                    autoplay: !1
                }),
                a = (0, eM.secondsToMilliseconds)(this.finishedTime ? ? this.time);
            e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10), o.stop()
        }
    }
    let eZ = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (_.complex.test(t) || "0" === t) && !t.startsWith("url("));
    var e_ = ek;
    let eq = new Set(["opacity", "clipPath", "filter", "transform"]),
        eJ = eD(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class eQ extends e_.WithPromise {
        constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: i = "keyframes",
            repeat: n = 0,
            repeatDelay: s = 0,
            repeatType: r = "loop",
            keyframes: o,
            name: a,
            motionValue: l,
            element: h,
            ...u
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = td.time.now();
            const c = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: s,
                    repeatType: r,
                    name: a,
                    motionValue: l,
                    element: h,
                    ...u
                },
                d = h ? .KeyframeResolver || Z;
            this.keyframeResolver = new d(o, (t, e, i) => this.onKeyframesResolved(t, e, c, !i), a, l, h), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(t, e, i, n) {
            this.keyframeResolver = void 0;
            let {
                name: s,
                type: r,
                velocity: o,
                delay: a,
                isHandoff: l,
                onUpdate: h
            } = i;
            this.resolvedAt = td.time.now(), ! function(t, e, i, n) {
                let s = t[0];
                if (null === s) return !1;
                if ("display" === e || "visibility" === e) return !0;
                let r = t[t.length - 1],
                    o = eZ(s, e),
                    a = eZ(r, e);
                return (0, F.warning)(o === a, `You are trying to animate ${e} from "${s}" to "${r}". "${o?r:s}" is not an animatable value.`, "value-not-animatable"), !!o && !!a && (function(t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                        if (t[i] !== e) return !0
                }(t) || ("spring" === i || eW(i)) && n)
            }(t, s, r, o) && ((eS.MotionGlobalConfig.instantAnimations || !a) && h ? .((0, eC.getFinalKeyframe)(t, i, e)), t[0] = t[t.length - 1], eV(i), i.repeat = 0);
            let u = {
                    startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: e,
                    ...i,
                    keyframes: t
                },
                c = !l && function(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: n,
                        repeatType: s,
                        damping: r,
                        type: o
                    } = t;
                    if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: a,
                        transformTemplate: l
                    } = e.owner.getProps();
                    return eJ() && i && eq.has(i) && ("transform" !== i || !l) && !a && !n && "mirror" !== s && 0 !== r && "inertia" !== o
                }(u) ? new eG({ ...u,
                    element: u.motionValue.owner.current
                }) : new eA.JSAnimation(u);
            c.finished.then(() => this.notifyFinished()).catch(eE.noop), this.pendingTimeline && (this.stopTimeline = c.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = c
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), z = !0, G(), K(), z = !1), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    }
    let e0 = t => null !== t,
        e1 = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        e9 = {
            type: "keyframes",
            duration: .8
        },
        e5 = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        },
        e3 = (t, e, i, n = {}, s, o) => a => {
            let l = eT(n, t) || {},
                h = l.delay || n.delay || 0,
                {
                    elapsed: u = 0
                } = n;
            u -= (0, eM.secondsToMilliseconds)(h);
            let c = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...l,
                delay: -u,
                onUpdate: t => {
                    e.set(t), l.onUpdate && l.onUpdate(t)
                },
                onComplete: () => {
                    a(), l.onComplete && l.onComplete()
                },
                name: t,
                motionValue: e,
                element: o ? void 0 : s
            };
            ! function({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: n,
                staggerDirection: s,
                repeat: r,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: h,
                ...u
            }) {
                return !!Object.keys(u).length
            }(l) && Object.assign(c, ((t, {
                keyframes: e
            }) => e.length > 2 ? e9 : r.has(t) ? t.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : e1 : e5)(t, c)), c.duration && (c.duration = (0, eM.secondsToMilliseconds)(c.duration)), c.repeatDelay && (c.repeatDelay = (0, eM.secondsToMilliseconds)(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (eV(c), 0 === c.delay && (d = !0)), (eS.MotionGlobalConfig.instantAnimations || eS.MotionGlobalConfig.skipAnimations) && (d = !0, eV(c), c.delay = 0), c.allowFlatten = !l.type && !l.ease, d && !o && void 0 !== e.get()) {
                let t = function(t, {
                    repeat: e,
                    repeatType: i = "loop"
                }, n) {
                    let s = t.filter(e0),
                        r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                    return s[r]
                }(c.keyframes, l);
                if (void 0 !== t) return void $.frame.update(() => {
                    c.onUpdate(t), c.onComplete()
                })
            }
            return l.isSync ? new eA.JSAnimation(c) : new eQ(c)
        };

    function e2(t, e, {
        delay: i = 0,
        transitionOverride: n,
        type: s
    } = {}) {
        let {
            transition: r = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
        } = e;
        n && (r = n);
        let l = [],
            h = s && t.animationState && t.animationState.getState()[s];
        for (let e in a) {
            let n = t.getValue(e, t.latestValues[e] ? ? null),
                s = a[e];
            if (void 0 === s || h && function({
                    protectedKeys: t,
                    needsAnimating: e
                }, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1, n
                }(h, e)) continue;
            let o = {
                    delay: i,
                    ...eT(r || {}, e)
                },
                u = n.get();
            if (void 0 !== u && !n.isAnimating && !Array.isArray(s) && s === u && !o.velocity) continue;
            let c = !1;
            if (window.MotionHandoffAnimation) {
                let i = t.props[ef];
                if (i) {
                    let t = window.MotionHandoffAnimation(i, e, $.frame);
                    null !== t && (o.startTime = t, c = !0)
                }
            }
            eb(t, e), n.start(e3(e, n, s, t.shouldReduceMotion && D.has(e) ? {
                type: !1
            } : o, t, c));
            let d = n.animation;
            d && l.push(d)
        }
        return o && Promise.all(l).then(() => {
            $.frame.update(() => {
                o && ew(t, o)
            })
        }), l
    }

    function e6(t, e, i, n = 0, s = 1) {
        let r = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
            o = t.size,
            a = (o - 1) * n;
        return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n
    }

    function e4(t, e, i = {}) {
        let n = ex(t, e, "exit" === i.type ? t.presenceContext ? .custom : void 0),
            {
                transition: s = t.getDefaultTransition() || {}
            } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let r = n ? () => Promise.all(e2(t, n, i)) : () => Promise.resolve(),
            o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a
                } = s;
                return function(t, e, i = 0, n = 0, s = 0, r = 1, o) {
                    let a = [];
                    for (let l of t.variantChildren) l.notify("AnimationStart", e), a.push(e4(l, e, { ...o,
                        delay: i + ("function" == typeof n ? 0 : n) + e6(t.variantChildren, l, n, s, r)
                    }).then(() => l.notify("AnimationComplete", e)));
                    return Promise.all(a)
                }(t, e, n, r, o, a, i)
            } : () => Promise.resolve(),
            {
                when: a
            } = s;
        if (!a) return Promise.all([r(), o(i.delay)]); {
            let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
            return t().then(() => e())
        }
    }

    function e7(t, e, i = {}) {
        let n;
        if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => e4(t, e, i)));
        else if ("string" == typeof e) n = e4(t, e, i);
        else {
            let s = "function" == typeof e ? ex(t, e, i.custom) : e;
            n = Promise.all(e2(t, s, i))
        }
        return n.then(() => {
            t.notify("AnimationComplete", e)
        })
    }

    function e8(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }
    t.s(["animateTarget", () => e2], 6327), t.s(["animateVisualElement", () => e7], 45161);
    let it = tD.length,
        ie = [...tM].reverse(),
        ii = tM.length;

    function is(t = !1) {
        return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function ir() {
        return {
            animate: is(!0),
            whileInView: is(),
            whileHover: is(),
            whileTap: is(),
            whileDrag: is(),
            whileFocus: is(),
            exit: is()
        }
    }
    class io {
        constructor(t) {
            this.isMounted = !1, this.node = t
        }
        update() {}
    }
    let ia = 0,
        il = {
            x: !1,
            y: !1
        };

    function ih(t, e, i, n = {
        passive: !0
    }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
    }
    let iu = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

    function ic(t) {
        return {
            point: {
                x: t.pageX,
                y: t.pageY
            }
        }
    }

    function id(t, e, i, n) {
        return ih(t, e, t => iu(t) && i(t, ic(t)), n)
    }

    function im(t) {
        return t.max - t.min
    }

    function ip(t, e, i, n = .5) {
        t.origin = n, t.originPoint = (0, v.mixNumber)(e.min, e.max, t.origin), t.scale = im(i) / im(e), t.translate = (0, v.mixNumber)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }

    function ig(t, e, i, n) {
        ip(t.x, e.x, i.x, n ? n.originX : void 0), ip(t.y, e.y, i.y, n ? n.originY : void 0)
    }

    function iy(t, e, i) {
        t.min = i.min + e.min, t.max = t.min + im(e)
    }

    function iv(t, e, i) {
        t.min = e.min - i.min, t.max = t.min + im(e)
    }

    function ix(t, e, i) {
        iv(t.x, e.x, i.x), iv(t.y, e.y, i.y)
    }

    function iT(t) {
        return [t("x"), t("y")]
    }
    let iP = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null;
    var iw = t.i(38638);
    let iS = (t, e) => Math.abs(t - e);
    class ib {
        constructor(t, e, {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let i = iE(this.lastMoveEventInfo, this.history),
                        n = null !== this.startEvent,
                        s = (t = i.offset, e = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(iS(t.x, e.x) ** 2 + iS(t.y, e.y) ** 2) >= this.distanceThreshold);
                    if (!n && !s) return;
                    let {
                        point: r
                    } = i, {
                        timestamp: o
                    } = $.frameData;
                    this.history.push({ ...r,
                        timestamp: o
                    });
                    let {
                        onStart: a,
                        onMove: l
                    } = this.handlers;
                    n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = iV(e, this.transformPagePoint), $.frame.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: n,
                        resumeAnimation: s
                    } = this.handlers;
                    if (this.dragSnapToOrigin && s && s(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let r = iE("pointercancel" === t.type ? this.lastMoveEventInfo : iV(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r), n && n(t, r)
                }, !iu(t)) return;
            this.dragSnapToOrigin = s, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = n || window;
            const o = iV(ic(t), this.transformPagePoint),
                {
                    point: a
                } = o,
                {
                    timestamp: l
                } = $.frameData;
            this.history = [{ ...a,
                timestamp: l
            }];
            const {
                onSessionStart: h
            } = e;
            h && h(t, iE(o, this.history)), this.removeListeners = (0, iw.pipe)(id(this.contextWindow, "pointermove", this.handlePointerMove), id(this.contextWindow, "pointerup", this.handlePointerUp), id(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), (0, $.cancelFrame)(this.updatePoint)
        }
    }

    function iV(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function iA(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function iE({
        point: t
    }, e) {
        return {
            point: t,
            delta: iA(t, iC(e)),
            offset: iA(t, e[0]),
            velocity: function(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let i = t.length - 1,
                    n = null,
                    s = iC(t);
                for (; i >= 0 && (n = t[i], !(s.timestamp - n.timestamp > (0, eM.secondsToMilliseconds)(.1)));) i--;
                if (!n) return {
                    x: 0,
                    y: 0
                };
                let r = (0, eM.millisecondsToSeconds)(s.timestamp - n.timestamp);
                if (0 === r) return {
                    x: 0,
                    y: 0
                };
                let o = {
                    x: (s.x - n.x) / r,
                    y: (s.y - n.y) / r
                };
                return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
            }(e, .1)
        }
    }

    function iC(t) {
        return t[t.length - 1]
    }
    var iM = t.i(83920),
        iD = t.i(76959);

    function iR(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }

    function ik(t, e) {
        let i = e.min - t.min,
            n = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
            min: i,
            max: n
        }
    }

    function iL(t, e, i) {
        return {
            min: ij(t, e),
            max: ij(t, i)
        }
    }

    function ij(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let iB = new WeakMap;
    class iF {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tw(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: i
        } = {}) {
            let {
                presenceContext: n
            } = this.visualElement;
            if (n && !1 === n.isPresent) return;
            let s = t => {
                    let {
                        dragSnapToOrigin: i
                    } = this.getProps();
                    i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(ic(t).point)
                },
                r = (t, e) => {
                    let {
                        drag: i,
                        dragPropagation: n,
                        onDragStart: s
                    } = this.getProps();
                    if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                            if ("x" === t || "y" === t)
                                if (il[t]) return null;
                                else return il[t] = !0, () => {
                                    il[t] = !1
                                };
                            return il.x || il.y ? null : (il.x = il.y = !0, () => {
                                il.x = il.y = !1
                            })
                        }(i), !this.openDragLock)) return;
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iT(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (k.percent.test(e)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let n = i.layout.layoutBox[t];
                                n && (e = im(n) * (parseFloat(e) / 100))
                            }
                        }
                        this.originPoint[t] = e
                    }), s && $.frame.postRender(() => s(t, e)), eb(this.visualElement, "transform");
                    let {
                        animationState: r
                    } = this.visualElement;
                    r && r.setActive("whileDrag", !0)
                },
                o = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: n,
                        onDirectionLock: s,
                        onDrag: r
                    } = this.getProps();
                    if (!i && !this.openDragLock) return;
                    let {
                        offset: o
                    } = e;
                    if (n && null === this.currentDirection) {
                        this.currentDirection = function(t, e = 10) {
                            let i = null;
                            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                        }(o), null !== this.currentDirection && s && s(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), r && r(t, e)
                },
                a = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => iT(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation ? .play()),
                {
                    dragSnapToOrigin: h
                } = this.getProps();
            this.panSession = new ib(t, {
                onSessionStart: s,
                onStart: r,
                onMove: o,
                onSessionEnd: a,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: h,
                distanceThreshold: i,
                contextWindow: iP(this.visualElement)
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent,
                n = e || this.latestPanInfo,
                s = this.isDragging;
            if (this.cancel(), !s || !n || !i) return;
            let {
                velocity: r
            } = n;
            this.startAnimation(r);
            let {
                onDragEnd: o
            } = this.getProps();
            o && $.frame.postRender(() => o(i, n))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, i) {
            let {
                drag: n
            } = this.getProps();
            if (!i || !iO(t, n, this.currentDirection)) return;
            let s = this.getAxisMotionValue(t),
                r = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (r = function(t, {
                min: e,
                max: i
            }, n) {
                return void 0 !== e && t < e ? t = n ? (0, v.mixNumber)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, v.mixNumber)(i, t, n.max) : Math.min(t, i)), t
            }(r, this.constraints[t], this.elastic[t])), s.set(r)
        }
        resolveConstraints() {
            let {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, n = this.constraints;
            t && ep(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                top: e,
                left: i,
                bottom: n,
                right: s
            }) {
                return {
                    x: iR(t.x, i, s),
                    y: iR(t.y, e, n)
                }
            }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35), {
                    x: iL(t, "left", "right"),
                    y: iL(t, "top", "bottom")
                }
            }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && iT(t => {
                var e, n;
                let s;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t], n = this.constraints[t], s = {}, void 0 !== n.min && (s.min = n.min - e.min), void 0 !== n.max && (s.max = n.max - e.min), s))
            })
        }
        resolveRefConstraints() {
            var t;
            let {
                dragConstraints: e,
                onMeasureDragConstraints: i
            } = this.getProps();
            if (!e || !ep(e)) return !1;
            let n = e.current;
            (0, F.invariant)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: s
            } = this.visualElement;
            if (!s || !s.layout) return !1;
            let r = function(t, e, i) {
                    let n = M(t, i),
                        {
                            scroll: s
                        } = e;
                    return s && (A(n.x, s.offset.x), A(n.y, s.offset.y)), n
                }(n, s.root, this.visualElement.getTransformPagePoint()),
                o = (t = s.layout.layoutBox, {
                    x: ik(t.x, r.x),
                    y: ik(t.y, r.y)
                });
            if (i) {
                let t = i(function({
                    x: t,
                    y: e
                }) {
                    return {
                        top: e.min,
                        right: t.max,
                        bottom: e.max,
                        left: t.min
                    }
                }(o));
                this.hasMutatedConstraints = !!t, t && (o = y(t))
            }
            return o
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: n,
                dragTransition: s,
                dragSnapToOrigin: r,
                onDragTransitionEnd: o
            } = this.getProps(), a = this.constraints || {};
            return Promise.all(iT(o => {
                if (!iO(o, e, this.currentDirection)) return;
                let l = a && a[o] || {};
                r && (l = {
                    min: 0,
                    max: 0
                });
                let h = {
                    type: "inertia",
                    velocity: i ? t[o] : 0,
                    bounceStiffness: n ? 200 : 1e6,
                    bounceDamping: n ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...l
                };
                return this.startAxisValueAnimation(o, h)
            })).then(o)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return eb(this.visualElement, t), i.start(e3(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            iT(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
            iT(t => this.getAxisMotionValue(t).animation ? .pause())
        }
        getAnimationState(t) {
            return this.getAxisMotionValue(t).animation ? .state
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`,
                i = this.visualElement.getProps();
            return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
            iT(e => {
                let {
                    drag: i
                } = this.getProps();
                if (!iO(e, i, this.currentDirection)) return;
                let {
                    projection: n
                } = this.visualElement, s = this.getAxisMotionValue(e);
                if (n && n.layout) {
                    let {
                        min: i,
                        max: r
                    } = n.layout.layoutBox[e];
                    s.set(t[e] - (0, v.mixNumber)(i, r, .5))
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: i
            } = this.visualElement;
            if (!ep(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let n = {
                x: 0,
                y: 0
            };
            iT(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, s;
                    let r, o, a, l = e.get();
                    n[t] = (i = {
                        min: l,
                        max: l
                    }, s = this.constraints[t], r = .5, o = im(i), (a = im(s)) > o ? r = (0, iM.progress)(s.min, s.max - o, i.min) : o > a && (r = (0, iM.progress)(i.min, i.max - a, s.min)), (0, iD.clamp)(0, 1, r))
                }
            });
            let {
                transformTemplate: s
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = s ? s({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), iT(e => {
                if (!iO(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                    {
                        min: s,
                        max: r
                    } = this.constraints[e];
                i.set((0, v.mixNumber)(s, r, n[e]))
            })
        }
        addListeners() {
            if (!this.visualElement.current) return;
            iB.set(this.visualElement, this);
            let t = id(this.visualElement.current, "pointerdown", t => {
                    let {
                        drag: e,
                        dragListener: i = !0
                    } = this.getProps();
                    e && i && this.start(t)
                }),
                e = () => {
                    let {
                        dragConstraints: t
                    } = this.getProps();
                    ep(t) && t.current && (this.constraints = this.resolveRefConstraints())
                },
                {
                    projection: i
                } = this.visualElement,
                n = i.addEventListener("measure", e);
            i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), $.frame.read(e);
            let s = ih(window, "resize", () => this.scalePositionWithinConstraints()),
                r = i.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e
                }) => {
                    this.isDragging && e && (iT(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                    }), this.visualElement.render())
                });
            return () => {
                s(), t(), n(), r && r()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: n = !1,
                    dragConstraints: s = !1,
                    dragElastic: r = .35,
                    dragMomentum: o = !0
                } = t;
            return { ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: n,
                dragConstraints: s,
                dragElastic: r,
                dragMomentum: o
            }
        }
    }

    function iO(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    let iI = t => (e, i) => {
        t && $.frame.postRender(() => t(e, i))
    };
    var iU = n;

    function iN(t = !0) {
        let e = (0, n.useContext)(ea);
        if (null === e) return [!0, null];
        let {
            isPresent: i,
            onExitComplete: s,
            register: r
        } = e, o = (0, n.useId)();
        (0, n.useEffect)(() => {
            if (t) return r(o)
        }, [t]);
        let a = (0, n.useCallback)(() => t && s && s(o), [o, s, t]);
        return !i && s ? [!1, a] : [!0]
    }
    t.s(["usePresence", () => iN], 64978);
    let iW = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        },
        i$ = !1;
    class iY extends iU.Component {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: n
            } = this.props, {
                projection: s
            } = t;
            s && (e.group && e.group.add(s), i && i.register && n && i.register(s), i$ && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), s.setOptions({ ...s.options,
                onExitComplete: () => this.safeToRemove()
            })), iW.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: n,
                isPresent: s
            } = this.props, {
                projection: r
            } = i;
            return r && (r.isPresent = s, i$ = !0, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? r.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? r.promote() : r.relegate() || $.frame.postRender(() => {
                let t = r.getStack();
                t && t.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                projection: t
            } = this.props.visualElement;
            t && (t.root.didUpdate(), tf.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i
            } = this.props, {
                projection: n
            } = t;
            i$ = !0, n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
        }
        safeToRemove() {
            let {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    }

    function iH(t) {
        let [e, i] = iN(), n = (0, iU.useContext)(t6);
        return (0, t2.jsx)(iY, { ...t,
            layoutGroup: n,
            switchLayoutGroup: (0, iU.useContext)(eg),
            isPresent: e,
            safeToRemove: i
        })
    }

    function iX(t) {
        return "object" == typeof t && null !== t
    }

    function iz(t) {
        return iX(t) && "ownerSVGElement" in t
    }

    function iK(t) {
        return iz(t) && "svg" === t.tagName
    }

    function iG(t, e, i) {
        let n = (0, tc.isMotionValue)(t) ? t : (0, tm.motionValue)(t);
        return n.start(e3("", n, e, i)), n.animation
    }
    t.s(["isSVGElement", () => iz], 89026), t.s(["isSVGSVGElement", () => iK], 36331), t.s(["animateSingleValue", () => iG], 69122);
    var iZ = t.i(33887);
    let i_ = (t, e) => t.depth - e.depth;
    class iq {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            (0, iZ.addUniqueItem)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, iZ.removeItem)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(i_), this.isDirty = !1, this.children.forEach(t)
        }
    }
    let iJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iQ = iJ.length,
        i0 = t => "string" == typeof t ? parseFloat(t) : t,
        i1 = t => "number" == typeof t || k.px.test(t);

    function i9(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let i5 = i2(0, .5, ez.circOut),
        i3 = i2(.5, .95, eE.noop);

    function i2(t, e, i) {
        return n => n < t ? 0 : n > e ? 1 : i((0, iM.progress)(t, e, n))
    }

    function i6(t, e) {
        t.min = e.min, t.max = e.max
    }

    function i4(t, e) {
        i6(t.x, e.x), i6(t.y, e.y)
    }

    function i7(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
    }

    function i8(t, e, i, n, s) {
        return t -= e, t = n + 1 / i * (t - n), void 0 !== s && (t = n + 1 / s * (t - n)), t
    }

    function nt(t, e, [i, n, s], r, o) {
        ! function(t, e = 0, i = 1, n = .5, s, r = t, o = t) {
            if (k.percent.test(e) && (e = parseFloat(e), e = (0, v.mixNumber)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
            let a = (0, v.mixNumber)(r.min, r.max, n);
            t === r && (a -= e), t.min = i8(t.min, e, i, a, s), t.max = i8(t.max, e, i, a, s)
        }(t, e[i], e[n], e[s], e.scale, r, o)
    }
    let ne = ["x", "scaleX", "originX"],
        ni = ["y", "scaleY", "originY"];

    function nn(t, e, i, n) {
        nt(t.x, e, ne, i ? i.x : void 0, n ? n.x : void 0), nt(t.y, e, ni, i ? i.y : void 0, n ? n.y : void 0)
    }

    function ns(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function nr(t) {
        return ns(t.x) && ns(t.y)
    }

    function no(t, e) {
        return t.min === e.min && t.max === e.max
    }

    function na(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }

    function nl(t, e) {
        return na(t.x, e.x) && na(t.y, e.y)
    }

    function nh(t) {
        return im(t.x) / im(t.y)
    }

    function nu(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    class nc {
        constructor() {
            this.members = []
        }
        add(t) {
            (0, iZ.addUniqueItem)(this.members, t), t.scheduleRender()
        }
        remove(t) {
            if ((0, iZ.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            let e, i = this.members.findIndex(e => t === e);
            if (0 === i) return !1;
            for (let t = i; t >= 0; t--) {
                let i = this.members[t];
                if (!1 !== i.isPresent) {
                    e = i;
                    break
                }
            }
            return !!e && (this.promote(e), !0)
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                let {
                    crossfade: n
                } = t.options;
                !1 === n && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                let {
                    options: e,
                    resumingFrom: i
                } = t;
                e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
            })
        }
        scheduleRender() {
            this.members.forEach(t => {
                t.instance && t.scheduleRender(!1)
            })
        }
        removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
    }
    let nd = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        },
        nm = ["", "X", "Y", "Z"],
        np = 0;

    function nf(t, e, i, n) {
        let {
            latestValues: s
        } = e;
        s[t] && (i[t] = s[t], e.setStaticValue(t, 0), n && (n[t] = 0))
    }

    function ng({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s
    }) {
        return class {
            constructor(t = {}, i = e ? .()) {
                this.id = np++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, ej.statsBuffer.value && (nd.nodes = nd.calculatedTargetDeltas = nd.calculatedProjections = 0), this.nodes.forEach(nx), this.nodes.forEach(nA), this.nodes.forEach(nE), this.nodes.forEach(nT), ej.statsBuffer.addProjectionMetrics && ej.statsBuffer.addProjectionMetrics(nd)
                }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new iq)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tg.SubscriptionManager), this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                let i = this.eventHandlers.get(t);
                i && i.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(e) {
                if (this.instance) return;
                this.isSVG = iz(e) && !iK(e), this.instance = e;
                let {
                    layoutId: i,
                    layout: n,
                    visualElement: s
                } = this.options;
                if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0), t) {
                    let i, n = 0,
                        s = () => this.root.updateBlockedByResize = !1;
                    $.frame.read(() => {
                        n = window.innerWidth
                    }), t(e, () => {
                        let t = window.innerWidth;
                        if (t !== n) {
                            let e, r;
                            n = t, this.root.updateBlockedByResize = !0, i && i(), e = td.time.now(), r = ({
                                timestamp: t
                            }) => {
                                let i = t - e;
                                i >= 250 && ((0, $.cancelFrame)(r), s(i - 250))
                            }, $.frame.setup(r, !0), i = () => (0, $.cancelFrame)(r), iW.hasAnimatedSinceResize && (iW.hasAnimatedSinceResize = !1, this.nodes.forEach(nV))
                        }
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || n) && this.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let r = this.options.transition || s.getDefaultTransition() || nL,
                        {
                            onLayoutAnimationStart: o,
                            onLayoutAnimationComplete: a
                        } = s.getProps(),
                        l = !this.targetLayout || !nl(this.targetLayout, n),
                        h = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || h || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let e = { ...eT(r, "layout"),
                            onPlay: o,
                            onComplete: a
                        };
                        (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, h)
                    } else e || nV(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = n
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, $.cancelFrame)(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(nC), this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: t
                } = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate(t = !0) {
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                        let {
                            visualElement: i
                        } = e.options;
                        if (!i) return;
                        let n = i.props[ef];
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {
                                layout: t,
                                layoutId: i
                            } = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", $.frame, !(t || i))
                        }
                        let {
                            parent: s
                        } = e;
                        s && !s.hasCheckedOptimisedAppear && t(s)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                let {
                    layoutId: e,
                    layout: i
                } = this.options;
                if (void 0 === e && !i) return;
                let n = this.getTransformTemplate();
                this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nw);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(nS);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(nb), this.nodes.forEach(ny), this.nodes.forEach(nv)) : this.nodes.forEach(nS), this.clearAllSnapshots();
                let t = td.time.now();
                $.frameData.delta = (0, iD.clamp)(0, 1e3 / 60, t - $.frameData.timestamp), $.frameData.timestamp = t, $.frameData.isProcessing = !0, $.frameSteps.update.process($.frameData), $.frameSteps.preRender.process($.frameData), $.frameSteps.render.process($.frameData), $.frameData.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, tf.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(nP), this.sharedNodes.forEach(nM)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, $.frame.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                $.frame.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || im(this.snapshot.measuredBox.x) || im(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = tw(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: e
                } = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t = "measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                    let e = n(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!s) return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    e = this.projectionDelta && !nr(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    n = i ? i(this.latestValues, "") : void 0,
                    r = n !== this.prevTransformTemplateValue;
                t && this.instance && (e || P(this.latestValues) || r) && (s(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(t = !0) {
                var e;
                let i = this.measurePageBox(),
                    n = this.removeElementScroll(i);
                return t && (n = this.removeTransform(n)), nF((e = n).x), nF(e.y), {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: n,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return tw();
                let e = t.measureViewportBox();
                if (!(this.scroll ? .wasRoot || this.path.some(nI))) {
                    let {
                        scroll: t
                    } = this.root;
                    t && (A(e.x, t.offset.x), A(e.y, t.offset.y))
                }
                return e
            }
            removeElementScroll(t) {
                let e = tw();
                if (i4(e, t), this.scroll ? .wasRoot) return e;
                for (let i = 0; i < this.path.length; i++) {
                    let n = this.path[i],
                        {
                            scroll: s,
                            options: r
                        } = n;
                    n !== this.root && s && r.layoutScroll && (s.wasRoot && i4(e, t), A(e.x, s.offset.x), A(e.y, s.offset.y))
                }
                return e
            }
            applyTransform(t, e = !1) {
                let i = tw();
                i4(i, t);
                for (let t = 0; t < this.path.length; t++) {
                    let n = this.path[t];
                    !e && n.options.layoutScroll && n.scroll && n !== n.root && C(i, {
                        x: -n.scroll.offset.x,
                        y: -n.scroll.offset.y
                    }), P(n.latestValues) && C(i, n.latestValues)
                }
                return P(this.latestValues) && C(i, this.latestValues), i
            }
            removeTransform(t) {
                let e = tw();
                i4(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    if (!i.instance || !P(i.latestValues)) continue;
                    T(i.latestValues) && i.updateSnapshot();
                    let n = tw();
                    i4(n, i.measurePageBox()), nn(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                }
                return P(this.latestValues) && nn(e, this.latestValues), e
            }
            setTargetDelta(t) {
                this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = { ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t = !1) {
                let e = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== e;
                if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: n,
                    layoutId: s
                } = this.options;
                if (!this.layout || !(n || s)) return;
                this.resolvedRelativeTargetAt = $.frameData.timestamp;
                let r = this.getClosestProjectingParent();
                if (r && this.linkedParentVersion !== r.layoutVersion && !r.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (r && r.layout ? this.createRelativeTarget(r, this.layout.layoutBox, r.layout.layoutBox) : this.removeRelativeTarget()), this.relativeTarget || this.targetDelta) {
                    if (this.target || (this.target = tw(), this.targetWithTransforms = tw()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                        var o, a, l;
                        this.forceRelativeParentToResolveTarget(), o = this.target, a = this.relativeTarget, l = this.relativeParent.target, iy(o.x, a.x, l.x), iy(o.y, a.y, l.y)
                    } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : i4(this.target, this.layout.layoutBox), V(this.target, this.targetDelta)) : i4(this.target, this.layout.layoutBox);
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, r && !!r.resumingFrom == !!this.resumingFrom && !r.options.layoutScroll && r.target && 1 !== this.animationProgress ? this.createRelativeTarget(r, this.target, r.target) : this.relativeParent = this.relativeTarget = void 0), ej.statsBuffer.value && nd.calculatedTargetDeltas++
                }
            }
            getClosestProjectingParent() {
                if (!(!this.parent || T(this.parent.latestValues) || w(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(t, e, i) {
                this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = tw(), this.relativeTargetOrigin = tw(), ix(this.relativeTargetOrigin, e, i), i4(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                let t = this.getLead(),
                    e = !!this.resumingFrom || this !== t,
                    i = !0;
                if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === $.frameData.timestamp && (i = !1), i) return;
                let {
                    layout: n,
                    layoutId: s
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || s)) return;
                i4(this.layoutCorrected, this.layout.layoutBox);
                let r = this.treeScale.x,
                    o = this.treeScale.y;
                ! function(t, e, i, n = !1) {
                    let s, r, o = i.length;
                    if (o) {
                        e.x = e.y = 1;
                        for (let a = 0; a < o; a++) {
                            r = (s = i[a]).projectionDelta;
                            let {
                                visualElement: o
                            } = s.options;
                            (!o || !o.props.style || "contents" !== o.props.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && C(t, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), r && (e.x *= r.x.scale, e.y *= r.y.scale, V(t, r)), n && P(s.latestValues) && C(t, s.latestValues))
                        }
                        e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                    }
                }(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = tw());
                let {
                    target: a
                } = t;
                if (!a) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? (i7(this.prevProjectionDelta.x, this.projectionDelta.x), i7(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), ig(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === r && this.treeScale.y === o && nu(this.projectionDelta.x, this.prevProjectionDelta.x) && nu(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), ej.statsBuffer.value && nd.calculatedProjections++
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t = !0) {
                if (this.options.visualElement ? .scheduleRender(), t) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = tT(), this.projectionDelta = tT(), this.projectionDeltaWithTransform = tT()
            }
            setAnimationOrigin(t, e = !1) {
                let i, n = this.snapshot,
                    s = n ? n.latestValues : {},
                    r = { ...this.latestValues
                    },
                    o = tT();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                let a = tw(),
                    l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    h = this.getStack(),
                    u = !h || h.members.length <= 1,
                    c = !!(l && !u && !0 === this.options.crossfade && !this.path.some(nk));
                this.animationProgress = 0, this.mixTargetDelta = e => {
                    let n = e / 1e3;
                    if (nD(o.x, t.x, n), nD(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var h, d, m, p, f, g;
                        ix(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), m = this.relativeTarget, p = this.relativeTargetOrigin, f = a, g = n, nR(m.x, p.x, f.x, g), nR(m.y, p.y, f.y, g), i && (h = this.relativeTarget, d = i, no(h.x, d.x) && no(h.y, d.y)) && (this.isProjectionDirty = !1), i || (i = tw()), i4(i, this.relativeTarget)
                    }
                    l && (this.animationValues = r, function(t, e, i, n, s, r) {
                        s ? (t.opacity = (0, v.mixNumber)(0, i.opacity ? ? 1, i5(n)), t.opacityExit = (0, v.mixNumber)(e.opacity ? ? 1, 0, i3(n))) : r && (t.opacity = (0, v.mixNumber)(e.opacity ? ? 1, i.opacity ? ? 1, n));
                        for (let s = 0; s < iQ; s++) {
                            let r = `border${iJ[s]}Radius`,
                                o = i9(e, r),
                                a = i9(i, r);
                            (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || i1(o) === i1(a) ? (t[r] = Math.max((0, v.mixNumber)(i0(o), i0(a), n), 0), (k.percent.test(a) || k.percent.test(o)) && (t[r] += "%")) : t[r] = a)
                        }(e.rotate || i.rotate) && (t.rotate = (0, v.mixNumber)(e.rotate || 0, i.rotate || 0, n))
                    }(r, s, this.latestValues, n, c, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && ((0, $.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $.frame.update(() => {
                    iW.hasAnimatedSinceResize = !0, eL.activeAnimations.layout++, this.motionValue || (this.motionValue = (0, tm.motionValue)(0)), this.currentAnimation = iG(this.motionValue, [0, 1e3], { ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                        },
                        onStop: () => {
                            eL.activeAnimations.layout--
                        },
                        onComplete: () => {
                            eL.activeAnimations.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead(),
                    {
                        targetWithTransforms: e,
                        target: i,
                        layout: n,
                        latestValues: s
                    } = t;
                if (e && i && n) {
                    if (this !== t && this.layout && n && nO(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                        i = this.target || tw();
                        let e = im(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                        let n = im(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min, i.y.max = i.y.min + n
                    }
                    i4(e, i), C(e, s), ig(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new nc), this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                let {
                    layoutId: t
                } = this.options;
                return t && this.getStack() ? .lead || this
            }
            getPrevLead() {
                let {
                    layoutId: t
                } = this.options;
                return t ? this.getStack() ? .prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: t
                } = this.options;
                if (t) return this.root.sharedNodes.get(t)
            }
            promote({
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i
            } = {}) {
                let n = this.getStack();
                n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return;
                let e = !1,
                    {
                        latestValues: i
                    } = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                let n = {};
                i.z && nf("z", t, n, this.animationValues);
                for (let e = 0; e < nm.length; e++) nf(`rotate${nm[e]}`, t, n, this.animationValues), nf(`skew${nm[e]}`, t, n, this.animationValues);
                for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
                t.scheduleRender()
            }
            applyProjectionStyles(t, e) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    t.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = eh(e ? .pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let n = this.getLead();
                if (!this.projectionDelta || !this.layout || !n.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = eh(e ? .pointerEvents) || ""), this.hasProjected && !P(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let s = n.animationValues || n.latestValues;
                this.applyTransformsToTarget();
                let r = function(t, e, i) {
                    let n = "",
                        s = t.x.translate / e.x,
                        r = t.y.translate / e.y,
                        o = i ? .z || 0;
                    if ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                        let {
                            transformPerspective: t,
                            rotate: e,
                            rotateX: s,
                            rotateY: r,
                            skewX: o,
                            skewY: a
                        } = i;
                        t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), s && (n += `rotateX(${s}deg) `), r && (n += `rotateY(${r}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
                    }
                    let a = t.x.scale * e.x,
                        l = t.y.scale * e.y;
                    return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, s);
                i && (r = i(s, r)), t.transform = r;
                let {
                    x: o,
                    y: a
                } = this.projectionDelta;
                for (let e in t.transformOrigin = `${100*o.origin}% ${100*a.origin}% 0`, n.animationValues ? t.opacity = n === this ? s.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : t.opacity = n === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, tX) {
                    if (void 0 === s[e]) continue;
                    let {
                        correct: i,
                        applyTo: o,
                        isCSSVariable: a
                    } = tX[e], l = "none" === r ? s[e] : i(s[e], n);
                    if (o) {
                        let e = o.length;
                        for (let i = 0; i < e; i++) t[o[i]] = l
                    } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = n === this ? eh(e ? .pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => t.currentAnimation ? .stop()), this.root.nodes.forEach(nw), this.root.sharedNodes.clear()
            }
        }
    }

    function ny(t) {
        t.updateLayout()
    }

    function nv(t) {
        let e = t.resumeFrom ? .snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
            let {
                layoutBox: i,
                measuredBox: n
            } = t.layout, {
                animationType: s
            } = t.options, r = e.source !== t.layout.source;
            "size" === s ? iT(t => {
                let n = r ? e.measuredBox[t] : e.layoutBox[t],
                    s = im(n);
                n.min = i[t].min, n.max = n.min + s
            }) : nO(s, e.layoutBox, i) && iT(n => {
                let s = r ? e.measuredBox[n] : e.layoutBox[n],
                    o = im(i[n]);
                s.max = s.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
            });
            let o = tT();
            ig(o, i, e.layoutBox);
            let a = tT();
            r ? ig(a, t.applyTransform(n, !0), e.measuredBox) : ig(a, i, e.layoutBox);
            let l = !nr(o),
                h = !1;
            if (!t.resumeFrom) {
                let n = t.getClosestProjectingParent();
                if (n && !n.resumeFrom) {
                    let {
                        snapshot: s,
                        layout: r
                    } = n;
                    if (s && r) {
                        let o = tw();
                        ix(o, e.layoutBox, s.layoutBox);
                        let a = tw();
                        ix(a, i, r.layoutBox), nl(o, a) || (h = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: i,
                snapshot: e,
                delta: a,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: h
            })
        } else if (t.isLead()) {
            let {
                onExitComplete: e
            } = t.options;
            e && e()
        }
        t.options.transition = void 0
    }

    function nx(t) {
        ej.statsBuffer.value && nd.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }

    function nT(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }

    function nP(t) {
        t.clearSnapshot()
    }

    function nw(t) {
        t.clearMeasurements()
    }

    function nS(t) {
        t.isLayoutDirty = !1
    }

    function nb(t) {
        let {
            visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function nV(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
    }

    function nA(t) {
        t.resolveTargetDelta()
    }

    function nE(t) {
        t.calcProjection()
    }

    function nC(t) {
        t.resetSkewAndRotation()
    }

    function nM(t) {
        t.removeLeadSnapshot()
    }

    function nD(t, e, i) {
        t.translate = (0, v.mixNumber)(e.translate, 0, i), t.scale = (0, v.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function nR(t, e, i, n) {
        t.min = (0, v.mixNumber)(e.min, i.min, n), t.max = (0, v.mixNumber)(e.max, i.max, n)
    }

    function nk(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let nL = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        nj = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        nB = nj("applewebkit/") && !nj("chrome/") ? Math.round : eE.noop;

    function nF(t) {
        t.min = nB(t.min), t.max = nB(t.max)
    }

    function nO(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(nh(e) - nh(i)))
    }

    function nI(t) {
        return t !== t.root && t.scroll ? .wasRoot
    }
    let nU = ng({
            attachResizeListener: (t, e) => ih(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        }),
        nN = {
            current: void 0
        },
        nW = ng({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!nN.current) {
                    let t = new nU({});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), nN.current = t
                }
                return nN.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
    var n$ = t.i(49652);

    function nY(t, e) {
        let i = (0, n$.resolveElements)(t),
            n = new AbortController;
        return [i, {
            passive: !0,
            ...e,
            signal: n.signal
        }, () => n.abort()]
    }

    function nH(t) {
        return !("touch" === t.pointerType || il.x || il.y)
    }

    function nX(t, e, i) {
        let {
            props: n
        } = t;
        t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && $.frame.postRender(() => s(e, ic(e)))
    }

    function nz(t) {
        return iX(t) && "offsetHeight" in t
    }
    t.s(["isHTMLElement", () => nz], 72846);
    let nK = (t, e) => !!e && (t === e || nK(t, e.parentElement)),
        nG = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        nZ = new WeakSet;

    function n_(t) {
        return e => {
            "Enter" === e.key && t(e)
        }
    }

    function nq(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function nJ(t) {
        return iu(t) && !(il.x || il.y)
    }

    function nQ(t, e, i) {
        let {
            props: n
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && $.frame.postRender(() => s(e, ic(e)))
    }
    let n0 = new WeakMap,
        n1 = new WeakMap,
        n9 = t => {
            let e = n0.get(t.target);
            e && e(t)
        },
        n5 = t => {
            t.forEach(n9)
        },
        n3 = {
            some: 0,
            all: 1
        },
        n2 = function(t, e) {
            if ("undefined" == typeof Proxy) return ev;
            let i = new Map,
                n = (i, n) => ev(i, n, t, e);
            return new Proxy((t, e) => n(t, e), {
                get: (s, r) => "create" === r ? n : (i.has(r) || i.set(r, ev(r, void 0, t, e)), i.get(r))
            })
        }({
            animation: {
                Feature: class extends io {
                    constructor(t) {
                        super(t), t.animationState || (t.animationState = function(t) {
                            let e = e => Promise.all(e.map(({
                                    animation: e,
                                    options: i
                                }) => e7(t, e, i))),
                                i = ir(),
                                n = !0,
                                s = e => (i, n) => {
                                    let s = ex(t, n, "exit" === e ? t.presenceContext ? .custom : void 0);
                                    if (s) {
                                        let {
                                            transition: t,
                                            transitionEnd: e,
                                            ...n
                                        } = s;
                                        i = { ...i,
                                            ...n,
                                            ...e
                                        }
                                    }
                                    return i
                                };

                            function r(r) {
                                let {
                                    props: o
                                } = t, a = function t(e) {
                                    if (!e) return;
                                    if (!e.isControllingVariants) {
                                        let i = e.parent && t(e.parent) || {};
                                        return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                    }
                                    let i = {};
                                    for (let t = 0; t < it; t++) {
                                        let n = tD[t],
                                            s = e.props[n];
                                        (tC(s) || !1 === s) && (i[n] = s)
                                    }
                                    return i
                                }(t.parent) || {}, l = [], h = new Set, u = {}, c = 1 / 0;
                                for (let e = 0; e < ii; e++) {
                                    var d, m;
                                    let p = ie[e],
                                        f = i[p],
                                        g = void 0 !== o[p] ? o[p] : a[p],
                                        y = tC(g),
                                        v = p === r ? f.isActive : null;
                                    !1 === v && (c = e);
                                    let x = g === a[p] && g !== o[p] && y;
                                    if (x && n && t.manuallyAnimateOnMount && (x = !1), f.protectedKeys = { ...u
                                        }, !f.isActive && null === v || !g && !f.prevProp || tE(g) || "boolean" == typeof g) continue;
                                    let T = (d = f.prevProp, "string" == typeof(m = g) ? m !== d : !!Array.isArray(m) && !e8(m, d)),
                                        P = T || p === r && f.isActive && !x && y || e > c && y,
                                        w = !1,
                                        S = Array.isArray(g) ? g : [g],
                                        b = S.reduce(s(p), {});
                                    !1 === v && (b = {});
                                    let {
                                        prevResolvedValues: V = {}
                                    } = f, A = { ...V,
                                        ...b
                                    }, E = e => {
                                        P = !0, h.has(e) && (w = !0, h.delete(e)), f.needsAnimating[e] = !0;
                                        let i = t.getValue(e);
                                        i && (i.liveStyle = !1)
                                    };
                                    for (let t in A) {
                                        let e = b[t],
                                            i = V[t];
                                        if (!u.hasOwnProperty(t))(eP(e) && eP(i) ? e8(e, i) : e === i) ? void 0 !== e && h.has(t) ? E(t) : f.protectedKeys[t] = !0 : null != e ? E(t) : h.add(t)
                                    }
                                    f.prevProp = g, f.prevResolvedValues = b, f.isActive && (u = { ...u,
                                        ...b
                                    }), n && t.blockInitialAnimation && (P = !1);
                                    let C = x && T,
                                        M = !C || w;
                                    P && M && l.push(...S.map(e => {
                                        let i = {
                                            type: p
                                        };
                                        if ("string" == typeof e && n && !C && t.manuallyAnimateOnMount && t.parent) {
                                            let {
                                                parent: n
                                            } = t, s = ex(n, e);
                                            if (n.enteringChildren && s) {
                                                let {
                                                    delayChildren: e
                                                } = s.transition || {};
                                                i.delay = e6(n.enteringChildren, t, e)
                                            }
                                        }
                                        return {
                                            animation: e,
                                            options: i
                                        }
                                    }))
                                }
                                if (h.size) {
                                    let e = {};
                                    if ("boolean" != typeof o.initial) {
                                        let i = ex(t, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                                        i && i.transition && (e.transition = i.transition)
                                    }
                                    h.forEach(i => {
                                        let n = t.getBaseTarget(i),
                                            s = t.getValue(i);
                                        s && (s.liveStyle = !0), e[i] = n ? ? null
                                    }), l.push({
                                        animation: e
                                    })
                                }
                                let p = !!l.length;
                                return n && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (p = !1), n = !1, p ? e(l) : Promise.resolve()
                            }
                            return {
                                animateChanges: r,
                                setActive: function(e, n) {
                                    if (i[e].isActive === n) return Promise.resolve();
                                    t.variantChildren ? .forEach(t => t.animationState ? .setActive(e, n)), i[e].isActive = n;
                                    let s = r(e);
                                    for (let t in i) i[t].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function(i) {
                                    e = i(t)
                                },
                                getState: () => i,
                                reset: () => {
                                    i = ir()
                                }
                            }
                        }(t))
                    }
                    updateAnimationControlsSubscription() {
                        let {
                            animate: t
                        } = this.node.getProps();
                        tE(t) && (this.unmountControls = t.subscribe(this.node))
                    }
                    mount() {
                        this.updateAnimationControlsSubscription()
                    }
                    update() {
                        let {
                            animate: t
                        } = this.node.getProps(), {
                            animate: e
                        } = this.node.prevProps || {};
                        t !== e && this.updateAnimationControlsSubscription()
                    }
                    unmount() {
                        this.node.animationState.reset(), this.unmountControls ? .()
                    }
                }
            },
            exit: {
                Feature: class extends io {
                    constructor() {
                        super(...arguments), this.id = ia++
                    }
                    update() {
                        if (!this.node.presenceContext) return;
                        let {
                            isPresent: t,
                            onExitComplete: e
                        } = this.node.presenceContext, {
                            isPresent: i
                        } = this.node.prevPresenceContext || {};
                        if (!this.node.animationState || t === i) return;
                        let n = this.node.animationState.setActive("exit", !t);
                        e && !t && n.then(() => {
                            e(this.id)
                        })
                    }
                    mount() {
                        let {
                            register: t,
                            onExitComplete: e
                        } = this.node.presenceContext || {};
                        e && e(this.id), t && (this.unmount = t(this.id))
                    }
                    unmount() {}
                }
            },
            inView: {
                Feature: class extends io {
                    constructor() {
                        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                    }
                    startObserver() {
                        var t;
                        let e;
                        this.unmount();
                        let {
                            viewport: i = {}
                        } = this.node.getProps(), {
                            root: n,
                            margin: s,
                            amount: r = "some",
                            once: o
                        } = i, a = {
                            root: n ? n.current : void 0,
                            rootMargin: s,
                            threshold: "number" == typeof r ? r : n3[r]
                        }, l = t => {
                            let {
                                isIntersecting: e
                            } = t;
                            if (this.isInView === e || (this.isInView = e, o && !e && this.hasEnteredView)) return;
                            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                            let {
                                onViewportEnter: i,
                                onViewportLeave: n
                            } = this.node.getProps(), s = e ? i : n;
                            s && s(t)
                        };
                        return t = this.node.current, e = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            n1.has(i) || n1.set(i, {});
                            let n = n1.get(i),
                                s = JSON.stringify(e);
                            return n[s] || (n[s] = new IntersectionObserver(n5, {
                                root: t,
                                ...e
                            })), n[s]
                        }(a), n0.set(t, l), e.observe(t), () => {
                            n0.delete(t), e.unobserve(t)
                        }
                    }
                    mount() {
                        this.startObserver()
                    }
                    update() {
                        if ("undefined" == typeof IntersectionObserver) return;
                        let {
                            props: t,
                            prevProps: e
                        } = this.node;
                        ["amount", "margin", "root"].some(function({
                            viewport: t = {}
                        }, {
                            viewport: e = {}
                        } = {}) {
                            return i => t[i] !== e[i]
                        }(t, e)) && this.startObserver()
                    }
                    unmount() {}
                }
            },
            tap: {
                Feature: class extends io {
                    mount() {
                        let {
                            current: t
                        } = this.node;
                        t && (this.unmount = function(t, e, i = {}) {
                            let [n, s, r] = nY(t, i), o = t => {
                                let n = t.currentTarget;
                                if (!nJ(t)) return;
                                nZ.add(n);
                                let r = e(n, t),
                                    o = (t, e) => {
                                        window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), nZ.has(n) && nZ.delete(n), nJ(t) && "function" == typeof r && r(t, {
                                            success: e
                                        })
                                    },
                                    a = t => {
                                        o(t, n === window || n === document || i.useGlobalTarget || nK(n, t.target))
                                    },
                                    l = t => {
                                        o(t, !1)
                                    };
                                window.addEventListener("pointerup", a, s), window.addEventListener("pointercancel", l, s)
                            };
                            return n.forEach(t => {
                                ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, s), nz(t)) && (t.addEventListener("focus", t => ((t, e) => {
                                    let i = t.currentTarget;
                                    if (!i) return;
                                    let n = n_(() => {
                                        if (nZ.has(i)) return;
                                        nq(i, "down");
                                        let t = n_(() => {
                                            nq(i, "up")
                                        });
                                        i.addEventListener("keyup", t, e), i.addEventListener("blur", () => nq(i, "cancel"), e)
                                    });
                                    i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
                                })(t, s)), nG.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                            }), r
                        }(t, (t, e) => (nQ(this.node, e, "Start"), (t, {
                            success: e
                        }) => nQ(this.node, t, e ? "End" : "Cancel")), {
                            useGlobalTarget: this.node.props.globalTapTarget
                        }))
                    }
                    unmount() {}
                }
            },
            focus: {
                Feature: class extends io {
                    constructor() {
                        super(...arguments), this.isActive = !1
                    }
                    onFocus() {
                        let t = !1;
                        try {
                            t = this.node.current.matches(":focus-visible")
                        } catch (e) {
                            t = !0
                        }
                        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                    }
                    onBlur() {
                        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                    }
                    mount() {
                        this.unmount = (0, iw.pipe)(ih(this.node.current, "focus", () => this.onFocus()), ih(this.node.current, "blur", () => this.onBlur()))
                    }
                    unmount() {}
                }
            },
            hover: {
                Feature: class extends io {
                    mount() {
                        let {
                            current: t
                        } = this.node;
                        t && (this.unmount = function(t, e, i = {}) {
                            let [n, s, r] = nY(t, i), o = t => {
                                if (!nH(t)) return;
                                let {
                                    target: i
                                } = t, n = e(i, t);
                                if ("function" != typeof n || !i) return;
                                let r = t => {
                                    nH(t) && (n(t), i.removeEventListener("pointerleave", r))
                                };
                                i.addEventListener("pointerleave", r, s)
                            };
                            return n.forEach(t => {
                                t.addEventListener("pointerenter", o, s)
                            }), r
                        }(t, (t, e) => (nX(this.node, e, "Start"), t => nX(this.node, t, "End"))))
                    }
                    unmount() {}
                }
            },
            pan: {
                Feature: class extends io {
                    constructor() {
                        super(...arguments), this.removePointerDownListener = eE.noop
                    }
                    onPointerDown(t) {
                        this.session = new ib(t, this.createPanHandlers(), {
                            transformPagePoint: this.node.getTransformPagePoint(),
                            contextWindow: iP(this.node)
                        })
                    }
                    createPanHandlers() {
                        let {
                            onPanSessionStart: t,
                            onPanStart: e,
                            onPan: i,
                            onPanEnd: n
                        } = this.node.getProps();
                        return {
                            onSessionStart: iI(t),
                            onStart: iI(e),
                            onMove: i,
                            onEnd: (t, e) => {
                                delete this.session, n && $.frame.postRender(() => n(t, e))
                            }
                        }
                    }
                    mount() {
                        this.removePointerDownListener = id(this.node.current, "pointerdown", t => this.onPointerDown(t))
                    }
                    update() {
                        this.session && this.session.updateHandlers(this.createPanHandlers())
                    }
                    unmount() {
                        this.removePointerDownListener(), this.session && this.session.end()
                    }
                }
            },
            drag: {
                Feature: class extends io {
                    constructor(t) {
                        super(t), this.removeGroupControls = eE.noop, this.removeListeners = eE.noop, this.controls = new iF(t)
                    }
                    mount() {
                        let {
                            dragControls: t
                        } = this.node.getProps();
                        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || eE.noop
                    }
                    unmount() {
                        this.removeGroupControls(), this.removeListeners()
                    }
                },
                ProjectionNode: nW,
                MeasureLayout: iH
            },
            layout: {
                ProjectionNode: nW,
                MeasureLayout: iH
            }
        }, (t, e) => t3(t) ? new t9(e) : new tG(e, {
            allowProjection: t !== n.Fragment
        }));
    t.s(["motion", () => n2], 46932)
}]);