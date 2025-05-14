"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [581], {
        5581: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => n
            });
            var s = a(5155),
                i = a(5565),
                r = a(2115);

            function n() {
                let e = (0, r.useRef)(null);
                return (0, r.useEffect)(() => {
                    let t = () => {
                        if (!e.current) return;
                        let t = e.current.getBoundingClientRect(),
                            a = Math.max(Math.min(-(.2 * (t.top + t.height / 2 - window.innerHeight / 2)), 200), -200);
                        e.current.style.transform = "\n        translateY(".concat(a, "px)\n        rotate3d(1, 1, 1, ").concat(.05 * a, "deg)\n      ")
                    };
                    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
                }, []), (0, s.jsx)("div", {
                    className: "relative h-[600px] flex items-center justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "relative w-full h-full",
                        children: [(0, s.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, s.jsx)("div", {
                                className: "group perspective-[1000px] cursor-pointer transition-transform duration-500 hover:scale-105",
                                children: (0, s.jsxs)("div", {
                                    ref: e,
                                    className: "relative transform transition-all duration-700 ease-out will-change-transform",
                                    children: [(0, s.jsx)(i.default, {
                                        src: "/images/FIREBLOOD[2JARS].webp",
                                        alt: "FireBlood Supplement Bottles",
                                        width: 500,
                                        height: 600,
                                        className: "object-contain drop-shadow-2xl",
                                        priority: !0
                                    }), (0, s.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    })]
                                })
                            })
                        }), (0, s.jsx)("div", {
                            className: "absolute -top-20 right-0 animate-float-slow perspective-[1000px] hover:rotate-y-12 transition-transform duration-300",
                            children: (0, s.jsx)(i.default, {
                                src: "/images/FIREBLOOD[TOP].webp",
                                alt: "FireBlood Top View",
                                width: 120,
                                height: 120,
                                className: "object-contain opacity-75 drop-shadow-lg"
                            })
                        }), (0, s.jsx)("div", {
                            className: "absolute -bottom-20 -left-20 animate-float perspective-[1000px] hover:rotate-y-12 transition-transform duration-300",
                            children: (0, s.jsx)(i.default, {
                                src: "/images/FIREBLOOD[SIDE].webp",
                                alt: "FireBlood Side View",
                                width: 150,
                                height: 150,
                                className: "object-contain opacity-75 drop-shadow-lg"
                            })
                        }), (0, s.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: (0, s.jsx)("div", {
                                className: "absolute w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"
                            })
                        })]
                    })
                })
            }
        }
    }
]);