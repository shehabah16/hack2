"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96], {
        2096: (e, r, t) => {
            t.r(r), t.d(r, {
                default: () => a
            });
            var l = t(5155),
                s = t(9244);

            function a() {
                return (0, l.jsxs)("div", {
                    className: "flex flex-col sm:flex-row gap-4 pt-8",
                    children: [(0, l.jsxs)("button", {
                        onClick: e => (0, s.RN)(s.e5, e),
                        className: "btn-primary text-xl group relative overflow-hidden",
                        children: [(0, l.jsx)("span", {
                            className: "relative z-10",
                            children: "Claim Your Power Pack"
                        }), (0, l.jsx)("div", {
                            className: "absolute inset-0 bg-red-700 transform translate-y-full transition-transform group-hover:translate-y-0"
                        })]
                    }), (0, l.jsx)("button", {
                        onClick: e => {
                            e.preventDefault();
                            let r = document.getElementById("about");
                            r && r.scrollIntoView({
                                behavior: "smooth"
                            })
                        },
                        className: "px-6 py-3 text-xl border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600/10 transition-colors",
                        children: "Learn More"
                    })]
                })
            }
        }
    }
]);