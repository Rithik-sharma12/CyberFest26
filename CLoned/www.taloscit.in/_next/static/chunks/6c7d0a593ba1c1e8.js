(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 60644, t => {
    "use strict";
    var e = t.i(43476),
        r = t.i(57688);
    let n = {
        src: t.i(97924).default,
        width: 2700,
        height: 2700,
        blurWidth: 8,
        blurHeight: 8,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5UlEQVR42oWPvWrCUACFT7StdOlSx3bp0K1Ih9KK0NKW1hfwDxREEHFxExEcdNFJFNwluAsODuLiJBj0FXRMvGBUEL25RHPj3+Siw1nOOfDxwTRNnAtMzrEcE+tkOLKQ4QhsRU8PG01DP5V+aPy6HZXvv9tuq22TZflGVVUb51zAhmoYRGMfnZfXZNH59ePzeP8D/oArl805KaVXWFN63QuFg82n50zZ9flYyBfua2LNLlbFO8aYgLXGLPV44r3keLNXQxFIkgRFUUAIgWEYwI6D1WxuXYyJsFSn0HX9MOz7o8UFzS2QDaAnVsJmBAAAAABJRU5ErkJggg=="
    };
    var i = t.i(71645),
        s = t.i(46932),
        a = t.i(10542),
        o = t.i(95420);

    function u(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var c, f, h, p, d, g, _, m, v, y, x, b, w, T, k, O, M, A, C, E, S, P, D, R, z, F, N = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        I = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        L = 2 * Math.PI,
        Y = L / 4,
        B = 0,
        X = Math.sqrt,
        U = Math.cos,
        j = Math.sin,
        q = function(t) {
            return "string" == typeof t
        },
        V = function(t) {
            return "function" == typeof t
        },
        W = function(t) {
            return "number" == typeof t
        },
        H = function(t) {
            return void 0 === t
        },
        G = function(t) {
            return "object" == typeof t
        },
        Q = function(t) {
            return !1 !== t
        },
        K = function() {
            return "undefined" != typeof window
        },
        Z = function(t) {
            return V(t) || q(t)
        },
        $ = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        J = Array.isArray,
        tt = /random\([^)]+\)/g,
        te = /,\s*/g,
        tr = /(?:-?\.?\d|\.)+/gi,
        tn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ti = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        ts = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        ta = /[+-]=-?[.\d]+/,
        to = /[^,'"\[\]\s]+/gi,
        tu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        tl = {},
        tc = {},
        tf = function(t) {
            return (tc = tX(t, tl)) && rR
        },
        th = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        tp = function(t, e) {
            return !e && console.warn(t)
        },
        td = function(t, e) {
            return t && (tl[t] = e) && tc && (tc[t] = e) || tl
        },
        tg = function() {
            return 0
        },
        t_ = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        tm = {
            suppressEvents: !0,
            kill: !1
        },
        tv = {
            suppressEvents: !0
        },
        ty = {},
        tx = [],
        tb = {},
        tw = {},
        tT = {},
        tk = 30,
        tO = [],
        tM = "",
        tA = function(t) {
            var e, r, n = t[0];
            if (G(n) || V(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = tO.length; r-- && !tO[r].targetTest(n););
                e = tO[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new eQ(t[r], e))) || t.splice(r, 1);
            return t
        },
        tC = function(t) {
            return t._gsap || tA(ef(t))[0]._gsap
        },
        tE = function(t, e, r) {
            return (r = t[e]) && V(r) ? t[e]() : H(r) && t.getAttribute && t.getAttribute(e) || r
        },
        tS = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        tP = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        tD = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        tR = function(t, e) {
            var r = e.charAt(0),
                n = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        },
        tz = function(t, e) {
            for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r;);
            return n < r
        },
        tF = function() {
            var t, e, r = tx.length,
                n = tx.slice(0);
            for (t = 0, tb = {}, tx.length = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        tN = function(t) {
            return !!(t._initted || t._startAt || t.add)
        },
        tI = function(t, e, r, n) {
            tx.length && !M && tF(), t.render(e, r, n || !!(M && e < 0 && tN(t))), tx.length && !M && tF()
        },
        tL = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(to).length < 2 ? e : q(t) ? t.trim() : t
        },
        tY = function(t) {
            return t
        },
        tB = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        tX = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        tU = function t(e, r) {
            for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = G(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        },
        tj = function(t, e) {
            var r, n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n
        },
        tq = function(t) {
            var e, r = t.parent || C,
                n = t.keyframes ? (e = J(t.keyframes), function(t, r) {
                    for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                }) : tB;
            if (Q(t.inherit))
                for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        tV = function(t, e) {
            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
            return r < 0
        },
        tW = function(t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s, a = t[n];
            if (i)
                for (s = e[i]; a && a[i] > s;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e
        },
        tH = function(t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
                s = e._next;
            i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        },
        tG = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        tQ = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        tK = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        tZ = function(t, e, r, n) {
            return t._startAt && (M ? t._startAt.revert(tm) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        t$ = function(t) {
            return t._repeat ? tJ(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        tJ = function(t, e) {
            var r = Math.floor(t = tD(t / e));
            return t && r === t ? r - 1 : r
        },
        t0 = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        t1 = function(t) {
            return t._end = tD(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        t2 = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = tD(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))), t1(t), r._dirty || tQ(r, t)), t
        },
        t5 = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = t0(t.rawTime(), e), (!e._dur || eo(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)), tQ(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        t3 = function(t, e, r, n) {
            return e.parent && tG(e), e._start = tD((W(r) ? r : r || t !== C ? ei(t, r, e) : t._time) + e._delay), e._end = tD(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), tW(t, e, "_first", "_last", t._sort ? "_start" : 0), t9(e) || (t._recent = e), n || t5(t, e), t._ts < 0 && t2(t, t._tTime), t
        },
        t8 = function(t, e) {
            return (tl.ScrollTrigger || th("scrollTrigger", e)) && tl.ScrollTrigger.create(e, t)
        },
        t4 = function(t, e, r, n, i) {
            return (e9(t, e, i), t._initted) ? !r && t._pt && !M && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && R !== ez.frame ? (tx.push(t), t._lazy = [i, n], 1) : void 0 : 1
        },
        t6 = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
        },
        t9 = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        t7 = function(t, e, r, n) {
            var i, s, a, o = t.ratio,
                u = e < 0 || !e && (!t._start && t6(t) && !(!t._initted && t9(t)) || (t._ts < 0 || t._dp._ts < 0) && !t9(t)) ? 0 : 1,
                l = t._rDelay,
                c = 0;
            if (l && t._repeat && (s = tJ(c = eo(0, t._tDur, e), l), t._yoyo && 1 & s && (u = 1 - u), s !== tJ(t._tTime, l) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || M || n || 1e-8 === t._zTime || !e && t._zTime) {
                if (!t._initted && t4(t, e, n, r, c)) return;
                for (a = t._zTime, t._zTime = e || 1e-8 * !!r, r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
                e < 0 && tZ(t, e, r, !0), t._onUpdate && !r && ew(t, "onUpdate"), c && t._repeat && !r && t.parent && ew(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && tG(t, 1), r || M || (ew(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        },
        et = function(t, e, r) {
            var n;
            if (r > e)
                for (n = t._first; n && n._start <= r;) {
                    if ("isPause" === n.data && n._start > e) return n;
                    n = n._next
                } else
                    for (n = t._last; n && n._start >= r;) {
                        if ("isPause" === n.data && n._start < e) return n;
                        n = n._prev
                    }
        },
        ee = function(t, e, r, n) {
            var i = t._repeat,
                s = tD(e) || 0,
                a = t._tTime / t._tDur;
            return a && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : tD(s * (i + 1) + t._rDelay * i) : s, a > 0 && !n && t2(t, t._tTime = t._tDur * a), t.parent && t1(t), r || tQ(t.parent, t), t
        },
        er = function(t) {
            return t instanceof eZ ? tQ(t) : ee(t, t._dur)
        },
        en = {
            _start: 0,
            endTime: tg,
            totalDuration: tg
        },
        ei = function t(e, r, n) {
            var i, s, a, o = e.labels,
                u = e._recent || en,
                l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
            return q(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === s || ">" === s) ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in o || (o[r] = l), o[r]) : (s = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (s = s / 100 * (J(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s) : null == r ? l : +r
        },
        es = function(t, e, r) {
            var n, i, s = W(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if (s && (o.duration = e[1]), o.parent = r, t) {
                for (n = o, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = Q(i.vars.inherit) && i.parent;
                o.immediateRender = Q(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new rs(e[0], o, e[a + 1])
        },
        ea = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        eo = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        eu = function(t, e) {
            return q(t) && (e = tu.exec(t)) ? e[1] : ""
        },
        el = [].slice,
        ec = function(t, e) {
            return t && G(t) && "length" in t && (!e && !t.length || t.length - 1 in t && G(t[0])) && !t.nodeType && t !== E
        },
        ef = function(t, e, r) {
            var n;
            return A && !e && A.selector ? A.selector(t) : q(t) && !r && (S || !eF()) ? el.call((e || P).querySelectorAll(t), 0) : J(t) ? (void 0 === n && (n = []), t.forEach(function(t) {
                var e;
                return q(t) && !r || ec(t, 1) ? (e = n).push.apply(e, ef(t)) : n.push(t)
            }) || n) : ec(t) ? el.call(t, 0) : t ? [t] : []
        },
        eh = function(t) {
            return t = ef(t)[0] || tp("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return ef(e, r.querySelectorAll ? r : r === t ? tp("Invalid scope") || P.createElement("div") : t)
                }
        },
        ep = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        ed = function(t) {
            if (V(t)) return t;
            var e = G(t) ? t : {
                    each: t
                },
                r = eq(e.ease),
                n = e.from || 0,
                i = parseFloat(e.base) || 0,
                s = {},
                a = n > 0 && n < 1,
                o = isNaN(n) || a,
                u = e.axis,
                l = n,
                c = n;
            return q(n) ? l = c = ({
                    center: .5,
                    edges: .5,
                    end: 1
                })[n] || 0 : !a && o && (l = n[0], c = n[1]),
                function(t, a, f) {
                    var h, p, d, g, _, m, v, y, x, b = (f || e).length,
                        w = s[b];
                    if (!w) {
                        if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                            for (v = -1e8; v < (v = f[x++].getBoundingClientRect().left) && x < b;);
                            x < b && x--
                        }
                        for (m = 0, w = s[b] = [], h = o ? Math.min(x, b) * l - .5 : n % x, p = 1e8 === x ? 0 : o ? b * c / x - .5 : n / x | 0, v = 0, y = 1e8; m < b; m++) d = m % x - h, g = p - (m / x | 0), w[m] = _ = u ? Math.abs("y" === u ? g : d) : X(d * d + g * g), _ > v && (v = _), _ < y && (y = _);
                        "random" === n && ep(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? i - b : i, w.u = eu(e.amount || e.each) || 0, r = r && b < 0 ? eU(r) : r
                    }
                    return b = (w[t] - w.min) / w.max || 0, tD(w.b + (r ? r(b) : b) * w.v) + w.u
                }
        },
        eg = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var n = tD(Math.round(parseFloat(r) / t) * t * e);
                return (n - n % 1) / e + (W(r) ? 0 : eu(r))
            }
        },
        e_ = function(t, e) {
            var r, n, i = J(t);
            return !i && G(t) && (r = i = t.radius || 1e8, t.values ? (n = !W((t = ef(t.values))[0])) && (r *= r) : t = eg(t.increment)), ea(e, i ? V(t) ? function(e) {
                return Math.abs((n = t(e)) - e) <= r ? n : e
            } : function(e) {
                for (var i, s, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), u = 1e8, l = 0, c = t.length; c--;)(i = n ? (i = t[c].x - a) * i + (s = t[c].y - o) * s : Math.abs(t[c] - a)) < u && (u = i, l = c);
                return l = !r || u <= r ? t[l] : e, n || l === e || W(e) ? l : l + eu(e)
            } : eg(t))
        },
        em = function(t, e, r, n) {
            return ea(J(t) ? !e : !0 === r ? (r = 0, !1) : !n, function() {
                return J(t) ? t[~~(Math.random() * t.length)] : (n = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
            })
        },
        ev = function(t, e, r) {
            return ea(r, function(r) {
                return t[~~e(r)]
            })
        },
        ey = function(t) {
            return t.replace(tt, function(t) {
                var e = t.indexOf("[") + 1,
                    r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(te);
                return em(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
            })
        },
        ex = function(t, e, r, n, i) {
            var s = e - t,
                a = n - r;
            return ea(i, function(e) {
                return r + ((e - t) / s * a || 0)
            })
        },
        eb = function(t, e, r) {
            var n, i, s, a = t.labels,
                o = 1e8;
            for (n in a)(i = a[n] - e) < 0 == !!r && i && o > (i = Math.abs(i)) && (s = n, o = i);
            return s
        },
        ew = function(t, e, r) {
            var n, i, s, a = t.vars,
                o = a[e],
                u = A,
                l = t._ctx;
            if (o) return n = a[e + "Params"], i = a.callbackScope || t, r && tx.length && tF(), l && (A = l), s = n ? o.apply(i, n) : o.call(i), A = u, s
        },
        eT = function(t) {
            return tG(t), t.scrollTrigger && t.scrollTrigger.kill(!!M), 1 > t.progress() && ew(t, "onInterrupt"), t
        },
        ek = [],
        eO = function(t) {
            if (t)
                if (t = !t.name && t.default || t, K() || t.headless) {
                    var e = t.name,
                        r = V(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: tg,
                            render: rd,
                            add: e8,
                            kill: r_,
                            modifier: rg,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: rc,
                            aliases: {},
                            register: 0
                        };
                    if (eF(), t !== n) {
                        if (tw[e]) return;
                        tB(n, tB(tj(t, i), s)), tX(n.prototype, tX(i, tj(t, s))), tw[n.prop = e] = n, t.targetTest && (tO.push(n), ty[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    td(e, n), t.register && t.register(rR, n, ry)
                } else ek.push(t)
        },
        eM = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        eA = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
        },
        eC = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h, p = t ? W(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : eM.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), eM[t]) p = eM[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), t = "#" + n + n + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = h = t.match(tr), e) {
                        if (~t.indexOf("=")) return p = t.match(tn), r && p.length < 4 && (p[3] = 1), p
                    } else a = p[0] % 360 / 360, o = p[1] / 100, i = (u = p[2] / 100) <= .5 ? u * (o + 1) : u + o - u * o, n = 2 * u - i, p.length > 3 && (p[3] *= 1), p[0] = eA(a + 1 / 3, n, i), p[1] = eA(a, n, i), p[2] = eA(a - 1 / 3, n, i);
                else p = t.match(tr) || eM.transparent;
                p = p.map(Number)
            }
            return e && !h && (n = p[0] / 255, u = ((l = Math.max(n, i = p[1] / 255, s = p[2] / 255)) + (c = Math.min(n, i, s))) / 2, l === c ? a = o = 0 : (f = l - c, o = u > .5 ? f / (2 - l - c) : f / (l + c), a = (l === n ? (i - s) / f + 6 * (i < s) : l === i ? (s - n) / f + 2 : (n - i) / f + 4) * 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        eE = function(t) {
            var e = [],
                r = [],
                n = -1;
            return t.split(eP).forEach(function(t) {
                var i = t.match(ti) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            }), e.c = r, e
        },
        eS = function(t, e, r) {
            var n, i, s, a, o = "",
                u = (t + o).match(eP),
                l = e ? "hsla(" : "rgba(",
                c = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = eC(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), r && (s = eE(t), (n = r.c).join(o) !== s.c.join(o)))
                for (a = (i = t.replace(eP, "1").split(ti)).length - 1; c < a; c++) o += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!i)
                for (a = (i = t.split(eP)).length - 1; c < a; c++) o += i[c] + u[c];
            return o + i[a]
        },
        eP = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in eM) e += "|" + t + "\\b";
            return RegExp(e + ")", "gi")
        }(),
        eD = /hsl[a]?\(/,
        eR = function(t) {
            var e, r = t.join(" ");
            if (eP.lastIndex = 0, eP.test(r)) return e = eD.test(r), t[1] = eS(t[1], e), t[0] = eS(t[0], e, eE(t[1])), !0
        },
        ez = (_ = Date.now, m = 500, v = 33, x = y = _(), b = 1e3 / 240, w = 1e3 / 240, T = [], k = function t(e) {
            var r, n, i, s, a = _() - x,
                o = !0 === e;
            if ((a > m || a < 0) && (y += a - v), x += a, ((r = (i = x - y) - w) > 0 || o) && (s = ++p.frame, d = i - 1e3 * p.time, p.time = i /= 1e3, w += r + (r >= b ? 4 : b - r), n = 1), o || (c = f(t)), n)
                for (g = 0; g < T.length; g++) T[g](i, d, s, e)
        }, p = {
            time: 0,
            frame: 0,
            tick: function() {
                k(!0)
            },
            deltaRatio: function(t) {
                return d / (1e3 / (t || 60))
            },
            wake: function() {
                D && (!S && K() && (P = (E = S = window).document || {}, tl.gsap = rR, (E.gsapVersions || (E.gsapVersions = [])).push(rR.version), tf(tc || E.GreenSockGlobals || !E.gsap && E || {}), ek.forEach(eO)), h = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, c && p.sleep(), f = h || function(t) {
                    return setTimeout(t, w - 1e3 * p.time + 1 | 0)
                }, F = 1, k(2))
            },
            sleep: function() {
                (h ? cancelAnimationFrame : clearTimeout)(c), F = 0, f = tg
            },
            lagSmoothing: function(t, e) {
                v = Math.min(e || 33, m = t || 1 / 0)
            },
            fps: function(t) {
                b = 1e3 / (t || 240), w = 1e3 * p.time + b
            },
            add: function(t, e, r) {
                var n = e ? function(e, r, i, s) {
                    t(e, r, i, s), p.remove(n)
                } : t;
                return p.remove(t), T[r ? "unshift" : "push"](n), eF(), n
            },
            remove: function(t, e) {
                ~(e = T.indexOf(t)) && T.splice(e, 1) && g >= e && g--
            },
            _listeners: T
        }),
        eF = function() {
            return !F && ez.wake()
        },
        eN = {},
        eI = /^[\d.\-M][\d.\-,\s]/,
        eL = /["']/g,
        eY = function(t) {
            for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[a] = isNaN(n) ? n.replace(eL, "").trim() : +n, a = r.substr(e + 1).trim();
            return i
        },
        eB = function(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                n = t.indexOf("(", e);
            return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
        },
        eX = function(t) {
            var e = (t + "").split("("),
                r = eN[e[0]];
            return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [eY(e[1])] : eB(t).split(",").map(tL)) : eN._CE && eI.test(t) ? eN._CE("", t) : r
        },
        eU = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        ej = function t(e, r) {
            for (var n, i = e._first; i;) i instanceof eZ ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
        },
        eq = function(t, e) {
            return t && (V(t) ? t : eN[t] || eX(t)) || e
        },
        eV = function(t, e, r, n) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
            });
            var i, s = {
                easeIn: e,
                easeOut: r,
                easeInOut: n
            };
            return tS(t, function(t) {
                for (var e in eN[t] = tl[t] = s, eN[i = t.toLowerCase()] = r, s) eN[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eN[t + "." + e] = s[e]
            }), s
        },
        eW = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
            }
        },
        eH = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                s = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                a = s / L * (Math.asin(1 / i) || 0),
                o = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * j((t - a) * s) + 1
                },
                u = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : eW(o);
            return s = L / s, u.config = function(r, n) {
                return t(e, r, n)
            }, u
        },
        eG = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                i = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : eW(n);
            return i.config = function(r) {
                return t(e, r)
            }, i
        };
    tS("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        eV(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
        })
    }), eN.Linear.easeNone = eN.none = eN.Linear.easeIn, eV("Elastic", eH("in"), eH("out"), eH()), eJ = 2 * (e$ = 1 / 2.75), e0 = 2.5 * e$, eV("Bounce", function(t) {
        return 1 - e1(1 - t)
    }, e1 = function(t) {
        return t < e$ ? 7.5625 * t * t : t < eJ ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < e0 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }), eV("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), eV("Circ", function(t) {
        return -(X(1 - t * t) - 1)
    }), eV("Sine", function(t) {
        return 1 === t ? 1 : -U(t * Y) + 1
    }), eV("Back", eG("in"), eG("out"), eG()), eN.SteppedEase = eN.steps = tl.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + +!e,
                i = +!!e,
                s = .99999999;
            return function(t) {
                return ((n * eo(0, s, t) | 0) + i) * r
            }
        }
    }, I.ease = eN["quad.out"], tS("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return tM += t + "," + t + "Params,"
    });
    var eQ = function(t, e) {
            this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : tE, this.set = e ? e.getSetter : rc
        },
        eK = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ee(this, +t.duration, 1, 1), this.data = t.data, A && (this._ctx = A, A.data.push(this)), F || ez.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, ee(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (eF(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (t2(this, t), !r._dp || r.parent || t5(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && t3(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), tI(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + t$(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + t$(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? tJ(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? t0(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(eo(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), t1(this), tK(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (eF(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = tD(t);
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && t3(e, this, this._start - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (Q(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? t0(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = tv);
                var e = M;
                return M = t, tN(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), M = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, er(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, er(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(ei(this, t), Q(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, Q(e)), this._dur || (this._zTime = -1e-8), this
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    r = this._start;
                return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
            }, e.eventCallback = function(t, e, r) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this,
                    r = e._prom;
                return new Promise(function(n) {
                    var i = V(t) ? t : tY,
                        s = function() {
                            var t = e.then;
                            e.then = null, r && r(), V(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                })
            }, e.kill = function() {
                eT(this)
            }, t
        }();
    tB(eK.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var eZ = function(t) {
        function e(e, r) {
            var n;
            return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = Q(e.sortChildren), C && t3(e.parent || C, u(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && t8(u(n), e.scrollTrigger), n
        }
        l(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return es(0, arguments, this), this
        }, r.from = function(t, e, r) {
            return es(1, arguments, this), this
        }, r.fromTo = function(t, e, r, n) {
            return es(2, arguments, this), this
        }, r.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, tq(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rs(t, e, ei(this, r), 1), this
        }, r.call = function(t, e, r) {
            return t3(this, rs.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, n, i, s, a) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new rs(t, r, ei(this, i)), this
        }, r.staggerFrom = function(t, e, r, n, i, s, a) {
            return r.runBackwards = 1, tq(r).immediateRender = Q(r.immediateRender), this.staggerTo(t, e, r, n, i, s, a)
        }, r.staggerFromTo = function(t, e, r, n, i, s, a, o) {
            return n.startAt = r, tq(n).immediateRender = Q(n.immediateRender), this.staggerTo(t, e, n, i, s, a, o)
        }, r.render = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h, p, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = t <= 0 ? 0 : tD(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (this !== C && v > _ && t >= 0 && (v = _), v !== this._tTime || r || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), n = v, f = this._start, u = !(c = this._ts), y && (m || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, o = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (n = tD(v % o), v === _ ? (a = this._repeat, n = m) : ((a = ~~(h = tD(v / o))) && a === h && (n = m, a--), n > m && (n = m)), h = tJ(this._tTime, o), !g && this._tTime && h !== a && this._tTime - h * o - this._dur <= 0 && (h = a), p && 1 & a && (n = m - n, d = 1), a !== h && !this._lock) {
                        var x = p && 1 & h,
                            b = x === (p && 1 & a);
                        if (a < h && (x = !x), g = x ? 0 : v % m ? m : v, this._lock = 1, this.render(g || (d ? 0 : tD(a * o)), e, !m)._lock = 0, this._tTime = v, !e && this.parent && ew(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1, h = a), g && g !== this._time || !this._ts !== u || this.vars.onRepeat && !this.parent && !this._act || (m = this._dur, _ = this._tDur, b && (this._lock = 2, g = x ? m : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !u)) return this;
                        ej(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = et(this, tD(g), tD(n))) && (v -= n - (n = l._start)), this._tTime = v, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && v && m && !e && !h && (ew(this, "onStart"), this._tTime !== v)) return this;
                if (n >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                                l = 0, s && (v += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var w = t < 0 ? t : n; i;) {
                            if (s = i._prev, (i._act || w <= i._end) && i._ts && l !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(i._ts > 0 ? (w - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts, e, r || M && tN(i)), n !== this._time || !this._ts && !u) {
                                    l = 0, s && (v += this._zTime = w ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                if (l && !e && (this.pause(), l.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = f, t1(this), this.render(t, e, r);
                this._onUpdate && !e && ew(this, "onUpdate", !0), (v === _ && this._tTime >= this.totalDuration() || !v && g) && (f === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((t || !m) && (v === _ && this._ts > 0 || !v && this._ts < 0) && tG(this, 1), e || t < 0 && !g || !v && !g && _ || (ew(this, v === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < _ && this.timeScale() > 0) && this._prom()))
            }
            return this
        }, r.add = function(t, e) {
            var r = this;
            if (W(e) || (e = ei(this, e, t)), !(t instanceof eK)) {
                if (J(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (q(t)) return this.addLabel(t, e);
                if (!V(t)) return this;
                t = rs.delayedCall(0, t)
            }
            return this !== t ? t3(this, t, e) : this
        }, r.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
            for (var i = [], s = this._first; s;) s._start >= n && (s instanceof rs ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
            return i
        }, r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
            return q(t) ? this.removeLabel(t) : V(t) ? this.killTweensOf(t) : (t.parent === this && tH(this, t), t === this._recent && (this._recent = this._last), tQ(this))
        }, r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = tD(ez.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
            return this.labels[t] = ei(this, e), this
        }, r.removeLabel = function(t) {
            return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
            var n = rs.delayedCall(0, e || tg, r);
            return n.data = "isPause", this._hasPause = 1, t3(this, n, ei(this, t))
        }, r.removePause = function(t) {
            var e = this._first;
            for (t = ei(this, t); e;) e._start === t && "isPause" === e.data && tG(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) e2 !== n[i] && n[i].kill(t, e);
            return this
        }, r.getTweensOf = function(t, e) {
            for (var r, n = [], i = ef(t), s = this._first, a = W(e); s;) s instanceof rs ? tz(s._targets, i) && (a ? (!e2 || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r), s = s._next;
            return n
        }, r.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this,
                i = ei(n, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                u = s.onStartParams,
                l = s.immediateRender,
                c = rs.to(n, tB({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                            c._dur !== t && ee(c, t, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        o && o.apply(c, u || [])
                    }
                }, e));
            return l ? c.render(0) : c
        }, r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, tB({
                startAt: {
                    time: ei(this, t)
                }
            }, r))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(t) {
            return void 0 === t && (t = this._time), eb(this, ei(this, t))
        }, r.previousLabel = function(t) {
            return void 0 === t && (t = this._time), eb(this, ei(this, t), 1)
        }, r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var n, i = this._first,
                s = this.labels;
            for (t = tD(t); i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (n in s) s[n] >= r && (s[n] += t);
            return tQ(this)
        }, r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), tQ(this)
        }, r.totalDuration = function(t) {
            var e, r, n, i = 0,
                s = this._last,
                a = 1e8;
            if (arguments.length) return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (n = this.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1, t3(this, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !this._dp || n && n.smoothChildTiming) && (this._start += tD(r / this._ts), this._time -= r, this._tTime -= r), this.shiftChildren(-r, !1, -Infinity), a = 0), s._end > i && s._ts && (i = s._end), s = e;
                ee(this, this === C && this._time > i ? this._time : i, 1, 1), this._dirty = 0
            }
            return this._tDur
        }, e.updateRoot = function(t) {
            if (C._ts && (tI(C, t0(t, C)), R = ez.frame), ez.frame >= tk) {
                tk += N.autoSleep || 120;
                var e = C._first;
                if ((!e || !e._ts) && N.autoSleep && ez._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || ez.sleep()
                }
            }
        }, e
    }(eK);
    tB(eZ.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var e$, eJ, e0, e1, e2, e5, e3 = function(t, e, r, n, i, s, a) {
            var o, u, l, c, f, h, p, d, g = new ry(this._pt, t, e, 0, 1, rp, null, i),
                _ = 0,
                m = 0;
            for (g.b = r, g.e = n, r += "", n += "", (p = ~n.indexOf("random(")) && (n = ey(n)), s && (s(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(ts) || []; o = ts.exec(n);) c = o[0], f = n.substring(_, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (h = parseFloat(u[m - 1]) || 0, g._pt = {
                _next: g._pt,
                p: f || 1 === m ? f : ",",
                s: h,
                c: "=" === c.charAt(1) ? tR(h, c) - h : parseFloat(c) - h,
                m: l && l < 4 ? Math.round : 0
            }, _ = ts.lastIndex);
            return g.c = _ < n.length ? n.substring(_, n.length) : "", g.fp = a, (ta.test(n) || p) && (g.e = 0), this._pt = g, g
        },
        e8 = function(t, e, r, n, i, s, a, o, u, l) {
            V(n) && (n = n(i || 0, t, s));
            var c, f = t[e],
                h = "get" !== r ? r : V(f) ? u ? t[e.indexOf("set") || !V(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                p = V(f) ? u ? ru : ro : ra;
            if (q(n) && (~n.indexOf("random(") && (n = ey(n)), "=" === n.charAt(1) && ((c = tR(h, n) + (eu(h) || 0)) || 0 === c) && (n = c)), !l || h !== n || e5) return isNaN(h * n) || "" === n ? (f || e in t || th(e, n), e3.call(this, t, e, h, n, p, o || N.stringFilter, u)) : (c = new ry(this._pt, t, e, +h || 0, n - (h || 0), "boolean" == typeof f ? rh : rf, 0, p), u && (c.fp = u), a && c.modifier(a, this, t), this._pt = c)
        },
        e4 = function(t, e, r, n, i) {
            if (V(t) && (t = rr(t, i, e, r, n)), !G(t) || t.style && t.nodeType || J(t) || $(t)) return q(t) ? rr(t, i, e, r, n) : t;
            var s, a = {};
            for (s in t) a[s] = rr(t[s], i, e, r, n);
            return a
        },
        e6 = function(t, e, r, n, i, s) {
            var a, o, u, l;
            if (tw[t] && !1 !== (a = new tw[t]).init(i, a.rawVars ? e[t] : e4(e[t], n, i, s, r), r, n, s) && (r._pt = o = new ry(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== z))
                for (u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length; l--;) u[a._props[l]] = o;
            return a
        },
        e9 = function t(e, r, n) {
            var i, s, a, o, u, l, c, f, h, p, d, g, _, m = e.vars,
                v = m.ease,
                y = m.startAt,
                x = m.immediateRender,
                b = m.lazy,
                w = m.onUpdate,
                T = m.runBackwards,
                k = m.yoyoEase,
                A = m.keyframes,
                E = m.autoRevert,
                S = e._dur,
                P = e._startAt,
                D = e._targets,
                R = e.parent,
                z = R && "nested" === R.data ? R.vars.targets : D,
                F = "auto" === e._overwrite && !O,
                N = e.timeline;
            if (!N || A && v || (v = "none"), e._ease = eq(v, I.ease), e._yEase = k ? eU(eq(!0 === k ? v : k, I.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), e._from = !N && !!m.runBackwards, !N || A && !m.stagger) {
                if (g = (f = D[0] ? tC(D[0]).harness : 0) && m[f.prop], i = tj(m, ty), P && (P._zTime < 0 && P.progress(1), r < 0 && T && x && !E ? P.render(-1, !0) : P.revert(T && S ? tm : t_), P._lazy = 0), y) {
                    if (tG(e._startAt = rs.set(D, tB({
                            data: "isStart",
                            overwrite: !1,
                            parent: R,
                            immediateRender: !0,
                            lazy: !P && Q(b),
                            startAt: null,
                            delay: 0,
                            onUpdate: w && function() {
                                return ew(e, "onUpdate")
                            },
                            stagger: 0
                        }, y))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (M || !x && !E) && e._startAt.revert(tm), x && S && r <= 0 && n <= 0) {
                        r && (e._zTime = r);
                        return
                    }
                } else if (T && S && !P)
                    if (r && (x = !1), a = tB({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: x && !P && Q(b),
                            immediateRender: x,
                            stagger: 0,
                            parent: R
                        }, i), g && (a[f.prop] = g), tG(e._startAt = rs.set(D, a)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (M ? e._startAt.revert(tm) : e._startAt.render(-1, !0)), e._zTime = r, x) {
                        if (!r) return
                    } else t(e._startAt, 1e-8, 1e-8);
                for (s = 0, e._pt = e._ptCache = 0, b = S && Q(b) || b && !S; s < D.length; s++) {
                    if (c = (u = D[s])._gsap || tA(D)[s]._gsap, e._ptLookup[s] = p = {}, tb[c.id] && tx.length && tF(), d = z === D ? s : z.indexOf(u), f && !1 !== (h = new f).init(u, g || i, e, d, z) && (e._pt = o = new ry(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority), h._props.forEach(function(t) {
                            p[t] = o
                        }), h.priority && (l = 1)), !f || g)
                        for (a in i) tw[a] && (h = e6(a, i, e, d, u, z)) ? h.priority && (l = 1) : p[a] = o = e8.call(e, u, a, "get", i[a], d, z, 0, m.stringFilter);
                    e._op && e._op[s] && e.kill(u, e._op[s]), F && e._pt && (e2 = e, C.killTweensOf(u, p, e.globalTime(r)), _ = !e.parent, e2 = 0), e._pt && b && (tb[c.id] = 1)
                }
                l && rv(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = w, e._initted = (!e._op || e._pt) && !_, A && r <= 0 && N.render(1e8, !0, !0)
        },
        e7 = function(t, e, r, n, i, s, a, o) {
            var u, l, c, f, h = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!h)
                for (h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--;) {
                    if ((u = c[f][e]) && u.d && u.d._pt)
                        for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                    if (!u) return e5 = 1, t.vars[e] = "+=0", e9(t, a), e5 = 0, o ? tp(e + " not eligible for reset") : 1;
                    h.push(u)
                }
            for (f = h.length; f--;)(u = (l = h[f])._pt || l).s = (n || 0 === n) && !i ? n : u.s + (n || 0) + s * u.c, u.c = r - u.s, l.e && (l.e = tP(r) + eu(l.e)), l.b && (l.b = u.s + eu(l.b))
        },
        rt = function(t, e) {
            var r, n, i, s, a = t[0] ? tC(t[0]).harness : 0,
                o = a && a.aliases;
            if (!o) return e;
            for (n in r = tX({}, e), o)
                if (n in r)
                    for (i = (s = o[n].split(",")).length; i--;) r[s[i]] = r[n];
            return r
        },
        re = function(t, e, r, n) {
            var i, s, a = e.ease || n || "power1.inOut";
            if (J(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
            else
                for (i in e) s = r[i] || (r[i] = []), "ease" === i || s.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: a
                })
        },
        rr = function(t, e, r, n, i) {
            return V(t) ? t.call(e, r, n, i) : q(t) && ~t.indexOf("random(") ? ey(t) : t
        },
        rn = tM + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        ri = {};
    tS(rn + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return ri[t] = 1
    });
    var rs = function(t) {
        function e(e, r, n, i) {
            "number" == typeof r && (n.duration = r, r = n, n = null);
            var s, a, o, l, c, f, h, p, d = t.call(this, i ? r : tq(r)) || this,
                g = d.vars,
                _ = g.duration,
                m = g.delay,
                v = g.immediateRender,
                y = g.stagger,
                x = g.overwrite,
                b = g.keyframes,
                w = g.defaults,
                T = g.scrollTrigger,
                k = g.yoyoEase,
                M = r.parent || C,
                A = (J(e) || $(e) ? W(e[0]) : "length" in r) ? [e] : ef(e);
            if (d._targets = A.length ? tA(A) : tp("GSAP target " + e + " not found. https://gsap.com", !N.nullTargetWarn) || [], d._ptLookup = [], d._overwrite = x, b || y || Z(_) || Z(m)) {
                if (r = d.vars, (s = d.timeline = new eZ({
                        data: "nested",
                        defaults: w || {},
                        targets: M && "nested" === M.data ? M.vars.targets : A
                    })).kill(), s.parent = s._dp = u(d), s._start = 0, y || Z(_) || Z(m)) {
                    if (l = A.length, h = y && ed(y), G(y))
                        for (c in y) ~rn.indexOf(c) && (p || (p = {}), p[c] = y[c]);
                    for (a = 0; a < l; a++)(o = tj(r, ri)).stagger = 0, k && (o.yoyoEase = k), p && tX(o, p), f = A[a], o.duration = +rr(_, u(d), a, f, A), o.delay = (+rr(m, u(d), a, f, A) || 0) - d._delay, !y && 1 === l && o.delay && (d._delay = m = o.delay, d._start += m, o.delay = 0), s.to(f, o, h ? h(a, f, A) : 0), s._ease = eN.none;
                    s.duration() ? _ = m = 0 : d.timeline = 0
                } else if (b) {
                    tq(tB(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = eq(b.ease || r.ease || "none");
                    var E, S, P, D = 0;
                    if (J(b)) b.forEach(function(t) {
                        return s.to(A, t, ">")
                    }), s.duration();
                    else {
                        for (c in o = {}, b) "ease" === c || "easeEach" === c || re(c, b[c], o, b.easeEach);
                        for (c in o)
                            for (a = 0, E = o[c].sort(function(t, e) {
                                    return t.t - e.t
                                }), D = 0; a < E.length; a++)(P = {
                                ease: (S = E[a]).e,
                                duration: (S.t - (a ? E[a - 1].t : 0)) / 100 * _
                            })[c] = S.v, s.to(A, P, D), D += P.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || d.duration(_ = s.duration())
            } else d.timeline = 0;
            return !0 !== x || O || (e2 = u(d), C.killTweensOf(A), e2 = 0), t3(M, u(d), n), r.reversed && d.reverse(), r.paused && d.paused(!0), (v || !_ && !b && d._start === tD(M._time) && Q(v) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(u(d)) && "nested" !== M.data) && (d._tTime = -1e-8, d.render(Math.max(0, -m) || 0)), T && t8(u(d), T), d
        }
        l(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var n, i, s, a, o, u, l, c, f, h = this._time,
                p = this._tDur,
                d = this._dur,
                g = t < 0,
                _ = t > p - 1e-8 && !g ? p : t < 1e-8 ? 0 : t;
            if (d) {
                if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g || this._lazy) {
                    if (n = _, c = this.timeline, this._repeat) {
                        if (a = d + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * a + t, e, r);
                        if (n = tD(_ % a), _ === p ? (s = this._repeat, n = d) : (s = ~~(o = tD(_ / a))) && s === o ? (n = d, s--) : n > d && (n = d), (u = this._yoyo && 1 & s) && (f = this._yEase, n = d - n), o = tJ(this._tTime, a), n === h && !r && this._initted && s === o) return this._tTime = _, this;
                        s !== o && (c && this._yEase && ej(c, u), this.vars.repeatRefresh && !u && !this._lock && n !== a && this._initted && (this._lock = r = 1, this.render(tD(a * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (t4(this, g ? t : n, r, e, _)) return this._tTime = 0, this;
                        if (h !== this._time && !(r && this.vars.repeatRefresh && s !== o)) return this;
                        if (d !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(n / d), this._from && (this.ratio = l = 1 - l), !h && _ && !e && !o && (ew(this, "onStart"), this._tTime !== _)) return this;
                    for (i = this._pt; i;) i.r(l, i.d), i = i._next;
                    c && c.render(t < 0 ? t : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && tZ(this, t, e, r), ew(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && ew(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (g && !this._onUpdate && tZ(this, t, !0, !0), (t || !d) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && tG(this, 1), !e && !(g && !h) && (_ || h || u) && (ew(this, _ === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < p && this.timeScale() > 0) && this._prom()))
                }
            } else t7(this, t, e, r);
            return this
        }, r.targets = function() {
            return this._targets
        }, r.invalidate = function(e) {
            return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, n, i) {
            F || ez.wake(), this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (this._initted || e9(this, s), e7(this, t, e, r, n, this._ease(s / this._dur), s, i)) ? this.resetTo(t, e, r, n, 1) : (t2(this, 0), this.parent || tW(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !t && (!e || "all" === e)) return this._lazy = this._pt = 0, this.parent ? eT(this) : this.scrollTrigger && this.scrollTrigger.kill(!!M), this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, e2 && !0 !== e2.vars.overwrite)._first || eT(this), this.parent && r !== this.timeline.totalDuration() && ee(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var n, i, s, a, o, u, l, c = this._targets,
                f = t ? ef(t) : c,
                h = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && tV(c, f)) return "all" === e && (this._pt = 0), eT(this);
            for (n = this._op = this._op || [], "all" !== e && (q(e) && (o = {}, tS(e, function(t) {
                    return o[t] = 1
                }), e = o), e = rt(c, e)), l = c.length; l--;)
                if (~f.indexOf(c[l]))
                    for (o in i = h[l], "all" === e ? (n[l] = e, a = i, s = {}) : (s = n[l] = n[l] || {}, a = e), a)(u = i && i[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || tH(this, u, "_pt"), delete i[o]), "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && p && eT(this), this
        }, e.to = function(t, r) {
            return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
            return es(1, arguments)
        }, e.delayedCall = function(t, r, n, i) {
            return new e(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }, e.fromTo = function(t, e, r) {
            return es(2, arguments)
        }, e.set = function(t, r) {
            return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
            return C.killTweensOf(t, e, r)
        }, e
    }(eK);
    tB(rs.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), tS("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rs[t] = function() {
            var e = new eZ,
                r = el.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var ra = function(t, e, r) {
            return t[e] = r
        },
        ro = function(t, e, r) {
            return t[e](r)
        },
        ru = function(t, e, r, n) {
            return t[e](n.fp, r)
        },
        rl = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        rc = function(t, e) {
            return V(t[e]) ? ro : H(t[e]) && t.setAttribute ? rl : ra
        },
        rf = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
        },
        rh = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        rp = function(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + n, r = r._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        rd = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        rg = function(t, e, r, n) {
            for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i
        },
        r_ = function(t) {
            for (var e, r, n = this._pt; n;) r = n._next, (n.p !== t || n.op) && n.op !== t ? n.dep || (e = 1) : tH(this, n, "_pt"), n = r;
            return !e
        },
        rm = function(t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        rv = function(t) {
            for (var e, r, n, i, s = t._pt; s;) {
                for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : i) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : i = s, s = e
            }
            t._pt = n
        },
        ry = function() {
            function t(t, e, r, n, i, s, a, o, u) {
                this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || rf, this.d = a || this, this.set = o || ra, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = rm, this.m = t, this.mt = r, this.tween = e
            }, t
        }();
    tS(tM + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ty[t] = 1
    }), tl.TweenMax = tl.TweenLite = rs, tl.TimelineLite = tl.TimelineMax = eZ, C = new eZ({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), N.stringFilter = eR;
    var rx = [],
        rb = {},
        rw = [],
        rT = 0,
        rk = 0,
        rO = function(t) {
            return (rb[t] || rw).map(function(t) {
                return t()
            })
        },
        rM = function() {
            var t = Date.now(),
                e = [];
            t - rT > 2 && (rO("matchMediaInit"), rx.forEach(function(t) {
                var r, n, i, s, a = t.queries,
                    o = t.conditions;
                for (n in a)(r = E.matchMedia(a[n]).matches) && (i = 1), r !== o[n] && (o[n] = r, s = 1);
                s && (t.revert(), i && e.push(t))
            }), rO("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t, function(e) {
                    return t.add(null, e)
                })
            }), rT = t, rO("matchMedia"))
        },
        rA = function() {
            function t(t, e) {
                this.selector = e && eh(e), this.data = [], this._r = [], this.isReverted = !1, this.id = rk++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                V(t) && (r = e, e = t, t = V);
                var n = this,
                    i = function() {
                        var t, i = A,
                            s = n.selector;
                        return i && i !== n && i.data.push(n), r && (n.selector = eh(r)), A = n, t = e.apply(n, arguments), V(t) && n._r.push(t), A = i, n.selector = s, n.isReverted = !1, t
                    };
                return n.last = i, t === V ? i(n, function(t) {
                    return n.add(null, t)
                }) : t ? n[t] = i : i
            }, e.ignore = function(t) {
                var e = A;
                A = null, t(this), A = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach(function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rs && !(r.parent && "nested" === r.parent.data) && e.push(r)
                }), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var r = this;
                if (t) {
                    for (var n, i = r.getTweens(), s = r.data.length; s--;) "isFlip" === (n = r.data[s]).data && (n.revert(), n.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }));
                    for (i.map(function(t) {
                            return {
                                g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                t: t
                            }
                        }).sort(function(t, e) {
                            return e.g - t.g || -1 / 0
                        }).forEach(function(e) {
                            return e.t.revert(t)
                        }), s = r.data.length; s--;)(n = r.data[s]) instanceof eZ ? "nested" !== n.data && (n.scrollTrigger && n.scrollTrigger.revert(), n.kill()) : n instanceof rs || !n.revert || n.revert(t);
                    r._r.forEach(function(e) {
                        return e(t, r)
                    }), r.isReverted = !0
                } else this.data.forEach(function(t) {
                    return t.kill && t.kill()
                });
                if (this.clear(), e)
                    for (var a = rx.length; a--;) rx[a].id === this.id && rx.splice(a, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        rC = function() {
            function t(t) {
                this.contexts = [], this.scope = t, A && A.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                G(t) || (t = {
                    matches: t
                });
                var n, i, s, a = new rA(0, r || this.scope),
                    o = a.conditions = {};
                for (i in A && !a.selector && (a.selector = A.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === i ? s = 1 : (n = E.matchMedia(t[i])) && (0 > rx.indexOf(a) && rx.push(a), (o[i] = n.matches) && (s = 1), n.addListener ? n.addListener(rM) : n.addEventListener("change", rM));
                return s && e(a, function(t) {
                    return a.add(null, t)
                }), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach(function(e) {
                    return e.kill(t, !0)
                })
            }, t
        }(),
        rE = {
            registerPlugin: function() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach(function(t) {
                    return eO(t)
                })
            },
            timeline: function(t) {
                return new eZ(t)
            },
            getTweensOf: function(t, e) {
                return C.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, n) {
                q(t) && (t = ef(t)[0]);
                var i = tC(t || {}).get,
                    s = r ? tY : tL;
                return "native" === r && (r = ""), t ? e ? s((tw[e] && tw[e].get || i)(t, e, r, n)) : function(e, r, n) {
                    return s((tw[e] && tw[e].get || i)(t, e, r, n))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = ef(t)).length > 1) {
                    var n = t.map(function(t) {
                            return rR.quickSetter(t, e, r)
                        }),
                        i = n.length;
                    return function(t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var s = tw[e],
                    a = tC(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    u = s ? function(e) {
                        var n = new s;
                        z._pt = 0, n.init(t, r ? e + r : e, z, 0, [t]), n.render(1, n), z._pt && rd(1, z)
                    } : a.set(t, o);
                return s ? u : function(e) {
                    return u(t, o, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var n, i = rR.to(t, tB(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
                    s = function(t, r, n) {
                        return i.resetTo(e, t, r, n)
                    };
                return s.tween = i, s
            },
            isTweening: function(t) {
                return C.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = eq(t.ease, I.ease)), tU(I, t || {})
            },
            config: function(t) {
                return tU(N, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    s = t.extendTimeline;
                (n || "").split(",").forEach(function(t) {
                    return t && !tw[t] && !tl[t] && tp(e + " effect requires " + t + " plugin.")
                }), tT[e] = function(t, e, n) {
                    return r(ef(t), tB(e || {}, i), n)
                }, s && (eZ.prototype[e] = function(t, r, n) {
                    return this.add(tT[e](t, G(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function(t, e) {
                eN[t] = eq(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? eq(t, e) : eN
            },
            getById: function(t) {
                return C.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, n, i = new eZ(t);
                for (i.smoothChildTiming = Q(t.smoothChildTiming), C.remove(i), i._dp = 0, i._time = i._tTime = C._time, r = C._first; r;) n = r._next, (e || !(!r._dur && r instanceof rs && r.vars.onComplete === r._targets[0])) && t3(i, r, r._start - r._delay), r = n;
                return t3(C, i, 0), i
            },
            context: function(t, e) {
                return t ? new rA(t, e) : A
            },
            matchMedia: function(t) {
                return new rC(t)
            },
            matchMediaRefresh: function() {
                return rx.forEach(function(t) {
                    var e, r, n = t.conditions;
                    for (r in n) n[r] && (n[r] = !1, e = 1);
                    e && t.revert()
                }) || rM()
            },
            addEventListener: function(t, e) {
                var r = rb[t] || (rb[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = rb[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return J(e) ? ev(e, t(0, e.length), r) : ea(n, function(t) {
                        return (i + (t - e) % i) % i + e
                    })
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        s = 2 * i;
                    return J(e) ? ev(e, t(0, e.length - 1), r) : ea(n, function(t) {
                        return t = (s + (t - e) % s) % s || 0, e + (t > i ? s - t : t)
                    })
                },
                distribute: ed,
                random: em,
                snap: e_,
                normalize: function(t, e, r) {
                    return ex(t, e, 0, 1, r)
                },
                getUnit: eu,
                clamp: function(t, e, r) {
                    return ea(r, function(r) {
                        return eo(t, e, r)
                    })
                },
                splitColor: eC,
                toArray: ef,
                selector: eh,
                mapRange: ex,
                pipe: function() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function(t) {
                        return e.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || eu(r))
                    }
                },
                interpolate: function t(e, r, n, i) {
                    var s = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!s) {
                        var a, o, u, l, c, f = q(e),
                            h = {};
                        if (!0 === n && (i = 1) && (n = null), f) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (J(e) && !J(r)) {
                            for (o = 1, u = [], c = (l = e.length) - 2; o < l; o++) u.push(t(e[o - 1], e[o]));
                            l--, s = function(t) {
                                var e = Math.min(c, ~~(t *= l));
                                return u[e](t - e)
                            }, n = r
                        } else i || (e = tX(J(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r) e8.call(h, e, a, "get", r[a]);
                            s = function(t) {
                                return rd(t, h) || (f ? e.p : e)
                            }
                        }
                    }
                    return ea(n, s)
                },
                shuffle: ep
            },
            install: tf,
            effects: tT,
            ticker: ez,
            updateRoot: eZ.updateRoot,
            plugins: tw,
            globalTimeline: C,
            core: {
                PropTween: ry,
                globals: td,
                Tween: rs,
                Timeline: eZ,
                Animation: eK,
                getCache: tC,
                _removeLinkedListItem: tH,
                reverting: function() {
                    return M
                },
                context: function(t) {
                    return t && A && (A.data.push(t), t._ctx = A), A
                },
                suppressOverwrites: function(t) {
                    return O = t
                }
            }
        };
    tS("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return rE[t] = rs[t]
    }), ez.add(eZ.updateRoot), z = rE.to({}, {
        duration: 0
    });
    var rS = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        rP = function(t, e) {
            var r, n, i, s = t._targets;
            for (r in e)
                for (n = s.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = rS(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
        },
        rD = function(t, e) {
            return {
                name: t,
                headless: 1,
                rawVars: 1,
                init: function(t, r, n) {
                    n._onInit = function(t) {
                        var n, i;
                        if (q(r) && (n = {}, tS(r, function(t) {
                                return n[t] = 1
                            }), r = n), e) {
                            for (i in n = {}, r) n[i] = e(r[i]);
                            r = n
                        }
                        rP(t, r)
                    }
                }
            }
        },
        rR = rE.registerPlugin({
            name: "attr",
            init: function(t, e, r, n, i) {
                var s, a, o;
                for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], n, i, 0, 0, s)).op = s, a.b = o, this._props.push(s)
            },
            render: function(t, e) {
                for (var r = e._pt; r;) M ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
            }
        }, {
            name: "endArray",
            headless: 1,
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, rD("roundProps", eg), rD("modifiers"), rD("snap", e_)) || rE;
    rs.version = eZ.version = rR.version = "3.14.2", D = 1, K() && eF(), eN.Power0, eN.Power1, eN.Power2, eN.Power3, eN.Power4, eN.Linear, eN.Quad, eN.Cubic, eN.Quart, eN.Quint, eN.Strong, eN.Elastic, eN.Back, eN.SteppedEase, eN.Bounce, eN.Sine, eN.Expo, eN.Circ;
    var rz, rF, rN, rI, rL, rY, rB, rX = {},
        rU = 180 / Math.PI,
        rj = Math.PI / 180,
        rq = Math.atan2,
        rV = /([A-Z])/g,
        rW = /(left|right|width|margin|padding|x)/i,
        rH = /[\s,\(]\S/,
        rG = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        rQ = function(t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        rK = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        rZ = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        },
        r$ = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        },
        rJ = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        r0 = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        r1 = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        r2 = function(t, e, r) {
            return t.style[e] = r
        },
        r5 = function(t, e, r) {
            return t.style.setProperty(e, r)
        },
        r3 = function(t, e, r) {
            return t._gsap[e] = r
        },
        r8 = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        r4 = function(t, e, r, n, i) {
            var s = t._gsap;
            s.scaleX = s.scaleY = r, s.renderTransform(i, s)
        },
        r6 = function(t, e, r, n, i) {
            var s = t._gsap;
            s[e] = r, s.renderTransform(i, s)
        },
        r9 = "transform",
        r7 = r9 + "Origin",
        nt = function t(e, r) {
            var n = this,
                i = this.target,
                s = i.style,
                a = i._gsap;
            if (e in rX && s) {
                if (this.tfm = this.tfm || {}, "transform" === e) return rG.transform.split(",").forEach(function(e) {
                    return t.call(n, e, r)
                });
                if (~(e = rG[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return n.tfm[t] = nv(i, t)
                    }) : this.tfm[e] = a.x ? a[e] : nv(i, e), e === r7 && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(r9) >= 0) return;
                a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(r7, r, "")), e = r9
            }(s || r) && this.props.push(e, r, s[e])
        },
        ne = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        nr = function() {
            var t, e, r = this.props,
                n = this.target,
                i = n.style,
                s = n._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(rV, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) s[e] = this.tfm[e];
                s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = rY()) && t.isStart || i[r9] || (ne(i), s.zOrigin && i[r7] && (i[r7] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
            }
        },
        nn = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: nr,
                save: nt
            };
            return t._gsap || rR.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return r.save(t)
            }), r
        },
        ni = function(t, e) {
            var r = rz.createElementNS ? rz.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : rz.createElement(t);
            return r && r.style ? r : rz.createElement(t)
        },
        ns = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(rV, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, no(r) || r, 1) || ""
        },
        na = "O,Moz,ms,Ms,Webkit".split(","),
        no = function(t, e, r) {
            var n = (e || rI).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(na[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? na[i] : "") + t
        },
        nu = function() {
            "undefined" != typeof window && window.document && (rF = (rz = window.document).documentElement, rI = ni("div") || {
                style: {}
            }, ni("div"), r7 = (r9 = no(r9)) + "Origin", rI.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", rB = !!no("perspective"), rY = rR.core.reverting, rN = 1)
        },
        nl = function(t) {
            var e, r = t.ownerSVGElement,
                n = ni("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = t.cloneNode(!0);
            i.style.display = "block", n.appendChild(i), rF.appendChild(n);
            try {
                e = i.getBBox()
            } catch (t) {}
            return n.removeChild(i), rF.removeChild(n), e
        },
        nc = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        nf = function(t) {
            var e, r;
            try {
                e = t.getBBox()
            } catch (n) {
                e = nl(t), r = 1
            }
            return e && (e.width || e.height) || r || (e = nl(t)), !e || e.width || e.x || e.y ? e : {
                x: +nc(t, ["x", "cx", "x1"]) || 0,
                y: +nc(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        nh = function(t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && nf(t))
        },
        np = function(t, e) {
            if (e) {
                var r, n = t.style;
                e in rX && e !== r7 && (e = r9), n.removeProperty ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(rV, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        nd = function(t, e, r, n, i, s) {
            var a = new ry(t._pt, e, r, 0, 1, s ? r1 : r0);
            return t._pt = a, a.b = n, a.e = i, t._props.push(r), a
        },
        ng = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        n_ = {
            grid: 1,
            flex: 1
        },
        nm = function t(e, r, n, i) {
            var s, a, o, u, l = parseFloat(n) || 0,
                c = (n + "").trim().substr((l + "").length) || "px",
                f = rI.style,
                h = rW.test(r),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
                g = "px" === i,
                _ = "%" === i;
            if (i === c || !l || ng[i] || ng[c]) return l;
            if ("px" === c || g || (l = t(e, r, n, "px")), u = e.getCTM && nh(e), (_ || "%" === c) && (rX[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[h ? "width" : "height"] : e[d], tP(_ ? l / s * 100 : l / 100 * s);
            if (f[h ? "width" : "height"] = 100 + (g ? c : i), a = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== rz && a.appendChild || (a = rz.body), (o = a._gsap) && _ && o.width && h && o.time === ez.time && !o.uncache) return tP(l / o.width * 100);
            if (_ && ("height" === r || "width" === r)) {
                var m = e.style[r];
                e.style[r] = 100 + i, s = e[d], m ? e.style[r] = m : np(e, r)
            } else(_ || "%" === c) && !n_[ns(a, "display")] && (f.position = ns(e, "position")), a === e && (f.position = "static"), a.appendChild(rI), s = rI[d], a.removeChild(rI), f.position = "absolute";
            return h && _ && ((o = tC(a)).time = ez.time, o.width = a[d]), tP(g ? s * l / 100 : s && l ? 100 / s * l : 0)
        },
        nv = function(t, e, r, n) {
            var i;
            return rN || nu(), e in rG && "transform" !== e && ~(e = rG[e]).indexOf(",") && (e = e.split(",")[0]), rX[e] && "transform" !== e ? (i = nS(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : nP(ns(t, r7)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nT[e] && nT[e](t, e, r) || ns(t, e) || tE(t, e) || +("opacity" === e)), r && !~(i + "").trim().indexOf(" ") ? nm(t, e, i, r) + r : i
        },
        ny = function(t, e, r, n) {
            if (!r || "none" === r) {
                var i = no(e, t, 1),
                    s = i && ns(t, i, 1);
                s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = ns(t, "borderTopColor"))
            }
            var a, o, u, l, c, f, h, p, d, g, _, m = new ry(this._pt, t.style, e, 0, 1, rp),
                v = 0,
                y = 0;
            if (m.b = r, m.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = ns(t, n.substring(4, n.indexOf(")")))), "auto" === n && (f = t.style[e], t.style[e] = n, n = ns(t, e) || n, f ? t.style[e] = f : np(t, e)), eR(a = [r, n]), r = a[0], n = a[1], u = r.match(ti) || [], (n.match(ti) || []).length) {
                for (; o = ti.exec(n);) h = o[0], d = n.substring(v, o.index), c ? c = (c + 1) % 5 : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) && (c = 1), h !== (f = u[y++] || "") && (l = parseFloat(f) || 0, _ = f.substr((l + "").length), "=" === h.charAt(1) && (h = tR(l, h) + _), p = parseFloat(h), g = h.substr((p + "").length), v = ti.lastIndex - g.length, g || (g = g || N.units[e] || _, v === n.length && (n += g, m.e += g)), _ !== g && (l = nm(t, e, f, g) || 0), m._pt = {
                    _next: m._pt,
                    p: d || 1 === y ? d : ",",
                    s: l,
                    c: p - l,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                m.c = v < n.length ? n.substring(v, n.length) : ""
            } else m.r = "display" === e && "none" === n ? r1 : r0;
            return ta.test(n) && (m.e = 0), this._pt = m, m
        },
        nx = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        nb = function(t) {
            var e = t.split(" "),
                r = e[0],
                n = e[1] || "50%";
            return ("top" === r || "bottom" === r || "left" === n || "right" === n) && (t = r, r = n, n = t), e[0] = nx[r] || r, e[1] = nx[n] || n, e.join(" ")
        },
        nw = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, s = e.t,
                    a = s.style,
                    o = e.u,
                    u = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", n = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) rX[r = o[i]] && (n = 1, r = "transformOrigin" === r ? r7 : r9), np(s, r);
                n && (np(s, r9), u && (u.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", nS(s, 1), u.uncache = 1, ne(a)))
            }
        },
        nT = {
            clearProps: function(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var s = t._pt = new ry(t._pt, e, r, 0, 0, nw);
                    return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
                }
            }
        },
        nk = [1, 0, 0, 1, 0, 0],
        nO = {},
        nM = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        nA = function(t) {
            var e = ns(t, r9);
            return nM(e) ? nk : e.substr(7).match(tn).map(tP)
        },
        nC = function(t, e) {
            var r, n, i, s, a = t._gsap || tC(t),
                o = t.style,
                u = nA(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? nk : u : (u !== nk || t.offsetParent || t === rF || a.svg || (i = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1, n = t.nextElementSibling, rF.appendChild(t)), u = nA(t), i ? o.display = i : np(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : rF.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        nE = function(t, e, r, n, i, s) {
            var a, o, u, l, c = t._gsap,
                f = i || nC(t, !0),
                h = c.xOrigin || 0,
                p = c.yOrigin || 0,
                d = c.xOffset || 0,
                g = c.yOffset || 0,
                _ = f[0],
                m = f[1],
                v = f[2],
                y = f[3],
                x = f[4],
                b = f[5],
                w = e.split(" "),
                T = parseFloat(w[0]) || 0,
                k = parseFloat(w[1]) || 0;
            r ? f !== nk && (o = _ * y - m * v) && (u = y / o * T + -v / o * k + (v * b - y * x) / o, l = -m / o * T + _ / o * k - (_ * b - m * x) / o, T = u, k = l) : (T = (a = nf(t)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T), k = a.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * a.height : k)), n || !1 !== n && c.smooth ? (c.xOffset = d + ((x = T - h) * _ + (b = k - p) * v) - x, c.yOffset = g + (x * m + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = T, c.yOrigin = k, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[r7] = "0px 0px", s && (nd(s, c, "xOrigin", h, T), nd(s, c, "yOrigin", p, k), nd(s, c, "xOffset", d, c.xOffset), nd(s, c, "yOffset", g, c.yOffset)), t.setAttribute("data-svg-origin", T + " " + k)
        },
        nS = function(t, e) {
            var r = t._gsap || new eQ(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, s, a, o, u, l, c, f, h, p, d, g, _, m, v, y, x, b, w, T, k, O, M, A, C, E, S, P, D, R, z, F = t.style,
                I = r.scaleX < 0,
                L = getComputedStyle(t),
                Y = ns(t, r7) || "0";
            return n = i = s = u = l = c = f = h = p = 0, a = o = 1, r.svg = !!(t.getCTM && nh(t)), L.translate && (("none" !== L.translate || "none" !== L.scale || "none" !== L.rotate) && (F[r9] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[r9] ? L[r9] : "")), F.scale = F.rotate = F.translate = "none"), _ = nC(t, r.svg), r.svg && (r.uncache ? (A = t.getBBox(), Y = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", M = "") : M = !e && t.getAttribute("data-svg-origin"), nE(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, _)), d = r.xOrigin || 0, g = r.yOrigin || 0, _ !== nk && (x = _[0], b = _[1], w = _[2], T = _[3], n = k = _[4], i = O = _[5], 6 === _.length ? (a = Math.sqrt(x * x + b * b), o = Math.sqrt(T * T + w * w), u = x || b ? rq(b, x) * rU : 0, (f = w || T ? rq(w, T) * rU + u : 0) && (o *= Math.abs(Math.cos(f * rj))), r.svg && (n -= d - (d * x + g * w), i -= g - (d * b + g * T))) : (z = _[6], D = _[7], E = _[8], S = _[9], P = _[10], R = _[11], n = _[12], i = _[13], s = _[14], l = (m = rq(z, P)) * rU, m && (M = k * (v = Math.cos(-m)) + E * (y = Math.sin(-m)), A = O * v + S * y, C = z * v + P * y, E = -(k * y) + E * v, S = -(O * y) + S * v, P = -(z * y) + P * v, R = -(D * y) + R * v, k = M, O = A, z = C), c = (m = rq(-w, P)) * rU, m && (M = x * (v = Math.cos(-m)) - E * (y = Math.sin(-m)), A = b * v - S * y, C = w * v - P * y, R = T * y + R * v, x = M, b = A, w = C), u = (m = rq(b, x)) * rU, m && (M = x * (v = Math.cos(m)) + b * (y = Math.sin(m)), A = k * v + O * y, b = b * v - x * y, O = O * v - k * y, x = M, k = A), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), a = tP(Math.sqrt(x * x + b * b + w * w)), o = tP(Math.sqrt(O * O + z * z)), f = Math.abs(m = rq(k, O)) > 2e-4 ? m * rU : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !nM(ns(t, r9)), M && t.setAttribute("transform", M))), Math.abs(f) > 90 && 270 > Math.abs(f) && (I ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = s + "px", r.scaleX = tP(a), r.scaleY = tP(o), r.rotation = tP(u) + "deg", r.rotationX = tP(l) + "deg", r.rotationY = tP(c) + "deg", r.skewX = f + "deg", r.skewY = h + "deg", r.transformPerspective = p + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || !e && r.zOrigin || 0) && (F[r7] = nP(Y)), r.xOffset = r.yOffset = 0, r.force3D = N.force3D, r.renderTransform = r.svg ? nN : rB ? nF : nR, r.uncache = 0, r
        },
        nP = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        nD = function(t, e, r) {
            var n = eu(e);
            return tP(parseFloat(e) + parseFloat(nm(t, "x", r + "px", n))) + n
        },
        nR = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nF(t, e)
        },
        nz = "0deg",
        nF = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                s = r.x,
                a = r.y,
                o = r.z,
                u = r.rotation,
                l = r.rotationY,
                c = r.rotationX,
                f = r.skewX,
                h = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                g = r.transformPerspective,
                _ = r.force3D,
                m = r.target,
                v = r.zOrigin,
                y = "",
                x = "auto" === _ && t && 1 !== t || !0 === _;
            if (v && (c !== nz || l !== nz)) {
                var b, w = parseFloat(l) * rj,
                    T = Math.sin(w),
                    k = Math.cos(w);
                s = nD(m, s, -(T * (b = Math.cos(w = parseFloat(c) * rj)) * v)), a = nD(m, a, -(-Math.sin(w) * v)), o = nD(m, o, -(k * b * v) + v)
            }
            "0px" !== g && (y += "perspective(" + g + ") "), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (x || "0px" !== s || "0px" !== a || "0px" !== o) && (y += "0px" !== o || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "), u !== nz && (y += "rotate(" + u + ") "), l !== nz && (y += "rotateY(" + l + ") "), c !== nz && (y += "rotateX(" + c + ") "), (f !== nz || h !== nz) && (y += "skew(" + f + ", " + h + ") "), (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "), m.style[r9] = y || "translate(0, 0)"
        },
        nN = function(t, e) {
            var r, n, i, s, a, o = e || this,
                u = o.xPercent,
                l = o.yPercent,
                c = o.x,
                f = o.y,
                h = o.rotation,
                p = o.skewX,
                d = o.skewY,
                g = o.scaleX,
                _ = o.scaleY,
                m = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                x = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                T = parseFloat(c),
                k = parseFloat(f);
            h = parseFloat(h), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), h += d), h || p ? (h *= rj, p *= rj, r = Math.cos(h) * g, n = Math.sin(h) * g, i = -(Math.sin(h - p) * _), s = Math.cos(h - p) * _, p && (d *= rj, i *= a = Math.sqrt(1 + (a = Math.tan(p - d)) * a), s *= a, d && (r *= a = Math.sqrt(1 + (a = Math.tan(d)) * a), n *= a)), r = tP(r), n = tP(n), i = tP(i), s = tP(s)) : (r = g, s = _, n = i = 0), (T && !~(c + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (T = nm(m, "x", c, "px"), k = nm(m, "y", f, "px")), (v || y || x || b) && (T = tP(T + v - (v * r + y * i) + x), k = tP(k + y - (v * n + y * s) + b)), (u || l) && (T = tP(T + u / 100 * (a = m.getBBox()).width), k = tP(k + l / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + T + "," + k + ")", m.setAttribute("transform", a), w && (m.style[r9] = a)
        },
        nI = function(t, e, r, n, i) {
            var s, a, o = q(i),
                u = parseFloat(i) * (o && ~i.indexOf("rad") ? rU : 1) - n,
                l = n + u + "deg";
            return o && ("short" === (s = i.split("_")[1]) && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360), "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), t._pt = a = new ry(t._pt, e, r, n, u, rK), a.e = l, a.u = "deg", t._props.push(r), a
        },
        nL = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        nY = function(t, e, r) {
            var n, i, s, a, o, u, l, c = nL({}, r._gsap),
                f = r.style;
            for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[r9] = e, n = nS(r, 1), np(r, r9), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[r9], f[r9] = e, n = nS(r, 1), f[r9] = s), rX)(s = c[i]) !== (a = n[i]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) && (o = eu(s) !== (l = eu(a)) ? nm(r, i, s, l) : parseFloat(s), u = parseFloat(a), t._pt = new ry(t._pt, n, i, o, u - o, rQ), t._pt.u = l || 0, t._props.push(i));
            nL(n, c)
        };
    tS("padding,margin,Width,Radius", function(t, e) {
        var r = "Right",
            n = "Bottom",
            i = "Left",
            s = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(function(r) {
                return e < 2 ? t + r : "border" + r + t
            });
        nT[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var a, o;
            if (arguments.length < 4) return 5 === (o = (a = s.map(function(e) {
                return nv(t, e, r)
            })).join(" ")).split(a[0]).length ? a[0] : o;
            a = (n + "").split(" "), o = {}, s.forEach(function(t, e) {
                return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), t.init(e, o, i)
        }
    });
    var nB = {
        name: "css",
        register: nu,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var s, a, o, u, l, c, f, h, p, d, g, _, m, v, y, x, b, w = this._props,
                T = t.style,
                k = r.vars.startAt;
            for (f in rN || nu(), this.styles = this.styles || nn(t), x = this.styles.props, this.tween = r, e)
                if ("autoRound" !== f && (a = e[f], !(tw[f] && e6(f, e, r, n, t, i)))) {
                    if (l = typeof a, c = nT[f], "function" === l && (l = typeof(a = a.call(r, n, t, i))), "string" === l && ~a.indexOf("random(") && (a = ey(a)), c) c(this, t, f, a, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", eP.lastIndex = 0, !eP.test(s) && (h = eu(s), (p = eu(a)) ? h !== p && (s = nm(t, f, s, p) + p) : h && (a += h)), this.add(T, "setProperty", s, a, n, i, 0, 0, f), w.push(f), x.push(f, 0, T[f]);
                    else if ("undefined" !== l) {
                        if (k && f in k ? (q(s = "function" == typeof k[f] ? k[f].call(r, n, t, i) : k[f]) && ~s.indexOf("random(") && (s = ey(s)), eu(s + "") || "auto" === s || (s += N.units[f] || eu(nv(t, f)) || ""), "=" === (s + "").charAt(1) && (s = nv(t, f))) : s = nv(t, f), u = parseFloat(s), (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), f in rG && ("autoAlpha" === f && (1 === u && "hidden" === nv(t, "visibility") && o && (u = 0), x.push("visibility", 0, T.visibility), nd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = rG[f]).indexOf(",") && (f = f.split(",")[0])), g = f in rX) {
                            if (this.styles.save(f), b = a, "string" === l && "var(--" === a.substring(0, 6)) {
                                if ("calc(" === (a = ns(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                                    var O = t.style.perspective;
                                    t.style.perspective = a, a = ns(t, "perspective"), O ? t.style.perspective = O : np(t, "perspective")
                                }
                                o = parseFloat(a)
                            }
                            if (_ || ((m = t._gsap).renderTransform && !e.parseTransform || nS(t, e.parseTransform), v = !1 !== e.smoothOrigin && m.smooth, (_ = this._pt = new ry(this._pt, T, r9, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new ry(this._pt, m, "scaleY", m.scaleY, (d ? tR(m.scaleY, d + o) : o) - m.scaleY || 0, rQ), this._pt.u = 0, w.push("scaleY", f), f += "X";
                            else if ("transformOrigin" === f) {
                                x.push(r7, 0, T[r7]), a = nb(a), m.svg ? nE(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== m.zOrigin && nd(this, m, "zOrigin", m.zOrigin, p), nd(this, T, f, nP(s), nP(a)));
                                continue
                            } else if ("svgOrigin" === f) {
                                nE(t, a, 1, v, 0, this);
                                continue
                            } else if (f in nO) {
                                nI(this, m, f, u, d ? tR(u, d + a) : a);
                                continue
                            } else if ("smoothOrigin" === f) {
                                nd(this, m, "smooth", m.smooth, a);
                                continue
                            } else if ("force3D" === f) {
                                m[f] = a;
                                continue
                            } else if ("transform" === f) {
                                nY(this, a, t);
                                continue
                            }
                        } else f in T || (f = no(f) || f);
                        if (g || (o || 0 === o) && (u || 0 === u) && !rH.test(a) && f in T) h = (s + "").substr((u + "").length), o || (o = 0), p = eu(a) || (f in N.units ? N.units[f] : h), h !== p && (u = nm(t, f, s, p)), this._pt = new ry(this._pt, g ? m : T, f, u, (d ? tR(u, d + o) : o) - u, !g && ("px" === p || "zIndex" === f) && !1 !== e.autoRound ? rJ : rQ), this._pt.u = p || 0, g && b !== a ? (this._pt.b = s, this._pt.e = b, this._pt.r = r$) : h !== p && "%" !== p && (this._pt.b = s, this._pt.r = rZ);
                        else if (f in T) ny.call(this, t, f, s, d ? d + a : a);
                        else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, n, i);
                        else if ("parseTransform" !== f) {
                            th(f, a);
                            continue
                        }
                        g || (f in T ? x.push(f, 0, T[f]) : "function" == typeof t[f] ? x.push(f, 2, t[f]()) : x.push(f, 1, s || t[f])), w.push(f)
                    }
                }
            y && rv(this)
        },
        render: function(t, e) {
            if (e.tween._time || !rY())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: nv,
        aliases: rG,
        getSetter: function(t, e, r) {
            var n = rG[e];
            return n && 0 > n.indexOf(",") && (e = n), e in rX && e !== r7 && (t._gsap.x || nv(t, "x")) ? r && rL === r ? "scale" === e ? r8 : r3 : (rL = r || {}, "scale" === e ? r4 : r6) : t.style && !H(t.style[e]) ? r2 : ~e.indexOf("-") ? r5 : rc(t, e)
        },
        core: {
            _removeProperty: np,
            _getMatrix: nC
        }
    };
    rR.utils.checkPrefix = no, rR.core.getStyleSaver = nn, nj = tS("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (nU = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        rX[t] = 1
    }), tS(nU, function(t) {
        N.units[t] = "deg", nO[t] = 1
    }), rG[nj[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + nU, tS("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        rG[e[1]] = nj[e[0]]
    }), tS("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        N.units[t] = "px"
    }), rR.registerPlugin(nB);
    var nX = rR.registerPlugin(nB) || rR;
    nX.core.Tween;
    var nU, nj, nq, nV, nW, nH, nG, nQ, nK, nZ, n$, nJ, n0, n1, n2, n5 = function() {
            return nq || "undefined" != typeof window && (nq = window.gsap) && nq.registerPlugin && nq
        },
        n3 = 1,
        n8 = [],
        n4 = [],
        n6 = [],
        n9 = Date.now,
        n7 = function(t, e) {
            return e
        },
        it = function() {
            var t = n$.core,
                e = t.bridge || {},
                r = t._scrollers,
                n = t._proxies;
            r.push.apply(r, n4), n.push.apply(n, n6), n4 = r, n6 = n, n7 = function(t, r) {
                return e[t](r)
            }
        },
        ie = function(t, e) {
            return ~n6.indexOf(t) && n6[n6.indexOf(t) + 1][e]
        },
        ir = function(t) {
            return !!~nJ.indexOf(t)
        },
        ii = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !1 !== n,
                capture: !!i
            })
        },
        is = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        ia = "scrollLeft",
        io = "scrollTop",
        iu = function() {
            return n0 && n0.isPressed || n4.cache++
        },
        il = function(t, e) {
            var r = function r(n) {
                if (n || 0 === n) {
                    n3 && (nW.history.scrollRestoration = "manual");
                    var i = n0 && n0.isPressed;
                    t(n = r.v = Math.round(n) || (n0 && n0.iOS ? 1 : 0)), r.cacheID = n4.cache, i && n7("ss", n)
                } else(e || n4.cache !== r.cacheID || n7("ref")) && (r.cacheID = n4.cache, r.v = t());
                return r.v + r.offset
            };
            return r.offset = 0, t && r
        },
        ic = {
            s: ia,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: il(function(t) {
                return arguments.length ? nW.scrollTo(t, ih.sc()) : nW.pageXOffset || nH[ia] || nG[ia] || nQ[ia] || 0
            })
        },
        ih = {
            s: io,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: ic,
            sc: il(function(t) {
                return arguments.length ? nW.scrollTo(ic.sc(), t) : nW.pageYOffset || nH[io] || nG[io] || nQ[io] || 0
            })
        },
        ip = function(t, e) {
            return (e && e._ctx && e._ctx.selector || nq.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== nq.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
        },
        id = function(t, e) {
            for (var r = e.length; r--;)
                if (e[r] === t || e[r].contains(t)) return !0;
            return !1
        },
        ig = function(t, e) {
            var r = e.s,
                n = e.sc;
            ir(t) && (t = nH.scrollingElement || nG);
            var i = n4.indexOf(t),
                s = n === ih.sc ? 1 : 2;
            ~i || (i = n4.push(t) - 1), n4[i + s] || ii(t, "scroll", iu);
            var a = n4[i + s],
                o = a || (n4[i + s] = il(ie(t, r), !0) || (ir(t) ? n : il(function(e) {
                    return arguments.length ? t[r] = e : t[r]
                })));
            return o.target = t, a || (o.smooth = "smooth" === nq.getProperty(t, "scrollBehavior")), o
        },
        i_ = function(t, e, r) {
            var n = t,
                i = t,
                s = n9(),
                a = s,
                o = e || 50,
                u = Math.max(500, 3 * o),
                l = function(t, e) {
                    var u = n9();
                    e || u - s > o ? (i = n, n = t, a = s, s = u) : r ? n += t : n = i + (t - i) / (u - a) * (s - a)
                };
            return {
                update: l,
                reset: function() {
                    i = n = r ? 0 : n, a = s = 0
                },
                getVelocity: function(t) {
                    var e = a,
                        o = i,
                        c = n9();
                    return (t || 0 === t) && t !== n && l(t), s === a || c - a > u ? 0 : (n + (r ? o : -o)) / ((r ? c : s) - e) * 1e3
                }
            }
        },
        im = function(t, e) {
            return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        iv = function(t) {
            var e = Math.max.apply(Math, t),
                r = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(r) ? e : r
        },
        iy = function() {
            (n$ = nq.core.globals().ScrollTrigger) && n$.core && it()
        },
        ix = function(t) {
            return nq = t || n5(), !nV && nq && "undefined" != typeof document && document.body && (nW = window, nG = (nH = document).documentElement, nQ = nH.body, nJ = [nW, nH, nG, nQ], nq.utils.clamp, n2 = nq.core.context || function() {}, nZ = "onpointerenter" in nQ ? "pointer" : "mouse", nK = ib.isTouch = nW.matchMedia && nW.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart" in nW || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), n1 = ib.eventTypes = ("ontouchstart" in nG ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in nG) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","), setTimeout(function() {
                return n3 = 0
            }, 500), iy(), nV = 1), nV
        };
    ic.op = ih, n4.cache = 0;
    var ib = function() {
        var t;

        function e(t) {
            this.init(t)
        }
        return e.prototype.init = function(t) {
                nV || ix(nq) || console.warn("Please gsap.registerPlugin(Observer)"), n$ || iy();
                var e = t.tolerance,
                    r = t.dragMinimum,
                    n = t.type,
                    i = t.target,
                    s = t.lineHeight,
                    a = t.debounce,
                    o = t.preventDefault,
                    u = t.onStop,
                    l = t.onStopDelay,
                    c = t.ignore,
                    f = t.wheelSpeed,
                    h = t.event,
                    p = t.onDragStart,
                    d = t.onDragEnd,
                    g = t.onDrag,
                    _ = t.onPress,
                    m = t.onRelease,
                    v = t.onRight,
                    y = t.onLeft,
                    x = t.onUp,
                    b = t.onDown,
                    w = t.onChangeX,
                    T = t.onChangeY,
                    k = t.onChange,
                    O = t.onToggleX,
                    M = t.onToggleY,
                    A = t.onHover,
                    C = t.onHoverEnd,
                    E = t.onMove,
                    S = t.ignoreCheck,
                    P = t.isNormalizer,
                    D = t.onGestureStart,
                    R = t.onGestureEnd,
                    z = t.onWheel,
                    F = t.onEnable,
                    N = t.onDisable,
                    I = t.onClick,
                    L = t.scrollSpeed,
                    Y = t.capture,
                    B = t.allowClicks,
                    X = t.lockAxis,
                    U = t.onLockAxis;
                this.target = i = ip(i) || nG, this.vars = t, c && (c = nq.utils.toArray(c)), e = e || 1e-9, r = r || 0, f = f || 1, L = L || 1, n = n || "wheel,touch,pointer", a = !1 !== a, s || (s = parseFloat(nW.getComputedStyle(nQ).lineHeight) || 22);
                var j, q, V, W, H, G, Q, K = this,
                    Z = 0,
                    $ = 0,
                    J = t.passive || !o && !1 !== t.passive,
                    tt = ig(i, ic),
                    te = ig(i, ih),
                    tr = tt(),
                    tn = te(),
                    ti = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === n1[0],
                    ts = ir(i),
                    ta = i.ownerDocument || nH,
                    to = [0, 0, 0],
                    tu = [0, 0, 0],
                    tl = 0,
                    tc = function() {
                        return tl = n9()
                    },
                    tf = function(t, e) {
                        return (K.event = t) && c && id(t.target, c) || e && ti && "touch" !== t.pointerType || S && S(t, e)
                    },
                    th = function() {
                        var t = K.deltaX = iv(to),
                            r = K.deltaY = iv(tu),
                            n = Math.abs(t) >= e,
                            i = Math.abs(r) >= e;
                        k && (n || i) && k(K, t, r, to, tu), n && (v && K.deltaX > 0 && v(K), y && K.deltaX < 0 && y(K), w && w(K), O && K.deltaX < 0 != Z < 0 && O(K), Z = K.deltaX, to[0] = to[1] = to[2] = 0), i && (b && K.deltaY > 0 && b(K), x && K.deltaY < 0 && x(K), T && T(K), M && K.deltaY < 0 != $ < 0 && M(K), $ = K.deltaY, tu[0] = tu[1] = tu[2] = 0), (W || V) && (E && E(K), V && (p && 1 === V && p(K), g && g(K), V = 0), W = !1), G && (G = !1, 1) && U && U(K), H && (z(K), H = !1), j = 0
                    },
                    tp = function(t, e, r) {
                        to[r] += t, tu[r] += e, K._vx.update(t), K._vy.update(e), a ? j || (j = requestAnimationFrame(th)) : th()
                    },
                    td = function(t, e) {
                        X && !Q && (K.axis = Q = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), "y" !== Q && (to[2] += t, K._vx.update(t, !0)), "x" !== Q && (tu[2] += e, K._vy.update(e, !0)), a ? j || (j = requestAnimationFrame(th)) : th()
                    },
                    tg = function(t) {
                        if (!tf(t, 1)) {
                            var e = (t = im(t, o)).clientX,
                                n = t.clientY,
                                i = e - K.x,
                                s = n - K.y,
                                a = K.isDragging;
                            K.x = e, K.y = n, (a || (i || s) && (Math.abs(K.startX - e) >= r || Math.abs(K.startY - n) >= r)) && (V || (V = a ? 2 : 1), a || (K.isDragging = !0), td(i, s))
                        }
                    },
                    t_ = K.onPress = function(t) {
                        tf(t, 1) || t && t.button || (K.axis = Q = null, q.pause(), K.isPressed = !0, t = im(t), Z = $ = 0, K.startX = K.x = t.clientX, K.startY = K.y = t.clientY, K._vx.reset(), K._vy.reset(), ii(P ? i : ta, n1[1], tg, J, !0), K.deltaX = K.deltaY = 0, _ && _(K))
                    },
                    tm = K.onRelease = function(t) {
                        if (!tf(t, 1)) {
                            is(P ? i : ta, n1[1], tg, !0);
                            var e = !isNaN(K.y - K.startY),
                                r = K.isDragging,
                                n = r && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                                s = im(t);
                            !n && e && (K._vx.reset(), K._vy.reset(), o && B && nq.delayedCall(.08, function() {
                                if (n9() - tl > 300 && !t.defaultPrevented) {
                                    if (t.target.click) t.target.click();
                                    else if (ta.createEvent) {
                                        var e = ta.createEvent("MouseEvents");
                                        e.initMouseEvent("click", !0, !0, nW, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                    }
                                }
                            })), K.isDragging = K.isGesturing = K.isPressed = !1, u && r && !P && q.restart(!0), V && th(), d && r && d(K), m && m(K, n)
                        }
                    },
                    tv = function(t) {
                        return t.touches && t.touches.length > 1 && (K.isGesturing = !0) && D(t, K.isDragging)
                    },
                    ty = function() {
                        return K.isGesturing = !1, R(K)
                    },
                    tx = function(t) {
                        if (!tf(t)) {
                            var e = tt(),
                                r = te();
                            tp((e - tr) * L, (r - tn) * L, 1), tr = e, tn = r, u && q.restart(!0)
                        }
                    },
                    tb = function(t) {
                        if (!tf(t)) {
                            t = im(t, o), z && (H = !0);
                            var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? nW.innerHeight : 1) * f;
                            tp(t.deltaX * e, t.deltaY * e, 0), u && !P && q.restart(!0)
                        }
                    },
                    tw = function(t) {
                        if (!tf(t)) {
                            var e = t.clientX,
                                r = t.clientY,
                                n = e - K.x,
                                i = r - K.y;
                            K.x = e, K.y = r, W = !0, u && q.restart(!0), (n || i) && td(n, i)
                        }
                    },
                    tT = function(t) {
                        K.event = t, A(K)
                    },
                    tk = function(t) {
                        K.event = t, C(K)
                    },
                    tO = function(t) {
                        return tf(t) || im(t, o) && I(K)
                    };
                q = K._dc = nq.delayedCall(l || .25, function() {
                    K._vx.reset(), K._vy.reset(), q.pause(), u && u(K)
                }).pause(), K.deltaX = K.deltaY = 0, K._vx = i_(0, 50, !0), K._vy = i_(0, 50, !0), K.scrollX = tt, K.scrollY = te, K.isDragging = K.isGesturing = K.isPressed = !1, n2(this), K.enable = function(t) {
                    return !K.isEnabled && (ii(ts ? ta : i, "scroll", iu), n.indexOf("scroll") >= 0 && ii(ts ? ta : i, "scroll", tx, J, Y), n.indexOf("wheel") >= 0 && ii(i, "wheel", tb, J, Y), (n.indexOf("touch") >= 0 && nK || n.indexOf("pointer") >= 0) && (ii(i, n1[0], t_, J, Y), ii(ta, n1[2], tm), ii(ta, n1[3], tm), B && ii(i, "click", tc, !0, !0), I && ii(i, "click", tO), D && ii(ta, "gesturestart", tv), R && ii(ta, "gestureend", ty), A && ii(i, nZ + "enter", tT), C && ii(i, nZ + "leave", tk), E && ii(i, nZ + "move", tw)), K.isEnabled = !0, K.isDragging = K.isGesturing = K.isPressed = W = V = !1, K._vx.reset(), K._vy.reset(), tr = tt(), tn = te(), t && t.type && t_(t), F && F(K)), K
                }, K.disable = function() {
                    K.isEnabled && (n8.filter(function(t) {
                        return t !== K && ir(t.target)
                    }).length || is(ts ? ta : i, "scroll", iu), K.isPressed && (K._vx.reset(), K._vy.reset(), is(P ? i : ta, n1[1], tg, !0)), is(ts ? ta : i, "scroll", tx, Y), is(i, "wheel", tb, Y), is(i, n1[0], t_, Y), is(ta, n1[2], tm), is(ta, n1[3], tm), is(i, "click", tc, !0), is(i, "click", tO), is(ta, "gesturestart", tv), is(ta, "gestureend", ty), is(i, nZ + "enter", tT), is(i, nZ + "leave", tk), is(i, nZ + "move", tw), K.isEnabled = K.isPressed = K.isDragging = !1, N && N(K))
                }, K.kill = K.revert = function() {
                    K.disable();
                    var t = n8.indexOf(K);
                    t >= 0 && n8.splice(t, 1), n0 === K && (n0 = 0)
                }, n8.push(K), P && ir(i) && (n0 = K), K.enable(h)
            }, t = [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }],
            function(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }(e.prototype, t), e
    }();
    ib.version = "3.14.2", ib.create = function(t) {
        return new ib(t)
    }, ib.register = ix, ib.getAll = function() {
        return n8.slice()
    }, ib.getById = function(t) {
        return n8.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, n5() && nq.registerPlugin(ib);
    var iw, iT, ik, iO, iM, iA, iC, iE, iS, iP, iD, iR, iz, iF, iN, iI, iL, iY, iB, iX, iU, ij, iq, iV, iW, iH, iG, iQ, iK, iZ, i$, iJ, i0, i1, i2, i5, i3, i8, i4 = 1,
        i6 = Date.now,
        i9 = i6(),
        i7 = 0,
        st = 0,
        se = function(t, e, r) {
            var n = sg(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t
        },
        sr = function(t, e) {
            return e && (!sg(t) || "clamp(" !== t.substr(0, 6)) ? "clamp(" + t + ")" : t
        },
        sn = function() {
            return iF = 1
        },
        si = function() {
            return iF = 0
        },
        ss = function(t) {
            return t
        },
        sa = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        so = function() {
            return "undefined" != typeof window
        },
        su = function() {
            return iw || so() && (iw = window.gsap) && iw.registerPlugin && iw
        },
        sl = function(t) {
            return !!~iC.indexOf(t)
        },
        sc = function(t) {
            return ("Height" === t ? i$ : ik["inner" + t]) || iM["client" + t] || iA["client" + t]
        },
        sf = function(t) {
            return ie(t, "getBoundingClientRect") || (sl(t) ? function() {
                return av.width = ik.innerWidth, av.height = i$, av
            } : function() {
                return sI(t)
            })
        },
        sh = function(t, e, r) {
            var n = r.d,
                i = r.d2,
                s = r.a;
            return (s = ie(t, "getBoundingClientRect")) ? function() {
                return s()[n]
            } : function() {
                return (e ? sc(i) : t["client" + i]) || 0
            }
        },
        sp = function(t, e) {
            var r = e.s,
                n = e.d2,
                i = e.d,
                s = e.a;
            return Math.max(0, (s = ie(t, r = "scroll" + n)) ? s() - sf(t)()[i] : sl(t) ? (iM[r] || iA[r]) - sc(n) : t[r] - t["offset" + n])
        },
        sd = function(t, e) {
            for (var r = 0; r < iB.length; r += 3)(!e || ~e.indexOf(iB[r + 1])) && t(iB[r], iB[r + 1], iB[r + 2])
        },
        sg = function(t) {
            return "string" == typeof t
        },
        s_ = function(t) {
            return "function" == typeof t
        },
        sm = function(t) {
            return "number" == typeof t
        },
        sv = function(t) {
            return "object" == typeof t
        },
        sy = function(t, e, r) {
            return t && t.progress(+!e) && r && t.pause()
        },
        sx = function(t, e) {
            if (t.enabled) {
                var r = t._ctx ? t._ctx.add(function() {
                    return e(t)
                }) : e(t);
                r && r.totalTime && (t.callbackAnimation = r)
            }
        },
        sb = Math.abs,
        sw = "left",
        sT = "right",
        sk = "bottom",
        sO = "width",
        sM = "height",
        sA = "Right",
        sC = "Left",
        sE = "Bottom",
        sS = "padding",
        sP = "margin",
        sD = "Width",
        sR = "Height",
        sz = function(t) {
            return ik.getComputedStyle(t)
        },
        sF = function(t) {
            var e = sz(t).position;
            t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
        },
        sN = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        sI = function(t, e) {
            var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== sz(t)[iN] && iw.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        sL = function(t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0
        },
        sY = function(t) {
            var e, r = [],
                n = t.labels,
                i = t.duration();
            for (e in n) r.push(n[e] / i);
            return r
        },
        sB = function(t) {
            var e = iw.utils.snap(t),
                r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                    return t - e
                });
            return r ? function(t, n, i) {
                var s;
                if (void 0 === i && (i = .001), !n) return e(t);
                if (n > 0) {
                    for (t -= i, s = 0; s < r.length; s++)
                        if (r[s] >= t) return r[s];
                    return r[s - 1]
                }
                for (s = r.length, t += i; s--;)
                    if (r[s] <= t) return r[s];
                return r[0]
            } : function(r, n, i) {
                void 0 === i && (i = .001);
                var s = e(r);
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
            }
        },
        sX = function(t, e, r, n) {
            return r.split(",").forEach(function(r) {
                return t(e, r, n)
            })
        },
        sU = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !n,
                capture: !!i
            })
        },
        sj = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        sq = function(t, e, r) {
            (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
        },
        sV = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        sW = {
            toggleActions: "play",
            anticipatePin: 0
        },
        sH = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        sG = function(t, e) {
            if (sg(t)) {
                var r = t.indexOf("="),
                    n = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in sH ? sH[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        sQ = function(t, e, r, n, i, s, a, o) {
            var u = i.startColor,
                l = i.endColor,
                c = i.fontSize,
                f = i.indent,
                h = i.fontWeight,
                p = iO.createElement("div"),
                d = sl(r) || "fixed" === ie(r, "pinType"),
                g = -1 !== t.indexOf("scroller"),
                _ = d ? iA : r,
                m = -1 !== t.indexOf("start"),
                v = m ? u : l,
                y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + ((g || o) && d ? "fixed;" : "absolute;"), (g || o || !d) && (y += (n === ih ? sT : sk) + ":" + (s + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), p.style.cssText = y, p.innerText = e || 0 === e ? t + "-" + e : t, _.children[0] ? _.insertBefore(p, _.children[0]) : _.appendChild(p), p._offset = p["offset" + n.op.d2], sK(p, 0, n, m), p
        },
        sK = function(t, e, r, n) {
            var i = {
                    display: "block"
                },
                s = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + sD] = 1, i["border" + a + sD] = 0, i[r.p] = e + "px", iw.set(t, i)
        },
        sZ = [],
        s$ = {},
        sJ = function() {
            return i6() - i7 > 34 && (i2 || (i2 = requestAnimationFrame(al)))
        },
        s0 = function() {
            iq && iq.isPressed && !(iq.startX > iA.clientWidth) || (n4.cache++, iq ? i2 || (i2 = requestAnimationFrame(al)) : al(), i7 || s4("scrollStart"), i7 = i6())
        },
        s1 = function() {
            iH = ik.innerWidth, iW = ik.innerHeight
        },
        s2 = function(t) {
            n4.cache++, (!0 === t || !iz && !ij && !iO.fullscreenElement && !iO.webkitFullscreenElement && (!iV || iH !== ik.innerWidth || Math.abs(ik.innerHeight - iW) > .25 * ik.innerHeight)) && iE.restart(!0)
        },
        s5 = {},
        s3 = [],
        s8 = function t() {
            return sj(aO, "scrollEnd", t) || aa(!0)
        },
        s4 = function(t) {
            return s5[t] && s5[t].map(function(t) {
                return t()
            }) || s3
        },
        s6 = [],
        s9 = function(t) {
            for (var e = 0; e < s6.length; e += 5)(!t || s6[e + 4] && s6[e + 4].query === t) && (s6[e].style.cssText = s6[e + 1], s6[e].getBBox && s6[e].setAttribute("transform", s6[e + 2] || ""), s6[e + 3].uncache = 1)
        },
        s7 = function() {
            return n4.forEach(function(t) {
                return s_(t) && ++t.cacheID && (t.rec = t())
            })
        },
        at = function(t, e) {
            var r;
            for (iI = 0; iI < sZ.length; iI++)(r = sZ[iI]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
            iJ = !0, e && s9(e), e || s4("revert")
        },
        ae = function(t, e) {
            n4.cache++, (e || !i5) && n4.forEach(function(t) {
                return s_(t) && t.cacheID++ && (t.rec = 0)
            }), sg(t) && (ik.history.scrollRestoration = iK = t)
        },
        ar = 0,
        an = function() {
            if (i3 !== ar) {
                var t = i3 = ar;
                requestAnimationFrame(function() {
                    return t === ar && aa(!0)
                })
            }
        },
        ai = function() {
            iA.appendChild(iZ), i$ = !iq && iZ.offsetHeight || ik.innerHeight, iA.removeChild(iZ)
        },
        as = function(t) {
            return iS(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
                return e.style.display = t ? "none" : "block"
            })
        },
        aa = function(t, e) {
            if (iM = iO.documentElement, iA = iO.body, iC = [ik, iO, iM, iA], i7 && !t && !iJ) return void sU(aO, "scrollEnd", s8);
            ai(), i5 = aO.isRefreshing = !0, iJ || s7();
            var r = s4("refreshInit");
            iX && aO.sort(), e || at(), n4.forEach(function(t) {
                s_(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
            }), sZ.slice(0).forEach(function(t) {
                return t.refresh()
            }), iJ = !1, sZ.forEach(function(t) {
                if (t._subPinOffset && t.pin) {
                    var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        r = t.pin[e];
                    t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                }
            }), i0 = 1, as(!0), sZ.forEach(function(t) {
                var e = sp(t.scroller, t._dir),
                    r = "max" === t.vars.end || t._endClamp && t.end > e,
                    n = t._startClamp && t.start >= e;
                (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
            }), as(!1), i0 = 0, r.forEach(function(t) {
                return t && t.render && t.render(-1)
            }), n4.forEach(function(t) {
                s_(t) && (t.smooth && requestAnimationFrame(function() {
                    return t.target.style.scrollBehavior = "smooth"
                }), t.rec && t(t.rec))
            }), ae(iK, 1), iE.pause(), ar++, i5 = 2, al(2), sZ.forEach(function(t) {
                return s_(t.vars.onRefresh) && t.vars.onRefresh(t)
            }), i5 = aO.isRefreshing = !1, s4("refresh")
        },
        ao = 0,
        au = 1,
        al = function(t) {
            if (2 === t || !i5 && !iJ) {
                aO.isUpdating = !0, i8 && i8.update(0);
                var e = sZ.length,
                    r = i6(),
                    n = r - i9 >= 50,
                    i = e && sZ[0].scroll();
                if (au = ao > i ? -1 : 1, i5 || (ao = i), n && (i7 && !iF && r - i7 > 200 && (i7 = 0, s4("scrollEnd")), iD = i9, i9 = r), au < 0) {
                    for (iI = e; iI-- > 0;) sZ[iI] && sZ[iI].update(0, n);
                    au = 1
                } else
                    for (iI = 0; iI < e; iI++) sZ[iI] && sZ[iI].update(0, n);
                aO.isUpdating = !1
            }
            i2 = 0
        },
        ac = [sw, "top", sk, sT, sP + sE, sP + sA, sP + "Top", sP + sC, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        af = ac.concat([sO, sM, "boxSizing", "max" + sD, "max" + sR, "position", sP, sS, sS + "Top", sS + sA, sS + sE, sS + sC]),
        ah = function(t, e, r) {
            ag(r);
            var n = t._gsap;
            if (n.spacerIsNative) ag(n.spacerState);
            else if (t._gsap.swappedIn) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e))
            }
            t._gsap.swappedIn = !1
        },
        ap = function(t, e, r, n) {
            if (!t._gsap.swappedIn) {
                for (var i, s = ac.length, a = e.style, o = t.style; s--;) a[i = ac[s]] = r[i];
                a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), o[sk] = o[sT] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[sO] = sL(t, ic) + "px", a[sM] = sL(t, ih) + "px", a[sS] = o[sP] = o.top = o[sw] = "0", ag(n), o[sO] = o["max" + sD] = r[sO], o[sM] = o["max" + sR] = r[sM], o[sS] = r[sS], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
            }
        },
        ad = /([A-Z])/g,
        ag = function(t) {
            if (t) {
                var e, r, n = t.t.style,
                    i = t.length,
                    s = 0;
                for ((t.t._gsap || iw.core.getCache(t.t)).uncache = 1; s < i; s += 2) r = t[s + 1], e = t[s], r ? n[e] = r : n[e] && n.removeProperty(e.replace(ad, "-$1").toLowerCase())
            }
        },
        a_ = function(t) {
            for (var e = af.length, r = t.style, n = [], i = 0; i < e; i++) n.push(af[i], r[af[i]]);
            return n.t = t, n
        },
        am = function(t, e, r) {
            for (var n, i = [], s = t.length, a = 8 * !!r; a < s; a += 2) n = t[a], i.push(n, n in e ? e[n] : t[a + 1]);
            return i.t = t.t, i
        },
        av = {
            left: 0,
            top: 0
        },
        ay = function(t, e, r, n, i, s, a, o, u, l, c, f, h, p) {
            s_(t) && (t = t(o)), sg(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? sG("0" + t.substr(3), r) : 0));
            var d, g, _, m = h ? h.time() : 0;
            if (h && h.seek(0), isNaN(t) || (t *= 1), sm(t)) h && (t = iw.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, f, t)), a && sK(a, r, n, !0);
            else {
                s_(e) && (e = e(o));
                var v, y, x, b, w = (t || "0").split(" ");
                (v = sI(_ = ip(e, o) || iA) || {}).left || v.top || "none" !== sz(_).display || (b = _.style.display, _.style.display = "block", v = sI(_), b ? _.style.display = b : _.style.removeProperty("display")), y = sG(w[0], v[n.d]), x = sG(w[1] || "0", r), t = v[n.p] - u[n.p] - l + y + i - x, a && sK(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x
            }
            if (p && (o[p] = t || -.001, t < 0 && (t = 0)), s) {
                var T = t + r,
                    k = s._isStart;
                d = "scroll" + n.d2, sK(s, T, n, k && T > 20 || !k && (c ? Math.max(iA[d], iM[d]) : s.parentNode[d]) <= T + 1), c && (u = sI(a), c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + "px"))
            }
            return h && _ && (d = sI(_), h.seek(f), g = sI(_), h._caScrollDist = d[n.p] - g[n.p], t = t / h._caScrollDist * f), h && h.seek(m), h ? t : Math.round(t)
        },
        ax = /(webkit|moz|length|cssText|inset)/i,
        ab = function(t, e, r, n) {
            if (t.parentNode !== e) {
                var i, s, a = t.style;
                if (e === iA) {
                    for (i in t._stOrig = a.cssText, s = sz(t)) + i || ax.test(i) || !s[i] || "string" != typeof a[i] || "0" === i || (a[i] = s[i]);
                    a.top = r, a.left = n
                } else a.cssText = t._stOrig;
                iw.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        },
        aw = function(t, e, r) {
            var n = e,
                i = n;
            return function(e) {
                var s = Math.round(t());
                return s !== n && s !== i && Math.abs(s - n) > 3 && Math.abs(s - i) > 3 && (e = s, r && r()), i = n, n = Math.round(e)
            }
        },
        aT = function(t, e, r) {
            var n = {};
            n[e.p] = "+=" + r, iw.set(t, n)
        },
        ak = function(t, e) {
            var r = ig(t, e),
                n = "_scroll" + e.p2,
                i = function e(i, s, a, o, u) {
                    var l = e.tween,
                        c = s.onComplete,
                        f = {};
                    a = a || r();
                    var h = aw(r, a, function() {
                        l.kill(), e.tween = 0
                    });
                    return u = o && u || 0, o = o || i - a, l && l.kill(), s[n] = i, s.inherit = !1, s.modifiers = f, f[n] = function() {
                        return h(a + o * l.ratio + u * l.ratio * l.ratio)
                    }, s.onUpdate = function() {
                        n4.cache++, e.tween && al()
                    }, s.onComplete = function() {
                        e.tween = 0, c && c.call(l)
                    }, l = e.tween = iw.to(t, s)
                };
            return t[n] = r, r.wheelHandler = function() {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }, sU(t, "wheel", r.wheelHandler), aO.isTouch && sU(t, "touchmove", r.wheelHandler), i
        },
        aO = function() {
            function t(e, r) {
                iT || t.register(iw) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), iQ(this), this.init(e, r)
            }
            return t.prototype.init = function(e, r) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !st) {
                    this.update = this.refresh = this.kill = ss;
                    return
                }
                var n, i, s, a, o, u, l, c, f, h, p, d, g, _, m, v, y, x, b, w, T, k, O, M, A, C, E, S, P, D, R, z, F, N, I, L, Y, B, X, U, j, q = e = sN(sg(e) || sm(e) || e.nodeType ? {
                        trigger: e
                    } : e, sW),
                    V = q.onUpdate,
                    W = q.toggleClass,
                    H = q.id,
                    G = q.onToggle,
                    Q = q.onRefresh,
                    K = q.scrub,
                    Z = q.trigger,
                    $ = q.pin,
                    J = q.pinSpacing,
                    tt = q.invalidateOnRefresh,
                    te = q.anticipatePin,
                    tr = q.onScrubComplete,
                    tn = q.onSnapComplete,
                    ti = q.once,
                    ts = q.snap,
                    ta = q.pinReparent,
                    to = q.pinSpacer,
                    tu = q.containerAnimation,
                    tl = q.fastScrollEnd,
                    tc = q.preventOverlaps,
                    tf = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ic : ih,
                    th = !K && 0 !== K,
                    tp = ip(e.scroller || ik),
                    td = iw.core.getCache(tp),
                    tg = sl(tp),
                    t_ = ("pinType" in e ? e.pinType : ie(tp, "pinType") || tg && "fixed") === "fixed",
                    tm = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    tv = th && e.toggleActions.split(" "),
                    ty = "markers" in e ? e.markers : sW.markers,
                    tx = tg ? 0 : parseFloat(sz(tp)["border" + tf.p2 + sD]) || 0,
                    tb = this,
                    tw = e.onRefreshInit && function() {
                        return e.onRefreshInit(tb)
                    },
                    tT = sh(tp, tg, tf),
                    tk = !tg || ~n6.indexOf(tp) ? sf(tp) : function() {
                        return av
                    },
                    tO = 0,
                    tM = 0,
                    tA = 0,
                    tC = ig(tp, tf);
                if (tb._startClamp = tb._endClamp = !1, tb._dir = tf, te *= 45, tb.scroller = tp, tb.scroll = tu ? tu.time.bind(tu) : tC, u = tC(), tb.vars = e, r = r || e.animation, "refreshPriority" in e && (iX = 1, -9999 === e.refreshPriority && (i8 = tb)), td.tweenScroll = td.tweenScroll || {
                        top: ak(tp, ih),
                        left: ak(tp, ic)
                    }, tb.tweenTo = s = td.tweenScroll[tf.p], tb.scrubDuration = function(t) {
                        (I = sm(t) && t) ? N ? N.duration(t) : N = iw.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: I,
                            paused: !0,
                            onComplete: function() {
                                return tr && tr(tb)
                            }
                        }): (N && N.progress(1).kill(), N = 0)
                    }, r && (r.vars.lazy = !1, r._initted && !tb.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), tb.animation = r.pause(), r.scrollTrigger = tb, tb.scrubDuration(K), z = 0, H || (H = r.vars.id)), ts && ((!sv(ts) || ts.push) && (ts = {
                        snapTo: ts
                    }), "scrollBehavior" in iA.style && iw.set(tg ? [iA, iM] : tp, {
                        scrollBehavior: "auto"
                    }), n4.forEach(function(t) {
                        return s_(t) && t.target === (tg ? iO.scrollingElement || iM : tp) && (t.smooth = !1)
                    }), o = s_(ts.snapTo) ? ts.snapTo : "labels" === ts.snapTo ? (n = r, function(t) {
                        return iw.utils.snap(sY(n), t)
                    }) : "labelsDirectional" === ts.snapTo ? (i = r, function(t, e) {
                        return sB(sY(i))(t, e.direction)
                    }) : !1 !== ts.directional ? function(t, e) {
                        return sB(ts.snapTo)(t, i6() - tM < 500 ? 0 : e.direction)
                    } : iw.utils.snap(ts.snapTo), L = sv(L = ts.duration || {
                        min: .1,
                        max: 2
                    }) ? iP(L.min, L.max) : iP(L, L), Y = iw.delayedCall(ts.delay || I / 2 || .1, function() {
                        var t = tC(),
                            e = i6() - tM < 500,
                            n = s.tween;
                        if ((e || 10 > Math.abs(tb.getVelocity())) && !n && !iF && tO !== t) {
                            var i, a, u = (t - c) / v,
                                l = r && !th ? r.totalProgress() : u,
                                h = e ? 0 : (l - F) / (i6() - iD) * 1e3 || 0,
                                p = iw.utils.clamp(-u, 1 - u, sb(h / 2) * h / .185),
                                d = u + (!1 === ts.inertia ? 0 : p),
                                g = ts,
                                _ = g.onStart,
                                m = g.onInterrupt,
                                y = g.onComplete;
                            if (sm(i = o(d, tb)) || (i = d), a = Math.max(0, Math.round(c + i * v)), t <= f && t >= c && a !== t) {
                                if (n && !n._initted && n.data <= sb(a - t)) return;
                                !1 === ts.inertia && (p = i - u), s(a, {
                                    duration: L(sb(.185 * Math.max(sb(d - l), sb(i - l)) / h / .05 || 0)),
                                    ease: ts.ease || "power3",
                                    data: sb(a - t),
                                    onInterrupt: function() {
                                        return Y.restart(!0) && m && m(tb)
                                    },
                                    onComplete: function() {
                                        tb.update(), tO = tC(), r && !th && (N ? N.resetTo("totalProgress", i, r._tTime / r._tDur) : r.progress(i)), z = F = r && !th ? r.totalProgress() : tb.progress, tn && tn(tb), y && y(tb)
                                    }
                                }, t, p * v, a - t - p * v), _ && _(tb, s.tween)
                            }
                        } else tb.isActive && tO !== t && Y.restart(!0)
                    }).pause()), H && (s$[H] = tb), (j = (Z = tb.trigger = ip(Z || !0 !== $ && $)) && Z._gsap && Z._gsap.stRevert) && (j = j(tb)), $ = !0 === $ ? Z : ip($), sg(W) && (W = {
                        targets: Z,
                        className: W
                    }), $ && (!1 === J || J === sP || (J = (!!J || !$.parentNode || !$.parentNode.style || "flex" !== sz($.parentNode).display) && sS), tb.pin = $, (a = iw.core.getCache($)).spacer ? y = a.pinState : (to && ((to = ip(to)) && !to.nodeType && (to = to.current || to.nativeElement), a.spacerIsNative = !!to, to && (a.spacerState = a_(to))), a.spacer = w = to || iO.createElement("div"), w.classList.add("pin-spacer"), H && w.classList.add("pin-spacer-" + H), a.pinState = y = a_($)), !1 !== e.force3D && iw.set($, {
                        force3D: !0
                    }), tb.spacer = w = a.spacer, C = (R = sz($))[J + tf.os2], k = iw.getProperty($), O = iw.quickSetter($, tf.a, "px"), ap($, w, R), b = a_($)), ty) {
                    _ = sv(ty) ? sN(ty, sV) : sV, d = sQ("scroller-start", H, tp, tf, _, 0), g = sQ("scroller-end", H, tp, tf, _, 0, d), T = d["offset" + tf.op.d2];
                    var tE = ip(ie(tp, "content") || tp);
                    h = this.markerStart = sQ("start", H, tE, tf, _, T, 0, tu), p = this.markerEnd = sQ("end", H, tE, tf, _, T, 0, tu), tu && (U = iw.quickSetter([h, p], tf.a, "px")), t_ || n6.length && !0 === ie(tp, "fixedMarkers") || (sF(tg ? iA : tp), iw.set([d, g], {
                        force3D: !0
                    }), S = iw.quickSetter(d, tf.a, "px"), D = iw.quickSetter(g, tf.a, "px"))
                }
                if (tu) {
                    var tS = tu.vars.onUpdate,
                        tP = tu.vars.onUpdateParams;
                    tu.eventCallback("onUpdate", function() {
                        tb.update(0, 0, 1), tS && tS.apply(tu, tP || [])
                    })
                }
                if (tb.previous = function() {
                        return sZ[sZ.indexOf(tb) - 1]
                    }, tb.next = function() {
                        return sZ[sZ.indexOf(tb) + 1]
                    }, tb.revert = function(t, e) {
                        if (!e) return tb.kill(!0);
                        var n = !1 !== t || !tb.enabled,
                            i = iz;
                        n !== tb.isReverted && (n && (B = Math.max(tC(), tb.scroll.rec || 0), tA = tb.progress, X = r && r.progress()), h && [h, p, d, g].forEach(function(t) {
                            return t.style.display = n ? "none" : "block"
                        }), n && (iz = tb, tb.update(n)), !$ || ta && tb.isActive || (n ? ah($, w, y) : ap($, w, sz($), E)), n || tb.update(n), iz = i, tb.isReverted = n)
                    }, tb.refresh = function(n, i, a, o) {
                        if (!iz && tb.enabled || i) {
                            if ($ && n && i7) return void sU(t, "scrollEnd", s8);
                            !i5 && tw && tw(tb), iz = tb, s.tween && !a && (s.tween.kill(), s.tween = 0), N && N.pause(), tt && r && (r.revert({
                                kill: !1
                            }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                                return t.vars.immediateRender && t.render(0, !0, !0)
                            }) : r.vars.immediateRender && r.render(0, !0, !0)), tb.isReverted || tb.revert(!0, !0), tb._subPinOffset = !1;
                            var _, T, O, C, S, D, R, z, F, I, L, U, j, q = tT(),
                                V = tk(),
                                W = tu ? tu.duration() : sp(tp, tf),
                                H = v <= .01 || !v,
                                G = 0,
                                K = o || 0,
                                te = sv(a) ? a.end : e.end,
                                tr = e.endTrigger || Z,
                                tn = sv(a) ? a.start : e.start || (0 !== e.start && Z ? $ ? "0 0" : "0 100%" : 0),
                                ti = tb.pinnedContainer = e.pinnedContainer && ip(e.pinnedContainer, tb),
                                ts = Z && Math.max(0, sZ.indexOf(tb)) || 0,
                                to = ts;
                            for (ty && sv(a) && (U = iw.getProperty(d, tf.p), j = iw.getProperty(g, tf.p)); to-- > 0;)(D = sZ[to]).end || D.refresh(0, 1) || (iz = tb), (R = D.pin) && (R === Z || R === $ || R === ti) && !D.isReverted && (I || (I = []), I.unshift(D), D.revert(!0, !0)), D !== sZ[to] && (ts--, to--);
                            for (s_(tn) && (tn = tn(tb)), c = ay(tn = se(tn, "start", tb), Z, q, tf, tC(), h, d, tb, V, tx, t_, W, tu, tb._startClamp && "_startClamp") || ($ ? -.001 : 0), s_(te) && (te = te(tb)), sg(te) && !te.indexOf("+=") && (~te.indexOf(" ") ? te = (sg(tn) ? tn.split(" ")[0] : "") + te : (G = sG(te.substr(2), q), te = sg(tn) ? tn : (tu ? iw.utils.mapRange(0, tu.duration(), tu.scrollTrigger.start, tu.scrollTrigger.end, c) : c) + G, tr = Z)), te = se(te, "end", tb), f = Math.max(c, ay(te || (tr ? "100% 0" : W), tr, q, tf, tC() + G, p, g, tb, V, tx, t_, W, tu, tb._endClamp && "_endClamp")) || -.001, G = 0, to = ts; to--;)(R = (D = sZ[to] || {}).pin) && D.start - D._pinPush <= c && !tu && D.end > 0 && (_ = D.end - (tb._startClamp ? Math.max(0, D.start) : D.start), (R === Z && D.start - D._pinPush < c || R === ti) && isNaN(tn) && (G += _ * (1 - D.progress)), R === $ && (K += _));
                            if (c += G, f += G, tb._startClamp && (tb._startClamp += G), tb._endClamp && !i5 && (tb._endClamp = f || -.001, f = Math.min(f, sp(tp, tf))), v = f - c || (c -= .01) && .001, H && (tA = iw.utils.clamp(0, 1, iw.utils.normalize(c, f, B))), tb._pinPush = K, h && G && ((_ = {})[tf.a] = "+=" + G, ti && (_[tf.p] = "-=" + tC()), iw.set([h, p], _)), $ && !(i0 && tb.end >= sp(tp, tf))) _ = sz($), C = tf === ih, O = tC(), M = parseFloat(k(tf.a)) + K, !W && f > 1 && (L = {
                                style: L = (tg ? iO.scrollingElement || iM : tp).style,
                                value: L["overflow" + tf.a.toUpperCase()]
                            }, tg && "scroll" !== sz(iA)["overflow" + tf.a.toUpperCase()] && (L.style["overflow" + tf.a.toUpperCase()] = "scroll")), ap($, w, _), b = a_($), T = sI($, !0), z = t_ && ig(tp, C ? ic : ih)(), J ? ((E = [J + tf.os2, v + K + "px"]).t = w, (to = J === sS ? sL($, tf) + v + K : 0) && (E.push(tf.d, to + "px"), "auto" !== w.style.flexBasis && (w.style.flexBasis = to + "px")), ag(E), ti && sZ.forEach(function(t) {
                                t.pin === ti && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                            }), t_ && tC(B)) : (to = sL($, tf)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = to + "px"), t_ && ((S = {
                                top: T.top + (C ? O - c : z) + "px",
                                left: T.left + (C ? z : O - c) + "px",
                                boxSizing: "border-box",
                                position: "fixed"
                            })[sO] = S["max" + sD] = Math.ceil(T.width) + "px", S[sM] = S["max" + sR] = Math.ceil(T.height) + "px", S[sP] = S[sP + "Top"] = S[sP + sA] = S[sP + sE] = S[sP + sC] = "0", S[sS] = _[sS], S[sS + "Top"] = _[sS + "Top"], S[sS + sA] = _[sS + sA], S[sS + sE] = _[sS + sE], S[sS + sC] = _[sS + sC], x = am(y, S, ta), i5 && tC(0)), r ? (F = r._initted, iU(1), r.render(r.duration(), !0, !0), A = k(tf.a) - M + v + K, P = Math.abs(v - A) > 1, t_ && P && x.splice(x.length - 2, 2), r.render(0, !0, !0), F || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), iU(0)) : A = v, L && (L.value ? L.style["overflow" + tf.a.toUpperCase()] = L.value : L.style.removeProperty("overflow-" + tf.a));
                            else if (Z && tC() && !tu)
                                for (T = Z.parentNode; T && T !== iA;) T._pinOffset && (c -= T._pinOffset, f -= T._pinOffset), T = T.parentNode;
                            I && I.forEach(function(t) {
                                return t.revert(!1, !0)
                            }), tb.start = c, tb.end = f, u = l = i5 ? B : tC(), tu || i5 || (u < B && tC(B), tb.scroll.rec = 0), tb.revert(!1, !0), tM = i6(), Y && (tO = -1, Y.restart(!0)), iz = 0, r && th && (r._initted || X) && r.progress() !== X && r.progress(X || 0, !0).render(r.time(), !0, !0), (H || tA !== tb.progress || tu || tt || r && !r._initted) && (r && !th && (r._initted || tA || !1 !== r.vars.immediateRender) && r.totalProgress(tu && c < -.001 && !tA ? iw.utils.normalize(c, f, 0) : tA, !0), tb.progress = H || (u - c) / v === tA ? 0 : tA), $ && J && (w._pinOffset = Math.round(tb.progress * A)), N && N.invalidate(), isNaN(U) || (U -= iw.getProperty(d, tf.p), j -= iw.getProperty(g, tf.p), aT(d, tf, U), aT(h, tf, U - (o || 0)), aT(g, tf, j), aT(p, tf, j - (o || 0))), H && !i5 && tb.update(), !Q || i5 || m || (m = !0, Q(tb), m = !1)
                        }
                    }, tb.getVelocity = function() {
                        return (tC() - l) / (i6() - iD) * 1e3 || 0
                    }, tb.endAnimation = function() {
                        sy(tb.callbackAnimation), r && (N ? N.progress(1) : r.paused() ? th || sy(r, tb.direction < 0, 1) : sy(r, r.reversed()))
                    }, tb.labelToScroll = function(t) {
                        return r && r.labels && (c || tb.refresh() || c) + r.labels[t] / r.duration() * v || 0
                    }, tb.getTrailing = function(t) {
                        var e = sZ.indexOf(tb),
                            r = tb.direction > 0 ? sZ.slice(0, e).reverse() : sZ.slice(e + 1);
                        return (sg(t) ? r.filter(function(e) {
                            return e.vars.preventOverlaps === t
                        }) : r).filter(function(t) {
                            return tb.direction > 0 ? t.end <= c : t.start >= f
                        })
                    }, tb.update = function(t, e, n) {
                        if (!tu || n || t) {
                            var i, a, o, h, p, g, _, m = !0 === i5 ? B : tb.scroll(),
                                y = t ? 0 : (m - c) / v,
                                T = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                                k = tb.progress;
                            if (e && (l = u, u = tu ? tC() : m, ts && (F = z, z = r && !th ? r.totalProgress() : T)), te && $ && !iz && !i4 && i7 && (!T && c < m + (m - l) / (i6() - iD) * te ? T = 1e-4 : 1 === T && f > m + (m - l) / (i6() - iD) * te && (T = .9999)), T !== k && tb.enabled) {
                                if (h = (p = (i = tb.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k, tb.direction = T > k ? 1 : -1, tb.progress = T, h && !iz && (a = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3, th && (o = !p && "none" !== tv[a + 1] && tv[a + 1] || tv[a], _ = r && ("complete" === o || "reset" === o || o in r))), tc && (p || _) && (_ || K || !r) && (s_(tc) ? tc(tb) : tb.getTrailing(tc).forEach(function(t) {
                                        return t.endAnimation()
                                    })), !th && (!N || iz || i4 ? r && r.totalProgress(T, !!(iz && (tM || t))) : (N._dp._time - N._start !== N._time && N.render(N._dp._time - N._start), N.resetTo ? N.resetTo("totalProgress", T, r._tTime / r._tDur) : (N.vars.totalProgress = T, N.invalidate().restart()))), $)
                                    if (t && J && (w.style[J + tf.os2] = C), t_) {
                                        if (h) {
                                            if (g = !t && T > k && f + 1 > m && m + 1 >= sp(tp, tf), ta)
                                                if (!t && (i || g)) {
                                                    var E = sI($, !0),
                                                        R = m - c;
                                                    ab($, iA, E.top + (tf === ih ? R : 0) + "px", E.left + (tf === ih ? 0 : R) + "px")
                                                } else ab($, w);
                                            ag(i || g ? x : b), P && T < 1 && i || O(M + (1 !== T || g ? 0 : A))
                                        }
                                    } else O(sa(M + A * T));
                                !ts || s.tween || iz || i4 || Y.restart(!0), W && (p || ti && T && (T < 1 || !i1)) && iS(W.targets).forEach(function(t) {
                                    return t.classList[i || ti ? "add" : "remove"](W.className)
                                }), !V || th || t || V(tb), h && !iz ? (th && (_ && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : "restart" === o ? r.restart(!0) : r[o]()), V && V(tb)), (p || !i1) && (G && p && sx(tb, G), tm[a] && sx(tb, tm[a]), ti && (1 === T ? tb.kill(!1, 1) : tm[a] = 0), !p && tm[a = 1 === T ? 1 : 3] && sx(tb, tm[a])), tl && !i && Math.abs(tb.getVelocity()) > (sm(tl) ? tl : 2500) && (sy(tb.callbackAnimation), N ? N.progress(1) : sy(r, "reverse" === o ? 1 : !T, 1))) : th && V && !iz && V(tb)
                            }
                            if (D) {
                                var I = tu ? m / tu.duration() * (tu._caScrollDist || 0) : m;
                                S(I + +!!d._isFlipped), D(I)
                            }
                            U && U(-m / tu.duration() * (tu._caScrollDist || 0))
                        }
                    }, tb.enable = function(e, r) {
                        tb.enabled || (tb.enabled = !0, sU(tp, "resize", s2), tg || sU(tp, "scroll", s0), tw && sU(t, "refreshInit", tw), !1 !== e && (tb.progress = tA = 0, u = l = tO = tC()), !1 !== r && tb.refresh())
                    }, tb.getTween = function(t) {
                        return t && s ? s.tween : N
                    }, tb.setPositions = function(t, e, r, n) {
                        if (tu) {
                            var i = tu.scrollTrigger,
                                s = tu.duration(),
                                a = i.end - i.start;
                            t = i.start + a * t / s, e = i.start + a * e / s
                        }
                        tb.refresh(!1, !1, {
                            start: sr(t, r && !!tb._startClamp),
                            end: sr(e, r && !!tb._endClamp)
                        }, n), tb.update()
                    }, tb.adjustPinSpacing = function(t) {
                        if (E && t) {
                            var e = E.indexOf(tf.d) + 1;
                            E[e] = parseFloat(E[e]) + t + "px", E[1] = parseFloat(E[1]) + t + "px", ag(E)
                        }
                    }, tb.disable = function(e, r) {
                        if (!1 !== e && tb.revert(!0, !0), tb.enabled && (tb.enabled = tb.isActive = !1, r || N && N.pause(), B = 0, a && (a.uncache = 1), tw && sj(t, "refreshInit", tw), Y && (Y.pause(), s.tween && s.tween.kill() && (s.tween = 0)), !tg)) {
                            for (var n = sZ.length; n--;)
                                if (sZ[n].scroller === tp && sZ[n] !== tb) return;
                            sj(tp, "resize", s2), tg || sj(tp, "scroll", s0)
                        }
                    }, tb.kill = function(t, n) {
                        tb.disable(t, n), N && !n && N.kill(), H && delete s$[H];
                        var i = sZ.indexOf(tb);
                        i >= 0 && sZ.splice(i, 1), i === iI && au > 0 && iI--, i = 0, sZ.forEach(function(t) {
                            return t.scroller === tb.scroller && (i = 1)
                        }), i || i5 || (tb.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                            kill: !1
                        }), n || r.kill()), h && [h, p, d, g].forEach(function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        }), i8 === tb && (i8 = 0), $ && (a && (a.uncache = 1), i = 0, sZ.forEach(function(t) {
                            return t.pin === $ && i++
                        }), i || (a.spacer = 0)), e.onKill && e.onKill(tb)
                    }, sZ.push(tb), tb.enable(!1, !1), j && j(tb), r && r.add && !v) {
                    var tD = tb.update;
                    tb.update = function() {
                        tb.update = tD, n4.cache++, c || f || tb.refresh()
                    }, iw.delayedCall(.01, tb.update), v = .01, c = f = 0
                } else tb.refresh();
                $ && an()
            }, t.register = function(e) {
                return iT || (iw = e || su(), so() && window.document && t.enable(), iT = st), iT
            }, t.defaults = function(t) {
                if (t)
                    for (var e in t) sW[e] = t[e];
                return sW
            }, t.disable = function(t, e) {
                st = 0, sZ.forEach(function(r) {
                    return r[e ? "kill" : "disable"](t)
                }), sj(ik, "wheel", s0), sj(iO, "scroll", s0), clearInterval(iR), sj(iO, "touchcancel", ss), sj(iA, "touchstart", ss), sX(sj, iO, "pointerdown,touchstart,mousedown", sn), sX(sj, iO, "pointerup,touchend,mouseup", si), iE.kill(), sd(sj);
                for (var r = 0; r < n4.length; r += 3) sq(sj, n4[r], n4[r + 1]), sq(sj, n4[r], n4[r + 2])
            }, t.enable = function() {
                if (ik = window, iM = (iO = document).documentElement, iA = iO.body, iw && (iS = iw.utils.toArray, iP = iw.utils.clamp, iQ = iw.core.context || ss, iU = iw.core.suppressOverwrites || ss, iK = ik.history.scrollRestoration || "auto", ao = ik.pageYOffset || 0, iw.core.globals("ScrollTrigger", t), iA)) {
                    st = 1, (iZ = document.createElement("div")).style.height = "100vh", iZ.style.position = "absolute", ai(),
                        function t() {
                            return st && requestAnimationFrame(t)
                        }(), ib.register(iw), t.isTouch = ib.isTouch, iG = ib.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), iV = 1 === ib.isTouch, sU(ik, "wheel", s0), iC = [ik, iO, iM, iA], iw.matchMedia ? (t.matchMedia = function(t) {
                            var e, r = iw.matchMedia();
                            for (e in t) r.add(e, t[e]);
                            return r
                        }, iw.addEventListener("matchMediaInit", function() {
                            s7(), at()
                        }), iw.addEventListener("matchMediaRevert", function() {
                            return s9()
                        }), iw.addEventListener("matchMedia", function() {
                            aa(0, 1), s4("matchMedia")
                        }), iw.matchMedia().add("(orientation: portrait)", function() {
                            return s1(), s1
                        })) : console.warn("Requires GSAP 3.11.0 or later"), s1(), sU(iO, "scroll", s0);
                    var e, r, n = iA.hasAttribute("style"),
                        i = iA.style,
                        s = i.borderTopStyle,
                        a = iw.core.Animation.prototype;
                    for (a.revert || Object.defineProperty(a, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), i.borderTopStyle = "solid", ih.m = Math.round((e = sI(iA)).top + ih.sc()) || 0, ic.m = Math.round(e.left + ic.sc()) || 0, s ? i.borderTopStyle = s : i.removeProperty("border-top-style"), n || (iA.setAttribute("style", ""), iA.removeAttribute("style")), iR = setInterval(sJ, 250), iw.delayedCall(.5, function() {
                            return i4 = 0
                        }), sU(iO, "touchcancel", ss), sU(iA, "touchstart", ss), sX(sU, iO, "pointerdown,touchstart,mousedown", sn), sX(sU, iO, "pointerup,touchend,mouseup", si), iN = iw.utils.checkPrefix("transform"), af.push(iN), iT = i6(), iE = iw.delayedCall(.2, aa).pause(), iB = [iO, "visibilitychange", function() {
                            var t = ik.innerWidth,
                                e = ik.innerHeight;
                            iO.hidden ? (iL = t, iY = e) : (iL !== t || iY !== e) && s2()
                        }, iO, "DOMContentLoaded", aa, ik, "load", aa, ik, "resize", s2], sd(sU), sZ.forEach(function(t) {
                            return t.enable(0, 1)
                        }), r = 0; r < n4.length; r += 3) sq(sj, n4[r], n4[r + 1]), sq(sj, n4[r], n4[r + 2])
                }
            }, t.config = function(e) {
                "limitCallbacks" in e && (i1 = !!e.limitCallbacks);
                var r = e.syncInterval;
                r && clearInterval(iR) || (iR = r) && setInterval(sJ, r), "ignoreMobileResize" in e && (iV = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (sd(sj) || sd(sU, e.autoRefreshEvents || "none"), ij = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var r = ip(t),
                    n = n4.indexOf(r),
                    i = sl(r);
                ~n && n4.splice(n, i ? 6 : 2), e && (i ? n6.unshift(ik, e, iA, e, iM, e) : n6.unshift(r, e))
            }, t.clearMatchMedia = function(t) {
                sZ.forEach(function(e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                })
            }, t.isInViewport = function(t, e, r) {
                var n = (sg(t) ? ip(t) : t).getBoundingClientRect(),
                    i = n[r ? sO : sM] * e || 0;
                return r ? n.right - i > 0 && n.left + i < ik.innerWidth : n.bottom - i > 0 && n.top + i < ik.innerHeight
            }, t.positionInViewport = function(t, e, r) {
                sg(t) && (t = ip(t));
                var n = t.getBoundingClientRect(),
                    i = n[r ? sO : sM],
                    s = null == e ? i / 2 : e in sH ? sH[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                return r ? (n.left + s) / ik.innerWidth : (n.top + s) / ik.innerHeight
            }, t.killAll = function(t) {
                if (sZ.slice(0).forEach(function(t) {
                        return "ScrollSmoother" !== t.vars.id && t.kill()
                    }), !0 !== t) {
                    var e = s5.killAll || [];
                    s5 = {}, e.forEach(function(t) {
                        return t()
                    })
                }
            }, t
        }();
    aO.version = "3.14.2", aO.saveStyles = function(t) {
        return t ? iS(t).forEach(function(t) {
            if (t && t.style) {
                var e = s6.indexOf(t);
                e >= 0 && s6.splice(e, 5), s6.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), iw.core.getCache(t), iQ())
            }
        }) : s6
    }, aO.revert = function(t, e) {
        return at(!t, e)
    }, aO.create = function(t, e) {
        return new aO(t, e)
    }, aO.refresh = function(t) {
        return t ? s2(!0) : (iT || aO.register()) && aa(!0)
    }, aO.update = function(t) {
        return ++n4.cache && al(2 * (!0 === t))
    }, aO.clearScrollMemory = ae, aO.maxScroll = function(t, e) {
        return sp(t, e ? ic : ih)
    }, aO.getScrollFunc = function(t, e) {
        return ig(ip(t), e ? ic : ih)
    }, aO.getById = function(t) {
        return s$[t]
    }, aO.getAll = function() {
        return sZ.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }, aO.isScrolling = function() {
        return !!i7
    }, aO.snapDirectional = sB, aO.addEventListener = function(t, e) {
        var r = s5[t] || (s5[t] = []);
        ~r.indexOf(e) || r.push(e)
    }, aO.removeEventListener = function(t, e) {
        var r = s5[t],
            n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    }, aO.batch = function(t, e) {
        var r, n = [],
            i = {},
            s = e.interval || .016,
            a = e.batchMax || 1e9,
            o = function(t, e) {
                var r = [],
                    n = [],
                    i = iw.delayedCall(s, function() {
                        e(r, n), r = [], n = []
                    }).pause();
                return function(t) {
                    r.length || i.restart(!0), r.push(t.trigger), n.push(t), a <= r.length && i.progress(1)
                }
            };
        for (r in e) i[r] = "on" === r.substr(0, 2) && s_(e[r]) && "onRefreshInit" !== r ? o(r, e[r]) : e[r];
        return s_(a) && (a = a(), sU(aO, "refresh", function() {
            return a = e.batchMax()
        })), iS(t).forEach(function(t) {
            var e = {};
            for (r in i) e[r] = i[r];
            e.trigger = t, n.push(aO.create(e))
        }), n
    };
    var aM, aA = function(t, e, r, n) {
            return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
        },
        aC = function t(e, r) {
            !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (ib.isTouch ? " pinch-zoom" : "") : "none", e === iM && t(iA, r)
        },
        aE = {
            auto: 1,
            scroll: 1
        },
        aS = function(t) {
            var e, r = t.event,
                n = t.target,
                i = t.axis,
                s = (r.changedTouches ? r.changedTouches[0] : r).target,
                a = s._gsap || iw.core.getCache(s),
                o = i6();
            if (!a._isScrollT || o - a._isScrollT > 2e3) {
                for (; s && s !== iA && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(aE[(e = sz(s)).overflowY] || aE[e.overflowX]));) s = s.parentNode;
                a._isScroll = s && s !== n && !sl(s) && (aE[(e = sz(s)).overflowY] || aE[e.overflowX]), a._isScrollT = o
            }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        aP = function(t, e, r, n) {
            return ib.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: n = n && aS,
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function() {
                    return r && sU(iO, ib.eventTypes[0], aR, !1, !0)
                },
                onDisable: function() {
                    return sj(iO, ib.eventTypes[0], aR, !0)
                }
            })
        },
        aD = /(input|label|select|textarea)/i,
        aR = function(t) {
            var e = aD.test(t.target.tagName);
            (e || aM) && (t._gsapAllow = !0, aM = e)
        },
        az = function(t) {
            sv(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
            var e, r, n, i, s, a, o, u, l = t,
                c = l.normalizeScrollX,
                f = l.momentum,
                h = l.allowNestedScroll,
                p = l.onRelease,
                d = ip(t.target) || iM,
                g = iw.core.globals().ScrollSmoother,
                _ = g && g.get(),
                m = iG && (t.content && ip(t.content) || _ && !1 !== t.content && !_.smooth() && _.content()),
                v = ig(d, ih),
                y = ig(d, ic),
                x = 1,
                b = (ib.isTouch && ik.visualViewport ? ik.visualViewport.scale * ik.visualViewport.width : ik.outerWidth) / ik.innerWidth,
                w = 0,
                T = s_(f) ? function() {
                    return f(e)
                } : function() {
                    return f || 2.8
                },
                k = aP(d, t.type, !0, h),
                O = function() {
                    return i = !1
                },
                M = ss,
                A = ss,
                C = function() {
                    r = sp(d, ih), A = iP(+!!iG, r), c && (M = iP(0, sp(d, ic))), n = ar
                },
                E = function() {
                    m._gsap.y = sa(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
                },
                S = function() {
                    if (i) {
                        requestAnimationFrame(O);
                        var t = sa(e.deltaY / 2),
                            r = A(v.v - t);
                        if (m && r !== v.v + v.offset) {
                            v.offset = r - v.v;
                            var n = sa((parseFloat(m && m._gsap.y) || 0) - v.offset);
                            m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", v.cacheID = n4.cache, al()
                        }
                        return !0
                    }
                    v.offset && E(), i = !0
                },
                P = function() {
                    C(), s.isActive() && s.vars.scrollY > r && (v() > r ? s.progress(1) && v(r) : s.resetTo("scrollY", r))
                };
            return m && iw.set(m, {
                y: "+=0"
            }), t.ignoreCheck = function(t) {
                return iG && "touchmove" === t.type && S(t) || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
            }, t.onPress = function() {
                i = !1;
                var t = x;
                x = sa((ik.visualViewport && ik.visualViewport.scale || 1) / b), s.pause(), t !== x && aC(d, x > 1.01 || !c && "x"), a = y(), o = v(), C(), n = ar
            }, t.onRelease = t.onGestureStart = function(t, e) {
                if (v.offset && E(), e) {
                    n4.cache++;
                    var n, i, a = T();
                    c && (i = (n = y()) + -(.05 * a * t.velocityX) / .227, a *= aA(y, n, i, sp(d, ic)), s.vars.scrollX = M(i)), i = (n = v()) + -(.05 * a * t.velocityY) / .227, a *= aA(v, n, i, sp(d, ih)), s.vars.scrollY = A(i), s.invalidate().duration(a).play(.01), (iG && s.vars.scrollY >= r || n >= r - 1) && iw.to({}, {
                        onUpdate: P,
                        duration: a
                    })
                } else u.restart(!0);
                p && p(t)
            }, t.onWheel = function() {
                s._ts && s.pause(), i6() - w > 1e3 && (n = 0, w = i6())
            }, t.onChange = function(t, e, r, i, s) {
                if (ar !== n && C(), e && c && y(M(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])), r) {
                    v.offset && E();
                    var u = s[2] === r,
                        l = u ? o + t.startY - t.y : v() + r - s[1],
                        f = A(l);
                    u && l !== f && (o += f - l), v(f)
                }(r || e) && al()
            }, t.onEnable = function() {
                aC(d, !c && "x"), aO.addEventListener("refresh", P), sU(ik, "resize", P), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), k.enable()
            }, t.onDisable = function() {
                aC(d, !0), sj(ik, "resize", P), aO.removeEventListener("refresh", P), k.kill()
            }, t.lockAxis = !1 !== t.lockAxis, (e = new ib(t)).iOS = iG, iG && !v() && v(1), iG && iw.ticker.add(ss), u = e._dc, s = iw.to(e, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: aw(v, v(), function() {
                        return s.pause()
                    })
                },
                onUpdate: al,
                onComplete: u.vars.onComplete
            }), e
        };
    aO.sort = function(t) {
        if (s_(t)) return sZ.sort(t);
        var e = ik.pageYOffset || 0;
        return aO.getAll().forEach(function(t) {
            return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + ik.innerHeight
        }), sZ.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, aO.observe = function(t) {
        return new ib(t)
    }, aO.normalizeScroll = function(t) {
        if (void 0 === t) return iq;
        if (!0 === t && iq) return iq.enable();
        if (!1 === t) {
            iq && iq.kill(), iq = t;
            return
        }
        var e = t instanceof ib ? t : az(t);
        return iq && iq.target === e.target && iq.kill(), sl(e.target) && (iq = e), e
    }, aO.core = {
        _getVelocityProp: i_,
        _inputObserver: aP,
        _scrollers: n4,
        _proxies: n6,
        bridge: {
            ss: function() {
                i7 || s4("scrollStart"), i7 = i6()
            },
            ref: function() {
                return iz
            }
        }
    }, su() && iw.registerPlugin(aO), nX.registerPlugin(aO);
    let aF = (0, i.memo)(function({
        children: t,
        scrollContainerRef: r,
        containerClassName: n = "",
        textClassName: s = "",
        animationDuration: a = 1,
        ease: o = "back.inOut(2)",
        scrollStart: u = "center bottom+=50%",
        scrollEnd: l = "bottom bottom-=40%",
        stagger: c = .03,
        as: f = "h2"
    }) {
        let h = (0, i.useRef)(null),
            p = (0, i.useMemo)(() => {
                let r = ("string" == typeof t ? t : "").split(" ");
                return r.map((t, n) => (0, e.jsxs)("span", {
                    className: "word",
                    style: {
                        display: "inline-block",
                        whiteSpace: "nowrap"
                    },
                    children: [t.split("").map((t, r) => (0, e.jsx)("span", {
                        className: "char",
                        children: t
                    }, r)), n < r.length - 1 && (0, e.jsx)("span", {
                        className: "char",
                        children: " "
                    })]
                }, n))
            }, [t]);
        return (0, i.useEffect)(() => {
            let t = h.current;
            if (!t) return;
            let e = r ? .current || window,
                n = t.querySelectorAll(".char");
            if (0 === n.length) return;
            let i = n.length > 30,
                s = nX.fromTo(n, {
                    opacity: 0,
                    yPercent: i ? 50 : 120,
                    scaleY: i ? 1.2 : 2.3,
                    scaleX: i ? .9 : .7,
                    transformOrigin: "50% 0%"
                }, {
                    duration: i ? .6 : a,
                    ease: i ? "power2.out" : o,
                    opacity: 1,
                    yPercent: 0,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: i ? .01 : c,
                    scrollTrigger: {
                        trigger: t,
                        scroller: e,
                        start: u,
                        end: l,
                        scrub: !0
                    }
                });
            return () => {
                s.kill()
            }
        }, [r, a, o, u, l, c]), (0, e.jsx)(f, {
            ref: h,
            className: `scroll-float ${n}`,
            children: (0, e.jsx)("span", {
                className: `scroll-float-text ${s}`,
                children: p
            })
        })
    });
    var aN = t.i(30982);
    let aI = (0, i.memo)(function() {
        let t = (0, i.useRef)(null),
            {
                scrollYProgress: u
            } = (0, a.useScroll)({
                target: t,
                offset: ["start end", "end start"]
            }),
            l = (0, o.useTransform)(u, [0, .5, 1], [.85, 1, .85]),
            c = (0, o.useTransform)(u, [0, 1], [50, -50]),
            f = (0, o.useTransform)(u, [0, .15, .85, 1], [0, 1, 1, 0]);
        return (0, e.jsxs)("section", {
            ref: t,
            className: "relative w-full bg-black overflow-hidden",
            children: [(0, e.jsx)(aN.default, {}), (0, e.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-br from-black via-black to-red-950/40"
            }), (0, e.jsx)("div", {
                className: "absolute right-1/3 top-1/2 -translate-y-1/2 w-[300px] md:w-[650px] h-[300px] md:h-[650px] bg-red-600/25 blur-[100px] md:blur-[180px] rounded-full pointer-events-none",
                style: {
                    willChange: "auto"
                }
            }), (0, e.jsx)("div", {
                className: "relative z-10 container mx-auto px-6 py-20 md:py-32",
                children: (0, e.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center",
                    children: [(0, e.jsx)("div", {
                        className: "flex justify-center md:justify-start",
                        children: (0, e.jsx)(s.motion.div, {
                            style: {
                                scale: l,
                                y: c,
                                opacity: f
                            },
                            className: "relative w-full max-w-[280px] md:max-w-none flex justify-center",
                            children: (0, e.jsx)(r.default, {
                                src: n,
                                alt: "TALOS Logo",
                                priority: !0,
                                className: "w-full md:w-[52rem] h-auto select-none drop-shadow-[0_0_40px_rgba(220,38,38,0.4)] md:drop-shadow-[0_0_60px_rgba(220,38,38,0.55)]"
                            })
                        })
                    }), (0, e.jsx)("div", {
                        className: "text-center md:text-left relative z-20",
                        children: (0, e.jsxs)(s.motion.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .8,
                                ease: "easeOut"
                            },
                            children: [(0, e.jsx)("h3", {
                                className: "text-white bbh-bartle-black tracking-[0.4em] text-sm md:text-xl mb-4",
                                children: "WE ARE"
                            }), (0, e.jsx)("h2", {
                                className: "text-red-600 bbh-bartle-black text-5xl md:text-8xl tracking-tight mb-8 md:mb-10",
                                children: "TALOS"
                            }), (0, e.jsxs)("div", {
                                className: "text-gray-300 font-medium zen-dots-regular leading-relaxed text-sm md:text-lg max-w-xl mx-auto md:mx-0 flex flex-wrap gap-1",
                                children: [(0, e.jsx)(aF, {
                                    as: "span",
                                    animationDuration: 1,
                                    ease: "back.inOut(2)",
                                    scrollStart: "center bottom+=50%",
                                    scrollEnd: "bottom bottom-=40%",
                                    stagger: .03,
                                    containerClassName: "inline-block",
                                    textClassName: "!text-sm md:!text-lg text-white font-bold !leading-relaxed",
                                    children: "TALOS"
                                }), (0, e.jsx)("span", {
                                    className: "inline-block",
                                    children: " – "
                                }), (0, e.jsx)(aF, {
                                    as: "span",
                                    animationDuration: 1,
                                    ease: "back.inOut(2)",
                                    scrollStart: "center bottom-=20%",
                                    scrollEnd: "bottom bottom-=40%",
                                    stagger: .01,
                                    containerClassName: "inline-block",
                                    textClassName: "!text-sm md:!text-lg text-red-500 !leading-relaxed",
                                    children: "Towards Advance Level Of Science"
                                }), (0, e.jsx)(aF, {
                                    as: "span",
                                    animationDuration: 1,
                                    ease: "back.inOut(2)",
                                    scrollStart: "top bottom-=20%",
                                    scrollEnd: "center center",
                                    stagger: .01,
                                    containerClassName: "inline",
                                    textClassName: "!text-sm md:!text-lg text-gray-300 !leading-relaxed text-left",
                                    children: "is an annual symposium conducted by the Department of Artificial Intelligence and Data Science to showcase the importance of the domain. A wave of fun and technical events will be conducted throughout the day."
                                })]
                            })]
                        })
                    })]
                })
            })]
        })
    });
    t.s(["default", 0, aI], 60644)
}, 11781, t => {
    t.n(t.i(60644))
}]);