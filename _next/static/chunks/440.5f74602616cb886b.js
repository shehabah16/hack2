"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [440], {
        2440: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => o
            });
            var l = t(5155),
                s = t(2115);

            function o() {
                let [e, a] = (0, s.useState)(!1), t = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let e;
                    let l = t.current;
                    if (l) {
                        l.muted = !0, l.defaultMuted = !0;
                        let t = async () => {
                            try {
                                await l.play(), console.log("Video playing successfully")
                            } catch (a) {
                                console.error("Error playing video:", a), e = setTimeout(t, 300)
                            }
                        };
                        l.addEventListener("loadeddata", () => {
                            console.log("Video loaded successfully"), a(!0), t()
                        }), l.load()
                    }
                    return () => {
                        e && clearTimeout(e)
                    }
                }, []), (0, l.jsxs)("div", {
                    className: "absolute inset-0 z-0 overflow-hidden",
                    children: [(0, l.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10"
                    }), (0, l.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60 z-10"
                    }), (0, l.jsx)("video", {
                        ref: t,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "none",
                        className: "object-cover w-full h-full scale-105 transition-all duration-1000 ".concat(e ? "opacity-85 blur-[0.5px]" : "opacity-0"),
                        children: (0, l.jsx)("source", {
                            src: "/images/firebloodfacktory.mp4",
                            type: "video/mp4"
                        })
                    }), (0, l.jsx)("div", {
                        className: "absolute inset-0 bg-red-900/5 mix-blend-overlay z-5"
                    }), (0, l.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-transparent z-5"
                    })]
                })
            }
        }
    }
]);