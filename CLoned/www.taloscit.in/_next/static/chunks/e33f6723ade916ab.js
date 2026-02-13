(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 58866, t => {
    "use strict";
    var e = t.i(44230);

    function n(...t) {
        let r = !Array.isArray(t[0]),
            o = r ? 0 : -1,
            i = t[0 + o],
            u = t[1 + o],
            a = t[2 + o],
            s = t[3 + o],
            c = (0, e.interpolate)(u, a, s);
        return r ? c(i) : c
    }
    t.s(["transform", () => n])
}, 35382, t => {
    "use strict";
    var e = t.i(86427),
        n = t.i(71645),
        r = t.i(37806),
        o = t.i(47414);

    function i(t) {
        let i = (0, o.useConstant)(() => (0, e.motionValue)(t)),
            {
                isStatic: u
            } = (0, n.useContext)(r.MotionConfigContext);
        if (u) {
            let [, e] = (0, n.useState)(t);
            (0, n.useEffect)(() => i.on("change", e), [])
        }
        return i
    }
    t.s(["useMotionValue", () => i])
}, 95420, t => {
    "use strict";
    var e = t.i(58866),
        n = t.i(47414),
        r = t.i(87022),
        o = t.i(74008),
        i = t.i(35382);

    function u(t, e) {
        let n = (0, i.useMotionValue)(e()),
            u = () => n.set(e());
        return u(), (0, o.useIsomorphicLayoutEffect)(() => {
            let e = () => r.frame.preRender(u, !1, !0),
                n = t.map(t => t.on("change", e));
            return () => {
                n.forEach(t => t()), (0, r.cancelFrame)(u)
            }
        }), n
    }
    var a = t.i(86427);

    function s(t, n, r, o) {
        if ("function" == typeof t) {
            let e;
            return a.collectMotionValues.current = [], t(), e = u(a.collectMotionValues.current, t), a.collectMotionValues.current = void 0, e
        }
        let i = "function" == typeof n ? n : (0, e.transform)(n, r, o);
        return Array.isArray(t) ? c(t, i) : c([t], ([t]) => i(t))
    }

    function c(t, e) {
        let r = (0, n.useConstant)(() => []);
        return u(t, () => {
            r.length = 0;
            let n = t.length;
            for (let e = 0; e < n; e++) r[e] = t[e].get();
            return e(r)
        })
    }
    t.s(["useTransform", () => s], 95420)
}, 97924, t => {
    t.v("/_next/static/media/taloslogo.194cfaed.png")
}]);