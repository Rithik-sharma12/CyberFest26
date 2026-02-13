(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 68627, e => {
    "use strict";
    var l = e.i(43476),
        r = e.i(71645),
        t = e.i(47163);

    function i({
        children: e,
        backContent: i,
        className: s,
        onClick: o,
        ...a
    }) {
        let [d, n] = (0, r.useState)(!1);
        return (0, l.jsx)("div", {
            className: (0, t.cn)("group h-96 w-full [perspective:1000px]", s),
            onClick: e => {
                o && o(e);
                let l = e.target;
                l.closest("a") || l.closest("button") || n(!d)
            },
            ...a,
            children: (0, l.jsxs)("div", {
                className: (0, t.cn)("relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]", d ? "[transform:rotateY(180deg)]" : "", "[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]"),
                children: [(0, l.jsx)("div", {
                    className: "absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-2xl overflow-hidden",
                    children: e
                }), (0, l.jsx)("div", {
                    className: "absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-2xl overflow-hidden bg-black/90 border border-white/10 p-6",
                    children: i
                })]
            })
        })
    }
    e.s(["FlipCard", () => i])
}]);