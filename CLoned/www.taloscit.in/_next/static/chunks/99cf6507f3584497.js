(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 69441, e => {
    "use strict";
    var t = e.i(43476);

    function r({
        children: e,
        className: r = ""
    }) {
        return (0, t.jsx)("div", {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${r}`,
            children: e
        })
    }
    e.s(["default", () => r])
}, 58775, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(69441);

    function s({
        children: e,
        title: s,
        className: i = ""
    }) {
        return (0, t.jsx)("section", {
            className: `py-12 ${i}`,
            children: (0, t.jsxs)(r.default, {
                children: [s && (0, t.jsx)("h2", {
                    className: "text-3xl font-bold mb-8 text-center",
                    children: s
                }), e]
            })
        })
    }
    e.s(["default", () => s])
}, 89954, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    e.i(51718);
    var s = e.i(18357),
        i = e.i(18566),
        l = e.i(91557),
        a = e.i(24136),
        n = e.i(58775);

    function o() {
        let e = (0, i.useRouter)(),
            o = (0, i.useSearchParams)(),
            {
                user: c,
                loading: d
            } = (0, a.useAuth)(),
            u = o.get("redirect") || "/";
        (0, r.useEffect)(() => {
            !d && c && e.push(u)
        }, [c, d, e, u]);
        let h = async () => {
            if (!l.auth) return void alert("Login is currently unavailable. Please contact support.");
            try {
                await (0, s.signInWithPopup)(l.auth, l.googleProvider), e.push(u)
            } catch (e) {
                if ("auth/popup-closed-by-user" === e.code) return;
                if ("auth/popup-blocked" === e.code) return void alert("Popup was blocked by your browser. Please allow popups for this site and try again.");
                if ("auth/cancelled-popup-request" === e.code) return;
                if (e.message ? .includes("initial state") || "auth/missing-initial-state" === e.code) return void alert("Login failed due to browser privacy settings. Please try:\n\n1. Exit private/incognito mode\n2. Allow third-party cookies for this site\n3. Try a different browser");
                if ("auth/network-request-failed" === e.code) return void alert("Network error. Please check your internet connection and try again.");
                alert("Login failed. Please try again.")
            }
        };
        return d ? (0, t.jsx)(n.default, {
            title: "Login",
            className: "min-h-[70vh] flex items-center justify-center",
            children: (0, t.jsx)("div", {
                className: "flex items-center justify-center h-64",
                children: (0, t.jsx)("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"
                })
            })
        }) : c ? null : (0, t.jsx)(n.default, {
            title: "Login",
            className: "min-h-[70vh] flex items-center justify-center",
            children: (0, t.jsxs)("div", {
                className: "w-full max-w-md bg-muted/20 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-sm",
                children: [(0, t.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [(0, t.jsx)("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Welcome Back"
                    }), (0, t.jsx)("p", {
                        className: "text-muted-foreground text-sm",
                        children: "Sign in to access your dashboard"
                    })]
                }), (0, t.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, t.jsxs)("button", {
                        onClick: h,
                        className: "w-full bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-3",
                        children: [(0, t.jsxs)("svg", {
                            className: "w-5 h-5",
                            viewBox: "0 0 24 24",
                            children: [(0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            }), (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            }), (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            }), (0, t.jsx)("path", {
                                fill: "currentColor",
                                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            })]
                        }), "Sign in with Google"]
                    })
                })]
            })
        })
    }
    e.s(["default", () => o])
}]);