(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return i(e) && "function" == typeof e.from;
          }
          function i(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function n(e) {
            e.parentElement.removeChild(e);
          }
          function s(e) {
            return null != e;
          }
          function o(e) {
            e.preventDefault();
          }
          function r(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var i = e.getBoundingClientRect(),
              n = e.ownerDocument,
              s = n.documentElement,
              o = v(n);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0),
              t ? i.top + o.y - s.clientTop : i.left + o.x - s.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, i) {
            i > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, i));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function h(e) {
            return Array.isArray(e) ? e : [e];
          }
          function p(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              i = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : i
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : i
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function x(e, t) {
            return 100 / (t - e);
          }
          function S(e, t, i) {
            return (100 * t) / (e[i + 1] - e[i]);
          }
          function E(e, t) {
            return S(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function C(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var i = 1; e >= t[i]; ) i += 1;
            return i;
          }
          function P(e, t, i) {
            if (i >= e.slice(-1)[0]) return 100;
            var n = T(i, e),
              s = e[n - 1],
              o = e[n],
              r = t[n - 1],
              a = t[n];
            return r + E([s, o], i) / x(r, a);
          }
          function M(e, t, i) {
            if (i >= 100) return e.slice(-1)[0];
            var n = T(i, t),
              s = e[n - 1],
              o = e[n],
              r = t[n - 1];
            return C([s, o], (i - r) * x(r, t[n]));
          }
          function O(e, t, i, n) {
            if (100 === n) return n;
            var s = T(n, e),
              o = e[s - 1],
              r = e[s];
            return i
              ? n - o > (r - o) / 2
                ? r
                : o
              : t[s - 1]
              ? e[s - 1] + a(n - e[s - 1], t[s - 1])
              : n;
          }
          var L, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((L = e.PipsType || (e.PipsType = {}))[(L.None = -1)] = "None"),
            (L[(L.NoValue = 0)] = "NoValue"),
            (L[(L.LargeValue = 1)] = "LargeValue"),
            (L[(L.SmallValue = 2)] = "SmallValue");
          var A = (function () {
              function e(e, t, i) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [i || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var s = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    s.push([h(e[t]), t]);
                  }),
                    s.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < s.length;
                  n++
                )
                  this.handleEntryPoint(s[n][1], s[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++)
                    t[i] = S(this.xVal, e, i);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, i) {
                  var n,
                    s = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[s + 1]; ) s++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (s = this.xPct.length - 2);
                  i || e !== this.xPct[s + 1] || s++, null === t && (t = []);
                  var o = 1,
                    r = t[s],
                    a = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    n = i
                      ? (e - this.xPct[s]) / (this.xPct[s + 1] - this.xPct[s])
                      : (this.xPct[s + 1] - e) /
                        (this.xPct[s + 1] - this.xPct[s]);
                    r > 0;

                  )
                    (a = this.xPct[s + 1 + d] - this.xPct[s + d]),
                      t[s + d] * o + 100 - 100 * n > 100
                        ? ((l = a * n), (o = (r - 100 * n) / t[s + d]), (n = 1))
                        : ((l = ((t[s + d] * a) / 100) * o), (o = 0)),
                      i
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (r = t[s + d] * o);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = P(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return M(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = O(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, i) {
                  var n = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / i
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(p);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var i;
                  if (
                    !c(
                      (i = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(i), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  i
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        S([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        x(this.xPct[e], this.xPct[e + 1]);
                      var i =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(i.toFixed(3)) - 1),
                        s = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = s;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            _ = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            z = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            I = { tooltips: ".__tooltips", aria: ".__aria" };
          function D(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function $(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function R(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function F(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new A(t, e.snap || !1, e.singleStep);
          }
          function B(e, t) {
            if (((t = h(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function q(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function V(e, t) {
            var i,
              n = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (i = 1; i < e.handles; i++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function W(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function G(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function X(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var i;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  i = 0;
                i < e.spectrum.xNumSteps.length - 1;
                i++
              )
                if (e.padding[0][i] < 0 || e.padding[1][i] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                s = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - s) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function U(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function Z(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var i = t.indexOf("tap") >= 0,
              n = t.indexOf("drag") >= 0,
              s = t.indexOf("fixed") >= 0,
              o = t.indexOf("snap") >= 0,
              r = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0,
              c = t.indexOf("smooth-steps") >= 0;
            if (s) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              G(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: i || o,
              drag: n,
              dragAll: l,
              smoothSteps: c,
              fixed: s,
              snap: o,
              hover: r,
              unconstrained: a,
            };
          }
          function K(e, t) {
            if (!1 !== t)
              if (!0 === t || i(t)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
              } else {
                if ((t = h(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !i(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function J(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function Q(e, t) {
            if (!i(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, i) {
            if (!t(i))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = i;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function ie(e, t) {
            e.documentElement = t;
          }
          function ne(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function se(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (i) {
                  e.cssClasses[i] = e.cssPrefix + t[i];
                }))
              : (e.cssClasses = t);
          }
          function oe(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: _,
                format: _,
              },
              i = {
                step: { r: !1, t: D },
                keyboardPageMultiplier: { r: !1, t: $ },
                keyboardMultiplier: { r: !1, t: R },
                keyboardDefaultStep: { r: !1, t: N },
                start: { r: !0, t: B },
                connect: { r: !0, t: V },
                direction: { r: !0, t: U },
                snap: { r: !1, t: j },
                animate: { r: !1, t: H },
                animationDuration: { r: !1, t: q },
                range: { r: !0, t: F },
                orientation: { r: !1, t: W },
                margin: { r: !1, t: G },
                limit: { r: !1, t: X },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: Z },
                ariaFormat: { r: !1, t: Q },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: K },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: ie },
                cssPrefix: { r: !0, t: ne },
                cssClasses: { r: !0, t: se },
                handleAttributes: { r: !1, t: J },
              },
              n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: z,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(i).forEach(function (o) {
                if (s(e[o]) || void 0 !== n[o])
                  i[o].t(t, s(e[o]) ? e[o] : n[o]);
                else if (i[o].r)
                  throw new Error("noUiSlider: '" + o + "' is required.");
              }),
              (t.pips = e.pips);
            var o = document.createElement("div"),
              r = void 0 !== o.style.msTransform,
              a = void 0 !== o.style.transform;
            t.transformRule = a
              ? "transform"
              : r
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function re(t, i, a) {
            var c,
              p,
              x,
              S,
              E,
              C = b(),
              T = w() && y(),
              P = t,
              M = i.spectrum,
              O = [],
              L = [],
              k = [],
              A = 0,
              _ = {},
              z = t.ownerDocument,
              D = i.documentElement || z.documentElement,
              $ = z.body,
              R = "rtl" === z.dir || 1 === i.ort ? 0 : 100;
            function N(e, t) {
              var i = z.createElement("div");
              return t && f(i, t), e.appendChild(i), i;
            }
            function F(e, t) {
              var n = N(e, i.cssClasses.origin),
                s = N(n, i.cssClasses.handle);
              if (
                (N(s, i.cssClasses.touchArea),
                s.setAttribute("data-handle", String(t)),
                i.keyboardSupport &&
                  (s.setAttribute("tabindex", "0"),
                  s.addEventListener("keydown", function (e) {
                    return me(e, t);
                  })),
                void 0 !== i.handleAttributes)
              ) {
                var o = i.handleAttributes[t];
                Object.keys(o).forEach(function (e) {
                  s.setAttribute(e, o[e]);
                });
              }
              return (
                s.setAttribute("role", "slider"),
                s.setAttribute(
                  "aria-orientation",
                  i.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(s, i.cssClasses.handleLower)
                  : t === i.handles - 1 && f(s, i.cssClasses.handleUpper),
                (n.handle = s),
                n
              );
            }
            function B(e, t) {
              return !!t && N(e, i.cssClasses.connect);
            }
            function j(e, t) {
              var n = N(t, i.cssClasses.connects);
              (p = []), (x = []).push(B(n, e[0]));
              for (var s = 0; s < i.handles; s++)
                p.push(F(t, s)), (k[s] = s), x.push(B(n, e[s + 1]));
            }
            function H(e) {
              return (
                f(e, i.cssClasses.target),
                0 === i.dir ? f(e, i.cssClasses.ltr) : f(e, i.cssClasses.rtl),
                0 === i.ort
                  ? f(e, i.cssClasses.horizontal)
                  : f(e, i.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? i.cssClasses.textDirectionRtl
                    : i.cssClasses.textDirectionLtr
                ),
                N(e, i.cssClasses.base)
              );
            }
            function q(e, t) {
              return (
                !(!i.tooltips || !i.tooltips[t]) &&
                N(e.firstChild, i.cssClasses.tooltip)
              );
            }
            function V() {
              return P.hasAttribute("disabled");
            }
            function W(e) {
              return p[e].hasAttribute("disabled");
            }
            function G(e) {
              null != e
                ? (p[e].setAttribute("disabled", ""),
                  p[e].handle.removeAttribute("tabindex"))
                : (P.setAttribute("disabled", ""),
                  p.forEach(function (e) {
                    e.handle.removeAttribute("tabindex");
                  }));
            }
            function X(e) {
              null != e
                ? (p[e].removeAttribute("disabled"),
                  p[e].handle.setAttribute("tabindex", "0"))
                : (P.removeAttribute("disabled"),
                  p.forEach(function (e) {
                    e.removeAttribute("disabled"),
                      e.handle.setAttribute("tabindex", "0");
                  }));
            }
            function Y() {
              E &&
                (ye("update" + I.tooltips),
                E.forEach(function (e) {
                  e && n(e);
                }),
                (E = null));
            }
            function U() {
              Y(),
                (E = p.map(q)),
                ve("update" + I.tooltips, function (e, t, n) {
                  if (E && i.tooltips && !1 !== E[t]) {
                    var s = e[t];
                    !0 !== i.tooltips[t] && (s = i.tooltips[t].to(n[t])),
                      (E[t].innerHTML = s);
                  }
                });
            }
            function Z() {
              ye("update" + I.aria),
                ve("update" + I.aria, function (e, t, n, s, o) {
                  k.forEach(function (e) {
                    var t = p[e],
                      s = xe(L, e, 0, !0, !0, !0),
                      r = xe(L, e, 100, !0, !0, !0),
                      a = o[e],
                      l = String(i.ariaFormat.to(n[e]));
                    (s = M.fromStepping(s).toFixed(1)),
                      (r = M.fromStepping(r).toFixed(1)),
                      (a = M.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", s),
                      t.children[0].setAttribute("aria-valuemax", r),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function K(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return M.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var i = t.values - 1, n = 100 / i, s = []; i--; )
                  s[i] = i * n;
                return s.push(100), J(s, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? J(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return M.fromStepping(M.getStep(M.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function J(e, t) {
              return e.map(function (e) {
                return M.fromStepping(t ? M.getStep(e) : e);
              });
            }
            function Q(t) {
              function i(e, t) {
                return Number((e + t).toFixed(7));
              }
              var n = K(t),
                s = {},
                o = M.xVal[0],
                a = M.xVal[M.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (n = r(
                  n.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== o && (n.unshift(o), (l = !0)),
                n[n.length - 1] !== a && (n.push(a), (c = !0)),
                n.forEach(function (o, r) {
                  var a,
                    u,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v,
                    b,
                    y,
                    w = o,
                    x = n[r + 1],
                    S = t.mode === e.PipsMode.Steps;
                  for (
                    S && (a = M.xNumSteps[r]),
                      a || (a = x - w),
                      void 0 === x && (x = w),
                      a = Math.max(a, 1e-7),
                      u = w;
                    u <= x;
                    u = i(u, a)
                  ) {
                    for (
                      v = (f = (p = M.toStepping(u)) - d) / (t.density || 1),
                        y = f / (b = Math.round(v)),
                        h = 1;
                      h <= b;
                      h += 1
                    )
                      s[(m = d + h * y).toFixed(5)] = [M.fromStepping(m), 0];
                    (g =
                      n.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : S
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !r && l && u !== x && (g = 0),
                      (u === x && c) || (s[p.toFixed(5)] = [u, g]),
                      (d = p);
                  }
                }),
                s
              );
            }
            function ee(t, n, s) {
              var o,
                r,
                a = z.createElement("div"),
                l =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = i.cssClasses.valueNormal),
                  (o[e.PipsType.LargeValue] = i.cssClasses.valueLarge),
                  (o[e.PipsType.SmallValue] = i.cssClasses.valueSub),
                  o),
                c =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = i.cssClasses.markerNormal),
                  (r[e.PipsType.LargeValue] = i.cssClasses.markerLarge),
                  (r[e.PipsType.SmallValue] = i.cssClasses.markerSub),
                  r),
                d = [i.cssClasses.valueHorizontal, i.cssClasses.valueVertical],
                u = [
                  i.cssClasses.markerHorizontal,
                  i.cssClasses.markerVertical,
                ];
              function h(e, t) {
                var n = t === i.cssClasses.value,
                  s = n ? l : c;
                return t + " " + (n ? d : u)[i.ort] + " " + s[e];
              }
              function p(t, o, r) {
                if ((r = n ? n(o, r) : r) !== e.PipsType.None) {
                  var l = N(a, !1);
                  (l.className = h(r, i.cssClasses.marker)),
                    (l.style[i.style] = t + "%"),
                    r > e.PipsType.NoValue &&
                      (((l = N(a, !1)).className = h(r, i.cssClasses.value)),
                      l.setAttribute("data-value", String(o)),
                      (l.style[i.style] = t + "%"),
                      (l.innerHTML = String(s.to(o))));
                }
              }
              return (
                f(a, i.cssClasses.pips),
                f(
                  a,
                  0 === i.ort
                    ? i.cssClasses.pipsHorizontal
                    : i.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  p(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function te() {
              S && (n(S), (S = null));
            }
            function ie(e) {
              te();
              var t = Q(e),
                i = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (S = P.appendChild(ee(t, i, n)));
            }
            function ne() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][i.ort];
              return 0 === i.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, n, s) {
              var o = function (o) {
                  var r = re(o, s.pageOffset, s.target || t);
                  return (
                    !!r &&
                    !(V() && !s.doNotReject) &&
                    !(g(P, i.cssClasses.tap) && !s.doNotReject) &&
                    !(e === C.start && void 0 !== r.buttons && r.buttons > 1) &&
                    (!s.hover || !r.buttons) &&
                    (T || r.preventDefault(),
                    (r.calcPoint = r.points[i.ort]),
                    void n(r, s))
                  );
                },
                r = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, o, !!T && { passive: !0 }),
                    r.push([e, o]);
                }),
                r
              );
            }
            function re(e, t, i) {
              var n = 0 === e.type.indexOf("touch"),
                s = 0 === e.type.indexOf("mouse"),
                o = 0 === e.type.indexOf("pointer"),
                r = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (o = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (n) {
                var l = function (t) {
                  var n = t.target;
                  return (
                    n === i ||
                    i.contains(n) ||
                    (e.composed && e.composedPath().shift() === i)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (r = c[0].pageX), (a = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (r = d.pageX), (a = d.pageY);
                }
              }
              return (
                (t = t || v(z)),
                (s || o) && ((r = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [r, a]),
                (e.cursor = s || o),
                e
              );
            }
            function ae(e) {
              var t = (100 * (e - l(c, i.ort))) / ne();
              return (t = u(t)), i.dir ? 100 - t : t;
            }
            function le(e) {
              var t = 100,
                i = !1;
              return (
                p.forEach(function (n, s) {
                  if (!W(s)) {
                    var o = L[s],
                      r = Math.abs(o - e);
                    (r < t || (r <= t && e > o) || (100 === r && 100 === t)) &&
                      ((i = s), (t = r));
                  }
                }),
                i
              );
            }
            function ce(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ue(e, t);
            }
            function de(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ue(e, t);
              var n = (i.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Ee(
                n > 0,
                (100 * n) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ue(e, t) {
              t.handle && (m(t.handle, i.cssClasses.active), (A -= 1)),
                t.listeners.forEach(function (e) {
                  D.removeEventListener(e[0], e[1]);
                }),
                0 === A &&
                  (m(P, i.cssClasses.drag),
                  Pe(),
                  e.cursor &&
                    (($.style.cursor = ""),
                    $.removeEventListener("selectstart", o))),
                i.events.smoothSteps &&
                  (t.handleNumbers.forEach(function (e) {
                    Me(e, L[e], !0, !0, !1, !1);
                  }),
                  t.handleNumbers.forEach(function (e) {
                    we("update", e);
                  })),
                t.handleNumbers.forEach(function (e) {
                  we("change", e), we("set", e), we("end", e);
                });
            }
            function he(e, t) {
              if (!t.handleNumbers.some(W)) {
                var n;
                1 === t.handleNumbers.length &&
                  ((n = p[t.handleNumbers[0]].children[0]),
                  (A += 1),
                  f(n, i.cssClasses.active)),
                  e.stopPropagation();
                var s = [],
                  r = se(C.move, D, de, {
                    target: e.target,
                    handle: n,
                    connect: t.connect,
                    listeners: s,
                    startCalcPoint: e.calcPoint,
                    baseSize: ne(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: L.slice(),
                  }),
                  a = se(C.end, D, ue, {
                    target: e.target,
                    handle: n,
                    listeners: s,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", D, ce, {
                    target: e.target,
                    handle: n,
                    listeners: s,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                s.push.apply(s, r.concat(a, l)),
                  e.cursor &&
                    (($.style.cursor = getComputedStyle(e.target).cursor),
                    p.length > 1 && f(P, i.cssClasses.drag),
                    $.addEventListener("selectstart", o, !1)),
                  t.handleNumbers.forEach(function (e) {
                    we("start", e);
                  });
              }
            }
            function pe(e) {
              e.stopPropagation();
              var t = ae(e.calcPoint),
                n = le(t);
              !1 !== n &&
                (i.events.snap || d(P, i.cssClasses.tap, i.animationDuration),
                Me(n, t, !0, !0),
                Pe(),
                we("slide", n, !0),
                we("update", n, !0),
                i.events.snap
                  ? he(e, { handleNumbers: [n] })
                  : (we("change", n, !0), we("set", n, !0)));
            }
            function fe(e) {
              var t = ae(e.calcPoint),
                i = M.getStep(t),
                n = M.fromStepping(i);
              Object.keys(_).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  _[e].forEach(function (e) {
                    e.call(Fe, n);
                  });
              });
            }
            function me(e, t) {
              if (V() || W(t)) return !1;
              var n = ["Left", "Right"],
                s = ["Down", "Up"],
                o = ["PageDown", "PageUp"],
                r = ["Home", "End"];
              i.dir && !i.ort
                ? n.reverse()
                : i.ort && !i.dir && (s.reverse(), o.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                c = l === o[0],
                d = l === o[1],
                u = l === s[0] || l === n[0] || c,
                h = l === s[1] || l === n[1] || d,
                p = l === r[0],
                f = l === r[1];
              if (!(u || h || p || f)) return !0;
              if ((e.preventDefault(), h || u)) {
                var m = u ? 0 : 1,
                  g = De(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = M.getDefaultStep(L[t], u, i.keyboardDefaultStep)),
                  (g *=
                    d || c ? i.keyboardPageMultiplier : i.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (a = O[t] + g);
              } else
                a = f
                  ? i.spectrum.xVal[i.spectrum.xVal.length - 1]
                  : i.spectrum.xVal[0];
              return (
                Me(t, M.toStepping(a), !0, !0),
                we("slide", t),
                we("update", t),
                we("change", t),
                we("set", t),
                !1
              );
            }
            function ge(e) {
              e.fixed ||
                p.forEach(function (e, t) {
                  se(C.start, e.children[0], he, { handleNumbers: [t] });
                }),
                e.tap && se(C.start, c, pe, {}),
                e.hover && se(C.move, c, fe, { hover: !0 }),
                e.drag &&
                  x.forEach(function (t, n) {
                    if (!1 !== t && 0 !== n && n !== x.length - 1) {
                      var s = p[n - 1],
                        o = p[n],
                        r = [t],
                        a = [s, o],
                        l = [n - 1, n];
                      f(t, i.cssClasses.draggable),
                        e.fixed &&
                          (r.push(s.children[0]), r.push(o.children[0])),
                        e.dragAll && ((a = p), (l = k)),
                        r.forEach(function (e) {
                          se(C.start, e, he, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function ve(e, t) {
              (_[e] = _[e] || []),
                _[e].push(t),
                "update" === e.split(".")[0] &&
                  p.forEach(function (e, t) {
                    we("update", t);
                  });
            }
            function be(e) {
              return e === I.aria || e === I.tooltips;
            }
            function ye(e) {
              var t = e && e.split(".")[0],
                i = t ? e.substring(t.length) : e;
              Object.keys(_).forEach(function (e) {
                var n = e.split(".")[0],
                  s = e.substring(n.length);
                (t && t !== n) ||
                  (i && i !== s) ||
                  (be(s) && i !== s) ||
                  delete _[e];
              });
            }
            function we(e, t, n) {
              Object.keys(_).forEach(function (s) {
                var o = s.split(".")[0];
                e === o &&
                  _[s].forEach(function (e) {
                    e.call(
                      Fe,
                      O.map(i.format.to),
                      t,
                      O.slice(),
                      n || !1,
                      L.slice(),
                      Fe
                    );
                  });
              });
            }
            function xe(e, t, n, s, o, r, a) {
              var l;
              return (
                p.length > 1 &&
                  !i.events.unconstrained &&
                  (s &&
                    t > 0 &&
                    ((l = M.getAbsoluteDistance(e[t - 1], i.margin, !1)),
                    (n = Math.max(n, l))),
                  o &&
                    t < p.length - 1 &&
                    ((l = M.getAbsoluteDistance(e[t + 1], i.margin, !0)),
                    (n = Math.min(n, l)))),
                p.length > 1 &&
                  i.limit &&
                  (s &&
                    t > 0 &&
                    ((l = M.getAbsoluteDistance(e[t - 1], i.limit, !1)),
                    (n = Math.min(n, l))),
                  o &&
                    t < p.length - 1 &&
                    ((l = M.getAbsoluteDistance(e[t + 1], i.limit, !0)),
                    (n = Math.max(n, l)))),
                i.padding &&
                  (0 === t &&
                    ((l = M.getAbsoluteDistance(0, i.padding[0], !1)),
                    (n = Math.max(n, l))),
                  t === p.length - 1 &&
                    ((l = M.getAbsoluteDistance(100, i.padding[1], !0)),
                    (n = Math.min(n, l)))),
                a || (n = M.getStep(n)),
                !((n = u(n)) === e[t] && !r) && n
              );
            }
            function Se(e, t) {
              var n = i.ort;
              return (n ? t : e) + ", " + (n ? e : t);
            }
            function Ee(e, t, n, s, o) {
              var r = n.slice(),
                a = s[0],
                l = i.events.smoothSteps,
                c = [!e, e],
                d = [e, !e];
              (s = s.slice()),
                e && s.reverse(),
                s.length > 1
                  ? s.forEach(function (e, i) {
                      var n = xe(r, e, r[e] + t, c[i], d[i], !1, l);
                      !1 === n ? (t = 0) : ((t = n - r[e]), (r[e] = n));
                    })
                  : (c = d = [!0]);
              var u = !1;
              s.forEach(function (e, i) {
                u = Me(e, n[e] + t, c[i], d[i], !1, l) || u;
              }),
                u &&
                  (s.forEach(function (e) {
                    we("update", e), we("slide", e);
                  }),
                  null != o && we("drag", a));
            }
            function Ce(e, t) {
              return i.dir ? 100 - e - t : e;
            }
            function Te(e, t) {
              (L[e] = t), (O[e] = M.fromStepping(t));
              var n = "translate(" + Se(Ce(t, 0) - R + "%", "0") + ")";
              (p[e].style[i.transformRule] = n), Oe(e), Oe(e + 1);
            }
            function Pe() {
              k.forEach(function (e) {
                var t = L[e] > 50 ? -1 : 1,
                  i = 3 + (p.length + t * e);
                p[e].style.zIndex = String(i);
              });
            }
            function Me(e, t, i, n, s, o) {
              return (
                s || (t = xe(L, e, t, i, n, !1, o)), !1 !== t && (Te(e, t), !0)
              );
            }
            function Oe(e) {
              if (x[e]) {
                var t = 0,
                  n = 100;
                0 !== e && (t = L[e - 1]), e !== x.length - 1 && (n = L[e]);
                var s = n - t,
                  o = "translate(" + Se(Ce(t, s) + "%", "0") + ")",
                  r = "scale(" + Se(s / 100, "1") + ")";
                x[e].style[i.transformRule] = o + " " + r;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? L[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = i.format.from(e)) && (e = M.toStepping(e)),
                  !1 === e || isNaN(e) ? L[t] : e);
            }
            function ke(e, t, n) {
              var s = h(e),
                o = void 0 === L[0];
              (t = void 0 === t || t),
                i.animate && !o && d(P, i.cssClasses.tap, i.animationDuration),
                k.forEach(function (e) {
                  Me(e, Le(s[e], e), !0, !1, n);
                });
              var r = 1 === k.length ? 0 : 1;
              if (o && M.hasNoSize() && ((n = !0), (L[0] = 0), k.length > 1)) {
                var a = 100 / (k.length - 1);
                k.forEach(function (e) {
                  L[e] = e * a;
                });
              }
              for (; r < k.length; ++r)
                k.forEach(function (e) {
                  Me(e, L[e], !0, !0, n);
                });
              Pe(),
                k.forEach(function (e) {
                  we("update", e), null !== s[e] && t && we("set", e);
                });
            }
            function Ae(e) {
              ke(i.start, e);
            }
            function _e(e, t, i, n) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Me(e, Le(t, e), !0, !0, n), we("update", e), i && we("set", e);
            }
            function ze(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === O.length ? O[0] : O.slice(0);
              var t = O.map(i.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Ie() {
              for (
                ye(I.aria),
                  ye(I.tooltips),
                  Object.keys(i.cssClasses).forEach(function (e) {
                    m(P, i.cssClasses[e]);
                  });
                P.firstChild;

              )
                P.removeChild(P.firstChild);
              delete P.noUiSlider;
            }
            function De(e) {
              var t = L[e],
                n = M.getNearbySteps(t),
                s = O[e],
                o = n.thisStep.step,
                r = null;
              if (i.snap)
                return [
                  s - n.stepBefore.startValue || null,
                  n.stepAfter.startValue - s || null,
                ];
              !1 !== o &&
                s + o > n.stepAfter.startValue &&
                (o = n.stepAfter.startValue - s),
                (r =
                  s > n.thisStep.startValue
                    ? n.thisStep.step
                    : !1 !== n.stepBefore.step && s - n.stepBefore.highestStep),
                100 === t ? (o = null) : 0 === t && (r = null);
              var a = M.countStepDecimals();
              return (
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                null !== r && !1 !== r && (r = Number(r.toFixed(a))),
                [r, o]
              );
            }
            function $e() {
              return k.map(De);
            }
            function Re(e, t) {
              var n = ze(),
                o = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              o.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var r = oe(a);
              o.forEach(function (t) {
                void 0 !== e[t] && (i[t] = r[t]);
              }),
                (M = r.spectrum),
                (i.margin = r.margin),
                (i.limit = r.limit),
                (i.padding = r.padding),
                i.pips ? ie(i.pips) : te(),
                i.tooltips ? U() : Y(),
                (L = []),
                ke(s(e.start) ? e.start : n, t);
            }
            function Ne() {
              (c = H(P)),
                j(i.connect, c),
                ge(i.events),
                ke(i.start),
                i.pips && ie(i.pips),
                i.tooltips && U(),
                Z();
            }
            Ne();
            var Fe = {
              destroy: Ie,
              steps: $e,
              on: ve,
              off: ye,
              get: ze,
              set: ke,
              setHandle: _e,
              reset: Ae,
              disable: G,
              enable: X,
              __moveHandles: function (e, t, i) {
                Ee(e, t, L, i);
              },
              options: a,
              updateOptions: Re,
              target: P,
              removePips: te,
              removeTooltips: Y,
              getPositions: function () {
                return L.slice();
              },
              getTooltips: function () {
                return E;
              },
              getOrigins: function () {
                return p;
              },
              pips: ie,
            };
            return Fe;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var i = re(e, oe(t), t);
            return (e.noUiSlider = i), i;
          }
          var le = { __spectrum: A, cssClasses: z, create: ae };
          (e.create = ae),
            (e.cssClasses = z),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                      Object.prototype.hasOwnProperty.call(i, n) &&
                        (e[n] = i[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            s = t && "classList" in document.createElement("p"),
            o = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, r, t);
            },
            l = function (e, t) {
              var i,
                n = "LazyLoad::Initialized",
                s = new e(t);
              try {
                i = new CustomEvent(n, { detail: { instance: s } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: s }
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            w = "data-",
            x = "ll-status",
            S = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return S(e, x);
            },
            C = function (e, t) {
              return (function (e, t, i) {
                var n = "data-ll-status";
                null !== i ? e.setAttribute(n, i) : e.removeAttribute(n);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            P = function (e) {
              return null === E(e);
            },
            M = function (e) {
              return E(e) === y;
            },
            O = [m, g, v, b],
            L = function (e, t, i, n) {
              e &&
                "function" == typeof e &&
                (void 0 === n ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, n));
            },
            k = function (e, t) {
              s
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              s
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            _ = function (e) {
              return e.llTempImage;
            },
            z = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            I = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            $ = function (e) {
              for (var t, i = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            R = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && $(i).forEach(t);
            },
            N = function (e, t) {
              $(e).forEach(t);
            },
            F = [c],
            B = [c, h],
            j = [c, d, u],
            H = [f],
            q = function (e) {
              return !!e[p];
            },
            V = function (e) {
              return e[p];
            },
            W = function (e) {
              return delete e[p];
            },
            G = function (e, t) {
              if (!q(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[p] = i);
              }
            },
            X = function (e, t) {
              if (q(e)) {
                var i = V(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              k(e, t.class_applied),
                C(e, v),
                i &&
                  (t.unobserve_completed && z(e, t),
                  L(t.callback_applied, e, i));
            },
            U = function (e, t, i) {
              k(e, t.class_loading),
                C(e, m),
                i && (I(i, 1), L(t.callback_loading, e, i));
            },
            Z = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            K = function (e, t) {
              Z(e, u, S(e, t.data_sizes)),
                Z(e, d, S(e, t.data_srcset)),
                Z(e, c, S(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                R(e, function (e) {
                  G(e, j), K(e, t);
                }),
                  G(e, j),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                G(e, F), Z(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  G(e, F), Z(e, c, S(e, t.data_src));
                }),
                  G(e, B),
                  Z(e, h, S(e, t.data_poster)),
                  Z(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                G(e, H), Z(e, f, S(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            ne = function (e) {
              return !!e.llEvLisnrs;
            },
            se = function (e) {
              if (ne(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var n = t[i];
                  ie(e, i, n);
                }
                delete e.llEvLisnrs;
              }
            },
            oe = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                I(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                A(e, t.class_loading),
                t.unobserve_completed && z(e, i);
            },
            re = function (e, t, i) {
              var n = _(e) || e;
              ne(n) ||
                (function (e, t, i) {
                  ne(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, n, t), te(e, "error", i);
                })(
                  n,
                  function (s) {
                    !(function (e, t, i, n) {
                      var s = M(t);
                      oe(t, i, n),
                        k(t, i.class_loaded),
                        C(t, g),
                        L(i.callback_loaded, t, n),
                        s || ee(i, n);
                    })(0, e, t, i),
                      se(n);
                  },
                  function (s) {
                    !(function (e, t, i, n) {
                      var s = M(t);
                      oe(t, i, n),
                        k(t, i.class_error),
                        C(t, b),
                        L(i.callback_error, t, n),
                        i.restore_on_error && X(t, j),
                        s || ee(i, n);
                    })(0, e, t, i),
                      se(n);
                  }
                );
            },
            ae = function (e, t, i) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      re(e, t, i),
                      (function (e) {
                        q(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var n = S(e, t.data_bg),
                          s = S(e, t.data_bg_hidpi),
                          r = o && s ? s : n;
                        r &&
                          ((e.style.backgroundImage = 'url("'.concat(r, '")')),
                          _(e).setAttribute(c, r),
                          U(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var n = S(e, t.data_bg_multi),
                          s = S(e, t.data_bg_multi_hidpi),
                          r = o && s ? s : n;
                        r && ((e.style.backgroundImage = r), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var n = S(e, t.data_bg_set);
                        if (n) {
                          var s = n.split("|"),
                            o = s.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = o.join()),
                            "" === e.style.backgroundImage &&
                              ((o = s.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = o.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    re(e, t, i),
                      (function (e, t, i) {
                        var n = J[e.tagName];
                        n && (n(e, t), U(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              R(e, function (e) {
                X(e, j);
              }),
                X(e, j);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, F);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  X(e, F);
                }),
                  X(e, B),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, H);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (q(e)) {
                        var t = V(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  P(e) ||
                    M(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                T(e),
                W(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, n) {
                      var s = (function (e) {
                        return O.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        k(e, i.class_entered),
                        A(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && z(e, i);
                        })(e, i, n),
                        L(i.callback_enter, e, t, n),
                        s || ae(e, i, n);
                    })(e.target, e, t, i)
                  : (function (e, t, i, n) {
                      P(e) ||
                        (k(e, i.class_exited),
                        (function (e, t, i, n) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return E(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (se(e),
                            (function (e) {
                              R(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            A(e, i.class_loading),
                            I(n, -1),
                            T(e),
                            L(i.callback_cancel, e, t, n));
                        })(e, t, i, n),
                        L(i.callback_exit, e, t, n));
                    })(e.target, e, t, i);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(P);
              })(e || ge(t));
            },
            ye = function (e, i) {
              var s = a(e);
              (this._settings = s),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        fe(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(s, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = ge(e)), me(i).filter(ve)).forEach(function (t) {
                          A(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(s, this),
                this.update(i);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  s,
                  o = this._settings,
                  r = be(e, o);
                D(this, r.length),
                  !i && n
                    ? pe(o)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  re(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, i);
                          }),
                            D(i, 0);
                        })(r, o, this)
                      : ((s = r),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, s))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    W(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                be(e, i).forEach(function (e) {
                  z(e, t), ae(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var i = a(t);
              ae(e, i);
            }),
            (ye.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, n = 0; (i = t[n]); n += 1) l(e, i);
                  else l(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, i), o.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = !0,
      n = (e = 500) => {
        document.documentElement.classList.contains("lock") ? s(e) : o(e);
      },
      s = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function r(e) {
      setTimeout(() => {
        window.FLS;
      }, 0);
    }
    function a(e) {
      return e.filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    }
    (e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${i}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : n(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            t &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              n(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          i = Array.prototype.slice.call(t),
          n = i.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (i[i.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== i.length - 1 ||
            (i[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && r();
      }
    })({})),
      (window.flsModules = e);
    function l(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && c(e[i], t[i]);
      });
    }
    const d = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function u() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, d), e;
    }
    const h = {
      document: d,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function p() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, h), e;
    }
    class f extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function m(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...m(e)) : t.push(e);
        }),
        t
      );
    }
    function g(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function v(e, t) {
      const i = p(),
        n = u();
      let s = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(s);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) i.push(n[e]);
            return i;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === i || e === n) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        s = e;
      }
      return new f(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(s)
      );
    }
    v.fn = f.prototype;
    const b = "resize scroll".split(" ");
    function y(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            b.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : v(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    const w = {
      addClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        return (
          g(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = m(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, i, n, s] = e;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), v(t).is(i))) n.apply(t, s);
          else {
            const e = v(t).parents();
            for (let t = 0; t < e.length; t += 1)
              v(e[t]).is(i) && n.apply(e[t], s);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, n, s] = e;
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const o = this[e];
            let r;
            if (
              (!i && o.dom7Listeners
                ? (r = o.dom7Listeners[t])
                : i && o.dom7LiveListeners && (r = o.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const i = r[e];
                (n && i.listener === n) ||
                (n &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === n)
                  ? (o.removeEventListener(t, i.proxyListener, s),
                    r.splice(e, 1))
                  : n ||
                    (o.removeEventListener(t, i.proxyListener, s),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = p(),
          i = e[0].split(" "),
          n = e[1];
        for (let s = 0; s < i.length; s += 1) {
          const o = i[s];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(o, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(i),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = p();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = p(),
            t = u(),
            i = this[0],
            n = i.getBoundingClientRect(),
            s = t.body,
            o = i.clientTop || s.clientTop || 0,
            r = i.clientLeft || s.clientLeft || 0,
            a = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
          return { top: n.top + a - o, left: n.left + l - r };
        }
        return null;
      },
      css: function (e, t) {
        const i = p();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = p(),
          i = u(),
          n = this[0];
        let s, o;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (s = v(e), o = 0; o < s.length; o += 1) if (s[o] === n) return !0;
          return !1;
        }
        if (e === i) return n === i;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof f) {
          for (s = e.nodeType ? [e] : e, o = 0; o < s.length; o += 1)
            if (s[o] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return v([]);
        if (e < 0) {
          const i = t + e;
          return v(i < 0 ? [] : [this[i]]);
        }
        return v([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = u();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = i.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof f)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = u();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (e instanceof f)
            for (n = 0; n < e.length; n += 1)
              this[i].insertBefore(e[n], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e)
              ? v([this[0].nextElementSibling])
              : v([])
            : this[0].nextElementSibling
            ? v([this[0].nextElementSibling])
            : v([])
          : v([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return v([]);
        for (; i.nextElementSibling; ) {
          const n = i.nextElementSibling;
          e ? v(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return v(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && v(t.previousElementSibling).is(e)
              ? v([t.previousElementSibling])
              : v([])
            : t.previousElementSibling
            ? v([t.previousElementSibling])
            : v([]);
        }
        return v([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return v([]);
        for (; i.previousElementSibling; ) {
          const n = i.previousElementSibling;
          e ? v(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return v(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? v(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return v(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let n = this[i].parentNode;
          for (; n; )
            e ? v(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return v(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return v(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].children;
          for (let i = 0; i < n.length; i += 1)
            (e && !v(n[i]).is(e)) || t.push(n[i]);
        }
        return v(t);
      },
      filter: function (e) {
        return v(g(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(w).forEach((e) => {
      Object.defineProperty(v.fn, e, { value: w[e], writable: !0 });
    });
    const x = v;
    function S(e, t = 0) {
      return setTimeout(e, t);
    }
    function E() {
      return Date.now();
    }
    function C(e, t = "x") {
      const i = p();
      let n, s, o;
      const r = (function (e) {
        const t = p();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((s = r.transform || r.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new i.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((o =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = o.toString().split(","))),
        "x" === t &&
          (s = i.WebKitCSSMatrix
            ? o.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (s = i.WebKitCSSMatrix
            ? o.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        s || 0
      );
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function P(...e) {
      const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < e.length; s += 1) {
        const o = e[s];
        if (
          null != o &&
          ((n = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(o)).filter((e) => i.indexOf(e) < 0);
          for (let i = 0, n = e.length; i < n; i += 1) {
            const n = e[i],
              s = Object.getOwnPropertyDescriptor(o, n);
            void 0 !== s &&
              s.enumerable &&
              (T(t[n]) && T(o[n])
                ? o[n].__swiper__
                  ? (t[n] = o[n])
                  : P(t[n], o[n])
                : !T(t[n]) && T(o[n])
                ? ((t[n] = {}), o[n].__swiper__ ? (t[n] = o[n]) : P(t[n], o[n]))
                : (t[n] = o[n]));
          }
        }
      }
      var n;
      return t;
    }
    function M(e, t, i) {
      e.style.setProperty(t, i);
    }
    function O({ swiper: e, targetPosition: t, side: i }) {
      const n = p(),
        s = -e.translate;
      let o,
        r = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > s ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (o = new Date().getTime()), null === r && (r = o);
          const l = Math.max(Math.min((o - r) / a, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let h = s + u * (t - s);
          if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [i]: h }), c(h, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [i]: h });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(d);
        };
      d();
    }
    let L, k, A;
    function _() {
      return (
        L ||
          (L = (function () {
            const e = p(),
              t = u();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        L
      );
    }
    function z(e = {}) {
      return (
        k ||
          (k = (function ({ userAgent: e } = {}) {
            const t = _(),
              i = p(),
              n = i.navigator.platform,
              s = e || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              r = i.screen.width,
              a = i.screen.height,
              l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = s.match(/(iPad).*OS\s([\d_]+)/);
            const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !c &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${r}x${a}`) >= 0 &&
                ((c = s.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              l && !h && ((o.os = "android"), (o.android = !0)),
              (c || u || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        k
      );
    }
    function I() {
      return (
        A ||
          (A = (function () {
            const e = p();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    const D = {
      on(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const s = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][s](t);
          }),
          n
        );
      },
      once(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function s(...i) {
          n.off(e, s),
            s.__emitterProxy && delete s.__emitterProxy,
            t.apply(n, i);
        }
        return (s.__emitterProxy = t), n.on(e, s, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const n = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((n, s) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(s, 1);
                  });
            }),
            i)
          : i;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let i, n, s;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (n = e.slice(1, e.length)), (s = t))
          : ((i = e[0].events), (n = e[0].data), (s = e[0].context || t)),
          n.unshift(s);
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(s, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(s, n);
                });
          }),
          t
        );
      },
    };
    const $ = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (i =
              i -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const n = e.params,
          { $wrapperEl: s, size: o, rtlTranslate: r, wrongRTL: a } = e,
          l = e.virtual && n.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = s.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let h = [];
        const p = [],
          f = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = n.spaceBetween,
          w = -m,
          x = 0,
          S = 0;
        if (void 0 === o) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * o),
          (e.virtualSize = -y),
          r
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let C;
        E && e.grid.initSlides(u);
        const T =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < u; s += 1) {
          C = 0;
          const r = d.eq(s);
          if (
            (E && e.grid.updateSlide(s, r, u, t), "none" !== r.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              T && (d[s].style[t("width")] = "");
              const o = getComputedStyle(r[0]),
                a = r[0].style.transform,
                l = r[0].style.webkitTransform;
              if (
                (a && (r[0].style.transform = "none"),
                l && (r[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                C = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = i(o, "width"),
                  t = i(o, "padding-left"),
                  n = i(o, "padding-right"),
                  s = i(o, "margin-left"),
                  a = i(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + s + a;
                else {
                  const { clientWidth: i, offsetWidth: o } = r[0];
                  C = e + t + n + s + a + (o - i);
                }
              }
              a && (r[0].style.transform = a),
                l && (r[0].style.webkitTransform = l),
                n.roundLengths && (C = Math.floor(C));
            } else
              (C = (o - (n.slidesPerView - 1) * y) / n.slidesPerView),
                n.roundLengths && (C = Math.floor(C)),
                d[s] && (d[s].style[t("width")] = `${C}px`);
            d[s] && (d[s].swiperSlideSize = C),
              f.push(C),
              n.centeredSlides
                ? ((w = w + C / 2 + x / 2 + y),
                  0 === x && 0 !== s && (w = w - o / 2 - y),
                  0 === s && (w = w - o / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  n.roundLengths && (w = Math.floor(w)),
                  S % n.slidesPerGroup == 0 && h.push(w),
                  p.push(w))
                : (n.roundLengths && (w = Math.floor(w)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && h.push(w),
                  p.push(w),
                  (w = w + C + y)),
              (e.virtualSize += C + y),
              (x = C),
              (S += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + g),
          r &&
            a &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            s.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(C, h, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < h.length; i += 1) {
            let s = h[i];
            n.roundLengths && (s = Math.floor(s)),
              h[i] <= e.virtualSize - o && t.push(s);
          }
          (h = t),
            Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 &&
              h.push(e.virtualSize - o);
        }
        if ((0 === h.length && (h = [0]), 0 !== n.spaceBetween)) {
          const i = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [i]: `${y}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - o;
          h = h.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < o)
          ) {
            const t = (o - e) / 2;
            h.forEach((e, i) => {
              h[i] = e - t;
            }),
              p.forEach((e, i) => {
                p[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          h.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== b && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            i = e.$el.hasClass(t);
          u <= n.maxBackfaceHiddenSlides
            ? i || e.$el.addClass(t)
            : i && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          n = t.virtual && t.params.virtual.enabled;
        let s,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || x([])).each((e) => {
              i.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !n) break;
              i.push(r(e));
            }
        else i.push(r(t.activeIndex));
        for (s = 0; s < i.length; s += 1)
          if (void 0 !== i[s]) {
            const e = i[s].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: s, snapGrid: o } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        s && (r = e),
          n.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e];
          let l = a.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
          const c =
              (r + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + i.spaceBetween),
            d =
              (r - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + i.spaceBetween),
            u = -(r - l),
            h = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(i.slideVisibleClass)),
            (a.progress = s ? -c : c),
            (a.originalProgress = s ? -d : d);
        }
        t.visibleSlides = x(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: o, isEnd: r } = t;
        const a = o,
          l = r;
        0 === n
          ? ((s = 0), (o = !0), (r = !0))
          : ((s = (e - t.minTranslate()) / n), (o = s <= 0), (r = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: o, isEnd: r }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !a && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((a && !o) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: n,
            activeIndex: s,
            realIndex: o,
          } = e,
          r = e.virtual && i.virtual.enabled;
        let a;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (a = r
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          a.addClass(i.slideActiveClass),
          i.loop &&
            (a.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let c = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
        i.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            c.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: s,
            params: o,
            activeIndex: r,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : i >= n[e] && i < n[e + 1] && (d = e + 1)
              : i >= n[e] && (d = e);
          o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (s.indexOf(i) >= 0) c = s.indexOf(i);
        else {
          const e = Math.min(o.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / o.slidesPerGroup);
        }
        if ((c >= s.length && (c = s.length - 1), d === r))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          n = x(e).closest(`.${i.slideClass}`)[0];
        let s,
          o = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (o = !0), (s = e);
              break;
            }
        if (!n || !o)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                x(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const R = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: i,
          translate: n,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let o = C(s[0], e);
        return i && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: n,
            params: s,
            $wrapperEl: o,
            wrapperEl: r,
            progress: a,
          } = i;
        let l,
          c = 0,
          d = 0;
        i.isHorizontal() ? (c = n ? -e : e) : (d = e),
          s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          s.cssMode
            ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -c : -d)
            : s.virtualTranslate ||
              o.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? c : d);
        const u = i.maxTranslate() - i.minTranslate();
        (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
          l !== a && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, n = !0, s) {
        const o = this,
          { params: r, wrapperEl: a } = o;
        if (o.animating && r.preventInteractionOnTransition) return !1;
        const l = o.minTranslate(),
          c = o.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          o.updateProgress(d),
          r.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!o.support.smoothScroll)
              return (
                O({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      i && o.emit("transitionEnd"));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function N({ swiper: e, runCallbacks: t, direction: i, step: n }) {
      const { activeIndex: s, previousIndex: o } = e;
      let r = i;
      if (
        (r || (r = s > o ? "next" : s < o ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && s !== o)
      ) {
        if ("reset" === r) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === r
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const F = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, n, s) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const o = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: f,
        } = o;
        if (
          (o.animating && a.preventInteractionOnTransition) ||
          (!f && !n && !s)
        )
          return !1;
        const m = Math.min(o.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / o.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < n - (n - i) / 2
                ? (r = e)
                : t >= i && t < n && (r = e + 1)
              : t >= i && (r = e);
          }
        if (o.initialized && r !== u) {
          if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            v > o.translate &&
            v > o.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          (r !== (d || 0) && i && o.emit("beforeSlideChangeStart"),
          o.updateProgress(v),
          (b = r > u ? "next" : r < u ? "prev" : "reset"),
          (h && -v === o.translate) || (!h && v === o.translate))
        )
          return (
            o.updateActiveIndex(r),
            a.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== a.effect && o.setTranslate(v),
            "reset" !== b && (o.transitionStart(i, b), o.transitionEnd(i, b)),
            !1
          );
        if (a.cssMode) {
          const e = o.isHorizontal(),
            i = h ? v : -v;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              (p[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._swiperImmediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                O({ swiper: o, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(v),
          o.updateActiveIndex(r),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, n),
          o.transitionStart(i, b),
          0 === t
            ? o.transitionEnd(i, b)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(i, b));
                }),
              o.$wrapperEl[0].addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, n) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let o = e;
        return s.params.loop && (o += s.loopedSlides), s.slideTo(o, t, i, n);
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const n = this,
          { animating: s, enabled: o, params: r } = n;
        if (!o) return n;
        let a = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a;
        if (r.loop) {
          if (s && r.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return r.rewind && n.isEnd
          ? n.slideTo(0, e, t, i)
          : n.slideTo(n.activeIndex + l, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const n = this,
          {
            params: s,
            animating: o,
            snapGrid: r,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = n;
        if (!c) return n;
        if (s.loop) {
          if (o && s.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? n.translate : -n.translate),
          h = r.map((e) => d(e));
        let p = r[h.indexOf(u) - 1];
        if (void 0 === p && s.cssMode) {
          let e;
          r.forEach((t, i) => {
            u >= t && (e = i);
          }),
            void 0 !== e && (p = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== p &&
            ((f = a.indexOf(p)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          s.rewind && n.isBeginning)
        ) {
          const s =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(s, e, t, i);
        }
        return n.slideTo(f, e, t, i);
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, n = 0.5) {
        const s = this;
        let o = s.activeIndex;
        const r = Math.min(s.params.slidesPerGroupSkip, o),
          a = r + Math.floor((o - r) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[a]) {
          const e = s.snapGrid[a];
          l - e > (s.snapGrid[a + 1] - e) * n && (o += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[a - 1];
          l - e <= (s.snapGrid[a] - e) * n && (o -= s.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, s.slidesGrid.length - 1)),
          s.slideTo(o, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          o = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(x(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? o < e.loopedSlides - n / 2 ||
                o > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (o = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - n
              ? (e.loopFix(),
                (o = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    };
    const B = {
      loopCreate: function () {
        const e = this,
          t = u(),
          { params: i, $wrapperEl: n } = e,
          s = n.children().length > 0 ? x(n.children()[0].parentNode) : n;
        s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
        let o = s.children(`.${i.slideClass}`);
        if (i.loopFillGroupWithBlank) {
          const e = i.slidesPerGroup - (o.length % i.slidesPerGroup);
          if (e !== i.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = x(t.createElement("div")).addClass(
                `${i.slideClass} ${i.slideBlankClass}`
              );
              s.append(e);
            }
            o = s.children(`.${i.slideClass}`);
          }
        }
        "auto" !== i.slidesPerView ||
          i.loopedSlides ||
          (i.loopedSlides = o.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(i.loopedSlides || i.slidesPerView, 10)
          )),
          (e.loopedSlides += i.loopAdditionalSlides),
          e.loopedSlides > o.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = o.length);
        const r = [],
          a = [];
        o.each((e, t) => {
          x(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / o.length) * o.length;
          a.push(o.eq(e)[0]), r.unshift(o.eq(o.length - e - 1)[0]);
        }
        for (let e = 0; e < a.length; e += 1)
          s.append(x(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          s.prepend(x(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: n,
          allowSlidePrev: s,
          allowSlideNext: o,
          snapGrid: r,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < n) {
          (l = i.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= i.length - n) {
          (l = -i.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = o), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    function j(e) {
      const t = this,
        i = u(),
        n = p(),
        s = t.touchEventsData,
        { params: o, touches: r, enabled: a } = t;
      if (!a) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = x(l.target);
      if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === l.type),
        !s.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!s.isTouchEvent && "button" in l && l.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      const d = !!o.noSwipingClass && "" !== o.noSwipingClass,
        h = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && h && (c = x(h[0]));
      const f = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        m = !(!l.target || !l.target.shadowRoot);
      if (
        o.noSwiping &&
        (m
          ? (function (e, t = this) {
              return (function t(i) {
                if (!i || i === u() || i === p()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const n = i.closest(e);
                return n || i.getRootNode ? n || t(i.getRootNode().host) : null;
              })(t);
            })(f, c[0])
          : c.closest(f)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (r.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const g = r.currentX,
        v = r.currentY,
        b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (b && (g <= y || g >= n.innerWidth - y)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = g),
        (r.startY = v),
        (s.touchStartTime = E()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(s.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (s.isTouched = !1)),
          i.activeElement &&
            x(i.activeElement).is(s.focusableElements) &&
            i.activeElement !== c[0] &&
            i.activeElement.blur();
        const n = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function H(e) {
      const t = u(),
        i = this,
        n = i.touchEventsData,
        { params: s, touches: o, rtlTranslate: r, enabled: a } = i;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        h = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (o.startX = d), void (o.startY = h);
      if (!i.allowTouchMove)
        return (
          x(l.target).is(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(o, {
              startX: d,
              startY: h,
              currentX: d,
              currentY: h,
            }),
            (n.touchStartTime = E()))
          )
        );
      if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (i.isVertical()) {
          if (
            (h < o.startY && i.translate <= i.maxTranslate()) ||
            (h > o.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < o.startX && i.translate <= i.maxTranslate()) ||
          (d > o.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        x(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (o.currentX = d), (o.currentY = h);
      const p = o.currentX - o.startX,
        f = o.currentY - o.startY;
      if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && o.currentY === o.startY) ||
        (i.isVertical() && o.currentX === o.startX)
          ? (n.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        n.isMoved ||
          (s.loop && !s.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l)),
        i.emit("sliderMove", l),
        (n.isMoved = !0);
      let m = i.isHorizontal() ? p : f;
      (o.diff = m),
        (m *= s.touchRatio),
        r && (m = -m),
        (i.swipeDirection = m > 0 ? "prev" : "next"),
        (n.currentTranslate = m + n.startTranslate);
      let g = !0,
        v = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (v = 0),
        m > 0 && n.currentTranslate > i.minTranslate()
          ? ((g = !1),
            s.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + m) ** v))
          : m < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((g = !1),
            s.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - m) ** v)),
        g && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(m) > s.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (n.currentTranslate = n.startTranslate),
            void (o.diff = i.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && i.freeMode) ||
          s.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          s.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function q(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: n,
          touches: s,
          rtlTranslate: o,
          slidesGrid: r,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = E(),
        d = c - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = E()),
        S(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let u;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (u = n.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let h = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== r[e + t]
          ? u >= r[e] && u < r[e + t] && ((h = e), (p = r[e + t] - r[e]))
          : u >= r[e] && ((h = e), (p = r[r.length - 1] - r[r.length - 2]));
      }
      let f = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - r[h]) / p,
        v = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? f : h + v)
            : t.slideTo(h)),
          "prev" === t.swipeDirection &&
            (g > 1 - n.longSwipesRatio
              ? t.slideTo(h + v)
              : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(h));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(h + v)
            : t.slideTo(h)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : h));
      }
    }
    function V() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: s, snapGrid: o } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = n),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    function W(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function G() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
      if (!n) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const o = e.maxTranslate() - e.minTranslate();
      (s = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
        s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let X = !1;
    function Y() {}
    const U = (e, t) => {
      const i = u(),
        {
          params: n,
          touchEvents: s,
          el: o,
          wrapperEl: r,
          device: a,
          support: l,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        h = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[d](s.start, e.onTouchStart, t),
          o[d](
            s.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          o[d](s.end, e.onTouchEnd, t),
          s.cancel && o[d](s.cancel, e.onTouchEnd, t);
      } else
        o[d](s.start, e.onTouchStart, !1),
          i[d](s.move, e.onTouchMove, c),
          i[d](s.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        o[d]("click", e.onClick, !0),
        n.cssMode && r[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[h](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              V,
              !0
            )
          : e[h]("observerUpdate", V, !0);
    };
    const Z = {
        attachEvents: function () {
          const e = this,
            t = u(),
            { params: i, support: n } = e;
          (e.onTouchStart = j.bind(e)),
            (e.onTouchMove = H.bind(e)),
            (e.onTouchEnd = q.bind(e)),
            i.cssMode && (e.onScroll = G.bind(e)),
            (e.onClick = W.bind(e)),
            n.touch && !X && (t.addEventListener("touchstart", Y), (X = !0)),
            U(e, "on");
        },
        detachEvents: function () {
          U(this, "off");
        },
      },
      K = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const J = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: i,
            loopedSlides: n = 0,
            params: s,
            $el: o,
          } = e,
          r = s.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in r ? r[a] : void 0) || e.originalParams,
          c = K(e, s),
          d = K(e, l),
          u = s.enabled;
        c && !d
          ? (o.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (o.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              o.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const i = s[t] && s[t].enabled,
              n = l[t] && l[t].enabled;
            i && !n && e[t].disable(), !i && n && e[t].enable();
          });
        const h = l.direction && l.direction !== s.direction,
          p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
        h && i && e.changeDirection(), P(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          p &&
            i &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", i) {
        if (!e || ("container" === t && !i)) return;
        let n = !1;
        const s = p(),
          o = "window" === t ? s.innerHeight : i.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: o * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: o, value: a } = r[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = o)
            : a <= i.clientWidth && (n = o);
        }
        return n || "max";
      },
    };
    const Q = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: i,
            rtl: n,
            $el: s,
            device: o,
            support: r,
          } = e,
          a = (function (e, t) {
            const i = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && i.push(t + n);
                    })
                  : "string" == typeof e && i.push(t + e);
              }),
              i
            );
          })(
            [
              "initialized",
              i.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && i.freeMode.enabled },
              { autoheight: i.autoHeight },
              { rtl: n },
              { grid: i.grid && i.grid.rows > 1 },
              {
                "grid-column":
                  i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
              },
              { android: o.android },
              { ios: o.ios },
              { "css-mode": i.cssMode },
              { centered: i.cssMode && i.centeredSlides },
              { "watch-progress": i.watchSlidesProgress },
            ],
            i.containerModifierClass
          );
        t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ee = {
      loadImage: function (e, t, i, n, s, o) {
        const r = p();
        let a;
        function l() {
          o && o();
        }
        x(e).parent("picture")[0] || (e.complete && s)
          ? l()
          : t
          ? ((a = new r.Image()),
            (a.onload = l),
            (a.onerror = l),
            n && (a.sizes = n),
            i && (a.srcset = i),
            t && (a.src = t))
          : l();
      },
      preloadImages: function () {
        const e = this;
        function t() {
          null != e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(),
              e.emit("imagesReady")));
        }
        e.imagesToLoad = e.$el.find("img");
        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
          const n = e.imagesToLoad[i];
          e.loadImage(
            n,
            n.currentSrc || n.getAttribute("src"),
            n.srcset || n.getAttribute("srcset"),
            n.sizes || n.getAttribute("sizes"),
            !0,
            t
          );
        }
      },
    };
    const te = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ie(e, t) {
      return function (i = {}) {
        const n = Object.keys(i)[0],
          s = i[n];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in s
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                P(t, i))
              : P(t, i))
          : P(t, i);
      };
    }
    const ne = {
        eventsEmitter: D,
        update: $,
        translate: R,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            n.cssMode ||
              (n.autoHeight && i.updateAutoHeight(),
              N({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            (i.animating = !1),
              n.cssMode ||
                (i.setTransition(0),
                N({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: F,
        loop: B,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Z,
        breakpoints: J,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: n } = i;
            if (n) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Q,
        images: ee,
      },
      se = {};
    class oe {
      constructor(...e) {
        let t, i;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
          i || (i = {}),
          (i = P({}, i)),
          t && !i.el && (i.el = t),
          i.el && x(i.el).length > 1)
        ) {
          const e = [];
          return (
            x(i.el).each((t) => {
              const n = P({}, i, { el: t });
              e.push(new oe(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = _()),
          (n.device = z({ userAgent: i.userAgent })),
          (n.browser = I()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const s = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: ie(i, s),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const o = P({}, te, s);
        return (
          (n.params = P({}, o, se, i)),
          (n.originalParams = P({}, n.params)),
          (n.passedParams = P({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = x),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: x(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: E(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
          s = (i.maxTranslate() - n) * e + n;
        i.translateTo(s, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const n = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: i,
          slides: n,
          slidesGrid: s,
          slidesSizesGrid: o,
          size: r,
          activeIndex: a,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let i = a + 1; i < n.length; i += 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > r && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1) {
            (t ? s[e] + o[e] - s[a] < r : s[e] - s[a] < r) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            s[a] - s[e] < r && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || n()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${n}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = x(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = x(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(n()) : x(i).children(n());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = u().createElement("div");
          (s = x(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: n, $el: s, $wrapperEl: o, slides: r } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              s.removeAttr("style"),
              o.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        P(se, e);
      }
      static get extendedDefaults() {
        return se;
      }
      static get defaults() {
        return te;
      }
      static installModule(e) {
        oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
        const t = oe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => oe.installModule(e)), oe)
          : (oe.installModule(e), oe);
      }
    }
    Object.keys(ne).forEach((e) => {
      Object.keys(ne[e]).forEach((t) => {
        oe.prototype[t] = ne[e][t];
      });
    }),
      oe.use([
        function ({ swiper: e, on: t, emit: i }) {
          const n = p();
          let s = null,
            o = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (i("beforeResize"), i("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && i("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((s = new ResizeObserver((t) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: n } = e;
                    let s = i,
                      o = n;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: n }) => {
                        (n && n !== e.el) ||
                          ((s = i ? i.width : (t[0] || t).inlineSize),
                          (o = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (s === i && o === n) || r();
                  });
                })),
                s.observe(e.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              o && n.cancelAnimationFrame(o),
                s && s.unobserve && e.el && (s.unobserve(e.el), (s = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: i, emit: n }) {
          const s = [],
            o = p(),
            r = (e, t = {}) => {
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                s.push(i);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) r(t[e]);
                }
                r(e.$el[0], { childList: e.params.observeSlideChildren }),
                  r(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const re = oe;
    function ae(e, t, i, n) {
      const s = u();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((o) => {
            if (!i[o] && !0 === i.auto) {
              let r = e.$el.children(`.${n[o]}`)[0];
              r ||
                ((r = s.createElement("div")),
                (r.className = n[o]),
                e.$el.append(r)),
                (i[o] = r),
                (t[o] = r);
            }
          }),
        i
      );
    }
    function le({ swiper: e, extendParams: t, on: i, emit: n }) {
      function s(t) {
        let i;
        return (
          t &&
            ((i = x(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              i.length > 1 &&
              1 === e.$el.find(t).length &&
              (i = e.$el.find(t))),
          i
        );
      }
      function o(t, i) {
        const n = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[i ? "addClass" : "removeClass"](n.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function r() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: i } = e.navigation;
        o(i, e.isBeginning && !e.params.rewind),
          o(t, e.isEnd && !e.params.rewind);
      }
      function a(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), n("navigationPrev"));
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), n("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = ae(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const i = s(t.nextEl),
          n = s(t.prevEl);
        i && i.length > 0 && i.on("click", l),
          n && n.length > 0 && n.on("click", a),
          Object.assign(e.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          e.enabled ||
            (i && i.addClass(t.lockClass), n && n.addClass(t.lockClass));
      }
      function d() {
        const { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", a),
            i.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === e.params.navigation.enabled ? u() : (c(), r());
        }),
        i("toEdge fromEdge lock unlock", () => {
          r();
        }),
        i("destroy", () => {
          d();
        }),
        i("enable disable", () => {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        i("click", (t, i) => {
          const { $nextEl: s, $prevEl: o } = e.navigation,
            r = i.target;
          if (e.params.navigation.hideOnClick && !x(r).is(o) && !x(r).is(s)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === r || e.pagination.el.contains(r))
            )
              return;
            let t;
            s
              ? (t = s.hasClass(e.params.navigation.hiddenClass))
              : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              s && s.toggleClass(e.params.navigation.hiddenClass),
              o && o.toggleClass(e.params.navigation.hiddenClass);
          }
        });
      const u = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), d();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.$el.removeClass(e.params.navigation.navigationDisabledClass),
            c(),
            r();
        },
        disable: u,
        update: r,
        init: c,
        destroy: d,
      });
    }
    function ce(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function de({ swiper: e, extendParams: t, on: i, emit: n }) {
      const s = "swiper-pagination";
      let o;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${s}-bullet`,
          bulletActiveClass: `${s}-bullet-active`,
          modifierClass: `${s}-`,
          currentClass: `${s}-current`,
          totalClass: `${s}-total`,
          hiddenClass: `${s}-hidden`,
          progressbarFillClass: `${s}-progressbar-fill`,
          progressbarOppositeClass: `${s}-progressbar-opposite`,
          clickableClass: `${s}-clickable`,
          lockClass: `${s}-lock`,
          horizontalClass: `${s}-horizontal`,
          verticalClass: `${s}-vertical`,
          paginationDisabledClass: `${s}-disabled`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let r = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, i) {
        const { bulletActiveClass: n } = e.params.pagination;
        t[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
      }
      function c() {
        const t = e.rtl,
          i = e.params.pagination;
        if (a()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === i.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let s, a, u;
          if (
            (i.dynamicBullets &&
              ((o = n
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                o * (i.dynamicMainBullets + 4) + "px"
              ),
              i.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((r += d - (e.previousIndex - e.loopedSlides || 0)),
                r > i.dynamicMainBullets - 1
                  ? (r = i.dynamicMainBullets - 1)
                  : r < 0 && (r = 0)),
              (s = Math.max(d - r, 0)),
              (a = s + (Math.min(n.length, i.dynamicMainBullets) - 1)),
              (u = (a + s) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${i.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            n.each((e) => {
              const t = x(e),
                n = t.index();
              n === d && t.addClass(i.bulletActiveClass),
                i.dynamicBullets &&
                  (n >= s &&
                    n <= a &&
                    t.addClass(`${i.bulletActiveClass}-main`),
                  n === s && l(t, "prev"),
                  n === a && l(t, "next"));
            });
          else {
            const t = n.eq(d),
              o = t.index();
            if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
              const t = n.eq(s),
                r = n.eq(a);
              for (let e = s; e <= a; e += 1)
                n.eq(e).addClass(`${i.bulletActiveClass}-main`);
              if (e.params.loop)
                if (o >= n.length) {
                  for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${i.bulletActiveClass}-main`);
                  n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                    `${i.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(r, "next");
              else l(t, "prev"), l(r, "next");
            }
          }
          if (i.dynamicBullets) {
            const s = Math.min(n.length, i.dynamicMainBullets + 4),
              r = (o * s - o) / 2 - u * o,
              a = t ? "right" : "left";
            n.css(e.isHorizontal() ? a : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === i.type &&
            (c.find(ce(i.currentClass)).text(i.formatFractionCurrent(d + 1)),
            c.find(ce(i.totalClass)).text(i.formatFractionTotal(u))),
          "progressbar" === i.type)
        ) {
          let t;
          t = i.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (d + 1) / u;
          let s = 1,
            o = 1;
          "horizontal" === t ? (s = n) : (o = n),
            c
              .find(ce(i.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`)
              .transition(e.params.speed);
        }
        "custom" === i.type && i.renderCustom
          ? (c.html(i.renderCustom(e, d + 1, u)), n("paginationRender", c[0]))
          : n("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
      }
      function d() {
        const t = e.params.pagination;
        if (a()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          s = e.pagination.$el;
        let o = "";
        if ("bullets" === t.type) {
          let n = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            n > i &&
            (n = i);
          for (let i = 0; i < n; i += 1)
            t.renderBullet
              ? (o += t.renderBullet.call(e, i, t.bulletClass))
              : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          s.html(o), (e.pagination.bullets = s.find(ce(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((o = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          s.html(o)),
          "progressbar" === t.type &&
            ((o = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            s.html(o)),
          "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = ae(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let i = x(t.el);
        0 !== i.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            i.length > 1 &&
            ((i = e.$el.find(t.el)),
            i.length > 1 &&
              (i = i.filter((t) => x(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
          i.addClass(t.modifierClass + t.type),
          i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (r = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            i.addClass(t.progressbarOppositeClass),
          t.clickable &&
            i.on("click", ce(t.bulletClass), function (t) {
              t.preventDefault();
              let i = x(this).index() * e.params.slidesPerGroup;
              e.params.loop && (i += e.loopedSlides), e.slideTo(i);
            }),
          Object.assign(e.pagination, { $el: i, el: i[0] }),
          e.enabled || i.addClass(t.lockClass));
      }
      function h() {
        const t = e.params.pagination;
        if (a()) return;
        const i = e.pagination.$el;
        i.removeClass(t.hiddenClass),
          i.removeClass(t.modifierClass + t.type),
          i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && i.off("click", ce(t.bulletClass));
      }
      i("init", () => {
        !1 === e.params.pagination.enabled ? p() : (u(), d(), c());
      }),
        i("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        i("snapIndexChange", () => {
          e.params.loop || c();
        }),
        i("slidesLengthChange", () => {
          e.params.loop && (d(), c());
        }),
        i("snapGridLengthChange", () => {
          e.params.loop || (d(), c());
        }),
        i("destroy", () => {
          h();
        }),
        i("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          c();
        }),
        i("click", (t, i) => {
          const s = i.target,
            { $el: o } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            o &&
            o.length > 0 &&
            !x(s).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                (e.navigation.prevEl && s === e.navigation.prevEl))
            )
              return;
            const t = o.hasClass(e.params.pagination.hiddenClass);
            n(!0 === t ? "paginationShow" : "paginationHide"),
              o.toggleClass(e.params.pagination.hiddenClass);
          }
        });
      const p = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          h();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.removeClass(
                e.params.pagination.paginationDisabledClass
              ),
            u(),
            d(),
            c();
        },
        disable: p,
        render: d,
        update: c,
        init: u,
        destroy: h,
      });
    }
    function ue({ swiper: e, extendParams: t, on: i }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let n = null;
      function s(e) {
        const t = n;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function o(e) {
        e.attr("tabIndex", "0");
      }
      function r(e) {
        e.attr("tabIndex", "-1");
      }
      function a(e, t) {
        e.attr("role", t);
      }
      function l(e, t) {
        e.attr("aria-roledescription", t);
      }
      function c(e, t) {
        e.attr("aria-label", t);
      }
      function d(e) {
        e.attr("aria-disabled", !0);
      }
      function u(e) {
        e.attr("aria-disabled", !1);
      }
      function h(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const i = e.params.a11y,
          n = x(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          n.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? s(i.lastSlideMessage) : s(i.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            n.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? s(i.firstSlideMessage) : s(i.prevSlideMessage)),
          e.pagination &&
            n.is(ce(e.params.pagination.bulletClass)) &&
            n[0].click();
      }
      function p() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function f() {
        return p() && e.params.pagination.clickable;
      }
      const m = (e, t, i) => {
          o(e),
            "BUTTON" !== e[0].tagName && (a(e, "button"), e.on("keydown", h)),
            c(e, i),
            (function (e, t) {
              e.attr("aria-controls", t);
            })(e, t);
        },
        g = () => {
          e.a11y.clicked = !0;
        },
        v = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        b = (t) => {
          if (e.a11y.clicked) return;
          const i = t.target.closest(`.${e.params.slideClass}`);
          if (!i || !e.slides.includes(i)) return;
          const n = e.slides.indexOf(i) === e.activeIndex,
            s =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(i);
          n ||
            s ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(i), 0));
        },
        y = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            l(x(e.slides), t.itemRoleDescriptionMessage),
            t.slideRole && a(x(e.slides), t.slideRole);
          const i = e.params.loop
            ? e.slides.filter(
                (t) => !t.classList.contains(e.params.slideDuplicateClass)
              ).length
            : e.slides.length;
          t.slideLabelMessage &&
            e.slides.each((n, s) => {
              const o = x(n),
                r = e.params.loop
                  ? parseInt(o.attr("data-swiper-slide-index"), 10)
                  : s;
              c(
                o,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, r + 1)
                  .replace(/\{\{slidesLength\}\}/, i)
              );
            });
        },
        w = () => {
          const t = e.params.a11y;
          e.$el.append(n);
          const i = e.$el;
          t.containerRoleDescriptionMessage &&
            l(i, t.containerRoleDescriptionMessage),
            t.containerMessage && c(i, t.containerMessage);
          const s = e.$wrapperEl,
            o =
              t.id ||
              s.attr("id") ||
              `swiper-wrapper-${(function (e = 16) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            r =
              e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var a;
          let d, u;
          (a = o),
            s.attr("id", a),
            (function (e, t) {
              e.attr("aria-live", t);
            })(s, r),
            y(),
            e.navigation && e.navigation.$nextEl && (d = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (u = e.navigation.$prevEl),
            d && d.length && m(d, o, t.nextSlideMessage),
            u && u.length && m(u, o, t.prevSlideMessage),
            f() &&
              e.pagination.$el.on(
                "keydown",
                ce(e.params.pagination.bulletClass),
                h
              ),
            e.$el.on("focus", b, !0),
            e.$el.on("pointerdown", g, !0),
            e.$el.on("pointerup", v, !0);
        };
      i("beforeInit", () => {
        n = x(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        i("afterInit", () => {
          e.params.a11y.enabled && w();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && y();
          }
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { $nextEl: t, $prevEl: i } = e.navigation;
              i &&
                i.length > 0 &&
                (e.isBeginning ? (d(i), r(i)) : (u(i), o(i))),
                t && t.length > 0 && (e.isEnd ? (d(t), r(t)) : (u(t), o(t)));
            })();
        }),
        i("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              p() &&
                e.pagination.bullets.each((i) => {
                  const n = x(i);
                  e.params.pagination.clickable &&
                    (o(n),
                    e.params.pagination.renderBullet ||
                      (a(n, "button"),
                      c(
                        n,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          n.index() + 1
                        )
                      ))),
                    n.is(`.${e.params.pagination.bulletActiveClass}`)
                      ? n.attr("aria-current", "true")
                      : n.removeAttr("aria-current");
                });
            })();
        }),
        i("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              let t, i;
              n && n.length > 0 && n.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                t && t.off("keydown", h),
                i && i.off("keydown", h),
                f() &&
                  e.pagination.$el.off(
                    "keydown",
                    ce(e.params.pagination.bulletClass),
                    h
                  ),
                e.$el.off("focus", b, !0),
                e.$el.off("pointerdown", g, !0),
                e.$el.off("pointerup", v, !0);
            })();
        });
    }
    function he(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    if (document.querySelector(".swiper-index")) {
      new re(".swiper-index", {
        modules: [
          function ({ swiper: e, extendParams: t, on: i }) {
            t({ fadeEffect: { crossFade: !1, transformEl: null } }),
              (function (e) {
                const {
                  effect: t,
                  swiper: i,
                  on: n,
                  setTranslate: s,
                  setTransition: o,
                  overwriteParams: r,
                  perspective: a,
                  recreateShadows: l,
                  getEffectParams: c,
                } = e;
                let d;
                n("beforeInit", () => {
                  if (i.params.effect !== t) return;
                  i.classNames.push(`${i.params.containerModifierClass}${t}`),
                    a &&
                      a() &&
                      i.classNames.push(`${i.params.containerModifierClass}3d`);
                  const e = r ? r() : {};
                  Object.assign(i.params, e),
                    Object.assign(i.originalParams, e);
                }),
                  n("setTranslate", () => {
                    i.params.effect === t && s();
                  }),
                  n("setTransition", (e, n) => {
                    i.params.effect === t && o(n);
                  }),
                  n("transitionEnd", () => {
                    if (i.params.effect === t && l) {
                      if (!c || !c().slideShadows) return;
                      i.slides.each((e) => {
                        i.$(e)
                          .find(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                          )
                          .remove();
                      }),
                        l();
                    }
                  }),
                  n("virtualUpdate", () => {
                    i.params.effect === t &&
                      (i.slides.length || (d = !0),
                      requestAnimationFrame(() => {
                        d && i.slides && i.slides.length && (s(), (d = !1));
                      }));
                  });
              })({
                effect: "fade",
                swiper: e,
                on: i,
                setTranslate: () => {
                  const { slides: t } = e,
                    i = e.params.fadeEffect;
                  for (let n = 0; n < t.length; n += 1) {
                    const t = e.slides.eq(n);
                    let s = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    let o = 0;
                    e.isHorizontal() || ((o = s), (s = 0));
                    const r = e.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(t[0].progress), 0)
                      : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    he(i, t)
                      .css({ opacity: r })
                      .transform(`translate3d(${s}px, ${o}px, 0px)`);
                  }
                },
                setTransition: (t) => {
                  const { transformEl: i } = e.params.fadeEffect;
                  (i ? e.slides.find(i) : e.slides).transition(t),
                    (function ({
                      swiper: e,
                      duration: t,
                      transformEl: i,
                      allSlides: n,
                    }) {
                      const { slides: s, activeIndex: o, $wrapperEl: r } = e;
                      if (e.params.virtualTranslate && 0 !== t) {
                        let t,
                          a = !1;
                        (t = n
                          ? i
                            ? s.find(i)
                            : s
                          : i
                          ? s.eq(o).find(i)
                          : s.eq(o)),
                          t.transitionEnd(() => {
                            if (a) return;
                            if (!e || e.destroyed) return;
                            (a = !0), (e.animating = !1);
                            const t = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < t.length; e += 1)
                              r.trigger(t[e]);
                          });
                      }
                    })({
                      swiper: e,
                      duration: t,
                      transformEl: i,
                      allSlides: !0,
                    });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !e.params.cssMode,
                }),
              });
          },
          le,
          de,
          ue,
          function ({ swiper: e, extendParams: t, on: i, emit: n }) {
            let s;
            function o() {
              if (!e.size)
                return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
              const t = e.slides.eq(e.activeIndex);
              let i = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") &&
                (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                clearTimeout(s),
                (s = S(() => {
                  let t;
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        (t = e.slidePrev(e.params.speed, !0, !0)),
                        n("autoplay"))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? a()
                        : ((t = e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          )),
                          n("autoplay"))
                      : ((t = e.slidePrev(e.params.speed, !0, !0)),
                        n("autoplay"))
                    : e.params.loop
                    ? (e.loopFix(),
                      (t = e.slideNext(e.params.speed, !0, !0)),
                      n("autoplay"))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? a()
                      : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                        n("autoplay"))
                    : ((t = e.slideNext(e.params.speed, !0, !0)),
                      n("autoplay")),
                    ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                      o();
                }, i));
            }
            function r() {
              return (
                void 0 === s &&
                !e.autoplay.running &&
                ((e.autoplay.running = !0), n("autoplayStart"), o(), !0)
              );
            }
            function a() {
              return (
                !!e.autoplay.running &&
                void 0 !== s &&
                (s && (clearTimeout(s), (s = void 0)),
                (e.autoplay.running = !1),
                n("autoplayStop"),
                !0)
              );
            }
            function l(t) {
              e.autoplay.running &&
                (e.autoplay.paused ||
                  (s && clearTimeout(s),
                  (e.autoplay.paused = !0),
                  0 !== t && e.params.autoplay.waitForTransition
                    ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                        e.$wrapperEl[0].addEventListener(t, d);
                      })
                    : ((e.autoplay.paused = !1), o())));
            }
            function c() {
              const t = u();
              "hidden" === t.visibilityState && e.autoplay.running && l(),
                "visible" === t.visibilityState &&
                  e.autoplay.paused &&
                  (o(), (e.autoplay.paused = !1));
            }
            function d(t) {
              e &&
                !e.destroyed &&
                e.$wrapperEl &&
                t.target === e.$wrapperEl[0] &&
                (["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].removeEventListener(t, d);
                }),
                (e.autoplay.paused = !1),
                e.autoplay.running ? o() : a());
            }
            function h() {
              e.params.autoplay.disableOnInteraction
                ? a()
                : (n("autoplayPause"), l()),
                ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].removeEventListener(t, d);
                });
            }
            function p() {
              e.params.autoplay.disableOnInteraction ||
                ((e.autoplay.paused = !1), n("autoplayResume"), o());
            }
            (e.autoplay = { running: !1, paused: !1 }),
              t({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1,
                },
              }),
              i("init", () => {
                e.params.autoplay.enabled &&
                  (r(),
                  u().addEventListener("visibilitychange", c),
                  e.params.autoplay.pauseOnMouseEnter &&
                    (e.$el.on("mouseenter", h), e.$el.on("mouseleave", p)));
              }),
              i("beforeTransitionStart", (t, i, n) => {
                e.autoplay.running &&
                  (n || !e.params.autoplay.disableOnInteraction
                    ? e.autoplay.pause(i)
                    : a());
              }),
              i("sliderFirstMove", () => {
                e.autoplay.running &&
                  (e.params.autoplay.disableOnInteraction ? a() : l());
              }),
              i("touchEnd", () => {
                e.params.cssMode &&
                  e.autoplay.paused &&
                  !e.params.autoplay.disableOnInteraction &&
                  o();
              }),
              i("destroy", () => {
                e.$el.off("mouseenter", h),
                  e.$el.off("mouseleave", p),
                  e.autoplay.running && a(),
                  u().removeEventListener("visibilitychange", c);
              }),
              Object.assign(e.autoplay, {
                pause: l,
                run: o,
                start: r,
                stop: a,
              });
          },
        ],
        a11y: !0,
        autoHeight: !0,
        autoplay: { delay: 1e4 },
        effect: "fade",
        loop: !0,
        fadeEffect: !0,
        navigation: {
          nextEl: ".swiper-navigation-index .swiper-navigation-next",
          prevEl: ".swiper-navigation-index .swiper-navigation-prev",
        },
        pagination: { el: ".swiper-index .swiper-pagination", clickable: !0 },
      });
    }
    if (
      (document.querySelector(".product-swiper") &&
        document.querySelectorAll(".product-swiper").forEach((e) => {
          e.classList.contains("product-swiper-neighbour")
            ? (function (e) {
                new re(e, {
                  modules: [le, de, ue],
                  a11y: !0,
                  loop: !0,
                  navigation: {
                    nextEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-next"),
                    prevEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-prev"),
                  },
                  breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    700: { slidesPerView: 4, spaceBetween: 16 },
                    950: { slidesPerView: 2, spaceBetween: 16 },
                    1200: { slidesPerView: 3, spaceBetween: 16 },
                  },
                });
              })(e)
            : e.classList.contains("product-swiper-five")
            ? (function (e) {
                new re(e, {
                  modules: [le, de, ue],
                  a11y: !0,
                  loop: !0,
                  navigation: {
                    nextEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-next"),
                    prevEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-prev"),
                  },
                  breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    700: { slidesPerView: 4, spaceBetween: 16 },
                    950: { slidesPerView: 5, spaceBetween: 16 },
                  },
                });
              })(e)
            : e.classList.contains("product-swiper-five-light")
            ? (function (e) {
                new re(e, {
                  modules: [le, de, ue],
                  a11y: !0,
                  loop: !0,
                  navigation: {
                    nextEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-next"),
                    prevEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-prev"),
                  },
                  breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    700: { slidesPerView: 4, spaceBetween: 16 },
                    950: { slidesPerView: 3, spaceBetween: 16 },
                    1200: { slidesPerView: 5, spaceBetween: 16 },
                  },
                });
              })(e)
            : (function (e) {
                new re(e, {
                  modules: [le, de, ue],
                  a11y: !0,
                  loop: !0,
                  navigation: {
                    nextEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-next"),
                    prevEl: e
                      .closest(".product-block-slider")
                      .querySelector(".swiper-navigation-prev"),
                  },
                  breakpoints: {
                    320: { slidesPerView: 2, spaceBetween: 8 },
                    700: { slidesPerView: 3, spaceBetween: 16 },
                    950: { slidesPerView: 4, spaceBetween: 16 },
                  },
                });
              })(e);
        }),
      document.querySelector(".product-gallery"))
    ) {
      const tn = new re(".gallery-small", {
        modules: [ue, le],
        freeMode: !0,
        watchSlidesProgress: !0,
        direction: "vertical",
        navigation: { nextEl: ".product-gallery .swiper-next" },
        breakpoints: {
          320: { spaceBetween: 10, slidesPerView: 2 },
          410: { spaceBetween: 10, slidesPerView: 3 },
          750: { spaceBetween: 10, slidesPerView: 4 },
          950: { spaceBetween: 10, slidesPerView: 2 },
          1200: { spaceBetween: 10, slidesPerView: 4 },
        },
      });
      new re(".gallery-big", {
        modules: [
          function ({ swiper: e, extendParams: t, on: i }) {
            t({
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs",
              },
            });
            let n = !1,
              s = !1;
            function o() {
              const t = e.thumbs.swiper;
              if (!t || t.destroyed) return;
              const i = t.clickedIndex,
                n = t.clickedSlide;
              if (n && x(n).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
              if (null == i) return;
              let s;
              if (
                ((s = t.params.loop
                  ? parseInt(
                      x(t.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )
                  : i),
                e.params.loop)
              ) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                  (e.loopFix(),
                  (e._clientLeft = e.$wrapperEl[0].clientLeft),
                  (t = e.activeIndex));
                const i = e.slides
                    .eq(t)
                    .prevAll(`[data-swiper-slide-index="${s}"]`)
                    .eq(0)
                    .index(),
                  n = e.slides
                    .eq(t)
                    .nextAll(`[data-swiper-slide-index="${s}"]`)
                    .eq(0)
                    .index();
                s = void 0 === i ? n : void 0 === n ? i : n - t < t - i ? n : i;
              }
              e.slideTo(s);
            }
            function r() {
              const { thumbs: t } = e.params;
              if (n) return !1;
              n = !0;
              const i = e.constructor;
              if (t.swiper instanceof i)
                (e.thumbs.swiper = t.swiper),
                  Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  });
              else if (T(t.swiper)) {
                const n = Object.assign({}, t.swiper);
                Object.assign(n, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                  (e.thumbs.swiper = new i(n)),
                  (s = !0);
              }
              return (
                e.thumbs.swiper.$el.addClass(
                  e.params.thumbs.thumbsContainerClass
                ),
                e.thumbs.swiper.on("tap", o),
                !0
              );
            }
            function a(t) {
              const i = e.thumbs.swiper;
              if (!i || i.destroyed) return;
              const n =
                "auto" === i.params.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : i.params.slidesPerView;
              let s = 1;
              const o = e.params.thumbs.slideThumbActiveClass;
              if (
                (e.params.slidesPerView > 1 &&
                  !e.params.centeredSlides &&
                  (s = e.params.slidesPerView),
                e.params.thumbs.multipleActiveThumbs || (s = 1),
                (s = Math.floor(s)),
                i.slides.removeClass(o),
                i.params.loop || (i.params.virtual && i.params.virtual.enabled))
              )
                for (let t = 0; t < s; t += 1)
                  i.$wrapperEl
                    .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                    .addClass(o);
              else
                for (let t = 0; t < s; t += 1)
                  i.slides.eq(e.realIndex + t).addClass(o);
              const r = e.params.thumbs.autoScrollOffset,
                a = r && !i.params.loop;
              if (e.realIndex !== i.realIndex || a) {
                let s,
                  o,
                  l = i.activeIndex;
                if (i.params.loop) {
                  i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                    (i.loopFix(),
                    (i._clientLeft = i.$wrapperEl[0].clientLeft),
                    (l = i.activeIndex));
                  const t = i.slides
                      .eq(l)
                      .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                      .eq(0)
                      .index(),
                    n = i.slides
                      .eq(l)
                      .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                      .eq(0)
                      .index();
                  (s =
                    void 0 === t
                      ? n
                      : void 0 === n
                      ? t
                      : n - l == l - t
                      ? i.params.slidesPerGroup > 1
                        ? n
                        : l
                      : n - l < l - t
                      ? n
                      : t),
                    (o = e.activeIndex > e.previousIndex ? "next" : "prev");
                } else
                  (s = e.realIndex),
                    (o = s > e.previousIndex ? "next" : "prev");
                a && (s += "next" === o ? r : -1 * r),
                  i.visibleSlidesIndexes &&
                    i.visibleSlidesIndexes.indexOf(s) < 0 &&
                    (i.params.centeredSlides
                      ? (s =
                          s > l
                            ? s - Math.floor(n / 2) + 1
                            : s + Math.floor(n / 2) - 1)
                      : s > l && i.params.slidesPerGroup,
                    i.slideTo(s, t ? 0 : void 0));
              }
            }
            (e.thumbs = { swiper: null }),
              i("beforeInit", () => {
                const { thumbs: t } = e.params;
                t && t.swiper && (r(), a(!0));
              }),
              i("slideChange update resize observerUpdate", () => {
                a();
              }),
              i("setTransition", (t, i) => {
                const n = e.thumbs.swiper;
                n && !n.destroyed && n.setTransition(i);
              }),
              i("beforeDestroy", () => {
                const t = e.thumbs.swiper;
                t && !t.destroyed && s && t.destroy();
              }),
              Object.assign(e.thumbs, { init: r, update: a });
          },
        ],
        allowTouchMove: !1,
        thumbs: { swiper: tn },
      });
    }
    if (document.querySelector(".wholesale-swiper")) {
      new re(".wholesale-swiper", {
        modules: [de],
        spaceBetween: 10,
        pagination: { el: ".swiper-pagination", clickable: !0 },
      });
    }
    new (i(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            a(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let i = t.split("|"),
                n = { root: i[0], margin: i[1], threshold: i[2] },
                s = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    s = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(i) === n.margin &&
                    String(s) === n.threshold
                  )
                    return e;
                }),
                o = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(s, o);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && r();
      }
      scrollWatcherCallback(e, t) {
        const i = e.target;
        this.scrollWatcherIntersecting(e, i),
          i.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(i, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let pe = !1;
    setTimeout(() => {
      if (pe) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var fe = i(211);
    const me = (e, t = 1e4) => (
        (e = parseFloat(e + "") || 0), Math.round((e + Number.EPSILON) * t) / t
      ),
      ge = function (e) {
        if (!(e && e instanceof Element && e.offsetParent)) return !1;
        const t = e.scrollHeight > e.clientHeight,
          i = window.getComputedStyle(e).overflowY,
          n = -1 !== i.indexOf("hidden"),
          s = -1 !== i.indexOf("visible");
        return t && !n && !s;
      },
      ve = function (e, t = void 0) {
        return (
          !(!e || e === document.body || (t && e === t)) &&
          (ge(e) ? e : ve(e.parentElement, t))
        );
      },
      be = function (e) {
        var t = new DOMParser().parseFromString(e, "text/html").body;
        if (t.childElementCount > 1) {
          for (var i = document.createElement("div"); t.firstChild; )
            i.appendChild(t.firstChild);
          return i;
        }
        return t.firstChild;
      },
      ye = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
      we = (e, t, i) => {
        e &&
          ye(t).forEach((t) => {
            e.classList.toggle(t, i || !1);
          });
      };
    class xe {
      constructor(e) {
        Object.defineProperty(this, "pageX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.nativePointer = e),
          (this.pageX = e.pageX),
          (this.pageY = e.pageY),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY),
          (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
          (this.time = Date.now());
      }
    }
    const Se = { passive: !1 };
    class Ee {
      constructor(
        e,
        { start: t = () => !0, move: i = () => {}, end: n = () => {} }
      ) {
        Object.defineProperty(this, "element", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          (this.element = e),
          (this.startCallback = t),
          (this.moveCallback = i),
          (this.endCallback = n);
        for (const e of [
          "onPointerStart",
          "onTouchStart",
          "onMove",
          "onTouchEnd",
          "onPointerEnd",
          "onWindowBlur",
        ])
          this[e] = this[e].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, Se),
          this.element.addEventListener("touchstart", this.onTouchStart, Se),
          this.element.addEventListener("touchmove", this.onMove, Se),
          this.element.addEventListener("touchend", this.onTouchEnd),
          this.element.addEventListener("touchcancel", this.onTouchEnd);
      }
      onPointerStart(e) {
        if (!e.buttons || 0 !== e.button) return;
        const t = new xe(e);
        this.currentPointers.some((e) => e.id === t.id) ||
          (this.triggerPointerStart(t, e) &&
            (window.addEventListener("mousemove", this.onMove),
            window.addEventListener("mouseup", this.onPointerEnd),
            window.addEventListener("blur", this.onWindowBlur)));
      }
      onTouchStart(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerStart(new xe(t), e);
        window.addEventListener("blur", this.onWindowBlur);
      }
      onMove(e) {
        const t = this.currentPointers.slice(),
          i =
            "changedTouches" in e
              ? Array.from(e.changedTouches || []).map((e) => new xe(e))
              : [new xe(e)],
          n = [];
        for (const e of i) {
          const t = this.currentPointers.findIndex((t) => t.id === e.id);
          t < 0 || (n.push(e), (this.currentPointers[t] = e));
        }
        n.length && this.moveCallback(e, this.currentPointers.slice(), t);
      }
      onPointerEnd(e) {
        (e.buttons > 0 && 0 !== e.button) ||
          (this.triggerPointerEnd(e, new xe(e)),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur));
      }
      onTouchEnd(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerEnd(e, new xe(t));
      }
      triggerPointerStart(e, t) {
        return (
          !!this.startCallback(t, e, this.currentPointers.slice()) &&
          (this.currentPointers.push(e), this.startPointers.push(e), !0)
        );
      }
      triggerPointerEnd(e, t) {
        const i = this.currentPointers.findIndex((e) => e.id === t.id);
        i < 0 ||
          (this.currentPointers.splice(i, 1),
          this.startPointers.splice(i, 1),
          this.endCallback(e, t, this.currentPointers.slice()));
      }
      onWindowBlur() {
        this.clear();
      }
      clear() {
        for (; this.currentPointers.length; ) {
          const e = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(
              new Event("touchend", {
                bubbles: !0,
                cancelable: !0,
                clientX: e.clientX,
                clientY: e.clientY,
              }),
              e,
              this.currentPointers.slice()
            );
        }
      }
      stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, Se),
          this.element.removeEventListener("touchstart", this.onTouchStart, Se),
          this.element.removeEventListener("touchmove", this.onMove, Se),
          this.element.removeEventListener("touchend", this.onTouchEnd),
          this.element.removeEventListener("touchcancel", this.onTouchEnd),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur);
      }
    }
    function Ce(e, t) {
      return t
        ? Math.sqrt(
            Math.pow(t.clientX - e.clientX, 2) +
              Math.pow(t.clientY - e.clientY, 2)
          )
        : 0;
    }
    function Te(e, t) {
      return t
        ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2,
          }
        : e;
    }
    const Pe = (e) =>
        "object" == typeof e &&
        null !== e &&
        e.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(e),
      Me = (e, ...t) => {
        const i = t.length;
        for (let n = 0; n < i; n++) {
          const i = t[n] || {};
          Object.entries(i).forEach(([t, i]) => {
            const n = Array.isArray(i) ? [] : {};
            e[t] || Object.assign(e, { [t]: n }),
              Pe(i)
                ? Object.assign(e[t], Me(n, i))
                : Array.isArray(i)
                ? Object.assign(e, { [t]: [...i] })
                : Object.assign(e, { [t]: i });
          });
        }
        return e;
      },
      Oe = function (e, t) {
        return e
          .split(".")
          .reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
      };
    class Le {
      constructor(e = {}) {
        Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e,
        }),
          Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map(),
          }),
          this.setOptions(e);
        for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
          e.startsWith("on") &&
            "function" == typeof this[e] &&
            (this[e] = this[e].bind(this));
      }
      setOptions(e) {
        this.options = e ? Me({}, this.constructor.defaults, e) : {};
        for (const [e, t] of Object.entries(this.option("on") || {}))
          this.on(e, t);
      }
      option(e, ...t) {
        let i = Oe(e, this.options);
        return i && "function" == typeof i && (i = i.call(this, this, ...t)), i;
      }
      optionFor(e, t, i, ...n) {
        let s = Oe(t, e);
        var o;
        "string" != typeof (o = s) ||
          isNaN(o) ||
          isNaN(parseFloat(o)) ||
          (s = parseFloat(s)),
          "true" === s && (s = !0),
          "false" === s && (s = !1),
          s && "function" == typeof s && (s = s.call(this, this, e, ...n));
        let r = Oe(t, this.options);
        return (
          r && "function" == typeof r
            ? (s = r.call(this, this, e, ...n, s))
            : void 0 === s && (s = r),
          void 0 === s ? i : s
        );
      }
      cn(e) {
        const t = this.options.classes;
        return (t && t[e]) || "";
      }
      localize(e, t = []) {
        e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
          let n = "";
          return (
            i
              ? (n = this.option(
                  `${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`
                ))
              : t && (n = this.option(`l10n.${t}`)),
            n || (n = e),
            n
          );
        });
        for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
        return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
      }
      on(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          this.events || (this.events = new Map()),
          i.forEach((e) => {
            let i = this.events.get(e);
            i || (this.events.set(e, []), (i = [])),
              i.includes(t) || i.push(t),
              this.events.set(e, i);
          });
      }
      off(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          i.forEach((e) => {
            const i = this.events.get(e);
            if (Array.isArray(i)) {
              const e = i.indexOf(t);
              e > -1 && i.splice(e, 1);
            }
          });
      }
      emit(e, ...t) {
        [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
          "*" !== e && this.emit("*", e, ...t);
      }
    }
    Object.defineProperty(Le, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.35",
    }),
      Object.defineProperty(Le, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    class ke extends Le {
      constructor(e = {}) {
        super(e),
          Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          });
      }
      attachPlugins(e = {}) {
        const t = new Map();
        for (const [i, n] of Object.entries(e)) {
          const e = this.option(i),
            s = this.plugins[i];
          s || !1 === e
            ? s && !1 === e && (s.detach(), delete this.plugins[i])
            : t.set(i, new n(this, e || {}));
        }
        for (const [e, i] of t) (this.plugins[e] = i), i.attach();
      }
      detachPlugins(e) {
        e = e || Object.keys(this.plugins);
        for (const t of e) {
          const e = this.plugins[t];
          e && e.detach(), delete this.plugins[t];
        }
        return this.emit("detachPlugins"), this;
      }
    }
    var Ae;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Ready = 2)] = "Ready"),
        (e[(e.Panning = 3)] = "Panning"),
        (e[(e.Mousemove = 4)] = "Mousemove"),
        (e[(e.Destroy = 5)] = "Destroy");
    })(Ae || (Ae = {}));
    const _e = ["a", "b", "c", "d", "e", "f"],
      ze = {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      },
      Ie = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: !0,
        dragMinThreshold: 3,
        lockAxis: !1,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: !1,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: !0,
        bounds: "auto",
        infinite: !1,
        rubberband: !0,
        bounce: !0,
        maxVelocity: 75,
        transformParent: !1,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen",
        },
        l10n: ze,
      },
      De = '<circle cx="25" cy="25" r="20"></circle>',
      $e =
        '<div class="f-spinner"><svg viewBox="0 0 50 50">' +
        De +
        De +
        "</svg></div>",
      Re = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
      Ne = (e, t) => {
        e &&
          ye(t).forEach((t) => {
            e.classList.remove(t);
          });
      },
      Fe = (e, t) => {
        e &&
          ye(t).forEach((t) => {
            e.classList.add(t);
          });
      },
      Be = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      je = 1e4,
      He = "mousemove",
      qe = "drag",
      Ve = "content",
      We = "auto";
    let Ge = null,
      Xe = null;
    class Ye extends ke {
      get fits() {
        return (
          this.contentRect.width - this.contentRect.fitWidth < 1 &&
          this.contentRect.height - this.contentRect.fitHeight < 1
        );
      }
      get isTouchDevice() {
        return (
          null === Xe && (Xe = window.matchMedia("(hover: none)").matches), Xe
        );
      }
      get isMobile() {
        return (
          null === Ge &&
            (Ge = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
          Ge
        );
      }
      get panMode() {
        return this.options.panMode !== He || this.isTouchDevice ? qe : He;
      }
      get panOnlyZoomed() {
        const e = this.options.panOnlyZoomed;
        return e === We ? this.isTouchDevice : e;
      }
      get isInfinite() {
        return this.option("infinite");
      }
      get angle() {
        return (
          (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
        );
      }
      get targetAngle() {
        return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
      }
      get scale() {
        const { a: e, b: t } = this.current;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get targetScale() {
        const { a: e, b: t } = this.target;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get minScale() {
        return this.option("minScale") || 1;
      }
      get fullScale() {
        const { contentRect: e } = this;
        return e.fullWidth / e.fitWidth || 1;
      }
      get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
      get coverScale() {
        const { containerRect: e, contentRect: t } = this,
          i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
      get isScaling() {
        return (
          Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        );
      }
      get isContentLoading() {
        const e = this.content;
        return !!(e && e instanceof HTMLImageElement) && !e.complete;
      }
      get isResting() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (const e of _e) {
          const t = "e" == e || "f" === e ? 1e-4 : 1e-5;
          if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
      constructor(e, t = {}, i = {}) {
        var n;
        if (
          (super(t),
          Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ae.Init,
          }),
          Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
          }),
          Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              fullWidth: 0,
              fullHeight: 0,
              fitWidth: 0,
              fitHeight: 0,
              width: 0,
              height: 0,
            },
          }),
          Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
          }),
          Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, time: 0 },
          }),
          Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Be),
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Be),
          }),
          Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
          }),
          Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          !e)
        )
          throw new Error("Container Element Not Found");
        (this.container = e),
          this.initContent(),
          this.attachPlugins(Object.assign(Object.assign({}, Ye.Plugins), i)),
          this.emit("attachPlugins"),
          this.emit("init");
        const s = this.content;
        if (
          (s.addEventListener("load", this.onLoad),
          s.addEventListener("error", this.onError),
          this.isContentLoading)
        ) {
          if (this.option("spinner")) {
            e.classList.add(this.cn("isLoading"));
            const t = be($e);
            !e.contains(s) || s.parentElement instanceof HTMLPictureElement
              ? (this.spinner = e.appendChild(t))
              : (this.spinner =
                  (null === (n = s.parentElement) || void 0 === n
                    ? void 0
                    : n.insertBefore(t, s)) || null);
          }
          this.emit("beforeLoad");
        } else
          queueMicrotask(() => {
            this.enable();
          });
      }
      initContent() {
        const { container: e } = this,
          t = this.cn(Ve);
        let i = this.option(Ve) || e.querySelector(`.${t}`);
        if (
          (i ||
            ((i = e.querySelector("img,picture") || e.firstElementChild),
            i && Fe(i, t)),
          i instanceof HTMLPictureElement && (i = i.querySelector("img")),
          !i)
        )
          throw new Error("No content found");
        this.content = i;
      }
      onLoad() {
        const { spinner: e, container: t, state: i } = this;
        e && (e.remove(), (this.spinner = null)),
          this.option("spinner") && t.classList.remove(this.cn("isLoading")),
          this.emit("afterLoad"),
          i === Ae.Init ? this.enable() : this.updateMetrics();
      }
      onError() {
        this.state !== Ae.Destroy &&
          (this.spinner && (this.spinner.remove(), (this.spinner = null)),
          this.stop(),
          this.detachEvents(),
          (this.state = Ae.Error),
          this.emit("error"));
      }
      getNextScale(e) {
        const {
          fullScale: t,
          targetScale: i,
          coverScale: n,
          maxScale: s,
          minScale: o,
        } = this;
        let r = o;
        switch (e) {
          case "toggleMax":
            r = i - o < 0.5 * (s - o) ? s : o;
            break;
          case "toggleCover":
            r = i - o < 0.5 * (n - o) ? n : o;
            break;
          case "toggleZoom":
            r = i - o < 0.5 * (t - o) ? t : o;
            break;
          case "iterateZoom":
            let e = [1, t, s].sort((e, t) => e - t),
              a = e.findIndex((e) => e > i + 1e-5);
            r = e[a] || 1;
        }
        return r;
      }
      attachObserver() {
        var e;
        const t = () => {
          const { container: e, containerRect: t } = this;
          return (
            Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
            Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
          );
        };
        this.resizeObserver ||
          void 0 === window.ResizeObserver ||
          (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer ||
              (t()
                ? (this.onResize(),
                  this.isMobile &&
                    (this.updateTimer = setTimeout(() => {
                      t() && this.onResize(), (this.updateTimer = null);
                    }, 500)))
                : this.updateTimer &&
                  (clearTimeout(this.updateTimer), (this.updateTimer = null)));
          })),
          null === (e = this.resizeObserver) ||
            void 0 === e ||
            e.observe(this.container);
      }
      detachObserver() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
      }
      attachEvents() {
        const { container: e } = this;
        e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
          e.addEventListener("wheel", this.onWheel, { passive: !1 }),
          (this.pointerTracker = new Ee(e, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp,
          })),
          document.addEventListener(He, this.onMouseMove);
      }
      detachEvents() {
        var e;
        const { container: t } = this;
        t.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
          null === (e = this.pointerTracker) || void 0 === e || e.stop(),
          (this.pointerTracker = null),
          document.removeEventListener(He, this.onMouseMove),
          document.removeEventListener("keydown", this.onKeydown, !0),
          this.clickTimer &&
            (clearTimeout(this.clickTimer), (this.clickTimer = null)),
          this.updateTimer &&
            (clearTimeout(this.updateTimer), (this.updateTimer = null));
      }
      animate() {
        this.setTargetForce();
        const e = this.friction,
          t = this.option("maxVelocity");
        for (const i of _e)
          e
            ? ((this.velocity[i] *= 1 - e),
              t &&
                !this.isScaling &&
                (this.velocity[i] = Math.max(
                  Math.min(this.velocity[i], t),
                  -1 * t
                )),
              (this.current[i] += this.velocity[i]))
            : (this.current[i] = this.target[i]);
        this.setTransform(),
          this.setEdgeForce(),
          !this.isResting || this.isDragging
            ? (this.rAF = requestAnimationFrame(() => this.animate()))
            : this.stop("current");
      }
      setTargetForce() {
        for (const e of _e)
          ("e" === e && this.isBouncingX) ||
            ("f" === e && this.isBouncingY) ||
            (this.velocity[e] =
              (1 / (1 - this.friction) - 1) *
              (this.target[e] - this.current[e]));
      }
      checkBounds(e = 0, t = 0) {
        const { current: i } = this,
          n = i.e + e,
          s = i.f + t,
          o = this.getBounds(),
          { x: r, y: a } = o,
          l = r.min,
          c = r.max,
          d = a.min,
          u = a.max;
        let h = 0,
          p = 0;
        return (
          l !== 1 / 0 && n < l
            ? (h = l - n)
            : c !== 1 / 0 && n > c && (h = c - n),
          d !== 1 / 0 && s < d
            ? (p = d - s)
            : u !== 1 / 0 && s > u && (p = u - s),
          Math.abs(h) < 1e-4 && (h = 0),
          Math.abs(p) < 1e-4 && (p = 0),
          Object.assign(Object.assign({}, o), {
            xDiff: h,
            yDiff: p,
            inBounds: !h && !p,
          })
        );
      }
      clampTargetBounds() {
        const { target: e } = this,
          { x: t, y: i } = this.getBounds();
        t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
          t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
          i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
          i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
      }
      calculateContentDim(e = this.current) {
        const { content: t, contentRect: i } = this,
          { fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: r } = i;
        let a = o,
          l = r;
        if (this.option("zoom") || 0 !== this.angle) {
          const i = !(
              t instanceof HTMLImageElement ||
              ("none" !== window.getComputedStyle(t).maxWidth &&
                "none" !== window.getComputedStyle(t).maxHeight)
            ),
            c = i ? o : n,
            d = i ? r : s,
            u = this.getMatrix(e),
            h = new DOMPoint(0, 0).matrixTransform(u),
            p = new DOMPoint(0 + c, 0).matrixTransform(u),
            f = new DOMPoint(0 + c, 0 + d).matrixTransform(u),
            m = new DOMPoint(0, 0 + d).matrixTransform(u),
            g = Math.abs(f.x - h.x),
            v = Math.abs(f.y - h.y),
            b = Math.abs(m.x - p.x),
            y = Math.abs(m.y - p.y);
          (a = Math.max(g, b)), (l = Math.max(v, y));
        }
        return { contentWidth: a, contentHeight: l };
      }
      setEdgeForce() {
        if (
          this.ignoreBounds ||
          this.isDragging ||
          this.panMode === He ||
          this.targetScale < this.scale
        )
          return (this.isBouncingX = !1), void (this.isBouncingY = !1);
        const { target: e } = this,
          { x: t, y: i, xDiff: n, yDiff: s } = this.checkBounds(),
          o = this.option("maxVelocity");
        let r = this.velocity.e,
          a = this.velocity.f;
        0 !== n
          ? ((this.isBouncingX = !0),
            n * r <= 0
              ? (r += 0.14 * n)
              : ((r = 0.14 * n),
                t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
            o && (r = Math.max(Math.min(r, o), -1 * o)))
          : (this.isBouncingX = !1),
          0 !== s
            ? ((this.isBouncingY = !0),
              s * a <= 0
                ? (a += 0.14 * s)
                : ((a = 0.14 * s),
                  i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                  i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
              o && (a = Math.max(Math.min(a, o), -1 * o)))
            : (this.isBouncingY = !1),
          this.isBouncingX && (this.velocity.e = r),
          this.isBouncingY && (this.velocity.f = a);
      }
      enable() {
        const { content: e } = this,
          t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
        for (const e of _e) this.current[e] = this.target[e] = t[e];
        this.updateMetrics(),
          this.attachObserver(),
          this.attachEvents(),
          (this.state = Ae.Ready),
          this.emit("ready");
      }
      onClick(e) {
        var t;
        "click" === e.type &&
          0 === e.detail &&
          ((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
          this.isDragging &&
            (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
        const i = e.target;
        if (!i || e.defaultPrevented) return;
        if (i.hasAttribute("disabled"))
          return e.preventDefault(), void e.stopPropagation();
        if (
          (() => {
            const e = window.getSelection();
            return e && "Range" === e.type;
          })() &&
          !i.closest("button")
        )
          return;
        const n = i.closest("[data-panzoom-action]"),
          s = i.closest("[data-panzoom-change]"),
          o = n || s,
          r = o && Re(o) ? o.dataset : null;
        if (r) {
          const t = r.panzoomChange,
            i = r.panzoomAction;
          if (((t || i) && e.preventDefault(), t)) {
            let i = {};
            try {
              i = JSON.parse(t);
            } catch (e) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(i);
          }
          if (i) return void (this[i] && this[i]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
          return e.preventDefault(), void e.stopPropagation();
        if (i.closest("[data-fancybox]")) return;
        const a = this.content.getBoundingClientRect(),
          l = this.dragStart;
        if (
          l.time &&
          !this.canZoomOut() &&
          (Math.abs(a.x - l.x) > 2 || Math.abs(a.y - l.y) > 2)
        )
          return;
        this.dragStart.time = 0;
        const c = (t) => {
            this.option("zoom", e) &&
              t &&
              "string" == typeof t &&
              /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                t
              ) &&
              "function" == typeof this[t] &&
              (e.preventDefault(), this[t]({ event: e }));
          },
          d = this.option("click", e),
          u = this.option("dblClick", e);
        u
          ? (this.clicks++,
            1 == this.clicks &&
              (this.clickTimer = setTimeout(() => {
                1 === this.clicks
                  ? (this.emit("click", e), !e.defaultPrevented && d && c(d))
                  : (this.emit("dblClick", e), e.defaultPrevented || c(u)),
                  (this.clicks = 0),
                  (this.clickTimer = null);
              }, 350)))
          : (this.emit("click", e), !e.defaultPrevented && d && c(d));
      }
      addTrackingPoint(e) {
        const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100);
        t.push(e), (this.trackingPoints = t);
      }
      onPointerDown(e, t, i) {
        var n;
        if (!1 === this.option("touch", e)) return !1;
        (this.pwt = 0),
          (this.dragOffset = { x: 0, y: 0, time: 0 }),
          (this.trackingPoints = []);
        const s = this.content.getBoundingClientRect();
        if (
          ((this.dragStart = {
            x: s.x,
            y: s.y,
            top: s.top,
            left: s.left,
            time: Date.now(),
          }),
          this.clickTimer)
        )
          return !1;
        if (this.panMode === He && this.targetScale > 1)
          return e.preventDefault(), e.stopPropagation(), !1;
        const o = e.composedPath()[0];
        if (!i.length) {
          if (
            [
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
              "IFRAME",
            ].includes(o.nodeName) ||
            o.closest(
              "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
            )
          )
            return !1;
          null === (n = window.getSelection()) ||
            void 0 === n ||
            n.removeAllRanges();
        }
        if ("mousedown" === e.type)
          ["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
        else if (Math.abs(this.velocity.a) > 0.3) return !1;
        return (
          (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          this.stop(),
          this.isDragging ||
            ((this.isDragging = !0),
            this.addTrackingPoint(t),
            this.emit("touchStart", e)),
          !0
        );
      }
      onPointerMove(e, t, i) {
        if (!1 === this.option("touch", e)) return;
        if (!this.isDragging) return;
        if (
          t.length < 2 &&
          this.panOnlyZoomed &&
          me(this.targetScale) <= me(this.minScale)
        )
          return;
        if ((this.emit("touchMove", e), e.defaultPrevented)) return;
        this.addTrackingPoint(t[0]);
        const { content: n } = this,
          s = Te(i[0], i[1]),
          o = Te(t[0], t[1]);
        let r = 0,
          a = 0;
        if (t.length > 1) {
          const e = n.getBoundingClientRect();
          (r = s.clientX - e.left - 0.5 * e.width),
            (a = s.clientY - e.top - 0.5 * e.height);
        }
        const l = Ce(i[0], i[1]),
          c = Ce(t[0], t[1]);
        let d = l ? c / l : 1,
          u = o.clientX - s.clientX,
          h = o.clientY - s.clientY;
        (this.dragOffset.x += u),
          (this.dragOffset.y += h),
          (this.dragOffset.time = Date.now() - this.dragStart.time);
        let p =
          me(this.targetScale) === me(this.minScale) && this.option("lockAxis");
        if (p && !this.lockedAxis)
          if ("xy" === p || "y" === p || "touchmove" === e.type) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void e.preventDefault();
            const t = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              (u = 0),
              (h = 0);
          } else this.lockedAxis = p;
        if (
          (ve(e.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
          p &&
            "xy" !== p &&
            this.lockedAxis !== p &&
            me(this.targetScale) === me(this.minScale))
        )
          return;
        e.cancelable && e.preventDefault(),
          this.container.classList.add(this.cn("isDragging"));
        const f = this.checkBounds(u, h);
        this.option("rubberband")
          ? ("x" !== this.isInfinite &&
              ((f.xDiff > 0 && u < 0) || (f.xDiff < 0 && u > 0)) &&
              (u *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
              )),
            "y" !== this.isInfinite &&
              ((f.yDiff > 0 && h < 0) || (f.yDiff < 0 && h > 0)) &&
              (h *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
              )))
          : (f.xDiff && (u = 0), f.yDiff && (h = 0));
        const m = this.targetScale,
          g = this.minScale,
          v = this.maxScale;
        m < 0.5 * g && (d = Math.max(d, g)),
          m > 1.5 * v && (d = Math.min(d, v)),
          "y" === this.lockedAxis && me(m) === me(g) && (u = 0),
          "x" === this.lockedAxis && me(m) === me(g) && (h = 0),
          this.applyChange({
            originX: r,
            originY: a,
            panX: u,
            panY: h,
            scale: d,
            friction: this.option("dragFriction"),
            ignoreBounds: !0,
          });
      }
      onPointerUp(e, t, i) {
        if (i.length)
          return (
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            void (this.trackingPoints = [])
          );
        this.container.classList.remove(this.cn("isDragging")),
          this.isDragging &&
            (this.addTrackingPoint(t),
            this.panOnlyZoomed &&
              this.contentRect.width - this.contentRect.fitWidth < 1 &&
              this.contentRect.height - this.contentRect.fitHeight < 1 &&
              (this.trackingPoints = []),
            ve(e.target, this.content) &&
              "y" === this.lockedAxis &&
              (this.trackingPoints = []),
            this.emit("touchEnd", e),
            (this.isDragging = !1),
            (this.lockedAxis = !1),
            this.state !== Ae.Destroy &&
              (e.defaultPrevented || this.startDecelAnim()));
      }
      startDecelAnim() {
        var e;
        const t = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const e of _e) this.velocity[e] = 0;
        (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          Ne(this.container, "is-scaling"),
          Ne(this.container, "is-animating"),
          (this.isTicking = !1);
        const { trackingPoints: i } = this,
          n = i[0],
          s = i[i.length - 1];
        let o = 0,
          r = 0,
          a = 0;
        s &&
          n &&
          ((o = s.clientX - n.clientX),
          (r = s.clientY - n.clientY),
          (a = s.time - n.time));
        const l =
          (null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1;
        1 !== l && ((o *= l), (r *= l));
        let c = 0,
          d = 0,
          u = 0,
          h = 0,
          p = this.option("decelFriction");
        const f = this.targetScale;
        if (a > 0) {
          (u = Math.abs(o) > 3 ? o / (a / 30) : 0),
            (h = Math.abs(r) > 3 ? r / (a / 30) : 0);
          const e = this.option("maxVelocity");
          e &&
            ((u = Math.max(Math.min(u, e), -1 * e)),
            (h = Math.max(Math.min(h, e), -1 * e)));
        }
        u && (c = u / (1 / (1 - p) - 1)),
          h && (d = h / (1 / (1 - p) - 1)),
          ("y" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "y" === this.lockedAxis &&
              me(f) === this.minScale)) &&
            (c = u = 0),
          ("x" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "x" === this.lockedAxis &&
              me(f) === this.minScale)) &&
            (d = h = 0);
        const m = this.dragOffset.x,
          g = this.dragOffset.y,
          v = this.option("dragMinThreshold") || 0;
        Math.abs(m) < v && Math.abs(g) < v && ((c = d = 0), (u = h = 0)),
          ((this.option("zoom") &&
            (f < this.minScale - 1e-5 || f > this.maxScale + 1e-5)) ||
            (t && !c && !d)) &&
            (p = 0.35),
          this.applyChange({ panX: c, panY: d, friction: p }),
          this.emit("decel", u, h, m, g);
      }
      onWheel(e) {
        var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const i = Math.max(-1, Math.min(1, t));
        if ((this.emit("wheel", e, i), this.panMode === He)) return;
        if (e.defaultPrevented) return;
        const n = this.option("wheel");
        "pan" === n
          ? (e.preventDefault(),
            (this.panOnlyZoomed && !this.canZoomOut()) ||
              this.applyChange({
                panX: 2 * -e.deltaX,
                panY: 2 * -e.deltaY,
                bounce: !1,
              }))
          : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(e);
      }
      onMouseMove(e) {
        this.panWithMouse(e);
      }
      onKeydown(e) {
        "Escape" === e.key && this.toggleFS();
      }
      onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
      setTransform() {
        this.emit("beforeTransform");
        const { current: e, target: t, content: i, contentRect: n } = this,
          s = Object.assign({}, Be);
        for (const i of _e) {
          const n = "e" == i || "f" === i ? je : 1e5;
          (s[i] = me(e[i], n)),
            Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? 0.51 : 0.001) &&
              (e[i] = t[i]);
        }
        let { a: o, b: r, c: a, d: l, e: c, f: d } = s,
          u = `matrix(${o}, ${r}, ${a}, ${l}, ${c}, ${d})`,
          h =
            i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
        if (
          (this.option("transformParent") && (h = h.parentElement || h),
          h.style.transform === u)
        )
          return;
        h.style.transform = u;
        const { contentWidth: p, contentHeight: f } =
          this.calculateContentDim();
        (n.width = p), (n.height = f), this.emit("afterTransform");
      }
      updateMetrics(e = !1) {
        var t;
        if (!this || this.state === Ae.Destroy) return;
        if (this.isContentLoading) return;
        const i = Math.max(
            1,
            (null === (t = window.visualViewport) || void 0 === t
              ? void 0
              : t.scale) || 1
          ),
          { container: n, content: s } = this,
          o = s instanceof HTMLImageElement,
          r = n.getBoundingClientRect(),
          a = getComputedStyle(this.container);
        let l = r.width * i,
          c = r.height * i;
        const d = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom),
          u = l - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)),
          h = c - d;
        this.containerRect = {
          width: l,
          height: c,
          innerWidth: u,
          innerHeight: h,
        };
        const p =
            parseFloat(s.dataset.width || "") ||
            ((e) => {
              let t = 0;
              return (
                (t =
                  e instanceof HTMLImageElement
                    ? e.naturalWidth
                    : e instanceof SVGElement
                    ? e.width.baseVal.value
                    : Math.max(e.offsetWidth, e.scrollWidth)),
                t || 0
              );
            })(s),
          f =
            parseFloat(s.dataset.height || "") ||
            ((e) => {
              let t = 0;
              return (
                (t =
                  e instanceof HTMLImageElement
                    ? e.naturalHeight
                    : e instanceof SVGElement
                    ? e.height.baseVal.value
                    : Math.max(e.offsetHeight, e.scrollHeight)),
                t || 0
              );
            })(s);
        let m = this.option("width", p) || We,
          g = this.option("height", f) || We;
        const v = m === We,
          b = g === We;
        "number" != typeof m && (m = p),
          "number" != typeof g && (g = f),
          v && (m = p * (g / f)),
          b && (g = f / (p / m));
        let y =
          s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
        this.option("transformParent") && (y = y.parentElement || y);
        const w = y.getAttribute("style") || "";
        y.style.setProperty("transform", "none", "important"),
          o && ((y.style.width = ""), (y.style.height = "")),
          y.offsetHeight;
        const x = s.getBoundingClientRect();
        let S = x.width * i,
          E = x.height * i,
          C = S,
          T = E;
        (S = Math.min(S, m)),
          (E = Math.min(E, g)),
          o
            ? ({ width: S, height: E } = ((e, t, i, n) => {
                const s = i / e,
                  o = n / t,
                  r = Math.min(s, o);
                return { width: (e *= r), height: (t *= r) };
              })(m, g, S, E))
            : ((S = Math.min(S, m)), (E = Math.min(E, g)));
        let P = 0.5 * (T - E),
          M = 0.5 * (C - S);
        (this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
          top: x.top - r.top + P,
          bottom: r.bottom - x.bottom + P,
          left: x.left - r.left + M,
          right: r.right - x.right + M,
          fitWidth: S,
          fitHeight: E,
          width: S,
          height: E,
          fullWidth: m,
          fullHeight: g,
        })),
          (y.style.cssText = w),
          o && ((y.style.width = `${S}px`), (y.style.height = `${E}px`)),
          this.setTransform(),
          !0 !== e && this.emit("refresh"),
          this.ignoreBounds ||
            (me(this.targetScale) < me(this.minScale)
              ? this.zoomTo(this.minScale, { friction: 0 })
              : this.targetScale > this.maxScale
              ? this.zoomTo(this.maxScale, { friction: 0 })
              : this.state === Ae.Init ||
                this.checkBounds().inBounds ||
                this.requestTick()),
          this.updateControls();
      }
      calculateBounds() {
        const { contentWidth: e, contentHeight: t } = this.calculateContentDim(
            this.target
          ),
          { targetScale: i, lockedAxis: n } = this,
          { fitWidth: s, fitHeight: o } = this.contentRect;
        let r = 0,
          a = 0,
          l = 0,
          c = 0;
        const d = this.option("infinite");
        if (!0 === d || (n && d === n))
          (r = -1 / 0), (l = 1 / 0), (a = -1 / 0), (c = 1 / 0);
        else {
          let { containerRect: n, contentRect: d } = this,
            u = me(s * i, je),
            h = me(o * i, je),
            { innerWidth: p, innerHeight: f } = n;
          if (
            (n.width === u && (p = n.width),
            n.width === h && (f = n.height),
            e > p)
          ) {
            (l = 0.5 * (e - p)), (r = -1 * l);
            let t = 0.5 * (d.right - d.left);
            (r += t), (l += t);
          }
          if (
            (s > p && e < p && ((r -= 0.5 * (s - p)), (l -= 0.5 * (s - p))),
            t > f)
          ) {
            (c = 0.5 * (t - f)), (a = -1 * c);
            let e = 0.5 * (d.bottom - d.top);
            (a += e), (c += e);
          }
          o > f && t < f && ((r -= 0.5 * (o - f)), (l -= 0.5 * (o - f)));
        }
        return { x: { min: r, max: l }, y: { min: a, max: c } };
      }
      getBounds() {
        const e = this.option("bounds");
        return e !== We ? e : this.calculateBounds();
      }
      updateControls() {
        const e = this,
          t = e.container,
          { panMode: i, contentRect: n, targetScale: s, minScale: o } = e;
        let r = o,
          a = e.option("click") || !1;
        a && (r = e.getNextScale(a));
        let l = e.canZoomIn(),
          c = e.canZoomOut(),
          d = i === qe && !!this.option("touch"),
          u = c && d;
        if (
          (d &&
            (me(s) < me(o) && !this.panOnlyZoomed && (u = !0),
            (me(n.width, 1) > me(n.fitWidth, 1) ||
              me(n.height, 1) > me(n.fitHeight, 1)) &&
              (u = !0)),
          me(n.width * s, 1) < me(n.fitWidth, 1) && (u = !1),
          i === He && (u = !1),
          we(t, this.cn("isDraggable"), u),
          !this.option("zoom"))
        )
          return;
        let h = l && me(r) > me(s),
          p = !h && !u && c && me(r) < me(s);
        we(t, this.cn("canZoomIn"), h), we(t, this.cn("canZoomOut"), p);
        for (const e of t.querySelectorAll("[data-panzoom-action]")) {
          let t = !1,
            i = !1;
          switch (e.dataset.panzoomAction) {
            case "zoomIn":
              l ? (t = !0) : (i = !0);
              break;
            case "zoomOut":
              c ? (t = !0) : (i = !0);
              break;
            case "toggleZoom":
            case "iterateZoom":
              l || c ? (t = !0) : (i = !0);
              const n = e.querySelector("g");
              n && (n.style.display = l ? "" : "none");
          }
          t
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : i &&
              (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
        }
      }
      panTo({
        x: e = this.target.e,
        y: t = this.target.f,
        scale: i = this.targetScale,
        friction: n = this.option("friction"),
        angle: s = 0,
        originX: o = 0,
        originY: r = 0,
        flipX: a = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
      }) {
        this.state !== Ae.Destroy &&
          this.applyChange({
            panX: e - this.target.e,
            panY: t - this.target.f,
            scale: i / this.targetScale,
            angle: s,
            originX: o,
            originY: r,
            friction: n,
            flipX: a,
            flipY: l,
            ignoreBounds: c,
          });
      }
      applyChange({
        panX: e = 0,
        panY: t = 0,
        scale: i = 1,
        angle: n = 0,
        originX: s = -this.current.e,
        originY: o = -this.current.f,
        friction: r = this.option("friction"),
        flipX: a = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
        bounce: d = this.option("bounce"),
      }) {
        const u = this.state;
        if (u === Ae.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.friction = r || 0),
          (this.ignoreBounds = c);
        const { current: h } = this,
          p = h.e,
          f = h.f,
          m = this.getMatrix(this.target);
        let g = new DOMMatrix().translate(p, f).translate(s, o).translate(e, t);
        if (this.option("zoom")) {
          if (!c) {
            const e = this.targetScale,
              t = this.minScale,
              n = this.maxScale;
            e * i < t && (i = t / e), e * i > n && (i = n / e);
          }
          g = g.scale(i);
        }
        (g = g.translate(-s, -o).translate(-p, -f).multiply(m)),
          n && (g = g.rotate(n)),
          a && (g = g.scale(-1, 1)),
          l && (g = g.scale(1, -1));
        for (const e of _e)
          "e" !== e &&
          "f" !== e &&
          (g[e] > this.minScale + 1e-5 || g[e] < this.minScale - 1e-5)
            ? (this.target[e] = g[e])
            : (this.target[e] = me(g[e], je));
        (this.targetScale < this.scale ||
          Math.abs(i - 1) > 0.1 ||
          this.panMode === He ||
          !1 === d) &&
          !c &&
          this.clampTargetBounds(),
          u === Ae.Init
            ? this.animate()
            : this.isResting || ((this.state = Ae.Panning), this.requestTick());
      }
      stop(e = !1) {
        if (this.state === Ae.Init || this.state === Ae.Destroy) return;
        const t = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const t of _e)
          (this.velocity[t] = 0),
            "current" === e
              ? (this.current[t] = this.target[t])
              : "target" === e && (this.target[t] = this.current[t]);
        this.setTransform(),
          Ne(this.container, "is-scaling"),
          Ne(this.container, "is-animating"),
          (this.isTicking = !1),
          (this.state = Ae.Ready),
          t && (this.emit("endAnimation"), this.updateControls());
      }
      requestTick() {
        this.isTicking ||
          (this.emit("startAnimation"),
          this.updateControls(),
          Fe(this.container, "is-animating"),
          this.isScaling && Fe(this.container, "is-scaling")),
          (this.isTicking = !0),
          this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
      }
      panWithMouse(e, t = this.option("mouseMoveFriction")) {
        if (((this.pmme = e), this.panMode !== He || !e)) return;
        if (me(this.targetScale) <= me(this.minScale)) return;
        this.emit("mouseMove", e);
        const { container: i, containerRect: n, contentRect: s } = this,
          o = n.width,
          r = n.height,
          a = i.getBoundingClientRect(),
          l = (e.clientX || 0) - a.left,
          c = (e.clientY || 0) - a.top;
        let { contentWidth: d, contentHeight: u } = this.calculateContentDim(
          this.target
        );
        const h = this.option("mouseMoveFactor");
        h > 1 && (d !== o && (d *= h), u !== r && (u *= h));
        let p = 0.5 * (d - o) - (((l / o) * 100) / 100) * (d - o);
        p += 0.5 * (s.right - s.left);
        let f = 0.5 * (u - r) - (((c / r) * 100) / 100) * (u - r);
        (f += 0.5 * (s.bottom - s.top)),
          this.applyChange({
            panX: p - this.target.e,
            panY: f - this.target.f,
            friction: t,
          });
      }
      zoomWithWheel(e) {
        if (this.state === Ae.Destroy || this.state === Ae.Init) return;
        const t = Date.now();
        if (t - this.pwt < 45) return void e.preventDefault();
        this.pwt = t;
        var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const n = Math.max(-1, Math.min(1, i)),
          { targetScale: s, maxScale: o, minScale: r } = this;
        let a = (s * (100 + 45 * n)) / 100;
        me(a) < me(r) && me(s) <= me(r)
          ? ((this.cwd += Math.abs(n)), (a = r))
          : me(a) > me(o) && me(s) >= me(o)
          ? ((this.cwd += Math.abs(n)), (a = o))
          : ((this.cwd = 0), (a = Math.max(Math.min(a, o), r))),
          this.cwd > this.option("wheelLimit") ||
            (e.preventDefault(),
            me(a) !== me(s) && this.zoomTo(a, { event: e }));
      }
      canZoomIn() {
        return (
          this.option("zoom") &&
          (me(this.contentRect.width, 1) < me(this.contentRect.fitWidth, 1) ||
            me(this.targetScale) < me(this.maxScale))
        );
      }
      canZoomOut() {
        return this.option("zoom") && me(this.targetScale) > me(this.minScale);
      }
      zoomIn(e = 1.25, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomOut(e = 0.8, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomToFit(e) {
        this.zoomTo("fit", e);
      }
      zoomToCover(e) {
        this.zoomTo("cover", e);
      }
      zoomToFull(e) {
        this.zoomTo("full", e);
      }
      zoomToMax(e) {
        this.zoomTo("max", e);
      }
      toggleZoom(e) {
        this.zoomTo(this.getNextScale("toggleZoom"), e);
      }
      toggleMax(e) {
        this.zoomTo(this.getNextScale("toggleMax"), e);
      }
      toggleCover(e) {
        this.zoomTo(this.getNextScale("toggleCover"), e);
      }
      iterateZoom(e) {
        this.zoomTo("next", e);
      }
      zoomTo(
        e = 1,
        { friction: t = We, originX: i = We, originY: n = We, event: s } = {}
      ) {
        if (this.isContentLoading || this.state === Ae.Destroy) return;
        const {
          targetScale: o,
          fullScale: r,
          maxScale: a,
          coverScale: l,
        } = this;
        if (
          (this.stop(),
          this.panMode === He && (s = this.pmme || s),
          s || i === We || n === We)
        ) {
          const e = this.content.getBoundingClientRect(),
            t = this.container.getBoundingClientRect(),
            o = s ? s.clientX : t.left + 0.5 * t.width,
            r = s ? s.clientY : t.top + 0.5 * t.height;
          (i = o - e.left - 0.5 * e.width), (n = r - e.top - 0.5 * e.height);
        }
        let c = 1;
        "number" == typeof e
          ? (c = e)
          : "full" === e
          ? (c = r)
          : "cover" === e
          ? (c = l)
          : "max" === e
          ? (c = a)
          : "fit" === e
          ? (c = 1)
          : "next" === e && (c = this.getNextScale("iterateZoom")),
          (c = c / o || 1),
          (t = t === We ? (c > 1 ? 0.15 : 0.25) : t),
          this.applyChange({ scale: c, originX: i, originY: n, friction: t }),
          s && this.panMode === He && this.panWithMouse(s, t);
      }
      rotateCCW() {
        this.applyChange({ angle: -90 });
      }
      rotateCW() {
        this.applyChange({ angle: 90 });
      }
      flipX() {
        this.applyChange({ flipX: !0 });
      }
      flipY() {
        this.applyChange({ flipY: !0 });
      }
      fitX() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.width / t.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      fitY() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.height / t.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      toggleFS() {
        const { container: e } = this,
          t = this.cn("inFullscreen"),
          i = this.cn("htmlHasFullscreen");
        e.classList.toggle(t);
        const n = e.classList.contains(t);
        n
          ? (document.documentElement.classList.add(i),
            document.addEventListener("keydown", this.onKeydown, !0))
          : (document.documentElement.classList.remove(i),
            document.removeEventListener("keydown", this.onKeydown, !0)),
          this.updateMetrics(),
          this.emit(n ? "enterFS" : "exitFS");
      }
      getMatrix(e = this.current) {
        const { a: t, b: i, c: n, d: s, e: o, f: r } = e;
        return new DOMMatrix([t, i, n, s, o, r]);
      }
      reset(e) {
        if (this.state !== Ae.Init && this.state !== Ae.Destroy) {
          this.stop("current");
          for (const e of _e) this.target[e] = Be[e];
          (this.target.a = this.minScale),
            (this.target.d = this.minScale),
            this.clampTargetBounds(),
            this.isResting ||
              ((this.friction = void 0 === e ? this.option("friction") : e),
              (this.state = Ae.Panning),
              this.requestTick());
        }
      }
      destroy() {
        this.stop(),
          (this.state = Ae.Destroy),
          this.detachEvents(),
          this.detachObserver();
        const { container: e, content: t } = this,
          i = this.option("classes") || {};
        for (const t of Object.values(i)) e.classList.remove(t + "");
        t &&
          (t.removeEventListener("load", this.onLoad),
          t.removeEventListener("error", this.onError)),
          this.detachPlugins();
      }
    }
    Object.defineProperty(Ye, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ie,
    }),
      Object.defineProperty(Ye, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    const Ue = function (e, t) {
        let i = !0;
        return (...n) => {
          i &&
            ((i = !1),
            e(...n),
            setTimeout(() => {
              i = !0;
            }, t));
        };
      },
      Ze = (e, t) => {
        let i = [];
        return (
          e.childNodes.forEach((e) => {
            e.nodeType !== Node.ELEMENT_NODE ||
              (t && !e.matches(t)) ||
              i.push(e);
          }),
          i
        );
      };
    var Ke;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Destroy = 2)] = "Destroy");
    })(Ke || (Ke = {}));
    const Je = (e) => {
        if ("string" == typeof e || e instanceof HTMLElement) e = { html: e };
        else {
          const t = e.thumb;
          void 0 !== t &&
            ("string" == typeof t && (e.thumbSrc = t),
            t instanceof HTMLImageElement &&
              ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
            delete e.thumb);
        }
        return Object.assign(
          {
            html: "",
            el: null,
            isDom: !1,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: !1,
          },
          e
        );
      },
      Qe = (e = {}) =>
        Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e);
    class et extends Le {
      constructor(e, t) {
        super(t),
          Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
      }
      attach() {}
      detach() {}
    }
    class tt extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onRefresh() {
        this.refresh();
      }
      build() {
        let e = this.list;
        if (!e) {
          (e = document.createElement("ul")),
            Fe(e, this.cn("list")),
            e.setAttribute("role", "tablist");
          const t = this.instance.container;
          t.appendChild(e), Fe(t, this.cn("hasDots")), (this.list = e);
        }
        return e;
      }
      refresh() {
        var e;
        const t = this.instance.pages.length,
          i = Math.min(2, this.option("minCount")),
          n = Math.max(2e3, this.option("maxCount")),
          s = this.option("dynamicFrom");
        if (t < i || t > n) return void this.cleanup();
        const o = "number" == typeof s && t > 5 && t >= s,
          r =
            !this.list ||
            this.isDynamic !== o ||
            this.list.children.length !== t;
        r && this.cleanup();
        const a = this.build();
        if ((we(a, this.cn("isDynamic"), !!o), r))
          for (let e = 0; e < t; e++) a.append(this.createItem(e));
        let l,
          c = 0;
        for (const t of [...a.children]) {
          const i = c === this.instance.page;
          i && (l = t),
            we(t, this.cn("isCurrent"), i),
            null === (e = t.children[0]) ||
              void 0 === e ||
              e.setAttribute("aria-selected", i ? "true" : "false");
          for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
            Ne(t, this.cn(e));
          c++;
        }
        if (((l = l || a.firstChild), o && l)) {
          const e = l.previousElementSibling,
            t = e && e.previousElementSibling;
          Fe(e, this.cn("isPrev")), Fe(t, this.cn("isBeforePrev"));
          const i = l.nextElementSibling,
            n = i && i.nextElementSibling;
          Fe(i, this.cn("isNext")), Fe(n, this.cn("isAfterNext"));
        }
        this.isDynamic = o;
      }
      createItem(e = 0) {
        var t;
        const i = document.createElement("li");
        i.setAttribute("role", "presentation");
        const n = be(
          this.instance
            .localize(this.option("dotTpl"), [["%d", e + 1]])
            .replace(/\%i/g, e + "")
        );
        return (
          i.appendChild(n),
          null === (t = i.children[0]) ||
            void 0 === t ||
            t.setAttribute("role", "tab"),
          i
        );
      }
      cleanup() {
        this.list && (this.list.remove(), (this.list = null)),
          (this.isDynamic = !1),
          Ne(this.instance.container, this.cn("hasDots"));
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(tt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          list: "f-carousel__dots",
          isDynamic: "is-dynamic",
          hasDots: "has-dots",
          dot: "f-carousel__dot",
          isBeforePrev: "is-before-prev",
          isPrev: "is-prev",
          isCurrent: "is-current",
          isNext: "is-next",
          isAfterNext: "is-after-next",
        },
        dotTpl:
          '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
        dynamicFrom: 11,
        maxCount: 1 / 0,
        minCount: 2,
      },
    });
    const it = "disabled",
      nt = "next",
      st = "prev";
    class ot extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      onRefresh() {
        const e = this.instance,
          t = e.pages.length,
          i = e.page;
        if (t < 2) return void this.cleanup();
        this.build();
        let n = this.prev,
          s = this.next;
        n &&
          s &&
          (n.removeAttribute(it),
          s.removeAttribute(it),
          e.isInfinite ||
            (i <= 0 && n.setAttribute(it, ""),
            i >= t - 1 && s.setAttribute(it, "")));
      }
      addBtn(e) {
        var t;
        const i = this.instance,
          n = document.createElement("button");
        n.setAttribute("tabindex", "0"),
          n.setAttribute("title", i.localize(`{{${e.toUpperCase()}}}`)),
          Fe(
            n,
            this.cn("button") + " " + this.cn(e === nt ? "isNext" : "isPrev")
          );
        const s = i.isRTL ? (e === nt ? st : nt) : e;
        var o;
        return (
          (n.innerHTML = i.localize(this.option(`${s}Tpl`))),
          (n.dataset[
            `carousel${
              ((o = e),
              o
                ? o.match("^[a-z]")
                  ? o.charAt(0).toUpperCase() + o.substring(1)
                  : o
                : "")
            }`
          ] = "true"),
          null === (t = this.container) || void 0 === t || t.appendChild(n),
          n
        );
      }
      build() {
        const e = this.instance.container,
          t = this.cn("container");
        let { container: i, prev: n, next: s } = this;
        i || ((i = e.querySelector("." + t)), (this.isDom = !!i)),
          i ||
            ((i = document.createElement("div")), Fe(i, t), e.appendChild(i)),
          (this.container = i),
          s || (s = i.querySelector("[data-carousel-next]")),
          s || (s = this.addBtn(nt)),
          (this.next = s),
          n || (n = i.querySelector("[data-carousel-prev]")),
          n || (n = this.addBtn(st)),
          (this.prev = n);
      }
      cleanup() {
        this.isDom ||
          (this.prev && this.prev.remove(),
          this.next && this.next.remove(),
          this.container && this.container.remove()),
          (this.prev = null),
          (this.next = null),
          (this.container = null),
          (this.isDom = !1);
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(ot, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          container: "f-carousel__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
      },
    });
    class rt extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      addAsTargetFor(e) {
        (this.target = this.instance), (this.nav = e), this.attachEvents();
      }
      addAsNavFor(e) {
        (this.nav = this.instance), (this.target = e), this.attachEvents();
      }
      attachEvents() {
        const { nav: e, target: t } = this;
        e &&
          t &&
          ((e.options.initialSlide = t.options.initialPage),
          e.state === Ke.Ready
            ? this.onNavReady(e)
            : e.on("ready", this.onNavReady),
          t.state === Ke.Ready
            ? this.onTargetReady(t)
            : t.on("ready", this.onTargetReady));
      }
      onNavReady(e) {
        e.on("createSlide", this.onNavCreateSlide),
          e.on("Panzoom.click", this.onNavClick),
          e.on("Panzoom.touchEnd", this.onNavTouch),
          this.onTargetChange();
      }
      onTargetReady(e) {
        e.on("change", this.onTargetChange),
          e.on("Panzoom.refresh", this.onTargetChange),
          this.onTargetChange();
      }
      onNavClick(e, t, i) {
        this.onNavTouch(e, e.panzoom, i);
      }
      onNavTouch(e, t, i) {
        var n, s;
        if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
          return;
        const o = i.target,
          { nav: r, target: a } = this;
        if (!r || !a || !o) return;
        const l = o.closest("[data-index]");
        if ((i.stopPropagation(), i.preventDefault(), !l)) return;
        const c = parseInt(l.dataset.index || "", 10) || 0,
          d = a.getPageForSlide(c),
          u = r.getPageForSlide(c);
        r.slideTo(u),
          a.slideTo(d, {
            friction:
              (null ===
                (s =
                  null === (n = this.nav) || void 0 === n
                    ? void 0
                    : n.plugins) || void 0 === s
                ? void 0
                : s.Sync.option("friction")) || 0,
          }),
          this.markSelectedSlide(c);
      }
      onNavCreateSlide(e, t) {
        t.index === this.selectedIndex && this.markSelectedSlide(t.index);
      }
      onTargetChange() {
        var e, t;
        const { target: i, nav: n } = this;
        if (!i || !n) return;
        if (n.state !== Ke.Ready || i.state !== Ke.Ready) return;
        const s =
            null ===
              (t =
                null === (e = i.pages[i.page]) || void 0 === e
                  ? void 0
                  : e.slides[0]) || void 0 === t
              ? void 0
              : t.index,
          o = n.getPageForSlide(s);
        this.markSelectedSlide(s),
          n.slideTo(
            o,
            null === n.prevPage && null === i.prevPage
              ? { friction: 0 }
              : void 0
          );
      }
      markSelectedSlide(e) {
        const t = this.nav;
        t &&
          t.state === Ke.Ready &&
          ((this.selectedIndex = e),
          [...t.slides].map((t) => {
            t.el &&
              t.el.classList[t.index === e ? "add" : "remove"](
                "is-nav-selected"
              );
          }));
      }
      attach() {
        const e = this;
        let t = e.options.target,
          i = e.options.nav;
        t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i);
      }
      detach() {
        const e = this,
          t = e.nav,
          i = e.target;
        t &&
          (t.off("ready", e.onNavReady),
          t.off("createSlide", e.onNavCreateSlide),
          t.off("Panzoom.click", e.onNavClick),
          t.off("Panzoom.touchEnd", e.onNavTouch)),
          (e.nav = null),
          i &&
            (i.off("ready", e.onTargetReady),
            i.off("refresh", e.onTargetChange),
            i.off("change", e.onTargetChange)),
          (e.target = null);
      }
    }
    Object.defineProperty(rt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: { friction: 0.35 },
    });
    const at = { Navigation: ot, Dots: tt, Sync: rt },
      lt = "animationend",
      ct = "isSelected",
      dt = "slide";
    class ut extends ke {
      get axis() {
        return this.isHorizontal ? "e" : "f";
      }
      get isEnabled() {
        return this.state === Ke.Ready;
      }
      get isInfinite() {
        let e = !1;
        const { contentDim: t, viewportDim: i, pages: n, slides: s } = this,
          o = s[0];
        return (
          n.length >= 2 && o && t + o.dim >= i && (e = this.option("infinite")),
          e
        );
      }
      get isRTL() {
        return "rtl" === this.option("direction");
      }
      get isHorizontal() {
        return "x" === this.option("axis");
      }
      constructor(e, t = {}, i = {}) {
        if (
          (super(),
          Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "",
          }),
          Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ke.Init,
          }),
          Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set(),
          }),
          Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          "string" == typeof e && (e = document.querySelector(e)),
          !e || !Re(e))
        )
          throw new Error("No Element found");
        (this.container = e),
          (this.slideNext = Ue(this.slideNext.bind(this), 150)),
          (this.slidePrev = Ue(this.slidePrev.bind(this), 150)),
          (this.userOptions = t),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.processOptions();
          });
      }
      processOptions() {
        var e, t;
        const i = Me({}, ut.defaults, this.userOptions);
        let n = "";
        const s = i.breakpoints;
        if (s && Pe(s))
          for (const [e, t] of Object.entries(s))
            window.matchMedia(e).matches && Pe(t) && ((n += e), Me(i, t));
        (n === this.bp && this.state !== Ke.Init) ||
          ((this.bp = n),
          this.state === Ke.Ready &&
            (i.initialSlide =
              (null ===
                (t =
                  null === (e = this.pages[this.page]) || void 0 === e
                    ? void 0
                    : e.slides[0]) || void 0 === t
                ? void 0
                : t.index) || 0),
          this.state !== Ke.Init && this.destroy(),
          super.setOptions(i),
          !1 === this.option("enabled")
            ? this.attachEvents()
            : setTimeout(() => {
                this.init();
              }, 0));
      }
      init() {
        (this.state = Ke.Init),
          this.emit("init"),
          this.attachPlugins(
            Object.assign(Object.assign({}, ut.Plugins), this.userPlugins)
          ),
          this.emit("attachPlugins"),
          this.initLayout(),
          this.initSlides(),
          this.updateMetrics(),
          this.setInitialPosition(),
          this.initPanzoom(),
          this.attachEvents(),
          (this.state = Ke.Ready),
          this.emit("ready");
      }
      initLayout() {
        const { container: e } = this,
          t = this.option("classes");
        Fe(e, this.cn("container")),
          we(e, t.isLTR, !this.isRTL),
          we(e, t.isRTL, this.isRTL),
          we(e, t.isVertical, !this.isHorizontal),
          we(e, t.isHorizontal, this.isHorizontal);
        let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
        i ||
          ((i = document.createElement("div")),
          Fe(i, t.viewport),
          i.append(...Ze(e, `.${t.slide}`)),
          e.prepend(i)),
          i.addEventListener("scroll", this.onScroll);
        let n = this.option("track") || e.querySelector(`.${t.track}`);
        n ||
          ((n = document.createElement("div")),
          Fe(n, t.track),
          n.append(...Array.from(i.childNodes))),
          n.setAttribute("aria-live", "polite"),
          i.contains(n) || i.prepend(n),
          (this.viewport = i),
          (this.track = n),
          this.emit("initLayout");
      }
      initSlides() {
        const { track: e } = this;
        if (!e) return;
        const t = [...this.slides],
          i = [];
        [...Ze(e, `.${this.cn(dt)}`)].forEach((e) => {
          if (Re(e)) {
            const t = Je({ el: e, isDom: !0, index: this.slides.length });
            i.push(t);
          }
        });
        for (let e of [...(this.option("slides", []) || []), ...t])
          i.push(Je(e));
        this.slides = i;
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of i)
          this.emit("beforeInitSlide", e, e.index),
            this.emit("initSlide", e, e.index);
        this.emit("initSlides");
      }
      setInitialPage() {
        const e = this.option("initialSlide");
        this.page =
          "number" == typeof e
            ? this.getPageForSlide(e)
            : parseInt(this.option("initialPage", 0) + "", 10) || 0;
      }
      setInitialPosition() {
        const { track: e, pages: t, isHorizontal: i } = this;
        if (!e || !t.length) return;
        let n = this.page;
        t[n] || (this.page = n = 0);
        const s = (t[n].pos || 0) * (this.isRTL && i ? 1 : -1),
          o = i ? `${s}px` : "0",
          r = i ? "0" : `${s}px`;
        (e.style.transform = `translate3d(${o}, ${r}, 0) scale(1)`),
          this.option("adaptiveHeight") && this.setViewportHeight();
      }
      initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
        const e = this.option("Panzoom") || {};
        (this.panzoom = new Ye(
          this.viewport,
          Me(
            {},
            {
              content: this.track,
              zoom: !1,
              panOnlyZoomed: !1,
              lockAxis: this.isHorizontal ? "x" : "y",
              infinite: this.isInfinite,
              click: !1,
              dblClick: !1,
              touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
              bounds: () => this.getBounds(),
              maxVelocity: (e) =>
                Math.abs(e.target[this.axis] - e.current[this.axis]) <
                2 * this.viewportDim
                  ? 100
                  : 0,
            },
            e
          )
        )),
          this.panzoom.on("*", (e, t, ...i) => {
            this.emit(`Panzoom.${t}`, e, ...i);
          }),
          this.panzoom.on("decel", this.onDecel),
          this.panzoom.on("refresh", this.onRefresh),
          this.panzoom.on("beforeTransform", this.onBeforeTransform),
          this.panzoom.on("endAnimation", this.onEndAnimation);
      }
      attachEvents() {
        const e = this.container;
        e &&
          (e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
          e.addEventListener("slideTo", this.onSlideTo)),
          window.addEventListener("resize", this.onResize);
      }
      createPages() {
        let e = [];
        const { contentDim: t, viewportDim: i } = this;
        let n = this.option("slidesPerPage");
        n =
          ("auto" === n || t <= i) && !1 !== this.option("fill")
            ? 1 / 0
            : parseFloat(n + "");
        let s = 0,
          o = 0,
          r = 0;
        for (const t of this.slides)
          (!e.length || o + t.dim - i > 0.05 || r >= n) &&
            (e.push(Qe()), (s = e.length - 1), (o = 0), (r = 0)),
            e[s].slides.push(t),
            (o += t.dim + t.gap),
            r++;
        return e;
      }
      processPages() {
        const e = this.pages,
          { contentDim: t, viewportDim: i, isInfinite: n } = this,
          s = this.option("center"),
          o = this.option("fill"),
          r = o && s && t > i && !n;
        if (
          (e.forEach((e, n) => {
            var o;
            (e.index = n),
              (e.pos =
                (null === (o = e.slides[0]) || void 0 === o ? void 0 : o.pos) ||
                0),
              (e.dim = 0);
            for (const [t, i] of e.slides.entries())
              (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
            r && e.pos + 0.5 * e.dim < 0.5 * i
              ? (e.pos = 0)
              : r && e.pos + 0.5 * e.dim >= t - 0.5 * i
              ? (e.pos = t - i)
              : s && (e.pos += -0.5 * (i - e.dim));
          }),
          e.forEach((e) => {
            o &&
              !n &&
              t > i &&
              ((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, t - i))),
              (e.pos = me(e.pos, 1e3)),
              (e.dim = me(e.dim, 1e3)),
              Math.abs(e.pos) <= 0.1 && (e.pos = 0);
          }),
          n)
        )
          return e;
        const a = [];
        let l;
        return (
          e.forEach((e) => {
            const t = Object.assign({}, e);
            l && t.pos === l.pos
              ? ((l.dim += t.dim), (l.slides = [...l.slides, ...t.slides]))
              : ((t.index = a.length), (l = t), a.push(t));
          }),
          a
        );
      }
      getPageFromIndex(e = 0) {
        const t = this.pages.length;
        let i;
        return (
          (e = parseInt((e || 0).toString()) || 0),
          (i = this.isInfinite
            ? ((e % t) + t) % t
            : Math.max(Math.min(e, t - 1), 0)),
          i
        );
      }
      getSlideMetrics(e) {
        var t, i;
        const n = this.isHorizontal ? "width" : "height";
        let s = 0,
          o = 0,
          r = e.el;
        const a = !(!r || r.parentNode);
        if (
          (r
            ? (s = parseFloat(r.dataset[n] || "") || 0)
            : ((r = document.createElement("div")),
              (r.style.visibility = "hidden"),
              (this.track || document.body).prepend(r)),
          Fe(r, this.cn(dt) + " " + e.class + " " + e.customClass),
          s)
        )
          (r.style[n] = `${s}px`),
            (r.style["width" === n ? "height" : "width"] = "");
        else {
          a && (this.track || document.body).prepend(r),
            (s =
              r.getBoundingClientRect()[n] *
              Math.max(
                1,
                (null === (t = window.visualViewport) || void 0 === t
                  ? void 0
                  : t.scale) || 1
              ));
          let e = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
          e - 1 > s && (s = e);
        }
        const l = getComputedStyle(r);
        return (
          "content-box" === l.boxSizing &&
            (this.isHorizontal
              ? ((s += parseFloat(l.paddingLeft) || 0),
                (s += parseFloat(l.paddingRight) || 0))
              : ((s += parseFloat(l.paddingTop) || 0),
                (s += parseFloat(l.paddingBottom) || 0))),
          (o =
            parseFloat(l[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
            0),
          a
            ? null === (i = r.parentElement) || void 0 === i || i.removeChild(r)
            : e.el || r.remove(),
          { dim: me(s, 1e3), gap: me(o, 1e3) }
        );
      }
      getBounds() {
        const { isInfinite: e, isRTL: t, isHorizontal: i, pages: n } = this;
        let s = { min: 0, max: 0 };
        if (e) s = { min: -1 / 0, max: 1 / 0 };
        else if (n.length) {
          const e = n[0].pos,
            o = n[n.length - 1].pos;
          s = t && i ? { min: e, max: o } : { min: -1 * o, max: -1 * e };
        }
        return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
      }
      repositionSlides() {
        let e,
          {
            isHorizontal: t,
            isRTL: i,
            isInfinite: n,
            viewport: s,
            viewportDim: o,
            contentDim: r,
            page: a,
            pages: l,
            slides: c,
            panzoom: d,
          } = this,
          u = 0,
          h = 0,
          p = 0,
          f = 0;
        d ? (f = -1 * d.current[this.axis]) : l[a] && (f = l[a].pos || 0),
          (e = t ? (i ? "right" : "left") : "top"),
          i && t && (f *= -1);
        for (const t of c) {
          const i = t.el;
          i
            ? ("top" === e
                ? ((i.style.right = ""), (i.style.left = ""))
                : (i.style.top = ""),
              t.index !== u
                ? (i.style[e] = 0 === h ? "" : `${me(h, 1e3)}px`)
                : (i.style[e] = ""),
              (p += t.dim + t.gap),
              u++)
            : (h += t.dim + t.gap);
        }
        if (n && p && s) {
          let i = getComputedStyle(s),
            n = "padding",
            a = t ? "Right" : "Bottom",
            l = parseFloat(i[n + (t ? "Left" : "Top")]);
          (f -= l), (o += l), (o += parseFloat(i[n + a]));
          for (const t of c)
            t.el &&
              (me(t.pos) < me(o) &&
                me(t.pos + t.dim + t.gap) < me(f) &&
                me(f) > me(r - o) &&
                (t.el.style[e] = `${me(h + p, 1e3)}px`),
              me(t.pos + t.gap) >= me(r - o) &&
                me(t.pos) > me(f + o) &&
                me(f) < me(o) &&
                (t.el.style[e] = `-${me(p, 1e3)}px`));
        }
        let m,
          g,
          v = [...this.inTransition];
        if ((v.length > 1 && ((m = l[v[0]]), (g = l[v[1]])), m && g)) {
          let t = 0;
          for (const i of c)
            i.el
              ? this.inTransition.has(i.index) &&
                m.slides.indexOf(i) < 0 &&
                (i.el.style[e] = `${me(t + (m.pos - g.pos), 1e3)}px`)
              : (t += i.dim + i.gap);
        }
      }
      createSlideEl(e) {
        const { track: t, slides: i } = this;
        if (!t || !e) return;
        if (e.el && e.el.parentNode) return;
        const n = e.el || document.createElement("div");
        Fe(n, this.cn(dt)), Fe(n, e.class), Fe(n, e.customClass);
        const s = e.html;
        s &&
          (s instanceof HTMLElement
            ? n.appendChild(s)
            : (n.innerHTML = e.html + ""));
        const o = [];
        i.forEach((e, t) => {
          e.el && o.push(t);
        });
        const r = e.index;
        let a = null;
        o.length &&
          (a =
            i[o.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e))]);
        const l =
          a && a.el && a.el.parentNode
            ? a.index < e.index
              ? a.el.nextSibling
              : a.el
            : null;
        t.insertBefore(n, t.contains(l) ? l : null),
          (e.el = n),
          this.emit("createSlide", e);
      }
      removeSlideEl(e, t = !1) {
        const i = null == e ? void 0 : e.el;
        if (!i || !i.parentNode) return;
        const n = this.cn(ct);
        if (
          (i.classList.contains(n) && (Ne(i, n), this.emit("unselectSlide", e)),
          e.isDom && !t)
        )
          return (
            i.removeAttribute("aria-hidden"),
            i.removeAttribute("data-index"),
            void (i.style.left = "")
          );
        this.emit("removeSlide", e);
        const s = new CustomEvent(lt);
        i.dispatchEvent(s), e.el && (e.el.remove(), (e.el = null));
      }
      transitionTo(e = 0, t = this.option("transition")) {
        var i, n, s, o;
        if (!t) return !1;
        const r = this.page,
          { pages: a, panzoom: l } = this;
        e = parseInt((e || 0).toString()) || 0;
        const c = this.getPageFromIndex(e);
        if (
          !l ||
          !a[c] ||
          a.length < 2 ||
          Math.abs(
            ((null ===
              (n =
                null === (i = a[r]) || void 0 === i ? void 0 : i.slides[0]) ||
            void 0 === n
              ? void 0
              : n.dim) || 0) - this.viewportDim
          ) > 1
        )
          return !1;
        let d = e > r ? 1 : -1;
        this.isInfinite &&
          (0 === r && e === a.length - 1 && (d = -1),
          r === a.length - 1 && 0 === e && (d = 1));
        const u = a[c].pos * (this.isRTL ? 1 : -1);
        if (r === c && Math.abs(u - l.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        const h = l.isResting;
        Fe(this.container, this.cn("inTransition"));
        const p =
            (null === (s = a[r]) || void 0 === s ? void 0 : s.slides[0]) ||
            null,
          f =
            (null === (o = a[c]) || void 0 === o ? void 0 : o.slides[0]) ||
            null;
        this.inTransition.add(f.index), this.createSlideEl(f);
        let m = p.el,
          g = f.el;
        h || t === dt || ((t = "fadeFast"), (m = null));
        const v = this.isRTL ? "next" : "prev",
          b = this.isRTL ? "prev" : "next";
        return (
          m &&
            (this.inTransition.add(p.index),
            (p.transition = t),
            m.addEventListener(lt, this.onAnimationEnd),
            m.classList.add(`f-${t}Out`, `to-${d > 0 ? b : v}`)),
          g &&
            ((f.transition = t),
            g.addEventListener(lt, this.onAnimationEnd),
            g.classList.add(`f-${t}In`, `from-${d > 0 ? v : b}`)),
          (l.current[this.axis] = u),
          (l.target[this.axis] = u),
          l.requestTick(),
          this.onChange(c),
          !0
        );
      }
      manageSlideVisiblity() {
        const e = new Set(),
          t = new Set(),
          i = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
        for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n);
        for (const t of this.inTransition) e.add(this.slides[t]);
        for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
        for (const i of t) e.has(i) || this.removeSlideEl(i);
        this.markSelectedSlides(), this.repositionSlides();
      }
      markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const e = "aria-hidden";
        let t = this.cn(ct);
        if (t)
          for (const i of this.slides) {
            const n = i.el;
            n &&
              ((n.dataset.index = `${i.index}`),
              n.classList.contains("f-thumbs__slide")
                ? this.getVisibleSlides(0).has(i)
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, "true")
                : this.pages[this.page].slides.includes(i)
                ? (n.classList.contains(t) ||
                    (Fe(n, t), this.emit("selectSlide", i)),
                  n.removeAttribute(e))
                : (n.classList.contains(t) &&
                    (Ne(n, t), this.emit("unselectSlide", i)),
                  n.setAttribute(e, "true")));
          }
      }
      flipInfiniteTrack() {
        const {
            axis: e,
            isHorizontal: t,
            isInfinite: i,
            isRTL: n,
            viewportDim: s,
            contentDim: o,
          } = this,
          r = this.panzoom;
        if (!r || !i) return;
        let a = r.current[e],
          l = r.target[e] - a,
          c = 0,
          d = 0.5 * s;
        n && t
          ? (a < -d && ((c = -1), (a += o)), a > o - d && ((c = 1), (a -= o)))
          : (a > d && ((c = 1), (a -= o)), a < -o + d && ((c = -1), (a += o))),
          c && ((r.current[e] = a), (r.target[e] = a + l));
      }
      lazyLoadImg(e, t) {
        const i = this,
          n = "f-fadeIn",
          s = "is-preloading";
        let o = !1,
          r = null;
        const a = () => {
          o ||
            ((o = !0),
            r && (r.remove(), (r = null)),
            Ne(t, s),
            t.complete &&
              (Fe(t, n),
              setTimeout(() => {
                Ne(t, n);
              }, 350)),
            this.option("adaptiveHeight") &&
              e.el &&
              this.pages[this.page].slides.indexOf(e) > -1 &&
              (i.updateMetrics(), i.setViewportHeight()),
            this.emit("load", e));
        };
        Fe(t, s),
          (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
          delete t.dataset.lazySrc,
          delete t.dataset.lazySrcset,
          t.addEventListener("error", () => {
            a();
          }),
          t.addEventListener("load", () => {
            a();
          }),
          setTimeout(() => {
            const i = t.parentNode;
            i &&
              e.el &&
              (t.complete ? a() : o || ((r = be($e)), i.insertBefore(r, t)));
          }, 300);
      }
      lazyLoadSlide(e) {
        const t = e && e.el;
        if (!t) return;
        const i = new Set();
        let n = Array.from(
          t.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
        );
        t.dataset.lazySrc && n.push(t),
          n.map((e) => {
            e instanceof HTMLImageElement
              ? i.add(e)
              : e instanceof HTMLElement &&
                e.dataset.lazySrc &&
                ((e.style.backgroundImage = `url('${e.dataset.lazySrc}')`),
                delete e.dataset.lazySrc);
          });
        for (const t of i) this.lazyLoadImg(e, t);
      }
      onAnimationEnd(e) {
        var t;
        const i = e.target,
          n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
          s = this.slides[n],
          o = e.animationName;
        if (!i || !s || !o) return;
        const r = !!this.inTransition.has(n) && s.transition;
        r &&
          o.substring(0, r.length + 2) === `f-${r}` &&
          this.inTransition.delete(n),
          this.inTransition.size || this.clearTransitions(),
          n === this.page &&
            (null === (t = this.panzoom) || void 0 === t
              ? void 0
              : t.isResting) &&
            this.emit("settle");
      }
      onDecel(e, t = 0, i = 0, n = 0, s = 0) {
        if (this.option("dragFree")) return void this.setPageFromPosition();
        const { isRTL: o, isHorizontal: r, axis: a, pages: l } = this,
          c = l.length,
          d = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
        let u = 0;
        if (((u = d > 45 && d < 135 ? (r ? 0 : i) : r ? t : 0), !c)) return;
        let h = this.page,
          p = o && r ? 1 : -1;
        const f = e.current[a] * p;
        let { pageIndex: m } = this.getPageFromPosition(f);
        Math.abs(u) > 5
          ? (l[h].dim <
              document.documentElement[
                "client" + (this.isHorizontal ? "Width" : "Height")
              ] -
                1 && (h = m),
            (h = o && r ? (u < 0 ? h - 1 : h + 1) : u < 0 ? h + 1 : h - 1))
          : (h = 0 === n && 0 === s ? h : m),
          this.slideTo(h, {
            transition: !1,
            friction: e.option("decelFriction"),
          });
      }
      onClick(e) {
        const t = e.target,
          i = t && Re(t) ? t.dataset : null;
        let n, s;
        i &&
          (void 0 !== i.carouselPage
            ? ((s = "slideTo"), (n = i.carouselPage))
            : void 0 !== i.carouselNext
            ? (s = "slideNext")
            : void 0 !== i.carouselPrev && (s = "slidePrev")),
          s
            ? (e.preventDefault(),
              e.stopPropagation(),
              t && !t.hasAttribute("disabled") && this[s](n))
            : this.emit("click", e);
      }
      onSlideTo(e) {
        const t = e.detail || 0;
        this.slideTo(this.getPageForSlide(t), { friction: 0 });
      }
      onChange(e, t = 0) {
        const i = this.page;
        (this.prevPage = i),
          (this.page = e),
          this.option("adaptiveHeight") && this.setViewportHeight(),
          e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t));
      }
      onRefresh() {
        let e = this.contentDim,
          t = this.viewportDim;
        this.updateMetrics(),
          (this.contentDim === e && this.viewportDim === t) ||
            this.slideTo(this.page, { friction: 0, transition: !1 });
      }
      onScroll() {
        var e;
        null === (e = this.viewport) || void 0 === e || e.scroll(0, 0);
      }
      onResize() {
        this.option("breakpoints") && this.processOptions();
      }
      onBeforeTransform(e) {
        this.lp !== e.current[this.axis] &&
          (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
          (this.lp = e.current.e);
      }
      onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
      reInit(e = null, t = null) {
        this.destroy(),
          (this.state = Ke.Init),
          (this.prevPage = null),
          (this.userOptions = e || this.userOptions),
          (this.userPlugins = t || this.userPlugins),
          this.processOptions();
      }
      slideTo(
        e = 0,
        {
          friction: t = this.option("friction"),
          transition: i = this.option("transition"),
        } = {}
      ) {
        if (this.state === Ke.Destroy) return;
        e = parseInt((e || 0).toString()) || 0;
        const n = this.getPageFromIndex(e),
          { axis: s, isHorizontal: o, isRTL: r, pages: a, panzoom: l } = this,
          c = a.length,
          d = r && o ? 1 : -1;
        if (!l || !c) return;
        if (this.page !== n) {
          const t = new Event("beforeChange", { bubbles: !0, cancelable: !0 });
          if ((this.emit("beforeChange", t, e), t.defaultPrevented)) return;
        }
        if (this.transitionTo(e, i)) return;
        let u = a[n].pos;
        if (this.isInfinite) {
          const t = this.contentDim,
            i = l.target[s] * d;
          2 === c
            ? (u += t * Math.floor(parseFloat(e + "") / 2))
            : (u = [u, u - t, u + t].reduce(function (e, t) {
                return Math.abs(t - i) < Math.abs(e - i) ? t : e;
              }));
        }
        (u *= d),
          Math.abs(l.target[s] - u) < 1 ||
            (l.panTo({ x: o ? u : 0, y: o ? 0 : u, friction: t }),
            this.onChange(n));
      }
      slideToClosest(e) {
        if (this.panzoom) {
          const { pageIndex: t } = this.getPageFromPosition();
          this.slideTo(t, e);
        }
      }
      slideNext() {
        this.slideTo(this.page + 1);
      }
      slidePrev() {
        this.slideTo(this.page - 1);
      }
      clearTransitions() {
        this.inTransition.clear(), Ne(this.container, this.cn("inTransition"));
        const e = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const t of this.slides) {
          const i = t.el;
          if (i) {
            i.removeEventListener(lt, this.onAnimationEnd),
              i.classList.remove(...e);
            const n = t.transition;
            n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
          }
        }
        this.manageSlideVisiblity();
      }
      addSlide(e, t) {
        var i, n, s, o;
        const r = this.panzoom,
          a =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0,
          l =
            (null === (n = this.pages[this.page]) || void 0 === n
              ? void 0
              : n.dim) || 0,
          c = this.contentDim < this.viewportDim;
        let d = Array.isArray(t) ? t : [t];
        const u = [];
        for (const e of d) u.push(Je(e));
        this.slides.splice(e, 0, ...u);
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of u) this.emit("beforeInitSlide", e, e.index);
        if (
          (this.page >= e && (this.page += u.length), this.updateMetrics(), r)
        ) {
          const t =
              (null === (s = this.pages[this.page]) || void 0 === s
                ? void 0
                : s.pos) || 0,
            i =
              (null === (o = this.pages[this.page]) || void 0 === o
                ? void 0
                : o.dim) || 0,
            n = this.pages.length || 1,
            d = this.isRTL ? l - i : i - l,
            u = this.isRTL ? a - t : t - a;
          c && 1 === n
            ? (e <= this.page &&
                ((r.current[this.axis] -= d), (r.target[this.axis] -= d)),
              r.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * t }))
            : u &&
              e <= this.page &&
              ((r.target[this.axis] -= u),
              (r.current[this.axis] -= u),
              r.requestTick());
        }
        for (const e of u) this.emit("initSlide", e, e.index);
      }
      prependSlide(e) {
        this.addSlide(0, e);
      }
      appendSlide(e) {
        this.addSlide(this.slides.length, e);
      }
      removeSlide(e) {
        const t = this.slides.length;
        e = ((e % t) + t) % t;
        const i = this.slides[e];
        if (i) {
          this.removeSlideEl(i, !0), this.slides.splice(e, 1);
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          this.updateMetrics(),
            this.slideTo(this.page, { friction: 0, transition: !1 }),
            this.emit("destroySlide", i);
        }
      }
      updateMetrics() {
        const {
          panzoom: e,
          viewport: t,
          track: i,
          slides: n,
          isHorizontal: s,
          isInfinite: o,
        } = this;
        if (!i) return;
        const r = s ? "width" : "height",
          a = s ? "offsetWidth" : "offsetHeight";
        if (t) {
          let e = Math.max(t[a], me(t.getBoundingClientRect()[r], 1e3)),
            i = getComputedStyle(t),
            n = "padding",
            o = s ? "Right" : "Bottom";
          (e -= parseFloat(i[n + (s ? "Left" : "Top")]) + parseFloat(i[n + o])),
            (this.viewportDim = e);
        }
        let l,
          c = 0;
        for (const [e, t] of n.entries()) {
          let i = 0,
            s = 0;
          !t.el && l
            ? ((i = l.dim), (s = l.gap))
            : (({ dim: i, gap: s } = this.getSlideMetrics(t)), (l = t)),
            (i = me(i, 1e3)),
            (s = me(s, 1e3)),
            (t.dim = i),
            (t.gap = s),
            (t.pos = c),
            (c += i),
            (o || e < n.length - 1) && (c += s);
        }
        (c = me(c, 1e3)),
          (this.contentDim = c),
          e &&
            ((e.contentRect[r] = c),
            (e.contentRect[s ? "fullWidth" : "fullHeight"] = c)),
          (this.pages = this.createPages()),
          (this.pages = this.processPages()),
          this.state === Ke.Init && this.setInitialPage(),
          (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
          this.manageSlideVisiblity(),
          this.emit("refresh");
      }
      getProgress(e, t = !1, i = !1) {
        void 0 === e && (e = this.page);
        const n = this,
          s = n.panzoom,
          o = n.contentDim,
          r = n.pages[e] || 0;
        if (!r || !s) return e > this.page ? -1 : 1;
        let a = -1 * s.current.e,
          l = me((a - r.pos) / (1 * r.dim), 1e3),
          c = l,
          d = l;
        this.isInfinite &&
          !0 !== i &&
          ((c = me((a - r.pos + o) / (1 * r.dim), 1e3)),
          (d = me((a - r.pos - o) / (1 * r.dim), 1e3)));
        let u = [l, c, d].reduce(function (e, t) {
          return Math.abs(t) < Math.abs(e) ? t : e;
        });
        return t ? u : u > 1 ? 1 : u < -1 ? -1 : u;
      }
      setViewportHeight() {
        const { page: e, pages: t, viewport: i, isHorizontal: n } = this;
        if (!i || !t[e]) return;
        let s = 0;
        n &&
          this.track &&
          ((this.track.style.height = "auto"),
          t[e].slides.forEach((e) => {
            e.el && (s = Math.max(s, e.el.offsetHeight));
          })),
          (i.style.height = s ? `${s}px` : "");
      }
      getPageForSlide(e) {
        for (const t of this.pages)
          for (const i of t.slides) if (i.index === e) return t.index;
        return -1;
      }
      getVisibleSlides(e = 0) {
        var t;
        const i = new Set();
        let {
          panzoom: n,
          contentDim: s,
          viewportDim: o,
          pages: r,
          page: a,
        } = this;
        if (o) {
          s =
            s +
              (null === (t = this.slides[this.slides.length - 1]) ||
              void 0 === t
                ? void 0
                : t.gap) || 0;
          let l = 0;
          (l =
            n && n.state !== Ae.Init && n.state !== Ae.Destroy
              ? -1 * n.current[this.axis]
              : (r[a] && r[a].pos) || 0),
            this.isInfinite && (l -= Math.floor(l / s) * s),
            this.isRTL && this.isHorizontal && (l *= -1);
          const c = l - o * e,
            d = l + o * (e + 1),
            u = this.isInfinite ? [-1, 0, 1] : [0];
          for (const e of this.slides)
            for (const t of u) {
              const n = e.pos + t * s,
                o = n + e.dim + e.gap;
              n < d && o > c && i.add(e);
            }
        }
        return i;
      }
      getPageFromPosition(e) {
        const {
            viewportDim: t,
            contentDim: i,
            slides: n,
            pages: s,
            panzoom: o,
          } = this,
          r = s.length,
          a = n.length,
          l = n[0],
          c = n[a - 1],
          d = this.option("center");
        let u = 0,
          h = 0,
          p = 0,
          f =
            void 0 === e
              ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0)
              : e;
        d && (f += 0.5 * t),
          this.isInfinite
            ? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
              f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
            : (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
        let m = c,
          g = n.find((e) => {
            const t = e.pos - 0.5 * m.gap,
              i = e.pos + e.dim + 0.5 * e.gap;
            return (m = e), f >= t && f < i;
          });
        return (
          g || (g = c),
          (h = this.getPageForSlide(g.index)),
          (u = h + p * r),
          { page: u, pageIndex: h }
        );
      }
      setPageFromPosition() {
        const { pageIndex: e } = this.getPageFromPosition();
        this.onChange(e);
      }
      destroy() {
        if ([Ke.Destroy].includes(this.state)) return;
        this.state = Ke.Destroy;
        const {
            container: e,
            viewport: t,
            track: i,
            slides: n,
            panzoom: s,
          } = this,
          o = this.option("classes");
        e.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          e.removeEventListener("slideTo", this.onSlideTo),
          window.removeEventListener("resize", this.onResize),
          s && (s.destroy(), (this.panzoom = null)),
          n &&
            n.forEach((e) => {
              this.removeSlideEl(e);
            }),
          this.detachPlugins(),
          t &&
            (t.removeEventListener("scroll", this.onScroll),
            t.offsetParent &&
              i &&
              i.offsetParent &&
              t.replaceWith(...i.childNodes));
        for (const [t, i] of Object.entries(o))
          "container" !== t && i && e.classList.remove(i);
        (this.track = null),
          (this.viewport = null),
          (this.page = 0),
          (this.slides = []);
        const r = this.events.get("ready");
        (this.events = new Map()), r && this.events.set("ready", r);
      }
    }
    Object.defineProperty(ut, "Panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ye,
    }),
      Object.defineProperty(ut, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          viewport: null,
          track: null,
          enabled: !0,
          slides: [],
          axis: "x",
          transition: "fade",
          preload: 1,
          slidesPerPage: "auto",
          initialPage: 0,
          friction: 0.12,
          Panzoom: { decelFriction: 0.12 },
          center: !0,
          infinite: !0,
          fill: !0,
          dragFree: !1,
          adaptiveHeight: !1,
          direction: "ltr",
          classes: {
            container: "f-carousel",
            viewport: "f-carousel__viewport",
            track: "f-carousel__track",
            slide: "f-carousel__slide",
            isLTR: "is-ltr",
            isRTL: "is-rtl",
            isHorizontal: "is-horizontal",
            isVertical: "is-vertical",
            inTransition: "in-transition",
            isSelected: "is-selected",
          },
          l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d",
          },
        },
      }),
      Object.defineProperty(ut, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: at,
      });
    const ht = function (e) {
        if (!Re(e)) return 0;
        const t = window.scrollY,
          i = window.innerHeight,
          n = t + i,
          s = e.getBoundingClientRect(),
          o = s.y + t,
          r = s.height,
          a = o + r;
        if (t > a || n < o) return 0;
        if (t < o && n > a) return 100;
        if (o < t && a > n) return 100;
        let l = r;
        o < t && (l -= t - o), a > n && (l -= a - n);
        const c = (l / i) * 100;
        return Math.round(c);
      },
      pt = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    let ft;
    const mt = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
        "iframe",
        "object",
        "embed",
        "video",
        "audio",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
      ].join(","),
      gt = (e) => {
        if (e && pt) {
          void 0 === ft &&
            document.createElement("div").focus({
              get preventScroll() {
                return (ft = !0), !1;
              },
            });
          try {
            if (ft) e.focus({ preventScroll: !0 });
            else {
              const t = window.scrollY || document.body.scrollTop,
                i = window.scrollX || document.body.scrollLeft;
              e.focus(),
                document.body.scrollTo({ top: t, left: i, behavior: "auto" });
            }
          } catch (e) {}
        }
      },
      vt = () => {
        const e = document;
        let t,
          i = "",
          n = "",
          s = "";
        return (
          e.fullscreenEnabled
            ? ((i = "requestFullscreen"),
              (n = "exitFullscreen"),
              (s = "fullscreenElement"))
            : e.webkitFullscreenEnabled &&
              ((i = "webkitRequestFullscreen"),
              (n = "webkitExitFullscreen"),
              (s = "webkitFullscreenElement")),
          i &&
            (t = {
              request: function (t = e.documentElement) {
                return "webkitRequestFullscreen" === i
                  ? t[i](Element.ALLOW_KEYBOARD_INPUT)
                  : t[i]();
              },
              exit: function () {
                return e[s] && e[n]();
              },
              isFullscreen: function () {
                return e[s];
              },
            }),
          t
        );
      },
      bt = {
        animated: !0,
        autoFocus: !0,
        backdropClick: "close",
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide",
          },
        },
        closeButton: "auto",
        closeExisting: !1,
        commonCaption: !1,
        compact: () =>
          window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        contentClick: "toggleZoom",
        contentDblClick: !1,
        defaultType: "image",
        defaultDisplay: "block",
        dragToClose: !0,
        Fullscreen: { autoStart: !1 },
        groupAll: !1,
        groupAttr: "data-fancybox",
        hideClass: "f-fadeOut",
        hideScrollbar: !0,
        idle: 3500,
        keyboard: {
          Escape: "close",
          Delete: "close",
          Backspace: "close",
          PageUp: "next",
          PageDown: "prev",
          ArrowUp: "prev",
          ArrowDown: "next",
          ArrowRight: "next",
          ArrowLeft: "prev",
        },
        l10n: Object.assign(Object.assign({}, ze), {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          MODAL: "You can close this modal content with the ESC key",
          ERROR: "Something Went Wrong, Please Try Again Later",
          IMAGE_ERROR: "Image Not Found",
          ELEMENT_NOT_FOUND: "HTML Element Not Found",
          AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
          AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
          IFRAME_ERROR: "Error Loading Page",
          TOGGLE_ZOOM: "Toggle zoom level",
          TOGGLE_THUMBS: "Toggle thumbnails",
          TOGGLE_SLIDESHOW: "Toggle slideshow",
          TOGGLE_FULLSCREEN: "Toggle full-screen mode",
          DOWNLOAD: "Download",
        }),
        parentEl: null,
        placeFocusBack: !0,
        showClass: "f-zoomInUp",
        startIndex: 0,
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
        },
        trapFocus: !0,
        wheel: "zoom",
      };
    var yt, wt;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Closing = 2)] = "Closing"),
        (e[(e.CustomClosing = 3)] = "CustomClosing"),
        (e[(e.Destroy = 4)] = "Destroy");
    })(yt || (yt = {})),
      (function (e) {
        (e[(e.Loading = 0)] = "Loading"),
          (e[(e.Opening = 1)] = "Opening"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Closing = 3)] = "Closing");
      })(wt || (wt = {}));
    let xt = "",
      St = !1,
      Et = !1,
      Ct = null;
    const Tt = () => {
        let e = "",
          t = "";
        const i = Ni.getInstance();
        if (i) {
          const n = i.carousel,
            s = i.getSlide();
          if (n && s) {
            let o = s.slug || void 0,
              r = s.triggerEl || void 0;
            (t = o || i.option("slug") || ""),
              !t && r && r.dataset && (t = r.dataset.fancybox || ""),
              t &&
                "true" !== t &&
                (e =
                  "#" +
                  t +
                  (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
          }
        }
        return { hash: e, slug: t, index: 1 };
      },
      Pt = () => {
        const e = new URL(document.URL).hash,
          t = e.slice(1).split("-"),
          i = t[t.length - 1],
          n = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
        return { hash: e, slug: t.join("-"), index: n };
      },
      Mt = () => {
        const { slug: e, index: t } = Pt();
        if (!e) return;
        let i = document.querySelector(`[data-slug="${e}"]`);
        if (
          (i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ),
          Ni.getInstance())
        )
          return;
        const n = document.querySelectorAll(`[data-fancybox="${e}"]`);
        n.length &&
          ((i = n[t - 1]),
          i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ));
      },
      Ot = () => {
        if (!1 === Ni.defaults.Hash) return;
        const e = Ni.getInstance();
        if (!1 === (null == e ? void 0 : e.options.Hash)) return;
        const { slug: t, index: i } = Pt(),
          { slug: n } = Tt();
        e && (t === n ? e.jumpTo(i - 1) : ((St = !0), e.close())), Mt();
      },
      Lt = () => {
        Ct && clearTimeout(Ct),
          queueMicrotask(() => {
            Ot();
          });
      },
      kt = () => {
        window.addEventListener("hashchange", Lt, !1),
          setTimeout(() => {
            Ot();
          }, 500);
      };
    pt &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? kt()
        : document.addEventListener("DOMContentLoaded", kt));
    const At = "is-zooming-in";
    class _t extends et {
      onCreateSlide(e, t, i) {
        const n = this.instance.optionFor(i, "src") || "";
        i.el &&
          "image" === i.type &&
          "string" == typeof n &&
          this.setImage(i, n);
      }
      onRemoveSlide(e, t, i) {
        i.panzoom && i.panzoom.destroy(),
          (i.panzoom = void 0),
          (i.imageEl = void 0);
      }
      onChange(e, t, i, n) {
        Ne(this.instance.container, At);
        for (const e of t.slides) {
          const t = e.panzoom;
          t && e.index !== i && t.reset(0.35);
        }
      }
      onClose() {
        var e;
        const t = this.instance,
          i = t.container,
          n = t.getSlide();
        if (!i || !i.parentElement || !n) return;
        const { el: s, contentEl: o, panzoom: r, thumbElSrc: a } = n;
        if (
          !s ||
          !a ||
          !o ||
          !r ||
          r.isContentLoading ||
          r.state === Ae.Init ||
          r.state === Ae.Destroy
        )
          return;
        r.updateMetrics();
        let l = this.getZoomInfo(n);
        if (!l) return;
        (this.instance.state = yt.CustomClosing),
          i.classList.remove(At),
          i.classList.add("is-zooming-out"),
          (o.style.backgroundImage = `url('${a}')`);
        const c = i.getBoundingClientRect();
        1 ===
          ((null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1) &&
          Object.assign(i.style, {
            position: "absolute",
            top: `${i.offsetTop + window.scrollY}px`,
            left: `${i.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c.width}px`,
            height: `${c.height}px`,
            overflow: "hidden",
          });
        const { x: d, y: u, scale: h, opacity: p } = l;
        if (p) {
          const e = ((e, t, i, n) => {
            const s = t - e;
            return (t) => 1 + (((t - e) / s) * -1 || 0);
          })(r.scale, h);
          r.on("afterTransform", () => {
            o.style.opacity = e(r.scale) + "";
          });
        }
        r.on("endAnimation", () => {
          t.destroy();
        }),
          (r.target.a = h),
          (r.target.b = 0),
          (r.target.c = 0),
          (r.target.d = h),
          r.panTo({
            x: d,
            y: u,
            scale: h,
            friction: p ? 0.2 : 0.33,
            ignoreBounds: !0,
          }),
          r.isResting && t.destroy();
      }
      setImage(e, t) {
        const i = this.instance;
        (e.src = t),
          this.process(e, t).then(
            (t) => {
              const { contentEl: n, imageEl: s, thumbElSrc: o, el: r } = e;
              if (i.isClosing() || !n || !s) return;
              n.offsetHeight;
              const a = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
              if (this.option("protected") && r) {
                r.addEventListener("contextmenu", (e) => {
                  e.preventDefault();
                });
                const e = document.createElement("div");
                Fe(e, "fancybox-protected"), n.appendChild(e);
              }
              if (o && a) {
                const s = t.contentRect,
                  r = Math.max(s.fullWidth, s.fullHeight);
                let c = null;
                !a.opacity &&
                  r > 1200 &&
                  ((c = document.createElement("img")),
                  Fe(c, "fancybox-ghost"),
                  (c.src = o),
                  n.appendChild(c));
                const d = () => {
                  c &&
                    (Fe(c, "f-fadeFastOut"),
                    setTimeout(() => {
                      c && (c.remove(), (c = null));
                    }, 200));
                };
                ((l = o),
                new Promise((e, t) => {
                  const i = new Image();
                  (i.onload = e), (i.onerror = t), (i.src = l);
                })).then(
                  () => {
                    i.hideLoading(e),
                      (e.state = wt.Opening),
                      this.instance.emit("reveal", e),
                      this.zoomIn(e).then(
                        () => {
                          d(), this.instance.done(e);
                        },
                        () => {}
                      ),
                      c &&
                        setTimeout(
                          () => {
                            d();
                          },
                          r > 2500 ? 800 : 200
                        );
                  },
                  () => {
                    i.hideLoading(e), i.revealContent(e);
                  }
                );
              } else {
                const n = this.optionFor(e, "initialSize"),
                  s = this.optionFor(e, "zoom"),
                  o = {
                    event: i.prevMouseMoveEvent || i.options.event,
                    friction: s ? 0.12 : 0,
                  };
                let r = i.optionFor(e, "showClass") || void 0,
                  a = !0;
                i.isOpeningSlide(e) &&
                  ("full" === n
                    ? t.zoomToFull(o)
                    : "cover" === n
                    ? t.zoomToCover(o)
                    : "max" === n
                    ? t.zoomToMax(o)
                    : (a = !1),
                  t.stop("current")),
                  a && r && (r = t.isDragging ? "f-fadeIn" : ""),
                  i.hideLoading(e),
                  i.revealContent(e, r);
              }
              var l;
            },
            () => {
              i.setError(e, "{{IMAGE_ERROR}}");
            }
          );
      }
      process(e, t) {
        return new Promise((i, n) => {
          var s;
          const o = this.instance,
            r = e.el;
          o.clearContent(e), o.showLoading(e);
          let a = this.optionFor(e, "content");
          if (("string" == typeof a && (a = be(a)), !a || !Re(a))) {
            if (
              ((a = document.createElement("img")),
              a instanceof HTMLImageElement)
            ) {
              let i = "",
                n = e.caption;
              (i =
                "string" == typeof n && n
                  ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                  : `Image ${e.index + 1} of ${
                      (null === (s = o.carousel) || void 0 === s
                        ? void 0
                        : s.pages.length) || 1
                    }`),
                (a.src = t || ""),
                (a.alt = i),
                (a.draggable = !1),
                e.srcset && a.setAttribute("srcset", e.srcset),
                this.instance.isOpeningSlide(e) && (a.fetchPriority = "high");
            }
            e.sizes && a.setAttribute("sizes", e.sizes);
          }
          Fe(a, "fancybox-image"),
            (e.imageEl = a),
            o.setContent(e, a, !1),
            (e.panzoom = new Ye(
              r,
              Me({ transformParent: !0 }, this.option("Panzoom") || {}, {
                content: a,
                width: (t, i) => o.optionFor(e, "width", "auto", i) || "auto",
                height: (t, i) => o.optionFor(e, "height", "auto", i) || "auto",
                wheel: () => {
                  const e = o.option("wheel");
                  return ("zoom" === e || "pan" == e) && e;
                },
                click: (t, i) => {
                  var n, s;
                  if (o.isCompact || o.isClosing()) return !1;
                  if (
                    e.index !==
                    (null === (n = o.getSlide()) || void 0 === n
                      ? void 0
                      : n.index)
                  )
                    return !1;
                  if (i) {
                    const e = i.composedPath()[0];
                    if (
                      [
                        "A",
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO",
                      ].includes(e.nodeName)
                    )
                      return !1;
                  }
                  let r =
                    !i ||
                    (i.target &&
                      (null === (s = e.contentEl) || void 0 === s
                        ? void 0
                        : s.contains(i.target)));
                  return o.option(r ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: () =>
                  o.isCompact
                    ? "toggleZoom"
                    : o.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                  ready: (e) => {
                    i(e);
                  },
                  error: () => {
                    n();
                  },
                  destroy: () => {
                    n();
                  },
                },
              })
            ));
        });
      }
      zoomIn(e) {
        return new Promise((t, i) => {
          const n = this.instance,
            s = n.container,
            { panzoom: o, contentEl: r, el: a } = e;
          o && o.updateMetrics();
          const l = this.getZoomInfo(e);
          if (!(l && a && r && o && s)) return void i();
          const { x: c, y: d, scale: u, opacity: h } = l,
            p = () => {
              e.state !== wt.Closing &&
                (h &&
                  (r.style.opacity =
                    Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - u)), 0) + ""),
                o.scale >= 1 && o.scale > o.targetScale - 0.1 && t(o));
            },
            f = (e) => {
              ((e.scale < 0.99 || e.scale > 1.01) && !e.isDragging) ||
                (Ne(s, At),
                (r.style.opacity = ""),
                e.off("endAnimation", f),
                e.off("touchStart", f),
                e.off("afterTransform", p),
                t(e));
            };
          o.on("endAnimation", f),
            o.on("touchStart", f),
            o.on("afterTransform", p),
            o.on(["error", "destroy"], () => {
              i();
            }),
            o.panTo({ x: c, y: d, scale: u, friction: 0, ignoreBounds: !0 }),
            o.stop("current");
          const m = {
              event:
                "mousemove" === o.panMode
                  ? n.prevMouseMoveEvent || n.options.event
                  : void 0,
            },
            g = this.optionFor(e, "initialSize");
          Fe(s, At),
            n.hideLoading(e),
            "full" === g
              ? o.zoomToFull(m)
              : "cover" === g
              ? o.zoomToCover(m)
              : "max" === g
              ? o.zoomToMax(m)
              : o.reset(0.172);
        });
      }
      getZoomInfo(e) {
        const { el: t, imageEl: i, thumbEl: n, panzoom: s } = e,
          o = this.instance,
          r = o.container;
        if (
          !t ||
          !i ||
          !n ||
          !s ||
          ht(n) < 3 ||
          !this.optionFor(e, "zoom") ||
          !r ||
          o.state === yt.Destroy
        )
          return !1;
        if ("0" === getComputedStyle(r).getPropertyValue("--f-images-zoom"))
          return !1;
        const a = window.visualViewport || null;
        if (1 !== (a ? a.scale : 1)) return !1;
        let {
            top: l,
            left: c,
            width: d,
            height: u,
          } = n.getBoundingClientRect(),
          { top: h, left: p, fitWidth: f, fitHeight: m } = s.contentRect;
        if (!(d && u && f && m)) return !1;
        const g = s.container.getBoundingClientRect();
        (p += g.left), (h += g.top);
        const v = -1 * (p + 0.5 * f - (c + 0.5 * d)),
          b = -1 * (h + 0.5 * m - (l + 0.5 * u)),
          y = d / f;
        let w = this.option("zoomOpacity") || !1;
        return (
          "auto" === w && (w = Math.abs(d / u - f / m) > 0.1),
          { x: v, y: b, scale: y, opacity: w }
        );
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.change", e.onChange),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.removeSlide", e.onRemoveSlide),
          t.on("close", e.onClose);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.change", e.onChange),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.removeSlide", e.onRemoveSlide),
          t.off("close", e.onClose);
      }
    }
    Object.defineProperty(_t, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        initialSize: "fit",
        Panzoom: { maxScale: 1 },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto",
      },
    }),
      "function" == typeof SuppressedError && SuppressedError;
    const zt = "html",
      It = "image",
      Dt = "map",
      $t = "youtube",
      Rt = "vimeo",
      Nt = "html5video",
      Ft = (e, t = {}) => {
        const i = new URL(e),
          n = new URLSearchParams(i.search),
          s = new URLSearchParams();
        for (const [e, i] of [...n, ...Object.entries(t)]) {
          let t = i + "";
          if ("t" === e) {
            let e = t.match(/((\d*)m)?(\d*)s?/);
            e &&
              s.set(
                "start",
                60 * parseInt(e[2] || "0") + parseInt(e[3] || "0") + ""
              );
          } else s.set(e, t);
        }
        let o = s + "",
          r = e.match(/#t=((.*)?\d+s)/);
        return r && (o += `#t=${r[1]}`), o;
      },
      Bt = [
        "image",
        "html",
        "ajax",
        "inline",
        "clone",
        "iframe",
        "map",
        "pdf",
        "html5video",
        "youtube",
        "vimeo",
      ];
    class jt extends et {
      onBeforeInitSlide(e, t, i) {
        this.processType(i);
      }
      onCreateSlide(e, t, i) {
        this.setContent(i);
      }
      onClearContent(e, t) {
        t.xhr && (t.xhr.abort(), (t.xhr = null));
        const i = t.iframeEl;
        i &&
          ((i.onload = i.onerror = null),
          (i.src = "//about:blank"),
          (t.iframeEl = null));
        const n = t.contentEl,
          s = t.placeholderEl;
        if ("inline" === t.type && n && s)
          n.classList.remove("fancybox__content"),
            "none" !== n.style.display && (n.style.display = "none"),
            s.parentNode && s.parentNode.insertBefore(n, s),
            s.remove(),
            (t.contentEl = void 0),
            (t.placeholderEl = void 0);
        else
          for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild);
      }
      onSelectSlide(e, t, i) {
        i.state === wt.Ready && this.playVideo();
      }
      onUnselectSlide(e, t, i) {
        var n, s;
        if (i.type === Nt) {
          try {
            null ===
              (s =
                null === (n = i.el) || void 0 === n
                  ? void 0
                  : n.querySelector("video")) ||
              void 0 === s ||
              s.pause();
          } catch (e) {}
          return;
        }
        let o;
        i.type === Rt
          ? (o = { method: "pause", value: "true" })
          : i.type === $t && (o = { event: "command", func: "pauseVideo" }),
          o &&
            i.iframeEl &&
            i.iframeEl.contentWindow &&
            i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
          i.poller && clearTimeout(i.poller);
      }
      onDone(e, t) {
        e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
      }
      onRefresh(e, t) {
        t.slides.forEach((e) => {
          e.el && (this.resizeIframe(e), this.setAspectRatio(e));
        });
      }
      onMessage(e) {
        try {
          let t = JSON.parse(e.data);
          if ("https://player.vimeo.com" === e.origin) {
            if ("ready" === t.event)
              for (let t of Array.from(
                document.getElementsByClassName("fancybox__iframe")
              ))
                t instanceof HTMLIFrameElement &&
                  t.contentWindow === e.source &&
                  (t.dataset.ready = "true");
          } else if (
            e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
            "onReady" === t.event
          ) {
            const e = document.getElementById(t.id);
            e && (e.dataset.ready = "true");
          }
        } catch (e) {}
      }
      loadAjaxContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        this.instance.showLoading(e);
        const i = this.instance,
          n = new XMLHttpRequest();
        i.showLoading(e),
          (n.onreadystatechange = function () {
            n.readyState === XMLHttpRequest.DONE &&
              i.state === yt.Ready &&
              (i.hideLoading(e),
              200 === n.status
                ? i.setContent(e, n.responseText)
                : i.setError(
                    e,
                    404 === n.status
                      ? "{{AJAX_NOT_FOUND}}"
                      : "{{AJAX_FORBIDDEN}}"
                  ));
          });
        const s = e.ajax || null;
        n.open(s ? "POST" : "GET", t + ""),
          n.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          n.send(s),
          (e.xhr = n);
      }
      setInlineContent(e) {
        let t = null;
        if (Re(e.src)) t = e.src;
        else if ("string" == typeof e.src) {
          const i = e.src.split("#", 2).pop();
          t = i ? document.getElementById(i) : null;
        }
        if (t) {
          if ("clone" === e.type || t.closest(".fancybox__slide")) {
            t = t.cloneNode(!0);
            const i = t.dataset.animationName;
            i && (t.classList.remove(i), delete t.dataset.animationName);
            let n = t.getAttribute("id");
            (n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`),
              t.setAttribute("id", n);
          } else if (t.parentNode) {
            const i = document.createElement("div");
            i.classList.add("fancybox-placeholder"),
              t.parentNode.insertBefore(i, t),
              (e.placeholderEl = i);
          }
          this.instance.setContent(e, t);
        } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      setIframeContent(e) {
        const { src: t, el: i } = e;
        if (!t || "string" != typeof t || !i) return;
        i.classList.add("is-loading");
        const n = this.instance,
          s = document.createElement("iframe");
        (s.className = "fancybox__iframe"),
          s.setAttribute("id", `fancybox__iframe_${n.id}_${e.index}`);
        for (const [t, i] of Object.entries(
          this.optionFor(e, "iframeAttr") || {}
        ))
          s.setAttribute(t, i);
        (s.onerror = () => {
          n.setError(e, "{{IFRAME_ERROR}}");
        }),
          (e.iframeEl = s);
        const o = this.optionFor(e, "preload");
        if ("iframe" !== e.type || !1 === o)
          return (
            s.setAttribute("src", e.src + ""),
            n.setContent(e, s, !1),
            this.resizeIframe(e),
            void n.revealContent(e)
          );
        n.showLoading(e),
          (s.onload = () => {
            if (!s.src.length) return;
            const t = "true" !== s.dataset.ready;
            (s.dataset.ready = "true"),
              this.resizeIframe(e),
              t ? n.revealContent(e) : n.hideLoading(e);
          }),
          s.setAttribute("src", t),
          n.setContent(e, s, !1);
      }
      resizeIframe(e) {
        const { type: t, iframeEl: i } = e;
        if (t === $t || t === Rt) return;
        const n = null == i ? void 0 : i.parentElement;
        if (!i || !n) return;
        let s = e.autoSize;
        void 0 === s && (s = this.optionFor(e, "autoSize"));
        let o = e.width || 0,
          r = e.height || 0;
        o && r && (s = !1);
        const a = n && n.style;
        if (!1 !== e.preload && !1 !== s && a)
          try {
            const e = window.getComputedStyle(n),
              t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
              s = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
              l = i.contentWindow;
            if (l) {
              const e = l.document,
                i = e.getElementsByTagName(zt)[0],
                n = e.body;
              (a.width = ""),
                (n.style.overflow = "hidden"),
                (o = o || i.scrollWidth + t),
                (a.width = `${o}px`),
                (n.style.overflow = ""),
                (a.flex = "0 0 auto"),
                (a.height = `${n.scrollHeight}px`),
                (r = i.scrollHeight + s);
            }
          } catch (e) {}
        if (o || r) {
          const e = { flex: "0 1 auto", width: "", height: "" };
          o && "auto" !== o && (e.width = `${o}px`),
            r && "auto" !== r && (e.height = `${r}px`),
            Object.assign(a, e);
        }
      }
      playVideo() {
        const e = this.instance.getSlide();
        if (!e) return;
        const { el: t } = e;
        if (!t || !t.offsetParent) return;
        if (!this.optionFor(e, "videoAutoplay")) return;
        if (e.type === Nt)
          try {
            const e = t.querySelector("video");
            if (e) {
              const t = e.play();
              void 0 !== t &&
                t
                  .then(() => {})
                  .catch((t) => {
                    (e.muted = !0), e.play();
                  });
            }
          } catch (e) {}
        if (e.type !== $t && e.type !== Rt) return;
        const i = () => {
          if (e.iframeEl && e.iframeEl.contentWindow) {
            let t;
            if ("true" === e.iframeEl.dataset.ready)
              return (
                (t =
                  e.type === $t
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
                t &&
                  e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                void (e.poller = void 0)
              );
            e.type === $t &&
              ((t = { event: "listening", id: e.iframeEl.getAttribute("id") }),
              e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
          }
          e.poller = setTimeout(i, 250);
        };
        i();
      }
      processType(e) {
        if (e.html) return (e.type = zt), (e.src = e.html), void (e.html = "");
        const t = this.instance.optionFor(e, "src", "");
        if (!t || "string" != typeof t) return;
        let i = e.type,
          n = null;
        if (
          (n = t.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const s = this.optionFor(e, $t),
            { nocookie: o } = s,
            r = (function (e, t) {
              var i = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (i[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                  t.indexOf(n[s]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
                    (i[n[s]] = e[n[s]]);
              }
              return i;
            })(s, ["nocookie"]),
            a = `www.youtube${o ? "-nocookie" : ""}.com`,
            l = Ft(t, r),
            c = encodeURIComponent(n[2]);
          (e.videoId = c),
            (e.src = `https://${a}/embed/${c}?${l}`),
            (e.thumbSrc =
              e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
            (i = $t);
        } else if (
          (n = t.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          ))
        ) {
          const s = Ft(t, this.optionFor(e, Rt)),
            o = encodeURIComponent(n[1]),
            r = n[4] || "";
          (e.videoId = o),
            (e.src = `https://player.vimeo.com/video/${o}?${
              r ? `h=${r}${s ? "&" : ""}` : ""
            }${s}`),
            (i = Rt);
        }
        if (!i && e.triggerEl) {
          const t = e.triggerEl.dataset.type;
          Bt.includes(t) && (i = t);
        }
        i ||
          ("string" == typeof t &&
            ("#" === t.charAt(0)
              ? (i = "inline")
              : (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? ((i = Nt),
                (e.videoFormat =
                  e.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
              : t.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (i = It)
              : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf"))),
          (n = t.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((e.src = `https://maps.google.${n[1]}/?ll=${(n[2]
                ? n[2] +
                  "&z=" +
                  Math.floor(parseFloat(n[3])) +
                  (n[4] ? n[4].replace(/^\//, "&") : "")
                : n[4] + ""
              ).replace(/\?/, "&")}&output=${
                n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = Dt))
            : (n = t.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((e.src = `https://maps.google.${n[1]}/maps?q=${n[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = Dt)),
          (i = i || this.instance.option("defaultType")),
          (e.type = i),
          i === It && (e.thumbSrc = e.thumbSrc || e.src);
      }
      setContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        if (e && e.type && t) {
          switch (e.type) {
            case zt:
              this.instance.setContent(e, t);
              break;
            case Nt:
              const i = this.option("videoTpl");
              i &&
                this.instance.setContent(
                  e,
                  i
                    .replace(/\{\{src\}\}/gi, t + "")
                    .replace(
                      /\{\{format\}\}/gi,
                      this.optionFor(e, "videoFormat") || ""
                    )
                    .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                );
              break;
            case "inline":
            case "clone":
              this.setInlineContent(e);
              break;
            case "ajax":
              this.loadAjaxContent(e);
              break;
            case "pdf":
            case Dt:
            case $t:
            case Rt:
              e.preload = !1;
            case "iframe":
              this.setIframeContent(e);
          }
          this.setAspectRatio(e);
        }
      }
      setAspectRatio(e) {
        const t = e.contentEl;
        if (!(e.el && t && e.type && [$t, Rt, Nt].includes(e.type))) return;
        let i,
          n = e.width || "auto",
          s = e.height || "auto";
        if ("auto" === n || "auto" === s) {
          i = this.optionFor(e, "videoRatio");
          const t = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
          i =
            t && t.length > 2
              ? parseFloat(t[1]) / parseFloat(t[2])
              : parseFloat(i + "");
        } else n && s && (i = n / s);
        if (!i) return;
        (t.style.aspectRatio = ""),
          (t.style.width = ""),
          (t.style.height = ""),
          t.offsetHeight;
        const o = t.getBoundingClientRect(),
          r = o.width || 1,
          a = o.height || 1;
        (t.style.aspectRatio = i + ""),
          i < r / a
            ? ((s = "auto" === s ? a : Math.min(a, s)),
              (t.style.width = "auto"),
              (t.style.height = `${s}px`))
            : ((n = "auto" === n ? r : Math.min(r, n)),
              (t.style.width = `${n}px`),
              (t.style.height = "auto"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.selectSlide", e.onSelectSlide),
          t.on("Carousel.unselectSlide", e.onUnselectSlide),
          t.on("Carousel.Panzoom.refresh", e.onRefresh),
          t.on("done", e.onDone),
          t.on("clearContent", e.onClearContent),
          window.addEventListener("message", e.onMessage);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.selectSlide", e.onSelectSlide),
          t.off("Carousel.unselectSlide", e.onUnselectSlide),
          t.off("Carousel.Panzoom.refresh", e.onRefresh),
          t.off("done", e.onDone),
          t.off("clearContent", e.onClearContent),
          window.removeEventListener("message", e.onMessage);
      }
    }
    Object.defineProperty(jt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        ajax: null,
        autoSize: !0,
        iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
        preload: !0,
        videoAutoplay: !0,
        videoRatio: 16 / 9,
        videoTpl:
          '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        videoFormat: "",
        vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
        youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
      },
    });
    const Ht = "play",
      qt = "pause",
      Vt = "ready";
    class Wt extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vt,
          }),
          Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      get isActive() {
        return this.state !== Vt;
      }
      onReady(e) {
        this.option("autoStart") &&
          (e.isInfinite || e.page < e.pages.length - 1) &&
          this.start();
      }
      onChange() {
        this.removeProgressBar(), this.pause();
      }
      onSettle() {
        this.resume();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
      onMouseEnter() {
        (this.inHover = !0), this.pause();
      }
      onMouseLeave() {
        var e;
        (this.inHover = !1),
          (null === (e = this.instance.panzoom) || void 0 === e
            ? void 0
            : e.isResting) && this.resume();
      }
      onTimerEnd() {
        const e = this.instance;
        "play" === this.state &&
          (e.isInfinite || e.page !== e.pages.length - 1
            ? e.slideNext()
            : e.slideTo(0));
      }
      removeProgressBar() {
        this.progressBar &&
          (this.progressBar.remove(), (this.progressBar = null));
      }
      createProgressBar() {
        var e;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const t = this.instance,
          i =
            (null === (e = t.pages[t.page]) || void 0 === e
              ? void 0
              : e.slides) || [];
        let n = this.option("progressParentEl");
        if ((n || (n = (1 === i.length ? i[0].el : null) || t.viewport), !n))
          return null;
        const s = document.createElement("div");
        return (
          Fe(s, "f-progress"),
          n.prepend(s),
          (this.progressBar = s),
          s.offsetHeight,
          s
        );
      }
      set() {
        const e = this,
          t = e.instance;
        if (t.pages.length < 2) return;
        if (e.timer) return;
        const i = e.option("timeout");
        (e.state = Ht), Fe(t.container, "has-autoplay");
        let n = e.createProgressBar();
        n &&
          ((n.style.transitionDuration = `${i}ms`),
          (n.style.transform = "scaleX(1)")),
          (e.timer = setTimeout(() => {
            (e.timer = null), e.inHover || e.onTimerEnd();
          }, i)),
          e.emit("set");
      }
      clear() {
        const e = this;
        e.timer && (clearTimeout(e.timer), (e.timer = null)),
          e.removeProgressBar();
      }
      start() {
        const e = this;
        if ((e.set(), e.state !== Vt)) {
          if (e.option("pauseOnHover")) {
            const t = e.instance.container;
            t.addEventListener("mouseenter", e.onMouseEnter, !1),
              t.addEventListener("mouseleave", e.onMouseLeave, !1);
          }
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
            e.emit("start");
        }
      }
      stop() {
        const e = this,
          t = e.state,
          i = e.instance.container;
        e.clear(),
          (e.state = Vt),
          i.removeEventListener("mouseenter", e.onMouseEnter, !1),
          i.removeEventListener("mouseleave", e.onMouseLeave, !1),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          Ne(i, "has-autoplay"),
          t !== Vt && e.emit("stop");
      }
      pause() {
        const e = this;
        e.state === Ht && ((e.state = qt), e.clear(), e.emit(qt));
      }
      resume() {
        const e = this,
          t = e.instance;
        if (t.isInfinite || t.page !== t.pages.length - 1)
          if (e.state !== Ht) {
            if (e.state === qt && !e.inHover) {
              const t = new Event("resume", { bubbles: !0, cancelable: !0 });
              e.emit("resume", t), t.defaultPrevented || e.set();
            }
          } else e.set();
        else e.stop();
      }
      toggle() {
        this.state === Ht || this.state === qt ? this.stop() : this.start();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("ready", e.onReady),
          t.on("Panzoom.startAnimation", e.onChange),
          t.on("Panzoom.endAnimation", e.onSettle),
          t.on("Panzoom.touchMove", e.onChange);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("ready", e.onReady),
          t.off("Panzoom.startAnimation", e.onChange),
          t.off("Panzoom.endAnimation", e.onSettle),
          t.off("Panzoom.touchMove", e.onChange),
          e.stop();
      }
    }
    Object.defineProperty(Wt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3,
      },
    });
    class Gt extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onPrepare(e) {
        const t = e.carousel;
        if (!t) return;
        const i = e.container;
        i &&
          ((t.options.Autoplay = Me(
            { autoStart: !1 },
            this.option("Autoplay") || {},
            {
              pauseOnHover: !1,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  e.emit("startSlideshow");
                },
                set: (t) => {
                  var n;
                  i.classList.add("has-slideshow"),
                    (null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) !== wt.Ready && t.pause();
                },
                stop: () => {
                  i.classList.remove("has-slideshow"),
                    e.isCompact || e.endIdle(),
                    e.emit("endSlideshow");
                },
                resume: (t, i) => {
                  var n, s, o;
                  !i ||
                    !i.cancelable ||
                    ((null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) === wt.Ready &&
                      (null ===
                        (o =
                          null === (s = e.carousel) || void 0 === s
                            ? void 0
                            : s.panzoom) || void 0 === o
                        ? void 0
                        : o.isResting)) ||
                    i.preventDefault();
                },
              },
            }
          )),
          t.attachPlugins({ Autoplay: Wt }),
          (this.ref = t.plugins.Autoplay));
      }
      onReady(e) {
        const t = e.carousel,
          i = this.ref;
        i &&
          t &&
          this.option("playOnStart") &&
          (t.isInfinite || t.page < t.pages.length - 1) &&
          i.start();
      }
      onDone(e, t) {
        const i = this.ref,
          n = e.carousel;
        if (!i || !n) return;
        const s = t.panzoom;
        s &&
          s.on("startAnimation", () => {
            e.isCurrentSlide(t) && i.stop();
          }),
          e.isCurrentSlide(t) && i.resume();
      }
      onKeydown(e, t) {
        var i;
        const n = this.ref;
        n &&
          t === this.option("key") &&
          "BUTTON" !==
            (null === (i = document.activeElement) || void 0 === i
              ? void 0
              : i.nodeName) &&
          n.toggle();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.init", e.onPrepare),
          t.on("Carousel.ready", e.onReady),
          t.on("done", e.onDone),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.init", e.onPrepare),
          t.off("Carousel.ready", e.onReady),
          t.off("done", e.onDone),
          t.off("keydown", e.onKeydown);
      }
    }
    Object.defineProperty(Gt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: (e) => {
          var t;
          return (
            (null === (t = e.instance.container) || void 0 === t
              ? void 0
              : t.querySelector(
                  ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                )) || e.instance.container
          );
        },
        timeout: 3e3,
      },
    });
    const Xt = {
      classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs",
      },
      minCount: 2,
      parentEl: null,
      thumbTpl:
        '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
      type: "modern",
    };
    var Yt;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Hidden = 2)] = "Hidden");
    })(Yt || (Yt = {}));
    const Ut = "isResting",
      Zt = "thumbWidth",
      Kt = "thumbHeight",
      Jt = "thumbClipWidth";
    let Qt = class extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern",
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yt.Init,
          });
      }
      get isModern() {
        return "modern" === this.type;
      }
      onInitSlide(e, t) {
        const i = t.el ? t.el.dataset : void 0;
        i &&
          ((t.thumbSrc = i.thumbSrc || t.thumbSrc || ""),
          (t[Jt] = parseFloat(i[Jt] || "") || t[Jt] || 0),
          (t[Kt] = parseFloat(i.thumbHeight || "") || t[Kt] || 0)),
          this.addSlide(t);
      }
      onInitSlides() {
        this.build();
      }
      onChange() {
        var e;
        if (!this.isModern) return;
        const t = this.container,
          i = this.instance,
          n = i.panzoom,
          s = this.carousel,
          o = s ? s.panzoom : null,
          r = i.page;
        if (n && s && o) {
          if (n.isDragging) {
            Ne(t, this.cn(Ut));
            let n =
              (null === (e = s.pages[r]) || void 0 === e ? void 0 : e.pos) || 0;
            n += i.getProgress(r) * (this[Jt] + this.thumbGap);
            let a = o.getBounds();
            -1 * n > a.x.min &&
              -1 * n < a.x.max &&
              o.panTo({ x: -1 * n, friction: 0.12 });
          } else we(t, this.cn(Ut), n.isResting);
          this.shiftModern();
        }
      }
      onRefresh() {
        this.updateProps();
        for (const e of this.instance.slides || []) this.resizeModernSlide(e);
        this.shiftModern();
      }
      isDisabled() {
        const e = this.option("minCount") || 0;
        if (e) {
          const t = this.instance;
          let i = 0;
          for (const e of t.slides || []) e.thumbSrc && i++;
          if (i < e) return !0;
        }
        const t = this.option("type");
        return ["modern", "classic"].indexOf(t) < 0;
      }
      getThumb(e) {
        const t = this.option("thumbTpl") || "";
        return {
          html: this.instance.localize(t, [
            ["%i", e.index],
            ["%d", e.index + 1],
            [
              "%s",
              e.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]),
        };
      }
      addSlide(e) {
        const t = this.carousel;
        t && t.addSlide(e.index, this.getThumb(e));
      }
      getSlides() {
        const e = [];
        for (const t of this.instance.slides || []) e.push(this.getThumb(t));
        return e;
      }
      resizeModernSlide(e) {
        this.isModern &&
          (e[Zt] =
            e[Jt] && e[Kt] ? Math.round(this[Kt] * (e[Jt] / e[Kt])) : this[Zt]);
      }
      updateProps() {
        const e = this.container;
        if (!e) return;
        const t = (t) =>
          parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-" + t)) ||
          0;
        (this.thumbGap = t("gap")),
          (this.thumbExtraGap = t("extra-gap")),
          (this[Zt] = t("width") || 40),
          (this[Jt] = t("clip-width") || 40),
          (this[Kt] = t("height") || 40);
      }
      build() {
        const e = this;
        if (e.state !== Yt.Init) return;
        if (e.isDisabled()) return void e.emit("disabled");
        const t = e.instance,
          i = t.container,
          n = e.getSlides(),
          s = e.option("type");
        e.type = s;
        const o = e.option("parentEl"),
          r = e.cn("container"),
          a = e.cn("track");
        let l = null == o ? void 0 : o.querySelector("." + r);
        l ||
          ((l = document.createElement("div")),
          Fe(l, r),
          o ? o.appendChild(l) : i.after(l)),
          Fe(l, `is-${s}`),
          Fe(i, e.cn("hasThumbs")),
          (e.container = l),
          e.updateProps();
        let c = l.querySelector("." + a);
        c ||
          ((c = document.createElement("div")),
          Fe(c, e.cn("track")),
          l.appendChild(c)),
          (e.track = c);
        const d = Me(
            {},
            {
              track: c,
              infinite: !1,
              center: !0,
              fill: "classic" === s,
              dragFree: !0,
              slidesPerPage: 1,
              transition: !1,
              preload: 0.25,
              friction: 0.12,
              Panzoom: { maxVelocity: 0 },
              Dots: !1,
              Navigation: !1,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
              },
            },
            e.option("Carousel") || {},
            { Sync: { target: t }, slides: n }
          ),
          u = new t.constructor(l, d);
        u.on("createSlide", (t, i) => {
          e.setProps(i.index), e.emit("createSlide", i, i.el);
        }),
          u.on("ready", () => {
            e.shiftModern(), e.emit("ready");
          }),
          u.on("refresh", () => {
            e.shiftModern();
          }),
          u.on("Panzoom.click", (t, i, n) => {
            e.onClick(n);
          }),
          (e.carousel = u),
          (e.state = Yt.Ready);
      }
      onClick(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.instance,
          { pages: i, page: n } = t,
          s = (e) => {
            if (e) {
              const t = e.closest("[data-carousel-index]");
              if (t)
                return [parseInt(t.dataset.carouselIndex || "", 10) || 0, t];
            }
            return [-1, void 0];
          },
          o = (e, t) => {
            const i = document.elementFromPoint(e, t);
            return i ? s(i) : [-1, void 0];
          };
        let [r, a] = s(e.target);
        if (r > -1) return;
        const l = this[Jt],
          c = e.clientX,
          d = e.clientY;
        let [u, h] = o(c - l, d),
          [p, f] = o(c + l, d);
        h && f
          ? ((r =
              Math.abs(c - h.getBoundingClientRect().right) <
              Math.abs(c - f.getBoundingClientRect().left)
                ? u
                : p),
            r === n && (r = r === u ? p : u))
          : h
          ? (r = u)
          : f && (r = p),
          r > -1 && i[r] && t.slideTo(r);
      }
      getShift(e) {
        var t;
        const i = this,
          { instance: n } = i,
          s = i.carousel;
        if (!n || !s) return 0;
        const o = i[Zt],
          r = i[Jt],
          a = i.thumbGap,
          l = i.thumbExtraGap;
        if (!(null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el))
          return 0;
        const c = 0.5 * (o - r),
          d = n.pages.length - 1;
        let u = n.getProgress(0),
          h = n.getProgress(d),
          p = n.getProgress(e, !1, !0),
          f = 0,
          m = c + l + a;
        const g = u < 0 && u > -1,
          v = h > 0 && h < 1;
        return (
          0 === e
            ? ((f = m * Math.abs(u)), v && 1 === u && (f -= m * Math.abs(h)))
            : e === d
            ? ((f = m * Math.abs(h) * -1),
              g && -1 === h && (f += m * Math.abs(u)))
            : g || v
            ? ((f = -1 * m),
              (f += m * Math.abs(u)),
              (f += m * (1 - Math.abs(h))))
            : (f = m * p),
          f
        );
      }
      setProps(e) {
        var t;
        const i = this;
        if (!i.isModern) return;
        const { instance: n } = i,
          s = i.carousel;
        if (n && s) {
          const o = null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el;
          if (o && o.childNodes.length) {
            let t = me(1 - Math.abs(n.getProgress(e))),
              s = me(i.getShift(e));
            o.style.setProperty("--progress", t ? t + "" : ""),
              o.style.setProperty("--shift", s + "");
          }
        }
      }
      shiftModern() {
        const e = this;
        if (!e.isModern) return;
        const { instance: t, track: i } = e,
          n = t.panzoom,
          s = e.carousel;
        if (!(t && i && n && s)) return;
        if (n.state === Ae.Init || n.state === Ae.Destroy) return;
        for (const i of t.slides) e.setProps(i.index);
        let o = (e[Jt] + e.thumbGap) * (s.slides.length || 0);
        i.style.setProperty("--width", o + "");
      }
      cleanup() {
        const e = this;
        e.carousel && e.carousel.destroy(),
          (e.carousel = null),
          e.container && e.container.remove(),
          (e.container = null),
          e.track && e.track.remove(),
          (e.track = null),
          (e.state = Yt.Init),
          Ne(e.instance.container, e.cn("hasThumbs"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("initSlide", e.onInitSlide),
          t.state === Ke.Init
            ? t.on("initSlides", e.onInitSlides)
            : e.onInitSlides(),
          t.on(["change", "Panzoom.afterTransform"], e.onChange),
          t.on("Panzoom.refresh", e.onRefresh);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("initSlide", e.onInitSlide),
          t.off("initSlides", e.onInitSlides),
          t.off(["change", "Panzoom.afterTransform"], e.onChange),
          t.off("Panzoom.refresh", e.onRefresh),
          e.cleanup();
      }
    };
    Object.defineProperty(Qt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Xt,
    });
    const ei = Object.assign(Object.assign({}, Xt), {
        key: "t",
        showOnStart: !0,
        parentEl: null,
      }),
      ti = "is-masked",
      ii = "aria-hidden";
    class ni extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      get isEnabled() {
        const e = this.ref;
        return e && !e.isDisabled();
      }
      get isHidden() {
        return this.hidden;
      }
      onClick(e, t) {
        t.stopPropagation();
      }
      onCreateSlide(e, t) {
        var i, n, s;
        const o =
            (null ===
              (s =
                null ===
                  (n =
                    null === (i = this.instance) || void 0 === i
                      ? void 0
                      : i.carousel) || void 0 === n
                  ? void 0
                  : n.slides[t.index]) || void 0 === s
              ? void 0
              : s.type) || "",
          r = t.el;
        if (r && o) {
          let e = `for-${o}`;
          ["video", "youtube", "vimeo", "html5video"].includes(o) &&
            (e += " for-video"),
            Fe(r, e);
        }
      }
      onInit() {
        var e;
        const t = this,
          i = t.instance,
          n = i.carousel;
        if (t.ref || !n) return;
        const s = t.option("parentEl") || i.footer || i.container;
        if (!s) return;
        const o = Me({}, t.options, {
          parentEl: s,
          classes: { container: "f-thumbs fancybox__thumbs" },
          Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
          on: {
            ready: (e) => {
              const i = e.container;
              i &&
                this.hidden &&
                (t.refresh(),
                (i.style.transition = "none"),
                t.hide(),
                i.offsetHeight,
                queueMicrotask(() => {
                  (i.style.transition = ""), t.show();
                }));
            },
          },
        });
        (o.Carousel = o.Carousel || {}),
          (o.Carousel.on = Me(
            (null === (e = t.options.Carousel) || void 0 === e
              ? void 0
              : e.on) || {},
            { click: this.onClick, createSlide: this.onCreateSlide }
          )),
          (n.options.Thumbs = o),
          n.attachPlugins({ Thumbs: Qt }),
          (t.ref = n.plugins.Thumbs),
          t.option("showOnStart") ||
            ((t.ref.state = Yt.Hidden), (t.hidden = !0));
      }
      onResize() {
        var e;
        const t =
          null === (e = this.ref) || void 0 === e ? void 0 : e.container;
        t && (t.style.maxHeight = "");
      }
      onKeydown(e, t) {
        const i = this.option("key");
        i && i === t && this.toggle();
      }
      toggle() {
        const e = this.ref;
        if (e && !e.isDisabled())
          return e.state === Yt.Hidden
            ? ((e.state = Yt.Init), void e.build())
            : void (this.hidden ? this.show() : this.hide());
      }
      show() {
        const e = this.ref;
        if (!e || e.isDisabled()) return;
        const t = e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.removeAttribute(ii),
          t.classList.remove(ti),
          (this.hidden = !1));
      }
      hide() {
        const e = this.ref,
          t = e && e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.classList.add(ti),
          t.setAttribute(ii, "true")),
          (this.hidden = !0);
      }
      refresh() {
        const e = this.ref;
        if (!e || !e.state) return;
        const t = e.container,
          i = (null == t ? void 0 : t.firstChild) || null;
        t &&
          i &&
          i.childNodes.length &&
          (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.state === yt.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
          t.on("resize", e.onResize),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        var e;
        const t = this,
          i = t.instance;
        i.off("Carousel.init", t.onInit),
          i.off("resize", t.onResize),
          i.off("keydown", t.onKeydown),
          null === (e = i.carousel) ||
            void 0 === e ||
            e.detachPlugins(["Thumbs"]),
          (t.ref = null);
      }
    }
    Object.defineProperty(ni, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ei,
    });
    const si = {
      panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: { panX: -100 },
      },
      panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: { panX: 100 },
      },
      panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: { panY: -100 },
      },
      panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: { panY: 100 },
      },
      zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn",
      },
      zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut",
      },
      toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom",
      },
      toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom",
      },
      iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom",
      },
      rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW",
      },
      rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW",
      },
      flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX",
      },
      flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY",
      },
      fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX",
      },
      fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY",
      },
      reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset",
      },
      toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS",
      },
    };
    var oi;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Disabled = 2)] = "Disabled");
    })(oi || (oi = {}));
    const ri = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      ai = "has-toolbar",
      li = "fancybox__toolbar";
    class ci extends et {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oi.Init,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onReady(e) {
        var t;
        if (!e.carousel) return;
        let i = this.option("display"),
          n = this.option("absolute"),
          s = this.option("enabled");
        if ("auto" === s) {
          const e = this.instance.carousel;
          let t = 0;
          if (e)
            for (const i of e.slides) (i.panzoom || "image" === i.type) && t++;
          t || (s = !1);
        }
        s || (i = void 0);
        let o = 0;
        const r = { left: [], middle: [], right: [] };
        if (i)
          for (const e of ["left", "middle", "right"])
            for (const n of i[e]) {
              const i = this.createEl(n);
              i && (null === (t = r[e]) || void 0 === t || t.push(i), o++);
            }
        let a = null;
        if ((o && (a = this.createContainer()), a)) {
          for (const [e, t] of Object.entries(r)) {
            const i = document.createElement("div");
            Fe(i, li + "__column is-" + e);
            for (const e of t) i.appendChild(e);
            "auto" !== n || "middle" !== e || t.length || (n = !0),
              a.appendChild(i);
          }
          !0 === n && Fe(a, "is-absolute"),
            (this.state = oi.Ready),
            this.onRefresh();
        } else this.state = oi.Disabled;
      }
      onClick(e) {
        var t, i;
        const n = this.instance,
          s = n.getSlide(),
          o = null == s ? void 0 : s.panzoom,
          r = e.target,
          a = r && Re(r) ? r.dataset : null;
        if (!a) return;
        if (void 0 !== a.fancyboxToggleThumbs)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void (null === (t = n.plugins.Thumbs) || void 0 === t || t.toggle())
          );
        if (void 0 !== a.fancyboxToggleFullscreen)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void this.instance.toggleFullscreen()
          );
        if (void 0 !== a.fancyboxToggleSlideshow) {
          e.preventDefault(), e.stopPropagation();
          const t =
            null === (i = n.carousel) || void 0 === i
              ? void 0
              : i.plugins.Autoplay;
          let s = t.isActive;
          return (
            o && "mousemove" === o.panMode && !s && o.reset(),
            void (s ? t.stop() : t.start())
          );
        }
        const l = a.panzoomAction,
          c = a.panzoomChange;
        if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
          let t = {};
          try {
            t = JSON.parse(c);
          } catch (e) {}
          o && o.applyChange(t);
        } else l && o && o[l] && o[l]();
      }
      onChange() {
        this.onRefresh();
      }
      onRefresh() {
        if (this.instance.isClosing()) return;
        const e = this.container;
        if (!e) return;
        const t = this.instance.getSlide();
        if (!t || t.state !== wt.Ready) return;
        const i = t && !t.error && t.panzoom;
        for (const t of e.querySelectorAll("[data-panzoom-action]"))
          i
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        let n = i && i.canZoomIn(),
          s = i && i.canZoomOut();
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          s
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          s || n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
          const e = t.querySelector("g");
          e && (e.style.display = n ? "" : "none");
        }
      }
      onDone(e, t) {
        var i;
        null === (i = t.panzoom) ||
          void 0 === i ||
          i.on("afterTransform", () => {
            this.instance.isCurrentSlide(t) && this.onRefresh();
          }),
          this.instance.isCurrentSlide(t) && this.onRefresh();
      }
      createContainer() {
        const e = this.instance.container;
        if (!e) return null;
        const t = this.option("parentEl") || e;
        let i = t.querySelector("." + li);
        return (
          i || ((i = document.createElement("div")), Fe(i, li), t.prepend(i)),
          i.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0,
          }),
          e && Fe(e, ai),
          (this.container = i),
          i
        );
      }
      createEl(e) {
        const t = this.instance,
          i = t.carousel;
        if (!i) return null;
        if ("toggleFS" === e) return null;
        if ("fullscreen" === e && !vt()) return null;
        let n = null;
        const s = i.slides.length || 0;
        let o = 0,
          r = 0;
        for (const e of i.slides)
          (e.panzoom || "image" === e.type) && o++,
            ("image" === e.type || e.downloadSrc) && r++;
        if (s < 2 && ["infobar", "prev", "next"].includes(e)) return n;
        if (void 0 !== si[e] && !o) return null;
        if ("download" === e && !r) return null;
        if ("thumbs" === e) {
          const e = t.plugins.Thumbs;
          if (!e || !e.isEnabled) return null;
        }
        if ("slideshow" === e && (!i.plugins.Autoplay || s < 2)) return null;
        if (void 0 !== si[e]) {
          const t = si[e];
          (n = document.createElement("button")),
            n.setAttribute(
              "title",
              this.instance.localize(`{{${e.toUpperCase()}}}`)
            ),
            Fe(n, "f-button"),
            t.action && (n.dataset.panzoomAction = t.action),
            t.change && (n.dataset.panzoomChange = JSON.stringify(t.change)),
            n.appendChild(be(this.instance.localize(t.icon)));
        } else {
          const t = (this.option("items") || [])[e];
          t &&
            ((n = be(this.instance.localize(t.tpl))),
            "function" == typeof t.click &&
              n.addEventListener("click", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  "function" == typeof t.click && t.click.call(this, this, e);
              }));
        }
        const a = null == n ? void 0 : n.querySelector("svg");
        if (a)
          for (const [e, t] of Object.entries(ri))
            a.getAttribute(e) || a.setAttribute(e, String(t));
        return n;
      }
      removeContainer() {
        const e = this.container;
        e && e.remove(), (this.container = null), (this.state = oi.Disabled);
        const t = this.instance.container;
        t && Ne(t, ai);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.initSlides", e.onReady),
          t.on("done", e.onDone),
          t.on(["reveal", "Carousel.change"], e.onChange),
          e.onReady(e.instance);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.initSlides", e.onReady),
          t.off("done", e.onDone),
          t.off(["reveal", "Carousel.change"], e.onChange),
          e.removeContainer();
      }
    }
    Object.defineProperty(ci, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        absolute: "auto",
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
        },
        enabled: "auto",
        items: {
          infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
          },
          download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
          },
          prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
          },
          next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
          },
          slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
          },
          fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
          },
          thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
          },
          close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
          },
        },
        parentEl: null,
      },
    });
    const di = {
        Hash: class extends et {
          onReady() {
            St = !1;
          }
          onChange(e) {
            Ct && clearTimeout(Ct);
            const { hash: t } = Tt(),
              { hash: i } = Pt(),
              n = e.isOpeningSlide(e.getSlide());
            n && (xt = i === t ? "" : i),
              t &&
                t !== i &&
                (Ct = setTimeout(() => {
                  try {
                    if (e.state === yt.Ready) {
                      let e = "replaceState";
                      n && !Et && ((e = "pushState"), (Et = !0)),
                        window.history[e](
                          {},
                          document.title,
                          window.location.pathname + window.location.search + t
                        );
                    }
                  } catch (e) {}
                }, 300));
          }
          onClose(e) {
            if ((Ct && clearTimeout(Ct), !St && Et))
              return (Et = !1), (St = !1), void window.history.back();
            if (!St)
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname + window.location.search + (xt || "")
                );
              } catch (e) {}
          }
          attach() {
            const e = this.instance;
            e.on("ready", this.onReady),
              e.on(["Carousel.ready", "Carousel.change"], this.onChange),
              e.on("close", this.onClose);
          }
          detach() {
            const e = this.instance;
            e.off("ready", this.onReady),
              e.off(["Carousel.ready", "Carousel.change"], this.onChange),
              e.off("close", this.onClose);
          }
          static parseURL() {
            return Pt();
          }
          static startFromUrl() {
            Mt();
          }
          static destroy() {
            window.removeEventListener("hashchange", Lt, !1);
          }
        },
        Html: jt,
        Images: _t,
        Slideshow: Gt,
        Thumbs: ni,
        Toolbar: ci,
      },
      ui = "with-fancybox",
      hi = "hide-scrollbar",
      pi = "--fancybox-scrollbar-compensate",
      fi = "--fancybox-body-margin",
      mi = "aria-hidden",
      gi = "is-using-tab",
      vi = "is-animated",
      bi = "is-compact",
      yi = "is-loading",
      wi = "is-opening",
      xi = "has-caption",
      Si = "disabled",
      Ei = "tabindex",
      Ci = "download",
      Ti = "href",
      Pi = "src",
      Mi = (e) => "string" == typeof e,
      Oi = function () {
        var e = window.getSelection();
        return !!e && "Range" === e.type;
      };
    let Li,
      ki = null,
      Ai = null,
      _i = 0,
      zi = 0,
      Ii = 0,
      Di = 0;
    const $i = new Map();
    let Ri = 0;
    class Ni extends ke {
      get isIdle() {
        return this.idle;
      }
      get isCompact() {
        return this.option("compact");
      }
      constructor(e = [], t = {}, i = {}) {
        super(t),
          Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yt.Init,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Li || (Li = vt()),
          (this.id = t.id || ++Ri),
          $i.set(this.id, this),
          (this.userSlides = e),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.init();
          });
      }
      init() {
        if (this.state === yt.Destroy) return;
        (this.state = yt.Init),
          this.attachPlugins(
            Object.assign(Object.assign({}, Ni.Plugins), this.userPlugins)
          ),
          this.emit("init"),
          this.emit("attachPlugins"),
          !0 === this.option("hideScrollbar") &&
            (() => {
              if (!pt) return;
              const e = document,
                t = e.body,
                i = e.documentElement;
              if (t.classList.contains(hi)) return;
              let n = window.innerWidth - i.getBoundingClientRect().width;
              const s = parseFloat(window.getComputedStyle(t).marginRight);
              n < 0 && (n = 0),
                i.style.setProperty(pi, `${n}px`),
                s && t.style.setProperty(fi, `${s}px`),
                t.classList.add(hi);
            })(),
          this.initLayout(),
          this.scale();
        const e = () => {
          this.initCarousel(this.userSlides),
            (this.state = yt.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container && this.container.setAttribute(mi, "false");
            }, 16);
        };
        this.option("Fullscreen.autoStart") && Li && !Li.isFullscreen()
          ? Li.request()
              .then(() => {
                (this.startedFs = !0), e();
              })
              .catch(() => e())
          : e();
      }
      initLayout() {
        var e, t;
        const i = this.option("parentEl") || document.body,
          n = be(this.localize(this.option("tpl.main") || ""));
        if (n) {
          if (
            (n.setAttribute("id", `fancybox-${this.id}`),
            n.setAttribute("aria-label", this.localize("{{MODAL}}")),
            n.classList.toggle(bi, this.isCompact),
            Fe(n, this.option("mainClass") || ""),
            Fe(n, wi),
            (this.container = n),
            (this.footer = n.querySelector(".fancybox__footer")),
            i.appendChild(n),
            Fe(document.documentElement, ui),
            (ki && Ai) ||
              ((ki = document.createElement("span")),
              Fe(ki, "fancybox-focus-guard"),
              ki.setAttribute(Ei, "0"),
              ki.setAttribute(mi, "true"),
              ki.setAttribute("aria-label", "Focus guard"),
              (Ai = ki.cloneNode()),
              null === (e = n.parentElement) ||
                void 0 === e ||
                e.insertBefore(ki, n),
              null === (t = n.parentElement) || void 0 === t || t.append(Ai)),
            n.addEventListener("mousedown", (e) => {
              (_i = e.pageX), (zi = e.pageY), Ne(n, gi);
            }),
            this.option("closeExisting"))
          )
            for (const e of $i.values()) e.id !== this.id && e.close();
          else
            this.option("animated") &&
              (Fe(n, vi),
              setTimeout(() => {
                this.isClosing() || Ne(n, vi);
              }, 350));
          this.emit("initLayout");
        }
      }
      initCarousel(e) {
        const t = this.container;
        if (!t) return;
        const i = t.querySelector(".fancybox__carousel");
        if (!i) return;
        const n = (this.carousel = new ut(
          i,
          Me(
            {},
            {
              slides: e,
              transition: "fade",
              Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y",
              },
              Dots: !1,
              Navigation: {
                classes: {
                  container: "fancybox__nav",
                  button: "f-button",
                  isNext: "is-next",
                  isPrev: "is-prev",
                },
              },
              initialPage: this.option("startIndex"),
              l10n: this.option("l10n"),
            },
            this.option("Carousel") || {}
          )
        ));
        n.on("*", (e, t, ...i) => {
          this.emit(`Carousel.${t}`, e, ...i);
        }),
          n.on(["ready", "change"], () => {
            this.manageCaption();
          }),
          this.on("Carousel.removeSlide", (e, t, i) => {
            this.clearContent(i), (i.state = void 0);
          }),
          n.on("Panzoom.touchStart", () => {
            var e, t;
            this.isCompact || this.endIdle(),
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.closest(".f-thumbs")) &&
                (null === (t = this.container) || void 0 === t || t.focus());
          }),
          n.on("settle", () => {
            this.idleTimer ||
              this.isCompact ||
              !this.option("idle") ||
              this.setIdle(),
              this.option("autoFocus") && !this.isClosing && this.checkFocus();
          }),
          this.option("dragToClose") &&
            (n.on("Panzoom.afterTransform", (e, t) => {
              const i = this.getSlide();
              if (i && ge(i.el)) return;
              const n = this.container;
              if (n) {
                const e = Math.abs(t.current.f),
                  i =
                    e < 1
                      ? ""
                      : Math.max(
                          0.5,
                          Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
                        );
                n.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                  n.style.setProperty("--fancybox-opacity", i + "");
              }
            }),
            n.on("Panzoom.touchEnd", (e, t, i) => {
              var n;
              const s = this.getSlide();
              if (s && ge(s.el)) return;
              if (
                t.isMobile &&
                document.activeElement &&
                -1 !==
                  ["TEXTAREA", "INPUT"].indexOf(
                    null === (n = document.activeElement) || void 0 === n
                      ? void 0
                      : n.nodeName
                  )
              )
                return;
              const o = Math.abs(t.dragOffset.y);
              "y" === t.lockedAxis &&
                (o >= 200 || (o >= 50 && t.dragOffset.time < 300)) &&
                (i && i.cancelable && i.preventDefault(),
                this.close(
                  i,
                  "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")
                ));
            })),
          n.on("change", (e) => {
            var t;
            let i =
              null === (t = this.getSlide()) || void 0 === t
                ? void 0
                : t.triggerEl;
            if (i) {
              const t = new CustomEvent("slideTo", {
                bubbles: !0,
                cancelable: !0,
                detail: e.page,
              });
              i.dispatchEvent(t);
            }
          }),
          n.on(["refresh", "change"], (e) => {
            const t = this.container;
            if (!t) return;
            for (const i of t.querySelectorAll("[data-fancybox-current-index]"))
              i.innerHTML = e.page + 1;
            for (const i of t.querySelectorAll("[data-fancybox-count]"))
              i.innerHTML = e.pages.length;
            if (!e.isInfinite) {
              for (const i of t.querySelectorAll("[data-fancybox-next]"))
                e.page < e.pages.length - 1
                  ? (i.removeAttribute(Si), i.removeAttribute(Ei))
                  : (i.setAttribute(Si, ""), i.setAttribute(Ei, "-1"));
              for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                e.page > 0
                  ? (i.removeAttribute(Si), i.removeAttribute(Ei))
                  : (i.setAttribute(Si, ""), i.setAttribute(Ei, "-1"));
            }
            const i = this.getSlide();
            if (!i) return;
            let n = i.downloadSrc || "";
            n || "image" !== i.type || i.error || !Mi(i[Pi]) || (n = i[Pi]);
            for (const e of t.querySelectorAll("[data-fancybox-download]")) {
              const t = i.downloadFilename;
              n
                ? (e.removeAttribute(Si),
                  e.removeAttribute(Ei),
                  e.setAttribute(Ti, n),
                  e.setAttribute(Ci, t || n),
                  e.setAttribute("target", "_blank"))
                : (e.setAttribute(Si, ""),
                  e.setAttribute(Ei, "-1"),
                  e.removeAttribute(Ti),
                  e.removeAttribute(Ci));
            }
          }),
          this.emit("initCarousel");
      }
      attachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        t.addEventListener("click", e.onClick, { passive: !1, capture: !1 }),
          t.addEventListener("wheel", e.onWheel, { passive: !1, capture: !1 }),
          document.addEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0,
          }),
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.addEventListener("mousemove", e.onMousemove),
          e.option("trapFocus") &&
            document.addEventListener("focus", e.onFocus, !0),
          window.addEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.addEventListener("scroll", e.onResize),
          i.addEventListener("resize", e.onResize));
      }
      detachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        document.removeEventListener("keydown", e.onKeydown, {
          passive: !1,
          capture: !0,
        }),
          t.removeEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1,
          }),
          t.removeEventListener("click", e.onClick, {
            passive: !1,
            capture: !1,
          }),
          document.removeEventListener("mousemove", e.onMousemove),
          window.removeEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.removeEventListener("resize", e.onResize),
          i.removeEventListener("scroll", e.onResize)),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.removeEventListener("focus", e.onFocus, !0);
      }
      scale() {
        const e = this.container;
        if (!e) return;
        const t = window.visualViewport,
          i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
        let n = "",
          s = "",
          o = "";
        if (t && i > 1) {
          let e = `${t.offsetLeft}px`,
            r = `${t.offsetTop}px`;
          (n = t.width * i + "px"),
            (s = t.height * i + "px"),
            (o = `translate3d(${e}, ${r}, 0) scale(${1 / i})`);
        }
        (e.style.transform = o), (e.style.width = n), (e.style.height = s);
      }
      onClick(e) {
        var t;
        const { container: i, isCompact: n } = this;
        if (!i || this.isClosing()) return;
        !n && this.option("idle") && this.resetIdle();
        const s = e.composedPath()[0];
        if (
          s.closest(".fancybox-spinner") ||
          s.closest("[data-fancybox-close]")
        )
          return e.preventDefault(), void this.close(e);
        if (s.closest("[data-fancybox-prev]"))
          return e.preventDefault(), void this.prev();
        if (s.closest("[data-fancybox-next]"))
          return e.preventDefault(), void this.next();
        if ("click" === e.type && 0 === e.detail) return;
        if (Math.abs(e.pageX - _i) > 30 || Math.abs(e.pageY - zi) > 30) return;
        const o = document.activeElement;
        if (Oi() && o && i.contains(o)) return;
        if (
          n &&
          "image" ===
            (null === (t = this.getSlide()) || void 0 === t ? void 0 : t.type)
        )
          return void (this.clickTimer
            ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
            : (this.clickTimer = setTimeout(() => {
                this.toggleIdle(), (this.clickTimer = null);
              }, 350)));
        if ((this.emit("click", e), e.defaultPrevented)) return;
        let r = !1;
        if (s.closest(".fancybox__content")) {
          if (o) {
            if (o.closest("[contenteditable]")) return;
            s.matches(mt) || o.blur();
          }
          if (Oi()) return;
          r = this.option("contentClick");
        } else
          s.closest(".fancybox__carousel") &&
            !s.matches(mt) &&
            (r = this.option("backdropClick"));
        "close" === r
          ? (e.preventDefault(), this.close(e))
          : "next" === r
          ? (e.preventDefault(), this.next())
          : "prev" === r && (e.preventDefault(), this.prev());
      }
      onWheel(e) {
        const t = e.target;
        let i = this.option("wheel", e);
        t.closest(".fancybox__thumbs") && (i = "slide");
        const n = "slide" === i,
          s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
            e,
            t
          ) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }),
          o = Math.max(-1, Math.min(1, s)),
          r = Date.now();
        this.pwt && r - this.pwt < 300
          ? n && e.preventDefault()
          : ((this.pwt = r),
            this.emit("wheel", e, o),
            e.defaultPrevented ||
              ("close" === i
                ? (e.preventDefault(), this.close(e))
                : "slide" === i &&
                  (ve(t) ||
                    (e.preventDefault(), this[o > 0 ? "prev" : "next"]()))));
      }
      onScroll() {
        window.scrollTo(Ii, Di);
      }
      onKeydown(e) {
        if (!this.isTopmost()) return;
        this.isCompact ||
          !this.option("idle") ||
          this.isClosing() ||
          this.resetIdle();
        const t = e.key,
          i = this.option("keyboard");
        if (!i) return;
        const n = e.composedPath()[0],
          s = document.activeElement && document.activeElement.classList,
          o =
            (s && s.contains("f-button")) ||
            n.dataset.carouselPage ||
            n.dataset.carouselIndex;
        if (
          "Escape" !== t &&
          !o &&
          Re(n) &&
          (n.isContentEditable ||
            -1 !==
              ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                n.nodeName
              ))
        )
          return;
        if (
          ("Tab" === e.key ? Fe(this.container, gi) : Ne(this.container, gi),
          e.ctrlKey || e.altKey || e.shiftKey)
        )
          return;
        this.emit("keydown", t, e);
        const r = i[t];
        r && "function" == typeof this[r] && (e.preventDefault(), this[r]());
      }
      onResize() {
        const e = this.container;
        if (!e) return;
        const t = this.isCompact;
        e.classList.toggle(bi, t),
          this.manageCaption(this.getSlide()),
          this.isCompact ? this.clearIdle() : this.endIdle(),
          this.scale(),
          this.emit("resize");
      }
      onFocus(e) {
        this.isTopmost() && this.checkFocus(e);
      }
      onMousemove(e) {
        (this.prevMouseMoveEvent = e),
          !this.isCompact && this.option("idle") && this.resetIdle();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState
          ? this.checkFocus()
          : this.endIdle();
      }
      manageCloseBtn(e) {
        const t = this.optionFor(e, "closeButton") || !1;
        if ("auto" === t) {
          const e = this.plugins.Toolbar;
          if (e && e.state === oi.Ready) return;
        }
        if (!t) return;
        if (!e.contentEl || e.closeBtnEl) return;
        const i = this.option("tpl.closeButton");
        if (i) {
          const t = be(this.localize(i));
          (e.closeBtnEl = e.contentEl.appendChild(t)),
            e.el && Fe(e.el, "has-close-btn");
        }
      }
      manageCaption(e = void 0) {
        var t, i;
        const n = "fancybox__caption",
          s = this.container;
        if (!s) return;
        Ne(s, xi);
        const o = this.isCompact || this.option("commonCaption"),
          r = !o;
        if (
          (this.caption && this.stop(this.caption),
          r && this.caption && (this.caption.remove(), (this.caption = null)),
          o && !this.caption)
        )
          for (const e of (null === (t = this.carousel) || void 0 === t
            ? void 0
            : t.slides) || [])
            e.captionEl &&
              (e.captionEl.remove(),
              (e.captionEl = void 0),
              Ne(e.el, xi),
              null === (i = e.el) ||
                void 0 === i ||
                i.removeAttribute("aria-labelledby"));
        if ((e || (e = this.getSlide()), !e || (o && !this.isCurrentSlide(e))))
          return;
        const a = e.el;
        let l = this.optionFor(e, "caption", "");
        if (!l)
          return void (
            o &&
            this.caption &&
            this.animate(this.caption, "f-fadeOut", () => {
              this.caption && (this.caption.innerHTML = "");
            })
          );
        let c = null;
        if (r) {
          if (((c = e.captionEl || null), a && !c)) {
            const t = n + `_${this.id}_${e.index}`;
            (c = document.createElement("div")),
              Fe(c, n),
              c.setAttribute("id", t),
              (e.captionEl = a.appendChild(c)),
              Fe(a, xi),
              a.setAttribute("aria-labelledby", t);
          }
        } else
          (c = this.caption),
            c || (c = s.querySelector("." + n)),
            c ||
              ((c = document.createElement("div")),
              (c.dataset.fancyboxCaption = ""),
              Fe(c, n),
              (this.footer || s).prepend(c)),
            Fe(s, xi),
            (this.caption = c);
        c &&
          ((c.innerHTML = ""),
          Mi(l) || "number" == typeof l
            ? (c.innerHTML = l + "")
            : l instanceof HTMLElement && c.appendChild(l));
      }
      checkFocus(e) {
        this.focus(e);
      }
      focus(e) {
        var t;
        if (this.ignoreFocusChange) return;
        const i = document.activeElement || null,
          n = (null == e ? void 0 : e.target) || null,
          s = this.container,
          o =
            null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport;
        if (!s || !o) return;
        if (!e && i && s.contains(i)) return;
        const r = this.getSlide(),
          a = r && r.state === wt.Ready ? r.el : null;
        if (!a || a.contains(i) || s === i) return;
        e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0);
        const l = Array.from(s.querySelectorAll(mt));
        let c = [],
          d = null;
        for (let e of l) {
          const t = !e.offsetParent || !!e.closest('[aria-hidden="true"]'),
            i = a && a.contains(e),
            n = !o.contains(e);
          if (e === s || ((i || n) && !t)) {
            c.push(e);
            const t = e.dataset.origTabindex;
            void 0 !== t && t && (e.tabIndex = parseFloat(t)),
              e.removeAttribute("data-orig-tabindex"),
              (!e.hasAttribute("autoFocus") && d) || (d = e);
          } else {
            const t =
              void 0 === e.dataset.origTabindex
                ? e.getAttribute("tabindex") || ""
                : e.dataset.origTabindex;
            t && (e.dataset.origTabindex = t), (e.tabIndex = -1);
          }
        }
        let u = null;
        e
          ? (!n || c.indexOf(n) < 0) &&
            ((u = d || s),
            c.length &&
              (i === Ai
                ? (u = c[0])
                : (this.lastFocus !== s && i !== ki) || (u = c[c.length - 1])))
          : (u = r && "image" === r.type ? s : d || s),
          u && gt(u),
          (this.lastFocus = document.activeElement),
          (this.ignoreFocusChange = !1);
      }
      next() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slideNext();
      }
      prev() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slidePrev();
      }
      jumpTo(...e) {
        this.carousel && this.carousel.slideTo(...e);
      }
      isTopmost() {
        var e;
        return (
          (null === (e = Ni.getInstance()) || void 0 === e ? void 0 : e.id) ==
          this.id
        );
      }
      animate(e = null, t = "", i) {
        if (!e || !t) return void (i && i());
        this.stop(e);
        const n = (s) => {
          s.target === e &&
            e.dataset.animationName &&
            (e.removeEventListener("animationend", n),
            delete e.dataset.animationName,
            i && i(),
            Ne(e, t));
        };
        (e.dataset.animationName = t),
          e.addEventListener("animationend", n),
          Fe(e, t);
      }
      stop(e) {
        e &&
          e.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: !1,
              cancelable: !0,
              currentTarget: e,
            })
          );
      }
      setContent(e, t = "", i = !0) {
        if (this.isClosing()) return;
        const n = e.el;
        if (!n) return;
        let s = null;
        if (
          (Re(t)
            ? (s = t)
            : ((s = be(t + "")),
              Re(s) ||
                ((s = document.createElement("div")), (s.innerHTML = t + ""))),
          ["img", "picture", "iframe", "video", "audio"].includes(
            s.nodeName.toLowerCase()
          ))
        ) {
          const e = document.createElement("div");
          e.appendChild(s), (s = e);
        }
        Re(s) && e.filter && !e.error && (s = s.querySelector(e.filter)),
          s && Re(s)
            ? (Fe(s, "fancybox__content"),
              e.id && s.setAttribute("id", e.id),
              ("none" !== s.style.display &&
                "none" !== getComputedStyle(s).getPropertyValue("display")) ||
                (s.style.display =
                  e.display || this.option("defaultDisplay") || "flex"),
              n.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
              n.prepend(s),
              (e.contentEl = s),
              i && this.revealContent(e),
              this.manageCloseBtn(e),
              this.manageCaption(e))
            : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      revealContent(e, t) {
        const i = e.el,
          n = e.contentEl;
        i &&
          n &&
          (this.emit("reveal", e),
          this.hideLoading(e),
          (e.state = wt.Opening),
          (t = this.isOpeningSlide(e)
            ? void 0 === t
              ? this.optionFor(e, "showClass")
              : t
            : "f-fadeIn")
            ? this.animate(n, t, () => {
                this.done(e);
              })
            : this.done(e));
      }
      done(e) {
        this.isClosing() ||
          ((e.state = wt.Ready),
          this.emit("done", e),
          Fe(e.el, "is-done"),
          this.isCurrentSlide(e) &&
            this.option("autoFocus") &&
            queueMicrotask(() => {
              var t;
              null === (t = e.panzoom) || void 0 === t || t.updateControls(),
                this.option("autoFocus") && this.focus();
            }),
          this.isOpeningSlide(e) &&
            (Ne(this.container, wi),
            !this.isCompact && this.option("idle") && this.setIdle()));
      }
      isCurrentSlide(e) {
        const t = this.getSlide();
        return !(!e || !t) && t.index === e.index;
      }
      isOpeningSlide(e) {
        var t, i;
        return (
          null ===
            (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.prevPage) &&
          e &&
          e.index ===
            (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
        );
      }
      showLoading(e) {
        e.state = wt.Loading;
        const t = e.el;
        t &&
          (Fe(t, yi),
          this.emit("loading", e),
          e.spinnerEl ||
            setTimeout(() => {
              if (!this.isClosing() && !e.spinnerEl && e.state === wt.Loading) {
                let i = be($e);
                Fe(i, "fancybox-spinner"),
                  (e.spinnerEl = i),
                  t.prepend(i),
                  this.animate(i, "f-fadeIn");
              }
            }, 250));
      }
      hideLoading(e) {
        const t = e.el;
        if (!t) return;
        const i = e.spinnerEl;
        this.isClosing()
          ? null == i || i.remove()
          : (Ne(t, yi),
            i &&
              this.animate(i, "f-fadeOut", () => {
                i.remove();
              }),
            e.state === wt.Loading &&
              (this.emit("loaded", e), (e.state = wt.Ready)));
      }
      setError(e, t) {
        if (this.isClosing()) return;
        const i = new Event("error", { bubbles: !0, cancelable: !0 });
        if ((this.emit("error", i, e), i.defaultPrevented)) return;
        (e.error = t), this.hideLoading(e), this.clearContent(e);
        const n = document.createElement("div");
        n.classList.add("fancybox-error"),
          (n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
          this.setContent(e, n);
      }
      clearContent(e) {
        if (void 0 === e.state) return;
        this.emit("clearContent", e),
          e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0));
        const t = e.el;
        t &&
          (Ne(t, "has-error"),
          Ne(t, "has-unknown"),
          Ne(t, `has-${e.type || "unknown"}`)),
          e.closeBtnEl && e.closeBtnEl.remove(),
          (e.closeBtnEl = void 0),
          e.captionEl && e.captionEl.remove(),
          (e.captionEl = void 0),
          e.spinnerEl && e.spinnerEl.remove(),
          (e.spinnerEl = void 0);
      }
      getSlide() {
        var e;
        const t = this.carousel;
        return (
          (null ===
            (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
          void 0 === e
            ? void 0
            : e.slides[0]) || void 0
        );
      }
      close(e, t) {
        if (this.isClosing()) return;
        const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
        if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
        e && e.cancelable && (e.preventDefault(), e.stopPropagation());
        const n = () => {
          this.proceedClose(e, t);
        };
        this.startedFs && Li && Li.isFullscreen()
          ? Promise.resolve(Li.exit()).then(() => n())
          : n();
      }
      clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
      }
      setIdle(e = !1) {
        const t = () => {
          this.clearIdle(),
            (this.idle = !0),
            Fe(this.container, "is-idle"),
            this.emit("setIdle");
        };
        if ((this.clearIdle(), !this.isClosing()))
          if (e) t();
          else {
            const e = this.option("idle");
            e && (this.idleTimer = setTimeout(t, e));
          }
      }
      endIdle() {
        this.clearIdle(),
          this.idle &&
            !this.isClosing() &&
            ((this.idle = !1),
            Ne(this.container, "is-idle"),
            this.emit("endIdle"));
      }
      resetIdle() {
        this.endIdle(), this.setIdle();
      }
      toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
      toggleFullscreen() {
        Li &&
          (Li.isFullscreen()
            ? Li.exit()
            : Li.request().then(() => {
                this.startedFs = !0;
              }));
      }
      isClosing() {
        return [yt.Closing, yt.CustomClosing, yt.Destroy].includes(this.state);
      }
      proceedClose(e, t) {
        var i, n;
        (this.state = yt.Closing), this.clearIdle(), this.detachEvents();
        const s = this.container,
          o = this.carousel,
          r = this.getSlide(),
          a =
            r && this.option("placeFocusBack")
              ? r.triggerEl || this.option("triggerEl")
              : null;
        if (
          (a && (ht(a) ? gt(a) : a.focus()),
          s &&
            (Ne(s, wi),
            Fe(s, "is-closing"),
            s.setAttribute(mi, "true"),
            this.option("animated") && Fe(s, vi),
            (s.style.pointerEvents = "none")),
          o)
        ) {
          o.clearTransitions(),
            null === (i = o.panzoom) || void 0 === i || i.destroy(),
            null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
          for (const e of o.slides) {
            (e.state = wt.Closing), this.hideLoading(e);
            const t = e.contentEl;
            t && this.stop(t);
            const i = null == e ? void 0 : e.panzoom;
            i && (i.stop(), i.detachEvents(), i.detachObserver()),
              this.isCurrentSlide(e) || o.emit("removeSlide", e);
          }
        }
        (Ii = window.scrollX),
          (Di = window.scrollY),
          window.addEventListener("scroll", this.onScroll),
          this.emit("close", e),
          this.state !== yt.CustomClosing
            ? (void 0 === t && r && (t = this.optionFor(r, "hideClass")),
              t && r
                ? (this.animate(r.contentEl, t, () => {
                    o && o.emit("removeSlide", r);
                  }),
                  setTimeout(() => {
                    this.destroy();
                  }, 500))
                : this.destroy())
            : setTimeout(() => {
                this.destroy();
              }, 500);
      }
      destroy() {
        var e;
        if (this.state === yt.Destroy) return;
        window.removeEventListener("scroll", this.onScroll),
          (this.state = yt.Destroy),
          null === (e = this.carousel) || void 0 === e || e.destroy();
        const t = this.container;
        t && t.remove(), $i.delete(this.id);
        const i = Ni.getInstance();
        i
          ? i.focus()
          : (ki && (ki.remove(), (ki = null)),
            Ai && (Ai.remove(), (Ai = null)),
            Ne(document.documentElement, ui),
            (() => {
              if (!pt) return;
              const e = document,
                t = e.body;
              t.classList.remove(hi),
                t.style.setProperty(fi, ""),
                e.documentElement.style.setProperty(pi, "");
            })(),
            this.emit("destroy"));
      }
      static bind(e, t, i) {
        if (!pt) return;
        let n,
          s = "",
          o = {};
        if (
          (void 0 === e
            ? (n = document.body)
            : Mi(e)
            ? ((n = document.body),
              (s = e),
              "object" == typeof t && (o = t || {}))
            : ((n = e),
              Mi(t) && (s = t),
              "object" == typeof i && (o = i || {})),
          !n || !Re(n))
        )
          return;
        s = s || "[data-fancybox]";
        const r = Ni.openers.get(n) || new Map();
        r.set(s, o),
          Ni.openers.set(n, r),
          1 === r.size && n.addEventListener("click", Ni.fromEvent);
      }
      static unbind(e, t) {
        let i,
          n = "";
        if (
          (Mi(e) ? ((i = document.body), (n = e)) : ((i = e), Mi(t) && (n = t)),
          !i)
        )
          return;
        const s = Ni.openers.get(i);
        s && n && s.delete(n),
          (n && s) ||
            (Ni.openers.delete(i),
            i.removeEventListener("click", Ni.fromEvent));
      }
      static destroy() {
        let e;
        for (; (e = Ni.getInstance()); ) e.destroy();
        for (const e of Ni.openers.keys())
          e.removeEventListener("click", Ni.fromEvent);
        Ni.openers = new Map();
      }
      static fromEvent(e) {
        if (e.defaultPrevented) return;
        if (e.button && 0 !== e.button) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        let t = e.composedPath()[0];
        const i = t.closest("[data-fancybox-trigger]");
        if (i) {
          const e = i.dataset.fancyboxTrigger || "",
            n = document.querySelectorAll(`[data-fancybox="${e}"]`),
            s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
          t = n[s] || t;
        }
        if (!(t && t instanceof Element)) return;
        let n, s, o, r;
        if (
          ([...Ni.openers].reverse().find(
            ([e, i]) =>
              !(
                !e.contains(t) ||
                ![...i].reverse().find(([i, a]) => {
                  let l = t.closest(i);
                  return !!l && ((n = e), (s = i), (o = l), (r = a), !0);
                })
              )
          ),
          !n || !s || !o)
        )
          return;
        (r = r || {}), e.preventDefault(), (t = o);
        let a = [],
          l = Me({}, bt, r);
        (l.event = e), (l.triggerEl = t), (l.delegate = i);
        const c = l.groupAll,
          d = l.groupAttr,
          u = d && t ? t.getAttribute(`${d}`) : "";
        if (
          ((!t || u || c) && (a = [].slice.call(n.querySelectorAll(s))),
          t &&
            !c &&
            (a = u ? a.filter((e) => e.getAttribute(`${d}`) === u) : [t]),
          !a.length)
        )
          return;
        const h = Ni.getInstance();
        return h && h.options.triggerEl && a.indexOf(h.options.triggerEl) > -1
          ? void 0
          : (t && (l.startIndex = a.indexOf(t)), Ni.fromNodes(a, l));
      }
      static fromSelector(e, t, i) {
        let n = null,
          s = "",
          o = {};
        if (
          (Mi(e)
            ? ((n = document.body),
              (s = e),
              "object" == typeof t && (o = t || {}))
            : e instanceof HTMLElement &&
              Mi(t) &&
              ((n = e), (s = t), "object" == typeof i && (o = i || {})),
          !n || !s)
        )
          return !1;
        const r = Ni.openers.get(n);
        return (
          !!r &&
          ((o = Me({}, r.get(s) || {}, o)),
          !!o && Ni.fromNodes(Array.from(n.querySelectorAll(s)), o))
        );
      }
      static fromNodes(e, t) {
        t = Me({}, bt, t || {});
        const i = [];
        for (const n of e) {
          const e = n.dataset || {},
            s =
              e[Pi] ||
              n.getAttribute(Ti) ||
              n.getAttribute("currentSrc") ||
              n.getAttribute(Pi) ||
              void 0;
          let o;
          const r = t.delegate;
          let a;
          r &&
            i.length === t.startIndex &&
            (o =
              r instanceof HTMLImageElement
                ? r
                : r.querySelector("img:not([aria-hidden])")),
            o ||
              (o =
                n instanceof HTMLImageElement
                  ? n
                  : n.querySelector("img:not([aria-hidden])")),
            o &&
              ((a = o.currentSrc || o[Pi] || void 0),
              !a &&
                o.dataset &&
                (a = o.dataset.lazySrc || o.dataset[Pi] || void 0));
          const l = {
            src: s,
            triggerEl: n,
            thumbEl: o,
            thumbElSrc: a,
            thumbSrc: a,
          };
          for (const t in e) {
            let i = e[t] + "";
            (i = "false" !== i && ("true" === i || i)), (l[t] = i);
          }
          i.push(l);
        }
        return new Ni(i, t);
      }
      static getInstance(e) {
        return e
          ? $i.get(e)
          : Array.from($i.values())
              .reverse()
              .find((e) => !e.isClosing() && e) || null;
      }
      static getSlide() {
        var e;
        return (
          (null === (e = Ni.getInstance()) || void 0 === e
            ? void 0
            : e.getSlide()) || null
        );
      }
      static show(e = [], t = {}) {
        return new Ni(e, t);
      }
      static next() {
        const e = Ni.getInstance();
        e && e.next();
      }
      static prev() {
        const e = Ni.getInstance();
        e && e.prev();
      }
      static close(e = !0, ...t) {
        if (e) for (const e of $i.values()) e.close(...t);
        else {
          const e = Ni.getInstance();
          e && e.close(...t);
        }
      }
    }
    Object.defineProperty(Ni, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.35",
    }),
      Object.defineProperty(Ni, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: bt,
      }),
      Object.defineProperty(Ni, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: di,
      }),
      Object.defineProperty(Ni, "openers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      });
    let Fi = 0;
    if (
      (window.addEventListener("scroll", function (e) {
        let t =
          self.pageYOffset ||
          (document.documentElement && document.documentElement.scrollTop) ||
          (document.body && document.body.scrollTop);
        t > Fi
          ? (document.body.classList.remove("scroll-top"),
            document.body.classList.add("scroll-down"))
          : (document.body.classList.add("scroll-top"),
            document.body.classList.remove("scroll-down")),
          (Fi = t);
      }),
      document.querySelector(".sidebar-filter"))
    ) {
      document.querySelectorAll(".filter-all-show").forEach((e) => {
        e.addEventListener("click", function () {
          e.closest(".filter-item").classList.contains("active")
            ? (e.closest(".filter-item").classList.remove("active"),
              (e.innerHTML = "Показать больше"))
            : (e.closest(".filter-item").classList.add("active"),
              (e.innerHTML = "Скрыть"));
        });
      }),
        document.addEventListener("click", function (e) {
          if ("INPUT" == e.target.tagName && "checkbox" == e.target.type) {
            let t = e.target.getBoundingClientRect(),
              i = e.target.closest(".filter-item").clientWidth,
              n = t.left + i,
              s = t.top;
            document
              .querySelector(".sidebar-btn-apply")
              .classList.add("active"),
              (document.querySelector(".sidebar-btn-apply").style.top =
                s + "px"),
              (document.querySelector(".sidebar-btn-apply").style.left =
                n + "px");
          }
        });
      let nn = document.getElementById("slider"),
        sn = document.getElementById("slider-input-start"),
        on = document.getElementById("slider-input-end"),
        rn = Number(sn.getAttribute("data-price-min")),
        an = Number(on.getAttribute("data-price-max"));
      fe.create(nn, {
        start: [rn, an],
        connect: !0,
        step: 1,
        range: { min: rn, max: an },
      }),
        nn.noUiSlider.on("update", function (e, t) {
          (sn.value = "от " + Math.ceil(e[0]) + "₽"),
            (on.value = "до " + Math.ceil(e[1]) + "₽");
        }),
        sn.addEventListener("focus", () => {
          sn.value = sn.value.replace(/[^+\d]/g, "");
        }),
        on.addEventListener("focus", () => {
          on.value = on.value.replace(/[^+\d]/g, "");
        }),
        sn.addEventListener("change", function () {
          nn.noUiSlider.set([this.value, null]);
        }),
        on.addEventListener("change", function () {
          nn.noUiSlider.set([null, this.value]);
        }),
        document
          .querySelector(".filter-button-mobile")
          .addEventListener("click", function () {
            document.body.classList.add("filter-active");
          }),
        document
          .querySelector(".filter-close-btn-mobile")
          .addEventListener("click", function () {
            document.body.classList.remove("filter-active");
          });
    }
    function Bi(e) {
      let t = 1;
      (e.querySelector(".product-event__count-size span").innerHTML =
        Number(1)),
        (e.querySelector(".product-event__sign-minus").onclick = function () {
          null !== e.closest(".product-main-event__button")
            ? ((t -= 1),
              document
                .querySelectorAll(
                  ".product-main-event__button .product-event__add"
                )
                .forEach((i) => {
                  (i.querySelector(
                    ".product-event__count-size span"
                  ).innerHTML = t),
                    e.querySelector(".product-event__count-size span")
                      .innerHTML <= 0 &&
                      (i.classList.remove("active"),
                      (i.querySelector(
                        ".product-event__count-size span"
                      ).innerHTML = Number(0)));
                }))
            : ((e.querySelector(".product-event__count-size span").innerHTML =
                Number(
                  e.querySelector(".product-event__count-size span").innerHTML
                ) - 1),
              e.querySelector(".product-event__count-size span").innerHTML <=
                0 &&
                (e.classList.remove("active"),
                (e.querySelector(".product-event__count-size span").innerHTML =
                  Number(0))));
        }),
        (e.querySelector(".product-event__sign-plus").onclick = function () {
          null !== e.closest(".product-main-event__button")
            ? ((t += 1),
              document
                .querySelectorAll(
                  ".product-main-event__button .product-event__add"
                )
                .forEach((e) => {
                  e.querySelector(".product-event__count-size span").innerHTML =
                    t;
                }))
            : (e.querySelector(".product-event__count-size span").innerHTML =
                Number(
                  e.querySelector(".product-event__count-size span").innerHTML
                ) + 1);
        });
    }
    function ji(e, t, i, n) {
      const s = document.querySelector(e);
      document.addEventListener("mouseup", (e) => {
        e.composedPath().includes(s) ||
          e.target.closest(t) ||
          ("BODY" === i.tagName
            ? document.body.classList.remove(n)
            : document.querySelector(i).classList.remove(n));
      });
    }
    document.querySelector(".product-event__add")
      ? (document
          .querySelectorAll(
            ".product-event__add .button-orange-light, .product-event__add .button-orange"
          )
          .forEach((e) => {
            e.addEventListener("click", function () {
              e.closest(".product-main-event__button")
                ? document
                    .querySelectorAll(
                      ".product-main-event__button .product-event__add"
                    )
                    .forEach((e) => {
                      e.closest(".product-event__add").classList.add("active"),
                        Bi(e.closest(".product-event__add"));
                    })
                : (e.closest(".product-event__add").classList.add("active"),
                  Bi(e.closest(".product-event__add")));
            });
          }),
        document.querySelector(".basket-item-event") &&
          document.querySelectorAll(".basket-item-event").forEach((e) => {
            Bi(e);
          }))
      : document.querySelector(".basket-item-event") &&
        document.querySelectorAll(".basket-item-event").forEach((e) => {
          console.log(e), Bi(e);
        }),
      window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(
          document.querySelectorAll("input[type=tel]"),
          function (e) {
            var t;
            function i(e) {
              e.keyCode && (t = e.keyCode),
                this.selectionStart < 3 && e.preventDefault();
              var i = "+7 (___) ___-__-__",
                n = 0,
                s = i.replace(/\D/g, ""),
                o = this.value.replace(/\D/g, ""),
                r = i.replace(/[_\d]/g, function (e) {
                  return n < o.length ? o.charAt(n++) || s.charAt(n) : e;
                });
              -1 != (n = r.indexOf("_")) &&
                (n < 5 && (n = 3), (r = r.slice(0, n)));
              var a = i
                .substr(0, this.value.length)
                .replace(/_+/g, function (e) {
                  return "\\d{1," + e.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
              (!(a = new RegExp("^" + a + "$")).test(this.value) ||
                this.value.length < 5 ||
                (t > 47 && t < 58)) &&
                (this.value = r),
                "blur" == e.type && this.value.length < 5 && (this.value = "");
            }
            e.addEventListener("input", i, !1),
              e.addEventListener("focus", i, !1),
              e.addEventListener("blur", i, !1),
              e.addEventListener("keydown", i, !1);
          }
        );
      }),
      document.querySelector(".product-main-event") &&
        document.body.classList.add("product-page"),
      document.querySelector(".product-option__item") &&
        document
          .querySelectorAll(".product-option__item input")
          .forEach((e) => {
            e.addEventListener("change", function () {
              e.classList.contains("disabled")
                ? document.body.classList.add("not-product")
                : document.body.classList.remove("not-product");
            });
          }),
      document.querySelector(".button-catalog") &&
        document
          .querySelector(".button-catalog")
          .addEventListener("click", function () {
            document.body.classList.contains("catalog-menu-active")
              ? document.body.classList.remove("catalog-menu-active")
              : (document.body.classList.add("catalog-menu-active"),
                ji(
                  ".header-catalog-menu",
                  ".button-catalog",
                  document.body,
                  "catalog-menu-active"
                ));
          }),
      Ni.bind("[data-fancybox]", {}),
      document.querySelector(".select-element") &&
        document
          .querySelector(".select-element__default")
          .addEventListener("click", function () {
            document
              .querySelector(".select-element")
              .classList.contains("active")
              ? document
                  .querySelector(".select-element")
                  .classList.remove("active")
              : (document
                  .querySelector(".select-element")
                  .classList.add("active"),
                ji(
                  ".select-element__items",
                  ".select-element__default",
                  ".select-element",
                  "active"
                )),
              document
                .querySelector(".select-element")
                .querySelectorAll("input")
                .forEach((e) => {
                  e.addEventListener("change", function () {
                    let t = e.getAttribute("id");
                    (document.querySelector(
                      ".select-element__default"
                    ).innerHTML = document
                      .querySelector(`[for=${t}]`)
                      .querySelector(".sort-text").innerHTML),
                      document
                        .querySelector(".select-element")
                        .classList.remove("active");
                  });
                });
          });
    const Hi = { initialZoom: 3, minZoom: 1.25, maxZoom: 4, zoomSpeed: 0.01 };
    class qi {
      constructor(e, t) {
        (this.element = e), (this.config = this._mergeConfig(t));
        const { initialZoom: i, minZoom: n, maxZoom: s } = this.config;
        (this.zoomed = !1),
          (this.initialZoom = Math.max(Math.min(i, s), n)),
          (this.zoom = this.initialZoom),
          (this.img = e.querySelector(".zoomable__img")),
          (this.img.draggable = !1),
          this.element.style.setProperty("--zoom", this.initialZoom),
          this._addEventListeners();
      }
      static get Default() {
        return Hi;
      }
      _addEventListeners() {
        this.element.addEventListener("mouseover", () =>
          this._handleMouseover()
        ),
          this.element.addEventListener("mousemove", (e) =>
            this._handleMousemove(e)
          ),
          this.element.addEventListener("mouseout", () =>
            this._handleMouseout()
          ),
          this.element.addEventListener("wheel", (e) => this._handleWheel(e)),
          this.element.addEventListener("touchstart", (e) =>
            this._handleTouchstart(e)
          ),
          this.element.addEventListener("touchmove", (e) =>
            this._handleTouchmove(e)
          ),
          this.element.addEventListener("touchend", () =>
            this._handleTouchend()
          );
      }
      _handleMouseover() {
        this.zoomed ||
          (this.element.classList.add("zoomable--zoomed"), (this.zoomed = !0));
      }
      _handleMousemove(e) {
        if (!this.zoomed) return;
        const t = this.element.getBoundingClientRect(),
          i = (100 * (e.clientX - t.left)) / t.width + "%",
          n = (100 * (e.clientY - t.top)) / t.height + "%";
        this.element.style.setProperty("--zoom-pos-x", i),
          this.element.style.setProperty("--zoom-pos-y", n);
      }
      _handleMouseout() {
        this.zoomed &&
          (this.element.style.setProperty("--zoom", this.initialZoom),
          this.element.classList.remove("zoomable--zoomed"),
          (this.zoomed = !1));
      }
      _handleWheel(e) {
        if (!this.zoomed) return;
        e.preventDefault();
        const t = this.zoom + e.deltaY * (-1 * this.config.zoomSpeed),
          { minZoom: i, maxZoom: n } = this.config;
        (this.zoom = Math.max(Math.min(t, n), i)),
          this.element.style.setProperty("--zoom", this.zoom);
      }
      _handleTouchstart(e) {
        e.preventDefault(), this._handleMouseover();
      }
      _handleTouchmove(e) {
        if (!this.zoomed) return;
        const t = this.element.getBoundingClientRect();
        let i = (100 * (e.touches[0].clientX - t.left)) / t.width,
          n = (100 * (e.touches[0].clientY - t.top)) / t.height;
        (i = Math.max(Math.min(i, 100), 0)),
          (n = Math.max(Math.min(n, 100), 0)),
          this.element.style.setProperty("--zoom-pos-x", `${i}%`),
          this.element.style.setProperty("--zoom-pos-y", `${n}%`);
      }
      _handleTouchend(e) {
        this._handleMouseout();
      }
      _mergeConfig(e) {
        return {
          ...this.constructor.Default,
          ...("object" == typeof e ? e : {}),
        };
      }
    }
    const Vi = document.querySelectorAll(".zoomable");
    for (const ln of Vi) new qi(ln);
    const Wi = { rootMargin: "0px", threshold: 0.5 },
      Gi = new IntersectionObserver(function (e, t) {
        e.forEach((e) => {
          e.isIntersecting
            ? document
                .querySelector(".product-modal")
                .classList.remove("active")
            : document.querySelector(".product-modal").classList.add("active");
        });
      }, Wi);
    var Xi = document.querySelector(".product-block-start");
    Xi && Gi.observe(Xi);
    const Yi = new IntersectionObserver(function (e, t) {
      e.forEach((e) => {
        e.isIntersecting
          ? document.querySelector(".basket-mobile").classList.remove("active")
          : document.querySelector(".basket-mobile").classList.add("active");
      });
    }, Wi);
    var Ui = document.querySelector(".sidebar-formalization");
    if ((Ui && Yi.observe(Ui), document.querySelector(".bagel"))) {
      function cn(e) {
        (this.pathLength = e.getTotalLength()),
          (this.setStrokeDasharrayInPercent = function () {
            var t = "";
            for (let e = 0; e < arguments.length; e++)
              t += (arguments[e] / 100) * this.pathLength + " ";
            e.style.strokeDasharray = t;
          }),
          (this.setStrokeDashoffsetInPercent = function (t) {
            e.style.strokeDashoffset = (t / 100) * this.pathLength;
          });
      }
      var Zi = document.querySelector(".bagel-svg circle");
      console.log(Zi);
      var Ki = new cn(Zi);
      Ki.setStrokeDasharrayInPercent(
        document.querySelector(".bagel-svg").getAttribute("data-attr")
      ),
        Ki.setStrokeDashoffsetInPercent(0);
    }
    const Ji = document.querySelectorAll(".anchor");
    for (let dn = 0; dn < Ji.length; dn++)
      Ji[dn].addEventListener("click", function (e) {
        e.preventDefault();
        const t = Ji[dn].getAttribute("href").substr(1);
        const i =
          document.getElementById(t).getBoundingClientRect().top +
          window.pageYOffset +
          -180;
        window.scrollTo({ top: i, behavior: "smooth" });
      });
    if (
      (document.querySelector(".sidebar-basket-final-profit") &&
        document
          .querySelector(".sidebar-basket-final-profit-default")
          .addEventListener("click", function () {
            const e = document.querySelector(
                ".sidebar-basket-final-profit-hidden"
              ),
              t = document.querySelector(
                ".sidebar-basket-final-profit-hidden-container"
              ).clientHeight;
            document
              .querySelector(".sidebar-basket-final-profit")
              .classList.contains("active")
              ? (document
                  .querySelector(".sidebar-basket-final-profit")
                  .classList.remove("active"),
                (e.style.height = 0))
              : (document
                  .querySelector(".sidebar-basket-final-profit")
                  .classList.add("active"),
                (e.style.height = t + "px"));
          }),
      document.querySelector(".delivery-page-item") &&
        document.querySelectorAll('[name="delivery"]').forEach((e) => {
          e.addEventListener("click", function () {
            const t = e.getAttribute("id");
            document
              .querySelector(".product-block-address")
              .classList.contains("active") &&
              document
                .querySelector(".product-block-address")
                .classList.remove("active"),
              document.querySelector(`[data-id=${t}]`) &&
                document
                  .querySelector(`[data-id=${t}]`)
                  .classList.add("active");
          });
        }),
      document.querySelector(".form-input__code"))
    ) {
      var Qi = document.querySelectorAll(".otp__digit"),
        en = "0123456789".split("");
      function un(e) {
        let t = e.target,
          i = parseInt(t.classList[1].split("__")[2]);
        ((t.value = e.key),
        8 == e.keyCode && i > 1 && t.previousElementSibling.focus(),
        i < 4 && -1 != en.indexOf("" + e.key)) && t.nextElementSibling.focus();
        var n = "";
        for (let { value: e } of Qi) n += e;
        4 == n.length
          ? (document.querySelector("#_otp").classList.replace("_notok", "_ok"),
            (document.querySelector("#_otp").innerText = n))
          : (document.querySelector("#_otp").classList.replace("_ok", "_notok"),
            (document.querySelector("#_otp").innerText = n));
      }
      Qi.forEach((e) => {
        e.addEventListener("keyup", un);
      });
    }
    (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t && (n(), document.documentElement.classList.toggle("menu-open"));
          });
      })();
  })();
})();
