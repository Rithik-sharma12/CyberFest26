(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18566, (e, t, r) => {
    t.exports = e.r(76562)
}, 24136, e => {
    "use strict";
    var t = e.i(71645);
    e.i(51718);
    var r = e.i(18357);
    e.i(36180);
    var n = e.i(98925),
        i = e.i(91557);
    e.s(["useAuth", 0, () => {
        let [e, o] = (0, t.useState)(null), [s, l] = (0, t.useState)(!0), [a, u] = (0, t.useState)(null);
        return (0, t.useEffect)(() => i.auth ? (0, r.onAuthStateChanged)(i.auth, async e => {
            try {
                if (e) {
                    if (o(e), i.db) try {
                        let t = (0, n.doc)(i.db, "users", e.uid);
                        (await (0, n.getDoc)(t)).exists() ? await (0, n.setDoc)(t, {
                            last_login: (0, n.serverTimestamp)()
                        }, {
                            merge: !0
                        }) : await (0, n.setDoc)(t, {
                            uid: e.uid,
                            name: e.displayName,
                            email: e.email,
                            profile_photo: e.photoURL,
                            last_login: (0, n.serverTimestamp)(),
                            created_at: (0, n.serverTimestamp)()
                        })
                    } catch (e) {}
                } else o(null)
            } catch (e) {
                u(e instanceof Error ? e : Error("Authentication error"))
            } finally {
                l(!1)
            }
        }) : void setTimeout(() => l(!1), 0), []), {
            user: e,
            loading: s,
            error: a
        }
    }])
}, 33525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(71645);

    function i(e, t) {
        let r = (0, n.useRef)(null),
            i = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = i.current;
                t && (i.current = null, t())
            } else e && (r.current = o(e, n)), t && (i.current = o(t, n))
        }, [e, t])
    }

    function o(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 88143, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: i,
        objectFit: o
    }) {
        let s = r ? 40 * r : e,
            l = n ? 40 * n : t,
            a = s && l ? `viewBox='0 0 ${s} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return s
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    }), e.r(33525);
    let n = e.r(43369),
        i = e.r(88143),
        o = e.r(87690),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function u({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: d = !1,
        loading: c,
        className: f,
        quality: m,
        width: p,
        height: h,
        fill: g = !1,
        style: y,
        overrideSrc: v,
        onLoad: x,
        onLoadingComplete: b,
        placeholder: w = "empty",
        blurDataURL: j,
        fetchPriority: E,
        decoding: _ = "async",
        layout: C,
        objectFit: P,
        objectPosition: O,
        lazyBoundary: S,
        lazyRoot: L,
        ...R
    }, M) {
        var k;
        let z, N, $, {
                imgConf: A,
                showAltText: I,
                blurComplete: T,
                defaultLoader: W
            } = M,
            D = A || o.imageConfigDefault;
        if ("allSizes" in D) z = D;
        else {
            let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
                t = D.deviceSizes.sort((e, t) => e - t),
                r = D.qualities ? .sort((e, t) => e - t);
            z = { ...D,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === W) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let B = R.loader || W;
        delete R.loader, delete R.srcSet;
        let F = "__next_img_default" in B;
        if (F) {
            if ("custom" === z.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = B;
            B = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (C) {
            "fill" === C && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[C];
            e && (y = { ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[C];
            r && !t && (t = r)
        }
        let U = "",
            H = a(p),
            q = a(h);
        if ((k = e) && "object" == typeof k && (l(k) || void 0 !== k.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (N = t.blurWidth, $ = t.blurHeight, j = j || t.blurDataURL, U = t.src, !g)
                if (H || q) {
                    if (H && !q) {
                        let e = H / t.width;
                        q = Math.round(t.height * e)
                    } else if (!H && q) {
                        let e = q / t.height;
                        H = Math.round(t.width * e)
                    }
                } else H = t.width, q = t.height
        }
        let V = !u && !d && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : U) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, V = !1), z.unoptimized && (r = !0), F && !z.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let G = a(m),
            X = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: O
            } : {}, I ? {} : {
                color: "transparent"
            }, y),
            Y = T || "empty" === w ? null : "blur" === w ? `url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:H,heightInt:q,blurWidth:N,blurHeight:$,blurDataURL:j||"",objectFit:X.objectFit})}")` : `url("${w}")`,
            J = s.includes(X.objectFit) ? "fill" === X.objectFit ? "100% 100%" : "cover" : X.objectFit,
            K = Y ? {
                backgroundSize: J,
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y
            } : {},
            Q = function({
                config: e,
                src: t,
                unoptimized: r,
                width: i,
                quality: o,
                sizes: s,
                loader: l
            }) {
                if (r) {
                    let e = (0, n.getDeploymentId)();
                    if (t.startsWith("/") && !t.startsWith("//") && e) {
                        let r = t.includes("?") ? "&" : "?";
                        t = `${t}${r}dpl=${e}`
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: a,
                    kind: u
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            i = [];
                        for (let e; e = r.exec(n);) i.push(parseInt(e[2]));
                        if (i.length) {
                            let r = .01 * Math.min(...i);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s), d = a.length - 1;
                return {
                    sizes: s || "w" !== u ? s : "100vw",
                    srcSet: a.map((r, n) => `${l({config:e,src:t,quality:o,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: o,
                        width: a[d]
                    })
                }
            }({
                config: z,
                src: e,
                unoptimized: r,
                width: H,
                quality: G,
                sizes: t,
                loader: B
            }),
            Z = V ? "lazy" : c;
        return {
            props: { ...R,
                loading: Z,
                fetchPriority: E,
                width: H,
                height: q,
                decoding: _,
                className: f,
                style: { ...X,
                    ...K
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: v || Q.src
            },
            meta: {
                unoptimized: r,
                preload: d || u,
                placeholder: w,
                fill: g
            }
        }
    }
}, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(71645),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t ? .mountedInstances ? .add(e.children), l()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return c
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(55682),
        s = e.r(90809),
        l = e.r(43476),
        a = s._(e.r(71645)),
        u = o._(e.r(98879)),
        d = e.r(42732);

    function c() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];

    function p(e) {
        let t, r, n, i;
        return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, n = new Set, i = {}, e => {
            let o = !0,
                s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = m.length; t < r; t++) {
                        let r = m[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? o = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = i[r] || new Set;
                                ("name" !== r || !s) && n.has(t) ? o = !1 : (n.add(t), i[r] = n)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, a.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(u.default, {
            reduceComponentsToState: p,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(55682)._(e.r(71645)),
        i = e.r(87690),
        o = n.default.createContext(i.imageConfigDefault)
}, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 70965, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(70965),
        i = e.r(43369);

    function o({
        config: e,
        src: t,
        width: r,
        quality: o
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let s = (0, n.findClosestQuality)(o, e),
            l = (0, i.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    o.__next_img_default = !0;
    let s = o
}, 85437, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return b
        }
    });
    let n = e.r(55682),
        i = e.r(90809),
        o = e.r(43476),
        s = i._(e.r(71645)),
        l = n._(e.r(74080)),
        a = n._(e.r(25633)),
        u = e.r(8927),
        d = e.r(87690),
        c = e.r(18556);
    e.r(33525);
    let f = e.r(65856),
        m = n._(e.r(1948)),
        p = e.r(18581),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200],
            imageSizes: [16, 32, 48, 64, 96, 128, 256],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, i, o, s) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        i = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => i,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            i = !0, t.stopPropagation()
                        }
                    })
                }
                n ? .current && n.current(e)
            }
        }))
    }

    function y(e) {
        return s.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, s.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: i,
        decoding: l,
        className: a,
        style: u,
        fetchPriority: d,
        placeholder: c,
        loading: f,
        unoptimized: m,
        fill: h,
        onLoadRef: v,
        onLoadingCompleteRef: x,
        setBlurComplete: b,
        setShowAltText: w,
        sizesInput: j,
        onLoad: E,
        onError: _,
        ...C
    }, P) => {
        let O = (0, s.useCallback)(e => {
                e && (_ && (e.src = e.src), e.complete && g(e, c, v, x, b, m, j))
            }, [e, c, v, x, b, _, m, j]),
            S = (0, p.useMergedRef)(P, O);
        return (0, o.jsx)("img", { ...C,
            ...y(d),
            loading: f,
            width: i,
            height: n,
            decoding: l,
            "data-nimg": h ? "fill" : "1",
            className: a,
            style: u,
            sizes: r,
            srcSet: t,
            src: e,
            ref: S,
            onLoad: e => {
                g(e.currentTarget, c, v, x, b, m, j)
            },
            onError: e => {
                w(!0), "empty" !== c && b(!0), _ && _(e)
            }
        })
    });

    function x({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, o.jsx)(a.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let b = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(f.RouterContext),
            n = (0, s.useContext)(c.ImageConfigContext),
            i = (0, s.useMemo)(() => {
                let e = h || n || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    i = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: i,
                    localPatterns: "undefined" == typeof window ? n ? .localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: l,
                onLoadingComplete: a
            } = e,
            p = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
            p.current = l
        }, [l]);
        let g = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
            g.current = a
        }, [a]);
        let [y, b] = (0, s.useState)(!1), [w, j] = (0, s.useState)(!1), {
            props: E,
            meta: _
        } = (0, u.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: i,
            blurComplete: y,
            showAltText: w
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, { ...E,
                unoptimized: _.unoptimized,
                placeholder: _.placeholder,
                fill: _.fill,
                onLoadRef: p,
                onLoadingCompleteRef: g,
                setBlurComplete: b,
                setShowAltText: j,
                sizesInput: e.sizes,
                ref: t
            }), _.preload ? (0, o.jsx)(x, {
                isAppRouter: !r,
                imgAttributes: E
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return d
        },
        getImageProps: function() {
            return u
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let o = e.r(55682),
        s = e.r(8927),
        l = e.r(85437),
        a = o._(e.r(1948));

    function u(e) {
        let {
            props: t
        } = (0, s.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200],
                imageSizes: [16, 32, 48, 64, 96, 128, 256],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let d = l.Image
}, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}, 10542, e => {
    "use strict";
    let t, r;
    var n = e.i(86427),
        i = e.i(65566),
        o = e.i(71645),
        s = e.i(60830),
        l = e.i(87022);

    function a(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, i = (null === n ? 0 : n.value) / 100;
            r !== i && e(i), r = i
        };
        return l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n)
    }
    var u = e.i(30551),
        d = e.i(89026),
        c = e.i(49652);
    let f = new WeakMap,
        m = (e, t, r) => (n, i) => i && i[0] ? i[0][e + "Size"] : (0, d.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
        p = m("inline", "width", "offsetWidth"),
        h = m("block", "height", "offsetHeight");

    function g({
        target: e,
        borderBoxSize: t
    }) {
        f.get(e) ? .forEach(r => {
            r(e, {
                get width() {
                    return p(e, t)
                },
                get height() {
                    return h(e, t)
                }
            })
        })
    }

    function y(e) {
        e.forEach(g)
    }
    let v = new Set;
    var x = e.i(83920),
        b = e.i(25791);
    let w = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        j = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function E(e, t, r, n) {
        let i = r[t],
            {
                length: o,
                position: s
            } = j[t],
            l = i.current,
            a = r.time;
        i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, x.progress)(0, i.scrollLength, i.current);
        let u = n - a;
        i.velocity = u > 50 ? 0 : (0, b.velocityPerSecond)(i.current - l, u)
    }
    e.i(47167);
    var _ = e.i(44230),
        C = e.i(15923),
        P = e.i(76959),
        O = e.i(72846);
    let S = {
        start: 0,
        center: .5,
        end: 1
    };

    function L(e, t, r = 0) {
        let n = 0;
        if (e in S && (e = S[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let R = [0, 0],
        M = [
            [0, 0],
            [1, 1]
        ],
        k = {
            x: 0,
            y: 0
        },
        z = new WeakMap,
        N = new WeakMap,
        $ = new WeakMap,
        A = e => e === document.scrollingElement ? window : e;

    function I(e, {
        container: n = document.scrollingElement,
        ...i
    } = {}) {
        if (!n) return s.noop;
        let o = $.get(n);
        o || (o = new Set, $.set(n, o));
        let a = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), E(e, "x", r, t), E(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = M
                        } = r, {
                            target: i = e,
                            axis: o = "y"
                        } = r, s = "y" === o ? "height" : "width", l = i !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, O.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let i = null,
                                    o = n.parentNode;
                                for (; !i;) "svg" === o.tagName && (i = o), o = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, e) : k, a = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let d = !t[o].interpolate,
                            c = n.length;
                        for (let e = 0; e < c; e++) {
                            let r = function(e, t, r, n) {
                                let i = Array.isArray(e) ? e : R,
                                    o = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, S[e] ? e : "0"]), (o = L(i[0], r, n)) - L(i[1], t)
                            }(n[e], u[s], a[s], l[o]);
                            d || r === t[o].interpolatorOffsets[e] || (d = !0), t[o].offset[e] = r
                        }
                        d && (t[o].interpolate = (0, _.interpolate)(t[o].offset, (0, C.defaultOffset)(n), {
                            clamp: !1
                        }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, P.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: w(),
            y: w()
        }, i);
        if (o.add(a), !z.has(n)) {
            let e, i = () => {
                    for (let e of o) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(s)
                },
                s = () => {
                    for (let e of o) e.notify()
                },
                a = () => l.frame.read(i);
            z.set(n, a);
            let u = A(n);
            window.addEventListener("resize", a, {
                passive: !0
            }), n !== document.documentElement && N.set(n, "function" == typeof n ? (v.add(n), r || (r = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                v.forEach(t => t(e))
            }, window.addEventListener("resize", r)), () => {
                v.delete(n), v.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (t || "undefined" != typeof ResizeObserver && (t = new ResizeObserver(y)), (e = (0, c.resolveElements)(n)).forEach(e => {
                let r = f.get(e);
                r || (r = new Set, f.set(e, r)), r.add(a), t ? .observe(e)
            }), () => {
                e.forEach(e => {
                    let r = f.get(e);
                    r ? .delete(a), r ? .size || t ? .unobserve(e)
                })
            })), u.addEventListener("scroll", a, {
                passive: !0
            }), a()
        }
        let u = z.get(n);
        return l.frame.read(u, !1, !0), () => {
            (0, l.cancelFrame)(u);
            let e = $.get(n);
            if (!e || (e.delete(a), e.size)) return;
            let t = z.get(n);
            z.delete(n), t && (A(n).removeEventListener("scroll", t), N.get(n) ? .(), window.removeEventListener("resize", t))
        }
    }
    let T = new Map;

    function W({
        source: e,
        container: t,
        ...r
    }) {
        var n;
        let i, o, {
            axis: s
        } = r;
        e && (t = e);
        let l = T.get(t) ? ? new Map;
        T.set(t, l);
        let a = r.target ? ? "self",
            d = l.get(a) ? ? {},
            c = s + (r.offset ? ? []).join(",");
        return d[c] || (d[c] = !r.target && (0, u.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: s
        }) : (n = {
            container: t,
            ...r
        }, i = {
            value: 0
        }, o = I(e => {
            i.value = 100 * e[n.axis].progress
        }, n), {
            currentTime: i,
            cancel: o
        })), d[c]
    }
    var D = e.i(47414),
        B = e.i(74008);
    let F = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        U = e => !!e && !e.current;

    function H({
        container: e,
        target: t,
        ...r
    } = {}) {
        let n = (0, D.useConstant)(F),
            l = (0, o.useRef)(null),
            u = (0, o.useRef)(!1),
            d = (0, o.useCallback)(() => (l.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...n
            } = {}) {
                var i, o;
                let l;
                if (!r) return s.noop;
                let u = {
                    axis: t,
                    container: r,
                    ...n
                };
                return "function" == typeof e ? (i = e, o = u, 2 === i.length ? I(e => {
                    i(e[o.axis].progress, e)
                }, o) : a(i, W(o))) : (l = W(u), e.attachTimeline({
                    timeline: u.target ? void 0 : l,
                    observe: e => (e.pause(), a(t => {
                        e.time = e.iterationDuration * t
                    }, l))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                n.scrollX.set(t.current), n.scrollXProgress.set(t.progress), n.scrollY.set(r.current), n.scrollYProgress.set(r.progress)
            }, { ...r,
                container: e ? .current || void 0,
                target: t ? .current || void 0
            }), () => {
                l.current ? .()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, B.useIsomorphicLayoutEffect)(() => {
            if (u.current = !1, !(U(e) || U(t))) return d();
            u.current = !0
        }, [d]), (0, o.useEffect)(() => u.current ? ((0, i.invariant)(!U(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!U(t), "Target ref is defined but not hydrated", "use-scroll-ref"), d()) : void 0, [d]), n
    }
    e.s(["useScroll", () => H], 10542)
}, 33768, e => {
    "use strict";
    var t = e.i(71645);

    function r(e, r, n) {
        (0, t.useInsertionEffect)(() => e.on(r, n), [e, r, n])
    }
    e.s(["useMotionValueEvent", () => r])
}, 5641, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(46932);
    e.i(47167);
    var i = e.i(31178),
        o = e.i(47414),
        s = e.i(74008),
        l = e.i(21476),
        a = e.i(72846),
        u = r,
        d = e.i(37806);

    function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class f extends u.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    r = (0, a.isHTMLElement)(e) && e.offsetWidth || 0,
                    n = this.props.sizeRef.current;
                n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft, n.right = r - n.width - n.left
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function m({
        children: e,
        isPresent: n,
        anchorX: i,
        root: o
    }) {
        let s = (0, u.useId)(),
            l = (0, u.useRef)(null),
            a = (0, u.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            }),
            {
                nonce: m
            } = (0, u.useContext)(d.MotionConfigContext),
            p = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            n = e.map(e => {
                                let n = c(e, t);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t];
                                "function" == typeof r ? r() : c(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(l, e ? .ref);
        return (0, u.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: u,
                right: d
            } = a.current;
            if (n || !l.current || !e || !t) return;
            let c = "left" === i ? `left: ${u}` : `right: ${d}`;
            l.current.dataset.motionPopId = s;
            let f = document.createElement("style");
            m && (f.nonce = m);
            let p = o ? ? document.head;
            return p.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${c}px !important;
            top: ${r}px !important;
          }
        `), () => {
                p.contains(f) && p.removeChild(f)
            }
        }, [n]), (0, t.jsx)(f, {
            isPresent: n,
            childRef: l,
            sizeRef: a,
            children: u.cloneElement(e, {
                ref: p
            })
        })
    }
    let p = ({
        children: e,
        initial: n,
        isPresent: i,
        onExitComplete: s,
        custom: a,
        presenceAffectsLayout: u,
        mode: d,
        anchorX: c,
        root: f
    }) => {
        let p = (0, o.useConstant)(h),
            g = (0, r.useId)(),
            y = !0,
            v = (0, r.useMemo)(() => (y = !1, {
                id: g,
                initial: n,
                isPresent: i,
                custom: a,
                onExitComplete: e => {
                    for (let t of (p.set(e, !0), p.values()))
                        if (!t) return;
                    s && s()
                },
                register: e => (p.set(e, !1), () => p.delete(e))
            }), [i, p, s]);
        return u && y && (v = { ...v
        }), (0, r.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1))
        }, [i]), r.useEffect(() => {
            i || p.size || !s || s()
        }, [i]), "popLayout" === d && (e = (0, t.jsx)(m, {
            isPresent: i,
            anchorX: c,
            root: f,
            children: e
        })), (0, t.jsx)(l.PresenceContext.Provider, {
            value: v,
            children: e
        })
    };

    function h() {
        return new Map
    }
    var g = e.i(64978);
    let y = e => e.key || "";

    function v(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    let x = ({
        children: e,
        custom: n,
        initial: l = !0,
        onExitComplete: a,
        presenceAffectsLayout: u = !0,
        mode: d = "sync",
        propagate: c = !1,
        anchorX: f = "left",
        root: m
    }) => {
        let [h, x] = (0, g.usePresence)(c), b = (0, r.useMemo)(() => v(e), [e]), w = c && !h ? [] : b.map(y), j = (0, r.useRef)(!0), E = (0, r.useRef)(b), _ = (0, o.useConstant)(() => new Map), [C, P] = (0, r.useState)(b), [O, S] = (0, r.useState)(b);
        (0, s.useIsomorphicLayoutEffect)(() => {
            j.current = !1, E.current = b;
            for (let e = 0; e < O.length; e++) {
                let t = y(O[e]);
                w.includes(t) ? _.delete(t) : !0 !== _.get(t) && _.set(t, !1)
            }
        }, [O, w.length, w.join("-")]);
        let L = [];
        if (b !== C) {
            let e = [...b];
            for (let t = 0; t < O.length; t++) {
                let r = O[t],
                    n = y(r);
                w.includes(n) || (e.splice(t, 0, r), L.push(r))
            }
            return "wait" === d && L.length && (e = L), S(v(e)), P(b), null
        }
        let {
            forceRender: R
        } = (0, r.useContext)(i.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: O.map(e => {
                let r = y(e),
                    i = (!c || !!h) && (b === O || w.includes(r));
                return (0, t.jsx)(p, {
                    isPresent: i,
                    initial: (!j.current || !!l) && void 0,
                    custom: n,
                    presenceAffectsLayout: u,
                    mode: d,
                    root: m,
                    onExitComplete: i ? void 0 : () => {
                        if (!_.has(r)) return;
                        _.set(r, !0);
                        let e = !0;
                        _.forEach(t => {
                            t || (e = !1)
                        }), e && (R ? .(), S(E.current), c && x ? .(), a && a())
                    },
                    anchorX: f,
                    children: e
                }, r)
            })
        })
    };
    var b = e.i(10542),
        w = e.i(33768),
        j = e.i(47163),
        E = e.i(22016),
        _ = e.i(18566);
    let C = e => {
            let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        P = (...e) => e.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim();
    var O = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let S = (0, r.forwardRef)(({
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: i,
            className: o = "",
            children: s,
            iconNode: l,
            ...a
        }, u) => (0, r.createElement)("svg", {
            ref: u,
            ...O,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: i ? 24 * Number(n) / Number(t) : n,
            className: P("lucide", o),
            ...!s && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
            })(a) && {
                "aria-hidden": "true"
            },
            ...a
        }, [...l.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(s) ? s : [s]])),
        L = (e, t) => {
            let n = (0, r.forwardRef)(({
                className: n,
                ...i
            }, o) => (0, r.createElement)(S, {
                ref: o,
                iconNode: t,
                className: P(`lucide-${C(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, n),
                ...i
            }));
            return n.displayName = C(e), n
        },
        R = L("menu", [
            ["path", {
                d: "M4 5h16",
                key: "1tepv9"
            }],
            ["path", {
                d: "M4 12h16",
                key: "1lakjw"
            }],
            ["path", {
                d: "M4 19h16",
                key: "1djgab"
            }]
        ]),
        M = L("x", [
            ["path", {
                d: "M18 6 6 18",
                key: "1bl5f8"
            }],
            ["path", {
                d: "m6 6 12 12",
                key: "d8bk6v"
            }]
        ]),
        k = L("log-out", [
            ["path", {
                d: "m16 17 5-5-5-5",
                key: "1bji2h"
            }],
            ["path", {
                d: "M21 12H9",
                key: "dn1m92"
            }],
            ["path", {
                d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                key: "1uf3rs"
            }]
        ]);
    var z = e.i(24136),
        N = e.i(57688),
        $ = e.i(91557);
    e.i(51718);
    var A = e.i(18357);
    e.s(["FloatingNav", 0, ({
        navItems: e,
        className: i
    }) => {
        let {
            scrollY: o
        } = (0, b.useScroll)(), s = (0, _.usePathname)(), [l, a] = (0, r.useState)(!1), [u, d] = (0, r.useState)(!1), {
            user: c
        } = (0, z.useAuth)(), f = (0, _.useRouter)(), m = async () => {
            try {
                $.auth && (await (0, A.signOut)($.auth), f.push("/"))
            } catch (e) {}
        };
        return (0, w.useMotionValueEvent)(o, "change", e => {
            "number" == typeof e && (e > 100 ? a(!0) : a(!1))
        }), (0, t.jsx)(x, {
            mode: "wait",
            children: (0, t.jsxs)(n.motion.div, {
                initial: {
                    opacity: 0,
                    y: -100
                },
                animate: {
                    y: l ? 0 : -100,
                    opacity: +!!l
                },
                transition: {
                    duration: .3,
                    ease: "easeInOut"
                },
                className: (0, j.cn)("flex w-full fixed top-0 inset-x-0 border-b border-red-600/30 bg-black/90 backdrop-blur-md shadow-[0px_2px_15px_-1px_rgba(220,38,38,0.2)] z-[5000] px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 items-center justify-between", i),
                children: [(0, t.jsxs)(E.default, {
                    href: "/",
                    className: "font-black text-base sm:text-lg md:text-xl tracking-tighter text-white hover:text-red-600 transition-colors flex items-center gap-1.5 sm:gap-2",
                    children: [(0, t.jsx)(N.default, {
                        src: "/Logo.png",
                        alt: "TALOS Logo",
                        width: 28,
                        height: 28,
                        className: "object-contain sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px]"
                    }), (0, t.jsx)("span", {
                        className: "hidden sm:inline",
                        children: "TALOS"
                    }), (0, t.jsx)("span", {
                        className: "text-red-600 zen-dots-regular neon-text-red",
                        children: "5.0"
                    })]
                }), (0, t.jsx)("div", {
                    className: "hidden md:flex items-center justify-center space-x-3 lg:space-x-6",
                    children: e.map((e, r) => {
                        let n = s === e.link || s.startsWith(e.link) && "/" !== e.link;
                        return (0, t.jsx)(E.default, {
                            href: e.link,
                            className: (0, j.cn)("relative items-center flex space-x-1 transition-colors font-bold zen-dots-regular", n ? "text-red-500" : "text-neutral-200 hover:text-red-500"),
                            children: (0, t.jsx)("span", {
                                className: "text-sm lg:text-base xl:text-lg",
                                children: e.name
                            })
                        }, `link=${r}`)
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex items-center gap-2 sm:gap-3 md:gap-4",
                    children: [c ? (0, t.jsxs)("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [(0, t.jsxs)(E.default, {
                            href: "/profile",
                            className: "flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity",
                            children: [(0, t.jsx)("span", {
                                className: "hidden md:block text-xs lg:text-sm font-bold text-white zen-dots-regular",
                                children: c.displayName ? .split(" ")[0]
                            }), (0, t.jsx)("div", {
                                className: "relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-red-600 overflow-hidden shadow-[0_0_10px_rgba(220,38,38,0.5)]",
                                children: c.photoURL ? (0, t.jsx)(N.default, {
                                    src: c.photoURL,
                                    alt: "Profile",
                                    fill: !0,
                                    className: "object-cover"
                                }) : (0, t.jsx)("div", {
                                    className: "w-full h-full bg-red-600 flex items-center justify-center text-white font-bold text-sm",
                                    children: c.displayName ? .charAt(0) || "U"
                                })
                            })]
                        }), (0, t.jsx)("button", {
                            onClick: m,
                            className: "p-1.5 sm:p-2 text-gray-400 hover:text-red-500 transition-colors",
                            title: "Logout",
                            children: (0, t.jsx)(k, {
                                size: 18,
                                className: "sm:w-5 sm:h-5"
                            })
                        })]
                    }) : (0, t.jsxs)(E.default, {
                        href: "/login",
                        className: "border text-xs sm:text-sm md:text-base font-bold relative border-red-600/50 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]",
                        children: [(0, t.jsx)("span", {
                            children: "Login"
                        }), (0, t.jsx)("span", {
                            className: "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px"
                        })]
                    }), (0, t.jsx)("button", {
                        onClick: () => d(!u),
                        className: "text-neutral-200 hover:text-red-500 transition-colors md:hidden",
                        children: u ? (0, t.jsx)(M, {
                            size: 22,
                            className: "sm:w-6 sm:h-6"
                        }) : (0, t.jsx)(R, {
                            size: 22,
                            className: "sm:w-6 sm:h-6"
                        })
                    })]
                }), (0, t.jsx)(x, {
                    children: u && (0, t.jsx)(n.motion.div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        className: "absolute top-full left-0 w-full bg-black/95 border-b border-red-600/30 overflow-hidden md:hidden",
                        children: (0, t.jsx)("div", {
                            className: "flex flex-col items-center py-4 sm:py-6 space-y-4 sm:space-y-6",
                            children: e.map((e, r) => {
                                let n = s === e.link || s.startsWith(e.link) && "/" !== e.link;
                                return (0, t.jsx)(E.default, {
                                    href: e.link,
                                    onClick: () => d(!1),
                                    className: (0, j.cn)("text-base sm:text-lg font-bold zen-dots-regular transition-colors", n ? "text-red-500" : "text-neutral-200 hover:text-red-500"),
                                    children: e.name
                                }, `mobile-link=${r}`)
                            })
                        })
                    })
                })]
            })
        })
    }], 5641)
}, 47420, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let n = (0, r.memo)(function({
        children: n
    }) {
        return (0, r.useEffect)(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            let t = null,
                r = 0,
                n = !0,
                i = setTimeout(async () => {
                    t = new(await e.A(41414)).default({
                        duration: 1.2,
                        easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                        wheelMultiplier: .8,
                        touchMultiplier: 1.5
                    }), document.addEventListener("visibilitychange", () => {
                        (n = "visible" === document.visibilityState) ? t ? .start ? .() : t ? .stop ? .()
                    }), r = requestAnimationFrame(function e(i) {
                        n && t && t.raf ? .(i), r = requestAnimationFrame(e)
                    })
                }, 100);
            return () => {
                clearTimeout(i), r && cancelAnimationFrame(r), t ? .destroy ? .()
            }
        }, []), (0, t.jsx)(t.Fragment, {
            children: n
        })
    });
    e.s(["default", 0, n])
}, 38100, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let n = (0, r.memo)(function() {
        let e = (0, r.useRef)(null),
            n = (0, r.useRef)(0),
            i = (0, r.useRef)({
                x: -100,
                y: -100
            }),
            {
                supportsCustomCursor: o,
                isLowEndDevice: s,
                isMobile: l
            } = function() {
                let [e, t] = (0, r.useState)({
                    cpuCores: 4,
                    isMobile: !0,
                    isLowEndDevice: !0,
                    supportsCustomCursor: !1
                });
                return (0, r.useEffect)(() => {
                    let e = () => {
                        let e = navigator.hardwareConcurrency || 4,
                            r = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768,
                            n = e <= 2 || r,
                            i = !n && !r && e > 2 && window.innerWidth > 768;
                        t({
                            cpuCores: e,
                            isMobile: r,
                            isLowEndDevice: n,
                            supportsCustomCursor: i
                        })
                    };
                    e();
                    let r = () => e();
                    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
                }, []), e
            }(),
            [a, u] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            if (s || l || !o) {
                document.body.classList.add("use-default-cursor"), document.body.style.cursor = "auto";
                return
            }
            document.body.classList.remove("use-default-cursor"), document.body.style.cursor = "none";
            let t = !1,
                r = () => {
                    e.current && t && (e.current.style.transform = `translate3d(${i.current.x-6}px, ${i.current.y-6}px, 0)`, t = !1), n.current = requestAnimationFrame(r)
                },
                d = e => {
                    i.current.x = e.clientX, i.current.y = e.clientY, t = !0, a || u(!0)
                },
                c = () => {
                    u(!0), document.body.classList.remove("use-default-cursor"), document.body.style.cursor = "none"
                },
                f = () => {
                    u(!1), document.body.classList.add("use-default-cursor"), document.body.style.cursor = "auto"
                },
                m = () => {
                    document.hidden && u(!1)
                };
            return n.current = requestAnimationFrame(r), window.addEventListener("mousemove", d, {
                passive: !0
            }), document.body.addEventListener("mouseenter", c), document.body.addEventListener("mouseleave", f), document.addEventListener("visibilitychange", m), () => {
                cancelAnimationFrame(n.current), window.removeEventListener("mousemove", d), document.body.removeEventListener("mouseenter", c), document.body.removeEventListener("mouseleave", f), document.removeEventListener("visibilitychange", m), document.body.classList.add("use-default-cursor"), document.body.style.cursor = "auto"
            }
        }, [o, s, l]), !o || s || l) ? null : (0, t.jsx)("div", {
            ref: e,
            className: "hidden md:block",
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#ff0000",
                boxShadow: "0 0 15px #ff0000, 0 0 30px #ff0000, 0 0 45px #ff000080",
                transform: "translate3d(-100px, -100px, 0)",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "screen",
                opacity: +!!a,
                transition: "opacity 0.15s ease-out",
                willChange: "transform",
                contain: "layout style paint",
                filter: "brightness(1.2) contrast(1.1)"
            }
        })
    });
    e.s(["default", 0, n], 38100)
}, 41414, e => {
    e.v(t => Promise.all(["static/chunks/3ac0e048ea253575.js"].map(t => e.l(t))).then(() => t(29731)))
}]);