(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        2377: (e, t, s) => {
            Promise.resolve().then(s.t.bind(s, 8173, 23)), Promise.resolve().then(s.t.bind(s, 7970, 23)), Promise.resolve().then(s.bind(s, 2567)), Promise.resolve().then(s.bind(s, 4932)), Promise.resolve().then(s.bind(s, 4456)), Promise.resolve().then(s.bind(s, 5161)), Promise.resolve().then(s.bind(s, 6479)), Promise.resolve().then(s.bind(s, 7581)), Promise.resolve().then(s.bind(s, 438)), Promise.resolve().then(s.bind(s, 3123)), Promise.resolve().then(s.bind(s, 4935)), Promise.resolve().then(s.bind(s, 3785)), Promise.resolve().then(s.bind(s, 5854))
        },
        1956: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = s(306)._(s(580));

            function a(e, t) {
                var s;
                let a = {};
                "function" == typeof e && (a.loader = e);
                let l = { ...a,
                    ...t
                };
                return (0, r.default)({ ...l,
                    modules: null == (s = l.loadableGenerated) ? void 0 : s.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9827: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = s(3719);

            function a(e) {
                let {
                    reason: t,
                    children: s
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return s
            }
        },
        580: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let r = s(5155),
                a = s(2115),
                l = s(9827),
                n = s(9214);

            function i(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            let o = {
                    loader: () => Promise.resolve(i(() => null)),
                    loading: null,
                    ssr: !0
                },
                d = function(e) {
                    let t = { ...o,
                            ...e
                        },
                        s = (0, a.lazy)(() => t.loader().then(i)),
                        d = t.loading;

                    function c(e) {
                        let i = d ? (0, r.jsx)(d, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            o = !t.ssr || !!t.loading,
                            c = o ? a.Suspense : a.Fragment,
                            m = t.ssr ? (0, r.jsxs)(r.Fragment, {
                                children: ["undefined" == typeof window ? (0, r.jsx)(n.PreloadChunks, {
                                    moduleIds: t.modules
                                }) : null, (0, r.jsx)(s, { ...e
                                })]
                            }) : (0, r.jsx)(l.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, r.jsx)(s, { ...e
                                })
                            });
                        return (0, r.jsx)(c, { ...o ? {
                                fallback: i
                            } : {},
                            children: m
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        9214: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = s(5155),
                a = s(7650),
                l = s(5861),
                n = s(8284);

            function i(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let s = l.workAsyncStorage.getStore();
                if (void 0 === s) return null;
                let i = [];
                if (s.reactLoadableManifest && t) {
                    let e = s.reactLoadableManifest;
                    for (let s of t) {
                        if (!e[s]) continue;
                        let t = e[s].files;
                        i.push(...t)
                    }
                }
                return 0 === i.length ? null : (0, r.jsx)(r.Fragment, {
                    children: i.map(e => {
                        let t = s.assetPrefix + "/_next/" + (0, n.encodeURIPath)(e);
                        return e.endsWith(".css") ? (0, r.jsx)("link", {
                            precedence: "dynamic",
                            href: t,
                            rel: "stylesheet",
                            as: "style"
                        }, e) : ((0, a.preload)(t, {
                            as: "script",
                            fetchPriority: "low"
                        }), null)
                    })
                })
            }
        },
        2567: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var r = s(5155),
                a = s(2115);
            let l = {
                title: "New Order",
                location: "J*** M*** - United States \uD83C\uDF0D",
                isReview: !1
            };

            function n() {
                let [e, t] = (0, a.useState)(!1), [s, n] = (0, a.useState)(!1), [i, o] = (0, a.useState)(l), [d, c] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    n(!0)
                }, []);
                let m = () => {
                        if (!s) return "J*** M***";
                        let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                            t = e[Math.floor(Math.random() * e.length)],
                            r = e[Math.floor(Math.random() * e.length)];
                        return "".concat(t, "*** ").concat(r, "***")
                    },
                    x = [{
                        name: "United States",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "United States",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "United Kingdom",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "United Kingdom",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "France",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "Spain",
                        flag: "\uD83C\uDF0D"
                    }, {
                        name: "Germany",
                        flag: "\uD83C\uDF0D"
                    }],
                    h = () => s ? x[Math.floor(Math.random() * x.length)] : x[0],
                    u = () => {
                        if (!s) return l;
                        let e = [{
                                type: "review",
                                template: (e, t) => ({
                                    title: "New Review",
                                    location: "".concat(e, " - ").concat(t.name, " ").concat(t.flag),
                                    stars: 5,
                                    isReview: !0
                                })
                            }, {
                                type: "order",
                                template: (e, t) => ({
                                    title: "New Order",
                                    location: "".concat(e, " - ").concat(t.name, " ").concat(t.flag),
                                    isReview: !1
                                })
                            }],
                            t = e[Math.floor(Math.random() * e.length)],
                            r = m(),
                            a = h();
                        return t.template(r, a)
                    };
                return (0, a.useEffect)(() => {
                    if (!s) return;
                    let e = setTimeout(() => {
                            o(u()), t(!0), c(e => e + 1), setTimeout(() => t(!1), 6e3)
                        }, 35e3),
                        r = setInterval(() => {
                            o(u()), t(!0), c(e => e + 1), setTimeout(() => t(!1), 6e3)
                        }, 8e4);
                    return () => {
                        clearTimeout(e), clearInterval(r)
                    }
                }, [s]), (0, a.useEffect)(() => {
                    if (!s) return;
                    let e = () => {
                        window.scrollY < 100 && t(!1)
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, [s]), (0, r.jsx)("div", {
                    className: "fixed bottom-4 left-4 z-50 transform transition-all duration-300 ".concat(e ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"),
                    children: (0, r.jsxs)("div", {
                        className: "bg-black rounded-xl p-4 border border-red-900/20 shadow-2xl backdrop-blur-sm max-w-sm",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, r.jsx)("div", {
                                className: "w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-2xl",
                                children: i.isReview ? "⭐" : "\uD83D\uDD25"
                            }), (0, r.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, r.jsx)("div", {
                                    className: "text-white text-lg font-bold",
                                    children: i.title
                                }), (0, r.jsxs)("div", {
                                    children: [i.isReview && (0, r.jsx)("div", {
                                        className: "flex mb-1",
                                        children: [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)("span", {
                                            className: "text-yellow-500 text-lg",
                                            children: "⭐"
                                        }, t))
                                    }), (0, r.jsx)("div", {
                                        className: "text-red-500 font-medium",
                                        children: i.location
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mt-3 h-1.5 bg-red-900/20 rounded-full overflow-hidden",
                            children: e && (0, r.jsx)("div", {
                                className: "h-full w-full bg-gradient-to-r from-red-600 to-red-500 origin-left animate-progress-6s"
                            }, d)
                        })]
                    })
                })
            }
        },
        5161: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var r = s(5155),
                a = s(9244);

            function l() {
                return (0, r.jsxs)("section", {
                    className: "py-12 bg-[#0A0A0A] relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05),transparent_70%)]"
                    }), (0, r.jsx)("div", {
                        className: "container-custom relative z-10",
                        children: (0, r.jsx)("div", {
                            className: "max-w-3xl mx-auto",
                            children: (0, r.jsxs)("div", {
                                className: "bg-gradient-to-r from-red-950/20 via-red-900/10 to-red-950/20 rounded-2xl p-8 border border-red-900/20 backdrop-blur-sm relative",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute -inset-px bg-gradient-to-r from-red-600/10 via-red-600/5 to-red-600/10 blur-sm"
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
                                }), (0, r.jsxs)("div", {
                                    className: "relative flex flex-col items-center text-center gap-6",
                                    children: [(0, r.jsxs)("button", {
                                        onClick: e => (0, a.RN)(a.e5, e),
                                        className: "bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-2xl px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transform hover:scale-105 relative group",
                                        children: [(0, r.jsx)("span", {
                                            className: "relative z-10 bg-gradient-to-b from-white to-red-50 bg-clip-text text-transparent",
                                            children: "JOIN THE ELITE"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex -space-x-3",
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)("div", {
                                                className: "w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-red-500 to-red-700 shadow-lg relative",
                                                children: (0, r.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"
                                                })
                                            }, t))
                                        }), (0, r.jsxs)("p", {
                                            className: "text-gray-400 text-sm font-medium",
                                            children: ["Join ", (0, r.jsx)("span", {
                                                className: "text-white",
                                                children: "113,000+"
                                            }), " high performers"]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-black/30 px-6 py-3 rounded-xl border border-red-900/10",
                                        children: [(0, r.jsxs)("div", {
                                            className: "text-right",
                                            children: [(0, r.jsx)("div", {
                                                className: "text-gray-500 line-through text-sm",
                                                children: "$147"
                                            }), (0, r.jsx)("div", {
                                                className: "text-red-500 text-3xl font-black",
                                                children: "$71"
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "h-12 w-px bg-red-900/20"
                                        }), (0, r.jsx)("div", {
                                            className: "bg-red-600/10 px-4 py-1.5 rounded-lg border border-red-900/20",
                                            children: (0, r.jsx)("span", {
                                                className: "text-red-500 text-sm font-bold tracking-wide",
                                                children: "LIMITED TIME"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            s(5565)
        },
        4932: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var r = s(5155),
                a = s(2115),
                l = s(5565);

            function n() {
                let [e, t] = (0, a.useState)(!1), s = (0, a.useRef)(null), [n, i] = (0, a.useState)([{
                    type: "bot",
                    content: "Hello! How can I help you today?",
                    options: ["Contact Support", "Shipping Information", "Payment Methods"]
                }]), o = () => {
                    var e;
                    null === (e = s.current) || void 0 === e || e.scrollIntoView({
                        behavior: "smooth"
                    })
                };
                (0, a.useEffect)(() => {
                    o()
                }, [n]);
                let d = {
                        "Contact Support": {
                            content: "For all inquiries about orders, products, or general questions, please contact our support team at:\n\nsupport@getfireblood.com\n\nOur team typically responds within 24 hours.",
                            options: ["Shipping Information", "Payment Methods", "Back to main menu"]
                        },
                        "Shipping Information": {
                            content: "\uD83C\uDF89 GOOD NEWS! We offer FREE worldwide shipping on all orders!\n\n• Processing time: 24 hours\n• Delivery time: 5-7 business days\n• Tracking number provided\n• All orders are insured",
                            options: ["Contact Support", "Payment Methods", "Back to main menu"]
                        },
                        "Payment Methods": {
                            content: "We accept the following payment methods:\n\n\uD83D\uDCB3 Credit Cards:\n• Visa\n• Mastercard\n• American Express\n\n\uD83C\uDF10 Cryptocurrency:\n• Bitcoin (BTC)\n• Ethereum (ETH)\n• USDT",
                            options: ["Contact Support", "Shipping Information", "Back to main menu"]
                        },
                        "Back to main menu": {
                            content: "What would you like to know?",
                            options: ["Contact Support", "Shipping Information", "Payment Methods"]
                        }
                    },
                    c = e => {
                        i(t => [...t, {
                            type: "user",
                            content: e
                        }]), setTimeout(() => {
                            let t = d[e] || d["Back to main menu"];
                            i(e => [...e, {
                                type: "bot",
                                content: t.content,
                                options: t.options
                            }])
                        }, 500)
                    };
                return (0, r.jsxs)("div", {
                    className: "fixed bottom-4 right-4 z-50",
                    children: [(0, r.jsx)("button", {
                        onClick: () => t(!e),
                        className: "w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors relative group border-2 border-red-600",
                        children: e ? (0, r.jsx)("svg", {
                            className: "w-6 h-6 md:w-8 md:h-8 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            })
                        }) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l.default, {
                                src: "/images/FIREBLOOD[LOGO].webp",
                                alt: "FireBlood Chat",
                                width: 30,
                                height: 30,
                                className: "md:w-10 md:h-10 rounded-full brightness-150 drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                            }), (0, r.jsx)("div", {
                                className: "absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"
                            }), (0, r.jsx)("div", {
                                className: "absolute -top-12 right-0 bg-white text-black text-xs md:text-sm py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg",
                                children: "Chat with us"
                            })]
                        })
                    }), e && (0, r.jsxs)("div", {
                        className: "fixed md:absolute bottom-0 right-0 left-0 md:left-auto md:bottom-20 w-full md:w-96 h-[80vh] md:h-auto bg-[#0A0A0A] rounded-t-xl md:rounded-xl shadow-2xl border border-red-900/20 overflow-hidden",
                        children: [(0, r.jsxs)("div", {
                            className: "bg-red-600 p-3 md:p-4 flex items-center gap-3",
                            children: [(0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)(l.default, {
                                    src: "/images/FIREBLOOD[LOGO].webp",
                                    alt: "FireBlood Support",
                                    width: 32,
                                    height: 32,
                                    className: "md:w-10 md:h-10 rounded-full brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                }), (0, r.jsx)("div", {
                                    className: "absolute -bottom-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "font-bold text-white text-sm md:text-base",
                                    children: "FireBlood Support"
                                }), (0, r.jsx)("p", {
                                    className: "text-[10px] md:text-xs text-red-100",
                                    children: "Online | Typically replies in minutes"
                                })]
                            }), (0, r.jsx)("button", {
                                onClick: () => t(!1),
                                className: "ml-auto md:hidden p-2",
                                children: (0, r.jsx)("svg", {
                                    className: "w-6 h-6 text-white",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "h-[calc(80vh-8rem)] md:h-[400px] overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800",
                            children: [n.map((e, t) => (0, r.jsx)("div", {
                                className: "flex ".concat("user" === e.type ? "justify-end" : "justify-start"),
                                children: (0, r.jsxs)("div", {
                                    className: "max-w-[85%] ".concat("user" === e.type ? "bg-red-600 text-white rounded-l-xl rounded-br-xl shadow-lg" : "bg-gray-800 text-gray-100 rounded-r-xl rounded-bl-xl shadow-lg", " p-3 md:p-4"),
                                    children: [(0, r.jsx)("p", {
                                        className: "whitespace-pre-line text-sm md:text-base",
                                        children: e.content
                                    }), e.options && (0, r.jsx)("div", {
                                        className: "mt-3 md:mt-4 space-y-2",
                                        children: e.options.map((e, t) => (0, r.jsx)("button", {
                                            onClick: () => c(e),
                                            className: "block w-full text-left px-3 md:px-4 py-2 md:py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-xs md:text-sm font-medium shadow-inner hover:shadow-lg",
                                            children: e
                                        }, t))
                                    })]
                                })
                            }, t)), (0, r.jsx)("div", {
                                ref: s
                            })]
                        }), (0, r.jsx)("div", {
                            className: "p-3 md:p-4 border-t border-gray-800 bg-[#0A0A0A]",
                            children: (0, r.jsxs)("div", {
                                className: "bg-gray-800 rounded-full px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-gray-400 flex items-center gap-2",
                                children: [(0, r.jsx)("svg", {
                                    className: "w-4 h-4 md:w-5 md:h-5 text-gray-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 10V3L4 14h7v7l9-11h-7z"
                                    })
                                }), "Choose from the options above to get started"]
                            })
                        })]
                    })]
                })
            }
        },
        6479: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var r = s(5155),
                a = s(2115);

            function l() {
                let [e, t] = (0, a.useState)(null), s = s => {
                    t(e === s ? null : s)
                };
                return (0, r.jsxs)("section", {
                    id: "faq",
                    className: "section-padding bg-black relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"
                    }), (0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(220,38,38,0.03)_2px,transparent_2px)] bg-[size:50px_50px] [background-position:center] opacity-20"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative z-10",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [(0, r.jsx)("p", {
                                className: "text-red-500 uppercase tracking-[0.2em] mb-2",
                                children: "Got Questions?"
                            }), (0, r.jsxs)("h2", {
                                className: "text-4xl font-bold tracking-tight",
                                children: ["Frequently Asked ", (0, r.jsx)("span", {
                                    className: "text-red-600",
                                    children: "Questions"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-lg text-gray-400 mt-4 max-w-2xl mx-auto",
                                children: "Everything you need to know about FireBlood and how it can help you achieve your goals"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "max-w-4xl mx-auto space-y-4",
                            children: [{
                                question: "Is FireBlood a pre-workout supplement?",
                                answer: "No, FireBlood is not a pre-workout supplement. It's a comprehensive all-in-one vitamin and mineral supplement designed for overall health, energy, and performance. While it can be taken before workouts to support performance, it doesn't contain stimulants like caffeine found in typical pre-workout supplements."
                            }, {
                                question: "What makes FireBlood different from other supplements?",
                                answer: "FireBlood stands out with its unique blend of 39 premium ingredients, including chelated minerals and essential vitamins in highly bioavailable forms. This comprehensive formulation ensures maximum absorption and addresses common deficiencies while supporting overall health, energy, and performance beyond what standard supplements offer."
                            }, {
                                question: "How long until I see results with FireBlood?",
                                answer: "Most users report improved energy and focus within the first 1-2 weeks of consistent use. Long-term benefits, such as enhanced immunity and hormonal balance, typically become noticeable after 2-3 months of regular supplementation."
                            }, {
                                question: "When is the best time to take FireBlood?",
                                answer: "For optimal results, take one scoop of FireBlood in the morning with or before breakfast. This timing helps fuel your day with essential nutrients. If you're training, you can also take it 30-60 minutes before your workout for enhanced performance and recovery support."
                            }, {
                                question: "Can FireBlood help with muscle growth and recovery?",
                                answer: "Yes, FireBlood supports muscle growth and recovery through its comprehensive amino acid profile and micronutrient blend. These nutrients support protein synthesis and muscle repair when combined with proper training and nutrition."
                            }, {
                                question: "Does FireBlood contain any stimulants?",
                                answer: "No, FireBlood is completely stimulant-free and contains no caffeine. This makes it suitable for use at any time of day without affecting sleep patterns."
                            }, {
                                question: "How should I take FireBlood for the best taste?",
                                answer: "For optimal taste, mix FireBlood with fruit juice (orange or apple juice work best) which eliminates 95% of the supplement taste. Alternatively, mixing with slightly warm water can also improve the taste and dissolution."
                            }, {
                                question: "Can I take FireBlood with other supplements?",
                                answer: "Yes, FireBlood can be combined with most supplements. However, avoid doubling up on similar vitamins or minerals. It works well with supplements like creatine, but always ensure proper hydration."
                            }, {
                                question: "Is FireBlood suitable for everyone?",
                                answer: "FireBlood is suitable for adults over 18 years old. It's vegetarian-friendly (but not vegan due to Vitamin D source) and Halal certified. However, those with specific medical conditions or on medications should consult their healthcare provider before use."
                            }, {
                                question: "What's the recommended dosage?",
                                answer: "The recommended dosage is one scoop (15g) per day. Do not exceed this amount as FireBlood is precisely formulated to provide optimal daily nutrients in a single serving."
                            }].map((t, a) => (0, r.jsxs)("div", {
                                className: "bg-[#0A0A0A] rounded-lg overflow-hidden border border-red-900/20 hover:border-red-600/30 transition-colors",
                                children: [(0, r.jsxs)("button", {
                                    className: "w-full px-6 py-4 text-left flex items-center justify-between",
                                    onClick: () => s(a),
                                    children: [(0, r.jsx)("h3", {
                                        className: "font-medium text-white text-lg",
                                        children: t.question
                                    }), (0, r.jsx)("span", {
                                        className: "transform transition-transform duration-300 ".concat(e === a ? "rotate-180" : ""),
                                        children: (0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            })
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "px-6 transition-all duration-300 ease-in-out overflow-hidden ".concat(e === a ? "max-h-96 pb-6" : "max-h-0"),
                                    children: (0, r.jsx)("p", {
                                        className: "text-gray-400",
                                        children: t.answer
                                    })
                                })]
                            }, a))
                        })]
                    })]
                })
            }
        },
        7581: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => m
            });
            var r = s(5155);
            s(2115), s(5565);
            var a = s(1956),
                l = s.n(a);

            function n() {
                return (0, r.jsxs)("div", {
                    className: "text-left space-y-6 relative",
                    children: [(0, r.jsx)("div", {
                        className: "absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-red-600 to-transparent"
                    }), (0, r.jsxs)("div", {
                        className: "mb-8",
                        children: [(0, r.jsx)("p", {
                            className: "text-xl font-bold text-red-600 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                            children: "ELEVATE YOUR POTENTIAL"
                        }), (0, r.jsx)("div", {
                            className: "h-0.5 w-32 bg-gradient-to-r from-red-600 to-transparent mt-2"
                        })]
                    }), (0, r.jsx)("h1", {
                        className: "heading-primary !mb-4 relative",
                        children: (0, r.jsxs)("span", {
                            className: "block text-4xl md:text-5xl lg:text-6xl font-black",
                            children: ["Discover", " ", (0, r.jsx)("span", {
                                className: "bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text",
                                children: "Fire Blood Supplement"
                            }), " ", (0, r.jsx)("span", {
                                className: "text-gray-200",
                                children: "for"
                            }), " ", (0, r.jsx)("span", {
                                className: "text-red-500",
                                children: "Better Energy"
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "space-y-2",
                        children: (0, r.jsxs)("p", {
                            className: "text-3xl md:text-4xl lg:text-5xl text-gray-200 font-bold leading-tight",
                            children: ["The Formula For", " ", (0, r.jsxs)("span", {
                                className: "relative inline-block",
                                children: ["Elite Performance", (0, r.jsx)("span", {
                                    className: "absolute -bottom-2 left-0 w-full h-1 bg-red-600/30"
                                })]
                            })]
                        })
                    }), (0, r.jsx)("p", {
                        className: "text-xl text-gray-300 max-w-xl leading-relaxed",
                        children: "Unleash your full potential with our all-in-one vitamin complex, crafted for athletes, entrepreneurs, and those who pursue excellence without compromise."
                    }), (0, r.jsx)("div", {
                        className: "absolute inset-0 pattern-texture pointer-events-none"
                    })]
                })
            }
            let i = l()(() => s.e(440).then(s.bind(s, 2440)), {
                    loadableGenerated: {
                        webpack: () => [2440]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"
                    })
                }),
                o = l()(() => s.e(581).then(s.bind(s, 5581)), {
                    loadableGenerated: {
                        webpack: () => [5581]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)("div", {
                        className: "h-[600px] flex items-center justify-center",
                        children: (0, r.jsx)("div", {
                            className: "text-red-600",
                            children: "Loading Product..."
                        })
                    })
                }),
                d = l()(() => s.e(96).then(s.bind(s, 2096)), {
                    loadableGenerated: {
                        webpack: () => [2096]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)("div", {
                        className: "h-16"
                    })
                });

            function c(e) {
                let {
                    component: t
                } = e;
                switch (t) {
                    case "BackgroundVideo":
                        return (0, r.jsx)(i, {});
                    case "ProductShowcase":
                        return (0, r.jsx)(o, {});
                    case "ActionButtons":
                        return (0, r.jsx)(d, {});
                    default:
                        return null
                }
            }

            function m() {
                return (0, r.jsxs)("section", {
                    id: "home",
                    className: "relative min-h-screen flex items-center pt-20 overflow-hidden",
                    children: [(0, r.jsx)(c, {
                        component: "BackgroundVideo"
                    }), (0, r.jsx)("div", {
                        className: "container-custom relative z-10",
                        children: (0, r.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [(0, r.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, r.jsx)(n, {}), (0, r.jsx)(c, {
                                    component: "ActionButtons"
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-wrap gap-8 pt-12 border-t border-gray-800 mt-12",
                                    children: [(0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("div", {
                                            className: "text-2xl font-bold text-red-600",
                                            children: "10K+"
                                        }), (0, r.jsx)("div", {
                                            className: "text-sm text-gray-400",
                                            children: "Active Users"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("div", {
                                            className: "text-2xl font-bold text-red-600",
                                            children: "98%"
                                        }), (0, r.jsx)("div", {
                                            className: "text-sm text-gray-400",
                                            children: "Satisfaction Rate"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("div", {
                                            className: "text-2xl font-bold text-red-600",
                                            children: "24/7"
                                        }), (0, r.jsx)("div", {
                                            className: "text-sm text-gray-400",
                                            children: "Support"
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)(c, {
                                component: "ProductShowcase"
                            })]
                        })
                    })]
                })
            }
            l()(() => s.e(440).then(s.bind(s, 2440)), {
                loadableGenerated: {
                    webpack: () => [2440]
                },
                ssr: !1
            }), l()(() => s.e(581).then(s.bind(s, 5581)), {
                loadableGenerated: {
                    webpack: () => [5581]
                },
                ssr: !1
            }), l()(() => s.e(96).then(s.bind(s, 2096)), {
                loadableGenerated: {
                    webpack: () => [2096]
                },
                ssr: !1
            })
        },
        438: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var r = s(5155),
                a = s(2115),
                l = s(5565);

            function n() {
                let e = (0, a.useRef)(null),
                    t = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let s = () => {
                        if (!e.current || !t.current) return;
                        let s = t.current.getBoundingClientRect(),
                            r = window.innerHeight;
                        s.top;
                        let a = s.height,
                            l = (r / 2 + window.scrollY - (s.top + window.scrollY)) / a,
                            n = .5 * a * (l = Math.max(0, Math.min(l, 1))),
                            i = 2 * Math.sin(l * Math.PI),
                            o = .03 * Math.sin(l * Math.PI * 2);
                        e.current.style.transform = "\n        translateY(".concat(n, "px)\n        rotate(").concat(i, "deg)\n        scale(").concat(1.05 + o, ")\n      "), e.current.style.transition = "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
                        let d = e.current.querySelectorAll(".glow-effect"),
                            c = .6 + .4 * l;
                        if (d.forEach(e => {
                                e.style.opacity = c
                            }), t.current) {
                            let e = t.current.querySelector(".progress-line");
                            if (e) {
                                let t = 100 * l;
                                e.style.background = "linear-gradient(to bottom, \n            rgb(220,38,38) 0%, \n            rgb(220,38,38) ".concat(t, "%, \n            rgb(255,255,255) ").concat(t, "%, \n            rgb(255,255,255) 100%)"), e.style.opacity = "0.8"
                            }
                        }
                    };
                    return window.addEventListener("scroll", s), s(), () => window.removeEventListener("scroll", s)
                }, []), (0, r.jsxs)("section", {
                    id: "benefits",
                    ref: t,
                    className: "section-padding min-h-[200vh] bg-black relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(220,38,38,0.03)_2px,transparent_2px)] bg-[size:50px_50px] [background-position:center] opacity-20"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative z-10",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-20",
                            children: [(0, r.jsx)("p", {
                                className: "text-red-500 uppercase tracking-[0.2em] mb-4",
                                children: "Premium All-in-One Supplement"
                            }), (0, r.jsxs)("h2", {
                                className: "text-5xl font-bold tracking-tight",
                                children: ["HOW TO USE ", (0, r.jsx)("span", {
                                    className: "text-red-600",
                                    children: "FIREBLOOD"
                                }), (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                    className: "text-white",
                                    children: "PROPERLY"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-xl text-gray-400 mt-6 max-w-3xl mx-auto",
                                children: "39 premium ingredients designed for entrepreneurs, athletes, and high performers seeking optimal nutritional support for their fast-paced lifestyle."
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 relative",
                            children: [(0, r.jsxs)("div", {
                                className: "absolute left-1/2 top-0 -translate-x-1/2 w-[16px] h-full progress-line rounded-full bg-white/80",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-red-600/0 via-red-600/50 to-red-600/0 blur-xl"
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/0 blur-lg"
                                }), (0, r.jsxs)("div", {
                                    className: "absolute left-1/2 -translate-x-1/2 w-48",
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-red-600/60 blur-[150px] animate-pulse-slow glow-effect"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-red-600/70 via-red-600/50 to-red-600/70 blur-[170px] glow-effect"
                                    }), (0, r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-radial from-red-600/50 to-transparent blur-[130px] animate-pulse glow-effect"
                                    }), (0, r.jsx)("div", {
                                        ref: e,
                                        className: "sticky top-1/3 w-full will-change-transform",
                                        children: (0, r.jsx)(l.default, {
                                            src: "/images/snakefireblood.webp",
                                            alt: "FireBlood Path",
                                            width: 300,
                                            height: 1e3,
                                            className: "w-full h-auto brightness-150 contrast-125 saturate-150 drop-shadow-[0_0_80px_rgba(220,38,38,1)]",
                                            priority: !0
                                        })
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold",
                                            children: "1"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute -inset-2 bg-red-600/20 rounded-full blur-lg -z-10"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: "FIRST TIME USE"
                                        }), (0, r.jsx)("p", {
                                            className: "text-red-500",
                                            children: "Essential Guidelines"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCCF"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "One scoop per day (15g) - Never exceed"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCA7"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Mix with 8-10oz water or fruit juice"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "⚠️"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Not recommended under 18 years old"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-6 space-y-4",
                                    children: [(0, r.jsxs)("div", {
                                        className: "bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-xl p-6",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-red-500 font-medium mb-2",
                                            children: "Dietary Information"
                                        }), (0, r.jsxs)("p", {
                                            className: "text-gray-400 font-normal",
                                            children: ["✓ Halal Certified", (0, r.jsx)("br", {}), "✓ Vegetarian Friendly", (0, r.jsx)("br", {}), "✓ No Caffeine", (0, r.jsx)("br", {}), "✗ Not Vegan (D3 from Cholecalciferol)"]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-xl p-6",
                                        children: [(0, r.jsx)("p", {
                                            className: "text-red-500 font-medium mb-2",
                                            children: "Pro Tip: Taste Enhancement"
                                        }), (0, r.jsx)("p", {
                                            className: "text-gray-400 font-normal",
                                            children: "Mix with fruit juice (orange, apple) to improve taste by 95%. Slightly warm water can also enhance mixing and flavor."
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold",
                                            children: "2"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute -inset-2 bg-red-600/20 rounded-full blur-lg -z-10"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: "OPTIMAL TIMING"
                                        }), (0, r.jsx)("p", {
                                            className: "text-red-500",
                                            children: "Choose Your Moment"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83C\uDF05"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Morning: Start your day with nutrients"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCAA"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Pre-workout: For energy & muscle preservation"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDD04"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Post-workout: For optimal recovery"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-6 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-xl p-6",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-red-500 font-medium mb-2",
                                        children: "Important Note"
                                    }), (0, r.jsx)("p", {
                                        className: "text-gray-400 font-normal",
                                        children: "Do NOT take at night as Vitamin D may interfere with melatonin production. Can be taken with or without food, though a small meal may enhance absorption."
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold",
                                            children: "3"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute -inset-2 bg-red-600/20 rounded-full blur-lg -z-10"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: "KEY BENEFITS"
                                        }), (0, r.jsx)("p", {
                                            className: "text-red-500",
                                            children: "39 Premium Ingredients"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDCAA"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Muscle & Bone Health (D3, K2, Amino Acids)"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "⚡"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Energy & Focus (B Complex, Choline)"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83E\uDDE0"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Hormonal Health (Mg, Zn, Selenium)"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "✨"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Anti-aging & Recovery (Glycine, Taurine)"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-6 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-xl p-6",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-red-500 font-medium mb-2",
                                        children: "Perfect For"
                                    }), (0, r.jsx)("p", {
                                        className: "text-gray-400 font-normal",
                                        children: "Entrepreneurs • Athletes • Executives • Body Builders • Fighters • Health Enthusiasts • Anyone seeking higher energy & testosterone levels"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-4 mb-8",
                                    children: [(0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-2xl font-bold",
                                            children: "4"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute -inset-2 bg-red-600/20 rounded-full blur-lg -z-10"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("h3", {
                                            className: "text-2xl font-bold text-white",
                                            children: "SAFETY GUIDELINES"
                                        }), (0, r.jsx)("p", {
                                            className: "text-red-500",
                                            children: "Important Precautions"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83C\uDFE5"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Consult healthcare provider if you have conditions"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "⚖️"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Under 18: Not recommended"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 bg-[#0A0A0A] rounded-full px-6 py-4 border border-red-900/20",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-2xl",
                                            children: "\uD83D\uDD04"
                                        }), (0, r.jsx)("span", {
                                            className: "text-gray-300",
                                            children: "Can be mixed with creatine (stay hydrated)"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-6 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 rounded-xl p-6",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-red-500 font-medium mb-2",
                                        children: "Stop Use If"
                                    }), (0, r.jsx)("p", {
                                        className: "text-gray-400 font-normal",
                                        children: "If you experience any adverse symptoms, discontinue use immediately and consult your healthcare provider."
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        3123: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var r = s(5155),
                a = s(5565),
                l = s(2115);

            function n() {
                let [e, t] = (0, l.useState)(!1), s = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        if (!s.current) return;
                        let e = s.current.getBoundingClientRect();
                        window.scrollY;
                        let t = Math.max(Math.min(-(.1 * (e.top + e.height / 2 - window.innerHeight / 2)), 50), -50);
                        s.current.style.transform = "translateY(".concat(t, "px)")
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []), (0, r.jsxs)("section", {
                    id: "ingredients",
                    className: "relative bg-black py-24 overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"
                    }), (0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(220,38,38,0.03)_2px,transparent_2px)] bg-[size:50px_50px] [background-position:center] opacity-20"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative z-10",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-20",
                            children: [(0, r.jsxs)("h2", {
                                className: "text-5xl md:text-7xl font-black mb-6 tracking-tight",
                                children: ["FIREBLOOD POWDER", " ", (0, r.jsx)("span", {
                                    className: "text-red-600",
                                    children: "INGREDIENTS"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative inline-block",
                                children: [(0, r.jsx)("span", {
                                    className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent",
                                    children: "PREMIUM FORMULA"
                                }), (0, r.jsx)("div", {
                                    className: "absolute -bottom-2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -translate-x-1/2"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-xl text-gray-400 max-w-2xl mx-auto mt-6",
                                children: "39 premium ingredients designed for high performers seeking optimal nutritional support."
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-20 items-center",
                            children: [(0, r.jsxs)("div", {
                                ref: s,
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "relative group cursor-pointer transform hover:scale-105 transition-all duration-500",
                                    onClick: () => t(!e),
                                    children: [(0, r.jsxs)("div", {
                                        className: "absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 transition-all duration-500 pointer-events-none ".concat(e ? "opacity-0 translate-y-10" : "opacity-100"),
                                        children: [(0, r.jsxs)("div", {
                                            className: "relative pointer-events-auto",
                                            children: [(0, r.jsx)("div", {
                                                className: "absolute -inset-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur animate-ping opacity-20"
                                            }), (0, r.jsx)("div", {
                                                className: "absolute -inset-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full blur animate-pulse opacity-40"
                                            }), (0, r.jsxs)("button", {
                                                className: "relative px-8 py-4 bg-black/90 backdrop-blur-sm rounded-full leading-none flex items-center gap-3 group hover:bg-red-950 transition-all duration-300 border border-red-500/50 hover:border-red-500",
                                                onClick: e => {
                                                    e.stopPropagation(), t(!0)
                                                },
                                                children: [(0, r.jsx)("span", {
                                                    className: "text-red-500 group-hover:text-red-400 transition duration-200 text-lg font-medium",
                                                    children: "CLICK TO VIEW INGREDIENTS"
                                                }), (0, r.jsx)("svg", {
                                                    className: "w-6 h-6 text-red-500 group-hover:text-red-400 animate-bounce",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M19 9l-7 7-7-7"
                                                    })
                                                })]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex gap-4 animate-float pointer-events-none",
                                            children: [(0, r.jsx)("span", {
                                                className: "bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-red-500 border border-red-500/20",
                                                children: "39 Ingredients"
                                            }), (0, r.jsx)("span", {
                                                className: "bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-red-500 border border-red-500/20",
                                                children: "Full Supplement Facts"
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "relative z-20 transition-all duration-700 ".concat(e ? "opacity-30 scale-95 blur-sm" : "opacity-100"),
                                        children: (0, r.jsx)(a.default, {
                                            src: "/images/FIREBLOOD[2JARS].webp",
                                            alt: "FireBlood Premium Formula",
                                            width: 600,
                                            height: 800,
                                            className: "w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(220,38,38,0.5)]",
                                            priority: !0
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "absolute inset-0 z-30 transition-all duration-700 ".concat(e ? "opacity-100 md:scale-[1.02] scale-[1.02] md:translate-y-0 -translate-y-4" : "opacity-0 scale-90"),
                                        children: [(0, r.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
                                        }), (0, r.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, r.jsx)(a.default, {
                                                src: "/images/ingredients.webp",
                                                alt: "Supplement Facts",
                                                width: 600,
                                                height: 800,
                                                className: "w-full h-full object-contain drop-shadow-[0_0_30px_rgba(220,38,38,0.8)]"
                                            }), (0, r.jsx)("div", {
                                                className: "absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-4 z-50",
                                                children: (0, r.jsx)("button", {
                                                    className: "bg-black/90 hover:bg-red-950 text-white px-6 py-3 rounded-full border-2 border-red-500 backdrop-blur-sm transition-all duration-300 group text-lg font-medium",
                                                    onClick: e => {
                                                        e.stopPropagation()
                                                    },
                                                    children: (0, r.jsx)("span", {
                                                        className: "group-hover:text-red-400",
                                                        children: "Click image to close"
                                                    })
                                                })
                                            })]
                                        }), e && (0, r.jsx)("div", {
                                            className: "absolute top-8 right-8 z-40",
                                            children: (0, r.jsx)("button", {
                                                className: "bg-black/90 hover:bg-red-950 text-white px-6 py-3 rounded-full border-2 border-red-500 backdrop-blur-sm transition-all duration-300 group text-lg font-medium",
                                                onClick: e => {
                                                    e.stopPropagation(), t(!1)
                                                },
                                                children: (0, r.jsx)("span", {
                                                    className: "group-hover:text-red-400",
                                                    children: "✕ Close"
                                                })
                                            })
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "absolute inset-0 z-10 bg-gradient-to-b from-red-600/30 via-red-600/0 to-red-600/30 blur-3xl transition-all duration-700 ".concat(e ? "opacity-100 scale-105" : "opacity-50")
                                    }), (0, r.jsx)("div", {
                                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden z-50",
                                        children: (0, r.jsx)("span", {
                                            className: "text-red-500/80 text-sm animate-pulse pointer-events-none",
                                            children: e ? "Tap to close" : "Tap to view details"
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block z-40 pointer-events-none",
                                    children: (0, r.jsxs)("div", {
                                        className: "space-y-4",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-16 h-16 relative animate-pulse-slow",
                                            children: (0, r.jsx)("svg", {
                                                className: "absolute inset-0 text-red-600/20",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: (0, r.jsx)("path", {
                                                    d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
                                                })
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "w-16 h-16 relative animate-pulse-slow delay-150",
                                            children: (0, r.jsx)("svg", {
                                                className: "absolute inset-0 text-red-600/20",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: (0, r.jsx)("path", {
                                                    d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "space-y-8",
                                children: [(0, r.jsxs)("div", {
                                    className: "bg-gradient-to-r from-black via-red-950/20 to-black p-6 rounded-xl border border-red-900/20 hover:border-red-600/30 transition-colors duration-300 group",
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-2xl font-bold mb-4 text-red-600 group-hover:text-red-500 transition-colors",
                                        children: "Core Vitamins"
                                    }), (0, r.jsxs)("ul", {
                                        className: "space-y-3",
                                        children: [(0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Vitamin A"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Skin health, eye health, cell regeneration"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Vitamin D + K2"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Overall health, testosterone levels, teeth health"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "B Vitamin Complex"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "High energy levels and vitality"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "bg-gradient-to-r from-black via-red-950/20 to-black p-6 rounded-xl border border-red-900/20 hover:border-red-600/30 transition-colors duration-300 group",
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-2xl font-bold mb-4 text-red-600 group-hover:text-red-500 transition-colors",
                                        children: "Essential Minerals"
                                    }), (0, r.jsxs)("ul", {
                                        className: "space-y-3",
                                        children: [(0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Magnesium + Zinc"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Hormonal health, muscle health, bone health"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Selenium + Iodium"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Thyroid function and metabolism"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Calcium"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Thyroid and bone strength"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "bg-gradient-to-r from-black via-red-950/20 to-black p-6 rounded-xl border border-red-900/20 hover:border-red-600/30 transition-colors duration-300 group",
                                    children: [(0, r.jsx)("h3", {
                                        className: "text-2xl font-bold mb-4 text-red-600 group-hover:text-red-500 transition-colors",
                                        children: "Advanced Compounds"
                                    }), (0, r.jsxs)("ul", {
                                        className: "space-y-3",
                                        children: [(0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "9 Essential Amino Acids"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Muscle mass and body regeneration"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Glycine + Taurine + Proline"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Joint health, heart health, anti-aging"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("li", {
                                            className: "flex items-start gap-3",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-red-600 mt-1",
                                                children: "✓"
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("strong", {
                                                    className: "block text-lg group-hover:text-red-500 transition-colors",
                                                    children: "Choline"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-gray-400",
                                                    children: "Brain function and body detoxification"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "bg-black/80 backdrop-blur p-4 rounded-xl border border-red-500/20 text-center transform hover:scale-105 transition-transform hover:border-red-500/40",
                                        children: (0, r.jsx)("span", {
                                            className: "text-red-500 font-medium tracking-wider text-sm",
                                            children: "PREMIUM GRADE"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "bg-black/80 backdrop-blur p-4 rounded-xl border border-red-500/20 text-center transform hover:scale-105 transition-transform hover:border-red-500/40",
                                        children: (0, r.jsx)("span", {
                                            className: "text-red-500 font-medium tracking-wider text-sm",
                                            children: "MAXIMUM POTENCY"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "bg-black/80 backdrop-blur p-4 rounded-xl border border-red-500/20 text-center transform hover:scale-105 transition-transform hover:border-red-500/40",
                                        children: (0, r.jsx)("span", {
                                            className: "text-red-500 font-medium tracking-wider text-sm",
                                            children: "SCIENCE-BACKED"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        4935: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => d
            });
            var r = s(5155),
                a = s(2115),
                l = s(8173),
                n = s.n(l),
                i = s(5565),
                o = s(9244);

            function d() {
                let [e, t] = (0, a.useState)(!1), [s, l] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    l(!0)
                }, []);
                let d = (e, s) => {
                        e.preventDefault(), t(!1);
                        let r = document.getElementById(s);
                        if (r) {
                            let e = r.getBoundingClientRect().top + window.pageYOffset - 80;
                            window.scrollTo({
                                top: e,
                                behavior: "smooth"
                            })
                        }
                    },
                    c = [{
                        id: "about",
                        label: "About"
                    }, {
                        id: "benefits",
                        label: "Benefits"
                    }, {
                        id: "ingredients",
                        label: "Ingredients"
                    }, {
                        id: "reviews",
                        label: "Reviews"
                    }, {
                        id: "faq",
                        label: "FAQ"
                    }];
                return s ? (0, r.jsx)("nav", {
                    className: "fixed w-full bg-gradient-to-b from-black/95 to-black/70 backdrop-blur-sm z-50 py-3",
                    children: (0, r.jsxs)("div", {
                        className: "container-custom flex justify-between items-center",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center gap-3 relative z-50",
                            children: [(0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute -inset-2 bg-black/50 rounded-full blur-lg"
                                }), (0, r.jsx)(n(), {
                                    href: "/",
                                    className: "relative",
                                    children: (0, r.jsx)(i.default, {
                                        src: "/images/FIREBLOOD[LOGO].webp",
                                        alt: "FireBlood Logo",
                                        width: 48,
                                        height: 48,
                                        className: "relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] brightness-125 hover:brightness-150 transition-all duration-300",
                                        priority: !0
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "absolute -inset-3 bg-red-600/30 rounded-full blur-xl animate-pulse"
                                }), (0, r.jsx)("div", {
                                    className: "absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-full blur-2xl animate-pulse-slow"
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(n(), {
                                    href: "/",
                                    className: "text-xl font-bold text-red-600 hover:text-red-500 transition-colors",
                                    children: "FireBlood"
                                }), (0, r.jsx)("div", {
                                    className: "h-0.5 w-12 bg-gradient-to-r from-red-600 to-transparent mt-0.5"
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: [c.map(e => (0, r.jsx)("a", {
                                href: "#".concat(e.id),
                                onClick: t => d(t, e.id),
                                className: "text-gray-300 hover:text-white transition-colors",
                                children: e.label
                            }, e.id)), (0, r.jsxs)("button", {
                                onClick: e => (0, o.RN)(o.e5, e),
                                className: "btn-primary relative overflow-hidden group",
                                children: [(0, r.jsx)("span", {
                                    className: "relative z-10",
                                    children: "Order Now"
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full transition-transform group-hover:translate-y-0"
                                })]
                            })]
                        }), (0, r.jsx)("button", {
                            onClick: () => t(!e),
                            className: "md:hidden relative z-50 p-2.5 bg-black rounded-lg border border-red-600/30 hover:border-red-600/50 transition-colors",
                            "aria-label": "Toggle mobile menu",
                            "aria-expanded": e,
                            "aria-controls": "mobile-menu",
                            children: (0, r.jsxs)("div", {
                                className: "w-5 h-3.5 relative flex flex-col justify-between",
                                children: [(0, r.jsx)("span", {
                                    className: "w-full h-0.5 bg-red-600 transform transition-transform duration-300 ".concat(e ? "rotate-45 translate-y-1.5" : "")
                                }), (0, r.jsx)("span", {
                                    className: "w-full h-0.5 bg-red-600 transition-opacity duration-300 ".concat(e ? "opacity-0" : "")
                                }), (0, r.jsx)("span", {
                                    className: "w-full h-0.5 bg-red-600 transform transition-transform duration-300 ".concat(e ? "-rotate-45 -translate-y-1.5" : "")
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            id: "mobile-menu",
                            className: "fixed inset-0 bg-black transition-all duration-300 md:hidden ".concat(e ? "opacity-100 visible" : "opacity-0 invisible"),
                            style: {
                                zIndex: 40
                            },
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": "Mobile navigation menu",
                            children: (0, r.jsxs)("div", {
                                className: "h-full flex flex-col pt-20 bg-black",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-600 to-red-600"
                                }), (0, r.jsx)("div", {
                                    className: "flex-1 flex flex-col items-center justify-center gap-10 text-center px-6 bg-black",
                                    children: c.map(e => (0, r.jsxs)("a", {
                                        href: "#".concat(e.id),
                                        onClick: t => d(t, e.id),
                                        className: "relative text-2xl text-gray-300 hover:text-white transition-colors group",
                                        children: [(0, r.jsx)("span", {
                                            children: e.label
                                        }), (0, r.jsx)("div", {
                                            className: "absolute -bottom-2 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 -translate-x-1/2"
                                        })]
                                    }, e.id))
                                }), (0, r.jsx)("div", {
                                    className: "w-full px-6 pb-12 bg-black",
                                    children: (0, r.jsxs)("button", {
                                        onClick: e => {
                                            t(!1), (0, o.RN)(o.e5, e)
                                        },
                                        className: "w-full btn-primary text-xl relative overflow-hidden group py-4",
                                        children: [(0, r.jsx)("span", {
                                            className: "relative z-10",
                                            children: "Order Now"
                                        }), (0, r.jsx)("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full transition-transform group-hover:translate-y-0"
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                }) : null
            }
        },
        3785: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => n
            });
            var r = s(5155),
                a = s(2115),
                l = s(5565);

            function n() {
                let [e, t] = (0, a.useState)(null), s = e => {
                    t(e)
                }, n = () => {
                    t(null)
                };
                return (0, r.jsxs)("section", {
                    id: "reviews",
                    className: "section-padding bg-black relative overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"
                    }), (0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(220,38,38,0.03)_2px,transparent_2px)] bg-[size:50px_50px] [background-position:center] opacity-20"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative z-10",
                        children: [(0, r.jsxs)("div", {
                            className: "text-center mb-12",
                            children: [(0, r.jsx)("p", {
                                className: "text-red-500 uppercase tracking-[0.2em] mb-2",
                                children: "Real Results"
                            }), (0, r.jsx)("h2", {
                                className: "text-4xl font-bold tracking-tight mb-4",
                                children: "OUR REVIEWS"
                            }), (0, r.jsxs)("p", {
                                className: "text-2xl font-bold text-gray-200 mb-4",
                                children: ["OUR CLIENTS ARE ", (0, r.jsx)("span", {
                                    className: "text-red-600",
                                    children: "WINNING"
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-lg text-gray-400 mt-4 max-w-2xl mx-auto",
                                children: "Join thousands of successful clients who have transformed their lives with FireBlood"
                            })]
                        }), (0, r.jsx)("div", {
                            className: "grid md:grid-cols-2 gap-4 mb-8",
                            children: [{
                                id: "4W_0TXaJ5Jk",
                                title: "FireBlood Transformation Story",
                                type: "shorts",
                                thumbnail: "https://i.ytimg.com/vi/4W_0TXaJ5Jk/hqdefault.jpg"
                            }, {
                                id: "uJqG0507amE",
                                title: "Energy Level Boost Results",
                                type: "shorts",
                                thumbnail: "https://i.ytimg.com/vi/uJqG0507amE/hqdefault.jpg"
                            }, {
                                id: "SDZ9rdmb0Ms",
                                title: "Athletic Performance Review",
                                type: "video",
                                thumbnail: "https://i.ytimg.com/vi/SDZ9rdmb0Ms/hqdefault.jpg"
                            }, {
                                id: "IAC5NTbgVnk",
                                title: "Strength Gains Journey",
                                type: "shorts",
                                thumbnail: "https://i.ytimg.com/vi/IAC5NTbgVnk/hqdefault.jpg"
                            }].map(e => (0, r.jsx)("div", {
                                className: "relative group cursor-pointer",
                                onClick: () => s(e.id),
                                children: (0, r.jsxs)("div", {
                                    className: "aspect-video bg-black/50 rounded-md overflow-hidden relative",
                                    children: [(0, r.jsx)(l.default, {
                                        src: e.thumbnail,
                                        alt: e.title,
                                        width: 480,
                                        height: 360,
                                        className: "w-full h-full object-cover",
                                        priority: !0,
                                        onError: t => {
                                            t.target.src = "https://i.ytimg.com/vi/".concat(e.id, "/default.jpg")
                                        }
                                    }), (0, r.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors",
                                        children: (0, r.jsx)("div", {
                                            className: "w-12 h-12 flex items-center justify-center rounded-full bg-red-600 group-hover:bg-red-700 transition-colors",
                                            children: (0, r.jsx)("svg", {
                                                className: "w-6 h-6 text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                    d: "M8 5v14l11-7z"
                                                })
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent",
                                        children: (0, r.jsx)("p", {
                                            className: "text-sm font-medium text-white",
                                            children: e.title
                                        })
                                    })]
                                })
                            }, e.id))
                        }), (0, r.jsx)("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [{
                                id: 1,
                                image: "/images/fireblood-review1.webp",
                                title: "Incredible Energy Boost",
                                stats: {
                                    likes: 75,
                                    comments: 9,
                                    shares: 4
                                }
                            }, {
                                id: 2,
                                image: "/images/fireblood-review2.webp",
                                title: "Enhanced Workout Performance",
                                stats: {
                                    likes: 52,
                                    comments: 12,
                                    shares: 3
                                }
                            }, {
                                id: 3,
                                image: "/images/fireblood-review3.webp",
                                title: "Complete Body Transformation",
                                stats: {
                                    likes: 37,
                                    comments: 5,
                                    shares: 7
                                }
                            }, {
                                id: 4,
                                image: "/images/fireblood-review4.webp",
                                title: "Life-Changing Results",
                                stats: {
                                    likes: 44,
                                    comments: 8,
                                    shares: 6
                                }
                            }].map(e => (0, r.jsxs)("div", {
                                className: "bg-[#0A0A0A] rounded-md overflow-hidden",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 p-3 pb-2 relative z-10 bg-[#0A0A0A]",
                                    children: [(0, r.jsx)("div", {
                                        className: "w-8 h-8 bg-red-950 rounded-full"
                                    }), (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("p", {
                                            className: "font-bold text-sm text-white",
                                            children: "Client Success"
                                        }), (0, r.jsx)("p", {
                                            className: "text-xs text-gray-400",
                                            children: e.title
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "w-full",
                                    children: (0, r.jsx)(l.default, {
                                        src: e.image,
                                        alt: e.title,
                                        width: 800,
                                        height: 450,
                                        className: "w-full h-auto",
                                        priority: !0
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center gap-3 text-xs text-gray-400 p-3 pt-2",
                                    children: [(0, r.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-red-500",
                                            children: "\uD83D\uDD25"
                                        }), " ", e.stats.likes]
                                    }), (0, r.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, r.jsx)("span", {
                                            children: "\uD83D\uDCAC"
                                        }), " ", e.stats.comments]
                                    }), (0, r.jsxs)("span", {
                                        className: "flex items-center gap-1",
                                        children: [(0, r.jsx)("span", {
                                            children: "\uD83D\uDD04"
                                        }), " ", e.stats.shares]
                                    })]
                                })]
                            }, e.id))
                        }), e && (0, r.jsx)("div", {
                            className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
                            onClick: n,
                            children: (0, r.jsxs)("div", {
                                className: "relative w-full max-w-4xl aspect-video",
                                children: [(0, r.jsx)("button", {
                                    className: "absolute -top-10 right-0 text-white hover:text-red-500 transition-colors",
                                    onClick: n,
                                    children: (0, r.jsx)("svg", {
                                        className: "w-8 h-8",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                }), (0, r.jsx)("iframe", {
                                    src: "https://www.youtube.com/embed/".concat(e, "?autoplay=1"),
                                    title: "YouTube video player",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0,
                                    className: "w-full h-full rounded-md"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        5854: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var r = s(5155);
            s(2115);
            var a = s(9244);

            function l() {
                return (0, r.jsxs)("section", {
                    className: "relative bg-black py-16 overflow-hidden",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15),transparent_70%)]"
                    }), (0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [background-position:center] opacity-20"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative z-10",
                        children: [(0, r.jsx)("div", {
                            className: "flex justify-center mb-8",
                            children: (0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsx)("div", {
                                    className: "w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center animate-pulse",
                                    children: (0, r.jsx)("svg", {
                                        className: "w-8 h-8 text-yellow-500",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "absolute -inset-2 bg-yellow-500/20 rounded-full blur-lg animate-pulse-slow"
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "text-center mb-8",
                            children: [(0, r.jsxs)("div", {
                                className: "text-4xl md:text-6xl font-black mb-4 tracking-tight",
                                children: ["LOCK-IN YOUR PRICE OF", " ", (0, r.jsxs)("span", {
                                    className: "relative inline-block",
                                    children: [(0, r.jsx)("span", {
                                        className: "relative z-10 text-red-600",
                                        children: "$71"
                                    }), (0, r.jsx)("span", {
                                        className: "absolute top-1/2 left-0 w-full h-0.5 bg-red-600/30 transform -rotate-3"
                                    })]
                                })]
                            }), (0, r.jsx)("p", {
                                className: "text-xl md:text-2xl text-gray-300 mb-8",
                                children: "The price will increase to $147 a month. This is your last chance."
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex justify-center mb-12",
                            children: (0, r.jsx)("div", {
                                className: "bg-red-950/50 rounded-lg backdrop-blur-sm border border-red-900/20 px-8 py-4 animate-pulse",
                                children: (0, r.jsx)("p", {
                                    className: "text-red-500 font-bold text-xl md:text-2xl",
                                    children: "⚠️ PRICE INCREASE IN 24 HOURS ⚠️"
                                })
                            })
                        }), (0, r.jsxs)("div", {
                            className: "text-center space-y-4",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-center items-center gap-2",
                                children: [(0, r.jsx)("div", {
                                    className: "flex -space-x-2",
                                    children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)("div", {
                                        className: "w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 border-2 border-black"
                                    }, t))
                                }), (0, r.jsx)("span", {
                                    className: "text-xl text-gray-300",
                                    children: "+1000 Equipped Men"
                                })]
                            }), (0, r.jsxs)("p", {
                                className: "text-xl text-gray-400",
                                children: ["Join thousands of high performers who have unlocked their full potential", (0, r.jsx)("br", {}), "with FireBlood's premium all-in-one formula."]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "mt-12 text-center",
                            children: (0, r.jsxs)("button", {
                                onClick: e => (0, a.RN)(a.e5, e),
                                className: "inline-block px-12 py-6 bg-red-600 text-white text-2xl font-bold rounded-lg transform hover:scale-105 transition-all duration-300 relative group overflow-hidden",
                                children: [(0, r.jsx)("span", {
                                    className: "relative z-10",
                                    children: "SEIZE YOUR POWER NOW"
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full transition-transform group-hover:translate-y-0"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        4456: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => l
            });
            var r = s(5155),
                a = s(9244);

            function l() {
                return (0, r.jsxs)("section", {
                    className: "section-padding bg-black relative",
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_50%)]"
                    }), (0, r.jsxs)("div", {
                        className: "container-custom relative",
                        children: [(0, r.jsx)("h2", {
                            className: "heading-secondary text-center mb-6",
                            children: "Why Choose FireBlood Supplement"
                        }), (0, r.jsx)("div", {
                            className: "text-5xl md:text-7xl font-black text-center mb-20 tracking-tight",
                            children: (0, r.jsxs)("span", {
                                className: "relative",
                                children: ["THE CHOICE IS YOURS", (0, r.jsx)("div", {
                                    className: "absolute -bottom-4 left-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -translate-x-1/2"
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-16",
                            children: [(0, r.jsxs)("div", {
                                className: "bg-[#0A0A0A] p-12 rounded-2xl relative group",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute -top-8 left-1/2 -translate-x-1/2",
                                    children: (0, r.jsx)("div", {
                                        className: "w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center",
                                        children: (0, r.jsx)("svg", {
                                            className: "w-8 h-8 text-gray-600",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("h3", {
                                    className: "text-2xl font-bold text-gray-500 text-center mt-6 mb-12",
                                    children: "STAY STAGNANT"
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-500",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 opacity-50",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Low energy levels all day"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-500",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 opacity-50",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Poor workout recovery"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-500",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 opacity-50",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Nutritional deficiencies"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-500",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 opacity-50",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Compromised immune system"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-500",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 opacity-50",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Limited physical performance"
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "mt-12 text-center",
                                    children: (0, r.jsx)("a", {
                                        href: "https://www.netflix.com",
                                        target: "_blank",
                                        rel: "nofollow noopener noreferrer",
                                        className: "inline-block px-8 py-3 bg-[#1A1A1A] text-gray-500 text-lg font-medium rounded-lg hover:bg-[#222] transition-colors",
                                        children: "REMAIN AVERAGE"
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "bg-[#0A0A0A] p-12 rounded-2xl relative group",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute -top-8 left-1/2 -translate-x-1/2",
                                    children: (0, r.jsx)("div", {
                                        className: "w-16 h-16 bg-red-950 rounded-full flex items-center justify-center",
                                        children: (0, r.jsx)("svg", {
                                            className: "w-8 h-8 text-red-500",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                            })
                                        })
                                    })
                                }), (0, r.jsx)("h3", {
                                    className: "text-2xl font-bold text-red-500 text-center mt-6 mb-12",
                                    children: "TAKE ACTION"
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-300",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "39 premium ingredients"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-300",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Maximum bioavailability"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-300",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Enhanced muscle recovery"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-300",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Peak mental performance"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex items-center gap-4 text-gray-300",
                                        children: [(0, r.jsx)("svg", {
                                            className: "w-5 h-5 text-red-500",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        }), (0, r.jsx)("span", {
                                            children: "Scientifically proven results"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "mt-12 text-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "mb-6",
                                        children: [(0, r.jsx)("span", {
                                            className: "text-gray-600 line-through text-xl mr-3",
                                            children: "$147"
                                        }), (0, r.jsx)("span", {
                                            className: "text-red-500 text-4xl font-bold",
                                            children: "$71"
                                        })]
                                    }), (0, r.jsx)("button", {
                                        onClick: e => (0, a.RN)(a.e5, e),
                                        className: "w-full px-8 py-4 bg-red-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition-colors",
                                        children: "JOIN THE ELITE"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        9244: (e, t, s) => {
            "use strict";
            s.d(t, {
                RN: () => l,
                e5: () => n
            });
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    return Array.from(crypto.getRandomValues(new Uint8Array(e))).map(e => t[e % t.length]).join("")
                },
                a = e => {
                    try {
                        let t = e.split("").reverse().join(""),
                            s = atob(t),
                            [, r] = decodeURIComponent(s).split("|");
                        return r
                    } catch (e) {
                        return console.error("Error decoding URL:", e), ""
                    }
                },
                l = (e, t) => {
                    t && t.preventDefault();
                    try {
                        let t = a(e);
                        t && window.open(t, "_blank")
                    } catch (e) {
                        console.error("Error handling obfuscated click:", e)
                    }
                },
                n = (e => {
                    try {
                        let t = r(),
                            s = "".concat(t, "|").concat(e),
                            a = encodeURIComponent(s);
                        return btoa(a).replace(/=/g, "").split("").reverse().join("")
                    } catch (t) {
                        return console.error("Error encoding URL:", t), e
                    }
                })("https://getfireblood.com/choose-your-path/?fpr=choose")
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [565, 173, 441, 517, 358], () => t(2377)), _N_E = e.O()
    }
]);