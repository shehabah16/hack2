(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        2573: (e, t, r) => {
            Promise.resolve().then(r.t.bind(r, 266, 23)), Promise.resolve().then(r.bind(r, 6819)), Promise.resolve().then(r.t.bind(r, 347, 23))
        },
        6562: () => {},
        5434: (e, t, r) => {
            "use strict";
            var s = r(2818);
            r(6562);
            var n = r(2115),
                i = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(n),
                a = void 0 !== s && s.env && !0,
                o = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                l = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.name,
                            s = void 0 === r ? "stylesheet" : r,
                            n = t.optimizeForSpeed,
                            i = void 0 === n ? a : n;
                        d(o(s), "`name` must be a string"), this._name = s, this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}", d("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = l ? l.getAttribute("content") : null
                    }
                    var t = e.prototype;
                    return t.setOptimizeForSpeed = function(e) {
                            d("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), d(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, t.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, t.inject = function() {
                            var e = this;
                            if (d(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (a || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, r) {
                                    return "number" == typeof r ? e._serverSheet.cssRules[r] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), r
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, t.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, t.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, t.insertRule = function(e, t) {
                            if (d(o(e), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof t && (t = this._serverSheet.cssRules.length), this._serverSheet.insertRule(e, t), this._rulesCount++;
                            if (this._optimizeForSpeed) {
                                var r = this.getSheet();
                                "number" != typeof t && (t = r.cssRules.length);
                                try {
                                    r.insertRule(e, t)
                                } catch (t) {
                                    return a || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var s = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, s))
                            }
                            return this._rulesCount++
                        }, t.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed || "undefined" == typeof window) {
                                var r = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                                if (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e]) return e;
                                r.deleteRule(e);
                                try {
                                    r.insertRule(t, e)
                                } catch (s) {
                                    a || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), r.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var s = this._tags[e];
                                d(s, "old rule at index `" + e + "` not found"), s.textContent = t
                            }
                            return e
                        }, t.deleteRule = function(e) {
                            if ("undefined" == typeof window) {
                                this._serverSheet.deleteRule(e);
                                return
                            }
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                d(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, t.flush = function() {
                            this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []) : this._serverSheet.cssRules = []
                        }, t.cssRules = function() {
                            var e = this;
                            return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(t, r) {
                                return r ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, t.makeStyleTag = function(e, t, r) {
                            t && d(o(t), "makeStyleTag accepts only strings as second parameter");
                            var s = document.createElement("style");
                            this._nonce && s.setAttribute("nonce", this._nonce), s.type = "text/css", s.setAttribute("data-" + e, ""), t && s.appendChild(document.createTextNode(t));
                            var n = document.head || document.getElementsByTagName("head")[0];
                            return r ? n.insertBefore(s, r) : n.appendChild(s), s
                        },
                        function(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var s = t[r];
                                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                            }
                        }(e.prototype, [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }]), e
                }();

            function d(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var c = function(e) {
                    for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                    return t >>> 0
                },
                u = {};

            function h(e, t) {
                if (!t) return "jsx-" + e;
                var r = String(t),
                    s = e + r;
                return u[s] || (u[s] = "jsx-" + c(e + "-" + r)), u[s]
            }

            function f(e, t) {
                "undefined" == typeof window && (t = t.replace(/\/style/gi, "\\/style"));
                var r = e + t;
                return u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), u[r]
            }
            var m = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            r = t.styleSheet,
                            s = void 0 === r ? null : r,
                            n = t.optimizeForSpeed,
                            i = void 0 !== n && n;
                        this._sheet = s || new l({
                            name: "styled-jsx",
                            optimizeForSpeed: i
                        }), this._sheet.inject(), s && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var r = this.getIdAndRules(e),
                            s = r.styleId,
                            n = r.rules;
                        if (s in this._instancesCounts) {
                            this._instancesCounts[s] += 1;
                            return
                        }
                        var i = n.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[s] = i, this._instancesCounts[s] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(r in this._instancesCounts, "styleId: `" + r + "` not found"), this._instancesCounts[r] -= 1, this._instancesCounts[r] < 1) {
                            var s = this._fromServer && this._fromServer[r];
                            s ? (s.parentNode.removeChild(s), delete this._fromServer[r]) : (this._indices[r].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[r]), delete this._instancesCounts[r]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            r = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return r[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, r;
                        return t = this.cssRules(), void 0 === (r = e) && (r = {}), t.map(function(e) {
                            var t = e[0],
                                s = e[1];
                            return i.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: r.nonce ? r.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: s
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            r = e.dynamic,
                            s = e.id;
                        if (r) {
                            var n = h(s, r);
                            return {
                                styleId: n,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return f(n, e)
                                }) : [f(n, t)]
                            }
                        }
                        return {
                            styleId: h(s),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                b = n.createContext(null);
            b.displayName = "StyleSheetContext";
            var p = i.default.useInsertionEffect || i.default.useLayoutEffect,
                x = "undefined" != typeof window ? new m : void 0;

            function _(e) {
                var t = x || n.useContext(b);
                return t && ("undefined" == typeof window ? t.add(e) : p(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)])), null
            }
            _.dynamic = function(e) {
                return e.map(function(e) {
                    return h(e[0], e[1])
                }).join(" ")
            }, t.style = _
        },
        8803: (e, t, r) => {
            "use strict";
            e.exports = r(5434).style
        },
        6819: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => l
            });
            var s = r(5155),
                n = r(8803),
                i = r.n(n),
                a = r(2115),
                o = r(5565);

            function l() {
                let [e, t] = (0, a.useState)(!1), [r, n] = (0, a.useState)(!1);
                return ((0, a.useEffect)(() => {
                    t(!0);
                    let e = setTimeout(() => n(!0), 2500),
                        r = setTimeout(() => t(!1), 3500);
                    return () => {
                        clearTimeout(e), clearTimeout(r)
                    }
                }, []), e) ? (0, s.jsxs)("div", {
                    className: "jsx-d13b14703bc0cb01 " + "fixed inset-0 z-50 flex items-center justify-center bg-black ".concat(r ? "animate-fade-out-scale" : ""),
                    children: [(0, s.jsxs)("div", {
                        className: "jsx-d13b14703bc0cb01 relative",
                        children: [(0, s.jsxs)("div", {
                            className: "jsx-d13b14703bc0cb01 fixed inset-0",
                            children: [(0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute inset-0 bg-grid-pattern opacity-5"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute inset-0 bg-gradient-radial from-red-600/20 via-red-900/10 to-black"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "jsx-d13b14703bc0cb01 relative z-10",
                            children: [(0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -inset-4 border-2 border-red-600/80 rounded-full animate-spin-slow blur-[1px]"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -inset-8 border-2 border-red-600/40 rounded-full animate-reverse-spin blur-[2px]"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -inset-12 border-2 border-red-500/30 rounded-full animate-spin-slow blur-[3px]"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -inset-16 bg-gradient-to-r from-red-600/30 to-red-500/30 rounded-full animate-pulse blur-xl"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -inset-20 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full animate-pulse-delayed blur-2xl"
                            }), (0, s.jsx)("div", {
                                className: "jsx-d13b14703bc0cb01 relative",
                                children: (0, s.jsx)(o.default, {
                                    src: "/images/FIREBLOOD[LOGO].webp",
                                    alt: "FireBlood Logo",
                                    width: 200,
                                    height: 200,
                                    className: "drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-float brightness-150",
                                    priority: !0
                                })
                            }), (0, s.jsxs)("div", {
                                className: "jsx-d13b14703bc0cb01 absolute -bottom-32 left-1/2 -translate-x-1/2 text-center w-full",
                                children: [(0, s.jsxs)("div", {
                                    className: "jsx-d13b14703bc0cb01 relative mb-6",
                                    children: [(0, s.jsx)("div", {
                                        className: "jsx-d13b14703bc0cb01 absolute inset-0 bg-black/80 blur-lg"
                                    }), (0, s.jsx)("div", {
                                        className: "jsx-d13b14703bc0cb01 relative flex justify-center gap-2",
                                        children: "FIREBLOOD".split("").map((e, t) => (0, s.jsx)("span", {
                                            style: {
                                                animationDelay: "".concat(.1 * t, "s"),
                                                filter: "drop-shadow(0 0 8px rgba(220,38,38,0.8))",
                                                textShadow: "0 0 20px rgba(220,38,38,0.8), 0 0 40px rgba(220,38,38,0.6)"
                                            },
                                            className: "jsx-d13b14703bc0cb01 inline-block text-4xl font-black animate-float text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-600",
                                            children: e
                                        }, t))
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "jsx-d13b14703bc0cb01 relative mb-8",
                                    children: [(0, s.jsx)("div", {
                                        className: "jsx-d13b14703bc0cb01 absolute inset-0 bg-black/50 blur-md"
                                    }), (0, s.jsx)("p", {
                                        className: "jsx-d13b14703bc0cb01 relative text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 animate-pulse tracking-widest",
                                        children: "UNLEASH YOUR INNER FIRE"
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "jsx-d13b14703bc0cb01 relative",
                                    children: (0, s.jsx)("div", {
                                        className: "jsx-d13b14703bc0cb01 w-48 h-1 bg-red-900/30 rounded-full overflow-hidden backdrop-blur-sm mx-auto",
                                        children: (0, s.jsx)("div", {
                                            className: "jsx-d13b14703bc0cb01 h-full w-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 animate-loading-bar"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), (0, s.jsx)(i(), {
                        id: "d13b14703bc0cb01",
                        children: ".bg-grid-pattern.jsx-d13b14703bc0cb01{background-image:-webkit-linear-gradient(rgba(220,38,38,.1)1px,transparent 1px),-webkit-linear-gradient(left,rgba(220,38,38,.1)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(220,38,38,.1)1px,transparent 1px),-moz-linear-gradient(left,rgba(220,38,38,.1)1px,transparent 1px);background-image:-o-linear-gradient(rgba(220,38,38,.1)1px,transparent 1px),-o-linear-gradient(left,rgba(220,38,38,.1)1px,transparent 1px);background-image:linear-gradient(rgba(220,38,38,.1)1px,transparent 1px),linear-gradient(90deg,rgba(220,38,38,.1)1px,transparent 1px);-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px}@-webkit-keyframes loading-bar{0%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}50%{-webkit-transform:translatex(100%);transform:translatex(100%)}100%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}}@-moz-keyframes loading-bar{0%{-moz-transform:translatex(-100%);transform:translatex(-100%)}50%{-moz-transform:translatex(100%);transform:translatex(100%)}100%{-moz-transform:translatex(-100%);transform:translatex(-100%)}}@-o-keyframes loading-bar{0%{-o-transform:translatex(-100%);transform:translatex(-100%)}50%{-o-transform:translatex(100%);transform:translatex(100%)}100%{-o-transform:translatex(-100%);transform:translatex(-100%)}}@keyframes loading-bar{0%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}50%{-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}100%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}}"
                    })]
                }) : null
            }
        },
        347: () => {},
        266: e => {
            e.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_d65c78"
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [408, 565, 441, 517, 358], () => t(2573)), _N_E = e.O()
    }
]);