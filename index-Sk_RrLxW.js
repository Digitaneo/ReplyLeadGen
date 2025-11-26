(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function Bm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Wd = {
    exports: {}
}
  , Ss = {}
  , Hd = {
    exports: {}
}
  , _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Symbol.for("react.element")
  , Um = Symbol.for("react.portal")
  , $m = Symbol.for("react.fragment")
  , Wm = Symbol.for("react.strict_mode")
  , Hm = Symbol.for("react.profiler")
  , Km = Symbol.for("react.provider")
  , Gm = Symbol.for("react.context")
  , Qm = Symbol.for("react.forward_ref")
  , Ym = Symbol.for("react.suspense")
  , Xm = Symbol.for("react.memo")
  , Zm = Symbol.for("react.lazy")
  , vu = Symbol.iterator;
function qm(e) {
    return e === null || typeof e != "object" ? null : (e = vu && e[vu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Kd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Gd = Object.assign
  , Qd = {};
function Gn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qd,
    this.updater = n || Kd
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Yd() {}
Yd.prototype = Gn.prototype;
function Bl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qd,
    this.updater = n || Kd
}
var Ul = Bl.prototype = new Yd;
Ul.constructor = Bl;
Gd(Ul, Gn.prototype);
Ul.isPureReactComponent = !0;
var xu = Array.isArray
  , Xd = Object.prototype.hasOwnProperty
  , $l = {
    current: null
}
  , Zd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qd(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Xd.call(t, r) && !Zd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Xr,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: $l.current
    }
}
function Jm(e, t) {
    return {
        $$typeof: Xr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Wl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xr
}
function e0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var wu = /\/+/g;
function Ws(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? e0("" + e.key) : t.toString(36)
}
function Ai(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xr:
            case Um:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + Ws(o, 0) : r,
        xu(i) ? (n = "",
        e != null && (n = e.replace(wu, "$&/") + "/"),
        Ai(i, t, n, "", function(u) {
            return u
        })) : i != null && (Wl(i) && (i = Jm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(wu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    xu(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + Ws(s, l);
            o += Ai(s, t, n, a, i)
        }
    else if (a = qm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + Ws(s, l++),
            o += Ai(s, t, n, a, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ai(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ai(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function t0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Mi = {
    transition: null
}
  , n0 = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Mi,
    ReactCurrentOwner: $l
};
function Jd() {
    throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
    map: ai,
    forEach: function(e, t, n) {
        ai(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ai(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ai(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Wl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
_.Component = Gn;
_.Fragment = $m;
_.Profiler = Hm;
_.PureComponent = Bl;
_.StrictMode = Wm;
_.Suspense = Ym;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n0;
_.act = Jd;
_.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gd({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = $l.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Xd.call(t, a) && !Zd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Xr,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
_.createContext = function(e) {
    return e = {
        $$typeof: Gm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Km,
        _context: e
    },
    e.Consumer = e
}
;
_.createElement = qd;
_.createFactory = function(e) {
    var t = qd.bind(null, e);
    return t.type = e,
    t
}
;
_.createRef = function() {
    return {
        current: null
    }
}
;
_.forwardRef = function(e) {
    return {
        $$typeof: Qm,
        render: e
    }
}
;
_.isValidElement = Wl;
_.lazy = function(e) {
    return {
        $$typeof: Zm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: t0
    }
}
;
_.memo = function(e, t) {
    return {
        $$typeof: Xm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
_.startTransition = function(e) {
    var t = Mi.transition;
    Mi.transition = {};
    try {
        e()
    } finally {
        Mi.transition = t
    }
}
;
_.unstable_act = Jd;
_.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
_.useContext = function(e) {
    return we.current.useContext(e)
}
;
_.useDebugValue = function() {}
;
_.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
_.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
_.useId = function() {
    return we.current.useId()
}
;
_.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
_.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
_.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
_.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
_.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
_.useRef = function(e) {
    return we.current.useRef(e)
}
;
_.useState = function(e) {
    return we.current.useState(e)
}
;
_.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
_.useTransition = function() {
    return we.current.useTransition()
}
;
_.version = "18.3.1";
Hd.exports = _;
var E = Hd.exports;
const ef = Bm(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r0 = E
  , i0 = Symbol.for("react.element")
  , s0 = Symbol.for("react.fragment")
  , o0 = Object.prototype.hasOwnProperty
  , l0 = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , a0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function tf(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        o0.call(t, r) && !a0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: i0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: l0.current
    }
}
Ss.Fragment = s0;
Ss.jsx = tf;
Ss.jsxs = tf;
Wd.exports = Ss;
var c = Wd.exports
  , Ro = {}
  , nf = {
    exports: {}
}
  , Le = {}
  , rf = {
    exports: {}
}
  , sf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, R) {
        var V = N.length;
        N.push(R);
        e: for (; 0 < V; ) {
            var Z = V - 1 >>> 1
              , se = N[Z];
            if (0 < i(se, R))
                N[Z] = R,
                N[V] = se,
                V = Z;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var R = N[0]
          , V = N.pop();
        if (V !== R) {
            N[0] = V;
            e: for (var Z = 0, se = N.length, oi = se >>> 1; Z < oi; ) {
                var $t = 2 * (Z + 1) - 1
                  , $s = N[$t]
                  , Wt = $t + 1
                  , li = N[Wt];
                if (0 > i($s, V))
                    Wt < se && 0 > i(li, $s) ? (N[Z] = li,
                    N[Wt] = V,
                    Z = Wt) : (N[Z] = $s,
                    N[$t] = V,
                    Z = $t);
                else if (Wt < se && 0 > i(li, V))
                    N[Z] = li,
                    N[Wt] = V,
                    Z = Wt;
                else
                    break e
            }
        }
        return R
    }
    function i(N, R) {
        var V = N.sortIndex - R.sortIndex;
        return V !== 0 ? V : N.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , f = null
      , h = 3
      , y = !1
      , v = !1
      , x = !1
      , k = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(N) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= N)
                r(u),
                R.sortIndex = R.expirationTime,
                t(a, R);
            else
                break;
            R = n(u)
        }
    }
    function w(N) {
        if (x = !1,
        g(N),
        !v)
            if (n(a) !== null)
                v = !0,
                si(S);
            else {
                var R = n(u);
                R !== null && te(w, R.startTime - N)
            }
    }
    function S(N, R) {
        v = !1,
        x && (x = !1,
        m(j),
        j = -1),
        y = !0;
        var V = h;
        try {
            for (g(R),
            f = n(a); f !== null && (!(f.expirationTime > R) || N && !ie()); ) {
                var Z = f.callback;
                if (typeof Z == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var se = Z(f.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof se == "function" ? f.callback = se : f === n(a) && r(a),
                    g(R)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var oi = !0;
            else {
                var $t = n(u);
                $t !== null && te(w, $t.startTime - R),
                oi = !1
            }
            return oi
        } finally {
            f = null,
            h = V,
            y = !1
        }
    }
    var T = !1
      , C = null
      , j = -1
      , b = 5
      , D = -1;
    function ie() {
        return !(e.unstable_now() - D < b)
    }
    function yt() {
        if (C !== null) {
            var N = e.unstable_now();
            D = N;
            var R = !0;
            try {
                R = C(!0, N)
            } finally {
                R ? Ut() : (T = !1,
                C = null)
            }
        } else
            T = !1
    }
    var Ut;
    if (typeof p == "function")
        Ut = function() {
            p(yt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var qn = new MessageChannel
          , yu = qn.port2;
        qn.port1.onmessage = yt,
        Ut = function() {
            yu.postMessage(null)
        }
    } else
        Ut = function() {
            k(yt, 0)
        }
        ;
    function si(N) {
        C = N,
        T || (T = !0,
        Ut())
    }
    function te(N, R) {
        j = k(function() {
            N(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        si(S))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = h
        }
        var V = h;
        h = R;
        try {
            return N()
        } finally {
            h = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, R) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var V = h;
        h = N;
        try {
            return R()
        } finally {
            h = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, R, V) {
        var Z = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? Z + V : Z) : V = Z,
        N) {
        case 1:
            var se = -1;
            break;
        case 2:
            se = 250;
            break;
        case 5:
            se = 1073741823;
            break;
        case 4:
            se = 1e4;
            break;
        default:
            se = 5e3
        }
        return se = V + se,
        N = {
            id: d++,
            callback: R,
            priorityLevel: N,
            startTime: V,
            expirationTime: se,
            sortIndex: -1
        },
        V > Z ? (N.sortIndex = V,
        t(u, N),
        n(a) === null && N === n(u) && (x ? (m(j),
        j = -1) : x = !0,
        te(w, V - Z))) : (N.sortIndex = se,
        t(a, N),
        v || y || (v = !0,
        si(S))),
        N
    }
    ,
    e.unstable_shouldYield = ie,
    e.unstable_wrapCallback = function(N) {
        var R = h;
        return function() {
            var V = h;
            h = R;
            try {
                return N.apply(this, arguments)
            } finally {
                h = V
            }
        }
    }
}
)(sf);
rf.exports = sf;
var u0 = rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c0 = E
  , De = u0;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var of = new Set
  , Er = {};
function cn(e, t) {
    In(e, t),
    In(e + "Capture", t)
}
function In(e, t) {
    for (Er[e] = t,
    e = 0; e < t.length; e++)
        of.add(t[e])
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Lo = Object.prototype.hasOwnProperty
  , d0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Su = {}
  , ku = {};
function f0(e) {
    return Lo.call(ku, e) ? !0 : Lo.call(Su, e) ? !1 : d0.test(e) ? ku[e] = !0 : (Su[e] = !0,
    !1)
}
function h0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function p0(e, t, n, r) {
    if (t === null || typeof t > "u" || h0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Se(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    de[e] = new Se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    de[t] = new Se(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    de[e] = new Se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    de[e] = new Se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    de[e] = new Se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    de[e] = new Se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    de[e] = new Se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    de[e] = new Se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    de[e] = new Se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Hl = /[\-:]([a-z])/g;
function Kl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Hl, Kl);
    de[t] = new Se(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Hl, Kl);
    de[t] = new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Hl, Kl);
    de[t] = new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    de[e] = new Se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
de.xlinkHref = new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    de[e] = new Se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Gl(e, t, n, r) {
    var i = de.hasOwnProperty(t) ? de[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (p0(t, n, i, r) && (n = null),
    r || i === null ? f0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var gt = c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ui = Symbol.for("react.element")
  , pn = Symbol.for("react.portal")
  , mn = Symbol.for("react.fragment")
  , Ql = Symbol.for("react.strict_mode")
  , Vo = Symbol.for("react.profiler")
  , lf = Symbol.for("react.provider")
  , af = Symbol.for("react.context")
  , Yl = Symbol.for("react.forward_ref")
  , bo = Symbol.for("react.suspense")
  , _o = Symbol.for("react.suspense_list")
  , Xl = Symbol.for("react.memo")
  , wt = Symbol.for("react.lazy")
  , uf = Symbol.for("react.offscreen")
  , ju = Symbol.iterator;
function Jn(e) {
    return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, Hs;
function ar(e) {
    if (Hs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Hs = t && t[1] || ""
        }
    return `
` + Hs + e
}
var Ks = !1;
function Gs(e, t) {
    if (!e || Ks)
        return "";
    Ks = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Ks = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ar(e) : ""
}
function m0(e) {
    switch (e.tag) {
    case 5:
        return ar(e.type);
    case 16:
        return ar("Lazy");
    case 13:
        return ar("Suspense");
    case 19:
        return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Gs(e.type, !1),
        e;
    case 11:
        return e = Gs(e.type.render, !1),
        e;
    case 1:
        return e = Gs(e.type, !0),
        e;
    default:
        return ""
    }
}
function Io(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case mn:
        return "Fragment";
    case pn:
        return "Portal";
    case Vo:
        return "Profiler";
    case Ql:
        return "StrictMode";
    case bo:
        return "Suspense";
    case _o:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case af:
            return (e.displayName || "Context") + ".Consumer";
        case lf:
            return (e._context.displayName || "Context") + ".Provider";
        case Yl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Xl:
            return t = e.displayName || null,
            t !== null ? t : Io(e.type) || "Memo";
        case wt:
            t = e._payload,
            e = e._init;
            try {
                return Io(e(t))
            } catch {}
        }
    return null
}
function g0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Io(t);
    case 8:
        return t === Ql ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Vt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function cf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function y0(e) {
    var t = cf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ci(e) {
    e._valueTracker || (e._valueTracker = y0(e))
}
function df(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = cf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fo(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ff(e, t) {
    t = t.checked,
    t != null && Gl(e, "checked", t, !1)
}
function Oo(e, t) {
    ff(e, t);
    var n = Vt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? zo(e, t.type, n) : t.hasOwnProperty("defaultValue") && zo(e, t.type, Vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Tu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function zo(e, t, n) {
    (t !== "number" || Wi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ur = Array.isArray;
function Dn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Bo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Cu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (ur(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Vt(n)
    }
}
function hf(e, t) {
    var n = Vt(t.value)
      , r = Vt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Nu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function pf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Uo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? pf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, mf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (di = di || document.createElement("div"),
        di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ar(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mr = {
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
    strokeWidth: !0
}
  , v0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
    v0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        mr[t] = mr[e]
    })
});
function gf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px"
}
function yf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = gf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var x0 = Q({
    menuitem: !0
}, {
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
    wbr: !0
});
function $o(e, t) {
    if (t) {
        if (x0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Wo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var Ho = null;
function Zl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ko = null
  , Rn = null
  , Ln = null;
function Eu(e) {
    if (e = Jr(e)) {
        if (typeof Ko != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = Cs(t),
        Ko(e.stateNode, e.type, t))
    }
}
function vf(e) {
    Rn ? Ln ? Ln.push(e) : Ln = [e] : Rn = e
}
function xf() {
    if (Rn) {
        var e = Rn
          , t = Ln;
        if (Ln = Rn = null,
        Eu(e),
        t)
            for (e = 0; e < t.length; e++)
                Eu(t[e])
    }
}
function wf(e, t) {
    return e(t)
}
function Sf() {}
var Qs = !1;
function kf(e, t, n) {
    if (Qs)
        return e(t, n);
    Qs = !0;
    try {
        return wf(e, t, n)
    } finally {
        Qs = !1,
        (Rn !== null || Ln !== null) && (Sf(),
        xf())
    }
}
function Mr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Cs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var Go = !1;
if (dt)
    try {
        var er = {};
        Object.defineProperty(er, "passive", {
            get: function() {
                Go = !0
            }
        }),
        window.addEventListener("test", er, er),
        window.removeEventListener("test", er, er)
    } catch {
        Go = !1
    }
function w0(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var gr = !1
  , Hi = null
  , Ki = !1
  , Qo = null
  , S0 = {
    onError: function(e) {
        gr = !0,
        Hi = e
    }
};
function k0(e, t, n, r, i, s, o, l, a) {
    gr = !1,
    Hi = null,
    w0.apply(S0, arguments)
}
function j0(e, t, n, r, i, s, o, l, a) {
    if (k0.apply(this, arguments),
    gr) {
        if (gr) {
            var u = Hi;
            gr = !1,
            Hi = null
        } else
            throw Error(P(198));
        Ki || (Ki = !0,
        Qo = u)
    }
}
function dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function jf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Au(e) {
    if (dn(e) !== e)
        throw Error(P(188))
}
function P0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = dn(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Au(i),
                    e;
                if (s === r)
                    return Au(i),
                    t;
                s = s.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function Pf(e) {
    return e = P0(e),
    e !== null ? Tf(e) : null
}
function Tf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Tf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Cf = De.unstable_scheduleCallback
  , Mu = De.unstable_cancelCallback
  , T0 = De.unstable_shouldYield
  , C0 = De.unstable_requestPaint
  , J = De.unstable_now
  , N0 = De.unstable_getCurrentPriorityLevel
  , ql = De.unstable_ImmediatePriority
  , Nf = De.unstable_UserBlockingPriority
  , Gi = De.unstable_NormalPriority
  , E0 = De.unstable_LowPriority
  , Ef = De.unstable_IdlePriority
  , ks = null
  , et = null;
function A0(e) {
    if (et && typeof et.onCommitFiberRoot == "function")
        try {
            et.onCommitFiberRoot(ks, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : R0
  , M0 = Math.log
  , D0 = Math.LN2;
function R0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (M0(e) / D0 | 0) | 0
}
var fi = 64
  , hi = 4194304;
function cr(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Qi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = cr(l) : (s &= o,
        s !== 0 && (r = cr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = cr(o) : s !== 0 && (r = cr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Qe(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function L0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
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
        return t + 5e3;
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
        return -1
    }
}
function V0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Qe(s)
          , l = 1 << o
          , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = L0(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function Yo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Af() {
    var e = fi;
    return fi <<= 1,
    !(fi & 4194240) && (fi = 64),
    e
}
function Ys(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Qe(t),
    e[t] = n
}
function b0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Qe(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Jl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Qe(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var F = 0;
function Mf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Df, ea, Rf, Lf, Vf, Xo = !1, pi = [], Ct = null, Nt = null, Et = null, Dr = new Map, Rr = new Map, kt = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Du(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ct = null;
        break;
    case "dragenter":
    case "dragleave":
        Nt = null;
        break;
    case "mouseover":
    case "mouseout":
        Et = null;
        break;
    case "pointerover":
    case "pointerout":
        Dr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Rr.delete(t.pointerId)
    }
}
function tr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = Jr(t),
    t !== null && ea(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function I0(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ct = tr(Ct, e, t, n, r, i),
        !0;
    case "dragenter":
        return Nt = tr(Nt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Et = tr(Et, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Dr.set(s, tr(Dr.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Rr.set(s, tr(Rr.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function bf(e) {
    var t = Xt(e.target);
    if (t !== null) {
        var n = dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = jf(n),
                t !== null) {
                    e.blockedOn = t,
                    Vf(e.priority, function() {
                        Rf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Di(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ho = r,
            n.target.dispatchEvent(r),
            Ho = null
        } else
            return t = Jr(n),
            t !== null && ea(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ru(e, t, n) {
    Di(e) && n.delete(t)
}
function F0() {
    Xo = !1,
    Ct !== null && Di(Ct) && (Ct = null),
    Nt !== null && Di(Nt) && (Nt = null),
    Et !== null && Di(Et) && (Et = null),
    Dr.forEach(Ru),
    Rr.forEach(Ru)
}
function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Xo || (Xo = !0,
    De.unstable_scheduleCallback(De.unstable_NormalPriority, F0)))
}
function Lr(e) {
    function t(i) {
        return nr(i, e)
    }
    if (0 < pi.length) {
        nr(pi[0], e);
        for (var n = 1; n < pi.length; n++) {
            var r = pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ct !== null && nr(Ct, e),
    Nt !== null && nr(Nt, e),
    Et !== null && nr(Et, e),
    Dr.forEach(t),
    Rr.forEach(t),
    n = 0; n < kt.length; n++)
        r = kt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kt.length && (n = kt[0],
    n.blockedOn === null); )
        bf(n),
        n.blockedOn === null && kt.shift()
}
var Vn = gt.ReactCurrentBatchConfig
  , Yi = !0;
function O0(e, t, n, r) {
    var i = F
      , s = Vn.transition;
    Vn.transition = null;
    try {
        F = 1,
        ta(e, t, n, r)
    } finally {
        F = i,
        Vn.transition = s
    }
}
function z0(e, t, n, r) {
    var i = F
      , s = Vn.transition;
    Vn.transition = null;
    try {
        F = 4,
        ta(e, t, n, r)
    } finally {
        F = i,
        Vn.transition = s
    }
}
function ta(e, t, n, r) {
    if (Yi) {
        var i = Zo(e, t, n, r);
        if (i === null)
            so(e, t, r, Xi, n),
            Du(e, r);
        else if (I0(i, e, t, n, r))
            r.stopPropagation();
        else if (Du(e, r),
        t & 4 && -1 < _0.indexOf(e)) {
            for (; i !== null; ) {
                var s = Jr(i);
                if (s !== null && Df(s),
                s = Zo(e, t, n, r),
                s === null && so(e, t, r, Xi, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            so(e, t, r, null, n)
    }
}
var Xi = null;
function Zo(e, t, n, r) {
    if (Xi = null,
    e = Zl(r),
    e = Xt(e),
    e !== null)
        if (t = dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = jf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Xi = e,
    null
}
function _f(e) {
    switch (e) {
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
        switch (N0()) {
        case ql:
            return 1;
        case Nf:
            return 4;
        case Gi:
        case E0:
            return 16;
        case Ef:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Pt = null
  , na = null
  , Ri = null;
function If() {
    if (Ri)
        return Ri;
    var e, t = na, n = t.length, r, i = "value"in Pt ? Pt.value : Pt.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Ri = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Li(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function mi() {
    return !0
}
function Lu() {
    return !1
}
function Ve(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? mi : Lu,
        this.isPropagationStopped = Lu,
        this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = mi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = mi)
        },
        persist: function() {},
        isPersistent: mi
    }),
    t
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ra = Ve(Qn), qr = Q({}, Qn, {
    view: 0,
    detail: 0
}), B0 = Ve(qr), Xs, Zs, rr, js = Q({}, qr, {
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
    getModifierState: ia,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (Xs = e.screenX - rr.screenX,
        Zs = e.screenY - rr.screenY) : Zs = Xs = 0,
        rr = e),
        Xs)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Zs
    }
}), Vu = Ve(js), U0 = Q({}, js, {
    dataTransfer: 0
}), $0 = Ve(U0), W0 = Q({}, qr, {
    relatedTarget: 0
}), qs = Ve(W0), H0 = Q({}, Qn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), K0 = Ve(H0), G0 = Q({}, Qn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Q0 = Ve(G0), Y0 = Q({}, Qn, {
    data: 0
}), bu = Ve(Y0), X0 = {
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
    MozPrintableKey: "Unidentified"
}, Z0 = {
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
    224: "Meta"
}, q0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function J0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = q0[e]) ? !!t[e] : !1
}
function ia() {
    return J0
}
var eg = Q({}, qr, {
    key: function(e) {
        if (e.key) {
            var t = X0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Li(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Z0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ia,
    charCode: function(e) {
        return e.type === "keypress" ? Li(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , tg = Ve(eg)
  , ng = Q({}, js, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , _u = Ve(ng)
  , rg = Q({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ia
})
  , ig = Ve(rg)
  , sg = Q({}, Qn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , og = Ve(sg)
  , lg = Q({}, js, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ag = Ve(lg)
  , ug = [9, 13, 27, 32]
  , sa = dt && "CompositionEvent"in window
  , yr = null;
dt && "documentMode"in document && (yr = document.documentMode);
var cg = dt && "TextEvent"in window && !yr
  , Ff = dt && (!sa || yr && 8 < yr && 11 >= yr)
  , Iu = " "
  , Fu = !1;
function Of(e, t) {
    switch (e) {
    case "keyup":
        return ug.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function zf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var gn = !1;
function dg(e, t) {
    switch (e) {
    case "compositionend":
        return zf(t);
    case "keypress":
        return t.which !== 32 ? null : (Fu = !0,
        Iu);
    case "textInput":
        return e = t.data,
        e === Iu && Fu ? null : e;
    default:
        return null
    }
}
function fg(e, t) {
    if (gn)
        return e === "compositionend" || !sa && Of(e, t) ? (e = If(),
        Ri = na = Pt = null,
        gn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ff && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var hg = {
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
    week: !0
};
function Ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hg[e.type] : t === "textarea"
}
function Bf(e, t, n, r) {
    vf(r),
    t = Zi(t, "onChange"),
    0 < t.length && (n = new ra("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vr = null
  , Vr = null;
function pg(e) {
    qf(e, 0)
}
function Ps(e) {
    var t = xn(e);
    if (df(t))
        return e
}
function mg(e, t) {
    if (e === "change")
        return t
}
var Uf = !1;
if (dt) {
    var Js;
    if (dt) {
        var eo = "oninput"in document;
        if (!eo) {
            var zu = document.createElement("div");
            zu.setAttribute("oninput", "return;"),
            eo = typeof zu.oninput == "function"
        }
        Js = eo
    } else
        Js = !1;
    Uf = Js && (!document.documentMode || 9 < document.documentMode)
}
function Bu() {
    vr && (vr.detachEvent("onpropertychange", $f),
    Vr = vr = null)
}
function $f(e) {
    if (e.propertyName === "value" && Ps(Vr)) {
        var t = [];
        Bf(t, Vr, e, Zl(e)),
        kf(pg, t)
    }
}
function gg(e, t, n) {
    e === "focusin" ? (Bu(),
    vr = t,
    Vr = n,
    vr.attachEvent("onpropertychange", $f)) : e === "focusout" && Bu()
}
function yg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ps(Vr)
}
function vg(e, t) {
    if (e === "click")
        return Ps(t)
}
function xg(e, t) {
    if (e === "input" || e === "change")
        return Ps(t)
}
function wg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Xe = typeof Object.is == "function" ? Object.is : wg;
function br(e, t) {
    if (Xe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Lo.call(t, i) || !Xe(e[i], t[i]))
            return !1
    }
    return !0
}
function Uu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function $u(e, t) {
    var n = Uu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Uu(n)
    }
}
function Wf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Hf() {
    for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Wi(e.document)
    }
    return t
}
function oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Sg(e) {
    var t = Hf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wf(n.ownerDocument.documentElement, n)) {
        if (r !== null && oa(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = $u(n, s);
                var o = $u(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var kg = dt && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , qo = null
  , xr = null
  , Jo = !1;
function Wu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Jo || yn == null || yn !== Wi(r) || (r = yn,
    "selectionStart"in r && oa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    xr && br(xr, r) || (xr = r,
    r = Zi(qo, "onSelect"),
    0 < r.length && (t = new ra("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yn)))
}
function gi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var vn = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd")
}
  , to = {}
  , Kf = {};
dt && (Kf = document.createElement("div").style,
"AnimationEvent"in window || (delete vn.animationend.animation,
delete vn.animationiteration.animation,
delete vn.animationstart.animation),
"TransitionEvent"in window || delete vn.transitionend.transition);
function Ts(e) {
    if (to[e])
        return to[e];
    if (!vn[e])
        return e;
    var t = vn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Kf)
            return to[e] = t[n];
    return e
}
var Gf = Ts("animationend")
  , Qf = Ts("animationiteration")
  , Yf = Ts("animationstart")
  , Xf = Ts("transitionend")
  , Zf = new Map
  , Hu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
    Zf.set(e, t),
    cn(t, [e])
}
for (var no = 0; no < Hu.length; no++) {
    var ro = Hu[no]
      , jg = ro.toLowerCase()
      , Pg = ro[0].toUpperCase() + ro.slice(1);
    Ft(jg, "on" + Pg)
}
Ft(Gf, "onAnimationEnd");
Ft(Qf, "onAnimationIteration");
Ft(Yf, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Xf, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Tg = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
function Ku(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    j0(r, t, void 0, e),
    e.currentTarget = null
}
function qf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Ku(i, l, u),
                    s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Ku(i, l, u),
                    s = a
                }
        }
    }
    if (Ki)
        throw e = Qo,
        Ki = !1,
        Qo = null,
        e
}
function B(e, t) {
    var n = t[il];
    n === void 0 && (n = t[il] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Jf(t, e, 2, !1),
    n.add(r))
}
function io(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Jf(n, e, r, t)
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
    if (!e[yi]) {
        e[yi] = !0,
        of.forEach(function(n) {
            n !== "selectionchange" && (Tg.has(n) || io(n, !1, e),
            io(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[yi] || (t[yi] = !0,
        io("selectionchange", !1, t))
    }
}
function Jf(e, t, n, r) {
    switch (_f(t)) {
    case 1:
        var i = O0;
        break;
    case 4:
        i = z0;
        break;
    default:
        i = ta
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function so(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = Xt(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    kf(function() {
        var u = s
          , d = Zl(n)
          , f = [];
        e: {
            var h = Zf.get(e);
            if (h !== void 0) {
                var y = ra
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Li(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = tg;
                    break;
                case "focusin":
                    v = "focus",
                    y = qs;
                    break;
                case "focusout":
                    v = "blur",
                    y = qs;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = qs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Vu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = $0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = ig;
                    break;
                case Gf:
                case Qf:
                case Yf:
                    y = K0;
                    break;
                case Xf:
                    y = og;
                    break;
                case "scroll":
                    y = B0;
                    break;
                case "wheel":
                    y = ag;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Q0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = _u
                }
                var x = (t & 4) !== 0
                  , k = !x && e === "scroll"
                  , m = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var p = u, g; p !== null; ) {
                    g = p;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w,
                    m !== null && (w = Mr(p, m),
                    w != null && x.push(Ir(p, w, g)))),
                    k)
                        break;
                    p = p.return
                }
                0 < x.length && (h = new y(h,v,null,n,d),
                f.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                h && n !== Ho && (v = n.relatedTarget || n.fromElement) && (Xt(v) || v[ft]))
                    break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = u,
                v = v ? Xt(v) : null,
                v !== null && (k = dn(v),
                v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = u),
                y !== v)) {
                    if (x = Vu,
                    w = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = _u,
                    w = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    k = y == null ? h : xn(y),
                    g = v == null ? h : xn(v),
                    h = new x(w,p + "leave",y,n,d),
                    h.target = k,
                    h.relatedTarget = g,
                    w = null,
                    Xt(d) === u && (x = new x(m,p + "enter",v,n,d),
                    x.target = g,
                    x.relatedTarget = k,
                    w = x),
                    k = w,
                    y && v)
                        t: {
                            for (x = y,
                            m = v,
                            p = 0,
                            g = x; g; g = hn(g))
                                p++;
                            for (g = 0,
                            w = m; w; w = hn(w))
                                g++;
                            for (; 0 < p - g; )
                                x = hn(x),
                                p--;
                            for (; 0 < g - p; )
                                m = hn(m),
                                g--;
                            for (; p--; ) {
                                if (x === m || m !== null && x === m.alternate)
                                    break t;
                                x = hn(x),
                                m = hn(m)
                            }
                            x = null
                        }
                    else
                        x = null;
                    y !== null && Gu(f, h, y, x, !1),
                    v !== null && k !== null && Gu(f, k, v, x, !0)
                }
            }
            e: {
                if (h = u ? xn(u) : window,
                y = h.nodeName && h.nodeName.toLowerCase(),
                y === "select" || y === "input" && h.type === "file")
                    var S = mg;
                else if (Ou(h))
                    if (Uf)
                        S = xg;
                    else {
                        S = yg;
                        var T = gg
                    }
                else
                    (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = vg);
                if (S && (S = S(e, u))) {
                    Bf(f, S, n, d);
                    break e
                }
                T && T(e, h, u),
                e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && zo(h, "number", h.value)
            }
            switch (T = u ? xn(u) : window,
            e) {
            case "focusin":
                (Ou(T) || T.contentEditable === "true") && (yn = T,
                qo = u,
                xr = null);
                break;
            case "focusout":
                xr = qo = yn = null;
                break;
            case "mousedown":
                Jo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Jo = !1,
                Wu(f, n, d);
                break;
            case "selectionchange":
                if (kg)
                    break;
            case "keydown":
            case "keyup":
                Wu(f, n, d)
            }
            var C;
            if (sa)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                gn ? Of(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Ff && n.locale !== "ko" && (gn || j !== "onCompositionStart" ? j === "onCompositionEnd" && gn && (C = If()) : (Pt = d,
            na = "value"in Pt ? Pt.value : Pt.textContent,
            gn = !0)),
            T = Zi(u, j),
            0 < T.length && (j = new bu(j,e,null,n,d),
            f.push({
                event: j,
                listeners: T
            }),
            C ? j.data = C : (C = zf(n),
            C !== null && (j.data = C)))),
            (C = cg ? dg(e, n) : fg(e, n)) && (u = Zi(u, "onBeforeInput"),
            0 < u.length && (d = new bu("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = C))
        }
        qf(f, t)
    })
}
function Ir(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Zi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Mr(e, n),
        s != null && r.unshift(Ir(e, s, i)),
        s = Mr(e, t),
        s != null && r.push(Ir(e, s, i))),
        e = e.return
    }
    return r
}
function hn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Gu(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Mr(n, s),
        a != null && o.unshift(Ir(n, a, l))) : i || (a = Mr(n, s),
        a != null && o.push(Ir(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Cg = /\r\n?/g
  , Ng = /\u0000|\uFFFD/g;
function Qu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cg, `
`).replace(Ng, "")
}
function vi(e, t, n) {
    if (t = Qu(t),
    Qu(e) !== t && n)
        throw Error(P(425))
}
function qi() {}
var el = null
  , tl = null;
function nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var rl = typeof setTimeout == "function" ? setTimeout : void 0
  , Eg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yu = typeof Promise == "function" ? Promise : void 0
  , Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(e) {
    return Yu.resolve(null).then(e).catch(Mg)
}
: rl;
function Mg(e) {
    setTimeout(function() {
        throw e
    })
}
function oo(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Lr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Lr(t)
}
function At(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Xu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Yn = Math.random().toString(36).slice(2)
  , Je = "__reactFiber$" + Yn
  , Fr = "__reactProps$" + Yn
  , ft = "__reactContainer$" + Yn
  , il = "__reactEvents$" + Yn
  , Dg = "__reactListeners$" + Yn
  , Rg = "__reactHandles$" + Yn;
function Xt(e) {
    var t = e[Je];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[ft] || n[Je]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Xu(e); e !== null; ) {
                    if (n = e[Je])
                        return n;
                    e = Xu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Jr(e) {
    return e = e[Je] || e[ft],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function xn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function Cs(e) {
    return e[Fr] || null
}
var sl = []
  , wn = -1;
function Ot(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > wn || (e.current = sl[wn],
    sl[wn] = null,
    wn--)
}
function z(e, t) {
    wn++,
    sl[wn] = e.current,
    e.current = t
}
var bt = {}
  , ye = Ot(bt)
  , Pe = Ot(!1)
  , sn = bt;
function Fn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function Ji() {
    U(Pe),
    U(ye)
}
function Zu(e, t, n) {
    if (ye.current !== bt)
        throw Error(P(168));
    z(ye, t),
    z(Pe, n)
}
function eh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(P(108, g0(e) || "Unknown", i));
    return Q({}, n, r)
}
function es(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt,
    sn = ye.current,
    z(ye, e),
    z(Pe, Pe.current),
    !0
}
function qu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = eh(e, t, sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    U(Pe),
    U(ye),
    z(ye, e)) : U(Pe),
    z(Pe, n)
}
var st = null
  , Ns = !1
  , lo = !1;
function th(e) {
    st === null ? st = [e] : st.push(e)
}
function Lg(e) {
    Ns = !0,
    th(e)
}
function zt() {
    if (!lo && st !== null) {
        lo = !0;
        var e = 0
          , t = F;
        try {
            var n = st;
            for (F = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            st = null,
            Ns = !1
        } catch (i) {
            throw st !== null && (st = st.slice(e + 1)),
            Cf(ql, zt),
            i
        } finally {
            F = t,
            lo = !1
        }
    }
    return null
}
var Sn = []
  , kn = 0
  , ts = null
  , ns = 0
  , Ie = []
  , Fe = 0
  , on = null
  , ot = 1
  , lt = "";
function Kt(e, t) {
    Sn[kn++] = ns,
    Sn[kn++] = ts,
    ts = e,
    ns = t
}
function nh(e, t, n) {
    Ie[Fe++] = ot,
    Ie[Fe++] = lt,
    Ie[Fe++] = on,
    on = e;
    var r = ot;
    e = lt;
    var i = 32 - Qe(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Qe(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        ot = 1 << 32 - Qe(t) + i | n << i | r,
        lt = s + e
    } else
        ot = 1 << s | n << i | r,
        lt = e
}
function la(e) {
    e.return !== null && (Kt(e, 1),
    nh(e, 1, 0))
}
function aa(e) {
    for (; e === ts; )
        ts = Sn[--kn],
        Sn[kn] = null,
        ns = Sn[--kn],
        Sn[kn] = null;
    for (; e === on; )
        on = Ie[--Fe],
        Ie[Fe] = null,
        lt = Ie[--Fe],
        Ie[Fe] = null,
        ot = Ie[--Fe],
        Ie[Fe] = null
}
var Ae = null
  , Ee = null
  , W = !1
  , Ge = null;
function rh(e, t) {
    var n = Oe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Ju(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        Ee = At(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        Ee = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = on !== null ? {
            id: ot,
            overflow: lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Oe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ae = e,
        Ee = null,
        !0) : !1;
    default:
        return !1
    }
}
function ol(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ll(e) {
    if (W) {
        var t = Ee;
        if (t) {
            var n = t;
            if (!Ju(e, t)) {
                if (ol(e))
                    throw Error(P(418));
                t = At(n.nextSibling);
                var r = Ae;
                t && Ju(e, t) ? rh(r, n) : (e.flags = e.flags & -4097 | 2,
                W = !1,
                Ae = e)
            }
        } else {
            if (ol(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            W = !1,
            Ae = e
        }
    }
}
function ec(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ae = e
}
function xi(e) {
    if (e !== Ae)
        return !1;
    if (!W)
        return ec(e),
        W = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !nl(e.type, e.memoizedProps)),
    t && (t = Ee)) {
        if (ol(e))
            throw ih(),
            Error(P(418));
        for (; t; )
            rh(e, t),
            t = At(t.nextSibling)
    }
    if (ec(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ee = At(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else
        Ee = Ae ? At(e.stateNode.nextSibling) : null;
    return !0
}
function ih() {
    for (var e = Ee; e; )
        e = At(e.nextSibling)
}
function On() {
    Ee = Ae = null,
    W = !1
}
function ua(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}
var Vg = gt.ReactCurrentBatchConfig;
function ir(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function wi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function tc(e) {
    var t = e._init;
    return t(e._payload)
}
function sh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
            m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = Lt(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < p ? (m.flags |= 2,
        p) : g) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, p, g, w) {
        return p === null || p.tag !== 6 ? (p = mo(g, m.mode, w),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function a(m, p, g, w) {
        var S = g.type;
        return S === mn ? d(m, p, g.props.children, w, g.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && tc(S) === p.type) ? (w = i(p, g.props),
        w.ref = ir(m, p, g),
        w.return = m,
        w) : (w = zi(g.type, g.key, g.props, null, m.mode, w),
        w.ref = ir(m, p, g),
        w.return = m,
        w)
    }
    function u(m, p, g, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = go(g, m.mode, w),
        p.return = m,
        p) : (p = i(p, g.children || []),
        p.return = m,
        p)
    }
    function d(m, p, g, w, S) {
        return p === null || p.tag !== 7 ? (p = tn(g, m.mode, w, S),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = mo("" + p, m.mode, g),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case ui:
                return g = zi(p.type, p.key, p.props, null, m.mode, g),
                g.ref = ir(m, null, p),
                g.return = m,
                g;
            case pn:
                return p = go(p, m.mode, g),
                p.return = m,
                p;
            case wt:
                var w = p._init;
                return f(m, w(p._payload), g)
            }
            if (ur(p) || Jn(p))
                return p = tn(p, m.mode, g, null),
                p.return = m,
                p;
            wi(m, p)
        }
        return null
    }
    function h(m, p, g, w) {
        var S = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return S !== null ? null : l(m, p, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ui:
                return g.key === S ? a(m, p, g, w) : null;
            case pn:
                return g.key === S ? u(m, p, g, w) : null;
            case wt:
                return S = g._init,
                h(m, p, S(g._payload), w)
            }
            if (ur(g) || Jn(g))
                return S !== null ? null : d(m, p, g, w, null);
            wi(m, g)
        }
        return null
    }
    function y(m, p, g, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return m = m.get(g) || null,
            l(p, m, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ui:
                return m = m.get(w.key === null ? g : w.key) || null,
                a(p, m, w, S);
            case pn:
                return m = m.get(w.key === null ? g : w.key) || null,
                u(p, m, w, S);
            case wt:
                var T = w._init;
                return y(m, p, g, T(w._payload), S)
            }
            if (ur(w) || Jn(w))
                return m = m.get(g) || null,
                d(p, m, w, S, null);
            wi(p, w)
        }
        return null
    }
    function v(m, p, g, w) {
        for (var S = null, T = null, C = p, j = p = 0, b = null; C !== null && j < g.length; j++) {
            C.index > j ? (b = C,
            C = null) : b = C.sibling;
            var D = h(m, C, g[j], w);
            if (D === null) {
                C === null && (C = b);
                break
            }
            e && C && D.alternate === null && t(m, C),
            p = s(D, p, j),
            T === null ? S = D : T.sibling = D,
            T = D,
            C = b
        }
        if (j === g.length)
            return n(m, C),
            W && Kt(m, j),
            S;
        if (C === null) {
            for (; j < g.length; j++)
                C = f(m, g[j], w),
                C !== null && (p = s(C, p, j),
                T === null ? S = C : T.sibling = C,
                T = C);
            return W && Kt(m, j),
            S
        }
        for (C = r(m, C); j < g.length; j++)
            b = y(C, m, j, g[j], w),
            b !== null && (e && b.alternate !== null && C.delete(b.key === null ? j : b.key),
            p = s(b, p, j),
            T === null ? S = b : T.sibling = b,
            T = b);
        return e && C.forEach(function(ie) {
            return t(m, ie)
        }),
        W && Kt(m, j),
        S
    }
    function x(m, p, g, w) {
        var S = Jn(g);
        if (typeof S != "function")
            throw Error(P(150));
        if (g = S.call(g),
        g == null)
            throw Error(P(151));
        for (var T = S = null, C = p, j = p = 0, b = null, D = g.next(); C !== null && !D.done; j++,
        D = g.next()) {
            C.index > j ? (b = C,
            C = null) : b = C.sibling;
            var ie = h(m, C, D.value, w);
            if (ie === null) {
                C === null && (C = b);
                break
            }
            e && C && ie.alternate === null && t(m, C),
            p = s(ie, p, j),
            T === null ? S = ie : T.sibling = ie,
            T = ie,
            C = b
        }
        if (D.done)
            return n(m, C),
            W && Kt(m, j),
            S;
        if (C === null) {
            for (; !D.done; j++,
            D = g.next())
                D = f(m, D.value, w),
                D !== null && (p = s(D, p, j),
                T === null ? S = D : T.sibling = D,
                T = D);
            return W && Kt(m, j),
            S
        }
        for (C = r(m, C); !D.done; j++,
        D = g.next())
            D = y(C, m, j, D.value, w),
            D !== null && (e && D.alternate !== null && C.delete(D.key === null ? j : D.key),
            p = s(D, p, j),
            T === null ? S = D : T.sibling = D,
            T = D);
        return e && C.forEach(function(yt) {
            return t(m, yt)
        }),
        W && Kt(m, j),
        S
    }
    function k(m, p, g, w) {
        if (typeof g == "object" && g !== null && g.type === mn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ui:
                e: {
                    for (var S = g.key, T = p; T !== null; ) {
                        if (T.key === S) {
                            if (S = g.type,
                            S === mn) {
                                if (T.tag === 7) {
                                    n(m, T.sibling),
                                    p = i(T, g.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (T.elementType === S || typeof S == "object" && S !== null && S.$$typeof === wt && tc(S) === T.type) {
                                n(m, T.sibling),
                                p = i(T, g.props),
                                p.ref = ir(m, T, g),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, T);
                            break
                        } else
                            t(m, T);
                        T = T.sibling
                    }
                    g.type === mn ? (p = tn(g.props.children, m.mode, w, g.key),
                    p.return = m,
                    m = p) : (w = zi(g.type, g.key, g.props, null, m.mode, w),
                    w.ref = ir(m, p, g),
                    w.return = m,
                    m = w)
                }
                return o(m);
            case pn:
                e: {
                    for (T = g.key; p !== null; ) {
                        if (p.key === T)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling),
                                p = i(p, g.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = go(g, m.mode, w),
                    p.return = m,
                    m = p
                }
                return o(m);
            case wt:
                return T = g._init,
                k(m, p, T(g._payload), w)
            }
            if (ur(g))
                return v(m, p, g, w);
            if (Jn(g))
                return x(m, p, g, w);
            wi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, g),
        p.return = m,
        m = p) : (n(m, p),
        p = mo(g, m.mode, w),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return k
}
var zn = sh(!0)
  , oh = sh(!1)
  , rs = Ot(null)
  , is = null
  , jn = null
  , ca = null;
function da() {
    ca = jn = is = null
}
function fa(e) {
    var t = rs.current;
    U(rs),
    e._currentValue = t
}
function al(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function bn(e, t) {
    is = e,
    ca = jn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (je = !0),
    e.firstContext = null)
}
function Be(e) {
    var t = e._currentValue;
    if (ca !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        jn === null) {
            if (is === null)
                throw Error(P(308));
            jn = e,
            is.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            jn = jn.next = e;
    return t
}
var Zt = null;
function ha(e) {
    Zt === null ? Zt = [e] : Zt.push(e)
}
function lh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ha(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    ht(e, r)
}
function ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var St = !1;
function pa(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ah(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function at(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        ht(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ha(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    ht(e, n)
}
function Vi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Jl(e, n)
    }
}
function nc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ss(e, t, n, r) {
    var i = e.updateQueue;
    St = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== o && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        d = u = a = null,
        l = s;
        do {
            var h = l.lane
              , y = l.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , x = l;
                    switch (h = t,
                    y = n,
                    x.tag) {
                    case 1:
                        if (v = x.payload,
                        typeof v == "function") {
                            f = v.call(y, f, h);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = x.payload,
                        h = typeof v == "function" ? v.call(y, f, h) : v,
                        h == null)
                            break e;
                        f = Q({}, f, h);
                        break e;
                    case 2:
                        St = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [l] : h.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = y,
                a = f) : d = d.next = y,
                o |= h;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                h = l,
                l = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        an |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function rc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var ei = {}
  , tt = Ot(ei)
  , Or = Ot(ei)
  , zr = Ot(ei);
function qt(e) {
    if (e === ei)
        throw Error(P(174));
    return e
}
function ma(e, t) {
    switch (z(zr, t),
    z(Or, e),
    z(tt, ei),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Uo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Uo(t, e)
    }
    U(tt),
    z(tt, t)
}
function Bn() {
    U(tt),
    U(Or),
    U(zr)
}
function uh(e) {
    qt(zr.current);
    var t = qt(tt.current)
      , n = Uo(t, e.type);
    t !== n && (z(Or, e),
    z(tt, n))
}
function ga(e) {
    Or.current === e && (U(tt),
    U(Or))
}
var H = Ot(0);
function os(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ao = [];
function ya() {
    for (var e = 0; e < ao.length; e++)
        ao[e]._workInProgressVersionPrimary = null;
    ao.length = 0
}
var bi = gt.ReactCurrentDispatcher
  , uo = gt.ReactCurrentBatchConfig
  , ln = 0
  , G = null
  , ne = null
  , oe = null
  , ls = !1
  , wr = !1
  , Br = 0
  , bg = 0;
function fe() {
    throw Error(P(321))
}
function va(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xe(e[n], t[n]))
            return !1;
    return !0
}
function xa(e, t, n, r, i, s) {
    if (ln = s,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    bi.current = e === null || e.memoizedState === null ? Og : zg,
    e = n(r, i),
    wr) {
        s = 0;
        do {
            if (wr = !1,
            Br = 0,
            25 <= s)
                throw Error(P(301));
            s += 1,
            oe = ne = null,
            t.updateQueue = null,
            bi.current = Bg,
            e = n(r, i)
        } while (wr)
    }
    if (bi.current = as,
    t = ne !== null && ne.next !== null,
    ln = 0,
    oe = ne = G = null,
    ls = !1,
    t)
        throw Error(P(300));
    return e
}
function wa() {
    var e = Br !== 0;
    return Br = 0,
    e
}
function qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function Ue() {
    if (ne === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ne.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        ne = e;
    else {
        if (e === null)
            throw Error(P(310));
        ne = e,
        e = {
            memoizedState: ne.memoizedState,
            baseState: ne.baseState,
            baseQueue: ne.baseQueue,
            queue: ne.queue,
            next: null
        },
        oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function Ur(e, t) {
    return typeof t == "function" ? t(e) : t
}
function co(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = ne
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var d = u.lane;
            if ((ln & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                o = r) : a = a.next = f,
                G.lanes |= d,
                an |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
        Xe(r, t.memoizedState) || (je = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            G.lanes |= s,
            an |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function fo(e) {
    var t = Ue()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        Xe(s, t.memoizedState) || (je = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function ch() {}
function dh(e, t) {
    var n = G
      , r = Ue()
      , i = t()
      , s = !Xe(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    je = !0),
    r = r.queue,
    Sa(ph.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        $r(9, hh.bind(null, n, r, i, t), void 0, null),
        le === null)
            throw Error(P(349));
        ln & 30 || fh(n, t, i)
    }
    return i
}
function fh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function hh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    mh(t) && gh(e)
}
function ph(e, t, n) {
    return n(function() {
        mh(t) && gh(e)
    })
}
function mh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Xe(e, n)
    } catch {
        return !0
    }
}
function gh(e) {
    var t = ht(e, 1);
    t !== null && Ye(t, e, 1, -1)
}
function ic(e) {
    var t = qe();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Fg.bind(null, G, e),
    [t.memoizedState, e]
}
function $r(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function yh() {
    return Ue().memoizedState
}
function _i(e, t, n, r) {
    var i = qe();
    G.flags |= e,
    i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)
}
function Es(e, t, n, r) {
    var i = Ue();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ne !== null) {
        var o = ne.memoizedState;
        if (s = o.destroy,
        r !== null && va(r, o.deps)) {
            i.memoizedState = $r(t, n, s, r);
            return
        }
    }
    G.flags |= e,
    i.memoizedState = $r(1 | t, n, s, r)
}
function sc(e, t) {
    return _i(8390656, 8, e, t)
}
function Sa(e, t) {
    return Es(2048, 8, e, t)
}
function vh(e, t) {
    return Es(4, 2, e, t)
}
function xh(e, t) {
    return Es(4, 4, e, t)
}
function wh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Sh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Es(4, 4, wh.bind(null, t, e), n)
}
function ka() {}
function kh(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && va(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function jh(e, t) {
    var n = Ue();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && va(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ph(e, t, n) {
    return ln & 21 ? (Xe(n, t) || (n = Af(),
    G.lanes |= n,
    an |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    je = !0),
    e.memoizedState = n)
}
function _g(e, t) {
    var n = F;
    F = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = uo.transition;
    uo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        F = n,
        uo.transition = r
    }
}
function Th() {
    return Ue().memoizedState
}
function Ig(e, t, n) {
    var r = Rt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ch(e))
        Nh(t, n);
    else if (n = lh(e, t, n, r),
    n !== null) {
        var i = xe();
        Ye(n, e, r, i),
        Eh(n, t, r)
    }
}
function Fg(e, t, n) {
    var r = Rt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ch(e))
        Nh(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                Xe(l, o)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ha(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = lh(e, t, i, r),
        n !== null && (i = xe(),
        Ye(n, e, r, i),
        Eh(n, t, r))
    }
}
function Ch(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function Nh(e, t) {
    wr = ls = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Eh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Jl(e, n)
    }
}
var as = {
    readContext: Be,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1
}
  , Og = {
    readContext: Be,
    useCallback: function(e, t) {
        return qe().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Be,
    useEffect: sc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        _i(4194308, 4, wh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return _i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return _i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = qe();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = qe();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ig.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = qe();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ic,
    useDebugValue: ka,
    useDeferredValue: function(e) {
        return qe().memoizedState = e
    },
    useTransition: function() {
        var e = ic(!1)
          , t = e[0];
        return e = _g.bind(null, e[1]),
        qe().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , i = qe();
        if (W) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            le === null)
                throw Error(P(349));
            ln & 30 || fh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        sc(ph.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        $r(9, hh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = qe()
          , t = le.identifierPrefix;
        if (W) {
            var n = lt
              , r = ot;
            n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Br++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = bg++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , zg = {
    readContext: Be,
    useCallback: kh,
    useContext: Be,
    useEffect: Sa,
    useImperativeHandle: Sh,
    useInsertionEffect: vh,
    useLayoutEffect: xh,
    useMemo: jh,
    useReducer: co,
    useRef: yh,
    useState: function() {
        return co(Ur)
    },
    useDebugValue: ka,
    useDeferredValue: function(e) {
        var t = Ue();
        return Ph(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = co(Ur)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: ch,
    useSyncExternalStore: dh,
    useId: Th,
    unstable_isNewReconciler: !1
}
  , Bg = {
    readContext: Be,
    useCallback: kh,
    useContext: Be,
    useEffect: Sa,
    useImperativeHandle: Sh,
    useInsertionEffect: vh,
    useLayoutEffect: xh,
    useMemo: jh,
    useReducer: fo,
    useRef: yh,
    useState: function() {
        return fo(Ur)
    },
    useDebugValue: ka,
    useDeferredValue: function(e) {
        var t = Ue();
        return ne === null ? t.memoizedState = e : Ph(t, ne.memoizedState, e)
    },
    useTransition: function() {
        var e = fo(Ur)[0]
          , t = Ue().memoizedState;
        return [e, t]
    },
    useMutableSource: ch,
    useSyncExternalStore: dh,
    useId: Th,
    unstable_isNewReconciler: !1
};
function He(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ul(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var As = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Rt(e)
          , s = at(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Mt(e, s, i),
        t !== null && (Ye(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Rt(e)
          , s = at(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Mt(e, s, i),
        t !== null && (Ye(t, e, i, r),
        Vi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe()
          , r = Rt(e)
          , i = at(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Mt(e, i, r),
        t !== null && (Ye(t, e, r, n),
        Vi(t, e, r))
    }
};
function oc(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(i, s) : !0
}
function Ah(e, t, n) {
    var r = !1
      , i = bt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Be(s) : (i = Te(t) ? sn : ye.current,
    r = t.contextTypes,
    s = (r = r != null) ? Fn(e, i) : bt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = As,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function lc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && As.enqueueReplaceState(t, t.state, null)
}
function cl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    pa(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Be(s) : (s = Te(t) ? sn : ye.current,
    i.context = Fn(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (ul(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && As.enqueueReplaceState(i, i.state, null),
    ss(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Un(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += m0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ho(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function dl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ug = typeof WeakMap == "function" ? WeakMap : Map;
function Mh(e, t, n) {
    n = at(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        cs || (cs = !0,
        Sl = r),
        dl(e, t)
    }
    ,
    n
}
function Dh(e, t, n) {
    n = at(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            dl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        dl(e, t),
        typeof r != "function" && (Dt === null ? Dt = new Set([this]) : Dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function ac(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ug;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = ny.bind(null, e, t, n),
    t.then(e, e))
}
function uc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function cc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1),
    t.tag = 2,
    Mt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var $g = gt.ReactCurrentOwner
  , je = !1;
function ve(e, t, n, r) {
    t.child = e === null ? oh(t, null, n, r) : zn(t, e.child, n, r)
}
function dc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return bn(t, i),
    r = xa(e, t, n, r, s, i),
    n = wa(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pt(e, t, i)) : (W && n && la(t),
    t.flags |= 1,
    ve(e, t, r, i),
    t.child)
}
function fc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ma(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Rh(e, t, s, r, i)) : (e = zi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : br,
        n(o, r) && e.ref === t.ref)
            return pt(e, t, i)
    }
    return t.flags |= 1,
    e = Lt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Rh(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (br(s, r) && e.ref === t.ref)
            if (je = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (je = !0);
            else
                return t.lanes = e.lanes,
                pt(e, t, i)
    }
    return fl(e, t, n, r, i)
}
function Lh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            z(Tn, Ne),
            Ne |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                z(Tn, Ne),
                Ne |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            z(Tn, Ne),
            Ne |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        z(Tn, Ne),
        Ne |= r;
    return ve(e, t, i, n),
    t.child
}
function Vh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function fl(e, t, n, r, i) {
    var s = Te(n) ? sn : ye.current;
    return s = Fn(t, s),
    bn(t, i),
    n = xa(e, t, n, r, s, i),
    r = wa(),
    e !== null && !je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    pt(e, t, i)) : (W && r && la(t),
    t.flags |= 1,
    ve(e, t, n, i),
    t.child)
}
function hc(e, t, n, r, i) {
    if (Te(n)) {
        var s = !0;
        es(t)
    } else
        s = !1;
    if (bn(t, i),
    t.stateNode === null)
        Ii(e, t),
        Ah(t, n, r),
        cl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Be(u) : (u = Te(n) ? sn : ye.current,
        u = Fn(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && lc(t, o, r, u),
        St = !1;
        var h = t.memoizedState;
        o.state = h,
        ss(t, r, o, i),
        a = t.memoizedState,
        l !== r || h !== a || Pe.current || St ? (typeof d == "function" && (ul(t, n, d, r),
        a = t.memoizedState),
        (l = St || oc(t, n, l, r, h, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        ah(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : He(t.type, l),
        o.props = u,
        f = t.pendingProps,
        h = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Be(a) : (a = Te(n) ? sn : ye.current,
        a = Fn(t, a));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || h !== a) && lc(t, o, r, a),
        St = !1,
        h = t.memoizedState,
        o.state = h,
        ss(t, r, o, i);
        var v = t.memoizedState;
        l !== f || h !== v || Pe.current || St ? (typeof y == "function" && (ul(t, n, y, r),
        v = t.memoizedState),
        (u = St || oc(t, n, u, r, h, v, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return hl(e, t, n, r, s, i)
}
function hl(e, t, n, r, i, s) {
    Vh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && qu(t, n, !1),
        pt(e, t, s);
    r = t.stateNode,
    $g.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = zn(t, e.child, null, s),
    t.child = zn(t, null, l, s)) : ve(e, t, l, s),
    t.memoizedState = r.state,
    i && qu(t, n, !0),
    t.child
}
function bh(e) {
    var t = e.stateNode;
    t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1),
    ma(e, t.containerInfo)
}
function pc(e, t, n, r, i) {
    return On(),
    ua(i),
    t.flags |= 256,
    ve(e, t, n, r),
    t.child
}
var pl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ml(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function _h(e, t, n) {
    var r = t.pendingProps, i = H.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    z(H, i & 1),
    e === null)
        return ll(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Rs(o, r, 0, null),
        e = tn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = ml(n),
        t.memoizedState = pl,
        e) : ja(t, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Wg(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Lt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = Lt(l, s) : (s = tn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? ml(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = pl,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Lt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ja(e, t) {
    return t = Rs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Si(e, t, n, r) {
    return r !== null && ua(r),
    zn(t, e.child, null, n),
    e = ja(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Wg(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ho(Error(P(422))),
        Si(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Rs({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = tn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && zn(t, e.child, null, o),
        t.child.memoizedState = ml(o),
        t.memoizedState = pl,
        s);
    if (!(t.mode & 1))
        return Si(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(P(419)),
        r = ho(s, r, void 0),
        Si(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    je || l) {
        if (r = le,
        r !== null) {
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
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            ht(e, i),
            Ye(r, e, i, -1))
        }
        return Aa(),
        r = ho(Error(P(421))),
        Si(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ry.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Ee = At(i.nextSibling),
    Ae = t,
    W = !0,
    Ge = null,
    e !== null && (Ie[Fe++] = ot,
    Ie[Fe++] = lt,
    Ie[Fe++] = on,
    ot = e.id,
    lt = e.overflow,
    on = t),
    t = ja(t, r.children),
    t.flags |= 4096,
    t)
}
function mc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    al(e.return, t, n)
}
function po(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Ih(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (ve(e, t, r.children, n),
    r = H.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && mc(e, n, t);
                else if (e.tag === 19)
                    mc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (z(H, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && os(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            po(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && os(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            po(t, !0, n, null, s);
            break;
        case "together":
            po(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ii(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    an |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Lt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Lt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Hg(e, t, n) {
    switch (t.tag) {
    case 3:
        bh(t),
        On();
        break;
    case 5:
        uh(t);
        break;
    case 1:
        Te(t.type) && es(t);
        break;
    case 4:
        ma(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        z(rs, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (z(H, H.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? _h(e, t, n) : (z(H, H.current & 1),
            e = pt(e, t, n),
            e !== null ? e.sibling : null);
        z(H, H.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ih(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        z(H, H.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Lh(e, t, n)
    }
    return pt(e, t, n)
}
var Fh, gl, Oh, zh;
Fh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
gl = function() {}
;
Oh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        qt(tt.current);
        var s = null;
        switch (n) {
        case "input":
            i = Fo(e, i),
            r = Fo(e, r),
            s = [];
            break;
        case "select":
            i = Q({}, i, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Bo(e, i),
            r = Bo(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qi)
        }
        $o(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Er.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Er.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
zh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function sr(e, t) {
    if (!W)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Kg(e, t, n) {
    var r = t.pendingProps;
    switch (aa(t),
    t.tag) {
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
        return he(t),
        null;
    case 1:
        return Te(t.type) && Ji(),
        he(t),
        null;
    case 3:
        return r = t.stateNode,
        Bn(),
        U(Pe),
        U(ye),
        ya(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (xi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ge !== null && (Pl(Ge),
        Ge = null))),
        gl(e, t),
        he(t),
        null;
    case 5:
        ga(t);
        var i = qt(zr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Oh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return he(t),
                null
            }
            if (e = qt(tt.current),
            xi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Je] = t,
                r[Fr] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    B("cancel", r),
                    B("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < dr.length; i++)
                        B(dr[i], r);
                    break;
                case "source":
                    B("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", r),
                    B("load", r);
                    break;
                case "details":
                    B("toggle", r);
                    break;
                case "input":
                    Pu(r, s),
                    B("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    B("invalid", r);
                    break;
                case "textarea":
                    Cu(r, s),
                    B("invalid", r)
                }
                $o(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && vi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && vi(r.textContent, l, e),
                        i = ["children", "" + l]) : Er.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r)
                    }
                switch (n) {
                case "input":
                    ci(r),
                    Tu(r, s, !0);
                    break;
                case "textarea":
                    ci(r),
                    Nu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = qi)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = pf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[Je] = t,
                e[Fr] = r,
                Fh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Wo(n, r),
                    n) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < dr.length; i++)
                            B(dr[i], e);
                        i = r;
                        break;
                    case "source":
                        B("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        i = r;
                        break;
                    case "details":
                        B("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Pu(e, r),
                        i = Fo(e, r),
                        B("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Q({}, r, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        Cu(e, r),
                        i = Bo(e, r),
                        B("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    $o(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? yf(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && mf(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ar(e, a) : typeof a == "number" && Ar(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Er.hasOwnProperty(s) ? a != null && s === "onScroll" && B("scroll", e) : a != null && Gl(e, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        ci(e),
                        Tu(e, r, !1);
                        break;
                    case "textarea":
                        ci(e),
                        Nu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Vt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Dn(e, !!r.multiple, s, !1) : r.defaultValue != null && Dn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = qi)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return he(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            zh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = qt(zr.current),
            qt(tt.current),
            xi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Je] = t,
                (s = r.nodeValue !== n) && (e = Ae,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        vi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && vi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Je] = t,
                t.stateNode = r
        }
        return he(t),
        null;
    case 13:
        if (U(H),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (W && Ee !== null && t.mode & 1 && !(t.flags & 128))
                ih(),
                On(),
                t.flags |= 98560,
                s = !1;
            else if (s = xi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(P(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(P(317));
                    s[Je] = t
                } else
                    On(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                he(t),
                s = !1
            } else
                Ge !== null && (Pl(Ge),
                Ge = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || H.current & 1 ? re === 0 && (re = 3) : Aa())),
        t.updateQueue !== null && (t.flags |= 4),
        he(t),
        null);
    case 4:
        return Bn(),
        gl(e, t),
        e === null && _r(t.stateNode.containerInfo),
        he(t),
        null;
    case 10:
        return fa(t.type._context),
        he(t),
        null;
    case 17:
        return Te(t.type) && Ji(),
        he(t),
        null;
    case 19:
        if (U(H),
        s = t.memoizedState,
        s === null)
            return he(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                sr(s, !1);
            else {
                if (re !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = os(e),
                        o !== null) {
                            for (t.flags |= 128,
                            sr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return z(H, H.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && J() > $n && (t.flags |= 128,
                r = !0,
                sr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = os(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    sr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !W)
                        return he(t),
                        null
                } else
                    2 * J() - s.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    sr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = J(),
        t.sibling = null,
        n = H.current,
        z(H, r ? n & 1 | 2 : n & 1),
        t) : (he(t),
        null);
    case 22:
    case 23:
        return Ea(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ne & 1073741824 && (he(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function Gg(e, t) {
    switch (aa(t),
    t.tag) {
    case 1:
        return Te(t.type) && Ji(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Bn(),
        U(Pe),
        U(ye),
        ya(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ga(t),
        null;
    case 13:
        if (U(H),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            On()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return U(H),
        null;
    case 4:
        return Bn(),
        null;
    case 10:
        return fa(t.type._context),
        null;
    case 22:
    case 23:
        return Ea(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ki = !1
  , me = !1
  , Qg = typeof WeakSet == "function" ? WeakSet : Set
  , A = null;
function Pn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function yl(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var gc = !1;
function Yg(e, t) {
    if (el = Yi,
    e = Hf(),
    oa(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , h = null;
                    t: for (; ; ) {
                        for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            h = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (h === n && ++u === i && (l = o),
                            h === s && ++d === r && (a = o),
                            (y = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (tl = {
        focusedElem: e,
        selectionRange: n
    },
    Yi = !1,
    A = t; A !== null; )
        if (t = A,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            A = e;
        else
            for (; A !== null; ) {
                t = A;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps
                                  , k = v.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : He(t.type, x), k);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (w) {
                    X(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    A = e;
                    break
                }
                A = t.return
            }
    return v = gc,
    gc = !1,
    v
}
function Sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && yl(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ms(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function vl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Bh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Bh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Je],
    delete t[Fr],
    delete t[il],
    delete t[Dg],
    delete t[Rg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Uh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function yc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Uh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function xl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = qi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xl(e, t, n),
        e = e.sibling; e !== null; )
            xl(e, t, n),
            e = e.sibling
}
function wl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wl(e, t, n),
        e = e.sibling; e !== null; )
            wl(e, t, n),
            e = e.sibling
}
var ae = null
  , Ke = !1;
function vt(e, t, n) {
    for (n = n.child; n !== null; )
        $h(e, t, n),
        n = n.sibling
}
function $h(e, t, n) {
    if (et && typeof et.onCommitFiberUnmount == "function")
        try {
            et.onCommitFiberUnmount(ks, n)
        } catch {}
    switch (n.tag) {
    case 5:
        me || Pn(n, t);
    case 6:
        var r = ae
          , i = Ke;
        ae = null,
        vt(e, t, n),
        ae = r,
        Ke = i,
        ae !== null && (Ke ? (e = ae,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
        break;
    case 18:
        ae !== null && (Ke ? (e = ae,
        n = n.stateNode,
        e.nodeType === 8 ? oo(e.parentNode, n) : e.nodeType === 1 && oo(e, n),
        Lr(e)) : oo(ae, n.stateNode));
        break;
    case 4:
        r = ae,
        i = Ke,
        ae = n.stateNode.containerInfo,
        Ke = !0,
        vt(e, t, n),
        ae = r,
        Ke = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!me && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && yl(n, t, o),
                i = i.next
            } while (i !== r)
        }
        vt(e, t, n);
        break;
    case 1:
        if (!me && (Pn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                X(n, t, l)
            }
        vt(e, t, n);
        break;
    case 21:
        vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (me = (r = me) || n.memoizedState !== null,
        vt(e, t, n),
        me = r) : vt(e, t, n);
        break;
    default:
        vt(e, t, n)
    }
}
function vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Qg),
        t.forEach(function(r) {
            var i = iy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function $e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ae = l.stateNode,
                        Ke = !1;
                        break e;
                    case 3:
                        ae = l.stateNode.containerInfo,
                        Ke = !0;
                        break e;
                    case 4:
                        ae = l.stateNode.containerInfo,
                        Ke = !0;
                        break e
                    }
                    l = l.return
                }
                if (ae === null)
                    throw Error(P(160));
                $h(s, o, i),
                ae = null,
                Ke = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                X(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Wh(t, e),
            t = t.sibling
}
function Wh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($e(t, e),
        Ze(e),
        r & 4) {
            try {
                Sr(3, e, e.return),
                Ms(3, e)
            } catch (x) {
                X(e, e.return, x)
            }
            try {
                Sr(5, e, e.return)
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 1:
        $e(t, e),
        Ze(e),
        r & 512 && n !== null && Pn(n, n.return);
        break;
    case 5:
        if ($e(t, e),
        Ze(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ar(i, "")
            } catch (x) {
                X(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && ff(i, s),
                    Wo(l, o);
                    var u = Wo(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var d = a[o]
                          , f = a[o + 1];
                        d === "style" ? yf(i, f) : d === "dangerouslySetInnerHTML" ? mf(i, f) : d === "children" ? Ar(i, f) : Gl(i, d, f, u)
                    }
                    switch (l) {
                    case "input":
                        Oo(i, s);
                        break;
                    case "textarea":
                        hf(i, s);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var y = s.value;
                        y != null ? Dn(i, !!s.multiple, y, !1) : h !== !!s.multiple && (s.defaultValue != null ? Dn(i, !!s.multiple, s.defaultValue, !0) : Dn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Fr] = s
                } catch (x) {
                    X(e, e.return, x)
                }
        }
        break;
    case 6:
        if ($e(t, e),
        Ze(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 3:
        if ($e(t, e),
        Ze(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Lr(t.containerInfo)
            } catch (x) {
                X(e, e.return, x)
            }
        break;
    case 4:
        $e(t, e),
        Ze(e);
        break;
    case 13:
        $e(t, e),
        Ze(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Ca = J())),
        r & 4 && vc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (me = (u = me) || d,
        $e(t, e),
        me = u) : $e(t, e),
        Ze(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (A = e,
                d = e.child; d !== null; ) {
                    for (f = A = d; A !== null; ) {
                        switch (h = A,
                        y = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Sr(4, h, h.return);
                            break;
                        case 1:
                            Pn(h, h.return);
                            var v = h.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (x) {
                                    X(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            Pn(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                wc(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = h,
                        A = y) : wc(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = gf("display", o))
                        } catch (x) {
                            X(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            X(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        $e(t, e),
        Ze(e),
        r & 4 && vc(e);
        break;
    case 21:
        break;
    default:
        $e(t, e),
        Ze(e)
    }
}
function Ze(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Uh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ar(i, ""),
                r.flags &= -33);
                var s = yc(e);
                wl(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = yc(e);
                xl(e, l, o);
                break;
            default:
                throw Error(P(161))
            }
        } catch (a) {
            X(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Xg(e, t, n) {
    A = e,
    Hh(e)
}
function Hh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
        var i = A
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || ki;
            if (!o) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || me;
                l = ki;
                var u = me;
                if (ki = o,
                (me = a) && !u)
                    for (A = i; A !== null; )
                        o = A,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Sc(i) : a !== null ? (a.return = o,
                        A = a) : Sc(i);
                for (; s !== null; )
                    A = s,
                    Hh(s),
                    s = s.sibling;
                A = i,
                ki = l,
                me = u
            }
            xc(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            A = s) : xc(e)
    }
}
function xc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || Ms(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && rc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            rc(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
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
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Lr(f)
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
                        throw Error(P(163))
                    }
                me || t.flags & 512 && vl(t)
            } catch (h) {
                X(t, t.return, h)
            }
        }
        if (t === e) {
            A = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function wc(e) {
    for (; A !== null; ) {
        var t = A;
        if (t === e) {
            A = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            A = n;
            break
        }
        A = t.return
    }
}
function Sc(e) {
    for (; A !== null; ) {
        var t = A;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ms(4, t)
                } catch (a) {
                    X(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        X(t, i, a)
                    }
                }
                var s = t.return;
                try {
                    vl(t)
                } catch (a) {
                    X(t, s, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    vl(t)
                } catch (a) {
                    X(t, o, a)
                }
            }
        } catch (a) {
            X(t, t.return, a)
        }
        if (t === e) {
            A = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            A = l;
            break
        }
        A = t.return
    }
}
var Zg = Math.ceil
  , us = gt.ReactCurrentDispatcher
  , Pa = gt.ReactCurrentOwner
  , ze = gt.ReactCurrentBatchConfig
  , I = 0
  , le = null
  , ee = null
  , ce = 0
  , Ne = 0
  , Tn = Ot(0)
  , re = 0
  , Wr = null
  , an = 0
  , Ds = 0
  , Ta = 0
  , kr = null
  , ke = null
  , Ca = 0
  , $n = 1 / 0
  , it = null
  , cs = !1
  , Sl = null
  , Dt = null
  , ji = !1
  , Tt = null
  , ds = 0
  , jr = 0
  , kl = null
  , Fi = -1
  , Oi = 0;
function xe() {
    return I & 6 ? J() : Fi !== -1 ? Fi : Fi = J()
}
function Rt(e) {
    return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : Vg.transition !== null ? (Oi === 0 && (Oi = Af()),
    Oi) : (e = F,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : _f(e.type)),
    e) : 1
}
function Ye(e, t, n, r) {
    if (50 < jr)
        throw jr = 0,
        kl = null,
        Error(P(185));
    Zr(e, n, r),
    (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (Ds |= n),
    re === 4 && jt(e, ce)),
    Ce(e, r),
    n === 1 && I === 0 && !(t.mode & 1) && ($n = J() + 500,
    Ns && zt()))
}
function Ce(e, t) {
    var n = e.callbackNode;
    V0(e, t);
    var r = Qi(e, e === le ? ce : 0);
    if (r === 0)
        n !== null && Mu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Mu(n),
        t === 1)
            e.tag === 0 ? Lg(kc.bind(null, e)) : th(kc.bind(null, e)),
            Ag(function() {
                !(I & 6) && zt()
            }),
            n = null;
        else {
            switch (Mf(r)) {
            case 1:
                n = ql;
                break;
            case 4:
                n = Nf;
                break;
            case 16:
                n = Gi;
                break;
            case 536870912:
                n = Ef;
                break;
            default:
                n = Gi
            }
            n = Jh(n, Kh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Kh(e, t) {
    if (Fi = -1,
    Oi = 0,
    I & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (_n() && e.callbackNode !== n)
        return null;
    var r = Qi(e, e === le ? ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = fs(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var s = Qh();
        (le !== e || ce !== t) && (it = null,
        $n = J() + 500,
        en(e, t));
        do
            try {
                ey();
                break
            } catch (l) {
                Gh(e, l)
            }
        while (!0);
        da(),
        us.current = s,
        I = i,
        ee !== null ? t = 0 : (le = null,
        ce = 0,
        t = re)
    }
    if (t !== 0) {
        if (t === 2 && (i = Yo(e),
        i !== 0 && (r = i,
        t = jl(e, i))),
        t === 1)
            throw n = Wr,
            en(e, 0),
            jt(e, r),
            Ce(e, J()),
            n;
        if (t === 6)
            jt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !qg(i) && (t = fs(e, r),
            t === 2 && (s = Yo(e),
            s !== 0 && (r = s,
            t = jl(e, s))),
            t === 1))
                throw n = Wr,
                en(e, 0),
                jt(e, r),
                Ce(e, J()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                Gt(e, ke, it);
                break;
            case 3:
                if (jt(e, r),
                (r & 130023424) === r && (t = Ca + 500 - J(),
                10 < t)) {
                    if (Qi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        xe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = rl(Gt.bind(null, e, ke, it), t);
                    break
                }
                Gt(e, ke, it);
                break;
            case 4:
                if (jt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Qe(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = J() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zg(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = rl(Gt.bind(null, e, ke, it), r);
                    break
                }
                Gt(e, ke, it);
                break;
            case 5:
                Gt(e, ke, it);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Ce(e, J()),
    e.callbackNode === n ? Kh.bind(null, e) : null
}
function jl(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    e = fs(e, t),
    e !== 2 && (t = ke,
    ke = n,
    t !== null && Pl(t)),
    e
}
function Pl(e) {
    ke === null ? ke = e : ke.push.apply(ke, e)
}
function qg(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Xe(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function jt(e, t) {
    for (t &= ~Ta,
    t &= ~Ds,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Qe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function kc(e) {
    if (I & 6)
        throw Error(P(327));
    _n();
    var t = Qi(e, 0);
    if (!(t & 1))
        return Ce(e, J()),
        null;
    var n = fs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yo(e);
        r !== 0 && (t = r,
        n = jl(e, r))
    }
    if (n === 1)
        throw n = Wr,
        en(e, 0),
        jt(e, t),
        Ce(e, J()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gt(e, ke, it),
    Ce(e, J()),
    null
}
function Na(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n,
        I === 0 && ($n = J() + 500,
        Ns && zt())
    }
}
function un(e) {
    Tt !== null && Tt.tag === 0 && !(I & 6) && _n();
    var t = I;
    I |= 1;
    var n = ze.transition
      , r = F;
    try {
        if (ze.transition = null,
        F = 1,
        e)
            return e()
    } finally {
        F = r,
        ze.transition = n,
        I = t,
        !(I & 6) && zt()
    }
}
function Ea() {
    Ne = Tn.current,
    U(Tn)
}
function en(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Eg(n)),
    ee !== null)
        for (n = ee.return; n !== null; ) {
            var r = n;
            switch (aa(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ji();
                break;
            case 3:
                Bn(),
                U(Pe),
                U(ye),
                ya();
                break;
            case 5:
                ga(r);
                break;
            case 4:
                Bn();
                break;
            case 13:
                U(H);
                break;
            case 19:
                U(H);
                break;
            case 10:
                fa(r.type._context);
                break;
            case 22:
            case 23:
                Ea()
            }
            n = n.return
        }
    if (le = e,
    ee = e = Lt(e.current, null),
    ce = Ne = t,
    re = 0,
    Wr = null,
    Ta = Ds = an = 0,
    ke = kr = null,
    Zt !== null) {
        for (t = 0; t < Zt.length; t++)
            if (n = Zt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Zt = null
    }
    return e
}
function Gh(e, t) {
    do {
        var n = ee;
        try {
            if (da(),
            bi.current = as,
            ls) {
                for (var r = G.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ls = !1
            }
            if (ln = 0,
            oe = ne = G = null,
            wr = !1,
            Br = 0,
            Pa.current = null,
            n === null || n.return === null) {
                re = 1,
                Wr = t,
                ee = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , l = n
                  , a = t;
                if (t = ce,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var y = uc(o);
                    if (y !== null) {
                        y.flags &= -257,
                        cc(y, o, l, s, t),
                        y.mode & 1 && ac(s, u, t),
                        t = y,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ac(s, u, t),
                            Aa();
                            break e
                        }
                        a = Error(P(426))
                    }
                } else if (W && l.mode & 1) {
                    var k = uc(o);
                    if (k !== null) {
                        !(k.flags & 65536) && (k.flags |= 256),
                        cc(k, o, l, s, t),
                        ua(Un(a, l));
                        break e
                    }
                }
                s = a = Un(a, l),
                re !== 4 && (re = 2),
                kr === null ? kr = [s] : kr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = Mh(s, a, t);
                        nc(s, m);
                        break e;
                    case 1:
                        l = a;
                        var p = s.type
                          , g = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Dt === null || !Dt.has(g)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var w = Dh(s, l, t);
                            nc(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Xh(n)
        } catch (S) {
            t = S,
            ee === n && n !== null && (ee = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Qh() {
    var e = us.current;
    return us.current = as,
    e === null ? as : e
}
function Aa() {
    (re === 0 || re === 3 || re === 2) && (re = 4),
    le === null || !(an & 268435455) && !(Ds & 268435455) || jt(le, ce)
}
function fs(e, t) {
    var n = I;
    I |= 2;
    var r = Qh();
    (le !== e || ce !== t) && (it = null,
    en(e, t));
    do
        try {
            Jg();
            break
        } catch (i) {
            Gh(e, i)
        }
    while (!0);
    if (da(),
    I = n,
    us.current = r,
    ee !== null)
        throw Error(P(261));
    return le = null,
    ce = 0,
    re
}
function Jg() {
    for (; ee !== null; )
        Yh(ee)
}
function ey() {
    for (; ee !== null && !T0(); )
        Yh(ee)
}
function Yh(e) {
    var t = qh(e.alternate, e, Ne);
    e.memoizedProps = e.pendingProps,
    t === null ? Xh(e) : ee = t,
    Pa.current = null
}
function Xh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Gg(n, t),
            n !== null) {
                n.flags &= 32767,
                ee = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                re = 6,
                ee = null;
                return
            }
        } else if (n = Kg(n, t, Ne),
        n !== null) {
            ee = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ee = t;
            return
        }
        ee = t = e
    } while (t !== null);
    re === 0 && (re = 5)
}
function Gt(e, t, n) {
    var r = F
      , i = ze.transition;
    try {
        ze.transition = null,
        F = 1,
        ty(e, t, n, r)
    } finally {
        ze.transition = i,
        F = r
    }
    return null
}
function ty(e, t, n, r) {
    do
        _n();
    while (Tt !== null);
    if (I & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (b0(e, s),
    e === le && (ee = le = null,
    ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ji || (ji = !0,
    Jh(Gi, function() {
        return _n(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = ze.transition,
        ze.transition = null;
        var o = F;
        F = 1;
        var l = I;
        I |= 4,
        Pa.current = null,
        Yg(e, n),
        Wh(n, e),
        Sg(tl),
        Yi = !!el,
        tl = el = null,
        e.current = n,
        Xg(n),
        C0(),
        I = l,
        F = o,
        ze.transition = s
    } else
        e.current = n;
    if (ji && (ji = !1,
    Tt = e,
    ds = i),
    s = e.pendingLanes,
    s === 0 && (Dt = null),
    A0(n.stateNode),
    Ce(e, J()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (cs)
        throw cs = !1,
        e = Sl,
        Sl = null,
        e;
    return ds & 1 && e.tag !== 0 && _n(),
    s = e.pendingLanes,
    s & 1 ? e === kl ? jr++ : (jr = 0,
    kl = e) : jr = 0,
    zt(),
    null
}
function _n() {
    if (Tt !== null) {
        var e = Mf(ds)
          , t = ze.transition
          , n = F;
        try {
            if (ze.transition = null,
            F = 16 > e ? 16 : e,
            Tt === null)
                var r = !1;
            else {
                if (e = Tt,
                Tt = null,
                ds = 0,
                I & 6)
                    throw Error(P(331));
                var i = I;
                for (I |= 4,
                A = e.current; A !== null; ) {
                    var s = A
                      , o = s.child;
                    if (A.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (A = u; A !== null; ) {
                                    var d = A;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Sr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        A = f;
                                    else
                                        for (; A !== null; ) {
                                            d = A;
                                            var h = d.sibling
                                              , y = d.return;
                                            if (Bh(d),
                                            d === u) {
                                                A = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y,
                                                A = h;
                                                break
                                            }
                                            A = y
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var k = x.sibling;
                                        x.sibling = null,
                                        x = k
                                    } while (x !== null)
                                }
                            }
                            A = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        A = o;
                    else
                        e: for (; A !== null; ) {
                            if (s = A,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Sr(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                A = m;
                                break e
                            }
                            A = s.return
                        }
                }
                var p = e.current;
                for (A = p; A !== null; ) {
                    o = A;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        A = g;
                    else
                        e: for (o = p; A !== null; ) {
                            if (l = A,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ms(9, l)
                                    }
                                } catch (S) {
                                    X(l, l.return, S)
                                }
                            if (l === o) {
                                A = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                A = w;
                                break e
                            }
                            A = l.return
                        }
                }
                if (I = i,
                zt(),
                et && typeof et.onPostCommitFiberRoot == "function")
                    try {
                        et.onPostCommitFiberRoot(ks, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            F = n,
            ze.transition = t
        }
    }
    return !1
}
function jc(e, t, n) {
    t = Un(n, t),
    t = Mh(e, t, 1),
    e = Mt(e, t, 1),
    t = xe(),
    e !== null && (Zr(e, 1, t),
    Ce(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        jc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                jc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dt === null || !Dt.has(r))) {
                    e = Un(n, e),
                    e = Dh(t, e, 1),
                    t = Mt(t, e, 1),
                    e = xe(),
                    t !== null && (Zr(t, 1, e),
                    Ce(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ny(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    le === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > J() - Ca ? en(e, 0) : Ta |= n),
    Ce(e, t)
}
function Zh(e, t) {
    t === 0 && (e.mode & 1 ? (t = hi,
    hi <<= 1,
    !(hi & 130023424) && (hi = 4194304)) : t = 1);
    var n = xe();
    e = ht(e, t),
    e !== null && (Zr(e, t, n),
    Ce(e, n))
}
function ry(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Zh(e, n)
}
function iy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Zh(e, n)
}
var qh;
qh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Pe.current)
            je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return je = !1,
                Hg(e, t, n);
            je = !!(e.flags & 131072)
        }
    else
        je = !1,
        W && t.flags & 1048576 && nh(t, ns, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ii(e, t),
        e = t.pendingProps;
        var i = Fn(t, ye.current);
        bn(t, n),
        i = xa(null, t, r, e, i, n);
        var s = wa();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (s = !0,
        es(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        pa(t),
        i.updater = As,
        t.stateNode = i,
        i._reactInternals = t,
        cl(t, r, e, n),
        t = hl(null, t, r, !0, s, n)) : (t.tag = 0,
        W && s && la(t),
        ve(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ii(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = oy(r),
            e = He(r, e),
            i) {
            case 0:
                t = fl(null, t, r, e, n);
                break e;
            case 1:
                t = hc(null, t, r, e, n);
                break e;
            case 11:
                t = dc(null, t, r, e, n);
                break e;
            case 14:
                t = fc(null, t, r, He(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : He(r, i),
        fl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : He(r, i),
        hc(e, t, r, i, n);
    case 3:
        e: {
            if (bh(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            ah(e, t),
            ss(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = Un(Error(P(423)), t),
                    t = pc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Un(Error(P(424)), t),
                    t = pc(e, t, r, n, i);
                    break e
                } else
                    for (Ee = At(t.stateNode.containerInfo.firstChild),
                    Ae = t,
                    W = !0,
                    Ge = null,
                    n = oh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (On(),
                r === i) {
                    t = pt(e, t, n);
                    break e
                }
                ve(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return uh(t),
        e === null && ll(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        nl(r, i) ? o = null : s !== null && nl(r, s) && (t.flags |= 32),
        Vh(e, t),
        ve(e, t, o, n),
        t.child;
    case 6:
        return e === null && ll(t),
        null;
    case 13:
        return _h(e, t, n);
    case 4:
        return ma(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = zn(t, null, r, n) : ve(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : He(r, i),
        dc(e, t, r, i, n);
    case 7:
        return ve(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ve(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            z(rs, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Xe(s.value, o)) {
                    if (s.children === i.children && !Pe.current) {
                        t = pt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = at(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    al(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(P(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            al(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            ve(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        bn(t, n),
        i = Be(i),
        r = r(i),
        t.flags |= 1,
        ve(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = He(r, t.pendingProps),
        i = He(r.type, i),
        fc(e, t, r, i, n);
    case 15:
        return Rh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : He(r, i),
        Ii(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        es(t)) : e = !1,
        bn(t, n),
        Ah(t, r, i),
        cl(t, r, i, n),
        hl(null, t, r, !0, e, n);
    case 19:
        return Ih(e, t, n);
    case 22:
        return Lh(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function Jh(e, t) {
    return Cf(e, t)
}
function sy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Oe(e, t, n, r) {
    return new sy(e,t,n,r)
}
function Ma(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function oy(e) {
    if (typeof e == "function")
        return Ma(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yl)
            return 11;
        if (e === Xl)
            return 14
    }
    return 2
}
function Lt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Oe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function zi(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Ma(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case mn:
            return tn(n.children, i, s, t);
        case Ql:
            o = 8,
            i |= 8;
            break;
        case Vo:
            return e = Oe(12, n, t, i | 2),
            e.elementType = Vo,
            e.lanes = s,
            e;
        case bo:
            return e = Oe(13, n, t, i),
            e.elementType = bo,
            e.lanes = s,
            e;
        case _o:
            return e = Oe(19, n, t, i),
            e.elementType = _o,
            e.lanes = s,
            e;
        case uf:
            return Rs(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case lf:
                    o = 10;
                    break e;
                case af:
                    o = 9;
                    break e;
                case Yl:
                    o = 11;
                    break e;
                case Xl:
                    o = 14;
                    break e;
                case wt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = Oe(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function tn(e, t, n, r) {
    return e = Oe(7, e, r, t),
    e.lanes = n,
    e
}
function Rs(e, t, n, r) {
    return e = Oe(22, e, r, t),
    e.elementType = uf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function mo(e, t, n) {
    return e = Oe(6, e, null, t),
    e.lanes = n,
    e
}
function go(e, t, n) {
    return t = Oe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ly(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ys(0),
    this.expirationTimes = Ys(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ys(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Da(e, t, n, r, i, s, o, l, a) {
    return e = new ly(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Oe(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    pa(s),
    e
}
function ay(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: pn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function ep(e) {
    if (!e)
        return bt;
    e = e._reactInternals;
    e: {
        if (dn(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return eh(e, n, t)
    }
    return t
}
function tp(e, t, n, r, i, s, o, l, a) {
    return e = Da(n, r, !0, e, i, s, o, l, a),
    e.context = ep(null),
    n = e.current,
    r = xe(),
    i = Rt(n),
    s = at(r, i),
    s.callback = t ?? null,
    Mt(n, s, i),
    e.current.lanes = i,
    Zr(e, i, r),
    Ce(e, r),
    e
}
function Ls(e, t, n, r) {
    var i = t.current
      , s = xe()
      , o = Rt(i);
    return n = ep(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = at(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Mt(i, t, o),
    e !== null && (Ye(e, i, o, s),
    Vi(e, i, o)),
    o
}
function hs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Pc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ra(e, t) {
    Pc(e, t),
    (e = e.alternate) && Pc(e, t)
}
function uy() {
    return null
}
var np = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function La(e) {
    this._internalRoot = e
}
Vs.prototype.render = La.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    Ls(e, t, null, null)
}
;
Vs.prototype.unmount = La.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        un(function() {
            Ls(null, e, null, null)
        }),
        t[ft] = null
    }
}
;
function Vs(e) {
    this._internalRoot = e
}
Vs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Lf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
            ;
        kt.splice(n, 0, e),
        n === 0 && bf(e)
    }
}
;
function Va(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function bs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Tc() {}
function cy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = hs(o);
                s.call(u)
            }
        }
        var o = tp(t, r, e, 0, null, !1, !1, "", Tc);
        return e._reactRootContainer = o,
        e[ft] = o.current,
        _r(e.nodeType === 8 ? e.parentNode : e),
        un(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = hs(a);
            l.call(u)
        }
    }
    var a = Da(e, 0, !1, null, null, !1, !1, "", Tc);
    return e._reactRootContainer = a,
    e[ft] = a.current,
    _r(e.nodeType === 8 ? e.parentNode : e),
    un(function() {
        Ls(t, a, n, r)
    }),
    a
}
function _s(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = hs(o);
                l.call(a)
            }
        }
        Ls(t, o, e, i)
    } else
        o = cy(n, t, e, i, r);
    return hs(o)
}
Df = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = cr(t.pendingLanes);
            n !== 0 && (Jl(t, n | 1),
            Ce(t, J()),
            !(I & 6) && ($n = J() + 500,
            zt()))
        }
        break;
    case 13:
        un(function() {
            var r = ht(e, 1);
            if (r !== null) {
                var i = xe();
                Ye(r, e, 1, i)
            }
        }),
        Ra(e, 1)
    }
}
;
ea = function(e) {
    if (e.tag === 13) {
        var t = ht(e, 134217728);
        if (t !== null) {
            var n = xe();
            Ye(t, e, 134217728, n)
        }
        Ra(e, 134217728)
    }
}
;
Rf = function(e) {
    if (e.tag === 13) {
        var t = Rt(e)
          , n = ht(e, t);
        if (n !== null) {
            var r = xe();
            Ye(n, e, t, r)
        }
        Ra(e, t)
    }
}
;
Lf = function() {
    return F
}
;
Vf = function(e, t) {
    var n = F;
    try {
        return F = e,
        t()
    } finally {
        F = n
    }
}
;
Ko = function(e, t, n) {
    switch (t) {
    case "input":
        if (Oo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Cs(r);
                    if (!i)
                        throw Error(P(90));
                    df(r),
                    Oo(r, i)
                }
            }
        }
        break;
    case "textarea":
        hf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Dn(e, !!n.multiple, t, !1)
    }
}
;
wf = Na;
Sf = un;
var dy = {
    usingClientEntryPoint: !1,
    Events: [Jr, xn, Cs, vf, xf, Na]
}
  , or = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , fy = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Pf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: or.findFiberByHostInstance || uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
        try {
            ks = Pi.inject(fy),
            et = Pi
        } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
Le.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Va(t))
        throw Error(P(200));
    return ay(e, t, null, n)
}
;
Le.createRoot = function(e, t) {
    if (!Va(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = np;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Da(e, 1, !1, null, null, n, !1, r, i),
    e[ft] = t.current,
    _r(e.nodeType === 8 ? e.parentNode : e),
    new La(t)
}
;
Le.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = Pf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Le.flushSync = function(e) {
    return un(e)
}
;
Le.hydrate = function(e, t, n) {
    if (!bs(t))
        throw Error(P(200));
    return _s(null, e, t, !0, n)
}
;
Le.hydrateRoot = function(e, t, n) {
    if (!Va(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = np;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = tp(t, null, e, 1, n ?? null, i, !1, s, o),
    e[ft] = t.current,
    _r(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Vs(t)
}
;
Le.render = function(e, t, n) {
    if (!bs(t))
        throw Error(P(200));
    return _s(null, e, t, !1, n)
}
;
Le.unmountComponentAtNode = function(e) {
    if (!bs(e))
        throw Error(P(40));
    return e._reactRootContainer ? (un(function() {
        _s(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ft] = null
        })
    }),
    !0) : !1
}
;
Le.unstable_batchedUpdates = Na;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!bs(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return _s(e, t, n, !1, r)
}
;
Le.version = "18.3.1-next-f1338f8080-20240426";
function rp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)
        } catch (e) {
            console.error(e)
        }
}
rp(),
nf.exports = Le;
var hy = nf.exports
  , Cc = hy;
Ro.createRoot = Cc.createRoot,
Ro.hydrateRoot = Cc.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var py = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , O = (e, t) => {
    const n = E.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: l="", children: a, ...u}, d) => E.createElement("svg", {
        ref: d,
        ...py,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: ["lucide", `lucide-${my(e)}`, l].join(" "),
        ...u
    }, [...t.map( ([f,h]) => E.createElement(f, h)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = O("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = O("BarChart3", [["path", {
    d: "M3 3v18h18",
    key: "1s2lah"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = O("BarChart", [["line", {
    x1: "12",
    x2: "12",
    y1: "20",
    y2: "10",
    key: "1vz5eb"
}], ["line", {
    x1: "18",
    x2: "18",
    y1: "20",
    y2: "4",
    key: "cun8e5"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "20",
    y2: "16",
    key: "hq0ia6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = O("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = O("CheckCircle2", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = O("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = O("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = O("Cloud", [["path", {
    d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
    key: "p7xjir"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = O("Database", [["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
}], ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
}], ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = O("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = O("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = O("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = O("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = O("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = O("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = O("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = O("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = O("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = O("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = O("Send", [["path", {
    d: "m22 2-7 20-4-9-9-4Z",
    key: "1q3vgg"
}], ["path", {
    d: "M22 2 11 13",
    key: "nzbqef"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = O("ShoppingBag", [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = O("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = O("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = O("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = O("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = O("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = O("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , _a = E.createContext({});
function Ia(e) {
    const t = E.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Is = E.createContext(null)
  , Fa = E.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class _y extends E.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Iy({children: e, isPresent: t}) {
    const n = E.useId()
      , r = E.useRef(null)
      , i = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = E.useContext(Fa);
    return E.useInsertionEffect( () => {
        const {width: o, height: l, top: a, left: u} = i.current;
        if (t || !r.current || !o || !l)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    c.jsx(_y, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: E.cloneElement(e, {
            ref: r
        })
    })
}
const Fy = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const l = Ia(Oy)
      , a = E.useId()
      , u = E.useCallback(f => {
        l.set(f, !0);
        for (const h of l.values())
            if (!h)
                return;
        r && r()
    }
    , [l, r])
      , d = E.useMemo( () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: f => (l.set(f, !1),
        () => l.delete(f))
    }), s ? [Math.random(), u] : [n, u]);
    return E.useMemo( () => {
        l.forEach( (f, h) => l.set(h, !1))
    }
    , [n]),
    E.useEffect( () => {
        !n && !l.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = c.jsx(Iy, {
        isPresent: n,
        children: e
    })),
    c.jsx(Is.Provider, {
        value: d,
        children: e
    })
}
;
function Oy() {
    return new Map
}
function up(e=!0) {
    const t = E.useContext(Is);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = E.useId();
    E.useEffect( () => {
        e && i(s)
    }
    , [e]);
    const o = E.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Ti = e => e.key || "";
function Ec(e) {
    const t = [];
    return E.Children.forEach(e, n => {
        E.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Oa = typeof window < "u"
  , cp = Oa ? E.useLayoutEffect : E.useEffect
  , dp = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1}) => {
    const [l,a] = up(o)
      , u = E.useMemo( () => Ec(e), [e])
      , d = o && !l ? [] : u.map(Ti)
      , f = E.useRef(!0)
      , h = E.useRef(u)
      , y = Ia( () => new Map)
      , [v,x] = E.useState(u)
      , [k,m] = E.useState(u);
    cp( () => {
        f.current = !1,
        h.current = u;
        for (let w = 0; w < k.length; w++) {
            const S = Ti(k[w]);
            d.includes(S) ? y.delete(S) : y.get(S) !== !0 && y.set(S, !1)
        }
    }
    , [k, d.length, d.join("-")]);
    const p = [];
    if (u !== v) {
        let w = [...u];
        for (let S = 0; S < k.length; S++) {
            const T = k[S]
              , C = Ti(T);
            d.includes(C) || (w.splice(S, 0, T),
            p.push(T))
        }
        s === "wait" && p.length && (w = p),
        m(Ec(w)),
        x(u);
        return
    }
    const {forceRender: g} = E.useContext(_a);
    return c.jsx(c.Fragment, {
        children: k.map(w => {
            const S = Ti(w)
              , T = o && !l ? !1 : u === k || d.includes(S)
              , C = () => {
                if (y.has(S))
                    y.set(S, !0);
                else
                    return;
                let j = !0;
                y.forEach(b => {
                    b || (j = !1)
                }
                ),
                j && (g == null || g(),
                m(h.current),
                o && (a == null || a()),
                r && r())
            }
            ;
            return c.jsx(Fy, {
                isPresent: T,
                initial: !f.current || n ? void 0 : !1,
                custom: T ? void 0 : t,
                presenceAffectsLayout: i,
                mode: s,
                onExitComplete: T ? void 0 : C,
                children: w
            }, S)
        }
        )
    })
}
  , Me = e => e;
let fp = Me;
function za(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Wn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , ut = e => e * 1e3
  , ct = e => e / 1e3
  , zy = {
    useManualTiming: !1
};
function By(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const s = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(u) {
        s.has(u) && (a.schedule(u),
        e()),
        u(o)
    }
    const a = {
        schedule: (u, d=!1, f=!1) => {
            const y = f && r ? t : n;
            return d && s.add(u),
            y.has(u) || y.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            s.delete(u)
        }
        ,
        process: u => {
            if (o = u,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(l),
            t.clear(),
            r = !1,
            i && (i = !1,
            a.process(u))
        }
    };
    return a
}
const Ci = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Uy = 40;
function hp(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Ci.reduce( (m, p) => (m[p] = By(s),
    m), {})
      , {read: l, resolveKeyframes: a, update: u, preRender: d, render: f, postRender: h} = o
      , y = () => {
        const m = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Uy), 1),
        i.timestamp = m,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , v = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(y)
    }
    ;
    return {
        schedule: Ci.reduce( (m, p) => {
            const g = o[p];
            return m[p] = (w, S=!1, T=!1) => (n || v(),
            g.schedule(w, S, T)),
            m
        }
        , {}),
        cancel: m => {
            for (let p = 0; p < Ci.length; p++)
                o[Ci[p]].cancel(m)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: $, cancel: _t, state: ue, steps: yo} = hp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0)
  , pp = E.createContext({
    strict: !1
})
  , Ac = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Hn = {};
for (const e in Ac)
    Hn[e] = {
        isEnabled: t => Ac[e].some(n => !!t[n])
    };
function $y(e) {
    for (const t in e)
        Hn[t] = {
            ...Hn[t],
            ...e[t]
        }
}
const Wy = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ps(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Wy.has(e)
}
let mp = e => !ps(e);
function Hy(e) {
    e && (mp = t => t.startsWith("on") ? !ps(t) : e(t))
}
try {
    Hy(require("@emotion/is-prop-valid").default)
} catch {}
function Ky(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (mp(i) || n === !0 && ps(i) || !t && !ps(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Gy(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const Fs = E.createContext({});
function Hr(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Os(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ba = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ua = ["initial", ...Ba];
function zs(e) {
    return Os(e.animate) || Ua.some(t => Hr(e[t]))
}
function gp(e) {
    return !!(zs(e) || e.variants)
}
function Qy(e, t) {
    if (zs(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Hr(n) ? n : void 0,
            animate: Hr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Yy(e) {
    const {initial: t, animate: n} = Qy(e, E.useContext(Fs));
    return E.useMemo( () => ({
        initial: t,
        animate: n
    }), [Mc(t), Mc(n)])
}
function Mc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Xy = Symbol.for("motionComponentSymbol");
function Cn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Zy(e, t, n) {
    return E.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Cn(n) && (n.current = r))
    }
    , [t])
}
const $a = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , qy = "framerAppearId"
  , yp = "data-" + $a(qy)
  , {schedule: Wa} = hp(queueMicrotask, !1)
  , vp = E.createContext({});
function Jy(e, t, n, r, i) {
    var s, o;
    const {visualElement: l} = E.useContext(Fs)
      , a = E.useContext(pp)
      , u = E.useContext(Is)
      , d = E.useContext(Fa).reducedMotion
      , f = E.useRef(null);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const h = f.current
      , y = E.useContext(vp);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && ev(f.current, n, i, y);
    const v = E.useRef(!1);
    E.useInsertionEffect( () => {
        h && v.current && h.update(n, u)
    }
    );
    const x = n[yp]
      , k = E.useRef(!!x && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, x)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, x)));
    return cp( () => {
        h && (v.current = !0,
        window.MotionIsMounted = !0,
        h.updateFeatures(),
        Wa.render(h.render),
        k.current && h.animationState && h.animationState.animateChanges())
    }
    ),
    E.useEffect( () => {
        h && (!k.current && h.animationState && h.animationState.animateChanges(),
        k.current && (queueMicrotask( () => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, x)
        }
        ),
        k.current = !1))
    }
    ),
    h
}
function ev(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : xp(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || l && Cn(l),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}
function xp(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : xp(e.parent)
}
function tv({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var s, o;
    e && $y(e);
    function l(u, d) {
        let f;
        const h = {
            ...E.useContext(Fa),
            ...u,
            layoutId: nv(u)
        }
          , {isStatic: y} = h
          , v = Yy(u)
          , x = r(u, y);
        if (!y && Oa) {
            rv();
            const k = iv(h);
            f = k.MeasureLayout,
            v.visualElement = Jy(i, x, h, t, k.ProjectionNode)
        }
        return c.jsxs(Fs.Provider, {
            value: v,
            children: [f && v.visualElement ? c.jsx(f, {
                visualElement: v.visualElement,
                ...h
            }) : null, n(i, u, Zy(x, v.visualElement, d), x, y, v.visualElement)]
        })
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const a = E.forwardRef(l);
    return a[Xy] = i,
    a
}
function nv({layoutId: e}) {
    const t = E.useContext(_a).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function rv(e, t) {
    E.useContext(pp).strict
}
function iv(e) {
    const {drag: t, layout: n} = Hn;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const sv = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ha(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(sv.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Dc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Ka(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Dc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Dc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
const Tl = e => Array.isArray(e)
  , ov = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , lv = e => Tl(e) ? e[e.length - 1] || 0 : e
  , ge = e => !!(e && e.getVelocity);
function Bi(e) {
    const t = ge(e) ? e.get() : e;
    return ov(t) ? t.toValue() : t
}
function av({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, s) {
    const o = {
        latestValues: uv(r, i, s, e),
        renderState: t()
    };
    return n && (o.onMount = l => n({
        props: r,
        current: l,
        ...o
    }),
    o.onUpdate = l => n(l)),
    o
}
const wp = e => (t, n) => {
    const r = E.useContext(Fs)
      , i = E.useContext(Is)
      , s = () => av(e, t, r, i);
    return n ? s() : Ia(s)
}
;
function uv(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const h in s)
        i[h] = Bi(s[h]);
    let {initial: o, animate: l} = e;
    const a = zs(e)
      , u = gp(e);
    t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    l === void 0 && (l = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? l : o;
    if (f && typeof f != "boolean" && !Os(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let y = 0; y < h.length; y++) {
            const v = Ka(e, h[y]);
            if (v) {
                const {transitionEnd: x, transition: k, ...m} = v;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const w = d ? g.length - 1 : 0;
                        g = g[w]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in x)
                    i[p] = x[p]
            }
        }
    }
    return i
}
const Xn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , fn = new Set(Xn)
  , Sp = e => t => typeof t == "string" && t.startsWith(e)
  , kp = Sp("--")
  , cv = Sp("var(--")
  , Ga = e => cv(e) ? dv.test(e.split("/*")[0].trim()) : !1
  , dv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , jp = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , mt = (e, t, n) => n > t ? t : n < e ? e : n
  , Zn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Kr = {
    ...Zn,
    transform: e => mt(0, 1, e)
}
  , Ni = {
    ...Zn,
    default: 1
}
  , ti = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , xt = ti("deg")
  , nt = ti("%")
  , M = ti("px")
  , fv = ti("vh")
  , hv = ti("vw")
  , Rc = {
    ...nt,
    parse: e => nt.parse(e) / 100,
    transform: e => nt.transform(e * 100)
}
  , pv = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    backgroundPositionX: M,
    backgroundPositionY: M
}
  , mv = {
    rotate: xt,
    rotateX: xt,
    rotateY: xt,
    rotateZ: xt,
    scale: Ni,
    scaleX: Ni,
    scaleY: Ni,
    scaleZ: Ni,
    skew: xt,
    skewX: xt,
    skewY: xt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Kr,
    originX: Rc,
    originY: Rc,
    originZ: M
}
  , Lc = {
    ...Zn,
    transform: Math.round
}
  , Qa = {
    ...pv,
    ...mv,
    zIndex: Lc,
    size: M,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: Lc
}
  , gv = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , yv = Xn.length;
function vv(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < yv; s++) {
        const o = Xn[s]
          , l = e[o];
        if (l === void 0)
            continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
        !a || n) {
            const u = jp(l, Qa[o]);
            if (!a) {
                i = !1;
                const d = gv[o] || o;
                r += `${d}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Ya(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , l = !1;
    for (const a in t) {
        const u = t[a];
        if (fn.has(a)) {
            o = !0;
            continue
        } else if (kp(a)) {
            i[a] = u;
            continue
        } else {
            const d = jp(u, Qa[a]);
            a.startsWith("origin") ? (l = !0,
            s[a] = d) : r[a] = d
        }
    }
    if (t.transform || (o || n ? r.transform = vv(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: a="50%", originY: u="50%", originZ: d=0} = s;
        r.transformOrigin = `${a} ${u} ${d}`
    }
}
const xv = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , wv = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Sv(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? xv : wv;
    e[s.offset] = M.transform(-r);
    const o = M.transform(t)
      , l = M.transform(n);
    e[s.array] = `${o} ${l}`
}
function Vc(e, t, n) {
    return typeof e == "string" ? e : M.transform(t + n * e)
}
function kv(e, t, n) {
    const r = Vc(t, e.x, e.width)
      , i = Vc(n, e.y, e.height);
    return `${r} ${i}`
}
function Xa(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: a=0, ...u}, d, f) {
    if (Ya(e, u, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: y, dimensions: v} = e;
    h.transform && (v && (y.transform = h.transform),
    delete h.transform),
    v && (i !== void 0 || s !== void 0 || y.transform) && (y.transformOrigin = kv(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && Sv(h, o, l, a, !1)
}
const Za = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Pp = () => ({
    ...Za(),
    attrs: {}
})
  , qa = e => typeof e == "string" && e.toLowerCase() === "svg";
function Tp(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const Cp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Np(e, t, n, r) {
    Tp(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Cp.has(i) ? i : $a(i), t.attrs[i])
}
const ms = {};
function jv(e) {
    Object.assign(ms, e)
}
function Ep(e, {layout: t, layoutId: n}) {
    return fn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ms[e] || e === "opacity")
}
function Ja(e, t, n) {
    var r;
    const {style: i} = e
      , s = {};
    for (const o in i)
        (ge(i[o]) || t.style && ge(t.style[o]) || Ep(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}
function Ap(e, t, n) {
    const r = Ja(e, t, n);
    for (const i in e)
        if (ge(e[i]) || ge(t[i])) {
            const s = Xn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
function Pv(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const bc = ["x", "y", "width", "height", "cx", "cy", "r"]
  , Tv = {
    useVisualState: wp({
        scrapeMotionValuesFromProps: Ap,
        createRenderState: Pp,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let s = !!e.drag;
            if (!s) {
                for (const l in i)
                    if (fn.has(l)) {
                        s = !0;
                        break
                    }
            }
            if (!s)
                return;
            let o = !t;
            if (t)
                for (let l = 0; l < bc.length; l++) {
                    const a = bc[l];
                    e[a] !== t[a] && (o = !0)
                }
            o && $.read( () => {
                Pv(n, r),
                $.render( () => {
                    Xa(r, i, qa(n.tagName), e.transformTemplate),
                    Np(n, r)
                }
                )
            }
            )
        }
    })
}
  , Cv = {
    useVisualState: wp({
        scrapeMotionValuesFromProps: Ja,
        createRenderState: Za
    })
};
function Mp(e, t, n) {
    for (const r in t)
        !ge(t[r]) && !Ep(r, n) && (e[r] = t[r])
}
function Nv({transformTemplate: e}, t) {
    return E.useMemo( () => {
        const n = Za();
        return Ya(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function Ev(e, t) {
    const n = e.style || {}
      , r = {};
    return Mp(r, n, e),
    Object.assign(r, Nv(e, t)),
    r
}
function Av(e, t) {
    const n = {}
      , r = Ev(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function Mv(e, t, n, r) {
    const i = E.useMemo( () => {
        const s = Pp();
        return Xa(s, t, qa(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        Mp(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function Dv(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const a = (Ha(n) ? Mv : Av)(r, s, o, n)
          , u = Ky(r, typeof n == "string", e)
          , d = n !== E.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: f} = r
          , h = E.useMemo( () => ge(f) ? f.get() : f, [f]);
        return E.createElement(n, {
            ...d,
            children: h
        })
    }
}
function Rv(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...Ha(r) ? Tv : Cv,
            preloadedFeatures: e,
            useRender: Dv(i),
            createVisualElement: t,
            Component: r
        };
        return tv(o)
    }
}
function Dp(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Bs(e, t, n) {
    const r = e.getProps();
    return Ka(r, t, n !== void 0 ? n : r.custom, e)
}
const Lv = za( () => window.ScrollTimeline !== void 0);
class Vv {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (Lv() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, s) => {
                i && i(),
                this.animations[s].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class bv extends Vv {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function eu(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const Cl = 2e4;
function Rp(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Cl; )
        t += n,
        r = e.next(t);
    return t >= Cl ? 1 / 0 : t
}
function tu(e) {
    return typeof e == "function"
}
function _c(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const nu = e => Array.isArray(e) && typeof e[0] == "number"
  , _v = {
    linearEasing: void 0
};
function Iv(e, t) {
    const n = za(e);
    return () => {
        var r;
        return (r = _v[t]) !== null && r !== void 0 ? r : n()
    }
}
const gs = Iv( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Lp = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += e(Wn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function Vp(e) {
    return !!(typeof e == "function" && gs() || !e || typeof e == "string" && (e in Nl || gs()) || nu(e) || Array.isArray(e) && e.every(Vp))
}
const fr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Nl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fr([0, .65, .55, 1]),
    circOut: fr([.55, 0, 1, .45]),
    backIn: fr([.31, .01, .66, -.59]),
    backOut: fr([.33, 1.53, .69, .99])
};
function bp(e, t) {
    if (e)
        return typeof e == "function" && gs() ? Lp(e, t) : nu(e) ? fr(e) : Array.isArray(e) ? e.map(n => bp(n, t) || Nl.easeOut) : Nl[e]
}
const We = {
    x: !1,
    y: !1
};
function _p() {
    return We.x || We.y
}
function Fv(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
function Ip(e, t) {
    const n = Fv(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Ic(e) {
    return t => {
        t.pointerType === "touch" || _p() || e(t)
    }
}
function Ov(e, t, n={}) {
    const [r,i,s] = Ip(e, n)
      , o = Ic(l => {
        const {target: a} = l
          , u = t(l);
        if (typeof u != "function" || !a)
            return;
        const d = Ic(f => {
            u(f),
            a.removeEventListener("pointerleave", d)
        }
        );
        a.addEventListener("pointerleave", d, i)
    }
    );
    return r.forEach(l => {
        l.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const Fp = (e, t) => t ? e === t ? !0 : Fp(e, t.parentElement) : !1
  , ru = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , zv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Bv(e) {
    return zv.has(e.tagName) || e.tabIndex !== -1
}
const hr = new WeakSet;
function Fc(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function vo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Uv = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Fc( () => {
        if (hr.has(n))
            return;
        vo(n, "down");
        const i = Fc( () => {
            vo(n, "up")
        }
        )
          , s = () => vo(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Oc(e) {
    return ru(e) && !_p()
}
function $v(e, t, n={}) {
    const [r,i,s] = Ip(e, n)
      , o = l => {
        const a = l.currentTarget;
        if (!Oc(l) || hr.has(a))
            return;
        hr.add(a);
        const u = t(l)
          , d = (y, v) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Oc(y) || !hr.has(a)) && (hr.delete(a),
            typeof u == "function" && u(y, {
                success: v
            }))
        }
          , f = y => {
            d(y, n.useGlobalTarget || Fp(a, y.target))
        }
          , h = y => {
            d(y, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i)
    }
    ;
    return r.forEach(l => {
        !Bv(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        l.addEventListener("focus", u => Uv(u, i), i)
    }
    ),
    s
}
function Wv(e) {
    return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0,
    () => {
        We[e] = !1
    }
    ) : We.x || We.y ? null : (We.x = We.y = !0,
    () => {
        We.x = We.y = !1
    }
    )
}
const Op = new Set(["width", "height", "top", "left", "right", "bottom", ...Xn]);
let Ui;
function Hv() {
    Ui = void 0
}
const rt = {
    now: () => (Ui === void 0 && rt.set(ue.isProcessing || zy.useManualTiming ? ue.timestamp : performance.now()),
    Ui),
    set: e => {
        Ui = e,
        queueMicrotask(Hv)
    }
};
function iu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function su(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class ou {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return iu(this.subscriptions, t),
        () => su(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function zp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const zc = 30
  , Kv = e => !isNaN(parseFloat(e));
class Gv {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = rt.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = rt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Kv(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new ou);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            $.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = rt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > zc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, zc);
        return zp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Gr(e, t) {
    return new Gv(e,t)
}
function Qv(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gr(n))
}
function Yv(e, t) {
    const n = Bs(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = lv(s[o]);
        Qv(e, o, l)
    }
}
function Xv(e) {
    return !!(ge(e) && e.add)
}
function El(e, t) {
    const n = e.getValue("willChange");
    if (Xv(n))
        return n.add(t)
}
function Bp(e) {
    return e.props[yp]
}
const Up = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Zv = 1e-7
  , qv = 12;
function Jv(e, t, n, r, i) {
    let s, o, l = 0;
    do
        o = t + (n - t) / 2,
        s = Up(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > Zv && ++l < qv);
    return o
}
function ni(e, t, n, r) {
    if (e === t && n === r)
        return Me;
    const i = s => Jv(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Up(i(s), t, r)
}
const $p = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Wp = e => t => 1 - e(1 - t)
  , Hp = ni(.33, 1.53, .69, .99)
  , lu = Wp(Hp)
  , Kp = $p(lu)
  , Gp = e => (e *= 2) < 1 ? .5 * lu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , au = e => 1 - Math.sin(Math.acos(e))
  , Qp = Wp(au)
  , Yp = $p(au)
  , Xp = e => /^0[^.\s]+$/u.test(e);
function ex(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Xp(e) : !0
}
const Pr = e => Math.round(e * 1e5) / 1e5
  , uu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tx(e) {
    return e == null
}
const nx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , cu = (e, t) => n => !!(typeof n == "string" && nx.test(n) && n.startsWith(e) || t && !tx(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Zp = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,l] = r.match(uu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , rx = e => mt(0, 255, e)
  , xo = {
    ...Zn,
    transform: e => Math.round(rx(e))
}
  , Jt = {
    test: cu("rgb", "red"),
    parse: Zp("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + xo.transform(e) + ", " + xo.transform(t) + ", " + xo.transform(n) + ", " + Pr(Kr.transform(r)) + ")"
};
function ix(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Al = {
    test: cu("#"),
    parse: ix,
    transform: Jt.transform
}
  , Nn = {
    test: cu("hsl", "hue"),
    parse: Zp("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + nt.transform(Pr(t)) + ", " + nt.transform(Pr(n)) + ", " + Pr(Kr.transform(r)) + ")"
}
  , pe = {
    test: e => Jt.test(e) || Al.test(e) || Nn.test(e),
    parse: e => Jt.test(e) ? Jt.parse(e) : Nn.test(e) ? Nn.parse(e) : Al.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : Nn.transform(e)
}
  , sx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ox(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(uu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(sx)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const qp = "number"
  , Jp = "color"
  , lx = "var"
  , ax = "var("
  , Bc = "${}"
  , ux = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qr(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const l = t.replace(ux, a => (pe.test(a) ? (r.color.push(s),
    i.push(Jp),
    n.push(pe.parse(a))) : a.startsWith(ax) ? (r.var.push(s),
    i.push(lx),
    n.push(a)) : (r.number.push(s),
    i.push(qp),
    n.push(parseFloat(a))),
    ++s,
    Bc)).split(Bc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function em(e) {
    return Qr(e).values
}
function tm(e) {
    const {split: t, types: n} = Qr(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const l = n[o];
                l === qp ? s += Pr(i[o]) : l === Jp ? s += pe.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const cx = e => typeof e == "number" ? 0 : e;
function dx(e) {
    const t = em(e);
    return tm(e)(t.map(cx))
}
const It = {
    test: ox,
    parse: em,
    createTransformer: tm,
    getAnimatableNone: dx
}
  , fx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function hx(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(uu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = fx.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const px = /\b([a-z-]*)\(.*?\)/gu
  , Ml = {
    ...It,
    getAnimatableNone: e => {
        const t = e.match(px);
        return t ? t.map(hx).join(" ") : e
    }
}
  , mx = {
    ...Qa,
    color: pe,
    backgroundColor: pe,
    outlineColor: pe,
    fill: pe,
    stroke: pe,
    borderColor: pe,
    borderTopColor: pe,
    borderRightColor: pe,
    borderBottomColor: pe,
    borderLeftColor: pe,
    filter: Ml,
    WebkitFilter: Ml
}
  , du = e => mx[e];
function nm(e, t) {
    let n = du(e);
    return n !== Ml && (n = It),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const gx = new Set(["auto", "none", "0"]);
function yx(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !gx.has(s) && Qr(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = nm(n, i)
}
const Uc = e => e === Zn || e === M
  , $c = (e, t) => parseFloat(e.split(", ")[t])
  , Wc = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return $c(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? $c(s[1], e) : 0
    }
}
  , vx = new Set(["x", "y", "z"])
  , xx = Xn.filter(e => !vx.has(e));
function wx(e) {
    const t = [];
    return xx.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Kn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Wc(4, 13),
    y: Wc(5, 14)
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const nn = new Set;
let Dl = !1
  , Rl = !1;
function rm() {
    if (Rl) {
        const e = Array.from(nn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = wx(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var l;
                (l = r.getValue(s)) === null || l === void 0 || l.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Rl = !1,
    Dl = !1,
    nn.forEach(e => e.complete()),
    nn.clear()
}
function im() {
    nn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Rl = !0)
    }
    )
}
function Sx() {
    im(),
    rm()
}
class fu {
    constructor(t, n, r, i, s, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (nn.add(this),
        Dl || (Dl = !0,
        $.read(im),
        $.resolveKeyframes(rm))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        nn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        nn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const sm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , kx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function jx(e) {
    const t = kx.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function om(e, t, n=1) {
    const [r,i] = jx(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return sm(o) ? parseFloat(o) : o
    }
    return Ga(i) ? om(i, t, n + 1) : i
}
const lm = e => t => t.test(e)
  , Px = {
    test: e => e === "auto",
    parse: e => e
}
  , am = [Zn, M, nt, xt, hv, fv, Px]
  , Hc = e => am.find(lm(e));
class um extends fu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(),
            Ga(u))) {
                const d = om(u, n.current);
                d !== void 0 && (t[a] = d),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Op.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Hc(i)
          , l = Hc(s);
        if (o !== l)
            if (Uc(o) && Uc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            ex(t[i]) && r.push(i);
        r.length && yx(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Kn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , l = i[o];
        i[o] = Kn[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([a,u]) => {
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Kc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (It.test(e) || e === "0") && !e.startsWith("url("));
function Tx(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Cx(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Kc(i, t)
      , l = Kc(s, t);
    return !o || !l ? !1 : Tx(e) || (n === "spring" || tu(n)) && r
}
const Nx = e => e !== null;
function Us(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(Nx)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const Ex = 40;
class cm {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = rt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Ex ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Sx(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = rt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !Cx(t, r, i, s))
            if (o)
                this.options.duration = 0;
            else {
                a && a(Us(t, this.options, n)),
                l && l(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const K = (e, t, n) => e + (t - e) * n;
function wo(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Ax({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = wo(a, l, e + 1 / 3),
        s = wo(a, l, e),
        o = wo(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function ys(e, t) {
    return n => n > 0 ? t : e
}
const So = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Mx = [Al, Jt, Nn]
  , Dx = e => Mx.find(t => t.test(e));
function Gc(e) {
    const t = Dx(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Nn && (n = Ax(n)),
    n
}
const Qc = (e, t) => {
    const n = Gc(e)
      , r = Gc(t);
    if (!n || !r)
        return ys(e, t);
    const i = {
        ...n
    };
    return s => (i.red = So(n.red, r.red, s),
    i.green = So(n.green, r.green, s),
    i.blue = So(n.blue, r.blue, s),
    i.alpha = K(n.alpha, r.alpha, s),
    Jt.transform(i))
}
  , Rx = (e, t) => n => t(e(n))
  , ri = (...e) => e.reduce(Rx)
  , Ll = new Set(["none", "hidden"]);
function Lx(e, t) {
    return Ll.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function Vx(e, t) {
    return n => K(e, t, n)
}
function hu(e) {
    return typeof e == "number" ? Vx : typeof e == "string" ? Ga(e) ? ys : pe.test(e) ? Qc : Ix : Array.isArray(e) ? dm : typeof e == "object" ? pe.test(e) ? Qc : bx : ys
}
function dm(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => hu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function bx(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = hu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function _x(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , l = e.indexes[o][i[o]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[s] = a,
        i[o]++
    }
    return r
}
const Ix = (e, t) => {
    const n = It.createTransformer(t)
      , r = Qr(e)
      , i = Qr(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ll.has(e) && !i.values.length || Ll.has(t) && !r.values.length ? Lx(e, t) : ri(dm(_x(r, i), i.values), n) : ys(e, t)
}
;
function fm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : hu(e)(e, t)
}
const Fx = 5;
function hm(e, t, n) {
    const r = Math.max(t - Fx, 0);
    return zp(n - e(r), t - r)
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , ko = .001;
function Ox({duration: e=Y.duration, bounce: t=Y.bounce, velocity: n=Y.velocity, mass: r=Y.mass}) {
    let i, s, o = 1 - t;
    o = mt(Y.minDamping, Y.maxDamping, o),
    e = mt(Y.minDuration, Y.maxDuration, ct(e)),
    o < 1 ? (i = u => {
        const d = u * o
          , f = d * e
          , h = d - n
          , y = Vl(u, o)
          , v = Math.exp(-f);
        return ko - h / y * v
    }
    ,
    s = u => {
        const f = u * o * e
          , h = f * n + n
          , y = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-f)
          , x = Vl(Math.pow(u, 2), o);
        return (-i(u) + ko > 0 ? -1 : 1) * ((h - y) * v) / x
    }
    ) : (i = u => {
        const d = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -ko + d * f
    }
    ,
    s = u => {
        const d = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return d * f
    }
    );
    const l = 5 / e
      , a = Bx(i, s, l);
    if (e = ut(e),
    isNaN(a))
        return {
            stiffness: Y.stiffness,
            damping: Y.damping,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const zx = 12;
function Bx(e, t, n) {
    let r = n;
    for (let i = 1; i < zx; i++)
        r = r - e(r) / t(r);
    return r
}
function Vl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Ux = ["duration", "bounce"]
  , $x = ["stiffness", "damping", "mass"];
function Yc(e, t) {
    return t.some(n => e[n] !== void 0)
}
function Wx(e) {
    let t = {
        velocity: Y.velocity,
        stiffness: Y.stiffness,
        damping: Y.damping,
        mass: Y.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Yc(e, $x) && Yc(e, Ux))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * mt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: Y.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = Ox(e);
            t = {
                ...t,
                ...n,
                mass: Y.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function pm(e=Y.visualDuration, t=Y.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , l = {
        done: !1,
        value: s
    }
      , {stiffness: a, damping: u, mass: d, duration: f, velocity: h, isResolvedFromDuration: y} = Wx({
        ...n,
        velocity: -ct(n.velocity || 0)
    })
      , v = h || 0
      , x = u / (2 * Math.sqrt(a * d))
      , k = o - s
      , m = ct(Math.sqrt(a / d))
      , p = Math.abs(k) < 5;
    r || (r = p ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = p ? Y.restDelta.granular : Y.restDelta.default);
    let g;
    if (x < 1) {
        const S = Vl(m, x);
        g = T => {
            const C = Math.exp(-x * m * T);
            return o - C * ((v + x * m * k) / S * Math.sin(S * T) + k * Math.cos(S * T))
        }
    } else if (x === 1)
        g = S => o - Math.exp(-m * S) * (k + (v + m * k) * S);
    else {
        const S = m * Math.sqrt(x * x - 1);
        g = T => {
            const C = Math.exp(-x * m * T)
              , j = Math.min(S * T, 300);
            return o - C * ((v + x * m * k) * Math.sinh(j) + S * k * Math.cosh(j)) / S
        }
    }
    const w = {
        calculatedDuration: y && f || null,
        next: S => {
            const T = g(S);
            if (y)
                l.done = S >= f;
            else {
                let C = 0;
                x < 1 && (C = S === 0 ? ut(v) : hm(g, S, T));
                const j = Math.abs(C) <= r
                  , b = Math.abs(o - T) <= i;
                l.done = j && b
            }
            return l.value = l.done ? o : T,
            l
        }
        ,
        toString: () => {
            const S = Math.min(Rp(w), Cl)
              , T = Lp(C => w.next(S * C).value, S, 30);
            return S + "ms " + T
        }
    };
    return w
}
function Xc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: a, restDelta: u=.5, restSpeed: d}) {
    const f = e[0]
      , h = {
        done: !1,
        value: f
    }
      , y = j => l !== void 0 && j < l || a !== void 0 && j > a
      , v = j => l === void 0 ? a : a === void 0 || Math.abs(l - j) < Math.abs(a - j) ? l : a;
    let x = n * t;
    const k = f + x
      , m = o === void 0 ? k : o(k);
    m !== k && (x = m - f);
    const p = j => -x * Math.exp(-j / r)
      , g = j => m + p(j)
      , w = j => {
        const b = p(j)
          , D = g(j);
        h.done = Math.abs(b) <= u,
        h.value = h.done ? m : D
    }
    ;
    let S, T;
    const C = j => {
        y(h.value) && (S = j,
        T = pm({
            keyframes: [h.value, v(h.value)],
            velocity: hm(g, j, h.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: d
        }))
    }
    ;
    return C(0),
    {
        calculatedDuration: null,
        next: j => {
            let b = !1;
            return !T && S === void 0 && (b = !0,
            w(j),
            C(j)),
            S !== void 0 && j >= S ? T.next(j - S) : (!b && w(j),
            h)
        }
    }
}
const Hx = ni(.42, 0, 1, 1)
  , Kx = ni(0, 0, .58, 1)
  , mm = ni(.42, 0, .58, 1)
  , Gx = e => Array.isArray(e) && typeof e[0] != "number"
  , Qx = {
    linear: Me,
    easeIn: Hx,
    easeInOut: mm,
    easeOut: Kx,
    circIn: au,
    circInOut: Yp,
    circOut: Qp,
    backIn: lu,
    backInOut: Kp,
    backOut: Hp,
    anticipate: Gp
}
  , Zc = e => {
    if (nu(e)) {
        fp(e.length === 4);
        const [t,n,r,i] = e;
        return ni(t, n, r, i)
    } else if (typeof e == "string")
        return Qx[e];
    return e
}
;
function Yx(e, t, n) {
    const r = []
      , i = n || fm
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[o] || Me : t;
            l = ri(a, l)
        }
        r.push(l)
    }
    return r
}
function Xx(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (fp(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const l = Yx(t, r, i)
      , a = l.length
      , u = d => {
        if (o && d < e[0])
            return t[0];
        let f = 0;
        if (a > 1)
            for (; f < e.length - 2 && !(d < e[f + 1]); f++)
                ;
        const h = Wn(e[f], e[f + 1], d);
        return l[f](h)
    }
    ;
    return n ? d => u(mt(e[0], e[s - 1], d)) : u
}
function Zx(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Wn(0, t, r);
        e.push(K(n, 1, i))
    }
}
function qx(e) {
    const t = [0];
    return Zx(t, e.length - 1),
    t
}
function Jx(e, t) {
    return e.map(n => n * t)
}
function e1(e, t) {
    return e.map( () => t || mm).splice(0, e.length - 1)
}
function vs({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = Gx(r) ? r.map(Zc) : Zc(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = Jx(n && n.length === t.length ? n : qx(t), e)
      , l = Xx(o, t, {
        ease: Array.isArray(i) ? i : e1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (s.value = l(a),
        s.done = a >= e,
        s)
    }
}
const t1 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => $.update(t, !0),
        stop: () => _t(t),
        now: () => ue.isProcessing ? ue.timestamp : rt.now()
    }
}
  , n1 = {
    decay: Xc,
    inertia: Xc,
    tween: vs,
    keyframes: vs,
    spring: pm
}
  , r1 = e => e / 100;
class pu extends cm {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: a} = this.options;
            a && a()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || fu
          , l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new o(s,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
          , l = tu(n) ? n : n1[n] || vs;
        let a, u;
        l !== vs && typeof t[0] != "number" && (a = ri(r1, fm(t[0], t[1])),
        t = [0, 100]);
        const d = l({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = Rp(d));
        const {calculatedDuration: f} = d
          , h = f + i
          , y = h * (r + 1) - i;
        return {
            generator: d,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: j} = this.options;
            return {
                done: !0,
                value: j[j.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: d, resolvedDuration: f} = r;
        if (this.startTime === null)
            return s.next(0);
        const {delay: h, repeat: y, repeatType: v, repeatDelay: x, onUpdate: k} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
          , w = s;
        if (y) {
            const j = Math.min(this.currentTime, d) / f;
            let b = Math.floor(j)
              , D = j % 1;
            !D && j >= 1 && (D = 1),
            D === 1 && b--,
            b = Math.min(b, y + 1),
            !!(b % 2) && (v === "reverse" ? (D = 1 - D,
            x && (D -= x / f)) : v === "mirror" && (w = o)),
            g = mt(0, 1, D) * f
        }
        const S = p ? {
            done: !1,
            value: a[0]
        } : w.next(g);
        l && (S.value = l(S.value));
        let {done: T} = S;
        !p && u !== null && (T = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return C && i !== void 0 && (S.value = Us(a, this.options, i)),
        k && k(S.value),
        C && this.finish(),
        S
    }
    get duration() {
        const {resolved: t} = this;
        return t ? ct(t.calculatedDuration) : 0
    }
    get time() {
        return ct(this.currentTime)
    }
    set time(t) {
        t = ut(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = ct(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=t1, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const i1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function s1(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: l="easeInOut", times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const d = bp(l, i);
    return Array.isArray(d) && (u.easing = d),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const o1 = za( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , xs = 10
  , l1 = 2e4;
function a1(e) {
    return tu(e.type) || e.type === "spring" || !Vp(e.ease)
}
function u1(e, t) {
    const n = new pu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < l1; )
        r = n.sample(s),
        i.push(r.value),
        s += xs;
    return {
        times: void 0,
        keyframes: i,
        duration: s - xs,
        ease: "linear"
    }
}
const gm = {
    anticipate: Gp,
    backInOut: Kp,
    circInOut: Yp
};
function c1(e) {
    return e in gm
}
class qc extends cm {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
        this.resolver = new um(s, (o, l) => this.onKeyframesResolved(o, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: s, type: o, motionValue: l, name: a, startTime: u} = this.options;
        if (!l.owner || !l.owner.current)
            return !1;
        if (typeof s == "string" && gs() && c1(s) && (s = gm[s]),
        a1(this.options)) {
            const {onComplete: f, onUpdate: h, motionValue: y, element: v, ...x} = this.options
              , k = u1(t, x);
            t = k.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = k.duration,
            i = k.times,
            s = k.ease,
            o = "keyframes"
        }
        const d = s1(l.owner.current, a, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: s
        });
        return d.startTime = u ?? this.calcStartTime(),
        this.pendingTimeline ? (_c(d, this.pendingTimeline),
        this.pendingTimeline = void 0) : d.onfinish = () => {
            const {onComplete: f} = this.options;
            l.set(Us(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: d,
            duration: r,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return ct(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return ct(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = ut(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Me;
            const {animation: r} = n;
            _c(r, t)
        }
        return Me
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: d, onComplete: f, element: h, ...y} = this.options
              , v = new pu({
                ...y,
                keyframes: r,
                duration: i,
                type: s,
                ease: o,
                times: l,
                isGenerator: !0
            })
              , x = ut(this.time);
            u.setWithVelocity(v.sample(x - xs).value, v.sample(x).value, xs)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: a, transformTemplate: u} = n.owner.getProps();
        return o1() && r && i1.has(r) && !a && !u && !i && s !== "mirror" && o !== 0 && l !== "inertia"
    }
}
const d1 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , f1 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , h1 = {
    type: "keyframes",
    duration: .8
}
  , p1 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , m1 = (e, {keyframes: t}) => t.length > 2 ? h1 : fn.has(e) ? e.startsWith("scale") ? f1(t[1]) : d1 : p1;
function g1({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...d}) {
    return !!Object.keys(d).length
}
const mu = (e, t, n, r={}, i, s) => o => {
    const l = eu(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - ut(a);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: h => {
            t.set(h),
            l.onUpdate && l.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    g1(l) || (d = {
        ...d,
        ...m1(e, d)
    }),
    d.duration && (d.duration = ut(d.duration)),
    d.repeatDelay && (d.repeatDelay = ut(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (f = !0)),
    f && !s && t.get() !== void 0) {
        const h = Us(d.keyframes, l);
        if (h !== void 0)
            return $.update( () => {
                d.onUpdate(h),
                d.onComplete()
            }
            ),
            new bv([])
    }
    return !s && qc.supports(d) ? new qc(d) : new pu(d)
}
;
function y1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function ym(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var s;
    let {transition: o=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    r && (o = r);
    const u = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null)
          , y = a[f];
        if (y === void 0 || d && y1(d, f))
            continue;
        const v = {
            delay: n,
            ...eu(o || {}, f)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const m = Bp(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, f, $);
                p !== null && (v.startTime = p,
                x = !0)
            }
        }
        El(e, f),
        h.start(mu(f, h, y, e.shouldReduceMotion && Op.has(f) ? {
            type: !1
        } : v, e, x));
        const k = h.animation;
        k && u.push(k)
    }
    return l && Promise.all(u).then( () => {
        $.update( () => {
            l && Yv(e, l)
        }
        )
    }
    ),
    u
}
function bl(e, t, n={}) {
    var r;
    const i = Bs(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(ym(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: d=0, staggerChildren: f, staggerDirection: h} = s;
        return v1(e, t, d + u, f, h, n)
    }
    : () => Promise.resolve()
      , {when: a} = s;
    if (a) {
        const [u,d] = a === "beforeChildren" ? [o, l] : [l, o];
        return u().then( () => d())
    } else
        return Promise.all([o(), l(n.delay)])
}
function v1(e, t, n=0, r=0, i=1, s) {
    const o = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(x1).forEach( (u, d) => {
        u.notify("AnimationStart", t),
        o.push(bl(u, t, {
            ...s,
            delay: n + a(d)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function x1(e, t) {
    return e.sortNodePosition(t)
}
function w1(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => bl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = bl(e, t, n);
    else {
        const i = typeof t == "function" ? Bs(e, t, n.custom) : t;
        r = Promise.all(ym(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const S1 = Ua.length;
function vm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? vm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < S1; n++) {
        const r = Ua[n]
          , i = e.props[r];
        (Hr(i) || i === !1) && (t[r] = i)
    }
    return t
}
const k1 = [...Ba].reverse()
  , j1 = Ba.length;
function P1(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => w1(e, n, r)))
}
function T1(e) {
    let t = P1(e)
      , n = Jc()
      , r = !0;
    const i = a => (u, d) => {
        var f;
        const h = Bs(e, d, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (h) {
            const {transition: y, transitionEnd: v, ...x} = h;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    }
    ;
    function s(a) {
        t = a(e)
    }
    function o(a) {
        const {props: u} = e
          , d = vm(e.parent) || {}
          , f = []
          , h = new Set;
        let y = {}
          , v = 1 / 0;
        for (let k = 0; k < j1; k++) {
            const m = k1[k]
              , p = n[m]
              , g = u[m] !== void 0 ? u[m] : d[m]
              , w = Hr(g)
              , S = m === a ? p.isActive : null;
            S === !1 && (v = k);
            let T = g === d[m] && g !== u[m] && w;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
            p.protectedKeys = {
                ...y
            },
            !p.isActive && S === null || !g && !p.prevProp || Os(g) || typeof g == "boolean")
                continue;
            const C = C1(p.prevProp, g);
            let j = C || m === a && p.isActive && !T && w || k > v && w
              , b = !1;
            const D = Array.isArray(g) ? g : [g];
            let ie = D.reduce(i(m), {});
            S === !1 && (ie = {});
            const {prevResolvedValues: yt={}} = p
              , Ut = {
                ...yt,
                ...ie
            }
              , qn = te => {
                j = !0,
                h.has(te) && (b = !0,
                h.delete(te)),
                p.needsAnimating[te] = !0;
                const N = e.getValue(te);
                N && (N.liveStyle = !1)
            }
            ;
            for (const te in Ut) {
                const N = ie[te]
                  , R = yt[te];
                if (y.hasOwnProperty(te))
                    continue;
                let V = !1;
                Tl(N) && Tl(R) ? V = !Dp(N, R) : V = N !== R,
                V ? N != null ? qn(te) : h.add(te) : N !== void 0 && h.has(te) ? qn(te) : p.protectedKeys[te] = !0
            }
            p.prevProp = g,
            p.prevResolvedValues = ie,
            p.isActive && (y = {
                ...y,
                ...ie
            }),
            r && e.blockInitialAnimation && (j = !1),
            j && (!(T && C) || b) && f.push(...D.map(te => ({
                animation: te,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const k = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m)
                  , g = e.getValue(m);
                g && (g.liveStyle = !0),
                k[m] = p ?? null
            }
            ),
            f.push({
                animation: k
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(f) : Promise.resolve()
    }
    function l(a, u) {
        var d;
        if (n[a].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = o(a);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Jc(),
            r = !0
        }
    }
}
function C1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Dp(t, e) : !1
}
function Ht(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Jc() {
    return {
        animate: Ht(!0),
        whileInView: Ht(),
        whileHover: Ht(),
        whileTap: Ht(),
        whileDrag: Ht(),
        whileFocus: Ht(),
        exit: Ht()
    }
}
class Bt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class N1 extends Bt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = T1(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Os(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let E1 = 0;
class A1 extends Bt {
    constructor() {
        super(...arguments),
        this.id = E1++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const M1 = {
    animation: {
        Feature: N1
    },
    exit: {
        Feature: A1
    }
};
function Yr(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function ii(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const D1 = e => t => ru(t) && e(t, ii(t));
function Tr(e, t, n, r) {
    return Yr(e, t, D1(n), r)
}
const ed = (e, t) => Math.abs(e - t);
function R1(e, t) {
    const n = ed(e.x, t.x)
      , r = ed(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class xm {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Po(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , y = R1(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !y)
                return;
            const {point: v} = f
              , {timestamp: x} = ue;
            this.history.push({
                ...v,
                timestamp: x
            });
            const {onStart: k, onMove: m} = this.handlers;
            h || (k && k(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, h) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = jo(h, this.transformPagePoint),
            $.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, h) => {
            this.end();
            const {onEnd: y, onSessionEnd: v, resumeAnimation: x} = this.handlers;
            if (this.dragSnapToOrigin && x && x(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const k = Po(f.type === "pointercancel" ? this.lastMoveEventInfo : jo(h, this.transformPagePoint), this.history);
            this.startEvent && y && y(f, k),
            v && v(f, k)
        }
        ,
        !ru(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = ii(t)
          , l = jo(o, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = ue;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: d} = n;
        d && d(t, Po(l, this.history)),
        this.removeListeners = ri(Tr(this.contextWindow, "pointermove", this.handlePointerMove), Tr(this.contextWindow, "pointerup", this.handlePointerUp), Tr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        _t(this.updatePoint)
    }
}
function jo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function td(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Po({point: e}, t) {
    return {
        point: e,
        delta: td(e, wm(t)),
        offset: td(e, L1(t)),
        velocity: V1(t, .1)
    }
}
function L1(e) {
    return e[0]
}
function wm(e) {
    return e[e.length - 1]
}
function V1(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = wm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > ut(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = ct(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
const Sm = 1e-4
  , b1 = 1 - Sm
  , _1 = 1 + Sm
  , km = .01
  , I1 = 0 - km
  , F1 = 0 + km;
function Re(e) {
    return e.max - e.min
}
function O1(e, t, n) {
    return Math.abs(e - t) <= n
}
function nd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = K(t.min, t.max, e.origin),
    e.scale = Re(n) / Re(t),
    e.translate = K(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= b1 && e.scale <= _1 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= I1 && e.translate <= F1 || isNaN(e.translate)) && (e.translate = 0)
}
function Cr(e, t, n, r) {
    nd(e.x, t.x, n.x, r ? r.originX : void 0),
    nd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function rd(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Re(t)
}
function z1(e, t, n) {
    rd(e.x, t.x, n.x),
    rd(e.y, t.y, n.y)
}
function id(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Re(t)
}
function Nr(e, t, n) {
    id(e.x, t.x, n.x),
    id(e.y, t.y, n.y)
}
function B1(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
}
function sd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function U1(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: sd(e.x, n, i),
        y: sd(e.y, t, r)
    }
}
function od(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function $1(e, t) {
    return {
        x: od(e.x, t.x),
        y: od(e.y, t.y)
    }
}
function W1(e, t) {
    let n = .5;
    const r = Re(e)
      , i = Re(t);
    return i > r ? n = Wn(t.min, t.max - r, e.min) : r > i && (n = Wn(e.min, e.max - i, t.min)),
    mt(0, 1, n)
}
function H1(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const _l = .35;
function K1(e=_l) {
    return e === !1 ? e = 0 : e === !0 && (e = _l),
    {
        x: ld(e, "left", "right"),
        y: ld(e, "top", "bottom")
    }
}
function ld(e, t, n) {
    return {
        min: ad(e, t),
        max: ad(e, n)
    }
}
function ad(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ud = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , En = () => ({
    x: ud(),
    y: ud()
})
  , cd = () => ({
    min: 0,
    max: 0
})
  , q = () => ({
    x: cd(),
    y: cd()
});
function _e(e) {
    return [e("x"), e("y")]
}
function jm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function G1({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function Q1(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function To(e) {
    return e === void 0 || e === 1
}
function Il({scale: e, scaleX: t, scaleY: n}) {
    return !To(e) || !To(t) || !To(n)
}
function Qt(e) {
    return Il(e) || Pm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Pm(e) {
    return dd(e.x) || dd(e.y)
}
function dd(e) {
    return e && e !== "0%"
}
function ws(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function fd(e, t, n, r, i) {
    return i !== void 0 && (e = ws(e, i, r)),
    ws(e, n, r) + t
}
function Fl(e, t=0, n=1, r, i) {
    e.min = fd(e.min, t, n, r, i),
    e.max = fd(e.max, t, n, r, i)
}
function Tm(e, {x: t, y: n}) {
    Fl(e.x, t.translate, t.scale, t.originPoint),
    Fl(e.y, n.translate, n.scale, n.originPoint)
}
const hd = .999999999999
  , pd = 1.0000000000001;
function Y1(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const {visualElement: a} = s.options;
        a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Mn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        Tm(e, o)),
        r && Qt(s.latestValues) && Mn(e, s.latestValues))
    }
    t.x < pd && t.x > hd && (t.x = 1),
    t.y < pd && t.y > hd && (t.y = 1)
}
function An(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function md(e, t, n, r, i=.5) {
    const s = K(e.min, e.max, i);
    Fl(e, t, n, s, r)
}
function Mn(e, t) {
    md(e.x, t.x, t.scaleX, t.scale, t.originX),
    md(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Cm(e, t) {
    return jm(Q1(e.getBoundingClientRect(), t))
}
function X1(e, t, n) {
    const r = Cm(e, n)
      , {scroll: i} = t;
    return i && (An(r.x, i.offset.x),
    An(r.y, i.offset.y)),
    r
}
const Nm = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Z1 = new WeakMap;
class q1 {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = q(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = d => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ii(d).point)
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: y, onDragStart: v} = this.getProps();
            if (h && !y && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Wv(h),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            _e(k => {
                let m = this.getAxisMotionValue(k).get() || 0;
                if (nt.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const g = p.layout.layoutBox[k];
                        g && (m = Re(g) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[k] = m
            }
            ),
            v && $.postRender( () => v(d, f)),
            El(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , o = (d, f) => {
            const {dragPropagation: h, dragDirectionLock: y, onDirectionLock: v, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: k} = f;
            if (y && this.currentDirection === null) {
                this.currentDirection = J1(k),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, k),
            this.updateAxis("y", f.point, k),
            this.visualElement.render(),
            x && x(d, f)
        }
          , l = (d, f) => this.stop(d, f)
          , a = () => _e(d => {
            var f;
            return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new xm(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Nm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && $.postRender( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Ei(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = B1(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && Cn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = U1(i.layoutBox, n) : this.constraints = !1,
        this.elastic = K1(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && _e(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = H1(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Cn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = X1(r, i.root, this.visualElement.getTransformPagePoint());
        let o = $1(i.layout.layoutBox, s);
        if (n) {
            const l = n(G1(o));
            this.hasMutatedConstraints = !!l,
            l && (o = jm(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = _e(d => {
            if (!Ei(d, n, this.currentDirection))
                return;
            let f = a && a[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6
              , y = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: h,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(d, v)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return El(this.visualElement, t),
        r.start(mu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        _e(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        _e(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        _e(n => {
            const {drag: r} = this.getProps();
            if (!Ei(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(t[n] - K(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Cn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        _e(o => {
            const l = this.getAxisMotionValue(o);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[o] = W1({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        _e(o => {
            if (!Ei(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: a, max: u} = this.constraints[o];
            l.set(K(a, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Z1.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Tr(t, "pointerdown", a => {
            const {drag: u, dragListener: d=!0} = this.getProps();
            u && d && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Cn(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        $.read(r);
        const o = Yr(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (_e(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += a[d].translate,
                f.set(f.get() + a[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=_l, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function Ei(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function J1(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class ew extends Bt {
    constructor(t) {
        super(t),
        this.removeGroupControls = Me,
        this.removeListeners = Me,
        this.controls = new q1(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Me
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const gd = e => (t, n) => {
    e && $.postRender( () => e(t, n))
}
;
class tw extends Bt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Me
    }
    onPointerDown(t) {
        this.session = new xm(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Nm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: gd(t),
            onStart: gd(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && $.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Tr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const $i = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function yd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const lr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (M.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = yd(e, t.target.x)
          , r = yd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , nw = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = It.parse(e);
        if (i.length > 5)
            return r;
        const s = It.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= a;
        const u = K(l, a, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
class rw extends E.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        jv(iw),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        $i.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || $.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Wa.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Em(e) {
    const [t,n] = up()
      , r = E.useContext(_a);
    return c.jsx(rw, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: E.useContext(vp),
        isPresent: t,
        safeToRemove: n
    })
}
const iw = {
    borderRadius: {
        ...lr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: lr,
    borderTopRightRadius: lr,
    borderBottomLeftRadius: lr,
    borderBottomRightRadius: lr,
    boxShadow: nw
};
function sw(e, t, n) {
    const r = ge(e) ? e : Gr(e);
    return r.start(mu("", r, t, n)),
    r.animation
}
function ow(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const lw = (e, t) => e.depth - t.depth;
class aw {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        iu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        su(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(lw),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function uw(e, t) {
    const n = rt.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (_t(r),
        e(s - t))
    }
    ;
    return $.read(r, !0),
    () => _t(r)
}
const Am = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , cw = Am.length
  , vd = e => typeof e == "string" ? parseFloat(e) : e
  , xd = e => typeof e == "number" || M.test(e);
function dw(e, t, n, r, i, s) {
    i ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, fw(r)),
    e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, hw(r))) : s && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < cw; o++) {
        const l = `border${Am[o]}Radius`;
        let a = wd(t, l)
          , u = wd(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || xd(a) === xd(u) ? (e[l] = Math.max(K(vd(a), vd(u), r), 0),
        (nt.test(u) || nt.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function wd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const fw = Mm(0, .5, Qp)
  , hw = Mm(.5, .95, Me);
function Mm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Wn(e, t, r))
}
function Sd(e, t) {
    e.min = t.min,
    e.max = t.max
}
function be(e, t) {
    Sd(e.x, t.x),
    Sd(e.y, t.y)
}
function kd(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function jd(e, t, n, r, i) {
    return e -= t,
    e = ws(e, 1 / n, r),
    i !== void 0 && (e = ws(e, 1 / i, r)),
    e
}
function pw(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (nt.test(t) && (t = parseFloat(t),
    t = K(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = K(s.min, s.max, r);
    e === s && (l -= t),
    e.min = jd(e.min, t, n, l, i),
    e.max = jd(e.max, t, n, l, i)
}
function Pd(e, t, [n,r,i], s, o) {
    pw(e, t[n], t[r], t[i], t.scale, s, o)
}
const mw = ["x", "scaleX", "originX"]
  , gw = ["y", "scaleY", "originY"];
function Td(e, t, n, r) {
    Pd(e.x, t, mw, n ? n.x : void 0, r ? r.x : void 0),
    Pd(e.y, t, gw, n ? n.y : void 0, r ? r.y : void 0)
}
function Cd(e) {
    return e.translate === 0 && e.scale === 1
}
function Dm(e) {
    return Cd(e.x) && Cd(e.y)
}
function Nd(e, t) {
    return e.min === t.min && e.max === t.max
}
function yw(e, t) {
    return Nd(e.x, t.x) && Nd(e.y, t.y)
}
function Ed(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Rm(e, t) {
    return Ed(e.x, t.x) && Ed(e.y, t.y)
}
function Ad(e) {
    return Re(e.x) / Re(e.y)
}
function Md(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class vw {
    constructor() {
        this.members = []
    }
    add(t) {
        iu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (su(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function xw(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: d, rotateX: f, rotateY: h, skewX: y, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        f && (r += `rotateX(${f}deg) `),
        h && (r += `rotateY(${h}deg) `),
        y && (r += `skewX(${y}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const Yt = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , pr = typeof window < "u" && window.MotionDebug !== void 0
  , Co = ["", "X", "Y", "Z"]
  , ww = {
    visibility: "hidden"
}
  , Dd = 1e3;
let Sw = 0;
function No(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Lm(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Bp(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", $, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Lm(r)
}
function Vm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = Sw++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                pr && (Yt.totalNodes = Yt.resolvedTargetDeltas = Yt.recalculatedProjection = 0),
                this.nodes.forEach(Pw),
                this.nodes.forEach(Aw),
                this.nodes.forEach(Mw),
                this.nodes.forEach(Tw),
                pr && window.MotionDebug.record(Yt)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new aw)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ou),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = ow(o),
            this.instance = o;
            const {layoutId: a, layout: u, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = uw(h, 250),
                    $i.hasAnimatedSinceResize && ($i.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ld))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && d && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: y, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || d.getDefaultTransition() || bw
                  , {onLayoutAnimationStart: k, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !Rm(this.targetLayout, v) || y
                  , g = !h && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, g);
                    const w = {
                        ...eu(x, "layout"),
                        onPlay: k,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    h || Ld(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            _t(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Dw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Lm(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Rd);
                return
            }
            this.isUpdating || this.nodes.forEach(Nw),
            this.isUpdating = !1,
            this.nodes.forEach(Ew),
            this.nodes.forEach(kw),
            this.nodes.forEach(jw),
            this.clearAllSnapshots();
            const l = rt.now();
            ue.delta = mt(0, 1e3 / 60, l - ue.timestamp),
            ue.timestamp = l,
            ue.isProcessing = !0,
            yo.update.process(ue),
            yo.preRender.process(ue),
            yo.render.process(ue),
            ue.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Wa.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Cw),
            this.sharedNodes.forEach(Rw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            $.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            $.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = q(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !Dm(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , d = u !== this.prevTransformTemplateValue;
            o && (l || Qt(this.latestValues) || d) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)),
            _w(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: l} = this.options;
            if (!l)
                return q();
            const a = l.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(Iw))) {
                const {scroll: d} = this.root;
                d && (An(a.x, d.offset.x),
                An(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = q();
            if (be(a, o),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u]
                  , {scroll: f, options: h} = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && be(a, o),
                An(a.x, f.offset.x),
                An(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, l=!1) {
            const a = q();
            be(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !l && d.options.layoutScroll && d.scroll && d !== d.root && Mn(a, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                Qt(d.latestValues) && Mn(a, d.latestValues)
            }
            return Qt(this.latestValues) && Mn(a, this.latestValues),
            a
        }
        removeTransform(o) {
            const l = q();
            be(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !Qt(u.latestValues))
                    continue;
                Il(u.latestValues) && u.updateSnapshot();
                const d = q()
                  , f = u.measurePageBox();
                be(d, f),
                Td(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Qt(this.latestValues) && Td(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: h} = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = ue.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = q(),
                    this.relativeTargetOrigin = q(),
                    Nr(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                    be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = q(),
                    this.targetWithTransforms = q()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    z1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : be(this.target, this.layout.layoutBox),
                    Tm(this.target, this.targetDelta)) : be(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = q(),
                        this.relativeTargetOrigin = q(),
                        Nr(this.relativeTargetOrigin, this.target, y.target),
                        be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    pr && Yt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Il(this.parent.latestValues) || Pm(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ue.timestamp && (u = !1),
            u)
                return;
            const {layout: d, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || f))
                return;
            be(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , y = this.treeScale.y;
            Y1(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = q());
            const {target: v} = l;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (kd(this.prevProjectionDelta.x, this.projectionDelta.x),
            kd(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Cr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== y || !Md(this.projectionDelta.x, this.prevProjectionDelta.x) || !Md(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
            pr && Yt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = En(),
            this.projectionDelta = En(),
            this.projectionDeltaWithTransform = En()
        }
        setAnimationOrigin(o, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , f = En();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const h = q()
              , y = a ? a.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , x = y !== v
              , k = this.getStack()
              , m = !k || k.members.length <= 1
              , p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(Vw));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                Vd(f.x, o.x, S),
                Vd(f.y, o.y, S),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Nr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                Lw(this.relativeTarget, this.relativeTargetOrigin, h, S),
                g && yw(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = q()),
                be(g, this.relativeTarget)),
                x && (this.animationValues = d,
                dw(d, u, this.latestValues, S, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = S
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (_t(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = $.update( () => {
                $i.hasAnimatedSinceResize = !0,
                this.currentAnimation = sw(0, Dd, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Dd),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: d} = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && bm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || q();
                    const f = Re(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min,
                    a.x.max = a.x.min + f;
                    const h = Re(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min,
                    a.y.max = a.y.min + h
                }
                be(l, a),
                Mn(l, d),
                Cr(this.projectionDeltaWithTransform, this.layoutCorrected, l, d)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new vw),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: a} = o;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && No("z", o, u, this.animationValues);
            for (let d = 0; d < Co.length; d++)
                No(`rotate${Co[d]}`, o, u, this.animationValues),
                No(`skew${Co[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u)
                o.setStaticValue(d, u[d]),
                this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return ww;
            const u = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Bi(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = d ? d(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                x.pointerEvents = Bi(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !Qt(this.latestValues) && (x.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                x
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = xw(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (u.transform = d(h, u.transform));
            const {x: y, y: v} = this.projectionDelta;
            u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const x in ms) {
                if (h[x] === void 0)
                    continue;
                const {correct: k, applyTo: m} = ms[x]
                  , p = u.transform === "none" ? h[x] : k(h[x], f);
                if (m) {
                    const g = m.length;
                    for (let w = 0; w < g; w++)
                        u[m[w]] = p
                } else
                    u[x] = p
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Bi(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(Rd),
            this.root.sharedNodes.clear()
        }
    }
}
function kw(e) {
    e.updateLayout()
}
function jw(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? _e(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , y = Re(h);
            h.min = r[f].min,
            h.max = h.min + y
        }
        ) : bm(s, n.layoutBox, r) && _e(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , y = Re(r[f]);
            h.max = h.min + y,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        }
        );
        const l = En();
        Cr(l, r, n.layoutBox);
        const a = En();
        o ? Cr(a, e.applyTransform(i, !0), n.measuredBox) : Cr(a, r, n.layoutBox);
        const u = !Dm(l);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: h, layout: y} = f;
                if (h && y) {
                    const v = q();
                    Nr(v, n.layoutBox, h.layoutBox);
                    const x = q();
                    Nr(x, r, y.layoutBox),
                    Rm(v, x) || (d = !0),
                    f.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function Pw(e) {
    pr && Yt.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Tw(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Cw(e) {
    e.clearSnapshot()
}
function Rd(e) {
    e.clearMeasurements()
}
function Nw(e) {
    e.isLayoutDirty = !1
}
function Ew(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ld(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Aw(e) {
    e.resolveTargetDelta()
}
function Mw(e) {
    e.calcProjection()
}
function Dw(e) {
    e.resetSkewAndRotation()
}
function Rw(e) {
    e.removeLeadSnapshot()
}
function Vd(e, t, n) {
    e.translate = K(t.translate, 0, n),
    e.scale = K(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function bd(e, t, n, r) {
    e.min = K(t.min, n.min, r),
    e.max = K(t.max, n.max, r)
}
function Lw(e, t, n, r) {
    bd(e.x, t.x, n.x, r),
    bd(e.y, t.y, n.y, r)
}
function Vw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const bw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , _d = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Id = _d("applewebkit/") && !_d("chrome/") ? Math.round : Me;
function Fd(e) {
    e.min = Id(e.min),
    e.max = Id(e.max)
}
function _w(e) {
    Fd(e.x),
    Fd(e.y)
}
function bm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !O1(Ad(t), Ad(n), .2)
}
function Iw(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const Fw = Vm({
    attachResizeListener: (e, t) => Yr(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Eo = {
    current: void 0
}
  , _m = Vm({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Eo.current) {
            const e = new Fw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Eo.current = e
        }
        return Eo.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Ow = {
    pan: {
        Feature: tw
    },
    drag: {
        Feature: ew,
        ProjectionNode: _m,
        MeasureLayout: Em
    }
};
function Od(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && $.postRender( () => s(t, ii(t)))
}
class zw extends Bt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Ov(t, n => (Od(this.node, n, "Start"),
        r => Od(this.node, r, "End"))))
    }
    unmount() {}
}
class Bw extends Bt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ri(Yr(this.node.current, "focus", () => this.onFocus()), Yr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function zd(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && $.postRender( () => s(t, ii(t)))
}
class Uw extends Bt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = $v(t, n => (zd(this.node, n, "Start"),
        (r, {success: i}) => zd(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ol = new WeakMap
  , Ao = new WeakMap
  , $w = e => {
    const t = Ol.get(e.target);
    t && t(e)
}
  , Ww = e => {
    e.forEach($w)
}
;
function Hw({root: e, ...t}) {
    const n = e || document;
    Ao.has(n) || Ao.set(n, {});
    const r = Ao.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Ww,{
        root: e,
        ...t
    })),
    r[i]
}
function Kw(e, t, n) {
    const r = Hw(t);
    return Ol.set(e, n),
    r.observe(e),
    () => {
        Ol.delete(e),
        r.unobserve(e)
    }
}
const Gw = {
    some: 0,
    all: 1
};
class Qw extends Bt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Gw[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: d, onViewportLeave: f} = this.node.getProps()
              , h = u ? d : f;
            h && h(a)
        }
        ;
        return Kw(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Yw(t, n)) && this.startObserver()
    }
    unmount() {}
}
function Yw({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Xw = {
    inView: {
        Feature: Qw
    },
    tap: {
        Feature: Uw
    },
    focus: {
        Feature: Bw
    },
    hover: {
        Feature: zw
    }
}
  , Zw = {
    layout: {
        ProjectionNode: _m,
        MeasureLayout: Em
    }
}
  , zl = {
    current: null
}
  , Im = {
    current: !1
};
function qw() {
    if (Im.current = !0,
    !!Oa)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => zl.current = e.matches;
            e.addListener(t),
            t()
        } else
            zl.current = !1
}
const Jw = [...am, pe, It]
  , e2 = e => Jw.find(lm(e))
  , Bd = new WeakMap;
function t2(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (ge(i))
            e.addValue(r, i);
        else if (ge(s))
            e.addValue(r, Gr(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Gr(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Ud = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class n2 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = fu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const y = rt.now();
            this.renderScheduledAt < y && (this.renderScheduledAt = y,
            $.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: u, onUpdate: d} = o;
        this.onUpdate = d,
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = zs(n),
        this.isVariantNode = gp(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const y in h) {
            const v = h[y];
            a[y] !== void 0 && ge(v) && v.set(a[y], !1)
        }
    }
    mount(t) {
        this.current = t,
        Bd.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Im.current || qw(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : zl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Bd.delete(this.current),
        this.projection && this.projection.unmount(),
        _t(this.notifyUpdate),
        _t(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = fn.has(t)
          , i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && $.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Hn) {
            const n = Hn[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : q()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Ud.length; r++) {
            const i = Ud[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = t2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Gr(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (sm(i) || Xp(i)) ? i = parseFloat(i) : !e2(i) && It.test(n) && (i = nm(t, n)),
        this.setBaseTarget(t, ge(i) ? i.get() : i)),
        ge(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = Ka(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !ge(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new ou),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Fm extends n2 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = um
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ge(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function r2(e) {
    return window.getComputedStyle(e)
}
class i2 extends Fm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Tp
    }
    readValueFromInstance(t, n) {
        if (fn.has(n)) {
            const r = du(n);
            return r && r.default || 0
        } else {
            const r = r2(t)
              , i = (kp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Cm(t, n)
    }
    build(t, n, r) {
        Ya(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Ja(t, n, r)
    }
}
class s2 extends Fm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = q
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (fn.has(n)) {
            const r = du(n);
            return r && r.default || 0
        }
        return n = Cp.has(n) ? n : $a(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Ap(t, n, r)
    }
    build(t, n, r) {
        Xa(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Np(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = qa(t.tagName),
        super.mount(t)
    }
}
const o2 = (e, t) => Ha(e) ? new s2(t) : new i2(t,{
    allowProjection: e !== E.Fragment
})
  , l2 = Rv({
    ...M1,
    ...Xw,
    ...Ow,
    ...Zw
}, o2)
  , L = Gy(l2)
  , Om = "https://get.reply.io/2jfjwcl0a1d3"
  , gu = "#0c043f"
  , $d = [{
    name: "Features",
    href: "#features"
}, {
    name: "How It Works",
    href: "#solutions"
}, {
    name: "Testimonials",
    href: "#testimonials"
}, {
    name: "Pricing",
    href: "#pricing"
}]
  , Mo = ["Adobe", "Salesforce", "HubSpot", "Zendesk", "Intercom", "Dropbox", "Slack", "Asana"]
  , rn = ({children: e, variant: t="primary", className: n="", fullWidth: r=!1}) => {
    const i = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
      , s = {
        primary: "text-white hover:shadow-lg hover:scale-105",
        outline: "border-2 border-gray-200 text-gray-700 hover:border-brand hover:text-brand bg-transparent",
        ghost: "text-gray-600 hover:text-brand bg-transparent hover:bg-gray-50",
        white: "bg-white text-brand hover:bg-gray-100 shadow-lg hover:scale-105"
    }
      , o = t === "primary" ? {
        backgroundColor: gu
    } : {};
    return c.jsx(L.a, {
        href: Om,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${i} ${s[t]} ${r ? "w-full" : ""} ${n}`,
        style: o,
        whileTap: {
            scale: .95
        },
        children: e
    })
}
  , a2 = () => {
    const [e,t] = E.useState(!1)
      , [n,r] = E.useState(!1);
    return E.useEffect( () => {
        const i = () => {
            t(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", i),
        () => window.removeEventListener("scroll", i)
    }
    , []),
    c.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`,
        children: [c.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center",
            children: [c.jsxs("div", {
                className: "flex items-center gap-2 cursor-pointer",
                children: [c.jsx("div", {
                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                    style: {
                        backgroundColor: gu
                    },
                    children: c.jsx("span", {
                        className: "text-white font-bold text-lg",
                        children: "R"
                    })
                }), c.jsx("span", {
                    className: "text-xl font-bold tracking-tight text-slate-900",
                    children: "ReplyLeadGen"
                })]
            }), c.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [$d.map(i => c.jsx("a", {
                    href: i.href,
                    className: "text-sm font-medium text-slate-600 hover:text-brand transition-colors",
                    children: i.name
                }, i.name)), c.jsx(rn, {
                    variant: "outline",
                    className: "!py-2 !px-4 text-sm",
                    children: "Log in"
                }), c.jsx(rn, {
                    className: "!py-2 !px-4 text-sm shadow-brand/20 shadow-lg",
                    children: "Try for Free"
                })]
            }), c.jsx("div", {
                className: "md:hidden",
                children: c.jsx("button", {
                    onClick: () => r(!n),
                    children: n ? c.jsx(by, {
                        className: "text-slate-800"
                    }) : c.jsx(jy, {
                        className: "text-slate-800"
                    })
                })
            })]
        }), n && c.jsxs("div", {
            className: "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl",
            children: [$d.map(i => c.jsx("a", {
                href: i.href,
                className: "text-base font-medium text-slate-600 hover:text-brand",
                onClick: () => r(!1),
                children: i.name
            }, i.name)), c.jsx(rn, {
                fullWidth: !0,
                children: "Get Started Free"
            })]
        })]
    })
}
  , u2 = () => c.jsxs("section", {
    className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",
    children: [c.jsxs("div", {
        className: "absolute inset-0 perspective-container pointer-events-none -z-10",
        children: [c.jsx("div", {
            className: "moving-grid"
        }), c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white/80 opacity-80"
        }), c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent opacity-90 h-32"
        })]
    }), c.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
        children: [c.jsxs(L.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5
            },
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-brand font-medium text-sm mb-8 shadow-sm cursor-pointer hover:shadow-md transition-shadow",
            children: [c.jsxs("span", {
                className: "flex h-2 w-2 relative",
                children: [c.jsx("span", {
                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                }), c.jsx("span", {
                    className: "relative inline-flex rounded-full h-2 w-2 bg-blue-500"
                })]
            }), "New: AI Sales Assistant for 2025"]
        }), c.jsxs(L.h1, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5,
                delay: .1
            },
            className: "text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 relative",
            children: ["Create Opportunities ", c.jsx("br", {
                className: "hidden md:block"
            }), c.jsxs("span", {
                className: "relative inline-block px-3 mx-1 align-bottom",
                children: [c.jsx(L.span, {
                    className: "absolute inset-0 bg-[#3b82f6] rounded-md -skew-x-3",
                    initial: {
                        scaleX: 0
                    },
                    animate: {
                        scaleX: 1
                    },
                    transition: {
                        delay: .5,
                        duration: .6,
                        ease: "circOut"
                    },
                    style: {
                        originX: 0
                    }
                }), c.jsx("span", {
                    className: "relative text-white z-10",
                    children: "At Scale"
                })]
            }), " with AI"]
        }), c.jsxs(L.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5,
                delay: .2
            },
            className: "text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed",
            children: ["Automate your cold outreach with the AI-first sales engagement platform. Find prospects, engage across multiple channels, and close more deals.", c.jsx("br", {}), c.jsx(L.span, {
                animate: {
                    scale: [1, 1.02, 1]
                },
                transition: {
                    repeat: 1 / 0,
                    duration: 2.5,
                    ease: "easeInOut"
                },
                className: "inline-block mt-3 font-bold text-brand bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100",
                children: "Save 10% on your first month with our partner link."
            })]
        }), c.jsxs(L.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .5,
                delay: .3
            },
            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
            children: [c.jsxs(rn, {
                className: "h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-brand/20",
                children: ["Try for Free", c.jsx(ba, {
                    size: 20
                })]
            }), c.jsxs(rn, {
                variant: "outline",
                className: "h-14 px-8 text-lg w-full sm:w-auto bg-white/50 backdrop-blur-sm",
                children: [c.jsx(Cy, {
                    size: 18,
                    className: "mr-2 fill-current"
                }), "See How It Works"]
            })]
        }), c.jsxs(L.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: .5,
                delay: .5
            },
            className: "mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500",
            children: [c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx(Nc, {
                    size: 16,
                    className: "text-brand"
                }), c.jsx("span", {
                    children: "No credit card required"
                })]
            }), c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx(Nc, {
                    size: 16,
                    className: "text-brand"
                }), c.jsx("span", {
                    children: "14-day free trial"
                })]
            }), c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx("div", {
                    className: "flex -space-x-2",
                    children: [1, 2, 3].map(e => c.jsx("div", {
                        className: "w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] overflow-hidden",
                        children: c.jsx("img", {
                            src: `https://i.pravatar.cc/100?img=${e + 10}`,
                            alt: "user",
                            className: "w-full h-full object-cover"
                        })
                    }, e))
                }), c.jsx("span", {
                    children: "Trusted by 2500+ teams"
                })]
            })]
        }), c.jsxs(L.div, {
            initial: {
                opacity: 0,
                y: 60,
                scale: .95
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            transition: {
                duration: .8,
                delay: .4,
                type: "spring",
                bounce: .3
            },
            className: "mt-20 relative mx-auto max-w-5xl",
            children: [c.jsx(L.div, {
                animate: {
                    y: [0, -15, 0]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                children: c.jsxs("div", {
                    className: "bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden relative z-10",
                    children: [c.jsxs("div", {
                        className: "bg-slate-50 border-b border-slate-100 h-10 flex items-center px-4 gap-2",
                        children: [c.jsxs("div", {
                            className: "flex gap-2",
                            children: [c.jsx("div", {
                                className: "w-3 h-3 rounded-full bg-red-400/80"
                            }), c.jsx("div", {
                                className: "w-3 h-3 rounded-full bg-amber-400/80"
                            }), c.jsx("div", {
                                className: "w-3 h-3 rounded-full bg-green-400/80"
                            })]
                        }), c.jsx("div", {
                            className: "mx-auto w-1/3 h-5 bg-white rounded-md shadow-sm border border-slate-100"
                        })]
                    }), c.jsxs("div", {
                        className: "flex h-[400px] md:h-[500px]",
                        children: [c.jsxs("div", {
                            className: "hidden md:flex w-64 bg-slate-50/50 border-r border-slate-100 flex-col p-4 gap-4",
                            children: [c.jsx("div", {
                                className: "h-8 w-32 bg-slate-200/50 rounded animate-pulse"
                            }), c.jsx("div", {
                                className: "space-y-2 mt-4",
                                children: [1, 2, 3, 4, 5].map(e => c.jsxs("div", {
                                    className: "h-8 w-full bg-white rounded border border-slate-100 flex items-center px-3 gap-3",
                                    children: [c.jsx("div", {
                                        className: "w-4 h-4 bg-slate-100 rounded"
                                    }), c.jsx("div", {
                                        className: "w-20 h-2 bg-slate-100 rounded"
                                    })]
                                }, e))
                            })]
                        }), c.jsxs("div", {
                            className: "flex-1 p-6 md:p-8 bg-white relative",
                            children: [c.jsxs("div", {
                                className: "flex gap-4 mb-8",
                                children: [c.jsxs("div", {
                                    className: "flex-1 h-24 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4",
                                    children: [c.jsx("div", {
                                        className: "w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mb-2",
                                        children: c.jsx(lp, {
                                            size: 16
                                        })
                                    }), c.jsx("div", {
                                        className: "h-2 w-16 bg-blue-100 rounded mb-1"
                                    }), c.jsx("div", {
                                        className: "h-6 w-12 bg-slate-800 rounded"
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex-1 h-24 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-4",
                                    children: [c.jsx("div", {
                                        className: "w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center mb-2",
                                        children: c.jsx(yy, {
                                            size: 16
                                        })
                                    }), c.jsx("div", {
                                        className: "h-2 w-16 bg-purple-100 rounded mb-1"
                                    }), c.jsx("div", {
                                        className: "h-6 w-12 bg-slate-800 rounded"
                                    })]
                                }), c.jsx("div", {
                                    className: "flex-1 hidden sm:block h-24 rounded-xl bg-white border border-slate-100 p-4",
                                    children: c.jsx("div", {
                                        className: "w-full h-full bg-slate-50 rounded animate-pulse"
                                    })
                                })]
                            }), c.jsxs("div", {
                                className: "h-64 w-full bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-10",
                                children: [c.jsx("div", {
                                    className: "absolute top-4 left-4 text-xs font-bold text-slate-400",
                                    children: "CAMPAIGN PERFORMANCE"
                                }), [30, 45, 35, 60, 50, 75, 65, 90].map( (e, t) => c.jsx(L.div, {
                                    initial: {
                                        height: 0
                                    },
                                    animate: {
                                        height: `${e}%`
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: .8 + t * .1
                                    },
                                    className: "w-[8%] bg-brand/10 rounded-t-md relative group hover:bg-brand/20 transition-colors",
                                    children: c.jsxs("div", {
                                        className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                        children: [e * 12, " Replies"]
                                    })
                                }, t)), c.jsx("svg", {
                                    className: "absolute top-0 left-0 w-full h-full pointer-events-none p-4",
                                    viewBox: "0 0 100 100",
                                    preserveAspectRatio: "none",
                                    children: c.jsx(L.path, {
                                        initial: {
                                            pathLength: 0
                                        },
                                        animate: {
                                            pathLength: 1
                                        },
                                        transition: {
                                            duration: 2,
                                            delay: 1,
                                            ease: "easeInOut"
                                        },
                                        d: "M0,70 Q10,60 20,65 T40,40 T60,50 T80,20 T100,10",
                                        fill: "none",
                                        stroke: "#3b82f6",
                                        strokeWidth: "0.5"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }), c.jsx(L.div, {
                initial: {
                    x: 50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1,
                    y: [0, -10, 0]
                },
                transition: {
                    x: {
                        delay: 2,
                        duration: .5
                    },
                    opacity: {
                        delay: 2,
                        duration: .5
                    },
                    y: {
                        delay: 2.2,
                        duration: 5,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                },
                className: "absolute -right-4 top-20 md:-right-12 md:top-32 bg-white rounded-xl shadow-2xl border border-green-100 p-4 z-20 max-w-[260px]",
                children: c.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [c.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600",
                        children: c.jsx(ip, {
                            size: 20
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("h4", {
                            className: "font-bold text-slate-900 text-sm",
                            children: "Meeting Booked!"
                        }), c.jsxs("p", {
                            className: "text-xs text-slate-500 mt-1",
                            children: ["Jason AI just booked a demo with ", c.jsx("span", {
                                className: "font-semibold text-slate-700",
                                children: "Acme Corp"
                            }), "."]
                        }), c.jsx("div", {
                            className: "mt-2 flex items-center gap-2",
                            children: c.jsx("span", {
                                className: "text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded font-medium",
                                children: "2 min ago"
                            })
                        })]
                    })]
                })
            }), c.jsxs(L.div, {
                initial: {
                    x: -50,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1,
                    y: [0, 8, 0]
                },
                transition: {
                    x: {
                        delay: 3,
                        duration: .5
                    },
                    opacity: {
                        delay: 3,
                        duration: .5
                    },
                    y: {
                        delay: 3.5,
                        duration: 6,
                        repeat: 1 / 0,
                        ease: "easeInOut"
                    }
                },
                className: "absolute -left-4 bottom-20 md:-left-12 md:bottom-32 bg-white rounded-xl shadow-2xl border border-blue-100 p-3 z-20 flex items-center gap-3",
                children: [c.jsxs("div", {
                    className: "relative",
                    children: [c.jsx("img", {
                        src: "https://i.pravatar.cc/100?img=33",
                        alt: "Prospect",
                        className: "w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    }), c.jsx("div", {
                        className: "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
                    })]
                }), c.jsxs("div", {
                    children: [c.jsx("div", {
                        className: "text-xs font-semibold text-slate-900",
                        children: "Sarah from TechLink"
                    }), c.jsx("div", {
                        className: "text-[10px] text-slate-500",
                        children: 'Replied: "Sounds interesting..."'
                    })]
                })]
            })]
        })]
    })]
})
  , c2 = () => c.jsxs("div", {
    className: "py-10 bg-white border-y border-gray-100 overflow-hidden",
    children: [c.jsx("div", {
        className: "max-w-7xl mx-auto px-4 mb-8 text-center",
        children: c.jsx("p", {
            className: "text-sm font-semibold text-slate-400 uppercase tracking-wider",
            children: "Trusted by 2,500+ innovative sales teams"
        })
    }), c.jsxs("div", {
        className: "flex overflow-hidden relative",
        children: [c.jsx(L.div, {
            className: "flex gap-16 items-center whitespace-nowrap",
            animate: {
                x: "-50%"
            },
            transition: {
                duration: 20,
                ease: "linear",
                repeat: 1 / 0
            },
            children: [...Mo, ...Mo, ...Mo].map( (e, t) => c.jsx("div", {
                className: "text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default select-none",
                children: e
            }, t))
        }), c.jsx("div", {
            className: "absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"
        }), c.jsx("div", {
            className: "absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"
        })]
    })]
})
  , d2 = [{
    icon: c.jsx(op, {
        className: "w-6 h-6 text-blue-600"
    }),
    title: "Multichannel Outreach",
    description: "Combine emails, follow-ups, calls, SMS, and WhatsApp into a single sequence."
}, {
    icon: c.jsx(ap, {
        className: "w-6 h-6 text-amber-500"
    }),
    title: "AI SDR Assistant",
    description: "Jason AI writes emails, handles responses, and books meetings for you automatically."
}, {
    icon: c.jsx(Vy, {
        className: "w-6 h-6 text-green-600"
    }),
    title: "B2B Data Database",
    description: "Access a database of 140M+ verified contacts with emails and phone numbers."
}, {
    icon: c.jsx(gy, {
        className: "w-6 h-6 text-purple-600"
    }),
    title: "Advanced Reporting",
    description: "Track open rates, reply rates, and meeting bookings with granular analytics."
}, {
    icon: c.jsx(Sy, {
        className: "w-6 h-6 text-cyan-600"
    }),
    title: "Agency Solutions",
    description: "Manage multiple clients from a single dashboard with unlimited mailboxes."
}, {
    icon: c.jsx(lp, {
        className: "w-6 h-6 text-pink-600"
    }),
    title: "Unified Inbox",
    description: "Manage all prospect conversations from different channels in one centralized place."
}]
  , f2 = () => c.jsx("section", {
    id: "features",
    className: "py-24 bg-white/50 backdrop-blur-sm scroll-mt-28",
    children: c.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [c.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [c.jsx("h2", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Everything you need to grow revenue"
            }), c.jsx("p", {
                className: "text-lg text-slate-600",
                children: "From finding prospects to closing deals, our platform handles the heavy lifting so you can focus on selling."
            })]
        }), c.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: d2.map( (e, t) => c.jsxs("div", {
                className: "bg-white/80 backdrop-blur p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                children: [c.jsx("div", {
                    className: "w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6",
                    children: e.icon
                }), c.jsx("h3", {
                    className: "text-xl font-bold text-slate-900 mb-3",
                    children: e.title
                }), c.jsx("p", {
                    className: "text-slate-600 leading-relaxed",
                    children: e.description
                })]
            }, t))
        })]
    })
})
  , Do = ({title: e, subtitle: t, description: n, features: r, imageComponent: i, align: s="left", badge: o}) => c.jsx("div", {
    className: "py-24 border-b border-slate-100 last:border-0",
    children: c.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: c.jsxs("div", {
            className: `flex flex-col lg:flex-row items-center gap-16 ${s === "right" ? "lg:flex-row-reverse" : ""}`,
            children: [c.jsxs("div", {
                className: "flex-1",
                children: [o && c.jsx("span", {
                    className: "inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full",
                    children: o
                }), c.jsx("h3", {
                    className: "text-3xl md:text-4xl font-bold text-slate-900 mb-2",
                    children: e
                }), c.jsx("h4", {
                    className: "text-xl text-brand font-medium mb-6",
                    children: t
                }), c.jsx("p", {
                    className: "text-lg text-slate-600 mb-8 leading-relaxed",
                    children: n
                }), c.jsx("div", {
                    className: "grid sm:grid-cols-2 gap-4 mb-8",
                    children: r.map( (l, a) => c.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [c.jsx("div", {
                            className: "mt-1 min-w-[20px]",
                            children: c.jsx(sp, {
                                size: 20,
                                className: "text-green-500"
                            })
                        }), c.jsx("span", {
                            className: "text-slate-700 font-medium text-sm",
                            children: l
                        })]
                    }, a))
                }), c.jsxs(rn, {
                    variant: "outline",
                    className: "group",
                    children: ["Learn More ", c.jsx(ba, {
                        size: 16,
                        className: "group-hover:translate-x-1 transition-transform"
                    })]
                })]
            }), c.jsx("div", {
                className: "flex-1 w-full",
                children: c.jsxs(L.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-2xl p-2 sm:p-6",
                    children: [i, c.jsx("div", {
                        className: "absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                    }), c.jsx("div", {
                        className: "absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                    })]
                })
            })]
        })
    })
})
  , h2 = () => c.jsxs("section", {
    className: "bg-white relative overflow-hidden",
    children: [c.jsx(Do, {
        align: "left",
        badge: "Real-Time Data",
        title: "Find the Right People, Not Just Any People.",
        subtitle: "Precision Prospecting Powered by Generect",
        description: "Build laser-focused lists to connect with an audience that truly resonates. Access over 1 billion global contacts with real-time data and intent signals to keep your outreach sharp and effective.",
        features: ["Smart Audience Suggestions", "1 Billion+ Global Contacts", "Email Search Extension (LinkedIn/Gmail)", "Real-time Data Enrichment"],
        imageComponent: c.jsxs("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden",
            children: [c.jsxs("div", {
                className: "bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-between",
                children: [c.jsx("div", {
                    className: "text-xs font-semibold text-slate-500 uppercase",
                    children: "B2B Database"
                }), c.jsxs("div", {
                    className: "flex gap-2",
                    children: [c.jsx("div", {
                        className: "h-2 w-2 rounded-full bg-slate-300"
                    }), c.jsx("div", {
                        className: "h-2 w-2 rounded-full bg-slate-300"
                    })]
                })]
            }), c.jsxs("div", {
                className: "p-4 space-y-3",
                children: [[1, 2, 3].map(e => c.jsxs("div", {
                    className: "flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100 cursor-pointer",
                    children: [c.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-bold",
                        children: e === 1 ? "JD" : e === 2 ? "SM" : "AR"
                    }), c.jsxs("div", {
                        className: "flex-1",
                        children: [c.jsx("div", {
                            className: "h-2.5 bg-slate-800 rounded w-1/3 mb-1.5"
                        }), c.jsx("div", {
                            className: "h-2 bg-slate-300 rounded w-1/2"
                        })]
                    }), c.jsxs("div", {
                        className: "flex gap-2",
                        children: [c.jsx("span", {
                            className: "px-2 py-1 bg-green-100 text-green-700 text-[10px] rounded font-medium",
                            children: "Verified"
                        }), c.jsx("span", {
                            className: "px-2 py-1 bg-amber-100 text-amber-700 text-[10px] rounded font-medium",
                            children: "Intent High"
                        })]
                    })]
                }, e)), c.jsx("div", {
                    className: "mt-4 pt-3 border-t border-slate-100 text-center",
                    children: c.jsx("span", {
                        className: "text-xs text-slate-400",
                        children: "Powered by Generect Data Provider"
                    })
                })]
            })]
        })
    }), c.jsx(Do, {
        align: "right",
        badge: "Multichannel Outreach",
        title: "Engage Across Every Channel.",
        subtitle: "AI-Generated Conditional Sequences",
        description: "Engage with your prospects on their terms, not just in their inbox. AI personalizes interaction across Email, Social Media, Calls, WhatsApp, and more. Combine them into dynamic conditional sequences.",
        features: ["AI-Generated Sequences", "Personalized AI Variables", "Unified Inbox for All Channels", "Conditional Logic Steps"],
        imageComponent: c.jsxs("div", {
            className: "relative h-[400px] w-full flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden",
            children: [c.jsxs("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
                children: [c.jsx("div", {
                    className: "w-20 h-20 bg-brand rounded-2xl flex items-center justify-center shadow-2xl shadow-brand/30 border-4 border-white",
                    children: c.jsx(ap, {
                        className: "text-white w-10 h-10"
                    })
                }), c.jsx("div", {
                    className: "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",
                    children: c.jsx("span", {
                        className: "text-xs font-bold text-slate-400 uppercase tracking-widest",
                        children: "Reply Core"
                    })
                })]
            }), c.jsx("div", {
                className: "absolute w-[280px] h-[280px] border border-dashed border-slate-300/60 rounded-full animate-[spin_30s_linear_infinite]"
            }), c.jsx("div", {
                className: "absolute w-[450px] h-[450px] border border-slate-200/40 rounded-full opacity-50"
            }), c.jsx(L.div, {
                animate: {
                    y: [0, -15, 0]
                },
                transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute top-[20%] left-[20%] z-20",
                children: c.jsxs("div", {
                    className: "bg-white p-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "bg-[#0077b5]/10 p-2 rounded-lg",
                        children: c.jsx(ky, {
                            size: 20,
                            className: "text-[#0077b5]"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "text-xs font-bold text-slate-700",
                            children: "LinkedIn"
                        }), c.jsx("div", {
                            className: "text-[10px] text-slate-400",
                            children: "Connection Request"
                        })]
                    })]
                })
            }), c.jsx(L.div, {
                animate: {
                    y: [0, 15, 0]
                },
                transition: {
                    duration: 5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1
                },
                className: "absolute top-[15%] right-[20%] z-20",
                children: c.jsxs("div", {
                    className: "bg-white p-3 rounded-xl shadow-lg border border-red-100 flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "bg-red-50 p-2 rounded-lg",
                        children: c.jsx(op, {
                            size: 20,
                            className: "text-red-500"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "text-xs font-bold text-slate-700",
                            children: "Gmail"
                        }), c.jsx("div", {
                            className: "text-[10px] text-slate-400",
                            children: "Personal Email"
                        })]
                    })]
                })
            }), c.jsx(L.div, {
                animate: {
                    x: [0, 10, 0]
                },
                transition: {
                    duration: 6,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2
                },
                className: "absolute bottom-[25%] left-[15%] z-20",
                children: c.jsxs("div", {
                    className: "bg-white p-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "bg-blue-50 p-2 rounded-lg",
                        children: c.jsx(xy, {
                            size: 20,
                            className: "text-blue-500"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "text-xs font-bold text-slate-700",
                            children: "Salesforce"
                        }), c.jsx("div", {
                            className: "text-[10px] text-slate-400",
                            children: "Update Lead"
                        })]
                    })]
                })
            }), c.jsx(L.div, {
                animate: {
                    x: [0, -10, 0]
                },
                transition: {
                    duration: 5.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: .5
                },
                className: "absolute bottom-[20%] right-[15%] z-20",
                children: c.jsxs("div", {
                    className: "bg-white p-3 rounded-xl shadow-lg border border-green-100 flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "bg-green-50 p-2 rounded-lg",
                        children: c.jsx(Py, {
                            size: 20,
                            className: "text-green-500"
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "text-xs font-bold text-slate-700",
                            children: "WhatsApp"
                        }), c.jsx("div", {
                            className: "text-[10px] text-slate-400",
                            children: "Direct Msg"
                        })]
                    })]
                })
            }), c.jsx(L.div, {
                animate: {
                    scale: [1, 1.05, 1]
                },
                transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5
                },
                className: "absolute top-[50%] right-[5%] z-10 opacity-80 scale-90",
                children: c.jsxs("div", {
                    className: "bg-white p-2.5 rounded-xl shadow-md border border-green-100 flex items-center gap-2",
                    children: [c.jsx("div", {
                        className: "bg-green-50 p-1.5 rounded-lg",
                        children: c.jsx(My, {
                            size: 16,
                            className: "text-green-600"
                        })
                    }), c.jsx("span", {
                        className: "text-xs font-bold text-slate-600",
                        children: "Shopify"
                    })]
                })
            }), c.jsx(L.div, {
                animate: {
                    scale: [1, 1.05, 1]
                },
                transition: {
                    duration: 4.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2.5
                },
                className: "absolute top-[50%] left-[5%] z-10 opacity-80 scale-90",
                children: c.jsxs("div", {
                    className: "bg-white p-2.5 rounded-xl shadow-md border border-orange-100 flex items-center gap-2",
                    children: [c.jsx("div", {
                        className: "bg-orange-50 p-1.5 rounded-lg",
                        children: c.jsx(wy, {
                            size: 16,
                            className: "text-orange-600"
                        })
                    }), c.jsx("span", {
                        className: "text-xs font-bold text-slate-600",
                        children: "HubSpot"
                    })]
                })
            })]
        })
    }), c.jsx(Do, {
        align: "left",
        badge: "Automated Closing",
        title: "Stop Scheduling, Start Selling.",
        subtitle: "AI Responses & Meeting Booking",
        description: "Eliminate the scheduling headache with AI sales automation. Book meetings with qualified leads effortlessly, accelerating your sales pipeline. AI handles follow-ups and basic inquiries for you.",
        features: ["Book Meetings from Sequences", "AI-Generated Responses", "Calendly & CRM Integration", "Sync & Route Leads"],
        imageComponent: c.jsxs("div", {
            className: "bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative",
            children: [c.jsx("div", {
                className: "absolute top-0 right-0 p-4",
                children: c.jsxs("div", {
                    className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1",
                    children: [c.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                    }), "Jason AI Active"]
                })
            }), c.jsxs("div", {
                className: "p-6",
                children: [c.jsxs("div", {
                    className: "flex gap-4 mb-6",
                    children: [c.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-slate-200",
                        children: c.jsx("img", {
                            src: "https://i.pravatar.cc/100?img=12",
                            alt: "Prospect",
                            className: "w-full h-full rounded-full"
                        })
                    }), c.jsx("div", {
                        className: "bg-slate-50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 max-w-[80%]",
                        children: "Does Tuesday at 2 PM work for a quick demo?"
                    })]
                }), c.jsxs("div", {
                    className: "flex gap-4 flex-row-reverse mb-6",
                    children: [c.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-xs",
                        children: "AI"
                    }), c.jsx("div", {
                        className: "bg-blue-600 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%] shadow-lg shadow-blue-200",
                        children: "I've checked the calendar. Tuesday at 2 PM EST is confirmed. I've sent the invite to your email."
                    })]
                }), c.jsxs("div", {
                    className: "bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm",
                    children: [c.jsx("div", {
                        className: "bg-red-50 p-3 rounded-lg text-red-500",
                        children: c.jsx(ip, {
                            size: 24
                        })
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "font-bold text-slate-900",
                            children: "Product Demo"
                        }), c.jsx("div", {
                            className: "text-xs text-slate-500",
                            children: "Tue, Oct 24 • 2:00 PM - 2:30 PM"
                        })]
                    }), c.jsx("div", {
                        className: "ml-auto",
                        children: c.jsx(sp, {
                            size: 24,
                            className: "text-green-500"
                        })
                    })]
                })]
            })]
        })
    })]
})
  , p2 = [{
    id: 1,
    title: "Find Your Perfect Leads",
    description: "Use the B2B database to find verified emails and phone numbers for your ideal customer profile.",
    icon: c.jsx(Ey, {
        className: "w-6 h-6 text-white"
    }),
    color: "bg-blue-500"
}, {
    id: 2,
    title: "Automate Outreach",
    description: "Set up multichannel sequences (Email, LinkedIn, Calls) that run on autopilot with Jason AI.",
    icon: c.jsx(Ay, {
        className: "w-6 h-6 text-white"
    }),
    color: "bg-purple-500"
}, {
    id: 3,
    title: "Close More Deals",
    description: "Handle replies, book meetings automatically, and track revenue growth in real-time.",
    icon: c.jsx(Ly, {
        className: "w-6 h-6 text-white"
    }),
    color: "bg-green-500"
}]
  , m2 = () => c.jsxs("section", {
    id: "solutions",
    className: "py-24 relative overflow-hidden scroll-mt-28",
    children: [c.jsx("div", {
        className: "absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-10"
    }), c.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [c.jsxs("div", {
            className: "text-center mb-16",
            children: [c.jsx("h2", {
                className: "text-sm font-bold tracking-wide text-brand uppercase mb-2",
                children: "Workflow"
            }), c.jsx("h3", {
                className: "text-3xl md:text-4xl font-bold text-slate-900",
                children: "How It Works"
            }), c.jsx("p", {
                className: "mt-4 text-lg text-slate-600 max-w-2xl mx-auto",
                children: "Turn cold prospects into loyal customers in three simple steps."
            })]
        }), c.jsxs("div", {
            className: "grid md:grid-cols-3 gap-8 relative",
            children: [c.jsx("div", {
                className: "hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"
            }), p2.map( (e, t) => c.jsxs(L.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .2
                },
                className: "relative z-10 flex flex-col items-center text-center group",
                children: [c.jsx("div", {
                    className: `w-24 h-24 rounded-2xl ${e.color} shadow-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`,
                    children: e.icon
                }), c.jsxs("div", {
                    className: "bg-white/80 backdrop-blur p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full",
                    children: [c.jsxs("div", {
                        className: "inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3",
                        children: ["STEP ", e.id]
                    }), c.jsx("h4", {
                        className: "text-xl font-bold text-slate-900 mb-3",
                        children: e.title
                    }), c.jsx("p", {
                        className: "text-slate-600 leading-relaxed text-sm",
                        children: e.description
                    })]
                })]
            }, e.id))]
        })]
    })]
})
  , g2 = () => c.jsxs("section", {
    className: "py-20 bg-[#0c043f] text-white overflow-hidden relative",
    children: [c.jsxs("div", {
        className: "absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none",
        children: [c.jsx(L.div, {
            animate: {
                scale: [1, 1.2, 1],
                x: [0, 20, 0]
            },
            transition: {
                duration: 8,
                repeat: 1 / 0,
                ease: "easeInOut"
            },
            className: "absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]"
        }), c.jsx(L.div, {
            animate: {
                scale: [1, 1.3, 1],
                x: [0, -30, 0]
            },
            transition: {
                duration: 10,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 1
            },
            className: "absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[100px]"
        })]
    }), c.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: c.jsxs("div", {
            className: "grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10",
            children: [c.jsxs(L.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                whileHover: {
                    scale: 1.05
                },
                transition: {
                    type: "spring",
                    stiffness: 300
                },
                className: "p-4 cursor-default",
                children: [c.jsx(L.div, {
                    initial: {
                        scale: .5,
                        opacity: 0
                    },
                    whileInView: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: .2,
                        type: "spring"
                    },
                    className: "text-5xl font-bold mb-2 text-blue-300",
                    children: "40%"
                }), c.jsx("div", {
                    className: "text-blue-100 font-medium",
                    children: "Increase in Open Rates"
                })]
            }), c.jsxs(L.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .2
                },
                whileHover: {
                    scale: 1.05
                },
                className: "p-4 cursor-default",
                children: [c.jsx(L.div, {
                    initial: {
                        scale: .5,
                        opacity: 0
                    },
                    whileInView: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: .4,
                        type: "spring"
                    },
                    className: "text-5xl font-bold mb-2 text-purple-300",
                    children: "10h+"
                }), c.jsx("div", {
                    className: "text-blue-100 font-medium",
                    children: "Saved Weekly per Rep"
                })]
            }), c.jsxs(L.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .4
                },
                whileHover: {
                    scale: 1.05
                },
                className: "p-4 cursor-default",
                children: [c.jsx(L.div, {
                    initial: {
                        scale: .5,
                        opacity: 0
                    },
                    whileInView: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: .6,
                        type: "spring"
                    },
                    className: "text-5xl font-bold mb-2 text-green-300",
                    children: "3x"
                }), c.jsx("div", {
                    className: "text-blue-100 font-medium",
                    children: "More Meetings Booked"
                })]
            })]
        })
    })]
})
  , y2 = () => {
    const [e,t] = E.useState("")
      , [n,r] = E.useState("idle")
      , i = s => {
        s.preventDefault(),
        e && (r("loading"),
        setTimeout( () => {
            r("success"),
            setTimeout( () => {
                window.open(Om, "_blank")
            }
            , 1500)
        }
        , 1500))
    }
    ;
    return c.jsxs("section", {
        className: "py-20 relative overflow-hidden bg-[#0c043f]",
        children: [c.jsxs("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [c.jsx(L.div, {
                animate: {
                    scale: [1, 1.2, 1],
                    opacity: [.3, .5, .3],
                    rotate: [0, 90, 0]
                },
                transition: {
                    duration: 10,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-30"
            }), c.jsx(L.div, {
                animate: {
                    scale: [1, 1.3, 1],
                    opacity: [.2, .4, .2],
                    x: [0, -50, 0]
                },
                transition: {
                    duration: 15,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                className: "absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-30"
            }), [...Array(5)].map( (s, o) => c.jsx(L.div, {
                className: "absolute bg-white rounded-full opacity-20",
                style: {
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                },
                animate: {
                    y: [0, -100, 0],
                    opacity: [.2, .8, .2]
                },
                transition: {
                    duration: Math.random() * 5 + 5,
                    repeat: 1 / 0,
                    ease: "linear"
                }
            }, o))]
        }), c.jsx("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: c.jsxs("div", {
                className: "bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden",
                children: [c.jsx("div", {
                    className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"
                }), c.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 items-center",
                    children: [c.jsxs("div", {
                        children: [c.jsxs(L.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-sm font-semibold mb-4 border border-amber-400/30",
                            children: [c.jsx(Dy, {
                                size: 14
                            }), "Limited Time Offer"]
                        }), c.jsxs(L.h2, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .1
                            },
                            className: "text-3xl md:text-4xl font-bold text-white mb-4",
                            children: ["Get Your ", c.jsx("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300",
                                children: "10% Discount"
                            }), " Code Now"]
                        }), c.jsx(L.p, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: .2
                            },
                            className: "text-blue-100 text-lg leading-relaxed mb-6",
                            children: "Unlock full access to the AI Sales Assistant platform. Join 2,500+ teams scaling their revenue today."
                        })]
                    }), c.jsx(L.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .3
                        },
                        className: "bg-white/5 p-6 rounded-2xl border border-white/10",
                        children: c.jsxs("form", {
                            onSubmit: i,
                            className: "flex flex-col gap-4",
                            children: [c.jsxs("div", {
                                children: [c.jsx("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-blue-200 mb-1",
                                    children: "Business Email"
                                }), c.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    required: !0,
                                    placeholder: "name@company.com",
                                    value: e,
                                    onChange: s => t(s.target.value),
                                    className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                                })]
                            }), c.jsx("button", {
                                type: "submit",
                                disabled: n !== "idle",
                                className: `
                        w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                        ${n === "success" ? "bg-green-500 text-white" : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"}
                      `,
                                children: c.jsxs(dp, {
                                    mode: "wait",
                                    children: [n === "idle" && c.jsxs(L.span, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        className: "flex items-center gap-2",
                                        children: ["Claim 10% Off ", c.jsx(ba, {
                                            size: 20,
                                            className: "group-hover:translate-x-1 transition-transform"
                                        })]
                                    }, "idle"), n === "loading" && c.jsx(L.span, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        children: "Processing..."
                                    }, "loading"), n === "success" && c.jsxs(L.span, {
                                        initial: {
                                            opacity: 0,
                                            scale: .5
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "flex items-center gap-2",
                                        children: [c.jsx(vy, {
                                            size: 20
                                        }), " Coupon Unlocked!"]
                                    }, "success")]
                                })
                            }), c.jsx("p", {
                                className: "text-xs text-center text-blue-200/60",
                                children: "We respect your privacy. No spam."
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
  , v2 = [{
    name: "Alex Johnson",
    role: "Head of Sales at TechFlow",
    content: "The AI features are a game changer. We've automated 80% of our outreach and booked 3x more meetings in the first month.",
    image: "https://i.pravatar.cc/100?img=11"
}, {
    name: "Sarah Williams",
    role: "Founder, GrowthAgency",
    content: "ReplyLeadGen's partner link saved us money, and the tool itself is incredible. The multichannel sequences work seamlessly.",
    image: "https://i.pravatar.cc/100?img=5"
}, {
    name: "Michael Chen",
    role: "SDR Manager, CloudScale",
    content: "I love the unified inbox. Managing LinkedIn and Email conversations in one place saves my team hours every single day.",
    image: "https://i.pravatar.cc/100?img=3"
}]
  , x2 = () => c.jsx("section", {
    id: "testimonials",
    className: "py-24 bg-slate-50/50 border-t border-slate-200 scroll-mt-28",
    children: c.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [c.jsxs("div", {
            className: "text-center mb-16",
            children: [c.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold text-slate-900",
                children: "Trusted by Sales Leaders"
            }), c.jsx("p", {
                className: "mt-4 text-lg text-slate-600",
                children: "See what others are saying about the platform."
            })]
        }), c.jsx("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: v2.map( (e, t) => c.jsxs(L.div, {
                initial: {
                    opacity: 0,
                    scale: .9
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow",
                children: [c.jsx("div", {
                    className: "flex gap-1 text-yellow-400 mb-4",
                    children: [1, 2, 3, 4, 5].map(n => c.jsx(Ry, {
                        size: 18,
                        fill: "currentColor"
                    }, n))
                }), c.jsxs("p", {
                    className: "text-slate-700 leading-relaxed mb-6 flex-grow",
                    children: ['"', e.content, '"']
                }), c.jsxs("div", {
                    className: "flex items-center gap-4 pt-4 border-t border-slate-50",
                    children: [c.jsx("img", {
                        src: e.image,
                        alt: e.name,
                        className: "w-10 h-10 rounded-full"
                    }), c.jsxs("div", {
                        children: [c.jsx("div", {
                            className: "font-bold text-slate-900 text-sm",
                            children: e.name
                        }), c.jsx("div", {
                            className: "text-slate-500 text-xs",
                            children: e.role
                        })]
                    })]
                })]
            }, t))
        })]
    })
})
  , w2 = [{
    question: "Is the 10% discount applied automatically?",
    answer: "Yes! When you click our partner link and sign up, the affiliate tracking ensures you are eligible for the discount on your first subscription payment."
}, {
    question: "Do I need a credit card for the free trial?",
    answer: "No, you can start your 14-day free trial without entering any credit card information. You only pay when you decide to upgrade."
}, {
    question: "Does this work for LinkedIn outreach too?",
    answer: "Absolutely. The platform supports multichannel sequences including Email, LinkedIn, SMS, WhatsApp, and manual calls."
}, {
    question: "Can I cancel at any time?",
    answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time from your dashboard."
}]
  , S2 = () => {
    const [e,t] = ef.useState(null);
    return c.jsx("section", {
        className: "py-24 bg-transparent",
        children: c.jsxs("div", {
            className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [c.jsx("div", {
                className: "text-center mb-12",
                children: c.jsx("h2", {
                    className: "text-3xl font-bold text-slate-900",
                    children: "Frequently Asked Questions"
                })
            }), c.jsx("div", {
                className: "space-y-4",
                children: w2.map( (n, r) => c.jsxs("div", {
                    className: "border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur shadow-sm",
                    children: [c.jsxs("button", {
                        onClick: () => t(e === r ? null : r),
                        className: "w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors",
                        children: [c.jsx("span", {
                            className: "font-semibold text-slate-800",
                            children: n.question
                        }), e === r ? c.jsx(Ty, {
                            size: 20,
                            className: "text-brand"
                        }) : c.jsx(Ny, {
                            size: 20,
                            className: "text-gray-400"
                        })]
                    }), c.jsx(dp, {
                        children: e === r && c.jsx(L.div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            className: "overflow-hidden",
                            children: c.jsx("div", {
                                className: "p-5 pt-0 text-slate-600 border-t border-gray-50",
                                children: n.answer
                            })
                        })
                    })]
                }, r))
            })]
        })
    })
}
  , k2 = () => c.jsx("section", {
    id: "pricing",
    className: "py-24 bg-transparent scroll-mt-28",
    children: c.jsx("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
        children: c.jsxs(L.div, {
            initial: {
                scale: .95,
                opacity: 0
            },
            whileInView: {
                scale: 1,
                opacity: 1
            },
            viewport: {
                once: !0
            },
            className: "bg-gradient-to-r from-[#0c043f] to-[#2a2468] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden",
            children: [c.jsxs("div", {
                className: "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                children: [c.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full"
                }), c.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"
                })]
            }), c.jsxs("div", {
                className: "relative z-10",
                children: [c.jsx("h2", {
                    className: "text-3xl md:text-5xl font-bold mb-6",
                    children: "Ready to scale your sales?"
                }), c.jsxs("p", {
                    className: "text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto",
                    children: ["Join thousands of businesses using AI to automate their outreach.", c.jsx("br", {}), c.jsx("span", {
                        className: "font-semibold text-yellow-300",
                        children: "Use our partner link below to unlock a 10% discount on your first month."
                    })]
                }), c.jsx("div", {
                    className: "flex flex-col sm:flex-row justify-center gap-4",
                    children: c.jsx(rn, {
                        variant: "white",
                        className: "h-14 px-10 text-lg",
                        children: "Get 10% Discount"
                    })
                }), c.jsx("p", {
                    className: "mt-6 text-sm text-blue-200/60",
                    children: "No credit card required for 14-day trial."
                })]
            })]
        })
    })
})
  , j2 = () => c.jsx("footer", {
    className: "bg-slate-50 pt-16 pb-8 border-t border-gray-200",
    children: c.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [c.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8 mb-12",
            children: [c.jsxs("div", {
                className: "col-span-1 md:col-span-1",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [c.jsx("div", {
                        className: "w-8 h-8 rounded-lg flex items-center justify-center",
                        style: {
                            backgroundColor: gu
                        },
                        children: c.jsx("span", {
                            className: "text-white font-bold text-lg",
                            children: "R"
                        })
                    }), c.jsx("span", {
                        className: "text-xl font-bold text-slate-900",
                        children: "ReplyLeadGen"
                    })]
                }), c.jsx("p", {
                    className: "text-sm text-slate-500",
                    children: "The ultimate AI-powered sales engagement platform for modern sales teams."
                })]
            }), c.jsxs("div", {
                children: [c.jsx("h4", {
                    className: "font-bold text-slate-900 mb-4",
                    children: "Company"
                }), c.jsxs("ul", {
                    className: "space-y-2 text-sm text-slate-600",
                    children: [c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/about-us",
                            className: "hover:text-brand",
                            children: "About Us"
                        })
                    }), c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/contact-us",
                            className: "hover:text-brand",
                            children: "Contact Us"
                        })
                    })]
                })]
            }), c.jsxs("div", {
                children: [c.jsx("h4", {
                    className: "font-bold text-slate-900 mb-4",
                    children: "Support"
                }), c.jsx("ul", {
                    className: "space-y-2 text-sm text-slate-600",
                    children: c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/help-centre",
                            className: "hover:text-brand",
                            children: "Help Centre"
                        })
                    })
                })]
            }), c.jsxs("div", {
                children: [c.jsx("h4", {
                    className: "font-bold text-slate-900 mb-4",
                    children: "Legal"
                }), c.jsxs("ul", {
                    className: "space-y-2 text-sm text-slate-600",
                    children: [c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/privacy-policy",
                            className: "hover:text-brand",
                            children: "Privacy Policy"
                        })
                    }), c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/terms-of-service",
                            className: "hover:text-brand",
                            children: "Terms of Service"
                        })
                    }), c.jsx("li", {
                        children: c.jsx("a", {
                            href: "https://www.replyleadgen.com/reply/refund-policy",
                            className: "hover:text-brand",
                            children: "Refund Policy"
                        })
                    })]
                })]
            })]
        }), c.jsxs("div", {
            className: "border-t border-gray-200 pt-8 mt-8",
            children: [c.jsx("div", {
                className: "bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-center mb-6",
                children: c.jsx("p", {
                    className: "text-sm text-yellow-800 font-medium",
                    children: "Disclaimer: ReplyLeadGen.com is an independent affiliate partner. We are not the official website of Reply.io. This page contains affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you."
                })
            }), c.jsxs("p", {
                className: "text-center text-sm text-slate-400",
                children: ["© ", new Date().getFullYear(), " ReplyLeadGen. All rights reserved."]
            })]
        })]
    })
});
function P2() {
    return c.jsxs("div", {
        className: "min-h-screen font-sans selection:bg-brand/20",
        children: [c.jsx(a2, {}), c.jsx(u2, {}), c.jsx(c2, {}), c.jsx(f2, {}), c.jsx(m2, {}), c.jsx(h2, {}), c.jsx(y2, {}), c.jsx(g2, {}), c.jsx(x2, {}), c.jsx(S2, {}), c.jsx(k2, {}), c.jsx(j2, {})]
    })
}
const zm = document.getElementById("root");
if (!zm)
    throw new Error("Could not find root element to mount to");
const T2 = Ro.createRoot(zm);
T2.render(c.jsx(ef.StrictMode, {
    children: c.jsx(P2, {})
}));
