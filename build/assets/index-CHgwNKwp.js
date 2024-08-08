function MS(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var LS =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function yd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var I0 = { exports: {} },
  Lu = {},
  R0 = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ga = Symbol.for("react.element"),
  FS = Symbol.for("react.portal"),
  jS = Symbol.for("react.fragment"),
  BS = Symbol.for("react.strict_mode"),
  US = Symbol.for("react.profiler"),
  zS = Symbol.for("react.provider"),
  $S = Symbol.for("react.context"),
  WS = Symbol.for("react.forward_ref"),
  HS = Symbol.for("react.suspense"),
  KS = Symbol.for("react.memo"),
  GS = Symbol.for("react.lazy"),
  rg = Symbol.iterator;
function qS(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (rg && t[rg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var k0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  V0 = Object.assign,
  D0 = {};
function Rs(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = D0),
    (this.updater = n || k0);
}
Rs.prototype.isReactComponent = {};
Rs.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Rs.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function b0() {}
b0.prototype = Rs.prototype;
function vd(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = D0),
    (this.updater = n || k0);
}
var _d = (vd.prototype = new b0());
_d.constructor = vd;
V0(_d, Rs.prototype);
_d.isPureReactComponent = !0;
var ig = Array.isArray,
  N0 = Object.prototype.hasOwnProperty,
  wd = { current: null },
  O0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      N0.call(e, r) && !O0.hasOwnProperty(r) && (i[r] = e[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (t && t.defaultProps)
    for (r in ((a = t.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ga,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: wd.current,
  };
}
function QS(t, e) {
  return {
    $$typeof: ga,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Ed(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ga;
}
function YS(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var sg = /\/+/g;
function Uc(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? YS("" + t.key)
    : e.toString(36);
}
function Pl(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ga:
          case FS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Uc(o, 0) : r),
      ig(i)
        ? ((n = ""),
          t != null && (n = t.replace(sg, "$&/") + "/"),
          Pl(i, e, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Ed(i) &&
            (i = QS(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sg, "$&/") + "/") +
                t,
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ig(t)))
    for (var a = 0; a < t.length; a++) {
      s = t[a];
      var u = r + Uc(s, a);
      o += Pl(s, e, n, u, i);
    }
  else if (((u = qS(t)), typeof u == "function"))
    for (t = u.call(t), a = 0; !(s = t.next()).done; )
      (s = s.value), (u = r + Uc(s, a++)), (o += Pl(s, e, n, u, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function Qa(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    Pl(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function XS(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Lt = { current: null },
  xl = { transition: null },
  JS = {
    ReactCurrentDispatcher: Lt,
    ReactCurrentBatchConfig: xl,
    ReactCurrentOwner: wd,
  };
function L0() {
  throw Error("act(...) is not supported in production builds of React.");
}
oe.Children = {
  map: Qa,
  forEach: function (t, e, n) {
    Qa(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Qa(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Qa(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Ed(t))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return t;
  },
};
oe.Component = Rs;
oe.Fragment = jS;
oe.Profiler = US;
oe.PureComponent = vd;
oe.StrictMode = BS;
oe.Suspense = HS;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = JS;
oe.act = L0;
oe.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        ".",
    );
  var r = V0({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = wd.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (u in e)
      N0.call(e, u) &&
        !O0.hasOwnProperty(u) &&
        (r[u] = e[u] === void 0 && a !== void 0 ? a[u] : e[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ga, type: t.type, key: i, ref: s, props: r, _owner: o };
};
oe.createContext = function (t) {
  return (
    (t = {
      $$typeof: $S,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: zS, _context: t }),
    (t.Consumer = t)
  );
};
oe.createElement = M0;
oe.createFactory = function (t) {
  var e = M0.bind(null, t);
  return (e.type = t), e;
};
oe.createRef = function () {
  return { current: null };
};
oe.forwardRef = function (t) {
  return { $$typeof: WS, render: t };
};
oe.isValidElement = Ed;
oe.lazy = function (t) {
  return { $$typeof: GS, _payload: { _status: -1, _result: t }, _init: XS };
};
oe.memo = function (t, e) {
  return { $$typeof: KS, type: t, compare: e === void 0 ? null : e };
};
oe.startTransition = function (t) {
  var e = xl.transition;
  xl.transition = {};
  try {
    t();
  } finally {
    xl.transition = e;
  }
};
oe.unstable_act = L0;
oe.useCallback = function (t, e) {
  return Lt.current.useCallback(t, e);
};
oe.useContext = function (t) {
  return Lt.current.useContext(t);
};
oe.useDebugValue = function () {};
oe.useDeferredValue = function (t) {
  return Lt.current.useDeferredValue(t);
};
oe.useEffect = function (t, e) {
  return Lt.current.useEffect(t, e);
};
oe.useId = function () {
  return Lt.current.useId();
};
oe.useImperativeHandle = function (t, e, n) {
  return Lt.current.useImperativeHandle(t, e, n);
};
oe.useInsertionEffect = function (t, e) {
  return Lt.current.useInsertionEffect(t, e);
};
oe.useLayoutEffect = function (t, e) {
  return Lt.current.useLayoutEffect(t, e);
};
oe.useMemo = function (t, e) {
  return Lt.current.useMemo(t, e);
};
oe.useReducer = function (t, e, n) {
  return Lt.current.useReducer(t, e, n);
};
oe.useRef = function (t) {
  return Lt.current.useRef(t);
};
oe.useState = function (t) {
  return Lt.current.useState(t);
};
oe.useSyncExternalStore = function (t, e, n) {
  return Lt.current.useSyncExternalStore(t, e, n);
};
oe.useTransition = function () {
  return Lt.current.useTransition();
};
oe.version = "18.3.1";
R0.exports = oe;
var V = R0.exports;
const st = yd(V),
  ZS = MS({ __proto__: null, default: st }, [V]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eP = V,
  tP = Symbol.for("react.element"),
  nP = Symbol.for("react.fragment"),
  rP = Object.prototype.hasOwnProperty,
  iP = eP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sP = { key: !0, ref: !0, __self: !0, __source: !0 };
function F0(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) rP.call(e, r) && !sP.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: tP,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: iP.current,
  };
}
Lu.Fragment = nP;
Lu.jsx = F0;
Lu.jsxs = F0;
I0.exports = Lu;
var N = I0.exports,
  Fh = {},
  j0 = { exports: {} },
  rn = {},
  B0 = { exports: {} },
  U0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(K, J) {
    var te = K.length;
    K.push(J);
    e: for (; 0 < te; ) {
      var _e = (te - 1) >>> 1,
        he = K[_e];
      if (0 < i(he, J)) (K[_e] = J), (K[te] = he), (te = _e);
      else break e;
    }
  }
  function n(K) {
    return K.length === 0 ? null : K[0];
  }
  function r(K) {
    if (K.length === 0) return null;
    var J = K[0],
      te = K.pop();
    if (te !== J) {
      K[0] = te;
      e: for (var _e = 0, he = K.length, ye = he >>> 1; _e < ye; ) {
        var jt = 2 * (_e + 1) - 1,
          bt = K[jt],
          wt = jt + 1,
          Bt = K[wt];
        if (0 > i(bt, te))
          wt < he && 0 > i(Bt, bt)
            ? ((K[_e] = Bt), (K[wt] = te), (_e = wt))
            : ((K[_e] = bt), (K[jt] = te), (_e = jt));
        else if (wt < he && 0 > i(Bt, te))
          (K[_e] = Bt), (K[wt] = te), (_e = wt);
        else break e;
      }
    }
    return J;
  }
  function i(K, J) {
    var te = K.sortIndex - J.sortIndex;
    return te !== 0 ? te : K.id - J.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    h = 1,
    f = null,
    p = 3,
    g = !1,
    w = !1,
    C = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    E = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function T(K) {
    for (var J = n(c); J !== null; ) {
      if (J.callback === null) r(c);
      else if (J.startTime <= K)
        r(c), (J.sortIndex = J.expirationTime), e(u, J);
      else break;
      J = n(c);
    }
  }
  function k(K) {
    if (((C = !1), T(K), !w))
      if (n(u) !== null) (w = !0), Ye(M);
      else {
        var J = n(c);
        J !== null && ut(k, J.startTime - K);
      }
  }
  function M(K, J) {
    (w = !1), C && ((C = !1), E(v), (v = -1)), (g = !0);
    var te = p;
    try {
      for (
        T(J), f = n(u);
        f !== null && (!(f.expirationTime > J) || (K && !R()));

      ) {
        var _e = f.callback;
        if (typeof _e == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var he = _e(f.expirationTime <= J);
          (J = t.unstable_now()),
            typeof he == "function" ? (f.callback = he) : f === n(u) && r(u),
            T(J);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var ye = !0;
      else {
        var jt = n(c);
        jt !== null && ut(k, jt.startTime - J), (ye = !1);
      }
      return ye;
    } finally {
      (f = null), (p = te), (g = !1);
    }
  }
  var j = !1,
    P = null,
    v = -1,
    S = 5,
    x = -1;
  function R() {
    return !(t.unstable_now() - x < S);
  }
  function D() {
    if (P !== null) {
      var K = t.unstable_now();
      x = K;
      var J = !0;
      try {
        J = P(!0, K);
      } finally {
        J ? I() : ((j = !1), (P = null));
      }
    } else j = !1;
  }
  var I;
  if (typeof y == "function")
    I = function () {
      y(D);
    };
  else if (typeof MessageChannel < "u") {
    var He = new MessageChannel(),
      ce = He.port2;
    (He.port1.onmessage = D),
      (I = function () {
        ce.postMessage(null);
      });
  } else
    I = function () {
      A(D, 0);
    };
  function Ye(K) {
    (P = K), j || ((j = !0), I());
  }
  function ut(K, J) {
    v = A(function () {
      K(t.unstable_now());
    }, J);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (K) {
      K.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      w || g || ((w = !0), Ye(M));
    }),
    (t.unstable_forceFrameRate = function (K) {
      0 > K || 125 < K
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (S = 0 < K ? Math.floor(1e3 / K) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (t.unstable_next = function (K) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = p;
      }
      var te = p;
      p = J;
      try {
        return K();
      } finally {
        p = te;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (K, J) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var te = p;
      p = K;
      try {
        return J();
      } finally {
        p = te;
      }
    }),
    (t.unstable_scheduleCallback = function (K, J, te) {
      var _e = t.unstable_now();
      switch (
        (typeof te == "object" && te !== null
          ? ((te = te.delay),
            (te = typeof te == "number" && 0 < te ? _e + te : _e))
          : (te = _e),
        K)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = te + he),
        (K = {
          id: h++,
          callback: J,
          priorityLevel: K,
          startTime: te,
          expirationTime: he,
          sortIndex: -1,
        }),
        te > _e
          ? ((K.sortIndex = te),
            e(c, K),
            n(u) === null &&
              K === n(c) &&
              (C ? (E(v), (v = -1)) : (C = !0), ut(k, te - _e)))
          : ((K.sortIndex = he), e(u, K), w || g || ((w = !0), Ye(M))),
        K
      );
    }),
    (t.unstable_shouldYield = R),
    (t.unstable_wrapCallback = function (K) {
      var J = p;
      return function () {
        var te = p;
        p = J;
        try {
          return K.apply(this, arguments);
        } finally {
          p = te;
        }
      };
    });
})(U0);
B0.exports = U0;
var oP = B0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aP = V,
  tn = oP;
function W(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var z0 = new Set(),
  Fo = {};
function Ii(t, e) {
  fs(t, e), fs(t + "Capture", e);
}
function fs(t, e) {
  for (Fo[t] = e, t = 0; t < e.length; t++) z0.add(e[t]);
}
var Xn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  jh = Object.prototype.hasOwnProperty,
  lP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  og = {},
  ag = {};
function uP(t) {
  return jh.call(ag, t)
    ? !0
    : jh.call(og, t)
      ? !1
      : lP.test(t)
        ? (ag[t] = !0)
        : ((og[t] = !0), !1);
}
function cP(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function hP(t, e, n, r) {
  if (e === null || typeof e > "u" || cP(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ft(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    vt[t] = new Ft(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  vt[e] = new Ft(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  vt[t] = new Ft(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  vt[t] = new Ft(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    vt[t] = new Ft(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  vt[t] = new Ft(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  vt[t] = new Ft(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  vt[t] = new Ft(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  vt[t] = new Ft(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Td = /[\-:]([a-z])/g;
function Sd(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Td, Sd);
    vt[e] = new Ft(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Td, Sd);
    vt[e] = new Ft(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Td, Sd);
  vt[e] = new Ft(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  vt[t] = new Ft(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Ft(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (t) {
  vt[t] = new Ft(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Pd(t, e, n, r) {
  var i = vt.hasOwnProperty(e) ? vt[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (hP(e, n, i, r) && (n = null),
    r || i === null
      ? uP(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
        ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((e = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? t.removeAttribute(e)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var ir = aP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ya = Symbol.for("react.element"),
  Ui = Symbol.for("react.portal"),
  zi = Symbol.for("react.fragment"),
  xd = Symbol.for("react.strict_mode"),
  Bh = Symbol.for("react.profiler"),
  $0 = Symbol.for("react.provider"),
  W0 = Symbol.for("react.context"),
  Cd = Symbol.for("react.forward_ref"),
  Uh = Symbol.for("react.suspense"),
  zh = Symbol.for("react.suspense_list"),
  Ad = Symbol.for("react.memo"),
  hr = Symbol.for("react.lazy"),
  H0 = Symbol.for("react.offscreen"),
  lg = Symbol.iterator;
function Zs(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (lg && t[lg]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var je = Object.assign,
  zc;
function co(t) {
  if (zc === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      zc = (e && e[1]) || "";
    }
  return (
    `
` +
    zc +
    t
  );
}
var $c = !1;
function Wc(t, e) {
  if (!t || $c) return "";
  $c = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          r = c;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      t();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", t.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ($c = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? co(t) : "";
}
function fP(t) {
  switch (t.tag) {
    case 5:
      return co(t.type);
    case 16:
      return co("Lazy");
    case 13:
      return co("Suspense");
    case 19:
      return co("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Wc(t.type, !1)), t;
    case 11:
      return (t = Wc(t.type.render, !1)), t;
    case 1:
      return (t = Wc(t.type, !0)), t;
    default:
      return "";
  }
}
function $h(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case zi:
      return "Fragment";
    case Ui:
      return "Portal";
    case Bh:
      return "Profiler";
    case xd:
      return "StrictMode";
    case Uh:
      return "Suspense";
    case zh:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case W0:
        return (t.displayName || "Context") + ".Consumer";
      case $0:
        return (t._context.displayName || "Context") + ".Provider";
      case Cd:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Ad:
        return (
          (e = t.displayName || null), e !== null ? e : $h(t.type) || "Memo"
        );
      case hr:
        (e = t._payload), (t = t._init);
        try {
          return $h(t(e));
        } catch {}
    }
  return null;
}
function dP(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $h(e);
    case 8:
      return e === xd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Nr(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function K0(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function pP(t) {
  var e = K0(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Xa(t) {
  t._valueTracker || (t._valueTracker = pP(t));
}
function G0(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = K0(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Wl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Wh(t, e) {
  var n = e.checked;
  return je({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function ug(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Nr(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function q0(t, e) {
  (e = e.checked), e != null && Pd(t, "checked", e, !1);
}
function Hh(t, e) {
  q0(t, e);
  var n = Nr(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Kh(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Kh(t, e.type, Nr(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function cg(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Kh(t, e, n) {
  (e !== "number" || Wl(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var ho = Array.isArray;
function is(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Nr(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Gh(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(W(91));
  return je({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function hg(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(W(92));
      if (ho(n)) {
        if (1 < n.length) throw Error(W(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Nr(n) };
}
function Q0(t, e) {
  var n = Nr(e.value),
    r = Nr(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function fg(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Y0(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qh(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Y0(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var Ja,
  X0 = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Ja = Ja || document.createElement("div"),
          Ja.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ja.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function jo(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  mP = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function (t) {
  mP.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (wo[e] = wo[t]);
  });
});
function J0(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (wo.hasOwnProperty(t) && wo[t])
      ? ("" + e).trim()
      : e + "px";
}
function Z0(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = J0(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var gP = je(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Qh(t, e) {
  if (e) {
    if (gP[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(W(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(W(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(W(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(W(62));
  }
}
function Yh(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xh = null;
function Id(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Jh = null,
  ss = null,
  os = null;
function dg(t) {
  if ((t = _a(t))) {
    if (typeof Jh != "function") throw Error(W(280));
    var e = t.stateNode;
    e && ((e = zu(e)), Jh(t.stateNode, t.type, e));
  }
}
function e1(t) {
  ss ? (os ? os.push(t) : (os = [t])) : (ss = t);
}
function t1() {
  if (ss) {
    var t = ss,
      e = os;
    if (((os = ss = null), dg(t), e)) for (t = 0; t < e.length; t++) dg(e[t]);
  }
}
function n1(t, e) {
  return t(e);
}
function r1() {}
var Hc = !1;
function i1(t, e, n) {
  if (Hc) return t(e, n);
  Hc = !0;
  try {
    return n1(t, e, n);
  } finally {
    (Hc = !1), (ss !== null || os !== null) && (r1(), t1());
  }
}
function Bo(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = zu(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(W(231, e, typeof n));
  return n;
}
var Zh = !1;
if (Xn)
  try {
    var eo = {};
    Object.defineProperty(eo, "passive", {
      get: function () {
        Zh = !0;
      },
    }),
      window.addEventListener("test", eo, eo),
      window.removeEventListener("test", eo, eo);
  } catch {
    Zh = !1;
  }
function yP(t, e, n, r, i, s, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Eo = !1,
  Hl = null,
  Kl = !1,
  ef = null,
  vP = {
    onError: function (t) {
      (Eo = !0), (Hl = t);
    },
  };
function _P(t, e, n, r, i, s, o, a, u) {
  (Eo = !1), (Hl = null), yP.apply(vP, arguments);
}
function wP(t, e, n, r, i, s, o, a, u) {
  if ((_P.apply(this, arguments), Eo)) {
    if (Eo) {
      var c = Hl;
      (Eo = !1), (Hl = null);
    } else throw Error(W(198));
    Kl || ((Kl = !0), (ef = c));
  }
}
function Ri(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function s1(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function pg(t) {
  if (Ri(t) !== t) throw Error(W(188));
}
function EP(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Ri(t)), e === null)) throw Error(W(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return pg(i), t;
        if (s === r) return pg(i), e;
        s = s.sibling;
      }
      throw Error(W(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(W(189));
      }
    }
    if (n.alternate !== r) throw Error(W(190));
  }
  if (n.tag !== 3) throw Error(W(188));
  return n.stateNode.current === n ? t : e;
}
function o1(t) {
  return (t = EP(t)), t !== null ? a1(t) : null;
}
function a1(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = a1(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var l1 = tn.unstable_scheduleCallback,
  mg = tn.unstable_cancelCallback,
  TP = tn.unstable_shouldYield,
  SP = tn.unstable_requestPaint,
  Qe = tn.unstable_now,
  PP = tn.unstable_getCurrentPriorityLevel,
  Rd = tn.unstable_ImmediatePriority,
  u1 = tn.unstable_UserBlockingPriority,
  Gl = tn.unstable_NormalPriority,
  xP = tn.unstable_LowPriority,
  c1 = tn.unstable_IdlePriority,
  Fu = null,
  Rn = null;
function CP(t) {
  if (Rn && typeof Rn.onCommitFiberRoot == "function")
    try {
      Rn.onCommitFiberRoot(Fu, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var _n = Math.clz32 ? Math.clz32 : RP,
  AP = Math.log,
  IP = Math.LN2;
function RP(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((AP(t) / IP) | 0)) | 0;
}
var Za = 64,
  el = 4194304;
function fo(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function ql(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = fo(a)) : ((s &= o), s !== 0 && (r = fo(s)));
  } else (o = n & ~i), o !== 0 ? (r = fo(o)) : s !== 0 && (r = fo(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - _n(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function kP(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function VP(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - _n(s),
      a = 1 << o,
      u = i[o];
    u === -1
      ? (!(a & n) || a & r) && (i[o] = kP(a, e))
      : u <= e && (t.expiredLanes |= a),
      (s &= ~a);
  }
}
function tf(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function h1() {
  var t = Za;
  return (Za <<= 1), !(Za & 4194240) && (Za = 64), t;
}
function Kc(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function ya(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - _n(e)),
    (t[e] = n);
}
function DP(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - _n(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function kd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - _n(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var Te = 0;
function f1(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var d1,
  Vd,
  p1,
  m1,
  g1,
  nf = !1,
  tl = [],
  _r = null,
  wr = null,
  Er = null,
  Uo = new Map(),
  zo = new Map(),
  dr = [],
  bP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function gg(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      _r = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Er = null;
      break;
    case "pointerover":
    case "pointerout":
      Uo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zo.delete(e.pointerId);
  }
}
function to(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = _a(e)), e !== null && Vd(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function NP(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (_r = to(_r, t, e, n, r, i)), !0;
    case "dragenter":
      return (wr = to(wr, t, e, n, r, i)), !0;
    case "mouseover":
      return (Er = to(Er, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Uo.set(s, to(Uo.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), zo.set(s, to(zo.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function y1(t) {
  var e = li(t.target);
  if (e !== null) {
    var n = Ri(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = s1(n)), e !== null)) {
          (t.blockedOn = e),
            g1(t.priority, function () {
              p1(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Cl(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = rf(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xh = r), n.target.dispatchEvent(r), (Xh = null);
    } else return (e = _a(n)), e !== null && Vd(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function yg(t, e, n) {
  Cl(t) && n.delete(e);
}
function OP() {
  (nf = !1),
    _r !== null && Cl(_r) && (_r = null),
    wr !== null && Cl(wr) && (wr = null),
    Er !== null && Cl(Er) && (Er = null),
    Uo.forEach(yg),
    zo.forEach(yg);
}
function no(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    nf ||
      ((nf = !0),
      tn.unstable_scheduleCallback(tn.unstable_NormalPriority, OP)));
}
function $o(t) {
  function e(i) {
    return no(i, t);
  }
  if (0 < tl.length) {
    no(tl[0], t);
    for (var n = 1; n < tl.length; n++) {
      var r = tl[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    _r !== null && no(_r, t),
      wr !== null && no(wr, t),
      Er !== null && no(Er, t),
      Uo.forEach(e),
      zo.forEach(e),
      n = 0;
    n < dr.length;
    n++
  )
    (r = dr[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < dr.length && ((n = dr[0]), n.blockedOn === null); )
    y1(n), n.blockedOn === null && dr.shift();
}
var as = ir.ReactCurrentBatchConfig,
  Ql = !0;
function MP(t, e, n, r) {
  var i = Te,
    s = as.transition;
  as.transition = null;
  try {
    (Te = 1), Dd(t, e, n, r);
  } finally {
    (Te = i), (as.transition = s);
  }
}
function LP(t, e, n, r) {
  var i = Te,
    s = as.transition;
  as.transition = null;
  try {
    (Te = 4), Dd(t, e, n, r);
  } finally {
    (Te = i), (as.transition = s);
  }
}
function Dd(t, e, n, r) {
  if (Ql) {
    var i = rf(t, e, n, r);
    if (i === null) nh(t, e, r, Yl, n), gg(t, r);
    else if (NP(i, t, e, n, r)) r.stopPropagation();
    else if ((gg(t, r), e & 4 && -1 < bP.indexOf(t))) {
      for (; i !== null; ) {
        var s = _a(i);
        if (
          (s !== null && d1(s),
          (s = rf(t, e, n, r)),
          s === null && nh(t, e, r, Yl, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else nh(t, e, r, null, n);
  }
}
var Yl = null;
function rf(t, e, n, r) {
  if (((Yl = null), (t = Id(r)), (t = li(t)), t !== null))
    if (((e = Ri(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = s1(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Yl = t), null;
}
function v1(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (PP()) {
        case Rd:
          return 1;
        case u1:
          return 4;
        case Gl:
        case xP:
          return 16;
        case c1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mr = null,
  bd = null,
  Al = null;
function _1() {
  if (Al) return Al;
  var t,
    e = bd,
    n = e.length,
    r,
    i = "value" in mr ? mr.value : mr.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (Al = i.slice(t, 1 < r ? 1 - r : void 0));
}
function Il(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function nl() {
  return !0;
}
function vg() {
  return !1;
}
function sn(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? nl
        : vg),
      (this.isPropagationStopped = vg),
      this
    );
  }
  return (
    je(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = nl));
      },
      persist: function () {},
      isPersistent: nl,
    }),
    e
  );
}
var ks = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nd = sn(ks),
  va = je({}, ks, { view: 0, detail: 0 }),
  FP = sn(va),
  Gc,
  qc,
  ro,
  ju = je({}, va, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Od,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== ro &&
            (ro && t.type === "mousemove"
              ? ((Gc = t.screenX - ro.screenX), (qc = t.screenY - ro.screenY))
              : (qc = Gc = 0),
            (ro = t)),
          Gc);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : qc;
    },
  }),
  _g = sn(ju),
  jP = je({}, ju, { dataTransfer: 0 }),
  BP = sn(jP),
  UP = je({}, va, { relatedTarget: 0 }),
  Qc = sn(UP),
  zP = je({}, ks, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $P = sn(zP),
  WP = je({}, ks, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  HP = sn(WP),
  KP = je({}, ks, { data: 0 }),
  wg = sn(KP),
  GP = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  QP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function YP(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = QP[t]) ? !!e[t] : !1;
}
function Od() {
  return YP;
}
var XP = je({}, va, {
    key: function (t) {
      if (t.key) {
        var e = GP[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Il(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? qP[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Od,
    charCode: function (t) {
      return t.type === "keypress" ? Il(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Il(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  JP = sn(XP),
  ZP = je({}, ju, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Eg = sn(ZP),
  ex = je({}, va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Od,
  }),
  tx = sn(ex),
  nx = je({}, ks, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rx = sn(nx),
  ix = je({}, ju, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sx = sn(ix),
  ox = [9, 13, 27, 32],
  Md = Xn && "CompositionEvent" in window,
  To = null;
Xn && "documentMode" in document && (To = document.documentMode);
var ax = Xn && "TextEvent" in window && !To,
  w1 = Xn && (!Md || (To && 8 < To && 11 >= To)),
  Tg = " ",
  Sg = !1;
function E1(t, e) {
  switch (t) {
    case "keyup":
      return ox.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function T1(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var $i = !1;
function lx(t, e) {
  switch (t) {
    case "compositionend":
      return T1(e);
    case "keypress":
      return e.which !== 32 ? null : ((Sg = !0), Tg);
    case "textInput":
      return (t = e.data), t === Tg && Sg ? null : t;
    default:
      return null;
  }
}
function ux(t, e) {
  if ($i)
    return t === "compositionend" || (!Md && E1(t, e))
      ? ((t = _1()), (Al = bd = mr = null), ($i = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return w1 && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var cx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pg(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!cx[t.type] : e === "textarea";
}
function S1(t, e, n, r) {
  e1(r),
    (e = Xl(e, "onChange")),
    0 < e.length &&
      ((n = new Nd("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var So = null,
  Wo = null;
function hx(t) {
  N1(t, 0);
}
function Bu(t) {
  var e = Ki(t);
  if (G0(e)) return t;
}
function fx(t, e) {
  if (t === "change") return e;
}
var P1 = !1;
if (Xn) {
  var Yc;
  if (Xn) {
    var Xc = "oninput" in document;
    if (!Xc) {
      var xg = document.createElement("div");
      xg.setAttribute("oninput", "return;"),
        (Xc = typeof xg.oninput == "function");
    }
    Yc = Xc;
  } else Yc = !1;
  P1 = Yc && (!document.documentMode || 9 < document.documentMode);
}
function Cg() {
  So && (So.detachEvent("onpropertychange", x1), (Wo = So = null));
}
function x1(t) {
  if (t.propertyName === "value" && Bu(Wo)) {
    var e = [];
    S1(e, Wo, t, Id(t)), i1(hx, e);
  }
}
function dx(t, e, n) {
  t === "focusin"
    ? (Cg(), (So = e), (Wo = n), So.attachEvent("onpropertychange", x1))
    : t === "focusout" && Cg();
}
function px(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Bu(Wo);
}
function mx(t, e) {
  if (t === "click") return Bu(e);
}
function gx(t, e) {
  if (t === "input" || t === "change") return Bu(e);
}
function yx(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var En = typeof Object.is == "function" ? Object.is : yx;
function Ho(t, e) {
  if (En(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!jh.call(e, i) || !En(t[i], e[i])) return !1;
  }
  return !0;
}
function Ag(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Ig(t, e) {
  var n = Ag(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ag(n);
  }
}
function C1(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? C1(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function A1() {
  for (var t = window, e = Wl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Wl(t.document);
  }
  return e;
}
function Ld(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function vx(t) {
  var e = A1(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    C1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ld(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Ig(n, s));
        var o = Ig(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var _x = Xn && "documentMode" in document && 11 >= document.documentMode,
  Wi = null,
  sf = null,
  Po = null,
  of = !1;
function Rg(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  of ||
    Wi == null ||
    Wi !== Wl(r) ||
    ((r = Wi),
    "selectionStart" in r && Ld(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Po && Ho(Po, r)) ||
      ((Po = r),
      (r = Xl(sf, "onSelect")),
      0 < r.length &&
        ((e = new Nd("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = Wi))));
}
function rl(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Hi = {
    animationend: rl("Animation", "AnimationEnd"),
    animationiteration: rl("Animation", "AnimationIteration"),
    animationstart: rl("Animation", "AnimationStart"),
    transitionend: rl("Transition", "TransitionEnd"),
  },
  Jc = {},
  I1 = {};
Xn &&
  ((I1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hi.animationend.animation,
    delete Hi.animationiteration.animation,
    delete Hi.animationstart.animation),
  "TransitionEvent" in window || delete Hi.transitionend.transition);
function Uu(t) {
  if (Jc[t]) return Jc[t];
  if (!Hi[t]) return t;
  var e = Hi[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in I1) return (Jc[t] = e[n]);
  return t;
}
var R1 = Uu("animationend"),
  k1 = Uu("animationiteration"),
  V1 = Uu("animationstart"),
  D1 = Uu("transitionend"),
  b1 = new Map(),
  kg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zr(t, e) {
  b1.set(t, e), Ii(e, [t]);
}
for (var Zc = 0; Zc < kg.length; Zc++) {
  var eh = kg[Zc],
    wx = eh.toLowerCase(),
    Ex = eh[0].toUpperCase() + eh.slice(1);
  zr(wx, "on" + Ex);
}
zr(R1, "onAnimationEnd");
zr(k1, "onAnimationIteration");
zr(V1, "onAnimationStart");
zr("dblclick", "onDoubleClick");
zr("focusin", "onFocus");
zr("focusout", "onBlur");
zr(D1, "onTransitionEnd");
fs("onMouseEnter", ["mouseout", "mouseover"]);
fs("onMouseLeave", ["mouseout", "mouseover"]);
fs("onPointerEnter", ["pointerout", "pointerover"]);
fs("onPointerLeave", ["pointerout", "pointerover"]);
Ii(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ii(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ii(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ii(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ii(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var po =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Tx = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
function Vg(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), wP(r, e, void 0, t), (t.currentTarget = null);
}
function N1(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && i.isPropagationStopped())) break e;
          Vg(i, a, c), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          Vg(i, a, c), (s = u);
        }
    }
  }
  if (Kl) throw ((t = ef), (Kl = !1), (ef = null), t);
}
function ke(t, e) {
  var n = e[hf];
  n === void 0 && (n = e[hf] = new Set());
  var r = t + "__bubble";
  n.has(r) || (O1(e, t, 2, !1), n.add(r));
}
function th(t, e, n) {
  var r = 0;
  e && (r |= 4), O1(n, t, r, e);
}
var il = "_reactListening" + Math.random().toString(36).slice(2);
function Ko(t) {
  if (!t[il]) {
    (t[il] = !0),
      z0.forEach(function (n) {
        n !== "selectionchange" && (Tx.has(n) || th(n, !1, t), th(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[il] || ((e[il] = !0), th("selectionchange", !1, e));
  }
}
function O1(t, e, n, r) {
  switch (v1(e)) {
    case 1:
      var i = MP;
      break;
    case 4:
      i = LP;
      break;
    default:
      i = Dd;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Zh ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
        ? t.addEventListener(e, n, { passive: i })
        : t.addEventListener(e, n, !1);
}
function nh(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = li(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  i1(function () {
    var c = s,
      h = Id(n),
      f = [];
    e: {
      var p = b1.get(t);
      if (p !== void 0) {
        var g = Nd,
          w = t;
        switch (t) {
          case "keypress":
            if (Il(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = JP;
            break;
          case "focusin":
            (w = "focus"), (g = Qc);
            break;
          case "focusout":
            (w = "blur"), (g = Qc);
            break;
          case "beforeblur":
          case "afterblur":
            g = Qc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = _g;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = BP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = tx;
            break;
          case R1:
          case k1:
          case V1:
            g = $P;
            break;
          case D1:
            g = rx;
            break;
          case "scroll":
            g = FP;
            break;
          case "wheel":
            g = sx;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = HP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Eg;
        }
        var C = (e & 4) !== 0,
          A = !C && t === "scroll",
          E = C ? (p !== null ? p + "Capture" : null) : p;
        C = [];
        for (var y = c, T; y !== null; ) {
          T = y;
          var k = T.stateNode;
          if (
            (T.tag === 5 &&
              k !== null &&
              ((T = k),
              E !== null && ((k = Bo(y, E)), k != null && C.push(Go(y, k, T)))),
            A)
          )
            break;
          y = y.return;
        }
        0 < C.length &&
          ((p = new g(p, w, null, n, h)), f.push({ event: p, listeners: C }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((p = t === "mouseover" || t === "pointerover"),
          (g = t === "mouseout" || t === "pointerout"),
          p &&
            n !== Xh &&
            (w = n.relatedTarget || n.fromElement) &&
            (li(w) || w[Jn]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? li(w) : null),
              w !== null &&
                ((A = Ri(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((C = _g),
            (k = "onMouseLeave"),
            (E = "onMouseEnter"),
            (y = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((C = Eg),
              (k = "onPointerLeave"),
              (E = "onPointerEnter"),
              (y = "pointer")),
            (A = g == null ? p : Ki(g)),
            (T = w == null ? p : Ki(w)),
            (p = new C(k, y + "leave", g, n, h)),
            (p.target = A),
            (p.relatedTarget = T),
            (k = null),
            li(h) === c &&
              ((C = new C(E, y + "enter", w, n, h)),
              (C.target = T),
              (C.relatedTarget = A),
              (k = C)),
            (A = k),
            g && w)
          )
            t: {
              for (C = g, E = w, y = 0, T = C; T; T = Mi(T)) y++;
              for (T = 0, k = E; k; k = Mi(k)) T++;
              for (; 0 < y - T; ) (C = Mi(C)), y--;
              for (; 0 < T - y; ) (E = Mi(E)), T--;
              for (; y--; ) {
                if (C === E || (E !== null && C === E.alternate)) break t;
                (C = Mi(C)), (E = Mi(E));
              }
              C = null;
            }
          else C = null;
          g !== null && Dg(f, p, g, C, !1),
            w !== null && A !== null && Dg(f, A, w, C, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ki(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var M = fx;
        else if (Pg(p))
          if (P1) M = gx;
          else {
            M = px;
            var j = dx;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (M = mx);
        if (M && (M = M(t, c))) {
          S1(f, M, n, h);
          break e;
        }
        j && j(t, p, c),
          t === "focusout" &&
            (j = p._wrapperState) &&
            j.controlled &&
            p.type === "number" &&
            Kh(p, "number", p.value);
      }
      switch (((j = c ? Ki(c) : window), t)) {
        case "focusin":
          (Pg(j) || j.contentEditable === "true") &&
            ((Wi = j), (sf = c), (Po = null));
          break;
        case "focusout":
          Po = sf = Wi = null;
          break;
        case "mousedown":
          of = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (of = !1), Rg(f, n, h);
          break;
        case "selectionchange":
          if (_x) break;
        case "keydown":
        case "keyup":
          Rg(f, n, h);
      }
      var P;
      if (Md)
        e: {
          switch (t) {
            case "compositionstart":
              var v = "onCompositionStart";
              break e;
            case "compositionend":
              v = "onCompositionEnd";
              break e;
            case "compositionupdate":
              v = "onCompositionUpdate";
              break e;
          }
          v = void 0;
        }
      else
        $i
          ? E1(t, n) && (v = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
      v &&
        (w1 &&
          n.locale !== "ko" &&
          ($i || v !== "onCompositionStart"
            ? v === "onCompositionEnd" && $i && (P = _1())
            : ((mr = h),
              (bd = "value" in mr ? mr.value : mr.textContent),
              ($i = !0))),
        (j = Xl(c, v)),
        0 < j.length &&
          ((v = new wg(v, t, null, n, h)),
          f.push({ event: v, listeners: j }),
          P ? (v.data = P) : ((P = T1(n)), P !== null && (v.data = P)))),
        (P = ax ? lx(t, n) : ux(t, n)) &&
          ((c = Xl(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new wg("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: c }),
            (h.data = P)));
    }
    N1(f, e);
  });
}
function Go(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Xl(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Bo(t, n)),
      s != null && r.unshift(Go(t, s, i)),
      (s = Bo(t, e)),
      s != null && r.push(Go(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Mi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Dg(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((u = Bo(n, s)), u != null && o.unshift(Go(n, u, a)))
        : i || ((u = Bo(n, s)), u != null && o.push(Go(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var Sx = /\r\n?/g,
  Px = /\u0000|\uFFFD/g;
function bg(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Sx,
      `
`,
    )
    .replace(Px, "");
}
function sl(t, e, n) {
  if (((e = bg(e)), bg(t) !== e && n)) throw Error(W(425));
}
function Jl() {}
var af = null,
  lf = null;
function uf(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var cf = typeof setTimeout == "function" ? setTimeout : void 0,
  xx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ng = typeof Promise == "function" ? Promise : void 0,
  Cx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ng < "u"
        ? function (t) {
            return Ng.resolve(null).then(t).catch(Ax);
          }
        : cf;
function Ax(t) {
  setTimeout(function () {
    throw t;
  });
}
function rh(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), $o(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $o(e);
}
function Tr(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Og(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Vs = Math.random().toString(36).slice(2),
  In = "__reactFiber$" + Vs,
  qo = "__reactProps$" + Vs,
  Jn = "__reactContainer$" + Vs,
  hf = "__reactEvents$" + Vs,
  Ix = "__reactListeners$" + Vs,
  Rx = "__reactHandles$" + Vs;
function li(t) {
  var e = t[In];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Jn] || n[In])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Og(t); t !== null; ) {
          if ((n = t[In])) return n;
          t = Og(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function _a(t) {
  return (
    (t = t[In] || t[Jn]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Ki(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(W(33));
}
function zu(t) {
  return t[qo] || null;
}
var ff = [],
  Gi = -1;
function $r(t) {
  return { current: t };
}
function Ve(t) {
  0 > Gi || ((t.current = ff[Gi]), (ff[Gi] = null), Gi--);
}
function Ie(t, e) {
  Gi++, (ff[Gi] = t.current), (t.current = e);
}
var Or = {},
  Dt = $r(Or),
  Wt = $r(!1),
  vi = Or;
function ds(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Or;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ht(t) {
  return (t = t.childContextTypes), t != null;
}
function Zl() {
  Ve(Wt), Ve(Dt);
}
function Mg(t, e, n) {
  if (Dt.current !== Or) throw Error(W(168));
  Ie(Dt, e), Ie(Wt, n);
}
function M1(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(W(108, dP(t) || "Unknown", i));
  return je({}, n, r);
}
function eu(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Or),
    (vi = Dt.current),
    Ie(Dt, t),
    Ie(Wt, Wt.current),
    !0
  );
}
function Lg(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(W(169));
  n
    ? ((t = M1(t, e, vi)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Ve(Wt),
      Ve(Dt),
      Ie(Dt, t))
    : Ve(Wt),
    Ie(Wt, n);
}
var $n = null,
  $u = !1,
  ih = !1;
function L1(t) {
  $n === null ? ($n = [t]) : $n.push(t);
}
function kx(t) {
  ($u = !0), L1(t);
}
function Wr() {
  if (!ih && $n !== null) {
    ih = !0;
    var t = 0,
      e = Te;
    try {
      var n = $n;
      for (Te = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      ($n = null), ($u = !1);
    } catch (i) {
      throw ($n !== null && ($n = $n.slice(t + 1)), l1(Rd, Wr), i);
    } finally {
      (Te = e), (ih = !1);
    }
  }
  return null;
}
var qi = [],
  Qi = 0,
  tu = null,
  nu = 0,
  ln = [],
  un = 0,
  _i = null,
  Wn = 1,
  Hn = "";
function ri(t, e) {
  (qi[Qi++] = nu), (qi[Qi++] = tu), (tu = t), (nu = e);
}
function F1(t, e, n) {
  (ln[un++] = Wn), (ln[un++] = Hn), (ln[un++] = _i), (_i = t);
  var r = Wn;
  t = Hn;
  var i = 32 - _n(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - _n(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Wn = (1 << (32 - _n(e) + i)) | (n << i) | r),
      (Hn = s + t);
  } else (Wn = (1 << s) | (n << i) | r), (Hn = t);
}
function Fd(t) {
  t.return !== null && (ri(t, 1), F1(t, 1, 0));
}
function jd(t) {
  for (; t === tu; )
    (tu = qi[--Qi]), (qi[Qi] = null), (nu = qi[--Qi]), (qi[Qi] = null);
  for (; t === _i; )
    (_i = ln[--un]),
      (ln[un] = null),
      (Hn = ln[--un]),
      (ln[un] = null),
      (Wn = ln[--un]),
      (ln[un] = null);
}
var Zt = null,
  Xt = null,
  De = !1,
  vn = null;
function j1(t, e) {
  var n = cn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Fg(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Zt = t), (Xt = Tr(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Zt = t), (Xt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = _i !== null ? { id: Wn, overflow: Hn } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = cn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Zt = t),
            (Xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function df(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function pf(t) {
  if (De) {
    var e = Xt;
    if (e) {
      var n = e;
      if (!Fg(t, e)) {
        if (df(t)) throw Error(W(418));
        e = Tr(n.nextSibling);
        var r = Zt;
        e && Fg(t, e)
          ? j1(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (De = !1), (Zt = t));
      }
    } else {
      if (df(t)) throw Error(W(418));
      (t.flags = (t.flags & -4097) | 2), (De = !1), (Zt = t);
    }
  }
}
function jg(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Zt = t;
}
function ol(t) {
  if (t !== Zt) return !1;
  if (!De) return jg(t), (De = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !uf(t.type, t.memoizedProps))),
    e && (e = Xt))
  ) {
    if (df(t)) throw (B1(), Error(W(418)));
    for (; e; ) j1(t, e), (e = Tr(e.nextSibling));
  }
  if ((jg(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(W(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              Xt = Tr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Xt = null;
    }
  } else Xt = Zt ? Tr(t.stateNode.nextSibling) : null;
  return !0;
}
function B1() {
  for (var t = Xt; t; ) t = Tr(t.nextSibling);
}
function ps() {
  (Xt = Zt = null), (De = !1);
}
function Bd(t) {
  vn === null ? (vn = [t]) : vn.push(t);
}
var Vx = ir.ReactCurrentBatchConfig;
function io(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(W(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(W(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(W(284));
    if (!n._owner) throw Error(W(290, t));
  }
  return t;
}
function al(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      W(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t,
      ),
    ))
  );
}
function Bg(t) {
  var e = t._init;
  return e(t._payload);
}
function U1(t) {
  function e(E, y) {
    if (t) {
      var T = E.deletions;
      T === null ? ((E.deletions = [y]), (E.flags |= 16)) : T.push(y);
    }
  }
  function n(E, y) {
    if (!t) return null;
    for (; y !== null; ) e(E, y), (y = y.sibling);
    return null;
  }
  function r(E, y) {
    for (E = new Map(); y !== null; )
      y.key !== null ? E.set(y.key, y) : E.set(y.index, y), (y = y.sibling);
    return E;
  }
  function i(E, y) {
    return (E = Cr(E, y)), (E.index = 0), (E.sibling = null), E;
  }
  function s(E, y, T) {
    return (
      (E.index = T),
      t
        ? ((T = E.alternate),
          T !== null
            ? ((T = T.index), T < y ? ((E.flags |= 2), y) : T)
            : ((E.flags |= 2), y))
        : ((E.flags |= 1048576), y)
    );
  }
  function o(E) {
    return t && E.alternate === null && (E.flags |= 2), E;
  }
  function a(E, y, T, k) {
    return y === null || y.tag !== 6
      ? ((y = hh(T, E.mode, k)), (y.return = E), y)
      : ((y = i(y, T)), (y.return = E), y);
  }
  function u(E, y, T, k) {
    var M = T.type;
    return M === zi
      ? h(E, y, T.props.children, k, T.key)
      : y !== null &&
          (y.elementType === M ||
            (typeof M == "object" &&
              M !== null &&
              M.$$typeof === hr &&
              Bg(M) === y.type))
        ? ((k = i(y, T.props)), (k.ref = io(E, y, T)), (k.return = E), k)
        : ((k = Ol(T.type, T.key, T.props, null, E.mode, k)),
          (k.ref = io(E, y, T)),
          (k.return = E),
          k);
  }
  function c(E, y, T, k) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== T.containerInfo ||
      y.stateNode.implementation !== T.implementation
      ? ((y = fh(T, E.mode, k)), (y.return = E), y)
      : ((y = i(y, T.children || [])), (y.return = E), y);
  }
  function h(E, y, T, k, M) {
    return y === null || y.tag !== 7
      ? ((y = mi(T, E.mode, k, M)), (y.return = E), y)
      : ((y = i(y, T)), (y.return = E), y);
  }
  function f(E, y, T) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = hh("" + y, E.mode, T)), (y.return = E), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ya:
          return (
            (T = Ol(y.type, y.key, y.props, null, E.mode, T)),
            (T.ref = io(E, null, y)),
            (T.return = E),
            T
          );
        case Ui:
          return (y = fh(y, E.mode, T)), (y.return = E), y;
        case hr:
          var k = y._init;
          return f(E, k(y._payload), T);
      }
      if (ho(y) || Zs(y))
        return (y = mi(y, E.mode, T, null)), (y.return = E), y;
      al(E, y);
    }
    return null;
  }
  function p(E, y, T, k) {
    var M = y !== null ? y.key : null;
    if ((typeof T == "string" && T !== "") || typeof T == "number")
      return M !== null ? null : a(E, y, "" + T, k);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case Ya:
          return T.key === M ? u(E, y, T, k) : null;
        case Ui:
          return T.key === M ? c(E, y, T, k) : null;
        case hr:
          return (M = T._init), p(E, y, M(T._payload), k);
      }
      if (ho(T) || Zs(T)) return M !== null ? null : h(E, y, T, k, null);
      al(E, T);
    }
    return null;
  }
  function g(E, y, T, k, M) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (E = E.get(T) || null), a(y, E, "" + k, M);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ya:
          return (E = E.get(k.key === null ? T : k.key) || null), u(y, E, k, M);
        case Ui:
          return (E = E.get(k.key === null ? T : k.key) || null), c(y, E, k, M);
        case hr:
          var j = k._init;
          return g(E, y, T, j(k._payload), M);
      }
      if (ho(k) || Zs(k)) return (E = E.get(T) || null), h(y, E, k, M, null);
      al(y, k);
    }
    return null;
  }
  function w(E, y, T, k) {
    for (
      var M = null, j = null, P = y, v = (y = 0), S = null;
      P !== null && v < T.length;
      v++
    ) {
      P.index > v ? ((S = P), (P = null)) : (S = P.sibling);
      var x = p(E, P, T[v], k);
      if (x === null) {
        P === null && (P = S);
        break;
      }
      t && P && x.alternate === null && e(E, P),
        (y = s(x, y, v)),
        j === null ? (M = x) : (j.sibling = x),
        (j = x),
        (P = S);
    }
    if (v === T.length) return n(E, P), De && ri(E, v), M;
    if (P === null) {
      for (; v < T.length; v++)
        (P = f(E, T[v], k)),
          P !== null &&
            ((y = s(P, y, v)), j === null ? (M = P) : (j.sibling = P), (j = P));
      return De && ri(E, v), M;
    }
    for (P = r(E, P); v < T.length; v++)
      (S = g(P, E, v, T[v], k)),
        S !== null &&
          (t && S.alternate !== null && P.delete(S.key === null ? v : S.key),
          (y = s(S, y, v)),
          j === null ? (M = S) : (j.sibling = S),
          (j = S));
    return (
      t &&
        P.forEach(function (R) {
          return e(E, R);
        }),
      De && ri(E, v),
      M
    );
  }
  function C(E, y, T, k) {
    var M = Zs(T);
    if (typeof M != "function") throw Error(W(150));
    if (((T = M.call(T)), T == null)) throw Error(W(151));
    for (
      var j = (M = null), P = y, v = (y = 0), S = null, x = T.next();
      P !== null && !x.done;
      v++, x = T.next()
    ) {
      P.index > v ? ((S = P), (P = null)) : (S = P.sibling);
      var R = p(E, P, x.value, k);
      if (R === null) {
        P === null && (P = S);
        break;
      }
      t && P && R.alternate === null && e(E, P),
        (y = s(R, y, v)),
        j === null ? (M = R) : (j.sibling = R),
        (j = R),
        (P = S);
    }
    if (x.done) return n(E, P), De && ri(E, v), M;
    if (P === null) {
      for (; !x.done; v++, x = T.next())
        (x = f(E, x.value, k)),
          x !== null &&
            ((y = s(x, y, v)), j === null ? (M = x) : (j.sibling = x), (j = x));
      return De && ri(E, v), M;
    }
    for (P = r(E, P); !x.done; v++, x = T.next())
      (x = g(P, E, v, x.value, k)),
        x !== null &&
          (t && x.alternate !== null && P.delete(x.key === null ? v : x.key),
          (y = s(x, y, v)),
          j === null ? (M = x) : (j.sibling = x),
          (j = x));
    return (
      t &&
        P.forEach(function (D) {
          return e(E, D);
        }),
      De && ri(E, v),
      M
    );
  }
  function A(E, y, T, k) {
    if (
      (typeof T == "object" &&
        T !== null &&
        T.type === zi &&
        T.key === null &&
        (T = T.props.children),
      typeof T == "object" && T !== null)
    ) {
      switch (T.$$typeof) {
        case Ya:
          e: {
            for (var M = T.key, j = y; j !== null; ) {
              if (j.key === M) {
                if (((M = T.type), M === zi)) {
                  if (j.tag === 7) {
                    n(E, j.sibling),
                      (y = i(j, T.props.children)),
                      (y.return = E),
                      (E = y);
                    break e;
                  }
                } else if (
                  j.elementType === M ||
                  (typeof M == "object" &&
                    M !== null &&
                    M.$$typeof === hr &&
                    Bg(M) === j.type)
                ) {
                  n(E, j.sibling),
                    (y = i(j, T.props)),
                    (y.ref = io(E, j, T)),
                    (y.return = E),
                    (E = y);
                  break e;
                }
                n(E, j);
                break;
              } else e(E, j);
              j = j.sibling;
            }
            T.type === zi
              ? ((y = mi(T.props.children, E.mode, k, T.key)),
                (y.return = E),
                (E = y))
              : ((k = Ol(T.type, T.key, T.props, null, E.mode, k)),
                (k.ref = io(E, y, T)),
                (k.return = E),
                (E = k));
          }
          return o(E);
        case Ui:
          e: {
            for (j = T.key; y !== null; ) {
              if (y.key === j)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === T.containerInfo &&
                  y.stateNode.implementation === T.implementation
                ) {
                  n(E, y.sibling),
                    (y = i(y, T.children || [])),
                    (y.return = E),
                    (E = y);
                  break e;
                } else {
                  n(E, y);
                  break;
                }
              else e(E, y);
              y = y.sibling;
            }
            (y = fh(T, E.mode, k)), (y.return = E), (E = y);
          }
          return o(E);
        case hr:
          return (j = T._init), A(E, y, j(T._payload), k);
      }
      if (ho(T)) return w(E, y, T, k);
      if (Zs(T)) return C(E, y, T, k);
      al(E, T);
    }
    return (typeof T == "string" && T !== "") || typeof T == "number"
      ? ((T = "" + T),
        y !== null && y.tag === 6
          ? (n(E, y.sibling), (y = i(y, T)), (y.return = E), (E = y))
          : (n(E, y), (y = hh(T, E.mode, k)), (y.return = E), (E = y)),
        o(E))
      : n(E, y);
  }
  return A;
}
var ms = U1(!0),
  z1 = U1(!1),
  ru = $r(null),
  iu = null,
  Yi = null,
  Ud = null;
function zd() {
  Ud = Yi = iu = null;
}
function $d(t) {
  var e = ru.current;
  Ve(ru), (t._currentValue = e);
}
function mf(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function ls(t, e) {
  (iu = t),
    (Ud = Yi = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && ($t = !0), (t.firstContext = null));
}
function fn(t) {
  var e = t._currentValue;
  if (Ud !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Yi === null)) {
      if (iu === null) throw Error(W(308));
      (Yi = t), (iu.dependencies = { lanes: 0, firstContext: t });
    } else Yi = Yi.next = t;
  return e;
}
var ui = null;
function Wd(t) {
  ui === null ? (ui = [t]) : ui.push(t);
}
function $1(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), Wd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Zn(t, r)
  );
}
function Zn(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fr = !1;
function Hd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function W1(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Gn(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Zn(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Wd(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Zn(t, n)
  );
}
function Rl(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), kd(t, n);
  }
}
function Ug(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function su(t, e, n, r) {
  var i = t.updateQueue;
  fr = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), o === null ? (s = c) : (o.next = c), (o = u);
    var h = t.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== o &&
        (a === null ? (h.firstBaseUpdate = c) : (a.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (h = c = u = null), (a = s);
    do {
      var p = a.lane,
        g = a.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = t,
            C = a;
          switch (((p = e), (g = n), C.tag)) {
            case 1:
              if (((w = C.payload), typeof w == "function")) {
                f = w.call(g, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = C.payload),
                (p = typeof w == "function" ? w.call(g, f, p) : w),
                p == null)
              )
                break e;
              f = je({}, f, p);
              break e;
            case 2:
              fr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (u = f)) : (h = h.next = g),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = h),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (Ei |= o), (t.lanes = o), (t.memoizedState = f);
  }
}
function zg(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(W(191, i));
        i.call(r);
      }
    }
}
var wa = {},
  kn = $r(wa),
  Qo = $r(wa),
  Yo = $r(wa);
function ci(t) {
  if (t === wa) throw Error(W(174));
  return t;
}
function Kd(t, e) {
  switch ((Ie(Yo, e), Ie(Qo, t), Ie(kn, wa), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : qh(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = qh(e, t));
  }
  Ve(kn), Ie(kn, e);
}
function gs() {
  Ve(kn), Ve(Qo), Ve(Yo);
}
function H1(t) {
  ci(Yo.current);
  var e = ci(kn.current),
    n = qh(e, t.type);
  e !== n && (Ie(Qo, t), Ie(kn, n));
}
function Gd(t) {
  Qo.current === t && (Ve(kn), Ve(Qo));
}
var Me = $r(0);
function ou(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var sh = [];
function qd() {
  for (var t = 0; t < sh.length; t++)
    sh[t]._workInProgressVersionPrimary = null;
  sh.length = 0;
}
var kl = ir.ReactCurrentDispatcher,
  oh = ir.ReactCurrentBatchConfig,
  wi = 0,
  Fe = null,
  et = null,
  at = null,
  au = !1,
  xo = !1,
  Xo = 0,
  Dx = 0;
function St() {
  throw Error(W(321));
}
function Qd(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!En(t[n], e[n])) return !1;
  return !0;
}
function Yd(t, e, n, r, i, s) {
  if (
    ((wi = s),
    (Fe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (kl.current = t === null || t.memoizedState === null ? Mx : Lx),
    (t = n(r, i)),
    xo)
  ) {
    s = 0;
    do {
      if (((xo = !1), (Xo = 0), 25 <= s)) throw Error(W(301));
      (s += 1),
        (at = et = null),
        (e.updateQueue = null),
        (kl.current = Fx),
        (t = n(r, i));
    } while (xo);
  }
  if (
    ((kl.current = lu),
    (e = et !== null && et.next !== null),
    (wi = 0),
    (at = et = Fe = null),
    (au = !1),
    e)
  )
    throw Error(W(300));
  return t;
}
function Xd() {
  var t = Xo !== 0;
  return (Xo = 0), t;
}
function An() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return at === null ? (Fe.memoizedState = at = t) : (at = at.next = t), at;
}
function dn() {
  if (et === null) {
    var t = Fe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = et.next;
  var e = at === null ? Fe.memoizedState : at.next;
  if (e !== null) (at = e), (et = t);
  else {
    if (t === null) throw Error(W(310));
    (et = t),
      (t = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null,
      }),
      at === null ? (Fe.memoizedState = at = t) : (at = at.next = t);
  }
  return at;
}
function Jo(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function ah(t) {
  var e = dn(),
    n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = et,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      c = s;
    do {
      var h = c.lane;
      if ((wi & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : t(r, c.action));
      else {
        var f = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
          (Fe.lanes |= h),
          (Ei |= h);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (o = r) : (u.next = a),
      En(r, e.memoizedState) || ($t = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (Fe.lanes |= s), (Ei |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function lh(t) {
  var e = dn(),
    n = e.queue;
  if (n === null) throw Error(W(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    En(s, e.memoizedState) || ($t = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function K1() {}
function G1(t, e) {
  var n = Fe,
    r = dn(),
    i = e(),
    s = !En(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), ($t = !0)),
    (r = r.queue),
    Jd(Y1.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (at !== null && at.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zo(9, Q1.bind(null, n, r, i, e), void 0, null),
      lt === null)
    )
      throw Error(W(349));
    wi & 30 || q1(n, e, i);
  }
  return i;
}
function q1(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Fe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Fe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Q1(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), X1(e) && J1(t);
}
function Y1(t, e, n) {
  return n(function () {
    X1(e) && J1(t);
  });
}
function X1(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !En(t, n);
  } catch {
    return !0;
  }
}
function J1(t) {
  var e = Zn(t, 1);
  e !== null && wn(e, t, 1, -1);
}
function $g(t) {
  var e = An();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jo,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Ox.bind(null, Fe, t)),
    [e.memoizedState, t]
  );
}
function Zo(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Fe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Fe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Z1() {
  return dn().memoizedState;
}
function Vl(t, e, n, r) {
  var i = An();
  (Fe.flags |= t),
    (i.memoizedState = Zo(1 | e, n, void 0, r === void 0 ? null : r));
}
function Wu(t, e, n, r) {
  var i = dn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (et !== null) {
    var o = et.memoizedState;
    if (((s = o.destroy), r !== null && Qd(r, o.deps))) {
      i.memoizedState = Zo(e, n, s, r);
      return;
    }
  }
  (Fe.flags |= t), (i.memoizedState = Zo(1 | e, n, s, r));
}
function Wg(t, e) {
  return Vl(8390656, 8, t, e);
}
function Jd(t, e) {
  return Wu(2048, 8, t, e);
}
function e_(t, e) {
  return Wu(4, 2, t, e);
}
function t_(t, e) {
  return Wu(4, 4, t, e);
}
function n_(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function r_(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), Wu(4, 4, n_.bind(null, e, t), n)
  );
}
function Zd() {}
function i_(t, e) {
  var n = dn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Qd(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function s_(t, e) {
  var n = dn();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Qd(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function o_(t, e, n) {
  return wi & 21
    ? (En(n, e) || ((n = h1()), (Fe.lanes |= n), (Ei |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), ($t = !0)), (t.memoizedState = n));
}
function bx(t, e) {
  var n = Te;
  (Te = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = oh.transition;
  oh.transition = {};
  try {
    t(!1), e();
  } finally {
    (Te = n), (oh.transition = r);
  }
}
function a_() {
  return dn().memoizedState;
}
function Nx(t, e, n) {
  var r = xr(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    l_(t))
  )
    u_(e, n);
  else if (((n = $1(t, e, n, r)), n !== null)) {
    var i = Mt();
    wn(n, t, r, i), c_(n, e, r);
  }
}
function Ox(t, e, n) {
  var r = xr(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (l_(t)) u_(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), En(a, o))) {
          var u = e.interleaved;
          u === null
            ? ((i.next = i), Wd(e))
            : ((i.next = u.next), (u.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $1(t, e, i, r)),
      n !== null && ((i = Mt()), wn(n, t, r, i), c_(n, e, r));
  }
}
function l_(t) {
  var e = t.alternate;
  return t === Fe || (e !== null && e === Fe);
}
function u_(t, e) {
  xo = au = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function c_(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), kd(t, n);
  }
}
var lu = {
    readContext: fn,
    useCallback: St,
    useContext: St,
    useEffect: St,
    useImperativeHandle: St,
    useInsertionEffect: St,
    useLayoutEffect: St,
    useMemo: St,
    useReducer: St,
    useRef: St,
    useState: St,
    useDebugValue: St,
    useDeferredValue: St,
    useTransition: St,
    useMutableSource: St,
    useSyncExternalStore: St,
    useId: St,
    unstable_isNewReconciler: !1,
  },
  Mx = {
    readContext: fn,
    useCallback: function (t, e) {
      return (An().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: fn,
    useEffect: Wg,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        Vl(4194308, 4, n_.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return Vl(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Vl(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = An();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = An();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Nx.bind(null, Fe, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = An();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: $g,
    useDebugValue: Zd,
    useDeferredValue: function (t) {
      return (An().memoizedState = t);
    },
    useTransition: function () {
      var t = $g(!1),
        e = t[0];
      return (t = bx.bind(null, t[1])), (An().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Fe,
        i = An();
      if (De) {
        if (n === void 0) throw Error(W(407));
        n = n();
      } else {
        if (((n = e()), lt === null)) throw Error(W(349));
        wi & 30 || q1(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        Wg(Y1.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        Zo(9, Q1.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = An(),
        e = lt.identifierPrefix;
      if (De) {
        var n = Hn,
          r = Wn;
        (n = (r & ~(1 << (32 - _n(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Xo++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Dx++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Lx = {
    readContext: fn,
    useCallback: i_,
    useContext: fn,
    useEffect: Jd,
    useImperativeHandle: r_,
    useInsertionEffect: e_,
    useLayoutEffect: t_,
    useMemo: s_,
    useReducer: ah,
    useRef: Z1,
    useState: function () {
      return ah(Jo);
    },
    useDebugValue: Zd,
    useDeferredValue: function (t) {
      var e = dn();
      return o_(e, et.memoizedState, t);
    },
    useTransition: function () {
      var t = ah(Jo)[0],
        e = dn().memoizedState;
      return [t, e];
    },
    useMutableSource: K1,
    useSyncExternalStore: G1,
    useId: a_,
    unstable_isNewReconciler: !1,
  },
  Fx = {
    readContext: fn,
    useCallback: i_,
    useContext: fn,
    useEffect: Jd,
    useImperativeHandle: r_,
    useInsertionEffect: e_,
    useLayoutEffect: t_,
    useMemo: s_,
    useReducer: lh,
    useRef: Z1,
    useState: function () {
      return lh(Jo);
    },
    useDebugValue: Zd,
    useDeferredValue: function (t) {
      var e = dn();
      return et === null ? (e.memoizedState = t) : o_(e, et.memoizedState, t);
    },
    useTransition: function () {
      var t = lh(Jo)[0],
        e = dn().memoizedState;
      return [t, e];
    },
    useMutableSource: K1,
    useSyncExternalStore: G1,
    useId: a_,
    unstable_isNewReconciler: !1,
  };
function gn(t, e) {
  if (t && t.defaultProps) {
    (e = je({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function gf(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : je({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Hu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Ri(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = Mt(),
      i = xr(t),
      s = Gn(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Sr(t, s, i)),
      e !== null && (wn(e, t, i, r), Rl(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = Mt(),
      i = xr(t),
      s = Gn(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Sr(t, s, i)),
      e !== null && (wn(e, t, i, r), Rl(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Mt(),
      r = xr(t),
      i = Gn(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Sr(t, i, r)),
      e !== null && (wn(e, t, r, n), Rl(e, t, r));
  },
};
function Hg(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Ho(n, r) || !Ho(i, s)
        : !0
  );
}
function h_(t, e, n) {
  var r = !1,
    i = Or,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = fn(s))
      : ((i = Ht(e) ? vi : Dt.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? ds(t, i) : Or)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Hu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Kg(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Hu.enqueueReplaceState(e, e.state, null);
}
function yf(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = {}), Hd(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = fn(s))
    : ((s = Ht(e) ? vi : Dt.current), (i.context = ds(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (gf(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Hu.enqueueReplaceState(i, i.state, null),
      su(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function ys(t, e) {
  try {
    var n = "",
      r = e;
    do (n += fP(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function uh(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function vf(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jx = typeof WeakMap == "function" ? WeakMap : Map;
function f_(t, e, n) {
  (n = Gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      cu || ((cu = !0), (If = r)), vf(t, e);
    }),
    n
  );
}
function d_(t, e, n) {
  (n = Gn(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        vf(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        vf(t, e),
          typeof r != "function" &&
            (Pr === null ? (Pr = new Set([this])) : Pr.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Gg(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new jx();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = Zx.bind(null, t, e, n)), e.then(t, t));
}
function qg(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Qg(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Gn(-1, 1)), (e.tag = 2), Sr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Bx = ir.ReactCurrentOwner,
  $t = !1;
function Ot(t, e, n, r) {
  e.child = t === null ? z1(e, null, n, r) : ms(e, t.child, n, r);
}
function Yg(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    ls(e, i),
    (r = Yd(t, e, n, r, s, i)),
    (n = Xd()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        er(t, e, i))
      : (De && n && Fd(e), (e.flags |= 1), Ot(t, e, r, i), e.child)
  );
}
function Xg(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ap(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), p_(t, e, s, r, i))
      : ((t = Ol(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ho), n(o, r) && t.ref === e.ref)
    )
      return er(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Cr(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function p_(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (Ho(s, r) && t.ref === e.ref)
      if ((($t = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && ($t = !0);
      else return (e.lanes = t.lanes), er(t, e, i);
  }
  return _f(t, e, n, r, i);
}
function m_(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ie(Ji, Yt),
        (Yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Ie(Ji, Yt),
          (Yt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        Ie(Ji, Yt),
        (Yt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      Ie(Ji, Yt),
      (Yt |= r);
  return Ot(t, e, i, n), e.child;
}
function g_(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function _f(t, e, n, r, i) {
  var s = Ht(n) ? vi : Dt.current;
  return (
    (s = ds(e, s)),
    ls(e, i),
    (n = Yd(t, e, n, r, s, i)),
    (r = Xd()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        er(t, e, i))
      : (De && r && Fd(e), (e.flags |= 1), Ot(t, e, n, i), e.child)
  );
}
function Jg(t, e, n, r, i) {
  if (Ht(n)) {
    var s = !0;
    eu(e);
  } else s = !1;
  if ((ls(e, i), e.stateNode === null))
    Dl(t, e), h_(e, n, r), yf(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = fn(c))
      : ((c = Ht(n) ? vi : Dt.current), (c = ds(e, c)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Kg(e, o, r, c)),
      (fr = !1);
    var p = e.memoizedState;
    (o.state = p),
      su(e, r, o, i),
      (u = e.memoizedState),
      a !== r || p !== u || Wt.current || fr
        ? (typeof h == "function" && (gf(e, n, h, r), (u = e.memoizedState)),
          (a = fr || Hg(e, n, a, r, p, u, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      W1(t, e),
      (a = e.memoizedProps),
      (c = e.type === e.elementType ? a : gn(e.type, a)),
      (o.props = c),
      (f = e.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = fn(u))
        : ((u = Ht(n) ? vi : Dt.current), (u = ds(e, u)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || p !== u) && Kg(e, o, r, u)),
      (fr = !1),
      (p = e.memoizedState),
      (o.state = p),
      su(e, r, o, i);
    var w = e.memoizedState;
    a !== f || p !== w || Wt.current || fr
      ? (typeof g == "function" && (gf(e, n, g, r), (w = e.memoizedState)),
        (c = fr || Hg(e, n, c, r, p, w, u) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && p === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && p === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && p === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && p === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return wf(t, e, n, r, s, i);
}
function wf(t, e, n, r, i, s) {
  g_(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Lg(e, n, !1), er(t, e, s);
  (r = e.stateNode), (Bx.current = e);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = ms(e, t.child, null, s)), (e.child = ms(e, null, a, s)))
      : Ot(t, e, a, s),
    (e.memoizedState = r.state),
    i && Lg(e, n, !0),
    e.child
  );
}
function y_(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Mg(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Mg(t, e.context, !1),
    Kd(t, e.containerInfo);
}
function Zg(t, e, n, r, i) {
  return ps(), Bd(i), (e.flags |= 256), Ot(t, e, n, r), e.child;
}
var Ef = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tf(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function v_(t, e, n) {
  var r = e.pendingProps,
    i = Me.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    Ie(Me, i & 1),
    t === null)
  )
    return (
      pf(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = qu(o, r, 0, null)),
              (t = mi(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Tf(n)),
              (e.memoizedState = Ef),
              t)
            : ep(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ux(t, e, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (e.deletions = null))
        : ((r = Cr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Cr(a, s)) : ((s = mi(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? Tf(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Ef),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = Cr(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function ep(t, e) {
  return (
    (e = qu({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function ll(t, e, n, r) {
  return (
    r !== null && Bd(r),
    ms(e, t.child, null, n),
    (t = ep(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Ux(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = uh(Error(W(422)))), ll(t, e, o, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((s = r.fallback),
          (i = e.mode),
          (r = qu({ mode: "visible", children: r.children }, i, 0, null)),
          (s = mi(s, i, o, null)),
          (s.flags |= 2),
          (r.return = e),
          (s.return = e),
          (r.sibling = s),
          (e.child = r),
          e.mode & 1 && ms(e, t.child, null, o),
          (e.child.memoizedState = Tf(o)),
          (e.memoizedState = Ef),
          s);
  if (!(e.mode & 1)) return ll(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(W(419))), (r = uh(s, r, void 0)), ll(t, e, o, r);
  }
  if (((a = (o & t.childLanes) !== 0), $t || a)) {
    if (((r = lt), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Zn(t, i), wn(r, t, i, -1));
    }
    return op(), (r = uh(Error(W(421)))), ll(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = eC.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (Xt = Tr(i.nextSibling)),
      (Zt = e),
      (De = !0),
      (vn = null),
      t !== null &&
        ((ln[un++] = Wn),
        (ln[un++] = Hn),
        (ln[un++] = _i),
        (Wn = t.id),
        (Hn = t.overflow),
        (_i = e)),
      (e = ep(e, r.children)),
      (e.flags |= 4096),
      e);
}
function ey(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), mf(t.return, e, n);
}
function ch(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function __(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ot(t, e, r.children, n), (r = Me.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ey(t, n, e);
        else if (t.tag === 19) ey(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((Ie(Me, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && ou(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ch(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && ou(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        ch(e, !0, n, null, s);
        break;
      case "together":
        ch(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Dl(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function er(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Ei |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(W(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Cr(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Cr(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function zx(t, e, n) {
  switch (e.tag) {
    case 3:
      y_(e), ps();
      break;
    case 5:
      H1(e);
      break;
    case 1:
      Ht(e.type) && eu(e);
      break;
    case 4:
      Kd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      Ie(ru, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ie(Me, Me.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? v_(t, e, n)
            : (Ie(Me, Me.current & 1),
              (t = er(t, e, n)),
              t !== null ? t.sibling : null);
      Ie(Me, Me.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return __(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ie(Me, Me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), m_(t, e, n);
  }
  return er(t, e, n);
}
var w_, Sf, E_, T_;
w_ = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sf = function () {};
E_ = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), ci(kn.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Wh(t, i)), (r = Wh(t, r)), (s = []);
        break;
      case "select":
        (i = je({}, i, { value: void 0 })),
          (r = je({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Gh(t, i)), (r = Gh(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Jl);
    }
    Qh(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Fo.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (s = s || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Fo.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && ke("scroll", t),
                    s || a === u || (s = []))
                  : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
T_ = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function so(t, e) {
  if (!De)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function $x(t, e, n) {
  var r = e.pendingProps;
  switch ((jd(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pt(e), null;
    case 1:
      return Ht(e.type) && Zl(), Pt(e), null;
    case 3:
      return (
        (r = e.stateNode),
        gs(),
        Ve(Wt),
        Ve(Dt),
        qd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (ol(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), vn !== null && (Vf(vn), (vn = null)))),
        Sf(t, e),
        Pt(e),
        null
      );
    case 5:
      Gd(e);
      var i = ci(Yo.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        E_(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(W(166));
          return Pt(e), null;
        }
        if (((t = ci(kn.current)), ol(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[In] = e), (r[qo] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < po.length; i++) ke(po[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              ug(r, s), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              hg(r, s), ke("invalid", r);
          }
          Qh(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, a, t),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, a, t),
                    (i = ["children", "" + a]))
                : Fo.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              Xa(r), cg(r, s, !0);
              break;
            case "textarea":
              Xa(r), fg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Jl);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Y0(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = o.createElement(n, { is: r.is }))
                  : ((t = o.createElement(n)),
                    n === "select" &&
                      ((o = t),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[In] = e),
            (t[qo] = r),
            w_(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = Yh(n, r)), n)) {
              case "dialog":
                ke("cancel", t), ke("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < po.length; i++) ke(po[i], t);
                i = r;
                break;
              case "source":
                ke("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", t), ke("load", t), (i = r);
                break;
              case "details":
                ke("toggle", t), (i = r);
                break;
              case "input":
                ug(t, r), (i = Wh(t, r)), ke("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = je({}, r, { value: void 0 })),
                  ke("invalid", t);
                break;
              case "textarea":
                hg(t, r), (i = Gh(t, r)), ke("invalid", t);
                break;
              default:
                i = r;
            }
            Qh(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? Z0(t, u)
                  : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && X0(t, u))
                    : s === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && jo(t, u)
                        : typeof u == "number" && jo(t, "" + u)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Fo.hasOwnProperty(s)
                          ? u != null && s === "onScroll" && ke("scroll", t)
                          : u != null && Pd(t, s, u, o));
              }
            switch (n) {
              case "input":
                Xa(t), cg(t, r, !1);
                break;
              case "textarea":
                Xa(t), fg(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Nr(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? is(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      is(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Jl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Pt(e), null;
    case 6:
      if (t && e.stateNode != null) T_(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(W(166));
        if (((n = ci(Yo.current)), ci(kn.current), ol(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[In] = e),
            (s = r.nodeValue !== n) && ((t = Zt), t !== null))
          )
            switch (t.tag) {
              case 3:
                sl(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  sl(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[In] = e),
            (e.stateNode = r);
      }
      return Pt(e), null;
    case 13:
      if (
        (Ve(Me),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (De && Xt !== null && e.mode & 1 && !(e.flags & 128))
          B1(), ps(), (e.flags |= 98560), (s = !1);
        else if (((s = ol(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(W(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(W(317));
            s[In] = e;
          } else
            ps(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Pt(e), (s = !1);
        } else vn !== null && (Vf(vn), (vn = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Me.current & 1 ? nt === 0 && (nt = 3) : op())),
          e.updateQueue !== null && (e.flags |= 4),
          Pt(e),
          null);
    case 4:
      return (
        gs(), Sf(t, e), t === null && Ko(e.stateNode.containerInfo), Pt(e), null
      );
    case 10:
      return $d(e.type._context), Pt(e), null;
    case 17:
      return Ht(e.type) && Zl(), Pt(e), null;
    case 19:
      if ((Ve(Me), (s = e.memoizedState), s === null)) return Pt(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) so(s, !1);
        else {
          if (nt !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = ou(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    so(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return Ie(Me, (Me.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            Qe() > vs &&
            ((e.flags |= 128), (r = !0), so(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = ou(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              so(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !De)
            )
              return Pt(e), null;
          } else
            2 * Qe() - s.renderingStartTime > vs &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), so(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = Qe()),
          (e.sibling = null),
          (n = Me.current),
          Ie(Me, r ? (n & 1) | 2 : n & 1),
          e)
        : (Pt(e), null);
    case 22:
    case 23:
      return (
        sp(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? Yt & 1073741824 && (Pt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Pt(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(W(156, e.tag));
}
function Wx(t, e) {
  switch ((jd(e), e.tag)) {
    case 1:
      return (
        Ht(e.type) && Zl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        gs(),
        Ve(Wt),
        Ve(Dt),
        qd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Gd(e), null;
    case 13:
      if (
        (Ve(Me), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(W(340));
        ps();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Ve(Me), null;
    case 4:
      return gs(), null;
    case 10:
      return $d(e.type._context), null;
    case 22:
    case 23:
      return sp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ul = !1,
  It = !1,
  Hx = typeof WeakSet == "function" ? WeakSet : Set,
  q = null;
function Xi(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $e(t, e, r);
      }
    else n.current = null;
}
function Pf(t, e, n) {
  try {
    n();
  } catch (r) {
    $e(t, e, r);
  }
}
var ty = !1;
function Kx(t, e) {
  if (((af = Ql), (t = A1()), Ld(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            c = 0,
            h = 0,
            f = t,
            p = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g);
            for (;;) {
              if (f === t) break t;
              if (
                (p === n && ++c === i && (a = o),
                p === s && ++h === r && (u = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (lf = { focusedElem: t, selectionRange: n }, Ql = !1, q = e; q !== null; )
    if (((e = q), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (q = t);
    else
      for (; q !== null; ) {
        e = q;
        try {
          var w = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var C = w.memoizedProps,
                    A = w.memoizedState,
                    E = e.stateNode,
                    y = E.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? C : gn(e.type, C),
                      A,
                    );
                  E.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var T = e.stateNode.containerInfo;
                T.nodeType === 1
                  ? (T.textContent = "")
                  : T.nodeType === 9 &&
                    T.documentElement &&
                    T.removeChild(T.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(W(163));
            }
        } catch (k) {
          $e(e, e.return, k);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (q = t);
          break;
        }
        q = e.return;
      }
  return (w = ty), (ty = !1), w;
}
function Co(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Pf(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ku(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function xf(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function S_(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), S_(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[In], delete e[qo], delete e[hf], delete e[Ix], delete e[Rx])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function P_(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function ny(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || P_(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Cf(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Jl));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Cf(t, e, n), t = t.sibling; t !== null; ) Cf(t, e, n), (t = t.sibling);
}
function Af(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Af(t, e, n), t = t.sibling; t !== null; ) Af(t, e, n), (t = t.sibling);
}
var ft = null,
  yn = !1;
function ur(t, e, n) {
  for (n = n.child; n !== null; ) x_(t, e, n), (n = n.sibling);
}
function x_(t, e, n) {
  if (Rn && typeof Rn.onCommitFiberUnmount == "function")
    try {
      Rn.onCommitFiberUnmount(Fu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      It || Xi(n, e);
    case 6:
      var r = ft,
        i = yn;
      (ft = null),
        ur(t, e, n),
        (ft = r),
        (yn = i),
        ft !== null &&
          (yn
            ? ((t = ft),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ft.removeChild(n.stateNode));
      break;
    case 18:
      ft !== null &&
        (yn
          ? ((t = ft),
            (n = n.stateNode),
            t.nodeType === 8
              ? rh(t.parentNode, n)
              : t.nodeType === 1 && rh(t, n),
            $o(t))
          : rh(ft, n.stateNode));
      break;
    case 4:
      (r = ft),
        (i = yn),
        (ft = n.stateNode.containerInfo),
        (yn = !0),
        ur(t, e, n),
        (ft = r),
        (yn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !It &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Pf(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      ur(t, e, n);
      break;
    case 1:
      if (
        !It &&
        (Xi(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          $e(n, e, a);
        }
      ur(t, e, n);
      break;
    case 21:
      ur(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((It = (r = It) || n.memoizedState !== null), ur(t, e, n), (It = r))
        : ur(t, e, n);
      break;
    default:
      ur(t, e, n);
  }
}
function ry(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Hx()),
      e.forEach(function (r) {
        var i = tC.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ft = a.stateNode), (yn = !1);
              break e;
            case 3:
              (ft = a.stateNode.containerInfo), (yn = !0);
              break e;
            case 4:
              (ft = a.stateNode.containerInfo), (yn = !0);
              break e;
          }
          a = a.return;
        }
        if (ft === null) throw Error(W(160));
        x_(s, o, i), (ft = null), (yn = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        $e(i, e, c);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) C_(e, t), (e = e.sibling);
}
function C_(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mn(e, t), Cn(t), r & 4)) {
        try {
          Co(3, t, t.return), Ku(3, t);
        } catch (C) {
          $e(t, t.return, C);
        }
        try {
          Co(5, t, t.return);
        } catch (C) {
          $e(t, t.return, C);
        }
      }
      break;
    case 1:
      mn(e, t), Cn(t), r & 512 && n !== null && Xi(n, n.return);
      break;
    case 5:
      if (
        (mn(e, t),
        Cn(t),
        r & 512 && n !== null && Xi(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          jo(i, "");
        } catch (C) {
          $e(t, t.return, C);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = t.type,
          u = t.updateQueue;
        if (((t.updateQueue = null), u !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && q0(i, s),
              Yh(a, o);
            var c = Yh(a, s);
            for (o = 0; o < u.length; o += 2) {
              var h = u[o],
                f = u[o + 1];
              h === "style"
                ? Z0(i, f)
                : h === "dangerouslySetInnerHTML"
                  ? X0(i, f)
                  : h === "children"
                    ? jo(i, f)
                    : Pd(i, h, f, c);
            }
            switch (a) {
              case "input":
                Hh(i, s);
                break;
              case "textarea":
                Q0(i, s);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? is(i, !!s.multiple, g, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? is(i, !!s.multiple, s.defaultValue, !0)
                      : is(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[qo] = s;
          } catch (C) {
            $e(t, t.return, C);
          }
      }
      break;
    case 6:
      if ((mn(e, t), Cn(t), r & 4)) {
        if (t.stateNode === null) throw Error(W(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (C) {
          $e(t, t.return, C);
        }
      }
      break;
    case 3:
      if (
        (mn(e, t), Cn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $o(e.containerInfo);
        } catch (C) {
          $e(t, t.return, C);
        }
      break;
    case 4:
      mn(e, t), Cn(t);
      break;
    case 13:
      mn(e, t),
        Cn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (rp = Qe())),
        r & 4 && ry(t);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((It = (c = It) || h), mn(e, t), (It = c)) : mn(e, t),
        Cn(t),
        r & 8192)
      ) {
        if (
          ((c = t.memoizedState !== null),
          (t.stateNode.isHidden = c) && !h && t.mode & 1)
        )
          for (q = t, h = t.child; h !== null; ) {
            for (f = q = h; q !== null; ) {
              switch (((p = q), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Co(4, p, p.return);
                  break;
                case 1:
                  Xi(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (e = r),
                        (w.props = e.memoizedProps),
                        (w.state = e.memoizedState),
                        w.componentWillUnmount();
                    } catch (C) {
                      $e(r, n, C);
                    }
                  }
                  break;
                case 5:
                  Xi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    sy(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (q = g)) : sy(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = t; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = J0("display", o)));
              } catch (C) {
                $e(t, t.return, C);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (C) {
                $e(t, t.return, C);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      mn(e, t), Cn(t), r & 4 && ry(t);
      break;
    case 21:
      break;
    default:
      mn(e, t), Cn(t);
  }
}
function Cn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (P_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(W(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (jo(i, ""), (r.flags &= -33));
          var s = ny(t);
          Af(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = ny(t);
          Cf(t, a, o);
          break;
        default:
          throw Error(W(161));
      }
    } catch (u) {
      $e(t, t.return, u);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Gx(t, e, n) {
  (q = t), A_(t);
}
function A_(t, e, n) {
  for (var r = (t.mode & 1) !== 0; q !== null; ) {
    var i = q,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ul;
      if (!o) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || It;
        a = ul;
        var c = It;
        if (((ul = o), (It = u) && !c))
          for (q = i; q !== null; )
            (o = q),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? oy(i)
                : u !== null
                  ? ((u.return = o), (q = u))
                  : oy(i);
        for (; s !== null; ) (q = s), A_(s), (s = s.sibling);
        (q = i), (ul = a), (It = c);
      }
      iy(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (q = s)) : iy(t);
  }
}
function iy(t) {
  for (; q !== null; ) {
    var e = q;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              It || Ku(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !It)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : gn(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = e.updateQueue;
              s !== null && zg(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                zg(e, o, n);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (n === null && e.flags & 4) {
                n = a;
                var u = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var c = e.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && $o(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(W(163));
          }
        It || (e.flags & 512 && xf(e));
      } catch (p) {
        $e(e, e.return, p);
      }
    }
    if (e === t) {
      q = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (q = n);
      break;
    }
    q = e.return;
  }
}
function sy(t) {
  for (; q !== null; ) {
    var e = q;
    if (e === t) {
      q = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (q = n);
      break;
    }
    q = e.return;
  }
}
function oy(t) {
  for (; q !== null; ) {
    var e = q;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Ku(4, e);
          } catch (u) {
            $e(e, n, u);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (u) {
              $e(e, i, u);
            }
          }
          var s = e.return;
          try {
            xf(e);
          } catch (u) {
            $e(e, s, u);
          }
          break;
        case 5:
          var o = e.return;
          try {
            xf(e);
          } catch (u) {
            $e(e, o, u);
          }
      }
    } catch (u) {
      $e(e, e.return, u);
    }
    if (e === t) {
      q = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (q = a);
      break;
    }
    q = e.return;
  }
}
var qx = Math.ceil,
  uu = ir.ReactCurrentDispatcher,
  tp = ir.ReactCurrentOwner,
  hn = ir.ReactCurrentBatchConfig,
  pe = 0,
  lt = null,
  Ze = null,
  gt = 0,
  Yt = 0,
  Ji = $r(0),
  nt = 0,
  ea = null,
  Ei = 0,
  Gu = 0,
  np = 0,
  Ao = null,
  Ut = null,
  rp = 0,
  vs = 1 / 0,
  zn = null,
  cu = !1,
  If = null,
  Pr = null,
  cl = !1,
  gr = null,
  hu = 0,
  Io = 0,
  Rf = null,
  bl = -1,
  Nl = 0;
function Mt() {
  return pe & 6 ? Qe() : bl !== -1 ? bl : (bl = Qe());
}
function xr(t) {
  return t.mode & 1
    ? pe & 2 && gt !== 0
      ? gt & -gt
      : Vx.transition !== null
        ? (Nl === 0 && (Nl = h1()), Nl)
        : ((t = Te),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : v1(t.type))),
          t)
    : 1;
}
function wn(t, e, n, r) {
  if (50 < Io) throw ((Io = 0), (Rf = null), Error(W(185)));
  ya(t, n, r),
    (!(pe & 2) || t !== lt) &&
      (t === lt && (!(pe & 2) && (Gu |= n), nt === 4 && pr(t, gt)),
      Kt(t, r),
      n === 1 && pe === 0 && !(e.mode & 1) && ((vs = Qe() + 500), $u && Wr()));
}
function Kt(t, e) {
  var n = t.callbackNode;
  VP(t, e);
  var r = ql(t, t === lt ? gt : 0);
  if (r === 0)
    n !== null && mg(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && mg(n), e === 1))
      t.tag === 0 ? kx(ay.bind(null, t)) : L1(ay.bind(null, t)),
        Cx(function () {
          !(pe & 6) && Wr();
        }),
        (n = null);
    else {
      switch (f1(r)) {
        case 1:
          n = Rd;
          break;
        case 4:
          n = u1;
          break;
        case 16:
          n = Gl;
          break;
        case 536870912:
          n = c1;
          break;
        default:
          n = Gl;
      }
      n = O_(n, I_.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function I_(t, e) {
  if (((bl = -1), (Nl = 0), pe & 6)) throw Error(W(327));
  var n = t.callbackNode;
  if (us() && t.callbackNode !== n) return null;
  var r = ql(t, t === lt ? gt : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = fu(t, r);
  else {
    e = r;
    var i = pe;
    pe |= 2;
    var s = k_();
    (lt !== t || gt !== e) && ((zn = null), (vs = Qe() + 500), pi(t, e));
    do
      try {
        Xx();
        break;
      } catch (a) {
        R_(t, a);
      }
    while (!0);
    zd(),
      (uu.current = s),
      (pe = i),
      Ze !== null ? (e = 0) : ((lt = null), (gt = 0), (e = nt));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = tf(t)), i !== 0 && ((r = i), (e = kf(t, i)))), e === 1)
    )
      throw ((n = ea), pi(t, 0), pr(t, r), Kt(t, Qe()), n);
    if (e === 6) pr(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !Qx(i) &&
          ((e = fu(t, r)),
          e === 2 && ((s = tf(t)), s !== 0 && ((r = s), (e = kf(t, s)))),
          e === 1))
      )
        throw ((n = ea), pi(t, 0), pr(t, r), Kt(t, Qe()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(W(345));
        case 2:
          ii(t, Ut, zn);
          break;
        case 3:
          if (
            (pr(t, r), (r & 130023424) === r && ((e = rp + 500 - Qe()), 10 < e))
          ) {
            if (ql(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              Mt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = cf(ii.bind(null, t, Ut, zn), e);
            break;
          }
          ii(t, Ut, zn);
          break;
        case 4:
          if ((pr(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - _n(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Qe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * qx(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = cf(ii.bind(null, t, Ut, zn), r);
            break;
          }
          ii(t, Ut, zn);
          break;
        case 5:
          ii(t, Ut, zn);
          break;
        default:
          throw Error(W(329));
      }
    }
  }
  return Kt(t, Qe()), t.callbackNode === n ? I_.bind(null, t) : null;
}
function kf(t, e) {
  var n = Ao;
  return (
    t.current.memoizedState.isDehydrated && (pi(t, e).flags |= 256),
    (t = fu(t, e)),
    t !== 2 && ((e = Ut), (Ut = n), e !== null && Vf(e)),
    t
  );
}
function Vf(t) {
  Ut === null ? (Ut = t) : Ut.push.apply(Ut, t);
}
function Qx(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!En(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function pr(t, e) {
  for (
    e &= ~np,
      e &= ~Gu,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - _n(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function ay(t) {
  if (pe & 6) throw Error(W(327));
  us();
  var e = ql(t, 0);
  if (!(e & 1)) return Kt(t, Qe()), null;
  var n = fu(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = tf(t);
    r !== 0 && ((e = r), (n = kf(t, r)));
  }
  if (n === 1) throw ((n = ea), pi(t, 0), pr(t, e), Kt(t, Qe()), n);
  if (n === 6) throw Error(W(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    ii(t, Ut, zn),
    Kt(t, Qe()),
    null
  );
}
function ip(t, e) {
  var n = pe;
  pe |= 1;
  try {
    return t(e);
  } finally {
    (pe = n), pe === 0 && ((vs = Qe() + 500), $u && Wr());
  }
}
function Ti(t) {
  gr !== null && gr.tag === 0 && !(pe & 6) && us();
  var e = pe;
  pe |= 1;
  var n = hn.transition,
    r = Te;
  try {
    if (((hn.transition = null), (Te = 1), t)) return t();
  } finally {
    (Te = r), (hn.transition = n), (pe = e), !(pe & 6) && Wr();
  }
}
function sp() {
  (Yt = Ji.current), Ve(Ji);
}
function pi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), xx(n)), Ze !== null))
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch ((jd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zl();
          break;
        case 3:
          gs(), Ve(Wt), Ve(Dt), qd();
          break;
        case 5:
          Gd(r);
          break;
        case 4:
          gs();
          break;
        case 13:
          Ve(Me);
          break;
        case 19:
          Ve(Me);
          break;
        case 10:
          $d(r.type._context);
          break;
        case 22:
        case 23:
          sp();
      }
      n = n.return;
    }
  if (
    ((lt = t),
    (Ze = t = Cr(t.current, null)),
    (gt = Yt = e),
    (nt = 0),
    (ea = null),
    (np = Gu = Ei = 0),
    (Ut = Ao = null),
    ui !== null)
  ) {
    for (e = 0; e < ui.length; e++)
      if (((n = ui[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    ui = null;
  }
  return t;
}
function R_(t, e) {
  do {
    var n = Ze;
    try {
      if ((zd(), (kl.current = lu), au)) {
        for (var r = Fe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        au = !1;
      }
      if (
        ((wi = 0),
        (at = et = Fe = null),
        (xo = !1),
        (Xo = 0),
        (tp.current = null),
        n === null || n.return === null)
      ) {
        (nt = 1), (ea = e), (Ze = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          a = n,
          u = e;
        if (
          ((e = gt),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            h = a,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = qg(o);
          if (g !== null) {
            (g.flags &= -257),
              Qg(g, o, a, s, e),
              g.mode & 1 && Gg(s, c, e),
              (e = g),
              (u = c);
            var w = e.updateQueue;
            if (w === null) {
              var C = new Set();
              C.add(u), (e.updateQueue = C);
            } else w.add(u);
            break e;
          } else {
            if (!(e & 1)) {
              Gg(s, c, e), op();
              break e;
            }
            u = Error(W(426));
          }
        } else if (De && a.mode & 1) {
          var A = qg(o);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Qg(A, o, a, s, e),
              Bd(ys(u, a));
            break e;
          }
        }
        (s = u = ys(u, a)),
          nt !== 4 && (nt = 2),
          Ao === null ? (Ao = [s]) : Ao.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var E = f_(s, u, e);
              Ug(s, E);
              break e;
            case 1:
              a = u;
              var y = s.type,
                T = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (T !== null &&
                    typeof T.componentDidCatch == "function" &&
                    (Pr === null || !Pr.has(T))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var k = d_(s, a, e);
                Ug(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      D_(n);
    } catch (M) {
      (e = M), Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function k_() {
  var t = uu.current;
  return (uu.current = lu), t === null ? lu : t;
}
function op() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
    lt === null || (!(Ei & 268435455) && !(Gu & 268435455)) || pr(lt, gt);
}
function fu(t, e) {
  var n = pe;
  pe |= 2;
  var r = k_();
  (lt !== t || gt !== e) && ((zn = null), pi(t, e));
  do
    try {
      Yx();
      break;
    } catch (i) {
      R_(t, i);
    }
  while (!0);
  if ((zd(), (pe = n), (uu.current = r), Ze !== null)) throw Error(W(261));
  return (lt = null), (gt = 0), nt;
}
function Yx() {
  for (; Ze !== null; ) V_(Ze);
}
function Xx() {
  for (; Ze !== null && !TP(); ) V_(Ze);
}
function V_(t) {
  var e = N_(t.alternate, t, Yt);
  (t.memoizedProps = t.pendingProps),
    e === null ? D_(t) : (Ze = e),
    (tp.current = null);
}
function D_(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Wx(n, e)), n !== null)) {
        (n.flags &= 32767), (Ze = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (nt = 6), (Ze = null);
        return;
      }
    } else if (((n = $x(n, e, Yt)), n !== null)) {
      Ze = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ze = e;
      return;
    }
    Ze = e = t;
  } while (e !== null);
  nt === 0 && (nt = 5);
}
function ii(t, e, n) {
  var r = Te,
    i = hn.transition;
  try {
    (hn.transition = null), (Te = 1), Jx(t, e, n, r);
  } finally {
    (hn.transition = i), (Te = r);
  }
  return null;
}
function Jx(t, e, n, r) {
  do us();
  while (gr !== null);
  if (pe & 6) throw Error(W(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(W(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (DP(t, s),
    t === lt && ((Ze = lt = null), (gt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      cl ||
      ((cl = !0),
      O_(Gl, function () {
        return us(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = hn.transition), (hn.transition = null);
    var o = Te;
    Te = 1;
    var a = pe;
    (pe |= 4),
      (tp.current = null),
      Kx(t, n),
      C_(n, t),
      vx(lf),
      (Ql = !!af),
      (lf = af = null),
      (t.current = n),
      Gx(n),
      SP(),
      (pe = a),
      (Te = o),
      (hn.transition = s);
  } else t.current = n;
  if (
    (cl && ((cl = !1), (gr = t), (hu = i)),
    (s = t.pendingLanes),
    s === 0 && (Pr = null),
    CP(n.stateNode),
    Kt(t, Qe()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (cu) throw ((cu = !1), (t = If), (If = null), t);
  return (
    hu & 1 && t.tag !== 0 && us(),
    (s = t.pendingLanes),
    s & 1 ? (t === Rf ? Io++ : ((Io = 0), (Rf = t))) : (Io = 0),
    Wr(),
    null
  );
}
function us() {
  if (gr !== null) {
    var t = f1(hu),
      e = hn.transition,
      n = Te;
    try {
      if (((hn.transition = null), (Te = 16 > t ? 16 : t), gr === null))
        var r = !1;
      else {
        if (((t = gr), (gr = null), (hu = 0), pe & 6)) throw Error(W(331));
        var i = pe;
        for (pe |= 4, q = t.current; q !== null; ) {
          var s = q,
            o = s.child;
          if (q.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (q = c; q !== null; ) {
                  var h = q;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(8, h, s);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (q = f);
                  else
                    for (; q !== null; ) {
                      h = q;
                      var p = h.sibling,
                        g = h.return;
                      if ((S_(h), h === c)) {
                        q = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (q = p);
                        break;
                      }
                      q = g;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var C = w.child;
                if (C !== null) {
                  w.child = null;
                  do {
                    var A = C.sibling;
                    (C.sibling = null), (C = A);
                  } while (C !== null);
                }
              }
              q = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (q = o);
          else
            e: for (; q !== null; ) {
              if (((s = q), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Co(9, s, s.return);
                }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (q = E);
                break e;
              }
              q = s.return;
            }
        }
        var y = t.current;
        for (q = y; q !== null; ) {
          o = q;
          var T = o.child;
          if (o.subtreeFlags & 2064 && T !== null) (T.return = o), (q = T);
          else
            e: for (o = y; q !== null; ) {
              if (((a = q), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ku(9, a);
                  }
                } catch (M) {
                  $e(a, a.return, M);
                }
              if (a === o) {
                q = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (q = k);
                break e;
              }
              q = a.return;
            }
        }
        if (
          ((pe = i), Wr(), Rn && typeof Rn.onPostCommitFiberRoot == "function")
        )
          try {
            Rn.onPostCommitFiberRoot(Fu, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Te = n), (hn.transition = e);
    }
  }
  return !1;
}
function ly(t, e, n) {
  (e = ys(n, e)),
    (e = f_(t, e, 1)),
    (t = Sr(t, e, 1)),
    (e = Mt()),
    t !== null && (ya(t, 1, e), Kt(t, e));
}
function $e(t, e, n) {
  if (t.tag === 3) ly(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        ly(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pr === null || !Pr.has(r)))
        ) {
          (t = ys(n, t)),
            (t = d_(e, t, 1)),
            (e = Sr(e, t, 1)),
            (t = Mt()),
            e !== null && (ya(e, 1, t), Kt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Zx(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = Mt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    lt === t &&
      (gt & n) === n &&
      (nt === 4 || (nt === 3 && (gt & 130023424) === gt && 500 > Qe() - rp)
        ? pi(t, 0)
        : (np |= n)),
    Kt(t, e);
}
function b_(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = el), (el <<= 1), !(el & 130023424) && (el = 4194304))
      : (e = 1));
  var n = Mt();
  (t = Zn(t, e)), t !== null && (ya(t, e, n), Kt(t, n));
}
function eC(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), b_(t, n);
}
function tC(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(W(314));
  }
  r !== null && r.delete(e), b_(t, n);
}
var N_;
N_ = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Wt.current) $t = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return ($t = !1), zx(t, e, n);
      $t = !!(t.flags & 131072);
    }
  else ($t = !1), De && e.flags & 1048576 && F1(e, nu, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Dl(t, e), (t = e.pendingProps);
      var i = ds(e, Dt.current);
      ls(e, n), (i = Yd(null, e, r, t, i, n));
      var s = Xd();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ht(r) ? ((s = !0), eu(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Hd(e),
            (i.updater = Hu),
            (e.stateNode = i),
            (i._reactInternals = e),
            yf(e, r, t, n),
            (e = wf(null, e, r, !0, s, n)))
          : ((e.tag = 0), De && s && Fd(e), Ot(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Dl(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = rC(r)),
          (t = gn(r, t)),
          i)
        ) {
          case 0:
            e = _f(null, e, r, t, n);
            break e;
          case 1:
            e = Jg(null, e, r, t, n);
            break e;
          case 11:
            e = Yg(null, e, r, t, n);
            break e;
          case 14:
            e = Xg(null, e, r, gn(r.type, t), n);
            break e;
        }
        throw Error(W(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gn(r, i)),
        _f(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gn(r, i)),
        Jg(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((y_(e), t === null)) throw Error(W(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          W1(t, e),
          su(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = ys(Error(W(423)), e)), (e = Zg(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ys(Error(W(424)), e)), (e = Zg(t, e, r, n, i));
            break e;
          } else
            for (
              Xt = Tr(e.stateNode.containerInfo.firstChild),
                Zt = e,
                De = !0,
                vn = null,
                n = z1(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ps(), r === i)) {
            e = er(t, e, n);
            break e;
          }
          Ot(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        H1(e),
        t === null && pf(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        uf(r, i) ? (o = null) : s !== null && uf(r, s) && (e.flags |= 32),
        g_(t, e),
        Ot(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && pf(e), null;
    case 13:
      return v_(t, e, n);
    case 4:
      return (
        Kd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = ms(e, null, r, n)) : Ot(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gn(r, i)),
        Yg(t, e, r, i, n)
      );
    case 7:
      return Ot(t, e, e.pendingProps, n), e.child;
    case 8:
      return Ot(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Ot(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          Ie(ru, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (En(s.value, o)) {
            if (s.children === i.children && !Wt.current) {
              e = er(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = Gn(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      mf(s.return, n, e),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(W(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  mf(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ot(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        ls(e, n),
        (i = fn(i)),
        (r = r(i)),
        (e.flags |= 1),
        Ot(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = gn(r, e.pendingProps)),
        (i = gn(r.type, i)),
        Xg(t, e, r, i, n)
      );
    case 15:
      return p_(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : gn(r, i)),
        Dl(t, e),
        (e.tag = 1),
        Ht(r) ? ((t = !0), eu(e)) : (t = !1),
        ls(e, n),
        h_(e, r, i),
        yf(e, r, i, n),
        wf(null, e, r, !0, t, n)
      );
    case 19:
      return __(t, e, n);
    case 22:
      return m_(t, e, n);
  }
  throw Error(W(156, e.tag));
};
function O_(t, e) {
  return l1(t, e);
}
function nC(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function cn(t, e, n, r) {
  return new nC(t, e, n, r);
}
function ap(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function rC(t) {
  if (typeof t == "function") return ap(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Cd)) return 11;
    if (t === Ad) return 14;
  }
  return 2;
}
function Cr(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = cn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Ol(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) ap(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case zi:
        return mi(n.children, i, s, e);
      case xd:
        (o = 8), (i |= 8);
        break;
      case Bh:
        return (
          (t = cn(12, n, e, i | 2)), (t.elementType = Bh), (t.lanes = s), t
        );
      case Uh:
        return (t = cn(13, n, e, i)), (t.elementType = Uh), (t.lanes = s), t;
      case zh:
        return (t = cn(19, n, e, i)), (t.elementType = zh), (t.lanes = s), t;
      case H0:
        return qu(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case $0:
              o = 10;
              break e;
            case W0:
              o = 9;
              break e;
            case Cd:
              o = 11;
              break e;
            case Ad:
              o = 14;
              break e;
            case hr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(W(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = cn(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function mi(t, e, n, r) {
  return (t = cn(7, t, r, e)), (t.lanes = n), t;
}
function qu(t, e, n, r) {
  return (
    (t = cn(22, t, r, e)),
    (t.elementType = H0),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function hh(t, e, n) {
  return (t = cn(6, t, null, e)), (t.lanes = n), t;
}
function fh(t, e, n) {
  return (
    (e = cn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function iC(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Kc(0)),
    (this.expirationTimes = Kc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Kc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function lp(t, e, n, r, i, s, o, a, u) {
  return (
    (t = new iC(t, e, n, a, u)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = cn(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hd(s),
    t
  );
}
function sC(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ui,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function M_(t) {
  if (!t) return Or;
  t = t._reactInternals;
  e: {
    if (Ri(t) !== t || t.tag !== 1) throw Error(W(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ht(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(W(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ht(n)) return M1(t, n, e);
  }
  return e;
}
function L_(t, e, n, r, i, s, o, a, u) {
  return (
    (t = lp(n, r, !0, t, i, s, o, a, u)),
    (t.context = M_(null)),
    (n = t.current),
    (r = Mt()),
    (i = xr(n)),
    (s = Gn(r, i)),
    (s.callback = e ?? null),
    Sr(n, s, i),
    (t.current.lanes = i),
    ya(t, i, r),
    Kt(t, r),
    t
  );
}
function Qu(t, e, n, r) {
  var i = e.current,
    s = Mt(),
    o = xr(i);
  return (
    (n = M_(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Gn(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Sr(i, e, o)),
    t !== null && (wn(t, i, o, s), Rl(t, i, o)),
    o
  );
}
function du(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function uy(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function up(t, e) {
  uy(t, e), (t = t.alternate) && uy(t, e);
}
function oC() {
  return null;
}
var F_ =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function cp(t) {
  this._internalRoot = t;
}
Yu.prototype.render = cp.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(W(409));
  Qu(t, e, null, null);
};
Yu.prototype.unmount = cp.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Ti(function () {
      Qu(null, t, null, null);
    }),
      (e[Jn] = null);
  }
};
function Yu(t) {
  this._internalRoot = t;
}
Yu.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = m1();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < dr.length && e !== 0 && e < dr[n].priority; n++);
    dr.splice(n, 0, t), n === 0 && y1(t);
  }
};
function hp(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Xu(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function cy() {}
function aC(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = du(o);
        s.call(c);
      };
    }
    var o = L_(e, r, t, 0, null, !1, !1, "", cy);
    return (
      (t._reactRootContainer = o),
      (t[Jn] = o.current),
      Ko(t.nodeType === 8 ? t.parentNode : t),
      Ti(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = du(u);
      a.call(c);
    };
  }
  var u = lp(t, 0, !1, null, null, !1, !1, "", cy);
  return (
    (t._reactRootContainer = u),
    (t[Jn] = u.current),
    Ko(t.nodeType === 8 ? t.parentNode : t),
    Ti(function () {
      Qu(e, u, n, r);
    }),
    u
  );
}
function Ju(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = du(o);
        a.call(u);
      };
    }
    Qu(e, o, t, i);
  } else o = aC(n, e, t, i, r);
  return du(o);
}
d1 = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = fo(e.pendingLanes);
        n !== 0 &&
          (kd(e, n | 1), Kt(e, Qe()), !(pe & 6) && ((vs = Qe() + 500), Wr()));
      }
      break;
    case 13:
      Ti(function () {
        var r = Zn(t, 1);
        if (r !== null) {
          var i = Mt();
          wn(r, t, 1, i);
        }
      }),
        up(t, 1);
  }
};
Vd = function (t) {
  if (t.tag === 13) {
    var e = Zn(t, 134217728);
    if (e !== null) {
      var n = Mt();
      wn(e, t, 134217728, n);
    }
    up(t, 134217728);
  }
};
p1 = function (t) {
  if (t.tag === 13) {
    var e = xr(t),
      n = Zn(t, e);
    if (n !== null) {
      var r = Mt();
      wn(n, t, e, r);
    }
    up(t, e);
  }
};
m1 = function () {
  return Te;
};
g1 = function (t, e) {
  var n = Te;
  try {
    return (Te = t), e();
  } finally {
    Te = n;
  }
};
Jh = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Hh(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]',
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = zu(r);
            if (!i) throw Error(W(90));
            G0(r), Hh(r, i);
          }
        }
      }
      break;
    case "textarea":
      Q0(t, n);
      break;
    case "select":
      (e = n.value), e != null && is(t, !!n.multiple, e, !1);
  }
};
n1 = ip;
r1 = Ti;
var lC = { usingClientEntryPoint: !1, Events: [_a, Ki, zu, e1, t1, ip] },
  oo = {
    findFiberByHostInstance: li,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  uC = {
    bundleType: oo.bundleType,
    version: oo.version,
    rendererPackageName: oo.rendererPackageName,
    rendererConfig: oo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ir.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = o1(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: oo.findFiberByHostInstance || oC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (Fu = hl.inject(uC)), (Rn = hl);
    } catch {}
}
rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lC;
rn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hp(e)) throw Error(W(200));
  return sC(t, e, null, n);
};
rn.createRoot = function (t, e) {
  if (!hp(t)) throw Error(W(299));
  var n = !1,
    r = "",
    i = F_;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = lp(t, 1, !1, null, null, n, !1, r, i)),
    (t[Jn] = e.current),
    Ko(t.nodeType === 8 ? t.parentNode : t),
    new cp(e)
  );
};
rn.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(W(188))
      : ((t = Object.keys(t).join(",")), Error(W(268, t)));
  return (t = o1(e)), (t = t === null ? null : t.stateNode), t;
};
rn.flushSync = function (t) {
  return Ti(t);
};
rn.hydrate = function (t, e, n) {
  if (!Xu(e)) throw Error(W(200));
  return Ju(null, t, e, !0, n);
};
rn.hydrateRoot = function (t, e, n) {
  if (!hp(t)) throw Error(W(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = F_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = L_(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Jn] = e.current),
    Ko(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Yu(e);
};
rn.render = function (t, e, n) {
  if (!Xu(e)) throw Error(W(200));
  return Ju(null, t, e, !1, n);
};
rn.unmountComponentAtNode = function (t) {
  if (!Xu(t)) throw Error(W(40));
  return t._reactRootContainer
    ? (Ti(function () {
        Ju(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Jn] = null);
        });
      }),
      !0)
    : !1;
};
rn.unstable_batchedUpdates = ip;
rn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Xu(n)) throw Error(W(200));
  if (t == null || t._reactInternals === void 0) throw Error(W(38));
  return Ju(t, e, n, !1, r);
};
rn.version = "18.3.1-next-f1338f8080-20240426";
function j_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j_);
    } catch (t) {
      console.error(t);
    }
}
j_(), (j0.exports = rn);
var B_ = j0.exports;
const cC = yd(B_);
var hy = B_;
(Fh.createRoot = hy.createRoot), (Fh.hydrateRoot = hy.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    ta.apply(this, arguments)
  );
}
var yr;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(yr || (yr = {}));
const fy = "popstate";
function hC(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Df(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : pu(i);
  }
  return dC(e, n, null, t);
}
function We(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function U_(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function fC() {
  return Math.random().toString(36).substr(2, 8);
}
function dy(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function Df(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    ta(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? Ds(e) : e,
      { state: n, key: (e && e.key) || r || fC() },
    )
  );
}
function pu(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Ds(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function dC(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = yr.Pop,
    u = null,
    c = h();
  c == null && ((c = 0), o.replaceState(ta({}, o.state, { idx: c }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = yr.Pop;
    let A = h(),
      E = A == null ? null : A - c;
    (c = A), u && u({ action: a, location: C.location, delta: E });
  }
  function p(A, E) {
    a = yr.Push;
    let y = Df(C.location, A, E);
    c = h() + 1;
    let T = dy(y, c),
      k = C.createHref(y);
    try {
      o.pushState(T, "", k);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError") throw M;
      i.location.assign(k);
    }
    s && u && u({ action: a, location: C.location, delta: 1 });
  }
  function g(A, E) {
    a = yr.Replace;
    let y = Df(C.location, A, E);
    c = h();
    let T = dy(y, c),
      k = C.createHref(y);
    o.replaceState(T, "", k),
      s && u && u({ action: a, location: C.location, delta: 0 });
  }
  function w(A) {
    let E = i.location.origin !== "null" ? i.location.origin : i.location.href,
      y = typeof A == "string" ? A : pu(A);
    return (
      (y = y.replace(/ $/, "%20")),
      We(
        E,
        "No window.location.(origin|href) available to create URL for href: " +
          y,
      ),
      new URL(y, E)
    );
  }
  let C = {
    get action() {
      return a;
    },
    get location() {
      return t(i, o);
    },
    listen(A) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(fy, f),
        (u = A),
        () => {
          i.removeEventListener(fy, f), (u = null);
        }
      );
    },
    createHref(A) {
      return e(i, A);
    },
    createURL: w,
    encodeLocation(A) {
      let E = w(A);
      return { pathname: E.pathname, search: E.search, hash: E.hash };
    },
    push: p,
    replace: g,
    go(A) {
      return o.go(A);
    },
  };
  return C;
}
var py;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(py || (py = {}));
function pC(t, e, n) {
  return n === void 0 && (n = "/"), mC(t, e, n, !1);
}
function mC(t, e, n, r) {
  let i = typeof e == "string" ? Ds(e) : e,
    s = _s(i.pathname || "/", n);
  if (s == null) return null;
  let o = z_(t);
  gC(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let c = AC(s);
    a = xC(o[u], c, r);
  }
  return a;
}
function z_(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let u = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (We(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Ar([r, u.relativePath]),
      h = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (We(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      z_(s.children, e, h, c)),
      !(s.path == null && !s.index) &&
        e.push({ path: c, score: SC(c, s.index), routesMeta: h });
  };
  return (
    t.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let u of $_(s.path)) i(s, o, u);
    }),
    e
  );
}
function $_(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = $_(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? s : [s, u].join("/")))),
    i && a.push(...o),
    a.map((u) => (t.startsWith("/") && u === "" ? "/" : u))
  );
}
function gC(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : PC(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const yC = /^:[\w-]+$/,
  vC = 3,
  _C = 2,
  wC = 1,
  EC = 10,
  TC = -2,
  my = (t) => t === "*";
function SC(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(my) && (r += TC),
    e && (r += _C),
    n
      .filter((i) => !my(i))
      .reduce((i, s) => i + (yC.test(s) ? vC : s === "" ? wC : EC), r)
  );
}
function PC(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function xC(t, e, n) {
  let { routesMeta: r } = t,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      h = s === "/" ? e : e.slice(s.length) || "/",
      f = mu(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        h,
      ),
      p = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = mu(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          h,
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Ar([s, f.pathname]),
        pathnameBase: VC(Ar([s, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (s = Ar([s, f.pathnameBase]));
  }
  return o;
}
function mu(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = CC(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, h, f) => {
      let { paramName: p, isOptional: g } = h;
      if (p === "*") {
        let C = a[f] || "";
        o = s.slice(0, s.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        g && !w ? (c[p] = void 0) : (c[p] = (w || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function CC(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    U_(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function AC(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      U_(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ")."),
      ),
      t
    );
  }
}
function _s(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function IC(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? Ds(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : RC(n, e)) : e,
    search: DC(r),
    hash: bC(i),
  };
}
function RC(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function dh(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function kC(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function W_(t, e) {
  let n = kC(t);
  return e
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function H_(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = Ds(t))
    : ((i = ta({}, t)),
      We(
        !i.pathname || !i.pathname.includes("?"),
        dh("?", "pathname", "search", i),
      ),
      We(
        !i.pathname || !i.pathname.includes("#"),
        dh("#", "pathname", "hash", i),
      ),
      We(!i.search || !i.search.includes("#"), dh("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = e.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    a = f >= 0 ? e[f] : "/";
  }
  let u = IC(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    h = (s || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || h) && (u.pathname += "/"), u;
}
const Ar = (t) => t.join("/").replace(/\/\/+/g, "/"),
  VC = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  DC = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  bC = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function NC(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const K_ = ["post", "put", "patch", "delete"];
new Set(K_);
const OC = ["get", ...K_];
new Set(OC);
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function na() {
  return (
    (na = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    na.apply(this, arguments)
  );
}
const Zu = V.createContext(null),
  G_ = V.createContext(null),
  Hr = V.createContext(null),
  ec = V.createContext(null),
  Kr = V.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  q_ = V.createContext(null);
function MC(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  Ea() || We(!1);
  let { basename: r, navigator: i } = V.useContext(Hr),
    { hash: s, pathname: o, search: a } = tc(t, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Ar([r, o])),
    i.createHref({ pathname: u, search: a, hash: s })
  );
}
function Ea() {
  return V.useContext(ec) != null;
}
function Gr() {
  return Ea() || We(!1), V.useContext(ec).location;
}
function Q_(t) {
  V.useContext(Hr).static || V.useLayoutEffect(t);
}
function Y_() {
  let { isDataRoute: t } = V.useContext(Kr);
  return t ? XC() : LC();
}
function LC() {
  Ea() || We(!1);
  let t = V.useContext(Zu),
    { basename: e, future: n, navigator: r } = V.useContext(Hr),
    { matches: i } = V.useContext(Kr),
    { pathname: s } = Gr(),
    o = JSON.stringify(W_(i, n.v7_relativeSplatPath)),
    a = V.useRef(!1);
  return (
    Q_(() => {
      a.current = !0;
    }),
    V.useCallback(
      function (c, h) {
        if ((h === void 0 && (h = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = H_(c, JSON.parse(o), s, h.relative === "path");
        t == null &&
          e !== "/" &&
          (f.pathname = f.pathname === "/" ? e : Ar([e, f.pathname])),
          (h.replace ? r.replace : r.push)(f, h.state, h);
      },
      [e, r, o, s, t],
    )
  );
}
const FC = V.createContext(null);
function jC(t) {
  let e = V.useContext(Kr).outlet;
  return e && V.createElement(FC.Provider, { value: t }, e);
}
function tc(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = V.useContext(Hr),
    { matches: i } = V.useContext(Kr),
    { pathname: s } = Gr(),
    o = JSON.stringify(W_(i, r.v7_relativeSplatPath));
  return V.useMemo(() => H_(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function BC(t, e) {
  return UC(t, e);
}
function UC(t, e, n, r) {
  Ea() || We(!1);
  let { navigator: i } = V.useContext(Hr),
    { matches: s } = V.useContext(Kr),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Gr(),
    h;
  if (e) {
    var f;
    let A = typeof e == "string" ? Ds(e) : e;
    u === "/" || ((f = A.pathname) != null && f.startsWith(u)) || We(!1),
      (h = A);
  } else h = c;
  let p = h.pathname || "/",
    g = p;
  if (u !== "/") {
    let A = u.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let w = pC(t, { pathname: g }),
    C = KC(
      w &&
        w.map((A) =>
          Object.assign({}, A, {
            params: Object.assign({}, a, A.params),
            pathname: Ar([
              u,
              i.encodeLocation
                ? i.encodeLocation(A.pathname).pathname
                : A.pathname,
            ]),
            pathnameBase:
              A.pathnameBase === "/"
                ? u
                : Ar([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(A.pathnameBase).pathname
                      : A.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return e && C
    ? V.createElement(
        ec.Provider,
        {
          value: {
            location: na(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h,
            ),
            navigationType: yr.Pop,
          },
        },
        C,
      )
    : C;
}
function zC() {
  let t = YC(),
    e = NC(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return V.createElement(
    V.Fragment,
    null,
    V.createElement("h2", null, "Unexpected Application Error!"),
    V.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? V.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const $C = V.createElement(zC, null);
class WC extends V.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? V.createElement(
          Kr.Provider,
          { value: this.props.routeContext },
          V.createElement(q_.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function HC(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = V.useContext(Zu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    V.createElement(Kr.Provider, { value: e }, r)
  );
}
function KC(t, e, n, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) t = n.matches;
    else return null;
  }
  let o = t,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let h = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    h >= 0 || We(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let f = o[h];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = h),
        f.route.id)
      ) {
        let { loaderData: p, errors: g } = n,
          w =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, f, p) => {
    let g,
      w = !1,
      C = null,
      A = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (C = f.route.errorElement || $C),
      u &&
        (c < 0 && p === 0
          ? ((w = !0), (A = null))
          : c === p &&
            ((w = !0), (A = f.route.hydrateFallbackElement || null))));
    let E = e.concat(o.slice(0, p + 1)),
      y = () => {
        let T;
        return (
          g
            ? (T = C)
            : w
              ? (T = A)
              : f.route.Component
                ? (T = V.createElement(f.route.Component, null))
                : f.route.element
                  ? (T = f.route.element)
                  : (T = h),
          V.createElement(HC, {
            match: f,
            routeContext: { outlet: h, matches: E, isDataRoute: n != null },
            children: T,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? V.createElement(WC, {
          location: n.location,
          revalidation: n.revalidation,
          component: C,
          error: g,
          children: y(),
          routeContext: { outlet: null, matches: E, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var X_ = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(X_ || {}),
  gu = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(gu || {});
function GC(t) {
  let e = V.useContext(Zu);
  return e || We(!1), e;
}
function qC(t) {
  let e = V.useContext(G_);
  return e || We(!1), e;
}
function QC(t) {
  let e = V.useContext(Kr);
  return e || We(!1), e;
}
function J_(t) {
  let e = QC(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || We(!1), n.route.id;
}
function YC() {
  var t;
  let e = V.useContext(q_),
    n = qC(gu.UseRouteError),
    r = J_(gu.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function XC() {
  let { router: t } = GC(X_.UseNavigateStable),
    e = J_(gu.UseNavigateStable),
    n = V.useRef(!1);
  return (
    Q_(() => {
      n.current = !0;
    }),
    V.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, na({ fromRouteId: e }, s)));
      },
      [t, e],
    )
  );
}
function JC(t) {
  return jC(t.context);
}
function Li(t) {
  We(!1);
}
function ZC(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = yr.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = t;
  Ea() && We(!1);
  let u = e.replace(/^\/*/, "/"),
    c = V.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: o,
        future: na({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, s, o],
    );
  typeof r == "string" && (r = Ds(r));
  let {
      pathname: h = "/",
      search: f = "",
      hash: p = "",
      state: g = null,
      key: w = "default",
    } = r,
    C = V.useMemo(() => {
      let A = _s(h, u);
      return A == null
        ? null
        : {
            location: { pathname: A, search: f, hash: p, state: g, key: w },
            navigationType: i,
          };
    }, [u, h, f, p, g, w, i]);
  return C == null
    ? null
    : V.createElement(
        Hr.Provider,
        { value: c },
        V.createElement(ec.Provider, { children: n, value: C }),
      );
}
function eA(t) {
  let { children: e, location: n } = t;
  return BC(bf(e), n);
}
new Promise(() => {});
function bf(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    V.Children.forEach(t, (r, i) => {
      if (!V.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === V.Fragment) {
        n.push.apply(n, bf(r.props.children, s));
        return;
      }
      r.type !== Li && We(!1), !r.props.index || !r.props.children || We(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = bf(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yu() {
  return (
    (yu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    yu.apply(this, arguments)
  );
}
function Z_(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function tA(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function nA(t, e) {
  return t.button === 0 && (!e || e === "_self") && !tA(t);
}
function Nf(t) {
  return (
    t === void 0 && (t = ""),
    new URLSearchParams(
      typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams
        ? t
        : Object.keys(t).reduce((e, n) => {
            let r = t[n];
            return e.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, []),
    )
  );
}
function rA(t, e) {
  let n = Nf(t);
  return (
    e &&
      e.forEach((r, i) => {
        n.has(i) ||
          e.getAll(i).forEach((s) => {
            n.append(i, s);
          });
      }),
    n
  );
}
const iA = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  sA = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  oA = "6";
try {
  window.__reactRouterVersion = oA;
} catch {}
const aA = V.createContext({ isTransitioning: !1 }),
  lA = "startTransition",
  gy = ZS[lA];
function uA(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = V.useRef();
  s.current == null && (s.current = hC({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, u] = V.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    h = V.useCallback(
      (f) => {
        c && gy ? gy(() => u(f)) : u(f);
      },
      [u, c],
    );
  return (
    V.useLayoutEffect(() => o.listen(h), [o, h]),
    V.createElement(ZC, {
      basename: e,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const cA =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  hA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fA = V.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: u,
        to: c,
        preventScrollReset: h,
        unstable_viewTransition: f,
      } = e,
      p = Z_(e, iA),
      { basename: g } = V.useContext(Hr),
      w,
      C = !1;
    if (typeof c == "string" && hA.test(c) && ((w = c), cA))
      try {
        let T = new URL(window.location.href),
          k = c.startsWith("//") ? new URL(T.protocol + c) : new URL(c),
          M = _s(k.pathname, g);
        k.origin === T.origin && M != null
          ? (c = M + k.search + k.hash)
          : (C = !0);
      } catch {}
    let A = MC(c, { relative: i }),
      E = pA(c, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: h,
        relative: i,
        unstable_viewTransition: f,
      });
    function y(T) {
      r && r(T), T.defaultPrevented || E(T);
    }
    return V.createElement(
      "a",
      yu({}, p, { href: w || A, onClick: C || s ? r : y, ref: n, target: u }),
    );
  }),
  fl = V.forwardRef(function (e, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: c,
        children: h,
      } = e,
      f = Z_(e, sA),
      p = tc(u, { relative: f.relative }),
      g = Gr(),
      w = V.useContext(G_),
      { navigator: C, basename: A } = V.useContext(Hr),
      E = w != null && mA(p) && c === !0,
      y = C.encodeLocation ? C.encodeLocation(p).pathname : p.pathname,
      T = g.pathname,
      k =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    i ||
      ((T = T.toLowerCase()),
      (k = k ? k.toLowerCase() : null),
      (y = y.toLowerCase())),
      k && A && (k = _s(k, A) || k);
    const M = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
    let j = T === y || (!o && T.startsWith(y) && T.charAt(M) === "/"),
      P =
        k != null &&
        (k === y || (!o && k.startsWith(y) && k.charAt(y.length) === "/")),
      v = { isActive: j, isPending: P, isTransitioning: E },
      S = j ? r : void 0,
      x;
    typeof s == "function"
      ? (x = s(v))
      : (x = [
          s,
          j ? "active" : null,
          P ? "pending" : null,
          E ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let R = typeof a == "function" ? a(v) : a;
    return V.createElement(
      fA,
      yu({}, f, {
        "aria-current": S,
        className: x,
        ref: n,
        style: R,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof h == "function" ? h(v) : h,
    );
  });
var Of;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Of || (Of = {}));
var yy;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(yy || (yy = {}));
function dA(t) {
  let e = V.useContext(Zu);
  return e || We(!1), e;
}
function pA(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: a,
    } = e === void 0 ? {} : e,
    u = Y_(),
    c = Gr(),
    h = tc(t, { relative: o });
  return V.useCallback(
    (f) => {
      if (nA(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : pu(c) === pu(h);
        u(t, {
          replace: p,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [c, u, h, r, i, n, t, s, o, a],
  );
}
function ew(t) {
  let e = V.useRef(Nf(t)),
    n = V.useRef(!1),
    r = Gr(),
    i = V.useMemo(() => rA(r.search, n.current ? null : e.current), [r.search]),
    s = Y_(),
    o = V.useCallback(
      (a, u) => {
        const c = Nf(typeof a == "function" ? a(i) : a);
        (n.current = !0), s("?" + c, u);
      },
      [s, i],
    );
  return [i, o];
}
function mA(t, e) {
  e === void 0 && (e = {});
  let n = V.useContext(aA);
  n == null && We(!1);
  let { basename: r } = dA(Of.useViewTransitionState),
    i = tc(t, { relative: e.relative });
  if (!n.isTransitioning) return !1;
  let s = _s(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = _s(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return mu(i.pathname, o) != null || mu(i.pathname, s) != null;
}
var tw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  vy = st.createContext && st.createContext(tw),
  gA = ["attr", "size", "title"];
function yA(t, e) {
  if (t == null) return {};
  var n = vA(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function vA(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function vu() {
  return (
    (vu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    vu.apply(this, arguments)
  );
}
function _y(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? _y(Object(n), !0).forEach(function (r) {
          _A(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : _y(Object(n)).forEach(function (r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return t;
}
function _A(t, e, n) {
  return (
    (e = wA(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function wA(t) {
  var e = EA(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function EA(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function nw(t) {
  return (
    t &&
    t.map((e, n) =>
      st.createElement(e.tag, _u({ key: n }, e.attr), nw(e.child)),
    )
  );
}
function qr(t) {
  return (e) =>
    st.createElement(TA, vu({ attr: _u({}, t.attr) }, e), nw(t.child));
}
function TA(t) {
  var e = (n) => {
    var { attr: r, size: i, title: s } = t,
      o = yA(t, gA),
      a = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      t.className && (u = (u ? u + " " : "") + t.className),
      st.createElement(
        "svg",
        vu(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: _u(_u({ color: t.color || n.color }, n.style), t.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && st.createElement("title", null, s),
        t.children,
      )
    );
  };
  return vy !== void 0
    ? st.createElement(vy.Consumer, null, (n) => e(n))
    : e(tw);
}
function SA(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z",
        },
        child: [],
      },
    ],
  })(t);
}
function PA(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M438.40625,377.59375c-3.20313,12.8125-3.20313,57.60937,0,73.60937Q447.9922,460.78907,448,470.40625v16c0,16-12.79688,25.59375-25.59375,25.59375H96c-54.40625,0-96-41.59375-96-96V96C0,41.59375,41.59375,0,96,0H422.40625C438.40625,0,448,9.59375,448,25.59375v332.8125Q448,372.79688,438.40625,377.59375ZM380.79688,384H96c-16,0-32,12.79688-32,32s12.79688,32,32,32H380.79688ZM128.01562,176.01562c0,.51563.14063.98438.14063,1.5l37.10937,32.46876A7.99954,7.99954,0,0,1,160,224h-.01562a9.17678,9.17678,0,0,1-5.25-1.98438L131.14062,201.375C142.6875,250.95312,186.90625,288,240,288s97.3125-37.04688,108.875-86.625l-23.59375,20.64062a8.02516,8.02516,0,0,1-5.26563,1.96876H320a9.14641,9.14641,0,0,1-6.01562-2.71876A9.26508,9.26508,0,0,1,312,216a9.097,9.097,0,0,1,2.73438-6.01562l37.10937-32.46876c.01563-.53124.15625-1,.15625-1.51562,0-11.04688-2.09375-21.51562-5.06251-31.59375l-21.26562,21.25a8.00467,8.00467,0,0,1-11.32812-11.3125l26.42187-26.40625a111.81517,111.81517,0,0,0-46.35937-49.26562,63.02336,63.02336,0,0,1-14.0625,82.64062A55.83846,55.83846,0,0,1,251.625,254.73438l-1.42188-34.28126,12.67188,8.625a3.967,3.967,0,0,0,2.25.6875,3.98059,3.98059,0,0,0,3.43749-6.03124l-8.53124-14.3125,17.90625-3.71876a4.00647,4.00647,0,0,0,0-7.84374l-17.90625-3.71876,8.53124-14.3125a3.98059,3.98059,0,0,0-3.43749-6.03124,4.726,4.726,0,0,0-2.25.67187L248.6875,184.125,244,71.82812a4.00386,4.00386,0,0,0-8,0l-4.625,110.8125-12-8.15624a4.003,4.003,0,0,0-5.68751,5.35937l8.53126,14.3125L204.3125,197.875a3.99686,3.99686,0,0,0,0,7.82812l17.90625,3.73438-8.53126,14.29688a4.72469,4.72469,0,0,0-.56249,2.04687,4.59547,4.59547,0,0,0,1.25,2.90625,4.01059,4.01059,0,0,0,2.75,1.09375,4.09016,4.09016,0,0,0,2.25-.6875l10.35937-7.04687L228.375,254.76562a55.86414,55.86414,0,0,1-28.71875-93.45312,63.01119,63.01119,0,0,1-14.04688-82.65625,111.93158,111.93158,0,0,0-46.375,49.26563l26.42187,26.42187a7.99917,7.99917,0,0,1-11.3125,11.3125l-21.26563-21.26563C130.09375,154.48438,128,164.95312,128.01562,176.01562Z",
        },
        child: [],
      },
    ],
  })(t);
}
function xA(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z",
        },
        child: [],
      },
    ],
  })(t);
}
function CA(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z",
        },
        child: [],
      },
    ],
  })(t);
}
function rw(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z",
        },
        child: [],
      },
    ],
  })(t);
}
function AA(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z",
        },
        child: [],
      },
    ],
  })(t);
}
const fp = V.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  }),
  nc = V.createContext({}),
  rc = V.createContext(null),
  dp = typeof window < "u",
  iw = dp ? V.useLayoutEffect : V.useEffect,
  sw = V.createContext({ strict: !1 }),
  ic = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  IA = "framerAppearId",
  ow = "data-" + ic(IA),
  RA = { skipAnimations: !1, useManualTiming: !1 };
function kA(t) {
  let e = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    s.has(c) && (u.schedule(c), t()), c(o);
  }
  const u = {
    schedule: (c, h = !1, f = !1) => {
      const g = f && r ? e : n;
      return h && s.add(c), g.has(c) || g.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), s.delete(c);
    },
    process: (c) => {
      if (((o = c), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([e, n] = [n, e]),
        n.clear(),
        e.forEach(a),
        (r = !1),
        i && ((i = !1), u.process(c));
    },
  };
  return u;
}
const dl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  VA = 40;
function aw(t, e) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = dl.reduce((E, y) => ((E[y] = kA(s)), E), {}),
    {
      read: a,
      resolveKeyframes: u,
      update: c,
      preRender: h,
      render: f,
      postRender: p,
    } = o,
    g = () => {
      const E = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(E - i.timestamp, VA), 1)),
        (i.timestamp = E),
        (i.isProcessing = !0),
        a.process(i),
        u.process(i),
        c.process(i),
        h.process(i),
        f.process(i),
        p.process(i),
        (i.isProcessing = !1),
        n && e && ((r = !1), t(g));
    },
    w = () => {
      (n = !0), (r = !0), i.isProcessing || t(g);
    };
  return {
    schedule: dl.reduce((E, y) => {
      const T = o[y];
      return (E[y] = (k, M = !1, j = !1) => (n || w(), T.schedule(k, M, j))), E;
    }, {}),
    cancel: (E) => {
      for (let y = 0; y < dl.length; y++) o[dl[y]].cancel(E);
    },
    state: i,
    steps: o,
  };
}
const { schedule: pp, cancel: MO } = aw(queueMicrotask, !1);
function Zi(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
const lw = V.createContext({});
let wy = !1;
function DA(t, e, n, r, i) {
  const { visualElement: s } = V.useContext(nc),
    o = V.useContext(sw),
    a = V.useContext(rc),
    u = V.useContext(fp).reducedMotion,
    c = V.useRef();
  (r = r || o.renderer),
    !c.current &&
      r &&
      (c.current = r(t, {
        visualState: e,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const h = c.current,
    f = V.useContext(lw);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    NA(c.current, n, i, f),
    V.useInsertionEffect(() => {
      h && h.update(n, a);
    });
  const p = V.useRef(!!(n[ow] && !window.HandoffComplete));
  return (
    iw(() => {
      h &&
        (h.updateFeatures(),
        pp.render(h.render),
        p.current && h.animationState && h.animationState.animateChanges());
    }),
    V.useEffect(() => {
      h &&
        (!p.current && h.animationState && h.animationState.animateChanges(),
        p.current && ((p.current = !1), wy || ((wy = !0), queueMicrotask(bA))));
    }),
    h
  );
}
function bA() {
  window.HandoffComplete = !0;
}
function NA(t, e, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: u,
    layoutRoot: c,
  } = e;
  (t.projection = new n(
    t.latestValues,
    e["data-framer-portal-id"] ? void 0 : uw(t.parent),
  )),
    t.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Zi(a)),
      visualElement: t,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: u,
      layoutRoot: c,
    });
}
function uw(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : uw(t.parent);
}
function OA(t, e, n) {
  return V.useCallback(
    (r) => {
      r && t.mount && t.mount(r),
        e && (r ? e.mount(r) : e.unmount()),
        n && (typeof n == "function" ? n(r) : Zi(n) && (n.current = r));
    },
    [e],
  );
}
function ra(t) {
  return typeof t == "string" || Array.isArray(t);
}
function ia(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const mp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  gp = ["initial", ...mp];
function sc(t) {
  return ia(t.animate) || gp.some((e) => ra(t[e]));
}
function cw(t) {
  return !!(sc(t) || t.variants);
}
function MA(t, e) {
  if (sc(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || ra(n) ? n : void 0,
      animate: ra(r) ? r : void 0,
    };
  }
  return t.inherit !== !1 ? e : {};
}
function LA(t) {
  const { initial: e, animate: n } = MA(t, V.useContext(nc));
  return V.useMemo(() => ({ initial: e, animate: n }), [Ey(e), Ey(n)]);
}
function Ey(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Ty = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ws = {};
for (const t in Ty) ws[t] = { isEnabled: (e) => Ty[t].some((n) => !!e[n]) };
function FA(t) {
  for (const e in t) ws[e] = { ...ws[e], ...t[e] };
}
const yp = V.createContext({}),
  jA = Symbol.for("motionComponentSymbol"),
  Vt = (t) => t;
let Mf = Vt;
function BA({
  preloadedFeatures: t,
  createVisualElement: e,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  t && FA(t);
  function s(a, u) {
    let c;
    const h = { ...V.useContext(fp), ...a, layoutId: UA(a) },
      { isStatic: f } = h,
      p = LA(a),
      g = r(a, f);
    if (!f && dp) {
      zA();
      const w = $A(h);
      (c = w.MeasureLayout),
        (p.visualElement = DA(i, g, h, e, w.ProjectionNode));
    }
    return N.jsxs(nc.Provider, {
      value: p,
      children: [
        c && p.visualElement
          ? N.jsx(c, { visualElement: p.visualElement, ...h })
          : null,
        n(i, a, OA(g, p.visualElement, u), g, f, p.visualElement),
      ],
    });
  }
  const o = V.forwardRef(s);
  return (o[jA] = i), o;
}
function UA({ layoutId: t }) {
  const e = V.useContext(yp).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function zA(t, e) {
  V.useContext(sw).strict;
}
function $A(t) {
  const { drag: e, layout: n } = ws;
  if (!e && !n) return {};
  const r = { ...e, ...n };
  return {
    MeasureLayout:
      (e != null && e.isEnabled(t)) || (n != null && n.isEnabled(t))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function WA(t) {
  function e(r, i = {}) {
    return BA(t(r, i));
  }
  if (typeof Proxy > "u") return e;
  const n = new Map();
  return new Proxy(e, {
    get: (r, i) => (n.has(i) || n.set(i, e(i)), n.get(i)),
  });
}
const HA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vp(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(HA.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
const wu = {};
function KA(t) {
  Object.assign(wu, t);
}
const Ta = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Qr = new Set(Ta);
function hw(t, { layout: e, layoutId: n }) {
  return (
    Qr.has(t) ||
    t.startsWith("origin") ||
    ((e || n !== void 0) && (!!wu[t] || t === "opacity"))
  );
}
const kt = (t) => !!(t && t.getVelocity),
  GA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  qA = Ta.length;
function QA(t, e, n) {
  let r = "";
  for (let i = 0; i < qA; i++) {
    const s = Ta[i];
    if (t[s] !== void 0) {
      const o = GA[s] || s;
      r += `${o}(${t[s]}) `;
    }
  }
  return (r = r.trim()), n ? (r = n(t, e ? "" : r)) : e && (r = "none"), r;
}
const fw = (t) => (e) => typeof e == "string" && e.startsWith(t),
  dw = fw("--"),
  YA = fw("var(--"),
  _p = (t) => (YA(t) ? XA.test(t.split("/*")[0].trim()) : !1),
  XA =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  JA = (t, e) => (e && typeof t == "number" ? e.transform(t) : t),
  Mr = (t, e, n) => (n > e ? e : n < t ? t : n),
  bs = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Ro = { ...bs, transform: (t) => Mr(0, 1, t) },
  pl = { ...bs, default: 1 },
  ko = (t) => Math.round(t * 1e5) / 1e5,
  wp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  ZA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  eI =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Sa(t) {
  return typeof t == "string";
}
function tI(t) {
  return t == null;
}
const Pa = (t) => ({
    test: (e) => Sa(e) && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: (e) => `${e}${t}`,
  }),
  cr = Pa("deg"),
  Vn = Pa("%"),
  Z = Pa("px"),
  nI = Pa("vh"),
  rI = Pa("vw"),
  Sy = {
    ...Vn,
    parse: (t) => Vn.parse(t) / 100,
    transform: (t) => Vn.transform(t * 100),
  },
  Py = { ...bs, transform: Math.round },
  pw = {
    borderWidth: Z,
    borderTopWidth: Z,
    borderRightWidth: Z,
    borderBottomWidth: Z,
    borderLeftWidth: Z,
    borderRadius: Z,
    radius: Z,
    borderTopLeftRadius: Z,
    borderTopRightRadius: Z,
    borderBottomRightRadius: Z,
    borderBottomLeftRadius: Z,
    width: Z,
    maxWidth: Z,
    height: Z,
    maxHeight: Z,
    size: Z,
    top: Z,
    right: Z,
    bottom: Z,
    left: Z,
    padding: Z,
    paddingTop: Z,
    paddingRight: Z,
    paddingBottom: Z,
    paddingLeft: Z,
    margin: Z,
    marginTop: Z,
    marginRight: Z,
    marginBottom: Z,
    marginLeft: Z,
    rotate: cr,
    rotateX: cr,
    rotateY: cr,
    rotateZ: cr,
    scale: pl,
    scaleX: pl,
    scaleY: pl,
    scaleZ: pl,
    skew: cr,
    skewX: cr,
    skewY: cr,
    distance: Z,
    translateX: Z,
    translateY: Z,
    translateZ: Z,
    x: Z,
    y: Z,
    z: Z,
    perspective: Z,
    transformPerspective: Z,
    opacity: Ro,
    originX: Sy,
    originY: Sy,
    originZ: Z,
    zIndex: Py,
    backgroundPositionX: Z,
    backgroundPositionY: Z,
    fillOpacity: Ro,
    strokeOpacity: Ro,
    numOctaves: Py,
  };
function Ep(t, e, n) {
  const { style: r, vars: i, transform: s, transformOrigin: o } = t;
  let a = !1,
    u = !1,
    c = !0;
  for (const h in e) {
    const f = e[h];
    if (dw(h)) {
      i[h] = f;
      continue;
    }
    const p = pw[h],
      g = JA(f, p);
    if (Qr.has(h)) {
      if (((a = !0), (s[h] = g), !c)) continue;
      f !== (p.default || 0) && (c = !1);
    } else h.startsWith("origin") ? ((u = !0), (o[h] = g)) : (r[h] = g);
  }
  if (
    (e.transform ||
      (a || n
        ? (r.transform = QA(t.transform, c, n))
        : r.transform && (r.transform = "none")),
    u)
  ) {
    const { originX: h = "50%", originY: f = "50%", originZ: p = 0 } = o;
    r.transformOrigin = `${h} ${f} ${p}`;
  }
}
const Tp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function mw(t, e, n) {
  for (const r in e) !kt(e[r]) && !hw(r, n) && (t[r] = e[r]);
}
function iI({ transformTemplate: t }, e) {
  return V.useMemo(() => {
    const n = Tp();
    return Ep(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function sI(t, e) {
  const n = t.style || {},
    r = {};
  return mw(r, n, t), Object.assign(r, iI(t, e)), r;
}
function oI(t, e) {
  const n = {},
    r = sI(t, e);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const aI = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Eu(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    aI.has(t)
  );
}
let gw = (t) => !Eu(t);
function lI(t) {
  t && (gw = (e) => (e.startsWith("on") ? !Eu(e) : t(e)));
}
try {
  lI(require("@emotion/is-prop-valid").default);
} catch {}
function uI(t, e, n) {
  const r = {};
  for (const i in t)
    (i === "values" && typeof t.values == "object") ||
      ((gw(i) ||
        (n === !0 && Eu(i)) ||
        (!e && !Eu(i)) ||
        (t.draggable && i.startsWith("onDrag"))) &&
        (r[i] = t[i]));
  return r;
}
function xy(t, e, n) {
  return typeof t == "string" ? t : Z.transform(e + n * t);
}
function cI(t, e, n) {
  const r = xy(e, t.x, t.width),
    i = xy(n, t.y, t.height);
  return `${r} ${i}`;
}
const hI = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  fI = { offset: "strokeDashoffset", array: "strokeDasharray" };
function dI(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? hI : fI;
  t[s.offset] = Z.transform(-r);
  const o = Z.transform(e),
    a = Z.transform(n);
  t[s.array] = `${o} ${a}`;
}
function Sp(
  t,
  {
    attrX: e,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: u = 0,
    ...c
  },
  h,
  f,
) {
  if ((Ep(t, c, f), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: p, style: g, dimensions: w } = t;
  p.transform && (w && (g.transform = p.transform), delete p.transform),
    w &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = cI(
        w,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    e !== void 0 && (p.x = e),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    o !== void 0 && dI(p, o, a, u, !1);
}
const yw = () => ({ ...Tp(), attrs: {} }),
  Pp = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function pI(t, e, n, r) {
  const i = V.useMemo(() => {
    const s = yw();
    return (
      Sp(s, e, Pp(r), t.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [e]);
  if (t.style) {
    const s = {};
    mw(s, t.style, t), (i.style = { ...s, ...i.style });
  }
  return i;
}
function mI(t = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const u = (vp(n) ? pI : oI)(r, s, o, n),
      c = uI(r, typeof n == "string", t),
      h = n !== V.Fragment ? { ...c, ...u, ref: i } : {},
      { children: f } = r,
      p = V.useMemo(() => (kt(f) ? f.get() : f), [f]);
    return V.createElement(n, { ...h, children: p });
  };
}
function vw(t, { style: e, vars: n }, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n) t.style.setProperty(s, n[s]);
}
const _w = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ww(t, e, n, r) {
  vw(t, e, void 0, r);
  for (const i in e.attrs) t.setAttribute(_w.has(i) ? i : ic(i), e.attrs[i]);
}
function xp(t, e, n) {
  var r;
  const { style: i } = t,
    s = {};
  for (const o in i)
    (kt(i[o]) ||
      (e.style && kt(e.style[o])) ||
      hw(o, t) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), s
  );
}
function Ew(t, e, n) {
  const r = xp(t, e, n);
  for (const i in t)
    if (kt(t[i]) || kt(e[i])) {
      const s =
        Ta.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = t[i];
    }
  return r;
}
function Cy(t) {
  const e = [{}, {}];
  return (
    t == null ||
      t.values.forEach((n, r) => {
        (e[0][r] = n.get()), (e[1][r] = n.getVelocity());
      }),
    e
  );
}
function Cp(t, e, n, r) {
  if (typeof e == "function") {
    const [i, s] = Cy(r);
    e = e(n !== void 0 ? n : t.custom, i, s);
  }
  if (
    (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function")
  ) {
    const [i, s] = Cy(r);
    e = e(n !== void 0 ? n : t.custom, i, s);
  }
  return e;
}
function Ap(t) {
  const e = V.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Lf = (t) => Array.isArray(t),
  gI = (t) => !!(t && typeof t == "object" && t.mix && t.toValue),
  yI = (t) => (Lf(t) ? t[t.length - 1] || 0 : t);
function Ml(t) {
  const e = kt(t) ? t.get() : t;
  return gI(e) ? e.toValue() : e;
}
const Tw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Sw(t) {
  if (Qr.has(t)) return "transform";
  if (Tw.has(t)) return ic(t);
}
function oc(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function ac(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
function vI(
  {
    applyWillChange: t = !1,
    scrapeMotionValuesFromProps: e,
    createRenderState: n,
    onMount: r,
  },
  i,
  s,
  o,
  a,
) {
  const u = { latestValues: wI(i, s, o, a ? !1 : t, e), renderState: n() };
  return r && (u.mount = (c) => r(i, c, u)), u;
}
const Pw = (t) => (e, n) => {
  const r = V.useContext(nc),
    i = V.useContext(rc),
    s = () => vI(t, e, r, i, n);
  return n ? s() : Ap(s);
};
function _I(t, e) {
  const n = Sw(e);
  n && oc(t, n);
}
function Ay(t, e, n) {
  const r = Array.isArray(e) ? e : [e];
  for (let i = 0; i < r.length; i++) {
    const s = Cp(t, r[i]);
    if (s) {
      const { transitionEnd: o, transition: a, ...u } = s;
      n(u, o);
    }
  }
}
function wI(t, e, n, r, i) {
  var s;
  const o = {},
    a = [],
    u =
      r &&
      ((s = t.style) === null || s === void 0 ? void 0 : s.willChange) ===
        void 0,
    c = i(t, {});
  for (const A in c) o[A] = Ml(c[A]);
  let { initial: h, animate: f } = t;
  const p = sc(t),
    g = cw(t);
  e &&
    g &&
    !p &&
    t.inherit !== !1 &&
    (h === void 0 && (h = e.initial), f === void 0 && (f = e.animate));
  let w = n ? n.initial === !1 : !1;
  w = w || h === !1;
  const C = w ? f : h;
  return (
    C &&
      typeof C != "boolean" &&
      !ia(C) &&
      Ay(t, C, (A, E) => {
        for (const y in A) {
          let T = A[y];
          if (Array.isArray(T)) {
            const k = w ? T.length - 1 : 0;
            T = T[k];
          }
          T !== null && (o[y] = T);
        }
        for (const y in E) o[y] = E[y];
      }),
    u &&
      (f &&
        h !== !1 &&
        !ia(f) &&
        Ay(t, f, (A) => {
          for (const E in A) _I(a, E);
        }),
      a.length && (o.willChange = a.join(","))),
    o
  );
}
const {
    schedule: Pe,
    cancel: tr,
    state: dt,
    steps: ph,
  } = aw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Vt, !0),
  EI = {
    useVisualState: Pw({
      scrapeMotionValuesFromProps: Ew,
      createRenderState: yw,
      onMount: (t, e, { renderState: n, latestValues: r }) => {
        Pe.read(() => {
          try {
            n.dimensions =
              typeof e.getBBox == "function"
                ? e.getBBox()
                : e.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Pe.render(() => {
            Sp(n, r, Pp(e.tagName), t.transformTemplate), ww(e, n);
          });
      },
    }),
  },
  TI = {
    useVisualState: Pw({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: xp,
      createRenderState: Tp,
    }),
  };
function SI(t, { forwardMotionProps: e = !1 }, n, r) {
  return {
    ...(vp(t) ? EI : TI),
    preloadedFeatures: n,
    useRender: mI(e),
    createVisualElement: r,
    Component: t,
  };
}
function Kn(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const xw = (t) =>
  t.pointerType === "mouse"
    ? typeof t.button != "number" || t.button <= 0
    : t.isPrimary !== !1;
function lc(t, e = "page") {
  return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
}
const PI = (t) => (e) => xw(e) && t(e, lc(e));
function qn(t, e, n, r) {
  return Kn(t, e, PI(n), r);
}
const xI = (t, e) => (n) => e(t(n)),
  Qn = (...t) => t.reduce(xI);
function Cw(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? ((e = t), n) : !1;
  };
}
const Iy = Cw("dragHorizontal"),
  Ry = Cw("dragVertical");
function Aw(t) {
  let e = !1;
  if (t === "y") e = Ry();
  else if (t === "x") e = Iy();
  else {
    const n = Iy(),
      r = Ry();
    n && r
      ? (e = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return e;
}
function Iw() {
  const t = Aw(!0);
  return t ? (t(), !1) : !0;
}
class Yr {
  constructor(e) {
    (this.isMounted = !1), (this.node = e);
  }
  update() {}
}
function ky(t, e) {
  const n = e ? "pointerenter" : "pointerleave",
    r = e ? "onHoverStart" : "onHoverEnd",
    i = (s, o) => {
      if (s.pointerType === "touch" || Iw()) return;
      const a = t.getProps();
      t.animationState &&
        a.whileHover &&
        t.animationState.setActive("whileHover", e);
      const u = a[r];
      u && Pe.postRender(() => u(s, o));
    };
  return qn(t.current, n, i, { passive: !t.getProps()[r] });
}
class CI extends Yr {
  mount() {
    this.unmount = Qn(ky(this.node, !0), ky(this.node, !1));
  }
  unmount() {}
}
class AI extends Yr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Qn(
      Kn(this.node.current, "focus", () => this.onFocus()),
      Kn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Rw = (t, e) => (e ? (t === e ? !0 : Rw(t, e.parentElement)) : !1);
function mh(t, e) {
  if (!e) return;
  const n = new PointerEvent("pointer" + t);
  e(n, lc(n));
}
class II extends Yr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Vt),
      (this.removeEndListeners = Vt),
      (this.removeAccessibleListeners = Vt),
      (this.startPointerPress = (e, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = qn(
            window,
            "pointerup",
            (a, u) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: c,
                  onTapCancel: h,
                  globalTapTarget: f,
                } = this.node.getProps(),
                p = !f && !Rw(this.node.current, a.target) ? h : c;
              p && Pe.update(() => p(a, u));
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          o = qn(window, "pointercancel", (a, u) => this.cancelPress(a, u), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Qn(s, o)), this.startPress(e, n);
      }),
      (this.startAccessiblePress = () => {
        const e = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                mh("up", (u, c) => {
                  const { onTap: h } = this.node.getProps();
                  h && Pe.postRender(() => h(u, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Kn(this.node.current, "keyup", o)),
              mh("down", (a, u) => {
                this.startPress(a, u);
              });
          },
          n = Kn(this.node.current, "keydown", e),
          r = () => {
            this.isPressing && mh("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = Kn(this.node.current, "blur", r);
        this.removeAccessibleListeners = Qn(n, i);
      });
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Pe.postRender(() => r(e, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Iw()
    );
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Pe.postRender(() => r(e, n));
  }
  mount() {
    const e = this.node.getProps(),
      n = qn(
        e.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(e.onTapStart || e.onPointerStart) },
      ),
      r = Kn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Qn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ff = new WeakMap(),
  gh = new WeakMap(),
  RI = (t) => {
    const e = Ff.get(t.target);
    e && e(t);
  },
  kI = (t) => {
    t.forEach(RI);
  };
function VI({ root: t, ...e }) {
  const n = t || document;
  gh.has(n) || gh.set(n, {});
  const r = gh.get(n),
    i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(kI, { root: t, ...e })), r[i];
}
function DI(t, e, n) {
  const r = VI(e);
  return (
    Ff.set(t, n),
    r.observe(t),
    () => {
      Ff.delete(t), r.unobserve(t);
    }
  );
}
const bI = { some: 0, all: 1 };
class NI extends Yr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = e,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : bI[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: h, onViewportLeave: f } = this.node.getProps(),
          p = c ? h : f;
        p && p(u);
      };
    return DI(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(OI(e, n)) && this.startObserver();
  }
  unmount() {}
}
function OI({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const MI = {
  inView: { Feature: NI },
  tap: { Feature: II },
  focus: { Feature: AI },
  hover: { Feature: CI },
};
function kw(t, e) {
  if (!Array.isArray(e)) return !1;
  const n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function uc(t, e, n) {
  const r = t.getProps();
  return Cp(r, e, n !== void 0 ? n : r.custom, t);
}
const Ir = (t) => t * 1e3,
  Yn = (t) => t / 1e3,
  LI = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  FI = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jI = { type: "keyframes", duration: 0.8 },
  BI = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  UI = (t, { keyframes: e }) =>
    e.length > 2
      ? jI
      : Qr.has(t)
        ? t.startsWith("scale")
          ? FI(e[1])
          : LI
        : BI;
function zI({
  when: t,
  delay: e,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: u,
  elapsed: c,
  ...h
}) {
  return !!Object.keys(h).length;
}
function Ip(t, e) {
  return t[e] || t.default || t;
}
const $I = (t) => t !== null;
function cc(t, { repeat: e, repeatType: n = "loop" }, r) {
  const i = t.filter($I),
    s = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
let Ll;
function WI() {
  Ll = void 0;
}
const Rr = {
    now: () => (
      Ll === void 0 &&
        Rr.set(
          dt.isProcessing || RA.useManualTiming
            ? dt.timestamp
            : performance.now(),
        ),
      Ll
    ),
    set: (t) => {
      (Ll = t), queueMicrotask(WI);
    },
  },
  Vw = (t) => /^0[^.\s]+$/u.test(t);
function HI(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || Vw(t)
      : !0;
}
const Dw = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  KI = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function GI(t) {
  const e = KI.exec(t);
  if (!e) return [,];
  const [, n, r, i] = e;
  return [`--${n ?? r}`, i];
}
function bw(t, e, n = 1) {
  const [r, i] = GI(t);
  if (!r) return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Dw(o) ? parseFloat(o) : o;
  }
  return _p(i) ? bw(i, e, n + 1) : i;
}
const qI = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Vy = (t) => t === bs || t === Z,
  Dy = (t, e) => parseFloat(t.split(", ")[e]),
  by =
    (t, e) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Dy(i[1], e);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Dy(s[1], t) : 0;
      }
    },
  QI = new Set(["x", "y", "z"]),
  YI = Ta.filter((t) => !QI.has(t));
function XI(t) {
  const e = [];
  return (
    YI.forEach((n) => {
      const r = t.getValue(n);
      r !== void 0 &&
        (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    e
  );
}
const Es = {
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) =>
    t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  x: by(4, 13),
  y: by(5, 14),
};
Es.translateX = Es.x;
Es.translateY = Es.y;
const Nw = (t) => (e) => e.test(t),
  JI = { test: (t) => t === "auto", parse: (t) => t },
  Ow = [bs, Z, Vn, cr, rI, nI, JI],
  Ny = (t) => Ow.find(Nw(t)),
  gi = new Set();
let jf = !1,
  Bf = !1;
function Mw() {
  if (Bf) {
    const t = Array.from(gi).filter((r) => r.needsMeasurement),
      e = new Set(t.map((r) => r.element)),
      n = new Map();
    e.forEach((r) => {
      const i = XI(r);
      i.length && (n.set(r, i), r.render());
    }),
      t.forEach((r) => r.measureInitialState()),
      e.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      t.forEach((r) => r.measureEndState()),
      t.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Bf = !1), (jf = !1), gi.forEach((t) => t.complete()), gi.clear();
}
function Lw() {
  gi.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Bf = !0);
  });
}
function ZI() {
  Lw(), Mw();
}
class Rp {
  constructor(e, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (gi.add(this),
          jf || ((jf = !0), Pe.read(Lw), Pe.resolveKeyframes(Mw)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: e,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < e.length; s++)
      if (e[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (r && n) {
            const u = r.readValue(n, a);
            u != null && (e[0] = u);
          }
          e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0]);
        } else e[s] = e[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      gi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), gi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const kp = (t, e) => (n) =>
    !!(
      (Sa(n) && eI.test(n) && n.startsWith(t)) ||
      (e && !tI(n) && Object.prototype.hasOwnProperty.call(n, e))
    ),
  Fw = (t, e, n) => (r) => {
    if (!Sa(r)) return r;
    const [i, s, o, a] = r.match(wp);
    return {
      [t]: parseFloat(i),
      [e]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  e2 = (t) => Mr(0, 255, t),
  yh = { ...bs, transform: (t) => Math.round(e2(t)) },
  hi = {
    test: kp("rgb", "red"),
    parse: Fw("red", "green", "blue"),
    transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      yh.transform(t) +
      ", " +
      yh.transform(e) +
      ", " +
      yh.transform(n) +
      ", " +
      ko(Ro.transform(r)) +
      ")",
  };
function t2(t) {
  let e = "",
    n = "",
    r = "",
    i = "";
  return (
    t.length > 5
      ? ((e = t.substring(1, 3)),
        (n = t.substring(3, 5)),
        (r = t.substring(5, 7)),
        (i = t.substring(7, 9)))
      : ((e = t.substring(1, 2)),
        (n = t.substring(2, 3)),
        (r = t.substring(3, 4)),
        (i = t.substring(4, 5)),
        (e += e),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(e, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Uf = { test: kp("#"), parse: t2, transform: hi.transform },
  es = {
    test: kp("hsl", "hue"),
    parse: Fw("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      Vn.transform(ko(e)) +
      ", " +
      Vn.transform(ko(n)) +
      ", " +
      ko(Ro.transform(r)) +
      ")",
  },
  Ct = {
    test: (t) => hi.test(t) || Uf.test(t) || es.test(t),
    parse: (t) =>
      hi.test(t) ? hi.parse(t) : es.test(t) ? es.parse(t) : Uf.parse(t),
    transform: (t) =>
      Sa(t) ? t : t.hasOwnProperty("red") ? hi.transform(t) : es.transform(t),
  };
function n2(t) {
  var e, n;
  return (
    isNaN(t) &&
    Sa(t) &&
    (((e = t.match(wp)) === null || e === void 0 ? void 0 : e.length) || 0) +
      (((n = t.match(ZA)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const jw = "number",
  Bw = "color",
  r2 = "var",
  i2 = "var(",
  Oy = "${}",
  s2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function sa(t) {
  const e = t.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = e
    .replace(
      s2,
      (u) => (
        Ct.test(u)
          ? (r.color.push(s), i.push(Bw), n.push(Ct.parse(u)))
          : u.startsWith(i2)
            ? (r.var.push(s), i.push(r2), n.push(u))
            : (r.number.push(s), i.push(jw), n.push(parseFloat(u))),
        ++s,
        Oy
      ),
    )
    .split(Oy);
  return { values: n, split: a, indexes: r, types: i };
}
function Uw(t) {
  return sa(t).values;
}
function zw(t) {
  const { split: e, types: n } = sa(t),
    r = e.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += e[o]), i[o] !== void 0)) {
        const a = n[o];
        a === jw
          ? (s += ko(i[o]))
          : a === Bw
            ? (s += Ct.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const o2 = (t) => (typeof t == "number" ? 0 : t);
function a2(t) {
  const e = Uw(t);
  return zw(t)(e.map(o2));
}
const Lr = {
    test: n2,
    parse: Uw,
    createTransformer: zw,
    getAnimatableNone: a2,
  },
  l2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function u2(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [r] = n.match(wp) || [];
  if (!r) return t;
  const i = n.replace(r, "");
  let s = l2.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + i + ")";
}
const c2 = /\b([a-z-]*)\(.*?\)/gu,
  zf = {
    ...Lr,
    getAnimatableNone: (t) => {
      const e = t.match(c2);
      return e ? e.map(u2).join(" ") : t;
    },
  },
  h2 = {
    ...pw,
    color: Ct,
    backgroundColor: Ct,
    outlineColor: Ct,
    fill: Ct,
    stroke: Ct,
    borderColor: Ct,
    borderTopColor: Ct,
    borderRightColor: Ct,
    borderBottomColor: Ct,
    borderLeftColor: Ct,
    filter: zf,
    WebkitFilter: zf,
  },
  Vp = (t) => h2[t];
function $w(t, e) {
  let n = Vp(t);
  return (
    n !== zf && (n = Lr), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
  );
}
const f2 = new Set(["auto", "none", "0"]);
function d2(t, e, n) {
  let r = 0,
    i;
  for (; r < t.length && !i; ) {
    const s = t[r];
    typeof s == "string" && !f2.has(s) && sa(s).values.length && (i = t[r]),
      r++;
  }
  if (i && n) for (const s of e) t[s] = $w(n, i);
}
class Ww extends Rp {
  constructor(e, n, r, i) {
    super(e, n, r, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let c = e[u];
      if (typeof c == "string" && ((c = c.trim()), _p(c))) {
        const h = bw(c, n.current);
        h !== void 0 && (e[u] = h),
          u === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !qI.has(r) || e.length !== 2)) return;
    const [i, s] = e,
      o = Ny(i),
      a = Ny(s);
    if (o !== a)
      if (Vy(o) && Vy(a))
        for (let u = 0; u < e.length; u++) {
          const c = e[u];
          typeof c == "string" && (e[u] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this,
      r = [];
    for (let i = 0; i < e.length; i++) HI(e[i]) && r.push(i);
    r.length && d2(e, r, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: r } = this;
    if (!e.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Es[r](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = Es[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([u, c]) => {
          n.getValue(u).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Hw(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const My = (t, e) =>
  e === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (Lr.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function p2(t) {
  const e = t[0];
  if (t.length === 1) return !0;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return !0;
}
function m2(t, e, n, r) {
  const i = t[0];
  if (i === null) return !1;
  if (e === "display" || e === "visibility") return !0;
  const s = t[t.length - 1],
    o = My(i, e),
    a = My(s, e);
  return !o || !a ? !1 : p2(t) || (n === "spring" && r);
}
class Kw {
  constructor({
    autoplay: e = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: e,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ZI(), this._resolved;
  }
  onKeyframesResolved(e, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: u,
      isGenerator: c,
    } = this.options;
    if (!c && !m2(e, r, i, s))
      if (o) this.options.duration = 0;
      else {
        u == null || u(cc(e, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const h = this.initPlayback(e, n);
    h !== !1 &&
      ((this._resolved = { keyframes: e, finalKeyframe: n, ...h }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
function Gw(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const g2 = 5;
function qw(t, e, n) {
  const r = Math.max(e - g2, 0);
  return Gw(n - t(r), e - r);
}
const vh = 0.001,
  y2 = 0.01,
  v2 = 10,
  _2 = 0.05,
  w2 = 1;
function E2({
  duration: t = 800,
  bounce: e = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - e;
  (o = Mr(_2, w2, o)),
    (t = Mr(y2, v2, Yn(t))),
    o < 1
      ? ((i = (c) => {
          const h = c * o,
            f = h * t,
            p = h - n,
            g = $f(c, o),
            w = Math.exp(-f);
          return vh - (p / g) * w;
        }),
        (s = (c) => {
          const f = c * o * t,
            p = f * n + n,
            g = Math.pow(o, 2) * Math.pow(c, 2) * t,
            w = Math.exp(-f),
            C = $f(Math.pow(c, 2), o);
          return ((-i(c) + vh > 0 ? -1 : 1) * ((p - g) * w)) / C;
        }))
      : ((i = (c) => {
          const h = Math.exp(-c * t),
            f = (c - n) * t + 1;
          return -vh + h * f;
        }),
        (s = (c) => {
          const h = Math.exp(-c * t),
            f = (n - c) * (t * t);
          return h * f;
        }));
  const a = 5 / t,
    u = S2(i, s, a);
  if (((t = Ir(t)), isNaN(u)))
    return { stiffness: 100, damping: 10, duration: t };
  {
    const c = Math.pow(u, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: t };
  }
}
const T2 = 12;
function S2(t, e, n) {
  let r = n;
  for (let i = 1; i < T2; i++) r = r - t(r) / e(r);
  return r;
}
function $f(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const P2 = ["duration", "bounce"],
  x2 = ["stiffness", "damping", "mass"];
function Ly(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function C2(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Ly(t, x2) && Ly(t, P2)) {
    const n = E2(t);
    (e = { ...e, ...n, mass: 1 }), (e.isResolvedFromDuration = !0);
  }
  return e;
}
function Qw({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
  const i = t[0],
    s = t[t.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: h,
      velocity: f,
      isResolvedFromDuration: p,
    } = C2({ ...r, velocity: -Yn(r.velocity || 0) }),
    g = f || 0,
    w = u / (2 * Math.sqrt(a * c)),
    C = s - i,
    A = Yn(Math.sqrt(a / c)),
    E = Math.abs(C) < 5;
  n || (n = E ? 0.01 : 2), e || (e = E ? 0.005 : 0.5);
  let y;
  if (w < 1) {
    const T = $f(A, w);
    y = (k) => {
      const M = Math.exp(-w * A * k);
      return (
        s - M * (((g + w * A * C) / T) * Math.sin(T * k) + C * Math.cos(T * k))
      );
    };
  } else if (w === 1) y = (T) => s - Math.exp(-A * T) * (C + (g + A * C) * T);
  else {
    const T = A * Math.sqrt(w * w - 1);
    y = (k) => {
      const M = Math.exp(-w * A * k),
        j = Math.min(T * k, 300);
      return (
        s - (M * ((g + w * A * C) * Math.sinh(j) + T * C * Math.cosh(j))) / T
      );
    };
  }
  return {
    calculatedDuration: (p && h) || null,
    next: (T) => {
      const k = y(T);
      if (p) o.done = T >= h;
      else {
        let M = g;
        T !== 0 && (w < 1 ? (M = qw(y, T, k)) : (M = 0));
        const j = Math.abs(M) <= n,
          P = Math.abs(s - k) <= e;
        o.done = j && P;
      }
      return (o.value = o.done ? s : k), o;
    },
  };
}
function Fy({
  keyframes: t,
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: u,
  restDelta: c = 0.5,
  restSpeed: h,
}) {
  const f = t[0],
    p = { done: !1, value: f },
    g = (v) => (a !== void 0 && v < a) || (u !== void 0 && v > u),
    w = (v) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - v) < Math.abs(u - v)
          ? a
          : u;
  let C = n * e;
  const A = f + C,
    E = o === void 0 ? A : o(A);
  E !== A && (C = E - f);
  const y = (v) => -C * Math.exp(-v / r),
    T = (v) => E + y(v),
    k = (v) => {
      const S = y(v),
        x = T(v);
      (p.done = Math.abs(S) <= c), (p.value = p.done ? E : x);
    };
  let M, j;
  const P = (v) => {
    g(p.value) &&
      ((M = v),
      (j = Qw({
        keyframes: [p.value, w(p.value)],
        velocity: qw(T, v, p.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: h,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (v) => {
        let S = !1;
        return (
          !j && M === void 0 && ((S = !0), k(v), P(v)),
          M !== void 0 && v >= M ? j.next(v - M) : (!S && k(v), p)
        );
      },
    }
  );
}
const Yw = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
  A2 = 1e-7,
  I2 = 12;
function R2(t, e, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = e + (n - e) / 2), (s = Yw(o, r, i) - t), s > 0 ? (n = o) : (e = o);
  while (Math.abs(s) > A2 && ++a < I2);
  return o;
}
function xa(t, e, n, r) {
  if (t === e && n === r) return Vt;
  const i = (s) => R2(s, 0, 1, t, n);
  return (s) => (s === 0 || s === 1 ? s : Yw(i(s), e, r));
}
const k2 = xa(0.42, 0, 1, 1),
  V2 = xa(0, 0, 0.58, 1),
  Xw = xa(0.42, 0, 0.58, 1),
  D2 = (t) => Array.isArray(t) && typeof t[0] != "number",
  Jw = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
  Zw = (t) => (e) => 1 - t(1 - e),
  Dp = (t) => 1 - Math.sin(Math.acos(t)),
  eE = Zw(Dp),
  b2 = Jw(Dp),
  tE = xa(0.33, 1.53, 0.69, 0.99),
  bp = Zw(tE),
  N2 = Jw(bp),
  O2 = (t) =>
    (t *= 2) < 1 ? 0.5 * bp(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  jy = {
    linear: Vt,
    easeIn: k2,
    easeInOut: Xw,
    easeOut: V2,
    circIn: Dp,
    circInOut: b2,
    circOut: eE,
    backIn: bp,
    backInOut: N2,
    backOut: tE,
    anticipate: O2,
  },
  By = (t) => {
    if (Array.isArray(t)) {
      Mf(t.length === 4);
      const [e, n, r, i] = t;
      return xa(e, n, r, i);
    } else if (typeof t == "string") return Mf(jy[t] !== void 0), jy[t];
    return t;
  },
  oa = (t, e, n) => {
    const r = e - t;
    return r === 0 ? 1 : (n - t) / r;
  },
  Le = (t, e, n) => t + (e - t) * n;
function _h(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + (e - t) * 6 * n
      : n < 1 / 2
        ? e
        : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t
  );
}
function M2({ hue: t, saturation: e, lightness: n, alpha: r }) {
  (t /= 360), (e /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!e) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
      u = 2 * n - a;
    (i = _h(u, a, t + 1 / 3)), (s = _h(u, a, t)), (o = _h(u, a, t - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Tu(t, e) {
  return (n) => (n > 0 ? e : t);
}
const wh = (t, e, n) => {
    const r = t * t,
      i = n * (e * e - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  L2 = [Uf, hi, es],
  F2 = (t) => L2.find((e) => e.test(t));
function Uy(t) {
  const e = F2(t);
  if (!e) return !1;
  let n = e.parse(t);
  return e === es && (n = M2(n)), n;
}
const zy = (t, e) => {
    const n = Uy(t),
      r = Uy(e);
    if (!n || !r) return Tu(t, e);
    const i = { ...n };
    return (s) => (
      (i.red = wh(n.red, r.red, s)),
      (i.green = wh(n.green, r.green, s)),
      (i.blue = wh(n.blue, r.blue, s)),
      (i.alpha = Le(n.alpha, r.alpha, s)),
      hi.transform(i)
    );
  },
  Wf = new Set(["none", "hidden"]);
function j2(t, e) {
  return Wf.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
}
function B2(t, e) {
  return (n) => Le(t, e, n);
}
function Np(t) {
  return typeof t == "number"
    ? B2
    : typeof t == "string"
      ? _p(t)
        ? Tu
        : Ct.test(t)
          ? zy
          : $2
      : Array.isArray(t)
        ? nE
        : typeof t == "object"
          ? Ct.test(t)
            ? zy
            : U2
          : Tu;
}
function nE(t, e) {
  const n = [...t],
    r = n.length,
    i = t.map((s, o) => Np(s)(s, e[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function U2(t, e) {
  const n = { ...t, ...e },
    r = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (r[i] = Np(t[i])(t[i], e[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function z2(t, e) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const o = e.types[s],
      a = t.indexes[o][i[o]],
      u = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = u), i[o]++;
  }
  return r;
}
const $2 = (t, e) => {
  const n = Lr.createTransformer(e),
    r = sa(t),
    i = sa(e);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Wf.has(t) && !i.values.length) || (Wf.has(e) && !r.values.length)
      ? j2(t, e)
      : Qn(nE(z2(r, i), i.values), n)
    : Tu(t, e);
};
function rE(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number"
    ? Le(t, e, n)
    : Np(t)(t, e);
}
function W2(t, e, n) {
  const r = [],
    i = n || rE,
    s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const u = Array.isArray(e) ? e[o] || Vt : e;
      a = Qn(u, a);
    }
    r.push(a);
  }
  return r;
}
function H2(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if ((Mf(s === e.length), s === 1)) return () => e[0];
  if (s === 2 && t[0] === t[1]) return () => e[1];
  t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
  const o = W2(e, r, i),
    a = o.length,
    u = (c) => {
      let h = 0;
      if (a > 1) for (; h < t.length - 2 && !(c < t[h + 1]); h++);
      const f = oa(t[h], t[h + 1], c);
      return o[h](f);
    };
  return n ? (c) => u(Mr(t[0], t[s - 1], c)) : u;
}
function K2(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = oa(0, e, r);
    t.push(Le(n, 1, i));
  }
}
function G2(t) {
  const e = [0];
  return K2(e, t.length - 1), e;
}
function q2(t, e) {
  return t.map((n) => n * e);
}
function Q2(t, e) {
  return t.map(() => e || Xw).splice(0, t.length - 1);
}
function Su({
  duration: t = 300,
  keyframes: e,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = D2(r) ? r.map(By) : By(r),
    s = { done: !1, value: e[0] },
    o = q2(n && n.length === e.length ? n : G2(e), t),
    a = H2(o, e, { ease: Array.isArray(i) ? i : Q2(e, i) });
  return {
    calculatedDuration: t,
    next: (u) => ((s.value = a(u)), (s.done = u >= t), s),
  };
}
const $y = 2e4;
function Y2(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < $y; ) (e += n), (r = t.next(e));
  return e >= $y ? 1 / 0 : e;
}
const X2 = (t) => {
    const e = ({ timestamp: n }) => t(n);
    return {
      start: () => Pe.update(e, !0),
      stop: () => tr(e),
      now: () => (dt.isProcessing ? dt.timestamp : Rr.now()),
    };
  },
  J2 = { decay: Fy, inertia: Fy, tween: Su, keyframes: Su, spring: Qw },
  Z2 = (t) => t / 100;
class Op extends Kw {
  constructor({ KeyframeResolver: e = Rp, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: i, keyframes: s } = this.options,
      o = (a, u) => this.onKeyframesResolved(a, u);
    r && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
      : (this.resolver = new e(s, o, r, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = J2[n] || Su;
    let u, c;
    a !== Su &&
      typeof e[0] != "number" &&
      ((u = Qn(Z2, rE(e[0], e[1]))), (e = [0, 100]));
    const h = a({ ...this.options, keyframes: e });
    s === "mirror" &&
      (c = a({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
      h.calculatedDuration === null && (h.calculatedDuration = Y2(h));
    const { calculatedDuration: f } = h,
      p = f + i,
      g = p * (r + 1) - i;
    return {
      generator: h,
      mirroredGenerator: c,
      mapPercentToKeyframes: u,
      calculatedDuration: f,
      resolvedDuration: p,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !e
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(e, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: v } = this.options;
      return { done: !0, value: v[v.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: u,
      calculatedDuration: c,
      totalDuration: h,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p,
      repeat: g,
      repeatType: w,
      repeatDelay: C,
      onUpdate: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, e))
      : this.speed < 0 &&
        (this.startTime = Math.min(e - h / this.speed, this.startTime)),
      n
        ? (this.currentTime = e)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
    const E = this.currentTime - p * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? E < 0 : E > h;
    (this.currentTime = Math.max(E, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = h);
    let T = this.currentTime,
      k = s;
    if (g) {
      const v = Math.min(this.currentTime, h) / f;
      let S = Math.floor(v),
        x = v % 1;
      !x && v >= 1 && (x = 1),
        x === 1 && S--,
        (S = Math.min(S, g + 1)),
        !!(S % 2) &&
          (w === "reverse"
            ? ((x = 1 - x), C && (x -= C / f))
            : w === "mirror" && (k = o)),
        (T = Mr(0, 1, x) * f);
    }
    const M = y ? { done: !1, value: u[0] } : k.next(T);
    a && (M.value = a(M.value));
    let { done: j } = M;
    !y &&
      c !== null &&
      (j = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      P && i !== void 0 && (M.value = cc(u, this.options, i)),
      A && A(M.value),
      P && this.finish(),
      M
    );
  }
  get duration() {
    const { resolved: e } = this;
    return e ? Yn(e.calculatedDuration) : 0;
  }
  get time() {
    return Yn(this.currentTime);
  }
  set time(e) {
    (e = Ir(e)),
      (this.currentTime = e),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = e)
        : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    (this.playbackSpeed = e), n && (this.time = Yn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: e = X2, onPlay: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(e) {
    return (this.startTime = 0), this.tick(e, !0);
  }
}
const iE = (t) => Array.isArray(t) && typeof t[0] == "number";
function sE(t) {
  return !!(
    !t ||
    (typeof t == "string" && t in Mp) ||
    iE(t) ||
    (Array.isArray(t) && t.every(sE))
  );
}
const mo = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
  Mp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: mo([0, 0.65, 0.55, 1]),
    circOut: mo([0.55, 0, 1, 0.45]),
    backIn: mo([0.31, 0.01, 0.66, -0.59]),
    backOut: mo([0.33, 1.53, 0.69, 0.99]),
  };
function eR(t) {
  return oE(t) || Mp.easeOut;
}
function oE(t) {
  if (t) return iE(t) ? mo(t) : Array.isArray(t) ? t.map(eR) : Mp[t];
}
function tR(
  t,
  e,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: u,
  } = {},
) {
  const c = { [e]: n };
  u && (c.offset = u);
  const h = oE(a);
  return (
    Array.isArray(h) && (c.easing = h),
    t.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(h) ? "linear" : h,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const nR = Hw(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Pu = 10,
  rR = 2e4;
function iR(t) {
  return t.type === "spring" || !sE(t.ease);
}
function sR(t, e) {
  const n = new Op({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: t[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < rR; ) (r = n.sample(s)), i.push(r.value), (s += Pu);
  return { times: void 0, keyframes: i, duration: s - Pu, ease: "linear" };
}
class Wy extends Kw {
  constructor(e) {
    super(e);
    const { name: n, motionValue: r, keyframes: i } = this.options;
    (this.resolver = new Ww(i, (s, o) => this.onKeyframesResolved(s, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: u,
      name: c,
    } = this.options;
    if (!(!((r = u.owner) === null || r === void 0) && r.current)) return !1;
    if (iR(this.options)) {
      const { onComplete: f, onUpdate: p, motionValue: g, ...w } = this.options,
        C = sR(e, w);
      (e = C.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (i = C.duration),
        (s = C.times),
        (o = C.ease),
        (a = "keyframes");
    }
    const h = tR(u.owner.current, c, e, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (h.startTime = Rr.now()),
      this.pendingTimeline
        ? ((h.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (h.onfinish = () => {
            const { onComplete: f } = this.options;
            u.set(cc(e, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: h, duration: i, times: s, type: a, ease: o, keyframes: e }
    );
  }
  get duration() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { duration: n } = e;
    return Yn(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e) return 0;
    const { animation: n } = e;
    return Yn(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Ir(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e) return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e) return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n) return Vt;
      const { animation: r } = n;
      (r.timeline = e), (r.onfinish = null);
    }
    return Vt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e) return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = e;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const { motionValue: c, onUpdate: h, onComplete: f, ...p } = this.options,
        g = new Op({
          ...p,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        w = Ir(this.time);
      c.setWithVelocity(g.sample(w - Pu).value, g.sample(w).value, Pu);
    }
    const { onStop: u } = this.options;
    u && u(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = e;
    return (
      nR() &&
      r &&
      Tw.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
function oR(t, e) {
  let n;
  const r = () => {
    const { currentTime: i } = e,
      o = (i === null ? 0 : i.value) / 100;
    n !== o && t(o), (n = o);
  };
  return Pe.update(r, !0), () => tr(r);
}
const aR = Hw(() => window.ScrollTimeline !== void 0);
class lR {
  constructor(e) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = e.filter(Boolean));
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][e] = n;
  }
  attachTimeline(e) {
    const n = this.animations.map((r) => {
      if (aR() && r.attachTimeline) r.attachTimeline(e);
      else
        return (
          r.pause(),
          oR((i) => {
            r.time = r.duration * i;
          }, e)
        );
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Lp =
  (t, e, n, r = {}, i, s, o) =>
  (a) => {
    const u = Ip(r, t) || {},
      c = u.delay || r.delay || 0;
    let { elapsed: h = 0 } = r;
    h = h - Ir(c);
    let f = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: e.getVelocity(),
      ...u,
      delay: -h,
      onUpdate: (g) => {
        e.set(g), u.onUpdate && u.onUpdate(g);
      },
      onComplete: () => {
        a(), u.onComplete && u.onComplete(), o && o();
      },
      onStop: o,
      name: t,
      motionValue: e,
      element: s ? void 0 : i,
    };
    zI(u) || (f = { ...f, ...UI(t, f) }),
      f.duration && (f.duration = Ir(f.duration)),
      f.repeatDelay && (f.repeatDelay = Ir(f.repeatDelay)),
      f.from !== void 0 && (f.keyframes[0] = f.from);
    let p = !1;
    if (
      ((f.type === !1 || (f.duration === 0 && !f.repeatDelay)) &&
        ((f.duration = 0), f.delay === 0 && (p = !0)),
      p && !s && e.get() !== void 0)
    ) {
      const g = cc(f.keyframes, u);
      if (g !== void 0)
        return (
          Pe.update(() => {
            f.onUpdate(g), f.onComplete();
          }),
          new lR([])
        );
    }
    return !s && Wy.supports(f) ? new Wy(f) : new Op(f);
  };
class Fp {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return oc(this.subscriptions, e), () => ac(this.subscriptions, e);
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Hy = 30,
  uR = (t) => !isNaN(parseFloat(t));
class aE {
  constructor(e, n = {}) {
    (this.version = "11.3.19"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Rr.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(e),
      (this.owner = n.owner);
  }
  setCurrent(e) {
    (this.current = e),
      (this.updatedAt = Rr.now()),
      this.canTrackVelocity === null &&
        e !== void 0 &&
        (this.canTrackVelocity = uR(this.current));
  }
  setPrevFrameValue(e = this.current) {
    (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Fp());
    const r = this.events[e].add(n);
    return e === "change"
      ? () => {
          r(),
            Pe.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    (this.passiveEffect = e), (this.stopPassiveEffect = n);
  }
  set(e, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(e, n)
      : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = e),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(e, n = !0) {
    this.updateAndNotify(e),
      (this.prev = e),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = Rr.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      e - this.updatedAt > Hy
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hy);
    return Gw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = e(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function aa(t, e) {
  return new aE(t, e);
}
function cR(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, aa(n));
}
function hR(t, e) {
  const n = uc(t, e);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = yI(s[o]);
    cR(t, o, a);
  }
}
function lE(t) {
  return t.getProps()[ow];
}
class fR extends aE {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(e) {
    const n = Sw(e);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i) return;
      i = !0;
      const s = this.counts.get(n) - 1;
      this.counts.set(n, s), s === 0 && (ac(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function dR(t) {
  return !!(kt(t) && t.add);
}
function Hf(t, e) {
  var n;
  if (!t.applyWillChange) return;
  let r = t.getValue("willChange");
  if (
    (!r &&
      !(!((n = t.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new fR("auto")), t.addValue("willChange", r)),
    dR(r))
  )
    return r.add(e);
}
function pR({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return (e[n] = !1), r;
}
function uE(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...u } = e;
  r && (o = r);
  const c = [],
    h = i && t.animationState && t.animationState.getState()[i];
  for (const f in u) {
    const p = t.getValue(
        f,
        (s = t.latestValues[f]) !== null && s !== void 0 ? s : null,
      ),
      g = u[f];
    if (g === void 0 || (h && pR(h, f))) continue;
    const w = { delay: n, elapsed: 0, ...Ip(o || {}, f) };
    let C = !1;
    if (window.HandoffAppearAnimations) {
      const E = lE(t);
      if (E) {
        const y = window.HandoffAppearAnimations(E, f, p, Pe);
        y !== null && ((w.elapsed = y), (C = !0));
      }
    }
    p.start(
      Lp(
        f,
        p,
        g,
        t.shouldReduceMotion && Qr.has(f) ? { type: !1 } : w,
        t,
        C,
        Hf(t, f),
      ),
    );
    const A = p.animation;
    A && c.push(A);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        Pe.update(() => {
          a && hR(t, a);
        });
      }),
    c
  );
}
function Kf(t, e, n = {}) {
  var r;
  const i = uc(
    t,
    e,
    n.type === "exit"
      ? (r = t.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(uE(t, i, n)) : () => Promise.resolve(),
    a =
      t.variantChildren && t.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: h = 0,
              staggerChildren: f,
              staggerDirection: p,
            } = s;
            return mR(t, e, h + c, f, p, n);
          }
        : () => Promise.resolve(),
    { when: u } = s;
  if (u) {
    const [c, h] = u === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => h());
  } else return Promise.all([o(), a(n.delay)]);
}
function mR(t, e, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (t.variantChildren.size - 1) * r,
    u = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(t.variantChildren)
      .sort(gR)
      .forEach((c, h) => {
        c.notify("AnimationStart", e),
          o.push(
            Kf(c, e, { ...s, delay: n + u(h) }).then(() =>
              c.notify("AnimationComplete", e),
            ),
          );
      }),
    Promise.all(o)
  );
}
function gR(t, e) {
  return t.sortNodePosition(e);
}
function yR(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => Kf(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string") r = Kf(t, e, n);
  else {
    const i = typeof e == "function" ? uc(t, e, n.custom) : e;
    r = Promise.all(uE(t, i, n));
  }
  return r.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const vR = [...mp].reverse(),
  _R = mp.length;
function wR(t) {
  return (e) =>
    Promise.all(e.map(({ animation: n, options: r }) => yR(t, n, r)));
}
function ER(t) {
  let e = wR(t),
    n = Ky(),
    r = !0;
  const i = (u) => (c, h) => {
    var f;
    const p = uc(
      t,
      h,
      u === "exit"
        ? (f = t.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (p) {
      const { transition: g, transitionEnd: w, ...C } = p;
      c = { ...c, ...C, ...w };
    }
    return c;
  };
  function s(u) {
    e = u(t);
  }
  function o(u) {
    const c = t.getProps(),
      h = t.getVariantContext(!0) || {},
      f = [],
      p = new Set();
    let g = {},
      w = 1 / 0;
    for (let A = 0; A < _R; A++) {
      const E = vR[A],
        y = n[E],
        T = c[E] !== void 0 ? c[E] : h[E],
        k = ra(T),
        M = E === u ? y.isActive : null;
      M === !1 && (w = A);
      let j = T === h[E] && T !== c[E] && k;
      if (
        (j && r && t.manuallyAnimateOnMount && (j = !1),
        (y.protectedKeys = { ...g }),
        (!y.isActive && M === null) ||
          (!T && !y.prevProp) ||
          ia(T) ||
          typeof T == "boolean")
      )
        continue;
      let v =
          TR(y.prevProp, T) ||
          (E === u && y.isActive && !j && k) ||
          (A > w && k),
        S = !1;
      const x = Array.isArray(T) ? T : [T];
      let R = x.reduce(i(E), {});
      M === !1 && (R = {});
      const { prevResolvedValues: D = {} } = y,
        I = { ...D, ...R },
        He = (ce) => {
          (v = !0),
            p.has(ce) && ((S = !0), p.delete(ce)),
            (y.needsAnimating[ce] = !0);
          const Ye = t.getValue(ce);
          Ye && (Ye.liveStyle = !1);
        };
      for (const ce in I) {
        const Ye = R[ce],
          ut = D[ce];
        if (g.hasOwnProperty(ce)) continue;
        let K = !1;
        Lf(Ye) && Lf(ut) ? (K = !kw(Ye, ut)) : (K = Ye !== ut),
          K
            ? Ye != null
              ? He(ce)
              : p.add(ce)
            : Ye !== void 0 && p.has(ce)
              ? He(ce)
              : (y.protectedKeys[ce] = !0);
      }
      (y.prevProp = T),
        (y.prevResolvedValues = R),
        y.isActive && (g = { ...g, ...R }),
        r && t.blockInitialAnimation && (v = !1),
        v &&
          (!j || S) &&
          f.push(...x.map((ce) => ({ animation: ce, options: { type: E } })));
    }
    if (p.size) {
      const A = {};
      p.forEach((E) => {
        const y = t.getBaseTarget(E),
          T = t.getValue(E);
        T && (T.liveStyle = !0), (A[E] = y ?? null);
      }),
        f.push({ animation: A });
    }
    let C = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !t.manuallyAnimateOnMount &&
        (C = !1),
      (r = !1),
      C ? e(f) : Promise.resolve()
    );
  }
  function a(u, c) {
    var h;
    if (n[u].isActive === c) return Promise.resolve();
    (h = t.variantChildren) === null ||
      h === void 0 ||
      h.forEach((p) => {
        var g;
        return (g = p.animationState) === null || g === void 0
          ? void 0
          : g.setActive(u, c);
      }),
      (n[u].isActive = c);
    const f = o(u);
    for (const p in n) n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = Ky()), (r = !0);
    },
  };
}
function TR(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !kw(e, t) : !1;
}
function ni(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ky() {
  return {
    animate: ni(!0),
    whileInView: ni(),
    whileHover: ni(),
    whileTap: ni(),
    whileDrag: ni(),
    whileFocus: ni(),
    exit: ni(),
  };
}
class SR extends Yr {
  constructor(e) {
    super(e), e.animationState || (e.animationState = ER(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    ia(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(),
      (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let PR = 0;
class xR extends Yr {
  constructor() {
    super(...arguments), (this.id = PR++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === r) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {}
}
const CR = { animation: { Feature: SR }, exit: { Feature: xR } },
  Gy = (t, e) => Math.abs(t - e);
function AR(t, e) {
  const n = Gy(t.x, e.x),
    r = Gy(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class cE {
  constructor(
    e,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Th(this.lastMoveEventInfo, this.history),
          p = this.startEvent !== null,
          g = AR(f.offset, { x: 0, y: 0 }) >= 3;
        if (!p && !g) return;
        const { point: w } = f,
          { timestamp: C } = dt;
        this.history.push({ ...w, timestamp: C });
        const { onStart: A, onMove: E } = this.handlers;
        p ||
          (A && A(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          E && E(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, p) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Eh(p, this.transformPagePoint)),
          Pe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, p) => {
        this.end();
        const { onEnd: g, onSessionEnd: w, resumeAnimation: C } = this.handlers;
        if (
          (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const A = Th(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Eh(p, this.transformPagePoint),
          this.history,
        );
        this.startEvent && g && g(f, A), w && w(f, A);
      }),
      !xw(e))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = lc(e),
      a = Eh(o, this.transformPagePoint),
      { point: u } = a,
      { timestamp: c } = dt;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, Th(a, this.history)),
      (this.removeListeners = Qn(
        qn(this.contextWindow, "pointermove", this.handlePointerMove),
        qn(this.contextWindow, "pointerup", this.handlePointerUp),
        qn(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), tr(this.updatePoint);
  }
}
function Eh(t, e) {
  return e ? { point: e(t.point) } : t;
}
function qy(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Th({ point: t }, e) {
  return {
    point: t,
    delta: qy(t, hE(e)),
    offset: qy(t, IR(e)),
    velocity: RR(e, 0.1),
  };
}
function IR(t) {
  return t[0];
}
function hE(t) {
  return t[t.length - 1];
}
function RR(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1,
    r = null;
  const i = hE(t);
  for (; n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Ir(e))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Yn(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const fE = 1e-4,
  kR = 1 - fE,
  VR = 1 + fE,
  dE = 0.01,
  DR = 0 - dE,
  bR = 0 + dE;
function nn(t) {
  return t.max - t.min;
}
function NR(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Qy(t, e, n, r = 0.5) {
  (t.origin = r),
    (t.originPoint = Le(e.min, e.max, t.origin)),
    (t.scale = nn(n) / nn(e)),
    (t.translate = Le(n.min, n.max, t.origin) - t.originPoint),
    ((t.scale >= kR && t.scale <= VR) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= DR && t.translate <= bR) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Vo(t, e, n, r) {
  Qy(t.x, e.x, n.x, r ? r.originX : void 0),
    Qy(t.y, e.y, n.y, r ? r.originY : void 0);
}
function Yy(t, e, n) {
  (t.min = n.min + e.min), (t.max = t.min + nn(e));
}
function OR(t, e, n) {
  Yy(t.x, e.x, n.x), Yy(t.y, e.y, n.y);
}
function Xy(t, e, n) {
  (t.min = e.min - n.min), (t.max = t.min + nn(e));
}
function Do(t, e, n) {
  Xy(t.x, e.x, n.x), Xy(t.y, e.y, n.y);
}
function MR(t, { min: e, max: n }, r) {
  return (
    e !== void 0 && t < e
      ? (t = r ? Le(e, t, r.min) : Math.max(t, e))
      : n !== void 0 && t > n && (t = r ? Le(n, t, r.max) : Math.min(t, n)),
    t
  );
}
function Jy(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
  };
}
function LR(t, { top: e, left: n, bottom: r, right: i }) {
  return { x: Jy(t.x, n, i), y: Jy(t.y, e, r) };
}
function Zy(t, e) {
  let n = e.min - t.min,
    r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function FR(t, e) {
  return { x: Zy(t.x, e.x), y: Zy(t.y, e.y) };
}
function jR(t, e) {
  let n = 0.5;
  const r = nn(t),
    i = nn(e);
  return (
    i > r
      ? (n = oa(e.min, e.max - r, t.min))
      : r > i && (n = oa(t.min, t.max - i, e.min)),
    Mr(0, 1, n)
  );
}
function BR(t, e) {
  const n = {};
  return (
    e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
  );
}
const Gf = 0.35;
function UR(t = Gf) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Gf),
    { x: ev(t, "left", "right"), y: ev(t, "top", "bottom") }
  );
}
function ev(t, e, n) {
  return { min: tv(t, e), max: tv(t, n) };
}
function tv(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const nv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ts = () => ({ x: nv(), y: nv() }),
  rv = () => ({ min: 0, max: 0 }),
  qe = () => ({ x: rv(), y: rv() });
function an(t) {
  return [t("x"), t("y")];
}
function pE({ top: t, left: e, right: n, bottom: r }) {
  return { x: { min: e, max: n }, y: { min: t, max: r } };
}
function zR({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function $R(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }),
    r = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Sh(t) {
  return t === void 0 || t === 1;
}
function qf({ scale: t, scaleX: e, scaleY: n }) {
  return !Sh(t) || !Sh(e) || !Sh(n);
}
function si(t) {
  return (
    qf(t) ||
    mE(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function mE(t) {
  return iv(t.x) || iv(t.y);
}
function iv(t) {
  return t && t !== "0%";
}
function xu(t, e, n) {
  const r = t - n,
    i = e * r;
  return n + i;
}
function sv(t, e, n, r, i) {
  return i !== void 0 && (t = xu(t, i, r)), xu(t, n, r) + e;
}
function Qf(t, e = 0, n = 1, r, i) {
  (t.min = sv(t.min, e, n, r, i)), (t.max = sv(t.max, e, n, r, i));
}
function gE(t, { x: e, y: n }) {
  Qf(t.x, e.translate, e.scale, e.originPoint),
    Qf(t.y, n.translate, n.scale, n.originPoint);
}
const ov = 0.999999999999,
  av = 1.0000000000001;
function WR(t, e, n, r = !1) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        rs(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((e.x *= o.x.scale), (e.y *= o.y.scale), gE(t, o)),
      r && si(s.latestValues) && rs(t, s.latestValues));
  }
  e.x < av && e.x > ov && (e.x = 1), e.y < av && e.y > ov && (e.y = 1);
}
function ns(t, e) {
  (t.min = t.min + e), (t.max = t.max + e);
}
function lv(t, e, n, r, i = 0.5) {
  const s = Le(t.min, t.max, i);
  Qf(t, e, n, s, r);
}
function rs(t, e) {
  lv(t.x, e.x, e.scaleX, e.scale, e.originX),
    lv(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function yE(t, e) {
  return pE($R(t.getBoundingClientRect(), e));
}
function HR(t, e, n) {
  const r = yE(t, n),
    { scroll: i } = e;
  return i && (ns(r.x, i.offset.x), ns(r.y, i.offset.y)), r;
}
const vE = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  KR = new WeakMap();
class GR {
  constructor(e) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = qe()),
      (this.visualElement = e);
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (h) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(lc(h, "page").point);
      },
      s = (h, f) => {
        var p;
        const { drag: g, dragPropagation: w, onDragStart: C } = this.getProps();
        if (
          g &&
          !w &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Aw(g)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          an((E) => {
            let y = this.getAxisMotionValue(E).get() || 0;
            if (Vn.test(y)) {
              const { projection: T } = this.visualElement;
              if (T && T.layout) {
                const k = T.layout.layoutBox[E];
                k && (y = nn(k) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[E] = y;
          }),
          C && Pe.postRender(() => C(h, f)),
          (p = this.removeWillChange) === null || p === void 0 || p.call(this),
          (this.removeWillChange = Hf(this.visualElement, "transform"));
        const { animationState: A } = this.visualElement;
        A && A.setActive("whileDrag", !0);
      },
      o = (h, f) => {
        const {
          dragPropagation: p,
          dragDirectionLock: g,
          onDirectionLock: w,
          onDrag: C,
        } = this.getProps();
        if (!p && !this.openGlobalLock) return;
        const { offset: A } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = qR(A)),
            this.currentDirection !== null && w && w(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, A),
          this.updateAxis("y", f.point, A),
          this.visualElement.render(),
          C && C(h, f);
      },
      a = (h, f) => this.stop(h, f),
      u = () =>
        an((h) => {
          var f;
          return (
            this.getAnimationState(h) === "paused" &&
            ((f = this.getAxisMotionValue(h).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new cE(
      e,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: vE(this.visualElement),
      },
    );
  }
  stop(e, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const i = this.isDragging;
    if ((this.cancel(), !i)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && Pe.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ml(e, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    this.constraints &&
      this.constraints[e] &&
      (o = MR(o, this.constraints[e], this.elastic[e])),
      s.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
      s = this.constraints;
    n && Zi(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = LR(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = UR(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        an((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = BR(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Zi(e)) return !1;
    const r = e.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = HR(r, i.root, this.visualElement.getTransformPagePoint());
    let o = FR(i.layout.layoutBox, s);
    if (n) {
      const a = n(zR(o));
      (this.hasMutatedConstraints = !!a), a && (o = pE(a));
    }
    return o;
  }
  startAnimation(e) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      u = this.constraints || {},
      c = an((h) => {
        if (!ml(h, n, this.currentDirection)) return;
        let f = (u && u[h]) || {};
        o && (f = { min: 0, max: 0 });
        const p = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: r ? e[h] : 0,
            bounceStiffness: p,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(h, w);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(
      Lp(e, r, 0, n, this.visualElement, !1, Hf(this.visualElement, e)),
    );
  }
  stopAnimation() {
    an((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    an((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0)
    );
  }
  snapToCursor(e) {
    an((n) => {
      const { drag: r } = this.getProps();
      if (!ml(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(e[n] - Le(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    an((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[o] = jR({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      an((o) => {
        if (!ml(o, e, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: u, max: c } = this.constraints[o];
        a.set(Le(u, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    KR.set(this.visualElement, this);
    const e = this.visualElement.current,
      n = qn(e, "pointerdown", (u) => {
        const { drag: c, dragListener: h = !0 } = this.getProps();
        c && h && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        Zi(u) && u.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Pe.read(r);
    const o = Kn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (an((h) => {
              const f = this.getAxisMotionValue(h);
              f &&
                ((this.originPoint[h] += u[h].translate),
                f.set(f.get() + u[h].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Gf,
        dragMomentum: a = !0,
      } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function ml(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function qR(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? (n = "y") : Math.abs(t.x) > e && (n = "x"), n;
}
class QR extends Yr {
  constructor(e) {
    super(e),
      (this.removeGroupControls = Vt),
      (this.removeListeners = Vt),
      (this.controls = new GR(e));
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Vt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const uv = (t) => (e, n) => {
  t && Pe.postRender(() => t(e, n));
};
class YR extends Yr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Vt);
  }
  onPointerDown(e) {
    this.session = new cE(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: vE(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: e,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: uv(e),
      onStart: uv(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && Pe.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = qn(this.node.current, "pointerdown", (e) =>
      this.onPointerDown(e),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function XR() {
  const t = V.useContext(rc);
  if (t === null) return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t,
    i = V.useId();
  V.useEffect(() => r(i), []);
  const s = V.useCallback(() => n && n(i), [i, n]);
  return !e && n ? [!1, s] : [!0];
}
const Fl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function cv(t, e) {
  return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const ao = {
    correct: (t, e) => {
      if (!e.target) return t;
      if (typeof t == "string")
        if (Z.test(t)) t = parseFloat(t);
        else return t;
      const n = cv(t, e.target.x),
        r = cv(t, e.target.y);
      return `${n}% ${r}%`;
    },
  },
  JR = {
    correct: (t, { treeScale: e, projectionDelta: n }) => {
      const r = t,
        i = Lr.parse(t);
      if (i.length > 5) return r;
      const s = Lr.createTransformer(t),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * e.x,
        u = n.y.scale * e.y;
      (i[0 + o] /= a), (i[1 + o] /= u);
      const c = Le(a, u, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class ZR extends V.Component {
  componentDidMount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = e;
    KA(ek),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Fl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(e) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || e.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        e.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              Pe.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e &&
      (e.root.didUpdate(),
      pp.postRender(() => {
        !e.currentAnimation && e.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: e,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = e;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function _E(t) {
  const [e, n] = XR(),
    r = V.useContext(yp);
  return N.jsx(ZR, {
    ...t,
    layoutGroup: r,
    switchLayoutGroup: V.useContext(lw),
    isPresent: e,
    safeToRemove: n,
  });
}
const ek = {
    borderRadius: {
      ...ao,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ao,
    borderTopRightRadius: ao,
    borderBottomLeftRadius: ao,
    borderBottomRightRadius: ao,
    boxShadow: JR,
  },
  wE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  tk = wE.length,
  hv = (t) => (typeof t == "string" ? parseFloat(t) : t),
  fv = (t) => typeof t == "number" || Z.test(t);
function nk(t, e, n, r, i, s) {
  i
    ? ((t.opacity = Le(0, n.opacity !== void 0 ? n.opacity : 1, rk(r))),
      (t.opacityExit = Le(e.opacity !== void 0 ? e.opacity : 1, 0, ik(r))))
    : s &&
      (t.opacity = Le(
        e.opacity !== void 0 ? e.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < tk; o++) {
    const a = `border${wE[o]}Radius`;
    let u = dv(e, a),
      c = dv(n, a);
    if (u === void 0 && c === void 0) continue;
    u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || fv(u) === fv(c)
        ? ((t[a] = Math.max(Le(hv(u), hv(c), r), 0)),
          (Vn.test(c) || Vn.test(u)) && (t[a] += "%"))
        : (t[a] = c);
  }
  (e.rotate || n.rotate) && (t.rotate = Le(e.rotate || 0, n.rotate || 0, r));
}
function dv(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const rk = EE(0, 0.5, eE),
  ik = EE(0.5, 0.95, Vt);
function EE(t, e, n) {
  return (r) => (r < t ? 0 : r > e ? 1 : n(oa(t, e, r)));
}
function pv(t, e) {
  (t.min = e.min), (t.max = e.max);
}
function on(t, e) {
  pv(t.x, e.x), pv(t.y, e.y);
}
function mv(t, e) {
  (t.translate = e.translate),
    (t.scale = e.scale),
    (t.originPoint = e.originPoint),
    (t.origin = e.origin);
}
function gv(t, e, n, r, i) {
  return (
    (t -= e), (t = xu(t, 1 / n, r)), i !== void 0 && (t = xu(t, 1 / i, r)), t
  );
}
function sk(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (
    (Vn.test(e) &&
      ((e = parseFloat(e)), (e = Le(o.min, o.max, e / 100) - o.min)),
    typeof e != "number")
  )
    return;
  let a = Le(s.min, s.max, r);
  t === s && (a -= e),
    (t.min = gv(t.min, e, n, a, i)),
    (t.max = gv(t.max, e, n, a, i));
}
function yv(t, e, [n, r, i], s, o) {
  sk(t, e[n], e[r], e[i], e.scale, s, o);
}
const ok = ["x", "scaleX", "originX"],
  ak = ["y", "scaleY", "originY"];
function vv(t, e, n, r) {
  yv(t.x, e, ok, n ? n.x : void 0, r ? r.x : void 0),
    yv(t.y, e, ak, n ? n.y : void 0, r ? r.y : void 0);
}
function _v(t) {
  return t.translate === 0 && t.scale === 1;
}
function TE(t) {
  return _v(t.x) && _v(t.y);
}
function wv(t, e) {
  return t.min === e.min && t.max === e.max;
}
function lk(t, e) {
  return wv(t.x, e.x) && wv(t.y, e.y);
}
function Ev(t, e) {
  return (
    Math.round(t.min) === Math.round(e.min) &&
    Math.round(t.max) === Math.round(e.max)
  );
}
function SE(t, e) {
  return Ev(t.x, e.x) && Ev(t.y, e.y);
}
function Tv(t) {
  return nn(t.x) / nn(t.y);
}
function Sv(t, e) {
  return (
    t.translate === e.translate &&
    t.scale === e.scale &&
    t.originPoint === e.originPoint
  );
}
class uk {
  constructor() {
    this.members = [];
  }
  add(e) {
    oc(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (ac(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
      r.instance && r.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = r),
        n && (e.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((e.snapshot = r.snapshot),
          (e.snapshot.latestValues = r.animationValues || r.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: r } = e;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ck(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x,
    s = t.y.translate / e.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: h,
      rotateX: f,
      rotateY: p,
      skewX: g,
      skewY: w,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      h && (r += `rotate(${h}deg) `),
      f && (r += `rotateX(${f}deg) `),
      p && (r += `rotateY(${p}deg) `),
      g && (r += `skewX(${g}deg) `),
      w && (r += `skewY(${w}deg) `);
  }
  const a = t.x.scale * e.x,
    u = t.y.scale * e.y;
  return (a !== 1 || u !== 1) && (r += `scale(${a}, ${u})`), r || "none";
}
const hk = (t, e) => t.depth - e.depth;
class fk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(e) {
    oc(this.children, e), (this.isDirty = !0);
  }
  remove(e) {
    ac(this.children, e), (this.isDirty = !0);
  }
  forEach(e) {
    this.isDirty && this.children.sort(hk),
      (this.isDirty = !1),
      this.children.forEach(e);
  }
}
function dk(t, e) {
  const n = Rr.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= e && (tr(r), t(s - e));
    };
  return Pe.read(r, !0), () => tr(r);
}
function pk(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function mk(t, e, n) {
  const r = kt(t) ? t : aa(t);
  return r.start(Lp("", r, e, n)), r.animation;
}
const oi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  go = typeof window < "u" && window.MotionDebug !== void 0,
  Ph = ["", "X", "Y", "Z"],
  gk = { visibility: "hidden" },
  Pv = 1e3;
let yk = 0;
function xh(t, e, n, r) {
  const { latestValues: i } = e;
  i[t] && ((n[t] = i[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
}
function PE(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return !1;
  const { visualElement: e } = t.options;
  return e
    ? lE(e)
      ? !0
      : t.parent && !t.parent.hasCheckedOptimisedAppear
        ? PE(t.parent)
        : !1
    : !1;
}
function xE({
  attachResizeListener: t,
  defaultParent: e,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      (this.id = yk++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            go &&
              (oi.totalNodes =
                oi.resolvedTargetDeltas =
                oi.recalculatedProjection =
                  0),
            this.nodes.forEach(wk),
            this.nodes.forEach(xk),
            this.nodes.forEach(Ck),
            this.nodes.forEach(Ek),
            go && window.MotionDebug.record(oi);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new fk());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Fp()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = pk(o)), (this.instance = o);
      const { layoutId: u, layout: c, visualElement: h } = this.options;
      if (
        (h && !h.current && h.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || u) && (this.isLayoutDirty = !0),
        t)
      ) {
        let f;
        const p = () => (this.root.updateBlockedByResize = !1);
        t(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = dk(p, 250)),
            Fl.hasAnimatedSinceResize &&
              ((Fl.hasAnimatedSinceResize = !1), this.nodes.forEach(Cv));
        });
      }
      u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          h &&
          (u || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: p,
              hasRelativeTargetChanged: g,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const C =
                  this.options.transition || h.getDefaultTransition() || Vk,
                { onLayoutAnimationStart: A, onLayoutAnimationComplete: E } =
                  h.getProps(),
                y = !this.targetLayout || !SE(this.targetLayout, w) || g,
                T = !p && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                T ||
                (p && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, T);
                const k = { ...Ip(C, "layout"), onPlay: A, onComplete: E };
                (h.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                p || Cv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = w;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Ak),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          PE(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const f = this.path[h];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xv);
        return;
      }
      this.isUpdating || this.nodes.forEach(Sk),
        (this.isUpdating = !1),
        this.nodes.forEach(Pk),
        this.nodes.forEach(vk),
        this.nodes.forEach(_k),
        this.clearAllSnapshots();
      const a = Rr.now();
      (dt.delta = Mr(0, 1e3 / 60, a - dt.timestamp)),
        (dt.timestamp = a),
        (dt.isProcessing = !0),
        ph.update.process(dt),
        ph.preRender.process(dt),
        ph.render.process(dt),
        (dt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), pp.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Tk), this.sharedNodes.forEach(Ik);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Pe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Pe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = qe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const u = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !TE(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        h = c !== this.prevTransformTemplateValue;
      o &&
        (a || si(this.latestValues) || h) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        o && (u = this.removeTransform(u)),
        Dk(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return qe();
      const u = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(bk)
        )
      ) {
        const { scroll: h } = this.root;
        h && (ns(u.x, h.offset.x), ns(u.y, h.offset.y));
      }
      return u;
    }
    removeElementScroll(o) {
      var a;
      const u = qe();
      if (
        (on(u, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return u;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c],
          { scroll: f, options: p } = h;
        h !== this.root &&
          f &&
          p.layoutScroll &&
          (f.wasRoot && on(u, o), ns(u.x, f.offset.x), ns(u.y, f.offset.y));
      }
      return u;
    }
    applyTransform(o, a = !1) {
      const u = qe();
      on(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        !a &&
          h.options.layoutScroll &&
          h.scroll &&
          h !== h.root &&
          rs(u, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
          si(h.latestValues) && rs(u, h.latestValues);
      }
      return si(this.latestValues) && rs(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = qe();
      on(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !si(c.latestValues)) continue;
        qf(c.latestValues) && c.updateSnapshot();
        const h = qe(),
          f = c.measurePageBox();
        on(h, f),
          vv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, h);
      }
      return si(this.latestValues) && vv(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== u;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: p } = this.options;
      if (!(!this.layout || !(f || p))) {
        if (
          ((this.resolvedRelativeTargetAt = dt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = qe()),
              (this.relativeTargetOrigin = qe()),
              Do(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              on(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = qe()), (this.targetWithTransforms = qe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                OR(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : on(this.target, this.layout.layoutBox),
                  gE(this.target, this.targetDelta))
                : on(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = qe()),
                (this.relativeTargetOrigin = qe()),
                Do(this.relativeTargetOrigin, this.target, g.target),
                on(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          go && oi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          qf(this.parent.latestValues) ||
          mE(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        u = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        u &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === dt.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: h, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(h || f))
      )
        return;
      on(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x,
        g = this.treeScale.y;
      WR(this.layoutCorrected, this.treeScale, this.path, u),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = qe()));
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (mv(this.prevProjectionDelta.x, this.projectionDelta.x),
          mv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Vo(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== p ||
          this.treeScale.y !== g ||
          !Sv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)),
        go && oi.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ts()),
        (this.projectionDelta = ts()),
        (this.projectionDeltaWithTransform = ts());
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        h = { ...this.latestValues },
        f = ts();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const p = qe(),
        g = u ? u.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        C = g !== w,
        A = this.getStack(),
        E = !A || A.members.length <= 1,
        y = !!(C && !E && this.options.crossfade === !0 && !this.path.some(kk));
      this.animationProgress = 0;
      let T;
      (this.mixTargetDelta = (k) => {
        const M = k / 1e3;
        Av(f.x, o.x, M),
          Av(f.y, o.y, M),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Do(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Rk(this.relativeTarget, this.relativeTargetOrigin, p, M),
            T && lk(this.relativeTarget, T) && (this.isProjectionDirty = !1),
            T || (T = qe()),
            on(T, this.relativeTarget)),
          C &&
            ((this.animationValues = h), nk(h, c, this.latestValues, M, y, E)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = M);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Pe.update(() => {
          (Fl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = mk(0, Pv, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: c,
        latestValues: h,
      } = o;
      if (!(!a || !u || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          CE(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || qe();
          const f = nn(this.layout.layoutBox.x);
          (u.x.min = o.target.x.min), (u.x.max = u.x.min + f);
          const p = nn(this.layout.layoutBox.y);
          (u.y.min = o.target.y.min), (u.y.max = u.y.min + p);
        }
        on(a, u),
          rs(a, h),
          Vo(this.projectionDeltaWithTransform, this.layoutCorrected, a, h);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new uk()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: u } = o;
      if (
        ((u.z ||
          u.rotate ||
          u.rotateX ||
          u.rotateY ||
          u.rotateZ ||
          u.skewX ||
          u.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      u.z && xh("z", o, c, this.animationValues);
      for (let h = 0; h < Ph.length; h++)
        xh(`rotate${Ph[h]}`, o, c, this.animationValues),
          xh(`skew${Ph[h]}`, o, c, this.animationValues);
      o.render();
      for (const h in c)
        o.setStaticValue(h, c[h]),
          this.animationValues && (this.animationValues[h] = c[h]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return gk;
      const c = { visibility: "" },
        h = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ml(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = h ? h(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const C = {};
        return (
          this.options.layoutId &&
            ((C.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (C.pointerEvents = Ml(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !si(this.latestValues) &&
            ((C.transform = h ? h({}, "") : "none"), (this.hasProjected = !1)),
          C
        );
      }
      const p = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = ck(
          this.projectionDeltaWithTransform,
          this.treeScale,
          p,
        )),
        h && (c.transform = h(p, c.transform));
      const { x: g, y: w } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (u =
                    (a = p.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : p.opacityExit)
          : (c.opacity =
              f === this
                ? p.opacity !== void 0
                  ? p.opacity
                  : ""
                : p.opacityExit !== void 0
                  ? p.opacityExit
                  : 0);
      for (const C in wu) {
        if (p[C] === void 0) continue;
        const { correct: A, applyTo: E } = wu[C],
          y = c.transform === "none" ? p[C] : A(p[C], f);
        if (E) {
          const T = E.length;
          for (let k = 0; k < T; k++) c[E[k]] = y;
        } else c[C] = y;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? Ml(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(xv),
        this.root.sharedNodes.clear();
    }
  };
}
function vk(t) {
  t.updateLayout();
}
function _k(t) {
  var e;
  const n =
    ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) ||
    t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout,
      { animationType: s } = t.options,
      o = n.source !== t.layout.source;
    s === "size"
      ? an((f) => {
          const p = o ? n.measuredBox[f] : n.layoutBox[f],
            g = nn(p);
          (p.min = r[f].min), (p.max = p.min + g);
        })
      : CE(s, n.layoutBox, r) &&
        an((f) => {
          const p = o ? n.measuredBox[f] : n.layoutBox[f],
            g = nn(r[f]);
          (p.max = p.min + g),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[f].max = t.relativeTarget[f].min + g));
        });
    const a = ts();
    Vo(a, r, n.layoutBox);
    const u = ts();
    o ? Vo(u, t.applyTransform(i, !0), n.measuredBox) : Vo(u, r, n.layoutBox);
    const c = !TE(a);
    let h = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: p, layout: g } = f;
        if (p && g) {
          const w = qe();
          Do(w, n.layoutBox, p.layoutBox);
          const C = qe();
          Do(C, r, g.layoutBox),
            SE(w, C) || (h = !0),
            f.options.layoutRoot &&
              ((t.relativeTarget = C),
              (t.relativeTargetOrigin = w),
              (t.relativeParent = f));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: h,
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function wk(t) {
  go && oi.totalNodes++,
    t.parent &&
      (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
      t.isSharedProjectionDirty ||
        (t.isSharedProjectionDirty = !!(
          t.isProjectionDirty ||
          t.parent.isProjectionDirty ||
          t.parent.isSharedProjectionDirty
        )),
      t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ek(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Tk(t) {
  t.clearSnapshot();
}
function xv(t) {
  t.clearMeasurements();
}
function Sk(t) {
  t.isLayoutDirty = !1;
}
function Pk(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function Cv(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function xk(t) {
  t.resolveTargetDelta();
}
function Ck(t) {
  t.calcProjection();
}
function Ak(t) {
  t.resetSkewAndRotation();
}
function Ik(t) {
  t.removeLeadSnapshot();
}
function Av(t, e, n) {
  (t.translate = Le(e.translate, 0, n)),
    (t.scale = Le(e.scale, 1, n)),
    (t.origin = e.origin),
    (t.originPoint = e.originPoint);
}
function Iv(t, e, n, r) {
  (t.min = Le(e.min, n.min, r)), (t.max = Le(e.max, n.max, r));
}
function Rk(t, e, n, r) {
  Iv(t.x, e.x, n.x, r), Iv(t.y, e.y, n.y, r);
}
function kk(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Vk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Rv = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  kv = Rv("applewebkit/") && !Rv("chrome/") ? Math.round : Vt;
function Vv(t) {
  (t.min = kv(t.min)), (t.max = kv(t.max));
}
function Dk(t) {
  Vv(t.x), Vv(t.y);
}
function CE(t, e, n) {
  return (
    t === "position" || (t === "preserve-aspect" && !NR(Tv(e), Tv(n), 0.2))
  );
}
function bk(t) {
  var e;
  return (
    t !== t.root &&
    ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
  );
}
const Nk = xE({
    attachResizeListener: (t, e) => Kn(t, "resize", e),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ch = { current: void 0 },
  AE = xE({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Ch.current) {
        const t = new Nk({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Ch.current = t);
      }
      return Ch.current;
    },
    resetTransform: (t, e) => {
      t.style.transform = e !== void 0 ? e : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Ok = {
    pan: { Feature: YR },
    drag: { Feature: QR, ProjectionNode: AE, MeasureLayout: _E },
  },
  Yf = { current: null },
  IE = { current: !1 };
function Mk() {
  if (((IE.current = !0), !!dp))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        e = () => (Yf.current = t.matches);
      t.addListener(e), e();
    } else Yf.current = !1;
}
function Lk(t, e, n) {
  for (const r in e) {
    const i = e[r],
      s = n[r];
    if (kt(i)) t.addValue(r, i);
    else if (kt(s)) t.addValue(r, aa(i, { owner: t }));
    else if (s !== i)
      if (t.hasValue(r)) {
        const o = t.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = t.getStaticValue(r);
        t.addValue(r, aa(o !== void 0 ? o : i, { owner: t }));
      }
  }
  for (const r in n) e[r] === void 0 && t.removeValue(r);
  return e;
}
const Dv = new WeakMap(),
  Fk = [...Ow, Ct, Lr],
  jk = (t) => Fk.find(Nw(t)),
  bv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Bk = gp.length;
class Uk {
  scrapeMotionValuesFromProps(e, n, r) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    (this.applyWillChange = !1),
      (this.resolveKeyframes = (p, g, w, C) =>
        new this.KeyframeResolver(p, g, w, C, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Rp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), Pe.render(this.render, !1, !0));
      });
    const { latestValues: u, renderState: c } = o;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = e),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = sc(n)),
      (this.isVariantNode = cw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const p in f) {
      const g = f[p];
      u[p] !== void 0 && kt(g) && g.set(u[p], !1);
    }
  }
  mount(e) {
    (this.current = e),
      Dv.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      IE.current || Mk(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Yf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Dv.delete(this.current),
      this.projection && this.projection.unmount(),
      tr(this.notifyUpdate),
      tr(this.render),
      this.valueSubscriptions.forEach((e) => e()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Qr.has(e),
      i = n.on("change", (o) => {
        (this.latestValues[e] = o),
          this.props.onUpdate && Pe.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), s(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in ws) {
      const n = ws[e];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[e] &&
          i &&
          r(this.props) &&
          (this.features[e] = new i(this)),
        this.features[e])
      ) {
        const s = this.features[e];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : qe();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < bv.length; r++) {
      const i = bv[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = e[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Lk(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Bk; r++) {
      const i = gp[r],
        s = this.props[i];
      (ra(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(e),
        () => n.variantChildren.delete(e)
      );
  }
  addValue(e, n) {
    const r = this.values.get(e);
    n !== r &&
      (r && this.removeValue(e),
      this.bindToMotionValue(e, n),
      this.values.set(e, n),
      (this.latestValues[e] = n.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let r = this.values.get(e);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = aa(n === null ? void 0 : n, { owner: this })),
        this.addValue(e, r)),
      r
    );
  }
  readValue(e, n) {
    var r;
    let i =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (r = this.getBaseTargetFromProps(this.props, e)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, e, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Dw(i) || Vw(i))
          ? (i = parseFloat(i))
          : !jk(i) && Lr.test(n) && (i = $w(e, n)),
        this.setBaseTarget(e, kt(i) ? i.get() : i)),
      kt(i) ? i.get() : i
    );
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Cp(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[e]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !kt(s)
      ? s
      : this.initialValues[e] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Fp()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class RE extends Uk {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Ww);
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
}
function zk(t) {
  return window.getComputedStyle(t);
}
class $k extends RE {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = vw);
  }
  readValueFromInstance(e, n) {
    if (Qr.has(n)) {
      const r = Vp(n);
      return (r && r.default) || 0;
    } else {
      const r = zk(e),
        i = (dw(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return yE(e, n);
  }
  build(e, n, r) {
    Ep(e, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return xp(e, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    kt(e) &&
      (this.childSubscription = e.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Wk extends RE {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = qe);
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Qr.has(n)) {
      const r = Vp(n);
      return (r && r.default) || 0;
    }
    return (n = _w.has(n) ? n : ic(n)), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, r) {
    return Ew(e, n, r);
  }
  build(e, n, r) {
    Sp(e, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(e, n, r, i) {
    ww(e, n, r, i);
  }
  mount(e) {
    (this.isSVGTag = Pp(e.tagName)), super.mount(e);
  }
}
const Hk = (t, e) =>
    vp(t) ? new Wk(e) : new $k(e, { allowProjection: t !== V.Fragment }),
  Kk = { layout: { ProjectionNode: AE, MeasureLayout: _E } },
  Gk = { ...CR, ...MI, ...Ok, ...Kk },
  fi = WA((t, e) => SI(t, e, Gk, Hk));
class qk extends V.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Qk({ children: t, isPresent: e }) {
  const n = V.useId(),
    r = V.useRef(null),
    i = V.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = V.useContext(fp);
  return (
    V.useInsertionEffect(() => {
      const { width: o, height: a, top: u, left: c } = i.current;
      if (e || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const h = document.createElement("style");
      return (
        s && (h.nonce = s),
        document.head.appendChild(h),
        h.sheet &&
          h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(h);
        }
      );
    }, [e]),
    N.jsx(qk, {
      isPresent: e,
      childRef: r,
      sizeRef: i,
      children: V.cloneElement(t, { ref: r }),
    })
  );
}
const Yk = ({
  children: t,
  initial: e,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Ap(Xk),
    u = V.useId(),
    c = V.useMemo(
      () => ({
        id: u,
        initial: e,
        isPresent: n,
        custom: i,
        onExitComplete: (h) => {
          a.set(h, !0);
          for (const f of a.values()) if (!f) return;
          r && r();
        },
        register: (h) => (a.set(h, !1), () => a.delete(h)),
      }),
      s ? [Math.random()] : [n],
    );
  return (
    V.useMemo(() => {
      a.forEach((h, f) => a.set(f, !1));
    }, [n]),
    V.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (t = N.jsx(Qk, { isPresent: n, children: t })),
    N.jsx(rc.Provider, { value: c, children: t })
  );
};
function Xk() {
  return new Map();
}
const gl = (t) => t.key || "";
function Nv(t) {
  const e = [];
  return (
    V.Children.forEach(t, (n) => {
      V.isValidElement(n) && e.push(n);
    }),
    e
  );
}
const Jk = ({
    children: t,
    exitBeforeEnter: e,
    custom: n,
    initial: r = !0,
    onExitComplete: i,
    presenceAffectsLayout: s = !0,
    mode: o = "sync",
  }) => {
    const a = V.useMemo(() => Nv(t), [t]),
      u = a.map(gl),
      c = V.useRef(!0),
      h = V.useRef(a),
      f = Ap(() => new Map()),
      [p, g] = V.useState(a),
      [w, C] = V.useState(a);
    iw(() => {
      (c.current = !1), (h.current = a);
      for (let y = 0; y < w.length; y++) {
        const T = gl(w[y]);
        u.includes(T) ? f.delete(T) : f.get(T) !== !0 && f.set(T, !1);
      }
    }, [w, u.length, u.join("-")]);
    const A = [];
    if (a !== p) {
      let y = [...a];
      for (let T = 0; T < w.length; T++) {
        const k = w[T],
          M = gl(k);
        u.includes(M) || (y.splice(T, 0, k), A.push(k));
      }
      o === "wait" && A.length && (y = A), C(Nv(y)), g(a);
      return;
    }
    const { forceRender: E } = V.useContext(yp);
    return N.jsx(N.Fragment, {
      children: w.map((y) => {
        const T = gl(y),
          k = a === w || u.includes(T),
          M = () => {
            if (f.has(T)) f.set(T, !0);
            else return;
            let j = !0;
            f.forEach((P) => {
              P || (j = !1);
            }),
              j && (E == null || E(), C(h.current), i && i());
          };
        return N.jsx(
          Yk,
          {
            isPresent: k,
            initial: !c.current || r ? void 0 : !1,
            custom: k ? void 0 : n,
            presenceAffectsLayout: s,
            mode: o,
            onExitComplete: k ? void 0 : M,
            children: y,
          },
          T,
        );
      }),
    });
  },
  Ah = {
    hidden: { opacity: 0, pathLength: 0, fill: "#72d7f0" },
    visible: { opacity: 1, pathLength: 1, fill: "#72d7f0" },
  },
  Zk = () =>
    N.jsx("div", {
      className: "container -mx-2",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        backgroundColor: "#333",
        borderRadius: "10px",
      },
      children: N.jsxs(fi.svg, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        className: "item",
        width: "45",
        height: "45",
        children: [
          N.jsx(fi.rect, {
            x: "30",
            y: "20",
            width: "10",
            height: "60",
            variants: Ah,
            initial: "hidden",
            animate: "visible",
            transition: { default: { duration: 2, ease: "easeInOut" } },
            fill: "none",
            stroke: "#72d7f0",
            strokeWidth: "3",
            rx: "5",
          }),
          N.jsx(fi.rect, {
            x: "60",
            y: "20",
            width: "10",
            height: "60",
            variants: Ah,
            initial: "hidden",
            animate: "visible",
            transition: { default: { duration: 2, ease: "easeInOut" } },
            fill: "none",
            stroke: "#72d7f0",
            strokeWidth: "3",
            rx: "5",
          }),
          N.jsx(fi.rect, {
            x: "30",
            y: "45",
            width: "40",
            height: "10",
            variants: Ah,
            initial: "hidden",
            animate: "visible",
            transition: { default: { duration: 2, ease: "easeInOut" } },
            fill: "none",
            stroke: "#72d7f0",
            strokeWidth: "3",
            rx: "5",
          }),
        ],
      }),
    }),
  yl = { color: "#fff", fontWeight: "bold" };
function eV() {
  return N.jsx("footer", {
    className: "bg-main fixed bottom-0 w-full p-2",
    children: N.jsxs("nav", {
      className:
        "flex h-full items-center justify-center gap-6 text-base sm:text-sm sm:gap-4",
      children: [
        N.jsxs(fl, {
          className:
            "flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white",
          to: "/",
          style: ({ isActive: t }) => (t ? yl : void 0),
          children: [
            "Journal",
            N.jsx("span", { children: N.jsx(PA, { size: 22 }) }),
          ],
        }),
        N.jsxs(fl, {
          className:
            "flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white",
          to: "/progress",
          style: ({ isActive: t }) => (t ? yl : void 0),
          children: [
            "Progress",
            N.jsx("span", { children: N.jsx(CA, { size: 22 }) }),
          ],
        }),
        N.jsx(Zk, {}),
        N.jsxs(fl, {
          className:
            "flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white",
          to: "/challanges",
          style: ({ isActive: t }) => (t ? yl : void 0),
          children: [
            "Challanges",
            N.jsx("span", { children: N.jsx(xA, { size: 22 }) }),
          ],
        }),
        N.jsxs(fl, {
          className:
            "flex flex-col-reverse items-center p-1 transition duration-300 hover:text-white",
          to: "/settings",
          style: ({ isActive: t }) => (t ? yl : void 0),
          children: [
            "Settings",
            N.jsx("span", { children: N.jsx(AA, { size: 22 }) }),
          ],
        }),
      ],
    }),
  });
}
const tV = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  nV = ({ children: t }) => {
    const e = Gr();
    return N.jsx(Jk, {
      mode: "wait",
      children: N.jsx(
        fi.div,
        {
          initial: "initial",
          animate: "animate",
          exit: "exit",
          variants: tV,
          transition: { duration: 0.5 },
          children: t,
        },
        e.pathname,
      ),
    });
  };
function rV() {
  return N.jsxs("main", {
    className: "relative flex items-center justify-center text-fontColor",
    children: [N.jsx(nV, { children: N.jsx(JC, {}) }), N.jsx(eV, {})],
  });
}
function iV(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm15.75.75H5.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5Z",
        },
        child: [],
      },
    ],
  })(t);
}
function bo() {
  return (
    (bo =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      }),
    bo.apply(this, arguments)
  );
}
var sV = function (e, n) {
    n === void 0 && (n = !0),
      V.useEffect(
        function () {
          if (n) {
            var r = function (s) {
              s.key === "Escape" && e(s);
            };
            return (
              document.addEventListener("keyup", r),
              function () {
                n && document.removeEventListener("keyup", r);
              }
            );
          }
        },
        [e, n],
      );
  },
  oV = function (e, n) {
    n === void 0 && (n = !0),
      V.useEffect(
        function () {
          if (n) {
            var r = function () {
              e();
            };
            return (
              window.addEventListener("resize", r),
              function () {
                n && window.removeEventListener("resize", r);
              }
            );
          }
        },
        [e, n],
      );
  },
  aV = function (e, n, r) {
    r === void 0 && (r = !0),
      V.useEffect(
        function () {
          if (r) {
            var i = function (o) {
              var a = Array.isArray(e) ? e : [e],
                u = !1;
              a.forEach(function (c) {
                if (!c.current || c.current.contains(o.target)) {
                  u = !0;
                  return;
                }
              }),
                o.stopPropagation(),
                u || n(o);
            };
            return (
              document.addEventListener("mousedown", i),
              document.addEventListener("touchstart", i),
              function () {
                r &&
                  (document.removeEventListener("mousedown", i),
                  document.removeEventListener("touchstart", i));
              }
            );
          }
        },
        [e, n, r],
      );
  },
  lV = function (e, n) {
    n === void 0 && (n = !0),
      V.useEffect(
        function () {
          if (n) {
            var r = function (s) {
              if (s.keyCode === 9) {
                var o,
                  a =
                    e == null || (o = e.current) === null || o === void 0
                      ? void 0
                      : o.querySelectorAll(
                          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
                        ),
                  u = Array.prototype.slice.call(a);
                if (u.length === 1) {
                  s.preventDefault();
                  return;
                }
                var c = u[0],
                  h = u[u.length - 1];
                s.shiftKey && document.activeElement === c
                  ? (s.preventDefault(), h.focus())
                  : document.activeElement === h &&
                    (s.preventDefault(), c.focus());
              }
            };
            return (
              document.addEventListener("keydown", r),
              function () {
                n && document.removeEventListener("keydown", r);
              }
            );
          }
        },
        [e, n],
      );
  },
  uV = typeof window < "u" ? V.useLayoutEffect : V.useEffect,
  lo = {
    popupContent: {
      tooltip: { position: "absolute", zIndex: 999 },
      modal: { position: "relative", margin: "auto" },
    },
    popupArrow: {
      height: "8px",
      width: "16px",
      position: "absolute",
      background: "transparent",
      color: "#FFF",
      zIndex: -1,
    },
    overlay: {
      tooltip: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 999,
      },
      modal: {
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        zIndex: 999,
      },
    },
  },
  cV = [
    "top left",
    "top center",
    "top right",
    "right top",
    "right center",
    "right bottom",
    "bottom left",
    "bottom center",
    "bottom right",
    "left top",
    "left center",
    "left bottom",
  ],
  hV = function (e, n, r, i, s) {
    var o = s.offsetX,
      a = s.offsetY,
      u = i ? 8 : 0,
      c = r.split(" "),
      h = e.top + e.height / 2,
      f = e.left + e.width / 2,
      p = n.height,
      g = n.width,
      w = h - p / 2,
      C = f - g / 2,
      A = "",
      E = "0%",
      y = "0%";
    switch (c[0]) {
      case "top":
        (w -= p / 2 + e.height / 2 + u),
          (A = "rotate(180deg)  translateX(50%)"),
          (E = "100%"),
          (y = "50%");
        break;
      case "bottom":
        (w += p / 2 + e.height / 2 + u),
          (A = "rotate(0deg) translateY(-100%) translateX(-50%)"),
          (y = "50%");
        break;
      case "left":
        (C -= g / 2 + e.width / 2 + u),
          (A = " rotate(90deg)  translateY(50%) translateX(-25%)"),
          (y = "100%"),
          (E = "50%");
        break;
      case "right":
        (C += g / 2 + e.width / 2 + u),
          (A = "rotate(-90deg)  translateY(-150%) translateX(25%)"),
          (E = "50%");
        break;
    }
    switch (c[1]) {
      case "top":
        (w = e.top), (E = e.height / 2 + "px");
        break;
      case "bottom":
        (w = e.top - p + e.height), (E = p - e.height / 2 + "px");
        break;
      case "left":
        (C = e.left), (y = e.width / 2 + "px");
        break;
      case "right":
        (C = e.left - g + e.width), (y = g - e.width / 2 + "px");
        break;
    }
    return (
      (w = c[0] === "top" ? w - a : w + a),
      (C = c[0] === "left" ? C - o : C + o),
      { top: w, left: C, transform: A, arrowLeft: y, arrowTop: E }
    );
  },
  fV = function (e) {
    var n = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    if (typeof e == "string") {
      var r = document.querySelector(e);
      r !== null && (n = r.getBoundingClientRect());
    }
    return n;
  },
  dV = function (e, n, r, i, s, o) {
    var a = s.offsetX,
      u = s.offsetY,
      c = {
        arrowLeft: "0%",
        arrowTop: "0%",
        left: 0,
        top: 0,
        transform: "rotate(135deg)",
      },
      h = 0,
      f = fV(o),
      p = Array.isArray(r) ? r : [r];
    for ((o || Array.isArray(r)) && (p = [].concat(p, cV)); h < p.length; ) {
      c = hV(e, n, p[h], i, { offsetX: a, offsetY: u });
      var g = { top: c.top, left: c.left, width: n.width, height: n.height };
      if (
        g.top <= f.top ||
        g.left <= f.left ||
        g.top + g.height >= f.top + f.height ||
        g.left + g.width >= f.left + f.width
      )
        h++;
      else break;
    }
    return c;
  },
  pV = 0,
  mV = function () {
    var e = document.getElementById("popup-root");
    return (
      e === null &&
        ((e = document.createElement("div")),
        e.setAttribute("id", "popup-root"),
        document.body.appendChild(e)),
      e
    );
  },
  kE = V.forwardRef(function (t, e) {
    var n = t.trigger,
      r = n === void 0 ? null : n,
      i = t.onOpen,
      s = i === void 0 ? function () {} : i,
      o = t.onClose,
      a = o === void 0 ? function () {} : o,
      u = t.defaultOpen,
      c = u === void 0 ? !1 : u,
      h = t.open,
      f = h === void 0 ? void 0 : h,
      p = t.disabled,
      g = p === void 0 ? !1 : p,
      w = t.nested,
      C = w === void 0 ? !1 : w,
      A = t.closeOnDocumentClick,
      E = A === void 0 ? !0 : A,
      y = t.repositionOnResize,
      T = y === void 0 ? !0 : y,
      k = t.closeOnEscape,
      M = k === void 0 ? !0 : k,
      j = t.on,
      P = j === void 0 ? ["click"] : j,
      v = t.contentStyle,
      S = v === void 0 ? {} : v,
      x = t.arrowStyle,
      R = x === void 0 ? {} : x,
      D = t.overlayStyle,
      I = D === void 0 ? {} : D,
      He = t.className,
      ce = He === void 0 ? "" : He,
      Ye = t.position,
      ut = Ye === void 0 ? "bottom center" : Ye,
      K = t.modal,
      J = K === void 0 ? !1 : K,
      te = t.lockScroll,
      _e = te === void 0 ? !1 : te,
      he = t.arrow,
      ye = he === void 0 ? !0 : he,
      jt = t.offsetX,
      bt = jt === void 0 ? 0 : jt,
      wt = t.offsetY,
      Bt = wt === void 0 ? 0 : wt,
      L = t.mouseEnterDelay,
      B = L === void 0 ? 100 : L,
      $ = t.mouseLeaveDelay,
      F = $ === void 0 ? 100 : $,
      ae = t.keepTooltipInside,
      G = ae === void 0 ? !1 : ae,
      ee = t.children,
      me = V.useState(f || c),
      le = me[0],
      we = me[1],
      Ke = V.useRef(null),
      Se = V.useRef(null),
      Ne = V.useRef(null),
      Ln = V.useRef(null),
      sr = V.useRef("popup-" + ++pV),
      Ge = J ? !0 : !r,
      Gt = V.useRef(0);
    uV(
      function () {
        return (
          le ? ((Ln.current = document.activeElement), Fs(), Da(), jn()) : Sn(),
          function () {
            clearTimeout(Gt.current);
          }
        );
      },
      [le],
    ),
      V.useEffect(
        function () {
          typeof f == "boolean" && (f ? qt() : Ee());
        },
        [f, g],
      );
    var qt = function (se) {
        le ||
          g ||
          (we(!0),
          setTimeout(function () {
            return s(se);
          }, 0));
      },
      Ee = function (se) {
        var it;
        !le ||
          g ||
          (we(!1),
          Ge && ((it = Ln.current) === null || it === void 0 || it.focus()),
          setTimeout(function () {
            return a(se);
          }, 0));
      },
      Ue = function (se) {
        se == null || se.stopPropagation(), le ? Ee(se) : qt(se);
      },
      Tn = function (se) {
        clearTimeout(Gt.current),
          (Gt.current = setTimeout(function () {
            return qt(se);
          }, B));
      },
      Jr = function (se) {
        se == null || se.preventDefault(), Ue();
      },
      Fn = function (se) {
        clearTimeout(Gt.current),
          (Gt.current = setTimeout(function () {
            return Ee(se);
          }, F));
      },
      jn = function () {
        Ge &&
          _e &&
          (document.getElementsByTagName("body")[0].style.overflow = "hidden");
      },
      Sn = function () {
        Ge &&
          _e &&
          (document.getElementsByTagName("body")[0].style.overflow = "auto");
      },
      Da = function () {
        var se,
          it =
            Se == null || (se = Se.current) === null || se === void 0
              ? void 0
              : se.querySelectorAll(
                  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
                ),
          Ae = Array.prototype.slice.call(it)[0];
        Ae == null || Ae.focus();
      };
    V.useImperativeHandle(e, function () {
      return {
        open: function () {
          qt();
        },
        close: function () {
          Ee();
        },
        toggle: function () {
          Ue();
        },
      };
    });
    var Fs = function () {
      if (
        !(Ge || !le) &&
        !(
          !(Ke != null && Ke.current) ||
          !(Ke != null && Ke.current) ||
          !(Se != null && Se.current)
        )
      ) {
        var se = Ke.current.getBoundingClientRect(),
          it = Se.current.getBoundingClientRect(),
          Ae = dV(se, it, ut, ye, { offsetX: bt, offsetY: Bt }, G);
        if (
          ((Se.current.style.top = Ae.top + window.scrollY + "px"),
          (Se.current.style.left = Ae.left + window.scrollX + "px"),
          ye && Ne.current)
        ) {
          var Pn, xn;
          (Ne.current.style.transform = Ae.transform),
            Ne.current.style.setProperty("-ms-transform", Ae.transform),
            Ne.current.style.setProperty("-webkit-transform", Ae.transform),
            (Ne.current.style.top =
              ((Pn = R.top) === null || Pn === void 0
                ? void 0
                : Pn.toString()) || Ae.arrowTop),
            (Ne.current.style.left =
              ((xn = R.left) === null || xn === void 0
                ? void 0
                : xn.toString()) || Ae.arrowLeft);
        }
      }
    };
    sV(Ee, M),
      lV(Se, le && Ge),
      oV(Fs, T),
      aV(r ? [Se, Ke] : [Se], Ee, E && !C);
    var js = function () {
        for (
          var se = { key: "T", ref: Ke, "aria-describedby": sr.current },
            it = Array.isArray(P) ? P : [P],
            Ae = 0,
            Pn = it.length;
          Ae < Pn;
          Ae++
        )
          switch (it[Ae]) {
            case "click":
              se.onClick = Ue;
              break;
            case "right-click":
              se.onContextMenu = Jr;
              break;
            case "hover":
              (se.onMouseEnter = Tn), (se.onMouseLeave = Fn);
              break;
            case "focus":
              (se.onFocus = Tn), (se.onBlur = Fn);
              break;
          }
        if (typeof r == "function") {
          var xn = r(le);
          return !!r && st.cloneElement(xn, se);
        }
        return !!r && st.cloneElement(r, se);
      },
      Ic = function () {
        var se = Ge ? lo.popupContent.modal : lo.popupContent.tooltip,
          it = {
            className:
              "popup-content " +
              (ce !== ""
                ? ce
                    .split(" ")
                    .map(function (Ae) {
                      return Ae + "-content";
                    })
                    .join(" ")
                : ""),
            style: bo({}, se, S, { pointerEvents: "auto" }),
            ref: Se,
            onClick: function (Pn) {
              Pn.stopPropagation();
            },
          };
        return (
          !J &&
            P.indexOf("hover") >= 0 &&
            ((it.onMouseEnter = Tn), (it.onMouseLeave = Fn)),
          it
        );
      },
      ba = function () {
        return st.createElement(
          "div",
          Object.assign({}, Ic(), {
            key: "C",
            role: Ge ? "dialog" : "tooltip",
            id: sr.current,
          }),
          ye &&
            !Ge &&
            st.createElement(
              "div",
              { ref: Ne, style: lo.popupArrow },
              st.createElement(
                "svg",
                {
                  "data-testid": "arrow",
                  className:
                    "popup-arrow " +
                    (ce !== ""
                      ? ce
                          .split(" ")
                          .map(function (se) {
                            return se + "-arrow";
                          })
                          .join(" ")
                      : ""),
                  viewBox: "0 0 32 16",
                  style: bo({ position: "absolute" }, R),
                },
                st.createElement("path", {
                  d: "M16 0l16 16H0z",
                  fill: "currentcolor",
                }),
              ),
            ),
          ee && typeof ee == "function" ? ee(Ee, le) : ee,
        );
      },
      Bs = !(P.indexOf("hover") >= 0),
      Na = Ge ? lo.overlay.modal : lo.overlay.tooltip,
      Oa = [
        Bs &&
          st.createElement(
            "div",
            {
              key: "O",
              "data-testid": "overlay",
              "data-popup": Ge ? "modal" : "tooltip",
              className:
                "popup-overlay " +
                (ce !== ""
                  ? ce
                      .split(" ")
                      .map(function (Oe) {
                        return Oe + "-overlay";
                      })
                      .join(" ")
                  : ""),
              style: bo({}, Na, I, {
                pointerEvents: (E && C) || Ge ? "auto" : "none",
              }),
              onClick: E && C ? Ee : void 0,
              tabIndex: -1,
            },
            Ge && ba(),
          ),
        !Ge && ba(),
      ];
    return st.createElement(
      st.Fragment,
      null,
      js(),
      le && cC.createPortal(Oa, mV()),
    );
  });
const gV = [
    "Limit shopping",
    "Reduce nail-biting",
    "Limit masturbation",
    "Limit sitting",
    "Stop skipping meals",
    "Go to bed earlier",
    "Quit smoking",
    "Quit drinking",
    "Limit unhealthy eating",
    "Limit overeating",
    "Limit screen time",
    "Limit gaming",
  ],
  yV = [
    "Meditate",
    "Prepare a to-do list",
    "Drink water",
    "Read a book",
    "Go for a run",
    "Go to the gym",
    "Go swimming",
    "Go for a walk",
    "Get a good night's sleep",
    "Wash your hands",
    "Call your parents",
    "Meet a friend",
    "Say thank you",
    "Take vitamins",
    "Eat fruits",
    "Study a language",
    "Practice gratitude",
    "Do some stretching exercises",
    "Listen to a podcast",
    "Cook a healthy meal",
    "Journal your thoughts",
    "Declutter your space",
    "Plan your week ahead",
  ];
var ht = [];
for (var Ih = 0; Ih < 256; ++Ih) ht.push((Ih + 256).toString(16).slice(1));
function vV(t, e = 0) {
  return (
    ht[t[e + 0]] +
    ht[t[e + 1]] +
    ht[t[e + 2]] +
    ht[t[e + 3]] +
    "-" +
    ht[t[e + 4]] +
    ht[t[e + 5]] +
    "-" +
    ht[t[e + 6]] +
    ht[t[e + 7]] +
    "-" +
    ht[t[e + 8]] +
    ht[t[e + 9]] +
    "-" +
    ht[t[e + 10]] +
    ht[t[e + 11]] +
    ht[t[e + 12]] +
    ht[t[e + 13]] +
    ht[t[e + 14]] +
    ht[t[e + 15]]
  ).toLowerCase();
}
var vl,
  _V = new Uint8Array(16);
function wV() {
  if (
    !vl &&
    ((vl =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !vl)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return vl(_V);
}
var EV =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ov = { randomUUID: EV };
function VE(t, e, n) {
  if (Ov.randomUUID && !e && !t) return Ov.randomUUID();
  t = t || {};
  var r = t.random || (t.rng || wV)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), vV(r);
}
const TV = { habits: [] };
function SV(t, e) {
  switch (e.type) {
    case "ADD_HABIT":
      return { ...t, habits: [...t.habits, e.payload] };
    case "UPDATE_PRESENT_COUNT":
      return {
        ...t,
        habits: t.habits.map((n) =>
          n.id === e.payload.id
            ? { ...n, presentCount: e.payload.presentCount }
            : n,
        ),
      };
    case "SET_DATA":
      return { ...t, habits: e.payload, loading: !1 };
    case "ADD_DATA":
      return { ...t, habits: [...t.habits, e.payload] };
    case "DELETE_HABIT":
      return { ...t, habits: t.habits.filter((n) => n.id !== e.payload) };
    default:
      return t;
  }
}
var Mv = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DE = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
          ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < t.length &&
              (t.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
              (e[n++] = (i >> 18) | 240),
              (e[n++] = ((i >> 12) & 63) | 128),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128))
            : ((e[n++] = (i >> 12) | 224),
              (e[n++] = ((i >> 6) & 63) | 128),
              (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  PV = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          a = t[n++],
          u =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (u >> 10))),
          (e[r++] = String.fromCharCode(56320 + (u & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63),
        );
      }
    }
    return e.join("");
  },
  bE = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          a = o ? t[i + 1] : 0,
          u = i + 2 < t.length,
          c = u ? t[i + 2] : 0,
          h = s >> 2,
          f = ((s & 3) << 4) | (a >> 4);
        let p = ((a & 15) << 2) | (c >> 6),
          g = c & 63;
        u || ((g = 64), o || (p = 64)), r.push(n[h], n[f], n[p], n[g]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(DE(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : PV(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          a = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const c = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const f = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || a == null || c == null || f == null))
          throw new xV();
        const p = (s << 2) | (a >> 4);
        if ((r.push(p), c !== 64)) {
          const g = ((a << 4) & 240) | (c >> 2);
          if ((r.push(g), f !== 64)) {
            const w = ((c << 6) & 192) | f;
            r.push(w);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class xV extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const CV = function (t) {
    const e = DE(t);
    return bE.encodeByteArray(e, !0);
  },
  Cu = function (t) {
    return CV(t).replace(/\./g, "");
  },
  AV = function (t) {
    try {
      return bE.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function IV() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RV = () => IV().__FIREBASE_DEFAULTS__,
  kV = () => {
    if (typeof process > "u" || typeof Mv > "u") return;
    const t = Mv.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  VV = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && AV(t[1]);
    return e && JSON.parse(e);
  },
  jp = () => {
    try {
      return RV() || kV() || VV();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  DV = (t) => {
    var e, n;
    return (n =
      (e = jp()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  bV = (t) => {
    const e = DV(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  NE = () => {
    var t;
    return (t = jp()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NV {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OV(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    t,
  );
  return [Cu(JSON.stringify(n)), Cu(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function MV() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function LV() {
  var t;
  const e = (t = jp()) === null || t === void 0 ? void 0 : t.forceEnvironment;
  if (e === "node") return !0;
  if (e === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function FV() {
  return (
    !LV() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function jV() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function BV() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || "",
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const UV = "FirebaseError";
class Ns extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = UV),
      Object.setPrototypeOf(this, Ns.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, OE.prototype.create);
  }
}
class OE {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? zV(s, r) : "Error",
      a = `${this.serviceName}: ${o} (${i}).`;
    return new Ns(i, a, r);
  }
}
function zV(t, e) {
  return t.replace($V, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const $V = /\{\$([^}]+)}/g;
function Xf(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Lv(s) && Lv(o)) {
      if (!Xf(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Lv(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fr(t) {
  return t && t._delegate ? t._delegate : t;
}
class la {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ai = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WV {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new NV();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier,
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (KV(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: ai });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = ai) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = ai) {
    return this.instances.has(e);
  }
  getOptions(e = ai) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: HV(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = ai) {
    return this.component ? (this.component.multipleInstances ? e : ai) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function HV(t) {
  return t === ai ? void 0 : t;
}
function KV(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GV {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`,
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new WV(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var de;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(de || (de = {}));
const qV = {
    debug: de.DEBUG,
    verbose: de.VERBOSE,
    info: de.INFO,
    warn: de.WARN,
    error: de.ERROR,
    silent: de.SILENT,
  },
  QV = de.INFO,
  YV = {
    [de.DEBUG]: "log",
    [de.VERBOSE]: "log",
    [de.INFO]: "info",
    [de.WARN]: "warn",
    [de.ERROR]: "error",
  },
  XV = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = YV[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`,
      );
  };
class ME {
  constructor(e) {
    (this.name = e),
      (this._logLevel = QV),
      (this._logHandler = XV),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in de))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? qV[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, de.DEBUG, ...e),
      this._logHandler(this, de.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, de.VERBOSE, ...e),
      this._logHandler(this, de.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, de.INFO, ...e),
      this._logHandler(this, de.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, de.WARN, ...e),
      this._logHandler(this, de.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, de.ERROR, ...e),
      this._logHandler(this, de.ERROR, ...e);
  }
}
const JV = (t, e) => e.some((n) => t instanceof n);
let Fv, jv;
function ZV() {
  return (
    Fv ||
    (Fv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function eD() {
  return (
    jv ||
    (jv = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const LE = new WeakMap(),
  Jf = new WeakMap(),
  FE = new WeakMap(),
  Rh = new WeakMap(),
  Bp = new WeakMap();
function tD(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(kr(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && LE.set(n, t);
      })
      .catch(() => {}),
    Bp.set(e, t),
    e
  );
}
function nD(t) {
  if (Jf.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  Jf.set(t, e);
}
let Zf = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Jf.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || FE.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return kr(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function rD(t) {
  Zf = t(Zf);
}
function iD(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(kh(this), e, ...n);
        return FE.set(r, e.sort ? e.sort() : [e]), kr(r);
      }
    : eD().includes(t)
      ? function (...e) {
          return t.apply(kh(this), e), kr(LE.get(this));
        }
      : function (...e) {
          return kr(t.apply(kh(this), e));
        };
}
function sD(t) {
  return typeof t == "function"
    ? iD(t)
    : (t instanceof IDBTransaction && nD(t),
      JV(t, ZV()) ? new Proxy(t, Zf) : t);
}
function kr(t) {
  if (t instanceof IDBRequest) return tD(t);
  if (Rh.has(t)) return Rh.get(t);
  const e = sD(t);
  return e !== t && (Rh.set(t, e), Bp.set(e, t)), e;
}
const kh = (t) => Bp.get(t);
function oD(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    a = kr(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(kr(o.result), u.oldVersion, u.newVersion, kr(o.transaction), u);
      }),
    n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)),
    a
      .then((u) => {
        s && u.addEventListener("close", () => s()),
          i &&
            u.addEventListener("versionchange", (c) =>
              i(c.oldVersion, c.newVersion, c),
            );
      })
      .catch(() => {}),
    a
  );
}
const aD = ["get", "getKey", "getAll", "getAllKeys", "count"],
  lD = ["put", "add", "delete", "clear"],
  Vh = new Map();
function Bv(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Vh.get(e)) return Vh.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = lD.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || aD.includes(n))
  )
    return;
  const s = async function (o, ...a) {
    const u = this.transaction(o, i ? "readwrite" : "readonly");
    let c = u.store;
    return (
      r && (c = c.index(a.shift())),
      (await Promise.all([c[n](...a), i && u.done]))[0]
    );
  };
  return Vh.set(e, s), s;
}
rD((t) => ({
  ...t,
  get: (e, n, r) => Bv(e, n) || t.get(e, n, r),
  has: (e, n) => !!Bv(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uD {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (cD(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function cD(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const ed = "@firebase/app",
  Uv = "0.10.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Si = new ME("@firebase/app"),
  hD = "@firebase/app-compat",
  fD = "@firebase/analytics-compat",
  dD = "@firebase/analytics",
  pD = "@firebase/app-check-compat",
  mD = "@firebase/app-check",
  gD = "@firebase/auth",
  yD = "@firebase/auth-compat",
  vD = "@firebase/database",
  _D = "@firebase/database-compat",
  wD = "@firebase/functions",
  ED = "@firebase/functions-compat",
  TD = "@firebase/installations",
  SD = "@firebase/installations-compat",
  PD = "@firebase/messaging",
  xD = "@firebase/messaging-compat",
  CD = "@firebase/performance",
  AD = "@firebase/performance-compat",
  ID = "@firebase/remote-config",
  RD = "@firebase/remote-config-compat",
  kD = "@firebase/storage",
  VD = "@firebase/storage-compat",
  DD = "@firebase/firestore",
  bD = "@firebase/vertexai-preview",
  ND = "@firebase/firestore-compat",
  OD = "firebase",
  MD = "10.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const td = "[DEFAULT]",
  LD = {
    [ed]: "fire-core",
    [hD]: "fire-core-compat",
    [dD]: "fire-analytics",
    [fD]: "fire-analytics-compat",
    [mD]: "fire-app-check",
    [pD]: "fire-app-check-compat",
    [gD]: "fire-auth",
    [yD]: "fire-auth-compat",
    [vD]: "fire-rtdb",
    [_D]: "fire-rtdb-compat",
    [wD]: "fire-fn",
    [ED]: "fire-fn-compat",
    [TD]: "fire-iid",
    [SD]: "fire-iid-compat",
    [PD]: "fire-fcm",
    [xD]: "fire-fcm-compat",
    [CD]: "fire-perf",
    [AD]: "fire-perf-compat",
    [ID]: "fire-rc",
    [RD]: "fire-rc-compat",
    [kD]: "fire-gcs",
    [VD]: "fire-gcs-compat",
    [DD]: "fire-fst",
    [ND]: "fire-fst-compat",
    [bD]: "fire-vertex",
    "fire-js": "fire-js",
    [OD]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Au = new Map(),
  FD = new Map(),
  nd = new Map();
function zv(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Si.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n,
    );
  }
}
function Iu(t) {
  const e = t.name;
  if (nd.has(e))
    return (
      Si.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  nd.set(e, t);
  for (const n of Au.values()) zv(n, t);
  for (const n of FD.values()) zv(n, t);
  return !0;
}
function jD(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BD = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Vr = new OE("app", "Firebase", BD);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UD {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new la("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Vr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zD = MD;
function jE(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: td, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Vr.create("bad-app-name", { appName: String(i) });
  if ((n || (n = NE()), !n)) throw Vr.create("no-options");
  const s = Au.get(i);
  if (s) {
    if (Xf(n, s.options) && Xf(r, s.config)) return s;
    throw Vr.create("duplicate-app", { appName: i });
  }
  const o = new GV(i);
  for (const u of nd.values()) o.addComponent(u);
  const a = new UD(n, r, o);
  return Au.set(i, a), a;
}
function $D(t = td) {
  const e = Au.get(t);
  if (!e && t === td && NE()) return jE();
  if (!e) throw Vr.create("no-app", { appName: t });
  return e;
}
function cs(t, e, n) {
  var r;
  let i = (r = LD[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`,
      ),
      s && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`,
        ),
      Si.warn(a.join(" "));
    return;
  }
  Iu(new la(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WD = "firebase-heartbeat-database",
  HD = 1,
  ua = "firebase-heartbeat-store";
let Dh = null;
function BE() {
  return (
    Dh ||
      (Dh = oD(WD, HD, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(ua);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw Vr.create("idb-open", { originalErrorMessage: t.message });
      })),
    Dh
  );
}
async function KD(t) {
  try {
    const n = (await BE()).transaction(ua),
      r = await n.objectStore(ua).get(UE(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof Ns) Si.warn(e.message);
    else {
      const n = Vr.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Si.warn(n.message);
    }
  }
}
async function $v(t, e) {
  try {
    const r = (await BE()).transaction(ua, "readwrite");
    await r.objectStore(ua).put(e, UE(t)), await r.done;
  } catch (n) {
    if (n instanceof Ns) Si.warn(n.message);
    else {
      const r = Vr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Si.warn(r.message);
    }
  }
}
function UE(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GD = 1024,
  qD = 30 * 24 * 60 * 60 * 1e3;
class QD {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new XD(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = Wv();
    if (
      !(
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const a = new Date(o.date).valueOf();
            return Date.now() - a <= qD;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var e;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = Wv(),
      { heartbeatsToSend: r, unsentEntries: i } = YD(
        this._heartbeatsCache.heartbeats,
      ),
      s = Cu(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function Wv() {
  return new Date().toISOString().substring(0, 10);
}
function YD(t, e = GD) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), Hv(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Hv(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class XD {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return jV()
      ? BV()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await KD(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $v(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return $v(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Hv(t) {
  return Cu(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function JD(t) {
  Iu(new la("platform-logger", (e) => new uD(e), "PRIVATE")),
    Iu(new la("heartbeat", (e) => new QD(e), "PRIVATE")),
    cs(ed, Uv, t),
    cs(ed, Uv, "esm2017"),
    cs("fire-js", "");
}
JD("");
var ZD = "firebase",
  eb = "10.12.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ cs(ZD, eb, "app");
var Kv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var yi, zE;
(function () {
  var t;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(P, v) {
    function S() {}
    (S.prototype = v.prototype),
      (P.D = v.prototype),
      (P.prototype = new S()),
      (P.prototype.constructor = P),
      (P.C = function (x, R, D) {
        for (
          var I = Array(arguments.length - 2), He = 2;
          He < arguments.length;
          He++
        )
          I[He - 2] = arguments[He];
        return v.prototype[R].apply(x, I);
      });
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  e(r, n),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function i(P, v, S) {
    S || (S = 0);
    var x = Array(16);
    if (typeof v == "string")
      for (var R = 0; 16 > R; ++R)
        x[R] =
          v.charCodeAt(S++) |
          (v.charCodeAt(S++) << 8) |
          (v.charCodeAt(S++) << 16) |
          (v.charCodeAt(S++) << 24);
    else
      for (R = 0; 16 > R; ++R)
        x[R] = v[S++] | (v[S++] << 8) | (v[S++] << 16) | (v[S++] << 24);
    (v = P.g[0]), (S = P.g[1]), (R = P.g[2]);
    var D = P.g[3],
      I = (v + (D ^ (S & (R ^ D))) + x[0] + 3614090360) & 4294967295;
    (v = S + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (D + (R ^ (v & (S ^ R))) + x[1] + 3905402710) & 4294967295),
      (D = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (S ^ (D & (v ^ S))) + x[2] + 606105819) & 4294967295),
      (R = D + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (S + (v ^ (R & (D ^ v))) + x[3] + 3250441966) & 4294967295),
      (S = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (D ^ (S & (R ^ D))) + x[4] + 4118548399) & 4294967295),
      (v = S + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (D + (R ^ (v & (S ^ R))) + x[5] + 1200080426) & 4294967295),
      (D = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (S ^ (D & (v ^ S))) + x[6] + 2821735955) & 4294967295),
      (R = D + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (S + (v ^ (R & (D ^ v))) + x[7] + 4249261313) & 4294967295),
      (S = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (D ^ (S & (R ^ D))) + x[8] + 1770035416) & 4294967295),
      (v = S + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (D + (R ^ (v & (S ^ R))) + x[9] + 2336552879) & 4294967295),
      (D = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (S ^ (D & (v ^ S))) + x[10] + 4294925233) & 4294967295),
      (R = D + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (S + (v ^ (R & (D ^ v))) + x[11] + 2304563134) & 4294967295),
      (S = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (D ^ (S & (R ^ D))) + x[12] + 1804603682) & 4294967295),
      (v = S + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (D + (R ^ (v & (S ^ R))) + x[13] + 4254626195) & 4294967295),
      (D = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (R + (S ^ (D & (v ^ S))) + x[14] + 2792965006) & 4294967295),
      (R = D + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (S + (v ^ (R & (D ^ v))) + x[15] + 1236535329) & 4294967295),
      (S = R + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (R ^ (D & (S ^ R))) + x[1] + 4129170786) & 4294967295),
      (v = S + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (D + (S ^ (R & (v ^ S))) + x[6] + 3225465664) & 4294967295),
      (D = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (v ^ (S & (D ^ v))) + x[11] + 643717713) & 4294967295),
      (R = D + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (S + (D ^ (v & (R ^ D))) + x[0] + 3921069994) & 4294967295),
      (S = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (R ^ (D & (S ^ R))) + x[5] + 3593408605) & 4294967295),
      (v = S + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (D + (S ^ (R & (v ^ S))) + x[10] + 38016083) & 4294967295),
      (D = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (v ^ (S & (D ^ v))) + x[15] + 3634488961) & 4294967295),
      (R = D + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (S + (D ^ (v & (R ^ D))) + x[4] + 3889429448) & 4294967295),
      (S = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (R ^ (D & (S ^ R))) + x[9] + 568446438) & 4294967295),
      (v = S + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (D + (S ^ (R & (v ^ S))) + x[14] + 3275163606) & 4294967295),
      (D = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (v ^ (S & (D ^ v))) + x[3] + 4107603335) & 4294967295),
      (R = D + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (S + (D ^ (v & (R ^ D))) + x[8] + 1163531501) & 4294967295),
      (S = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (R ^ (D & (S ^ R))) + x[13] + 2850285829) & 4294967295),
      (v = S + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (D + (S ^ (R & (v ^ S))) + x[2] + 4243563512) & 4294967295),
      (D = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (R + (v ^ (S & (D ^ v))) + x[7] + 1735328473) & 4294967295),
      (R = D + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (S + (D ^ (v & (R ^ D))) + x[12] + 2368359562) & 4294967295),
      (S = R + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (S ^ R ^ D) + x[5] + 4294588738) & 4294967295),
      (v = S + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (D + (v ^ S ^ R) + x[8] + 2272392833) & 4294967295),
      (D = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (D ^ v ^ S) + x[11] + 1839030562) & 4294967295),
      (R = D + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (S + (R ^ D ^ v) + x[14] + 4259657740) & 4294967295),
      (S = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (S ^ R ^ D) + x[1] + 2763975236) & 4294967295),
      (v = S + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (D + (v ^ S ^ R) + x[4] + 1272893353) & 4294967295),
      (D = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (D ^ v ^ S) + x[7] + 4139469664) & 4294967295),
      (R = D + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (S + (R ^ D ^ v) + x[10] + 3200236656) & 4294967295),
      (S = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (S ^ R ^ D) + x[13] + 681279174) & 4294967295),
      (v = S + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (D + (v ^ S ^ R) + x[0] + 3936430074) & 4294967295),
      (D = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (D ^ v ^ S) + x[3] + 3572445317) & 4294967295),
      (R = D + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (S + (R ^ D ^ v) + x[6] + 76029189) & 4294967295),
      (S = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (S ^ R ^ D) + x[9] + 3654602809) & 4294967295),
      (v = S + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (D + (v ^ S ^ R) + x[12] + 3873151461) & 4294967295),
      (D = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (R + (D ^ v ^ S) + x[15] + 530742520) & 4294967295),
      (R = D + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (S + (R ^ D ^ v) + x[2] + 3299628645) & 4294967295),
      (S = R + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (R ^ (S | ~D)) + x[0] + 4096336452) & 4294967295),
      (v = S + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (D + (S ^ (v | ~R)) + x[7] + 1126891415) & 4294967295),
      (D = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (v ^ (D | ~S)) + x[14] + 2878612391) & 4294967295),
      (R = D + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (S + (D ^ (R | ~v)) + x[5] + 4237533241) & 4294967295),
      (S = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (R ^ (S | ~D)) + x[12] + 1700485571) & 4294967295),
      (v = S + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (D + (S ^ (v | ~R)) + x[3] + 2399980690) & 4294967295),
      (D = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (v ^ (D | ~S)) + x[10] + 4293915773) & 4294967295),
      (R = D + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (S + (D ^ (R | ~v)) + x[1] + 2240044497) & 4294967295),
      (S = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (R ^ (S | ~D)) + x[8] + 1873313359) & 4294967295),
      (v = S + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (D + (S ^ (v | ~R)) + x[15] + 4264355552) & 4294967295),
      (D = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (v ^ (D | ~S)) + x[6] + 2734768916) & 4294967295),
      (R = D + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (S + (D ^ (R | ~v)) + x[13] + 1309151649) & 4294967295),
      (S = R + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (R ^ (S | ~D)) + x[4] + 4149444226) & 4294967295),
      (v = S + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (D + (S ^ (v | ~R)) + x[11] + 3174756917) & 4294967295),
      (D = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (R + (v ^ (D | ~S)) + x[2] + 718787259) & 4294967295),
      (R = D + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (S + (D ^ (R | ~v)) + x[9] + 3951481745) & 4294967295),
      (P.g[0] = (P.g[0] + v) & 4294967295),
      (P.g[1] =
        (P.g[1] + (R + (((I << 21) & 4294967295) | (I >>> 11)))) & 4294967295),
      (P.g[2] = (P.g[2] + R) & 4294967295),
      (P.g[3] = (P.g[3] + D) & 4294967295);
  }
  (r.prototype.u = function (P, v) {
    v === void 0 && (v = P.length);
    for (var S = v - this.blockSize, x = this.B, R = this.h, D = 0; D < v; ) {
      if (R == 0) for (; D <= S; ) i(this, P, D), (D += this.blockSize);
      if (typeof P == "string") {
        for (; D < v; )
          if (((x[R++] = P.charCodeAt(D++)), R == this.blockSize)) {
            i(this, x), (R = 0);
            break;
          }
      } else
        for (; D < v; )
          if (((x[R++] = P[D++]), R == this.blockSize)) {
            i(this, x), (R = 0);
            break;
          }
    }
    (this.h = R), (this.o += v);
  }),
    (r.prototype.v = function () {
      var P = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h,
      );
      P[0] = 128;
      for (var v = 1; v < P.length - 8; ++v) P[v] = 0;
      var S = 8 * this.o;
      for (v = P.length - 8; v < P.length; ++v) (P[v] = S & 255), (S /= 256);
      for (this.u(P), P = Array(16), v = S = 0; 4 > v; ++v)
        for (var x = 0; 32 > x; x += 8) P[S++] = (this.g[v] >>> x) & 255;
      return P;
    });
  function s(P, v) {
    var S = a;
    return Object.prototype.hasOwnProperty.call(S, P) ? S[P] : (S[P] = v(P));
  }
  function o(P, v) {
    this.h = v;
    for (var S = [], x = !0, R = P.length - 1; 0 <= R; R--) {
      var D = P[R] | 0;
      (x && D == v) || ((S[R] = D), (x = !1));
    }
    this.g = S;
  }
  var a = {};
  function u(P) {
    return -128 <= P && 128 > P
      ? s(P, function (v) {
          return new o([v | 0], 0 > v ? -1 : 0);
        })
      : new o([P | 0], 0 > P ? -1 : 0);
  }
  function c(P) {
    if (isNaN(P) || !isFinite(P)) return f;
    if (0 > P) return A(c(-P));
    for (var v = [], S = 1, x = 0; P >= S; x++)
      (v[x] = (P / S) | 0), (S *= 4294967296);
    return new o(v, 0);
  }
  function h(P, v) {
    if (P.length == 0) throw Error("number format error: empty string");
    if (((v = v || 10), 2 > v || 36 < v))
      throw Error("radix out of range: " + v);
    if (P.charAt(0) == "-") return A(h(P.substring(1), v));
    if (0 <= P.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var S = c(Math.pow(v, 8)), x = f, R = 0; R < P.length; R += 8) {
      var D = Math.min(8, P.length - R),
        I = parseInt(P.substring(R, R + D), v);
      8 > D
        ? ((D = c(Math.pow(v, D))), (x = x.j(D).add(c(I))))
        : ((x = x.j(S)), (x = x.add(c(I))));
    }
    return x;
  }
  var f = u(0),
    p = u(1),
    g = u(16777216);
  (t = o.prototype),
    (t.m = function () {
      if (C(this)) return -A(this).m();
      for (var P = 0, v = 1, S = 0; S < this.g.length; S++) {
        var x = this.i(S);
        (P += (0 <= x ? x : 4294967296 + x) * v), (v *= 4294967296);
      }
      return P;
    }),
    (t.toString = function (P) {
      if (((P = P || 10), 2 > P || 36 < P))
        throw Error("radix out of range: " + P);
      if (w(this)) return "0";
      if (C(this)) return "-" + A(this).toString(P);
      for (var v = c(Math.pow(P, 6)), S = this, x = ""; ; ) {
        var R = k(S, v).g;
        S = E(S, R.j(v));
        var D = ((0 < S.g.length ? S.g[0] : S.h) >>> 0).toString(P);
        if (((S = R), w(S))) return D + x;
        for (; 6 > D.length; ) D = "0" + D;
        x = D + x;
      }
    }),
    (t.i = function (P) {
      return 0 > P ? 0 : P < this.g.length ? this.g[P] : this.h;
    });
  function w(P) {
    if (P.h != 0) return !1;
    for (var v = 0; v < P.g.length; v++) if (P.g[v] != 0) return !1;
    return !0;
  }
  function C(P) {
    return P.h == -1;
  }
  t.l = function (P) {
    return (P = E(this, P)), C(P) ? -1 : w(P) ? 0 : 1;
  };
  function A(P) {
    for (var v = P.g.length, S = [], x = 0; x < v; x++) S[x] = ~P.g[x];
    return new o(S, ~P.h).add(p);
  }
  (t.abs = function () {
    return C(this) ? A(this) : this;
  }),
    (t.add = function (P) {
      for (
        var v = Math.max(this.g.length, P.g.length), S = [], x = 0, R = 0;
        R <= v;
        R++
      ) {
        var D = x + (this.i(R) & 65535) + (P.i(R) & 65535),
          I = (D >>> 16) + (this.i(R) >>> 16) + (P.i(R) >>> 16);
        (x = I >>> 16), (D &= 65535), (I &= 65535), (S[R] = (I << 16) | D);
      }
      return new o(S, S[S.length - 1] & -2147483648 ? -1 : 0);
    });
  function E(P, v) {
    return P.add(A(v));
  }
  t.j = function (P) {
    if (w(this) || w(P)) return f;
    if (C(this)) return C(P) ? A(this).j(A(P)) : A(A(this).j(P));
    if (C(P)) return A(this.j(A(P)));
    if (0 > this.l(g) && 0 > P.l(g)) return c(this.m() * P.m());
    for (var v = this.g.length + P.g.length, S = [], x = 0; x < 2 * v; x++)
      S[x] = 0;
    for (x = 0; x < this.g.length; x++)
      for (var R = 0; R < P.g.length; R++) {
        var D = this.i(x) >>> 16,
          I = this.i(x) & 65535,
          He = P.i(R) >>> 16,
          ce = P.i(R) & 65535;
        (S[2 * x + 2 * R] += I * ce),
          y(S, 2 * x + 2 * R),
          (S[2 * x + 2 * R + 1] += D * ce),
          y(S, 2 * x + 2 * R + 1),
          (S[2 * x + 2 * R + 1] += I * He),
          y(S, 2 * x + 2 * R + 1),
          (S[2 * x + 2 * R + 2] += D * He),
          y(S, 2 * x + 2 * R + 2);
      }
    for (x = 0; x < v; x++) S[x] = (S[2 * x + 1] << 16) | S[2 * x];
    for (x = v; x < 2 * v; x++) S[x] = 0;
    return new o(S, 0);
  };
  function y(P, v) {
    for (; (P[v] & 65535) != P[v]; )
      (P[v + 1] += P[v] >>> 16), (P[v] &= 65535), v++;
  }
  function T(P, v) {
    (this.g = P), (this.h = v);
  }
  function k(P, v) {
    if (w(v)) throw Error("division by zero");
    if (w(P)) return new T(f, f);
    if (C(P)) return (v = k(A(P), v)), new T(A(v.g), A(v.h));
    if (C(v)) return (v = k(P, A(v))), new T(A(v.g), v.h);
    if (30 < P.g.length) {
      if (C(P) || C(v))
        throw Error("slowDivide_ only works with positive integers.");
      for (var S = p, x = v; 0 >= x.l(P); ) (S = M(S)), (x = M(x));
      var R = j(S, 1),
        D = j(x, 1);
      for (x = j(x, 2), S = j(S, 2); !w(x); ) {
        var I = D.add(x);
        0 >= I.l(P) && ((R = R.add(S)), (D = I)), (x = j(x, 1)), (S = j(S, 1));
      }
      return (v = E(P, R.j(v))), new T(R, v);
    }
    for (R = f; 0 <= P.l(v); ) {
      for (
        S = Math.max(1, Math.floor(P.m() / v.m())),
          x = Math.ceil(Math.log(S) / Math.LN2),
          x = 48 >= x ? 1 : Math.pow(2, x - 48),
          D = c(S),
          I = D.j(v);
        C(I) || 0 < I.l(P);

      )
        (S -= x), (D = c(S)), (I = D.j(v));
      w(D) && (D = p), (R = R.add(D)), (P = E(P, I));
    }
    return new T(R, P);
  }
  (t.A = function (P) {
    return k(this, P).h;
  }),
    (t.and = function (P) {
      for (
        var v = Math.max(this.g.length, P.g.length), S = [], x = 0;
        x < v;
        x++
      )
        S[x] = this.i(x) & P.i(x);
      return new o(S, this.h & P.h);
    }),
    (t.or = function (P) {
      for (
        var v = Math.max(this.g.length, P.g.length), S = [], x = 0;
        x < v;
        x++
      )
        S[x] = this.i(x) | P.i(x);
      return new o(S, this.h | P.h);
    }),
    (t.xor = function (P) {
      for (
        var v = Math.max(this.g.length, P.g.length), S = [], x = 0;
        x < v;
        x++
      )
        S[x] = this.i(x) ^ P.i(x);
      return new o(S, this.h ^ P.h);
    });
  function M(P) {
    for (var v = P.g.length + 1, S = [], x = 0; x < v; x++)
      S[x] = (P.i(x) << 1) | (P.i(x - 1) >>> 31);
    return new o(S, P.h);
  }
  function j(P, v) {
    var S = v >> 5;
    v %= 32;
    for (var x = P.g.length - S, R = [], D = 0; D < x; D++)
      R[D] =
        0 < v ? (P.i(D + S) >>> v) | (P.i(D + S + 1) << (32 - v)) : P.i(D + S);
    return new o(R, P.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (zE = r),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.A),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = c),
    (o.fromString = h),
    (yi = o);
}).apply(
  typeof Kv < "u"
    ? Kv
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
var _l =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var $E, WE, yo, HE, jl, rd, KE, GE, qE;
(function () {
  var t,
    e =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (l, d, m) {
            return (
              l == Array.prototype || l == Object.prototype || (l[d] = m.value),
              l
            );
          };
  function n(l) {
    l = [
      typeof globalThis == "object" && globalThis,
      l,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof _l == "object" && _l,
    ];
    for (var d = 0; d < l.length; ++d) {
      var m = l[d];
      if (m && m.Math == Math) return m;
    }
    throw Error("Cannot find global object");
  }
  var r = n(this);
  function i(l, d) {
    if (d)
      e: {
        var m = r;
        l = l.split(".");
        for (var _ = 0; _ < l.length - 1; _++) {
          var b = l[_];
          if (!(b in m)) break e;
          m = m[b];
        }
        (l = l[l.length - 1]),
          (_ = m[l]),
          (d = d(_)),
          d != _ &&
            d != null &&
            e(m, l, { configurable: !0, writable: !0, value: d });
      }
  }
  function s(l, d) {
    l instanceof String && (l += "");
    var m = 0,
      _ = !1,
      b = {
        next: function () {
          if (!_ && m < l.length) {
            var O = m++;
            return { value: d(O, l[O]), done: !1 };
          }
          return (_ = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (b[Symbol.iterator] = function () {
        return b;
      }),
      b
    );
  }
  i("Array.prototype.values", function (l) {
    return (
      l ||
      function () {
        return s(this, function (d, m) {
          return m;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var o = o || {},
    a = this || self;
  function u(l) {
    var d = typeof l;
    return (
      (d = d != "object" ? d : l ? (Array.isArray(l) ? "array" : d) : "null"),
      d == "array" || (d == "object" && typeof l.length == "number")
    );
  }
  function c(l) {
    var d = typeof l;
    return (d == "object" && l != null) || d == "function";
  }
  function h(l, d, m) {
    return l.call.apply(l.bind, arguments);
  }
  function f(l, d, m) {
    if (!l) throw Error();
    if (2 < arguments.length) {
      var _ = Array.prototype.slice.call(arguments, 2);
      return function () {
        var b = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(b, _), l.apply(d, b);
      };
    }
    return function () {
      return l.apply(d, arguments);
    };
  }
  function p(l, d, m) {
    return (
      (p =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? h
          : f),
      p.apply(null, arguments)
    );
  }
  function g(l, d) {
    var m = Array.prototype.slice.call(arguments, 1);
    return function () {
      var _ = m.slice();
      return _.push.apply(_, arguments), l.apply(this, _);
    };
  }
  function w(l, d) {
    function m() {}
    (m.prototype = d.prototype),
      (l.aa = d.prototype),
      (l.prototype = new m()),
      (l.prototype.constructor = l),
      (l.Qb = function (_, b, O) {
        for (
          var H = Array(arguments.length - 2), xe = 2;
          xe < arguments.length;
          xe++
        )
          H[xe - 2] = arguments[xe];
        return d.prototype[b].apply(_, H);
      });
  }
  function C(l) {
    const d = l.length;
    if (0 < d) {
      const m = Array(d);
      for (let _ = 0; _ < d; _++) m[_] = l[_];
      return m;
    }
    return [];
  }
  function A(l, d) {
    for (let m = 1; m < arguments.length; m++) {
      const _ = arguments[m];
      if (u(_)) {
        const b = l.length || 0,
          O = _.length || 0;
        l.length = b + O;
        for (let H = 0; H < O; H++) l[b + H] = _[H];
      } else l.push(_);
    }
  }
  class E {
    constructor(d, m) {
      (this.i = d), (this.j = m), (this.h = 0), (this.g = null);
    }
    get() {
      let d;
      return (
        0 < this.h
          ? (this.h--, (d = this.g), (this.g = d.next), (d.next = null))
          : (d = this.i()),
        d
      );
    }
  }
  function y(l) {
    return /^[\s\xa0]*$/.test(l);
  }
  function T() {
    var l = a.navigator;
    return l && (l = l.userAgent) ? l : "";
  }
  function k(l) {
    return k[" "](l), l;
  }
  k[" "] = function () {};
  var M =
    T().indexOf("Gecko") != -1 &&
    !(T().toLowerCase().indexOf("webkit") != -1 && T().indexOf("Edge") == -1) &&
    !(T().indexOf("Trident") != -1 || T().indexOf("MSIE") != -1) &&
    T().indexOf("Edge") == -1;
  function j(l, d, m) {
    for (const _ in l) d.call(m, l[_], _, l);
  }
  function P(l, d) {
    for (const m in l) d.call(void 0, l[m], m, l);
  }
  function v(l) {
    const d = {};
    for (const m in l) d[m] = l[m];
    return d;
  }
  const S =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " ",
    );
  function x(l, d) {
    let m, _;
    for (let b = 1; b < arguments.length; b++) {
      _ = arguments[b];
      for (m in _) l[m] = _[m];
      for (let O = 0; O < S.length; O++)
        (m = S[O]), Object.prototype.hasOwnProperty.call(_, m) && (l[m] = _[m]);
    }
  }
  function R(l) {
    var d = 1;
    l = l.split(":");
    const m = [];
    for (; 0 < d && l.length; ) m.push(l.shift()), d--;
    return l.length && m.push(l.join(":")), m;
  }
  function D(l) {
    a.setTimeout(() => {
      throw l;
    }, 0);
  }
  function I() {
    var l = J;
    let d = null;
    return (
      l.g &&
        ((d = l.g), (l.g = l.g.next), l.g || (l.h = null), (d.next = null)),
      d
    );
  }
  class He {
    constructor() {
      this.h = this.g = null;
    }
    add(d, m) {
      const _ = ce.get();
      _.set(d, m), this.h ? (this.h.next = _) : (this.g = _), (this.h = _);
    }
  }
  var ce = new E(
    () => new Ye(),
    (l) => l.reset(),
  );
  class Ye {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(d, m) {
      (this.h = d), (this.g = m), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let ut,
    K = !1,
    J = new He(),
    te = () => {
      const l = a.Promise.resolve(void 0);
      ut = () => {
        l.then(_e);
      };
    };
  var _e = () => {
    for (var l; (l = I()); ) {
      try {
        l.h.call(l.g);
      } catch (m) {
        D(m);
      }
      var d = ce;
      d.j(l), 100 > d.h && (d.h++, (l.next = d.g), (d.g = l));
    }
    K = !1;
  };
  function he() {
    (this.s = this.s), (this.C = this.C);
  }
  (he.prototype.s = !1),
    (he.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (he.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function ye(l, d) {
    (this.type = l), (this.g = this.target = d), (this.defaultPrevented = !1);
  }
  ye.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var jt = (function () {
    if (!a.addEventListener || !Object.defineProperty) return !1;
    var l = !1,
      d = Object.defineProperty({}, "passive", {
        get: function () {
          l = !0;
        },
      });
    try {
      const m = () => {};
      a.addEventListener("test", m, d), a.removeEventListener("test", m, d);
    } catch {}
    return l;
  })();
  function bt(l, d) {
    if (
      (ye.call(this, l ? l.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      l)
    ) {
      var m = (this.type = l.type),
        _ =
          l.changedTouches && l.changedTouches.length
            ? l.changedTouches[0]
            : null;
      if (
        ((this.target = l.target || l.srcElement),
        (this.g = d),
        (d = l.relatedTarget))
      ) {
        if (M) {
          e: {
            try {
              k(d.nodeName);
              var b = !0;
              break e;
            } catch {}
            b = !1;
          }
          b || (d = null);
        }
      } else
        m == "mouseover"
          ? (d = l.fromElement)
          : m == "mouseout" && (d = l.toElement);
      (this.relatedTarget = d),
        _
          ? ((this.clientX = _.clientX !== void 0 ? _.clientX : _.pageX),
            (this.clientY = _.clientY !== void 0 ? _.clientY : _.pageY),
            (this.screenX = _.screenX || 0),
            (this.screenY = _.screenY || 0))
          : ((this.clientX = l.clientX !== void 0 ? l.clientX : l.pageX),
            (this.clientY = l.clientY !== void 0 ? l.clientY : l.pageY),
            (this.screenX = l.screenX || 0),
            (this.screenY = l.screenY || 0)),
        (this.button = l.button),
        (this.key = l.key || ""),
        (this.ctrlKey = l.ctrlKey),
        (this.altKey = l.altKey),
        (this.shiftKey = l.shiftKey),
        (this.metaKey = l.metaKey),
        (this.pointerId = l.pointerId || 0),
        (this.pointerType =
          typeof l.pointerType == "string"
            ? l.pointerType
            : wt[l.pointerType] || ""),
        (this.state = l.state),
        (this.i = l),
        l.defaultPrevented && bt.aa.h.call(this);
    }
  }
  w(bt, ye);
  var wt = { 2: "touch", 3: "pen", 4: "mouse" };
  bt.prototype.h = function () {
    bt.aa.h.call(this);
    var l = this.i;
    l.preventDefault ? l.preventDefault() : (l.returnValue = !1);
  };
  var Bt = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    L = 0;
  function B(l, d, m, _, b) {
    (this.listener = l),
      (this.proxy = null),
      (this.src = d),
      (this.type = m),
      (this.capture = !!_),
      (this.ha = b),
      (this.key = ++L),
      (this.da = this.fa = !1);
  }
  function $(l) {
    (l.da = !0),
      (l.listener = null),
      (l.proxy = null),
      (l.src = null),
      (l.ha = null);
  }
  function F(l) {
    (this.src = l), (this.g = {}), (this.h = 0);
  }
  F.prototype.add = function (l, d, m, _, b) {
    var O = l.toString();
    (l = this.g[O]), l || ((l = this.g[O] = []), this.h++);
    var H = G(l, d, _, b);
    return (
      -1 < H
        ? ((d = l[H]), m || (d.fa = !1))
        : ((d = new B(d, this.src, O, !!_, b)), (d.fa = m), l.push(d)),
      d
    );
  };
  function ae(l, d) {
    var m = d.type;
    if (m in l.g) {
      var _ = l.g[m],
        b = Array.prototype.indexOf.call(_, d, void 0),
        O;
      (O = 0 <= b) && Array.prototype.splice.call(_, b, 1),
        O && ($(d), l.g[m].length == 0 && (delete l.g[m], l.h--));
    }
  }
  function G(l, d, m, _) {
    for (var b = 0; b < l.length; ++b) {
      var O = l[b];
      if (!O.da && O.listener == d && O.capture == !!m && O.ha == _) return b;
    }
    return -1;
  }
  var ee = "closure_lm_" + ((1e6 * Math.random()) | 0),
    me = {};
  function le(l, d, m, _, b) {
    if (Array.isArray(d)) {
      for (var O = 0; O < d.length; O++) le(l, d[O], m, _, b);
      return null;
    }
    return (
      (m = qt(m)),
      l && l[Bt]
        ? l.K(d, m, c(_) ? !!_.capture : !!_, b)
        : we(l, d, m, !1, _, b)
    );
  }
  function we(l, d, m, _, b, O) {
    if (!d) throw Error("Invalid event type");
    var H = c(b) ? !!b.capture : !!b,
      xe = Ge(l);
    if ((xe || (l[ee] = xe = new F(l)), (m = xe.add(d, m, _, H, O)), m.proxy))
      return m;
    if (
      ((_ = Ke()),
      (m.proxy = _),
      (_.src = l),
      (_.listener = m),
      l.addEventListener)
    )
      jt || (b = H),
        b === void 0 && (b = !1),
        l.addEventListener(d.toString(), _, b);
    else if (l.attachEvent) l.attachEvent(Ln(d.toString()), _);
    else if (l.addListener && l.removeListener) l.addListener(_);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return m;
  }
  function Ke() {
    function l(m) {
      return d.call(l.src, l.listener, m);
    }
    const d = sr;
    return l;
  }
  function Se(l, d, m, _, b) {
    if (Array.isArray(d))
      for (var O = 0; O < d.length; O++) Se(l, d[O], m, _, b);
    else
      (_ = c(_) ? !!_.capture : !!_),
        (m = qt(m)),
        l && l[Bt]
          ? ((l = l.i),
            (d = String(d).toString()),
            d in l.g &&
              ((O = l.g[d]),
              (m = G(O, m, _, b)),
              -1 < m &&
                ($(O[m]),
                Array.prototype.splice.call(O, m, 1),
                O.length == 0 && (delete l.g[d], l.h--))))
          : l &&
            (l = Ge(l)) &&
            ((d = l.g[d.toString()]),
            (l = -1),
            d && (l = G(d, m, _, b)),
            (m = -1 < l ? d[l] : null) && Ne(m));
  }
  function Ne(l) {
    if (typeof l != "number" && l && !l.da) {
      var d = l.src;
      if (d && d[Bt]) ae(d.i, l);
      else {
        var m = l.type,
          _ = l.proxy;
        d.removeEventListener
          ? d.removeEventListener(m, _, l.capture)
          : d.detachEvent
            ? d.detachEvent(Ln(m), _)
            : d.addListener && d.removeListener && d.removeListener(_),
          (m = Ge(d))
            ? (ae(m, l), m.h == 0 && ((m.src = null), (d[ee] = null)))
            : $(l);
      }
    }
  }
  function Ln(l) {
    return l in me ? me[l] : (me[l] = "on" + l);
  }
  function sr(l, d) {
    if (l.da) l = !0;
    else {
      d = new bt(d, this);
      var m = l.listener,
        _ = l.ha || l.src;
      l.fa && Ne(l), (l = m.call(_, d));
    }
    return l;
  }
  function Ge(l) {
    return (l = l[ee]), l instanceof F ? l : null;
  }
  var Gt = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function qt(l) {
    return typeof l == "function"
      ? l
      : (l[Gt] ||
          (l[Gt] = function (d) {
            return l.handleEvent(d);
          }),
        l[Gt]);
  }
  function Ee() {
    he.call(this), (this.i = new F(this)), (this.M = this), (this.F = null);
  }
  w(Ee, he),
    (Ee.prototype[Bt] = !0),
    (Ee.prototype.removeEventListener = function (l, d, m, _) {
      Se(this, l, d, m, _);
    });
  function Ue(l, d) {
    var m,
      _ = l.F;
    if (_) for (m = []; _; _ = _.F) m.push(_);
    if (((l = l.M), (_ = d.type || d), typeof d == "string")) d = new ye(d, l);
    else if (d instanceof ye) d.target = d.target || l;
    else {
      var b = d;
      (d = new ye(_, l)), x(d, b);
    }
    if (((b = !0), m))
      for (var O = m.length - 1; 0 <= O; O--) {
        var H = (d.g = m[O]);
        b = Tn(H, _, !0, d) && b;
      }
    if (
      ((H = d.g = l), (b = Tn(H, _, !0, d) && b), (b = Tn(H, _, !1, d) && b), m)
    )
      for (O = 0; O < m.length; O++)
        (H = d.g = m[O]), (b = Tn(H, _, !1, d) && b);
  }
  (Ee.prototype.N = function () {
    if ((Ee.aa.N.call(this), this.i)) {
      var l = this.i,
        d;
      for (d in l.g) {
        for (var m = l.g[d], _ = 0; _ < m.length; _++) $(m[_]);
        delete l.g[d], l.h--;
      }
    }
    this.F = null;
  }),
    (Ee.prototype.K = function (l, d, m, _) {
      return this.i.add(String(l), d, !1, m, _);
    }),
    (Ee.prototype.L = function (l, d, m, _) {
      return this.i.add(String(l), d, !0, m, _);
    });
  function Tn(l, d, m, _) {
    if (((d = l.i.g[String(d)]), !d)) return !0;
    d = d.concat();
    for (var b = !0, O = 0; O < d.length; ++O) {
      var H = d[O];
      if (H && !H.da && H.capture == m) {
        var xe = H.listener,
          ct = H.ha || H.src;
        H.fa && ae(l.i, H), (b = xe.call(ct, _) !== !1 && b);
      }
    }
    return b && !_.defaultPrevented;
  }
  function Jr(l, d, m) {
    if (typeof l == "function") m && (l = p(l, m));
    else if (l && typeof l.handleEvent == "function") l = p(l.handleEvent, l);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(d) ? -1 : a.setTimeout(l, d || 0);
  }
  function Fn(l) {
    l.g = Jr(() => {
      (l.g = null), l.i && ((l.i = !1), Fn(l));
    }, l.l);
    const d = l.h;
    (l.h = null), l.m.apply(null, d);
  }
  class jn extends he {
    constructor(d, m) {
      super(),
        (this.m = d),
        (this.l = m),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(d) {
      (this.h = arguments), this.g ? (this.i = !0) : Fn(this);
    }
    N() {
      super.N(),
        this.g &&
          (a.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function Sn(l) {
    he.call(this), (this.h = l), (this.g = {});
  }
  w(Sn, he);
  var Da = [];
  function Fs(l) {
    j(
      l.g,
      function (d, m) {
        this.g.hasOwnProperty(m) && Ne(d);
      },
      l,
    ),
      (l.g = {});
  }
  (Sn.prototype.N = function () {
    Sn.aa.N.call(this), Fs(this);
  }),
    (Sn.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    });
  var js = a.JSON.stringify,
    Ic = a.JSON.parse,
    ba = class {
      stringify(l) {
        return a.JSON.stringify(l, void 0);
      }
      parse(l) {
        return a.JSON.parse(l, void 0);
      }
    };
  function Bs() {}
  Bs.prototype.h = null;
  function Na(l) {
    return l.h || (l.h = l.i());
  }
  function Oa() {}
  var Oe = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function se() {
    ye.call(this, "d");
  }
  w(se, ye);
  function it() {
    ye.call(this, "c");
  }
  w(it, ye);
  var Ae = {},
    Pn = null;
  function xn() {
    return (Pn = Pn || new Ee());
  }
  Ae.La = "serverreachability";
  function mm(l) {
    ye.call(this, Ae.La, l);
  }
  w(mm, ye);
  function Us(l) {
    const d = xn();
    Ue(d, new mm(d));
  }
  Ae.STAT_EVENT = "statevent";
  function gm(l, d) {
    ye.call(this, Ae.STAT_EVENT, l), (this.stat = d);
  }
  w(gm, ye);
  function Nt(l) {
    const d = xn();
    Ue(d, new gm(d, l));
  }
  Ae.Ma = "timingevent";
  function ym(l, d) {
    ye.call(this, Ae.Ma, l), (this.size = d);
  }
  w(ym, ye);
  function zs(l, d) {
    if (typeof l != "function")
      throw Error("Fn must not be null and must be a function");
    return a.setTimeout(function () {
      l();
    }, d);
  }
  function $s() {
    this.g = !0;
  }
  $s.prototype.xa = function () {
    this.g = !1;
  };
  function dS(l, d, m, _, b, O) {
    l.info(function () {
      if (l.g)
        if (O)
          for (var H = "", xe = O.split("&"), ct = 0; ct < xe.length; ct++) {
            var ge = xe[ct].split("=");
            if (1 < ge.length) {
              var Et = ge[0];
              ge = ge[1];
              var Tt = Et.split("_");
              H =
                2 <= Tt.length && Tt[1] == "type"
                  ? H + (Et + "=" + ge + "&")
                  : H + (Et + "=redacted&");
            }
          }
        else H = null;
      else H = O;
      return (
        "XMLHTTP REQ (" +
        _ +
        ") [attempt " +
        b +
        "]: " +
        d +
        `
` +
        m +
        `
` +
        H
      );
    });
  }
  function pS(l, d, m, _, b, O, H) {
    l.info(function () {
      return (
        "XMLHTTP RESP (" +
        _ +
        ") [ attempt " +
        b +
        "]: " +
        d +
        `
` +
        m +
        `
` +
        O +
        " " +
        H
      );
    });
  }
  function Di(l, d, m, _) {
    l.info(function () {
      return "XMLHTTP TEXT (" + d + "): " + gS(l, m) + (_ ? " " + _ : "");
    });
  }
  function mS(l, d) {
    l.info(function () {
      return "TIMEOUT: " + d;
    });
  }
  $s.prototype.info = function () {};
  function gS(l, d) {
    if (!l.g) return d;
    if (!d) return null;
    try {
      var m = JSON.parse(d);
      if (m) {
        for (l = 0; l < m.length; l++)
          if (Array.isArray(m[l])) {
            var _ = m[l];
            if (!(2 > _.length)) {
              var b = _[1];
              if (Array.isArray(b) && !(1 > b.length)) {
                var O = b[0];
                if (O != "noop" && O != "stop" && O != "close")
                  for (var H = 1; H < b.length; H++) b[H] = "";
              }
            }
          }
      }
      return js(m);
    } catch {
      return d;
    }
  }
  var Ma = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    vm = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress",
    },
    Rc;
  function La() {}
  w(La, Bs),
    (La.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (La.prototype.i = function () {
      return {};
    }),
    (Rc = new La());
  function or(l, d, m, _) {
    (this.j = l),
      (this.i = d),
      (this.l = m),
      (this.R = _ || 1),
      (this.U = new Sn(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new _m());
  }
  function _m() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  var wm = {},
    kc = {};
  function Vc(l, d, m) {
    (l.L = 1), (l.v = Ua(Bn(d))), (l.m = m), (l.P = !0), Em(l, null);
  }
  function Em(l, d) {
    (l.F = Date.now()), Fa(l), (l.A = Bn(l.v));
    var m = l.A,
      _ = l.R;
    Array.isArray(_) || (_ = [String(_)]),
      Om(m.i, "t", _),
      (l.C = 0),
      (m = l.j.J),
      (l.h = new _m()),
      (l.g = Zm(l.j, m ? d : null, !l.m)),
      0 < l.O && (l.M = new jn(p(l.Y, l, l.g), l.O)),
      (d = l.U),
      (m = l.g),
      (_ = l.ca);
    var b = "readystatechange";
    Array.isArray(b) || (b && (Da[0] = b.toString()), (b = Da));
    for (var O = 0; O < b.length; O++) {
      var H = le(m, b[O], _ || d.handleEvent, !1, d.h || d);
      if (!H) break;
      d.g[H.key] = H;
    }
    (d = l.H ? v(l.H) : {}),
      l.m
        ? (l.u || (l.u = "POST"),
          (d["Content-Type"] = "application/x-www-form-urlencoded"),
          l.g.ea(l.A, l.u, l.m, d))
        : ((l.u = "GET"), l.g.ea(l.A, l.u, null, d)),
      Us(),
      dS(l.i, l.u, l.A, l.l, l.R, l.m);
  }
  (or.prototype.ca = function (l) {
    l = l.target;
    const d = this.M;
    d && Un(l) == 3 ? d.j() : this.Y(l);
  }),
    (or.prototype.Y = function (l) {
      try {
        if (l == this.g)
          e: {
            const Tt = Un(this.g);
            var d = this.g.Ba();
            const Oi = this.g.Z();
            if (
              !(3 > Tt) &&
              (Tt != 3 || (this.g && (this.h.h || this.g.oa() || zm(this.g))))
            ) {
              this.J ||
                Tt != 4 ||
                d == 7 ||
                (d == 8 || 0 >= Oi ? Us(3) : Us(2)),
                Dc(this);
              var m = this.g.Z();
              this.X = m;
              t: if (Tm(this)) {
                var _ = zm(this.g);
                l = "";
                var b = _.length,
                  O = Un(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    Zr(this), Ws(this);
                    var H = "";
                    break t;
                  }
                  this.h.i = new a.TextDecoder();
                }
                for (d = 0; d < b; d++)
                  (this.h.h = !0),
                    (l += this.h.i.decode(_[d], {
                      stream: !(O && d == b - 1),
                    }));
                (_.length = 0), (this.h.g += l), (this.C = 0), (H = this.h.g);
              } else H = this.g.oa();
              if (
                ((this.o = m == 200),
                pS(this.i, this.u, this.A, this.l, this.R, Tt, m),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var xe,
                        ct = this.g;
                      if (
                        (xe = ct.g
                          ? ct.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !y(xe)
                      ) {
                        var ge = xe;
                        break t;
                      }
                    }
                    ge = null;
                  }
                  if ((m = ge))
                    Di(
                      this.i,
                      this.l,
                      m,
                      "Initial handshake response via X-HTTP-Initial-Response",
                    ),
                      (this.K = !0),
                      bc(this, m);
                  else {
                    (this.o = !1), (this.s = 3), Nt(12), Zr(this), Ws(this);
                    break e;
                  }
                }
                if (this.P) {
                  m = !0;
                  let pn;
                  for (; !this.J && this.C < H.length; )
                    if (((pn = yS(this, H)), pn == kc)) {
                      Tt == 4 && ((this.s = 4), Nt(14), (m = !1)),
                        Di(this.i, this.l, null, "[Incomplete Response]");
                      break;
                    } else if (pn == wm) {
                      (this.s = 4),
                        Nt(15),
                        Di(this.i, this.l, H, "[Invalid Chunk]"),
                        (m = !1);
                      break;
                    } else Di(this.i, this.l, pn, null), bc(this, pn);
                  if (
                    (Tm(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    Tt != 4 ||
                      H.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), Nt(16), (m = !1)),
                    (this.o = this.o && m),
                    !m)
                  )
                    Di(this.i, this.l, H, "[Invalid Chunked Response]"),
                      Zr(this),
                      Ws(this);
                  else if (0 < H.length && !this.W) {
                    this.W = !0;
                    var Et = this.j;
                    Et.g == this &&
                      Et.ba &&
                      !Et.M &&
                      (Et.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          H.length,
                      ),
                      jc(Et),
                      (Et.M = !0),
                      Nt(11));
                  }
                } else Di(this.i, this.l, H, null), bc(this, H);
                Tt == 4 && Zr(this),
                  this.o &&
                    !this.J &&
                    (Tt == 4 ? Qm(this.j, this) : ((this.o = !1), Fa(this)));
              } else
                NS(this.g),
                  m == 400 && 0 < H.indexOf("Unknown SID")
                    ? ((this.s = 3), Nt(12))
                    : ((this.s = 0), Nt(13)),
                  Zr(this),
                  Ws(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function Tm(l) {
    return l.g ? l.u == "GET" && l.L != 2 && l.j.Ca : !1;
  }
  function yS(l, d) {
    var m = l.C,
      _ = d.indexOf(
        `
`,
        m,
      );
    return _ == -1
      ? kc
      : ((m = Number(d.substring(m, _))),
        isNaN(m)
          ? wm
          : ((_ += 1),
            _ + m > d.length
              ? kc
              : ((d = d.slice(_, _ + m)), (l.C = _ + m), d)));
  }
  or.prototype.cancel = function () {
    (this.J = !0), Zr(this);
  };
  function Fa(l) {
    (l.S = Date.now() + l.I), Sm(l, l.I);
  }
  function Sm(l, d) {
    if (l.B != null) throw Error("WatchDog timer not null");
    l.B = zs(p(l.ba, l), d);
  }
  function Dc(l) {
    l.B && (a.clearTimeout(l.B), (l.B = null));
  }
  or.prototype.ba = function () {
    this.B = null;
    const l = Date.now();
    0 <= l - this.S
      ? (mS(this.i, this.A),
        this.L != 2 && (Us(), Nt(17)),
        Zr(this),
        (this.s = 2),
        Ws(this))
      : Sm(this, this.S - l);
  };
  function Ws(l) {
    l.j.G == 0 || l.J || Qm(l.j, l);
  }
  function Zr(l) {
    Dc(l);
    var d = l.M;
    d && typeof d.ma == "function" && d.ma(),
      (l.M = null),
      Fs(l.U),
      l.g && ((d = l.g), (l.g = null), d.abort(), d.ma());
  }
  function bc(l, d) {
    try {
      var m = l.j;
      if (m.G != 0 && (m.g == l || Nc(m.h, l))) {
        if (!l.K && Nc(m.h, l) && m.G == 3) {
          try {
            var _ = m.Da.g.parse(d);
          } catch {
            _ = null;
          }
          if (Array.isArray(_) && _.length == 3) {
            var b = _;
            if (b[0] == 0) {
              e: if (!m.u) {
                if (m.g)
                  if (m.g.F + 3e3 < l.F) Ka(m), Wa(m);
                  else break e;
                Fc(m), Nt(18);
              }
            } else
              (m.za = b[1]),
                0 < m.za - m.T &&
                  37500 > b[2] &&
                  m.F &&
                  m.v == 0 &&
                  !m.C &&
                  (m.C = zs(p(m.Za, m), 6e3));
            if (1 >= Cm(m.h) && m.ca) {
              try {
                m.ca();
              } catch {}
              m.ca = void 0;
            }
          } else ti(m, 11);
        } else if (((l.K || m.g == l) && Ka(m), !y(d)))
          for (b = m.Da.g.parse(d), d = 0; d < b.length; d++) {
            let ge = b[d];
            if (((m.T = ge[0]), (ge = ge[1]), m.G == 2))
              if (ge[0] == "c") {
                (m.K = ge[1]), (m.ia = ge[2]);
                const Et = ge[3];
                Et != null && ((m.la = Et), m.j.info("VER=" + m.la));
                const Tt = ge[4];
                Tt != null && ((m.Aa = Tt), m.j.info("SVER=" + m.Aa));
                const Oi = ge[5];
                Oi != null &&
                  typeof Oi == "number" &&
                  0 < Oi &&
                  ((_ = 1.5 * Oi),
                  (m.L = _),
                  m.j.info("backChannelRequestTimeoutMs_=" + _)),
                  (_ = m);
                const pn = l.g;
                if (pn) {
                  const qa = pn.g
                    ? pn.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (qa) {
                    var O = _.h;
                    O.g ||
                      (qa.indexOf("spdy") == -1 &&
                        qa.indexOf("quic") == -1 &&
                        qa.indexOf("h2") == -1) ||
                      ((O.j = O.l),
                      (O.g = new Set()),
                      O.h && (Oc(O, O.h), (O.h = null)));
                  }
                  if (_.D) {
                    const Bc = pn.g
                      ? pn.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    Bc && ((_.ya = Bc), Re(_.I, _.D, Bc));
                  }
                }
                (m.G = 3),
                  m.l && m.l.ua(),
                  m.ba &&
                    ((m.R = Date.now() - l.F),
                    m.j.info("Handshake RTT: " + m.R + "ms")),
                  (_ = m);
                var H = l;
                if (((_.qa = Jm(_, _.J ? _.ia : null, _.W)), H.K)) {
                  Am(_.h, H);
                  var xe = H,
                    ct = _.L;
                  ct && (xe.I = ct), xe.B && (Dc(xe), Fa(xe)), (_.g = H);
                } else Gm(_);
                0 < m.i.length && Ha(m);
              } else (ge[0] != "stop" && ge[0] != "close") || ti(m, 7);
            else
              m.G == 3 &&
                (ge[0] == "stop" || ge[0] == "close"
                  ? ge[0] == "stop"
                    ? ti(m, 7)
                    : Lc(m)
                  : ge[0] != "noop" && m.l && m.l.ta(ge),
                (m.v = 0));
          }
      }
      Us(4);
    } catch {}
  }
  var vS = class {
    constructor(l, d) {
      (this.g = l), (this.map = d);
    }
  };
  function Pm(l) {
    (this.l = l || 10),
      a.PerformanceNavigationTiming
        ? ((l = a.performance.getEntriesByType("navigation")),
          (l =
            0 < l.length &&
            (l[0].nextHopProtocol == "hq" || l[0].nextHopProtocol == "h2")))
        : (l = !!(
            a.chrome &&
            a.chrome.loadTimes &&
            a.chrome.loadTimes() &&
            a.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = l ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function xm(l) {
    return l.h ? !0 : l.g ? l.g.size >= l.j : !1;
  }
  function Cm(l) {
    return l.h ? 1 : l.g ? l.g.size : 0;
  }
  function Nc(l, d) {
    return l.h ? l.h == d : l.g ? l.g.has(d) : !1;
  }
  function Oc(l, d) {
    l.g ? l.g.add(d) : (l.h = d);
  }
  function Am(l, d) {
    l.h && l.h == d ? (l.h = null) : l.g && l.g.has(d) && l.g.delete(d);
  }
  Pm.prototype.cancel = function () {
    if (((this.i = Im(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const l of this.g.values()) l.cancel();
      this.g.clear();
    }
  };
  function Im(l) {
    if (l.h != null) return l.i.concat(l.h.D);
    if (l.g != null && l.g.size !== 0) {
      let d = l.i;
      for (const m of l.g.values()) d = d.concat(m.D);
      return d;
    }
    return C(l.i);
  }
  function _S(l) {
    if (l.V && typeof l.V == "function") return l.V();
    if (
      (typeof Map < "u" && l instanceof Map) ||
      (typeof Set < "u" && l instanceof Set)
    )
      return Array.from(l.values());
    if (typeof l == "string") return l.split("");
    if (u(l)) {
      for (var d = [], m = l.length, _ = 0; _ < m; _++) d.push(l[_]);
      return d;
    }
    (d = []), (m = 0);
    for (_ in l) d[m++] = l[_];
    return d;
  }
  function wS(l) {
    if (l.na && typeof l.na == "function") return l.na();
    if (!l.V || typeof l.V != "function") {
      if (typeof Map < "u" && l instanceof Map) return Array.from(l.keys());
      if (!(typeof Set < "u" && l instanceof Set)) {
        if (u(l) || typeof l == "string") {
          var d = [];
          l = l.length;
          for (var m = 0; m < l; m++) d.push(m);
          return d;
        }
        (d = []), (m = 0);
        for (const _ in l) d[m++] = _;
        return d;
      }
    }
  }
  function Rm(l, d) {
    if (l.forEach && typeof l.forEach == "function") l.forEach(d, void 0);
    else if (u(l) || typeof l == "string")
      Array.prototype.forEach.call(l, d, void 0);
    else
      for (var m = wS(l), _ = _S(l), b = _.length, O = 0; O < b; O++)
        d.call(void 0, _[O], m && m[O], l);
  }
  var km = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
  );
  function ES(l, d) {
    if (l) {
      l = l.split("&");
      for (var m = 0; m < l.length; m++) {
        var _ = l[m].indexOf("="),
          b = null;
        if (0 <= _) {
          var O = l[m].substring(0, _);
          b = l[m].substring(_ + 1);
        } else O = l[m];
        d(O, b ? decodeURIComponent(b.replace(/\+/g, " ")) : "");
      }
    }
  }
  function ei(l) {
    if (
      ((this.g = this.o = this.j = ""),
      (this.s = null),
      (this.m = this.l = ""),
      (this.h = !1),
      l instanceof ei)
    ) {
      (this.h = l.h),
        ja(this, l.j),
        (this.o = l.o),
        (this.g = l.g),
        Ba(this, l.s),
        (this.l = l.l);
      var d = l.i,
        m = new Gs();
      (m.i = d.i),
        d.g && ((m.g = new Map(d.g)), (m.h = d.h)),
        Vm(this, m),
        (this.m = l.m);
    } else
      l && (d = String(l).match(km))
        ? ((this.h = !1),
          ja(this, d[1] || "", !0),
          (this.o = Hs(d[2] || "")),
          (this.g = Hs(d[3] || "", !0)),
          Ba(this, d[4]),
          (this.l = Hs(d[5] || "", !0)),
          Vm(this, d[6] || "", !0),
          (this.m = Hs(d[7] || "")))
        : ((this.h = !1), (this.i = new Gs(null, this.h)));
  }
  ei.prototype.toString = function () {
    var l = [],
      d = this.j;
    d && l.push(Ks(d, Dm, !0), ":");
    var m = this.g;
    return (
      (m || d == "file") &&
        (l.push("//"),
        (d = this.o) && l.push(Ks(d, Dm, !0), "@"),
        l.push(
          encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
        ),
        (m = this.s),
        m != null && l.push(":", String(m))),
      (m = this.l) &&
        (this.g && m.charAt(0) != "/" && l.push("/"),
        l.push(Ks(m, m.charAt(0) == "/" ? PS : SS, !0))),
      (m = this.i.toString()) && l.push("?", m),
      (m = this.m) && l.push("#", Ks(m, CS)),
      l.join("")
    );
  };
  function Bn(l) {
    return new ei(l);
  }
  function ja(l, d, m) {
    (l.j = m ? Hs(d, !0) : d), l.j && (l.j = l.j.replace(/:$/, ""));
  }
  function Ba(l, d) {
    if (d) {
      if (((d = Number(d)), isNaN(d) || 0 > d))
        throw Error("Bad port number " + d);
      l.s = d;
    } else l.s = null;
  }
  function Vm(l, d, m) {
    d instanceof Gs
      ? ((l.i = d), AS(l.i, l.h))
      : (m || (d = Ks(d, xS)), (l.i = new Gs(d, l.h)));
  }
  function Re(l, d, m) {
    l.i.set(d, m);
  }
  function Ua(l) {
    return (
      Re(
        l,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now(),
          ).toString(36),
      ),
      l
    );
  }
  function Hs(l, d) {
    return l
      ? d
        ? decodeURI(l.replace(/%25/g, "%2525"))
        : decodeURIComponent(l)
      : "";
  }
  function Ks(l, d, m) {
    return typeof l == "string"
      ? ((l = encodeURI(l).replace(d, TS)),
        m && (l = l.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        l)
      : null;
  }
  function TS(l) {
    return (
      (l = l.charCodeAt(0)),
      "%" + ((l >> 4) & 15).toString(16) + (l & 15).toString(16)
    );
  }
  var Dm = /[#\/\?@]/g,
    SS = /[#\?:]/g,
    PS = /[#\?]/g,
    xS = /[#\?@]/g,
    CS = /#/g;
  function Gs(l, d) {
    (this.h = this.g = null), (this.i = l || null), (this.j = !!d);
  }
  function ar(l) {
    l.g ||
      ((l.g = new Map()),
      (l.h = 0),
      l.i &&
        ES(l.i, function (d, m) {
          l.add(decodeURIComponent(d.replace(/\+/g, " ")), m);
        }));
  }
  (t = Gs.prototype),
    (t.add = function (l, d) {
      ar(this), (this.i = null), (l = bi(this, l));
      var m = this.g.get(l);
      return m || this.g.set(l, (m = [])), m.push(d), (this.h += 1), this;
    });
  function bm(l, d) {
    ar(l),
      (d = bi(l, d)),
      l.g.has(d) && ((l.i = null), (l.h -= l.g.get(d).length), l.g.delete(d));
  }
  function Nm(l, d) {
    return ar(l), (d = bi(l, d)), l.g.has(d);
  }
  (t.forEach = function (l, d) {
    ar(this),
      this.g.forEach(function (m, _) {
        m.forEach(function (b) {
          l.call(d, b, _, this);
        }, this);
      }, this);
  }),
    (t.na = function () {
      ar(this);
      const l = Array.from(this.g.values()),
        d = Array.from(this.g.keys()),
        m = [];
      for (let _ = 0; _ < d.length; _++) {
        const b = l[_];
        for (let O = 0; O < b.length; O++) m.push(d[_]);
      }
      return m;
    }),
    (t.V = function (l) {
      ar(this);
      let d = [];
      if (typeof l == "string")
        Nm(this, l) && (d = d.concat(this.g.get(bi(this, l))));
      else {
        l = Array.from(this.g.values());
        for (let m = 0; m < l.length; m++) d = d.concat(l[m]);
      }
      return d;
    }),
    (t.set = function (l, d) {
      return (
        ar(this),
        (this.i = null),
        (l = bi(this, l)),
        Nm(this, l) && (this.h -= this.g.get(l).length),
        this.g.set(l, [d]),
        (this.h += 1),
        this
      );
    }),
    (t.get = function (l, d) {
      return l ? ((l = this.V(l)), 0 < l.length ? String(l[0]) : d) : d;
    });
  function Om(l, d, m) {
    bm(l, d),
      0 < m.length &&
        ((l.i = null), l.g.set(bi(l, d), C(m)), (l.h += m.length));
  }
  t.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const l = [],
      d = Array.from(this.g.keys());
    for (var m = 0; m < d.length; m++) {
      var _ = d[m];
      const O = encodeURIComponent(String(_)),
        H = this.V(_);
      for (_ = 0; _ < H.length; _++) {
        var b = O;
        H[_] !== "" && (b += "=" + encodeURIComponent(String(H[_]))), l.push(b);
      }
    }
    return (this.i = l.join("&"));
  };
  function bi(l, d) {
    return (d = String(d)), l.j && (d = d.toLowerCase()), d;
  }
  function AS(l, d) {
    d &&
      !l.j &&
      (ar(l),
      (l.i = null),
      l.g.forEach(function (m, _) {
        var b = _.toLowerCase();
        _ != b && (bm(this, _), Om(this, b, m));
      }, l)),
      (l.j = d);
  }
  function IS(l, d) {
    const m = new $s();
    if (a.Image) {
      const _ = new Image();
      (_.onload = g(lr, m, "TestLoadImage: loaded", !0, d, _)),
        (_.onerror = g(lr, m, "TestLoadImage: error", !1, d, _)),
        (_.onabort = g(lr, m, "TestLoadImage: abort", !1, d, _)),
        (_.ontimeout = g(lr, m, "TestLoadImage: timeout", !1, d, _)),
        a.setTimeout(function () {
          _.ontimeout && _.ontimeout();
        }, 1e4),
        (_.src = l);
    } else d(!1);
  }
  function RS(l, d) {
    const m = new $s(),
      _ = new AbortController(),
      b = setTimeout(() => {
        _.abort(), lr(m, "TestPingServer: timeout", !1, d);
      }, 1e4);
    fetch(l, { signal: _.signal })
      .then((O) => {
        clearTimeout(b),
          O.ok
            ? lr(m, "TestPingServer: ok", !0, d)
            : lr(m, "TestPingServer: server error", !1, d);
      })
      .catch(() => {
        clearTimeout(b), lr(m, "TestPingServer: error", !1, d);
      });
  }
  function lr(l, d, m, _, b) {
    try {
      b &&
        ((b.onload = null),
        (b.onerror = null),
        (b.onabort = null),
        (b.ontimeout = null)),
        _(m);
    } catch {}
  }
  function kS() {
    this.g = new ba();
  }
  function VS(l, d, m) {
    const _ = m || "";
    try {
      Rm(l, function (b, O) {
        let H = b;
        c(b) && (H = js(b)), d.push(_ + O + "=" + encodeURIComponent(H));
      });
    } catch (b) {
      throw (d.push(_ + "type=" + encodeURIComponent("_badmap")), b);
    }
  }
  function qs(l) {
    (this.l = l.Ub || null), (this.j = l.eb || !1);
  }
  w(qs, Bs),
    (qs.prototype.g = function () {
      return new za(this.l, this.j);
    }),
    (qs.prototype.i = (function (l) {
      return function () {
        return l;
      };
    })({}));
  function za(l, d) {
    Ee.call(this),
      (this.D = l),
      (this.o = d),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = "GET"),
      (this.A = ""),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  w(za, Ee),
    (t = za.prototype),
    (t.open = function (l, d) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      (this.B = l), (this.A = d), (this.readyState = 1), Ys(this);
    }),
    (t.send = function (l) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      const d = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      l && (d.body = l),
        (this.D || a)
          .fetch(new Request(this.A, d))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (t.abort = function () {
      (this.response = this.responseText = ""),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Qs(this)),
        (this.readyState = 0);
    }),
    (t.Sa = function (l) {
      if (
        this.g &&
        ((this.l = l),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = l.headers),
          (this.readyState = 2),
          Ys(this)),
        this.g && ((this.readyState = 3), Ys(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          l.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof a.ReadableStream < "u" && "body" in l) {
          if (((this.j = l.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.',
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.v = new TextDecoder());
          Mm(this);
        } else l.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function Mm(l) {
    l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l));
  }
  (t.Pa = function (l) {
    if (this.g) {
      if (this.o && l.value) this.response.push(l.value);
      else if (!this.o) {
        var d = l.value ? l.value : new Uint8Array(0);
        (d = this.v.decode(d, { stream: !l.done })) &&
          (this.response = this.responseText += d);
      }
      l.done ? Qs(this) : Ys(this), this.readyState == 3 && Mm(this);
    }
  }),
    (t.Ra = function (l) {
      this.g && ((this.response = this.responseText = l), Qs(this));
    }),
    (t.Qa = function (l) {
      this.g && ((this.response = l), Qs(this));
    }),
    (t.ga = function () {
      this.g && Qs(this);
    });
  function Qs(l) {
    (l.readyState = 4), (l.l = null), (l.j = null), (l.v = null), Ys(l);
  }
  (t.setRequestHeader = function (l, d) {
    this.u.append(l, d);
  }),
    (t.getResponseHeader = function (l) {
      return (this.h && this.h.get(l.toLowerCase())) || "";
    }),
    (t.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const l = [],
        d = this.h.entries();
      for (var m = d.next(); !m.done; )
        (m = m.value), l.push(m[0] + ": " + m[1]), (m = d.next());
      return l.join(`\r
`);
    });
  function Ys(l) {
    l.onreadystatechange && l.onreadystatechange.call(l);
  }
  Object.defineProperty(za.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (l) {
      this.m = l ? "include" : "same-origin";
    },
  });
  function Lm(l) {
    let d = "";
    return (
      j(l, function (m, _) {
        (d += _),
          (d += ":"),
          (d += m),
          (d += `\r
`);
      }),
      d
    );
  }
  function Mc(l, d, m) {
    e: {
      for (_ in m) {
        var _ = !1;
        break e;
      }
      _ = !0;
    }
    _ ||
      ((m = Lm(m)),
      typeof l == "string"
        ? m != null && encodeURIComponent(String(m))
        : Re(l, d, m));
  }
  function ze(l) {
    Ee.call(this),
      (this.headers = new Map()),
      (this.o = l || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ""),
      (this.m = 0),
      (this.l = ""),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ""),
      (this.J = !1);
  }
  w(ze, Ee);
  var DS = /^https?$/i,
    bS = ["POST", "PUT"];
  (t = ze.prototype),
    (t.Ha = function (l) {
      this.J = l;
    }),
    (t.ea = function (l, d, m, _) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            l,
        );
      (d = d ? d.toUpperCase() : "GET"),
        (this.D = l),
        (this.l = ""),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : Rc.g()),
        (this.v = this.o ? Na(this.o) : Na(Rc)),
        (this.g.onreadystatechange = p(this.Ea, this));
      try {
        (this.B = !0), this.g.open(d, String(l), !0), (this.B = !1);
      } catch (O) {
        Fm(this, O);
        return;
      }
      if (((l = m || ""), (m = new Map(this.headers)), _))
        if (Object.getPrototypeOf(_) === Object.prototype)
          for (var b in _) m.set(b, _[b]);
        else if (typeof _.keys == "function" && typeof _.get == "function")
          for (const O of _.keys()) m.set(O, _.get(O));
        else throw Error("Unknown input type for opt_headers: " + String(_));
      (_ = Array.from(m.keys()).find((O) => O.toLowerCase() == "content-type")),
        (b = a.FormData && l instanceof a.FormData),
        !(0 <= Array.prototype.indexOf.call(bS, d, void 0)) ||
          _ ||
          b ||
          m.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8",
          );
      for (const [O, H] of m) this.g.setRequestHeader(O, H);
      this.H && (this.g.responseType = this.H),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        Um(this), (this.u = !0), this.g.send(l), (this.u = !1);
      } catch (O) {
        Fm(this, O);
      }
    });
  function Fm(l, d) {
    (l.h = !1),
      l.g && ((l.j = !0), l.g.abort(), (l.j = !1)),
      (l.l = d),
      (l.m = 5),
      jm(l),
      $a(l);
  }
  function jm(l) {
    l.A || ((l.A = !0), Ue(l, "complete"), Ue(l, "error"));
  }
  (t.abort = function (l) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = l || 7),
      Ue(this, "complete"),
      Ue(this, "abort"),
      $a(this));
  }),
    (t.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        $a(this, !0)),
        ze.aa.N.call(this);
    }),
    (t.Ea = function () {
      this.s || (this.B || this.u || this.j ? Bm(this) : this.bb());
    }),
    (t.bb = function () {
      Bm(this);
    });
  function Bm(l) {
    if (l.h && typeof o < "u" && (!l.v[1] || Un(l) != 4 || l.Z() != 2)) {
      if (l.u && Un(l) == 4) Jr(l.Ea, 0, l);
      else if ((Ue(l, "readystatechange"), Un(l) == 4)) {
        l.h = !1;
        try {
          const H = l.Z();
          e: switch (H) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var d = !0;
              break e;
            default:
              d = !1;
          }
          var m;
          if (!(m = d)) {
            var _;
            if ((_ = H === 0)) {
              var b = String(l.D).match(km)[1] || null;
              !b &&
                a.self &&
                a.self.location &&
                (b = a.self.location.protocol.slice(0, -1)),
                (_ = !DS.test(b ? b.toLowerCase() : ""));
            }
            m = _;
          }
          if (m) Ue(l, "complete"), Ue(l, "success");
          else {
            l.m = 6;
            try {
              var O = 2 < Un(l) ? l.g.statusText : "";
            } catch {
              O = "";
            }
            (l.l = O + " [" + l.Z() + "]"), jm(l);
          }
        } finally {
          $a(l);
        }
      }
    }
  }
  function $a(l, d) {
    if (l.g) {
      Um(l);
      const m = l.g,
        _ = l.v[0] ? () => {} : null;
      (l.g = null), (l.v = null), d || Ue(l, "ready");
      try {
        m.onreadystatechange = _;
      } catch {}
    }
  }
  function Um(l) {
    l.I && (a.clearTimeout(l.I), (l.I = null));
  }
  t.isActive = function () {
    return !!this.g;
  };
  function Un(l) {
    return l.g ? l.g.readyState : 0;
  }
  (t.Z = function () {
    try {
      return 2 < Un(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (t.oa = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (t.Oa = function (l) {
      if (this.g) {
        var d = this.g.responseText;
        return l && d.indexOf(l) == 0 && (d = d.substring(l.length)), Ic(d);
      }
    });
  function zm(l) {
    try {
      if (!l.g) return null;
      if ("response" in l.g) return l.g.response;
      switch (l.H) {
        case "":
        case "text":
          return l.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in l.g)
            return l.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function NS(l) {
    const d = {};
    l = ((l.g && 2 <= Un(l) && l.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let _ = 0; _ < l.length; _++) {
      if (y(l[_])) continue;
      var m = R(l[_]);
      const b = m[0];
      if (((m = m[1]), typeof m != "string")) continue;
      m = m.trim();
      const O = d[b] || [];
      (d[b] = O), O.push(m);
    }
    P(d, function (_) {
      return _.join(", ");
    });
  }
  (t.Ba = function () {
    return this.m;
  }),
    (t.Ka = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    });
  function Xs(l, d, m) {
    return (m && m.internalChannelParams && m.internalChannelParams[l]) || d;
  }
  function $m(l) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new $s()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = Xs("failFast", !1, l)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Xs("baseRetryDelayMs", 5e3, l)),
      (this.cb = Xs("retryDelaySeedMs", 1e4, l)),
      (this.Wa = Xs("forwardChannelMaxRetries", 2, l)),
      (this.wa = Xs("forwardChannelRequestTimeoutMs", 2e4, l)),
      (this.pa = (l && l.xmlHttpFactory) || void 0),
      (this.Xa = (l && l.Tb) || void 0),
      (this.Ca = (l && l.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (l && l.supportsCrossDomainXhr) || !1),
      (this.K = ""),
      (this.h = new Pm(l && l.concurrentRequestLimit)),
      (this.Da = new kS()),
      (this.P = (l && l.fastHandshake) || !1),
      (this.O = (l && l.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (l && l.Rb) || !1),
      l && l.xa && this.j.xa(),
      l && l.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && l && l.detectBufferingProxy) || !1),
      (this.ja = void 0),
      l &&
        l.longPollingTimeout &&
        0 < l.longPollingTimeout &&
        (this.ja = l.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (t = $m.prototype),
    (t.la = 8),
    (t.G = 1),
    (t.connect = function (l, d, m, _) {
      Nt(0),
        (this.W = l),
        (this.H = d || {}),
        m && _ !== void 0 && ((this.H.OSID = m), (this.H.OAID = _)),
        (this.F = this.X),
        (this.I = Jm(this, null, this.W)),
        Ha(this);
    });
  function Lc(l) {
    if ((Wm(l), l.G == 3)) {
      var d = l.U++,
        m = Bn(l.I);
      if (
        (Re(m, "SID", l.K),
        Re(m, "RID", d),
        Re(m, "TYPE", "terminate"),
        Js(l, m),
        (d = new or(l, l.j, d)),
        (d.L = 2),
        (d.v = Ua(Bn(m))),
        (m = !1),
        a.navigator && a.navigator.sendBeacon)
      )
        try {
          m = a.navigator.sendBeacon(d.v.toString(), "");
        } catch {}
      !m && a.Image && ((new Image().src = d.v), (m = !0)),
        m || ((d.g = Zm(d.j, null)), d.g.ea(d.v)),
        (d.F = Date.now()),
        Fa(d);
    }
    Xm(l);
  }
  function Wa(l) {
    l.g && (jc(l), l.g.cancel(), (l.g = null));
  }
  function Wm(l) {
    Wa(l),
      l.u && (a.clearTimeout(l.u), (l.u = null)),
      Ka(l),
      l.h.cancel(),
      l.s && (typeof l.s == "number" && a.clearTimeout(l.s), (l.s = null));
  }
  function Ha(l) {
    if (!xm(l.h) && !l.s) {
      l.s = !0;
      var d = l.Ga;
      ut || te(), K || (ut(), (K = !0)), J.add(d, l), (l.B = 0);
    }
  }
  function OS(l, d) {
    return Cm(l.h) >= l.h.j - (l.s ? 1 : 0)
      ? !1
      : l.s
        ? ((l.i = d.D.concat(l.i)), !0)
        : l.G == 1 || l.G == 2 || l.B >= (l.Va ? 0 : l.Wa)
          ? !1
          : ((l.s = zs(p(l.Ga, l, d), Ym(l, l.B))), l.B++, !0);
  }
  t.Ga = function (l) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!l) {
          (this.U = Math.floor(1e5 * Math.random())), (l = this.U++);
          const b = new or(this, this.j, l);
          let O = this.o;
          if (
            (this.S && (O ? ((O = v(O)), x(O, this.S)) : (O = this.S)),
            this.m !== null || this.O || ((b.H = O), (O = null)),
            this.P)
          )
            e: {
              for (var d = 0, m = 0; m < this.i.length; m++) {
                t: {
                  var _ = this.i[m];
                  if (
                    "__data__" in _.map &&
                    ((_ = _.map.__data__), typeof _ == "string")
                  ) {
                    _ = _.length;
                    break t;
                  }
                  _ = void 0;
                }
                if (_ === void 0) break;
                if (((d += _), 4096 < d)) {
                  d = m;
                  break e;
                }
                if (d === 4096 || m === this.i.length - 1) {
                  d = m + 1;
                  break e;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          (d = Km(this, b, d)),
            (m = Bn(this.I)),
            Re(m, "RID", l),
            Re(m, "CVER", 22),
            this.D && Re(m, "X-HTTP-Session-Id", this.D),
            Js(this, m),
            O &&
              (this.O
                ? (d = "headers=" + encodeURIComponent(String(Lm(O))) + "&" + d)
                : this.m && Mc(m, this.m, O)),
            Oc(this.h, b),
            this.Ua && Re(m, "TYPE", "init"),
            this.P
              ? (Re(m, "$req", d),
                Re(m, "SID", "null"),
                (b.T = !0),
                Vc(b, m, null))
              : Vc(b, m, d),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (l ? Hm(this, l) : this.i.length == 0 || xm(this.h) || Hm(this));
  };
  function Hm(l, d) {
    var m;
    d ? (m = d.l) : (m = l.U++);
    const _ = Bn(l.I);
    Re(_, "SID", l.K),
      Re(_, "RID", m),
      Re(_, "AID", l.T),
      Js(l, _),
      l.m && l.o && Mc(_, l.m, l.o),
      (m = new or(l, l.j, m, l.B + 1)),
      l.m === null && (m.H = l.o),
      d && (l.i = d.D.concat(l.i)),
      (d = Km(l, m, 1e3)),
      (m.I = Math.round(0.5 * l.wa) + Math.round(0.5 * l.wa * Math.random())),
      Oc(l.h, m),
      Vc(m, _, d);
  }
  function Js(l, d) {
    l.H &&
      j(l.H, function (m, _) {
        Re(d, _, m);
      }),
      l.l &&
        Rm({}, function (m, _) {
          Re(d, _, m);
        });
  }
  function Km(l, d, m) {
    m = Math.min(l.i.length, m);
    var _ = l.l ? p(l.l.Na, l.l, l) : null;
    e: {
      var b = l.i;
      let O = -1;
      for (;;) {
        const H = ["count=" + m];
        O == -1
          ? 0 < m
            ? ((O = b[0].g), H.push("ofs=" + O))
            : (O = 0)
          : H.push("ofs=" + O);
        let xe = !0;
        for (let ct = 0; ct < m; ct++) {
          let ge = b[ct].g;
          const Et = b[ct].map;
          if (((ge -= O), 0 > ge)) (O = Math.max(0, b[ct].g - 100)), (xe = !1);
          else
            try {
              VS(Et, H, "req" + ge + "_");
            } catch {
              _ && _(Et);
            }
        }
        if (xe) {
          _ = H.join("&");
          break e;
        }
      }
    }
    return (l = l.i.splice(0, m)), (d.D = l), _;
  }
  function Gm(l) {
    if (!l.g && !l.u) {
      l.Y = 1;
      var d = l.Fa;
      ut || te(), K || (ut(), (K = !0)), J.add(d, l), (l.v = 0);
    }
  }
  function Fc(l) {
    return l.g || l.u || 3 <= l.v
      ? !1
      : (l.Y++, (l.u = zs(p(l.Fa, l), Ym(l, l.v))), l.v++, !0);
  }
  (t.Fa = function () {
    if (
      ((this.u = null),
      qm(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var l = 2 * this.R;
      this.j.info("BP detection timer enabled: " + l),
        (this.A = zs(p(this.ab, this), l));
    }
  }),
    (t.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.M = !0),
        Nt(10),
        Wa(this),
        qm(this));
    });
  function jc(l) {
    l.A != null && (a.clearTimeout(l.A), (l.A = null));
  }
  function qm(l) {
    (l.g = new or(l, l.j, "rpc", l.Y)),
      l.m === null && (l.g.H = l.o),
      (l.g.O = 0);
    var d = Bn(l.qa);
    Re(d, "RID", "rpc"),
      Re(d, "SID", l.K),
      Re(d, "AID", l.T),
      Re(d, "CI", l.F ? "0" : "1"),
      !l.F && l.ja && Re(d, "TO", l.ja),
      Re(d, "TYPE", "xmlhttp"),
      Js(l, d),
      l.m && l.o && Mc(d, l.m, l.o),
      l.L && (l.g.I = l.L);
    var m = l.g;
    (l = l.ia),
      (m.L = 1),
      (m.v = Ua(Bn(d))),
      (m.m = null),
      (m.P = !0),
      Em(m, l);
  }
  t.Za = function () {
    this.C != null && ((this.C = null), Wa(this), Fc(this), Nt(19));
  };
  function Ka(l) {
    l.C != null && (a.clearTimeout(l.C), (l.C = null));
  }
  function Qm(l, d) {
    var m = null;
    if (l.g == d) {
      Ka(l), jc(l), (l.g = null);
      var _ = 2;
    } else if (Nc(l.h, d)) (m = d.D), Am(l.h, d), (_ = 1);
    else return;
    if (l.G != 0) {
      if (d.o)
        if (_ == 1) {
          (m = d.m ? d.m.length : 0), (d = Date.now() - d.F);
          var b = l.B;
          (_ = xn()), Ue(_, new ym(_, m)), Ha(l);
        } else Gm(l);
      else if (
        ((b = d.s),
        b == 3 ||
          (b == 0 && 0 < d.X) ||
          !((_ == 1 && OS(l, d)) || (_ == 2 && Fc(l))))
      )
        switch ((m && 0 < m.length && ((d = l.h), (d.i = d.i.concat(m))), b)) {
          case 1:
            ti(l, 5);
            break;
          case 4:
            ti(l, 10);
            break;
          case 3:
            ti(l, 6);
            break;
          default:
            ti(l, 2);
        }
    }
  }
  function Ym(l, d) {
    let m = l.Ta + Math.floor(Math.random() * l.cb);
    return l.isActive() || (m *= 2), m * d;
  }
  function ti(l, d) {
    if ((l.j.info("Error code " + d), d == 2)) {
      var m = p(l.fb, l),
        _ = l.Xa;
      const b = !_;
      (_ = new ei(_ || "//www.google.com/images/cleardot.gif")),
        (a.location && a.location.protocol == "http") || ja(_, "https"),
        Ua(_),
        b ? IS(_.toString(), m) : RS(_.toString(), m);
    } else Nt(2);
    (l.G = 0), l.l && l.l.sa(d), Xm(l), Wm(l);
  }
  t.fb = function (l) {
    l
      ? (this.j.info("Successfully pinged google.com"), Nt(2))
      : (this.j.info("Failed to ping google.com"), Nt(1));
  };
  function Xm(l) {
    if (((l.G = 0), (l.ka = []), l.l)) {
      const d = Im(l.h);
      (d.length != 0 || l.i.length != 0) &&
        (A(l.ka, d),
        A(l.ka, l.i),
        (l.h.i.length = 0),
        C(l.i),
        (l.i.length = 0)),
        l.l.ra();
    }
  }
  function Jm(l, d, m) {
    var _ = m instanceof ei ? Bn(m) : new ei(m);
    if (_.g != "") d && (_.g = d + "." + _.g), Ba(_, _.s);
    else {
      var b = a.location;
      (_ = b.protocol),
        (d = d ? d + "." + b.hostname : b.hostname),
        (b = +b.port);
      var O = new ei(null);
      _ && ja(O, _), d && (O.g = d), b && Ba(O, b), m && (O.l = m), (_ = O);
    }
    return (
      (m = l.D),
      (d = l.ya),
      m && d && Re(_, m, d),
      Re(_, "VER", l.la),
      Js(l, _),
      _
    );
  }
  function Zm(l, d, m) {
    if (d && !l.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (d = l.Ca && !l.pa ? new ze(new qs({ eb: m })) : new ze(l.pa)),
      d.Ha(l.J),
      d
    );
  }
  t.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function eg() {}
  (t = eg.prototype),
    (t.ua = function () {}),
    (t.ta = function () {}),
    (t.sa = function () {}),
    (t.ra = function () {}),
    (t.isActive = function () {
      return !0;
    }),
    (t.Na = function () {});
  function Ga() {}
  Ga.prototype.g = function (l, d) {
    return new Qt(l, d);
  };
  function Qt(l, d) {
    Ee.call(this),
      (this.g = new $m(d)),
      (this.l = l),
      (this.h = (d && d.messageUrlParams) || null),
      (l = (d && d.messageHeaders) || null),
      d &&
        d.clientProtocolHeaderRequired &&
        (l
          ? (l["X-Client-Protocol"] = "webchannel")
          : (l = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = l),
      (l = (d && d.initMessageHeaders) || null),
      d &&
        d.messageContentType &&
        (l
          ? (l["X-WebChannel-Content-Type"] = d.messageContentType)
          : (l = { "X-WebChannel-Content-Type": d.messageContentType })),
      d &&
        d.va &&
        (l
          ? (l["X-WebChannel-Client-Profile"] = d.va)
          : (l = { "X-WebChannel-Client-Profile": d.va })),
      (this.g.S = l),
      (l = d && d.Sb) && !y(l) && (this.g.m = l),
      (this.v = (d && d.supportsCrossDomainXhr) || !1),
      (this.u = (d && d.sendRawJson) || !1),
      (d = d && d.httpSessionIdParam) &&
        !y(d) &&
        ((this.g.D = d),
        (l = this.h),
        l !== null && d in l && ((l = this.h), d in l && delete l[d])),
      (this.j = new Ni(this));
  }
  w(Qt, Ee),
    (Qt.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (Qt.prototype.close = function () {
      Lc(this.g);
    }),
    (Qt.prototype.o = function (l) {
      var d = this.g;
      if (typeof l == "string") {
        var m = {};
        (m.__data__ = l), (l = m);
      } else this.u && ((m = {}), (m.__data__ = js(l)), (l = m));
      d.i.push(new vS(d.Ya++, l)), d.G == 3 && Ha(d);
    }),
    (Qt.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        Lc(this.g),
        delete this.g,
        Qt.aa.N.call(this);
    });
  function tg(l) {
    se.call(this),
      l.__headers__ &&
        ((this.headers = l.__headers__),
        (this.statusCode = l.__status__),
        delete l.__headers__,
        delete l.__status__);
    var d = l.__sm__;
    if (d) {
      e: {
        for (const m in d) {
          l = m;
          break e;
        }
        l = void 0;
      }
      (this.i = l) &&
        ((l = this.i), (d = d !== null && l in d ? d[l] : void 0)),
        (this.data = d);
    } else this.data = l;
  }
  w(tg, se);
  function ng() {
    it.call(this), (this.status = 1);
  }
  w(ng, it);
  function Ni(l) {
    this.g = l;
  }
  w(Ni, eg),
    (Ni.prototype.ua = function () {
      Ue(this.g, "a");
    }),
    (Ni.prototype.ta = function (l) {
      Ue(this.g, new tg(l));
    }),
    (Ni.prototype.sa = function (l) {
      Ue(this.g, new ng());
    }),
    (Ni.prototype.ra = function () {
      Ue(this.g, "b");
    }),
    (Ga.prototype.createWebChannel = Ga.prototype.g),
    (Qt.prototype.send = Qt.prototype.o),
    (Qt.prototype.open = Qt.prototype.m),
    (Qt.prototype.close = Qt.prototype.close),
    (qE = function () {
      return new Ga();
    }),
    (GE = function () {
      return xn();
    }),
    (KE = Ae),
    (rd = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (Ma.NO_ERROR = 0),
    (Ma.TIMEOUT = 8),
    (Ma.HTTP_ERROR = 6),
    (jl = Ma),
    (vm.COMPLETE = "complete"),
    (HE = vm),
    (Oa.EventType = Oe),
    (Oe.OPEN = "a"),
    (Oe.CLOSE = "b"),
    (Oe.ERROR = "c"),
    (Oe.MESSAGE = "d"),
    (Ee.prototype.listen = Ee.prototype.K),
    (yo = Oa),
    (WE = qs),
    (ze.prototype.listenOnce = ze.prototype.L),
    (ze.prototype.getLastError = ze.prototype.Ka),
    (ze.prototype.getLastErrorCode = ze.prototype.Ba),
    (ze.prototype.getStatus = ze.prototype.Z),
    (ze.prototype.getResponseJson = ze.prototype.Oa),
    (ze.prototype.getResponseText = ze.prototype.oa),
    (ze.prototype.send = ze.prototype.ea),
    (ze.prototype.setWithCredentials = ze.prototype.Ha),
    ($E = ze);
}).apply(
  typeof _l < "u"
    ? _l
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : {},
);
const Gv = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class At {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(At.UNAUTHENTICATED = new At(null)),
  (At.GOOGLE_CREDENTIALS = new At("google-credentials-uid")),
  (At.FIRST_PARTY = new At("first-party-uid")),
  (At.MOCK_USER = new At("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Os = "10.12.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pi = new ME("@firebase/firestore");
function uo() {
  return Pi.logLevel;
}
function Q(t, ...e) {
  if (Pi.logLevel <= de.DEBUG) {
    const n = e.map(Up);
    Pi.debug(`Firestore (${Os}): ${t}`, ...n);
  }
}
function nr(t, ...e) {
  if (Pi.logLevel <= de.ERROR) {
    const n = e.map(Up);
    Pi.error(`Firestore (${Os}): ${t}`, ...n);
  }
}
function Ts(t, ...e) {
  if (Pi.logLevel <= de.WARN) {
    const n = e.map(Up);
    Pi.warn(`Firestore (${Os}): ${t}`, ...n);
  }
}
function Up(t) {
  if (typeof t == "string") return t;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(t);
  } catch {
    return t;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ne(t = "Unexpected state") {
  const e = `FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: ` + t;
  throw (nr(e), new Error(e));
}
function Ce(t, e) {
  t || ne();
}
function ie(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const z = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class Y extends Ns {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dr {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QE {
  constructor(e, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class tb {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(At.UNAUTHENTICATED));
  }
  shutdown() {}
}
class nb {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class rb {
  constructor(e) {
    (this.t = e),
      (this.currentUser = At.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let r = this.i;
    const i = (u) => (this.i !== r ? ((r = this.i), n(u)) : Promise.resolve());
    let s = new Dr();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Dr()),
        e.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const u = s;
        e.enqueueRetryable(async () => {
          await u.promise, await i(this.currentUser);
        });
      },
      a = (u) => {
        Q("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = u),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((u) => a(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 });
          u
            ? a(u)
            : (Q("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new Dr()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== e
                ? (Q(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change.",
                  ),
                  this.getToken())
                : r
                  ? (Ce(typeof r.accessToken == "string"),
                    new QE(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return Ce(e === null || typeof e == "string"), new At(e);
  }
}
class ib {
  constructor(e, n, r) {
    (this.l = e),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = At.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return (
      e && this.I.set("Authorization", e),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}
class sb {
  constructor(e, n, r) {
    (this.l = e), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new ib(this.l, this.h, this.P));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(At.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class ob {
  constructor(e) {
    (this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class ab {
  constructor(e) {
    (this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(e, n) {
    const r = (s) => {
      s.error != null &&
        Q(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`,
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        Q(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`,
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      e.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      Q("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s
            ? i(s)
            : Q("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (Ce(typeof n.token == "string"),
                  (this.R = n.token),
                  new ob(n.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lb(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YE {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = lb(40);
      for (let s = 0; s < i.length; ++s)
        r.length < 20 && i[s] < n && (r += e.charAt(i[s] % e.length));
    }
    return r;
  }
}
function ve(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ss(t, e, n) {
  return t.length === e.length && t.every((r, i) => n(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new Y(
        z.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (n >= 1e9)
      throw new Y(
        z.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n,
      );
    if (e < -62135596800)
      throw new Y(z.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new Y(z.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return rt.fromMillis(Date.now());
  }
  static fromDate(e) {
    return rt.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      r = Math.floor(1e6 * (e - 1e3 * n));
    return new rt(n, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? ve(this.nanoseconds, e.nanoseconds)
      : ve(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new re(e);
  }
  static min() {
    return new re(new rt(0, 0));
  }
  static max() {
    return new re(new rt(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ca {
  constructor(e, n, r) {
    n === void 0 ? (n = 0) : n > e.length && ne(),
      r === void 0 ? (r = e.length - n) : r > e.length - n && ne(),
      (this.segments = e),
      (this.offset = n),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return ca.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof ca
        ? e.forEach((r) => {
            n.push(r);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, r = this.limit(); n < r; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const r = Math.min(e.length, n.length);
    for (let i = 0; i < r; i++) {
      const s = e.get(i),
        o = n.get(i);
      if (s < o) return -1;
      if (s > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class be extends ca {
  construct(e, n, r) {
    return new be(e, n, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...e) {
    const n = [];
    for (const r of e) {
      if (r.indexOf("//") >= 0)
        throw new Y(
          z.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      n.push(...r.split("/").filter((i) => i.length > 0));
    }
    return new be(n);
  }
  static emptyPath() {
    return new be([]);
  }
}
const ub = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class mt extends ca {
  construct(e, n, r) {
    return new mt(e, n, r);
  }
  static isValidIdentifier(e) {
    return ub.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          mt.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        ),
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new mt(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let r = "",
      i = 0;
    const s = () => {
      if (r.length === 0)
        throw new Y(
          z.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        );
      n.push(r), (r = "");
    };
    let o = !1;
    for (; i < e.length; ) {
      const a = e[i];
      if (a === "\\") {
        if (i + 1 === e.length)
          throw new Y(
            z.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e,
          );
        const u = e[i + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new Y(
            z.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e,
          );
        (r += u), (i += 2);
      } else
        a === "`"
          ? ((o = !o), i++)
          : a !== "." || o
            ? ((r += a), i++)
            : (s(), i++);
    }
    if ((s(), o))
      throw new Y(z.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new mt(n);
  }
  static emptyPath() {
    return new mt([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new X(be.fromString(e));
  }
  static fromName(e) {
    return new X(be.fromString(e).popFirst(5));
  }
  static empty() {
    return new X(be.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && be.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return be.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new X(new be(e.slice()));
  }
}
function cb(t, e) {
  const n = t.toTimestamp().seconds,
    r = t.toTimestamp().nanoseconds + 1,
    i = re.fromTimestamp(r === 1e9 ? new rt(n + 1, 0) : new rt(n, r));
  return new jr(i, X.empty(), e);
}
function hb(t) {
  return new jr(t.readTime, t.key, -1);
}
class jr {
  constructor(e, n, r) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = r);
  }
  static min() {
    return new jr(re.min(), X.empty(), -1);
  }
  static max() {
    return new jr(re.max(), X.empty(), -1);
  }
}
function fb(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = X.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : ve(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const db =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class pb {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ca(t) {
  if (t.code !== z.FAILED_PRECONDITION || t.message !== db) throw t;
  Q("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        },
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && ne(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new U((r, i) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(e, s).next(r, i);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(n, s).next(r, i);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof U ? n : U.resolve(n);
    } catch (n) {
      return U.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : U.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : U.reject(n);
  }
  static resolve(e) {
    return new U((n, r) => {
      n(e);
    });
  }
  static reject(e) {
    return new U((n, r) => {
      r(e);
    });
  }
  static waitFor(e) {
    return new U((n, r) => {
      let i = 0,
        s = 0,
        o = !1;
      e.forEach((a) => {
        ++i,
          a.next(
            () => {
              ++s, o && s === i && n();
            },
            (u) => r(u),
          );
      }),
        (o = !0),
        s === i && n();
    });
  }
  static or(e) {
    let n = U.resolve(!1);
    for (const r of e) n = n.next((i) => (i ? U.resolve(i) : r()));
    return n;
  }
  static forEach(e, n) {
    const r = [];
    return (
      e.forEach((i, s) => {
        r.push(n.call(this, i, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(e, n) {
    return new U((r, i) => {
      const s = e.length,
        o = new Array(s);
      let a = 0;
      for (let u = 0; u < s; u++) {
        const c = u;
        n(e[c]).next(
          (h) => {
            (o[c] = h), ++a, a === s && r(o);
          },
          (h) => i(h),
        );
      }
    });
  }
  static doWhile(e, n) {
    return new U((r, i) => {
      const s = () => {
        e() === !0
          ? n().next(() => {
              s();
            }, i)
          : r();
      };
      s();
    });
  }
}
function mb(t) {
  const e = t.match(/Android ([\d.]+)/i),
    n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function Aa(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zp {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (r) => this.ie(r)),
        (this.se = (r) => n.writeSequenceNumber(r)));
  }
  ie(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.se && this.se(e), e;
  }
}
zp.oe = -1;
function hc(t) {
  return t == null;
}
function Ru(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function gb(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Ru(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qv(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function ki(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function XE(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Be {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || pt.EMPTY);
  }
  insert(e, n) {
    return new Be(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, pt.BLACK, null, null),
    );
  }
  remove(e) {
    return new Be(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, pt.BLACK, null, null),
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (r === 0) return n.value;
      r < 0 ? (n = n.left) : r > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const i = this.comparator(e, r.key);
      if (i === 0) return n + r.left.size;
      i < 0 ? (r = r.left) : ((n += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, r) => (e(n, r), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, r) => (e.push(`${n}:${r}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new wl(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new wl(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new wl(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new wl(this.root, e, this.comparator, !0);
  }
}
class wl {
  constructor(e, n, r, i) {
    (this.isReverse = i), (this.nodeStack = []);
    let s = 1;
    for (; !e.isEmpty(); )
      if (((s = n ? r(e.key, n) : 1), n && i && (s *= -1), s < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (s === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class pt {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? pt.RED),
      (this.left = i ?? pt.EMPTY),
      (this.right = s ?? pt.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, r, i, s) {
    return new pt(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right,
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      (i =
        s < 0
          ? i.copy(null, null, null, i.left.insert(e, n, r), null)
          : s === 0
            ? i.copy(null, n, null, null, null)
            : i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return pt.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let r,
      i = this;
    if (n(e, i.key) < 0)
      i.left.isEmpty() ||
        i.left.isRed() ||
        i.left.left.isRed() ||
        (i = i.moveRedLeft()),
        (i = i.copy(null, null, null, i.left.remove(e, n), null));
    else {
      if (
        (i.left.isRed() && (i = i.rotateRight()),
        i.right.isEmpty() ||
          i.right.isRed() ||
          i.right.left.isRed() ||
          (i = i.moveRedRight()),
        n(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return pt.EMPTY;
        (r = i.right.min()),
          (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, pt.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, pt.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw ne();
    const e = this.left.check();
    if (e !== this.right.check()) throw ne();
    return e + (this.isRed() ? 0 : 1);
  }
}
(pt.EMPTY = null), (pt.RED = !0), (pt.BLACK = !1);
pt.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw ne();
  }
  get value() {
    throw ne();
  }
  get color() {
    throw ne();
  }
  get left() {
    throw ne();
  }
  get right() {
    throw ne();
  }
  copy(e, n, r, i, s) {
    return this;
  }
  insert(e, n, r) {
    return new pt(e, n);
  }
  remove(e, n) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt {
  constructor(e) {
    (this.comparator = e), (this.data = new Be(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, r) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const r = this.data.getIteratorFrom(e[0]);
    for (; r.hasNext(); ) {
      const i = r.getNext();
      if (this.comparator(i.key, e[1]) >= 0) return;
      n(i.key);
    }
  }
  forEachWhile(e, n) {
    let r;
    for (
      r = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      r.hasNext();

    )
      if (!e(r.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new Qv(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new Qv(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((r) => {
        n = n.add(r);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof yt) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      r = e.data.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (this.comparator(i, s) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new yt(this.comparator);
    return (n.data = e), n;
  }
}
class Qv {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt {
  constructor(e) {
    (this.fields = e), e.sort(mt.comparator);
  }
  static empty() {
    return new Jt([]);
  }
  unionWith(e) {
    let n = new yt(mt.comparator);
    for (const r of this.fields) n = n.add(r);
    for (const r of e) n = n.add(r);
    return new Jt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Ss(this.fields, e.fields, (n, r) => n.isEqual(r));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JE extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _t {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = (function (i) {
      try {
        return atob(i);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException
          ? new JE("Invalid base64 string: " + s)
          : s;
      }
    })(e);
    return new _t(n);
  }
  static fromUint8Array(e) {
    const n = (function (i) {
      let s = "";
      for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
      return s;
    })(e);
    return new _t(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (n) {
      return btoa(n);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (n) {
      const r = new Uint8Array(n.length);
      for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return ve(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
_t.EMPTY_BYTE_STRING = new _t("");
const yb = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Br(t) {
  if ((Ce(!!t), typeof t == "string")) {
    let e = 0;
    const n = yb.exec(t);
    if ((Ce(!!n), n[1])) {
      let i = n[1];
      (i = (i + "000000000").substr(0, 9)), (e = Number(i));
    }
    const r = new Date(t);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
  }
  return { seconds: Je(t.seconds), nanos: Je(t.nanos) };
}
function Je(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function xi(t) {
  return typeof t == "string" ? _t.fromBase64String(t) : _t.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $p(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function Wp(t) {
  const e = t.mapValue.fields.__previous_value__;
  return $p(e) ? Wp(e) : e;
}
function ha(t) {
  const e = Br(t.mapValue.fields.__local_write_time__.timestampValue);
  return new rt(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vb {
  constructor(e, n, r, i, s, o, a, u, c) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.longPollingOptions = u),
      (this.useFetchStreams = c);
  }
}
class fa {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || "(default)");
  }
  static empty() {
    return new fa("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return (
      e instanceof fa &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const El = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function Ci(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
      ? 1
      : "integerValue" in t || "doubleValue" in t
        ? 2
        : "timestampValue" in t
          ? 3
          : "stringValue" in t
            ? 5
            : "bytesValue" in t
              ? 6
              : "referenceValue" in t
                ? 7
                : "geoPointValue" in t
                  ? 8
                  : "arrayValue" in t
                    ? 9
                    : "mapValue" in t
                      ? $p(t)
                        ? 4
                        : _b(t)
                          ? 9007199254740991
                          : 10
                      : ne();
}
function On(t, e) {
  if (t === e) return !0;
  const n = Ci(t);
  if (n !== Ci(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return ha(t).isEqual(ha(e));
    case 3:
      return (function (i, s) {
        if (
          typeof i.timestampValue == "string" &&
          typeof s.timestampValue == "string" &&
          i.timestampValue.length === s.timestampValue.length
        )
          return i.timestampValue === s.timestampValue;
        const o = Br(i.timestampValue),
          a = Br(s.timestampValue);
        return o.seconds === a.seconds && o.nanos === a.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (i, s) {
        return xi(i.bytesValue).isEqual(xi(s.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (i, s) {
        return (
          Je(i.geoPointValue.latitude) === Je(s.geoPointValue.latitude) &&
          Je(i.geoPointValue.longitude) === Je(s.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (i, s) {
        if ("integerValue" in i && "integerValue" in s)
          return Je(i.integerValue) === Je(s.integerValue);
        if ("doubleValue" in i && "doubleValue" in s) {
          const o = Je(i.doubleValue),
            a = Je(s.doubleValue);
          return o === a ? Ru(o) === Ru(a) : isNaN(o) && isNaN(a);
        }
        return !1;
      })(t, e);
    case 9:
      return Ss(t.arrayValue.values || [], e.arrayValue.values || [], On);
    case 10:
      return (function (i, s) {
        const o = i.mapValue.fields || {},
          a = s.mapValue.fields || {};
        if (qv(o) !== qv(a)) return !1;
        for (const u in o)
          if (o.hasOwnProperty(u) && (a[u] === void 0 || !On(o[u], a[u])))
            return !1;
        return !0;
      })(t, e);
    default:
      return ne();
  }
}
function da(t, e) {
  return (t.values || []).find((n) => On(n, e)) !== void 0;
}
function Ps(t, e) {
  if (t === e) return 0;
  const n = Ci(t),
    r = Ci(e);
  if (n !== r) return ve(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return ve(t.booleanValue, e.booleanValue);
    case 2:
      return (function (s, o) {
        const a = Je(s.integerValue || s.doubleValue),
          u = Je(o.integerValue || o.doubleValue);
        return a < u
          ? -1
          : a > u
            ? 1
            : a === u
              ? 0
              : isNaN(a)
                ? isNaN(u)
                  ? 0
                  : -1
                : 1;
      })(t, e);
    case 3:
      return Yv(t.timestampValue, e.timestampValue);
    case 4:
      return Yv(ha(t), ha(e));
    case 5:
      return ve(t.stringValue, e.stringValue);
    case 6:
      return (function (s, o) {
        const a = xi(s),
          u = xi(o);
        return a.compareTo(u);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (s, o) {
        const a = s.split("/"),
          u = o.split("/");
        for (let c = 0; c < a.length && c < u.length; c++) {
          const h = ve(a[c], u[c]);
          if (h !== 0) return h;
        }
        return ve(a.length, u.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (s, o) {
        const a = ve(Je(s.latitude), Je(o.latitude));
        return a !== 0 ? a : ve(Je(s.longitude), Je(o.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (s, o) {
        const a = s.values || [],
          u = o.values || [];
        for (let c = 0; c < a.length && c < u.length; ++c) {
          const h = Ps(a[c], u[c]);
          if (h) return h;
        }
        return ve(a.length, u.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (s, o) {
        if (s === El.mapValue && o === El.mapValue) return 0;
        if (s === El.mapValue) return 1;
        if (o === El.mapValue) return -1;
        const a = s.fields || {},
          u = Object.keys(a),
          c = o.fields || {},
          h = Object.keys(c);
        u.sort(), h.sort();
        for (let f = 0; f < u.length && f < h.length; ++f) {
          const p = ve(u[f], h[f]);
          if (p !== 0) return p;
          const g = Ps(a[u[f]], c[h[f]]);
          if (g !== 0) return g;
        }
        return ve(u.length, h.length);
      })(t.mapValue, e.mapValue);
    default:
      throw ne();
  }
}
function Yv(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return ve(t, e);
  const n = Br(t),
    r = Br(e),
    i = ve(n.seconds, r.seconds);
  return i !== 0 ? i : ve(n.nanos, r.nanos);
}
function xs(t) {
  return id(t);
}
function id(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
      ? "" + t.booleanValue
      : "integerValue" in t
        ? "" + t.integerValue
        : "doubleValue" in t
          ? "" + t.doubleValue
          : "timestampValue" in t
            ? (function (n) {
                const r = Br(n);
                return `time(${r.seconds},${r.nanos})`;
              })(t.timestampValue)
            : "stringValue" in t
              ? t.stringValue
              : "bytesValue" in t
                ? (function (n) {
                    return xi(n).toBase64();
                  })(t.bytesValue)
                : "referenceValue" in t
                  ? (function (n) {
                      return X.fromName(n).toString();
                    })(t.referenceValue)
                  : "geoPointValue" in t
                    ? (function (n) {
                        return `geo(${n.latitude},${n.longitude})`;
                      })(t.geoPointValue)
                    : "arrayValue" in t
                      ? (function (n) {
                          let r = "[",
                            i = !0;
                          for (const s of n.values || [])
                            i ? (i = !1) : (r += ","), (r += id(s));
                          return r + "]";
                        })(t.arrayValue)
                      : "mapValue" in t
                        ? (function (n) {
                            const r = Object.keys(n.fields || {}).sort();
                            let i = "{",
                              s = !0;
                            for (const o of r)
                              s ? (s = !1) : (i += ","),
                                (i += `${o}:${id(n.fields[o])}`);
                            return i + "}";
                          })(t.mapValue)
                        : ne();
}
function sd(t) {
  return !!t && "integerValue" in t;
}
function Hp(t) {
  return !!t && "arrayValue" in t;
}
function Xv(t) {
  return !!t && "nullValue" in t;
}
function Jv(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function Bl(t) {
  return !!t && "mapValue" in t;
}
function No(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return ki(t.mapValue.fields, (n, r) => (e.mapValue.fields[n] = No(r))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = No(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function _b(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zt {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new zt({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let r = 0; r < e.length - 1; ++r)
        if (((n = (n.mapValue.fields || {})[e.get(r)]), !Bl(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = No(n);
  }
  setAll(e) {
    let n = mt.emptyPath(),
      r = {},
      i = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const u = this.getFieldsMap(n);
        this.applyChanges(u, r, i), (r = {}), (i = []), (n = a.popLast());
      }
      o ? (r[a.lastSegment()] = No(o)) : i.push(a.lastSegment());
    });
    const s = this.getFieldsMap(n);
    this.applyChanges(s, r, i);
  }
  delete(e) {
    const n = this.field(e.popLast());
    Bl(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return On(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let r = 0; r < e.length; ++r) {
      let i = n.mapValue.fields[e.get(r)];
      (Bl(i) && i.mapValue.fields) ||
        ((i = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(r)] = i)),
        (n = i);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, r) {
    ki(n, (i, s) => (e[i] = s));
    for (const i of r) delete e[i];
  }
  clone() {
    return new zt(No(this.value));
  }
}
function ZE(t) {
  const e = [];
  return (
    ki(t.fields, (n, r) => {
      const i = new mt([n]);
      if (Bl(r)) {
        const s = ZE(r.mapValue).fields;
        if (s.length === 0) e.push(i);
        else for (const o of s) e.push(i.child(o));
      } else e.push(i);
    }),
    new Jt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rt {
  constructor(e, n, r, i, s, o, a) {
    (this.key = e),
      (this.documentType = n),
      (this.version = r),
      (this.readTime = i),
      (this.createTime = s),
      (this.data = o),
      (this.documentState = a);
  }
  static newInvalidDocument(e) {
    return new Rt(e, 0, re.min(), re.min(), re.min(), zt.empty(), 0);
  }
  static newFoundDocument(e, n, r, i) {
    return new Rt(e, 1, n, re.min(), r, i, 0);
  }
  static newNoDocument(e, n) {
    return new Rt(e, 2, n, re.min(), re.min(), zt.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new Rt(e, 3, n, re.min(), re.min(), zt.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(re.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = zt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = zt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = re.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof Rt &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new Rt(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState,
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ku {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function Zv(t, e, n) {
  let r = 0;
  for (let i = 0; i < t.position.length; i++) {
    const s = e[i],
      o = t.position[i];
    if (
      (s.field.isKeyField()
        ? (r = X.comparator(X.fromName(o.referenceValue), n.key))
        : (r = Ps(o, n.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function e0(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!On(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vu {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
}
function wb(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eT {}
class tt extends eT {
  constructor(e, n, r) {
    super(), (this.field = e), (this.op = n), (this.value = r);
  }
  static create(e, n, r) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, r)
        : new Tb(e, n, r)
      : n === "array-contains"
        ? new xb(e, r)
        : n === "in"
          ? new Cb(e, r)
          : n === "not-in"
            ? new Ab(e, r)
            : n === "array-contains-any"
              ? new Ib(e, r)
              : new tt(e, n, r);
  }
  static createKeyFieldInFilter(e, n, r) {
    return n === "in" ? new Sb(e, r) : new Pb(e, r);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(Ps(n, this.value))
      : n !== null &&
          Ci(this.value) === Ci(n) &&
          this.matchesComparison(Ps(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return ne();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Mn extends eT {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ae = null);
  }
  static create(e, n) {
    return new Mn(e, n);
  }
  matches(e) {
    return tT(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          [],
        )),
      this.ae
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function tT(t) {
  return t.op === "and";
}
function nT(t) {
  return Eb(t) && tT(t);
}
function Eb(t) {
  for (const e of t.filters) if (e instanceof Mn) return !1;
  return !0;
}
function od(t) {
  if (t instanceof tt)
    return t.field.canonicalString() + t.op.toString() + xs(t.value);
  if (nT(t)) return t.filters.map((e) => od(e)).join(",");
  {
    const e = t.filters.map((n) => od(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function rT(t, e) {
  return t instanceof tt
    ? (function (r, i) {
        return (
          i instanceof tt &&
          r.op === i.op &&
          r.field.isEqual(i.field) &&
          On(r.value, i.value)
        );
      })(t, e)
    : t instanceof Mn
      ? (function (r, i) {
          return i instanceof Mn &&
            r.op === i.op &&
            r.filters.length === i.filters.length
            ? r.filters.reduce((s, o, a) => s && rT(o, i.filters[a]), !0)
            : !1;
        })(t, e)
      : void ne();
}
function iT(t) {
  return t instanceof tt
    ? (function (n) {
        return `${n.field.canonicalString()} ${n.op} ${xs(n.value)}`;
      })(t)
    : t instanceof Mn
      ? (function (n) {
          return (
            n.op.toString() + " {" + n.getFilters().map(iT).join(" ,") + "}"
          );
        })(t)
      : "Filter";
}
class Tb extends tt {
  constructor(e, n, r) {
    super(e, n, r), (this.key = X.fromName(r.referenceValue));
  }
  matches(e) {
    const n = X.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class Sb extends tt {
  constructor(e, n) {
    super(e, "in", n), (this.keys = sT("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class Pb extends tt {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = sT("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function sT(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((r) => X.fromName(r.referenceValue));
}
class xb extends tt {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return Hp(n) && da(n.arrayValue, this.value);
  }
}
class Cb extends tt {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && da(this.value.arrayValue, n);
  }
}
class Ab extends tt {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (da(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !da(this.value.arrayValue, n);
  }
}
class Ib extends tt {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!Hp(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((r) => da(this.value.arrayValue, r))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rb {
  constructor(e, n = null, r = [], i = [], s = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.startAt = o),
      (this.endAt = a),
      (this.ue = null);
  }
}
function t0(t, e = null, n = [], r = [], i = null, s = null, o = null) {
  return new Rb(t, e, n, r, i, s, o);
}
function Kp(t) {
  const e = ie(t);
  if (e.ue === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((r) => od(r)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir;
          })(r),
        )
        .join(",")),
      hc(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((r) => xs(r)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((r) => xs(r)).join(","))),
      (e.ue = n);
  }
  return e.ue;
}
function Gp(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!wb(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!rT(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!e0(t.startAt, e.startAt) &&
    e0(t.endAt, e.endAt)
  );
}
function ad(t) {
  return (
    X.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fc {
  constructor(
    e,
    n = null,
    r = [],
    i = [],
    s = null,
    o = "F",
    a = null,
    u = null,
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = r),
      (this.filters = i),
      (this.limit = s),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = u),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt;
  }
}
function kb(t, e, n, r, i, s, o, a) {
  return new fc(t, e, n, r, i, s, o, a);
}
function oT(t) {
  return new fc(t);
}
function n0(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function Vb(t) {
  return t.collectionGroup !== null;
}
function Oo(t) {
  const e = ie(t);
  if (e.ce === null) {
    e.ce = [];
    const n = new Set();
    for (const s of e.explicitOrderBy)
      e.ce.push(s), n.add(s.field.canonicalString());
    const r =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : "asc";
    (function (o) {
      let a = new yt(mt.comparator);
      return (
        o.filters.forEach((u) => {
          u.getFlattenedFilters().forEach((c) => {
            c.isInequality() && (a = a.add(c.field));
          });
        }),
        a
      );
    })(e).forEach((s) => {
      n.has(s.canonicalString()) || s.isKeyField() || e.ce.push(new Vu(s, r));
    }),
      n.has(mt.keyField().canonicalString()) ||
        e.ce.push(new Vu(mt.keyField(), r));
  }
  return e.ce;
}
function Dn(t) {
  const e = ie(t);
  return e.le || (e.le = Db(e, Oo(t))), e.le;
}
function Db(t, e) {
  if (t.limitType === "F")
    return t0(
      t.path,
      t.collectionGroup,
      e,
      t.filters,
      t.limit,
      t.startAt,
      t.endAt,
    );
  {
    e = e.map((i) => {
      const s = i.dir === "desc" ? "asc" : "desc";
      return new Vu(i.field, s);
    });
    const n = t.endAt ? new ku(t.endAt.position, t.endAt.inclusive) : null,
      r = t.startAt ? new ku(t.startAt.position, t.startAt.inclusive) : null;
    return t0(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
  }
}
function ld(t, e, n) {
  return new fc(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt,
  );
}
function dc(t, e) {
  return Gp(Dn(t), Dn(e)) && t.limitType === e.limitType;
}
function aT(t) {
  return `${Kp(Dn(t))}|lt:${t.limitType}`;
}
function Fi(t) {
  return `Query(target=${(function (n) {
    let r = n.path.canonicalString();
    return (
      n.collectionGroup !== null &&
        (r += " collectionGroup=" + n.collectionGroup),
      n.filters.length > 0 &&
        (r += `, filters: [${n.filters.map((i) => iT(i)).join(", ")}]`),
      hc(n.limit) || (r += ", limit: " + n.limit),
      n.orderBy.length > 0 &&
        (r += `, orderBy: [${n.orderBy
          .map((i) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(i),
          )
          .join(", ")}]`),
      n.startAt &&
        ((r += ", startAt: "),
        (r += n.startAt.inclusive ? "b:" : "a:"),
        (r += n.startAt.position.map((i) => xs(i)).join(","))),
      n.endAt &&
        ((r += ", endAt: "),
        (r += n.endAt.inclusive ? "a:" : "b:"),
        (r += n.endAt.position.map((i) => xs(i)).join(","))),
      `Target(${r})`
    );
  })(Dn(t))}; limitType=${t.limitType})`;
}
function pc(t, e) {
  return (
    e.isFoundDocument() &&
    (function (r, i) {
      const s = i.key.path;
      return r.collectionGroup !== null
        ? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : X.isDocumentKey(r.path)
          ? r.path.isEqual(s)
          : r.path.isImmediateParentOf(s);
    })(t, e) &&
    (function (r, i) {
      for (const s of Oo(r))
        if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      for (const s of r.filters) if (!s.matches(i)) return !1;
      return !0;
    })(t, e) &&
    (function (r, i) {
      return !(
        (r.startAt &&
          !(function (o, a, u) {
            const c = Zv(o, a, u);
            return o.inclusive ? c <= 0 : c < 0;
          })(r.startAt, Oo(r), i)) ||
        (r.endAt &&
          !(function (o, a, u) {
            const c = Zv(o, a, u);
            return o.inclusive ? c >= 0 : c > 0;
          })(r.endAt, Oo(r), i))
      );
    })(t, e)
  );
}
function bb(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function lT(t) {
  return (e, n) => {
    let r = !1;
    for (const i of Oo(t)) {
      const s = Nb(i, e, n);
      if (s !== 0) return s;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function Nb(t, e, n) {
  const r = t.field.isKeyField()
    ? X.comparator(e.key, n.key)
    : (function (s, o, a) {
        const u = o.data.field(s),
          c = a.data.field(s);
        return u !== null && c !== null ? Ps(u, c) : ne();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return ne();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ms {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r !== void 0) {
      for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const r = this.mapKeyFn(e),
      i = this.inner[r];
    if (i === void 0) return (this.inner[r] = [[e, n]]), void this.innerSize++;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, n]);
    i.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      r = this.inner[n];
    if (r === void 0) return !1;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e))
        return (
          r.length === 1 ? delete this.inner[n] : r.splice(i, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    ki(this.inner, (n, r) => {
      for (const [i, s] of r) e(i, s);
    });
  }
  isEmpty() {
    return XE(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ob = new Be(X.comparator);
function rr() {
  return Ob;
}
const uT = new Be(X.comparator);
function vo(...t) {
  let e = uT;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function cT(t) {
  let e = uT;
  return t.forEach((n, r) => (e = e.insert(n, r.overlayedDocument))), e;
}
function di() {
  return Mo();
}
function hT() {
  return Mo();
}
function Mo() {
  return new Ms(
    (t) => t.toString(),
    (t, e) => t.isEqual(e),
  );
}
const Mb = new Be(X.comparator),
  Lb = new yt(X.comparator);
function ue(...t) {
  let e = Lb;
  for (const n of t) e = e.add(n);
  return e;
}
const Fb = new yt(ve);
function jb() {
  return Fb;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fT(t, e) {
  if (t.useProto3Json) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Ru(e) ? "-0" : e };
}
function dT(t) {
  return { integerValue: "" + t };
}
function Bb(t, e) {
  return gb(e) ? dT(e) : fT(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mc {
  constructor() {
    this._ = void 0;
  }
}
function Ub(t, e, n) {
  return t instanceof Du
    ? (function (i, s) {
        const o = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: i.seconds, nanos: i.nanoseconds },
            },
          },
        };
        return (
          s && $p(s) && (s = Wp(s)),
          s && (o.fields.__previous_value__ = s),
          { mapValue: o }
        );
      })(n, e)
    : t instanceof pa
      ? mT(t, e)
      : t instanceof ma
        ? gT(t, e)
        : (function (i, s) {
            const o = pT(i, s),
              a = r0(o) + r0(i.Pe);
            return sd(o) && sd(i.Pe) ? dT(a) : fT(i.serializer, a);
          })(t, e);
}
function zb(t, e, n) {
  return t instanceof pa ? mT(t, e) : t instanceof ma ? gT(t, e) : n;
}
function pT(t, e) {
  return t instanceof bu
    ? (function (r) {
        return (
          sd(r) ||
          (function (s) {
            return !!s && "doubleValue" in s;
          })(r)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class Du extends mc {}
class pa extends mc {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function mT(t, e) {
  const n = yT(e);
  for (const r of t.elements) n.some((i) => On(i, r)) || n.push(r);
  return { arrayValue: { values: n } };
}
class ma extends mc {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function gT(t, e) {
  let n = yT(e);
  for (const r of t.elements) n = n.filter((i) => !On(i, r));
  return { arrayValue: { values: n } };
}
class bu extends mc {
  constructor(e, n) {
    super(), (this.serializer = e), (this.Pe = n);
  }
}
function r0(t) {
  return Je(t.integerValue || t.doubleValue);
}
function yT(t) {
  return Hp(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function $b(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (r, i) {
      return (r instanceof pa && i instanceof pa) ||
        (r instanceof ma && i instanceof ma)
        ? Ss(r.elements, i.elements, On)
        : r instanceof bu && i instanceof bu
          ? On(r.Pe, i.Pe)
          : r instanceof Du && i instanceof Du;
    })(t.transform, e.transform)
  );
}
class Wb {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class bn {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new bn();
  }
  static exists(e) {
    return new bn(void 0, e);
  }
  static updateTime(e) {
    return new bn(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function Ul(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class gc {}
function vT(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new wT(t.key, bn.none())
      : new Ia(t.key, t.data, bn.none());
  {
    const n = t.data,
      r = zt.empty();
    let i = new yt(mt.comparator);
    for (let s of e.fields)
      if (!i.has(s)) {
        let o = n.field(s);
        o === null && s.length > 1 && ((s = s.popLast()), (o = n.field(s))),
          o === null ? r.delete(s) : r.set(s, o),
          (i = i.add(s));
      }
    return new Xr(t.key, r, new Jt(i.toArray()), bn.none());
  }
}
function Hb(t, e, n) {
  t instanceof Ia
    ? (function (i, s, o) {
        const a = i.value.clone(),
          u = s0(i.fieldTransforms, s, o.transformResults);
        a.setAll(u),
          s.convertToFoundDocument(o.version, a).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof Xr
      ? (function (i, s, o) {
          if (!Ul(i.precondition, s))
            return void s.convertToUnknownDocument(o.version);
          const a = s0(i.fieldTransforms, s, o.transformResults),
            u = s.data;
          u.setAll(_T(i)),
            u.setAll(a),
            s.convertToFoundDocument(o.version, u).setHasCommittedMutations();
        })(t, e, n)
      : (function (i, s, o) {
          s.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, e, n);
}
function Lo(t, e, n, r) {
  return t instanceof Ia
    ? (function (s, o, a, u) {
        if (!Ul(s.precondition, o)) return a;
        const c = s.value.clone(),
          h = o0(s.fieldTransforms, u, o);
        return (
          c.setAll(h),
          o.convertToFoundDocument(o.version, c).setHasLocalMutations(),
          null
        );
      })(t, e, n, r)
    : t instanceof Xr
      ? (function (s, o, a, u) {
          if (!Ul(s.precondition, o)) return a;
          const c = o0(s.fieldTransforms, u, o),
            h = o.data;
          return (
            h.setAll(_T(s)),
            h.setAll(c),
            o.convertToFoundDocument(o.version, h).setHasLocalMutations(),
            a === null
              ? null
              : a
                  .unionWith(s.fieldMask.fields)
                  .unionWith(s.fieldTransforms.map((f) => f.field))
          );
        })(t, e, n, r)
      : (function (s, o, a) {
          return Ul(s.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : a;
        })(t, e, n);
}
function Kb(t, e) {
  let n = null;
  for (const r of t.fieldTransforms) {
    const i = e.data.field(r.field),
      s = pT(r.transform, i || null);
    s != null && (n === null && (n = zt.empty()), n.set(r.field, s));
  }
  return n || null;
}
function i0(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (r, i) {
      return (
        (r === void 0 && i === void 0) ||
        (!(!r || !i) && Ss(r, i, (s, o) => $b(s, o)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Ia extends gc {
  constructor(e, n, r, i = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class Xr extends gc {
  constructor(e, n, r, i, s = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = r),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function _T(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r = t.data.field(n);
        e.set(n, r);
      }
    }),
    e
  );
}
function s0(t, e, n) {
  const r = new Map();
  Ce(t.length === n.length);
  for (let i = 0; i < n.length; i++) {
    const s = t[i],
      o = s.transform,
      a = e.data.field(s.field);
    r.set(s.field, zb(o, a, n[i]));
  }
  return r;
}
function o0(t, e, n) {
  const r = new Map();
  for (const i of t) {
    const s = i.transform,
      o = n.data.field(i.field);
    r.set(i.field, Ub(s, o, e));
  }
  return r;
}
class wT extends gc {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class Gb extends gc {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qb {
  constructor(e, n, r, i) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = r),
      (this.mutations = i);
  }
  applyToRemoteDocument(e, n) {
    const r = n.mutationResults;
    for (let i = 0; i < this.mutations.length; i++) {
      const s = this.mutations[i];
      s.key.isEqual(e.key) && Hb(s, e, r[i]);
    }
  }
  applyToLocalView(e, n) {
    for (const r of this.baseMutations)
      r.key.isEqual(e.key) && (n = Lo(r, e, n, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(e.key) && (n = Lo(r, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const r = hT();
    return (
      this.mutations.forEach((i) => {
        const s = e.get(i.key),
          o = s.overlayedDocument;
        let a = this.applyToLocalView(o, s.mutatedFields);
        a = n.has(i.key) ? null : a;
        const u = vT(o, a);
        u !== null && r.set(i.key, u),
          o.isValidDocument() || o.convertToNoDocument(re.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), ue());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Ss(this.mutations, e.mutations, (n, r) => i0(n, r)) &&
      Ss(this.baseMutations, e.baseMutations, (n, r) => i0(n, r))
    );
  }
}
class qp {
  constructor(e, n, r, i) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = r),
      (this.docVersions = i);
  }
  static from(e, n, r) {
    Ce(e.mutations.length === r.length);
    let i = (function () {
      return Mb;
    })();
    const s = e.mutations;
    for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
    return new qp(e, n, r, i);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qb {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yb {
  constructor(e, n) {
    (this.count = e), (this.unchangedNames = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Xe, fe;
function Xb(t) {
  switch (t) {
    default:
      return ne();
    case z.CANCELLED:
    case z.UNKNOWN:
    case z.DEADLINE_EXCEEDED:
    case z.RESOURCE_EXHAUSTED:
    case z.INTERNAL:
    case z.UNAVAILABLE:
    case z.UNAUTHENTICATED:
      return !1;
    case z.INVALID_ARGUMENT:
    case z.NOT_FOUND:
    case z.ALREADY_EXISTS:
    case z.PERMISSION_DENIED:
    case z.FAILED_PRECONDITION:
    case z.ABORTED:
    case z.OUT_OF_RANGE:
    case z.UNIMPLEMENTED:
    case z.DATA_LOSS:
      return !0;
  }
}
function ET(t) {
  if (t === void 0) return nr("GRPC error has no .code"), z.UNKNOWN;
  switch (t) {
    case Xe.OK:
      return z.OK;
    case Xe.CANCELLED:
      return z.CANCELLED;
    case Xe.UNKNOWN:
      return z.UNKNOWN;
    case Xe.DEADLINE_EXCEEDED:
      return z.DEADLINE_EXCEEDED;
    case Xe.RESOURCE_EXHAUSTED:
      return z.RESOURCE_EXHAUSTED;
    case Xe.INTERNAL:
      return z.INTERNAL;
    case Xe.UNAVAILABLE:
      return z.UNAVAILABLE;
    case Xe.UNAUTHENTICATED:
      return z.UNAUTHENTICATED;
    case Xe.INVALID_ARGUMENT:
      return z.INVALID_ARGUMENT;
    case Xe.NOT_FOUND:
      return z.NOT_FOUND;
    case Xe.ALREADY_EXISTS:
      return z.ALREADY_EXISTS;
    case Xe.PERMISSION_DENIED:
      return z.PERMISSION_DENIED;
    case Xe.FAILED_PRECONDITION:
      return z.FAILED_PRECONDITION;
    case Xe.ABORTED:
      return z.ABORTED;
    case Xe.OUT_OF_RANGE:
      return z.OUT_OF_RANGE;
    case Xe.UNIMPLEMENTED:
      return z.UNIMPLEMENTED;
    case Xe.DATA_LOSS:
      return z.DATA_LOSS;
    default:
      return ne();
  }
}
((fe = Xe || (Xe = {}))[(fe.OK = 0)] = "OK"),
  (fe[(fe.CANCELLED = 1)] = "CANCELLED"),
  (fe[(fe.UNKNOWN = 2)] = "UNKNOWN"),
  (fe[(fe.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (fe[(fe.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (fe[(fe.NOT_FOUND = 5)] = "NOT_FOUND"),
  (fe[(fe.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (fe[(fe.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (fe[(fe.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (fe[(fe.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (fe[(fe.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (fe[(fe.ABORTED = 10)] = "ABORTED"),
  (fe[(fe.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (fe[(fe.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (fe[(fe.INTERNAL = 13)] = "INTERNAL"),
  (fe[(fe.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (fe[(fe.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jb() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zb = new yi([4294967295, 4294967295], 0);
function a0(t) {
  const e = Jb().encode(t),
    n = new zE();
  return n.update(e), new Uint8Array(n.digest());
}
function l0(t) {
  const e = new DataView(t.buffer),
    n = e.getUint32(0, !0),
    r = e.getUint32(4, !0),
    i = e.getUint32(8, !0),
    s = e.getUint32(12, !0);
  return [new yi([n, r], 0), new yi([i, s], 0)];
}
class Qp {
  constructor(e, n, r) {
    if (
      ((this.bitmap = e),
      (this.padding = n),
      (this.hashCount = r),
      n < 0 || n >= 8)
    )
      throw new _o(`Invalid padding: ${n}`);
    if (r < 0) throw new _o(`Invalid hash count: ${r}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new _o(`Invalid hash count: ${r}`);
    if (e.length === 0 && n !== 0)
      throw new _o(`Invalid padding when bitmap length is 0: ${n}`);
    (this.Ie = 8 * e.length - n), (this.Te = yi.fromNumber(this.Ie));
  }
  Ee(e, n, r) {
    let i = e.add(n.multiply(yi.fromNumber(r)));
    return (
      i.compare(Zb) === 1 && (i = new yi([i.getBits(0), i.getBits(1)], 0)),
      i.modulo(this.Te).toNumber()
    );
  }
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0;
  }
  mightContain(e) {
    if (this.Ie === 0) return !1;
    const n = a0(e),
      [r, i] = l0(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Ee(r, i, s);
      if (!this.de(o)) return !1;
    }
    return !0;
  }
  static create(e, n, r) {
    const i = e % 8 == 0 ? 0 : 8 - (e % 8),
      s = new Uint8Array(Math.ceil(e / 8)),
      o = new Qp(s, i, n);
    return r.forEach((a) => o.insert(a)), o;
  }
  insert(e) {
    if (this.Ie === 0) return;
    const n = a0(e),
      [r, i] = l0(n);
    for (let s = 0; s < this.hashCount; s++) {
      const o = this.Ee(r, i, s);
      this.Ae(o);
    }
  }
  Ae(e) {
    const n = Math.floor(e / 8),
      r = e % 8;
    this.bitmap[n] |= 1 << r;
  }
}
class _o extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yc {
  constructor(e, n, r, i, s) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = r),
      (this.documentUpdates = i),
      (this.resolvedLimboDocuments = s);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, r) {
    const i = new Map();
    return (
      i.set(e, Ra.createSynthesizedTargetChangeForCurrentChange(e, n, r)),
      new yc(re.min(), i, new Be(ve), rr(), ue())
    );
  }
}
class Ra {
  constructor(e, n, r, i, s) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = r),
      (this.modifiedDocuments = i),
      (this.removedDocuments = s);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, r) {
    return new Ra(r, n, ue(), ue(), ue());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zl {
  constructor(e, n, r, i) {
    (this.Re = e), (this.removedTargetIds = n), (this.key = r), (this.Ve = i);
  }
}
class TT {
  constructor(e, n) {
    (this.targetId = e), (this.me = n);
  }
}
class ST {
  constructor(e, n, r = _t.EMPTY_BYTE_STRING, i = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = r),
      (this.cause = i);
  }
}
class u0 {
  constructor() {
    (this.fe = 0),
      (this.ge = h0()),
      (this.pe = _t.EMPTY_BYTE_STRING),
      (this.ye = !1),
      (this.we = !0);
  }
  get current() {
    return this.ye;
  }
  get resumeToken() {
    return this.pe;
  }
  get Se() {
    return this.fe !== 0;
  }
  get be() {
    return this.we;
  }
  De(e) {
    e.approximateByteSize() > 0 && ((this.we = !0), (this.pe = e));
  }
  Ce() {
    let e = ue(),
      n = ue(),
      r = ue();
    return (
      this.ge.forEach((i, s) => {
        switch (s) {
          case 0:
            e = e.add(i);
            break;
          case 2:
            n = n.add(i);
            break;
          case 1:
            r = r.add(i);
            break;
          default:
            ne();
        }
      }),
      new Ra(this.pe, this.ye, e, n, r)
    );
  }
  ve() {
    (this.we = !1), (this.ge = h0());
  }
  Fe(e, n) {
    (this.we = !0), (this.ge = this.ge.insert(e, n));
  }
  Me(e) {
    (this.we = !0), (this.ge = this.ge.remove(e));
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    (this.fe -= 1), Ce(this.fe >= 0);
  }
  Ne() {
    (this.we = !0), (this.ye = !0);
  }
}
class e4 {
  constructor(e) {
    (this.Le = e),
      (this.Be = new Map()),
      (this.ke = rr()),
      (this.qe = c0()),
      (this.Qe = new Be(ve));
  }
  Ke(e) {
    for (const n of e.Re)
      e.Ve && e.Ve.isFoundDocument()
        ? this.$e(n, e.Ve)
        : this.Ue(n, e.key, e.Ve);
    for (const n of e.removedTargetIds) this.Ue(n, e.key, e.Ve);
  }
  We(e) {
    this.forEachTarget(e, (n) => {
      const r = this.Ge(n);
      switch (e.state) {
        case 0:
          this.ze(n) && r.De(e.resumeToken);
          break;
        case 1:
          r.Oe(), r.Se || r.ve(), r.De(e.resumeToken);
          break;
        case 2:
          r.Oe(), r.Se || this.removeTarget(n);
          break;
        case 3:
          this.ze(n) && (r.Ne(), r.De(e.resumeToken));
          break;
        case 4:
          this.ze(n) && (this.je(n), r.De(e.resumeToken));
          break;
        default:
          ne();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Be.forEach((r, i) => {
          this.ze(i) && n(i);
        });
  }
  He(e) {
    const n = e.targetId,
      r = e.me.count,
      i = this.Je(n);
    if (i) {
      const s = i.target;
      if (ad(s))
        if (r === 0) {
          const o = new X(s.path);
          this.Ue(n, o, Rt.newNoDocument(o, re.min()));
        } else Ce(r === 1);
      else {
        const o = this.Ye(n);
        if (o !== r) {
          const a = this.Ze(e),
            u = a ? this.Xe(a, e, o) : 1;
          if (u !== 0) {
            this.je(n);
            const c =
              u === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Qe = this.Qe.insert(n, c);
          }
        }
      }
    }
  }
  Ze(e) {
    const n = e.me.unchangedNames;
    if (!n || !n.bits) return null;
    const {
      bits: { bitmap: r = "", padding: i = 0 },
      hashCount: s = 0,
    } = n;
    let o, a;
    try {
      o = xi(r).toUint8Array();
    } catch (u) {
      if (u instanceof JE)
        return (
          Ts(
            "Decoding the base64 bloom filter in existence filter failed (" +
              u.message +
              "); ignoring the bloom filter and falling back to full re-query.",
          ),
          null
        );
      throw u;
    }
    try {
      a = new Qp(o, i, s);
    } catch (u) {
      return (
        Ts(
          u instanceof _o
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          u,
        ),
        null
      );
    }
    return a.Ie === 0 ? null : a;
  }
  Xe(e, n, r) {
    return n.me.count === r - this.nt(e, n.targetId) ? 0 : 2;
  }
  nt(e, n) {
    const r = this.Le.getRemoteKeysForTarget(n);
    let i = 0;
    return (
      r.forEach((s) => {
        const o = this.Le.tt(),
          a = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
        e.mightContain(a) || (this.Ue(n, s, null), i++);
      }),
      i
    );
  }
  rt(e) {
    const n = new Map();
    this.Be.forEach((s, o) => {
      const a = this.Je(o);
      if (a) {
        if (s.current && ad(a.target)) {
          const u = new X(a.target.path);
          this.ke.get(u) !== null ||
            this.it(o, u) ||
            this.Ue(o, u, Rt.newNoDocument(u, e));
        }
        s.be && (n.set(o, s.Ce()), s.ve());
      }
    });
    let r = ue();
    this.qe.forEach((s, o) => {
      let a = !0;
      o.forEachWhile((u) => {
        const c = this.Je(u);
        return (
          !c || c.purpose === "TargetPurposeLimboResolution" || ((a = !1), !1)
        );
      }),
        a && (r = r.add(s));
    }),
      this.ke.forEach((s, o) => o.setReadTime(e));
    const i = new yc(e, n, this.Qe, this.ke, r);
    return (this.ke = rr()), (this.qe = c0()), (this.Qe = new Be(ve)), i;
  }
  $e(e, n) {
    if (!this.ze(e)) return;
    const r = this.it(e, n.key) ? 2 : 0;
    this.Ge(e).Fe(n.key, r),
      (this.ke = this.ke.insert(n.key, n)),
      (this.qe = this.qe.insert(n.key, this.st(n.key).add(e)));
  }
  Ue(e, n, r) {
    if (!this.ze(e)) return;
    const i = this.Ge(e);
    this.it(e, n) ? i.Fe(n, 1) : i.Me(n),
      (this.qe = this.qe.insert(n, this.st(n).delete(e))),
      r && (this.ke = this.ke.insert(n, r));
  }
  removeTarget(e) {
    this.Be.delete(e);
  }
  Ye(e) {
    const n = this.Ge(e).Ce();
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  xe(e) {
    this.Ge(e).xe();
  }
  Ge(e) {
    let n = this.Be.get(e);
    return n || ((n = new u0()), this.Be.set(e, n)), n;
  }
  st(e) {
    let n = this.qe.get(e);
    return n || ((n = new yt(ve)), (this.qe = this.qe.insert(e, n))), n;
  }
  ze(e) {
    const n = this.Je(e) !== null;
    return n || Q("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Je(e) {
    const n = this.Be.get(e);
    return n && n.Se ? null : this.Le.ot(e);
  }
  je(e) {
    this.Be.set(e, new u0()),
      this.Le.getRemoteKeysForTarget(e).forEach((n) => {
        this.Ue(e, n, null);
      });
  }
  it(e, n) {
    return this.Le.getRemoteKeysForTarget(e).has(n);
  }
}
function c0() {
  return new Be(X.comparator);
}
function h0() {
  return new Be(X.comparator);
}
const t4 = { asc: "ASCENDING", desc: "DESCENDING" },
  n4 = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  r4 = { and: "AND", or: "OR" };
class i4 {
  constructor(e, n) {
    (this.databaseId = e), (this.useProto3Json = n);
  }
}
function ud(t, e) {
  return t.useProto3Json || hc(e) ? e : { value: e };
}
function Nu(t, e) {
  return t.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function PT(t, e) {
  return t.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function s4(t, e) {
  return Nu(t, e.toTimestamp());
}
function Nn(t) {
  return (
    Ce(!!t),
    re.fromTimestamp(
      (function (n) {
        const r = Br(n);
        return new rt(r.seconds, r.nanos);
      })(t),
    )
  );
}
function Yp(t, e) {
  return cd(t, e).canonicalString();
}
function cd(t, e) {
  const n = (function (i) {
    return new be(["projects", i.projectId, "databases", i.database]);
  })(t).child("documents");
  return e === void 0 ? n : n.child(e);
}
function xT(t) {
  const e = be.fromString(t);
  return Ce(kT(e)), e;
}
function hd(t, e) {
  return Yp(t.databaseId, e.path);
}
function bh(t, e) {
  const n = xT(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new Y(
      z.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId,
    );
  if (n.get(3) !== t.databaseId.database)
    throw new Y(
      z.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database,
    );
  return new X(AT(n));
}
function CT(t, e) {
  return Yp(t.databaseId, e);
}
function o4(t) {
  const e = xT(t);
  return e.length === 4 ? be.emptyPath() : AT(e);
}
function fd(t) {
  return new be([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function AT(t) {
  return Ce(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function f0(t, e, n) {
  return { name: hd(t, e), fields: n.value.mapValue.fields };
}
function a4(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const r = (function (c) {
        return c === "NO_CHANGE"
          ? 0
          : c === "ADD"
            ? 1
            : c === "REMOVE"
              ? 2
              : c === "CURRENT"
                ? 3
                : c === "RESET"
                  ? 4
                  : ne();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      i = e.targetChange.targetIds || [],
      s = (function (c, h) {
        return c.useProto3Json
          ? (Ce(h === void 0 || typeof h == "string"),
            _t.fromBase64String(h || ""))
          : (Ce(h === void 0 || h instanceof Buffer || h instanceof Uint8Array),
            _t.fromUint8Array(h || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (c) {
          const h = c.code === void 0 ? z.UNKNOWN : ET(c.code);
          return new Y(h, c.message || "");
        })(o);
    n = new ST(r, i, s, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const r = e.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = bh(t, r.document.name),
      s = Nn(r.document.updateTime),
      o = r.document.createTime ? Nn(r.document.createTime) : re.min(),
      a = new zt({ mapValue: { fields: r.document.fields } }),
      u = Rt.newFoundDocument(i, s, o, a),
      c = r.targetIds || [],
      h = r.removedTargetIds || [];
    n = new zl(c, h, u.key, u);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const r = e.documentDelete;
    r.document;
    const i = bh(t, r.document),
      s = r.readTime ? Nn(r.readTime) : re.min(),
      o = Rt.newNoDocument(i, s),
      a = r.removedTargetIds || [];
    n = new zl([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const r = e.documentRemove;
    r.document;
    const i = bh(t, r.document),
      s = r.removedTargetIds || [];
    n = new zl([], s, i, null);
  } else {
    if (!("filter" in e)) return ne();
    {
      e.filter;
      const r = e.filter;
      r.targetId;
      const { count: i = 0, unchangedNames: s } = r,
        o = new Yb(i, s),
        a = r.targetId;
      n = new TT(a, o);
    }
  }
  return n;
}
function l4(t, e) {
  let n;
  if (e instanceof Ia) n = { update: f0(t, e.key, e.value) };
  else if (e instanceof wT) n = { delete: hd(t, e.key) };
  else if (e instanceof Xr)
    n = { update: f0(t, e.key, e.data), updateMask: y4(e.fieldMask) };
  else {
    if (!(e instanceof Gb)) return ne();
    n = { verify: hd(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((r) =>
        (function (s, o) {
          const a = o.transform;
          if (a instanceof Du)
            return {
              fieldPath: o.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (a instanceof pa)
            return {
              fieldPath: o.field.canonicalString(),
              appendMissingElements: { values: a.elements },
            };
          if (a instanceof ma)
            return {
              fieldPath: o.field.canonicalString(),
              removeAllFromArray: { values: a.elements },
            };
          if (a instanceof bu)
            return { fieldPath: o.field.canonicalString(), increment: a.Pe };
          throw ne();
        })(0, r),
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (i, s) {
        return s.updateTime !== void 0
          ? { updateTime: s4(i, s.updateTime) }
          : s.exists !== void 0
            ? { exists: s.exists }
            : ne();
      })(t, e.precondition)),
    n
  );
}
function u4(t, e) {
  return t && t.length > 0
    ? (Ce(e !== void 0),
      t.map((n) =>
        (function (i, s) {
          let o = i.updateTime ? Nn(i.updateTime) : Nn(s);
          return (
            o.isEqual(re.min()) && (o = Nn(s)),
            new Wb(o, i.transformResults || [])
          );
        })(n, e),
      ))
    : [];
}
function c4(t, e) {
  return { documents: [CT(t, e.path)] };
}
function h4(t, e) {
  const n = { structuredQuery: {} },
    r = e.path;
  let i;
  e.collectionGroup !== null
    ? ((i = r),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (n.parent = CT(t, i));
  const s = (function (c) {
    if (c.length !== 0) return RT(Mn.create(c, "and"));
  })(e.filters);
  s && (n.structuredQuery.where = s);
  const o = (function (c) {
    if (c.length !== 0)
      return c.map((h) =>
        (function (p) {
          return { field: ji(p.field), direction: p4(p.dir) };
        })(h),
      );
  })(e.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const a = ud(t, e.limit);
  return (
    a !== null && (n.structuredQuery.limit = a),
    e.startAt &&
      (n.structuredQuery.startAt = (function (c) {
        return { before: c.inclusive, values: c.position };
      })(e.startAt)),
    e.endAt &&
      (n.structuredQuery.endAt = (function (c) {
        return { before: !c.inclusive, values: c.position };
      })(e.endAt)),
    { _t: n, parent: i }
  );
}
function f4(t) {
  let e = o4(t.parent);
  const n = t.structuredQuery,
    r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    Ce(r === 1);
    const h = n.from[0];
    h.allDescendants ? (i = h.collectionId) : (e = e.child(h.collectionId));
  }
  let s = [];
  n.where &&
    (s = (function (f) {
      const p = IT(f);
      return p instanceof Mn && nT(p) ? p.getFilters() : [p];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (f) {
      return f.map((p) =>
        (function (w) {
          return new Vu(
            Bi(w.field),
            (function (A) {
              switch (A) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(w.direction),
          );
        })(p),
      );
    })(n.orderBy));
  let a = null;
  n.limit &&
    (a = (function (f) {
      let p;
      return (p = typeof f == "object" ? f.value : f), hc(p) ? null : p;
    })(n.limit));
  let u = null;
  n.startAt &&
    (u = (function (f) {
      const p = !!f.before,
        g = f.values || [];
      return new ku(g, p);
    })(n.startAt));
  let c = null;
  return (
    n.endAt &&
      (c = (function (f) {
        const p = !f.before,
          g = f.values || [];
        return new ku(g, p);
      })(n.endAt)),
    kb(e, i, o, s, a, "F", u, c)
  );
}
function d4(t, e) {
  const n = (function (i) {
    switch (i) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return ne();
    }
  })(e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function IT(t) {
  return t.unaryFilter !== void 0
    ? (function (n) {
        switch (n.unaryFilter.op) {
          case "IS_NAN":
            const r = Bi(n.unaryFilter.field);
            return tt.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const i = Bi(n.unaryFilter.field);
            return tt.create(i, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const s = Bi(n.unaryFilter.field);
            return tt.create(s, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = Bi(n.unaryFilter.field);
            return tt.create(o, "!=", { nullValue: "NULL_VALUE" });
          default:
            return ne();
        }
      })(t)
    : t.fieldFilter !== void 0
      ? (function (n) {
          return tt.create(
            Bi(n.fieldFilter.field),
            (function (i) {
              switch (i) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                default:
                  return ne();
              }
            })(n.fieldFilter.op),
            n.fieldFilter.value,
          );
        })(t)
      : t.compositeFilter !== void 0
        ? (function (n) {
            return Mn.create(
              n.compositeFilter.filters.map((r) => IT(r)),
              (function (i) {
                switch (i) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return ne();
                }
              })(n.compositeFilter.op),
            );
          })(t)
        : ne();
}
function p4(t) {
  return t4[t];
}
function m4(t) {
  return n4[t];
}
function g4(t) {
  return r4[t];
}
function ji(t) {
  return { fieldPath: t.canonicalString() };
}
function Bi(t) {
  return mt.fromServerFormat(t.fieldPath);
}
function RT(t) {
  return t instanceof tt
    ? (function (n) {
        if (n.op === "==") {
          if (Jv(n.value))
            return { unaryFilter: { field: ji(n.field), op: "IS_NAN" } };
          if (Xv(n.value))
            return { unaryFilter: { field: ji(n.field), op: "IS_NULL" } };
        } else if (n.op === "!=") {
          if (Jv(n.value))
            return { unaryFilter: { field: ji(n.field), op: "IS_NOT_NAN" } };
          if (Xv(n.value))
            return { unaryFilter: { field: ji(n.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: ji(n.field), op: m4(n.op), value: n.value },
        };
      })(t)
    : t instanceof Mn
      ? (function (n) {
          const r = n.getFilters().map((i) => RT(i));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: g4(n.op), filters: r } };
        })(t)
      : ne();
}
function y4(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function kT(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vr {
  constructor(
    e,
    n,
    r,
    i,
    s = re.min(),
    o = re.min(),
    a = _t.EMPTY_BYTE_STRING,
    u = null,
  ) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = r),
      (this.sequenceNumber = i),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a),
      (this.expectedCount = u);
  }
  withSequenceNumber(e) {
    return new vr(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount,
    );
  }
  withResumeToken(e, n) {
    return new vr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e,
      null,
    );
  }
  withExpectedCount(e) {
    return new vr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e,
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new vr(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount,
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v4 {
  constructor(e) {
    this.ct = e;
  }
}
function _4(t) {
  const e = f4({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? ld(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w4 {
  constructor() {
    this.an = new E4();
  }
  addToCollectionParentIndex(e, n) {
    return this.an.add(n), U.resolve();
  }
  getCollectionParents(e, n) {
    return U.resolve(this.an.getEntries(n));
  }
  addFieldIndex(e, n) {
    return U.resolve();
  }
  deleteFieldIndex(e, n) {
    return U.resolve();
  }
  deleteAllFieldIndexes(e) {
    return U.resolve();
  }
  createTargetIndexes(e, n) {
    return U.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return U.resolve(null);
  }
  getIndexType(e, n) {
    return U.resolve(0);
  }
  getFieldIndexes(e, n) {
    return U.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return U.resolve(null);
  }
  getMinOffset(e, n) {
    return U.resolve(jr.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return U.resolve(jr.min());
  }
  updateCollectionGroup(e, n, r) {
    return U.resolve();
  }
  updateIndexEntries(e, n) {
    return U.resolve();
  }
}
class E4 {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n] || new yt(be.comparator),
      s = !i.has(r);
    return (this.index[n] = i.add(r)), s;
  }
  has(e) {
    const n = e.lastSegment(),
      r = e.popLast(),
      i = this.index[n];
    return i && i.has(r);
  }
  getEntries(e) {
    return (this.index[e] || new yt(be.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cs {
  constructor(e) {
    this.Nn = e;
  }
  next() {
    return (this.Nn += 2), this.Nn;
  }
  static Ln() {
    return new Cs(0);
  }
  static Bn() {
    return new Cs(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T4 {
  constructor() {
    (this.changes = new Ms(
      (e) => e.toString(),
      (e, n) => e.isEqual(n),
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, Rt.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const r = this.changes.get(n);
    return r !== void 0 ? U.resolve(r) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S4 {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P4 {
  constructor(e, n, r, i) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = r),
      (this.indexManager = i);
  }
  getDocument(e, n) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, n)))
      .next((i) => (r !== null && Lo(r.mutation, i, Jt.empty(), rt.now()), i));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.getLocalViewOfDocuments(e, r, ue()).next(() => r));
  }
  getLocalViewOfDocuments(e, n, r = ue()) {
    const i = di();
    return this.populateOverlays(e, i, n).next(() =>
      this.computeViews(e, n, i, r).next((s) => {
        let o = vo();
        return (
          s.forEach((a, u) => {
            o = o.insert(a, u.overlayedDocument);
          }),
          o
        );
      }),
    );
  }
  getOverlayedDocuments(e, n) {
    const r = di();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, ue()),
    );
  }
  populateOverlays(e, n, r) {
    const i = [];
    return (
      r.forEach((s) => {
        n.has(s) || i.push(s);
      }),
      this.documentOverlayCache.getOverlays(e, i).next((s) => {
        s.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, r, i) {
    let s = rr();
    const o = Mo(),
      a = (function () {
        return Mo();
      })();
    return (
      n.forEach((u, c) => {
        const h = r.get(c.key);
        i.has(c.key) && (h === void 0 || h.mutation instanceof Xr)
          ? (s = s.insert(c.key, c))
          : h !== void 0
            ? (o.set(c.key, h.mutation.getFieldMask()),
              Lo(h.mutation, c, h.mutation.getFieldMask(), rt.now()))
            : o.set(c.key, Jt.empty());
      }),
      this.recalculateAndSaveOverlays(e, s).next(
        (u) => (
          u.forEach((c, h) => o.set(c, h)),
          n.forEach((c, h) => {
            var f;
            return a.set(
              c,
              new S4(h, (f = o.get(c)) !== null && f !== void 0 ? f : null),
            );
          }),
          a
        ),
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const r = Mo();
    let i = new Be((o, a) => o - a),
      s = ue();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((u) => {
            const c = n.get(u);
            if (c === null) return;
            let h = r.get(u) || Jt.empty();
            (h = a.applyToLocalView(c, h)), r.set(u, h);
            const f = (i.get(a.batchId) || ue()).add(u);
            i = i.insert(a.batchId, f);
          });
      })
      .next(() => {
        const o = [],
          a = i.getReverseIterator();
        for (; a.hasNext(); ) {
          const u = a.getNext(),
            c = u.key,
            h = u.value,
            f = hT();
          h.forEach((p) => {
            if (!s.has(p)) {
              const g = vT(n.get(p), r.get(p));
              g !== null && f.set(p, g), (s = s.add(p));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, c, f));
        }
        return U.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((r) => this.recalculateAndSaveOverlays(e, r));
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    return (function (o) {
      return (
        X.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : Vb(n)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, n, r, i)
        : this.getDocumentsMatchingCollectionQuery(e, n, r, i);
  }
  getNextDocuments(e, n, r, i) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, r, i)
      .next((s) => {
        const o =
          i - s.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                r.largestBatchId,
                i - s.size,
              )
            : U.resolve(di());
        let a = -1,
          u = s;
        return o.next((c) =>
          U.forEach(
            c,
            (h, f) => (
              a < f.largestBatchId && (a = f.largestBatchId),
              s.get(h)
                ? U.resolve()
                : this.remoteDocumentCache.getEntry(e, h).next((p) => {
                    u = u.insert(h, p);
                  })
            ),
          )
            .next(() => this.populateOverlays(e, c, s))
            .next(() => this.computeViews(e, u, c, ue()))
            .next((h) => ({ batchId: a, changes: cT(h) })),
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new X(n)).next((r) => {
      let i = vo();
      return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, r, i) {
    const s = n.collectionGroup;
    let o = vo();
    return this.indexManager.getCollectionParents(e, s).next((a) =>
      U.forEach(a, (u) => {
        const c = (function (f, p) {
          return new fc(
            p,
            null,
            f.explicitOrderBy.slice(),
            f.filters.slice(),
            f.limit,
            f.limitType,
            f.startAt,
            f.endAt,
          );
        })(n, u.child(s));
        return this.getDocumentsMatchingCollectionQuery(e, c, r, i).next(
          (h) => {
            h.forEach((f, p) => {
              o = o.insert(f, p);
            });
          },
        );
      }).next(() => o),
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, r, i) {
    let s;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, n.path, r.largestBatchId)
      .next(
        (o) => (
          (s = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, r, s, i)
        ),
      )
      .next((o) => {
        s.forEach((u, c) => {
          const h = c.getKey();
          o.get(h) === null && (o = o.insert(h, Rt.newInvalidDocument(h)));
        });
        let a = vo();
        return (
          o.forEach((u, c) => {
            const h = s.get(u);
            h !== void 0 && Lo(h.mutation, c, Jt.empty(), rt.now()),
              pc(n, c) && (a = a.insert(u, c));
          }),
          a
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x4 {
  constructor(e) {
    (this.serializer = e), (this.lr = new Map()), (this.hr = new Map());
  }
  getBundleMetadata(e, n) {
    return U.resolve(this.lr.get(n));
  }
  saveBundleMetadata(e, n) {
    return (
      this.lr.set(
        n.id,
        (function (i) {
          return { id: i.id, version: i.version, createTime: Nn(i.createTime) };
        })(n),
      ),
      U.resolve()
    );
  }
  getNamedQuery(e, n) {
    return U.resolve(this.hr.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.hr.set(
        n.name,
        (function (i) {
          return {
            name: i.name,
            query: _4(i.bundledQuery),
            readTime: Nn(i.readTime),
          };
        })(n),
      ),
      U.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C4 {
  constructor() {
    (this.overlays = new Be(X.comparator)), (this.Pr = new Map());
  }
  getOverlay(e, n) {
    return U.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const r = di();
    return U.forEach(n, (i) =>
      this.getOverlay(e, i).next((s) => {
        s !== null && r.set(i, s);
      }),
    ).next(() => r);
  }
  saveOverlays(e, n, r) {
    return (
      r.forEach((i, s) => {
        this.ht(e, n, s);
      }),
      U.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, r) {
    const i = this.Pr.get(r);
    return (
      i !== void 0 &&
        (i.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.Pr.delete(r)),
      U.resolve()
    );
  }
  getOverlaysForCollection(e, n, r) {
    const i = di(),
      s = n.length + 1,
      o = new X(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const u = a.getNext().value,
        c = u.getKey();
      if (!n.isPrefixOf(c.path)) break;
      c.path.length === s && u.largestBatchId > r && i.set(u.getKey(), u);
    }
    return U.resolve(i);
  }
  getOverlaysForCollectionGroup(e, n, r, i) {
    let s = new Be((c, h) => c - h);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const c = o.getNext().value;
      if (c.getKey().getCollectionGroup() === n && c.largestBatchId > r) {
        let h = s.get(c.largestBatchId);
        h === null && ((h = di()), (s = s.insert(c.largestBatchId, h))),
          h.set(c.getKey(), c);
      }
    }
    const a = di(),
      u = s.getIterator();
    for (
      ;
      u.hasNext() &&
      (u.getNext().value.forEach((c, h) => a.set(c, h)), !(a.size() >= i));

    );
    return U.resolve(a);
  }
  ht(e, n, r) {
    const i = this.overlays.get(r.key);
    if (i !== null) {
      const o = this.Pr.get(i.largestBatchId).delete(r.key);
      this.Pr.set(i.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new Qb(n, r));
    let s = this.Pr.get(n);
    s === void 0 && ((s = ue()), this.Pr.set(n, s)),
      this.Pr.set(n, s.add(r.key));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A4 {
  constructor() {
    this.sessionToken = _t.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return U.resolve(this.sessionToken);
  }
  setSessionToken(e, n) {
    return (this.sessionToken = n), U.resolve();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xp {
  constructor() {
    (this.Ir = new yt(ot.Tr)), (this.Er = new yt(ot.dr));
  }
  isEmpty() {
    return this.Ir.isEmpty();
  }
  addReference(e, n) {
    const r = new ot(e, n);
    (this.Ir = this.Ir.add(r)), (this.Er = this.Er.add(r));
  }
  Ar(e, n) {
    e.forEach((r) => this.addReference(r, n));
  }
  removeReference(e, n) {
    this.Rr(new ot(e, n));
  }
  Vr(e, n) {
    e.forEach((r) => this.removeReference(r, n));
  }
  mr(e) {
    const n = new X(new be([])),
      r = new ot(n, e),
      i = new ot(n, e + 1),
      s = [];
    return (
      this.Er.forEachInRange([r, i], (o) => {
        this.Rr(o), s.push(o.key);
      }),
      s
    );
  }
  gr() {
    this.Ir.forEach((e) => this.Rr(e));
  }
  Rr(e) {
    (this.Ir = this.Ir.delete(e)), (this.Er = this.Er.delete(e));
  }
  pr(e) {
    const n = new X(new be([])),
      r = new ot(n, e),
      i = new ot(n, e + 1);
    let s = ue();
    return (
      this.Er.forEachInRange([r, i], (o) => {
        s = s.add(o.key);
      }),
      s
    );
  }
  containsKey(e) {
    const n = new ot(e, 0),
      r = this.Ir.firstAfterOrEqual(n);
    return r !== null && e.isEqual(r.key);
  }
}
class ot {
  constructor(e, n) {
    (this.key = e), (this.yr = n);
  }
  static Tr(e, n) {
    return X.comparator(e.key, n.key) || ve(e.yr, n.yr);
  }
  static dr(e, n) {
    return ve(e.yr, n.yr) || X.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I4 {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.wr = 1),
      (this.Sr = new yt(ot.Tr));
  }
  checkEmpty(e) {
    return U.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, r, i) {
    const s = this.wr;
    this.wr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new qb(s, n, r, i);
    this.mutationQueue.push(o);
    for (const a of i)
      (this.Sr = this.Sr.add(new ot(a.key, s))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return U.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return U.resolve(this.br(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const r = n + 1,
      i = this.Dr(r),
      s = i < 0 ? 0 : i;
    return U.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null,
    );
  }
  getHighestUnacknowledgedBatchId() {
    return U.resolve(this.mutationQueue.length === 0 ? -1 : this.wr - 1);
  }
  getAllMutationBatches(e) {
    return U.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const r = new ot(n, 0),
      i = new ot(n, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.Sr.forEachInRange([r, i], (o) => {
        const a = this.br(o.yr);
        s.push(a);
      }),
      U.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let r = new yt(ve);
    return (
      n.forEach((i) => {
        const s = new ot(i, 0),
          o = new ot(i, Number.POSITIVE_INFINITY);
        this.Sr.forEachInRange([s, o], (a) => {
          r = r.add(a.yr);
        });
      }),
      U.resolve(this.Cr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const r = n.path,
      i = r.length + 1;
    let s = r;
    X.isDocumentKey(s) || (s = s.child(""));
    const o = new ot(new X(s), 0);
    let a = new yt(ve);
    return (
      this.Sr.forEachWhile((u) => {
        const c = u.key.path;
        return !!r.isPrefixOf(c) && (c.length === i && (a = a.add(u.yr)), !0);
      }, o),
      U.resolve(this.Cr(a))
    );
  }
  Cr(e) {
    const n = [];
    return (
      e.forEach((r) => {
        const i = this.br(r);
        i !== null && n.push(i);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    Ce(this.vr(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Sr;
    return U.forEach(n.mutations, (i) => {
      const s = new ot(i.key, n.batchId);
      return (
        (r = r.delete(s)),
        this.referenceDelegate.markPotentiallyOrphaned(e, i.key)
      );
    }).next(() => {
      this.Sr = r;
    });
  }
  xn(e) {}
  containsKey(e, n) {
    const r = new ot(n, 0),
      i = this.Sr.firstAfterOrEqual(r);
    return U.resolve(n.isEqual(i && i.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, U.resolve();
  }
  vr(e, n) {
    return this.Dr(e);
  }
  Dr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  br(e) {
    const n = this.Dr(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R4 {
  constructor(e) {
    (this.Fr = e),
      (this.docs = (function () {
        return new Be(X.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const r = n.key,
      i = this.docs.get(r),
      s = i ? i.size : 0,
      o = this.Fr(n);
    return (
      (this.docs = this.docs.insert(r, { document: n.mutableCopy(), size: o })),
      (this.size += o - s),
      this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const r = this.docs.get(n);
    return U.resolve(r ? r.document.mutableCopy() : Rt.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let r = rr();
    return (
      n.forEach((i) => {
        const s = this.docs.get(i);
        r = r.insert(
          i,
          s ? s.document.mutableCopy() : Rt.newInvalidDocument(i),
        );
      }),
      U.resolve(r)
    );
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    let s = rr();
    const o = n.path,
      a = new X(o.child("")),
      u = this.docs.getIteratorFrom(a);
    for (; u.hasNext(); ) {
      const {
        key: c,
        value: { document: h },
      } = u.getNext();
      if (!o.isPrefixOf(c.path)) break;
      c.path.length > o.length + 1 ||
        fb(hb(h), r) <= 0 ||
        ((i.has(h.key) || pc(n, h)) && (s = s.insert(h.key, h.mutableCopy())));
    }
    return U.resolve(s);
  }
  getAllFromCollectionGroup(e, n, r, i) {
    ne();
  }
  Mr(e, n) {
    return U.forEach(this.docs, (r) => n(r));
  }
  newChangeBuffer(e) {
    return new k4(this);
  }
  getSize(e) {
    return U.resolve(this.size);
  }
}
class k4 extends T4 {
  constructor(e) {
    super(), (this.ur = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((r, i) => {
        i.isValidDocument()
          ? n.push(this.ur.addEntry(e, i))
          : this.ur.removeEntry(r);
      }),
      U.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.ur.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.ur.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class V4 {
  constructor(e) {
    (this.persistence = e),
      (this.Or = new Ms((n) => Kp(n), Gp)),
      (this.lastRemoteSnapshotVersion = re.min()),
      (this.highestTargetId = 0),
      (this.Nr = 0),
      (this.Lr = new Xp()),
      (this.targetCount = 0),
      (this.Br = Cs.Ln());
  }
  forEachTarget(e, n) {
    return this.Or.forEach((r, i) => n(i)), U.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return U.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return U.resolve(this.Nr);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.Br.next()), U.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      n > this.Nr && (this.Nr = n),
      U.resolve()
    );
  }
  Qn(e) {
    this.Or.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.Br = new Cs(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.Nr && (this.Nr = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Qn(n), (this.targetCount += 1), U.resolve();
  }
  updateTargetData(e, n) {
    return this.Qn(n), U.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Or.delete(n.target),
      this.Lr.mr(n.targetId),
      (this.targetCount -= 1),
      U.resolve()
    );
  }
  removeTargets(e, n, r) {
    let i = 0;
    const s = [];
    return (
      this.Or.forEach((o, a) => {
        a.sequenceNumber <= n &&
          r.get(a.targetId) === null &&
          (this.Or.delete(o),
          s.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          i++);
      }),
      U.waitFor(s).next(() => i)
    );
  }
  getTargetCount(e) {
    return U.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const r = this.Or.get(n) || null;
    return U.resolve(r);
  }
  addMatchingKeys(e, n, r) {
    return this.Lr.Ar(n, r), U.resolve();
  }
  removeMatchingKeys(e, n, r) {
    this.Lr.Vr(n, r);
    const i = this.persistence.referenceDelegate,
      s = [];
    return (
      i &&
        n.forEach((o) => {
          s.push(i.markPotentiallyOrphaned(e, o));
        }),
      U.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Lr.mr(n), U.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const r = this.Lr.pr(n);
    return U.resolve(r);
  }
  containsKey(e, n) {
    return U.resolve(this.Lr.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D4 {
  constructor(e, n) {
    (this.kr = {}),
      (this.overlays = {}),
      (this.qr = new zp(0)),
      (this.Qr = !1),
      (this.Qr = !0),
      (this.Kr = new A4()),
      (this.referenceDelegate = e(this)),
      (this.$r = new V4(this)),
      (this.indexManager = new w4()),
      (this.remoteDocumentCache = (function (i) {
        return new R4(i);
      })((r) => this.referenceDelegate.Ur(r))),
      (this.serializer = new v4(n)),
      (this.Wr = new x4(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Qr = !1), Promise.resolve();
  }
  get started() {
    return this.Qr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new C4()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let r = this.kr[e.toKey()];
    return (
      r || ((r = new I4(n, this.referenceDelegate)), (this.kr[e.toKey()] = r)),
      r
    );
  }
  getGlobalsCache() {
    return this.Kr;
  }
  getTargetCache() {
    return this.$r;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Wr;
  }
  runTransaction(e, n, r) {
    Q("MemoryPersistence", "Starting transaction:", e);
    const i = new b4(this.qr.next());
    return (
      this.referenceDelegate.Gr(),
      r(i)
        .next((s) => this.referenceDelegate.zr(i).next(() => s))
        .toPromise()
        .then((s) => (i.raiseOnCommittedEvent(), s))
    );
  }
  jr(e, n) {
    return U.or(Object.values(this.kr).map((r) => () => r.containsKey(e, n)));
  }
}
class b4 extends pb {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class Jp {
  constructor(e) {
    (this.persistence = e), (this.Hr = new Xp()), (this.Jr = null);
  }
  static Yr(e) {
    return new Jp(e);
  }
  get Zr() {
    if (this.Jr) return this.Jr;
    throw ne();
  }
  addReference(e, n, r) {
    return (
      this.Hr.addReference(r, n), this.Zr.delete(r.toString()), U.resolve()
    );
  }
  removeReference(e, n, r) {
    return (
      this.Hr.removeReference(r, n), this.Zr.add(r.toString()), U.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Zr.add(n.toString()), U.resolve();
  }
  removeTarget(e, n) {
    this.Hr.mr(n.targetId).forEach((i) => this.Zr.add(i.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((i) => {
        i.forEach((s) => this.Zr.add(s.toString()));
      })
      .next(() => r.removeTargetData(e, n));
  }
  Gr() {
    this.Jr = new Set();
  }
  zr(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return U.forEach(this.Zr, (r) => {
      const i = X.fromPath(r);
      return this.Xr(e, i).next((s) => {
        s || n.removeEntry(i, re.min());
      });
    }).next(() => ((this.Jr = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.Xr(e, n).next((r) => {
      r ? this.Zr.delete(n.toString()) : this.Zr.add(n.toString());
    });
  }
  Ur(e) {
    return 0;
  }
  Xr(e, n) {
    return U.or([
      () => U.resolve(this.Hr.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.jr(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zp {
  constructor(e, n, r, i) {
    (this.targetId = e), (this.fromCache = n), (this.Ki = r), (this.$i = i);
  }
  static Ui(e, n) {
    let r = ue(),
      i = ue();
    for (const s of n.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          i = i.add(s.doc.key);
      }
    return new Zp(e, n.fromCache, r, i);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class N4 {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O4 {
  constructor() {
    (this.Wi = !1),
      (this.Gi = !1),
      (this.zi = 100),
      (this.ji = (function () {
        return FV() ? 8 : mb(MV()) > 0 ? 6 : 4;
      })());
  }
  initialize(e, n) {
    (this.Hi = e), (this.indexManager = n), (this.Wi = !0);
  }
  getDocumentsMatchingQuery(e, n, r, i) {
    const s = { result: null };
    return this.Ji(e, n)
      .next((o) => {
        s.result = o;
      })
      .next(() => {
        if (!s.result)
          return this.Yi(e, n, i, r).next((o) => {
            s.result = o;
          });
      })
      .next(() => {
        if (s.result) return;
        const o = new N4();
        return this.Zi(e, n, o).next((a) => {
          if (((s.result = a), this.Gi)) return this.Xi(e, n, o, a.size);
        });
      })
      .next(() => s.result);
  }
  Xi(e, n, r, i) {
    return r.documentReadCount < this.zi
      ? (uo() <= de.DEBUG &&
          Q(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Fi(n),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.zi,
            "documents",
          ),
        U.resolve())
      : (uo() <= de.DEBUG &&
          Q(
            "QueryEngine",
            "Query:",
            Fi(n),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            i,
            "documents as results.",
          ),
        r.documentReadCount > this.ji * i
          ? (uo() <= de.DEBUG &&
              Q(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Fi(n),
                "as using cache indexes may help improve performance.",
              ),
            this.indexManager.createTargetIndexes(e, Dn(n)))
          : U.resolve());
  }
  Ji(e, n) {
    if (n0(n)) return U.resolve(null);
    let r = Dn(n);
    return this.indexManager.getIndexType(e, r).next((i) =>
      i === 0
        ? null
        : (n.limit !== null && i === 1 && ((n = ld(n, null, "F")), (r = Dn(n))),
          this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
            const o = ue(...s);
            return this.Hi.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, r).next((u) => {
                const c = this.es(n, a);
                return this.ts(n, c, o, u.readTime)
                  ? this.Ji(e, ld(n, null, "F"))
                  : this.ns(e, c, n, u);
              }),
            );
          })),
    );
  }
  Yi(e, n, r, i) {
    return n0(n) || i.isEqual(re.min())
      ? U.resolve(null)
      : this.Hi.getDocuments(e, r).next((s) => {
          const o = this.es(n, s);
          return this.ts(n, o, r, i)
            ? U.resolve(null)
            : (uo() <= de.DEBUG &&
                Q(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  i.toString(),
                  Fi(n),
                ),
              this.ns(e, o, n, cb(i, -1)).next((a) => a));
        });
  }
  es(e, n) {
    let r = new yt(lT(e));
    return (
      n.forEach((i, s) => {
        pc(e, s) && (r = r.add(s));
      }),
      r
    );
  }
  ts(e, n, r, i) {
    if (e.limit === null) return !1;
    if (r.size !== n.size) return !0;
    const s = e.limitType === "F" ? n.last() : n.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
  }
  Zi(e, n, r) {
    return (
      uo() <= de.DEBUG &&
        Q("QueryEngine", "Using full collection scan to execute query:", Fi(n)),
      this.Hi.getDocumentsMatchingQuery(e, n, jr.min(), r)
    );
  }
  ns(e, n, r, i) {
    return this.Hi.getDocumentsMatchingQuery(e, r, i).next(
      (s) => (
        n.forEach((o) => {
          s = s.insert(o.key, o);
        }),
        s
      ),
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M4 {
  constructor(e, n, r, i) {
    (this.persistence = e),
      (this.rs = n),
      (this.serializer = i),
      (this.ss = new Be(ve)),
      (this.os = new Ms((s) => Kp(s), Gp)),
      (this._s = new Map()),
      (this.us = e.getRemoteDocumentCache()),
      (this.$r = e.getTargetCache()),
      (this.Wr = e.getBundleCache()),
      this.cs(r);
  }
  cs(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager,
      )),
      (this.localDocuments = new P4(
        this.us,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager,
      )),
      this.us.setIndexManager(this.indexManager),
      this.rs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.ss),
    );
  }
}
function L4(t, e, n, r) {
  return new M4(t, e, n, r);
}
async function VT(t, e) {
  const n = ie(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let i;
      return n.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (s) => ((i = s), n.cs(e), n.mutationQueue.getAllMutationBatches(r)),
        )
        .next((s) => {
          const o = [],
            a = [];
          let u = ue();
          for (const c of i) {
            o.push(c.batchId);
            for (const h of c.mutations) u = u.add(h.key);
          }
          for (const c of s) {
            a.push(c.batchId);
            for (const h of c.mutations) u = u.add(h.key);
          }
          return n.localDocuments
            .getDocuments(r, u)
            .next((c) => ({ ls: c, removedBatchIds: o, addedBatchIds: a }));
        });
    },
  );
}
function F4(t, e) {
  const n = ie(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      const i = e.batch.keys(),
        s = n.us.newChangeBuffer({ trackRemovals: !0 });
      return (function (a, u, c, h) {
        const f = c.batch,
          p = f.keys();
        let g = U.resolve();
        return (
          p.forEach((w) => {
            g = g
              .next(() => h.getEntry(u, w))
              .next((C) => {
                const A = c.docVersions.get(w);
                Ce(A !== null),
                  C.version.compareTo(A) < 0 &&
                    (f.applyToRemoteDocument(C, c),
                    C.isValidDocument() &&
                      (C.setReadTime(c.commitVersion), h.addEntry(C)));
              });
          }),
          g.next(() => a.mutationQueue.removeMutationBatch(u, f))
        );
      })(n, r, e, s)
        .next(() => s.apply(r))
        .next(() => n.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(
            r,
            i,
            e.batch.batchId,
          ),
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (a) {
              let u = ue();
              for (let c = 0; c < a.mutationResults.length; ++c)
                a.mutationResults[c].transformResults.length > 0 &&
                  (u = u.add(a.batch.mutations[c].key));
              return u;
            })(e),
          ),
        )
        .next(() => n.localDocuments.getDocuments(r, i));
    },
  );
}
function DT(t) {
  const e = ie(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.$r.getLastRemoteSnapshotVersion(n),
  );
}
function j4(t, e) {
  const n = ie(t),
    r = e.snapshotVersion;
  let i = n.ss;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      const o = n.us.newChangeBuffer({ trackRemovals: !0 });
      i = n.ss;
      const a = [];
      e.targetChanges.forEach((h, f) => {
        const p = i.get(f);
        if (!p) return;
        a.push(
          n.$r
            .removeMatchingKeys(s, h.removedDocuments, f)
            .next(() => n.$r.addMatchingKeys(s, h.addedDocuments, f)),
        );
        let g = p.withSequenceNumber(s.currentSequenceNumber);
        e.targetMismatches.get(f) !== null
          ? (g = g
              .withResumeToken(_t.EMPTY_BYTE_STRING, re.min())
              .withLastLimboFreeSnapshotVersion(re.min()))
          : h.resumeToken.approximateByteSize() > 0 &&
            (g = g.withResumeToken(h.resumeToken, r)),
          (i = i.insert(f, g)),
          (function (C, A, E) {
            return C.resumeToken.approximateByteSize() === 0 ||
              A.snapshotVersion.toMicroseconds() -
                C.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : E.addedDocuments.size +
                  E.modifiedDocuments.size +
                  E.removedDocuments.size >
                  0;
          })(p, g, h) && a.push(n.$r.updateTargetData(s, g));
      });
      let u = rr(),
        c = ue();
      if (
        (e.documentUpdates.forEach((h) => {
          e.resolvedLimboDocuments.has(h) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(s, h));
        }),
        a.push(
          B4(s, o, e.documentUpdates).next((h) => {
            (u = h.hs), (c = h.Ps);
          }),
        ),
        !r.isEqual(re.min()))
      ) {
        const h = n.$r
          .getLastRemoteSnapshotVersion(s)
          .next((f) => n.$r.setTargetsMetadata(s, s.currentSequenceNumber, r));
        a.push(h);
      }
      return U.waitFor(a)
        .next(() => o.apply(s))
        .next(() => n.localDocuments.getLocalViewOfDocuments(s, u, c))
        .next(() => u);
    })
    .then((s) => ((n.ss = i), s));
}
function B4(t, e, n) {
  let r = ue(),
    i = ue();
  return (
    n.forEach((s) => (r = r.add(s))),
    e.getEntries(t, r).next((s) => {
      let o = rr();
      return (
        n.forEach((a, u) => {
          const c = s.get(a);
          u.isFoundDocument() !== c.isFoundDocument() && (i = i.add(a)),
            u.isNoDocument() && u.version.isEqual(re.min())
              ? (e.removeEntry(a, u.readTime), (o = o.insert(a, u)))
              : !c.isValidDocument() ||
                  u.version.compareTo(c.version) > 0 ||
                  (u.version.compareTo(c.version) === 0 && c.hasPendingWrites)
                ? (e.addEntry(u), (o = o.insert(a, u)))
                : Q(
                    "LocalStore",
                    "Ignoring outdated watch update for ",
                    a,
                    ". Current version:",
                    c.version,
                    " Watch version:",
                    u.version,
                  );
        }),
        { hs: o, Ps: i }
      );
    })
  );
}
function U4(t, e) {
  const n = ie(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(r, e)
    ),
  );
}
function z4(t, e) {
  const n = ie(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let i;
      return n.$r
        .getTargetData(r, e)
        .next((s) =>
          s
            ? ((i = s), U.resolve(i))
            : n.$r
                .allocateTargetId(r)
                .next(
                  (o) => (
                    (i = new vr(
                      e,
                      o,
                      "TargetPurposeListen",
                      r.currentSequenceNumber,
                    )),
                    n.$r.addTargetData(r, i).next(() => i)
                  ),
                ),
        );
    })
    .then((r) => {
      const i = n.ss.get(r.targetId);
      return (
        (i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
          ((n.ss = n.ss.insert(r.targetId, r)), n.os.set(e, r.targetId)),
        r
      );
    });
}
async function dd(t, e, n) {
  const r = ie(t),
    i = r.ss.get(e),
    s = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await r.persistence.runTransaction("Release target", s, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, i),
      ));
  } catch (o) {
    if (!Aa(o)) throw o;
    Q("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (r.ss = r.ss.remove(e)), r.os.delete(i.target);
}
function d0(t, e, n) {
  const r = ie(t);
  let i = re.min(),
    s = ue();
  return r.persistence.runTransaction("Execute query", "readwrite", (o) =>
    (function (u, c, h) {
      const f = ie(u),
        p = f.os.get(h);
      return p !== void 0 ? U.resolve(f.ss.get(p)) : f.$r.getTargetData(c, h);
    })(r, o, Dn(e))
      .next((a) => {
        if (a)
          return (
            (i = a.lastLimboFreeSnapshotVersion),
            r.$r.getMatchingKeysForTargetId(o, a.targetId).next((u) => {
              s = u;
            })
          );
      })
      .next(() =>
        r.rs.getDocumentsMatchingQuery(o, e, n ? i : re.min(), n ? s : ue()),
      )
      .next((a) => ($4(r, bb(e), a), { documents: a, Is: s })),
  );
}
function $4(t, e, n) {
  let r = t._s.get(e) || re.min();
  n.forEach((i, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    t._s.set(e, r);
}
class p0 {
  constructor() {
    this.activeTargetIds = jb();
  }
  Vs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  Rs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class W4 {
  constructor() {
    (this.io = new p0()),
      (this.so = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, r) {}
  addLocalQueryTarget(e) {
    return this.io.Vs(e), this.so[e] || "not-current";
  }
  updateQueryState(e, n, r) {
    this.so[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.io.fs(e);
  }
  isLocalQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.so[e];
  }
  getAllActiveQueryTargets() {
    return this.io.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.io.activeTargetIds.has(e);
  }
  start() {
    return (this.io = new p0()), Promise.resolve();
  }
  handleUserChange(e, n, r) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H4 {
  oo(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m0 {
  constructor() {
    (this._o = () => this.ao()),
      (this.uo = () => this.co()),
      (this.lo = []),
      this.ho();
  }
  oo(e) {
    this.lo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this._o),
      window.removeEventListener("offline", this.uo);
  }
  ho() {
    window.addEventListener("online", this._o),
      window.addEventListener("offline", this.uo);
  }
  ao() {
    Q("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.lo) e(0);
  }
  co() {
    Q("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.lo) e(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Tl = null;
function Nh() {
  return (
    Tl === null
      ? (Tl = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Tl++,
    "0x" + Tl.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const K4 = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G4 {
  constructor(e) {
    (this.Po = e.Po), (this.Io = e.Io);
  }
  To(e) {
    this.Eo = e;
  }
  Ao(e) {
    this.Ro = e;
  }
  Vo(e) {
    this.mo = e;
  }
  onMessage(e) {
    this.fo = e;
  }
  close() {
    this.Io();
  }
  send(e) {
    this.Po(e);
  }
  po() {
    this.Eo();
  }
  yo() {
    this.Ro();
  }
  wo(e) {
    this.mo(e);
  }
  So(e) {
    this.fo(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xt = "WebChannelConnection";
class q4 extends class {
  constructor(n) {
    (this.databaseInfo = n), (this.databaseId = n.databaseId);
    const r = n.ssl ? "https" : "http",
      i = encodeURIComponent(this.databaseId.projectId),
      s = encodeURIComponent(this.databaseId.database);
    (this.bo = r + "://" + n.host),
      (this.Do = `projects/${i}/databases/${s}`),
      (this.Co =
        this.databaseId.database === "(default)"
          ? `project_id=${i}`
          : `project_id=${i}&database_id=${s}`);
  }
  get vo() {
    return !1;
  }
  Fo(n, r, i, s, o) {
    const a = Nh(),
      u = this.Mo(n, r.toUriEncodedString());
    Q("RestConnection", `Sending RPC '${n}' ${a}:`, u, i);
    const c = {
      "google-cloud-resource-prefix": this.Do,
      "x-goog-request-params": this.Co,
    };
    return (
      this.xo(c, s, o),
      this.Oo(n, u, c, i).then(
        (h) => (Q("RestConnection", `Received RPC '${n}' ${a}: `, h), h),
        (h) => {
          throw (
            (Ts(
              "RestConnection",
              `RPC '${n}' ${a} failed with error: `,
              h,
              "url: ",
              u,
              "request:",
              i,
            ),
            h)
          );
        },
      )
    );
  }
  No(n, r, i, s, o, a) {
    return this.Fo(n, r, i, s, o);
  }
  xo(n, r, i) {
    (n["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + Os;
    })()),
      (n["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (n["X-Firebase-GMPID"] = this.databaseInfo.appId),
      r && r.headers.forEach((s, o) => (n[o] = s)),
      i && i.headers.forEach((s, o) => (n[o] = s));
  }
  Mo(n, r) {
    const i = K4[n];
    return `${this.bo}/v1/${r}:${i}`;
  }
  terminate() {}
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions);
  }
  Oo(e, n, r, i) {
    const s = Nh();
    return new Promise((o, a) => {
      const u = new $E();
      u.setWithCredentials(!0),
        u.listenOnce(HE.COMPLETE, () => {
          try {
            switch (u.getLastErrorCode()) {
              case jl.NO_ERROR:
                const h = u.getResponseJson();
                Q(xt, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(h)),
                  o(h);
                break;
              case jl.TIMEOUT:
                Q(xt, `RPC '${e}' ${s} timed out`),
                  a(new Y(z.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case jl.HTTP_ERROR:
                const f = u.getStatus();
                if (
                  (Q(
                    xt,
                    `RPC '${e}' ${s} failed with status:`,
                    f,
                    "response text:",
                    u.getResponseText(),
                  ),
                  f > 0)
                ) {
                  let p = u.getResponseJson();
                  Array.isArray(p) && (p = p[0]);
                  const g = p == null ? void 0 : p.error;
                  if (g && g.status && g.message) {
                    const w = (function (A) {
                      const E = A.toLowerCase().replace(/_/g, "-");
                      return Object.values(z).indexOf(E) >= 0 ? E : z.UNKNOWN;
                    })(g.status);
                    a(new Y(w, g.message));
                  } else
                    a(
                      new Y(
                        z.UNKNOWN,
                        "Server responded with status " + u.getStatus(),
                      ),
                    );
                } else a(new Y(z.UNAVAILABLE, "Connection failed."));
                break;
              default:
                ne();
            }
          } finally {
            Q(xt, `RPC '${e}' ${s} completed.`);
          }
        });
      const c = JSON.stringify(i);
      Q(xt, `RPC '${e}' ${s} sending request:`, i), u.send(n, "POST", c, r, 15);
    });
  }
  Lo(e, n, r) {
    const i = Nh(),
      s = [this.bo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"],
      o = qE(),
      a = GE(),
      u = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      c = this.longPollingOptions.timeoutSeconds;
    c !== void 0 && (u.longPollingTimeout = Math.round(1e3 * c)),
      this.useFetchStreams && (u.xmlHttpFactory = new WE({})),
      this.xo(u.initMessageHeaders, n, r),
      (u.encodeInitMessageHeaders = !0);
    const h = s.join("");
    Q(xt, `Creating RPC '${e}' stream ${i}: ${h}`, u);
    const f = o.createWebChannel(h, u);
    let p = !1,
      g = !1;
    const w = new G4({
        Po: (A) => {
          g
            ? Q(xt, `Not sending because RPC '${e}' stream ${i} is closed:`, A)
            : (p ||
                (Q(xt, `Opening RPC '${e}' stream ${i} transport.`),
                f.open(),
                (p = !0)),
              Q(xt, `RPC '${e}' stream ${i} sending:`, A),
              f.send(A));
        },
        Io: () => f.close(),
      }),
      C = (A, E, y) => {
        A.listen(E, (T) => {
          try {
            y(T);
          } catch (k) {
            setTimeout(() => {
              throw k;
            }, 0);
          }
        });
      };
    return (
      C(f, yo.EventType.OPEN, () => {
        g || (Q(xt, `RPC '${e}' stream ${i} transport opened.`), w.po());
      }),
      C(f, yo.EventType.CLOSE, () => {
        g ||
          ((g = !0), Q(xt, `RPC '${e}' stream ${i} transport closed`), w.wo());
      }),
      C(f, yo.EventType.ERROR, (A) => {
        g ||
          ((g = !0),
          Ts(xt, `RPC '${e}' stream ${i} transport errored:`, A),
          w.wo(new Y(z.UNAVAILABLE, "The operation could not be completed")));
      }),
      C(f, yo.EventType.MESSAGE, (A) => {
        var E;
        if (!g) {
          const y = A.data[0];
          Ce(!!y);
          const T = y,
            k =
              T.error ||
              ((E = T[0]) === null || E === void 0 ? void 0 : E.error);
          if (k) {
            Q(xt, `RPC '${e}' stream ${i} received error:`, k);
            const M = k.status;
            let j = (function (S) {
                const x = Xe[S];
                if (x !== void 0) return ET(x);
              })(M),
              P = k.message;
            j === void 0 &&
              ((j = z.INTERNAL),
              (P =
                "Unknown error status: " + M + " with message " + k.message)),
              (g = !0),
              w.wo(new Y(j, P)),
              f.close();
          } else Q(xt, `RPC '${e}' stream ${i} received:`, y), w.So(y);
        }
      }),
      C(a, KE.STAT_EVENT, (A) => {
        A.stat === rd.PROXY
          ? Q(xt, `RPC '${e}' stream ${i} detected buffering proxy`)
          : A.stat === rd.NOPROXY &&
            Q(xt, `RPC '${e}' stream ${i} detected no buffering proxy`);
      }),
      setTimeout(() => {
        w.yo();
      }, 0),
      w
    );
  }
}
function Oh() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vc(t) {
  return new i4(t, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bT {
  constructor(e, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.ai = e),
      (this.timerId = n),
      (this.Bo = r),
      (this.ko = i),
      (this.qo = s),
      (this.Qo = 0),
      (this.Ko = null),
      (this.$o = Date.now()),
      this.reset();
  }
  reset() {
    this.Qo = 0;
  }
  Uo() {
    this.Qo = this.qo;
  }
  Wo(e) {
    this.cancel();
    const n = Math.floor(this.Qo + this.Go()),
      r = Math.max(0, Date.now() - this.$o),
      i = Math.max(0, n - r);
    i > 0 &&
      Q(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`,
      ),
      (this.Ko = this.ai.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.$o = Date.now()), e()),
      )),
      (this.Qo *= this.ko),
      this.Qo < this.Bo && (this.Qo = this.Bo),
      this.Qo > this.qo && (this.Qo = this.qo);
  }
  zo() {
    this.Ko !== null && (this.Ko.skipDelay(), (this.Ko = null));
  }
  cancel() {
    this.Ko !== null && (this.Ko.cancel(), (this.Ko = null));
  }
  Go() {
    return (Math.random() - 0.5) * this.Qo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NT {
  constructor(e, n, r, i, s, o, a, u) {
    (this.ai = e),
      (this.jo = r),
      (this.Ho = i),
      (this.connection = s),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = u),
      (this.state = 0),
      (this.Jo = 0),
      (this.Yo = null),
      (this.Zo = null),
      (this.stream = null),
      (this.Xo = 0),
      (this.e_ = new bT(e, n));
  }
  t_() {
    return this.state === 1 || this.state === 5 || this.n_();
  }
  n_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    (this.Xo = 0), this.state !== 4 ? this.auth() : this.r_();
  }
  async stop() {
    this.t_() && (await this.close(0));
  }
  i_() {
    (this.state = 0), this.e_.reset();
  }
  s_() {
    this.n_() &&
      this.Yo === null &&
      (this.Yo = this.ai.enqueueAfterDelay(this.jo, 6e4, () => this.o_()));
  }
  __(e) {
    this.a_(), this.stream.send(e);
  }
  async o_() {
    if (this.n_()) return this.close(0);
  }
  a_() {
    this.Yo && (this.Yo.cancel(), (this.Yo = null));
  }
  u_() {
    this.Zo && (this.Zo.cancel(), (this.Zo = null));
  }
  async close(e, n) {
    this.a_(),
      this.u_(),
      this.e_.cancel(),
      this.Jo++,
      e !== 4
        ? this.e_.reset()
        : n && n.code === z.RESOURCE_EXHAUSTED
          ? (nr(n.toString()),
            nr(
              "Using maximum backoff delay to prevent overloading the backend.",
            ),
            this.e_.Uo())
          : n &&
            n.code === z.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.c_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.Vo(n);
  }
  c_() {}
  auth() {
    this.state = 1;
    const e = this.l_(this.Jo),
      n = this.Jo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, i]) => {
        this.Jo === n && this.h_(r, i);
      },
      (r) => {
        e(() => {
          const i = new Y(
            z.UNKNOWN,
            "Fetching auth token failed: " + r.message,
          );
          return this.P_(i);
        });
      },
    );
  }
  h_(e, n) {
    const r = this.l_(this.Jo);
    (this.stream = this.I_(e, n)),
      this.stream.To(() => {
        r(() => this.listener.To());
      }),
      this.stream.Ao(() => {
        r(
          () => (
            (this.state = 2),
            (this.Zo = this.ai.enqueueAfterDelay(
              this.Ho,
              1e4,
              () => (this.n_() && (this.state = 3), Promise.resolve()),
            )),
            this.listener.Ao()
          ),
        );
      }),
      this.stream.Vo((i) => {
        r(() => this.P_(i));
      }),
      this.stream.onMessage((i) => {
        r(() => (++this.Xo == 1 ? this.T_(i) : this.onNext(i)));
      });
  }
  r_() {
    (this.state = 5),
      this.e_.Wo(async () => {
        (this.state = 0), this.start();
      });
  }
  P_(e) {
    return (
      Q("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  l_(e) {
    return (n) => {
      this.ai.enqueueAndForget(() =>
        this.Jo === e
          ? n()
          : (Q(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher.",
            ),
            Promise.resolve()),
      );
    };
  }
}
class Q4 extends NT {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o,
    ),
      (this.serializer = s);
  }
  I_(e, n) {
    return this.connection.Lo("Listen", e, n);
  }
  T_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.e_.reset();
    const n = a4(this.serializer, e),
      r = (function (s) {
        if (!("targetChange" in s)) return re.min();
        const o = s.targetChange;
        return o.targetIds && o.targetIds.length
          ? re.min()
          : o.readTime
            ? Nn(o.readTime)
            : re.min();
      })(e);
    return this.listener.E_(n, r);
  }
  d_(e) {
    const n = {};
    (n.database = fd(this.serializer)),
      (n.addTarget = (function (s, o) {
        let a;
        const u = o.target;
        if (
          ((a = ad(u) ? { documents: c4(s, u) } : { query: h4(s, u)._t }),
          (a.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          a.resumeToken = PT(s, o.resumeToken);
          const c = ud(s, o.expectedCount);
          c !== null && (a.expectedCount = c);
        } else if (o.snapshotVersion.compareTo(re.min()) > 0) {
          a.readTime = Nu(s, o.snapshotVersion.toTimestamp());
          const c = ud(s, o.expectedCount);
          c !== null && (a.expectedCount = c);
        }
        return a;
      })(this.serializer, e));
    const r = d4(this.serializer, e);
    r && (n.labels = r), this.__(n);
  }
  A_(e) {
    const n = {};
    (n.database = fd(this.serializer)), (n.removeTarget = e), this.__(n);
  }
}
class Y4 extends NT {
  constructor(e, n, r, i, s, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      r,
      i,
      o,
    ),
      (this.serializer = s);
  }
  get R_() {
    return this.Xo > 0;
  }
  start() {
    (this.lastStreamToken = void 0), super.start();
  }
  c_() {
    this.R_ && this.V_([]);
  }
  I_(e, n) {
    return this.connection.Lo("Write", e, n);
  }
  T_(e) {
    return (
      Ce(!!e.streamToken),
      (this.lastStreamToken = e.streamToken),
      Ce(!e.writeResults || e.writeResults.length === 0),
      this.listener.m_()
    );
  }
  onNext(e) {
    Ce(!!e.streamToken),
      (this.lastStreamToken = e.streamToken),
      this.e_.reset();
    const n = u4(e.writeResults, e.commitTime),
      r = Nn(e.commitTime);
    return this.listener.f_(r, n);
  }
  g_() {
    const e = {};
    (e.database = fd(this.serializer)), this.__(e);
  }
  V_(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((r) => l4(this.serializer, r)),
    };
    this.__(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X4 extends class {} {
  constructor(e, n, r, i) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = r),
      (this.serializer = i),
      (this.p_ = !1);
  }
  y_() {
    if (this.p_)
      throw new Y(
        z.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  Fo(e, n, r, i) {
    return (
      this.y_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([s, o]) => this.connection.Fo(e, cd(n, r), i, s, o))
        .catch((s) => {
          throw s.name === "FirebaseError"
            ? (s.code === z.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              s)
            : new Y(z.UNKNOWN, s.toString());
        })
    );
  }
  No(e, n, r, i, s) {
    return (
      this.y_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, a]) => this.connection.No(e, cd(n, r), i, o, a, s))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === z.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new Y(z.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    (this.p_ = !0), this.connection.terminate();
  }
}
class J4 {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.w_ = 0),
      (this.S_ = null),
      (this.b_ = !0);
  }
  D_() {
    this.w_ === 0 &&
      (this.C_("Unknown"),
      (this.S_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.S_ = null),
          this.v_("Backend didn't respond within 10 seconds."),
          this.C_("Offline"),
          Promise.resolve()
        ),
      )));
  }
  F_(e) {
    this.state === "Online"
      ? this.C_("Unknown")
      : (this.w_++,
        this.w_ >= 1 &&
          (this.M_(),
          this.v_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`,
          ),
          this.C_("Offline")));
  }
  set(e) {
    this.M_(), (this.w_ = 0), e === "Online" && (this.b_ = !1), this.C_(e);
  }
  C_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  v_(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.b_ ? (nr(n), (this.b_ = !1)) : Q("OnlineStateTracker", n);
  }
  M_() {
    this.S_ !== null && (this.S_.cancel(), (this.S_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z4 {
  constructor(e, n, r, i, s) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.x_ = []),
      (this.O_ = new Map()),
      (this.N_ = new Set()),
      (this.L_ = []),
      (this.B_ = s),
      this.B_.oo((o) => {
        r.enqueueAndForget(async () => {
          Vi(this) &&
            (Q(
              "RemoteStore",
              "Restarting streams for network reachability change.",
            ),
            await (async function (u) {
              const c = ie(u);
              c.N_.add(4),
                await ka(c),
                c.k_.set("Unknown"),
                c.N_.delete(4),
                await _c(c);
            })(this));
        });
      }),
      (this.k_ = new J4(r, i));
  }
}
async function _c(t) {
  if (Vi(t)) for (const e of t.L_) await e(!0);
}
async function ka(t) {
  for (const e of t.L_) await e(!1);
}
function OT(t, e) {
  const n = ie(t);
  n.O_.has(e.targetId) ||
    (n.O_.set(e.targetId, e), rm(n) ? nm(n) : Ls(n).n_() && tm(n, e));
}
function em(t, e) {
  const n = ie(t),
    r = Ls(n);
  n.O_.delete(e),
    r.n_() && MT(n, e),
    n.O_.size === 0 && (r.n_() ? r.s_() : Vi(n) && n.k_.set("Unknown"));
}
function tm(t, e) {
  if (
    (t.q_.xe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(re.min()) > 0)
  ) {
    const n = t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(n);
  }
  Ls(t).d_(e);
}
function MT(t, e) {
  t.q_.xe(e), Ls(t).A_(e);
}
function nm(t) {
  (t.q_ = new e4({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => t.O_.get(e) || null,
    tt: () => t.datastore.serializer.databaseId,
  })),
    Ls(t).start(),
    t.k_.D_();
}
function rm(t) {
  return Vi(t) && !Ls(t).t_() && t.O_.size > 0;
}
function Vi(t) {
  return ie(t).N_.size === 0;
}
function LT(t) {
  t.q_ = void 0;
}
async function eN(t) {
  t.k_.set("Online");
}
async function tN(t) {
  t.O_.forEach((e, n) => {
    tm(t, e);
  });
}
async function nN(t, e) {
  LT(t), rm(t) ? (t.k_.F_(e), nm(t)) : t.k_.set("Unknown");
}
async function rN(t, e, n) {
  if ((t.k_.set("Online"), e instanceof ST && e.state === 2 && e.cause))
    try {
      await (async function (i, s) {
        const o = s.cause;
        for (const a of s.targetIds)
          i.O_.has(a) &&
            (await i.remoteSyncer.rejectListen(a, o),
            i.O_.delete(a),
            i.q_.removeTarget(a));
      })(t, e);
    } catch (r) {
      Q(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        r,
      ),
        await Ou(t, r);
    }
  else if (
    (e instanceof zl ? t.q_.Ke(e) : e instanceof TT ? t.q_.He(e) : t.q_.We(e),
    !n.isEqual(re.min()))
  )
    try {
      const r = await DT(t.localStore);
      n.compareTo(r) >= 0 &&
        (await (function (s, o) {
          const a = s.q_.rt(o);
          return (
            a.targetChanges.forEach((u, c) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                const h = s.O_.get(c);
                h && s.O_.set(c, h.withResumeToken(u.resumeToken, o));
              }
            }),
            a.targetMismatches.forEach((u, c) => {
              const h = s.O_.get(u);
              if (!h) return;
              s.O_.set(
                u,
                h.withResumeToken(_t.EMPTY_BYTE_STRING, h.snapshotVersion),
              ),
                MT(s, u);
              const f = new vr(h.target, u, c, h.sequenceNumber);
              tm(s, f);
            }),
            s.remoteSyncer.applyRemoteEvent(a)
          );
        })(t, n));
    } catch (r) {
      Q("RemoteStore", "Failed to raise snapshot:", r), await Ou(t, r);
    }
}
async function Ou(t, e, n) {
  if (!Aa(e)) throw e;
  t.N_.add(1),
    await ka(t),
    t.k_.set("Offline"),
    n || (n = () => DT(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      Q("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t.N_.delete(1),
        await _c(t);
    });
}
function FT(t, e) {
  return e().catch((n) => Ou(t, n, e));
}
async function wc(t) {
  const e = ie(t),
    n = Ur(e);
  let r = e.x_.length > 0 ? e.x_[e.x_.length - 1].batchId : -1;
  for (; iN(e); )
    try {
      const i = await U4(e.localStore, r);
      if (i === null) {
        e.x_.length === 0 && n.s_();
        break;
      }
      (r = i.batchId), sN(e, i);
    } catch (i) {
      await Ou(e, i);
    }
  jT(e) && BT(e);
}
function iN(t) {
  return Vi(t) && t.x_.length < 10;
}
function sN(t, e) {
  t.x_.push(e);
  const n = Ur(t);
  n.n_() && n.R_ && n.V_(e.mutations);
}
function jT(t) {
  return Vi(t) && !Ur(t).t_() && t.x_.length > 0;
}
function BT(t) {
  Ur(t).start();
}
async function oN(t) {
  Ur(t).g_();
}
async function aN(t) {
  const e = Ur(t);
  for (const n of t.x_) e.V_(n.mutations);
}
async function lN(t, e, n) {
  const r = t.x_.shift(),
    i = qp.from(r, e, n);
  await FT(t, () => t.remoteSyncer.applySuccessfulWrite(i)), await wc(t);
}
async function uN(t, e) {
  e &&
    Ur(t).R_ &&
    (await (async function (r, i) {
      if (
        (function (o) {
          return Xb(o) && o !== z.ABORTED;
        })(i.code)
      ) {
        const s = r.x_.shift();
        Ur(r).i_(),
          await FT(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)),
          await wc(r);
      }
    })(t, e)),
    jT(t) && BT(t);
}
async function g0(t, e) {
  const n = ie(t);
  n.asyncQueue.verifyOperationInProgress(),
    Q("RemoteStore", "RemoteStore received new credentials");
  const r = Vi(n);
  n.N_.add(3),
    await ka(n),
    r && n.k_.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n.N_.delete(3),
    await _c(n);
}
async function cN(t, e) {
  const n = ie(t);
  e
    ? (n.N_.delete(2), await _c(n))
    : e || (n.N_.add(2), await ka(n), n.k_.set("Unknown"));
}
function Ls(t) {
  return (
    t.Q_ ||
      ((t.Q_ = (function (n, r, i) {
        const s = ie(n);
        return (
          s.y_(),
          new Q4(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i,
          )
        );
      })(t.datastore, t.asyncQueue, {
        To: eN.bind(null, t),
        Ao: tN.bind(null, t),
        Vo: nN.bind(null, t),
        E_: rN.bind(null, t),
      })),
      t.L_.push(async (e) => {
        e
          ? (t.Q_.i_(), rm(t) ? nm(t) : t.k_.set("Unknown"))
          : (await t.Q_.stop(), LT(t));
      })),
    t.Q_
  );
}
function Ur(t) {
  return (
    t.K_ ||
      ((t.K_ = (function (n, r, i) {
        const s = ie(n);
        return (
          s.y_(),
          new Y4(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            i,
          )
        );
      })(t.datastore, t.asyncQueue, {
        To: () => Promise.resolve(),
        Ao: oN.bind(null, t),
        Vo: uN.bind(null, t),
        m_: aN.bind(null, t),
        f_: lN.bind(null, t),
      })),
      t.L_.push(async (e) => {
        e
          ? (t.K_.i_(), await wc(t))
          : (await t.K_.stop(),
            t.x_.length > 0 &&
              (Q(
                "RemoteStore",
                `Stopping write stream with ${t.x_.length} pending writes`,
              ),
              (t.x_ = [])));
      })),
    t.K_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class im {
  constructor(e, n, r, i, s) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Dr()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, n, r, i, s) {
    const o = Date.now() + r,
      a = new im(e, n, o, i, s);
    return a.start(r), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new Y(z.CANCELLED, "Operation cancelled" + (e ? ": " + e : "")),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function sm(t, e) {
  if ((nr("AsyncQueue", `${e}: ${t}`), Aa(t)))
    return new Y(z.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hs {
  constructor(e) {
    (this.comparator = e
      ? (n, r) => e(n, r) || X.comparator(n.key, r.key)
      : (n, r) => X.comparator(n.key, r.key)),
      (this.keyedMap = vo()),
      (this.sortedSet = new Be(this.comparator));
  }
  static emptySet(e) {
    return new hs(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, r) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof hs) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      r = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const i = n.getNext().key,
        s = r.getNext().key;
      if (!i.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const r = new hs();
    return (
      (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = n), r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y0 {
  constructor() {
    this.U_ = new Be(X.comparator);
  }
  track(e) {
    const n = e.doc.key,
      r = this.U_.get(n);
    r
      ? e.type !== 0 && r.type === 3
        ? (this.U_ = this.U_.insert(n, e))
        : e.type === 3 && r.type !== 1
          ? (this.U_ = this.U_.insert(n, { type: r.type, doc: e.doc }))
          : e.type === 2 && r.type === 2
            ? (this.U_ = this.U_.insert(n, { type: 2, doc: e.doc }))
            : e.type === 2 && r.type === 0
              ? (this.U_ = this.U_.insert(n, { type: 0, doc: e.doc }))
              : e.type === 1 && r.type === 0
                ? (this.U_ = this.U_.remove(n))
                : e.type === 1 && r.type === 2
                  ? (this.U_ = this.U_.insert(n, { type: 1, doc: r.doc }))
                  : e.type === 0 && r.type === 1
                    ? (this.U_ = this.U_.insert(n, { type: 2, doc: e.doc }))
                    : ne()
      : (this.U_ = this.U_.insert(n, e));
  }
  W_() {
    const e = [];
    return (
      this.U_.inorderTraversal((n, r) => {
        e.push(r);
      }),
      e
    );
  }
}
class As {
  constructor(e, n, r, i, s, o, a, u, c) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = r),
      (this.docChanges = i),
      (this.mutatedKeys = s),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = u),
      (this.hasCachedResults = c);
  }
  static fromInitialDocuments(e, n, r, i, s) {
    const o = [];
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new As(e, n, hs.emptySet(n), o, r, i, !0, !1, s)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        dc(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      r = e.docChanges;
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (n[i].type !== r[i].type || !n[i].doc.isEqual(r[i].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hN {
  constructor() {
    (this.G_ = void 0), (this.z_ = []);
  }
  j_() {
    return this.z_.some((e) => e.H_());
  }
}
class fN {
  constructor() {
    (this.queries = v0()),
      (this.onlineState = "Unknown"),
      (this.J_ = new Set());
  }
  terminate() {
    (function (n, r) {
      const i = ie(n),
        s = i.queries;
      (i.queries = v0()),
        s.forEach((o, a) => {
          for (const u of a.z_) u.onError(r);
        });
    })(this, new Y(z.ABORTED, "Firestore shutting down"));
  }
}
function v0() {
  return new Ms((t) => aT(t), dc);
}
async function dN(t, e) {
  const n = ie(t);
  let r = 3;
  const i = e.query;
  let s = n.queries.get(i);
  s ? !s.j_() && e.H_() && (r = 2) : ((s = new hN()), (r = e.H_() ? 0 : 1));
  try {
    switch (r) {
      case 0:
        s.G_ = await n.onListen(i, !0);
        break;
      case 1:
        s.G_ = await n.onListen(i, !1);
        break;
      case 2:
        await n.onFirstRemoteStoreListen(i);
    }
  } catch (o) {
    const a = sm(o, `Initialization of query '${Fi(e.query)}' failed`);
    return void e.onError(a);
  }
  n.queries.set(i, s),
    s.z_.push(e),
    e.Y_(n.onlineState),
    s.G_ && e.Z_(s.G_) && om(n);
}
async function pN(t, e) {
  const n = ie(t),
    r = e.query;
  let i = 3;
  const s = n.queries.get(r);
  if (s) {
    const o = s.z_.indexOf(e);
    o >= 0 &&
      (s.z_.splice(o, 1),
      s.z_.length === 0 ? (i = e.H_() ? 0 : 1) : !s.j_() && e.H_() && (i = 2));
  }
  switch (i) {
    case 0:
      return n.queries.delete(r), n.onUnlisten(r, !0);
    case 1:
      return n.queries.delete(r), n.onUnlisten(r, !1);
    case 2:
      return n.onLastRemoteStoreUnlisten(r);
    default:
      return;
  }
}
function mN(t, e) {
  const n = ie(t);
  let r = !1;
  for (const i of e) {
    const s = i.query,
      o = n.queries.get(s);
    if (o) {
      for (const a of o.z_) a.Z_(i) && (r = !0);
      o.G_ = i;
    }
  }
  r && om(n);
}
function gN(t, e, n) {
  const r = ie(t),
    i = r.queries.get(e);
  if (i) for (const s of i.z_) s.onError(n);
  r.queries.delete(e);
}
function om(t) {
  t.J_.forEach((e) => {
    e.next();
  });
}
var pd, _0;
((_0 = pd || (pd = {})).X_ = "default"), (_0.Cache = "cache");
class yN {
  constructor(e, n, r) {
    (this.query = e),
      (this.ea = n),
      (this.ta = !1),
      (this.na = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  Z_(e) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const i of e.docChanges) i.type !== 3 && r.push(i);
      e = new As(
        e.query,
        e.docs,
        e.oldDocs,
        r,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults,
      );
    }
    let n = !1;
    return (
      this.ta
        ? this.ra(e) && (this.ea.next(e), (n = !0))
        : this.ia(e, this.onlineState) && (this.sa(e), (n = !0)),
      (this.na = e),
      n
    );
  }
  onError(e) {
    this.ea.error(e);
  }
  Y_(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.na &&
        !this.ta &&
        this.ia(this.na, e) &&
        (this.sa(this.na), (n = !0)),
      n
    );
  }
  ia(e, n) {
    if (!e.fromCache || !this.H_()) return !0;
    const r = n !== "Offline";
    return (
      (!this.options.oa || !r) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  ra(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.na && this.na.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  sa(e) {
    (e = As.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults,
    )),
      (this.ta = !0),
      this.ea.next(e);
  }
  H_() {
    return this.options.source !== pd.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UT {
  constructor(e) {
    this.key = e;
  }
}
class zT {
  constructor(e) {
    this.key = e;
  }
}
class vN {
  constructor(e, n) {
    (this.query = e),
      (this.Ia = n),
      (this.Ta = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ea = ue()),
      (this.mutatedKeys = ue()),
      (this.da = lT(e)),
      (this.Aa = new hs(this.da));
  }
  get Ra() {
    return this.Ia;
  }
  Va(e, n) {
    const r = n ? n.ma : new y0(),
      i = n ? n.Aa : this.Aa;
    let s = n ? n.mutatedKeys : this.mutatedKeys,
      o = i,
      a = !1;
    const u =
        this.query.limitType === "F" && i.size === this.query.limit
          ? i.last()
          : null,
      c =
        this.query.limitType === "L" && i.size === this.query.limit
          ? i.first()
          : null;
    if (
      (e.inorderTraversal((h, f) => {
        const p = i.get(h),
          g = pc(this.query, f) ? f : null,
          w = !!p && this.mutatedKeys.has(p.key),
          C =
            !!g &&
            (g.hasLocalMutations ||
              (this.mutatedKeys.has(g.key) && g.hasCommittedMutations));
        let A = !1;
        p && g
          ? p.data.isEqual(g.data)
            ? w !== C && (r.track({ type: 3, doc: g }), (A = !0))
            : this.fa(p, g) ||
              (r.track({ type: 2, doc: g }),
              (A = !0),
              ((u && this.da(g, u) > 0) || (c && this.da(g, c) < 0)) &&
                (a = !0))
          : !p && g
            ? (r.track({ type: 0, doc: g }), (A = !0))
            : p &&
              !g &&
              (r.track({ type: 1, doc: p }), (A = !0), (u || c) && (a = !0)),
          A &&
            (g
              ? ((o = o.add(g)), (s = C ? s.add(h) : s.delete(h)))
              : ((o = o.delete(h)), (s = s.delete(h))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const h = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(h.key)),
          (s = s.delete(h.key)),
          r.track({ type: 1, doc: h });
      }
    return { Aa: o, ma: r, ts: a, mutatedKeys: s };
  }
  fa(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, r, i) {
    const s = this.Aa;
    (this.Aa = e.Aa), (this.mutatedKeys = e.mutatedKeys);
    const o = e.ma.W_();
    o.sort(
      (h, f) =>
        (function (g, w) {
          const C = (A) => {
            switch (A) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return ne();
            }
          };
          return C(g) - C(w);
        })(h.type, f.type) || this.da(h.doc, f.doc),
    ),
      this.ga(r),
      (i = i != null && i);
    const a = n && !i ? this.pa() : [],
      u = this.Ea.size === 0 && this.current && !i ? 1 : 0,
      c = u !== this.Ta;
    return (
      (this.Ta = u),
      o.length !== 0 || c
        ? {
            snapshot: new As(
              this.query,
              e.Aa,
              s,
              o,
              e.mutatedKeys,
              u === 0,
              c,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0,
            ),
            ya: a,
          }
        : { ya: a }
    );
  }
  Y_(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { Aa: this.Aa, ma: new y0(), mutatedKeys: this.mutatedKeys, ts: !1 },
          !1,
        ))
      : { ya: [] };
  }
  wa(e) {
    return (
      !this.Ia.has(e) && !!this.Aa.has(e) && !this.Aa.get(e).hasLocalMutations
    );
  }
  ga(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.Ia = this.Ia.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.Ia = this.Ia.delete(n))),
      (this.current = e.current));
  }
  pa() {
    if (!this.current) return [];
    const e = this.Ea;
    (this.Ea = ue()),
      this.Aa.forEach((r) => {
        this.wa(r.key) && (this.Ea = this.Ea.add(r.key));
      });
    const n = [];
    return (
      e.forEach((r) => {
        this.Ea.has(r) || n.push(new zT(r));
      }),
      this.Ea.forEach((r) => {
        e.has(r) || n.push(new UT(r));
      }),
      n
    );
  }
  Sa(e) {
    (this.Ia = e.Is), (this.Ea = ue());
    const n = this.Va(e.documents);
    return this.applyChanges(n, !0);
  }
  ba() {
    return As.fromInitialDocuments(
      this.query,
      this.Aa,
      this.mutatedKeys,
      this.Ta === 0,
      this.hasCachedResults,
    );
  }
}
class _N {
  constructor(e, n, r) {
    (this.query = e), (this.targetId = n), (this.view = r);
  }
}
class wN {
  constructor(e) {
    (this.key = e), (this.Da = !1);
  }
}
class EN {
  constructor(e, n, r, i, s, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = r),
      (this.sharedClientState = i),
      (this.currentUser = s),
      (this.maxConcurrentLimboResolutions = o),
      (this.Ca = {}),
      (this.va = new Ms((a) => aT(a), dc)),
      (this.Fa = new Map()),
      (this.Ma = new Set()),
      (this.xa = new Be(X.comparator)),
      (this.Oa = new Map()),
      (this.Na = new Xp()),
      (this.La = {}),
      (this.Ba = new Map()),
      (this.ka = Cs.Bn()),
      (this.onlineState = "Unknown"),
      (this.qa = void 0);
  }
  get isPrimaryClient() {
    return this.qa === !0;
  }
}
async function TN(t, e, n = !0) {
  const r = qT(t);
  let i;
  const s = r.va.get(e);
  return (
    s
      ? (r.sharedClientState.addLocalQueryTarget(s.targetId), (i = s.view.ba()))
      : (i = await $T(r, e, n, !0)),
    i
  );
}
async function SN(t, e) {
  const n = qT(t);
  await $T(n, e, !0, !1);
}
async function $T(t, e, n, r) {
  const i = await z4(t.localStore, Dn(e)),
    s = i.targetId,
    o = n ? t.sharedClientState.addLocalQueryTarget(s) : "not-current";
  let a;
  return (
    r && (a = await PN(t, e, s, o === "current", i.resumeToken)),
    t.isPrimaryClient && n && OT(t.remoteStore, i),
    a
  );
}
async function PN(t, e, n, r, i) {
  t.Qa = (f, p, g) =>
    (async function (C, A, E, y) {
      let T = A.view.Va(E);
      T.ts &&
        (T = await d0(C.localStore, A.query, !1).then(({ documents: P }) =>
          A.view.Va(P, T),
        ));
      const k = y && y.targetChanges.get(A.targetId),
        M = y && y.targetMismatches.get(A.targetId) != null,
        j = A.view.applyChanges(T, C.isPrimaryClient, k, M);
      return E0(C, A.targetId, j.ya), j.snapshot;
    })(t, f, p, g);
  const s = await d0(t.localStore, e, !0),
    o = new vN(e, s.Is),
    a = o.Va(s.documents),
    u = Ra.createSynthesizedTargetChangeForCurrentChange(
      n,
      r && t.onlineState !== "Offline",
      i,
    ),
    c = o.applyChanges(a, t.isPrimaryClient, u);
  E0(t, n, c.ya);
  const h = new _N(e, n, o);
  return (
    t.va.set(e, h),
    t.Fa.has(n) ? t.Fa.get(n).push(e) : t.Fa.set(n, [e]),
    c.snapshot
  );
}
async function xN(t, e, n) {
  const r = ie(t),
    i = r.va.get(e),
    s = r.Fa.get(i.targetId);
  if (s.length > 1)
    return (
      r.Fa.set(
        i.targetId,
        s.filter((o) => !dc(o, e)),
      ),
      void r.va.delete(e)
    );
  r.isPrimaryClient
    ? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
      r.sharedClientState.isActiveQueryTarget(i.targetId) ||
        (await dd(r.localStore, i.targetId, !1)
          .then(() => {
            r.sharedClientState.clearQueryState(i.targetId),
              n && em(r.remoteStore, i.targetId),
              md(r, i.targetId);
          })
          .catch(Ca)))
    : (md(r, i.targetId), await dd(r.localStore, i.targetId, !0));
}
async function CN(t, e) {
  const n = ie(t),
    r = n.va.get(e),
    i = n.Fa.get(r.targetId);
  n.isPrimaryClient &&
    i.length === 1 &&
    (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    em(n.remoteStore, r.targetId));
}
async function AN(t, e, n) {
  const r = NN(t);
  try {
    const i = await (function (o, a) {
      const u = ie(o),
        c = rt.now(),
        h = a.reduce((g, w) => g.add(w.key), ue());
      let f, p;
      return u.persistence
        .runTransaction("Locally write mutations", "readwrite", (g) => {
          let w = rr(),
            C = ue();
          return u.us
            .getEntries(g, h)
            .next((A) => {
              (w = A),
                w.forEach((E, y) => {
                  y.isValidDocument() || (C = C.add(E));
                });
            })
            .next(() => u.localDocuments.getOverlayedDocuments(g, w))
            .next((A) => {
              f = A;
              const E = [];
              for (const y of a) {
                const T = Kb(y, f.get(y.key).overlayedDocument);
                T != null &&
                  E.push(new Xr(y.key, T, ZE(T.value.mapValue), bn.exists(!0)));
              }
              return u.mutationQueue.addMutationBatch(g, c, E, a);
            })
            .next((A) => {
              p = A;
              const E = A.applyToLocalDocumentSet(f, C);
              return u.documentOverlayCache.saveOverlays(g, A.batchId, E);
            });
        })
        .then(() => ({ batchId: p.batchId, changes: cT(f) }));
    })(r.localStore, e);
    r.sharedClientState.addPendingMutation(i.batchId),
      (function (o, a, u) {
        let c = o.La[o.currentUser.toKey()];
        c || (c = new Be(ve)),
          (c = c.insert(a, u)),
          (o.La[o.currentUser.toKey()] = c);
      })(r, i.batchId, n),
      await Va(r, i.changes),
      await wc(r.remoteStore);
  } catch (i) {
    const s = sm(i, "Failed to persist write");
    n.reject(s);
  }
}
async function WT(t, e) {
  const n = ie(t);
  try {
    const r = await j4(n.localStore, e);
    e.targetChanges.forEach((i, s) => {
      const o = n.Oa.get(s);
      o &&
        (Ce(
          i.addedDocuments.size +
            i.modifiedDocuments.size +
            i.removedDocuments.size <=
            1,
        ),
        i.addedDocuments.size > 0
          ? (o.Da = !0)
          : i.modifiedDocuments.size > 0
            ? Ce(o.Da)
            : i.removedDocuments.size > 0 && (Ce(o.Da), (o.Da = !1)));
    }),
      await Va(n, r, e);
  } catch (r) {
    await Ca(r);
  }
}
function w0(t, e, n) {
  const r = ie(t);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    const i = [];
    r.va.forEach((s, o) => {
      const a = o.view.Y_(e);
      a.snapshot && i.push(a.snapshot);
    }),
      (function (o, a) {
        const u = ie(o);
        u.onlineState = a;
        let c = !1;
        u.queries.forEach((h, f) => {
          for (const p of f.z_) p.Y_(a) && (c = !0);
        }),
          c && om(u);
      })(r.eventManager, e),
      i.length && r.Ca.E_(i),
      (r.onlineState = e),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
async function IN(t, e, n) {
  const r = ie(t);
  r.sharedClientState.updateQueryState(e, "rejected", n);
  const i = r.Oa.get(e),
    s = i && i.key;
  if (s) {
    let o = new Be(X.comparator);
    o = o.insert(s, Rt.newNoDocument(s, re.min()));
    const a = ue().add(s),
      u = new yc(re.min(), new Map(), new Be(ve), o, a);
    await WT(r, u), (r.xa = r.xa.remove(s)), r.Oa.delete(e), am(r);
  } else
    await dd(r.localStore, e, !1)
      .then(() => md(r, e, n))
      .catch(Ca);
}
async function RN(t, e) {
  const n = ie(t),
    r = e.batch.batchId;
  try {
    const i = await F4(n.localStore, e);
    KT(n, r, null),
      HT(n, r),
      n.sharedClientState.updateMutationState(r, "acknowledged"),
      await Va(n, i);
  } catch (i) {
    await Ca(i);
  }
}
async function kN(t, e, n) {
  const r = ie(t);
  try {
    const i = await (function (o, a) {
      const u = ie(o);
      return u.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (c) => {
          let h;
          return u.mutationQueue
            .lookupMutationBatch(c, a)
            .next(
              (f) => (
                Ce(f !== null),
                (h = f.keys()),
                u.mutationQueue.removeMutationBatch(c, f)
              ),
            )
            .next(() => u.mutationQueue.performConsistencyCheck(c))
            .next(() =>
              u.documentOverlayCache.removeOverlaysForBatchId(c, h, a),
            )
            .next(() =>
              u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c, h),
            )
            .next(() => u.localDocuments.getDocuments(c, h));
        },
      );
    })(r.localStore, e);
    KT(r, e, n),
      HT(r, e),
      r.sharedClientState.updateMutationState(e, "rejected", n),
      await Va(r, i);
  } catch (i) {
    await Ca(i);
  }
}
function HT(t, e) {
  (t.Ba.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.Ba.delete(e);
}
function KT(t, e, n) {
  const r = ie(t);
  let i = r.La[r.currentUser.toKey()];
  if (i) {
    const s = i.get(e);
    s && (n ? s.reject(n) : s.resolve(), (i = i.remove(e))),
      (r.La[r.currentUser.toKey()] = i);
  }
}
function md(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const r of t.Fa.get(e)) t.va.delete(r), n && t.Ca.Ka(r, n);
  t.Fa.delete(e),
    t.isPrimaryClient &&
      t.Na.mr(e).forEach((r) => {
        t.Na.containsKey(r) || GT(t, r);
      });
}
function GT(t, e) {
  t.Ma.delete(e.path.canonicalString());
  const n = t.xa.get(e);
  n !== null &&
    (em(t.remoteStore, n), (t.xa = t.xa.remove(e)), t.Oa.delete(n), am(t));
}
function E0(t, e, n) {
  for (const r of n)
    r instanceof UT
      ? (t.Na.addReference(r.key, e), VN(t, r))
      : r instanceof zT
        ? (Q("SyncEngine", "Document no longer in limbo: " + r.key),
          t.Na.removeReference(r.key, e),
          t.Na.containsKey(r.key) || GT(t, r.key))
        : ne();
}
function VN(t, e) {
  const n = e.key,
    r = n.path.canonicalString();
  t.xa.get(n) ||
    t.Ma.has(r) ||
    (Q("SyncEngine", "New document in limbo: " + n), t.Ma.add(r), am(t));
}
function am(t) {
  for (; t.Ma.size > 0 && t.xa.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.Ma.values().next().value;
    t.Ma.delete(e);
    const n = new X(be.fromString(e)),
      r = t.ka.next();
    t.Oa.set(r, new wN(n)),
      (t.xa = t.xa.insert(n, r)),
      OT(
        t.remoteStore,
        new vr(Dn(oT(n.path)), r, "TargetPurposeLimboResolution", zp.oe),
      );
  }
}
async function Va(t, e, n) {
  const r = ie(t),
    i = [],
    s = [],
    o = [];
  r.va.isEmpty() ||
    (r.va.forEach((a, u) => {
      o.push(
        r.Qa(u, e, n).then((c) => {
          var h;
          if ((c || n) && r.isPrimaryClient) {
            const f = c
              ? !c.fromCache
              : (h = n == null ? void 0 : n.targetChanges.get(u.targetId)) ===
                    null || h === void 0
                ? void 0
                : h.current;
            r.sharedClientState.updateQueryState(
              u.targetId,
              f ? "current" : "not-current",
            );
          }
          if (c) {
            i.push(c);
            const f = Zp.Ui(u.targetId, c);
            s.push(f);
          }
        }),
      );
    }),
    await Promise.all(o),
    r.Ca.E_(i),
    await (async function (u, c) {
      const h = ie(u);
      try {
        await h.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (f) =>
            U.forEach(c, (p) =>
              U.forEach(p.Ki, (g) =>
                h.persistence.referenceDelegate.addReference(f, p.targetId, g),
              ).next(() =>
                U.forEach(p.$i, (g) =>
                  h.persistence.referenceDelegate.removeReference(
                    f,
                    p.targetId,
                    g,
                  ),
                ),
              ),
            ),
        );
      } catch (f) {
        if (!Aa(f)) throw f;
        Q("LocalStore", "Failed to update sequence numbers: " + f);
      }
      for (const f of c) {
        const p = f.targetId;
        if (!f.fromCache) {
          const g = h.ss.get(p),
            w = g.snapshotVersion,
            C = g.withLastLimboFreeSnapshotVersion(w);
          h.ss = h.ss.insert(p, C);
        }
      }
    })(r.localStore, s));
}
async function DN(t, e) {
  const n = ie(t);
  if (!n.currentUser.isEqual(e)) {
    Q("SyncEngine", "User change. New user:", e.toKey());
    const r = await VT(n.localStore, e);
    (n.currentUser = e),
      (function (s, o) {
        s.Ba.forEach((a) => {
          a.forEach((u) => {
            u.reject(new Y(z.CANCELLED, o));
          });
        }),
          s.Ba.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        r.removedBatchIds,
        r.addedBatchIds,
      ),
      await Va(n, r.ls);
  }
}
function bN(t, e) {
  const n = ie(t),
    r = n.Oa.get(e);
  if (r && r.Da) return ue().add(r.key);
  {
    let i = ue();
    const s = n.Fa.get(e);
    if (!s) return i;
    for (const o of s) {
      const a = n.va.get(o);
      i = i.unionWith(a.view.Ra);
    }
    return i;
  }
}
function qT(t) {
  const e = ie(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = WT.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = bN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = IN.bind(null, e)),
    (e.Ca.E_ = mN.bind(null, e.eventManager)),
    (e.Ca.Ka = gN.bind(null, e.eventManager)),
    e
  );
}
function NN(t) {
  const e = ie(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = RN.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = kN.bind(null, e)),
    e
  );
}
class T0 {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.serializer = vc(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(e)),
      (this.persistence = this.createPersistence(e)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(e)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        e,
        this.localStore,
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        e,
        this.localStore,
      ));
  }
  createGarbageCollectionScheduler(e, n) {
    return null;
  }
  createIndexBackfillerScheduler(e, n) {
    return null;
  }
  createLocalStore(e) {
    return L4(this.persistence, new O4(), e.initialUser, this.serializer);
  }
  createPersistence(e) {
    return new D4(Jp.Yr, this.serializer);
  }
  createSharedClientState(e) {
    return new W4();
  }
  async terminate() {
    var e, n;
    (e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class ON {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        w0(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = DN.bind(
        null,
        this.syncEngine,
      )),
      await cN(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new fN();
    })();
  }
  createDatastore(e) {
    const n = vc(e.databaseInfo.databaseId),
      r = (function (s) {
        return new q4(s);
      })(e.databaseInfo);
    return (function (s, o, a, u) {
      return new X4(s, o, a, u);
    })(e.authCredentials, e.appCheckCredentials, r, n);
  }
  createRemoteStore(e) {
    return (function (r, i, s, o, a) {
      return new Z4(r, i, s, o, a);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (n) => w0(this.syncEngine, n, 0),
      (function () {
        return m0.D() ? new m0() : new H4();
      })(),
    );
  }
  createSyncEngine(e, n) {
    return (function (i, s, o, a, u, c, h) {
      const f = new EN(i, s, o, a, u, c);
      return h && (f.qa = !0), f;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n,
    );
  }
  async terminate() {
    var e, n;
    await (async function (i) {
      const s = ie(i);
      Q("RemoteStore", "RemoteStore shutting down."),
        s.N_.add(5),
        await ka(s),
        s.B_.shutdown(),
        s.k_.set("Unknown");
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate(),
      (n = this.eventManager) === null || n === void 0 || n.terminate();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MN {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Wa(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Wa(this.observer.error, e)
      : nr("Uncaught Error in snapshot listener:", e.toString());
  }
  Ga() {
    this.muted = !0;
  }
  Wa(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LN {
  constructor(e, n, r, i) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = At.UNAUTHENTICATED),
      (this.clientId = YE.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        Q("FirestoreClient", "Received user=", s.uid),
          await this.authCredentialListener(s),
          (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          Q("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        ),
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new Y(
        z.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Dr();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const r = sm(n, "Failed to shutdown persistence");
          e.reject(r);
        }
      }),
      e.promise
    );
  }
}
async function Mh(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    Q("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = t.configuration;
  await e.initialize(n);
  let r = n.initialUser;
  t.setCredentialChangeListener(async (i) => {
    r.isEqual(i) || (await VT(e.localStore, i), (r = i));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t._offlineComponents = e);
}
async function S0(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await jN(t);
  Q("FirestoreClient", "Initializing OnlineComponentProvider"),
    await e.initialize(n, t.configuration),
    t.setCredentialChangeListener((r) => g0(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => g0(e.remoteStore, i)),
    (t._onlineComponents = e);
}
function FN(t) {
  return t.name === "FirebaseError"
    ? t.code === z.FAILED_PRECONDITION || t.code === z.UNIMPLEMENTED
    : !(typeof DOMException < "u" && t instanceof DOMException) ||
        t.code === 22 ||
        t.code === 20 ||
        t.code === 11;
}
async function jN(t) {
  if (!t._offlineComponents)
    if (t._uninitializedComponentsProvider) {
      Q("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await Mh(t, t._uninitializedComponentsProvider._offline);
      } catch (e) {
        const n = e;
        if (!FN(n)) throw n;
        Ts(
          "Error using user provided cache. Falling back to memory cache: " + n,
        ),
          await Mh(t, new T0());
      }
    } else
      Q("FirestoreClient", "Using default OfflineComponentProvider"),
        await Mh(t, new T0());
  return t._offlineComponents;
}
async function QT(t) {
  return (
    t._onlineComponents ||
      (t._uninitializedComponentsProvider
        ? (Q("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await S0(t, t._uninitializedComponentsProvider._online))
        : (Q("FirestoreClient", "Using default OnlineComponentProvider"),
          await S0(t, new ON()))),
    t._onlineComponents
  );
}
function BN(t) {
  return QT(t).then((e) => e.syncEngine);
}
async function UN(t) {
  const e = await QT(t),
    n = e.eventManager;
  return (
    (n.onListen = TN.bind(null, e.syncEngine)),
    (n.onUnlisten = xN.bind(null, e.syncEngine)),
    (n.onFirstRemoteStoreListen = SN.bind(null, e.syncEngine)),
    (n.onLastRemoteStoreUnlisten = CN.bind(null, e.syncEngine)),
    n
  );
}
function zN(t, e, n = {}) {
  const r = new Dr();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (s, o, a, u, c) {
        const h = new MN({
            next: (p) => {
              o.enqueueAndForget(() => pN(s, f)),
                p.fromCache && u.source === "server"
                  ? c.reject(
                      new Y(
                        z.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                      ),
                    )
                  : c.resolve(p);
            },
            error: (p) => c.reject(p),
          }),
          f = new yN(a, h, { includeMetadataChanges: !0, oa: !0 });
        return dN(s, f);
      })(await UN(t), t.asyncQueue, e, n, r),
    ),
    r.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function YT(t) {
  const e = {};
  return (
    t.timeoutSeconds !== void 0 && (e.timeoutSeconds = t.timeoutSeconds), e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P0 = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function XT(t, e, n) {
  if (!n)
    throw new Y(
      z.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`,
    );
}
function $N(t, e, n, r) {
  if (e === !0 && r === !0)
    throw new Y(z.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function x0(t) {
  if (!X.isDocumentKey(t))
    throw new Y(
      z.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`,
    );
}
function C0(t) {
  if (X.isDocumentKey(t))
    throw new Y(
      z.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`,
    );
}
function lm(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : ne();
}
function Ai(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new Y(
        z.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
      );
    {
      const n = lm(t);
      throw new Y(
        z.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`,
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A0 {
  constructor(e) {
    var n, r;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new Y(
          z.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new Y(
          z.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576",
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    $N(
      "experimentalForceLongPolling",
      e.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      e.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = YT(
        (r = e.experimentalLongPollingOptions) !== null && r !== void 0
          ? r
          : {},
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new Y(
              z.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`,
            );
          if (s.timeoutSeconds < 5)
            throw new Y(
              z.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (s.timeoutSeconds > 30)
            throw new Y(
              z.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams);
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class Ec {
  constructor(e, n, r, i) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new A0({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new Y(
        z.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new Y(
        z.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
      );
    (this._settings = new A0(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new tb();
          switch (r.type) {
            case "firstParty":
              return new sb(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case "provider":
              return r.client;
            default:
              throw new Y(
                z.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type",
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = P0.get(n);
        r &&
          (Q("ComponentProvider", "Removing Datastore"),
          P0.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function WN(t, e, n, r = {}) {
  var i;
  const s = (t = Ai(t, Ec))._getSettings(),
    o = `${e}:${n}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== o &&
      Ts(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.",
      ),
    t._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let a, u;
    if (typeof r.mockUserToken == "string")
      (a = r.mockUserToken), (u = At.MOCK_USER);
    else {
      a = OV(
        r.mockUserToken,
        (i = t._app) === null || i === void 0 ? void 0 : i.options.projectId,
      );
      const c = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!c)
        throw new Y(
          z.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      u = new At(c);
    }
    t._authCredentials = new nb(new QE(a, u));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tc {
  constructor(e, n, r) {
    (this.converter = n),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new Tc(this.firestore, e, this._query);
  }
}
class en {
  constructor(e, n, r) {
    (this.converter = n),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new br(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new en(this.firestore, e, this._key);
  }
}
class br extends Tc {
  constructor(e, n, r) {
    super(e, n, oT(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new en(this.firestore, null, new X(e));
  }
  withConverter(e) {
    return new br(this.firestore, e, this._path);
  }
}
function HN(t, e, ...n) {
  if (((t = Fr(t)), XT("collection", "path", e), t instanceof Ec)) {
    const r = be.fromString(e, ...n);
    return C0(r), new br(t, null, r);
  }
  {
    if (!(t instanceof en || t instanceof br))
      throw new Y(
        z.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(be.fromString(e, ...n));
    return C0(r), new br(t.firestore, null, r);
  }
}
function JT(t, e, ...n) {
  if (
    ((t = Fr(t)),
    arguments.length === 1 && (e = YE.newId()),
    XT("doc", "path", e),
    t instanceof Ec)
  ) {
    const r = be.fromString(e, ...n);
    return x0(r), new en(t, null, new X(r));
  }
  {
    if (!(t instanceof en || t instanceof br))
      throw new Y(
        z.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = t._path.child(be.fromString(e, ...n));
    return (
      x0(r), new en(t.firestore, t instanceof br ? t.converter : null, new X(r))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KN {
  constructor() {
    (this._u = Promise.resolve()),
      (this.au = []),
      (this.uu = !1),
      (this.cu = []),
      (this.lu = null),
      (this.hu = !1),
      (this.Pu = !1),
      (this.Iu = []),
      (this.e_ = new bT(this, "async_queue_retry")),
      (this.Tu = () => {
        const n = Oh();
        n &&
          Q("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.e_.zo();
      });
    const e = Oh();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this.Tu);
  }
  get isShuttingDown() {
    return this.uu;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Eu(), this.du(e);
  }
  enterRestrictedMode(e) {
    if (!this.uu) {
      (this.uu = !0), (this.Pu = e || !1);
      const n = Oh();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Tu);
    }
  }
  enqueue(e) {
    if ((this.Eu(), this.uu)) return new Promise(() => {});
    const n = new Dr();
    return this.du(() =>
      this.uu && this.Pu
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise),
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.au.push(e), this.Au()));
  }
  async Au() {
    if (this.au.length !== 0) {
      try {
        await this.au[0](), this.au.shift(), this.e_.reset();
      } catch (e) {
        if (!Aa(e)) throw e;
        Q("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.au.length > 0 && this.e_.Wo(() => this.Au());
    }
  }
  du(e) {
    const n = this._u.then(
      () => (
        (this.hu = !0),
        e()
          .catch((r) => {
            (this.lu = r), (this.hu = !1);
            const i = (function (o) {
              let a = o.message || "";
              return (
                o.stack &&
                  (a = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                a
              );
            })(r);
            throw (nr("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.hu = !1), r))
      ),
    );
    return (this._u = n), n;
  }
  enqueueAfterDelay(e, n, r) {
    this.Eu(), this.Iu.indexOf(e) > -1 && (n = 0);
    const i = im.createAndSchedule(this, e, n, r, (s) => this.Ru(s));
    return this.cu.push(i), i;
  }
  Eu() {
    this.lu && ne();
  }
  verifyOperationInProgress() {}
  async Vu() {
    let e;
    do (e = this._u), await e;
    while (e !== this._u);
  }
  mu(e) {
    for (const n of this.cu) if (n.timerId === e) return !0;
    return !1;
  }
  fu(e) {
    return this.Vu().then(() => {
      this.cu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.cu)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Vu();
    });
  }
  gu(e) {
    this.Iu.push(e);
  }
  Ru(e) {
    const n = this.cu.indexOf(e);
    this.cu.splice(n, 1);
  }
}
class Sc extends Ec {
  constructor(e, n, r, i) {
    super(e, n, r, i),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new KN();
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || eS(this), this._firestoreClient.terminate();
  }
}
function GN(t, e) {
  const n = typeof t == "object" ? t : $D(),
    r = typeof t == "string" ? t : "(default)",
    i = jD(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = bV("firestore");
    s && WN(i, ...s);
  }
  return i;
}
function ZT(t) {
  return (
    t._firestoreClient || eS(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function eS(t) {
  var e, n, r;
  const i = t._freezeSettings(),
    s = (function (a, u, c, h) {
      return new vb(
        a,
        u,
        c,
        h.host,
        h.ssl,
        h.experimentalForceLongPolling,
        h.experimentalAutoDetectLongPolling,
        YT(h.experimentalLongPollingOptions),
        h.useFetchStreams,
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      i,
    );
  (t._firestoreClient = new LN(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s,
  )),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (t._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Is {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Is(_t.fromBase64String(e));
    } catch (n) {
      throw new Y(
        z.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n,
      );
    }
  }
  static fromUint8Array(e) {
    return new Is(_t.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pc {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new Y(
          z.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty.",
        );
    this._internalPath = new mt(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class um {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cm {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new Y(
        z.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e,
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new Y(
        z.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n,
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return ve(this._lat, e._lat) || ve(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qN = /^__.*__$/;
class QN {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new Xr(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Ia(e, this.data, n, this.fieldTransforms);
  }
}
class tS {
  constructor(e, n, r) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = r);
  }
  toMutation(e, n) {
    return new Xr(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function nS(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw ne();
  }
}
class hm {
  constructor(e, n, r, i, s, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = i),
      s === void 0 && this.pu(),
      (this.fieldTransforms = s || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get yu() {
    return this.settings.yu;
  }
  wu(e) {
    return new hm(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask,
    );
  }
  Su(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.wu({ path: r, bu: !1 });
    return i.Du(e), i;
  }
  Cu(e) {
    var n;
    const r = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      i = this.wu({ path: r, bu: !1 });
    return i.pu(), i;
  }
  vu(e) {
    return this.wu({ path: void 0, bu: !0 });
  }
  Fu(e) {
    return Mu(
      e,
      this.settings.methodName,
      this.settings.Mu || !1,
      this.path,
      this.settings.xu,
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  pu() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.Du(this.path.get(e));
  }
  Du(e) {
    if (e.length === 0) throw this.Fu("Document fields must not be empty");
    if (nS(this.yu) && qN.test(e))
      throw this.Fu('Document fields cannot begin and end with "__"');
  }
}
class YN {
  constructor(e, n, r) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.serializer = r || vc(e));
  }
  Ou(e, n, r, i = !1) {
    return new hm(
      { yu: e, methodName: n, xu: r, path: mt.emptyPath(), bu: !1, Mu: i },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
    );
  }
}
function rS(t) {
  const e = t._freezeSettings(),
    n = vc(t._databaseId);
  return new YN(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function XN(t, e, n, r, i, s = {}) {
  const o = t.Ou(s.merge || s.mergeFields ? 2 : 0, e, n, i);
  fm("Data must be an object, but it was:", o, r);
  const a = iS(r, o);
  let u, c;
  if (s.merge) (u = new Jt(o.fieldMask)), (c = o.fieldTransforms);
  else if (s.mergeFields) {
    const h = [];
    for (const f of s.mergeFields) {
      const p = gd(e, f, n);
      if (!o.contains(p))
        throw new Y(
          z.INVALID_ARGUMENT,
          `Field '${p}' is specified in your field mask but missing from your input data.`,
        );
      oS(h, p) || h.push(p);
    }
    (u = new Jt(h)), (c = o.fieldTransforms.filter((f) => u.covers(f.field)));
  } else (u = null), (c = o.fieldTransforms);
  return new QN(new zt(a), u, c);
}
class xc extends um {
  _toFieldTransform(e) {
    if (e.yu !== 2)
      throw e.yu === 1
        ? e.Fu(
            `${this._methodName}() can only appear at the top level of your update data`,
          )
        : e.Fu(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`,
          );
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof xc;
  }
}
function JN(t, e, n, r) {
  const i = t.Ou(1, e, n);
  fm("Data must be an object, but it was:", i, r);
  const s = [],
    o = zt.empty();
  ki(r, (u, c) => {
    const h = dm(e, u, n);
    c = Fr(c);
    const f = i.Cu(h);
    if (c instanceof xc) s.push(h);
    else {
      const p = Cc(c, f);
      p != null && (s.push(h), o.set(h, p));
    }
  });
  const a = new Jt(s);
  return new tS(o, a, i.fieldTransforms);
}
function ZN(t, e, n, r, i, s) {
  const o = t.Ou(1, e, n),
    a = [gd(e, r, n)],
    u = [i];
  if (s.length % 2 != 0)
    throw new Y(
      z.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`,
    );
  for (let p = 0; p < s.length; p += 2) a.push(gd(e, s[p])), u.push(s[p + 1]);
  const c = [],
    h = zt.empty();
  for (let p = a.length - 1; p >= 0; --p)
    if (!oS(c, a[p])) {
      const g = a[p];
      let w = u[p];
      w = Fr(w);
      const C = o.Cu(g);
      if (w instanceof xc) c.push(g);
      else {
        const A = Cc(w, C);
        A != null && (c.push(g), h.set(g, A));
      }
    }
  const f = new Jt(c);
  return new tS(h, f, o.fieldTransforms);
}
function Cc(t, e) {
  if (sS((t = Fr(t)))) return fm("Unsupported field value:", e, t), iS(t, e);
  if (t instanceof um)
    return (
      (function (r, i) {
        if (!nS(i.yu))
          throw i.Fu(
            `${r._methodName}() can only be used with update() and set()`,
          );
        if (!i.path)
          throw i.Fu(
            `${r._methodName}() is not currently supported inside arrays`,
          );
        const s = r._toFieldTransform(i);
        s && i.fieldTransforms.push(s);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.bu && e.yu !== 4)
      throw e.Fu("Nested arrays are not supported");
    return (function (r, i) {
      const s = [];
      let o = 0;
      for (const a of r) {
        let u = Cc(a, i.vu(o));
        u == null && (u = { nullValue: "NULL_VALUE" }), s.push(u), o++;
      }
      return { arrayValue: { values: s } };
    })(t, e);
  }
  return (function (r, i) {
    if ((r = Fr(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return Bb(i.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const s = rt.fromDate(r);
      return { timestampValue: Nu(i.serializer, s) };
    }
    if (r instanceof rt) {
      const s = new rt(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: Nu(i.serializer, s) };
    }
    if (r instanceof cm)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof Is) return { bytesValue: PT(i.serializer, r._byteString) };
    if (r instanceof en) {
      const s = i.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(s))
        throw i.Fu(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`,
        );
      return {
        referenceValue: Yp(
          r.firestore._databaseId || i.databaseId,
          r._key.path,
        ),
      };
    }
    throw i.Fu(`Unsupported field value: ${lm(r)}`);
  })(t, e);
}
function iS(t, e) {
  const n = {};
  return (
    XE(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : ki(t, (r, i) => {
          const s = Cc(i, e.Su(r));
          s != null && (n[r] = s);
        }),
    { mapValue: { fields: n } }
  );
}
function sS(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof rt ||
    t instanceof cm ||
    t instanceof Is ||
    t instanceof en ||
    t instanceof um
  );
}
function fm(t, e, n) {
  if (
    !sS(n) ||
    !(function (i) {
      return (
        typeof i == "object" &&
        i !== null &&
        (Object.getPrototypeOf(i) === Object.prototype ||
          Object.getPrototypeOf(i) === null)
      );
    })(n)
  ) {
    const r = lm(n);
    throw r === "an object" ? e.Fu(t + " a custom object") : e.Fu(t + " " + r);
  }
}
function gd(t, e, n) {
  if ((e = Fr(e)) instanceof Pc) return e._internalPath;
  if (typeof e == "string") return dm(t, e);
  throw Mu("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const eO = new RegExp("[~\\*/\\[\\]]");
function dm(t, e, n) {
  if (e.search(eO) >= 0)
    throw Mu(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n,
    );
  try {
    return new Pc(...e.split("."))._internalPath;
  } catch {
    throw Mu(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n,
    );
  }
}
function Mu(t, e, n, r, i) {
  const s = r && !r.isEmpty(),
    o = i !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let u = "";
  return (
    (s || o) &&
      ((u += " (found"),
      s && (u += ` in field ${r}`),
      o && (u += ` in document ${i}`),
      (u += ")")),
    new Y(z.INVALID_ARGUMENT, a + t + u)
  );
}
function oS(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aS {
  constructor(e, n, r, i, s) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = r),
      (this._document = i),
      (this._converter = s);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new en(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new tO(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null,
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(lS("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class tO extends aS {
  data() {
    return super.data();
  }
}
function lS(t, e) {
  return typeof e == "string"
    ? dm(t, e)
    : e instanceof Pc
      ? e._internalPath
      : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nO(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new Y(
      z.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause",
    );
}
class rO {
  convertValue(e, n = "none") {
    switch (Ci(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Je(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(xi(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw ne();
    }
  }
  convertObject(e, n) {
    return this.convertObjectMap(e.fields, n);
  }
  convertObjectMap(e, n = "none") {
    const r = {};
    return (
      ki(e, (i, s) => {
        r[i] = this.convertValue(s, n);
      }),
      r
    );
  }
  convertGeoPoint(e) {
    return new cm(Je(e.latitude), Je(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((r) => this.convertValue(r, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const r = Wp(e);
        return r == null ? null : this.convertValue(r, n);
      case "estimate":
        return this.convertTimestamp(ha(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = Br(e);
    return new rt(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const r = be.fromString(e);
    Ce(kT(r));
    const i = new fa(r.get(1), r.get(3)),
      s = new X(r.popFirst(5));
    return (
      i.isEqual(n) ||
        nr(
          `Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`,
        ),
      s
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iO(t, e, n) {
  let r;
  return (r = t ? t.toFirestore(e) : e), r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sl {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class sO extends aS {
  constructor(e, n, r, i, s, o) {
    super(e, n, r, i, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = s);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new $l(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null,
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps,
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const r = this._document.data.field(lS("DocumentSnapshot.get", e));
      if (r !== null)
        return this._userDataWriter.convertValue(r, n.serverTimestamps);
    }
  }
}
class $l extends sO {
  data(e = {}) {
    return super.data(e);
  }
}
class oO {
  constructor(e, n, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = i),
      (this.metadata = new Sl(i.hasPendingWrites, i.fromCache)),
      (this.query = r);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((r) => {
      e.call(
        n,
        new $l(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new Sl(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache,
          ),
          this.query.converter,
        ),
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new Y(
        z.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (i, s) {
          if (i._snapshot.oldDocs.isEmpty()) {
            let o = 0;
            return i._snapshot.docChanges.map((a) => {
              const u = new $l(
                i._firestore,
                i._userDataWriter,
                a.doc.key,
                a.doc,
                new Sl(
                  i._snapshot.mutatedKeys.has(a.doc.key),
                  i._snapshot.fromCache,
                ),
                i.query.converter,
              );
              return (
                a.doc, { type: "added", doc: u, oldIndex: -1, newIndex: o++ }
              );
            });
          }
          {
            let o = i._snapshot.oldDocs;
            return i._snapshot.docChanges
              .filter((a) => s || a.type !== 3)
              .map((a) => {
                const u = new $l(
                  i._firestore,
                  i._userDataWriter,
                  a.doc.key,
                  a.doc,
                  new Sl(
                    i._snapshot.mutatedKeys.has(a.doc.key),
                    i._snapshot.fromCache,
                  ),
                  i.query.converter,
                );
                let c = -1,
                  h = -1;
                return (
                  a.type !== 0 &&
                    ((c = o.indexOf(a.doc.key)), (o = o.delete(a.doc.key))),
                  a.type !== 1 &&
                    ((o = o.add(a.doc)), (h = o.indexOf(a.doc.key))),
                  { type: aO(a.type), doc: u, oldIndex: c, newIndex: h }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function aO(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return ne();
  }
}
class lO extends rO {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new Is(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new en(this.firestore, null, n);
  }
}
function uO(t) {
  t = Ai(t, Tc);
  const e = Ai(t.firestore, Sc),
    n = ZT(e),
    r = new lO(e);
  return nO(t._query), zN(n, t._query).then((i) => new oO(e, r, t, i));
}
function cO(t, e, n) {
  t = Ai(t, en);
  const r = Ai(t.firestore, Sc),
    i = iO(t.converter, e);
  return uS(r, [
    XN(rS(r), "setDoc", t._key, i, t.converter !== null, n).toMutation(
      t._key,
      bn.none(),
    ),
  ]);
}
function hO(t, e, n, ...r) {
  t = Ai(t, en);
  const i = Ai(t.firestore, Sc),
    s = rS(i);
  let o;
  return (
    (o =
      typeof (e = Fr(e)) == "string" || e instanceof Pc
        ? ZN(s, "updateDoc", t._key, e, n, r)
        : JN(s, "updateDoc", t._key, e)),
    uS(i, [o.toMutation(t._key, bn.exists(!0))])
  );
}
function uS(t, e) {
  return (function (r, i) {
    const s = new Dr();
    return (
      r.asyncQueue.enqueueAndForget(async () => AN(await BN(r), i, s)),
      s.promise
    );
  })(ZT(t), e);
}
(function (e, n = !0) {
  (function (i) {
    Os = i;
  })(zD),
    Iu(
      new la(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            a = new Sc(
              new rb(r.getProvider("auth-internal")),
              new ab(r.getProvider("app-check-internal")),
              (function (c, h) {
                if (
                  !Object.prototype.hasOwnProperty.apply(c.options, [
                    "projectId",
                  ])
                )
                  throw new Y(
                    z.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new fa(c.options.projectId, h);
              })(o, i),
              o,
            );
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), a._setSettings(s), a
          );
        },
        "PUBLIC",
      ).setMultipleInstances(!0),
    ),
    cs(Gv, "4.6.5", e),
    cs(Gv, "4.6.5", "esm2017");
})();
const fO = {
    apiKey: "AIzaSyBRDPLR7DcVuA2vswv0RsWH1nYIIJ_Z00o",
    authDomain: "habittracker-cf985.firebaseapp.com",
    projectId: "habittracker-cf985",
    storageBucket: "habittracker-cf985.appspot.com",
    messagingSenderId: "605015987531",
    appId: "1:605015987531:web:a74ae05be8c827075544ce",
  },
  dO = jE(fO),
  pm = GN(dO),
  pO = async (t) => {
    const e = JT(pm, "habits", t.id);
    return await cO(e, t), t;
  },
  cS = async () => {
    const t = await uO(HN(pm, "habits")),
      e = [];
    return (
      t.forEach((n) => {
        e.push({ id: n.id, ...n.data() });
      }),
      e
    );
  },
  mO = async (t) => {
    try {
      const e = JT(pm, "habits", t.id);
      console.log(e), await hO(e, { presentCount: t.presentCount });
    } catch (e) {
      throw (console.error("Error updating habit: ", e), e);
    }
  },
  Ac = V.createContext(void 0),
  gO = ({ children: t }) => {
    const [e, n] = V.useReducer(SV, TV);
    return (
      V.useEffect(() => {
        (async () => {
          const i = await cS();
          n({ type: "SET_DATA", payload: i });
        })();
      }, []),
      N.jsx(Ac.Provider, { value: { state: e, dispatch: n }, children: t })
    );
  },
  hS = async (t, e) => {
    const n = await pO(t);
    e({ type: "ADD_HABIT", payload: n });
  },
  yO = async (t) => {
    try {
      const e = await cS();
      t({ type: "SET_DATA", payload: e });
    } catch (e) {
      console.error("Error fetching habits: ", e);
    }
  };
function vO() {
  const [t, e] = V.useState(!1),
    [n, r] = V.useState({
      name: "",
      date: "",
      goal: "",
      reminder: "",
      count: 0,
      presentCount: 0,
    }),
    i = () => {
      e(!1),
        r({
          name: "",
          date: "",
          goal: "",
          reminder: "",
          count: 0,
          presentCount: 0,
        });
    },
    s = V.useContext(Ac);
  if (!s) throw new Error("HabitContext must be used within a HabitProvider");
  const { dispatch: o } = s,
    a = (c) => {
      const { name: h, value: f } = c.target;
      r((p) => ({ ...p, [h]: f }));
    },
    u = async () => {
      const c = { id: VE(), ...n };
      await hS(c, o),
        o({ type: "ADD_HABIT", payload: c }),
        r({
          name: "",
          date: "",
          goal: "",
          reminder: "",
          count: 0,
          presentCount: 0,
        }),
        i();
    };
  return N.jsxs("div", {
    children: [
      N.jsx("button", {
        type: "button",
        className:
          "flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue",
        onClick: () => e((c) => !c),
        children: N.jsx(iV, { size: 30 }),
      }),
      N.jsx(kE, {
        open: t,
        closeOnDocumentClick: !0,
        onClose: i,
        children: N.jsxs("div", {
          className:
            "relative -mt-20 flex w-[28rem] flex-col items-center justify-center rounded-md bg-second p-5 shadow-md sm:w-80",
          children: [
            N.jsx("h1", {
              className: "text-center text-green-600",
              children: "Bad Habit 😔",
            }),
            N.jsx(fi.button, {
              className: "pointer absolute right-1 top-1 text-white",
              onClick: i,
              initial: { rotate: 0 },
              whileHover: { rotate: 180 },
              transition: { duration: 0.5 },
              children: N.jsx(rw, { size: 35 }),
            }),
            N.jsxs("div", {
              className: "flex w-full flex-col gap-y-4 p-5",
              children: [
                N.jsxs("label", {
                  className:
                    "-mb-[0.75rem] block text-sm font-medium dark:text-white",
                  children: [
                    "Habit name ",
                    N.jsx("span", { className: "text-red-600", children: "*" }),
                  ],
                }),
                N.jsxs("select", {
                  name: "name",
                  className:
                    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-second dark:focus:border-babyBlue",
                  value: n.name,
                  onChange: a,
                  children: [
                    N.jsx("option", {
                      value: "",
                      disabled: !0,
                      children: "Select a habit",
                    }),
                    gV.map((c) =>
                      N.jsx("option", { value: c, children: c }, c),
                    ),
                  ],
                }),
                N.jsxs("label", {
                  className:
                    "-mb-[0.75rem] block text-sm font-medium dark:text-white",
                  children: [
                    "Start date ",
                    N.jsx("span", { className: "text-red-600", children: "*" }),
                  ],
                }),
                N.jsx("input", {
                  type: "date",
                  name: "date",
                  className:
                    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                  placeholder: "Start date",
                  value: n.date,
                  onChange: a,
                }),
                N.jsx("label", {
                  className:
                    "-mb-[0.5rem] block text-sm font-medium dark:text-white",
                  children: "Time",
                }),
                N.jsx("input", {
                  type: "time",
                  name: "reminder",
                  className:
                    "relative block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                  placeholder: "Time",
                  value: n.reminder,
                  onChange: a,
                }),
              ],
            }),
            N.jsx("button", {
              className:
                "w-1/2 rounded-lg border p-2 text-white transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0",
              onClick: u,
              children: "Save✅",
            }),
          ],
        }),
      }),
    ],
  });
}
function _O() {
  const [t, e] = V.useState(!1),
    [n, r] = V.useState({
      name: "",
      date: "",
      goal: "",
      reminder: "",
      count: 0,
      presentCount: 0,
    }),
    i = () => {
      e(!1),
        r({
          name: "",
          date: "",
          goal: "",
          reminder: "",
          count: 0,
          presentCount: 0,
        });
    },
    s = V.useContext(Ac);
  if (!s) throw new Error("HabitContext must be used within a HabitProvider");
  const { dispatch: o } = s,
    a = (c) => {
      const { name: h, value: f } = c.target;
      r((p) => {
        if (h === "goal" || h === "goalUnit") {
          const [g, w] = p.goal.split(" ");
          return h === "goal"
            ? { ...p, goal: `${f} ${w || ""}`.trim() }
            : { ...p, goal: `${g || ""} ${f}`.trim() };
        } else return { ...p, count: parseInt(p.goal), [h]: f };
      });
    },
    u = async () => {
      const c = { id: VE(), ...n };
      await hS(c, o),
        o({ type: "ADD_HABIT", payload: c }),
        r({
          name: "",
          date: "",
          goal: "",
          reminder: "",
          count: 0,
          presentCount: 0,
        }),
        i();
    };
  return N.jsxs("div", {
    children: [
      N.jsx("button", {
        type: "button",
        className:
          "flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue",
        onClick: () => e((c) => !c),
        children: N.jsx(SA, { size: 30 }),
      }),
      N.jsx(kE, {
        open: t,
        closeOnDocumentClick: !0,
        onClose: i,
        children: N.jsxs("div", {
          className:
            "relative -mt-20 flex w-[28rem] flex-col items-center justify-center rounded-md bg-second p-5 shadow-md sm:w-80",
          children: [
            N.jsx("h1", {
              className: "text-center text-green-600",
              children: "Good Habit 😎",
            }),
            N.jsx(fi.button, {
              className: "pointer absolute right-1 top-1 text-white",
              onClick: i,
              initial: { rotate: 0 },
              whileHover: { rotate: 180 },
              transition: { duration: 0.5 },
              children: N.jsx(rw, { size: 35 }),
            }),
            N.jsxs("div", {
              className: "flex w-full flex-col gap-y-4 p-5",
              children: [
                N.jsxs("label", {
                  className:
                    "-mb-[0.75rem] block text-sm font-medium dark:text-white",
                  children: [
                    "Habit name ",
                    N.jsx("span", { className: "text-red-600", children: "*" }),
                  ],
                }),
                N.jsxs("select", {
                  name: "name",
                  className:
                    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-second dark:focus:border-babyBlue",
                  value: n.name,
                  onChange: a,
                  children: [
                    N.jsx("option", {
                      value: "",
                      disabled: !0,
                      children: "Select a habit",
                    }),
                    yV.map((c) =>
                      N.jsx("option", { value: c, children: c }, c),
                    ),
                  ],
                }),
                N.jsxs("label", {
                  className:
                    "-mb-[0.75rem] block text-sm font-medium dark:text-white",
                  children: [
                    "Start date ",
                    N.jsx("span", { className: "text-red-600", children: "*" }),
                  ],
                }),
                N.jsx("input", {
                  type: "date",
                  name: "date",
                  className:
                    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                  placeholder: "Start date",
                  value: n.date,
                  onChange: a,
                }),
                N.jsxs("div", {
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    N.jsx("div", {
                      children: N.jsx("label", {
                        className:
                          "-mb-[0.5rem] block text-sm font-medium dark:text-white",
                        children: "Frequency",
                      }),
                    }),
                    N.jsxs("div", {
                      className:
                        "flex w-full items-center justify-center gap-3",
                      children: [
                        N.jsx("input", {
                          className:
                            "block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                          type: "number",
                          name: "goal",
                          placeholder: "Goal",
                          value: n.goal.split(" ")[0] || "",
                          onChange: a,
                        }),
                        N.jsxs("select", {
                          className:
                            "block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                          name: "goalUnit",
                          value: n.goal.split(" ")[1] || "",
                          onChange: a,
                          children: [
                            N.jsx("option", {
                              value: "",
                              disabled: !0,
                              children: "How often?",
                            }),
                            N.jsx("option", {
                              value: "day",
                              children: "For day",
                            }),
                            N.jsx("option", {
                              value: "week",
                              children: "For week",
                            }),
                            N.jsx("option", {
                              value: "month",
                              children: "For month",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                N.jsx("label", {
                  className:
                    "-mb-[0.5rem] block text-sm font-medium dark:text-white",
                  children: "Time",
                }),
                N.jsx("input", {
                  type: "time",
                  name: "reminder",
                  className:
                    "relative block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-white focus:border-babyBlue focus:ring-babyBlue dark:border-gray-600 dark:bg-first dark:text-white dark:placeholder-white dark:focus:border-babyBlue",
                  placeholder: "Time",
                  value: n.reminder,
                  onChange: a,
                }),
              ],
            }),
            N.jsx("button", {
              className:
                "w-1/2 rounded-lg border p-2 text-white transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0",
              onClick: u,
              children: "Save✅",
            }),
          ],
        }),
      }),
    ],
  });
}
function wO() {
  const [t, e] = V.useState(new Date()),
    [n, r] = ew(),
    s = ((h) => {
      const f = new Date(h),
        p = f.getDay(),
        g = f.getDate() - p + (p === 0 ? -6 : 1);
      return f.setDate(g), f;
    })(t),
    o = () => {
      e((h) => {
        const f = new Date(h);
        return f.setDate(h.getDate() + 7), f;
      });
    },
    a = () => {
      e((h) => {
        const f = new Date(h);
        return f.setDate(h.getDate() - 7), f;
      });
    },
    u = Array.from({ length: 7 }, (h, f) => {
      const p = new Date(s);
      return p.setDate(s.getDate() + f), p;
    }),
    c = (h) => {
      const f = new URLSearchParams();
      f.append("date", h.toDateString()), r(f);
    };
  return N.jsxs("div", {
    className:
      "week-calendar absolute bottom-[4.4rem] flex w-full flex-col items-center justify-center bg-second p-4 text-white sm:p-2 sm:text-sm",
    children: [
      N.jsx("div", {
        className: "week-header text-md mb-4 flex gap-3 sm:gap-2",
        children: u.map((h, f) => {
          const p = h.toLocaleDateString() === new Date().toLocaleDateString();
          return N.jsx(
            "button",
            {
              onClick: () => c(h),
              className: `day flex size-16 cursor-pointer items-center justify-center rounded-md bg-first p-2 text-center transition duration-200 hover:scale-105 sm:size-12 ${p ? "text-babyBlue hover:shadow-md hover:shadow-babyBlue" : null}`,
              children: h.toLocaleDateString("en-GB", {
                day: "numeric",
                weekday: "short",
                month: "numeric",
              }),
            },
            f,
          );
        }),
      }),
      N.jsxs("div", {
        className:
          "flex w-full items-center justify-center gap-3 sm:flex sm:gap-2",
        children: [
          N.jsx("button", {
            className:
              "w-1/2 rounded-lg border p-2 transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0",
            onClick: a,
            children: "Prev Week",
          }),
          N.jsx("button", {
            className:
              "w-1/2 rounded-lg border p-2 transition duration-200 hover:scale-105 hover:text-babyBlue sm:m-0",
            onClick: o,
            children: "Next Week",
          }),
        ],
      }),
    ],
  });
}
function EO(t) {
  return qr({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: { d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" },
        child: [],
      },
    ],
  })(t);
}
var fS = { exports: {} };
(function (t, e) {
  (function (n, r) {
    t.exports = r(V);
  })(typeof self < "u" ? self : LS, function (n) {
    return (function (r) {
      var i = {};
      function s(o) {
        if (i[o]) return i[o].exports;
        var a = (i[o] = { i: o, l: !1, exports: {} });
        return r[o].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
      }
      return (
        (s.m = r),
        (s.c = i),
        (s.d = function (o, a, u) {
          s.o(o, a) || Object.defineProperty(o, a, { enumerable: !0, get: u });
        }),
        (s.r = function (o) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (s.t = function (o, a) {
          if (
            (1 & a && (o = s(o)),
            8 & a || (4 & a && typeof o == "object" && o && o.__esModule))
          )
            return o;
          var u = Object.create(null);
          if (
            (s.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: o }),
            2 & a && typeof o != "string")
          )
            for (var c in o)
              s.d(
                u,
                c,
                function (h) {
                  return o[h];
                }.bind(null, c),
              );
          return u;
        }),
        (s.n = function (o) {
          var a =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return s.d(a, "a", a), a;
        }),
        (s.o = function (o, a) {
          return Object.prototype.hasOwnProperty.call(o, a);
        }),
        (s.p = ""),
        s((s.s = 2))
      );
    })([
      function (r, i) {
        r.exports = n;
      },
      function (r, i, s) {
        var o = {
          linear: function (a, u, c, h) {
            return ((c - u) * a) / h + u;
          },
          easeInQuad: function (a, u, c, h) {
            return (c - u) * (a /= h) * a + u;
          },
          easeOutQuad: function (a, u, c, h) {
            return -(c - u) * (a /= h) * (a - 2) + u;
          },
          easeInOutQuad: function (a, u, c, h) {
            var f = c - u;
            return (a /= h / 2) < 1
              ? (f / 2) * a * a + u
              : (-f / 2) * (--a * (a - 2) - 1) + u;
          },
          easeInCubic: function (a, u, c, h) {
            return (c - u) * (a /= h) * a * a + u;
          },
          easeOutCubic: function (a, u, c, h) {
            return (c - u) * ((a = a / h - 1) * a * a + 1) + u;
          },
          easeInOutCubic: function (a, u, c, h) {
            var f = c - u;
            return (a /= h / 2) < 1
              ? (f / 2) * a * a * a + u
              : (f / 2) * ((a -= 2) * a * a + 2) + u;
          },
          easeInQuart: function (a, u, c, h) {
            return (c - u) * (a /= h) * a * a * a + u;
          },
          easeOutQuart: function (a, u, c, h) {
            return -(c - u) * ((a = a / h - 1) * a * a * a - 1) + u;
          },
          easeInOutQuart: function (a, u, c, h) {
            var f = c - u;
            return (a /= h / 2) < 1
              ? (f / 2) * a * a * a * a + u
              : (-f / 2) * ((a -= 2) * a * a * a - 2) + u;
          },
          easeInQuint: function (a, u, c, h) {
            return (c - u) * (a /= h) * a * a * a * a + u;
          },
          easeOutQuint: function (a, u, c, h) {
            return (c - u) * ((a = a / h - 1) * a * a * a * a + 1) + u;
          },
          easeInOutQuint: function (a, u, c, h) {
            var f = c - u;
            return (a /= h / 2) < 1
              ? (f / 2) * a * a * a * a * a + u
              : (f / 2) * ((a -= 2) * a * a * a * a + 2) + u;
          },
          easeInSine: function (a, u, c, h) {
            var f = c - u;
            return -f * Math.cos((a / h) * (Math.PI / 2)) + f + u;
          },
          easeOutSine: function (a, u, c, h) {
            return (c - u) * Math.sin((a / h) * (Math.PI / 2)) + u;
          },
          easeInOutSine: function (a, u, c, h) {
            return (-(c - u) / 2) * (Math.cos((Math.PI * a) / h) - 1) + u;
          },
          easeInExpo: function (a, u, c, h) {
            return a == 0 ? u : (c - u) * Math.pow(2, 10 * (a / h - 1)) + u;
          },
          easeOutExpo: function (a, u, c, h) {
            var f = c - u;
            return a == h ? u + f : f * (1 - Math.pow(2, (-10 * a) / h)) + u;
          },
          easeInOutExpo: function (a, u, c, h) {
            var f = c - u;
            return a === 0
              ? u
              : a === h
                ? u + f
                : (a /= h / 2) < 1
                  ? (f / 2) * Math.pow(2, 10 * (a - 1)) + u
                  : (f / 2) * (2 - Math.pow(2, -10 * --a)) + u;
          },
          easeInCirc: function (a, u, c, h) {
            return -(c - u) * (Math.sqrt(1 - (a /= h) * a) - 1) + u;
          },
          easeOutCirc: function (a, u, c, h) {
            return (c - u) * Math.sqrt(1 - (a = a / h - 1) * a) + u;
          },
          easeInOutCirc: function (a, u, c, h) {
            var f = c - u;
            return (a /= h / 2) < 1
              ? (-f / 2) * (Math.sqrt(1 - a * a) - 1) + u
              : (f / 2) * (Math.sqrt(1 - (a -= 2) * a) + 1) + u;
          },
          easeInElastic: function (a, u, c, h) {
            var f,
              p,
              g,
              w = c - u;
            return (
              (g = 1.70158),
              a === 0
                ? u
                : (a /= h) == 1
                  ? u + w
                  : ((p = 0) || (p = 0.3 * h),
                    (f = w) < Math.abs(w)
                      ? ((f = w), (g = p / 4))
                      : (g = (p / (2 * Math.PI)) * Math.asin(w / f)),
                    -f *
                      Math.pow(2, 10 * (a -= 1)) *
                      Math.sin(((a * h - g) * (2 * Math.PI)) / p) +
                      u)
            );
          },
          easeOutElastic: function (a, u, c, h) {
            var f,
              p,
              g,
              w = c - u;
            return (
              (g = 1.70158),
              a === 0
                ? u
                : (a /= h) == 1
                  ? u + w
                  : ((p = 0) || (p = 0.3 * h),
                    (f = w) < Math.abs(w)
                      ? ((f = w), (g = p / 4))
                      : (g = (p / (2 * Math.PI)) * Math.asin(w / f)),
                    f *
                      Math.pow(2, -10 * a) *
                      Math.sin(((a * h - g) * (2 * Math.PI)) / p) +
                      w +
                      u)
            );
          },
          easeInOutElastic: function (a, u, c, h) {
            var f,
              p,
              g,
              w = c - u;
            return (
              (g = 1.70158),
              a === 0
                ? u
                : (a /= h / 2) == 2
                  ? u + w
                  : ((p = 0) || (p = h * 0.44999999999999996),
                    (f = w) < Math.abs(w)
                      ? ((f = w), (g = p / 4))
                      : (g = (p / (2 * Math.PI)) * Math.asin(w / f)),
                    a < 1
                      ? f *
                          Math.pow(2, 10 * (a -= 1)) *
                          Math.sin(((a * h - g) * (2 * Math.PI)) / p) *
                          -0.5 +
                        u
                      : f *
                          Math.pow(2, -10 * (a -= 1)) *
                          Math.sin(((a * h - g) * (2 * Math.PI)) / p) *
                          0.5 +
                        w +
                        u)
            );
          },
          easeInBack: function (a, u, c, h, f) {
            return (
              f === void 0 && (f = 1.70158),
              (c - u) * (a /= h) * a * ((f + 1) * a - f) + u
            );
          },
          easeOutBack: function (a, u, c, h, f) {
            return (
              f === void 0 && (f = 1.70158),
              (c - u) * ((a = a / h - 1) * a * ((f + 1) * a + f) + 1) + u
            );
          },
          easeInOutBack: function (a, u, c, h, f) {
            var p = c - u;
            return (
              f === void 0 && (f = 1.70158),
              (a /= h / 2) < 1
                ? (p / 2) * (a * a * ((1 + (f *= 1.525)) * a - f)) + u
                : (p / 2) * ((a -= 2) * a * ((1 + (f *= 1.525)) * a + f) + 2) +
                  u
            );
          },
          easeInBounce: function (a, u, c, h) {
            var f = c - u;
            return f - o.easeOutBounce(h - a, 0, f, h) + u;
          },
          easeOutBounce: function (a, u, c, h) {
            var f = c - u;
            return (a /= h) < 0.36363636363636365
              ? f * (7.5625 * a * a) + u
              : a < 0.7272727272727273
                ? f * (7.5625 * (a -= 0.5454545454545454) * a + 0.75) + u
                : a < 0.9090909090909091
                  ? f * (7.5625 * (a -= 0.8181818181818182) * a + 0.9375) + u
                  : f * (7.5625 * (a -= 0.9545454545454546) * a + 0.984375) + u;
          },
          easeInOutBounce: function (a, u, c, h) {
            var f = c - u;
            return a < h / 2
              ? 0.5 * o.easeInBounce(2 * a, 0, f, h) + u
              : 0.5 * o.easeOutBounce(2 * a - h, 0, f, h) + 0.5 * f + u;
          },
        };
        r.exports = o;
      },
      function (r, i, s) {
        r.exports = s(3);
      },
      function (r, i, s) {
        s.r(i),
          s.d(i, "ReactConfetti", function () {
            return Bt;
          });
        var o,
          a,
          u = s(0),
          c = s.n(u),
          h = s(1),
          f = s.n(h);
        function p(L, B) {
          return L + Math.random() * (B - L);
        }
        function g(L, B) {
          for (var $ = 0; $ < B.length; $++) {
            var F = B[$];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(L, F.key, F);
          }
        }
        function w(L, B, $) {
          return (
            B in L
              ? Object.defineProperty(L, B, {
                  value: $,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (L[B] = $),
            L
          );
        }
        (function (L) {
          (L[(L.Circle = 0)] = "Circle"),
            (L[(L.Square = 1)] = "Square"),
            (L[(L.Strip = 2)] = "Strip");
        })(o || (o = {})),
          (function (L) {
            (L[(L.Positive = 1)] = "Positive"),
              (L[(L.Negative = -1)] = "Negative");
          })(a || (a = {}));
        var C = (function () {
          function L(F, ae, G, ee) {
            (function (Ln, sr) {
              if (!(Ln instanceof sr))
                throw new TypeError("Cannot call a class as a function");
            })(this, L),
              w(this, "context", void 0),
              w(this, "radius", void 0),
              w(this, "x", void 0),
              w(this, "y", void 0),
              w(this, "w", void 0),
              w(this, "h", void 0),
              w(this, "vx", void 0),
              w(this, "vy", void 0),
              w(this, "shape", void 0),
              w(this, "angle", void 0),
              w(this, "angularSpin", void 0),
              w(this, "color", void 0),
              w(this, "rotateY", void 0),
              w(this, "rotationDirection", void 0),
              w(this, "getOptions", void 0),
              (this.getOptions = ae);
            var me,
              le,
              we = this.getOptions(),
              Ke = we.colors,
              Se = we.initialVelocityX,
              Ne = we.initialVelocityY;
            (this.context = F),
              (this.x = G),
              (this.y = ee),
              (this.w = p(5, 20)),
              (this.h = p(5, 20)),
              (this.radius = p(5, 10)),
              (this.vx =
                typeof Se == "number" ? p(-Se, Se) : p(Se.min, Se.max)),
              (this.vy = typeof Ne == "number" ? p(-Ne, 0) : p(Ne.min, Ne.max)),
              (this.shape =
                ((me = 0),
                (le = 2),
                Math.floor(me + Math.random() * (le - me + 1)))),
              (this.angle = (p(0, 360) * Math.PI) / 180),
              (this.angularSpin = p(-0.2, 0.2)),
              (this.color = Ke[Math.floor(Math.random() * Ke.length)]),
              (this.rotateY = p(0, 1)),
              (this.rotationDirection = p(0, 1) ? a.Positive : a.Negative);
          }
          var B, $;
          return (
            (B = L),
            ($ = [
              {
                key: "update",
                value: function () {
                  var F = this.getOptions(),
                    ae = F.gravity,
                    G = F.wind,
                    ee = F.friction,
                    me = F.opacity,
                    le = F.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += ae),
                    (this.vx += G),
                    (this.vx *= ee),
                    (this.vy *= ee),
                    this.rotateY >= 1 && this.rotationDirection === a.Positive
                      ? (this.rotationDirection = a.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === a.Negative &&
                        (this.rotationDirection = a.Positive);
                  var we = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += we),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = me),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    le && typeof le == "function")
                  )
                    le.call(this, this.context);
                  else
                    switch (this.shape) {
                      case o.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case o.Square:
                        this.context.fillRect(
                          -this.w / 2,
                          -this.h / 2,
                          this.w,
                          this.h,
                        );
                        break;
                      case o.Strip:
                        this.context.fillRect(
                          -this.w / 6,
                          -this.h / 2,
                          this.w / 3,
                          this.h,
                        );
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && g(B.prototype, $),
            L
          );
        })();
        function A(L, B, $) {
          return (
            B in L
              ? Object.defineProperty(L, B, {
                  value: $,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (L[B] = $),
            L
          );
        }
        var E = function L(B, $) {
          var F = this;
          (function (G, ee) {
            if (!(G instanceof ee))
              throw new TypeError("Cannot call a class as a function");
          })(this, L),
            A(this, "canvas", void 0),
            A(this, "context", void 0),
            A(this, "getOptions", void 0),
            A(this, "x", 0),
            A(this, "y", 0),
            A(this, "w", 0),
            A(this, "h", 0),
            A(this, "lastNumberOfPieces", 0),
            A(this, "tweenInitTime", Date.now()),
            A(this, "particles", []),
            A(this, "particlesGenerated", 0),
            A(this, "removeParticleAt", function (G) {
              F.particles.splice(G, 1);
            }),
            A(this, "getParticle", function () {
              var G = p(F.x, F.w + F.x),
                ee = p(F.y, F.h + F.y);
              return new C(F.context, F.getOptions, G, ee);
            }),
            A(this, "animate", function () {
              var G = F.canvas,
                ee = F.context,
                me = F.particlesGenerated,
                le = F.lastNumberOfPieces,
                we = F.getOptions(),
                Ke = we.run,
                Se = we.recycle,
                Ne = we.numberOfPieces,
                Ln = we.debug,
                sr = we.tweenFunction,
                Ge = we.tweenDuration;
              if (!Ke) return !1;
              var Gt = F.particles.length,
                qt = Se ? Gt : me,
                Ee = Date.now();
              if (qt < Ne) {
                le !== Ne &&
                  ((F.tweenInitTime = Ee), (F.lastNumberOfPieces = Ne));
                for (
                  var Ue = F.tweenInitTime,
                    Tn = sr(
                      Ee - Ue > Ge ? Ge : Math.max(0, Ee - Ue),
                      qt,
                      Ne,
                      Ge,
                    ),
                    Jr = Math.round(Tn - qt),
                    Fn = 0;
                  Fn < Jr;
                  Fn++
                )
                  F.particles.push(F.getParticle());
                F.particlesGenerated += Jr;
              }
              return (
                Ln &&
                  ((ee.font = "12px sans-serif"),
                  (ee.fillStyle = "#333"),
                  (ee.textAlign = "right"),
                  ee.fillText(
                    "Particles: ".concat(Gt),
                    G.width - 10,
                    G.height - 20,
                  )),
                F.particles.forEach(function (jn, Sn) {
                  jn.update(),
                    (jn.y > G.height ||
                      jn.y < -100 ||
                      jn.x > G.width + 100 ||
                      jn.x < -100) &&
                      (Se && qt <= Ne
                        ? (F.particles[Sn] = F.getParticle())
                        : F.removeParticleAt(Sn));
                }),
                Gt > 0 || qt < Ne
              );
            }),
            (this.canvas = B);
          var ae = this.canvas.getContext("2d");
          if (!ae) throw new Error("Could not get canvas context");
          (this.context = ae), (this.getOptions = $);
        };
        function y(L, B) {
          var $ = Object.keys(L);
          if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(L);
            B &&
              (F = F.filter(function (ae) {
                return Object.getOwnPropertyDescriptor(L, ae).enumerable;
              })),
              $.push.apply($, F);
          }
          return $;
        }
        function T(L) {
          for (var B = 1; B < arguments.length; B++) {
            var $ = arguments[B] != null ? arguments[B] : {};
            B % 2
              ? y(Object($), !0).forEach(function (F) {
                  M(L, F, $[F]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    L,
                    Object.getOwnPropertyDescriptors($),
                  )
                : y(Object($)).forEach(function (F) {
                    Object.defineProperty(
                      L,
                      F,
                      Object.getOwnPropertyDescriptor($, F),
                    );
                  });
          }
          return L;
        }
        function k(L, B) {
          for (var $ = 0; $ < B.length; $++) {
            var F = B[$];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(L, F.key, F);
          }
        }
        function M(L, B, $) {
          return (
            B in L
              ? Object.defineProperty(L, B, {
                  value: $,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (L[B] = $),
            L
          );
        }
        var j = {
            width: typeof window < "u" ? window.innerWidth : 300,
            height: typeof window < "u" ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548",
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: f.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          P = (function () {
            function L(F, ae) {
              var G = this;
              (function (me, le) {
                if (!(me instanceof le))
                  throw new TypeError("Cannot call a class as a function");
              })(this, L),
                M(this, "canvas", void 0),
                M(this, "context", void 0),
                M(this, "_options", void 0),
                M(this, "generator", void 0),
                M(this, "rafId", void 0),
                M(this, "setOptionsWithDefaults", function (me) {
                  var le = {
                    confettiSource: { x: 0, y: 0, w: G.canvas.width, h: 0 },
                  };
                  (G._options = T(T(T({}, le), j), me)),
                    Object.assign(G, me.confettiSource);
                }),
                M(this, "update", function () {
                  var me = G.options,
                    le = me.run,
                    we = me.onConfettiComplete,
                    Ke = G.canvas,
                    Se = G.context;
                  le &&
                    ((Se.fillStyle = "white"),
                    Se.clearRect(0, 0, Ke.width, Ke.height)),
                    G.generator.animate()
                      ? (G.rafId = requestAnimationFrame(G.update))
                      : (we &&
                          typeof we == "function" &&
                          G.generator.particlesGenerated > 0 &&
                          we.call(G, G),
                        (G._options.run = !1));
                }),
                M(this, "reset", function () {
                  G.generator &&
                    G.generator.particlesGenerated > 0 &&
                    ((G.generator.particlesGenerated = 0),
                    (G.generator.particles = []),
                    (G.generator.lastNumberOfPieces = 0));
                }),
                M(this, "stop", function () {
                  (G.options = { run: !1 }),
                    G.rafId &&
                      (cancelAnimationFrame(G.rafId), (G.rafId = void 0));
                }),
                (this.canvas = F);
              var ee = this.canvas.getContext("2d");
              if (!ee) throw new Error("Could not get canvas context");
              (this.context = ee),
                (this.generator = new E(this.canvas, function () {
                  return G.options;
                })),
                (this.options = ae),
                this.update();
            }
            var B, $;
            return (
              (B = L),
              ($ = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (F) {
                    var ae = this._options && this._options.run,
                      G = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(F),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource,
                        ),
                        typeof F.recycle == "boolean" &&
                          F.recycle &&
                          G === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof F.run == "boolean" &&
                        F.run &&
                        ae === !1 &&
                        this.update();
                  },
                },
              ]) && k(B.prototype, $),
              L
            );
          })();
        function v(L) {
          return (
            (function (B) {
              if (Array.isArray(B)) return ce(B);
            })(L) ||
            (function (B) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(B))
                return Array.from(B);
            })(L) ||
            He(L) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function S(L) {
          return (S =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (B) {
                  return typeof B;
                }
              : function (B) {
                  return B &&
                    typeof Symbol == "function" &&
                    B.constructor === Symbol &&
                    B !== Symbol.prototype
                    ? "symbol"
                    : typeof B;
                })(L);
        }
        function x() {
          return (x =
            Object.assign ||
            function (L) {
              for (var B = 1; B < arguments.length; B++) {
                var $ = arguments[B];
                for (var F in $)
                  Object.prototype.hasOwnProperty.call($, F) && (L[F] = $[F]);
              }
              return L;
            }).apply(this, arguments);
        }
        function R(L, B) {
          var $ = Object.keys(L);
          if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(L);
            B &&
              (F = F.filter(function (ae) {
                return Object.getOwnPropertyDescriptor(L, ae).enumerable;
              })),
              $.push.apply($, F);
          }
          return $;
        }
        function D(L) {
          for (var B = 1; B < arguments.length; B++) {
            var $ = arguments[B] != null ? arguments[B] : {};
            B % 2
              ? R(Object($), !0).forEach(function (F) {
                  ye(L, F, $[F]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    L,
                    Object.getOwnPropertyDescriptors($),
                  )
                : R(Object($)).forEach(function (F) {
                    Object.defineProperty(
                      L,
                      F,
                      Object.getOwnPropertyDescriptor($, F),
                    );
                  });
          }
          return L;
        }
        function I(L, B) {
          return (
            (function ($) {
              if (Array.isArray($)) return $;
            })(L) ||
            (function ($, F) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
                var ae = [],
                  G = !0,
                  ee = !1,
                  me = void 0;
                try {
                  for (
                    var le, we = $[Symbol.iterator]();
                    !(G = (le = we.next()).done) &&
                    (ae.push(le.value), !F || ae.length !== F);
                    G = !0
                  );
                } catch (Ke) {
                  (ee = !0), (me = Ke);
                } finally {
                  try {
                    G || we.return == null || we.return();
                  } finally {
                    if (ee) throw me;
                  }
                }
                return ae;
              }
            })(L, B) ||
            He(L, B) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function He(L, B) {
          if (L) {
            if (typeof L == "string") return ce(L, B);
            var $ = Object.prototype.toString.call(L).slice(8, -1);
            return (
              $ === "Object" && L.constructor && ($ = L.constructor.name),
              $ === "Map" || $ === "Set"
                ? Array.from(L)
                : $ === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($)
                  ? ce(L, B)
                  : void 0
            );
          }
        }
        function ce(L, B) {
          (B == null || B > L.length) && (B = L.length);
          for (var $ = 0, F = new Array(B); $ < B; $++) F[$] = L[$];
          return F;
        }
        function Ye(L, B) {
          if (!(L instanceof B))
            throw new TypeError("Cannot call a class as a function");
        }
        function ut(L, B) {
          for (var $ = 0; $ < B.length; $++) {
            var F = B[$];
            (F.enumerable = F.enumerable || !1),
              (F.configurable = !0),
              "value" in F && (F.writable = !0),
              Object.defineProperty(L, F.key, F);
          }
        }
        function K(L, B) {
          return (K =
            Object.setPrototypeOf ||
            function ($, F) {
              return ($.__proto__ = F), $;
            })(L, B);
        }
        function J(L) {
          var B = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {}),
                ),
                !0
              );
            } catch {
              return !1;
            }
          })();
          return function () {
            var $,
              F = he(L);
            if (B) {
              var ae = he(this).constructor;
              $ = Reflect.construct(F, arguments, ae);
            } else $ = F.apply(this, arguments);
            return te(this, $);
          };
        }
        function te(L, B) {
          return !B || (S(B) !== "object" && typeof B != "function")
            ? _e(L)
            : B;
        }
        function _e(L) {
          if (L === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return L;
        }
        function he(L) {
          return (he = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (B) {
                return B.__proto__ || Object.getPrototypeOf(B);
              })(L);
        }
        function ye(L, B, $) {
          return (
            B in L
              ? Object.defineProperty(L, B, {
                  value: $,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (L[B] = $),
            L
          );
        }
        var jt = c.a.createRef(),
          bt = (function (L) {
            (function (G, ee) {
              if (typeof ee != "function" && ee !== null)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (G.prototype = Object.create(ee && ee.prototype, {
                constructor: { value: G, writable: !0, configurable: !0 },
              })),
                ee && K(G, ee);
            })(ae, L);
            var B,
              $,
              F = J(ae);
            function ae(G) {
              var ee;
              Ye(this, ae);
              for (
                var me = arguments.length,
                  le = new Array(me > 1 ? me - 1 : 0),
                  we = 1;
                we < me;
                we++
              )
                le[we - 1] = arguments[we];
              return (
                ye(
                  _e((ee = F.call.apply(F, [this, G].concat(le)))),
                  "canvas",
                  c.a.createRef(),
                ),
                ye(_e(ee), "confetti", void 0),
                (ee.canvas = G.canvasRef || jt),
                ee
              );
            }
            return (
              (B = ae),
              ($ = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var G = wt(this.props)[0];
                      this.confetti = new P(this.canvas.current, G);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var G = wt(this.props)[0];
                    this.confetti && (this.confetti.options = G);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.confetti && this.confetti.stop(),
                      (this.confetti = void 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var G = I(wt(this.props), 2),
                      ee = G[0],
                      me = G[1],
                      le = D(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        me.style,
                      );
                    return c.a.createElement(
                      "canvas",
                      x(
                        {
                          width: ee.width,
                          height: ee.height,
                          ref: this.canvas,
                        },
                        me,
                        { style: le },
                      ),
                    );
                  },
                },
              ]) && ut(B.prototype, $),
              ae
            );
          })(u.Component);
        function wt(L) {
          var B = {},
            $ = {},
            F = [].concat(v(Object.keys(j)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            ae = ["canvasRef"];
          for (var G in L) {
            var ee = L[G];
            F.includes(G)
              ? (B[G] = ee)
              : ae.includes(G)
                ? (ae[G] = ee)
                : ($[G] = ee);
          }
          return [B, $, {}];
        }
        ye(bt, "defaultProps", D({}, j)),
          ye(bt, "displayName", "ReactConfetti");
        var Bt = c.a.forwardRef(function (L, B) {
          return c.a.createElement(bt, x({ canvasRef: B }, L));
        });
        i.default = Bt;
      },
    ]).default;
  });
})(fS);
var TO = fS.exports;
const SO = yd(TO);
function PO(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  t && t.addEventListener && t.addEventListener.apply(t, e);
}
function xO(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
  t && t.removeEventListener && t.removeEventListener.apply(t, e);
}
var Lh = typeof window < "u",
  CO = function (t) {
    V.useEffect(t, []);
  },
  AO = function (t) {
    var e = V.useRef(t);
    (e.current = t),
      CO(function () {
        return function () {
          return e.current();
        };
      });
  },
  IO = function (t) {
    var e = V.useRef(0),
      n = V.useState(t),
      r = n[0],
      i = n[1],
      s = V.useCallback(function (o) {
        cancelAnimationFrame(e.current),
          (e.current = requestAnimationFrame(function () {
            i(o);
          }));
      }, []);
    return (
      AO(function () {
        cancelAnimationFrame(e.current);
      }),
      [r, s]
    );
  },
  RO = function (t, e) {
    t === void 0 && (t = 1 / 0), e === void 0 && (e = 1 / 0);
    var n = IO({
        width: Lh ? window.innerWidth : t,
        height: Lh ? window.innerHeight : e,
      }),
      r = n[0],
      i = n[1];
    return (
      V.useEffect(function () {
        if (Lh) {
          var s = function () {
            i({ width: window.innerWidth, height: window.innerHeight });
          };
          return (
            PO(window, "resize", s),
            function () {
              xO(window, "resize", s);
            }
          );
        }
      }, []),
      r
    );
  };
function kO() {
  const [t] = ew(),
    e = V.useContext(Ac),
    [n, r] = V.useState(!1),
    { width: i, height: s } = RO(),
    o = (e == null ? void 0 : e.state.habits) || [],
    a = t.get("date") || new Date(),
    u = o.filter((p) => {
      const g = new Date(a),
        w = new Date(p.date);
      return (
        (g.getFullYear() === w.getFullYear() &&
          g.getMonth() === w.getMonth() &&
          g.getDate() === w.getDate()) ||
        p.count > 0
      );
    });
  if ((console.log(u), !e))
    throw new Error("JournalDetails must be used within a HabitProvider");
  const { state: c, dispatch: h } = e;
  V.useEffect(() => {
    yO(h);
  }, [h]);
  const f = async (p, g) => {
    const w = c.habits.find((E) => E.id === p);
    if (!w) {
      console.error("Habit not found in state");
      return;
    }
    if (w.presentCount >= w.count) return;
    const C = g + 1,
      A = { ...w, presentCount: C };
    console.log("Updating habit:", A),
      h({ type: "UPDATE_PRESENT_COUNT", payload: { id: p, presentCount: C } }),
      C >= w.count && (r(!0), setTimeout(() => r(!1), 3e3));
    try {
      await mO(A), console.log("Habit updated successfully");
    } catch (E) {
      console.error("Error updating habit: ", E);
    }
  };
  return N.jsxs(N.Fragment, {
    children: [
      N.jsx("div", {
        className: `confetti-container ${n ? "fade-in" : "fade-out"}`,
        children: N.jsx(SO, { width: i, height: s }),
      }),
      u.length > 0
        ? u.map((p, g) => {
            const w = p.presentCount >= p.count;
            return N.jsxs(
              "div",
              {
                className:
                  "flex w-full items-center justify-around overflow-y-auto border-y-[0.1rem] border-y-second p-2 py-4",
                children: [
                  N.jsx("div", {
                    className: "text-center text-lg",
                    children: N.jsx("h1", { children: g + 1 }),
                  }),
                  N.jsxs("div", {
                    className:
                      "flex w-full flex-col items-center justify-center",
                    children: [
                      N.jsx("h1", {
                        className: `text-lg font-bold ${w ? "italic line-through" : null}`,
                        children: p.name,
                      }),
                      N.jsxs("p", {
                        className: `font-thin ${w ? "text-green-500" : "text-red-500"} `,
                        children: [p.presentCount, " / ", p.count],
                      }),
                    ],
                  }),
                  N.jsx("div", {
                    children: N.jsx("button", {
                      className: `flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue ${w ? "cursor-not-allowed" : "cursor-pointer"}`,
                      onClick: () => f(p.id, p.presentCount),
                      children: N.jsx(EO, { size: 25 }),
                    }),
                  }),
                ],
              },
              p.id,
            );
          })
        : N.jsx("h1", { children: "There aren't planned habits for today." }),
    ],
  });
}
function VO() {
  const t = Gr(),
    n = new URLSearchParams(t.search).get("date") || "";
  function r() {
    switch (s()) {
      case "2":
        return "Tomorrow";
      case "1":
        return "Today";
      case "0":
        return "Yesterday";
      case "-1":
        return "Day before yesterday";
      default:
        return s();
    }
  }
  function i(o) {
    const a = { day: "numeric", month: "long", year: "numeric" };
    return o.toLocaleDateString("en-GB", a);
  }
  function s() {
    const o = new Date(),
      a = n != "" ? new Date(n) : o,
      u = a instanceof Date ? a : o,
      c = o.getTime(),
      f = u.getTime() - c,
      p = 24 * 60 * 60 * 1e3,
      g = Math.ceil(f / p + 1).toString();
    return parseInt(g) >= -1 && parseInt(g) <= 2 ? g : i(u);
  }
  return N.jsxs("div", {
    className: "relative h-screen",
    children: [
      N.jsxs("div", {
        className:
          "flex w-screen items-center justify-between border-b-[0.1rem] border-b-second p-5 pb-8",
        children: [
          N.jsx("h1", { className: "text-2xl", children: r() }),
          N.jsxs("div", {
            className: "flex gap-2",
            children: [N.jsx(vO, {}), N.jsx(_O, {})],
          }),
        ],
      }),
      N.jsx("div", {
        className: "flex items-center flex-col h-[65%] w-full bg-first p-5",
        children: N.jsx(kO, {}),
      }),
      N.jsx(wO, {}),
    ],
  });
}
function DO() {
  return N.jsx(N.Fragment, { children: N.jsx("h1", { children: "Progress" }) });
}
function bO() {
  return N.jsx(N.Fragment, {
    children: N.jsx("h1", { children: "Challanges" }),
  });
}
function NO() {
  return N.jsx(N.Fragment, { children: N.jsx("h1", { children: "Settings" }) });
}
function OO() {
  return N.jsx(gO, {
    children: N.jsx(eA, {
      children: N.jsxs(Li, {
        path: "/",
        element: N.jsx(rV, {}),
        children: [
          N.jsx(Li, { index: !0, element: N.jsx(VO, {}) }),
          N.jsx(Li, { path: "progress", element: N.jsx(DO, {}) }),
          N.jsx(Li, { path: "challanges", element: N.jsx(bO, {}) }),
          N.jsx(Li, { path: "settings", element: N.jsx(NO, {}) }),
        ],
      }),
    }),
  });
}
Fh.createRoot(document.getElementById("root")).render(
  N.jsx(st.StrictMode, { children: N.jsx(uA, { children: N.jsx(OO, {}) }) }),
);
