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
        className: a = ""
    }) {
        return (0, t.jsx)("section", {
            className: `py-12 ${a}`,
            children: (0, t.jsxs)(r.default, {
                children: [s && (0, t.jsx)("h2", {
                    className: "text-3xl font-bold mb-8 text-center",
                    children: s
                }), e]
            })
        })
    }
    e.s(["default", () => s])
}, 51383, 56313, e => {
    "use strict";
    e.i(47167);
    var t = e.i(91557);
    e.i(51718);
    var r = e.i(18357);
    let s = "https://talos-backend-production.up.railway.app".replace(/\/$/, ""),
        a = new class {
            async getAuthToken() {
                if (!t.auth) return null;
                if (t.auth.currentUser) try {
                    return await t.auth.currentUser.getIdToken(!0)
                } catch (e) {
                    return null
                }
                return new Promise(e => {
                    let s = setTimeout(() => {
                            e(null)
                        }, 5e3),
                        a = (0, r.onAuthStateChanged)(t.auth, async t => {
                            if (clearTimeout(s), a(), t) try {
                                let r = await t.getIdToken(!0);
                                e(r)
                            } catch (t) {
                                e(null)
                            } else e(null)
                        })
                })
            }
            async request(e, t = {}, r = 0) {
                let a = await this.getAuthToken(),
                    i = {
                        "Content-Type": "application/json",
                        ...t.headers
                    };
                if (a && (i.Authorization = `Bearer ${a}`), !s) throw Error("Server configuration error. Please contact support.");
                let n = `${s}${e}`;
                try {
                    let e = await fetch(n, { ...t,
                        headers: i
                    });
                    if (!e.ok) {
                        let t = (await e.json().catch(() => ({
                            detail: "An error occurred"
                        }))).detail || `HTTP error! status: ${e.status}`;
                        throw "object" == typeof t && (t = JSON.stringify(t)), Error(t)
                    }
                    return e.json()
                } catch (s) {
                    if (s instanceof TypeError && "Failed to fetch" === s.message) {
                        if (r < 3) {
                            let s = [2e3, 4e3, 8e3][r];
                            return await new Promise(e => setTimeout(e, s)), this.request(e, t, r + 1)
                        }
                        throw Error("Unable to connect to the server. Please check your internet connection or try again later.")
                    }
                    throw s
                }
            }
            async getEvents(e) {
                let t = e ? `?status=${e}` : "";
                try {
                    return await this.request(`/api/events${t}`)
                } catch (e) {
                    return []
                }
            }
            async getEvent(e) {
                return this.request(`/api/events/${e}`)
            }
            async registerForEvent(e, t) {
                return this.request(`/api/events/${e}/register`, {
                    method: "POST",
                    body: JSON.stringify(t)
                })
            }
            async checkTeamName(e, t) {
                return this.request(`/api/events/${e}/check-team-name?team_name=${encodeURIComponent(t)}`)
            }
            async checkEventRegistration(e) {
                return this.request(`/api/events/${e}/check-registration`)
            }
            async getWorkshops(e) {
                let t = e ? `?status=${e}` : "";
                try {
                    return await this.request(`/api/workshops${t}`)
                } catch (e) {
                    return []
                }
            }
            async getWorkshop(e) {
                return this.request(`/api/workshops/${e}`)
            }
            async createWorkshopPaymentLink(e, t) {
                return this.request(`/api/workshops/${e}/create-payment-link`, {
                    method: "POST",
                    body: JSON.stringify(t)
                })
            }
            async checkWorkshopEmail(e, t) {
                return this.request(`/api/workshops/${e}/check-email?email=${encodeURIComponent(t)}`)
            }
            async checkWorkshopRegistration(e) {
                return this.request(`/api/workshops/${e}/check-registration`)
            }
            async registerWorkshop(e, t) {
                return this.request(`/api/workshops/${e}/register`, {
                    method: "POST",
                    body: JSON.stringify(t)
                })
            }
            async getUserProfile() {
                return this.request("/api/user/profile")
            }
            async updateUserProfile(e) {
                return this.request("/api/user/profile", {
                    method: "PUT",
                    body: JSON.stringify(e)
                })
            }
            async getUserEvents() {
                return this.request("/api/user/events")
            }
            async getUserWorkshops() {
                return this.request("/api/user/workshops")
            }
        };
    e.s(["api", 0, a], 56313), e.s([], 51383)
}, 2153, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        s = e.i(18566);
    e.i(51718);
    var a = e.i(18357),
        i = e.i(58775);
    e.i(51383);
    var n = e.i(56313),
        l = e.i(24136),
        o = e.i(91557),
        c = e.i(57688);

    function d() {
        let d = (0, s.useRouter)(),
            {
                user: h,
                loading: u
            } = (0, l.useAuth)(),
            [m, x] = (0, r.useState)(null),
            [p, g] = (0, r.useState)([]),
            [f, y] = (0, r.useState)([]),
            [b, w] = (0, r.useState)(!0),
            [j, N] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
            u || (h ? (async () => {
                try {
                    w(!0), await h.getIdToken(!0);
                    try {
                        let [e, t, r] = await Promise.all([n.api.getUserProfile(), n.api.getUserEvents(), n.api.getUserWorkshops()]);
                        x(e), g(t), y(r)
                    } catch (n) {
                        let {
                            getUserEventRegistrations: t,
                            getUserWorkshopRegistrations: r
                        } = await e.A(8761), s = h ? .email || "", [a, i] = await Promise.all([t(s), r(s)]);
                        g(a), y(i)
                    }
                } catch (e) {
                    N(e instanceof Error ? e.message : "Failed to load profile")
                } finally {
                    w(!1)
                }
            })() : d.push("/login"))
        }, [h, u, d]);
        let k = async () => {
            o.auth && (await (0, a.signOut)(o.auth), d.push("/"))
        };
        return u || b ? (0, t.jsx)(i.default, {
            title: "Profile",
            className: "min-h-screen",
            children: (0, t.jsx)("div", {
                className: "flex items-center justify-center h-64",
                children: (0, t.jsx)("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"
                })
            })
        }) : j ? (0, t.jsx)(i.default, {
            title: "Profile",
            className: "min-h-screen",
            children: (0, t.jsxs)("div", {
                className: "flex flex-col items-center justify-center h-64 text-center",
                children: [(0, t.jsx)("p", {
                    className: "text-red-500 mb-4",
                    children: j
                }), (0, t.jsx)("p", {
                    className: "text-gray-400 text-sm mb-4",
                    children: "Check browser console for details"
                }), (0, t.jsx)("button", {
                    onClick: () => window.location.reload(),
                    className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
                    children: "Retry"
                })]
            })
        }) : (0, t.jsx)(i.default, {
            title: "Profile",
            className: "min-h-screen",
            children: (0, t.jsxs)("div", {
                className: "max-w-4xl mx-auto space-y-8",
                children: [(0, t.jsx)("div", {
                    className: "bg-muted/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm",
                    children: (0, t.jsxs)("div", {
                        className: "flex flex-col md:flex-row items-center gap-6 text-center md:text-left",
                        children: [m ? .profile_photo || h && h.photoURL ? (0, t.jsx)(c.default, {
                            src: m ? .profile_photo || (h ? .photoURL ? ? ""),
                            alt: "Profile",
                            width: 80,
                            height: 80,
                            className: "rounded-full border-2 border-red-600"
                        }) : (0, t.jsx)("div", {
                            className: "w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-600",
                            children: (0, t.jsx)("span", {
                                className: "text-2xl font-bold text-red-600",
                                children: (m ? .name || (h ? .displayName ? ? "U"))[0].toUpperCase()
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex-1 w-full md:w-auto min-w-0",
                            children: [(0, t.jsx)("h2", {
                                className: "text-2xl font-bold text-white break-words",
                                children: m ? .name || (h ? .displayName ? ? "User")
                            }), (0, t.jsx)("p", {
                                className: "text-gray-400 break-words",
                                children: m ? .email || (h ? .email ? ? "")
                            }), m ? .college && (0, t.jsx)("p", {
                                className: "text-gray-500 text-sm break-words",
                                children: m.college
                            })]
                        }), (0, t.jsx)("button", {
                            onClick: k,
                            className: "px-4 py-2 bg-red-600/20 text-red-500 rounded-lg hover:bg-red-600/30 transition-colors border border-red-600/50 md:mr-2 w-full md:w-auto",
                            children: "Logout"
                        })]
                    })
                }), (0, t.jsxs)("div", {
                    className: "bg-muted/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm",
                    children: [(0, t.jsx)("h3", {
                        className: "text-xl font-bold text-red-600 mb-4 zen-dots-regular",
                        children: "Event Registrations"
                    }), 0 === p.length ? (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("p", {
                            className: "text-gray-400",
                            children: "No event registrations yet."
                        }), (0, t.jsx)("p", {
                            className: "text-gray-500 text-xs mt-2",
                            children: "Debug: Check browser console for API response"
                        })]
                    }) : (0, t.jsx)("div", {
                        className: "space-y-4",
                        children: p.filter((e, t, r) => t === r.findIndex(t => t.registration_id === e.registration_id)).map(e => (0, t.jsxs)("div", {
                            className: "bg-black/30 rounded-lg p-4 border border-white/5",
                            children: [(0, t.jsxs)("div", {
                                className: "flex justify-between items-start",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "text-white font-bold",
                                        children: e.event_name || e.event_id || "Unknown Event"
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: ["Team: ", e.team_name]
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: ["Leader: ", e.leader_name]
                                    }), e.members && e.members.length > 0 && (0, t.jsxs)("p", {
                                        className: "text-gray-500 text-xs mt-1",
                                        children: ["Members: ", e.members.map(e => e.name || "").filter(Boolean).join(", ")]
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-500 text-xs mt-1",
                                        children: ["ID: ", e.registration_id]
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-bold ${"confirmed"===e.status?"bg-green-600/20 text-green-500":"bg-yellow-600/20 text-yellow-500"}`,
                                    children: e.status
                                })]
                            }), (0, t.jsxs)("p", {
                                className: "text-gray-500 text-xs mt-2",
                                children: ["Registered: ", new Date(e.registered_at).toLocaleString()]
                            })]
                        }, e.registration_id))
                    })]
                }), (0, t.jsxs)("div", {
                    className: "bg-muted/20 rounded-xl p-6 border border-white/10 backdrop-blur-sm",
                    children: [(0, t.jsx)("h3", {
                        className: "text-xl font-bold text-red-600 mb-4 zen-dots-regular",
                        children: "Workshop Registrations"
                    }), 0 === f.length ? (0, t.jsx)("p", {
                        className: "text-gray-400",
                        children: "No workshop registrations yet."
                    }) : (0, t.jsx)("div", {
                        className: "space-y-4",
                        children: f.filter((e, t, r) => t === r.findIndex(t => t.registration_id === e.registration_id)).map(e => (0, t.jsxs)("div", {
                            className: "bg-black/30 rounded-lg p-4 border border-white/5",
                            children: [(0, t.jsxs)("div", {
                                className: "flex justify-between items-start",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("p", {
                                        className: "text-white font-bold",
                                        children: e.workshop_name || e.workshop_id
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: ["Participant: ", e.name]
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: ["Amount: ₹", e.amount]
                                    }), (0, t.jsxs)("p", {
                                        className: "text-gray-400 text-sm",
                                        children: ["Payment: ", e.payment_status]
                                    })]
                                }), (0, t.jsx)("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-bold ${"confirmed"===e.payment_status?"bg-green-600/20 text-green-500":"bg-yellow-600/20 text-yellow-500"}`,
                                    children: e.payment_status
                                })]
                            }), (0, t.jsxs)("p", {
                                className: "text-gray-500 text-xs mt-2",
                                children: ["Registered: ", new Date(e.registered_at).toLocaleString()]
                            })]
                        }, e.registration_id))
                    })]
                })]
            })
        })
    }
    e.s(["default", () => d])
}, 8761, e => {
    e.v(t => Promise.all(["static/chunks/9fd07110ac7bbd92.js"].map(t => e.l(t))).then(() => t(49556)))
}]);