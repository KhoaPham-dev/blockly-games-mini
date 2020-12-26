// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { g: {} };
g.g.N = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.N.qf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.N.Tn = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.N.$I = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.N.Sn = function (a, c) {
  return new g.g.N(a.x - c.x, a.y - c.y);
};
g.g.N.sum = function (a, c) {
  return new g.g.N(a.x + c.x, a.y + c.y);
};
g.g.N.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.N.prototype.translate = function (a, c) {
  this.x += a;
  this.y += c;
  return this;
};
g.am = {};
g.ez = 40;
g.vz = 125;
g.wE = 5;
g.VE = 10;
g.Pd = 28;
g.hE = g.Pd;
g.kE = 8;
g.Np = 250;
g.ct = 10;
g.eE = 30;
g.FF = 750;
g.nG = 100;
g.xE = !0;
g.iF = 0.45;
g.jF = 0.65;
g.Hl = { width: 96, height: 124, url: "sprites.png" };
g.pb = 1;
g.Mf = 2;
g.Cb = 3;
g.Nf = 4;
g.nh = 5;
g.Ws = -1;
g.Vs = 0;
g.ll = 1;
g.OL = 0;
g.PL = 1;
g.ML = 1;
g.NL = 2;
g.Dl = [];
g.Dl[g.pb] = g.Mf;
g.Dl[g.Mf] = g.pb;
g.Dl[g.Cb] = g.Nf;
g.Dl[g.Nf] = g.Cb;
g.$j = 0;
g.yq = 1;
g.ff = 2;
g.Nl = 3;
g.Ey = null;
g.ot = 1;
g.Fy = 2;
g.yc = "VARIABLE";
g.FG = "VARIABLE_DYNAMIC";
g.pn = "PROCEDURE";
g.Ez = "RENAME_VARIABLE_ID";
g.Gy = "DELETE_VARIABLE_ID";
g.C = {};
g.C.Sm = {};
g.C.$p = "default";
g.C.aa = function (a) {
  this.nj = a;
};
g.C.aa.prototype.toString = function () {
  return this.nj;
};
g.C.aa.xy = new g.C.aa("connectionChecker");
g.C.aa.ec = new g.C.aa("event");
g.C.aa.Dc = new g.C.aa("field");
g.C.aa.RENDERER = new g.C.aa("renderer");
g.C.aa.xq = new g.C.aa("toolbox");
g.C.aa.au = new g.C.aa("theme");
g.C.aa.Ol = new g.C.aa("toolboxItem");
g.C.aa.Qy = new g.C.aa("flyoutsVerticalToolbox");
g.C.aa.UE = new g.C.aa("flyoutsHorizontalToolbox");
g.C.register = function (a, c, d, e) {
  if (
    (!(a instanceof g.C.aa) && "string" != typeof a) ||
    "" == String(a).trim()
  )
    throw Error(
      'Invalid type "' +
        a +
        '". The type must be a non-empty string or a Blockly.registry.Type.'
    );
  a = String(a).toLowerCase();
  if ("string" != typeof c || "" == c.trim())
    throw Error(
      'Invalid name "' + c + '". The name must be a non-empty string.'
    );
  c = c.toLowerCase();
  if (!d) throw Error("Can not register a null value");
  var f = g.C.Sm[a];
  f || (f = g.C.Sm[a] = {});
  g.C.kL(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.kL = function (a, c) {
  switch (a) {
    case String(g.C.aa.Dc):
      if ("function" != typeof c.ka)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Sm[a];
  d
    ? d[c]
      ? delete g.C.Sm[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.yB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Sm[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.BI = function (a) {
  var c = g.C.aa.Ol;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.Sm[c]) ? !!c[a] : !1;
};
g.C.io = function (a, c) {
  return g.C.yB(a, c);
};
g.C.Mv = function (a, c) {
  return g.C.yB(a, c);
};
g.C.wr = function (a, c) {
  c = c.plugins[a.toString()] || g.C.$p;
  return "function" == typeof c ? c : g.C.io(a, c);
};
g.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
g.i = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.i);
g.g.Fb = {};
g.g.Fb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.Fb.names[a];
  if (c) return c;
  c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
  c = "#" == c[0] ? c : "#" + c;
  if (/^#[0-9a-f]{6}$/.test(c)) return c;
  if (/^#[0-9a-f]{3}$/.test(c))
    return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
  var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return d &&
    ((a = Number(d[1])),
    (c = Number(d[2])),
    (d = Number(d[3])),
    0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d)
    ? g.g.Fb.yx(a, c, d)
    : null;
};
g.g.Fb.yx = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Fb.SB = function (a) {
  a = g.g.Fb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Fb.WB = function (a) {
  var c = g.iF,
    d = 255 * g.jF,
    e = 0,
    f = 0,
    h = 0;
  if (0 == c) h = f = e = d;
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k;
    a = d * (1 - c);
    var m = d * (1 - c * l);
    c = d * (1 - c * (1 - l));
    switch (k) {
      case 1:
        e = m;
        f = d;
        h = a;
        break;
      case 2:
        e = a;
        f = d;
        h = c;
        break;
      case 3:
        e = a;
        f = m;
        h = d;
        break;
      case 4:
        e = c;
        f = a;
        h = d;
        break;
      case 5:
        e = d;
        f = a;
        h = m;
        break;
      case 6:
      case 0:
        (e = d), (f = c), (h = a);
    }
  }
  return g.g.Fb.yx(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Fb.uu = function (a, c, d) {
  a = g.g.Fb.parse(a);
  if (!a) return null;
  c = g.g.Fb.parse(c);
  if (!c) return null;
  a = g.g.Fb.SB(a);
  c = g.g.Fb.SB(c);
  return g.g.Fb.yx(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.Fb.names = {
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",
};
g.g.Rect = function (a, c, d, e) {
  this.top = a;
  this.bottom = c;
  this.left = d;
  this.right = e;
};
g.g.Rect.prototype.contains = function (a, c) {
  return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom;
};
g.g.ub = {};
g.g.ub.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.ub.Hx = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.ub.jH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.ub.Hx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.ub.kH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.ub.Hx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.ub.ID = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.ub.tL(a[d], c);
  return a.join("\n");
};
g.g.ub.tL = function (a, c) {
  if (a.length <= c) return a;
  for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
    d[e].length > c && (c = d[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var h = e;
    var k = a;
    a = [];
    var l = d.length / f,
      m = 1;
    for (e = 0; e < d.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = g.g.ub.JD(d, a, c);
    e = g.g.ub.by(d, a, c);
    a = g.g.ub.uL(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.ub.by = function (a, c, d) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === c[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === c[h] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (h = c = 0; h < e.length; h++)
    (c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5)),
      (c -= Math.pow(a - e[h], 1.5)),
      -1 != ".?!".indexOf(f[h])
        ? (c += d / 3)
        : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += 0.5);
  return c;
};
g.g.ub.JD = function (a, c, d) {
  for (var e = g.g.ub.by(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.ub.by(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.ub.JD(a, f, d) : c;
};
g.g.ub.uL = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.ef = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.ef.qf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Sh = function (a) {
  if ("none" != g.g.style.GB(a, "display")) return g.g.style.EB(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  var h = a.offsetWidth;
  a = a.offsetHeight;
  c.display = d;
  c.position = f;
  c.visibility = e;
  return new g.g.ef(h, a);
};
g.g.style.EB = function (a) {
  return new g.g.ef(a.offsetWidth, a.offsetHeight);
};
g.g.style.GB = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.cI(a, c) ||
    (a.style && a.style[c])
  );
};
g.g.style.getComputedStyle = function (a, c) {
  return document.defaultView &&
    document.defaultView.getComputedStyle &&
    (a = document.defaultView.getComputedStyle(a, null))
    ? a[c] || a.getPropertyValue(c) || ""
    : "";
};
g.g.style.cI = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.pk = function (a) {
  var c = new g.g.N(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.N(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.rI = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.N(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.AO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.oO = function (a) {
  return "rtl" == g.g.style.GB(a, "direction");
};
g.g.style.$H = function (a) {
  var c = g.g.style.getComputedStyle(a, "borderLeftWidth"),
    d = g.g.style.getComputedStyle(a, "borderRightWidth"),
    e = g.g.style.getComputedStyle(a, "borderTopWidth");
  a = g.g.style.getComputedStyle(a, "borderBottomWidth");
  return {
    top: parseFloat(e),
    right: parseFloat(d),
    bottom: parseFloat(a),
    left: parseFloat(c),
  };
};
g.g.style.DK = function (a, c) {
  a = g.g.style.eI(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.eI = function (a, c) {
  var d = g.g.style.pk(a),
    e = g.g.style.pk(c),
    f = g.g.style.$H(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.EB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.N(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.af = c("Trident") || c("MSIE");
  g.g.userAgent.Pj = c("Edge");
  g.g.userAgent.tF = c("JavaFX");
  g.g.userAgent.DL = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Pj;
  g.g.userAgent.cA = c("WebKit") && !g.g.userAgent.Pj;
  g.g.userAgent.cF =
    c("Gecko") && !g.g.userAgent.cA && !g.g.userAgent.af && !g.g.userAgent.Pj;
  g.g.userAgent.Jj = c("Android");
  g.g.userAgent.oh = c("iPad");
  g.g.userAgent.bz = c("iPod");
  g.g.userAgent.Bt = c("iPhone") && !g.g.userAgent.oh && !g.g.userAgent.bz;
  g.g.userAgent.IF = c("Macintosh");
  g.g.userAgent.vG =
    g.g.userAgent.oh || (g.g.userAgent.Jj && !c("Mobile")) || c("Silk");
  g.g.userAgent.lz =
    !g.g.userAgent.vG &&
    (g.g.userAgent.bz || g.g.userAgent.Bt || g.g.userAgent.Jj || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.rJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.Kr = function (a) {
  return (
    "textarea" == a.target.type ||
    "text" == a.target.type ||
    "number" == a.target.type ||
    "email" == a.target.type ||
    "password" == a.target.type ||
    "search" == a.target.type ||
    "tel" == a.target.type ||
    "url" == a.target.type ||
    a.target.isContentEditable ||
    (a.target.dataset && "true" == a.target.dataset.qO)
  );
};
g.g.rf = function (a) {
  var c = new g.g.N(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.rf.IG)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.rf.JG)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.no = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.rf(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.N(c, d);
};
g.g.rf.IG = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.rf.JG = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Ik = function (a) {
  return a.ctrlKey && g.g.userAgent.IF ? !0 : 2 == a.button;
};
g.g.Jo = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.DB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.ez, y: a.deltaY * g.ez };
    case 2:
      return { x: a.deltaX * g.vz, y: a.deltaY * g.vz };
  }
};
g.g.ZK = function (a) {
  return g.g.Rx(a, !0);
};
g.g.Re = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.Rx(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.yA = function (a) {
  for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.Rx = function (a, c) {
  var d = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && d.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : c && "0" <= l && "9" >= l
        ? ((f = 2), (h = l), (l = a.join("")) && d.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (h += l)
        : (d.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[A-Z]\w*/i.test(f)
              ? ((l = f.toUpperCase()),
                (l = g.g.ub.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.i
                  ? ((f = g.i[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.Rx(f, c))
                      : c
                      ? d.push(String(f))
                      : d.push(f))
                  : d.push("%{" + f + "}"))
              : d.push("%{" + f + "}"),
            (f = a.length = 0)));
  }
  (l = a.join("")) && d.push(l);
  c = [];
  for (k = a.length = 0; k < d.length; ++k)
    "string" == typeof d[k]
      ? a.push(d[k])
      : ((l = a.join("")) && c.push(l), (a.length = 0), c.push(d[k]));
  (l = a.join("")) && c.push(l);
  a.length = 0;
  return c;
};
g.g.Rh = function () {
  for (var a = g.g.Rh.lD.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Rh.lD.charAt(Math.random() * a);
  return c.join("");
};
g.g.Rh.lD =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Ck = function () {
  if (void 0 !== g.g.Ck.Eu) return g.g.Ck.Eu;
  if (!g.g.global.getComputedStyle) return !1;
  var a = document.createElement("p"),
    c = "none",
    d = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform",
    };
  document.body.insertBefore(a, null);
  for (var e in d)
    if (void 0 !== a.style[e]) {
      a.style[e] = "translate3d(1px,1px,1px)";
      c = g.g.global.getComputedStyle(a);
      if (!c) return document.body.removeChild(a), !1;
      c = c.getPropertyValue(d[e]);
    }
  document.body.removeChild(a);
  g.g.Ck.Eu = "none" !== c;
  return g.g.Ck.Eu;
};
g.g.fD = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.qI = function () {
  var a = g.g.style.rI();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Fq = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.iI = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.af && c.pageYOffset != a.scrollTop
    ? new g.g.N(a.scrollLeft, a.scrollTop)
    : new g.g.N(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.Dv = function (a, c) {
  var d = Object.create(null),
    e = q(a, !0);
  c && (a = r(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.CK = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.N(d - e.left, c - e.top);
  c = g.g.no(a.Mb);
  return g.g.N.Sn(d, c).scale(1 / a.scale);
};
g.g.os = function (a) {
  var c = "string" == typeof a ? g.g.Re(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { FI: d, so: g.g.Fb.WB(d) };
  if ((d = g.g.Fb.parse(c))) return { FI: null, so: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.h = {};
g.h.NB = "";
g.h.ab = !0;
g.h.cv = 0;
g.h.Wp = "create";
g.h.Kp = g.h.Wp;
g.h.Oj = "delete";
g.h.Zs = g.h.Oj;
g.h.Mj = "change";
g.h.VD = g.h.Mj;
g.h.fn = "move";
g.h.$s = g.h.fn;
g.h.Wz = "var_create";
g.h.Xz = "var_delete";
g.h.Zz = "var_rename";
g.h.iu = "ui";
g.h.qy = "drag";
g.h.Gl = "selected";
g.h.ft = "click";
g.h.gz = "marker_move";
g.h.Mp = "bubble_open";
g.h.Tz = "trashcan_open";
g.h.Rz = "toolbox_item_select";
g.h.Qz = "theme_change";
g.h.$z = "viewport_change";
g.h.Tp = "comment_create";
g.h.wy = "comment_delete";
g.h.vy = "comment_change";
g.h.Up = "comment_move";
g.h.Py = "finished_loading";
g.h.$D = [g.h.Kp, g.h.$s, g.h.Tp, g.h.Up];
g.h.Zm = [];
g.h.Ha = function (a) {
  g.h.isEnabled() && (g.h.Zm.length || setTimeout(g.h.UH, 0), g.h.Zm.push(a));
};
g.h.UH = function () {
  for (
    var a = g.h.filter(g.h.Zm, !0), c = (g.h.Zm.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Pc) {
      var e = g.Ub.ho(d.Pc);
      if (e) {
        var f = d;
        if (f.ab)
          for (e.cl.push(f), e.Vo.length = 0; e.cl.length > e.iz && 0 <= e.iz; )
            e.cl.shift();
        for (var h = 0; (d = e.fe[h]); h++) d(f);
      }
    }
};
g.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.wm()) {
      var k = [h.iw ? g.h.iu : h.type, h.qb, h.Pc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.h.fn && l.index == f - 1)
        (m.Rk = h.Rk), (m.Qk = h.Qk), (m.pj = h.pj), (l.index = f);
      else if (h.type == g.h.Mj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.h.ft || m.type != g.h.Mp)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.wm();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.h.Mj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.h.iH = function () {
  for (var a = 0, c; (c = g.h.Zm[a]); a++) c.ab = !1;
};
g.h.disable = function () {
  g.h.cv++;
};
g.h.enable = function () {
  g.h.cv--;
};
g.h.isEnabled = function () {
  return 0 == g.h.cv;
};
g.h.uc = function () {
  return g.h.NB;
};
g.h.ea = function (a) {
  g.h.NB = "boolean" == typeof a ? (a ? g.g.Rh() : "") : a;
};
g.h.vB = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.h.ka = function (a) {
  var c = g.C.io(g.C.aa.ec, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ka(a);
  c.Pc = (void 0).id;
  return c;
};
g.h.FH = function (a) {
  if ((a.type == g.h.fn || a.type == g.h.Wp) && a.Pc) {
    var c = g.Ub.ho(a.Pc),
      d = c.Vd(a.qb);
    if (d) {
      a = g.h.ab;
      try {
        g.h.ab = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = q(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.ge(!0);
        } else if ((d.O || d.ba) && !c.Gc()) {
          do d.ge(!1), (d = r(d));
          while (d);
        }
      } finally {
        g.h.ab = a;
      }
    }
  }
};
g.h.Abstract = function () {
  this.Me = null;
  this.Pc = void 0;
  this.group = g.h.uc();
  this.ab = g.h.ab;
};
b = g.h.Abstract.prototype;
b.iw = !1;
b.xa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.ka = function (a) {
  this.Me = !1;
  this.group = a.group;
};
b.wm = function () {
  return !1;
};
b.run = function () {};
function u(a) {
  if (a.Pc) var c = g.Ub.ho(a.Pc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.object = {};
g.g.object.X = function (a, c) {
  a.v = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Oe = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.em = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.em(a[d] || Object.create(null), c[d])
        : c[d];
  return a;
};
g.g.object.values = function (a) {
  return Object.values
    ? Object.values(a)
    : Object.keys(a).map(function (c) {
        return a[c];
      });
};
g.h.Ce = function (a) {
  g.h.Ce.v.constructor.call(this);
  this.Me = "undefined" == typeof a;
  this.Pc = a ? a : "";
  this.ab = !1;
};
g.g.object.X(g.h.Ce, g.h.Abstract);
g.h.Ce.prototype.iw = !0;
g.h.Li = function (a, c, d, e) {
  g.h.Li.v.constructor.call(this, a ? a.u.id : void 0);
  this.qb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.X(g.h.Li, g.h.Ce);
g.h.Li.prototype.type = g.h.iu;
g.h.Li.prototype.xa = function () {
  var a = g.h.Li.v.xa.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.qb && (a.blockId = this.qb);
  return a;
};
g.h.Li.prototype.ka = function (a) {
  g.h.Li.v.ka.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.qb = a.blockId;
};
g.C.register(g.C.aa.ec, g.h.iu, g.h.Li);
g.g.G = function (a) {
  this.WK = a;
};
g.g.G.prototype.toString = function () {
  return this.WK;
};
g.g.G.Xs = new g.g.G("animate");
g.g.G.Sp = new g.g.G("circle");
g.g.G.uy = new g.g.G("clipPath");
g.g.G.Dy = new g.g.G("defs");
g.g.G.tt = new g.g.G("feComposite");
g.g.G.IE = new g.g.G("feComponentTransfer");
g.g.G.JE = new g.g.G("feFlood");
g.g.G.KE = new g.g.G("feFuncA");
g.g.G.LE = new g.g.G("feGaussianBlur");
g.g.G.ME = new g.g.G("fePointLight");
g.g.G.NE = new g.g.G("feSpecularLighting");
g.g.G.Oy = new g.g.G("filter");
g.g.G.WE = new g.g.G("foreignObject");
g.g.G.rd = new g.g.G("g");
g.g.G.jq = new g.g.G("image");
g.g.G.Tj = new g.g.G("line");
g.g.G.Ld = new g.g.G("path");
g.g.G.wz = new g.g.G("pattern");
g.g.G.dG = new g.g.G("polygon");
g.g.G.Od = new g.g.G("rect");
g.g.G.Ji = new g.g.G("svg");
g.g.G.Pz = new g.g.G("text");
g.g.G.du = new g.g.G("tspan");
g.g.o = {};
g.g.o.sn = "http://www.w3.org/2000/svg";
g.g.o.Rj = "http://www.w3.org/1999/xhtml";
g.g.o.Mi = "http://www.w3.org/1999/xlink";
g.g.o.Gi = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.Sf = null;
g.g.o.Bu = 0;
g.g.o.Mq = null;
g.g.o.P = function (a, c, d) {
  a = document.createElementNS(g.g.o.sn, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.Ka = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.o.cD = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.Nc(a, c[d]);
};
g.g.o.Nc = function (a, c) {
  var d = a.getAttribute("class");
  if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++)
      (d[e] && d[e] != c) || (d.splice(e, 1), e--);
    d.length
      ? a.setAttribute("class", d.join(" "))
      : a.removeAttribute("class");
  }
};
g.g.o.Tv = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.Bk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Gi.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.fp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.pp = function () {
  g.g.o.Bu++;
  g.g.o.Sf || (g.g.o.Sf = {});
};
g.g.o.qp = function () {
  g.g.o.Bu--;
  g.g.o.Bu || (g.g.o.Sf = null);
};
g.g.o.iO = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.Sf && (d = g.g.o.Sf[c])) return d;
  try {
    d =
      g.g.userAgent.af || g.g.userAgent.Pj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.Sf && (g.g.o.Sf[c] = d);
  return d;
};
g.g.o.Iv = function (a, c, d, e) {
  return g.g.o.jI(a, c + "pt", d, e);
};
g.g.o.jI = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.Sf && (h = g.g.o.Sf[a])) return h;
  g.g.o.Mq ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.Mq = h.getContext("2d")));
  g.g.o.Mq.font = d + " " + c + " " + e;
  h = g.g.o.Mq.measureText(f).width;
  g.g.o.Sf && (g.g.o.Sf[a] = h);
  return h;
};
g.g.o.aJ = function (a, c, d) {
  var e = document.createElement("span");
  e.style.font = c + " " + a + " " + d;
  e.textContent = "Hg";
  a = document.createElement("div");
  a.style.width = "1px";
  a.style.height = "0px";
  c = document.createElement("div");
  c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
  c.appendChild(e);
  c.appendChild(a);
  document.body.appendChild(c);
  try {
    (d = {}),
      (c.style.alignItems = "baseline"),
      (d.Rf = a.offsetTop - e.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - e.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.ty = function (a) {
  this.Ln = a;
  this.jb();
};
b = g.ty.prototype;
b.Ob = null;
b.Hg = null;
b.Ln = null;
b.zj = 1;
b.tp = null;
b.jb = function () {
  this.Ob ||
    ((this.Ob = g.g.o.P(
      g.g.G.Ji,
      {
        xmlns: g.g.o.sn,
        "xmlns:html": g.g.o.Rj,
        "xmlns:xlink": g.g.o.Mi,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.Ln
    )),
    (this.Hg = g.g.o.P(g.g.G.rd, {}, this.Ob)));
};
function ba(a, c) {
  if (a.Hg.childNodes.length) throw Error("Already dragging a block.");
  a.Hg.appendChild(c);
  a.Ob.style.display = "block";
  a.tp = new g.g.N(0, 0);
}
b.bl = function (a, c) {
  this.tp = new g.g.N(a * this.zj, c * this.zj);
  a = this.tp.x;
  c = this.tp.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Ob.style.display = "block";
  g.g.o.fp(this.Ob, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Ov = function () {
  var a = g.g.rf(this.Ob);
  return new g.g.N(a.x / this.zj, a.y / this.zj);
};
b.uc = function () {
  return this.Hg;
};
b.Pq = function (a) {
  a
    ? a.appendChild(this.Hg.firstChild)
    : this.Hg.removeChild(this.Hg.firstChild);
  this.Ob.style.display = "none";
  if (this.Hg.childNodes.length) throw Error("Drag group was not cleared.");
  this.tp = null;
};
g.pd = {};
g.pd.bw = !1;
g.pd.register = function (a) {
  if (g.pd.bw) throw Error("CSS already injected");
  Array.prototype.push.apply(g.pd.jt, a);
  a.length = 0;
};
g.pd.Ak = function (a, c) {
  if (!g.pd.bw) {
    g.pd.bw = !0;
    var d = g.pd.jt.join("\n");
    g.pd.jt.length = 0;
    a &&
      ((a = c.replace(/[\\/]$/, "")),
      (d = d.replace(/<<<PATH>>>/g, a)),
      (a = document.createElement("style")),
      (a.id = "blockly-common-style"),
      (d = document.createTextNode(d)),
      a.appendChild(d),
      document.head.insertBefore(a, document.head.firstChild));
  }
};
g.pd.jt = [
  ".blocklySvg {",
  "background-color: #fff;",
  "outline: none;",
  "overflow: hidden;",
  "position: absolute;",
  "display: block;",
  "}",
  ".blocklyWidgetDiv {",
  "display: none;",
  "position: absolute;",
  "z-index: 99999;",
  "}",
  ".injectionDiv {",
  "height: 100%;",
  "position: relative;",
  "overflow: hidden;",
  "touch-action: none;",
  "}",
  ".blocklyNonSelectable {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "}",
  ".blocklyWsDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "}",
  ".blocklyWsDragSurface.blocklyOverflowVisible {",
  "overflow: visible;",
  "}",
  ".blocklyBlockDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "right: 0;",
  "bottom: 0;",
  "overflow: visible !important;",
  "z-index: 50;",
  "}",
  ".blocklyBlockCanvas.blocklyCanvasTransitioning,",
  ".blocklyBubbleCanvas.blocklyCanvasTransitioning {",
  "transition: transform .5s;",
  "}",
  ".blocklyTooltipDiv {",
  "background-color: #ffffc7;",
  "border: 1px solid #ddc;",
  "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
  "color: #000;",
  "display: none;",
  "font: 9pt sans-serif;",
  "opacity: .9;",
  "padding: 2px;",
  "position: absolute;",
  "z-index: 100000;",
  "}",
  ".blocklyDropDownDiv {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "z-index: 1000;",
  "display: none;",
  "border: 1px solid;",
  "border-color: #dadce0;",
  "background-color: #fff;",
  "border-radius: 2px;",
  "padding: 4px;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownContent {",
  "max-height: 300px;",
  "overflow: auto;",
  "overflow-x: hidden;",
  "position: relative;",
  "}",
  ".blocklyDropDownArrow {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "width: 16px;",
  "height: 16px;",
  "z-index: -1;",
  "background-color: inherit;",
  "border-color: inherit;",
  "}",
  ".blocklyDropDownButton {",
  "display: inline-block;",
  "float: left;",
  "padding: 0;",
  "margin: 4px;",
  "border-radius: 4px;",
  "outline: none;",
  "border: 1px solid;",
  "transition: box-shadow .1s;",
  "cursor: pointer;",
  "}",
  ".blocklyArrowTop {",
  "border-top: 1px solid;",
  "border-left: 1px solid;",
  "border-top-left-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyArrowBottom {",
  "border-bottom: 1px solid;",
  "border-right: 1px solid;",
  "border-bottom-right-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyResizeSE {",
  "cursor: se-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeSW {",
  "cursor: sw-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeLine {",
  "stroke: #515A5A;",
  "stroke-width: 1;",
  "}",
  ".blocklyHighlightedConnectionPath {",
  "fill: none;",
  "stroke: #fc3;",
  "stroke-width: 4px;",
  "}",
  ".blocklyPathLight {",
  "fill: none;",
  "stroke-linecap: round;",
  "stroke-width: 1;",
  "}",
  ".blocklySelected>.blocklyPathLight {",
  "display: none;",
  "}",
  ".blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  "cursor: grab;",
  "cursor: -webkit-grab;",
  "}",
  ".blocklyDragging {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDraggable:active {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyBlockDragSurface .blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging.blocklyDraggingDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyDragging>.blocklyPath,",
  ".blocklyDragging>.blocklyPathLight {",
  "fill-opacity: .8;",
  "stroke-opacity: .8;",
  "}",
  ".blocklyDragging>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyDisabled>.blocklyPath {",
  "fill-opacity: .5;",
  "stroke-opacity: .5;",
  "}",
  ".blocklyDisabled>.blocklyPathLight,",
  ".blocklyDisabled>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyInsertionMarker>.blocklyPath,",
  ".blocklyInsertionMarker>.blocklyPathLight,",
  ".blocklyInsertionMarker>.blocklyPathDark {",
  "fill-opacity: .2;",
  "stroke: none;",
  "}",
  ".blocklyMultilineText {",
  "font-family: monospace;",
  "}",
  ".blocklyNonEditableText>text {",
  "pointer-events: none;",
  "}",
  ".blocklyFlyout {",
  "position: absolute;",
  "z-index: 20;",
  "}",
  ".blocklyText text {",
  "cursor: default;",
  "}",
  ".blocklySvg text,",
  ".blocklyBlockDragSurface text {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "cursor: inherit;",
  "}",
  ".blocklyHidden {",
  "display: none;",
  "}",
  ".blocklyFieldDropdown:not(.blocklyHidden) {",
  "display: block;",
  "}",
  ".blocklyIconGroup {",
  "cursor: default;",
  "}",
  ".blocklyIconGroup:not(:hover),",
  ".blocklyIconGroupReadonly {",
  "opacity: .6;",
  "}",
  ".blocklyIconShape {",
  "fill: #00f;",
  "stroke: #fff;",
  "stroke-width: 1px;",
  "}",
  ".blocklyIconSymbol {",
  "fill: #fff;",
  "}",
  ".blocklyMinimalBody {",
  "margin: 0;",
  "padding: 0;",
  "}",
  ".blocklyHtmlInput {",
  "border: none;",
  "border-radius: 4px;",
  "height: 100%;",
  "margin: 0;",
  "outline: none;",
  "padding: 0;",
  "width: 100%;",
  "text-align: center;",
  "display: block;",
  "box-sizing: border-box;",
  "}",
  ".blocklyHtmlInput::-ms-clear {",
  "display: none;",
  "}",
  ".blocklyMainBackground {",
  "stroke-width: 1;",
  "stroke: #c6c6c6;",
  "}",
  ".blocklyMutatorBackground {",
  "fill: #fff;",
  "stroke: #ddd;",
  "stroke-width: 1;",
  "}",
  ".blocklyFlyoutBackground {",
  "fill: #ddd;",
  "fill-opacity: .8;",
  "}",
  ".blocklyMainWorkspaceScrollbar {",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutScrollbar {",
  "z-index: 30;",
  "}",
  ".blocklyScrollbarHorizontal,",
  ".blocklyScrollbarVertical {",
  "position: absolute;",
  "outline: none;",
  "}",
  ".blocklyScrollbarBackground {",
  "opacity: 0;",
  "}",
  ".blocklyScrollbarHandle {",
  "fill: #ccc;",
  "}",
  ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyScrollbarHandle:hover {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarHandle {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyFlyout .blocklyScrollbarHandle:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyInvalidInput {",
  "background: #faa;",
  "}",
  ".blocklyVerticalMarker {",
  "stroke-width: 3px;",
  "fill: rgba(255,255,255,.5);",
  "pointer-events: none;",
  "}",
  ".blocklyComputeCanvas {",
  "position: absolute;",
  "width: 0;",
  "height: 0;",
  "}",
  ".blocklyNoPointerEvents {",
  "pointer-events: none;",
  "}",
  ".blocklyContextMenu {",
  "border-radius: 4px;",
  "max-height: 100%;",
  "}",
  ".blocklyDropdownMenu {",
  "border-radius: 2px;",
  "padding: 0 !important;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItem {",
  "padding-left: 28px;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItemRtl {",
  "padding-left: 5px;",
  "padding-right: 28px;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu {",
  "background: #fff;",
  "border: 1px solid transparent;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "font: normal 13px Arial, sans-serif;",
  "margin: 0;",
  "outline: none;",
  "padding: 4px 0;",
  "position: absolute;",
  "overflow-y: auto;",
  "overflow-x: hidden;",
  "max-height: 100%;",
  "z-index: 20000;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv .blocklyMenu {",
  "background: inherit;",
  "border: inherit;",
  'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
  "outline: none;",
  "position: relative;",
  "z-index: 20000;",
  "}",
  ".blocklyMenuItem {",
  "border: none;",
  "color: #000;",
  "cursor: pointer;",
  "list-style: none;",
  "margin: 0;",
  "min-width: 7em;",
  "padding: 6px 15px;",
  "white-space: nowrap;",
  "}",
  ".blocklyMenuItemDisabled {",
  "color: #ccc;",
  "cursor: inherit;",
  "}",
  ".blocklyMenuItemHighlight {",
  "background-color: rgba(0,0,0,.1);",
  "}",
  ".blocklyMenuItemCheckbox {",
  "height: 16px;",
  "position: absolute;",
  "width: 16px;",
  "}",
  ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {",
  "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;",
  "float: left;",
  "margin-left: -24px;",
  "position: static;",
  "}",
  ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {",
  "float: right;",
  "margin-right: -24px;",
  "}",
];
g.g.Qa = {};
g.g.Qa.Ad = function (a) {
  return (a * Math.PI) / 180;
};
g.g.Qa.Rm = function (a) {
  return (180 * a) / Math.PI;
};
g.g.Qa.yg = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.H = function () {};
g.H.yu = null;
g.H.zf = null;
g.H.XC = null;
g.H.Jp = 16;
g.H.sy = 1;
g.H.oy = 12;
g.H.uz = 16;
g.H.Ys = 0.25;
g.H.pu = null;
g.H.Uk = null;
g.H.cg = "";
g.H.fg = "";
g.H.jb = function () {
  if (!g.H.lg) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.ns || document.body).appendChild(a);
    g.H.lg = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Kh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.hf = c;
    g.H.lg.style.opacity = 0;
    g.H.lg.style.transition =
      "transform " + g.H.Ys + "s, opacity " + g.H.Ys + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Ka(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.Nc(a, "blocklyFocused");
    });
  }
};
g.H.EK = function (a) {
  g.H.yu = a;
};
g.H.uB = function () {
  return g.H.Kh;
};
g.H.hH = function () {
  g.H.Kh.textContent = "";
  g.H.Kh.style.width = "";
};
g.H.Vc = function (a, c) {
  g.H.lg.style.backgroundColor = a;
  g.H.lg.style.borderColor = c;
};
g.H.CO = function (a, c, d, e) {
  return g.H.kD(g.H.BB(c), a, d, e);
};
g.H.jD = function (a, c) {
  g.H.XC = !0;
  g.H.kD(g.H.CB(a), a, c, void 0);
};
g.H.BB = function (a) {
  var c = a.Oa(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.pk(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.CB = function (a) {
  a = ca(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.kD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.Y();
  for (var k = e.u; k.options.vc; ) k = k.options.vc;
  g.H.EK(v(k).parentNode);
  return g.H.show(c, e.L, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.zf = a;
  g.H.Uk = k || null;
  a = g.H.lg;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Lg();
  g.H.cg = c.Lb.Yf();
  g.H.fg = c.Og().Yf();
  g.g.o.Ka(a, g.H.cg);
  g.g.o.Ka(a, g.H.fg);
  return g.H.Ro(d, e, f, h);
};
g.H.aI = function () {
  var a = g.g.style.pk(g.H.yu),
    c = g.g.style.Sh(g.H.yu);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.mI = function (a, c, d, e) {
  var f = g.H.aI(),
    h = g.g.style.Sh(g.H.lg);
  return c + h.height < f.bottom
    ? g.H.AB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.zB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.AB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.zB(d, e, f, h)
    : g.H.nI(a, f, h);
};
g.H.AB = function (a, c, d, e) {
  a = g.H.Nv(a, d.left, d.right, e.width);
  return {
    $v: a.gm,
    aw: c,
    yv: a.gm,
    zv: c + g.H.uz,
    Sl: a.Sl,
    su: -(g.H.Jp / 2 + g.H.sy),
    Gq: !0,
    qu: !0,
  };
};
g.H.zB = function (a, c, d, e) {
  a = g.H.Nv(a, d.left, d.right, e.width);
  return {
    $v: a.gm,
    aw: c - e.height,
    yv: a.gm,
    zv: c - e.height - g.H.uz,
    Sl: a.Sl,
    su: e.height - 2 * g.H.sy - g.H.Jp / 2,
    Gq: !1,
    qu: !0,
  };
};
g.H.nI = function (a, c, d) {
  a = g.H.Nv(a, c.left, c.right, d.width);
  return {
    $v: a.gm,
    aw: 0,
    yv: a.gm,
    zv: 0,
    Gq: null,
    Sl: null,
    su: null,
    qu: !1,
  };
};
g.H.Nv = function (a, c, d, e) {
  var f = a;
  a = g.g.Qa.yg(c, a - e / 2, d - e);
  f -= g.H.Jp / 2;
  c = g.g.Qa.yg(g.H.oy, f - a, e - g.H.oy - g.H.Jp);
  return { Sl: c, gm: a };
};
g.H.isVisible = function () {
  return !!g.H.zf;
};
g.H.pm = function (a, c) {
  g.H.zf === a && (c ? g.H.tk() : g.H.Ia());
};
g.H.Ia = function () {
  var a = g.H.lg;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.pu = setTimeout(function () {
    g.H.tk();
  }, 1e3 * g.H.Ys);
  g.H.Uk && (g.H.Uk(), (g.H.Uk = null));
};
g.H.tk = function () {
  if (g.H.isVisible()) {
    g.H.pu && clearTimeout(g.H.pu);
    var a = g.H.lg;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.Uk && (g.H.Uk(), (g.H.Uk = null));
    g.H.hH();
    g.H.zf = null;
    g.H.cg && (g.g.o.Nc(a, g.H.cg), (g.H.cg = ""));
    g.H.fg && (g.g.o.Nc(a, g.H.fg), (g.H.fg = ""));
    da(g.Lg());
  }
};
g.H.Ro = function (a, c, d, e) {
  a = g.H.mI(a, c, d, e);
  a.qu
    ? ((g.H.hf.style.display = ""),
      (g.H.hf.style.transform =
        "translate(" + a.Sl + "px," + a.su + "px) rotate(45deg)"),
      g.H.hf.setAttribute(
        "class",
        a.Gq
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.hf.style.display = "none");
  c = Math.floor(a.$v);
  d = Math.floor(a.aw);
  e = Math.floor(a.yv);
  var f = Math.floor(a.zv),
    h = g.H.lg;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.Gq;
};
g.H.wO = function () {
  if (g.H.zf) {
    var a = g.H.zf,
      c = a.Y();
    a = g.H.XC ? g.H.CB(a) : g.H.BB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.Ro(c, a.bottom, c, a.top);
  } else g.H.Ia();
};
g.Qj = function (a, c) {
  this.mm = a;
  this.Kx = c.spacing;
  this.lC = c.length;
  this.VI = (this.rw = a.firstChild) && this.rw.nextSibling;
  this.MK = c.snap;
};
g.Qj.prototype.zj = 1;
g.Qj.prototype.I = function () {
  this.mm = null;
};
g.Qj.prototype.update = function (a) {
  this.zj = a;
  var c = this.Kx * a || 100;
  this.mm.setAttribute("width", c);
  this.mm.setAttribute("height", c);
  c = Math.floor(this.Kx / 2) + 0.5;
  var d = c - this.lC / 2,
    e = c + this.lC / 2;
  c *= a;
  d *= a;
  e *= a;
  ea(this.rw, a, d, e, c, c);
  ea(this.VI, a, c, c, d, e);
};
function ea(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Qj.prototype.moveTo = function (a, c) {
  this.mm.setAttribute("x", a);
  this.mm.setAttribute("y", c);
  (g.g.userAgent.af || g.g.userAgent.Pj) && this.update(this.zj);
};
g.Qj.jb = function (a, c, d) {
  a = g.g.o.P(
    g.g.G.wz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.P(g.g.G.Tj, { stroke: c.colour }, a),
      1 < c.length && g.g.o.P(g.g.G.Tj, { stroke: c.colour }, a))
    : g.g.o.P(g.g.G.Tj, {}, a);
  return a;
};
g.ak = function (a, c, d, e) {
  this.name = a;
  this.Pi = c || Object.create(null);
  this.Nq = d || Object.create(null);
  this.FA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.Nx = null;
  g.C.register(g.C.aa.au, a, this);
};
g.ak.prototype.Yf = function () {
  return this.name + "-theme";
};
function fa(a, c) {
  return (c = a.FA[c]) && "string" == typeof c && fa(a, c)
    ? fa(a, c)
    : c
    ? String(c)
    : null;
}
g.ak.zH = function (a, c) {
  var d = new g.ak(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.Mv(g.C.aa.au, e)),
    e instanceof g.ak && (g.g.object.em(d, e), (d.name = a)));
  g.g.object.em(d.Pi, c.blockStyles);
  g.g.object.em(d.Nq, c.categoryStyles);
  g.g.object.em(d.FA, c.componentStyles);
  g.g.object.em(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.Nx = c.startHats);
  return d;
};
g.zh = {};
g.zh.yi = {};
g.zh.yi.wH = {
  colour_blocks: { colourPrimary: "20" },
  list_blocks: { colourPrimary: "260" },
  logic_blocks: { colourPrimary: "210" },
  loop_blocks: { colourPrimary: "120" },
  math_blocks: { colourPrimary: "230" },
  procedure_blocks: { colourPrimary: "290" },
  text_blocks: { colourPrimary: "160" },
  variable_blocks: { colourPrimary: "330" },
  variable_dynamic_blocks: { colourPrimary: "310" },
  hat_blocks: { colourPrimary: "330", hat: "cap" },
};
g.zh.yi.Nq = {
  colour_category: { colour: "20" },
  list_category: { colour: "260" },
  logic_category: { colour: "210" },
  loop_category: { colour: "120" },
  math_category: { colour: "230" },
  procedure_category: { colour: "290" },
  text_category: { colour: "160" },
  variable_category: { colour: "330" },
  variable_dynamic_category: { colour: "310" },
};
g.zh.yi = new g.ak("classic", g.zh.yi.wH, g.zh.yi.Nq);
g.g.wl = {};
g.g.wl.qJ = 0;
g.g.wl.Lv = function () {
  return "blockly-" + (g.g.wl.qJ++).toString(36);
};
g.g.DM = function () {};
g.g.ya = {};
g.g.ya.et = "categoryToolbox";
g.g.ya.Ry = "flyoutToolbox";
g.g.ya.Nd = { zq: g.$j, at: g.yq, Sj: g.ff, Xj: g.Nl };
g.g.ya.Mu = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.ya.ax(a)), (a = g.g.ya.rH(a));
  g.g.ya.jL(a);
  return a;
};
g.g.ya.jL = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.ya.Ry && c != g.g.ya.et)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.ya.Ry +
        " or " +
        g.g.ya.et
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.ya.NA = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.ya.ey(a)
    : [];
};
g.g.ya.qo = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.ya.et
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.ya.bC = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.ya.rH = function (a) {
  var c = { contents: g.g.ya.ey(a) };
  a instanceof Node && g.g.ya.kA(a, c);
  return c;
};
g.g.ya.ey = function (a) {
  var c = [],
    d = a.childNodes;
  d || (d = a);
  a = 0;
  for (var e; (e = d[a]); a++)
    if (e.tagName) {
      var f = {},
        h = e.tagName.toUpperCase();
      f.kind = h;
      "BLOCK" == h
        ? (f.blockxml = e)
        : e.childNodes &&
          0 < e.childNodes.length &&
          (f.contents = g.g.ya.ey(e));
      g.g.ya.kA(e, f);
      c.push(f);
    }
  return c;
};
g.g.ya.kA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.ya.ax = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.af && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.V.Ff(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.g.xml = {};
g.g.xml.UF = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.UF, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.XK = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.qe = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.h.hg = function (a) {
  g.h.hg.v.constructor.call(this);
  this.qb = (this.Me = "undefined" == typeof a) ? "" : a.id;
  this.Pc = this.Me ? "" : a.u.id;
};
g.g.object.X(g.h.hg, g.h.Abstract);
g.h.hg.prototype.xa = function () {
  var a = g.h.hg.v.xa.call(this);
  a.blockId = this.qb;
  return a;
};
g.h.hg.prototype.ka = function (a) {
  g.h.hg.v.ka.call(this, a);
  this.qb = a.blockId;
};
g.h.xi = function (a, c, d, e, f) {
  g.h.xi.v.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.X(g.h.xi, g.h.hg);
g.h.ih = g.h.xi;
b = g.h.xi.prototype;
b.type = g.h.Mj;
b.xa = function () {
  var a = g.h.xi.v.xa.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ka = function (a) {
  g.h.xi.v.ka.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.wm = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = u(this).Vd(this.qb);
  if (c)
    switch (
      (c.jd && c.jd.Jb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = w(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.bh(a || null);
        break;
      case "collapsed":
        c.Aj(!!a);
        break;
      case "disabled":
        c.ge(!a);
        break;
      case "inline":
        c.Wc(!!a);
        break;
      case "mutation":
        var d = "";
        c.sb && (d = (d = c.sb()) && g.V.qe(d));
        if (c.Wb) {
          var e = g.V.Ff(a || "<mutation/>");
          c.Wb(e);
        }
        g.h.Ha(new g.h.xi(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.qb);
};
g.h.Kf = function (a) {
  g.h.Kf.v.constructor.call(this, a);
  a &&
    (a.Pa && (this.ab = !1),
    (this.xml = a.u.pa ? g.V.wu(a) : g.V.Fh(a)),
    (this.bj = g.h.vB(a)));
};
g.g.object.X(g.h.Kf, g.h.hg);
g.h.Pp = g.h.Kf;
g.h.Kf.prototype.type = g.h.Wp;
g.h.Kf.prototype.xa = function () {
  var a = g.h.Kf.v.xa.call(this);
  a.xml = g.V.qe(this.xml);
  a.ids = this.bj;
  this.ab || (a.recordUndo = this.ab);
  return a;
};
g.h.Kf.prototype.ka = function (a) {
  g.h.Kf.v.ka.call(this, a);
  this.xml = g.V.Ff(a.xml);
  this.bj = a.ids;
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
g.h.Kf.prototype.run = function (a) {
  var c = u(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.V.ik(a, c);
  else {
    a = 0;
    for (var d; (d = this.bj[a]); a++) {
      var e = c.Vd(d);
      e
        ? e.I(!1)
        : d == this.qb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.h.mg = function (a) {
  g.h.mg.v.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Pa && (this.ab = !1);
    this.Bm = a.u.pa ? g.V.wu(a) : g.V.Fh(a);
    this.bj = g.h.vB(a);
  }
};
g.g.object.X(g.h.mg, g.h.hg);
g.h.aE = g.h.mg;
g.h.mg.prototype.type = g.h.Oj;
g.h.mg.prototype.xa = function () {
  var a = g.h.mg.v.xa.call(this);
  a.oldXml = g.V.qe(this.Bm);
  a.ids = this.bj;
  this.ab || (a.recordUndo = this.ab);
  return a;
};
g.h.mg.prototype.ka = function (a) {
  g.h.mg.v.ka.call(this, a);
  this.Bm = g.V.Ff(a.oldXml);
  this.bj = a.ids;
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
g.h.mg.prototype.run = function (a) {
  var c = u(this);
  if (a) {
    a = 0;
    for (var d; (d = this.bj[a]); a++) {
      var e = c.Vd(d);
      e
        ? e.I(!1)
        : d == this.qb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.Bm), g.V.ik(a, c);
};
g.h.Uj = function (a) {
  g.h.Uj.v.constructor.call(this, a);
  a &&
    (a.Pa && (this.ab = !1),
    (a = ha(this)),
    (this.FC = a.OC),
    (this.BC = a.XB),
    (this.Nw = a.OA));
};
g.g.object.X(g.h.Uj, g.h.hg);
g.h.Wm = g.h.Uj;
b = g.h.Uj.prototype;
b.type = g.h.fn;
b.xa = function () {
  var a = g.h.Uj.v.xa.call(this);
  this.Rk && (a.newParentId = this.Rk);
  this.Qk && (a.newInputName = this.Qk);
  this.pj &&
    (a.newCoordinate = Math.round(this.pj.x) + "," + Math.round(this.pj.y));
  this.ab || (a.recordUndo = this.ab);
  return a;
};
b.ka = function (a) {
  g.h.Uj.v.ka.call(this, a);
  this.Rk = a.newParentId;
  this.Qk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.pj = new g.g.N(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
b.Wk = function () {
  var a = ha(this);
  this.Rk = a.OC;
  this.Qk = a.XB;
  this.pj = a.OA;
};
function ha(a) {
  var c = u(a).Vd(a.qb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.OC = d.id), (c = ia(d, c)))) a.XB = c.name;
  } else a.OA = c.Za();
  return a;
}
b.wm = function () {
  return this.FC == this.Rk && this.BC == this.Qk && g.g.N.qf(this.Nw, this.pj);
};
b.run = function (a) {
  var c = u(this),
    d = c.Vd(this.qb);
  if (d) {
    var e = a ? this.Rk : this.FC,
      f = a ? this.Qk : this.BC;
    a = a ? this.pj : this.Nw;
    var h = null;
    if (e && ((h = c.Vd(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && x(d);
    if (a) (f = d.Za()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ba;
      if (f) {
        if ((c = z(h, f))) var k = c.connection;
      } else d.type == g.Nf && (k = h.Z);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.qb);
};
g.C.register(g.C.aa.ec, g.h.Wp, g.h.Kf);
g.C.register(g.C.aa.ec, g.h.Oj, g.h.mg);
g.C.register(g.C.aa.ec, g.h.Mj, g.h.xi);
g.C.register(g.C.aa.ec, g.h.fn, g.h.Uj);
g.h.vl = function (a) {
  this.Me = "undefined" == typeof a;
  this.Pc = a ? a.id : "";
  this.group = g.h.uc();
  this.ab = !1;
};
g.g.object.X(g.h.vl, g.h.Abstract);
g.h.vl.prototype.type = g.h.Py;
g.h.vl.prototype.xa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Pc && (a.workspaceId = this.Pc);
  return a;
};
g.h.vl.prototype.ka = function (a) {
  this.Me = !1;
  this.Pc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.aa.ec, g.h.Py, g.h.vl);
g.h.Ch = function (a) {
  g.h.Ch.v.constructor.call(this);
  this.Gj = (this.Me = "undefined" == typeof a) ? "" : a.Na();
  this.Pc = this.Me ? "" : a.u.id;
};
g.g.object.X(g.h.Ch, g.h.Abstract);
g.h.Ch.prototype.xa = function () {
  var a = g.h.Ch.v.xa.call(this);
  a.varId = this.Gj;
  return a;
};
g.h.Ch.prototype.ka = function (a) {
  g.h.Ch.v.xa.call(this);
  this.Gj = a.varId;
};
g.h.gf = function (a) {
  g.h.gf.v.constructor.call(this, a);
  a && ((this.hl = a.type), (this.fl = a.name));
};
g.g.object.X(g.h.gf, g.h.Ch);
g.h.gf.prototype.type = g.h.Wz;
g.h.gf.prototype.xa = function () {
  var a = g.h.gf.v.xa.call(this);
  a.varType = this.hl;
  a.varName = this.fl;
  return a;
};
g.h.gf.prototype.ka = function (a) {
  g.h.gf.v.ka.call(this, a);
  this.hl = a.varType;
  this.fl = a.varName;
};
g.h.gf.prototype.run = function (a) {
  var c = u(this);
  a ? c.lf(this.fl, this.hl, this.Gj) : c.Ph(this.Gj);
};
g.h.Qf = function (a) {
  g.h.Qf.v.constructor.call(this, a);
  a && ((this.hl = a.type), (this.fl = a.name));
};
g.g.object.X(g.h.Qf, g.h.Ch);
g.h.Qf.prototype.type = g.h.Xz;
g.h.Qf.prototype.xa = function () {
  var a = g.h.Qf.v.xa.call(this);
  a.varType = this.hl;
  a.varName = this.fl;
  return a;
};
g.h.Qf.prototype.ka = function (a) {
  g.h.Qf.v.ka.call(this, a);
  this.hl = a.varType;
  this.fl = a.varName;
};
g.h.Qf.prototype.run = function (a) {
  var c = u(this);
  a ? c.Ph(this.Gj) : c.lf(this.fl, this.hl, this.Gj);
};
g.h.vg = function (a, c) {
  g.h.vg.v.constructor.call(this, a);
  a && ((this.Pw = a.name), (this.Kw = "undefined" == typeof c ? "" : c));
};
g.g.object.X(g.h.vg, g.h.Ch);
g.h.vg.prototype.type = g.h.Zz;
g.h.vg.prototype.xa = function () {
  var a = g.h.vg.v.xa.call(this);
  a.oldName = this.Pw;
  a.newName = this.Kw;
  return a;
};
g.h.vg.prototype.ka = function (a) {
  g.h.vg.v.ka.call(this, a);
  this.Pw = a.oldName;
  this.Kw = a.newName;
};
g.h.vg.prototype.run = function (a) {
  var c = u(this);
  a ? c.xj(this.Gj, this.Kw) : c.xj(this.Gj, this.Pw);
};
g.C.register(g.C.aa.ec, g.h.Wz, g.h.gf);
g.C.register(g.C.aa.ec, g.h.Xz, g.h.Qf);
g.C.register(g.C.aa.ec, g.h.Zz, g.h.vg);
g.V = {};
g.V.sL = function () {
  var a = A,
    c = g.g.xml.createElement("xml"),
    d = g.V.nL(g.$.oA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.Ns);
  1 < e.length &&
    ((a.eh.offset = Math.sin(g.g.Qa.Ad(g.Ub.Hz))),
    a.L && (a.eh.offset *= -1),
    e.sort(a.eh));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.uD(!0));
  a = a.hc(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.V.wu(e, !0));
  return c;
};
g.V.nL = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.Na();
    c.appendChild(f);
  }
  return c;
};
g.V.wu = function (a, c) {
  if (a.ve() && ((a = ja(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.L && (d = a.u.Pg());
  c = g.V.Fh(a, c);
  var e = a.Za();
  c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.V.TH = function (a) {
  var c = !1;
  a.name &&
    (a.Zj
      ? (c = !0)
      : a.aq &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.tD(c))
    : null;
};
g.V.QG = function (a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++) (h = g.V.TH(h)) && c.appendChild(h);
};
g.V.Fh = function (a, c) {
  if (a.ve()) return (a = ja(a, !1)[0]) ? g.V.Fh(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Pa ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.sb) {
    var e = a.sb();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.V.QG(a, d);
  if ((e = a.Fe.text)) {
    var f = a.Fe.size,
      h = a.Fe.hx,
      k = g.g.xml.createElement("comment");
    k.appendChild(g.g.xml.createTextNode(e));
    k.setAttribute("pinned", h);
    k.setAttribute("h", f.height);
    k.setAttribute("w", f.width);
    d.appendChild(k);
  }
  a.data &&
    ((e = g.g.xml.createElement("data")),
    e.appendChild(g.g.xml.createTextNode(a.data)),
    d.appendChild(e));
  for (e = 0; (f = a.U[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.nh) {
      var m = f.connection.sa();
      f.type == g.pb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.Cb && (l = g.g.xml.createElement("statement"));
      k = f.connection.lm();
      !k || (m && m.Pa) || l.appendChild(g.V.AA(k, c));
      m &&
        ((k = g.V.Fh(m, c)),
        k.nodeType == g.g.o.Gi.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.Xh && a.Xh != a.JI && d.setAttribute("inline", a.Xh);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.ue() || a.Pa || d.setAttribute("deletable", !1);
  a.Sc() || a.Pa || d.setAttribute("movable", !1);
  a.ce() || d.setAttribute("editable", !1);
  if ((e = r(a)))
    (k = g.V.Fh(e, c)),
      k.nodeType == g.g.o.Gi.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Z && a.Z.lm();
  !k || (e && e.Pa) || l.appendChild(g.V.AA(k, c));
  return d;
};
g.V.AA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Gi.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Gi.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.V.qe = function (a) {
  return g.g.xml.qe(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.V.aO = function (a) {
  a = g.V.qe(a).split("<");
  for (var c = "", d = 1; d < a.length; d++) {
    var e = a[d];
    "/" == e[0] && (c = c.substring(2));
    a[d] = c + "<" + e;
    "/" != e[0] && "/>" != e.slice(-2) && (c += "  ");
  }
  a = a.join("\n");
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
  return a.replace(/^\n/, "");
};
g.V.Ff = function (a) {
  var c = g.g.xml.XK(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.V.YN = function (a, c) {
  c.Xc(!1);
  c.clear();
  a = g.V.ik(a, c);
  c.Xc(!0);
  return a;
};
g.V.ik = function (a, c) {
  if (a instanceof g.Ub) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.L && (e = c.Pg());
  d = [];
  g.g.o.pp();
  var f = g.h.uc();
  f || g.h.ea(!0);
  c.Xc && c.Xc(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.h.ab)) {
        var p = g.V.hk(n, c);
        d.push(p.id);
        var t = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          y = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(t) || isNaN(y) || p.moveBy(c.L ? e - t : t, y);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.pa
            ? g.Ql
              ? g.Ql.ao(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.hA
            ? g.hA.ao(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.V.MH(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.h.ea(!1), g.g.o.qp();
  }
  c.Xc && c.Xc(!0);
  g.h.Ha(new g.h.vl(c));
  return d;
};
g.V.VN = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = ka(c));
  a = g.V.ik(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.L ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Vd(a[d]).Za();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.L ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.Vd(a[d]).moveBy(f, e);
  }
  return a;
};
g.V.hk = function (a, c) {
  if (a instanceof g.Ub) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.h.disable();
  d = c.mk();
  try {
    var e = g.V.hv(a, c),
      f = q(e, !1);
    if (c.pa) {
      la(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].uf();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ga(!1);
      setTimeout(function () {
        e.Wf || la(e, !0);
      }, 1);
      ma(e);
      na(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].zk();
  } finally {
    g.h.enable();
  }
  if (g.h.isEnabled()) {
    a = g.$.rB(c, d);
    for (h = 0; h < a.length; h++) g.h.Ha(new g.h.gf(a[h]));
    g.h.Ha(new g.h.Pp(e));
  }
  return e;
};
g.V.MH = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Gi.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.lf(e.textContent, f, h);
    }
};
g.V.hv = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.oj(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Gi.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.Gi.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var p = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Wb && (d.Wb(l), d.uf && (n = !0));
          break;
        case "comment":
          if (!g.Comment) {
            console.warn(
              "Missing require for Blockly.Comment, ignoring block comment."
            );
            break;
          }
          m = l.textContent;
          h = "true" == l.getAttribute("pinned");
          k = parseInt(l.getAttribute("w"), 10);
          l = parseInt(l.getAttribute("h"), 10);
          d.bh(m);
          d.Fe.hx = h;
          isNaN(k) || isNaN(l) || (d.Fe.size = new g.g.ef(k, l));
          h &&
            d.dI &&
            !d.Qb &&
            setTimeout(function () {
              d.kf.Jb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.V.LH(d, p, l);
          break;
        case "value":
        case "statement":
          l = z(d, p);
          if (!l) {
            console.warn("Ignoring non-existent input " + p + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.V.hv(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ba) l.connection.connect(h.ba);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Km(m);
          break;
        case "next":
          if (h) {
            if (!d.Z) throw TypeError("Next statement does not exist.");
            if (d.Z.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.V.hv(h, c);
            if (!h.ba)
              throw TypeError("Next block does not have previous statement.");
            d.Z.connect(h.ba);
          }
          m && d.Z && d.Z.Km(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.uf();
  (f = a.getAttribute("inline")) && d.Wc("true" == f);
  (f = a.getAttribute("disabled")) && d.ge("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.Wu = "true" == f;
  (f = a.getAttribute("movable")) && d.Cs("true" == f);
  (f = a.getAttribute("editable")) && d.Bx("true" == f);
  (f = a.getAttribute("collapsed")) && d.Aj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = ja(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Pa) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Th().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.Ex(!0);
  }
  return d;
};
g.V.LH = function (a, c, d) {
  var e = w(a, c);
  e
    ? e.ao(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.V.BH = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Kd = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1;
  else {
    d = g.g.ya.Mu(a.toolbox);
    e = g.g.ya.qo(d);
    f = a.trashcan;
    void 0 === f && (f = e);
    var n = a.maxTrashcanContents;
    f ? void 0 === n && (n = 32) : (n = 0);
    h = a.collapse;
    void 0 === h && (h = e);
    k = a.comments;
    void 0 === k && (k = e);
    l = a.disable;
    void 0 === l && (l = e);
    m = a.sounds;
    void 0 === m && (m = !0);
  }
  var p = !!a.rtl,
    t = a.horizontalLayout;
  void 0 === t && (t = !1);
  var y = a.toolboxPosition;
  y = "end" !== y;
  y = t
    ? y
      ? g.g.ya.Nd.zq
      : g.g.ya.Nd.at
    : y == p
    ? g.g.ya.Nd.Xj
    : g.g.ya.Nd.Sj;
  var G = a.css;
  void 0 === G && (G = !0);
  var oa = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (oa = a.media) : a.path && (oa = a.path + "media/");
  var va = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Je = a.renderer || "geras",
    Ke = a.plugins || {};
  this.L = p;
  this.ci = va;
  this.collapse = h;
  this.Hn = k;
  this.disable = l;
  this.readOnly = c;
  this.Dw = a.maxBlocks || Infinity;
  this.Rr = a.maxInstances;
  this.Oo = oa;
  this.qo = e;
  this.Uc = g.Kd.IJ(a, e);
  this.QB = f;
  this.Sr = n;
  this.DI = m;
  this.AI = G;
  this.$d = t;
  this.Vg = d;
  this.MB = g.Kd.HJ(a);
  this.Bb = g.Kd.KJ(a);
  this.La = y;
  this.YK = g.Kd.JJ(a);
  this.Yo = Je;
  this.Zo = a.rendererOverrides;
  this.Sv = null;
  this.vc = a.parentWorkspace;
  this.plugins = Ke;
};
g.AL = function () {};
g.Kd.IJ = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Ij = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Ui = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Kd.KJ = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Ij = void 0 === a.wheel ? !1 : !!a.wheel;
  c.SK = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Fo = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Ho = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.BK = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.gx = void 0 === a.pinch ? c.Ij || c.controls : !!a.pinch;
  return c;
};
g.Kd.HJ = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Fb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.DO = 0 < c.spacing && !!a.snap;
  return c;
};
g.Kd.JJ = function (a) {
  a = a.theme || g.zh.yi;
  return "string" == typeof a
    ? g.C.Mv(g.C.aa.au, a)
    : a instanceof g.ak
    ? a
    : g.ak.zH(a.name || "builtin" + g.g.wl.Lv(), a);
};
g.Kd.ax = function (a) {
  g.g.Xu.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.ya.ax(a);
};
g.Touch = {};
g.Touch.Sz =
  "ontouchstart" in g.g.global ||
  !!(
    g.g.global.document &&
    document.documentElement &&
    "ontouchstart" in document.documentElement
  ) ||
  !(
    !g.g.global.navigator ||
    (!g.g.global.navigator.maxTouchPoints &&
      !g.g.global.navigator.msMaxTouchPoints)
  );
g.Touch.yp = null;
g.Touch.sg = {};
g.g.global.PointerEvent
  ? (g.Touch.sg = {
      mousedown: ["pointerdown"],
      mouseenter: ["pointerenter"],
      mouseleave: ["pointerleave"],
      mousemove: ["pointermove"],
      mouseout: ["pointerout"],
      mouseover: ["pointerover"],
      mouseup: ["pointerup", "pointercancel"],
      touchend: ["pointerup"],
      touchcancel: ["pointercancel"],
    })
  : g.Touch.Sz &&
    (g.Touch.sg = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.Pr = 0;
g.YI = function (a, c) {
  g.kj();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.Pr = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && pa(c, a);
    }, g.FF));
};
g.kj = function () {
  g.Pr && (clearTimeout(g.Pr), (g.Pr = 0));
};
g.Touch.En = function () {
  g.Touch.yp = null;
};
g.Touch.Jx = function (a) {
  return !g.Touch.QI(a) || g.Touch.gH(a);
};
g.Touch.Br = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.gH = function (a) {
  var c = g.Touch.Br(a);
  return void 0 !== g.Touch.yp && null !== g.Touch.yp
    ? g.Touch.yp == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.yp = c), !0)
    : !1;
};
g.Touch.FK = function (a) {
  if (g.g.ub.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.QI = function (a) {
  return (
    g.g.ub.startsWith(a.type, "touch") ||
    g.g.ub.startsWith(a.type, "mouse") ||
    g.g.ub.startsWith(a.type, "pointer")
  );
};
g.Touch.Mr = function (a) {
  return (
    g.g.ub.startsWith(a.type, "touch") || g.g.ub.startsWith(a.type, "pointer")
  );
};
g.Touch.NK = function (a) {
  var c = [];
  if (a.changedTouches)
    for (var d = 0; d < a.changedTouches.length; d++)
      c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
          a.stopPropagation();
        },
        preventDefault: function () {
          a.preventDefault();
        },
      };
  else c.push(a);
  return c;
};
g.tn = function (a) {
  this.s = a;
  this.tf = new g.fb(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Hf = new g.fb(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Mn = g.g.o.P(
    g.g.G.Od,
    { height: g.fb.kd, width: g.fb.kd, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.Bk(this.Mn, a.mi);
  this.ac = null;
};
g.tn.prototype.I = function () {
  g.g.o.removeNode(this.Mn);
  this.ac = this.s = this.Mn = null;
  this.tf.I();
  this.tf = null;
  this.Hf.I();
  this.Hf = null;
};
g.tn.prototype.resize = function () {
  var a = this.s.Xd();
  if (a) {
    var c = !1,
      d = !1;
    this.ac &&
    this.ac.Yb == a.Yb &&
    this.ac.jc == a.jc &&
    this.ac.td == a.td &&
    this.ac.cd == a.cd
      ? ((this.ac &&
          this.ac.Uf == a.Uf &&
          this.ac.Xb == a.Xb &&
          this.ac.vd == a.vd) ||
          (c = !0),
        (this.ac &&
          this.ac.pe == a.pe &&
          this.ac.dc == a.dc &&
          this.ac.ed == a.ed) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.h.disable(), c && this.tf.resize(a), d && this.Hf.resize(a);
      } finally {
        g.h.enable();
      }
      qa(this.s);
    }
    (this.ac && this.ac.Yb == a.Yb && this.ac.cd == a.cd) ||
      this.Mn.setAttribute("x", this.Hf.position.x);
    (this.ac && this.ac.jc == a.jc && this.ac.td == a.td) ||
      this.Mn.setAttribute("y", this.tf.position.y);
    this.ac = a;
  }
};
g.tn.prototype.set = function (a, c) {
  var d = {};
  a *= this.tf.ratio;
  c *= this.Hf.ratio;
  var e = this.Hf.Cf,
    f = a / this.tf.Cf;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.hp(d);
  ra(this.tf, a);
  ra(this.Hf, c);
};
g.fb = function (a, c, d, e) {
  this.s = a;
  this.Cm = d || !1;
  this.wk = c;
  this.ratio = this.ac = null;
  this.He(e);
  this.position = new g.g.N(0, 0);
  a = g.fb.kd;
  c
    ? (this.md.setAttribute("height", a),
      this.Xg.setAttribute("height", a),
      this.we.setAttribute("height", a - 5),
      this.we.setAttribute("y", 2.5),
      (this.Bo = "width"),
      (this.SC = "x"))
    : (this.md.setAttribute("width", a),
      this.Xg.setAttribute("width", a),
      this.we.setAttribute("width", a - 5),
      this.we.setAttribute("x", 2.5),
      (this.Bo = "height"),
      (this.SC = "y"));
  this.MC = g.Aa(this.md, "mousedown", this, this.AJ);
  this.NC = g.Aa(this.we, "mousedown", this, this.BJ);
};
b = g.fb.prototype;
b.Ww = new g.g.N(0, 0);
b.nD = 0;
b.Cf = 0;
b.Yi = 0;
b.po = 0;
b.$h = !0;
b.dk = !0;
g.fb.kd = 15;
g.Touch.Sz && (g.fb.kd = 25);
g.fb.bJ = function (a, c) {
  return a &&
    c &&
    a.Yb == c.Yb &&
    a.jc == c.jc &&
    a.Xb == c.Xb &&
    a.dc == c.dc &&
    a.td == c.td &&
    a.cd == c.cd &&
    a.Uf == c.Uf &&
    a.pe == c.pe &&
    a.vd == c.vd &&
    a.ed == c.ed
    ? !0
    : !1;
};
g.fb.prototype.I = function () {
  sa();
  g.Wa(this.MC);
  this.MC = null;
  g.Wa(this.NC);
  this.NC = null;
  g.g.o.removeNode(this.Xg);
  this.md = this.W = this.Xg = null;
  this.we && (this.s.Oc.unsubscribe(this.we), (this.we = null));
  this.s = null;
};
function ra(a, c) {
  a.po = c;
  a.we.setAttribute(a.SC, a.po);
}
function ta(a, c) {
  a.Cf = c;
  a.Xg.setAttribute(a.Bo, a.Cf);
  a.md.setAttribute(a.Bo, a.Cf);
}
g.tn.prototype.Yk = function (a) {
  this.tf.Yk(a);
  this.Hf.Yk(a);
};
b = g.fb.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.fp(
    this.Xg,
    "translate(" +
      (this.position.x + this.Ww.x) +
      "px," +
      (this.position.y + this.Ww.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.Xd()), !a)) return;
  g.fb.bJ(a, this.ac) ||
    ((this.ac = a), this.wk ? ua(this, a) : wa(this, a), xa(this));
};
function ua(a, c) {
  var d = c.Yb - 1;
  a.Cm && (d -= g.fb.kd);
  ta(a, Math.max(0, d));
  d = c.cd + 0.5;
  a.Cm && a.s.L && (d += g.fb.kd);
  a.setPosition(d, c.td + c.jc - g.fb.kd - 0.5);
  ya(a, c);
}
function ya(a, c) {
  a.Cm || a.Jb(a.Cf < c.Uf);
  a.ratio = a.Cf / c.Uf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Yi = Math.max(0, c.Yb * a.ratio);
  a.we.setAttribute(a.Bo, a.Yi);
  ra(a, za(a, (c.Xb - c.vd) * a.ratio));
}
function wa(a, c) {
  var d = c.jc - 1;
  a.Cm && (d -= g.fb.kd);
  ta(a, Math.max(0, d));
  d = c.cd + 0.5;
  a.s.L || (d += c.Yb - g.fb.kd - 1);
  a.setPosition(d, c.td + 0.5);
  Aa(a, c);
}
function Aa(a, c) {
  a.Cm || a.Jb(a.Cf < c.pe);
  a.ratio = a.Cf / c.pe;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Yi = Math.max(0, c.jc * a.ratio);
  a.we.setAttribute(a.Bo, a.Yi);
  ra(a, za(a, (c.dc - c.ed) * a.ratio));
}
b.He = function (a) {
  var c = "blocklyScrollbar" + (this.wk ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.Xg = g.g.o.P(g.g.G.Ji, { class: c }, null);
  this.W = g.g.o.P(g.g.G.rd, {}, this.Xg);
  this.md = g.g.o.P(g.g.G.Od, { class: "blocklyScrollbarBackground" }, this.W);
  a = Math.floor((g.fb.kd - 5) / 2);
  this.we = g.g.o.P(
    g.g.G.Od,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.W
  );
  this.s.Oc.subscribe(this.we, "scrollbarColour", "fill");
  this.s.Oc.subscribe(this.we, "scrollbarOpacity", "fill-opacity");
  g.g.o.Bk(this.Xg, v(this.s));
};
b.isVisible = function () {
  return this.$h;
};
b.Yk = function (a) {
  var c = a != this.dk;
  this.dk = a;
  c && this.Bp();
};
b.Jb = function (a) {
  var c = a != this.isVisible();
  if (this.Cm) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.$h = a;
  c && this.Bp();
};
b.Bp = function () {
  this.dk && this.isVisible()
    ? this.Xg.setAttribute("display", "block")
    : this.Xg.setAttribute("display", "none");
};
b.AJ = function (a) {
  da(this.s);
  g.Touch.En();
  sa();
  if (g.g.Ik(a)) a.stopPropagation();
  else {
    var c = g.g.Jo(a, v(this.s), Ba(this.s));
    c = this.wk ? c.x : c.y;
    var d = g.g.no(this.we);
    d = this.wk ? d.x : d.y;
    var e = this.po,
      f = 0.95 * this.Yi;
    c <= d ? (e -= f) : c >= d + this.Yi && (e += f);
    ra(this, za(this, e));
    xa(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.BJ = function (a) {
  da(this.s);
  sa();
  g.g.Ik(a)
    ? a.stopPropagation()
    : ((this.PK = this.po),
      Ca(this.s),
      (this.nD = this.wk ? a.clientX : a.clientY),
      (g.fb.Pe = g.Aa(document, "mouseup", this, this.FJ)),
      (g.fb.rj = g.Aa(document, "mousemove", this, this.CJ)),
      a.stopPropagation(),
      a.preventDefault());
};
b.CJ = function (a) {
  ra(this, za(this, this.PK + ((this.wk ? a.clientX : a.clientY) - this.nD)));
  xa(this);
};
b.FJ = function () {
  Da(this.s);
  g.Touch.En();
  sa();
};
function sa() {
  g.Fc(!0);
  g.fb.Pe && (g.Wa(g.fb.Pe), (g.fb.Pe = null));
  g.fb.rj && (g.Wa(g.fb.rj), (g.fb.rj = null));
}
function za(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Cf < a.Yi ? 0 : Math.min(c, a.Cf - a.Yi));
}
function xa(a) {
  var c = a.po / a.Cf;
  isNaN(c) && (c = 0);
  var d = {};
  a.wk ? (d.x = c) : (d.y = c);
  a.s.hp(d);
}
b.set = function (a) {
  ra(this, za(this, a * this.ratio));
  xa(this);
};
g.K = {};
g.K.visible = !1;
g.K.Wl = !1;
g.K.yF = 50;
g.K.tC = 0;
g.K.lp = 0;
g.K.nw = 0;
g.K.ow = 0;
g.K.Hb = null;
g.K.Qo = null;
g.K.oz = 0;
g.K.pz = 10;
g.K.gG = 10;
g.K.hF = 750;
g.K.Ft = 5;
g.K.ob = null;
g.K.oI = function () {
  var a = g.K.JB(g.K.Hb);
  if (a) {
    for (a = a.Gf; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.K.JB = function (a) {
  for (; a && a.Gf; ) {
    if ("string" == typeof a.Gf || "function" == typeof a.Gf) return a;
    a = a.Gf;
  }
  return null;
};
g.K.jb = function () {
  g.K.ob ||
    ((g.K.ob = document.createElement("div")),
    (g.K.ob.className = "blocklyTooltipDiv"),
    (g.ns || document.body).appendChild(g.K.ob));
};
g.K.Vl = function (a) {
  a.fJ = g.Rd(a, "mouseover", null, g.K.EJ);
  a.dJ = g.Rd(a, "mouseout", null, g.K.DJ);
  a.addEventListener("mousemove", g.K.Mo, !1);
};
g.K.Vx = function (a) {
  a && (g.Wa(a.fJ), g.Wa(a.dJ), a.removeEventListener("mousemove", g.K.Mo));
};
g.K.EJ = function (a) {
  g.K.Wl ||
    ((a = g.K.JB(a.currentTarget)),
    g.K.Hb != a && (g.K.Ia(), (g.K.Qo = null), (g.K.Hb = a)),
    clearTimeout(g.K.tC));
};
g.K.DJ = function () {
  g.K.Wl ||
    ((g.K.tC = setTimeout(function () {
      g.K.Hb = null;
      g.K.Qo = null;
      g.K.Ia();
    }, 1)),
    clearTimeout(g.K.lp));
};
g.K.Mo = function (a) {
  if (g.K.Hb && g.K.Hb.Gf && !g.K.Wl)
    if (g.K.visible) {
      var c = g.K.nw - a.pageX;
      a = g.K.ow - a.pageY;
      Math.sqrt(c * c + a * a) > g.K.gG && g.K.Ia();
    } else
      g.K.Qo != g.K.Hb &&
        (clearTimeout(g.K.lp),
        (g.K.nw = a.pageX),
        (g.K.ow = a.pageY),
        (g.K.lp = setTimeout(g.K.KK, g.K.hF)));
};
g.K.I = function () {
  g.K.Hb = null;
  g.K.Qo = null;
  g.K.Ia();
};
g.K.Ia = function () {
  g.K.visible &&
    ((g.K.visible = !1), g.K.ob && (g.K.ob.style.display = "none"));
  g.K.lp && clearTimeout(g.K.lp);
};
g.K.block = function () {
  g.K.Ia();
  g.K.Wl = !0;
};
g.K.eL = function () {
  g.K.Wl = !1;
};
g.K.KK = function () {
  if (!g.K.Wl && ((g.K.Qo = g.K.Hb), g.K.ob)) {
    g.K.ob.textContent = "";
    var a = g.K.oI();
    a = g.g.ub.ID(a, g.K.yF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.K.ob.appendChild(d);
    }
    a = g.K.Hb.L;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.K.ob.style.direction = a ? "rtl" : "ltr";
    g.K.ob.style.display = "block";
    g.K.visible = !0;
    var e = g.K.nw;
    e = a ? e - (g.K.oz + g.K.ob.offsetWidth) : e + g.K.oz;
    var f = g.K.ow + g.K.pz;
    f + g.K.ob.offsetHeight > d + window.scrollY &&
      (f -= g.K.ob.offsetHeight + 2 * g.K.pz);
    a
      ? (e = Math.max(g.K.Ft - window.scrollX, e))
      : e + g.K.ob.offsetWidth > c + window.scrollX - 2 * g.K.Ft &&
        (e = c - g.K.ob.offsetWidth - 2 * g.K.Ft);
    g.K.ob.style.top = f + "px";
    g.K.ob.style.left = e + "px";
  }
};
g.iA = function (a) {
  this.Ln = a;
  this.jb();
};
b = g.iA.prototype;
b.Ob = null;
b.Ln = null;
b.jb = function () {
  this.Ob ||
    ((this.Ob = g.g.o.P(
      g.g.G.Ji,
      {
        xmlns: g.g.o.sn,
        "xmlns:html": g.g.o.Rj,
        "xmlns:xlink": g.g.o.Mi,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.Ln.appendChild(this.Ob));
};
b.bl = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Ob.style.display = "block";
  g.g.o.fp(this.Ob, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Ov = function () {
  return g.g.rf(this.Ob);
};
b.Pq = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.Ob.childNodes[0],
    d = this.Ob.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.Tv(c, "blocklyBlockCanvas") &&
      g.g.o.Tv(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.lx ? g.g.o.Bk(c, this.lx) : a.insertBefore(c, a.firstChild);
  g.g.o.Bk(d, c);
  this.Ob.style.display = "none";
  if (this.Ob.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.fp(this.Ob, "");
  this.lx = null;
};
g.F = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Ap = a;
  this.sm = g.F.LI(a);
  this.Fa = c;
  this.Ts = null;
  (a = d || null) && a.LD && (this.Ts = a.LD);
};
g.F.types = {
  Dc: "field",
  kc: "block",
  bf: "input",
  Wj: "output",
  Id: "next",
  Md: "previous",
  qg: "stack",
  Rc: "workspace",
};
g.F.Fi = !1;
g.F.rE = -20;
g.F.LI = function (a) {
  switch (a) {
    case g.F.types.Md:
    case g.F.types.Id:
    case g.F.types.bf:
    case g.F.types.Wj:
      return !0;
  }
  return !1;
};
g.F.bm = function (a) {
  return a ? new g.F(g.F.types.Dc, a) : null;
};
g.F.Eg = function (a) {
  return a
    ? a.type == g.pb || (a.type == g.Cb && a.Ng())
      ? g.F.ek(a.Ng())
      : a.type == g.Cb
      ? new g.F(g.F.types.Id, a)
      : a.type == g.Mf
      ? new g.F(g.F.types.Wj, a)
      : a.type == g.Nf
      ? new g.F(g.F.types.Md, a)
      : null
    : null;
};
g.F.ek = function (a) {
  return a && a.connection ? new g.F(g.F.types.bf, a.connection) : null;
};
g.F.Dg = function (a) {
  return a ? new g.F(g.F.types.kc, a) : null;
};
g.F.Nn = function (a) {
  return a ? new g.F(g.F.types.qg, a) : null;
};
g.F.cm = function (a, c) {
  return c && a ? new g.F(g.F.types.Rc, a, { LD: c }) : null;
};
g.F.Ru = function (a) {
  var c = a.ba || a.O;
  return c ? g.F.Eg(c) : g.F.Dg(a);
};
b = g.F.prototype;
b.rb = function () {
  return this.Ap;
};
function Ea(a, c) {
  a = a.Fa;
  a instanceof g.ke || (a = a.Y());
  if (!a || !a.u) return null;
  var d = a.Zd();
  a = d.u.hc(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.F.Nn(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function Fa(a) {
  if (!a) return null;
  do var c = a.ba && a.ba.sa();
  while (c && r(c) == a && (a = c));
  return (c = a.ba || a.O) && c.ma && c.ma.Ng() ? g.F.ek(c.ma.Ng()) : g.F.Nn(a);
}
b.Y = function () {
  return this.rb() === g.F.types.kc
    ? this.Fa
    : this.rb() === g.F.types.qg
    ? this.Fa
    : this.rb() === g.F.types.Rc
    ? null
    : this.Fa.Y();
};
b.next = function () {
  switch (this.Ap) {
    case g.F.types.qg:
      return Ea(this, !0);
    case g.F.types.Wj:
      var a = this.Fa;
      return g.F.Dg(a.Y());
    case g.F.types.Dc:
      a: {
        var c = this.Fa,
          d = c.Ng();
        a = c.Y();
        c = d.kb.indexOf(c) + 1;
        d = a.U.indexOf(d);
        for (var e; (e = a.U[d]); d++) {
          for (var f = e.kb; c < f.length; ) {
            if (Ga(f[c]) || g.F.Fi) {
              a = g.F.bm(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.F.ek(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.bf:
      a: {
        c = this.Fa.Ng();
        a = c.Y();
        for (c = a.U.indexOf(c) + 1; (d = a.U[c]); c++) {
          e = d.kb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (Ga(h) || g.F.Fi) {
              a = g.F.bm(h);
              break a;
            }
          if (d.connection) {
            a = g.F.ek(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.kc:
      return g.F.Eg(this.Fa.Z);
    case g.F.types.Md:
      return (a = this.Fa), g.F.Dg(a.Y());
    case g.F.types.Id:
      return (a = this.Fa), g.F.Eg(a.ma);
  }
  return null;
};
b.Sg = function () {
  switch (this.Ap) {
    case g.F.types.Rc:
      var a = this.Fa.hc(!0);
      if (0 < a.length) return g.F.Nn(a[0]);
      break;
    case g.F.types.qg:
      a = this.Fa;
      var c = a.ba || a.O;
      return c ? g.F.Eg(c) : g.F.Dg(a);
    case g.F.types.kc:
      a = this.Fa;
      a: {
        a = a.U;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.kb, f = 0, h; (h = e[f]); f++)
            if (Ga(h) || g.F.Fi) {
              a = g.F.bm(h);
              break a;
            }
          if (d.connection) {
            a = g.F.ek(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.bf:
      return g.F.Eg(this.Fa.ma);
  }
  return null;
};
b.Bf = function () {
  switch (this.Ap) {
    case g.F.types.qg:
      return Ea(this, !1);
    case g.F.types.Dc:
      a: {
        var a = this.Fa;
        var c = a.Ng();
        var d = a.Y();
        a = c.kb.indexOf(a) - 1;
        for (var e = d.U.indexOf(c), f; (f = d.U[e]); e--) {
          if (f.connection && f !== c) {
            c = g.F.ek(f);
            break a;
          }
          for (f = f.kb; -1 < a; ) {
            if (Ga(f[a]) || g.F.Fi) {
              c = g.F.bm(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.U[e - 1].kb.length - 1);
        }
        c = null;
      }
      return c;
    case g.F.types.bf:
      a: {
        c = this.Fa.Ng();
        d = c.Y();
        for (a = d.U.indexOf(c); (e = d.U[a]); a--) {
          if (e.connection && e !== c) {
            c = g.F.ek(e);
            break a;
          }
          e = e.kb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (Ga(h) || g.F.Fi) {
              c = g.F.bm(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.F.types.kc:
      return (c = this.Fa), g.F.Eg(c.ba || c.O);
    case g.F.types.Md:
      c = this.Fa;
      if ((c = c.ma) && !c.Ng()) return g.F.Eg(c);
      break;
    case g.F.types.Id:
      return (c = this.Fa), g.F.Dg(c.Y());
  }
  return null;
};
b.Wg = function () {
  switch (this.Ap) {
    case g.F.types.qg:
      var a = this.Fa,
        c = a.Za();
      return g.F.cm(a.u, new g.g.N(c.x, c.y + g.F.rE));
    case g.F.types.Wj:
      return (a = this.Fa), (c = a.ma) ? g.F.Eg(c) : g.F.Nn(a.Y());
    case g.F.types.Dc:
      return g.F.Dg(this.Fa.Y());
    case g.F.types.bf:
      return (a = this.Fa), g.F.Dg(a.Y());
    case g.F.types.kc:
      return (a = this.Fa), Fa(a);
    case g.F.types.Md:
      return (a = this.Fa), Fa(a.Y());
    case g.F.types.Id:
      return (a = this.Fa), Fa(a.Y());
  }
  return null;
};
g.M = Object.create(null);
g.g.Xu = {};
g.g.Xu.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.Ca = function (a, c) {
  this.J = a;
  this.type = c;
};
g.Ca.Rp = 0;
g.Ca.Az = 1;
g.Ca.Dz = 2;
g.Ca.Cz = 3;
g.Ca.xz = 4;
g.Ca.yz = 5;
g.Ca.Bz = 6;
g.Ca.zz = 7;
b = g.Ca.prototype;
b.ma = null;
b.Wf = !1;
b.xg = null;
b.Fs = null;
b.x = 0;
b.y = 0;
b.Tf = function (a) {
  var c = this,
    d = c.Y(),
    e = a.Y();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.sa(),
      h = c.lm();
    c.Fs = null;
    if (f.Pa) (h = g.V.Fh(f)), f.I(!1), (f = null);
    else if (c.type == g.pb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Ca.iC(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.Cb) {
      if (!f.ba)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Z; ) {
        var l = r(k);
        if (l && !l.Pa) k = l;
        else {
          B(f.u.Jn, f.ba, k.Z, !1) && (k.Z.connect(f.ba), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.h.ab)) {
      var m = g.h.uc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.h.ea(m), f.O ? f.O.bs(c) : f.ba && f.ba.bs(c), g.h.ea(!1));
      }, g.Np);
    }
    c.Fs = h;
  }
  var n;
  g.h.isEnabled() && (n = new g.h.Wm(e));
  g.Ca.nH(c, a);
  e.Ds(d);
  n && (n.Wk(), g.h.Ha(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.Km(null);
    var a = this.sa();
    a && x(a);
  }
  this.Wf = !0;
};
b.Y = function () {
  return this.J;
};
function C(a) {
  return a.type == g.pb || a.type == g.Cb;
}
b.isConnected = function () {
  return !!this.ma;
};
b.Lq = function (a) {
  g.g.Xu.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return Ha(this).Lq(this, a, !1);
};
function Ha(a) {
  return a.J.u.Jn;
}
b.bs = function () {};
b.connect = function (a) {
  if (this.ma != a && B(Ha(this), this, a, !1)) {
    var c = g.h.uc();
    c || g.h.ea(!0);
    C(this) ? this.Tf(a) : a.Tf(this);
    c || g.h.ea(!1);
  }
};
g.Ca.nH = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.ma = c;
  c.ma = a;
};
g.Ca.LK = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.U.length; e++) {
    var f = a.U[e].connection,
      h = Ha(c);
    if (f && f.type == g.pb && B(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Ca.iC = function (a, c) {
  for (var d; (d = g.Ca.LK(a, c)); ) if (((a = d.sa()), !a || a.Pa)) return d;
  return null;
};
b = g.Ca.prototype;
b.disconnect = function () {
  var a = this.ma;
  if (!a) throw Error("Source connection not connected.");
  if (a.ma != this)
    throw Error("Target connection not connected to source connection.");
  if (C(this)) {
    var c = this.J;
    var d = a.Y();
    a = this;
  } else (c = a.Y()), (d = this.J);
  var e = g.h.uc();
  e || g.h.ea(!0);
  this.dv(c, d);
  d.Pa || a.$o();
  e || g.h.ea(!1);
};
b.dv = function (a, c) {
  var d;
  g.h.isEnabled() && (d = new g.h.Wm(c));
  this.ma = this.ma.ma = null;
  c.Ds(null);
  d && (d.Wk(), g.h.Ha(d));
};
b.$o = function () {
  var a = this.Y(),
    c = this.lm();
  if (a.u && c)
    if (((a = g.V.hk(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ba) this.connect(a.ba);
    else throw Error("Child block does not have output or previous statement.");
};
b.sa = function () {
  return this.isConnected() ? this.ma.Y() : null;
};
b.JC = function () {
  !this.isConnected() ||
    (this.ma && B(Ha(this), this, this.ma, !1)) ||
    x(C(this) ? this.sa() : this.J);
};
b.Sb = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.xg = a), this.JC())
    : (this.xg = null);
  return this;
};
b.Km = function (a) {
  this.Fs = a;
  a = this.sa();
  a ? a.Pa && (a.I(!1), this.$o()) : this.$o();
};
b.lm = function () {
  return this.Fs;
};
b.vC = function () {
  return [];
};
b.Ng = function () {
  for (var a = null, c = this.J, d = c.U, e = 0; e < c.U.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.J;
  if (a)
    if (a.O == this) var c = "Output Connection of ";
    else if (a.ba == this) c = "Previous Connection of ";
    else if (a.Z == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.U[d]); d++)
        if (e.connection == this) {
          c = e;
          break;
        }
      if (c) c = 'Input "' + c.name + '" connection on ';
      else
        return (
          console.warn("Connection not actually connected to sourceBlock_"),
          "Orphan Connection"
        );
    }
  else return "Orphan Connection";
  d = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (d += ' (id="' + a.id + '")');
  return c + d;
};
g.ga = {};
g.ga.Vm = {};
g.ga.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ga.Vm[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ga.Vm[a] = c;
};
g.ga.ts = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ga.register(a, function () {
    this.Oe(c);
  });
};
g.ga.px = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ga.xA(f, c.Wb, "domToMutation");
  g.ga.xA(f, c.sb, "mutationToDom");
  var h = g.ga.zA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ga.register(a, function () {
    if (h) {
      if (!g.lc) throw Error(f + "Missing require for Blockly.Mutator");
      this.Cj(new g.lc(e || []));
    }
    this.Oe(c);
    d && d.apply(this);
  });
};
g.ga.unregister = function (a) {
  g.ga.Vm[a]
    ? delete g.ga.Vm[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ga.apply = function (a, c, d) {
  var e = g.ga.Vm[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ga.fH(a, c);
  else var f = g.ga.Kv(c);
  e.apply(c);
  if (d) g.ga.dH('Error after applying mutator "' + a + '": ', c);
  else if (!g.ga.mJ(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ga.xA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ga.fH = function (a, c) {
  if (g.ga.Kv(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ga.zA = function (a, c) {
  var d = void 0 !== a.Jh,
    e = void 0 !== a.Nh;
  if (d && e) {
    if ("function" != typeof a.Jh)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Nh)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ga.dH = function (a, c) {
  if ("function" != typeof c.Wb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.sb)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ga.zA(c, a);
};
g.ga.Kv = function (a) {
  var c = [];
  void 0 !== a.Wb && c.push(a.Wb);
  void 0 !== a.sb && c.push(a.sb);
  void 0 !== a.Jh && c.push(a.Jh);
  void 0 !== a.Nh && c.push(a.Nh);
  return c;
};
g.ga.mJ = function (a, c) {
  c = g.ga.Kv(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ga.Jq = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.fD(function () {
      for (var e in c) g.g.yA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ga.eH(this, a, c), d.push(this.type));
    this.bb(
      function () {
        var e = String(D(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.Re(f));
        return f;
      }.bind(this)
    );
  };
};
g.ga.eH = function (a, c, d) {
  var e = w(a, c);
  if ("function" != typeof e.Ok) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1];
      null == d[h] &&
        console.warn(
          "No tooltip mapping for value " +
            h +
            " of field " +
            c +
            " of block type " +
            a.type
        );
    }
  }
};
g.ga.Au = function (a) {
  "object" == typeof document &&
    g.g.fD(function () {
      g.g.yA(a);
    });
  return function () {
    this.bb(
      function () {
        var c = w(this, "VAR");
        return g.g.Re(a).replace("%1", c ? c.xd() : "");
      }.bind(this)
    );
  };
};
g.ga.SH = function () {
  this.$K = this.Gf;
  this.bb(
    function () {
      var a = this.getParent();
      return (a && Ia(a) && a.Gf) || this.$K;
    }.bind(this)
  );
};
g.ga.register("parent_tooltip_when_inline", g.ga.SH);
g.Xf = {};
g.Xf.register = function (a, c) {
  g.C.register(g.C.aa.Dc, a, c);
};
g.Xf.unregister = function (a) {
  g.C.unregister(g.C.aa.Dc, a);
};
g.Xf.ka = function (a) {
  var c = g.C.Mv(g.C.aa.Dc, a.type);
  return c
    ? c.ka(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.Eb = {};
g.Eb.ev = 0;
g.Eb.er = null;
g.Eb.JH = function (a) {
  var c = a.u,
    d = a.Oa();
  c.Ni.play("delete");
  a = Ja(c, d);
  d = d.cloneNode(!0);
  d.bL = a.x;
  d.cL = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  v(c).appendChild(d);
  d.pA = d.getBBox();
  g.Eb.dB(d, c.L, new Date(), c.scale);
};
g.Eb.dB = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.bL + (((c ? -1 : 1) * a.pA.width * e) / 2) * f) +
          "," +
          (a.cL + a.pA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.Eb.dB, 10, a, c, d, e));
};
g.Eb.oH = function (a) {
  var c = a.u,
    d = c.scale;
  c.Ni.play("click");
  if (!(1 > d)) {
    var e = Ja(c, a.Oa());
    a.O
      ? ((e.x += (a.L ? 3 : -3) * d), (e.y += 13 * d))
      : a.ba && ((e.x += (a.L ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.P(
      g.g.G.Sp,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      v(c)
    );
    g.Eb.JA(a, new Date(), d);
  }
};
g.Eb.JA = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.Eb.ev = setTimeout(g.Eb.JA, 10, a, c, d)));
};
g.Eb.IH = function (a) {
  a.u.Ni.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = E(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.L || (c *= -1);
    g.Eb.cB(a.Oa(), c, new Date());
  }
};
g.Eb.cB = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.mp = "")
    : ((a.mp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.Eb.er = a),
      (g.Eb.ev = setTimeout(g.Eb.cB, 10, a, c, d)));
  a.setAttribute("transform", a.zp + a.mp);
};
g.Eb.fv = function () {
  if (g.Eb.er) {
    clearTimeout(g.Eb.ev);
    var a = g.Eb.er;
    a.mp = "";
    a.setAttribute("transform", a.zp);
    g.Eb.er = null;
  }
};
g.h.jg = function (a, c, d) {
  g.h.jg.v.constructor.call(this, a ? a.u.id : void 0);
  this.qb = a ? a.id : null;
  this.fC = c;
  this.qA = d;
};
g.g.object.X(g.h.jg, g.h.Ce);
g.h.jg.prototype.type = g.h.qy;
g.h.jg.prototype.xa = function () {
  var a = g.h.jg.v.xa.call(this);
  a.isStart = this.fC;
  a.blockId = this.qb;
  a.blocks = this.qA;
  return a;
};
g.h.jg.prototype.ka = function (a) {
  g.h.jg.v.ka.call(this, a);
  this.fC = a.isStart;
  this.qb = a.blockId;
  this.qA = a.blocks;
};
g.C.register(g.C.aa.ec, g.h.qy, g.h.jg);
g.Lf = function (a) {
  this.pi = g.selected = a;
  this.s = a.u;
  this.ij = this.lw = null;
  this.Zn = Ka(this, this.pi);
  this.zd = this.rc = null;
  this.hh = !1;
  this.Xn = this.Wv = this.Kk = null;
  this.Hq = La(this);
};
g.Lf.Fl = { zt: 0, nF: 1, Fz: 2 };
g.Lf.prototype.I = function () {
  this.Hq.length = 0;
  g.h.disable();
  try {
    this.Zn && this.Zn.I(), this.ij && this.ij.I();
  } finally {
    g.h.enable();
  }
};
g.Lf.prototype.update = function (a, c) {
  var d = this.rc && this.zd ? g.hE : g.Pd;
  for (var e = null, f = null, h = 0; h < this.Hq.length; h++) {
    var k = this.Hq[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.rs));
  }
  e = ((d = { closest: e, local: f, rs: d }), !!d.closest) && c != g.Fy;
  if (
    (this.hh = !!c && !this.pi.getParent() && this.pi.ue() && !e) ||
    Ma(this, d, a)
  ) {
    g.h.disable();
    d.closest
      ? ((a = this.rc != d.closest),
        (c = this.zd != d.local),
        this.rc && this.zd && (a || c || this.hh) && Na(this))
      : Na(this);
    this.zd = this.rc = this.Kk = null;
    if (!this.hh && ((a = d.closest), (c = d.local), a))
      if (a == this.rc || a.Y().ve())
        console.log("Trying to connect to an insertion marker");
      else {
        this.rc = a;
        this.zd = c;
        a = this.rc;
        d = this.zd;
        c = this.pi;
        d.type == g.Mf || d.type == g.Nf
          ? ((e = !a.isConnected()) ||
              ((e = a.sa()),
              d.type == g.Mf
                ? ((d = e.O), (c = g.Ca.iC(c, e)))
                : ((d = e.ba), (c = c.Nr())),
              (e = c ? B(Ha(d), c, d, !1) : !1)),
            (c = e ? g.Lf.Fl.zt : g.Lf.Fl.Fz))
          : (c = g.Lf.Fl.zt);
        switch (c) {
          case g.Lf.Fl.nF:
            this.Wv = this.rc.Y();
            break;
          case g.Lf.Fl.zt:
            e = this.zd;
            c = this.rc;
            d = this.lw && e == this.lw ? this.ij : this.Zn;
            e = d.Jv(e.Y(), e);
            if (e == this.Kk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ga();
            d.pa = !0;
            d.Oa().setAttribute("visibility", "visible");
            e && c && Oa(d, e, c);
            c && e.connect(c);
            this.Kk = e;
            break;
          case g.Lf.Fl.Fz:
            (this.Xn = this.rc.sa()), Pa(this.Xn.Rb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.J.u.Lb.la()),
          (c = Qa(d, a)),
          a.type == g.pb || a.type == g.Mf
            ? ((d = d.Ml),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.oa("v", d) +
                c.Af +
                g.g.D.oa("v", d)))
            : ((d = d.hn - d.Nb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.oa("h", d) +
                c.sj +
                g.g.D.oa("h", d))),
          (d = a.J.Za()),
          (g.Ca.VB = g.g.o.P(
            g.g.G.Ld,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.J.L ? " scale(-1 1)" : ""),
            },
            a.J.Oa()
          )));
      }
    g.h.enable();
  }
};
function Ka(a, c) {
  var d = c.type;
  g.h.disable();
  try {
    var e = a.s.oj(d);
    e.iD(!0);
    if (c.sb) {
      var f = c.sb();
      f && e.Wb(f);
    }
    for (a = 0; a < c.U.length; a++) {
      var h = c.U[a];
      if (h.name != g.ke.Xm) {
        var k = e.U[a];
        for (d = 0; d < h.kb.length; d++) k.kb[d].setValue(h.kb[d].getValue());
      }
    }
    e.Aj(c.isCollapsed());
    e.Wc(Ia(c));
    e.uf();
    e.Oa().setAttribute("visibility", "hidden");
  } finally {
    g.h.enable();
  }
  return e;
}
function La(a) {
  var c = a.pi.Zf(!1),
    d = a.pi.Nr();
  if (d && d != a.pi.Z) {
    c.push(d);
    a.lw = d;
    if (a.ij) {
      g.h.disable();
      try {
        a.ij.I();
      } finally {
        g.h.enable();
      }
    }
    a.ij = Ka(a, d.Y());
  }
  return c;
}
function Ma(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.rs;
  if (e && f) {
    if (a.zd && a.rc) {
      if (a.rc == f && a.zd == e) return !1;
      e = a.zd.x + d.x - a.rc.x;
      a = a.zd.y + d.y - a.rc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.kE);
    }
    if (a.zd || a.rc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.zd || !a.rc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Na(a) {
  a.rc && a.rc.sa() && (g.g.o.removeNode(g.Ca.VB), delete g.Ca.VB);
  if (a.Xn) Pa(a.Xn.Rb, "blocklyReplaceable", !1), (a.Xn = null);
  else if (a.Wv) a.Wv = null;
  else if (a.Kk)
    if (a.Kk) {
      var c = a.Kk,
        d = c.Y(),
        e = d.Z,
        f = d.ba,
        h = d.O;
      h = c.type == g.pb && !(h && h.ma);
      !(c != e || (f && f.ma)) || h
        ? x(c.sa(), !1)
        : c.type == g.Cb && c != e
        ? ((e = c.ma),
          x(e.Y(), !1),
          (f = f ? f.ma : null),
          x(d, !0),
          f && f.connect(e))
        : x(d, !0);
      if (c.ma)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Kk = null;
      d.Oa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Lf.prototype.km = function () {
  var a = [];
  this.Zn && a.push(this.Zn);
  this.ij && a.push(this.ij);
  return a;
};
g.Kj = function (a, c) {
  this.Kb = a;
  this.s = c;
  this.Ig = new g.Lf(this.Kb);
  this.gk = null;
  this.hh = !1;
  this.fh = this.Kb.Za();
  this.jr = g.Kj.HI(a);
};
g.Kj.prototype.I = function () {
  this.jr.length = 0;
  this.Ig && this.Ig.I();
};
g.Kj.HI = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Ra(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].xk, icon: e[f] });
  }
  return c;
};
function Sa(a, c, d) {
  d = a.Dm(d);
  var e = g.g.N.sum(a.fh, d);
  a.Kb.Iw(e);
  for (e = 0; e < a.jr.length; e++) {
    var f = a.jr[e];
    Ta(f.icon, g.g.N.sum(f.location, d));
  }
  a.gk = Ua(a.s, c);
  a.Ig.update(d, a.gk);
  a.hh = a.Ig.hh;
  c = a.s.nd;
  a.hh
    ? (a.Kb.gp(!0), a.gk == g.ot && c && Va(c, !0))
    : (a.Kb.gp(!1), c && Va(c, !1));
}
function Wa(a, c, d) {
  Sa(a, c, d);
  a.jr = [];
  c = new g.h.jg(a.Kb, !1, q(a.Kb, !1));
  g.h.Ha(c);
  g.g.o.qp();
  g.Eb.fv();
  d = a.Dm(d);
  c = g.g.N.sum(a.fh, d);
  var e = a.Kb;
  e.Gp && (e.translate(c.x, c.y), e.u.De.Pq(e.u.Mb));
  c = a.s.nd;
  a.hh
    ? (c && setTimeout(c.Uq.bind(c), 100), a.Yn(), a.Kb.I(!1, !0), (g.hm = []))
    : c && c.Uq();
  a.hh ||
    (Xa(a.Kb, d.x, d.y),
    a.Kb.Bj(!1),
    a.Yn(),
    a.Ig.rc
      ? ((d = a.Ig),
        d.rc &&
          (g.h.disable(),
          Na(d),
          g.h.enable(),
          d.zd.connect(d.rc),
          d.pi.pa && (g.Eb.oH((C(d.zd) ? d.rc : d.zd).Y()), Ya(d.pi.Zd()))))
      : a.Kb.Ga(),
    Za(a.Kb));
  a.s.Xc(!0);
  (d = a.s.Ja) &&
    "function" == typeof d.us &&
    d.us(a.Kb.ue() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Kj.prototype.Yn = function () {
  var a = new g.h.Wm(this.Kb);
  a.Nw = this.fh;
  a.Wk();
  g.h.Ha(a);
};
g.Kj.prototype.Dm = function (a) {
  a = new g.g.N(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Ao && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.Kj.prototype.km = function () {
  return this.Ig && this.Ig.km ? this.Ig.km() : [];
};
g.Ay = function () {};
function B(a, c, d, e, f) {
  return a.Lq(c, d, e, f) == g.Ca.Rp;
}
g.Ay.prototype.Lq = function (a, c, d, e) {
  if (a && c) {
    if (C(a)) {
      var f = a.Y();
      var h = c.Y();
    } else (h = a.Y()), (f = c.Y());
    f =
      f == h
        ? g.Ca.Az
        : c.type != g.Dl[a.type]
        ? g.Ca.Dz
        : f.u !== h.u
        ? g.Ca.yz
        : f.Pa && !h.Pa
        ? g.Ca.Bz
        : g.Ca.Rp;
  } else f = g.Ca.Cz;
  return f != g.Ca.Rp
    ? f
    : $a(a, c)
    ? d && !ab(a, c, e || 0)
      ? g.Ca.zz
      : g.Ca.Rp
    : g.Ca.xz;
};
function bb(a, c, d) {
  switch (a) {
    case g.Ca.Az:
      return "Attempted to connect a block to itself.";
    case g.Ca.yz:
      return "Blocks not on same workspace.";
    case g.Ca.Dz:
      return "Attempt to connect incompatible types.";
    case g.Ca.Cz:
      return "Target connection is null.";
    case g.Ca.xz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.xg + ", found " + d.xg)
      );
    case g.Ca.Bz:
      return "Connecting non-shadow to shadow block.";
    case g.Ca.zz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function $a(a, c) {
  a = a.xg;
  c = c.xg;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function ab(a, c, d) {
  if (cb(a, c) > d || c.Y().ve()) return !1;
  switch (c.type) {
    case g.Nf:
      return (
        a.ma || -1 != g.hm.indexOf(c)
          ? (a = !1)
          : c.ma
          ? ((a = c.sa()), (a = a.ve() ? !(a.ba && a.ba.sa()) : !1))
          : (a = !0),
        a
      );
    case g.Mf:
      if ((c.isConnected() && !c.sa().ve()) || a.isConnected()) return !1;
      break;
    case g.pb:
      if (c.isConnected() && !c.sa().Sc() && !c.sa().Pa) return !1;
      break;
    case g.Cb:
      if (c.isConnected() && !a.Y().Z && !c.sa().Pa && c.sa().Z) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.hm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.aa.xy, g.C.$p, g.Ay);
g.lu = function (a) {
  this.Sa = Object.create(null);
  this.u = a;
};
b = g.lu.prototype;
b.clear = function () {
  this.Sa = Object.create(null);
};
b.ys = function (a, c) {
  var d = this.gd(c, a.type),
    e = F(this.u);
  g.h.ea(!0);
  try {
    if (d && d.Na() != a.Na()) {
      var f = a.type;
      c != d.name && db(d, c, e);
      for (c = 0; c < e.length; c++) e[c].xs(a.Na(), d.Na());
      g.h.Ha(new g.h.Qf(a));
      this.Sa[f].splice(this.oo(f).indexOf(a), 1);
    } else db(a, c, e);
  } finally {
    g.h.ea(!1);
  }
};
b.xj = function (a, c) {
  var d = this.$f(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.ys(d, c);
};
function db(a, c, d) {
  g.h.Ha(new g.h.vg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].Os(a);
}
b.lf = function (a, c, d) {
  var e = this.gd(a, c);
  if (e) {
    if (d && e.Na() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.Na() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.$f(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Rh();
  c = c || "";
  e = new g.vn(this.u, a, c, e);
  a = this.Sa[c] || [];
  a.push(e);
  delete this.Sa[c];
  this.Sa[c] = a;
  return e;
};
b.Ph = function (a) {
  var c = this.$f(a);
  if (c) {
    var d = c.name,
      e = this.Rv(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = D(f, "NAME");
        d = g.i.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.i.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && c && eb(h, c, e);
        }))
      : eb(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function eb(a, c, d) {
  var e = g.h.uc();
  e || g.h.ea(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].I(!0);
    var h = a.Sa[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.Na() == c.Na()) {
        h.splice(a, 1);
        g.h.Ha(new g.h.Qf(c));
        break;
      }
  } finally {
    e || g.h.ea(!1);
  }
}
b.gd = function (a, c) {
  if ((c = this.Sa[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Jd.qf(e.name, a)) return e;
  return null;
};
b.$f = function (a) {
  for (var c = Object.keys(this.Sa), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Sa[e][f]); f++)
      if (h.Na() == a) return h;
  return null;
};
b.oo = function (a) {
  return (a = this.Sa[a || ""]) ? a.slice() : [];
};
b.Qv = function (a) {
  var c = {};
  g.g.object.Oe(c, this.Sa);
  a && a.tj && g.g.object.Oe(c, a.tj.Sa);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.mk = function () {
  var a = [],
    c;
  for (c in this.Sa) a = a.concat(this.Sa[c]);
  return a;
};
b.Cv = function () {
  var a = [],
    c;
  for (c in this.Sa)
    for (var d = this.Sa[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.Rv = function (a) {
  for (var c = [], d = F(this.u), e = 0; e < d.length; e++) {
    var f = d[e].Th();
    if (f) for (var h = 0; h < f.length; h++) f[h].Na() == a && c.push(d[e]);
  }
  return c;
};
g.Ub = function (a) {
  this.id = g.g.Rh();
  g.Ub.yn[this.id] = this;
  this.options = a || new g.Kd({});
  this.L = !!this.options.L;
  this.$d = !!this.options.$d;
  this.La = this.options.La;
  this.Jn = new (g.C.wr(g.C.aa.xy, this.options))(this);
  this.xp = [];
  this.Ns = [];
  this.Wq = Object.create(null);
  this.fe = [];
  this.cl = [];
  this.Vo = [];
  this.vu = Object.create(null);
  this.si = Object.create(null);
  this.Sa = new g.lu(this);
  this.tj = null;
};
b = g.Ub.prototype;
b.pa = !1;
b.ew = !1;
b.iz = 1024;
b.Yq = null;
b.I = function () {
  this.fe.length = 0;
  this.clear();
  delete g.Ub.yn[this.id];
};
g.Ub.Hz = 3;
b = g.Ub.prototype;
b.eh = function (a, c) {
  a = a.Za();
  c = c.Za();
  return (
    a.y +
    g.Ub.prototype.eh.offset * a.x -
    (c.y + g.Ub.prototype.eh.offset * c.x)
  );
};
b.Eq = function (a) {
  this.xp.push(a);
};
b.vs = function (a) {
  if (!g.g.Fq(this.xp, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.hc = function (a) {
  var c = [].concat(this.xp);
  a &&
    1 < c.length &&
    ((this.eh.offset = Math.sin(g.g.Qa.Ad(g.Ub.Hz))),
    this.L && (this.eh.offset *= -1),
    c.sort(this.eh));
  return c;
};
function fb(a, c) {
  return a.si[c] ? a.si[c].slice(0) : [];
}
function F(a) {
  var c = a.hc(!1);
  for (a = 0; a < c.length; a++) c.push.apply(c, ja(c[a], !1));
  return c.filter(function (d) {
    return !d.ve();
  });
}
b.clear = function () {
  this.ew = !0;
  try {
    var a = g.h.uc();
    for (a || g.h.ea(!0); this.xp.length; ) this.xp[0].I(!1);
    for (; this.Ns.length; ) this.Ns[this.Ns.length - 1].I(!1);
    a || g.h.ea(!1);
    this.Sa.clear();
    this.tj && this.tj.clear();
  } finally {
    this.ew = !1;
  }
};
b.xj = function (a, c) {
  this.Sa.xj(a, c);
};
b.lf = function (a, c, d) {
  return this.Sa.lf(a, c, d);
};
b.Rv = function (a) {
  return this.Sa.Rv(a);
};
b.Ph = function (a) {
  this.Sa.Ph(a);
};
b.gd = function (a, c) {
  return this.Sa.gd(a, c);
};
b.$f = function (a) {
  return this.Sa.$f(a);
};
b.oo = function (a) {
  return this.Sa.oo(a);
};
b.Qv = function () {
  return this.Sa.Qv(this);
};
b.mk = function () {
  return this.Sa.mk();
};
b.Cv = function () {
  return this.Sa.Cv();
};
b.Pg = function () {
  return 0;
};
b.oj = function (a, c) {
  return new g.ke(this, a, c);
};
function gb(a) {
  return isNaN(a.options.Dw) ? Infinity : a.options.Dw - F(a).length;
}
function hb(a, c) {
  if (!ib(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.Rr
        ? (void 0 !== a.options.Rr[e] ? a.options.Rr[e] : Infinity) -
          fb(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > gb(a) ? !1 : !0;
}
function ib(a) {
  return Infinity != a.options.Dw || !!a.options.Rr;
}
function jb(a, c) {
  var d = c ? a.Vo : a.cl;
  a = c ? a.cl : a.Vo;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.h.filter(f, c);
    g.h.ab = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.h.ab = !0;
    }
  }
}
function H(a, c) {
  a.fe.push(c);
}
function kb(a, c) {
  g.g.Fq(a.fe, c);
}
b.Vd = function (a) {
  return this.vu[a] || null;
};
b.Gx = function (a) {
  this.Sa = a;
};
g.Ub.yn = Object.create(null);
g.Ub.ho = function (a) {
  return g.Ub.yn[a] || null;
};
g.Ub.getAll = function () {
  var a = [],
    c;
  for (c in g.Ub.yn) a.push(g.Ub.yn[c]);
  return a;
};
g.ta = function (a, c, d, e, f, h) {
  this.s = a;
  this.Kh = c;
  this.JK = d;
  this.Tw = this.Sw = this.Hw = this.wx = null;
  this.Wf = !1;
  d = g.ta.QD;
  this.s.L && (d = -d);
  this.UG = g.g.Qa.Ad(d);
  a.mi.appendChild(this.He(c, !(!f || !h)));
  this.zc = e;
  this.ux && lb(this);
  (f && h) ||
    ((a = this.Kh.getBBox()),
    (f = a.width + 2 * g.ta.od),
    (h = a.height + 2 * g.ta.od));
  this.ep(f, h);
  lb(this);
  mb(this);
  this.ux = !0;
};
g.ta.od = 6;
g.ta.RD = 5;
g.ta.QD = 20;
g.ta.ly = 4;
g.ta.ND = 8;
g.ta.Pe = null;
g.ta.rj = null;
g.ta.Ux = function () {
  g.ta.Pe && (g.Wa(g.ta.Pe), (g.ta.Pe = null));
  g.ta.rj && (g.Wa(g.ta.rj), (g.ta.rj = null));
};
g.ta.$G = function () {
  g.Touch.En();
  g.ta.Ux();
};
b = g.ta.prototype;
b.ux = !1;
b.zc = null;
b.$g = 0;
b.wj = 0;
b.vb = 0;
b.Lc = 0;
b.tu = !0;
b.He = function (a, c) {
  this.jf = g.g.o.P(g.g.G.rd, {}, null);
  var d = { filter: "url(#" + this.s.Lb.la().kr + ")" };
  g.g.userAgent.tF && (d = {});
  d = g.g.o.P(g.g.G.rd, d, this.jf);
  this.rA = g.g.o.P(g.g.G.Ld, {}, d);
  this.Iq = g.g.o.P(
    g.g.G.Od,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.ta.od, ry: g.ta.od },
    d
  );
  c
    ? ((this.ii = g.g.o.P(
        g.g.G.rd,
        { class: this.s.L ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.jf
      )),
      (c = 2 * g.ta.od),
      g.g.o.P(
        g.g.G.dG,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.ii
      ),
      g.g.o.P(
        g.g.G.Tj,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.ii
      ),
      g.g.o.P(
        g.g.G.Tj,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.ii
      ))
    : (this.ii = null);
  this.s.options.readOnly ||
    ((this.Sw = g.Aa(this.Iq, "mousedown", this, this.ZG)),
    this.ii && (this.Tw = g.Aa(this.ii, "mousedown", this, this.yK)));
  this.jf.appendChild(a);
  return this.jf;
};
b.Oa = function () {
  return this.jf;
};
function nb(a, c) {
  a.jf.dataset && (a.jf.dataset.blockId = c);
}
b.ZG = function (a) {
  var c = this.s.Wi(a);
  if (c) {
    if (c.rk)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.We || (c.We = this);
    c.xf = a;
  }
};
b.jp = function () {};
b.ue = function () {
  return !1;
};
b.gp = function () {};
b.yK = function (a) {
  ob(this);
  g.ta.Ux();
  g.g.Ik(a) ||
    (this.s.Mx(a, new g.g.N(this.s.L ? -this.vb : this.vb, this.Lc)),
    (g.ta.Pe = g.Aa(document, "mouseup", this, g.ta.$G)),
    (g.ta.rj = g.Aa(document, "mousemove", this, this.zK)),
    g.Fc());
  a.stopPropagation();
};
b.zK = function (a) {
  this.tu = !1;
  var c = this.s;
  a = g.g.Jo(a, v(c), Ba(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.N.sum(c.fB, a);
  this.ep(this.s.L ? -c.x : c.x, c.y);
  this.s.L && lb(this);
};
function pb(a, c) {
  a.Hw = c;
}
function ob(a) {
  var c = a.jf.parentNode;
  return c.lastChild !== a.jf ? (c.appendChild(a.jf), !0) : !1;
}
function qb(a, c, d) {
  var e = a.s.L ? a.zc.x - c.x - a.vb : c.x + a.zc.x;
  c = c.y + a.zc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.vb, d.Xb + d.Yb) - Math.max(e, d.Xb)) *
        (Math.min(c + a.Lc, d.dc + d.jc) - Math.max(c, d.dc))) /
        (a.vb * a.Lc)
    )
  );
}
function lb(a) {
  var c = a.zc.x;
  c = a.s.L ? c - (a.$g + a.vb) : c + a.$g;
  a.moveTo(c, a.wj + a.zc.y);
}
b.moveTo = function (a, c) {
  this.jf.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Bj = function (a) {
  !a && this.Hw && this.Hw();
};
b.Ev = function () {
  return new g.g.ef(this.vb, this.Lc);
};
b.ep = function (a, c) {
  var d = 2 * g.ta.od;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.vb = a;
  this.Lc = c;
  this.Iq.setAttribute("width", a);
  this.Iq.setAttribute("height", c);
  this.ii &&
    (this.s.L
      ? this.ii.setAttribute(
          "transform",
          "translate(" + 2 * g.ta.od + "," + (c - d) + ") scale(-1 1)"
        )
      : this.ii.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.tu) {
    a = this.s.Xd();
    a.Xb /= this.s.scale;
    a.Yb /= this.s.scale;
    a.dc /= this.s.scale;
    a.jc /= this.s.scale;
    c = -this.vb / 4;
    if (!(this.vb > a.Yb)) {
      if (this.s.L) {
        d = this.zc.x - c;
        var e = d - this.vb;
        var f = a.Xb + a.Yb,
          h = a.Xb + g.fb.kd / this.s.scale;
      } else
        (e = c + this.zc.x),
          (d = e + this.vb),
          (h = a.Xb),
          (f = a.Xb + a.Yb - g.fb.kd / this.s.scale);
      this.s.L
        ? e < h
          ? (c = -(h - this.zc.x + this.vb))
          : d > f && (c = -(f - this.zc.x))
        : e < h
        ? (c = h - this.zc.x)
        : d > f && (c = f - this.zc.x - this.vb);
    }
    e = c;
    c = -this.Lc / 4;
    if (!(this.Lc > a.jc)) {
      d = this.zc.y + c;
      f = d + this.Lc;
      h = a.dc;
      var k = a.dc + a.jc - g.fb.kd / this.s.scale,
        l = this.zc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Lc);
    }
    h = c;
    f = this.JK.getBBox();
    c = { x: e, y: -this.Lc - this.s.Lb.la().dn };
    d = { x: -this.vb - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = qb(this, c, a);
    k = qb(this, d, a);
    l = qb(this, e, a);
    a = Math.max(h, k, l, qb(this, f, a));
    h == a
      ? ((this.$g = c.x), (this.wj = c.y))
      : k == a
      ? ((this.$g = d.x), (this.wj = d.y))
      : l == a
      ? ((this.$g = e.x), (this.wj = e.y))
      : ((this.$g = f.x), (this.wj = f.y));
  }
  lb(this);
  mb(this);
  this.wx && this.wx();
};
function mb(a) {
  var c = [],
    d = a.vb / 2,
    e = a.Lc / 2,
    f = -a.$g,
    h = -a.wj;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.s.L && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      t = a.Ev();
    m = (t.width + t.height) / g.ta.RD;
    m = Math.min(m, t.width, t.height) / 4;
    t = 1 - g.ta.ND / k;
    f = d + t * f;
    h = e + t * h;
    t = d + m * p;
    var y = e + m * n;
    d -= m * p;
    e -= m * n;
    n = l + a.UG;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.ta.ly;
    k = (Math.cos(n) * k) / g.ta.ly;
    c.push("M" + t + "," + y);
    c.push(
      "C" + (t + k) + "," + (y + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.rA.setAttribute("d", c.join(" "));
}
b.Vc = function (a) {
  this.Iq.setAttribute("fill", a);
  this.rA.setAttribute("fill", a);
};
b.I = function () {
  this.Sw && g.Wa(this.Sw);
  this.Tw && g.Wa(this.Tw);
  g.ta.Ux();
  g.g.o.removeNode(this.jf);
  this.Wf = !0;
};
b.Iw = function (a, c) {
  a ? a.bl(c.x, c.y) : this.moveTo(c.x, c.y);
  this.$g = this.s.L ? this.zc.x - c.x - this.vb : c.x - this.zc.x;
  this.wj = c.y - this.zc.y;
  mb(this);
};
b.Za = function () {
  return new g.g.N(
    this.s.L ? -this.$g + this.zc.x - this.vb : this.zc.x + this.$g,
    this.zc.y + this.wj
  );
};
g.ta.Ff = function (a) {
  var c = g.g.o.P(
    g.g.G.Pz,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.ta.od,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.P(g.g.G.du, { dy: "1em", x: g.ta.od }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.ta.QA = function (a, c, d) {
  d = new g.ta(c.u, a, c.Rb.cc, d, null, null);
  nb(d, c.id);
  if (c.L) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.ta.od);
  }
  return d;
};
g.h.jh = function (a) {
  this.Ag = (this.Me = "undefined" == typeof a) ? "" : a.id;
  this.Pc = this.Me ? "" : a.u.id;
  this.group = g.h.uc();
  this.ab = g.h.ab;
};
g.g.object.X(g.h.jh, g.h.Abstract);
g.h.jh.prototype.xa = function () {
  var a = g.h.jh.v.xa.call(this);
  this.Ag && (a.commentId = this.Ag);
  return a;
};
g.h.jh.prototype.ka = function (a) {
  g.h.jh.v.ka.call(this, a);
  this.Ag = a.commentId;
};
g.h.ol = function (a, c, d) {
  g.h.ol.v.constructor.call(this, a);
  a &&
    ((this.zC = "undefined" == typeof c ? "" : c),
    (this.Zr = "undefined" == typeof d ? "" : d));
};
g.g.object.X(g.h.ol, g.h.jh);
b = g.h.ol.prototype;
b.type = g.h.vy;
b.xa = function () {
  var a = g.h.ol.v.xa.call(this);
  a.newContents = this.Zr;
  return a;
};
b.ka = function (a) {
  g.h.ol.v.ka.call(this, a);
  this.Zr = a.newValue;
};
b.wm = function () {
  return this.zC == this.Zr;
};
b.run = function (a) {
  var c;
  (c = u(this).Wq[this.Ag] || null)
    ? c.zO(a ? this.Zr : this.zC)
    : console.warn("Can't change non-existent comment: " + this.Ag);
};
g.h.kh = function (a) {
  g.h.kh.v.constructor.call(this, a);
  a && (this.xml = a.uD());
};
g.g.object.X(g.h.kh, g.h.jh);
g.h.kh.prototype.type = g.h.Tp;
g.h.kh.prototype.xa = function () {
  var a = g.h.kh.v.xa.call(this);
  a.xml = g.V.qe(this.xml);
  return a;
};
g.h.kh.prototype.ka = function (a) {
  g.h.kh.v.ka.call(this, a);
  this.xml = g.V.Ff(a.xml);
};
g.h.kh.prototype.run = function (a) {
  g.h.zy(this, a);
};
g.h.zy = function (a, c) {
  var d = u(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.V.ik(c, d))
    : (d = d.Wq[a.Ag] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Ag);
};
g.h.lh = function (a) {
  g.h.lh.v.constructor.call(this, a);
  a && (this.xml = a.uD());
};
g.g.object.X(g.h.lh, g.h.jh);
g.h.lh.prototype.type = g.h.wy;
g.h.lh.prototype.xa = function () {
  return g.h.lh.v.xa.call(this);
};
g.h.lh.prototype.ka = function (a) {
  g.h.lh.v.ka.call(this, a);
};
g.h.lh.prototype.run = function (a) {
  g.h.zy(this, !a);
};
g.h.Nj = function (a) {
  g.h.Nj.v.constructor.call(this, a);
  a && ((this.Ku = a), (this.Ow = a.LB()), (this.Pk = null));
};
g.g.object.X(g.h.Nj, g.h.jh);
b = g.h.Nj.prototype;
b.Wk = function () {
  if (!this.Ku)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Pk = this.Ku.LB();
  this.Ku = null;
};
b.type = g.h.Up;
b.xa = function () {
  var a = g.h.Nj.v.xa.call(this);
  this.Pk &&
    (a.newCoordinate = Math.round(this.Pk.x) + "," + Math.round(this.Pk.y));
  return a;
};
b.ka = function (a) {
  g.h.Nj.v.ka.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Pk = new g.g.N(Number(a[0]), Number(a[1]))));
};
b.wm = function () {
  return g.g.N.qf(this.Ow, this.Pk);
};
b.run = function (a) {
  var c;
  if ((c = u(this).Wq[this.Ag] || null)) {
    a = a ? this.Pk : this.Ow;
    var d = c.LB();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Ag);
};
g.C.register(g.C.aa.ec, g.h.Tp, g.h.kh);
g.C.register(g.C.aa.ec, g.h.vy, g.h.ol);
g.C.register(g.C.aa.ec, g.h.Up, g.h.Nj);
g.C.register(g.C.aa.ec, g.h.wy, g.h.lh);
g.Qp = function (a, c) {
  this.Kc = a;
  this.s = c;
  this.gk = null;
  this.Ss = !1;
  this.fh = this.Kc.Za();
  this.jk = g.g.Ck() && c.De ? c.De : null;
};
g.Qp.prototype.I = function () {
  this.jk = this.s = this.Kc = null;
};
function rb(a, c, d) {
  d = a.Dm(d);
  d = g.g.N.sum(a.fh, d);
  a.Kc.Iw(a.jk, d);
  a.Kc.ue() &&
    ((a.gk = Ua(a.s, c)),
    (a.Ss = a.gk != g.Ey),
    (c = a.s.nd),
    a.Ss
      ? (a.Kc.gp(!0), a.gk == g.ot && c && Va(c, !0))
      : (a.Kc.gp(!1), c && Va(c, !1)));
}
function sb(a, c, d) {
  rb(a, c, d);
  c = a.Dm(d);
  c = g.g.N.sum(a.fh, c);
  a.Kc.moveTo(c.x, c.y);
  c = a.s.nd;
  a.Ss
    ? (c && setTimeout(c.Uq.bind(c), 100), a.Yn(), a.Kc.I(!1, !0))
    : c && c.Uq();
  a.Ss || (a.jk && a.jk.Pq(a.s.mi), a.Kc.Bj && a.Kc.Bj(!1), a.Yn());
  a.s.Xc(!0);
  (c = a.s.Ja) &&
    "function" == typeof c.us &&
    c.us(a.Kc.ue() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Qp.prototype.Yn = function () {
  if (this.Kc.kO) {
    var a = new g.h.Nj(this.Kc);
    a.Ow = this.fh;
    a.Wk();
    g.h.Ha(a);
  }
};
g.Qp.prototype.Dm = function (a) {
  a = new g.g.N(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Ao && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.h.kg = function (a, c, d) {
  g.h.kg.v.constructor.call(this, a ? a.u.id : c);
  this.qb = a ? a.id : null;
  this.rD = d;
};
g.g.object.X(g.h.kg, g.h.Ce);
g.h.kg.prototype.type = g.h.ft;
g.h.kg.prototype.xa = function () {
  var a = g.h.kg.v.xa.call(this);
  a.targetType = this.rD;
  this.qb && (a.blockId = this.qb);
  return a;
};
g.h.kg.prototype.ka = function (a) {
  g.h.kg.v.ka.call(this, a);
  this.rD = a.targetType;
  this.qb = a.blockId;
};
g.C.register(g.C.aa.ec, g.h.ft, g.h.kg);
g.zn = function (a) {
  this.s = a;
  this.pD = new g.g.N(a.scrollX, a.scrollY);
};
g.zn.prototype.I = function () {
  this.s = null;
};
g.zn.prototype.Mx = function () {
  g.selected && tb(g.selected);
  Ca(this.s);
};
g.zn.prototype.Ui = function (a) {
  a = g.g.N.sum(this.pD, a);
  this.s.scroll(a.x, a.y);
};
g.hq = function (a) {
  g.hq.v.constructor.call(this, a.s);
  this.gD = a.Ra;
  this.vk = a.$d;
};
g.g.object.X(g.hq, g.zn);
g.hq.prototype.Ui = function (a) {
  a = g.g.N.sum(this.pD, a);
  this.vk ? this.gD.set(-a.x) : this.gD.set(-a.y);
};
g.navigation = {};
g.navigation.Am = null;
g.navigation.Jl = 1;
g.navigation.Pf = 2;
g.navigation.Kl = 3;
g.navigation.fA = 40;
g.navigation.Ie = g.navigation.Pf;
g.navigation.Db = {
  Md: "previous",
  Id: "next",
  yt: "in",
  Ot: "out",
  Zy: "insert",
  KF: "mark",
  vE: "disconnect",
  xq: "toolbox",
  FE: "exit",
  xG: "toggle_keyboard_nav",
  TF: "move workspace cursor up",
  QF: "move workspace cursor down",
  RF: "move workspace cursor left",
  SF: "move workspace cursor right",
};
g.navigation.cn = "local_marker_1";
g.navigation.Wd = function () {
  return g.navigation.Mg().Wd(g.navigation.cn);
};
g.navigation.Mg = function () {
  return g.Lg();
};
g.navigation.oB = function (a) {
  if ((a = a.Ja))
    if (
      ((g.navigation.Ie = g.navigation.Kl),
      g.navigation.eD(!1),
      g.navigation.Wd().lb || g.navigation.Aw(),
      !a.tb && 0 < a.Gb.length)
    ) {
      var c = a.Gb[0];
      c.Ug() && ub(a, c);
    }
};
g.navigation.nB = function (a) {
  g.navigation.Ie = g.navigation.Jl;
  var c = a.Ja;
  a = c ? c.fc() : a.fc();
  g.navigation.Wd().lb || g.navigation.Aw();
  a &&
    a.s &&
    ((a = a.s.hc(!0)),
    0 < a.length && ((a = a[0]), (a = g.F.Nn(a)), I(g.navigation.jm(), a)));
};
g.navigation.qr = function (a) {
  g.Fc();
  var c = a.Ib(),
    d = !!a.Ja,
    e = a.hc(!0);
  g.navigation.eD(d);
  g.navigation.Ie = g.navigation.Pf;
  0 < e.length
    ? I(c, g.F.Ru(e[0]))
    : ((a = g.F.cm(a, new g.g.N(100, 100))), I(c, a));
};
g.navigation.jm = function () {
  var a = g.navigation.Mg(),
    c = null;
  a.pa && (c = (a = (c = a.Ja) ? c.fc() : a.fc()) ? a.s.Ib() : null);
  return c;
};
g.navigation.KI = function (a) {
  var c = a.fc();
  if (c && c.isVisible()) {
    var d = g.navigation.jm().lb.Fa;
    d.isEnabled()
      ? ((c = vb(c, d)),
        c.Ga(),
        la(c, !0),
        I(a.Ib(), g.F.Dg(c)),
        g.navigation.rC() ||
          g.navigation.Bd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.qr(a),
        I(a.Ib(), g.F.Ru(c)),
        g.navigation.xK())
      : g.navigation.Bd("Can't insert a disabled block.");
  } else
    g.navigation.Bd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.eD = function (a) {
  g.navigation.jm() &&
    (g.navigation.jm().Ia(), a && g.navigation.Mg().fc().Ia());
};
g.navigation.cJ = function () {
  var a = g.navigation.Wd().lb,
    c = g.navigation.Mg().Ib().lb;
  if (!a) return g.navigation.Bd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Bd("Cannot insert with no cursor node."), !1;
  a = a.rb();
  c = c.rb();
  return a == g.F.types.Dc
    ? (g.navigation.Bd("Should not have been able to mark a field."), !1)
    : a == g.F.types.kc
    ? (g.navigation.Bd("Should not have been able to mark a block."), !1)
    : a == g.F.types.qg
    ? (g.navigation.Bd("Should not have been able to mark a stack."), !1)
    : c == g.F.types.Dc
    ? (g.navigation.Bd("Cannot attach a field to anything else."), !1)
    : c == g.F.types.Rc
    ? (g.navigation.Bd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.hJ = function (a, c) {
  if (!a) return !1;
  if (a.Pa)
    return g.navigation.Bd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && x(a, !1);
  a.moveTo(c.Ts);
  return !0;
};
g.navigation.rC = function () {
  var a = g.navigation.Wd().lb,
    c = g.navigation.Mg().Ib().lb;
  if (!g.navigation.cJ()) return !1;
  var d = a.rb(),
    e = c.rb(),
    f = c.Fa,
    h = a.Fa;
  if (a.sm && c.sm) return g.navigation.Tf(f, h);
  if (a.sm && (e == g.F.types.kc || e == g.F.types.qg))
    return g.navigation.ZB(f, h);
  if (d == g.F.types.Rc) return (c = c ? c.Y() : null), g.navigation.hJ(c, a);
  g.navigation.Bd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.HH = function (a, c) {
  var d = a.Y(),
    e = c.Y();
  d.Zd() == e.Zd() &&
    (-1 < q(d, !1).indexOf(e)
      ? g.navigation.yr(c).disconnect()
      : g.navigation.yr(a).disconnect());
};
g.navigation.Gw = function (a, c) {
  if (!a || !c) return !1;
  var d = a.Y();
  return B(Ha(a), a, c, !1)
    ? (g.navigation.HH(a, c), C(c) || Oa(d.Zd(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.yr = function (a) {
  var c = a.Y();
  return C(a) ? (c.ba ? c.ba : c.O ? c.O : null) : a;
};
g.navigation.HB = function (a) {
  return C(a) ? a : a.ma ? a.ma : null;
};
g.navigation.Tf = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.yr(a),
    e = g.navigation.HB(c),
    f = g.navigation.HB(a),
    h = g.navigation.yr(c);
  if (
    (d && e && g.navigation.Gw(d, e)) ||
    (f && h && g.navigation.Gw(f, h)) ||
    g.navigation.Gw(a, c)
  )
    return !0;
  d = Ha(a).Lq(a, c, !1);
  g.navigation.Bd("Connection failed with error: " + bb(d, a, c));
  return !1;
};
g.navigation.ZB = function (a, c) {
  switch (c.type) {
    case g.Nf:
      if (g.navigation.Tf(a.Z, c)) return !0;
      break;
    case g.Cb:
      if (g.navigation.Tf(a.ba, c)) return !0;
      break;
    case g.pb:
      if (g.navigation.Tf(a.O, c)) return !0;
      break;
    case g.Mf:
      for (var d = 0; d < a.U.length; d++) {
        var e = a.U[d].connection;
        if (e && e.type === g.pb && g.navigation.Tf(e, c)) return !0;
      }
      if (a.O && g.navigation.Tf(a.O, c)) return !0;
  }
  g.navigation.Bd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.GH = function (a) {
  var c = a.Ib().lb;
  if (c.sm) {
    var d = c.Fa;
    d.isConnected()
      ? ((c = C(d) ? d : d.ma),
        (d = C(d) ? d.ma : d),
        d.Y().Pa
          ? g.navigation.tw("Cannot disconnect a shadow block")
          : (c.disconnect(),
            wb(d, c),
            Ya(c.Y().Zd()),
            (c = g.F.Eg(c)),
            I(a.Ib(), c)))
      : g.navigation.tw("Cannot disconnect unconnected connection");
  } else
    g.navigation.tw(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.Aw = function () {
  I(g.navigation.Wd(), g.navigation.Mg().Ib().lb);
};
g.navigation.xK = function () {
  var a = g.navigation.Wd();
  I(a, null);
  a.Ia();
};
g.navigation.ld = function (a) {
  g.navigation.Ie = a;
};
g.navigation.iJ = function (a) {
  var c = g.navigation.Mg();
  if (c && (c = c.Ib())) {
    var d = c.lb;
    d = d ? d.Y() : null;
    d === a
      ? d.getParent()
        ? (a = d.ba || d.O) && I(c, g.F.Eg(a.ma))
        : I(c, g.F.cm(d.u, d.Za()))
      : d && -1 < ja(a, !1).indexOf(d) && I(c, g.F.cm(d.u, d.Za()));
  }
};
g.navigation.jJ = function (a) {
  var c = g.navigation.Mg().Ib();
  if (c) {
    var d = c.lb;
    d = d ? d.Y() : null;
    d === a && I(c, g.F.Dg(d));
  }
};
g.navigation.QH = function () {
  var a = g.navigation.Mg();
  a.zb || ((a.zb = !0), g.navigation.qr(a));
};
g.navigation.EH = function () {
  var a = g.navigation.Mg();
  a.zb &&
    ((a.zb = !1),
    a.Ib().Ia(),
    g.navigation.Wd().Ia(),
    g.navigation.jm() && g.navigation.jm().Ia());
};
g.navigation.tw = function (a) {
  g.navigation.Am ? g.navigation.Am("log", a) : console.log(a);
};
g.navigation.Bd = function (a) {
  g.navigation.Am ? g.navigation.Am("warn", a) : console.warn(a);
};
g.navigation.bO = function (a) {
  g.navigation.Am ? g.navigation.Am("error", a) : console.error(a);
};
g.navigation.Yr = function (a, c, d) {
  var e = a.Ib(),
    f = a.Ib().lb;
  if (f.rb() !== g.F.types.Rc) return !1;
  f = f.Ts;
  I(
    e,
    g.F.cm(a, new g.g.N(c * g.navigation.fA + f.x, d * g.navigation.fA + f.y))
  );
  return !0;
};
g.navigation.tI = function (a) {
  a = a.Ib().lb;
  var c = a.rb();
  c == g.F.types.Dc
    ? ((a = a.Fa), Ga(a) && a.dg(void 0))
    : a.sm || c == g.F.types.Rc
    ? g.navigation.Aw()
    : c == g.F.types.kc
    ? g.navigation.Bd("Cannot mark a block.")
    : c == g.F.types.qg && g.navigation.Bd("Cannot mark a stack.");
};
g.navigation.pK = function () {
  var a = {
    name: g.navigation.Db.Md,
    $a: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      d = c.Ja;
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return c.Ib().ic(e);
        case g.navigation.Jl:
          return (c = d ? d.fc() : c.fc()), !(!c || !c.ic(e));
        case g.navigation.Kl:
          return d && "function" == typeof d.ic ? d.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.bA, a.name);
};
g.navigation.nK = function () {
  var a = {
    name: g.navigation.Db.Ot,
    $a: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return c.Ib().ic(e);
        case g.navigation.Jl:
          return g.navigation.oB(c), !0;
        case g.navigation.Kl:
          return (c = c.Ja) && "function" == typeof c.ic ? c.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.gy, a.name);
};
g.navigation.mK = function () {
  var a = {
    name: g.navigation.Db.Id,
    $a: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      d = c.Ja;
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return c.Ib().ic(e);
        case g.navigation.Jl:
          return (c = d ? d.fc() : c.fc()), !(!c || !c.ic(e));
        case g.navigation.Kl:
          return d && "function" == typeof d.ic ? d.ic(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.Gz, a.name);
};
g.navigation.hK = function () {
  var a = {
    name: g.navigation.Db.yt,
    $a: function (c) {
      return c.zb;
    },
    Ba: function (c, d, e) {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return c.Ib().ic(e);
        case g.navigation.Kl:
          return (
            ((d = c.Ja) && "function" == typeof d.ic && d.ic(e)) ||
              g.navigation.nB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.By, a.name);
};
g.navigation.jK = function () {
  var a = {
    name: g.navigation.Db.Zy,
    $a: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function () {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return g.navigation.rC();
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.kF, a.name);
};
g.navigation.kK = function () {
  var a = {
    name: g.navigation.Db.KF,
    $a: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return g.navigation.tI(c), !0;
        case g.navigation.Jl:
          return g.navigation.KI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.bq, a.name);
};
g.navigation.bK = function () {
  var a = {
    name: g.navigation.Db.vE,
    $a: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return g.navigation.GH(c), !0;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.Bq, a.name);
};
g.navigation.rK = function () {
  var a = {
    name: g.navigation.Db.xq,
    $a: function (c) {
      return c.zb && !c.options.readOnly;
    },
    Ba: function (c) {
      switch (g.navigation.Ie) {
        case g.navigation.Pf:
          return c.Ja ? g.navigation.oB(c) : g.navigation.nB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a);
  J(g.g.S.tG, a.name);
};
g.navigation.eK = function () {
  var a = {
    name: g.navigation.Db.FE,
    $a: function (c) {
      return c.zb;
    },
    Ba: function (c) {
      switch (g.navigation.Ie) {
        case g.navigation.Jl:
          return g.navigation.qr(c), !0;
        case g.navigation.Kl:
          return g.navigation.qr(c), !0;
        default:
          return !1;
      }
    },
  };
  g.ib.C.register(a, !0);
  J(g.g.S.st, a.name, !0);
  J(g.g.S.E, a.name, !0);
};
g.navigation.qK = function () {
  var a = {
    name: g.navigation.Db.xG,
    Ba: function (d) {
      d.zb ? g.navigation.EH() : g.navigation.QH();
      return !0;
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.uF, [g.g.S.wi, g.g.S.xh]);
  J(c, a.name);
};
g.navigation.tK = function () {
  var a = {
    name: g.navigation.Db.RF,
    $a: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.Yr(d, -1, 0);
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.gy, [g.g.S.xh]);
  J(c, a.name);
};
g.navigation.uK = function () {
  var a = {
    name: g.navigation.Db.SF,
    $a: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.Yr(d, 1, 0);
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.By, [g.g.S.xh]);
  J(c, a.name);
};
g.navigation.vK = function () {
  var a = {
    name: g.navigation.Db.TF,
    $a: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.Yr(d, 0, -1);
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.bA, [g.g.S.xh]);
  J(c, a.name);
};
g.navigation.sK = function () {
  var a = {
    name: g.navigation.Db.QF,
    $a: function (d) {
      return d.zb && !d.options.readOnly;
    },
    Ba: function (d) {
      return g.navigation.Yr(d, 0, 1);
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.Gz, [g.g.S.xh]);
  J(c, a.name);
};
g.navigation.lK = function () {
  g.navigation.hK();
  g.navigation.mK();
  g.navigation.nK();
  g.navigation.pK();
  g.navigation.sK();
  g.navigation.tK();
  g.navigation.uK();
  g.navigation.vK();
  g.navigation.bK();
  g.navigation.eK();
  g.navigation.jK();
  g.navigation.kK();
  g.navigation.qK();
  g.navigation.rK();
};
g.og = function (a, c) {
  this.sC = null;
  this.Td = new g.g.N(0, 0);
  this.wc = this.Hc = this.Mm = this.Nm = this.We = null;
  this.Su = c;
  this.vo = this.Fk = this.wo = this.qk = !1;
  this.xf = a;
  this.na = this.jl = this.wg = this.Qi = this.ks = this.js = null;
  this.Hr = this.rk = this.vA = !1;
  this.RB = !g.xE;
};
b = g.og.prototype;
b.I = function () {
  g.Touch.En();
  g.K.eL();
  this.Su.wd = null;
  this.js && g.Wa(this.js);
  this.ks && g.Wa(this.ks);
  this.wg && this.wg.I();
  this.jl && this.jl.I();
  this.Qi && this.Qi.I();
};
function xb(a, c) {
  a.Td = g.g.N.Sn(new g.g.N(c.clientX, c.clientY), a.sC);
  if (a.qk) var d = !1;
  else (a.qk = g.g.N.$I(a.Td) > (a.na ? g.VE : g.wE)), (d = a.qk);
  if (d) {
    if (a.vA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.vA = !0;
    if (a.We) {
      a.vo = !0;
      a.Qi = new g.Qp(a.We, a.wc);
      d = a.Qi;
      g.h.uc() || g.h.ea(!0);
      d.s.Xc(!1);
      d.Kc.tu = !1;
      d.jk && (d.Kc.moveTo(0, 0), d.jk.bl(d.fh.x, d.fh.y), ba(d.jk, d.Kc.Oa()));
      d.Kc.Bj && d.Kc.Bj(!0);
      var e = d.s.Ja;
      e &&
        "function" == typeof e.Dq &&
        e.Dq(d.Kc.ue() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      rb(a.Qi, a.xf, a.Td);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Hc)
        if (
          (a.na
            ? (a.Hc && a.Hc.isEnabled()
                ? ((d = !yb(a.na)) ||
                    ((d = a.Td),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.na.NH),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.wc = a.na.cb),
                      zb(a.wc),
                      g.h.uc() || g.h.ea(!0),
                      (a.Mm = null),
                      (a.Hc = vb(a.na, a.Hc)),
                      a.Hc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Fk = d))
            : a.Hc.Sc() && (a.Fk = !0),
          a.Fk)
        ) {
          a.wg = new g.Kj(a.Hc, a.wc);
          d = a.wg;
          e = a.Td;
          var f = a.RB;
          g.h.uc() || g.h.ea(!0);
          var h = new g.h.jg(d.Kb, !0, q(d.Kb, !1));
          g.h.Ha(h);
          d.s.Ao && Ya(d.Kb);
          g.g.o.pp();
          d.s.Xc(!1);
          g.Eb.fv();
          if (d.Kb.getParent() || (f && d.Kb.Z && d.Kb.Z.sa()))
            x(d.Kb, f),
              (e = d.Dm(e)),
              (e = g.g.N.sum(d.fh, e)),
              d.Kb.translate(e.x, e.y),
              g.Eb.IH(d.Kb),
              (e = d.Ig),
              (e.Hq = La(e));
          d.Kb.Bj(!0);
          e = d.Kb;
          e.Gp &&
            ((f = e.Za()),
            e.Oa().removeAttribute("transform"),
            e.u.De.bl(f.x, f.y),
            (f = e.Oa()) && ba(e.u.De, f));
          (e = d.s.Ja) &&
            "function" == typeof e.Dq &&
            e.Dq(d.Kb.ue() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Sa(a.wg, a.xf, a.Td);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.na) d = yb(a.na);
        else if ((d = a.wc)) (d = a.wc), (d = d.options.Uc && d.options.Uc.Ui);
      d &&
        ((a.jl = a.na ? new g.hq(a.na) : new g.zn(a.wc)),
        (a.wo = !0),
        a.jl.Mx());
    }
    g.kj();
  }
  a.xf = c;
}
b.gv = function (a) {
  g.g.Kr(a)
    ? this.cancel()
    : ((this.rk = !0),
      g.Eb.fv(),
      zb(this.wc),
      this.wc.Ao && this.wc.resize(),
      g.Fc(!!this.na),
      da(this.wc),
      (this.xf = a),
      g.K.block(),
      this.Hc &&
        (!this.Hc.Qb && a.shiftKey && this.Hc.u.zb
          ? I(this.Su.Ib(), g.F.Ru(this.Hc))
          : this.Hc.select()),
      g.g.Ik(a)
        ? pa(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.YI(a, this),
          (this.sC = new g.g.N(a.clientX, a.clientY)),
          (this.RB = a.altKey || a.ctrlKey || a.metaKey),
          this.Vl(a)));
};
b.Vl = function (a) {
  this.js = g.Aa(document, "mousemove", null, this.nm.bind(this));
  this.ks = g.Aa(document, "mouseup", null, this.Cr.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.nm = function (a) {
  xb(this, a);
  this.wo
    ? this.jl.Ui(this.Td)
    : this.Fk
    ? Sa(this.wg, this.xf, this.Td)
    : this.vo && rb(this.Qi, this.xf, this.Td);
  a.preventDefault();
  a.stopPropagation();
};
b.Cr = function (a) {
  xb(this, a);
  g.kj();
  if (this.Hr) console.log("Trying to end a gesture recursively.");
  else {
    this.Hr = !0;
    if (this.vo) sb(this.Qi, a, this.Td);
    else if (this.Fk) Wa(this.wg, a, this.Td);
    else if (this.wo) {
      var c = this.jl;
      c.Ui(this.Td);
      Da(c.s);
    } else if (this.We && !this.qk)
      this.We.GK && this.We.GK(), this.We.select && this.We.select();
    else if (Ab(this)) {
      c = this.Nm;
      var d = this.xf;
      Ga(c) && c.dg(d);
      Bb(this);
    } else
      !this.Mm || this.qk || Ab(this)
        ? this.Mm ||
          this.We ||
          this.Nm ||
          this.qk ||
          ((c = this.Su),
          a.shiftKey && c.zb
            ? ((d = g.g.CK(c, new g.g.N(a.clientX, a.clientY))),
              (d = g.F.cm(c, d)),
              I(c.Ib(), d))
            : g.selected && tb(g.selected),
          (c = new g.h.kg(null, (this.wc || c).id, "workspace")),
          g.h.Ha(c))
        : (this.na && this.na.Ul
            ? this.Hc.isEnabled() &&
              (g.h.uc() || g.h.ea(!0), Za(vb(this.na, this.Hc)))
            : ((c = new g.h.kg(this.Mm, this.wc.id, "block")), g.h.Ha(c)),
          Bb(this),
          g.h.ea(!1));
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.Hr) {
    g.kj();
    if (this.vo) sb(this.Qi, this.xf, this.Td);
    else if (this.Fk) Wa(this.wg, this.xf, this.Td);
    else if (this.wo) {
      var a = this.jl;
      a.Ui(this.Td);
      Da(a.s);
    }
    this.I();
  }
};
function pa(a, c) {
  a.Hc
    ? (Bb(a), g.Fc(!!a.na), a.Hc.jp(c))
    : a.We
    ? a.We.jp(c)
    : a.wc && !a.na && (g.Fc(), a.wc.jp(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function Cb(a, c, d) {
  if (a.rk)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.wc || (a.wc = d);
  a.xf = c;
  a.gv(c);
  a.wc.zb && g.navigation.ld(g.navigation.Pf);
}
function Db(a, c, d) {
  if (a.rk)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.na || (a.na = d);
  Cb(a, c, d.s);
}
function Bb(a) {
  a.Hc && !a.na && Ya(a.Hc);
}
function Eb(a, c) {
  a.Mm || a.We || ((a.Mm = c), c.Qb && c != c.Zd() ? Fb(a, c.Zd()) : Fb(a, c));
}
function Fb(a, c) {
  c.Pa ? Fb(a, c.getParent()) : (a.Hc = c);
}
function Ab(a) {
  return (a.Nm ? Ga(a.Nm) : !1) && !a.qk && (!a.na || !a.na.Ul);
}
b.Gc = function () {
  return this.wo || this.Fk || this.vo;
};
b.km = function () {
  return this.wg ? this.wg.km() : [];
};
g.og.yk = function () {
  for (var a = g.Ub.getAll(), c = 0, d; (d = a[c]); c++) if (d.wd) return !0;
  return !1;
};
g.ze = function (a, c, d) {
  this.Cc = this.tl;
  this.yD = this.dl = null;
  this.je = new g.g.ef(0, 0);
  this.B = this.Fw = this.ni = this.Ac = this.pc = this.Je = this.bi = this.Lh = null;
  d && this.oe(d);
  this.setValue(a);
  c && (this.dl = c);
};
b = g.ze.prototype;
b.tl = null;
b.name = void 0;
b.Wf = !1;
b.qC = 50;
b.J = null;
b.Yh = !0;
b.Hj = !0;
b.Hu = null;
g.ze.nz = "\u00a0";
b = g.ze.prototype;
b.aq = !0;
b.Zj = !1;
b.oe = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.Re(a.tooltip));
  c && this.bb(c);
};
b.Fx = function (a) {
  if (this.J) throw Error("Field already bound to a block.");
  this.J = a;
};
b.la = function () {
  !this.B && this.J && this.J.u && this.J.u.pa && (this.B = this.J.u.Lb.la());
  return this.B;
};
b.Y = function () {
  return this.J;
};
b.R = function () {
  this.Je ||
    ((this.Je = g.g.o.P(g.g.G.rd, {}, null)),
    this.isVisible() || (this.Je.style.display = "none"),
    this.J.Oa().appendChild(this.Je),
    this.cj(),
    this.ui(),
    this.bb(this.yD),
    g.K.Vl(Gb(this)),
    (this.Fw = g.Aa(Gb(this), "mousedown", this, this.qj)),
    this.zk());
};
b.cj = function () {
  Hb(this);
  Ib(this);
};
b.zk = function () {};
function Hb(a) {
  a.pc = g.g.o.P(
    g.g.G.Od,
    {
      rx: a.la().eq,
      ry: a.la().eq,
      x: 0,
      y: 0,
      height: a.je.height,
      width: a.je.width,
      class: "blocklyFieldRect",
    },
    a.Je
  );
}
function Ib(a) {
  a.Ac = g.g.o.P(g.g.G.Pz, { class: "blocklyText" }, a.Je);
  a.la().vt && a.Ac.setAttribute("dominant-baseline", "central");
  a.ni = document.createTextNode("");
  a.Ac.appendChild(a.ni);
}
b.ao = function (a) {
  this.setValue(a.textContent);
};
b.tD = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.I = function () {
  g.H.pm(this);
  g.ca.pm(this);
  g.K.Vx(Gb(this));
  this.Fw && g.Wa(this.Fw);
  g.g.o.removeNode(this.Je);
  this.Wf = !0;
};
b.ui = function () {
  var a = this.Je;
  this.aq &&
    a &&
    (this.J.ce()
      ? (g.g.o.Ka(a, "blocklyEditableText"),
        g.g.o.Nc(a, "blocklyNonEditableText"),
        (a.style.cursor = this.nt))
      : (g.g.o.Ka(a, "blocklyNonEditableText"),
        g.g.o.Nc(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function Ga(a) {
  return !!a.J && a.J.ce() && !!a.dg && "function" === typeof a.dg;
}
b.isVisible = function () {
  return this.Hj;
};
b.Jb = function (a) {
  if (this.Hj != a) {
    this.Hj = a;
    var c = this.Oa();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Jb(a, c) {
  a.dl = c;
}
b.KB = function () {
  return this.dl;
};
b.Oa = function () {
  return this.Je;
};
b.nc = function () {};
b.yj = function () {
  this.ni && (this.ni.nodeValue = this.xr());
  Kb(this);
};
function Kb(a, c) {
  var d = a.la();
  c = void 0 != c ? c : a.pc ? a.la().ul : 0;
  var e = 2 * c,
    f = d.fq,
    h = 0;
  a.Ac && ((h = g.g.o.Iv(a.Ac, d.Ai, d.Bi, d.zi)), (e += h));
  a.pc && (f = Math.max(f, d.Ly));
  a.je.height = f;
  a.je.width = e;
  Lb(a, c, h);
  Mb(a);
}
function Lb(a, c, d) {
  if (a.Ac) {
    var e = a.la(),
      f = a.je.height / 2;
    a.Ac.setAttribute("x", a.J.L ? a.je.width - d - c : c);
    a.Ac.setAttribute("y", e.vt ? f : f - e.fq / 2 + e.Ny);
  }
}
function Mb(a) {
  a.pc &&
    (a.pc.setAttribute("width", a.je.width),
    a.pc.setAttribute("height", a.je.height),
    a.pc.setAttribute("rx", a.la().eq),
    a.pc.setAttribute("ry", a.la().eq));
}
b.Sh = function () {
  if (!this.isVisible()) return new g.g.ef(0, 0);
  this.Yh
    ? (this.yj(), (this.Yh = !1))
    : this.Hj &&
      0 == this.je.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.yj());
  return this.je;
};
function ca(a) {
  if (a.pc)
    (c = a.pc.getBoundingClientRect()),
      (a = g.g.style.pk(a.pc)),
      (e = c.width),
      (c = c.height);
  else {
    var c = E(a.J),
      d = a.J.u.scale;
    a = g.g.style.pk(Gb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.cF
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Pj ||
        g.g.userAgent.af ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.xr = function () {
  var a = this.xd();
  if (!a) return g.ze.nz;
  a.length > this.qC && (a = a.substring(0, this.qC - 2) + "\u2026");
  a = a.replace(/\s/g, g.ze.nz);
  this.J && this.J.L && (a += "\u200f");
  return a;
};
b.xd = function () {
  if (this.Pv) {
    var a = this.Pv.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Eo = function () {
  this.Yh = !0;
  this.B = null;
};
function Nb(a) {
  a.Yh = !0;
  a.J && a.J.pa && (a.J.Ga(), a.J.$b(), a.Yx());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Ti(a);
    a = Ob(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.KB()))
        if (((c = c.call(this, a)), (a = Ob(this, a, c)), a instanceof Error))
          return;
      c = this.J;
      if (!c || !c.Wf) {
        var d = this.getValue();
        d === a
          ? this.Qh(a)
          : (c &&
              g.h.isEnabled() &&
              g.h.Ha(new g.h.ih(c, "field", this.name || null, d, a)),
            this.Qh(a),
            this.Yh && Nb(this));
      }
    }
  }
};
function Ob(a, c, d) {
  if (null === d) return a.eB(), a.Yh && Nb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.Cc;
};
b.Ti = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Qh = function (a) {
  this.Cc = a;
  this.Yh = !0;
};
b.eB = function () {};
b.qj = function (a) {
  if (this.J && this.J.u && (a = this.J.u.Wi(a))) {
    if (a.rk)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Nm || (a.Nm = this);
  }
};
b.bb = function (a) {
  a || "" === a || (a = this.J);
  var c = Gb(this);
  c ? (c.Gf = a) : (this.yD = a);
};
function Gb(a) {
  return a.Hu || a.Oa();
}
b.Wo = function () {
  return !1;
};
b.Ng = function () {
  for (var a = null, c = this.J, d = c.U, e = 0; e < c.U.length; e++)
    for (var f = d[e], h = f.kb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.gC = function () {
  return !1;
};
b.ic = function () {
  return !1;
};
b.ji = function (a) {
  a ? (this.Je.appendChild(a), (this.Lh = a)) : (this.Lh = null);
};
b.li = function (a) {
  a ? (this.Je.appendChild(a), (this.bi = a)) : (this.bi = null);
};
b.Yx = function () {
  var a = this.J.u;
  a.zb && this.Lh && a.Ib().draw();
  a.zb && this.bi && a.Wd(g.navigation.cn).draw();
};
g.qd = function (a, c, d) {
  this.Oq = null;
  g.qd.v.constructor.call(this, a, null, d);
  d || (this.Oq = c || null);
};
g.g.object.X(g.qd, g.ze);
g.qd.prototype.tl = "";
g.qd.ka = function (a) {
  var c = g.g.Re(a.text);
  return new g.qd(c, void 0, a);
};
g.qd.prototype.aq = !1;
g.qd.prototype.oe = function (a) {
  g.qd.v.oe.call(this, a);
  this.Oq = a["class"];
};
g.qd.prototype.cj = function () {
  Ib(this);
  this.Oq && g.g.o.Ka(this.Ac, this.Oq);
};
g.qd.prototype.Ti = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.Xf.register("field_label", g.qd);
g.cz = function (a, c, d, e) {
  if (a != g.nh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.J = d;
  this.connection = e;
  this.kb = [];
};
b = g.cz.prototype;
b.align = g.Ws;
b.Hj = !0;
b.Y = function () {
  return this.J;
};
function L(a, c, d) {
  Pb(a, a.kb.length, c, d);
  return a;
}
function Pb(a, c, d, e) {
  if (0 > c || c > a.kb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.qd(d));
  d.Fx(a.J);
  a.J.pa && (d.R(), d.nc());
  d.name = e;
  d.Jb(a.isVisible());
  e = d;
  e.jx && (c = Pb(a, c, e.jx));
  a.kb.splice(c, 0, d);
  ++c;
  e.Px && (c = Pb(a, c, e.Px));
  a.J.pa && ((a.J = a.J), a.J.Ga(), a.J.$b());
  return c;
}
function Qb(a, c) {
  for (var d = 0, e; (e = a.kb[d]); d++)
    if (e.name === c) {
      e.I();
      a.kb.splice(d, 1);
      a.J.pa && ((a.J = a.J), a.J.Ga(), a.J.$b());
      return;
    }
  throw Error('Field "' + c + '" not found.');
}
b.isVisible = function () {
  return this.Hj;
};
b.Jb = function (a) {
  if (this.Hj != a) {
    this.Hj = a;
    for (var c = 0, d; (d = this.kb[c]); c++) d.Jb(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) Rb(this.connection);
      else if (((c = this.connection), Sb(c, !1), c.ma))
        for (c = q(c.sa(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.Zf(!0), h = 0; h < f.length; h++)
            Sb(f[h], !1);
          e = Ra(e);
          for (h = 0; h < e.length; h++) e[h].Jb(!1);
        }
      if ((c = this.connection.sa()))
        c.Oa().style.display = a ? "block" : "none";
    }
  }
};
b.Eo = function () {
  for (var a = 0, c; (c = this.kb[a]); a++) c.Eo();
};
b.Sb = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Sb(a);
  return this;
};
function Tb(a, c) {
  a.align = c;
  a.J.pa && ((a.J = a.J), a.J.Ga());
  return a;
}
b.Km = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Km(a);
};
b.lm = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.lm();
};
b.R = function () {
  if (this.J.u.pa) for (var a = 0; a < this.kb.length; a++) this.kb[a].R();
};
b.I = function () {
  for (var a = 0, c; (c = this.kb[a]); a++) c.I();
  this.connection && this.connection.I();
  this.J = null;
};
g.ke = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Vd(d) ? d : g.g.Rh();
  a.vu[this.id] = this;
  this.ba = this.Z = this.O = null;
  this.U = [];
  this.Xh = void 0;
  this.disabled = !1;
  this.Gf = "";
  this.contextMenu = !0;
  this.Yg = null;
  this.Hh = [];
  this.hB = this.uC = this.Wu = !0;
  this.ck = this.Pa = !1;
  this.Gn = null;
  this.Fe = { text: null, hx: !1, size: new g.g.ef(160, 80) };
  this.MD = new g.g.N(0, 0);
  this.u = a;
  this.Qb = a.ag;
  this.L = a.L;
  this.vm = !1;
  this.Qg = void 0;
  this.pa = null;
  if (c) {
    this.type = c;
    d = g.M[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Oe(this, d);
  }
  a.Eq(this);
  a.si[this.type] || (a.si[this.type] = []);
  a.si[this.type].push(this);
  (a = g.h.uc()) || g.h.ea(!0);
  c = g.h.ab;
  try {
    "function" == typeof this.R && ((g.h.ab = !1), this.R(), (g.h.ab = c)),
      g.h.isEnabled() && g.h.Ha(new g.h.Pp(this));
  } finally {
    a || g.h.ea(!1), (g.h.ab = c);
  }
  this.JI = this.Xh;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.No && kb(this.u, this.No);
    if ((this.onchange = a)) (this.No = a.bind(this)), H(this.u, this.No);
  }
};
g.ke.Xm = "_TEMP_COLLAPSED_INPUT";
g.ke.gt = "_TEMP_COLLAPSED_FIELD";
b = g.ke.prototype;
b.data = null;
b.Wf = !1;
b.dd = "#000000";
b.Zk = null;
b.I = function (a) {
  if (this.u) {
    this.No && kb(this.u, this.No);
    x(this, a);
    g.h.isEnabled() && g.h.Ha(new g.h.aE(this));
    g.h.disable();
    try {
      if (this.u) {
        this.u.vs(this);
        var c = this.u;
        c.si[this.type].splice(c.si[this.type].indexOf(this), 1);
        c.si[this.type].length || delete c.si[this.type];
        delete this.u.vu[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Hh.length - 1; 0 <= d; d--) this.Hh[d].I(!1);
      d = 0;
      for (var e; (e = this.U[d]); d++) e.I();
      this.U.length = 0;
      var f = this.Zf(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.I();
    } finally {
      g.h.enable(), (this.Wf = !0);
    }
  }
};
b.zk = function () {
  for (var a = 0, c; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.zk && e.zk();
};
function x(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.ma), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.U.length; e++) {
          var f = a.U[e].connection;
          if (f && f.type == g.pb && f.ma) {
            if (c) {
              c = null;
              break a;
            }
            c = f;
          }
        }
      }
      c &&
        c.isConnected() &&
        !c.sa().Pa &&
        ((c = c.ma),
        c.disconnect(),
        B(a.u.Jn, c, d, !1) ? d.connect(c) : c.bs(d));
    }
  } else
    a.ba &&
      ((d = null),
      a.ba.isConnected() && ((d = a.ba.ma), a.ba.disconnect()),
      (e = r(a)),
      c &&
        e &&
        !e.Pa &&
        ((c = a.Z.ma),
        c.disconnect(),
        d && B(a.u.Jn, d, c, !1) && d.connect(c)));
}
b.Zf = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ba && a.push(this.ba);
  this.Z && a.push(this.Z);
  for (var c = 0, d; (d = this.U[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Nr = function () {
  for (var a = this.Z; a; ) {
    var c = a.sa();
    if (!c) return a;
    a = c.Z;
  }
  return null;
};
b.$b = function () {};
b.getParent = function () {
  return this.Yg;
};
function ia(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    if (e.connection && e.connection.sa() == c) return e;
  return null;
}
function Ub(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (r(a) == c);
  return a;
}
function r(a) {
  return a.Z && a.Z.sa();
}
b.Zd = function () {
  var a = this;
  do {
    var c = a;
    a = c.Yg;
  } while (a);
  return c;
};
function ja(a, c) {
  if (!c) return a.Hh;
  c = [];
  for (var d = 0, e; (e = a.U[d]); d++)
    e.connection && (e = e.connection.sa()) && c.push(e);
  (a = r(a)) && c.push(a);
  return c;
}
b.Ds = function (a) {
  if (a != this.Yg) {
    if (this.Yg) {
      g.g.Fq(this.Yg.Hh, this);
      if (this.ba && this.ba.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.Yg = null;
    } else this.u.vs(this);
    (this.Yg = a) ? a.Hh.push(this) : this.u.Eq(this);
  }
};
function q(a, c) {
  var d = [a];
  a = ja(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, q(e, c));
  return d;
}
b.ue = function () {
  return this.Wu && !this.Pa && !(this.u && this.u.options.readOnly);
};
b.Sc = function () {
  return this.uC && !this.Pa && !(this.u && this.u.options.readOnly);
};
b.Cs = function (a) {
  this.uC = a;
};
b.Ex = function (a) {
  this.Pa = a;
};
b.ve = function () {
  return this.vm;
};
b.iD = function (a) {
  this.vm = a;
};
b.ce = function () {
  return this.hB && !(this.u && this.u.options.readOnly);
};
b.Bx = function (a) {
  this.hB = a;
  a = 0;
  for (var c; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.ui();
};
b.Jv = function (a, c) {
  var d = this.Zf(!0);
  a = a.Zf(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.bb = function (a) {
  this.Gf = a;
};
b.Gv = function () {
  return this.dd;
};
b.Vc = function (a) {
  this.dd = g.g.os(a).so;
};
b.bc = function (a) {
  this.Zk = a;
};
function w(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++) if (h.name == c) return h;
  return null;
}
b.Uh = function () {
  for (var a = [], c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++) f.Wo() && a.push(f.getValue());
  return a;
};
b.Th = function () {
  for (var a = [], c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++)
      f.Wo() && (f = this.u.$f(f.getValue())) && a.push(f);
  return a;
};
b.Os = function (a) {
  for (var c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.kb[e]); e++)
      f.Wo() && a.Na() == f.getValue() && Nb(f);
};
b.xs = function (a, c) {
  for (var d = 0, e; (e = this.U[d]); d++)
    for (var f = 0, h; (h = e.kb[f]); f++)
      h.Wo() && a == h.getValue() && h.setValue(c);
};
function D(a, c) {
  return (a = w(a, c)) ? a.getValue() : null;
}
function Vb(a, c, d) {
  a = w(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.Ve = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ba) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ba = this.Do(g.Nf);
    }
    this.ba.Sb(c);
  } else if (this.ba) {
    if (this.ba.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ba.I();
    this.ba = null;
  }
};
b.Ue = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Z || (this.Z = this.Do(g.Cb)),
      this.Z.Sb(c);
  else if (this.Z) {
    if (this.Z.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Z.I();
    this.Z = null;
  }
};
b.ie = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ba)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Do(g.Mf);
    }
    this.O.Sb(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.I();
    this.O = null;
  }
};
b.Wc = function (a) {
  this.Xh != a &&
    (g.h.Ha(new g.h.ih(this, "inline", null, this.Xh, a)), (this.Xh = a));
};
function Ia(a) {
  if (void 0 != a.Xh) return a.Xh;
  for (var c = 1; c < a.U.length; c++)
    if (a.U[c - 1].type == g.nh && a.U[c].type == g.nh) return !1;
  for (c = 1; c < a.U.length; c++)
    if (a.U[c - 1].type == g.pb && a.U[c].type == g.nh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.ge = function (a) {
  this.isEnabled() != a &&
    (g.h.Ha(new g.h.ih(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function Wb(a) {
  for (a = Ub(a); a; ) {
    if (a.disabled) return !0;
    a = Ub(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.ck;
};
b.Aj = function (a) {
  this.ck != a &&
    (g.h.Ha(new g.h.ih(this, "collapsed", null, this.ck, a)), (this.ck = a));
};
b.toString = function (a, c) {
  function d(n) {
    var p = n.xg;
    !p && n.ma && (p = n.ma.xg);
    return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"));
  }
  function e() {
    k && k.rb() == l.rb() && k.Fa == l.Fa && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.F.Fi;
  g.F.Fi = !0;
  for (var k = g.F.Dg(this), l = k; k; ) {
    switch (k.rb()) {
      case g.F.types.bf:
        var m = k.Fa;
        k.Sg() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.F.types.Dc:
        (m = k.Fa), m.name != g.ke.gt && f.push(m.xd());
    }
    m = k;
    k = m.Sg() || m.next();
    if (!k) {
      k = m.Wg();
      for (e(); k && !k.next(); )
        (k = k.Wg()),
          e(),
          k && k.rb() == g.F.types.bf && d(k.Fa) && f.push(")");
      k && (k = k.next());
    }
  }
  g.F.Fi = h;
  c = 2;
  for (h = f.length; c < h; c++)
    "(" == f[c - 2] &&
      ")" == f[c] &&
      ((f[c - 2] = f[c - 1]), f.splice(c - 1, 2), (h -= 2));
  f =
    f
      .join(" ")
      .replace(/(\() | (\))/gim, "$1$2")
      .trim() || "???";
  a && f.length > a && (f = f.substring(0, a - 3) + "...");
  return f;
};
function M(a, c) {
  return a.Bn(g.pb, c);
}
function Xb(a, c) {
  return a.Bn(g.Cb, c);
}
function N(a, c) {
  return a.Bn(g.nh, c || "");
}
function O(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Qg && ((a.Qg = c.style.Qg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.bc(e);
    } catch (oa) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.Vc(e);
      } catch (oa) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.ZK(c["message" + e]),
        n = [],
        p = 0,
        t = [],
        y = 0;
      y < m.length;
      y++
    ) {
      var G = m[y];
      if ("number" == typeof G) {
        if (0 >= G || G > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + G + " out of range."
          );
        if (n[G])
          throw Error(
            'Block "' + f.type + '": Message index %' + G + " duplicated."
          );
        n[G] = !0;
        p++;
        t.push(h[G - 1]);
      } else (G = G.trim()) && t.push(G);
    }
    if (p != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    t.length &&
      ("string" == typeof t[t.length - 1] ||
        g.g.ub.startsWith(t[t.length - 1].type, "field_")) &&
      ((y = { type: "input_dummy" }), k && (y.align = k), t.push(y));
    k = { LEFT: g.Ws, RIGHT: g.ll, CENTRE: g.Vs, CENTER: g.Vs };
    h = [];
    for (y = 0; y < t.length; y++)
      if (((n = t[y]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = p = null;
        do
          if (((G = !1), "string" == typeof n)) p = new g.qd(n);
          else
            switch (n.type) {
              case "input_value":
                m = M(f, n.name);
                break;
              case "input_statement":
                m = Xb(f, n.name);
                break;
              case "input_dummy":
                m = N(f, n.name);
                break;
              default:
                (p = g.Xf.ka(n)), !p && n.alt && ((n = n.alt), (G = !0));
            }
        while (G);
        if (p) h.push([p, n.name]);
        else if (m) {
          n.check && m.Sb(n.check);
          n.align &&
            ((p = k[n.align.toUpperCase()]),
            void 0 === p
              ? console.warn(l + "Illegal align value: ", n.align)
              : Tb(m, p));
          for (n = 0; n < h.length; n++) L(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.Wc(c.inputsInline);
  void 0 !== c.output && a.ie(!0, c.output);
  void 0 !== c.previousStatement && a.Ve(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Ue(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.Re(e)), a.bb(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.Re(e)), (a.Pb = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.ga.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.ga.apply(c[d], a, !1);
}
b.Oe = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Oe(this, a);
};
b.Bn = function (a, c) {
  var d = null;
  if (a == g.pb || a == g.Cb) d = this.Do(a);
  a = new g.cz(a, c, this, d);
  this.U.push(a);
  return a;
};
function Yb(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.U.length, h = 0, k; (k = a.U[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.Jw(e, f);
  }
}
b.Jw = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.U.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.U.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.U[a];
  this.U.splice(a, 1);
  a < c && c--;
  this.U.splice(c, 0, d);
};
b.Ab = function (a, c) {
  for (var d = 0, e; (e = this.U[d]); d++)
    if (e.name == a) return e.I(), this.U.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function z(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++) if (e.name == c) return e;
  return null;
}
function P(a, c) {
  return (a = z(a, c)) && a.connection && a.connection.sa();
}
b.bh = function (a) {
  this.Fe.text != a &&
    (g.h.Ha(new g.h.ih(this, "comment", null, this.Fe.text, a)),
    (this.Gn = this.Fe.text = a));
};
b.Lm = function () {};
b.Cj = function () {};
b.Za = function () {
  return this.MD;
};
b.moveBy = function (a, c) {
  if (this.Yg) throw Error("Block has parent.");
  var d = new g.h.Wm(this);
  this.MD.translate(a, c);
  d.Wk();
  g.h.Ha(d);
};
b.Do = function (a) {
  return new g.Ca(this, a);
};
g.m = {};
g.m.qM = function () {};
g.g.va = {};
g.g.va.PD = "aria-";
g.g.va.kG = "role";
g.g.va.Ii = {
  lM: "grid",
  mM: "gridcell",
  dF: "group",
  zF: "listbox",
  NF: "menu",
  OF: "menuitem",
  BM: "menuitemcheckbox",
  XF: "option",
  eG: "presentation",
  Wt: "row",
  AG: "tree",
  BG: "treeitem",
};
g.g.va.State = {
  Us: "activedescendant",
  FL: "colcount",
  uE: "disabled",
  GE: "expanded",
  $y: "invalid",
  vF: "label",
  wF: "labelledby",
  xF: "level",
  qN: "orientation",
  wN: "posinset",
  CN: "rowcount",
  Gl: "selected",
  FN: "setsize",
  DG: "valuemax",
  EG: "valuemin",
};
g.g.va.Df = function (a, c) {
  a.setAttribute(g.g.va.kG, c);
};
g.g.va.ld = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.va.PD + c, d);
};
g.g.S = {
  TN: 0,
  wM: 3,
  TD: 8,
  uG: 9,
  HM: 12,
  bq: 13,
  xh: 16,
  wi: 17,
  ml: 18,
  sN: 19,
  BL: 20,
  st: 27,
  Jz: 32,
  bG: 33,
  aG: 34,
  DE: 35,
  gF: 36,
  Sj: 37,
  ju: 38,
  Xj: 39,
  rt: 40,
  vN: 43,
  xN: 44,
  Zy: 45,
  Oj: 46,
  ZERO: 48,
  ONE: 49,
  ON: 50,
  MN: 51,
  kM: 52,
  jM: 53,
  IN: 54,
  GN: 55,
  QL: 56,
  FM: 57,
  hM: 59,
  fM: 61,
  eM: 173,
  gM: 163,
  yN: 63,
  wL: 64,
  gy: 65,
  yL: 66,
  dt: 67,
  By: 68,
  E: 69,
  SL: 70,
  rd: 71,
  nM: 72,
  kF: 73,
  rM: 74,
  uF: 75,
  sM: 76,
  vM: 77,
  EM: 78,
  XM: 79,
  rN: 80,
  Q: 81,
  zN: 82,
  Gz: 83,
  tG: 84,
  PN: 85,
  ku: 86,
  bA: 87,
  Bq: 88,
  KG: 89,
  Rl: 90,
  Al: 91,
  UN: 92,
  HL: 93,
  WM: 96,
  PM: 97,
  VM: 98,
  UM: 99,
  LM: 100,
  KM: 101,
  TM: 102,
  SM: 103,
  JM: 104,
  OM: 105,
  NM: 106,
  RM: 107,
  MM: 109,
  QM: 110,
  IM: 111,
  TL: 112,
  XL: 113,
  YL: 114,
  ZL: 115,
  $L: 116,
  aM: 117,
  bM: 118,
  cM: 119,
  dM: 120,
  UL: 121,
  VL: 122,
  WL: 123,
  GM: 144,
  DN: 145,
  iM: 166,
  tM: 183,
  EN: 186,
  JL: 189,
  RL: 187,
  GL: 188,
  tN: 190,
  JN: 191,
  vL: 192,
  NN: 192,
  HN: 222,
  YM: 219,
  zL: 220,
  EL: 221,
  SN: 224,
  xM: 224,
  yM: 91,
  zM: 93,
  RN: 229,
  QN: 252,
  uN: 255,
};
g.Gt = function () {
  this.wf = [];
  this.Xk = this.Hb = this.fs = this.Vr = this.Ur = this.Qq = this.Wr = this.aj = this.Vw = null;
};
b = g.Gt.prototype;
b.Ga = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.Xk && g.g.va.Df(c, this.Xk);
  this.Hb = c;
  for (var d = 0, e; (e = this.wf[d]); d++) c.appendChild(e.jb());
  this.Wr = g.Aa(c, "mouseover", this, this.yI, !0);
  this.Qq = g.Aa(c, "click", this, this.sI, !0);
  this.Ur = g.Aa(c, "mouseenter", this, this.wI, !0);
  this.Vr = g.Aa(c, "mouseleave", this, this.xI, !0);
  this.fs = g.Aa(c, "keydown", this, this.uI);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Hb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Ka(a, "blocklyFocused"));
};
b.Df = function (a) {
  this.Xk = a;
};
b.I = function () {
  this.Wr && (g.Wa(this.Wr), (this.Wr = null));
  this.Qq && (g.Wa(this.Qq), (this.Qq = null));
  this.Ur && (g.Wa(this.Ur), (this.Ur = null));
  this.Vr && (g.Wa(this.Vr), (this.Vr = null));
  this.fs && (g.Wa(this.fs), (this.fs = null));
  for (var a = 0, c; (c = this.wf[a]); a++) c.I();
  this.Hb = null;
};
function Zb(a, c) {
  for (var d = a.Hb; c && c != d; ) {
    if (g.g.o.Tv(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.wf[e]); e++) if (f.Hb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.ki = function (a) {
  var c = this.aj;
  c && (c.ki(!1), (this.aj = null));
  a &&
    (a.ki(!0),
    (this.aj = a),
    (c = this.Hb),
    g.g.style.DK(a.Hb, c),
    g.g.va.ld(c, g.g.va.State.Us, a.Na()));
};
function $b(a) {
  var c = a.wf.indexOf(a.aj);
  ac(a, 0 > c ? a.wf.length : c, -1);
}
function ac(a, c, d) {
  c += d;
  for (var e; (e = a.wf[c]); ) {
    if (e.isEnabled()) {
      a.ki(e);
      break;
    }
    c += d;
  }
}
b.yI = function (a) {
  (a = Zb(this, a.target)) &&
    (a.isEnabled() ? this.aj != a && this.ki(a) : this.ki(null));
};
b.sI = function (a) {
  var c = this.Vw;
  this.Vw = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.N.Tn(c, new g.g.N(a.clientX, a.clientY))) ||
    ((a = Zb(this, a.target)) && a.isEnabled() && a.An && a.An(a));
};
b.wI = function () {
  this.focus();
};
b.xI = function () {
  if (this.Hb) {
    var a = this.Hb;
    a && (a.blur(), g.g.o.Nc(a, "blocklyFocused"));
    this.ki(null);
  }
};
b.uI = function (a) {
  if (this.wf.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.aj;
    switch (a.keyCode) {
      case g.g.S.bq:
      case g.g.S.Jz:
        c && c.isEnabled() && c.An && c.An(c);
        break;
      case g.g.S.ju:
        $b(this);
        break;
      case g.g.S.rt:
        ac(this, this.wf.indexOf(this.aj), 1);
        break;
      case g.g.S.bG:
      case g.g.S.gF:
        ac(this, -1, 1);
        break;
      case g.g.S.aG:
      case g.g.S.DE:
        ac(this, this.wf.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Sh = function () {
  var a = this.Hb,
    c = g.g.style.Sh(a);
  c.height = a.scrollHeight;
  return c;
};
g.Ht = function (a, c) {
  this.Kh = a;
  this.Cc = c;
  this.lr = !0;
  this.Hb = null;
  this.zx = !1;
  this.Xk = null;
  this.UB = this.Gu = this.Fu = !1;
  this.An = null;
};
b = g.Ht.prototype;
b.jb = function () {
  var a = document.createElement("div");
  a.id = g.g.wl.Lv();
  this.Hb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.lr ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.Gu ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.UB ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.zx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.Fu) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Kh;
  "string" == typeof this.Kh && (d = document.createTextNode(this.Kh));
  c.appendChild(d);
  a.appendChild(c);
  this.Xk && g.g.va.Df(a, this.Xk);
  g.g.va.ld(a, g.g.va.State.Gl, (this.Fu && this.Gu) || !1);
  g.g.va.ld(a, g.g.va.State.uE, !this.lr);
  return a;
};
b.I = function () {
  this.Hb = null;
};
b.Na = function () {
  return this.Hb.id;
};
b.getValue = function () {
  return this.Cc;
};
b.Df = function (a) {
  this.Xk = a;
};
b.ki = function (a) {
  this.UB = a;
  var c = this.Hb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Ka(c, "blocklyMenuItemHighlight"),
        g.g.o.Ka(c, "goog-menuitem-highlight"))
      : (g.g.o.Nc(c, "blocklyMenuItemHighlight"),
        g.g.o.Nc(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.lr;
};
b.ge = function (a) {
  this.lr = a;
};
function bc(a, c, d) {
  a.An = c.bind(d);
}
g.Ya = {};
g.Ya.$q = null;
g.Ya.Tc = null;
g.Ya.show = function (a, c, d) {
  g.ca.show(g.Ya, d, g.Ya.I);
  if (c.length) {
    var e = g.Ya.LJ(c, d);
    g.Ya.Tc = e;
    g.Ya.NJ(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.Ya.$q = null;
  } else g.Ya.Ia();
};
g.Ya.LJ = function (a, c) {
  var d = new g.Gt();
  d.Df(g.g.va.Ii.NF);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.Ht(f.text);
    h.zx = c;
    h.Df(g.g.va.Ii.OF);
    d.wf.push(h);
    h.ge(f.enabled);
    f.enabled &&
      bc(
        h,
        function () {
          g.Ya.Ia();
          this.Ba(this.scope);
        },
        f
      );
  }
  return d;
};
g.Ya.NJ = function (a, c, d) {
  var e = g.g.qI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.Ya.uH(a);
  var f = a.Sh();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.ca.MJ(e, c, f, d);
  a.focus();
};
g.Ya.uH = function (a) {
  a.Ga(g.ca.ob);
  var c = a.Hb;
  g.g.o.Ka(c, "blocklyContextMenu");
  g.Aa(c, "contextmenu", null, g.g.rJ);
  a.focus();
};
g.Ya.Ia = function () {
  g.ca.pm(g.Ya);
  g.Ya.$q = null;
};
g.Ya.I = function () {
  g.Ya.Tc && (g.Ya.Tc.I(), (g.Ya.Tc = null));
};
g.Ya.Kq = function (a, c) {
  return function () {
    g.h.disable();
    try {
      var d = g.V.hk(c, a.u),
        e = a.Za();
      e.x = a.L ? e.x - g.Pd : e.x + g.Pd;
      e.y += 2 * g.Pd;
      d.moveBy(e.x, e.y);
    } finally {
      g.h.enable();
    }
    g.h.isEnabled() && !d.Pa && g.h.Ha(new g.h.Pp(d));
    d.select();
  };
};
g.Ya.ZN = function (a) {
  return {
    text: g.i.REMOVE_COMMENT,
    enabled: !0,
    Ba: function () {
      g.h.ea(!0);
      a.I(!0, !0);
      g.h.ea(!1);
    },
  };
};
g.Ya.$N = function (a) {
  return {
    text: g.i.DUPLICATE_COMMENT,
    enabled: !0,
    Ba: function () {
      g.duplicate(a);
    },
  };
};
g.Ya.JO = function (a, c) {
  if (!g.Ql) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.af };
  d.text = g.i.ADD_COMMENT;
  d.Ba = function () {
    var e = new g.Ql(a, g.i.WORKSPACE_COMMENT_DEFAULT_TEXT, g.Ql.sE, g.Ql.sE),
      f = aa(a).getBoundingClientRect();
    f = new g.g.N(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.no(a.Mb);
    f = g.g.N.Sn(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.pa && (e.uf(), e.Ga(), e.select());
  };
  return d;
};
g.Da = {};
g.Da.sx = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.UNDO;
    },
    $a: function (a) {
      return 0 < a.u.cl.length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      jb(a.u, !1);
    },
    Te: g.Ta.Qd.Rc,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Da.qx = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.REDO;
    },
    $a: function (a) {
      return 0 < a.u.Vo.length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      jb(a.u, !0);
    },
    Te: g.Ta.Qd.Rc,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Da.SJ = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.CLEAN_UP;
    },
    $a: function (a) {
      return a.u.Sc()
        ? 1 < a.u.hc(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ba: function (a) {
      a = a.u;
      a.Xc(!1);
      g.h.ea(!0);
      for (var c = a.hc(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Sc()) {
          var h = f.Za();
          f.moveBy(-h.x, d - h.y);
          cc(f);
          d = f.Za().y + E(f).height + a.Lb.la().dn;
        }
      g.h.ea(!1);
      a.Xc(!0);
    },
    Te: g.Ta.Qd.Rc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Da.vD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.Aj.bind(f, a), d), (f = r(f)), (d += 10);
};
g.Da.TJ = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.COLLAPSE_ALL;
    },
    $a: function (a) {
      if (a.u.options.collapse) {
        a = a.u.hc(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = r(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ba: function (a) {
      g.Da.vD(!0, a.u.hc(!0));
    },
    Te: g.Ta.Qd.Rc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Da.fK = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.EXPAND_ALL;
    },
    $a: function (a) {
      if (a.u.options.collapse) {
        a = a.u.hc(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = r(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ba: function (a) {
      g.Da.vD(!1, a.u.hc(!0));
    },
    Te: g.Ta.Qd.Rc,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Da.lA = function (a, c) {
  if (a.ue()) Array.prototype.push.apply(c, q(a, !1));
  else {
    a = ja(a, !1);
    for (var d = 0; d < a.length; d++) g.Da.lA(a[d], c);
  }
};
g.Da.Hv = function (a) {
  var c = [];
  a = a.hc(!0);
  for (var d = 0; d < a.length; d++) g.Da.lA(a[d], c);
  return c;
};
g.Da.cr = function (a, c) {
  g.h.ea(c);
  var d = a.shift();
  d && (d.u ? (d.I(!1, !0), setTimeout(g.Da.cr, 10, a, c)) : g.Da.cr(a, c));
  g.h.ea(!1);
};
g.Da.$J = function () {
  g.Ta.C.register({
    Ud: function (a) {
      if (a.u)
        return (
          (a = g.Da.Hv(a.u).length),
          1 == a
            ? g.i.DELETE_BLOCK
            : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    $a: function (a) {
      if (a.u) return 0 < g.Da.Hv(a.u).length ? "enabled" : "disabled";
    },
    Ba: function (a) {
      if (a.u) {
        dc(a.u);
        var c = g.Da.Hv(a.u),
          d = g.g.Rh();
        2 > c.length
          ? g.Da.cr(c, d)
          : g.confirm(
              g.i.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Da.cr(c, d);
              }
            );
      }
    },
    Te: g.Ta.Qd.Rc,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Da.wK = function () {
  g.Da.sx();
  g.Da.qx();
  g.Da.SJ();
  g.Da.TJ();
  g.Da.fK();
  g.Da.$J();
};
g.Da.cK = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.DUPLICATE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Qb && a.ue() && a.Sc()
        ? (ib(a.u) ? hb(a.u, g.g.Dv(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ba: function (a) {
      a.block && g.duplicate(a.block);
    },
    Te: g.Ta.Qd.kc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Da.VJ = function () {
  g.Ta.C.register({
    Ud: function (a) {
      return a.block.kf ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT;
    },
    $a: function (a) {
      a = a.block;
      return g.g.userAgent.af ||
        a.Qb ||
        !a.u.options.Hn ||
        a.isCollapsed() ||
        !a.ce()
        ? "hidden"
        : "enabled";
    },
    Ba: function (a) {
      a = a.block;
      a.kf ? a.bh(null) : a.bh("");
    },
    Te: g.Ta.Qd.kc,
    id: "blockComment",
    weight: 2,
  });
};
g.Da.iK = function () {
  g.Ta.C.register({
    Ud: function (a) {
      return Ia(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS;
    },
    $a: function (a) {
      a = a.block;
      if (!a.Qb && a.Sc() && !a.isCollapsed())
        for (var c = 1; c < a.U.length; c++)
          if (a.U[c - 1].type != g.Cb && a.U[c].type != g.Cb) return "enabled";
      return "hidden";
    },
    Ba: function (a) {
      a.block.Wc(!Ia(a.block));
    },
    Te: g.Ta.Qd.kc,
    id: "blockInline",
    weight: 3,
  });
};
g.Da.UJ = function () {
  g.Ta.C.register({
    Ud: function (a) {
      return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Qb && a.Sc() ? "enabled" : "hidden";
    },
    Ba: function (a) {
      a.block.Aj(!a.block.isCollapsed());
    },
    Te: g.Ta.Qd.kc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Da.aK = function () {
  g.Ta.C.register({
    Ud: function (a) {
      return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Qb && a.u.options.disable && a.ce()
        ? Wb(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    Ba: function (a) {
      a = a.block;
      var c = g.h.uc();
      c || g.h.ea(!0);
      a.ge(!a.isEnabled());
      c || g.h.ea(!1);
    },
    Te: g.Ta.Qd.kc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Da.ox = function () {
  g.Ta.C.register({
    Ud: function (a) {
      var c = a.block;
      a = q(c, !1).length;
      (c = r(c)) && (a -= q(c, !1).length);
      return 1 == a
        ? g.i.DELETE_BLOCK
        : g.i.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    $a: function (a) {
      return !a.block.Qb && a.block.ue() ? "enabled" : "hidden";
    },
    Ba: function (a) {
      g.h.ea(!0);
      a.block.I(!0, !0);
      g.h.ea(!1);
    },
    Te: g.Ta.Qd.kc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Da.gK = function () {
  g.Ta.C.register({
    Ud: function () {
      return g.i.HELP;
    },
    $a: function (a) {
      a = a.block;
      return ("function" == typeof a.Pb ? a.Pb() : a.Pb) ? "enabled" : "hidden";
    },
    Ba: function (a) {
      a.block.showHelp();
    },
    Te: g.Ta.Qd.kc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Da.RJ = function () {
  g.Da.cK();
  g.Da.VJ();
  g.Da.iK();
  g.Da.UJ();
  g.Da.aK();
  g.Da.ox();
  g.Da.gK();
};
g.Da.YJ = function () {
  g.Da.wK();
  g.Da.RJ();
};
g.Ta = function () {
  g.Ta.C = this;
  this.Qe = {};
  g.Da.YJ();
};
g.Ta.Qd = { kc: "block", Rc: "workspace" };
g.Ta.C = null;
g.Ta.prototype.register = function (a) {
  if (this.Qe[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.Qe[a.id] = a;
};
g.Ta.prototype.unregister = function (a) {
  if (this.Qe[a]) delete this.Qe[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Ta.prototype.getItem = function (a) {
  return this.Qe[a] ? this.Qe[a] : null;
};
function ec(a, c) {
  var d = [],
    e = g.Ta.C.Qe;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.Te) {
      var h = f.$a(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Ud ? f.Ud(c) : f.Ud,
          enabled: "enabled" == h,
          Ba: f.Ba,
          scope: c,
          weight: f.weight,
        }),
        d.push(f));
    }
  });
  d.sort(function (f, h) {
    return f.weight - h.weight;
  });
  return d;
}
new g.Ta();
g.h.rg = function (a, c, d) {
  g.h.rg.v.constructor.call(this, d);
  this.AC = a;
  this.wC = c;
};
g.g.object.X(g.h.rg, g.h.Ce);
g.h.rg.prototype.type = g.h.Gl;
g.h.rg.prototype.xa = function () {
  var a = g.h.rg.v.xa.call(this);
  a.oldElementId = this.AC;
  a.newElementId = this.wC;
  return a;
};
g.h.rg.prototype.ka = function (a) {
  g.h.rg.v.ka.call(this, a);
  this.AC = a.oldElementId;
  this.wC = a.newElementId;
};
g.C.register(g.C.aa.ec, g.h.Gl, g.h.rg);
g.xc = function (a, c) {
  g.xc.v.constructor.call(this, a, c);
  this.Fg = a.u.Yq[c];
  this.SA = a.u.Yq[g.Dl[c]];
  this.Sk = new g.g.N(0, 0);
  this.ri = g.xc.ug.dA;
  this.ma = null;
};
g.g.object.X(g.xc, g.Ca);
g.xc.ug = { dA: -1, Vz: 0, Pl: 1 };
b = g.xc.prototype;
b.I = function () {
  g.xc.v.I.call(this);
  this.ri == g.xc.ug.Pl && fc(this.Fg, this, this.y);
};
b.Y = function () {
  return g.xc.v.Y.call(this);
};
b.sa = function () {
  return g.xc.v.sa.call(this);
};
function cb(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function wb(a, c) {
  if (!a.J.u.Gc()) {
    var d = a.J.Zd();
    if (!d.Qb) {
      var e = !1;
      if (!d.Sc()) {
        d = c.Y().Zd();
        if (!d.Sc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Cq();
      var h = c.x + g.Pd + Math.floor(Math.random() * g.ct) - a.x,
        k = c.y + g.Pd + Math.floor(Math.random() * g.ct) - a.y;
      e && (k = -k);
      d.L && (h = c.x - g.Pd - Math.floor(Math.random() * g.ct) - a.x);
      d.moveBy(h, k);
      f || d.Xo();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.ri == g.xc.ug.dA) {
    var d = this.Fg;
    d.tc.splice(gc(d, c), 0, this);
    this.ri = g.xc.ug.Pl;
  } else
    this.ri == g.xc.ug.Pl &&
      (fc(this.Fg, this, this.y),
      (d = this.Fg),
      d.tc.splice(gc(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function hc(a, c) {
  a.moveTo(c.x + a.Sk.x, c.y + a.Sk.y);
}
function ic(a, c, d) {
  a.Sk.x = c;
  a.Sk.y = d;
}
function jc(a) {
  var c = a.ma.x - a.x,
    d = a.ma.y - a.y;
  if (0 != c || 0 != d) {
    a = a.sa();
    var e = a.Oa();
    if (!e) throw Error("block is not rendered.");
    e = g.g.rf(e);
    a.Oa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Xa(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.SA;
  if (d.tc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = gc(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.tc[m].y - this.y) <= a; )
      (l = d.tc[m]),
        B(d.IA, this, l, !0, k) && ((c = l), (k = cb(l, this))),
        m--;
    for (; h < d.tc.length && Math.abs(d.tc[h].y - this.y) <= a; )
      (l = d.tc[h]),
        B(d.IA, this, l, !0, k) && ((c = l), (k = cb(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, rs: k };
  } else a = { connection: null, rs: a };
  return a;
};
function Sb(a, c) {
  (c && a.ri == g.xc.ug.Pl) ||
    (!c && a.ri == g.xc.ug.Vz) ||
    a.J.Qb ||
    (c
      ? ((c = a.Fg), c.tc.splice(gc(c, a.y), 0, a), (a.ri = g.xc.ug.Pl))
      : (a.ri == g.xc.ug.Pl && fc(a.Fg, a, a.y), (a.ri = g.xc.ug.Vz)));
}
function Rb(a) {
  Sb(a, !0);
  var c = [];
  if (a.type != g.pb && a.type != g.Cb) return c;
  if ((a = a.sa())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.Z && d.push(a.Z);
      a.ba && d.push(a.ba);
    } else d = a.Zf(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, Rb(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.bs = function (a) {
  wb(this, a);
};
b.dv = function (a, c) {
  g.xc.v.dv.call(this, a, c);
  a.pa && a.Ga();
  c.pa && (ma(c), c.Ga(), (c.Oa().style.display = "block"));
};
b.$o = function () {
  g.xc.v.$o.call(this);
  var a = this.sa();
  a && (a.uf(), a.Ga(!1), (a = this.Y()), a.pa && a.Ga());
};
b.vC = function (a) {
  return kc(this.SA, this, a);
};
b.Tf = function (a) {
  g.xc.v.Tf.call(this, a);
  var c = this.Y();
  a = a.Y();
  var d = c.pa,
    e = a.pa;
  d && ma(c);
  e && ma(a);
  d && e && (this.type == g.Cb || this.type == g.Nf ? a.Ga() : c.Ga());
  if ((c = ia(c, a)))
    (c = c.isVisible()), (a.Oa().style.display = c ? "block" : "none");
};
b.JC = function () {
  !this.isConnected() ||
    (this.ma && B(Ha(this), this, this.ma, !1)) ||
    (x(C(this) ? this.sa() : this.J), this.J.$b());
};
g.gn = function () {
  this.re = this.lb = this.Fb = null;
  this.type = "marker";
};
function I(a, c) {
  var d = a.lb;
  a.lb = c;
  a.re && a.re.draw(d, a.lb);
}
g.gn.prototype.draw = function () {
  this.re && this.re.draw(this.lb, this.lb);
};
g.gn.prototype.Ia = function () {
  this.re && this.re.Ia();
};
g.gn.prototype.I = function () {
  this.re && this.re.I();
};
g.rl = function () {
  g.rl.v.constructor.call(this);
  this.type = "cursor";
};
g.g.object.X(g.rl, g.gn);
b = g.rl.prototype;
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.rb() == g.F.types.Id || a.rb() == g.F.types.kc);

  )
    a = a.next();
  a && I(this, a);
  return a;
};
b.Sg = function () {
  var a = this.lb;
  if (!a) return null;
  if (a.rb() == g.F.types.Md || a.rb() == g.F.types.Wj) a = a.next();
  (a = a.Sg()) && I(this, a);
  return a;
};
b.Bf = function () {
  var a = this.lb;
  if (!a) return null;
  for (
    a = a.Bf();
    a && a.Bf() && (a.rb() == g.F.types.Id || a.rb() == g.F.types.kc);

  )
    a = a.Bf();
  a && I(this, a);
  return a;
};
b.Wg = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.Wg()) && a.rb() == g.F.types.kc && (a = a.Bf() || a);
  a && I(this, a);
  return a;
};
b.ic = function (a) {
  if (this.lb && this.lb.rb() === g.F.types.Dc && this.lb.Fa.ic(a)) return !0;
  switch (a.name) {
    case g.navigation.Db.Md:
      return this.Bf(), !0;
    case g.navigation.Db.Ot:
      return this.Wg(), !0;
    case g.navigation.Db.Id:
      return this.next(), !0;
    case g.navigation.Db.yt:
      return this.Sg(), !0;
    default:
      return !1;
  }
};
g.Op = function () {
  g.Op.v.constructor.call(this);
};
g.g.object.X(g.Op, g.rl);
b = g.Op.prototype;
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  (a = lc(this, a, this.Zx)) && I(this, a);
  return a;
};
b.Sg = function () {
  return this.next();
};
b.Bf = function () {
  var a = this.lb;
  if (!a) return null;
  (a = mc(this, a, this.Zx)) && I(this, a);
  return a;
};
b.Wg = function () {
  return this.Bf();
};
function lc(a, c, d) {
  if (!c) return null;
  var e = c.Sg() || c.next();
  if (d(e)) return e;
  if (e) return lc(a, e, d);
  c = nc(a, c.Wg());
  return d(c) ? c : c ? lc(a, c, d) : null;
}
function mc(a, c, d) {
  if (!c) return null;
  var e = c.Bf();
  e = e ? oc(a, e) : c.Wg();
  return d(e) ? e : e ? mc(a, e, d) : null;
}
b.Zx = function (a) {
  var c = !1;
  a = a && a.rb();
  if (
    a == g.F.types.Wj ||
    a == g.F.types.bf ||
    a == g.F.types.Dc ||
    a == g.F.types.Id ||
    a == g.F.types.Md ||
    a == g.F.types.Rc
  )
    c = !0;
  return c;
};
function nc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : nc(a, c.Wg());
}
function oc(a, c) {
  if (!c.Sg()) return c;
  for (c = c.Sg(); c.next(); ) c = c.next();
  return oc(a, c);
}
g.Aq = function () {
  g.Aq.v.constructor.call(this);
};
g.g.object.X(g.Aq, g.Op);
g.Aq.prototype.Zx = function (a) {
  var c = !1,
    d = a && a.rb();
  a && ((a = a.Fa), d == g.F.types.Dc && a && a.gC() && Ga(a) && (c = !0));
  return c;
};
g.wb = function (a, c, d) {
  this.W = g.g.o.P(g.g.G.rd, {}, null);
  this.W.zp = "";
  this.style = pc(a.Lb.la(), null);
  this.Rb = a.Lb.oC(this.W, this.style);
  this.tx = this.pa = !1;
  this.u = a;
  this.ba = this.Z = this.O = null;
  this.Gp = g.g.Ck() && !!a.De;
  var e = this.Rb.cc;
  e.Gf = this;
  g.K.Vl(e);
  g.wb.v.constructor.call(this, a, c, d);
  this.W.dataset
    ? (this.W.dataset.id = this.id)
    : g.g.userAgent.af && this.W.setAttribute("data-id", this.id);
};
g.g.object.X(g.wb, g.ke);
g.wb.prototype.height = 0;
g.wb.prototype.width = 0;
g.wb.prototype.ye = null;
g.wb.pM = -1;
g.wb.dE = "TEMP_COLLAPSED_WARNING_";
b = g.wb.prototype;
b.uf = function () {
  if (!this.u.pa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.U[a]); a++) c.R();
  c = Ra(this);
  for (a = 0; a < c.length; a++) qc(c[a]);
  this.nc();
  Pa(this.Rb, "blocklyDraggable", this.Sc());
  a = this.Oa();
  this.u.options.readOnly ||
    this.RH ||
    !a ||
    g.Aa(a, "mousedown", this, this.qj);
  this.RH = !0;
  a.parentNode || this.u.Mb.appendChild(a);
};
b.select = function () {
  if (this.Pa && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.h.disable();
      try {
        tb(g.selected);
      } finally {
        g.h.enable();
      }
    }
    a = new g.h.rg(a, this.id, this.u.id);
    g.h.Ha(a);
    g.selected = this;
    this.Cq();
  }
};
function tb(a) {
  if (g.selected == a) {
    var c = new g.h.rg(a.id, null, a.u.id);
    c.Pc = a.u.id;
    g.h.Ha(c);
    g.selected = null;
    a.Xo();
  }
}
b.jd = null;
b.Gn = null;
b.kf = null;
b.Ye = null;
function Ra(a) {
  var c = [];
  a.jd && c.push(a.jd);
  a.kf && c.push(a.kf);
  a.Ye && c.push(a.Ye);
  return c;
}
b.Ds = function (a) {
  var c = this.Yg;
  if (a != c) {
    g.g.o.pp();
    g.wb.v.Ds.call(this, a);
    g.g.o.qp();
    var d = this.Oa();
    if (!this.u.ew && d) {
      var e = this.Za();
      a
        ? (a.Oa().appendChild(d),
          (a = this.Za()),
          Xa(this, a.x - e.x, a.y - e.y))
        : c && (this.u.Mb.appendChild(d), this.translate(e.x, e.y));
      this.nc();
    }
  }
};
b.Za = function () {
  var a = 0,
    c = 0,
    d = this.Gp ? this.u.De.uc() : null,
    e = this.Oa();
  if (e) {
    do {
      var f = g.g.rf(e);
      a += f.x;
      c += f.y;
      this.Gp &&
        this.u.De.Hg.firstChild == e &&
        ((f = this.u.De.Ov()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.Mb && e != d);
  }
  return new g.g.N(a, c);
};
b.moveBy = function (a, c) {
  if (this.Yg) throw Error("Block has parent.");
  var d = g.h.isEnabled();
  if (d) var e = new g.h.Wm(this);
  var f = this.Za();
  this.translate(f.x + a, f.y + c);
  Xa(this, a, c);
  d && (e.Wk(), g.h.Ha(e));
  na(this.u);
};
b.translate = function (a, c) {
  this.Oa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Za();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.Iw = function (a) {
  this.Gp
    ? this.u.De.bl(a.x, a.y)
    : ((this.W.zp = "translate(" + a.x + "," + a.y + ")"),
      this.W.setAttribute("transform", this.W.zp + this.W.mp));
};
function cc(a) {
  if (a.u && !a.u.Gc() && !a.getParent() && !a.Qb) {
    var c = a.u.sf;
    if (c && c.MK) {
      var d = c.Kx,
        e = d / 2,
        f = a.Za();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function rc(a) {
  var c = a.Za(),
    d = E(a);
  if (a.L) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Eo = function () {
  this.Rb.am = this.u.Lb.la();
  for (var a = 0, c; (c = this.U[a]); a++) c.Eo();
};
b.Aj = function (a) {
  this.ck != a &&
    (g.wb.v.Aj.call(this, a), a ? this.pa && this.Ga() : sc(this));
};
function sc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.U[d]); d++)
    e.name != g.ke.Xm && e.Jb(!c);
  if (c) {
    e = Ra(a);
    for (d = 0; (c = e[d]); d++) c.Jb(!1);
    d = a.toString(g.eE);
    (e = w(a, g.ke.gt))
      ? e.setValue(d)
      : ((e = z(a, g.ke.Xm) || N(a, g.ke.Xm)), L(e, new g.qd(d), g.ke.gt));
  } else a.Ab(g.ke.Xm);
}
b.qj = function (a) {
  var c = this.u && this.u.Wi(a);
  if (c) {
    if (c.rk)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Eb(c, this);
    c.xf = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Pb ? this.Pb() : this.Pb;
  a && window.open(a);
};
b.jp = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = ec(g.Ta.Qd.kc, { block: this })), this.Mh && this.Mh(c);
  c && c.length && (g.Ya.show(a, c, this.L), (g.Ya.$q = this));
};
function Xa(a, c, d) {
  if (a.pa) {
    for (var e = a.Zf(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Ra(a);
    for (f = 0; f < e.length; f++) tc(e[f]);
    for (f = 0; f < a.Hh.length; f++) Xa(a.Hh[f], c, d);
  }
}
b.Bj = function (a) {
  if (a) {
    var c = this.Oa();
    c.zp = "";
    c.mp = "";
    g.hm = g.hm.concat(this.Zf(!0));
    g.g.o.Ka(this.W, "blocklyDragging");
  } else (g.hm = []), g.g.o.Nc(this.W, "blocklyDragging");
  for (c = 0; c < this.Hh.length; c++) this.Hh[c].Bj(a);
};
b.Cs = function (a) {
  g.wb.v.Cs.call(this, a);
  Pa(this.Rb, "blocklyDraggable", a);
};
b.Bx = function (a) {
  g.wb.v.Bx.call(this, a);
  a = Ra(this);
  for (var c = 0; c < a.length; c++) a[c].ui();
};
b.Ex = function (a) {
  g.wb.v.Ex.call(this, a);
  this.nc();
};
b.iD = function (a) {
  this.vm != a &&
    (this.vm = a) &&
    (this.Vc(this.u.Lb.la().At), Pa(this.Rb, "blocklyInsertionMarker", !0));
};
b.Oa = function () {
  return this.W;
};
b.I = function (a, c) {
  if (this.u) {
    g.K.I();
    g.K.Vx(this.Rb.cc);
    g.g.o.pp();
    var d = this.u;
    g.selected == this && (tb(this), dc(this.u));
    g.Ya.$q == this && g.Ya.Ia();
    this.u.zb && g.navigation.iJ(this);
    c && this.pa && (x(this, a), g.Eb.JH(this));
    this.pa = !1;
    if (this.ye) {
      for (var e in this.ye) clearTimeout(this.ye[e]);
      this.ye = null;
    }
    c = Ra(this);
    for (e = 0; e < c.length; e++) c[e].I();
    g.wb.v.I.call(this, !!a);
    g.g.o.removeNode(this.W);
    na(d);
    this.W = null;
    g.g.o.qp();
  }
};
b.nc = function () {
  this.Rb.nc(this);
  for (var a = Ra(this), c = 0; c < a.length; c++) a[c].nc();
  for (a = 0; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.kb[d]); d++) e.nc();
};
function ma(a) {
  var c = ja(a, !1);
  a.nc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.pa && ma(d);
  }
}
b.dI = function () {
  return this.kf;
};
b.bh = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Fe.text != a &&
    (g.wb.v.bh.call(this, a),
    (a = null != a),
    !!this.kf == a
      ? ((a = this.kf),
        a.al
          ? (a.al.value = a.hd.text)
          : a.Vk && (a.Vk.firstChild.textContent = a.hd.text))
      : (a
          ? (this.Gn = this.kf = new g.Comment(this))
          : (this.kf.I(), (this.Gn = this.kf = null)),
        this.pa && (this.Ga(), this.$b())));
};
b.Lm = function (a, c) {
  if (!g.xn) throw Error("Missing require for Blockly.Warning");
  this.ye || (this.ye = Object.create(null));
  var d = c || "";
  if (d) this.ye[d] && (clearTimeout(this.ye[d]), delete this.ye[d]);
  else for (var e in this.ye) clearTimeout(this.ye[e]), delete this.ye[e];
  if (this.u.Gc()) {
    var f = this;
    this.ye[d] = setTimeout(function () {
      f.u && (delete f.ye[d], f.Lm(a, d));
    }, 100);
  } else {
    this.Qb && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = Ub(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = Ub(e));
      h && h.Lm(g.i.COLLAPSED_WARNINGS_WARNING, g.wb.dE);
      this.Ye || ((this.Ye = new g.xn(this)), (c = !0));
      uc(this.Ye, a, d);
    } else
      this.Ye && !d
        ? (this.Ye.I(), (c = !0))
        : this.Ye &&
          ((c = this.Ye.xd()),
          uc(this.Ye, "", d),
          (e = this.Ye.xd()) || this.Ye.I(),
          (c = c != e));
    c && this.pa && (this.Ga(), this.$b());
  }
};
b.Cj = function (a) {
  this.jd && this.jd !== a && this.jd.I();
  a && ((a.T = this), (this.jd = a), qc(a));
  this.pa && (this.Ga(), this.$b());
};
b.ge = function (a) {
  this.isEnabled() != a &&
    (g.wb.v.ge.call(this, a), this.pa && !Wb(this) && ma(this));
};
b.ki = function (a) {
  this.pa && this.Rb.AD(a);
};
b.Cq = function () {
  Pa(this.Rb, "blocklySelected", !0);
};
b.Xo = function () {
  Pa(this.Rb, "blocklySelected", !1);
};
b.gp = function (a) {
  Pa(this.Rb, "blocklyDraggingDelete", a);
};
b.Gv = function () {
  return this.style.Ih;
};
b.Vc = function (a) {
  g.wb.v.Vc.call(this, a);
  a = vc(this.u.Lb.la(), this.dd);
  this.Rb.bc(a.style);
  this.style = a.style;
  this.Zk = a.name;
  this.nc();
};
b.bc = function (a) {
  var c = pc(this.u.Lb.la(), a);
  this.Zk = a;
  if (c)
    (this.Qg = c.Qg),
      this.Rb.bc(c),
      (this.dd = c.Ih),
      (this.style = c),
      this.nc();
  else throw Error("Invalid style name: " + a);
};
function Ya(a) {
  do {
    var c = a.Oa(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.Ve = function (a, c) {
  g.wb.v.Ve.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
};
b.Ue = function (a, c) {
  g.wb.v.Ue.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
};
b.ie = function (a, c) {
  g.wb.v.ie.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
};
b.Wc = function (a) {
  g.wb.v.Wc.call(this, a);
  this.pa && (this.Ga(), this.$b());
};
b.Ab = function (a, c) {
  a = g.wb.v.Ab.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
  return a;
};
b.Jw = function (a, c) {
  g.wb.v.Jw.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
};
b.Bn = function (a, c) {
  a = g.wb.v.Bn.call(this, a, c);
  this.pa && (this.Ga(), this.$b());
  return a;
};
function la(a, c) {
  a.ba && Sb(a.ba, c);
  a.O && Sb(a.O, c);
  if (a.Z) {
    Sb(a.Z, c);
    var d = a.Z.sa();
    d && la(d, c);
  }
  if (!a.ck)
    for (d = 0; d < a.U.length; d++) {
      var e = a.U[d].connection;
      e && (Sb(e, c), (e = e.sa()) && la(e, c));
    }
}
b.Zf = function (a) {
  var c = [];
  if (a || this.pa)
    if (
      (this.O && c.push(this.O),
      this.ba && c.push(this.ba),
      this.Z && c.push(this.Z),
      a || !this.ck)
    ) {
      a = 0;
      for (var d; (d = this.U[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.Nr = function () {
  return g.wb.v.Nr.call(this);
};
b.Jv = function (a, c) {
  return g.wb.v.Jv.call(this, a, c);
};
b.Do = function (a) {
  return new g.xc(this, a);
};
b.$b = function () {
  if (this.u && !this.u.Gc()) {
    var a = this.Zd();
    if (!a.Qb)
      for (var c = this.Zf(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && C(e) && e.sa().$b();
        for (var f = e.vC(g.Pd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.Y().Zd() != a && (C(e) ? wb(k, e) : wb(e, k)));
      }
  }
};
function Za(a) {
  var c = g.h.uc();
  setTimeout(function () {
    g.h.ea(c);
    cc(a);
    g.h.ea(!1);
  }, g.Np / 2);
  setTimeout(function () {
    g.h.ea(c);
    a.$b();
    g.h.ea(!1);
  }, g.Np);
}
function Oa(a, c, d) {
  (c.type != g.Cb && c.type != g.pb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.wb.v.getParent.call(this);
};
b.Zd = function () {
  return g.wb.v.Zd.call(this);
};
b.Ga = function (a) {
  if (!this.tx) {
    this.tx = !0;
    try {
      this.pa = !0;
      g.g.o.pp();
      this.isCollapsed() && sc(this);
      this.u.Lb.Ga(this);
      var c = this.Za();
      this.ba && hc(this.ba, c);
      this.O && hc(this.O, c);
      for (var d = 0; d < this.U.length; d++) {
        var e = this.U[d].connection;
        e && (hc(e, c), e.isConnected() && jc(e));
      }
      this.Z && (hc(this.Z, c), this.Z.isConnected() && jc(this.Z));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ga(!0) : na(this.u);
      }
      g.g.o.qp();
      this.Yx();
    } finally {
      this.tx = !1;
    }
  }
};
b.Yx = function () {
  this.u.zb && this.Rb.Qn && this.u.Ib().draw();
  this.u.zb && this.Rb.Bw && this.u.Wd(g.navigation.cn).draw();
};
b.ji = function (a) {
  this.Rb.ji(a);
};
b.li = function (a) {
  this.Rb.li(a);
};
function E(a) {
  var c = a.height,
    d = a.width,
    e = r(a);
  e &&
    ((e = E(e)),
    (a = a.u.Lb.la().Jt),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.m.Fp = !1;
g.m.register = function (a, c) {
  g.C.register(g.C.aa.RENDERER, a, c);
};
g.m.unregister = function (a) {
  g.C.unregister(g.C.aa.RENDERER, a);
};
g.m.EO = function () {
  g.m.Fp = !0;
};
g.m.FO = function () {
  g.m.Fp = !1;
};
g.m.R = function (a, c, d) {
  a = new (g.C.io(g.C.aa.RENDERER, a))(a);
  a.R(c, d);
  return a;
};
g.ql = function (a) {
  this.tc = [];
  this.IA = a;
};
function wc(a, c, d) {
  if (!a.tc.length) return -1;
  var e = gc(a, d);
  if (e >= a.tc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.tc[f].y == d; ) {
    if (a.tc[f] == c) return f;
    f--;
  }
  for (; e < a.tc.length && a.tc[e].y == d; ) {
    if (a.tc[e] == c) return e;
    e++;
  }
  return -1;
}
function gc(a, c) {
  if (!a.tc.length) return 0;
  for (var d = 0, e = a.tc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.tc[f].y < c) d = f + 1;
    else if (a.tc[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function fc(a, c, d) {
  c = wc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.tc.splice(c, 1);
}
function kc(a, c, d) {
  function e(n) {
    var p = h - f[n].x,
      t = k - f[n].y;
    Math.sqrt(p * p + t * t) <= d && m.push(f[n]);
    return t < d;
  }
  var f = a.tc,
    h = c.x,
    k = c.y;
  a = 0;
  for (var l = (c = f.length - 2); a < l; )
    f[l].y < k ? (a = l) : (c = l), (l = Math.floor((a + c) / 2));
  var m = [];
  c = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do c++;
    while (c < f.length && e(c));
  }
  return m;
}
g.ql.R = function (a) {
  var c = [];
  c[g.pb] = new g.ql(a);
  c[g.Mf] = new g.ql(a);
  c[g.Cb] = new g.ql(a);
  c[g.Nf] = new g.ql(a);
  return c;
};
g.h.yh = function (a, c) {
  g.h.yh.v.constructor.call(this, c);
  this.sD = a;
};
g.g.object.X(g.h.yh, g.h.Ce);
g.h.yh.prototype.type = g.h.Qz;
g.h.yh.prototype.xa = function () {
  var a = g.h.yh.v.xa.call(this);
  a.themeName = this.sD;
  return a;
};
g.h.yh.prototype.ka = function (a) {
  g.h.yh.v.ka.call(this, a);
  this.sD = a.themeName;
};
g.C.register(g.C.aa.ec, g.h.Qz, g.h.yh);
g.h.Eh = function (a, c, d, e) {
  g.h.Eh.v.constructor.call(this, e);
  this.dc = a;
  this.Xb = c;
  this.scale = d;
};
g.g.object.X(g.h.Eh, g.h.Ce);
g.h.Eh.prototype.type = g.h.$z;
g.h.Eh.prototype.xa = function () {
  var a = g.h.Eh.v.xa.call(this);
  a.viewTop = this.dc;
  a.viewLeft = this.Xb;
  a.scale = this.scale;
  return a;
};
g.h.Eh.prototype.ka = function (a) {
  g.h.Eh.v.ka.call(this, a);
  this.dc = a.viewTop;
  this.Xb = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.aa.ec, g.h.$z, g.h.Eh);
g.mz = function (a) {
  this.Lh = this.nf = null;
  this.Nk = {};
  this.s = a;
};
function xc(a, c) {
  var d = a.Nk[c];
  if (d) d.I(), delete a.Nk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.mz.prototype;
b.Ib = function () {
  return this.nf;
};
b.Wd = function (a) {
  return this.Nk[a];
};
function yc(a, c) {
  a.nf && a.nf.re && a.nf.re.I();
  a.nf = c;
  a.nf &&
    ((c = a.nf),
    (c = new g.m.rh(a.s, a.s.Lb.la(), c)),
    (a.nf.re = c),
    a.ji(a.nf.re.jb()));
}
b.ji = function (a) {
  a ? (this.s.Mb.appendChild(a), (this.Lh = a)) : (this.Lh = null);
};
b.li = function (a) {
  a
    ? this.s.Mb &&
      (this.Lh ? this.s.Mb.insertBefore(a, this.Lh) : this.s.Mb.appendChild(a))
    : (this.bi = null);
};
b.I = function () {
  for (var a = Object.keys(this.Nk), c = 0, d; (d = a[c]); c++) xc(this, d);
  this.Nk = null;
  this.nf && (this.nf.I(), (this.nf = null));
};
g.Uz = function (a, c) {
  this.s = a;
  this.oi = c;
  this.sp = [];
  this.Bg = Object.create(null);
};
b = g.Uz.prototype;
b.Og = function () {
  return this.oi;
};
b.ip = function (a) {
  var c = this.oi;
  this.oi = a;
  if ((a = aa(this.s))) c && g.g.o.Nc(a, c.Yf()), g.g.o.Ka(a, this.oi.Yf());
  for (c = 0; (a = this.sp[c]); c++) a.Hm();
  c = 0;
  a = Object.keys(this.Bg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Bg[d][e]); e++)
      f.element.style[f.propertyName] = (this.oi && fa(this.oi, d)) || "";
  g.Fc();
};
b.subscribe = function (a, c, d) {
  this.Bg[c] || (this.Bg[c] = []);
  this.Bg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.oi && fa(this.oi, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Bg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Bg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Bg[e].length || delete this.Bg[e];
    }
};
b.I = function () {
  this.Bg = this.sp = this.oi = this.zf = null;
};
g.ne = function (a, c) {
  g.ne.v.constructor.call(this, a, c);
  this.Jr = !1;
  this.Ee = Object.create(null);
  this.mD = this.So = 0;
  this.dC = this.Uw = null;
};
g.g.object.X(g.ne, g.og);
g.ne.LG = 5;
g.ne.MG = 6;
b = g.ne.prototype;
b.gv = function (a) {
  this.dC = this.wc.options.Bb && this.wc.options.Bb.gx;
  g.ne.v.gv.call(this, a);
  !this.Hr && g.Touch.Mr(a) && zc(this, a);
};
b.Vl = function (a) {
  this.Uw = g.Aa(document, "mousedown", null, this.zI.bind(this), !0);
  this.js = g.Aa(document, "mousemove", null, this.nm.bind(this), !0);
  this.ks = g.Aa(document, "mouseup", null, this.Cr.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.zI = function (a) {
  !this.Gc() && g.Touch.Mr(a) && (zc(this, a), this.Jr && g.kj());
};
b.nm = function (a) {
  if (this.Gc()) g.Touch.Jx(a) && g.ne.v.nm.call(this, a);
  else if (this.Jr) {
    if (g.Touch.Mr(a)) {
      this.Ee[g.Touch.Br(a)] = Ac(this, a);
      var c = Object.keys(this.Ee);
      if (this.dC && 2 === c.length) {
        c = Object.keys(this.Ee);
        c = g.g.N.Tn(this.Ee[c[0]], this.Ee[c[1]]) / this.mD;
        if (0 < this.So && Infinity > this.So) {
          var d = c - this.So;
          d = 0 < d ? d * g.ne.LG : d * g.ne.MG;
          var e = this.wc,
            f = g.g.Jo(a, v(e), Ba(e));
          e.zoom(f.x, f.y, d);
        }
        this.So = c;
        a.preventDefault();
      } else g.ne.v.nm.call(this, a);
    }
    g.kj();
  } else g.ne.v.nm.call(this, a);
};
b.Cr = function (a) {
  if (g.Touch.Mr(a) && !this.Gc()) {
    var c = g.Touch.Br(a);
    this.Ee[c] && delete this.Ee[c];
    2 > Object.keys(this.Ee).length &&
      ((this.Ee = Object.create(null)), (this.So = 0));
  }
  !this.Jr || this.Gc()
    ? g.Touch.Jx(a) && g.ne.v.Cr.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  g.ne.v.I.call(this);
  this.Uw && g.Wa(this.Uw);
};
function zc(a, c) {
  a.Ee[g.Touch.Br(c)] = Ac(a, c);
  var d = Object.keys(a.Ee);
  2 == d.length &&
    ((a.mD = g.g.N.Tn(a.Ee[d[0]], a.Ee[d[1]])),
    (a.Jr = !0),
    c.preventDefault());
}
function Ac(a, c) {
  return a.wc
    ? new g.g.N(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.gA = function (a) {
  this.$w = a;
  this.rn = Object.create(null);
};
b = g.gA.prototype;
b.mw = null;
b.I = function () {
  this.rn = this.$w = null;
};
b.load = function (a, c) {
  if (a.length) {
    try {
      var d = new g.g.global.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && d.canPlayType("audio/" + k[1])) {
        e = new g.g.global.Audio(h);
        break;
      }
    }
    e && e.play && (this.rn[c] = e);
  }
};
b.preload = function () {
  for (var a in this.rn) {
    var c = this.rn[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.oh || g.g.userAgent.Bt) break;
  }
};
b.play = function (a, c) {
  var d = this.rn[a];
  d
    ? ((a = new Date()),
      (null != this.mw && a - this.mw < g.nG) ||
        ((this.mw = a),
        (d = g.g.userAgent.oh || g.g.userAgent.Jj ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.$w && this.$w.Ni.play(a, c);
};
g.yb = function (a, c, d) {
  g.yb.v.constructor.call(this, a);
  this.Xd = a.Xd || g.yb.pI;
  this.hp = a.hp || g.yb.IK;
  this.Yq = g.ql.R(this.Jn);
  c && (this.De = c);
  d && (this.il = d);
  this.Ps = !!this.il && g.g.Ck();
  this.Ni = new g.gA(a.vc);
  this.sf = this.options.Sv ? new g.Qj(this.options.Sv, a.MB) : null;
  this.Ne = new g.mz(this);
  this.Sx = {};
  this.lB = {};
  g.$ && g.$.lk && Bc(this, g.yc, g.$.lk);
  g.aA && g.aA.lk && Bc(this, g.FG, g.aA.lk);
  g.za && g.za.lk && (Bc(this, g.pn, g.za.lk), H(this, g.za.lJ));
  this.Oc = this.options.vc
    ? this.options.vc.Oc
    : new g.Uz(this, this.options.YK || g.zh.yi);
  this.Oc.sp.push(this);
  this.Lb = g.m.R(this.options.Yo || "geras", this.Og(), this.options.Zo);
  this.Cu = null;
  this.zb = !1;
  this.Ms = [];
};
g.g.object.X(g.yb, g.Ub);
b = g.yb.prototype;
b.zs = null;
b.pa = !0;
b.$h = !0;
b.ag = !1;
b.Ao = !1;
b.xx = !0;
b.scrollX = 0;
b.scrollY = 0;
b.fB = null;
b.scale = 1;
b.GC = 1;
b.HC = 0;
b.DC = 0;
b.nd = null;
b.Ra = null;
b.na = null;
b.Ja = null;
b.wd = null;
b.De = null;
b.il = null;
b.Ps = !1;
b.Gr = !1;
b.cw = null;
b.jC = null;
b.cb = null;
b.aC = null;
b.dw = !0;
b.ji = function (a) {
  this.Ne.ji(a);
};
b.li = function (a) {
  this.Ne.li(a);
};
b.Wd = function (a) {
  return this.Ne ? this.Ne.Wd(a) : null;
};
b.Ib = function () {
  return this.Ne ? this.Ne.Ib() : null;
};
b.Og = function () {
  return this.Oc.Og();
};
b.ip = function (a) {
  a || (a = g.zh.yi);
  this.Oc.ip(a);
};
b.Hm = function () {
  this.W && this.Lb.nx(this.W, this.Og());
  Cc(
    F(this).filter(function (c) {
      return void 0 !== c.Zk;
    })
  );
  Dc(this);
  this.Ja && this.Ja.Hm();
  this.isVisible() && this.Jb(!0);
  var a = new g.h.yh(this.Og().name, this.id);
  g.h.Ha(a);
};
function Cc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.Zk;
    if (e && (d.bc(e), d.jd)) {
      var f = d.jd.s;
      if (f && F(f)) {
        var h = F(f);
        for (d = 0; d < h.length; d++) (e = h[d]), e.bc(e.Zk);
        if ((d = f.fc()))
          for (f = F(d.s), d = 0; d < f.length; d++) (e = f[d]), e.bc(e.Zk);
      }
    }
  }
}
function Ba(a) {
  if (a.dw) {
    var c = v(a).getScreenCTM();
    c && ((a.aC = c.inverse()), (a.dw = !1));
  }
  return a.aC;
}
b.Cp = function () {
  this.dw = !0;
};
b.isVisible = function () {
  return this.$h;
};
function Ja(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.Mb, c) || g.g.o.containsNode(a.mi, c)) f = a.scale;
  do {
    var h = g.g.rf(c);
    if (c == a.Mb || c == a.mi) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != v(a));
  return new g.g.N(d, e);
}
function aa(a) {
  if (!a.cw)
    for (var c = a.W; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.cw = c;
        break;
      }
      c = c.parentNode;
    }
  return a.cw;
}
b.jb = function (a) {
  this.W = g.g.o.P(g.g.G.rd, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.md = g.g.o.P(
      g.g.G.Od,
      { height: "100%", width: "100%", class: a },
      this.W
    )),
    "blocklyMainBackground" == a && this.sf
      ? (this.md.style.fill = "url(#" + this.sf.mm.id + ")")
      : this.Oc.subscribe(this.md, "workspaceBackgroundColour", "fill"));
  this.Mb = g.g.o.P(g.g.G.rd, { class: "blocklyBlockCanvas" }, this.W);
  this.mi = g.g.o.P(g.g.G.rd, { class: "blocklyBubbleCanvas" }, this.W);
  this.ag ||
    (g.Aa(this.W, "mousedown", this, this.qj, !1, !0),
    g.Aa(this.W, "wheel", this, this.GJ));
  if (this.options.qo) {
    if (!g.fu) throw Error("Missing require for Blockly.Toolbox");
    this.Ja = new (g.C.wr(g.C.aa.xq, this.options))(this);
  }
  this.sf && this.sf.update(this.scale);
  Ec(this);
  yc(this.Ne, new g.rl());
  a = this.Ne;
  var c = g.navigation.cn,
    d = new g.gn();
  a.Nk[c] && xc(a, c);
  var e = new g.m.rh(a.s, a.s.Lb.la(), d);
  d.re = e;
  a.li(d.re.jb());
  a.Nk[c] = d;
  this.Lb.jb(this.W, this.Og());
  return this.W;
};
b.I = function () {
  this.pa = !1;
  this.wd && this.wd.cancel();
  this.W && (g.g.o.removeNode(this.W), (this.W = null));
  this.mi = this.Mb = null;
  this.Ja && (this.Ja.I(), (this.Ja = null));
  this.na && (this.na.I(), (this.na = null));
  this.nd && (this.nd.I(), (this.nd = null));
  this.Ra && (this.Ra.I(), (this.Ra = null));
  this.kl && (this.kl.I(), (this.kl = null));
  this.Ni && (this.Ni.I(), (this.Ni = null));
  this.sf && (this.sf.I(), (this.sf = null));
  this.Lb.I();
  this.Ne && (this.Ne.I(), (this.Ne = null));
  g.yb.v.I.call(this);
  if (this.Oc) {
    var a = this.Oc,
      c = a.sp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.sp.splice(c, 1);
    this.Oc.unsubscribe(this.md);
    this.options.vc || (this.Oc.I(), (this.Oc = null));
  }
  this.lB = this.Sx = this.Yq = null;
  this.options.vc ||
    ((a = v(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.zs && (g.Wa(this.zs), (this.zs = null));
};
b.oj = function (a, c) {
  return new g.wb(this, a, c);
};
function Fc(a) {
  if (!g.bd) throw Error("Missing require for Blockly.Trashcan");
  a.nd = new g.bd(a);
  var c = a.nd.jb();
  a.W.insertBefore(c, a.Mb);
}
function Gc(a) {
  if (!g.NG) throw Error("Missing require for Blockly.ZoomControls");
  a.kl = new g.NG(a);
  var c = a.kl.jb();
  a.W.appendChild(c);
}
function Hc(a, c) {
  var d = new g.Kd({
    parentWorkspace: a,
    rtl: a.L,
    oneBasedIndex: a.options.ci,
    horizontalLayout: a.$d,
    renderer: a.options.Yo,
    rendererOverrides: a.options.Zo,
  });
  d.La = a.options.La;
  if (a.$d) {
    if (!g.xt) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.na = new g.xt(d);
  } else {
    if (!g.Dh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.na = new g.Dh(d);
  }
  a.na.Ul = !1;
  a.na.s.Jb(!0);
  return a.na.jb(c);
}
b.fc = function (a) {
  return this.na || a ? this.na : this.Ja ? this.Ja.fc() : null;
};
function na(a) {
  a.xx && a.pa && (a.Ra && a.Ra.resize(), a.Cp());
}
b.resize = function () {
  this.Ja && this.Ja.position();
  this.na && this.na.position();
  this.nd && this.nd.position();
  this.kl && this.kl.position();
  this.Ra && this.Ra.resize();
  this.Cp();
  Ec(this);
};
function zb(a) {
  var c = g.g.iI();
  g.g.N.qf(a.jC, c) || ((a.jC = c), a.Cp(), Ec(a));
}
function v(a) {
  if (!a.Cu)
    for (var c = a.W; c; ) {
      if ("svg" == c.tagName) {
        a.Cu = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Cu;
}
function qa(a) {
  if (g.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.GC && 1 > Math.abs(d - a.HC) && 1 > Math.abs(e - a.DC)) ||
      ((a.GC = c),
      (a.HC = d),
      (a.DC = e),
      (a = new g.h.Eh(d, e, c, a.id)),
      g.h.Ha(a));
  }
}
b.translate = function (a, c) {
  if (this.Ps && this.Gr) this.il.bl(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Mb.setAttribute("transform", d);
    this.mi.setAttribute("transform", d);
  }
  if (this.De) {
    d = this.De;
    var e = this.scale;
    d.zj = e;
    d.Hg.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.sf && this.sf.moveTo(a, c);
  qa(this);
};
function Da(a) {
  if (a.Ps) {
    a.Gr = !1;
    var c = a.il.Ov();
    a.il.Pq(a.W);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Mb.setAttribute("transform", c);
    a.mi.setAttribute("transform", c);
  }
}
function Ca(a) {
  if (a.Ps && !a.Gr) {
    a.Gr = !0;
    var c = a.Mb.previousSibling,
      d = parseInt(v(a).getAttribute("width"), 10),
      e = parseInt(v(a).getAttribute("height"), 10),
      f = g.g.rf(a.Mb),
      h = a.il,
      k = a.Mb,
      l = a.mi,
      m = a.scale;
    if (h.Ob.childNodes.length) throw Error("Already dragging a block.");
    h.lx = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.Ob.setAttribute("width", d);
    h.Ob.setAttribute("height", e);
    h.Ob.appendChild(k);
    h.Ob.appendChild(l);
    h.Ob.style.display = "block";
    a.il.bl(f.x, f.y);
  }
}
b.Pg = function () {
  var a = this.Xd();
  return a ? a.Yb / this.scale : 0;
};
b.Jb = function (a) {
  this.$h = a;
  if (this.W)
    if (
      (this.Ra && this.Ra.Yk(a),
      this.fc() && this.fc().Yk(a),
      (v(this).style.display = a ? "block" : "none"),
      this.Ja && this.Ja.Jb(a),
      a)
    ) {
      a = F(this);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Eo();
      this.Ga();
      this.Ja && this.Ja.position();
    } else g.Fc(!0);
};
b.Ga = function () {
  for (var a = F(this), c = a.length - 1; 0 <= c; c--) a[c].Ga(!1);
  if (this.wd) for (a = this.wd.km(), c = 0; c < a.length; c++) a[c].Ga(!1);
  c = this.Ne;
  c.s.zb && c.Lh && c.s.Ib().draw();
};
b.ps = function (a) {
  if (
    this.pa &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= gb(this))
  )
    if ((this.wd && this.wd.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.h.disable();
      try {
        var c = g.Ql.ao(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.L && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.h.enable();
      }
      g.h.isEnabled() && g.hA.cO(c);
      c.select();
    } else
      a: {
        g.h.disable();
        try {
          var f = g.V.hk(a, this),
            h = this.Wd(g.navigation.cn).lb;
          if (this.zb && h && h.sm) {
            g.navigation.ZB(f, h.Fa);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.L && (k = -k);
            do {
              a = !1;
              var m = F(this);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var p = n.Za();
                if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var t = f.Zf(!1);
                c = 0;
                for (var y; (y = t[c]); c++)
                  if (y.closest(g.Pd, new g.g.N(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.L ? k - g.Pd : k + g.Pd), (l += 2 * g.Pd));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.h.enable();
        }
        g.h.isEnabled() && !f.Pa && g.h.Ha(new g.h.Pp(f));
        f.select();
      }
};
function Dc(a) {
  (a = a.ag ? a.cb : a) &&
    !a.wd &&
    a.Ja &&
    a.Ja.fc() &&
    ((a = a.Ja), a.tb && a.tb.Ug() && a.tb.Vi.length && a.na.show(a.tb.Vi));
}
b.xj = function (a, c) {
  g.yb.v.xj.call(this, a, c);
  Dc(this);
};
b.Ph = function (a) {
  g.yb.v.Ph.call(this, a);
  Dc(this);
};
b.lf = function (a, c, d) {
  a = g.yb.v.lf.call(this, a, c, d);
  Dc(this);
  return a;
};
function Ec(a) {
  a.WA = a.nd && a.W.parentNode ? a.nd.im() : null;
  a.VA = a.na
    ? a.na.im()
    : a.Ja && "function" == typeof a.Ja.im
    ? a.Ja.im()
    : null;
}
function Ua(a, c) {
  return a.WA && a.WA.contains(c.clientX, c.clientY)
    ? g.ot
    : a.VA && a.VA.contains(c.clientX, c.clientY)
    ? g.Fy
    : g.Ey;
}
b.qj = function (a) {
  var c = this.Wi(a);
  c && Cb(c, a, this);
};
b.Mx = function (a, c) {
  a = g.g.Jo(a, v(this), Ba(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.fB = g.g.N.Sn(c, a);
};
b.Gc = function () {
  return null != this.wd && this.wd.Gc();
};
function Ic(a) {
  return (
    (a.options.Uc && a.options.Uc.scrollbars) ||
    (a.options.Uc && a.options.Uc.Ij) ||
    (a.options.Uc && a.options.Uc.Ui) ||
    (a.options.Bb && a.options.Bb.controls) ||
    (a.options.Bb && a.options.Bb.Ij) ||
    (a.options.Bb && a.options.Bb.gx)
  );
}
b.Sc = function () {
  return (
    (this.options.Uc && this.options.Uc.scrollbars) ||
    (this.options.Uc && this.options.Uc.Ij) ||
    (this.options.Uc && this.options.Uc.Ui) ||
    (this.options.Bb && this.options.Bb.Ij) ||
    (this.options.Bb && this.options.Bb.gx)
  );
};
b.GJ = function (a) {
  if (g.og.yk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.Bb && this.options.Bb.Ij,
      d = this.options.Uc && this.options.Uc.Ij;
    if (c || d) {
      var e = g.g.DB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Jo(a, v(this), Ba(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function ka(a) {
  a = [].concat(a.Ms);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = rc(a[0]), d = 1; d < a.length; d++) {
    var e = rc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.jp = function (a) {
  if (!this.options.readOnly && !this.ag) {
    var c = ec(g.Ta.Qd.Rc, { u: this });
    this.lH && this.lH(c, a);
    g.Ya.show(a, c, this.L);
  }
};
function da(a) {
  if (a.options.vc) da(a.options.vc);
  else {
    g.Co = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      v(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        v(a).parentNode.setActive();
      } catch (d) {
        v(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.Bb.BK, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.Bb.Fo
      ? (d = this.options.Bb.Fo / this.scale)
      : e < this.options.Bb.Ho && (d = this.options.Bb.Ho / this.scale);
    var f = this.Mb.getCTM(),
      h = v(this).createSVGPoint();
    h.x = a;
    h.y = c;
    h = h.matrixTransform(f.inverse());
    a = h.x;
    c = h.y;
    f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
    this.scrollX = f.e;
    this.scrollY = f.f;
    this.setScale(e);
  }
};
b.setScale = function (a) {
  this.options.Bb.Fo && a > this.options.Bb.Fo
    ? (a = this.options.Bb.Fo)
    : this.options.Bb.Ho && a < this.options.Bb.Ho && (a = this.options.Bb.Ho);
  this.scale = a;
  g.Fc(!1);
  this.na && (this.na.mx(), Ec(this));
  this.sf && this.sf.update(this.scale);
  a = this.Xd();
  this.scrollX -= a.cd;
  this.scrollY -= a.td;
  a.Xb += a.cd;
  a.dc += a.td;
  this.scroll(this.scrollX, this.scrollY);
  this.Ra &&
    (this.na
      ? (ua(this.Ra.tf, a), wa(this.Ra.Hf, a))
      : (ya(this.Ra.tf, a), Aa(this.Ra.Hf, a)));
};
function Jc(a) {
  return a.options.vc ? Jc(a.options.vc) : a.scale;
}
b.scroll = function (a, c) {
  g.Fc(!0);
  var d = this.Xd(),
    e = d.Uf + d.vd - d.Yb,
    f = d.pe + d.ed - d.jc;
  a = Math.min(a, -d.vd);
  c = Math.min(c, -d.ed);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Ra &&
    (ra(this.Ra.tf, -(a + d.vd) * this.Ra.tf.ratio),
    ra(this.Ra.Hf, -(c + d.ed) * this.Ra.Hf.ratio));
  a += d.cd;
  c += d.td;
  this.translate(a, c);
};
g.yb.wB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Pg()), (d = a.Lc));
  return new g.g.ef(c, d);
};
g.yb.gI = function (a, c) {
  return Ic(a) ? g.yb.fI(a, c) : g.yb.tB(a);
};
g.yb.tB = function (a) {
  var c = ka(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.yb.fI = function (a, c) {
  a = g.yb.tB(a);
  var d = c.width;
  c = c.height;
  var e = d / 2,
    f = c / 2,
    h = Math.min(a.left - e, a.right - d),
    k = Math.min(a.top - f, a.bottom - c);
  return {
    left: h,
    top: k,
    height: Math.max(a.bottom + f, a.top + c) - k,
    width: Math.max(a.right + e, a.left + d) - h,
  };
};
g.yb.pI = function () {
  var a = g.yb.wB(this.Ja),
    c = g.yb.wB(this.na),
    d = g.VK(v(this)),
    e = { height: d.height, width: d.width };
  if (this.Ja)
    if (this.La == g.$j || this.La == g.yq) e.height -= a.height;
    else {
      if (this.La == g.ff || this.La == g.Nl) e.width -= a.width;
    }
  else if (this.na)
    if (this.La == g.$j || this.La == g.yq) e.height -= c.height;
    else if (this.La == g.ff || this.La == g.Nl) e.width -= c.width;
  var f = g.yb.gI(this, e),
    h = 0;
  this.Ja && this.La == g.ff
    ? (h = a.width)
    : this.na && this.La == g.ff && (h = c.width);
  var k = 0;
  this.Ja && this.La == g.$j
    ? (k = a.height)
    : this.na && this.La == g.$j && (k = c.height);
  return {
    pe: f.height,
    Uf: f.width,
    ed: f.top,
    vd: f.left,
    jc: e.height,
    Yb: e.width,
    dc: -this.scrollY,
    Xb: -this.scrollX,
    td: k,
    cd: h,
    GO: d.height,
    HO: d.width,
    xD: a.width,
    IO: a.height,
    La: this.La,
    eO: c.width,
    dO: c.height,
  };
};
g.yb.IK = function (a) {
  var c = this.Xd();
  "number" == typeof a.x && (this.scrollX = -c.Uf * a.x - c.vd);
  "number" == typeof a.y && (this.scrollY = -c.pe * a.y - c.ed);
  this.translate(this.scrollX + c.cd, this.scrollY + c.td);
};
b = g.yb.prototype;
b.Vd = function (a) {
  return g.yb.v.Vd.call(this, a);
};
b.hc = function (a) {
  return g.yb.v.hc.call(this, a);
};
b.Eq = function (a) {
  this.Ms.push(a);
  g.yb.v.Eq.call(this, a);
};
b.vs = function (a) {
  g.g.Fq(this.Ms, a);
  g.yb.v.vs.call(this, a);
};
b.Xc = function (a) {
  var c = !this.xx && a;
  this.xx = a;
  c && na(this);
};
b.clear = function () {
  this.Xc(!1);
  g.yb.v.clear.call(this);
  this.Ms = [];
  this.Xc(!0);
};
function Kc(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.lB.CREATE_VARIABLE = c;
}
function Bc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.Sx[c] = d;
}
b.Wi = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.wd;
  return d
    ? c && d.rk
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.wd = new g.ne(a, this))
    : null;
};
function dc(a) {
  a.wd && a.wd.cancel();
}
g.Ak = function (a, c) {
  g.cH();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Kd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.va.ld(d, g.g.va.State.vF, g.i.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.He(d, c);
  var e = new g.ty(d),
    f = new g.iA(d),
    h = g.sH(a, c, e, f);
  g.II(h);
  g.Co = h;
  g.Pm(h);
  d.addEventListener("focusin", function () {
    g.Co = h;
  });
  return h;
};
g.He = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.pd.Ak(c.AI, c.Oo);
  a = g.g.o.P(
    g.g.G.Ji,
    {
      xmlns: g.g.o.sn,
      "xmlns:html": g.g.o.Rj,
      "xmlns:xlink": g.g.o.Mi,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.P(g.g.G.Dy, {}, a);
  c.Sv = g.Qj.jb(String(Math.random()).substring(2), c.MB, d);
  return a;
};
g.sH = function (a, c, d, e) {
  c.vc = null;
  var f = new g.yb(c, d, e);
  c = f.options;
  f.scale = c.Bb.SK;
  a.appendChild(f.jb("blocklyMainBackground"));
  g.g.o.Ka(aa(f), f.Lb.Yf());
  g.g.o.Ka(aa(f), f.Og().Yf());
  !c.qo && c.Vg && ((d = Hc(f, g.g.G.Ji)), g.g.o.Bk(d, a));
  c.QB && Fc(f);
  c.Bb && c.Bb.controls && Gc(f);
  f.Oc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Sc() ||
    H(f, function (h) {
      if (!f.Gc() && !f.Sc() && -1 != g.h.$D.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.Xd(),
          m = f.scale;
        k.L = f.L;
        k.Xb = l.Xb / m;
        k.dc = l.dc / m;
        k.HD = (l.Xb + l.Yb) / m;
        k.GD = (l.dc + l.jc) / m;
        Ic(f)
          ? ((l = ka(f)),
            (k.vd = l.left),
            (k.ed = l.top),
            (k.MA = l.right),
            (k.KA = l.bottom))
          : ((k.vd = l.vd / m),
            (k.ed = l.ed / m),
            (k.MA = (l.vd + l.Uf) / m),
            (k.KA = (l.ed + l.pe) / m));
        if (k.ed < k.dc || k.KA > k.GD || k.vd < k.Xb || k.MA > k.HD) {
          l = null;
          h && ((l = g.h.uc()), g.h.ea(h.group));
          switch (h.type) {
            case g.h.Kp:
            case g.h.$s:
              var n = f.Vd(h.qb);
              n && (n = n.Zd());
              break;
            case g.h.Tp:
            case g.h.Up:
              n = f.Wq[h.Ag] || null;
          }
          if (n) {
            m = rc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var p = k.dc,
              t = k.GD - m.height;
            t = Math.max(p, t);
            p = g.g.Qa.yg(p, m.top, t) - m.top;
            t = k.Xb;
            var y = k.HD - m.width;
            k.L ? (t = Math.min(y, t)) : (y = Math.max(t, y));
            n.moveBy(g.g.Qa.yg(t, m.left, y) - m.left, p);
          }
          h &&
            (!h.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.h.ea(l));
        }
      }
    });
  g.Pm(f);
  g.ca.jb();
  g.H.jb();
  g.K.jb();
  return f;
};
g.II = function (a) {
  var c = a.options,
    d = v(a);
  g.Aa(d.parentNode, "contextmenu", null, function (f) {
    g.g.Kr(f) || f.preventDefault();
  });
  d = g.Aa(window, "resize", null, function () {
    g.Fc(!0);
    g.Pm(a);
  });
  a.zs = d;
  g.Ak.WG();
  if (c.Vg) {
    d = a.Ja;
    var e = a.fc(!0);
    d
      ? d.R()
      : e && (e.R(a), e.show(c.Vg), "function" == typeof e.Ax && e.Ax());
  }
  d = g.fb.kd;
  c.QB && (d = a.nd.R(d));
  c.Bb && c.Bb.controls && a.kl.R(d);
  c.Uc && c.Uc.scrollbars
    ? ((a.Ra = new g.tn(a)), a.Ra.resize())
    : a.hp({ x: 0.5, y: 0.5 });
  c.DI && g.Ak.WI(c.Oo, a);
};
g.Ak.WG = function () {
  g.KH ||
    (g.Aa(document, "scroll", null, function () {
      for (var a = g.Ub.getAll(), c = 0, d; (d = a[c]); c++) d.Cp && d.Cp();
    }),
    g.Aa(document, "keydown", null, g.Lo),
    g.Rd(document, "touchend", null, g.kj),
    g.Rd(document, "touchcancel", null, g.kj),
    g.g.userAgent.oh &&
      g.Aa(window, "orientationchange", document, function () {
        g.Pm(g.Lg());
      }));
  g.KH = !0;
};
g.Ak.WI = function (a, c) {
  function d() {
    for (; f.length; ) g.Wa(f.pop());
    e.preload();
  }
  var e = c.Ni;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.Aa(document, "mousemove", null, d, !0));
  f.push(g.Aa(document, "touchstart", null, d, !0));
};
g.Jd = function (a, c) {
  this.FD = c || "";
  this.dD = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.dD[a[c]] = !0;
  this.reset();
};
g.Jd.qt = "DEVELOPER_VARIABLE";
g.Jd.prototype.reset = function () {
  this.Fg = Object.create(null);
  this.TA = Object.create(null);
  this.Sa = null;
};
g.Jd.prototype.Gx = function (a) {
  this.Sa = a;
};
g.Jd.prototype.Yd = function (a, c) {
  if (c == g.yc) {
    var d = a;
    this.Sa
      ? (d = (d = this.Sa.$f(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.yc || c == g.Jd.qt ? this.FD : "";
  if (d in this.Fg) return e + this.Fg[d];
  a = Q(this, a, c);
  this.Fg[d] = a.substr(e.length);
  return a;
};
function Q(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.i.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.TA[c + e] || c + e in a.dD; ) e = e ? e + 1 : 2;
  c += e;
  a.TA[c] = !0;
  return (d == g.yc || d == g.Jd.qt ? a.FD : "") + c;
}
g.Jd.qf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.za = {};
g.za.pq = g.pn;
g.za.Cy = "x";
g.za.SG = function (a) {
  var c = fb(a, "procedures_defnoreturn").map(function (d) {
    return d.Xi();
  });
  a = fb(a, "procedures_defreturn").map(function (d) {
    return d.Xi();
  });
  c.sort(g.za.ZC);
  a.sort(g.za.ZC);
  return [c, a];
};
g.za.ZC = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.za.pr = function (a, c) {
  if (c.Qb) return a;
  for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.za.OI(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.za.OI = function (a, c, d) {
  return !g.za.RI(a, c, d);
};
g.za.RI = function (a, c, d) {
  c = F(c);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Xi) {
      var f = c[e].Xi();
      if (g.Jd.qf(f[0], a)) return !0;
    }
  return !1;
};
g.za.ws = function (a) {
  a = a.trim();
  var c = g.za.pr(a, this.Y()),
    d = this.getValue();
  if (d != a && d != c) {
    a = F(this.Y().u);
    for (var e = 0; e < a.length; e++) a[e].Im && a[e].Im(d, c);
  }
  return c;
};
g.za.lk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        p = g.g.xml.createElement("block");
      p.setAttribute("type", k);
      p.setAttribute("gap", 16);
      var t = g.g.xml.createElement("mutation");
      t.setAttribute("name", m);
      p.appendChild(t);
      for (m = 0; m < n.length; m++) {
        var y = g.g.xml.createElement("arg");
        y.setAttribute("name", n[m]);
        t.appendChild(y);
      }
      d.push(p);
    }
  }
  var d = [];
  if (g.M.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.M.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.M.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.za.SG(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.za.BD = function (a) {
  for (
    var c = [], d = fb(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(D(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.$.qB(g.za.Cy, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.ya.Mu(d))) {
    if (!a.options.Vg)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.ya.qo(c)) {
      if (!a.Ja)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Vg = c;
      a.Ja.Ga(c);
    } else {
      if (!a.na)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Vg = c;
      a.na.show(c);
    }
  } else if (a.options.Vg) throw Error("Can't nullify an existing toolbox.");
};
g.za.lJ = function (a) {
  if (a.type == g.h.Mp && "mutator" === a.zu && a.xm) {
    a = g.Ub.ho(a.Pc).Vd(a.qb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.jd.s), g.za.BD(a), H(a, g.za.kJ);
  }
};
g.za.kJ = function (a) {
  (a.type != g.h.Kp && a.type != g.h.Zs && a.type != g.h.VD) ||
    g.za.BD(g.Ub.ho(a.Pc));
};
g.za.bI = function (a, c) {
  var d = [];
  c = F(c);
  for (var e = 0; e < c.length; e++)
    if (c[e].Ke) {
      var f = c[e].Ke();
      f && g.Jd.qf(f, a) && d.push(c[e]);
    }
  return d;
};
g.za.Ko = function (a) {
  var c = g.h.ab,
    d = a.Xi()[0],
    e = a.sb(!0);
  a = g.za.bI(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.sb();
    h = h && g.V.qe(h);
    f.Wb(e);
    var k = f.sb();
    k = k && g.V.qe(k);
    h != k &&
      ((g.h.ab = !1),
      g.h.Ha(new g.h.ih(f, "mutation", null, h, k)),
      (g.h.ab = c));
  }
};
g.za.jo = function (a, c) {
  c = c.hc(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Xi) {
      var e = c[d].Xi();
      if (e && g.Jd.qf(e[0], a)) return c[d];
    }
  return null;
};
g.Zb = {};
g.Zb.names = {
  EE: "escape",
  Oj: "delete",
  jE: "copy",
  qE: "cut",
  cG: "paste",
  CG: "undo",
  hG: "redo",
};
g.Zb.dK = function () {
  var a = {
    name: g.Zb.names.EE,
    $a: function (c) {
      return !c.options.readOnly;
    },
    Ba: function () {
      g.Fc();
      return !0;
    },
  };
  g.ib.C.register(a);
  J(g.g.S.st, a.name);
};
g.Zb.ox = function () {
  var a = {
    name: g.Zb.names.Oj,
    $a: function (c) {
      return !c.options.readOnly && g.selected && g.selected.ue();
    },
    Ba: function (c, d) {
      d.preventDefault();
      if (g.og.yk()) return !1;
      g.XA();
      return !0;
    },
  };
  g.ib.C.register(a);
  J(g.g.S.Oj, a.name);
  J(g.g.S.TD, a.name);
};
g.Zb.WJ = function () {
  var a = {
    name: g.Zb.names.jE,
    $a: function (d) {
      return (
        !d.options.readOnly &&
        !g.og.yk() &&
        g.selected &&
        g.selected.ue() &&
        g.selected.Sc()
      );
    },
    Ba: function () {
      g.Fc();
      g.Nu(g.selected);
      return !0;
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.dt, [g.g.S.wi]);
  J(c, a.name);
  c = K(g.g.S.dt, [g.g.S.ml]);
  J(c, a.name);
  c = K(g.g.S.dt, [g.g.S.Al]);
  J(c, a.name);
};
g.Zb.XJ = function () {
  var a = {
    name: g.Zb.names.qE,
    $a: function (d) {
      return (
        !d.options.readOnly &&
        !g.og.yk() &&
        g.selected &&
        g.selected.ue() &&
        g.selected.Sc() &&
        !g.selected.u.ag
      );
    },
    Ba: function () {
      g.Nu(g.selected);
      g.XA();
      return !0;
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.Bq, [g.g.S.wi]);
  J(c, a.name);
  c = K(g.g.S.Bq, [g.g.S.ml]);
  J(c, a.name);
  c = K(g.g.S.Bq, [g.g.S.Al]);
  J(c, a.name);
};
g.Zb.oK = function () {
  var a = {
    name: g.Zb.names.cG,
    $a: function (d) {
      return !d.options.readOnly && !g.og.yk();
    },
    Ba: function () {
      return g.ps();
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.ku, [g.g.S.wi]);
  J(c, a.name);
  c = K(g.g.S.ku, [g.g.S.ml]);
  J(c, a.name);
  c = K(g.g.S.ku, [g.g.S.Al]);
  J(c, a.name);
};
g.Zb.sx = function () {
  var a = {
    name: g.Zb.names.CG,
    $a: function (d) {
      return !d.options.readOnly && !g.og.yk();
    },
    Ba: function (d) {
      g.Fc();
      jb(d, !1);
      return !0;
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.Rl, [g.g.S.wi]);
  J(c, a.name);
  c = K(g.g.S.Rl, [g.g.S.ml]);
  J(c, a.name);
  c = K(g.g.S.Rl, [g.g.S.Al]);
  J(c, a.name);
};
g.Zb.qx = function () {
  var a = {
    name: g.Zb.names.hG,
    $a: function (d) {
      return !g.og.yk() && !d.options.readOnly;
    },
    Ba: function (d) {
      g.Fc();
      jb(d, !0);
      return !0;
    },
  };
  g.ib.C.register(a);
  var c = K(g.g.S.Rl, [g.g.S.xh, g.g.S.wi]);
  J(c, a.name);
  c = K(g.g.S.Rl, [g.g.S.xh, g.g.S.ml]);
  J(c, a.name);
  c = K(g.g.S.Rl, [g.g.S.xh, g.g.S.Al]);
  J(c, a.name);
  c = K(g.g.S.KG, [g.g.S.wi]);
  J(c, a.name);
};
g.Zb.ZJ = function () {
  g.Zb.dK();
  g.Zb.ox();
  g.Zb.WJ();
  g.Zb.XJ();
  g.Zb.oK();
  g.Zb.sx();
  g.Zb.qx();
};
g.ib = function () {
  g.ib.C = this;
  this.Qe = Object.create(null);
  this.zm = Object.create(null);
  g.Zb.ZJ();
  g.navigation.lK();
};
g.ib.Tr = { KN: g.g.S.xh, IL: g.g.S.wi, xL: g.g.S.ml, CM: g.g.S.Al };
g.ib.prototype.register = function (a, c) {
  if (this.Qe[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.Qe[a.name] = a;
};
g.ib.prototype.unregister = function (a) {
  if (!this.Qe[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.zm) {
    var d = c,
      e = this.zm[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.zm[d]);
  }
  delete this.Qe[a];
  return !0;
};
function J(a, c, d) {
  var e = g.ib.C,
    f = e.zm[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.zm[a] = [c]);
}
g.ib.prototype.Lo = function (a, c) {
  var d = "";
  for (e in g.ib.Tr) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.zm[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.Qe[f]), (!f.$a || f.$a(a)) && f.Ba && f.Ba(a, c, f)))
      return !0;
  return !1;
};
function K(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.ib.Tr), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.ib.Tr)
      -1 < c.indexOf(g.ib.Tr[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.ib();
g.vn = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.Yv = e || g.g.Rh();
  g.h.Ha(new g.h.gf(this));
};
g.vn.prototype.Na = function () {
  return this.Yv;
};
g.vn.DA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.$ = {};
g.$.pq = g.yc;
g.$.oA = function (a) {
  var c = F(a);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Th();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.Na();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.$.jy = {};
g.$.PG = function (a) {
  a = F(a);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.fO;
    !f &&
      e.hI &&
      ((f = e.hI),
      g.$.jy[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.$.jy[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.$.lk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  Kc(a, function (e) {
    g.$.RA(e.hO());
  });
  c.push(d);
  a = g.$.WH(a);
  return (c = c.concat(a));
};
g.$.WH = function (a) {
  a = a.oo("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.M.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.M.math_change ? 8 : 24);
      e.appendChild(g.$.co(d));
      c.push(e);
    }
    g.M.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.M.variables_get ? 20 : 8),
      e.appendChild(g.$.co(d)),
      (d = g.V.Ff(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.M.variables_get) {
      a.sort(g.vn.DA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.$.co(f)),
          c.push(e);
    }
  }
  return c;
};
g.$.Yz = "ijkmnopqrstuvwxyzabcdefgh";
g.$.YH = function (a) {
  return g.$.qB(g.$.Yz.charAt(0), a.Cv());
};
g.$.qB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.$.Yz, e = "", f = d.indexOf(a); ; ) {
    for (var h = !1, k = 0; k < c.length; k++)
      if (c[k].toLowerCase() == a) {
        h = !0;
        break;
      }
    if (!h) return a;
    f++;
    f == d.length && ((f = 0), (e = Number(e) + 1));
    a = d.charAt(f) + e;
  }
};
g.$.RA = function (a, c, d) {
  function e(h) {
    g.$.$C(g.i.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.$.nJ(k, a);
        if (l) {
          if (l.type == f)
            var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.lf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.$.lf = g.$.RA;
g.$.ys = function (a, c) {
  function d(e) {
    var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.$.$C(f, e, function (h) {
      if (h) {
        var k = g.$.oJ(h, c.type, a);
        k
          ? ((k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.xj(c.Na(), h);
      }
    });
  }
  d("");
};
g.$.$C = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.$.oJ = function (a, c, d) {
  d = d.Sa.mk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.$.nJ = function (a, c) {
  c = c.Sa.mk();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.$.co = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.Na());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.$.Ar = function (a, c, d, e) {
  var f = g.$.gd(a, c, d, e);
  f || (f = g.$.tH(a, c, d, e));
  return f;
};
g.$.gd = function (a, c, d, e) {
  var f = a.tj,
    h = null;
  if (c && ((h = a.$f(c)), !h && f && (h = f.$f(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.gd(d, e);
    !h && f && (h = f.gd(d, e));
  }
  return h;
};
g.$.tH = function (a, c, d, e) {
  var f = a.tj;
  d || (d = g.$.YH(a.ag ? a.cb : a));
  return f ? f.lf(d, e, c) : a.lf(d, e, c);
};
g.$.rB = function (a, c) {
  a = a.mk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.ca = {};
g.ca.zf = null;
g.ca.ir = null;
g.ca.cg = "";
g.ca.fg = "";
g.ca.jb = function () {
  g.ca.ob ||
    ((g.ca.ob = document.createElement("div")),
    (g.ca.ob.className = "blocklyWidgetDiv"),
    (g.ns || document.body).appendChild(g.ca.ob));
};
g.ca.show = function (a, c, d) {
  g.ca.Ia();
  g.ca.zf = a;
  g.ca.ir = d;
  a = g.ca.ob;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Lg();
  g.ca.cg = c.Lb.Yf();
  g.ca.fg = c.Og().Yf();
  g.g.o.Ka(a, g.ca.cg);
  g.g.o.Ka(a, g.ca.fg);
};
g.ca.Ia = function () {
  if (g.ca.isVisible()) {
    g.ca.zf = null;
    var a = g.ca.ob;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.ca.ir && g.ca.ir();
    g.ca.ir = null;
    a.textContent = "";
    g.ca.cg && (g.g.o.Nc(a, g.ca.cg), (g.ca.cg = ""));
    g.ca.fg && (g.g.o.Nc(a, g.ca.fg), (g.ca.fg = ""));
    da(g.Lg());
  }
};
g.ca.isVisible = function () {
  return !!g.ca.zf;
};
g.ca.pm = function (a) {
  g.ca.zf == a && g.ca.Ia();
};
g.ca.Ro = function (a, c, d) {
  g.ca.ob.style.left = a + "px";
  g.ca.ob.style.top = c + "px";
  g.ca.ob.style.height = d + "px";
};
g.ca.MJ = function (a, c, d, e) {
  var f = g.ca.bH(a, c, d);
  a = g.ca.aH(a, c, d, e);
  0 > f ? g.ca.Ro(a, 0, d.height + f) : g.ca.Ro(a, f, d.height);
};
g.ca.aH = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.ca.bH = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.VERSION = "uncompiled";
g.Co = null;
g.selected = null;
g.hm = [];
g.Yl = null;
g.Tq = null;
g.Iu = null;
g.XN = null;
g.ns = null;
g.VK = function (a) {
  return new g.g.ef(a.tA, a.sA);
};
g.xO = function (a) {
  na(a);
};
g.Pm = function (a) {
  for (; a.options.vc; ) a = a.options.vc;
  var c = v(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.tA != e && (c.setAttribute("width", e + "px"), (c.tA = e));
    c.sA != d && (c.setAttribute("height", d + "px"), (c.sA = d));
    a.resize();
  }
};
g.Lo = function (a) {
  var c = g.Co;
  !c || g.g.Kr(a) || (c.pa && !c.isVisible()) || g.ib.C.Lo(c, a);
};
g.XA = function () {
  var a = g.selected;
  a.u.ag || (g.h.ea(!0), g.Fc(), a.I(!0, !0), g.h.ea(!1));
};
g.Nu = function (a) {
  if (a.vm) a = null;
  else {
    var c = g.V.Fh(a, !0);
    g.V.BH(c);
    var d = a.Za();
    c.setAttribute("x", a.L ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, dL: g.g.Dv(a, !0) };
  }
  a && ((g.Yl = a.xml), (g.Tq = a.source), (g.Iu = a.dL));
};
g.ps = function () {
  if (!g.Yl) return !1;
  var a = g.Tq;
  a.ag && (a = a.cb);
  return g.Iu && hb(a, g.Iu) ? (g.h.ea(!0), a.ps(g.Yl), g.h.ea(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.Yl,
    d = g.Tq;
  g.Nu(a);
  a.u.ps(g.Yl);
  g.Yl = c;
  g.Tq = d;
};
g.tO = function (a) {
  g.g.Kr(a) || a.preventDefault();
};
g.Fc = function (a) {
  g.K.Ia();
  g.ca.Ia();
  g.H.tk();
  if (!a) {
    a = g.Lg();
    if (a.nd && a.nd.Jg) {
      var c = a.nd;
      c.Jg.isVisible() && (c.Jg.Ia(), Lc(c, !1));
    }
    (a = a.Ja) && a.fc() && a.fc().Ul && ub(a, null);
  }
};
g.Lg = function () {
  return g.Co;
};
g.alert = function (a, c) {
  alert(a);
  c && c();
};
g.confirm = function (a, c) {
  c(confirm(a));
};
g.prompt = function (a, c, d) {
  d(prompt(a, c));
};
g.UI = function (a) {
  return function () {
    O(this, a);
  };
};
g.fm = function (a) {
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (d) {
      var e = d.type;
      null == e || "" === e
        ? console.warn(
            "Block definition #" +
              c +
              " in JSON array is missing a type attribute. Skipping."
          )
        : (g.M[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.M[e] = { R: g.UI(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.Aa = function (a, c, d, e, f, h) {
  function k(y) {
    var G = !f;
    y = g.Touch.NK(y);
    for (var oa = 0, va; (va = y[oa]); oa++)
      if (!G || g.Touch.Jx(va))
        g.Touch.FK(va), d ? e.call(d, va) : e(va), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.sg)
    for (var n = 0, p; (p = g.Touch.sg[c][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.sg)) {
    var t = function (y) {
      k(y);
      var G = !h;
      l && G && y.preventDefault();
    };
    for (n = 0; (p = g.Touch.sg[c][n]); n++)
      a.addEventListener(p, t, !1), m.push([a, p, t]);
  }
  return m;
};
g.Rd = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.sg)
    for (var k = 0, l; (l = g.Touch.sg[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.sg)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0];
        n.clientX = p.clientX;
        n.clientY = p.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.sg[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Wa = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.hj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.GI = function (a) {
  return g.g.Fb.WB(a);
};
g.cH = function () {
  g.ud("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.ud("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.ud("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.ud("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.ud("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.ud("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.ud("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.ud("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.ud("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.ud("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.ud("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.ud("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.ud("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.ud("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.ud("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.ud("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.ud = function (a, c, d) {
  for (var e = "Blockly", f = g, h = 0; h < c.length; ++h)
    (e += "." + c[h]), f && (f = f[c[h]]);
  f &&
    f !== d &&
    ((a = (void 0 === d
      ? '%1 has been removed. Use Blockly.Msg["%2"].'
      : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace("%1", e)
      .replace("%2", a)),
    console.warn(a));
};
g.BO = function (a) {
  g.ns = a;
};
g.g.D = {};
g.g.D.Va = function (a, c) {
  return " " + a + "," + c + " ";
};
g.g.D.curve = function (a, c) {
  return " " + a + c.join("");
};
g.g.D.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
g.g.D.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
g.g.D.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
g.g.D.line = function (a) {
  return " l" + a.join("");
};
g.g.D.oa = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.D.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.m.mh = function () {
  this.pg = 0;
  this.mG = 3;
  this.df = 5;
  this.jz = 8;
  this.Hd = 10;
  this.Oz = this.df;
  this.un = 15;
  this.Ml = 5;
  this.wq = 8;
  this.VF = 15;
  this.Jt = 4;
  this.PF = 12;
  this.zE = 16;
  this.yE = this.Hy = this.un;
  this.Nb = 8;
  this.sG = this.hn = 15;
  this.Lz = 0;
  this.Nz = 20;
  this.UD = 4;
  this.yG = this.df;
  this.zG = this.Hd;
  this.YD = this.df;
  this.XD = this.Hd;
  this.Ip = !1;
  this.pG = 15;
  this.qG = 100;
  this.oG = 15;
  this.dn = 24;
  this.BE = 14.5;
  this.AE = this.un + 11;
  this.HE = 2;
  this.CE = this.dn;
  this.Kz = g.g.D.moveBy(0, 0);
  this.rF = 12;
  this.sF = 6;
  this.Ai = 11;
  this.Bi = "normal";
  this.zi = "sans-serif";
  this.Ny = this.fq = -1;
  this.eq = 4;
  this.Ly = 16;
  this.ul = 5;
  this.Ky = "#fff";
  this.vt = !g.g.userAgent.af && !g.g.userAgent.Pj;
  this.My = this.Ly;
  this.QE = this.PE = this.ut = !1;
  this.SE = this.ul;
  this.Ym = 12;
  this.RE =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.TE = !1;
  this.OE = this.ul - 3;
  this.Uo = String(Math.random()).substring(2);
  this.kr = "";
  this.vv = null;
  this.bB = "";
  this.Pn = this.Tu = this.bv = null;
  this.Xp = "#cc0a0a";
  this.oq = "#4286f4";
  this.Zp = 100;
  this.eA = 5;
  this.Yp = 10;
  this.lE = 2;
  this.nE = 4;
  this.Sy = !1;
  this.At = "#000000";
  this.lq = 0.2;
  this.Iz = { fG: 1, Cl: 2 };
};
b = g.m.mh.prototype;
b.R = function () {
  this.yl = this.ww();
  this.Cl = this.xw();
  this.Il = this.zw();
  this.Rt = this.yw();
  var a = this.Nb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Va(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Va(a, a));
  this.mq = { width: a, height: a, bx: c, qs: d };
  a = this.Nb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Va(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(-a, a));
  this.nn = { Tx: c, aL: d, YG: f, xu: e, AK: a };
};
b.ip = function (a) {
  this.Pi = {};
  var c = a.Pi,
    d;
  for (d in c) this.Pi[d] = Mc(c[d]);
  this.zi =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.zi;
  this.Bi =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.Bi;
  this.Ai =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.Ai;
  c = g.g.o.aJ(this.Ai + "pt", this.Bi, this.zi);
  this.fq = c.height;
  this.Ny = c.Rf;
  this.Xp = fa(a, "cursorColour") || this.Xp;
  this.oq = fa(a, "markerColour") || this.oq;
  this.At = fa(a, "insertionMarkerColour") || this.At;
  this.lq = Number(fa(a, "insertionMarkerOpacity")) || this.lq;
  this.Ip = null != a.Nx ? a.Nx : this.Ip;
};
function vc(a, c) {
  var d = "auto_" + c;
  a.Pi[d] || (a.Pi[d] = Mc({ colourPrimary: c }));
  return { style: a.Pi[d], name: d };
}
function pc(a, c) {
  return (
    a.Pi[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? vc(a, c.substring(5)).style
      : Mc({ colourPrimary: "#000000" }))
  );
}
function Mc(a) {
  var c = {};
  a && g.g.object.Oe(c, a);
  a = g.g.os(c.colourPrimary || "#000");
  c.Ih = a.so;
  c.colourSecondary
    ? (a = g.g.os(c.colourSecondary).so)
    : ((a = c.Ih), (a = g.g.Fb.uu("#fff", a, 0.6) || a));
  c.Vq = a;
  c.colourTertiary
    ? (a = g.g.os(c.colourTertiary).so)
    : ((a = c.Ih), (a = g.g.Fb.uu("#fff", a, 0.3) || a));
  c.zg = a;
  c.Qg = c.hat || "";
  return c;
}
b.I = function () {
  this.vv && g.g.o.removeNode(this.vv);
  this.bv && g.g.o.removeNode(this.bv);
  this.Tu && g.g.o.removeNode(this.Tu);
  this.Pn = null;
};
b.ww = function () {
  var a = this.rF,
    c = this.sF,
    d = g.g.D.line([
      g.g.D.Va(c, a / 4),
      g.g.D.Va(2 * -c, a / 2),
      g.g.D.Va(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.zw = function () {
  var a = this.pG,
    c = this.qG,
    d = g.g.D.curve("c", [g.g.D.Va(30, -a), g.g.D.Va(70, -a), g.g.D.Va(c, 0)]);
  return { height: a, width: c, path: d };
};
b.yw = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.D.Va(c, h * l);
    return (
      g.g.D.curve("c", [
        g.g.D.Va(0, h * (l + 2.5)),
        g.g.D.Va(-c, k * (l + 0.5)),
        g.g.D.Va(-c, h * l),
      ]) + g.g.D.curve("s", [g.g.D.Va(c, 2.5 * k), m])
    );
  }
  var c = this.wq,
    d = this.un,
    e = a(!0),
    f = a(!1);
  return { type: this.Iz.fG, width: c, height: d, Af: f, Po: e };
};
b.xw = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Va(k * e, d),
      g.g.D.Va(3 * k, 0),
      g.g.D.Va(k * e, -d),
    ]);
  }
  var c = this.VF,
    d = this.Jt,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.Iz.Cl, width: c, height: d, sj: f, QC: h };
};
function Qa(a, c) {
  switch (c.type) {
    case g.pb:
    case g.Mf:
      return a.Rt;
    case g.Nf:
    case g.Cb:
      return a.Cl;
    default:
      throw Error("Unknown connection type");
  }
}
b.jb = function (a, c, d) {
  d = this.Fv(d);
  c = "blockly-renderer-style-" + c;
  this.Pn = document.getElementById(c);
  var e = d.join("\n");
  this.Pn
    ? (this.Pn.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.Pn = d));
  a = g.g.o.P(g.g.G.Dy, {}, a);
  c = g.g.o.P(g.g.G.Oy, { id: "blocklyEmbossFilter" + this.Uo }, a);
  g.g.o.P(g.g.G.LE, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.P(
    g.g.G.NE,
    {
      in: "blur",
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut",
    },
    c
  );
  g.g.o.P(g.g.G.ME, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.P(
    g.g.G.tt,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.P(
    g.g.G.tt,
    {
      in: "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0,
    },
    c
  );
  this.kr = c.id;
  this.vv = c;
  c = g.g.o.P(
    g.g.G.wz,
    {
      id: "blocklyDisabledPattern" + this.Uo,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.P(g.g.G.Od, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.P(g.g.G.Ld, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.bB = c.id;
  this.bv = c;
  g.m.Iy &&
    ((a = g.g.o.P(
      g.g.G.Oy,
      {
        id: "blocklyDebugFilter" + this.Uo,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.P(g.g.G.IE, { result: "outBlur" }, a)),
    g.g.o.P(
      g.g.G.KE,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.P(
      g.g.G.JE,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.P(
      g.g.G.tt,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.Tu = a));
};
b.Fv = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.Bi + " " + this.Ai + "pt " + this.zi + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.Ky + ";",
    "fill-opacity: .6;",
    "stroke: none;",
    "}",
    a + " .blocklyNonEditableText>text,",
    a + " .blocklyEditableText>text {",
    "fill: #000;",
    "}",
    a + " .blocklyFlyoutLabelText {",
    "fill: #000;",
    "}",
    a + " .blocklyText.blocklyBubbleText {",
    "fill: #000;",
    "}",
    a + " .blocklyEditableText:not(.editing):hover>rect {",
    "stroke: #fff;",
    "stroke-width: 2;",
    "}",
    a + " .blocklyHtmlInput {",
    "font-family: " + this.zi + ";",
    "font-weight: " + this.Bi + ";",
    "}",
    a + " .blocklySelected>.blocklyPath {",
    "stroke: #fc3;",
    "stroke-width: 3px;",
    "}",
    a + " .blocklyHighlightedConnectionPath {",
    "stroke: #fc3;",
    "}",
    a + " .blocklyReplaceable .blocklyPath {",
    "fill-opacity: .5;",
    "}",
    a + " .blocklyReplaceable .blocklyPathLight,",
    a + " .blocklyReplaceable .blocklyPathDark {",
    "display: none;",
    "}",
    a + " .blocklyInsertionMarker>.blocklyPath {",
    "fill-opacity: " + this.lq + ";",
    "stroke: none;",
    "}",
  ];
};
g.h.qh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.rb() == g.F.types.Rc && (f = e.Fa.id);
  g.h.qh.v.constructor.call(this, f);
  this.qb = a ? a.id : null;
  this.EC = d;
  this.yC = e;
  this.Tg = c;
};
g.g.object.X(g.h.qh, g.h.Ce);
g.h.qh.prototype.type = g.h.gz;
g.h.qh.prototype.xa = function () {
  var a = g.h.qh.v.xa.call(this);
  a.isCursor = this.Tg;
  a.blockId = this.qb;
  a.oldNode = this.EC;
  a.newNode = this.yC;
  return a;
};
g.h.qh.prototype.ka = function (a) {
  g.h.qh.v.ka.call(this, a);
  this.Tg = a.isCursor;
  this.qb = a.blockId;
  this.EC = a.oldNode;
  this.yC = a.newNode;
};
g.C.register(g.C.aa.ec, g.h.gz, g.h.qh);
g.m.rh = function (a, c, d) {
  this.s = a;
  this.Cw = d;
  this.ei = null;
  this.B = c;
  this.dm = null;
  a = this.Tg() ? this.B.Xp : this.B.oq;
  this.dd = d.Fb || a;
};
g.m.rh.mE = "blocklyCursor";
g.m.rh.LF = "blocklyMarker";
g.m.rh.fF = 0.75;
b = g.m.rh.prototype;
b.Oa = function () {
  return this.W;
};
b.Wd = function () {
  return this.Cw;
};
b.Tg = function () {
  return "cursor" == this.Cw.type;
};
b.jb = function () {
  var a = this.Tg() ? g.m.rh.mE : g.m.rh.LF;
  this.W = g.g.o.P(g.g.G.rd, { class: a }, null);
  this.bi = g.g.o.P(g.g.G.rd, { width: this.B.Zp, height: this.B.eA }, this.W);
  this.lj = g.g.o.P(
    g.g.G.Od,
    { width: this.B.Zp, height: this.B.eA, style: "display: none" },
    this.bi
  );
  this.Mk = g.g.o.P(
    g.g.G.Od,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.bi
  );
  this.Lk = g.g.o.P(
    g.g.G.Ld,
    { transform: "", style: "display: none" },
    this.bi
  );
  this.ai = g.g.o.P(
    g.g.G.Ld,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.nE,
    },
    this.bi
  );
  this.Tg() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.dd + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.P(g.g.G.Xs, a, this.lj),
    g.g.o.P(g.g.G.Xs, a, this.Lk),
    (a.attributeName = "stroke"),
    g.g.o.P(g.g.G.Xs, a, this.ai));
  return this.W;
};
function Nc(a, c) {
  a.Tg()
    ? (a.ei && a.ei.ji(null), c.ji(a.Oa()))
    : (a.ei && a.ei.li(null), c.li(a.Oa()));
  a.ei = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Lb.la();
    var d = this.Tg() ? this.B.Xp : this.B.oq;
    this.dd = this.Cw.Fb || d;
    this.lj.setAttribute("fill", this.dd);
    this.Mk.setAttribute("stroke", this.dd);
    this.Lk.setAttribute("fill", this.dd);
    this.ai.setAttribute("stroke", this.dd);
    this.Tg() &&
      ((d = this.dd + ";transparent;transparent;"),
      this.lj.firstChild.setAttribute("values", d),
      this.Lk.firstChild.setAttribute("values", d),
      this.ai.firstChild.setAttribute("values", d));
    d = c.Fa;
    if (c.rb() == g.F.types.kc) Oc(this, c);
    else if (c.rb() == g.F.types.Wj) Oc(this, c);
    else if (d.type == g.pb) {
      var e = c.Fa;
      d = e.Y();
      var f = e.Sk.x,
        h = e.Sk.y;
      e = g.g.D.moveTo(0, 0) + Qa(this.B, e).Af;
      this.Lk.setAttribute("d", e);
      this.Lk.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : "")
      );
      this.dm = this.Lk;
      Nc(this, d);
      Pc(this);
    } else if (d.type == g.Cb)
      (h = c.Fa),
        (d = h.Y()),
        (f = 0),
        (h = h.Sk.y),
        (e = E(d).width),
        this.s.L && (f = -e),
        Qc(this, f, h, e),
        Nc(this, d),
        Pc(this);
    else if (c.rb() == g.F.types.Md) Oc(this, c);
    else if (c.rb() == g.F.types.Dc)
      (d = c.Fa),
        (f = d.Sh().width),
        (h = d.Sh().height),
        Rc(this, 0, 0, f, h),
        Nc(this, d),
        Pc(this);
    else if (c.rb() == g.F.types.Rc)
      (f = c.Ts),
        (d = f.x),
        (f = f.y),
        this.s.L && (d -= this.B.Zp),
        Qc(this, d, f, this.B.Zp),
        Nc(this, this.s),
        Pc(this);
    else if (c.rb() == g.F.types.qg) {
      d = c.Fa;
      h = E(d);
      f = h.width + this.B.Yp;
      h = h.height + this.B.Yp;
      var k = (e = -this.B.Yp / 2),
        l = -this.B.Yp / 2;
      this.s.L && (k = -(f + e));
      Rc(this, k, l, f, h);
      Nc(this, d);
      Pc(this);
    }
    d = c.Y();
    a = new g.h.qh(d, this.Tg(), a, c);
    g.h.Ha(a);
    a = this.dm.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Ia();
};
function Oc(a, c) {
  c = c.Y();
  var d = c.width,
    e = c.height,
    f = e * g.m.rh.fF,
    h = a.B.lE;
  if (c.ba) {
    var k = Qa(a.B, c.ba);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.oa("V", -h) +
      g.g.D.oa("H", a.B.hn) +
      e.sj +
      g.g.D.oa("H", d + 2 * h) +
      g.g.D.oa("V", f);
    a.ai.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = Qa(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.oa("h", -(d - f.width)) +
          g.g.D.oa("v", a.B.Ml) +
          f.Af +
          g.g.D.oa("V", e) +
          g.g.D.oa("H", d)),
        a.ai.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.oa("V", -h) +
          g.g.D.oa("H", d + 2 * h) +
          g.g.D.oa("V", f)),
        a.ai.setAttribute("d", d));
  a.s.L && a.ai.setAttribute("transform", "scale(-1 1)");
  a.dm = a.ai;
  Nc(a, c);
  Pc(a);
}
function Pc(a) {
  a.Ia();
  a.dm.style.display = "";
}
function Qc(a, c, d, e) {
  a.lj.setAttribute("x", c);
  a.lj.setAttribute("y", d);
  a.lj.setAttribute("width", e);
  a.dm = a.lj;
}
function Rc(a, c, d, e, f) {
  a.Mk.setAttribute("x", c);
  a.Mk.setAttribute("y", d);
  a.Mk.setAttribute("width", e);
  a.Mk.setAttribute("height", f);
  a.dm = a.Mk;
}
b.Ia = function () {
  this.lj.style.display = "none";
  this.Mk.style.display = "none";
  this.Lk.style.display = "none";
  this.ai.style.display = "none";
};
b.I = function () {
  this.W && g.g.o.removeNode(this.W);
};
g.m.A = {
  NONE: 0,
  Dc: 1,
  Ty: 2,
  Wy: 4,
  Yt: 8,
  py: 16,
  az: 32,
  Jy: 64,
  bf: 128,
  Xy: 256,
  Mz: 512,
  iE: 1024,
  Qt: 2048,
  It: 4096,
  ZF: 8192,
  mt: 16384,
  Et: 32768,
  Dt: 65536,
  Vt: 131072,
  Ut: 262144,
  dz: 524288,
  Wt: 1048576,
  cu: 2097152,
  bt: 4194304,
  Yy: 8388608,
};
g.m.A.uM = g.m.A.Et | g.m.A.Dt;
g.m.A.BN = g.m.A.Vt | g.m.A.Ut;
g.m.A.Mw = 16777216;
g.m.A.rb = function () {
  Object.prototype.hasOwnProperty.call(g.m.A, void 0) ||
    ((g.m.A[void 0] = g.m.A.Mw), (g.m.A.Mw <<= 1));
  return g.m.A[void 0];
};
g.m.A.Zh = function (a) {
  return a.type & g.m.A.Dc;
};
g.m.A.Hk = function (a) {
  return a.type & g.m.A.Ty;
};
g.m.A.tm = function (a) {
  return a.type & g.m.A.Wy;
};
g.m.A.vf = function (a) {
  return a.type & g.m.A.Yt;
};
g.m.A.mO = function (a) {
  return a.type & g.m.A.az;
};
g.m.A.ej = function (a) {
  return a.type & g.m.A.bf;
};
g.m.A.xo = function (a) {
  return a.type & g.m.A.Jy;
};
g.m.A.dj = function (a) {
  return a.type & g.m.A.Xy;
};
g.m.A.Jk = function (a) {
  return a.type & g.m.A.Mz;
};
g.m.A.ym = function (a) {
  return a.type & g.m.A.Qt;
};
g.m.A.gj = function (a) {
  return a.type & g.m.A.It;
};
g.m.A.SI = function (a) {
  return a.type & (g.m.A.Qt | g.m.A.It);
};
g.m.A.fj = function (a) {
  return a.type & g.m.A.Dt;
};
g.m.A.eC = function (a) {
  return a.type & g.m.A.Ut;
};
g.m.A.zo = function (a) {
  return a.type & g.m.A.Et;
};
g.m.A.nO = function (a) {
  return a.type & g.m.A.Vt;
};
g.m.A.lO = function (a) {
  return a.type & g.m.A.mt;
};
g.m.A.cC = function (a) {
  return a.type & g.m.A.dz;
};
g.m.A.pO = function (a) {
  return a.type & g.m.A.Wt;
};
g.m.A.jO = function (a) {
  return a.type & g.m.A.py;
};
g.m.A.Lr = function (a) {
  return a.type & g.m.A.cu;
};
g.m.A.Fr = function (a) {
  return a.type & g.m.A.bt;
};
g.m.A.TI = function (a) {
  return a.type & (g.m.A.cu | g.m.A.bt);
};
g.m.A.NI = function (a) {
  return a.type & g.m.A.Yy;
};
g.m.Ei = function (a) {
  this.height = this.width = 0;
  this.type = g.m.A.NONE;
  this.Xl = this.Xa = 0;
  this.B = a;
  this.yf = this.B.hn;
};
g.m.Ca = function (a, c) {
  g.m.Ca.v.constructor.call(this, a);
  this.Sd = c;
  this.shape = Qa(this.B, c);
  this.Gk = !!this.shape.isDynamic;
  this.type |= g.m.A.iE;
};
g.g.object.X(g.m.Ca, g.m.Ei);
g.m.Pt = function (a, c) {
  g.m.Pt.v.constructor.call(this, a, c);
  this.type |= g.m.A.ZF;
  this.height = this.Gk ? 0 : this.shape.height;
  this.Ef = this.width = this.Gk ? 0 : this.shape.width;
  this.Ge = this.B.Ml;
  this.Kn = 0;
};
g.g.object.X(g.m.Pt, g.m.Ca);
g.m.St = function (a, c) {
  g.m.St.v.constructor.call(this, a, c);
  this.type |= g.m.A.Qt;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.St, g.m.Ca);
g.m.Kt = function (a, c) {
  g.m.Kt.v.constructor.call(this, a, c);
  this.type |= g.m.A.It;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.Kt, g.m.Ca);
g.m.an = function (a, c) {
  g.m.an.v.constructor.call(this, a, c.connection);
  this.type |= g.m.A.bf;
  this.input = c;
  this.align = c.align;
  (this.Ri = c.connection && c.connection.sa() ? c.connection.sa() : null)
    ? ((a = E(this.Ri)), (this.In = a.width), (this.Xq = a.height))
    : (this.Xq = this.In = 0);
  this.Ge = this.Kn = 0;
};
g.g.object.X(g.m.an, g.m.Ca);
g.m.Ci = function (a, c) {
  g.m.Ci.v.constructor.call(this, a, c);
  this.type |= g.m.A.Xy;
  this.Ri
    ? ((this.width = this.In), (this.height = this.Xq))
    : ((this.height = this.B.AE), (this.width = this.B.BE));
  this.Zl = this.Gk ? this.shape.height(this.height) : this.shape.height;
  this.Cg = this.Gk ? this.shape.width(this.height) : this.shape.width;
  this.Ri || (this.width += this.Cg * (this.Gk ? 2 : 1));
  this.Ge = this.Gk ? this.shape.Ge(this.Zl) : this.B.Ml;
  this.Kn = this.Gk ? this.shape.Kn(this.Cg) : 0;
};
g.g.object.X(g.m.Ci, g.m.an);
g.m.Ki = function (a, c) {
  g.m.Ki.v.constructor.call(this, a, c);
  this.type |= g.m.A.Mz;
  this.height = this.Ri ? this.Xq + this.B.Lz : this.B.CE;
  this.width = this.B.sG + this.shape.width;
};
g.g.object.X(g.m.Ki, g.m.an);
g.m.cq = function (a, c) {
  g.m.cq.v.constructor.call(this, a, c);
  this.type |= g.m.A.Jy;
  this.height = this.Ri ? this.Xq - this.B.Ml - this.B.df : this.shape.height;
  this.width = this.shape.width + this.B.HE;
  this.Ge = this.B.Ml;
  this.Zl = this.shape.height;
  this.Cg = this.shape.width;
};
g.g.object.X(g.m.cq, g.m.an);
g.m.le = function (a, c) {
  g.m.le.v.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.A.Wy;
  a = new g.g.ef(g.le.prototype.uq, g.le.prototype.uq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.le, g.m.Ei);
g.m.Ct = function (a) {
  g.m.Ct.v.constructor.call(this, a);
  this.type |= g.m.A.dz;
  this.height = this.B.yl.height;
  this.width = this.B.yl.width;
};
g.g.object.X(g.m.Ct, g.m.Ei);
g.m.ze = function (a, c) {
  g.m.ze.v.constructor.call(this, a);
  this.iB = c;
  this.ce = c.aq;
  this.VH = !1;
  this.type |= g.m.A.Dc;
  a = this.iB.Sh();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.ze, g.m.Ei);
g.m.wt = function (a) {
  g.m.wt.v.constructor.call(this, a);
  this.type |= g.m.A.Ty;
  this.height = this.B.Il.height;
  this.width = this.B.Il.width;
  this.Tl = this.height;
};
g.g.object.X(g.m.wt, g.m.Ei);
g.m.Ll = function (a, c) {
  g.m.Ll.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.Vt : g.m.A.Et) | g.m.A.mt;
  this.width = this.height = this.B.pg;
};
g.g.object.X(g.m.Ll, g.m.Ei);
g.m.tq = function (a, c) {
  g.m.tq.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.Ut : g.m.A.Dt) | g.m.A.mt;
  this.width = this.B.Nb;
  this.height = this.B.Nb / 2;
};
g.g.object.X(g.m.tq, g.m.Ei);
g.m.ph = function (a, c) {
  g.m.ph.v.constructor.call(this, a);
  this.type = this.type | g.m.A.Yt | g.m.A.az;
  this.width = c;
  this.height = this.B.oG;
};
g.g.object.X(g.m.ph, g.m.Ei);
g.m.Yj = function (a) {
  this.type = g.m.A.Wt;
  this.elements = [];
  this.Xa = this.Qc = this.gg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.OB = this.om = this.Uv = this.Ec = this.Zi = !1;
  this.B = a;
  this.yf = this.B.hn;
  this.align = null;
};
g.m.Yj.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Sc(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.A.ej(d)) return d;
  return null;
}
g.m.Yj.prototype.Is = function () {
  return !0;
};
g.m.Yj.prototype.Wn = function () {
  return !0;
};
g.m.bk = function (a) {
  g.m.bk.v.constructor.call(this, a);
  this.type |= g.m.A.cu;
  this.Tl = this.Gh = 0;
  this.CI = !1;
  this.connection = null;
};
g.g.object.X(g.m.bk, g.m.Yj);
g.m.bk.prototype.Vv = function (a) {
  var c = (a.Qg ? "cap" === a.Qg : this.B.Ip) && !a.O && !a.ba,
    d = a.ba && a.ba.sa();
  return !!a.O || c || (d ? r(d) == a : !1);
};
g.m.bk.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.vf(f) ||
        (g.m.A.Hk(f) ? (d = Math.max(d, f.Tl)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Gh = this.Tl = d;
  this.gg = this.width;
};
g.m.bk.prototype.Is = function () {
  return !1;
};
g.m.bk.prototype.Wn = function () {
  return !1;
};
g.m.Lj = function (a) {
  g.m.Lj.v.constructor.call(this, a);
  this.type |= g.m.A.bt;
  this.PB = !1;
  this.connection = null;
  this.Rf = this.Rn = 0;
};
g.g.object.X(g.m.Lj, g.m.Yj);
g.m.Lj.prototype.Vv = function (a) {
  return !!a.O || !!r(a);
};
g.m.Lj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.vf(f) ||
        (g.m.A.gj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Rn = d;
  this.gg = this.width;
};
g.m.Lj.prototype.Is = function () {
  return !1;
};
g.m.Lj.prototype.Wn = function () {
  return !1;
};
g.m.vq = function (a, c, d) {
  g.m.vq.v.constructor.call(this, a);
  this.type = this.type | g.m.A.Yt | g.m.A.py;
  this.width = d;
  this.height = c;
  this.pB = !1;
  this.gg = 0;
  this.elements = [new g.m.ph(this.B, d)];
};
g.g.object.X(g.m.vq, g.m.Yj);
g.m.vq.prototype.measure = function () {};
g.m.xl = function (a) {
  g.m.xl.v.constructor.call(this, a);
  this.type |= g.m.A.Yy;
  this.HA = 0;
};
g.g.object.X(g.m.xl, g.m.Yj);
g.m.xl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.A.ej(d) &&
        (g.m.A.Jk(d)
          ? (a += d.In)
          : g.m.A.xo(d) && 0 != d.In && (a += d.In - d.Cg)),
      g.m.A.vf(d) || (this.height = Math.max(this.height, d.height));
  this.HA = a;
  this.gg = this.width + a;
};
g.m.xl.prototype.Wn = function () {
  return !this.Zi && !this.Ec;
};
g.m.Of = function (a, c) {
  this.T = c;
  this.Lb = a;
  this.B = this.Lb.la();
  this.O = c.O ? new g.m.Pt(this.B, c.O) : null;
  this.um = Ia(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.ve = c.ve();
  this.L = c.L;
  this.Dj = this.width = this.Tm = this.height = 0;
  this.rows = [];
  this.YB = [];
  this.TB = [];
  this.Bc = new g.m.bk(this.B);
  this.Vb = new g.m.Lj(this.B);
  this.Hs = this.Ef = 0;
};
b = g.m.Of.prototype;
b.measure = function () {
  var a = !!this.T.ba,
    c = (this.T.Qg ? "cap" === this.T.Qg : this.B.Ip) && !this.O && !a;
  this.Bc.Vv(this.T)
    ? this.Bc.elements.push(new g.m.Ll(this.B))
    : this.Bc.elements.push(new g.m.tq(this.B));
  c
    ? ((a = new g.m.wt(this.B)), this.Bc.elements.push(a), (this.Bc.Gh = a.Tl))
    : a &&
      ((this.Bc.CI = !0),
      (this.Bc.connection = new g.m.St(this.B, this.T.ba)),
      this.Bc.elements.push(this.Bc.connection));
  this.T.U.length && this.T.U[0].type == g.Cb && !this.T.isCollapsed()
    ? (this.Bc.minHeight = this.B.zG)
    : (this.Bc.minHeight = this.B.yG);
  this.Bc.elements.push(new g.m.Ll(this.B, "right"));
  this.rows.push(this.Bc);
  a = new g.m.xl(this.B);
  this.YB.push(a);
  var d = Ra(this.T);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.le(this.B, e);
      this.isCollapsed && e.CA ? this.TB.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.T.U[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.Cb &&
          e.type != g.Cb &&
          ((d.type != g.pb && d.type != g.nh) || this.um)) ||
        (this.rows.push(a), (a = new g.m.xl(this.B)), this.YB.push(a));
      for (e = 0; (f = d.kb[e]); e++) a.elements.push(new g.m.ze(this.B, f, d));
      this.nA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.OB = !0), a.elements.push(new g.m.Ct(this.B)));
  (a.elements.length || a.om) && this.rows.push(a);
  this.ix();
  this.rows.push(this.Vb);
  this.mA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.m.vq(this.B, this.FB(f, h), this.width - this.Ef);
      f.Ec && (k.pB = !0);
      h.Ec && (k.uO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ec && (a = Math.max(a, f.width - Sc(f).width)),
      (d = Math.max(d, f.gg));
  this.Dj = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ec && (f.Dj = this.Dj);
  this.Tm = Math.max(c, d);
  this.O &&
    ((this.Ef = this.O.width),
    (this.width += this.O.width),
    (this.Tm += this.O.width));
  this.nu();
  this.jB();
};
b.ix = function () {
  this.Vb.PB = !!this.T.Z;
  this.Vb.minHeight =
    this.T.U.length && this.T.U[this.T.U.length - 1].type == g.Cb
      ? this.B.XD
      : this.B.YD;
  this.Vb.Vv(this.T)
    ? this.Vb.elements.push(new g.m.Ll(this.B))
    : this.Vb.elements.push(new g.m.tq(this.B));
  this.Vb.PB &&
    ((this.Vb.connection = new g.m.Kt(this.B, this.T.Z)),
    this.Vb.elements.push(this.Vb.connection));
  this.Vb.elements.push(new g.m.Ll(this.B, "right"));
};
b.nA = function (a, c) {
  this.um && a.type == g.pb
    ? (c.elements.push(new g.m.Ci(this.B, a)), (c.Uv = !0))
    : a.type == g.Cb
    ? (c.elements.push(new g.m.Ki(this.B, a)), (c.Ec = !0))
    : a.type == g.pb
    ? (c.elements.push(new g.m.cq(this.B, a)), (c.Zi = !0))
    : a.type == g.nh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.Y() && a.Y().Pa ? this.B.yE : this.B.Hy
      )),
      (c.om = !0));
  null == c.align && (c.align = a.align);
};
b.mA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Is() && c.elements.push(new g.m.ph(this.B, this.nk(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.m.ph(this.B, this.nk(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.Wn() &&
        c.elements.push(new g.m.ph(this.B, this.nk(d[d.length - 1], null)));
    }
  }
};
b.nk = function (a, c) {
  if (!a && c && g.m.A.Jk(c)) return this.B.Nz;
  if (a && g.m.A.ej(a) && !c) {
    if (g.m.A.xo(a)) return this.B.pg;
    if (g.m.A.dj(a)) return this.B.Hd;
    if (g.m.A.Jk(a)) return this.B.pg;
  }
  return a && g.m.A.zo(a) && c && (g.m.A.ym(c) || g.m.A.gj(c))
    ? c.yf
    : a && g.m.A.fj(a) && c && (g.m.A.ym(c) || g.m.A.gj(c))
    ? c.yf - this.B.Nb
    : this.B.df;
};
b.nu = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Ec) Tc(this, c);
    else {
      var d = this.lo(c) - c.width;
      0 < d && Uc(c, d);
      g.m.A.TI(c) && (c.gg = c.width);
    }
};
b.lo = function () {
  return this.width - this.Ef;
};
function Uc(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.A.vf(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.m.A.vf(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Zi || a.Ec) a.gg += c;
  a.align == g.Ws
    ? (e.width += c)
    : a.align == g.Vs
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.ll
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Tc(a, c) {
  var d = Sc(c),
    e = c.width - d.width,
    f = a.Dj;
  e = f - e;
  0 < e && Uc(c, e);
  e = c.width;
  f = a.lo(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.gg = Math.max(c.width, a.Dj + c.HA);
}
b.FB = function () {
  return this.B.df;
};
b.xB = function (a, c) {
  return g.m.A.vf(c)
    ? a.Qc + c.height / 2
    : g.m.A.Fr(a)
    ? ((a = a.Qc + a.height - a.Rn),
      g.m.A.gj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.A.Lr(a)
    ? g.m.A.Hk(c)
      ? a.Gh - c.height / 2
      : a.Gh + c.height / 2
    : a.Qc + a.height / 2;
};
function Vc(a, c) {
  for (var d = c.Xa, e = 0, f; (f = c.elements[e]); e++)
    g.m.A.vf(f) && (f.height = c.height),
      (f.Xa = d),
      (f.Xl = a.xB(c, f)),
      (d += f.width);
}
b.jB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Qc = c),
      (e.Xa = this.Ef),
      (c += e.height),
      (a = Math.max(a, e.gg)),
      Vc(this, e);
  this.O &&
    this.T.Z &&
    this.T.Z.isConnected() &&
    (a = Math.max(a, E(this.T.Z.sa()).width));
  this.Tm = a + this.Ef;
  this.height = c;
  this.Hs = this.Bc.Gh;
  this.Vb.Rf = c - this.Vb.Rn;
};
g.m.Dd = function (a, c) {
  this.T = a;
  this.Ea = c;
  a.Za();
  this.Er = this.gb = "";
  this.B = c.Lb.la();
};
b = g.m.Dd.prototype;
b.draw = function () {
  Wc(this);
  Xc(this);
  Yc(this);
  this.T.Rb.Cx(this.gb + "\n" + this.Er);
  this.Ea.L && this.T.Rb.Av();
  g.m.Fp && this.T.vx.OH(this.T, this.Ea);
  Zc(this);
};
function Zc(a) {
  a.T.height = a.Ea.height;
  a.T.width = a.Ea.Tm;
}
function Wc(a) {
  for (var c = 0, d; (d = a.Ea.TB[c]); c++)
    d.icon.ae.setAttribute("display", "none");
}
function Xc(a) {
  a.qv();
  for (var c = 1; c < a.Ea.rows.length - 1; c++) {
    var d = a.Ea.rows[c];
    d.OB ? a.Un(d) : d.Ec ? a.pv(d) : d.Zi ? a.rv(d) : a.gB(d);
  }
  a.kv();
  a.ov();
}
b.qv = function () {
  var a = this.Ea.Bc,
    c = a.elements,
    d = this.Ea.Bc;
  if (d.connection) {
    var e = d.Xa + d.yf;
    ic(d.connection.Sd, this.Ea.L ? -e : e, 0);
  }
  this.gb += g.g.D.moveBy(a.Xa, this.Ea.Hs);
  for (d = 0; (e = c[d]); d++)
    g.m.A.fj(e)
      ? (this.gb += this.B.nn.Tx)
      : g.m.A.eC(e)
      ? (this.gb += this.B.nn.aL)
      : g.m.A.ym(e)
      ? (this.gb += e.shape.sj)
      : g.m.A.Hk(e)
      ? (this.gb += this.B.Il.path)
      : g.m.A.vf(e) && (this.gb += g.g.D.oa("h", e.width));
  this.gb += g.g.D.oa("v", a.height);
};
b.Un = function (a) {
  this.gb += this.B.yl.path + g.g.D.oa("v", a.height - this.B.yl.height);
};
b.rv = function (a) {
  var c = Sc(a);
  this.TC(a);
  var d = "function" == typeof c.shape.Af ? c.shape.Af(c.height) : c.shape.Af;
  this.gb += g.g.D.oa("H", c.Xa + c.width) + d + g.g.D.oa("v", a.height - c.Zl);
};
b.pv = function (a) {
  var c = Sc(a);
  this.gb +=
    g.g.D.oa("H", c.Xa + c.yf + c.shape.width) +
    (c.shape.QC + g.g.D.oa("h", -(c.yf - this.B.mq.width)) + this.B.mq.bx) +
    g.g.D.oa("v", a.height - 2 * this.B.mq.height) +
    this.B.mq.qs +
    g.g.D.oa("H", a.Xa + a.width);
  this.WC(a);
};
b.gB = function (a) {
  this.gb += g.g.D.oa("V", a.Qc + a.height);
};
b.kv = function () {
  var a = this.Ea.Vb,
    c = a.elements;
  this.VC();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.m.A.gj(h)
      ? (e += h.shape.QC)
      : g.m.A.zo(h)
      ? (e += g.g.D.oa("H", a.Xa))
      : g.m.A.fj(h)
      ? (e += this.B.nn.xu)
      : g.m.A.eC(h)
      ? ((e += this.B.nn.YG), (d = this.B.nn.AK))
      : g.m.A.vf(h) && (e += g.g.D.oa("h", -1 * h.width));
  this.gb += g.g.D.oa("V", a.Rf - d);
  this.gb += e;
};
b.ov = function () {
  var a = this.Ea.O;
  if (this.Ea.O) {
    var c = this.Ea.Ef + this.Ea.O.Kn;
    ic(this.T.O, this.Ea.L ? -c : c, this.Ea.O.Ge);
  }
  a &&
    ((c = a.Ge + a.height),
    (a = "function" == typeof a.shape.Po ? a.shape.Po(a.height) : a.shape.Po),
    (this.gb += g.g.D.oa("V", c) + a));
  this.gb += "z";
};
function Yc(a) {
  for (var c = 0, d; (d = a.Ea.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.A.dj(f)) a.nv(f);
      else if (g.m.A.tm(f) || g.m.A.Zh(f)) {
        var h = a;
        if (g.m.A.Zh(f)) var k = f.iB.Oa();
        else g.m.A.tm(f) && (k = f.icon.ae);
        var l = f.Xl - f.height / 2,
          m = f.Xa,
          n = "";
        h.Ea.L &&
          ((m = -(m + f.width)), f.VH && ((m += f.width), (n = "scale(-1 1)")));
        g.m.A.tm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            tc(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Ea.ve && k.setAttribute("display", "none");
      }
}
b.nv = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Ge,
    f = a.Zl + e;
  this.Er +=
    g.g.D.moveTo(a.Xa + a.Cg, a.Xl - d / 2) +
    g.g.D.oa("v", e) +
    a.shape.Af +
    g.g.D.oa("v", d - f) +
    g.g.D.oa("h", c - a.Cg) +
    g.g.D.oa("v", -d) +
    "z";
  this.UC(a);
};
b.UC = function (a) {
  var c = a.Xl - a.height / 2;
  if (a.Sd) {
    var d = a.Xa + a.Cg + a.Kn;
    this.Ea.L && (d *= -1);
    ic(a.Sd, d, c + a.Ge);
  }
};
b.WC = function (a) {
  var c = Sc(a);
  if (c.Sd) {
    var d = a.Xa + a.Dj + c.yf;
    this.Ea.L && (d *= -1);
    ic(c.Sd, d, a.Qc);
  }
};
b.TC = function (a) {
  var c = Sc(a);
  if (c.Sd) {
    var d = a.Xa + a.width;
    this.Ea.L && (d *= -1);
    ic(c.Sd, d, a.Qc);
  }
};
b.VC = function () {
  var a = this.Ea.Vb;
  if (a.connection) {
    var c = a.connection,
      d = c.Xa;
    ic(c.Sd, this.Ea.L ? -d : d, a.Rf);
  }
};
g.m.uh = function (a, c, d) {
  this.am = d;
  this.gh = a;
  this.cc = g.g.o.P(g.g.G.Ld, { class: "blocklyPath" }, this.gh);
  this.style = c;
  this.Bw = this.Qn = null;
};
b = g.m.uh.prototype;
b.Cx = function (a) {
  this.cc.setAttribute("d", a);
};
b.Av = function () {
  this.cc.setAttribute("transform", "scale(-1 1)");
};
b.ji = function (a) {
  a ? (this.gh.appendChild(a), (this.Qn = a)) : (this.Qn = null);
};
b.li = function (a) {
  a
    ? (this.Qn ? this.gh.insertBefore(a, this.Qn) : this.gh.appendChild(a),
      (this.Bw = a))
    : (this.Bw = null);
};
b.nc = function (a) {
  this.cc.setAttribute("stroke", this.style.zg);
  this.cc.setAttribute("fill", this.style.Ih);
  this.CD(a.Pa);
  this.Wx(!a.isEnabled() || Wb(a));
};
b.bc = function (a) {
  this.style = a;
};
function Pa(a, c, d) {
  d ? g.g.o.Ka(a.gh, c) : g.g.o.Nc(a.gh, c);
}
b.AD = function (a) {
  a
    ? this.cc.setAttribute("filter", "url(#" + this.am.kr + ")")
    : this.cc.setAttribute("filter", "none");
};
b.CD = function (a) {
  a &&
    (this.cc.setAttribute("stroke", "none"),
    this.cc.setAttribute("fill", this.style.Vq));
};
b.Wx = function (a) {
  Pa(this, "blocklyDisabled", a);
  a && this.cc.setAttribute("fill", "url(#" + this.am.bB + ")");
};
g.m.wh = function (a) {
  this.name = a;
  this.Yw = this.B = null;
};
b = g.m.wh.prototype;
b.Yf = function () {
  return this.name + "-renderer";
};
b.R = function (a, c) {
  this.B = this.uw();
  c && ((this.Yw = c), g.g.object.Oe(this.B, c));
  this.B.ip(a);
  this.B.R();
};
b.jb = function (a, c) {
  this.B.jb(a, this.name + "-" + c.name, "." + this.Yf() + "." + c.Yf());
};
b.nx = function (a, c) {
  var d = this.la();
  d.I();
  this.B = this.uw();
  this.Yw && g.g.object.Oe(this.B, this.Yw);
  this.B.Uo = d.Uo;
  this.B.ip(c);
  this.B.R();
  this.jb(a, c);
};
b.I = function () {
  this.B && this.B.I();
};
b.uw = function () {
  return new g.m.mh();
};
b.pC = function (a) {
  return new g.m.Of(this, a);
};
b.nC = function (a, c) {
  return new g.m.Dd(a, c);
};
b.oC = function (a, c) {
  return new g.m.uh(a, c, this.B);
};
b.la = function () {
  return this.B;
};
b.Ga = function (a) {
  if (g.m.Fp && !a.vx) {
    if (!g.m.Iy)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.Iy(this.la());
    a.vx = c;
  }
  c = this.pC(a);
  c.measure();
  this.nC(a, c).draw();
};
g.ra = {};
g.ra.mh = function () {
  g.ra.mh.v.constructor.call(this);
  this.vt = !1;
  this.Zc = 1;
  this.MF = 30;
  this.Lz = -this.Jt / 2;
};
g.g.object.X(g.ra.mh, g.m.mh);
g.ra.mh.prototype.Fv = function (a) {
  return g.ra.mh.v.Fv.call(this, a).concat([
    a + " .blocklyInsertionMarker>.blocklyPathLight,",
    a + " .blocklyInsertionMarker>.blocklyPathDark {",
    "fill-opacity: " + this.lq + ";",
    "stroke: none;",
    "}",
  ]);
};
g.ra.Vy = function (a) {
  this.Ea = a;
  this.uo = this.wa = "";
  this.$c = this.Ea.L;
  a = a.Lb;
  this.B = a.la();
  this.Le = a.Le;
  this.te = this.Le.OFFSET;
  this.Xw = this.Le.$F;
  this.qm = this.Le.oF;
  this.To = this.Le.Rt;
  this.sJ = this.Le.Cl;
  this.RK = this.Le.Il;
  this.hC = this.Le.yl;
};
g.ra.Vy.prototype.Un = function (a) {
  this.Ea.L &&
    (this.wa +=
      this.hC.sj + g.g.D.oa("v", a.height - this.hC.height - this.te));
};
function $c(a, c) {
  var d = c.Xa + c.width - a.te;
  c.pB && (a.wa += g.g.D.oa("H", d));
  a.$c &&
    ((a.wa += g.g.D.oa("H", d)),
    c.height > a.te && (a.wa += g.g.D.oa("V", c.Qc + c.height - a.te)));
}
g.ra.Ci = function (a, c) {
  g.ra.Ci.v.constructor.call(this, a, c);
  this.Ri && ((this.width += this.B.Zc), (this.height += this.B.Zc));
};
g.g.object.X(g.ra.Ci, g.m.Ci);
g.ra.Ki = function (a, c) {
  g.ra.Ki.v.constructor.call(this, a, c);
  this.Ri && (this.height += this.B.Zc);
};
g.g.object.X(g.ra.Ki, g.m.Ki);
g.ra.Of = function (a, c) {
  g.ra.Of.v.constructor.call(this, a, c);
};
g.g.object.X(g.ra.Of, g.m.Of);
b = g.ra.Of.prototype;
b.ix = function () {
  g.ra.Of.v.ix.call(this);
  (this.T.U.length && this.T.U[this.T.U.length - 1].type == g.Cb) ||
    (this.Vb.minHeight = this.B.df - this.B.Zc);
};
b.nA = function (a, c) {
  this.um && a.type == g.pb
    ? (c.elements.push(new g.ra.Ci(this.B, a)), (c.Uv = !0))
    : a.type == g.Cb
    ? (c.elements.push(new g.ra.Ki(this.B, a)), (c.Ec = !0))
    : a.type == g.pb
    ? (c.elements.push(new g.m.cq(this.B, a)), (c.Zi = !0))
    : a.type == g.nh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.Hy)), (c.om = !0));
  this.um || null != c.align || (c.align = a.align);
};
b.mA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Zi && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Is() && d.elements.push(new g.m.ph(this.B, this.nk(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.nk(e[f], e[f + 1]);
        d.elements.push(new g.m.ph(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.Wn() &&
        ((h = this.nk(e[e.length - 1], null)),
        a && d.om && (h += this.B.wq),
        d.elements.push(new g.m.ph(this.B, h)));
    }
  }
};
b.nk = function (a, c) {
  if (!a)
    return c && g.m.A.Zh(c) && c.ce
      ? this.B.df
      : c && g.m.A.dj(c)
      ? this.B.jz
      : c && g.m.A.Jk(c)
      ? this.B.Nz
      : this.B.Hd;
  if (!g.m.A.ej(a) && (!c || g.m.A.Jk(c)))
    return g.m.A.Zh(a) && a.ce
      ? this.B.df
      : g.m.A.tm(a)
      ? 2 * this.B.Hd + 1
      : g.m.A.Hk(a)
      ? this.B.pg
      : g.m.A.SI(a)
      ? this.B.Hd
      : g.m.A.fj(a)
      ? this.B.PF
      : g.m.A.cC(a)
      ? this.B.pg
      : this.B.Hd;
  if (g.m.A.ej(a) && !c) {
    if (g.m.A.xo(a)) return this.B.pg;
    if (g.m.A.dj(a)) return this.B.Hd;
    if (g.m.A.Jk(a)) return this.B.pg;
  }
  if (!g.m.A.ej(a) && c && g.m.A.ej(c)) {
    if (g.m.A.Zh(a) && a.ce) {
      if (g.m.A.dj(c) || g.m.A.xo(c)) return this.B.mG;
    } else {
      if (g.m.A.dj(c) || g.m.A.xo(c)) return this.B.jz;
      if (g.m.A.Jk(c)) return this.B.Hd;
    }
    return this.B.Hd - 1;
  }
  if (g.m.A.tm(a) && c && !g.m.A.ej(c)) return this.B.Hd;
  if (g.m.A.dj(a) && c && g.m.A.Zh(c)) return c.ce ? this.B.df : this.B.Hd;
  if (g.m.A.zo(a) && c) {
    if (g.m.A.Hk(c)) return this.B.pg;
    if (g.m.A.ym(c)) return c.yf;
    if (g.m.A.gj(c)) return (a = ((this.L ? 1 : -1) * this.B.Zc) / 2), c.yf + a;
  }
  if (g.m.A.fj(a) && c) {
    if (g.m.A.ym(c)) return c.yf - this.B.Nb;
    if (g.m.A.gj(c))
      return (a = ((this.L ? 1 : -1) * this.B.Zc) / 2), c.yf - this.B.Nb + a;
  }
  return (g.m.A.Zh(a) && c && g.m.A.Zh(c) && a.ce == c.ce) || (c && g.m.A.cC(c))
    ? this.B.Hd
    : this.B.df;
};
b.FB = function (a, c) {
  return g.m.A.Lr(a) && g.m.A.Fr(c)
    ? this.B.zE
    : g.m.A.Lr(a) || g.m.A.Fr(c)
    ? this.B.pg
    : a.Zi && c.Zi
    ? this.B.Hd
    : !a.Ec && c.Ec
    ? this.B.UD
    : (a.Ec && c.Ec) || (!a.Ec && c.om) || a.om
    ? this.B.Hd
    : this.B.df;
};
b.xB = function (a, c) {
  if (g.m.A.vf(c)) return a.Qc + c.height / 2;
  if (g.m.A.Fr(a))
    return (
      (a = a.Qc + a.height - a.Rn),
      g.m.A.gj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.A.Lr(a))
    return g.m.A.Hk(c) ? a.Gh - c.height / 2 : a.Gh + c.height / 2;
  var d = a.Qc;
  g.m.A.Zh(c) || g.m.A.tm(c)
    ? ((d += c.height / 2),
      (a.Uv || a.Ec) && c.height + this.B.Oz <= a.height && (d += this.B.Oz))
    : (d = g.m.A.dj(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.nu = function () {
  if (this.um) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.Lw = a),
        g.m.A.NI(e) &&
          (e.Ec && Tc(this, e),
          c && c.Ec && e.width < c.width ? (e.Lw = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Ec
        ? (a = this.lo(e))
        : g.m.A.vf(e)
        ? (e.width = Math.max(a, e.Lw))
        : ((a = Math.max(a, e.Lw) - e.width), 0 < a && Uc(e, a), (a = e.width));
  } else g.ra.Of.v.nu.call(this);
};
b.lo = function (a) {
  return this.um && a.Ec
    ? this.Dj + this.B.MF + this.Ef
    : g.ra.Of.v.lo.call(this, a);
};
b.jB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Qc = c;
    e.Xa = this.Ef;
    c += e.height;
    a = Math.max(a, e.gg);
    var f = c - this.Bc.Tl;
    e == this.Vb &&
      f < this.B.dn &&
      ((f = this.B.dn - f), (this.Vb.height += f), (c += f));
    Vc(this, e);
  }
  this.O &&
    this.T.Z &&
    this.T.Z.isConnected() &&
    (a = Math.max(a, E(this.T.Z.sa()).width - this.B.Zc));
  this.Vb.Rf = c - this.Vb.Rn;
  this.Tm = a + this.Ef + this.B.Zc;
  this.width += this.B.Zc;
  this.height = c + this.B.Zc;
  this.Hs = this.Bc.Gh;
};
g.ra.Dd = function (a, c) {
  g.ra.Dd.v.constructor.call(this, a, c);
  this.Rg = new g.ra.Vy(c);
};
g.g.object.X(g.ra.Dd, g.m.Dd);
b = g.ra.Dd.prototype;
b.draw = function () {
  Wc(this);
  Xc(this);
  Yc(this);
  var a = this.T.Rb;
  a.Cx(this.gb + "\n" + this.Er);
  var c = this.Rg;
  a.$k.setAttribute("d", c.wa + "\n" + c.uo);
  this.Ea.L && a.Av();
  g.m.Fp && this.T.vx.OH(this.T, this.Ea);
  Zc(this);
};
b.qv = function () {
  var a = this.Rg,
    c = this.Ea.Bc;
  a.wa += g.g.D.moveBy(c.Xa, a.Ea.Hs);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.A.zo(e)
      ? (a.wa += a.Le.Kz)
      : g.m.A.fj(e)
      ? (a.wa += a.Xw.Tx(a.$c))
      : g.m.A.ym(e)
      ? (a.wa += a.sJ.sj)
      : g.m.A.Hk(e)
      ? (a.wa += a.RK.path(a.$c))
      : g.m.A.vf(e) &&
        0 != e.width &&
        (a.wa += g.g.D.oa("H", e.Xa + e.width - a.te));
  a.wa += g.g.D.oa("H", c.Xa + c.width - a.te);
  $c(this.Rg, this.Ea.Bc);
  g.ra.Dd.v.qv.call(this);
};
b.Un = function (a) {
  this.Rg.Un(a);
  g.ra.Dd.v.Un.call(this, a);
};
b.rv = function (a) {
  var c = this.Rg,
    d = Sc(a);
  if (c.$c) {
    var e = a.height - d.Zl;
    c.wa +=
      g.g.D.moveTo(d.Xa + d.width - c.te, a.Qc) +
      c.To.Af(c.$c) +
      g.g.D.oa("v", e);
  } else c.wa += g.g.D.moveTo(d.Xa + d.width, a.Qc) + c.To.Af(c.$c);
  g.ra.Dd.v.rv.call(this, a);
};
b.pv = function (a) {
  var c = this.Rg,
    d = Sc(a);
  if (c.$c) {
    var e = a.height - 2 * c.qm.height;
    c.wa +=
      g.g.D.moveTo(d.Xa, a.Qc) +
      c.qm.bx(c.$c) +
      g.g.D.oa("v", e) +
      c.qm.qs(c.$c) +
      g.g.D.lineTo(a.width - d.Xa - c.qm.width, 0);
  } else
    c.wa +=
      g.g.D.moveTo(d.Xa, a.Qc + a.height) +
      c.qm.qs(c.$c) +
      g.g.D.lineTo(a.width - d.Xa - c.qm.width, 0);
  g.ra.Dd.v.pv.call(this, a);
};
b.gB = function (a) {
  $c(this.Rg, a);
  this.gb += g.g.D.oa("H", a.Xa + a.width) + g.g.D.oa("V", a.Qc + a.height);
};
b.kv = function () {
  var a = this.Rg,
    c = this.Ea.Vb;
  if (a.$c) a.wa += g.g.D.oa("V", c.Rf - a.te);
  else {
    var d = a.Ea.Vb.elements[0];
    g.m.A.zo(d)
      ? (a.wa += g.g.D.moveTo(c.Xa + a.te, c.Rf - a.te))
      : g.m.A.fj(d) &&
        ((a.wa += g.g.D.moveTo(c.Xa, c.Rf)), (a.wa += a.Xw.xu()));
  }
  g.ra.Dd.v.kv.call(this);
};
b.ov = function () {
  var a = this.Rg,
    c = a.Ea.O;
  c &&
    ((c = c.Ge + c.height),
    a.$c
      ? (a.wa += g.g.D.moveTo(a.Ea.Ef, c))
      : ((a.wa += g.g.D.moveTo(a.Ea.Ef + a.te, a.Ea.Vb.Rf - a.te)),
        (a.wa += g.g.D.oa("V", c))),
    (a.wa += a.To.Po(a.$c)));
  a.$c ||
    ((c = a.Ea.Bc),
    (a.wa = g.m.A.fj(c.elements[0])
      ? a.wa + g.g.D.oa("V", a.Xw.height)
      : a.wa + g.g.D.oa("V", c.Gh + a.te)));
  g.ra.Dd.v.ov.call(this);
};
b.nv = function (a) {
  var c = this.Rg,
    d = c.te,
    e = a.Xa + a.Cg,
    f = a.Xl - a.height / 2,
    h = a.width - a.Cg,
    k = f + d;
  if (c.$c) {
    f = a.Ge - d;
    var l = a.height - (a.Ge + a.Zl) + d;
    c.uo +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.oa("v", f) +
      c.To.Af(c.$c) +
      g.g.D.oa("v", l) +
      g.g.D.oa("h", h);
  } else
    c.uo +=
      g.g.D.moveTo(a.Xa + a.width + d, k) +
      g.g.D.oa("v", a.height) +
      g.g.D.oa("h", -h) +
      g.g.D.moveTo(e, f + a.Ge) +
      c.To.Af(c.$c);
  g.ra.Dd.v.nv.call(this, a);
};
b.UC = function (a) {
  var c = a.Xl - a.height / 2;
  if (a.Sd) {
    var d = a.Xa + a.Cg + this.B.Zc;
    this.Ea.L && (d *= -1);
    ic(a.Sd, d, c + a.Ge + this.B.Zc);
  }
};
b.WC = function (a) {
  var c = Sc(a);
  if (c.Sd) {
    var d = a.Xa + a.Dj + c.yf;
    d = this.Ea.L ? -1 * d : d + this.B.Zc;
    ic(c.Sd, d, a.Qc + this.B.Zc);
  }
};
b.TC = function (a) {
  var c = Sc(a);
  if (c.Sd) {
    var d = a.Xa + a.width + this.B.Zc;
    this.Ea.L && (d *= -1);
    ic(c.Sd, d, a.Qc);
  }
};
b.VC = function () {
  var a = this.Ea.Vb;
  if (a.connection) {
    var c = a.connection,
      d = c.Xa;
    ic(c.Sd, (this.Ea.L ? -d : d) + this.B.Zc / 2, a.Rf + this.B.Zc);
  }
};
g.ra.Uy = function (a) {
  this.$l = a;
  this.OFFSET = 0.5;
  this.Kz = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.ra.Uy.prototype;
b.R = function () {
  this.oF = ad(this);
  this.$F = bd(this);
  this.Rt = this.yw();
  this.Cl = this.xw();
  this.yl = this.ww();
  this.Il = this.zw();
};
function ad(a) {
  var c = a.$l.Nb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Va(-d - a, c - d)),
    f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Va(c + a, c + a)),
    h =
      g.g.D.moveBy(d, -d) +
      g.g.D.arc("a", "0 0,0", c + a, g.g.D.Va(c - d, d + a));
  return {
    width: c + a,
    height: c,
    bx: function (k) {
      return k ? e : "";
    },
    qs: function (k) {
      return k ? f : h;
    },
  };
}
function bd(a) {
  var c = a.$l.Nb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.D.moveBy(d, d) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(c - d, -d + a)),
    f =
      g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(c, -c + a)),
    h = -d,
    k =
      g.g.D.moveBy(d, h) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(-d + a, -h - c));
  return {
    height: c,
    Tx: function (l) {
      return l ? e : f;
    },
    xu: function () {
      return k;
    },
  };
}
b.yw = function () {
  var a = this.$l.wq,
    c = this.$l.un,
    d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-0.45 * a, -2.1),
    e =
      g.g.D.oa("v", 2.5) +
      g.g.D.moveBy(0.97 * -a, 2.5) +
      g.g.D.curve("q", [g.g.D.Va(0.05 * -a, 10), g.g.D.Va(0.3 * a, 9.5)]) +
      g.g.D.moveBy(0.67 * a, -1.9) +
      g.g.D.oa("v", 2.5),
    f =
      g.g.D.oa("v", -1.5) +
      g.g.D.moveBy(-0.92 * a, -0.5) +
      g.g.D.curve("q", [g.g.D.Va(-0.19 * a, -5.5), g.g.D.Va(0, -11)]) +
      g.g.D.moveBy(0.92 * a, 1),
    h = g.g.D.moveBy(-5, c - 0.7) + g.g.D.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    Po: function (k) {
      return k ? d : f;
    },
    Af: function (k) {
      return k ? e : h;
    },
  };
};
b.xw = function () {
  return { sj: g.g.D.oa("h", this.OFFSET) + this.$l.Cl.sj };
};
b.ww = function () {
  return {
    sj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.zw = function () {
  var a = this.$l.Il.height,
    c =
      g.g.D.moveBy(25, -8.7) +
      g.g.D.curve("c", [
        g.g.D.Va(29.7, -6.2),
        g.g.D.Va(57.2, -0.5),
        g.g.D.Va(75, 8.7),
      ]),
    d =
      g.g.D.curve("c", [
        g.g.D.Va(17.8, -9.2),
        g.g.D.Va(45.3, -14.9),
        g.g.D.Va(75, -8.7),
      ]) + g.g.D.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.ra.uh = function (a, c, d) {
  this.am = d;
  this.gh = a;
  this.vp = g.g.o.P(
    g.g.G.Ld,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.gh
  );
  this.cc = g.g.o.P(g.g.G.Ld, { class: "blocklyPath" }, this.gh);
  this.$k = g.g.o.P(g.g.G.Ld, { class: "blocklyPathLight" }, this.gh);
  this.Ju = "#000000";
  this.style = c;
};
g.g.object.X(g.ra.uh, g.m.uh);
b = g.ra.uh.prototype;
b.Cx = function (a) {
  this.cc.setAttribute("d", a);
  this.vp.setAttribute("d", a);
};
b.Av = function () {
  this.cc.setAttribute("transform", "scale(-1 1)");
  this.$k.setAttribute("transform", "scale(-1 1)");
  this.vp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.nc = function (a) {
  this.$k.style.display = "";
  this.vp.style.display = "";
  this.$k.setAttribute("stroke", this.style.zg);
  this.vp.setAttribute("fill", this.Ju);
  g.ra.uh.v.nc.call(this, a);
  this.cc.setAttribute("stroke", "none");
};
b.bc = function (a) {
  this.style = a;
  this.Ju = g.g.Fb.uu("#000", this.style.Ih, 0.2) || this.Ju;
};
b.AD = function (a) {
  a
    ? (this.cc.setAttribute("filter", "url(#" + this.am.kr + ")"),
      (this.$k.style.display = "none"))
    : (this.cc.setAttribute("filter", "none"),
      (this.$k.style.display = "inline"));
};
b.CD = function (a) {
  a &&
    ((this.$k.style.display = "none"),
    this.vp.setAttribute("fill", this.style.Vq),
    this.cc.setAttribute("stroke", "none"),
    this.cc.setAttribute("fill", this.style.Vq));
};
b.Wx = function (a) {
  g.ra.uh.v.Wx.call(this, a);
  a && this.cc.setAttribute("stroke", "none");
};
g.ra.wh = function (a) {
  g.ra.wh.v.constructor.call(this, a);
  this.Le = null;
};
g.g.object.X(g.ra.wh, g.m.wh);
b = g.ra.wh.prototype;
b.R = function (a, c) {
  g.ra.wh.v.R.call(this, a, c);
  this.Le = new g.ra.Uy(this.la());
  this.Le.R();
};
b.nx = function (a, c) {
  g.ra.wh.v.nx.call(this, a, c);
  this.Le.R();
};
b.uw = function () {
  return new g.ra.mh();
};
b.pC = function (a) {
  return new g.ra.Of(this, a);
};
b.nC = function (a, c) {
  return new g.ra.Dd(a, c);
};
b.oC = function (a, c) {
  return new g.ra.uh(a, c, this.la());
};
g.m.register("geras", g.ra.wh);
var cd = {
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg:
      "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    eo: "Esperanto",
    es: "Espa\u00f1ol",
    eu: "Euskara",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fo: "F\u00f8royskt",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    ha: "Hausa",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hu: "Magyar",
    hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    ia: "Interlingua",
    id: "Bahasa Indonesia",
    ig: "As\u1ee5s\u1ee5 Igbo",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ro: "Rom\u00e2n\u0103",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    ti: "\u1275\u130d\u122d\u129b",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587",
  },
  dd = "ace ar fa he mzn ps ur".split(" "),
  ed = window.BlocklyGamesLang,
  fd = window.BlocklyGamesLanguages,
  gd = /\.html$/.test(window.location.pathname),
  R,
  hd = Number,
  id,
  jd = window.location.search.match(/[?&]level=([^&]+)/);
id = jd ? decodeURIComponent(jd[1].replace(/\+/g, "%20")) : "NaN";
var kd = hd(id);
R = isNaN(kd) ? 1 : g.g.Qa.yg(1, kd, 10);
function ld() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != dd.indexOf(ed) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", ed);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < fd.length; d++) {
      var e = fd[d];
      c.push([cd[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == ed && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!md(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(nd, 1);
}
function md(a) {
  var c = od;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function S(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function pd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function qd(a) {
  a %= 360;
  0 > a && (a += 360);
  return a;
}
function nd() {
  if (!gd) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function (d) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var c = document.createElement("script");
    c.async = 1;
    c.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(c);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
g.i.ADD_COMMENT = "Add Comment";
g.i.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.i.CHANGE_VALUE_TITLE = "Change value:";
g.i.CLEAN_UP = "Clean up Blocks";
g.i.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.i.COLLAPSE_ALL = "Collapse Blocks";
g.i.COLLAPSE_BLOCK = "Collapse Block";
g.i.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continue with next iteration of loop";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK =
  "Break out of the containing loop.";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Skip the rest of this loop, and continue with the next iteration.";
g.i.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warning: This block may only be used within a loop.";
g.i.CONTROLS_FOREACH_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#for-each";
g.i.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.i.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.i.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
g.i.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.i.CONTROLS_FOR_TOOLTIP =
  "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.i.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.i.CONTROLS_IF_ELSE_TOOLTIP =
  "Add a final, catch-all condition to the if block.";
g.i.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.i.CONTROLS_IF_IF_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this if block.";
g.i.CONTROLS_IF_MSG_ELSE = "else";
g.i.CONTROLS_IF_MSG_ELSEIF = "else if";
g.i.CONTROLS_IF_MSG_IF = "if";
g.i.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.i.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.i.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.i.CONTROLS_REPEAT_INPUT_DO = "do";
g.i.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.i.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.i.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "While a value is false, then do some statements.";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "While a value is true, then do some statements.";
g.i.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.i.DELETE_BLOCK = "Delete Block";
g.i.DELETE_VARIABLE = "Delete the '%1' variable";
g.i.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.i.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.i.DISABLE_BLOCK = "Disable Block";
g.i.DUPLICATE_BLOCK = "Duplicate";
g.i.DUPLICATE_COMMENT = "Duplicate Comment";
g.i.ENABLE_BLOCK = "Enable Block";
g.i.EXPAND_ALL = "Expand Blocks";
g.i.EXPAND_BLOCK = "Expand Block";
g.i.EXTERNAL_INPUTS = "External Inputs";
g.i.HELP = "Help";
g.i.INLINE_INPUTS = "Inline Inputs";
g.i.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.i.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.i.LISTS_CREATE_EMPTY_TOOLTIP =
  "Returns a list, of length 0, containing no data records";
g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this list block.";
g.i.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.i.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.i.LISTS_GET_INDEX_FIRST = "first";
g.i.LISTS_GET_INDEX_FROM_END = "# from end";
g.i.LISTS_GET_INDEX_FROM_START = "#";
g.i.LISTS_GET_INDEX_GET = "get";
g.i.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.i.LISTS_GET_INDEX_LAST = "last";
g.i.LISTS_GET_INDEX_RANDOM = "random";
g.i.LISTS_GET_INDEX_REMOVE = "remove";
g.i.LISTS_GET_INDEX_TAIL = "";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Removes and returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Removes and returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Removes and returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Removes and returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Removes the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.i.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.i.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.i.LISTS_GET_SUBLIST_END_LAST = "to last";
g.i.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.i.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.i.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.i.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.i.LISTS_GET_SUBLIST_TAIL = "";
g.i.LISTS_GET_SUBLIST_TOOLTIP =
  "Creates a copy of the specified portion of a list.";
g.i.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.i.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.i.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.i.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.i.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.i.LISTS_INDEX_OF_TOOLTIP =
  "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.i.LISTS_INLIST = "in list";
g.i.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
g.i.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.i.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.i.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
g.i.LISTS_LENGTH_TITLE = "length of %1";
g.i.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.i.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.i.LISTS_REPEAT_TOOLTIP =
  "Creates a list consisting of the given value repeated the specified number of times.";
g.i.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.i.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.i.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.i.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.i.LISTS_SET_INDEX_INPUT_TO = "as";
g.i.LISTS_SET_INDEX_INSERT = "insert at";
g.i.LISTS_SET_INDEX_SET = "set";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserts the item at the start of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserts the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Append the item to the end of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserts the item randomly in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Sets the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.i.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.i.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.i.LISTS_SORT_ORDER_DESCENDING = "descending";
g.i.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.i.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.i.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.i.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.i.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.i.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.i.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.i.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.i.LISTS_SPLIT_TOOLTIP_JOIN =
  "Join a list of texts into one text, separated by a delimiter.";
g.i.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Split text into a list of texts, breaking at each delimiter.";
g.i.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.i.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.i.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.i.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.i.LOGIC_COMPARE_TOOLTIP_GT =
  "Return true if the first input is greater than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_GTE =
  "Return true if the first input is greater than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LT =
  "Return true if the first input is smaller than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LTE =
  "Return true if the first input is smaller than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Return true if both inputs are not equal to each other.";
g.i.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.i.LOGIC_NEGATE_TITLE = "not %1";
g.i.LOGIC_NEGATE_TOOLTIP =
  "Returns true if the input is false. Returns false if the input is true.";
g.i.LOGIC_NULL = "null";
g.i.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.i.LOGIC_NULL_TOOLTIP = "Returns null.";
g.i.LOGIC_OPERATION_AND = "and";
g.i.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.i.LOGIC_OPERATION_OR = "or";
g.i.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.i.LOGIC_OPERATION_TOOLTIP_OR =
  "Return true if at least one of the inputs is true.";
g.i.LOGIC_TERNARY_CONDITION = "test";
g.i.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.i.LOGIC_TERNARY_IF_FALSE = "if false";
g.i.LOGIC_TERNARY_IF_TRUE = "if true";
g.i.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.i.MATH_ADDITION_SYMBOL = "+";
g.i.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.i.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Return the first number raised to the power of the second number.";
g.i.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.i.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.i.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.i.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.i.MATH_CHANGE_TITLE = "change %1 by %2";
g.i.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.i.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.i.MATH_CONSTANT_TOOLTIP =
  "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.i.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.i.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.i.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified limits (inclusive).";
g.i.MATH_DIVISION_SYMBOL = "\u00f7";
g.i.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.i.MATH_IS_EVEN = "is even";
g.i.MATH_IS_NEGATIVE = "is negative";
g.i.MATH_IS_ODD = "is odd";
g.i.MATH_IS_POSITIVE = "is positive";
g.i.MATH_IS_PRIME = "is prime";
g.i.MATH_IS_TOOLTIP =
  "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.i.MATH_IS_WHOLE = "is whole";
g.i.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.i.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.i.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.i.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.i.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.i.MATH_NUMBER_TOOLTIP = "A number.";
g.i.MATH_ONLIST_HELPURL = "";
g.i.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.i.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.i.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.i.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.i.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.i.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.i.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.i.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.i.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Return the average (arithmetic mean) of the numeric values in the list.";
g.i.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MODE =
  "Return a list of the most common item(s) in the list.";
g.i.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.i.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.i.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.i.MATH_POWER_SYMBOL = "^";
g.i.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.i.MATH_RANDOM_FLOAT_TOOLTIP =
  "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.i.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.i.MATH_RANDOM_INT_TOOLTIP =
  "Return a random integer between the two specified limits, inclusive.";
g.i.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.i.MATH_ROUND_OPERATOR_ROUND = "round";
g.i.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.i.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.i.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.i.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.i.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.i.MATH_SINGLE_OP_ROOT = "square root";
g.i.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.i.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.i.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.i.MATH_SUBTRACTION_SYMBOL = "-";
g.i.MATH_TRIG_ACOS = "acos";
g.i.MATH_TRIG_ASIN = "asin";
g.i.MATH_TRIG_ATAN = "atan";
g.i.MATH_TRIG_COS = "cos";
g.i.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.i.MATH_TRIG_SIN = "sin";
g.i.MATH_TRIG_TAN = "tan";
g.i.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.i.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.i.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.i.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.i.NEW_VARIABLE = "Create variable...";
g.i.NEW_VARIABLE_TITLE = "New variable name:";
g.i.ORDINAL_NUMBER_SUFFIX = "";
g.i.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.i.PROCEDURES_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CALLNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.i.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLRETURN_TOOLTIP =
  "Run the user-defined function '%1' and use its output.";
g.i.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CREATE_DO = "Create '%1'";
g.i.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.i.PROCEDURES_DEFNORETURN_DO = "";
g.i.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.i.PROCEDURES_DEFNORETURN_TITLE = "to";
g.i.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.i.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFRETURN_RETURN = "return";
g.i.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.i.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.i.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.i.PROCEDURES_IFRETURN_TOOLTIP =
  "If a value is true, then return a second value.";
g.i.PROCEDURES_IFRETURN_WARNING =
  "Warning: This block may be used only within a function definition.";
g.i.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.i.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.i.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "Add, remove, or reorder inputs to this function.";
g.i.REDO = "Redo";
g.i.REMOVE_COMMENT = "Remove Comment";
g.i.RENAME_VARIABLE = "Rename variable...";
g.i.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.i.UNDO = "Undo";
g.i.UNNAMED_KEY = "unnamed";
g.i.VARIABLES_DEFAULT_NAME = "item";
g.i.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.i.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
g.i.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.i.VARIABLES_SET = "set %1 to %2";
g.i.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.i.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
g.i.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.i.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.i.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.i.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.i.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.i.CONTROLS_IF_MSG_ELSEIF;
g.i.CONTROLS_IF_ELSE_TITLE_ELSE = g.i.CONTROLS_IF_MSG_ELSE;
g.i.CONTROLS_IF_IF_TITLE_IF = g.i.CONTROLS_IF_MSG_IF;
g.i.CONTROLS_IF_MSG_THEN = g.i.CONTROLS_REPEAT_INPUT_DO;
g.i.LISTS_CREATE_WITH_ITEM_TITLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.LISTS_GET_INDEX_HELPURL = g.i.LISTS_INDEX_OF_HELPURL;
g.i.LISTS_GET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_INDEX_OF_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_SET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.MATH_CHANGE_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.PROCEDURES_DEFRETURN_COMMENT = g.i.PROCEDURES_DEFNORETURN_COMMENT;
g.i.PROCEDURES_DEFRETURN_PROCEDURE = g.i.PROCEDURES_DEFNORETURN_PROCEDURE;
g.i.PROCEDURES_DEFRETURN_TITLE = g.i.PROCEDURES_DEFNORETURN_TITLE;
g.i.MATH_HUE = "230";
g.i.LOOPS_HUE = "120";
g.i.LISTS_HUE = "260";
g.i.LOGIC_HUE = "210";
g.i.VARIABLES_HUE = "330";
g.i.PROCEDURES_HUE = "290";
var BlocklyStorage = {},
  rd = null,
  sd = null,
  td = null;
function ud() {
  var a = rd();
  vd("xml=" + encodeURIComponent(a), wd);
}
var xd = {};
function vd(a, c) {
  xd["/storage"] && xd["/storage"].abort();
  xd["/storage"] = new XMLHttpRequest();
  xd["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : yd(S("Games_httpRequestError") + "\nXHR status: " + this.status);
    xd["/storage"] = null;
  };
  xd["/storage"].open("POST", "/storage");
  xd["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  xd["/storage"].send(a);
}
function wd() {
  window.location.hash = this.responseText.trim();
  yd(S("Games_linkAlert").replace("%1", window.location.href));
  td = rd();
}
function zd() {
  var a = this.responseText.trim();
  a.length
    ? sd(a)
    : yd(S("Games_hashError").replace("%1", window.location.hash));
  td = rd();
}
function yd(a) {
  if ("object" === typeof T) {
    var c = document.getElementById("linkButton");
    T.UK(c, a);
  } else alert(a);
}
var A = null,
  Ad = null,
  Bd = !1,
  Cd = "",
  Dd = "";
function Ed() {
  ld();
  var a = document.getElementById("linkButton");
  a && (gd ? (a.style.display = "none") : ((rd = Fd), (sd = Gd), pd(a, ud)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", Hd, !0);
}
function Id(a) {
  if (!gd && 1 < window.location.hash.length)
    vd("key=" + encodeURIComponent(window.location.hash.substring(1)), zd);
  else {
    var c = null;
    try {
      c = window.sessionStorage.mC;
    } catch (e) {}
    c && delete window.sessionStorage.mC;
    var d = md(R);
    (a = c || d || a) && Gd(a);
  }
}
function Gd(a) {
  Ad
    ? Ad.setValue(a, -1)
    : ((a = g.V.Ff(a)),
      A.clear(),
      g.V.ik(a, A),
      (a = A),
      (a.cl.length = 0),
      (a.Vo.length = 0),
      g.h.iH());
}
function Fd() {
  if (Bd) var a = Ad.getValue();
  else {
    a = g.V.sL();
    if (1 == A.hc(!1).length && a.querySelector) {
      var c = a.querySelector("block");
      c && (c.removeAttribute("x"), c.removeAttribute("y"));
    }
    a = g.V.qe(a);
  }
  return a;
}
function Jd() {
  "object" == typeof BlocklyStorage &&
    null !== td &&
    td != Fd() &&
    ((window.location.hash = ""), (td = null));
}
function Kd() {
  var a = { rtl: !1, trashcan: !0 },
    c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  A = g.Ak("blockly", a);
  H(A, Jd);
}
function Ld() {
  window.location = (gd ? "index.html" : "./") + "?lang=" + ed;
}
function Hd() {
  window.sessionStorage && (window.sessionStorage.mC = Fd());
  var a = document.getElementById("languageMenu");
  a = encodeURIComponent(a.options[a.selectedIndex].value);
  var c = window.location.search;
  c =
    1 >= c.length
      ? "?lang=" + a
      : /[?&]lang=[^&]*/.test(c)
      ? c.replace(/([?&]lang=)[^&]*/, "$1" + a)
      : c.replace(/\?/, "?lang=" + a + "&");
  window.location =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    c;
}
function Md() {
  10 > R
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        ed +
        "&level=" +
        (R + 1))
    : Ld();
}
function Nd(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function Od(a) {
  if (
    ("click" == a.type && "touchend" == Pd && Qd + 2e3 > Date.now()) ||
    (Pd == a.type && Qd + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  Pd = a.type;
  Qd = Date.now();
  return !1;
}
var Pd = null,
  Qd = 0;
function Rd() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function Sd() {
  setTimeout(function () {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "common/prettify.css";
    document.head.appendChild(a);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "common/prettify.js";
    document.head.appendChild(a);
  }, 1);
}
function Td() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/babel.min.js";
    document.head.appendChild(a);
  }, 1);
}
function Ud() {
  var a = window.ace;
  a.require("ace/ext/language_tools");
  Ad = a = a.edit("editor");
  a.setTheme("ace/theme/chrome");
  a.setShowPrintMargin(!1);
  a.setOptions({ enableBasicAutocompletion: !0, enableLiveAutocompletion: !0 });
  a = a.getSession();
  a.setMode("ace/mode/javascript");
  a.setTabSize(2);
  a.setUseSoftTabs(!0);
  a.on("change", Jd);
  Vd();
}
function Vd() {
  var a = Ad.getSession().getMode().$highlightRules.$keywordList;
  a
    ? a.splice(
        0,
        Infinity,
        "arguments",
        "this",
        "NaN",
        "Math",
        "JSON",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "eval",
        "String",
        "RegExp",
        "Object",
        "Number",
        "Function",
        "Date",
        "Boolean",
        "Array",
        "while",
        "var",
        "let",
        "typeof",
        "try",
        "throw",
        "switch",
        "return",
        "new",
        "instanceof",
        "of",
        "in",
        "if",
        "function",
        "for",
        "finally",
        "else",
        "do",
        "delete",
        "continue",
        "catch",
        "case",
        "break",
        "const",
        "undefined",
        "Infinity",
        "null",
        "false",
        "true"
      )
    : setTimeout(Vd, (Vd.UA *= 2));
}
Vd.UA = 1;
var T = {
  Ek: !1,
  ZA: null,
  dr: null,
  kp: function (a, c, d, e, f, h) {
    function k() {
      T.Ek &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    T.Ek && T.Vh(!1);
    g.Lg() && g.Fc(!0);
    T.Ek = !0;
    T.ZA = c;
    T.dr = h;
    var l = document.getElementById("dialog");
    h = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((h.style.visibility = "visible"),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (T.Yu = g.Rd(e, "mousedown", null, T.CH)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (T.mj(c, !1, 0.2), T.mj(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  $A: 0,
  aB: 0,
  CH: function (a) {
    T.av();
    if (!g.g.Ik(a)) {
      var c = document.getElementById("dialog");
      T.$A = c.offsetLeft - a.clientX;
      T.aB = c.offsetTop - a.clientY;
      T.$u = g.Rd(document, "mouseup", null, T.av);
      T.Zu = g.Rd(document, "mousemove", null, T.DH);
      a.stopPropagation();
    }
  },
  DH: function (a) {
    var c = document.getElementById("dialog"),
      d = T.$A + a.clientX;
    a = T.aB + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  av: function () {
    T.$u && (g.Wa(T.$u), (T.$u = null));
    T.Zu && (g.Wa(T.Zu), (T.Zu = null));
  },
  Vh: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (T.Ek) {
      T.av();
      T.Yu && (g.Wa(T.Yu), (T.Yu = null));
      T.Ek = !1;
      T.dr && T.dr();
      T.dr = null;
      var d = !1 === a ? null : T.ZA;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (T.mj(a, !1, 0.8), T.mj(d, !0, 0.2), setTimeout(c, 175)) : c();
      a.style.visibility = "hidden";
      a.style.zIndex = -1;
      for (
        (d = document.getElementById("dialogHeader")) &&
        d.parentNode.removeChild(d);
        a.firstChild;

      )
        (d = a.firstChild),
          (d.className += " dialogHiddenContent"),
          document.body.appendChild(d);
    }
  },
  mj: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = T.ZH(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  ZH: function (a) {
    var c = g.g.style.pk(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  UK: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    T.kp(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, T.Ox);
    T.Lx();
  },
  OG: function () {
    if (!md(R))
      if (T.Ek || A.Gc()) setTimeout(T.OG, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", T.Vh, !0);
        c.addEventListener("touchend", T.Vh, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", Ld, !0);
        c.addEventListener("touchend", Ld, !0);
        T.kp(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", T.jA, !0);
          }
        );
        document.body.addEventListener("keydown", T.jA, !0);
      }
  },
  mH: function () {
    var a = document.getElementById("dialogDone");
    if (A) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = Dd;
      d = Nd(d);
      var e = d.replace(/\/\/[^\n]*/g, "");
      e = e.replace(/\/\*.*\*\//g, "");
      e = e.replace(/[ \t]+\n/g, "\n");
      e = e.replace(/\n+/g, "\n");
      e = e.trim();
      e = e.split("\n").length;
      var f = document.getElementById("containerCode");
      f.textContent = d;
      "function" == typeof prettyPrintOne &&
        ((d = f.innerHTML), (d = prettyPrintOne(d, "js")), (f.innerHTML = d));
      d =
        1 == e
          ? S("Games_linesOfCode1")
          : S("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > R
        ? S("Games_nextLevel").replace("%1", String(R + 1))
        : S("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", T.Vh, !0);
    c.addEventListener("touchend", T.Vh, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", Md, !0);
    c.addEventListener("touchend", Md, !0);
    T.kp(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", T.GA, !0);
      }
    );
    document.body.addEventListener("keydown", T.GA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  YA: function (a) {
    !T.Ek ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (T.Vh(!0), a.stopPropagation(), a.preventDefault());
  },
  Lx: function () {
    document.body.addEventListener("keydown", T.YA, !0);
  },
  Ox: function () {
    document.body.removeEventListener("keydown", T.YA, !0);
  },
  GA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.Vh(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Md();
  },
  jA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      T.Vh(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Ld();
  },
};
window.BlocklyDialogs = T;
T.hideDialog = T.Vh;
g.h.If = function (a, c, d) {
  g.h.If.v.constructor.call(this, a ? a.u.id : void 0);
  this.qb = a ? a.id : null;
  this.xm = c;
  this.zu = d;
};
g.g.object.X(g.h.If, g.h.Ce);
g.h.If.prototype.type = g.h.Mp;
g.h.If.prototype.xa = function () {
  var a = g.h.If.v.xa.call(this);
  a.isOpen = this.xm;
  a.bubbleType = this.zu;
  a.blockId = this.qb;
  return a;
};
g.h.If.prototype.ka = function (a) {
  g.h.If.v.ka.call(this, a);
  this.xm = a.isOpen;
  this.zu = a.bubbleType;
  this.qb = a.blockId;
};
g.C.register(g.C.aa.ec, g.h.Mp, g.h.If);
g.le = function (a) {
  this.T = a;
  this.ae = null;
};
b = g.le.prototype;
b.CA = !0;
b.uq = 17;
b.qc = null;
b.xk = null;
function qc(a) {
  a.ae ||
    ((a.ae = g.g.o.P(g.g.G.rd, { class: "blocklyIconGroup" }, null)),
    a.T.Qb && g.g.o.Ka(a.ae, "blocklyIconGroupReadonly"),
    a.mv(a.ae),
    a.T.Oa().appendChild(a.ae),
    g.Aa(a.ae, "mouseup", a, a.Xv),
    a.ui());
}
b.I = function () {
  g.g.o.removeNode(this.ae);
  this.ae = null;
  this.Jb(!1);
  this.T = null;
};
b.ui = function () {};
b.isVisible = function () {
  return !!this.qc;
};
b.Xv = function (a) {
  this.T.u.Gc() || this.T.Qb || g.g.Ik(a) || this.Jb(!this.isVisible());
};
b.nc = function () {
  this.isVisible() && this.qc.Vc(this.T.style.Ih);
};
function Ta(a, c) {
  a.xk = c;
  a.isVisible() && ((a = a.qc), (a.zc = c), a.ux && lb(a));
}
function tc(a) {
  var c = a.T.Za(),
    d = g.g.rf(a.ae);
  c = new g.g.N(c.x + d.x + a.uq / 2, c.y + d.y + a.uq / 2);
  g.g.N.qf(a.xk, c) || Ta(a, c);
}
g.xn = function (a) {
  g.xn.v.constructor.call(this, a);
  qc(this);
  this.wp = {};
};
g.g.object.X(g.xn, g.le);
b = g.xn.prototype;
b.CA = !1;
b.mv = function (a) {
  g.g.o.P(
    g.g.G.Ld,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.P(
    g.g.G.Ld,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.P(
    g.g.G.Od,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Jb = function (a) {
  a != this.isVisible() &&
    (g.h.Ha(new g.h.If(this.T, a, "warning")), a ? this.Zq() : this.hr());
};
b.Zq = function () {
  this.Vk = g.ta.Ff(this.xd());
  this.qc = g.ta.QA(this.Vk, this.T, this.xk);
  this.nc();
};
b.hr = function () {
  this.qc.I();
  this.Vk = this.qc = null;
};
function uc(a, c, d) {
  a.wp[d] != c &&
    (c ? (a.wp[d] = c) : delete a.wp[d], a.isVisible() && (a.Jb(!1), a.Jb(!0)));
}
b.xd = function () {
  var a = [],
    c;
  for (c in this.wp) a.push(this.wp[c]);
  return a.join("\n");
};
b.I = function () {
  this.T.Ye = null;
  g.le.prototype.I.call(this);
};
g.Comment = function (a) {
  g.Comment.v.constructor.call(this, a);
  this.hd = a.Fe;
  this.hd.text = this.hd.text || "";
  this.Du = "";
  this.ds = this.$r = this.ls = this.Pe = null;
  qc(this);
};
g.g.object.X(g.Comment, g.le);
b = g.Comment.prototype;
b.mv = function (a) {
  g.g.o.P(g.g.G.Sp, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.P(
    g.g.G.Ld,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.P(
    g.g.G.Od,
    {
      class: "blocklyIconSymbol",
      x: "6.8",
      y: "10.78",
      height: "2",
      width: "2",
    },
    a
  );
};
b.Pu = function () {
  this.$n = g.g.o.P(g.g.G.WE, { x: g.ta.od, y: g.ta.od }, null);
  var a = document.createElementNS(g.g.o.Rj, "body");
  a.setAttribute("xmlns", g.g.o.Rj);
  a.className = "blocklyMinimalBody";
  var c = (this.al = document.createElementNS(g.g.o.Rj, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.T.L ? "RTL" : "LTR");
  c.value = this.hd.text;
  Wd(this);
  a.appendChild(c);
  this.$n.appendChild(a);
  this.Pe = g.Aa(c, "mouseup", this, this.QK, !0, !0);
  this.ls = g.Aa(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.$r = g.Aa(c, "change", this, function () {
    this.Du != this.hd.text &&
      g.h.Ha(new g.h.ih(this.T, "comment", null, this.Du, this.hd.text));
  });
  this.ds = g.Aa(c, "input", this, function () {
    this.hd.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.$n;
};
b.ui = function () {
  g.Comment.v.ui.call(this);
  this.isVisible() && (this.hr(), this.Zq());
};
b.vJ = function () {
  this.isVisible() && ((this.hd.size = this.qc.Ev()), Wd(this));
};
function Wd(a) {
  var c = a.hd.size,
    d = 2 * g.ta.od,
    e = c.width - d;
  c = c.height - d;
  a.$n.setAttribute("width", e);
  a.$n.setAttribute("height", c);
  a.al.style.width = e - 4 + "px";
  a.al.style.height = c - 4 + "px";
}
b.Jb = function (a) {
  a != this.isVisible() &&
    (g.h.Ha(new g.h.If(this.T, a, "comment")),
    (this.hd.hx = a) ? this.Zq() : this.hr());
};
b.Zq = function () {
  if (!this.T.ce() || g.g.userAgent.af)
    (this.Vk = g.ta.Ff(this.T.Fe.text)),
      (this.qc = g.ta.QA(this.Vk, this.T, this.xk));
  else {
    this.qc = new g.ta(
      this.T.u,
      this.Pu(),
      this.T.Rb.cc,
      this.xk,
      this.hd.size.width,
      this.hd.size.height
    );
    nb(this.qc, this.T.id);
    var a = this.vJ.bind(this);
    this.qc.wx = a;
  }
  this.nc();
};
b.hr = function () {
  this.Pe && (g.Wa(this.Pe), (this.Pe = null));
  this.ls && (g.Wa(this.ls), (this.ls = null));
  this.$r && (g.Wa(this.$r), (this.$r = null));
  this.ds && (g.Wa(this.ds), (this.ds = null));
  this.qc.I();
  this.Vk = this.$n = this.al = this.qc = null;
};
b.QK = function () {
  ob(this.qc) && this.al.focus();
  this.Du = this.hd.text;
};
b.Ev = function () {
  return this.hd.size;
};
b.ep = function (a, c) {
  this.qc
    ? this.qc.ep(a, c)
    : ((this.hd.size.width = a), (this.hd.size.height = c));
};
b.I = function () {
  this.T.Gn = null;
  g.le.prototype.I.call(this);
};
g.pd.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.gu = function (a, c, d) {
  this.Yv = a.toolboxitemid || g.g.wl.Lv();
  this.pw = (this.ei = d || null) ? this.ei.pw + 1 : 0;
  this.Ks = a;
  this.di = c;
  this.s = this.di.s;
};
b = g.gu.prototype;
b.R = function () {};
b.mo = function () {
  return null;
};
b.Na = function () {
  return this.Yv;
};
b.getParent = function () {
  return null;
};
b.Ug = function () {
  return !1;
};
b.Dk = function () {
  return !1;
};
b.I = function () {};
g.Be = function (a, c, d) {
  g.Be.v.constructor.call(this, a, c, d);
  this.nj = g.g.Re(a.name);
  this.dd = Xd(this, a);
  this.jw = this.to = this.bp = this.Se = this.Mc = null;
  this.fd = this.vw();
  g.g.object.Oe(this.fd, a.cssconfig || a.cssConfig);
  this.MI = this.fw = !1;
  this.Vi = [];
  this.PC(a);
};
g.g.object.X(g.Be, g.gu);
g.Be.vj = "category";
g.Be.pJ = 19;
g.Be.borderWidth = 8;
g.Be.vH = "#57e";
b = g.Be.prototype;
b.vw = function () {
  return {
    container: "blocklyToolboxCategory",
    row: "blocklyTreeRow",
    rowcontentcontainer: "blocklyTreeRowContentContainer",
    icon: "blocklyTreeIcon",
    label: "blocklyTreeLabel",
    contents: "blocklyToolboxContents",
    selected: "blocklyTreeSelected",
    openicon: "blocklyTreeIconOpen",
    closedicon: "blocklyTreeIconClosed",
  };
};
b.PC = function (a) {
  var c = a.contents;
  if (a.custom) this.Vi = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.Vi.push(d);
  }
};
b.R = function () {
  this.He();
  "true" == this.Ks.hidden && this.Ia();
};
b.He = function () {
  this.Mc = this.Ou();
  g.g.va.Df(this.Mc, g.g.va.Ii.BG);
  g.g.va.ld(this.Mc, g.g.va.State.Gl, !1);
  g.g.va.ld(this.Mc, g.g.va.State.xF, this.pw);
  var a = document.createElement("div");
  g.g.o.Ka(a, this.fd.row);
  var c = g.Be.pJ * this.pw;
  c = c.toString() + "px";
  this.s.L ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.Se = a;
  this.Se.style.pointerEvents = "auto";
  this.Mc.appendChild(this.Se);
  a = document.createElement("div");
  g.g.o.Ka(a, this.fd.rowcontentcontainer);
  this.bp = a;
  this.bp.style.pointerEvents = "none";
  this.Se.appendChild(this.bp);
  this.to = this.PA();
  g.g.va.Df(this.to, g.g.va.Ii.eG);
  this.bp.appendChild(this.to);
  a = this.nj;
  c = document.createElement("span");
  c.setAttribute("id", this.Na() + ".label");
  c.textContent = a;
  g.g.o.Ka(c, this.fd.label);
  this.jw = c;
  this.bp.appendChild(this.jw);
  g.g.va.ld(this.Mc, g.g.va.State.wF, this.jw.getAttribute("id"));
  Yd(this, this.dd);
  return this.Mc;
};
b.Ou = function () {
  var a = document.createElement("div");
  g.g.o.Ka(a, this.fd.container);
  return a;
};
b.PA = function () {
  var a = document.createElement("span");
  this.di.vk || g.g.o.Ka(a, this.fd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Hm = function () {
  this.dd = Xd(this, this.Ks);
  Yd(this, this.dd);
};
function Yd(a, c) {
  c &&
    ((c = g.Be.borderWidth + "px solid " + (c || "#ddd")),
    a.s.L ? (a.Se.style.borderRight = c) : (a.Se.style.borderLeft = c));
}
function Xd(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.nj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Og();
        if (d && c) {
          if ((c = c.Nq[d]) && c.Fb) {
            a = Zd(a, c.Fb);
            break a;
          }
          console.warn(
            'Style "' + d + '" must exist and contain a colour value'
          );
        }
        a = "";
      }
    else a = Zd(a, c);
    return a;
  }
  return "";
}
b.sB = function () {
  return this.Se;
};
function Zd(a, c) {
  c = g.g.Re(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.Fb.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.nj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.GI(d);
}
b.Es = function (a) {
  this.Mc.style.display = a ? "block" : "none";
  this.fw = !a;
  this.di.tb == this && ub(this.di, null);
};
b.Ia = function () {
  this.Es(!1);
};
b.show = function () {
  this.Es(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.fw))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.kk)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.Ug = function () {
  return this.isVisible() && !this.MI;
};
b.KC = function () {};
function $d(a, c) {
  if (c) {
    var d = Zd(a, g.Be.vH);
    a.Se.style.backgroundColor = a.dd || d;
    g.g.o.Ka(a.Se, a.fd.selected);
  } else (a.Se.style.backgroundColor = ""), g.g.o.Nc(a.Se, a.fd.selected);
  g.g.va.ld(a.Mc, g.g.va.State.Gl, c);
}
b.Yd = function () {
  return this.nj;
};
b.getParent = function () {
  return this.ei;
};
b.mo = function () {
  return this.Mc;
};
b.I = function () {
  g.g.o.removeNode(this.Mc);
};
g.pd.register([
  ".blocklyTreeRow:not(.blocklyTreeSelected):hover {",
  "background-color: rgba(255, 255, 255, 0.2);",
  "}",
  '.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 5px 1px 0;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 0 1px 5px;",
  "}",
  ".blocklyTreeRow {",
  "height: 22px;",
  "line-height: 22px;",
  "margin-bottom: 3px;",
  "padding-right: 8px;",
  "white-space: nowrap;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  "margin-left: 8px;",
  "padding-right: 0px",
  "}",
  ".blocklyTreeIcon {",
  "background-image: url(<<<PATH>>>/sprites.png);",
  "height: 16px;",
  "vertical-align: middle;",
  "visibility: hidden;",
  "width: 16px;",
  "}",
  ".blocklyTreeIconClosed {",
  "background-position: -32px -1px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {',
  "background-position: 0 -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosed {",
  "background-position: -32px -17px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {',
  "background-position: 0 -17px;",
  "}",
  ".blocklyTreeIconOpen {",
  "background-position: -16px -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconOpen {",
  "background-position: -16px -17px;",
  "}",
  ".blocklyTreeLabel {",
  "cursor: default;",
  "font: 16px sans-serif;",
  "padding: 0 3px;",
  "vertical-align: middle;",
  "}",
  ".blocklyToolboxDelete .blocklyTreeLabel {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyTreeSelected .blocklyTreeLabel {",
  "color: #fff;",
  "}",
]);
g.C.register(g.C.aa.Ol, g.Be.vj, g.Be);
g.tg = function (a, c) {
  g.tg.v.constructor.call(this, a, c);
  this.fd = { container: "blocklyTreeSeparator" };
  g.g.object.Oe(this.fd, a.cssconfig || a.cssConfig);
};
g.g.object.X(g.tg, g.gu);
g.tg.vj = "sep";
g.tg.prototype.R = function () {
  this.He();
};
g.tg.prototype.He = function () {
  var a = document.createElement("div");
  g.g.o.Ka(a, this.fd.container);
  return (this.Mc = a);
};
g.tg.prototype.mo = function () {
  return this.Mc;
};
g.tg.prototype.I = function () {
  g.g.o.removeNode(this.Mc);
};
g.pd.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.aa.Ol, g.tg.vj, g.tg);
g.Jf = function (a, c, d) {
  this.rp = null;
  this.kk = !1;
  this.Ls = [];
  g.Jf.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.Jf, g.Be);
g.Jf.vj = "collapsibleCategory";
b = g.Jf.prototype;
b.vw = function () {
  var a = g.Jf.v.vw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.PC = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.Vi = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.BI(e.kind) || (e.kind.toLowerCase() == g.tg.vj && d)
        ? (this.Vi.push(e), (d = !0))
        : (this.Qu(e), (d = !1));
  }
};
b.Qu = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.ya.bC(a) && (c = g.Jf.vj);
  a = new (g.C.io(g.C.aa.Ol, c))(a, this.di, this);
  this.Ls.push(a);
};
b.R = function () {
  g.Jf.v.R.call(this);
  ae(this, "true" == this.Ks.expanded || this.Ks.expanded);
};
b.He = function () {
  g.Jf.v.He.call(this);
  var a = this.Ls,
    c = document.createElement("div");
  g.g.o.Ka(c, this.fd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.R();
    c.appendChild(e.mo());
    e.sB && e.Se.setAttribute("id", e.Na());
  }
  this.rp = c;
  g.g.va.Df(this.rp, g.g.va.Ii.dF);
  this.Mc.appendChild(this.rp);
  return this.Mc;
};
b.PA = function () {
  var a = document.createElement("span");
  this.di.vk || (g.g.o.Ka(a, this.fd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function ae(a, c) {
  if (a.kk != c) {
    if ((a.kk = c)) {
      a.rp.style.display = "block";
      var d = a.to;
      d && (g.g.o.cD(d, a.fd.closedicon), g.g.o.Ka(d, a.fd.openicon));
    } else if (((a.rp.style.display = "none"), (d = a.to)))
      g.g.o.cD(d, a.fd.openicon), g.g.o.Ka(d, a.fd.closedicon);
    g.g.va.ld(a.Mc, g.g.va.State.GE, c);
    a = a.di;
    c = a.s;
    d = a.Ae.getBoundingClientRect();
    c.translate(
      a.La == g.ff ? c.scrollX + d.width : c.scrollX,
      a.La == g.$j ? c.scrollY + d.height : c.scrollY
    );
    g.Pm(c);
  }
}
b.Es = function (a) {
  this.Mc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.Ls[c]); c++) d.Es(a);
  this.fw = !a;
  this.di.tb == this && ub(this.di, null);
};
b.Dk = function () {
  return !0;
};
b.KC = function () {
  ae(this, !this.kk);
};
b.mo = function () {
  return this.Mc;
};
g.C.register(g.C.aa.Ol, g.Jf.vj, g.Jf);
g.h.Ah = function (a, c, d) {
  g.h.Ah.v.constructor.call(this, d);
  this.CC = a;
  this.xC = c;
};
g.g.object.X(g.h.Ah, g.h.Ce);
g.h.Ah.prototype.type = g.h.Rz;
g.h.Ah.prototype.xa = function () {
  var a = g.h.Ah.v.xa.call(this);
  a.oldItem = this.CC;
  a.newItem = this.xC;
  return a;
};
g.h.Ah.prototype.ka = function (a) {
  g.h.Ah.v.ka.call(this, a);
  this.CC = a.oldItem;
  this.xC = a.newItem;
};
g.C.register(g.C.aa.ec, g.h.Rz, g.h.Ah);
g.fu = function (a) {
  this.s = a;
  this.wD = a.options.Vg || { contents: [] };
  this.vk = a.options.$d;
  this.Si = this.Ae = null;
  this.Gb = [];
  this.Lc = this.vb = 0;
  this.L = a.options.L;
  this.na = null;
  this.Lu = {};
  this.La = a.options.La;
  this.tb = null;
  this.Cn = [];
};
b = g.fu.prototype;
b.R = function () {
  var a = this.s,
    c = v(a),
    d = this.s,
    e = new g.Kd({
      parentWorkspace: d,
      rtl: d.L,
      oneBasedIndex: d.options.ci,
      horizontalLayout: d.$d,
      renderer: d.options.Yo,
      rendererOverrides: d.options.Zo,
    });
  e.La = d.options.La;
  d = d.$d ? g.C.wr(g.C.aa.UE, d.options) : g.C.wr(g.C.aa.Qy, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.na = new d(e);
  this.Ae = this.He(this.s);
  g.g.o.Bk(this.na.jb("svg"), c);
  this.na.R(a);
  this.Ga(this.wD);
  a = a.Oc;
  a.subscribe(this.Ae, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.Ae, "toolboxForegroundColour", "color");
};
b.He = function (a) {
  var c = v(a);
  a = this.Ou();
  var d = document.createElement("div");
  g.g.o.Ka(d, "blocklyToolboxContents");
  this.vk && (d.style.flexDirection = "row");
  this.Si = d;
  this.Si.tabIndex = 0;
  g.g.va.Df(this.Si, g.g.va.Ii.AG);
  a.appendChild(this.Si);
  c.parentNode.insertBefore(a, c);
  c = this.Si;
  d = g.Aa(a, "click", this, this.wJ, !1, !0);
  this.Cn.push(d);
  c = g.Aa(c, "keydown", this, this.zJ, !1, !0);
  this.Cn.push(c);
  return a;
};
b.Ou = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.vk ? "h" : "v");
  g.g.o.Ka(a, "blocklyToolboxDiv");
  g.g.o.Ka(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.L ? "RTL" : "LTR");
  return a;
};
b.wJ = function (a) {
  if (g.g.Ik(a) || a.target == this.Ae) g.Fc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.Lu[a]), a.Ug() && (ub(this, a), a.KC());
    g.Fc(!0);
  }
  g.Touch.En();
};
b.zJ = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.S.rt:
      c = be(this);
      break;
    case g.g.S.ju:
      c = ce(this);
      break;
    case g.g.S.Sj:
      c = de(this);
      break;
    case g.g.S.Xj:
      c = ee(this);
      break;
    case g.g.S.bq:
    case g.g.S.Jz:
      this.tb && this.tb.Dk() && ((c = this.tb), ae(c, !c.kk), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.tb && this.tb.Lo && (c = this.tb.Lo(a));
  c && a.preventDefault();
};
b.Ga = function (a) {
  this.wD = a;
  for (var c = 0; c < this.Gb.length; c++) {
    var d = this.Gb[c];
    d && d.I();
  }
  this.Gb = [];
  this.Lu = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.Qu(e, c);
  this.Si.appendChild(c);
  this.position();
};
b.Qu = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.ya.bC(a) && (d = g.Jf.vj);
  if ((d = g.C.io(g.C.aa.Ol, d.toLowerCase())))
    (a = new d(a, this)),
      fe(this, a),
      a.R(),
      (d = a.mo()) && c.appendChild(d),
      a.sB && a.Se.setAttribute("id", a.Na());
};
function fe(a, c) {
  a.Gb.push(c);
  a.Lu[c.Na()] = c;
  if (c.Dk()) for (var d = 0, e; (e = c.Ls[d]); d++) fe(a, e);
}
b.Dq = function (a) {
  g.g.o.Ka(this.Ae, a);
};
b.us = function (a) {
  g.g.o.Nc(this.Ae, a);
};
b.im = function () {
  if (!this.Ae) return null;
  var a = this.Ae.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.La == g.g.ya.Nd.zq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.La == g.g.ya.Nd.at
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.La == g.g.ya.Nd.Sj
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Pg = function () {
  return this.vb;
};
b.fc = function () {
  return this.na;
};
b.position = function () {
  var a = this.Ae;
  a &&
    (this.vk
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Lc = a.offsetHeight),
        this.La == g.$j ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.La == g.Nl ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.vb = a.offsetWidth)),
    this.na.position());
};
b.Hm = function () {
  for (var a = 0; a < this.Gb.length; a++) {
    var c = this.Gb[a];
    c.Hm && c.Hm();
  }
};
b.Jb = function (a) {
  this.Ae.style.display = a ? "block" : "none";
};
function ub(a, c) {
  var d = a.tb;
  if ((c || d) && (!c || c.Ug())) {
    null == d ||
      (d.Dk() && d == c) ||
      null == d ||
      ((a.tb = null), $d(d, !1), g.g.va.ld(a.Si, g.g.va.State.Us, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.tb = c), $d(c, !0), g.g.va.ld(a.Si, g.g.va.State.Us, c.Na()));
    (d != c || c.Dk()) && c && c.Vi.length
      ? (a.na.show(c.Vi), a.na.Ax())
      : a.na.Ia();
    var e = d && d.Yd(),
      f = c && c.Yd();
    d == c && (f = null);
    a = new g.h.Ah(e, f, a.s.id);
    g.h.Ha(a);
  }
}
b.ic = function (a) {
  if (!this.tb) return !1;
  switch (a.name) {
    case g.navigation.Db.Md:
      return ce(this);
    case g.navigation.Db.Ot:
      return de(this);
    case g.navigation.Db.Id:
      return be(this);
    case g.navigation.Db.yt:
      return ee(this);
    default:
      return !1;
  }
};
function de(a) {
  return a.tb
    ? a.tb.Dk() && a.tb.kk
      ? (ae(a.tb, !1), !0)
      : a.tb.getParent() && a.tb.getParent().Ug()
      ? (ub(a, a.tb.getParent()), !0)
      : !1
    : !1;
}
function ee(a) {
  if (!a.tb || !a.tb.Dk()) return !1;
  var c = a.tb;
  c.kk ? be(a) : ae(c, !0);
  return !0;
}
function be(a) {
  if (!a.tb) return !1;
  var c = a.Gb.indexOf(a.tb) + 1;
  if (-1 < c && c < a.Gb.length) {
    for (var d = a.Gb[c]; d && !d.Ug(); ) d = a.Gb[++c];
    if (d && d.Ug()) return ub(a, d), !0;
  }
  return !1;
}
function ce(a) {
  if (!a.tb) return !1;
  var c = a.Gb.indexOf(a.tb) - 1;
  if (-1 < c && c < a.Gb.length) {
    for (var d = a.Gb[c]; d && !d.Ug(); ) d = a.Gb[--c];
    if (d && d.Ug()) return ub(a, d), !0;
  }
  return !1;
}
b.I = function () {
  this.na.I();
  for (var a = 0; a < this.Gb.length; a++) this.Gb[a].I();
  for (a = 0; a < this.Cn.length; a++) g.Wa(this.Cn[a]);
  this.Cn = [];
  this.Gb = [];
  this.s.Oc.unsubscribe(this.Ae);
  g.g.o.removeNode(this.Ae);
};
g.pd.register([
  ".blocklyToolboxDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxGrab {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyToolboxDiv {",
  "background-color: #ddd;",
  "overflow-x: visible;",
  "overflow-y: auto;",
  "padding: 4px 0 4px 0;",
  "position: absolute;",
  "z-index: 70;",
  "-webkit-tap-highlight-color: transparent;",
  "}",
  ".blocklyToolboxContents {",
  "display: flex;",
  "flex-wrap: wrap;",
  "flex-direction: column;",
  "}",
  ".blocklyToolboxContents:focus {",
  "outline: none;",
  "}",
]);
g.C.register(g.C.aa.xq, g.C.$p, g.fu);
g.h.Bh = function (a, c) {
  g.h.Bh.v.constructor.call(this, c);
  this.xm = a;
};
g.g.object.X(g.h.Bh, g.h.Ce);
g.h.Bh.prototype.type = g.h.Tz;
g.h.Bh.prototype.xa = function () {
  var a = g.h.Bh.v.xa.call(this);
  a.isOpen = this.xm;
  return a;
};
g.h.Bh.prototype.ka = function (a) {
  g.h.Bh.v.ka.call(this, a);
  this.xm = a.isOpen;
};
g.C.register(g.C.aa.ec, g.h.Tz, g.h.Bh);
g.bd = function (a) {
  this.s = a;
  this.Gb = [];
  this.Jg = null;
  if (!(0 >= this.s.options.Sr)) {
    a = new g.Kd({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.L,
      oneBasedIndex: this.s.options.ci,
      renderer: this.s.options.Yo,
      rendererOverrides: this.s.options.Zo,
    });
    if (this.s.$d) {
      a.La = this.s.La == g.g.ya.Nd.zq ? g.g.ya.Nd.at : g.g.ya.Nd.zq;
      if (!g.xt) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Jg = new g.xt(a);
    } else {
      a.La = this.s.La == g.g.ya.Nd.Xj ? g.g.ya.Nd.Sj : g.g.ya.Nd.Xj;
      if (!g.Dh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Jg = new g.Dh(a);
    }
    H(this.s, this.xJ.bind(this));
  }
};
b = g.bd.prototype;
b.wn = 47;
b.Lp = 44;
b.zl = 16;
b.JF = 20;
b.fz = 20;
b.nq = 10;
b.Zt = 0;
b.$t = 32;
b.eF = 0.1;
g.bd.OD = 80;
g.bd.ky = 4;
g.bd.qz = 0.4;
g.bd.WF = 0.8;
g.bd.hz = 45;
b = g.bd.prototype;
b.Ir = !1;
b.Ew = 0;
b.W = null;
b.Js = null;
b.qw = 0;
b.jj = 0;
b.kC = 0;
b.zD = 0;
b.jb = function () {
  this.W = g.g.o.P(g.g.G.rd, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.P(g.g.G.uy, { id: "blocklyTrashBodyClipPath" + a }, this.W);
  g.g.o.P(g.g.G.Od, { width: this.wn, height: this.Lp, y: this.zl }, c);
  var d = g.g.o.P(
    g.g.G.jq,
    {
      width: g.Hl.width,
      x: -this.Zt,
      height: g.Hl.height,
      y: -this.$t,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.W
  );
  d.setAttributeNS(g.g.o.Mi, "xlink:href", this.s.options.Oo + g.Hl.url);
  c = g.g.o.P(g.g.G.uy, { id: "blocklyTrashLidClipPath" + a }, this.W);
  g.g.o.P(g.g.G.Od, { width: this.wn, height: this.zl }, c);
  this.Js = g.g.o.P(
    g.g.G.jq,
    {
      width: g.Hl.width,
      x: -this.Zt,
      height: g.Hl.height,
      y: -this.$t,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.W
  );
  this.Js.setAttributeNS(g.g.o.Mi, "xlink:href", this.s.options.Oo + g.Hl.url);
  g.Rd(this.W, "mousedown", this, this.XG);
  g.Rd(this.W, "mouseup", this, this.click);
  g.Rd(d, "mouseover", this, this.gJ);
  g.Rd(d, "mouseout", this, this.eJ);
  this.ou();
  return this.W;
};
b.R = function (a) {
  0 < this.s.options.Sr &&
    (g.g.o.Bk(this.Jg.jb(g.g.G.Ji), v(this.s)), this.Jg.R(this.s));
  this.Qs = this.JF + a;
  Va(this, !1);
  return this.Qs + this.Lp + this.zl;
};
b.I = function () {
  this.W && (g.g.o.removeNode(this.W), (this.W = null));
  this.s = this.Js = null;
  clearTimeout(this.qw);
};
b.position = function () {
  if (this.Qs) {
    var a = this.s.Xd();
    a &&
      ((this.kC =
        a.La == g.ff || (this.s.$d && !this.s.L)
          ? a.Yb + a.cd - this.wn - this.fz - g.fb.kd
          : this.fz + g.fb.kd),
      (this.zD =
        a.La == g.yq ? this.Qs : a.jc + a.td - (this.Lp + this.zl) - this.Qs),
      this.W.setAttribute(
        "transform",
        "translate(" + this.kC + "," + this.zD + ")"
      ));
  }
};
b.im = function () {
  if (!this.W) return null;
  var a = this.W.getBoundingClientRect(),
    c = a.top + this.$t - this.nq;
  a = a.left + this.Zt - this.nq;
  return new g.g.Rect(
    c,
    c + this.zl + this.Lp + 2 * this.nq,
    a,
    a + this.wn + 2 * this.nq
  );
};
function Va(a, c) {
  a.Ir != c && (clearTimeout(a.qw), (a.Ir = c), a.ou());
}
b.ou = function () {
  var a = 1 / (g.bd.ky + 1);
  this.jj += this.Ir ? a : -a;
  this.jj = Math.min(Math.max(this.jj, this.Ew), 1);
  ge(this, this.jj * g.bd.hz);
  this.W.style.opacity = g.bd.qz + this.jj * (g.bd.WF - g.bd.qz);
  this.jj > this.Ew &&
    1 > this.jj &&
    (this.qw = setTimeout(this.ou.bind(this), g.bd.OD / g.bd.ky));
};
function ge(a, c) {
  var d = a.s.La == g.Nl || (a.s.$d && a.s.L);
  a.Js.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.wn - 4) + "," + (a.zl - 2) + ")"
  );
}
b.Uq = function () {
  Va(this, !1);
};
b.click = function () {
  if (this.Gb.length && !this.Jg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Gb[c]); c++) a[c] = g.V.Ff(d);
    this.Jg.show(a);
    Lc(this, !0);
  }
};
function Lc(a, c) {
  a = new g.h.Bh(c, a.s.id);
  g.h.Ha(a);
}
b.XG = function (a) {
  !this.Jg.isVisible() && this.Gb.length && a.stopPropagation();
};
b.gJ = function () {
  this.Gb.length && Va(this, !0);
};
b.eJ = function () {
  Va(this, !1);
};
b.xJ = function (a) {
  if (
    !(0 >= this.s.options.Sr) &&
    a.type == g.h.Zs &&
    a.Bm.tagName &&
    "shadow" != a.Bm.tagName.toLowerCase()
  ) {
    for (var c = (a = a.Bm.cloneNode(!0)); c; ) {
      c.removeAttribute &&
        (c.removeAttribute("x"),
        c.removeAttribute("y"),
        c.removeAttribute("id"),
        c.removeAttribute("disabled"),
        "comment" == c.nodeName &&
          (c.removeAttribute("h"),
          c.removeAttribute("w"),
          c.removeAttribute("pinned")));
      var d = c.firstChild || c.nextSibling;
      if (!d)
        for (d = c.parentNode; d; ) {
          if (d.nextSibling) {
            d = d.nextSibling;
            break;
          }
          d = d.parentNode;
        }
      c = d;
    }
    a = g.V.qe(a);
    if (-1 == this.Gb.indexOf(a)) {
      for (this.Gb.unshift(a); this.Gb.length > this.s.options.Sr; )
        this.Gb.pop();
      this.Ew = a = this.eF;
      this.Ir || ge(this, a * g.bd.hz);
    }
  }
};
g.gq = function () {
  g.gq.v.constructor.call(this);
};
g.g.object.X(g.gq, g.rl);
b = g.gq.prototype;
b.ic = function (a) {
  switch (a.name) {
    case g.navigation.Db.Md:
      return this.Bf(), !0;
    case g.navigation.Db.Id:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.next()) && I(this, a);
  return a;
};
b.Sg = function () {
  return null;
};
b.Bf = function () {
  var a = this.lb;
  if (!a) return null;
  (a = a.Bf()) && I(this, a);
  return a;
};
b.Wg = function () {
  return null;
};
g.$m = function (a) {
  a.Xd = this.zr.bind(this);
  a.hp = this.HK.bind(this);
  this.s = new g.yb(a);
  this.s.ag = !0;
  this.s.Jb(this.$h);
  this.L = !!a.L;
  this.$d = !1;
  this.Fj = a.La;
  this.wv = [];
  this.Qr = [];
  this.Dn = [];
  this.fe = [];
  this.ex = [];
  this.Qm = this.s.Lb.la().wq;
  this.cb = null;
};
b = g.$m.prototype;
b.Ul = !0;
b.$h = !1;
b.dk = !0;
b.Nb = 8;
b.Di = g.$m.prototype.Nb;
b.aF = 3 * g.$m.prototype.Di;
b.bF = 3 * g.$m.prototype.Di;
b.Xt = 2;
b.vb = 0;
b.Lc = 0;
b.NH = 70;
b.jb = function (a) {
  this.W = g.g.o.P(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.md = g.g.o.P(g.g.G.Ld, { class: "blocklyFlyoutBackground" }, this.W);
  this.W.appendChild(this.s.jb());
  this.s.Oc.subscribe(this.md, "flyoutBackgroundColour", "fill");
  this.s.Oc.subscribe(this.md, "flyoutOpacity", "fill-opacity");
  yc(this.s.Ne, new g.gq());
  return this.W;
};
b.R = function (a) {
  this.cb = a;
  this.s.cb = a;
  this.Ra = new g.fb(this.s, this.$d, !1, "blocklyFlyoutScrollbar");
  this.Ia();
  Array.prototype.push.apply(this.wv, g.Aa(this.W, "wheel", this, this.pL));
  this.Ul || ((this.nr = this.xv.bind(this)), H(this.cb, this.nr));
  Array.prototype.push.apply(
    this.wv,
    g.Aa(this.md, "mousedown", this, this.qj)
  );
  this.s.Wi = this.cb.Wi.bind(this.cb);
  this.s.Gx(this.cb.Sa);
  a = this.s;
  a.tj = new g.lu(a);
};
b.I = function () {
  this.Ia();
  g.Wa(this.wv);
  this.nr && (kb(this.cb, this.nr), (this.nr = null));
  this.Ra && (this.Ra.I(), (this.Ra = null));
  this.s &&
    (this.s.Oc.unsubscribe(this.md),
    (this.s.cb = null),
    this.s.I(),
    (this.s = null));
  this.W && (g.g.o.removeNode(this.W), (this.W = null));
  this.cb = this.md = null;
};
b.Pg = function () {
  return this.vb;
};
b.isVisible = function () {
  return this.$h;
};
b.Jb = function (a) {
  var c = a != this.isVisible();
  this.$h = a;
  c && this.Bp();
};
b.Yk = function (a) {
  var c = a != this.dk;
  this.dk = a;
  c && this.Bp();
};
b.Bp = function () {
  var a = this.dk ? this.isVisible() : !1;
  this.W.style.display = a ? "block" : "none";
  this.Ra.Yk(a);
};
b.Ia = function () {
  if (this.isVisible()) {
    this.Jb(!1);
    for (var a = 0, c; (c = this.fe[a]); a++) g.Wa(c);
    this.fe.length = 0;
    this.uj && (kb(this.s, this.uj), (this.uj = null));
  }
};
b.show = function (a) {
  this.s.Xc(!1);
  this.Ia();
  he(this);
  "string" == typeof a && (a = ie(this, a));
  this.Jb(!0);
  a = g.g.ya.NA(a);
  a = je(this, a);
  ke(this, a.qH, a.XH);
  this.fe.push(
    g.Aa(this.md, "mouseover", this, function () {
      for (var c = this.s.hc(!1), d = 0, e; (e = c[d]); d++) e.Xo();
    })
  );
  this.$d ? (this.Lc = 0) : (this.vb = 0);
  this.s.Xc(!0);
  this.mx();
  this.xv();
  this.position();
  this.uj = this.mx.bind(this);
  H(this.s, this.uj);
};
function je(a, c) {
  var d = [],
    e = [];
  a.ex.length = 0;
  for (var f = a.$d ? a.aF : a.bF, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = ie(a, k.custom);
      l = g.g.ya.NA(l);
      c.splice.apply(c, [h, 1].concat(l));
      k = c[h];
    }
    switch (k.kind.toUpperCase()) {
      case "BLOCK":
        l = k;
        var m = l;
        k = null;
        var n = m.blockxml;
        n && "string" != typeof n
          ? (k = n)
          : n && "string" == typeof n
          ? ((k = g.V.Ff(n)), (m.blockxml = k))
          : m.type &&
            ((k = g.g.xml.createElement("xml")),
            k.setAttribute("type", m.type),
            k.setAttribute("disabled", m.disabled),
            (m.blockxml = k));
        if (!k)
          throw Error(
            "Error: Invalid block definition. Block definition must have blockxml or type."
          );
        m = k;
        k = a;
        n = g.V.hk(m, k.s);
        n.isEnabled() || k.ex.push(n);
        k = n;
        l = parseInt(l.gap || m.getAttribute("gap"), 10);
        e.push(isNaN(l) ? f : l);
        d.push({ type: "block", block: k });
        break;
      case "SEP":
        l = e;
        m = f;
        k = parseInt(k.gap, 10);
        !isNaN(k) && 0 < l.length ? (l[l.length - 1] = k) : l.push(m);
        break;
      case "LABEL":
        l = le(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = le(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { qH: d, XH: e };
}
function ie(a, c) {
  c = a.s.cb.Sx[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.cb);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function le(a, c, d) {
  if (!g.ZE) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.ZE(a.s, a.cb, c, d);
}
function he(a) {
  for (var c = a.s.hc(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.I(!1, !1);
  for (d = 0; d < a.Qr.length; d++)
    if ((c = a.Qr[d])) g.K.Vx(c), g.g.o.removeNode(c);
  for (d = a.Qr.length = 0; (c = a.Dn[d]); d++) c.I();
  a.Dn.length = 0;
  a.s.tj.clear();
}
function me(a, c) {
  return function (d) {
    var e = a.cb.Wi(d);
    e && (Eb(e, c), Db(e, d, a));
  };
}
b.qj = function (a) {
  var c = this.cb.Wi(a);
  c && Db(c, a, this);
};
function vb(a, c) {
  var d = null;
  g.h.disable();
  var e = a.cb.mk();
  a.cb.Xc(!1);
  try {
    var f = a.cb;
    if (!c.Oa()) throw Error("oldBlock is not rendered.");
    var h = g.V.Fh(c, !0);
    f.Xc(!1);
    var k = g.V.hk(h, f);
    if (!k.Oa()) throw Error("block is not rendered.");
    var l = g.g.no(f.Mb),
      m = g.g.no(a.s.Mb),
      n = c.Za();
    n.scale(a.s.scale);
    var p = g.g.N.sum(m, n),
      t = g.g.N.Sn(p, l);
    t.scale(1 / f.scale);
    k.moveBy(t.x, t.y);
    d = k;
  } finally {
    g.h.enable();
  }
  g.Fc();
  c = g.$.rB(a.cb, e);
  if (g.h.isEnabled()) {
    g.h.ea(!0);
    for (e = 0; e < c.length; e++) g.h.Ha(new g.h.gf(c[e]));
    g.h.Ha(new g.h.Kf(d));
  }
  a.Ul ? a.Ia() : a.xv();
  return d;
}
b.xv = function () {
  for (var a = this.s.hc(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.ex.indexOf(d))
      for (var e = hb(this.cb, g.g.Dv(d)); d; ) d.ge(e), (d = r(d));
};
b.mx = function () {
  this.uj && kb(this.s, this.uj);
  this.s.scale = this.cb.scale;
  for (var a = 0, c = this.s.hc(!1), d = 0, e; (e = c[d]); d++) {
    var f = E(e).width;
    e.O && (f -= this.Qm);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Dn[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.Di + this.Qm;
  a *= this.s.scale;
  a += g.fb.kd;
  if (this.vb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.L) {
        f = e.Za().x;
        var h = a / this.s.scale - this.Di;
        e.O || (h -= this.Qm);
        e.moveBy(h - f, 0);
      }
      e.mB &&
        ((f = e.mB),
        (h = e),
        (e = E(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.Za()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.L ? h.x - e.width : h.x));
    }
    if (this.L)
      for (d = 0; (e = this.Dn[d]); d++)
        (c = e.gO().y),
          e.moveTo(a / this.s.scale - e.width - this.Di - this.Qm, c);
    this.cb.La != this.Fj ||
      this.Fj != g.ff ||
      this.cb.Ja ||
      this.cb.translate(this.cb.scrollX + a, this.cb.scrollY);
    this.vb = a;
    this.position();
  }
  this.uj && H(this.s, this.uj);
};
function yb(a) {
  return a.Ra ? a.Ra.isVisible() : !1;
}
b.ic = function (a) {
  return this.s.Ib().ic(a);
};
g.Dh = function (a) {
  g.Dh.v.constructor.call(this, a);
};
g.g.object.X(g.Dh, g.$m);
g.Dh.vO = "verticalFlyout";
b = g.Dh.prototype;
b.zr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.Mb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.Xt,
    d = this.Lc - 2 * this.Xt,
    e = this.vb;
  this.L || (e -= this.Xt);
  return {
    pe: a.height * this.s.scale + 2 * this.Di,
    Uf: a.width * this.s.scale + 2 * this.Di,
    ed: a.y,
    vd: a.x,
    jc: d,
    Yb: e,
    dc: -this.s.scrollY + a.y,
    Xb: -this.s.scrollX,
    td: c,
    cd: 0,
  };
};
b.HK = function (a) {
  var c = this.zr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.pe * a.y),
    this.s.translate(this.s.scrollX + c.cd, this.s.scrollY + c.td));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.cb.Xd();
    if (a) {
      this.Lc = a.jc;
      var c = this.vb - this.Nb;
      a = a.jc - 2 * this.Nb;
      var d = this.Fj == g.Nl,
        e = c + this.Nb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.Nb,
        this.Nb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.Nb : this.Nb,
        this.Nb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.Nb,
        this.Nb,
        0,
        0,
        d ? 0 : 1,
        d ? this.Nb : -this.Nb,
        this.Nb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.md.setAttribute("d", e.join(" "));
      c = (c = this.cb.Xd())
        ? this.cb.La == this.Fj
          ? c.xD
            ? this.Fj == g.ff
              ? c.xD
              : c.Yb - this.vb
            : this.Fj == g.ff
            ? 0
            : c.Yb
          : this.Fj == g.ff
          ? 0
          : c.Yb + c.cd - this.vb
        : 0;
      a = this.Lc;
      this.W.setAttribute("width", this.vb);
      this.W.setAttribute("height", a);
      "svg" == this.W.tagName
        ? g.g.o.fp(this.W, "translate(" + c + "px,0px)")
        : this.W.setAttribute("transform", "translate(" + c + ",0)");
      this.Ra &&
        ((this.Ra.Ww = new g.g.N(c, 0)),
        this.Ra.resize(),
        this.Ra.setPosition(this.Ra.position.x, this.Ra.position.y));
    }
  }
};
b.Ax = function () {
  this.Ra.set(0);
};
b.pL = function (a) {
  var c = g.g.DB(a);
  if (c.y) {
    var d = this.zr();
    c = d.dc - d.ed + c.y;
    c = Math.min(c, d.pe - d.jc);
    c = Math.max(c, 0);
    this.Ra.set(c);
    g.ca.Ia();
    g.H.tk();
  }
  a.preventDefault();
  a.stopPropagation();
};
function ke(a, c, d) {
  a.s.scale = a.cb.scale;
  for (var e = a.Di, f = a.L ? e : e + a.Qm, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = q(k, !1), m = 0, n; (n = l[m]); m++) n.Qb = !0;
      k.Ga();
      n = k.Oa();
      l = E(k);
      m = k.O ? f - a.Qm : f;
      k.moveBy(m, e);
      var p = a,
        t = k,
        y = h;
      m = g.g.o.P(
        g.g.G.Od,
        {
          "fill-opacity": 0,
          x: a.L ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Gf = t;
      g.K.Vl(m);
      p.s.Mb.insertBefore(m, t.Oa());
      t.mB = m;
      p.Qr[y] = m;
      p = a;
      p.fe.push(g.Aa(n, "mousedown", null, me(p, k)));
      p.fe.push(g.Aa(m, "mousedown", null, me(p, k)));
      p.fe.push(g.Rd(n, "mouseenter", k, k.Cq));
      p.fe.push(g.Rd(n, "mouseleave", k, k.Xo));
      p.fe.push(g.Rd(m, "mouseenter", k, k.Cq));
      p.fe.push(g.Rd(m, "mouseleave", k, k.Xo));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (p = e),
        (t = m.jb()),
        m.moveTo(n, p),
        m.show(),
        l.fe.push(g.Aa(t, "mousedown", l, l.qj)),
        l.Dn.push(m),
        (e += k.button.height + d[h]));
}
b.im = function () {
  if (!this.W) return null;
  var a = this.W.getBoundingClientRect(),
    c = a.left;
  return this.Fj == g.ff
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.aa.Qy, g.C.$p, g.Dh);
function ne(a, c, d) {
  var e = U;
  this.name = a;
  this.oD = c;
  this.OK = d || 0;
  this.Oi = e;
  this.Ua = new g.g.N();
  this.reset();
  this.Rs = e.Cd.length;
  e.Cd.push(this);
  console.log(this + " loaded.");
}
b = ne.prototype;
b.TK = !1;
b.Vf = !1;
b.mb = 0;
b.Oh = 0;
b.facing = 0;
b.speed = 0;
b.Gg = 0;
b.Ua = null;
b.kw = 0;
b.toString = function () {
  return "[" + this.name + "]";
};
b.reset = function () {
  delete this.TK;
  delete this.Vf;
  delete this.speed;
  delete this.Gg;
  delete this.kw;
  this.mb = this.OK;
  this.Ua.x = this.oD.x;
  this.Ua.y = this.oD.y;
  this.facing = this.Oh = qd(
    g.g.Qa.Rm(Math.atan2(50 - this.Ua.y, 50 - this.Ua.x))
  );
  this.$B = null;
};
b.Zv = function () {
  this.$B = new Interpreter(this.EA, this.Oi.Zv);
};
function oe(a, c) {
  a.mb += c;
  100 <= a.mb && pe(a);
}
function pe(a) {
  a.speed = 0;
  a.Vf = !0;
  a.mb = 100;
  a.Oi.qn.unshift(a);
  a.Oi.ng.push({ type: "DIE", avatar: a });
  console.log(a + " sinks.");
}
b.stop = function () {
  this.Gg = 0;
};
var U = {
  Cd: [],
  qn: [],
  ng: [],
  Bl: [],
  $E: 50,
  rG: 100,
  iG: 0.5,
  mf: null,
  SD: 1,
  kz: 3,
  iy: 5,
  fE: 5,
  ht: 3,
  RC: 0,
  mr: 0,
  Qx: 0,
  wG: 3e5,
  jv: null,
  reset: function () {
    clearTimeout(U.RC);
    U.ng.length = 0;
    U.Bl.length = 0;
    U.qn.length = 0;
    for (var a = (U.Qx = 0), c; (c = U.Cd[a]); a++) c.reset();
  },
  start: function (a) {
    U.jv = a;
    U.mr = Date.now() + U.wG;
    console.log("Starting battle with " + U.Cd.length + " avatars.");
    a = 0;
    for (var c; (c = U.Cd[a]); a++)
      try {
        c.Zv();
      } catch (d) {
        console.log(c + " fails to load: " + d), pe(c);
      }
    U.update();
  },
  update: function () {
    U.hL();
    U.iL();
    U.gL();
    U.Cd.length <= U.qn.length + 1 && (U.mr = Math.min(U.mr, Date.now() + 1e3));
    Date.now() > U.mr ? U.stop() : (U.RC = setTimeout(U.update, 1e3 / U.$E));
  },
  stop: function () {
    for (var a = [], c = 0, d; (d = U.Cd[c]); c++) d.Vf || a.push(d);
    c = a.length;
    for (
      a.sort(function (e, f) {
        return e.mb - f.mb;
      });
      a.length;

    )
      U.qn.unshift(a.pop());
    U.jv && U.jv(c);
  },
  iL: function () {
    for (var a = U.Bl.length - 1; 0 <= a; a--) {
      var c = U.Bl[a];
      c.progress += U.kz;
      var d = 0;
      if (c.ss - c.progress < U.kz / 2) {
        U.Bl.splice(a, 1);
        for (var e = 0, f; (f = U.Cd[e]); e++)
          if (!f.Vf) {
            var h = 10 * (1 - g.g.N.Tn(f.Ua, c.Vn) / 4);
            0 < h && (oe(f, h), (d = Math.max(d, h)));
          }
        U.ng.push({ type: "BOOM", damage: d, x: c.Vn.x, y: c.Vn.y });
      }
    }
  },
  gL: function () {
    for (var a = 0, c; (c = U.Cd[a]); a++)
      if (
        !c.Vf &&
        (c.speed < c.Gg
          ? (c.speed = Math.min(c.speed + U.iy, c.Gg))
          : c.speed > c.Gg && (c.speed = Math.max(c.speed - U.iy, c.Gg)),
        0 < c.speed)
      ) {
        var d = U.BA(c),
          e = d[1],
          f = g.g.Qa.Ad(c.Oh),
          h = (c.speed / 100) * U.SD,
          k = Math.cos(f) * h;
        h *= Math.sin(f);
        c.Ua.x += k;
        c.Ua.y += h;
        0 > c.Ua.x || 100 < c.Ua.x || 0 > c.Ua.y || 100 < c.Ua.y
          ? ((c.Ua.x = g.g.Qa.yg(c.Ua.x, 0, 100)),
            (c.Ua.y = g.g.Qa.yg(c.Ua.y, 0, 100)),
            (e = (c.speed / 100) * U.ht),
            oe(c, e),
            (c.speed = 0),
            (c.Gg = 0),
            U.ng.push({ type: "CRASH", avatar: c, damage: e }))
          : ((d = U.BA(c)),
            (f = d[0]),
            (d = d[1]),
            d < U.fE &&
              e > d &&
              ((c.Ua.x -= k),
              (c.Ua.y -= h),
              (e = (Math.max(c.speed, f.speed) / 100) * U.ht),
              oe(c, e),
              (c.speed = 0),
              (c.Gg = 0),
              oe(f, e),
              (f.speed = 0),
              (f.Gg = 0),
              U.ng.push(
                { type: "CRASH", avatar: c, damage: e },
                { type: "CRASH", avatar: f, damage: e }
              )));
      }
  },
  hL: function () {
    for (var a = 0; a < U.rG; a++) {
      U.Qx++;
      for (var c = 0, d; (d = U.Cd[c]); c++)
        if (!d.Vf) {
          U.mf = d;
          try {
            d.$B.step();
          } catch (e) {
            console.log(d + " throws an error: " + e), pe(d);
          }
          U.mf = null;
        }
    }
  },
  Zv: function (a, c) {
    var d = function (e) {
      console.log(U.mf.name + " logs: " + Number(e));
    };
    a.setProperty(c, "log", a.createNativeFunction(d));
    d = function (e, f) {
      var h = e;
      e = U.mf;
      var k = void 0 === f || null === f ? 5 : f;
      if ("number" != typeof h || isNaN(h) || "number" != typeof k || isNaN(k))
        throw TypeError();
      h = qd(h);
      k = g.g.Qa.yg(k, 0, 20);
      e.Oi.ng.push({ type: "SCAN", avatar: e, degree: h, resolution: k });
      f = qd(h - k / 2);
      h = qd(h + k / 2);
      f > h && (h += 360);
      k = e.Ua.x;
      for (var l = e.Ua.y, m = Infinity, n = 0, p; (p = e.Oi.Cd[n]); n++)
        if (p != e && !p.Vf) {
          var t = p.Ua.x,
            y = p.Ua.y;
          p = Math.sqrt((y - l) * (y - l) + (t - k) * (t - k));
          p >= m ||
            ((t = Math.atan2(y - l, t - k)),
            (t = qd(g.g.Qa.Rm(t))),
            t < f && (t += 360),
            f <= t && t <= h && (m = p));
        }
      return m;
    };
    a.setProperty(c, "scan", a.createNativeFunction(d));
    d = function (e, f) {
      var h = f;
      f = U.mf;
      if ("number" != typeof e || isNaN(e) || "number" != typeof h || isNaN(h))
        throw TypeError;
      var k = Date.now();
      f.kw + 1e3 * f.Oi.iG > k
        ? (e = !1)
        : ((f.kw = k),
          (k = new g.g.N(f.Ua.x, f.Ua.y)),
          (e = qd(e)),
          (f.facing = e),
          (h = g.g.Qa.yg(h, 0, 70)),
          (e = {
            VG: f,
            op: k,
            Oh: e,
            ss: h,
            Vn: new g.g.N(
              k.x + h * Math.cos(g.g.Qa.Ad(e)),
              k.y + h * Math.sin(g.g.Qa.Ad(e))
            ),
            progress: 0,
          }),
          f.Oi.Bl.push(e),
          f.Oi.ng.push({ type: "BANG", avatar: f, degree: e.Oh }),
          (e = !0));
      return e;
    };
    a.setProperty(c, "cannon", a.createNativeFunction(d));
    d = function (e, f) {
      var h = U.mf;
      f = void 0 === f || null === f ? 50 : f;
      if ("number" != typeof e || isNaN(e) || "number" != typeof f || isNaN(f))
        throw TypeError;
      h.Oh != qd(e) &&
        (50 >= h.speed ? ((h.Oh = qd(e)), (h.facing = h.Oh)) : (f = 0));
      0 == h.speed && 0 < f && (h.speed = 0.1);
      h.Gg = g.g.Qa.yg(f, 0, 100);
    };
    a.setProperty(c, "drive", a.createNativeFunction(d));
    a.setProperty(c, "swim", a.createNativeFunction(d));
    a.setProperty(
      c,
      "stop",
      a.createNativeFunction(function () {
        U.mf.stop();
      })
    );
    a.setProperty(
      c,
      "damage",
      a.createNativeFunction(function () {
        return U.mf.mb;
      })
    );
    a.setProperty(
      c,
      "health",
      a.createNativeFunction(function () {
        return 100 - U.mf.mb;
      })
    );
    a.setProperty(
      c,
      "speed",
      a.createNativeFunction(function () {
        return U.mf.speed;
      })
    );
    d = function () {
      return U.mf.Ua.x;
    };
    a.setProperty(c, "loc_x", a.createNativeFunction(d));
    a.setProperty(c, "getX", a.createNativeFunction(d));
    d = function () {
      return U.mf.Ua.y;
    };
    a.setProperty(c, "loc_y", a.createNativeFunction(d));
    a.setProperty(c, "getY", a.createNativeFunction(d));
    if ((c = a.getProperty(c, "Math")))
      (d = function (e) {
        return Math.sin(g.g.Qa.Ad(e));
      }),
        a.setProperty(c, "sin_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return Math.cos(g.g.Qa.Ad(e));
        }),
        a.setProperty(c, "cos_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return Math.tan(g.g.Qa.Ad(e));
        }),
        a.setProperty(c, "tan_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Qa.Rm(Math.asin(e));
        }),
        a.setProperty(c, "asin_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Qa.Rm(Math.acos(e));
        }),
        a.setProperty(c, "acos_deg", a.createNativeFunction(d)),
        (d = function (e) {
          return g.g.Qa.Rm(Math.atan(e));
        }),
        a.setProperty(c, "atan_deg", a.createNativeFunction(d));
  },
  BA: function (a) {
    for (var c = null, d = Infinity, e = 0, f; (f = U.Cd[e]); e++)
      if (!f.Vf && a != f) {
        var h = Math.min(d, g.g.N.Tn(a.Ua, f.Ua));
        h < d && ((d = h), (c = f));
      }
    return [c, d];
  },
};
var qe,
  re,
  se,
  te = {},
  ue = [],
  ve = new Image();
ve.src = "pond/sprites.png";
var we = ["#ff8b00", "#c90015", "#166c0b", "#223068"],
  xe = 0,
  ye = Object.create(null);
function ze() {
  qe = document.getElementById("scratch").getContext("2d");
  var a = document.getElementById("display").getContext("2d");
  re = a;
  se = a.canvas.width;
  a.globalCompositeOperation = "copy";
  Ae(["pond/whack.mp3", "pond/whack.ogg"], "whack");
  Ae(["pond/boom.mp3", "pond/boom.ogg"], "boom");
  Ae(["pond/splash.mp3", "pond/splash.ogg"], "splash");
  g.g.userAgent.oh || g.g.userAgent.Bt || Be();
}
function Ce() {
  clearTimeout(xe);
  ue.length = 0;
  var a = document.getElementById("avatarStatRow1");
  a.innerHTML = "";
  var c = document.getElementById("avatarStatRow2");
  c.innerHTML = "";
  for (
    var d = [], e = [], f = document.getElementById("avatar-select"), h = 0, k;
    (k = U.Cd[h]);
    h++
  ) {
    var l = Math.floor(h / 2) % 2 ? c : a,
      m = we[k.Rs % we.length],
      n = document.createElement("td");
    f &&
      ((n.className = "asButton"),
      n.setAttribute("role", "button"),
      n.addEventListener(
        "click",
        (function (t) {
          return function () {
            f.selectedIndex = t;
            var y = document.createEvent("HTMLEvents");
            y.initEvent("change", !1, !0);
            f.dispatchEvent(y);
          };
        })(h)
      ));
    n.style.borderColor = m;
    var p = document.createElement("div");
    p.className = "avatarStatHealth";
    p.style.background = m;
    k.oL = p;
    e[h] = p;
    n.appendChild(p);
    p = document.createElement("div");
    p.className = "avatarStatName";
    k = document.createTextNode(k.name);
    p.appendChild(k);
    d[h] = p;
    n.appendChild(p);
    p = document.createElement("div");
    k = document.createTextNode("\u00a0");
    p.appendChild(k);
    n.appendChild(p);
    l.appendChild(n);
  }
  for (h = 0; (p = d[h]); h++)
    p.style.width = p.parentNode.offsetWidth - 2 + "px";
  for (h = 0; (p = e[h]); h++)
    p.style.height = p.parentNode.offsetHeight - 2 + "px";
  De();
}
var Ee = 0,
  Fe = 0;
function Ge() {
  De();
  var a = Date.now(),
    c = Math.max(1, 1e3 / 36 - (a - Ee - Fe));
  xe = setTimeout(Ge, c);
  Ee = a;
  Fe = c;
}
function He(a) {
  return (a / 100) * (se - 35) + 17.5;
}
function De() {
  var a = qe;
  a.beginPath();
  a.rect(0, 0, a.canvas.width, a.canvas.height);
  a.fillStyle = "#527dbf";
  a.fill();
  for (var c = [], d = 0, e; (e = U.Cd[d]); d++) e.Vf && c.push(e);
  for (d = 0; (e = U.Cd[d]); d++) e.Vf || c.push(e);
  for (d = 0; (e = c[d]); d++) {
    a.save();
    var f = He(e.Ua.x),
      h = He(100 - e.Ua.y);
    a.translate(f, h);
    var k = (e.Rs % we.length) * 35;
    e.Vf && (a.globalAlpha = 0.25);
    0 < e.speed &&
      (a.save(),
      (f = 50 < e.speed ? 0 : 25 < e.speed ? 35 : 70),
      a.rotate(g.g.Qa.Ad(-e.Oh)),
      a.drawImage(ve, 455, f, 35, 35, -45.5, -17.5, 35, 35),
      a.restore());
    a.drawImage(ve, 0, k, 35, 35, -17.5, -17.5, 35, 35);
    f = g.g.Qa.Ad(e.facing);
    a.translate(12 * Math.cos(f), 12 * -Math.sin(f) - 2);
    f = ((14 - Math.round((e.facing / 360) * 12)) % 12) + 1;
    e = e.facing % 30;
    15 <= e && (e -= 30);
    e /= 1.5;
    a.rotate(g.g.Qa.Ad(-e));
    a.drawImage(ve, 35 * f, k, 35, 35, -15.5, -15.5, 35, 35);
    a.restore();
  }
  for (d = 0; (e = U.Bl[d]); d++) {
    a.save();
    h = e.progress / e.ss;
    k = (e.Vn.y - e.op.y) * -h;
    f = e.ss / 2;
    var l = 0.15 * e.ss;
    f = l - Math.pow((((e.progress - f) / Math.sqrt(l)) * l) / f, 2);
    h = He(e.op.x + (e.Vn.x - e.op.x) * h);
    l = He(100 - e.op.y + k - f);
    k = He(100 - e.op.y + k);
    a.beginPath();
    a.arc(h, k, 5 * Math.max(0, 1 - f / 10), 0, 2 * Math.PI, !0);
    a.closePath();
    a.fillStyle = "rgba(128, 128, 128, " + Math.max(0, 1 - f / 10) + ")";
    a.fill();
    a.beginPath();
    a.arc(h, l, 5, 0, 2 * Math.PI, !0);
    a.closePath();
    a.fillStyle = we[e.VG.Rs % we.length];
    a.fill();
  }
  for (d = 0; d < U.ng.length; d++)
    if (((f = U.ng[d]), (e = f.avatar), "CRASH" == f.type)) {
      if (((k = te[e.id]), !k || k + 1e3 < Date.now()))
        Ie("whack", f.damage / U.ht), (te[e.id] = Date.now());
    } else
      "SCAN" == f.type
        ? ((h = Math.max(f.resolution / 2, 0.5)),
          (k = -g.g.Qa.Ad(f.degree + h)),
          (l = -g.g.Qa.Ad(f.degree - h)),
          a.beginPath(),
          (f = He(e.Ua.x)),
          (h = He(100 - e.Ua.y)),
          a.moveTo(f, h),
          a.lineTo(f + 200 * Math.cos(k), h + 200 * Math.sin(k)),
          a.arc(f, h, 200, k, l),
          a.lineTo(f, h),
          (e = a.createRadialGradient(f, h, 17.5, f, h, 200)),
          e.addColorStop(0, "rgba(255, 255, 255, 0.3)"),
          e.addColorStop(1, "rgba(255, 255, 255, 0)"),
          (a.fillStyle = e),
          a.fill())
        : "BANG" != f.type &&
          ("BOOM" == f.type
            ? (f.damage && Ie("boom", f.damage / 10),
              ue.push({ x: f.x, y: f.y, t: 0 }))
            : "DIE" == f.type && Ie("splash"));
  U.ng.length = 0;
  for (d = ue.length - 1; 0 <= d; d--)
    (e = ue[d]),
      (f = He(e.x)),
      (h = He(100 - e.y)),
      a.beginPath(),
      a.arc(f, h, e.t + 1, 0, 2 * Math.PI, !0),
      a.closePath(),
      (a.lineWidth = 5),
      (a.strokeStyle = "rgba(255, 255, 255, " + (1 - e.t / 10) + ")"),
      a.stroke(),
      (e.t += 2),
      10 < e.t && ue.splice(d, 1);
  re.drawImage(a.canvas, 0, 0);
  for (d = 0; (e = c[d]); d++)
    (a = e.oL),
      (a.parentNode.title = e.name + ": " + Math.round(100 - e.mb) + "%"),
      (a.style.width =
        Math.max(0, a.parentNode.offsetWidth * (1 - e.mb / 100) - 2) + "px");
}
function Ae(a, c) {
  if (window.Audio && a.length) {
    for (var d, e = new window.Audio(), f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && e.canPlayType("audio/" + k[1])) {
        d = new window.Audio(h);
        break;
      }
    }
    d && d.play && (ye[c] = d);
  }
}
function Be() {
  for (var a in ye) {
    var c = ye[a];
    c.volume = 0.01;
    c.play().catch(function () {});
    c.pause();
  }
}
function Ie(a, c) {
  a = ye[a];
  a = g.g.userAgent.oh || g.g.userAgent.Jj ? a : a.cloneNode();
  a.volume = void 0 === c ? 1 : c;
  a.play();
}
var Le = null,
  Me = null,
  Ne = !1;
function Oe() {
  if (!Ne) {
    var a = document.getElementById("docsButton"),
      c = document.getElementById("dialogDocs"),
      d = document.getElementById("frameDocs"),
      e = "pond/docs.html?lang=" + ed + "&mode=" + R;
    d.src != e && (d.src = e);
    Ne = !0;
    T.mj(a, !1, 0.2);
    T.mj(c, !0, 0.8);
    setTimeout(function () {
      c.style.visibility = "visible";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }, 175);
  }
}
function Pe() {
  if (Ne) {
    var a = document.getElementById("docsButton"),
      c = document.getElementById("dialogDocs");
    Ne = !1;
    T.mj(c, !1, 0.8);
    T.mj(a, !0, 0.2);
    setTimeout(function () {
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }, 175);
    c.style.visibility = "hidden";
  }
}
function Qe(a) {
  if (!Od(a)) {
    if ((a = Me)) {
      Fd();
      var c = Bd ? Ad.getValue() : Re();
      if (Bd)
        try {
          var d =
            "object" == typeof Babel
              ? Babel.transform(c, { presets: ["es2015"] }).code
              : void 0;
          c = d || c;
        } catch (e) {
          alert(e);
        }
      a.EA = c;
    }
    d = document.getElementById("runButton");
    a = document.getElementById("resetButton");
    a.style.minWidth || (a.style.minWidth = d.offsetWidth + "px");
    d.style.display = "none";
    a.style.display = "inline";
    Se();
  }
}
function Te(a) {
  Od(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    U.reset(),
    Ce());
}
function Se() {
  "Interpreter" in window
    ? (U.reset(), Ce(), U.start(Le), Ge())
    : setTimeout(Se, 250);
}
function Ue() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  T.kp(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, T.Ox);
  T.Lx();
}
g.eb = function (a, c, d) {
  "function" != typeof a && g.eb.ED(a);
  this.Ok = a;
  this.Px = this.jx = this.vr = null;
  a = this.Ok;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.Re(h))
        : (null != h.alt && (a[f][0].alt = g.g.Re(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.ub.Hx(e);
      h = g.g.ub.jH(e, f);
      var k = g.g.ub.kH(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.jx = e[0].substring(0, h - 1)),
        k && (this.Px = e[0].substr(1 - k)),
        (this.Ok = g.eb.TG(a, h, k)));
    }
  }
  this.Jm = this.getOptions(!1)[0];
  g.eb.v.constructor.call(this, this.Jm[1], c, d);
  this.Om = this.hf = this.Wh = this.Tc = this.cp = null;
};
g.g.object.X(g.eb, g.ze);
g.eb.ka = function (a) {
  return new g.eb(a.options, void 0, a);
};
g.eb.prototype.Zj = !0;
g.eb.CL = 25;
g.eb.AM = 0.45;
g.eb.lF = 5;
g.eb.mF = 2 * g.eb.lF;
g.eb.ny = g.g.userAgent.Jj ? "\u25bc" : "\u25be";
b = g.eb.prototype;
b.nt = "default";
b.cj = function () {
  this.Ix() ? Hb(this) : (this.Hu = this.J.Oa());
  Ib(this);
  this.Wh = g.g.o.P(g.g.G.jq, {}, this.Je);
  this.la().QE
    ? ((this.Om = g.g.o.P(
        g.g.G.jq,
        { height: this.la().Ym + "px", width: this.la().Ym + "px" },
        this.Je
      )),
      this.Om.setAttributeNS(g.g.o.Mi, "xlink:href", this.la().RE))
    : ((this.hf = g.g.o.P(g.g.G.du, {}, this.Ac)),
      this.hf.appendChild(
        document.createTextNode(this.J.L ? g.eb.ny + " " : " " + g.eb.ny)
      ),
      this.J.L
        ? this.Ac.insertBefore(this.hf, this.ni)
        : this.Ac.appendChild(this.hf));
  this.pc && g.g.o.Ka(this.pc, "blocklyDropdownRect");
};
b.Ix = function () {
  return !this.la().ut || (this.la().ut && !this.J.Pa);
};
b.dg = function (a) {
  this.Tc = this.tv();
  this.Tc.Vw =
    a && "number" === typeof a.clientX ? new g.g.N(a.clientX, a.clientY) : null;
  this.Tc.Ga(g.H.uB());
  g.g.o.Ka(this.Tc.Hb, "blocklyDropdownMenu");
  if (this.la().PE) {
    a = this.J.Pa ? this.J.getParent().Gv() : this.J.Gv();
    var c = this.J.Pa ? this.J.getParent().style.zg : this.J.style.zg;
    g.H.Vc(a, c);
  }
  g.H.jD(this, this.uv.bind(this));
  this.Tc.focus();
  this.cp && this.Tc.ki(this.cp);
  this.nc();
};
b.tv = function () {
  var a = new g.Gt();
  a.Df(g.g.va.Ii.zF);
  var c = this.getOptions(!1);
  this.cp = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.Ht(e, f);
    e.Df(g.g.va.Ii.XF);
    e.zx = this.J.L;
    e.Fu = !0;
    a.wf.push(e);
    e.Gu = f == this.Cc;
    f == this.Cc && (this.cp = e);
    bc(e, this.vI, this);
  }
  return a;
};
b.uv = function () {
  this.Tc && this.Tc.I();
  this.cp = this.Tc = null;
  this.nc();
};
b.vI = function (a) {
  g.H.pm(this, !0);
  this.LC(a);
};
b.LC = function (a) {
  this.setValue(a.getValue());
};
g.eb.TG = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.eb.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Ok
    ? ((this.vr && a) || ((this.vr = this.Ok.call(this)), g.eb.ED(this.vr)),
      this.vr)
    : this.Ok;
};
b.Ti = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.J &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.J.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Qh = function (a) {
  g.eb.v.Qh.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.Cc && (this.Jm = d);
};
b.nc = function () {
  this.pc &&
    (this.pc.setAttribute("stroke", this.J.style.zg),
    this.Tc
      ? this.pc.setAttribute("fill", this.J.style.zg)
      : this.pc.setAttribute("fill", "transparent"));
  this.J &&
    this.hf &&
    (this.hf.style.fill = this.J.Pa ? this.J.style.Vq : this.J.style.Ih);
};
b.yj = function () {
  this.ni.nodeValue = "";
  this.Wh.style.display = "none";
  var a = this.Jm && this.Jm[0];
  if (a && "object" == typeof a) {
    this.Wh.style.display = "";
    this.Wh.setAttributeNS(g.g.o.Mi, "xlink:href", a.src);
    this.Wh.setAttribute("height", a.height);
    this.Wh.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.pc,
      e = Math.max(d ? this.la().My : 0, c + g.eb.mF);
    d = d ? this.la().ul : 0;
    var f = this.Om
      ? Ve(this, a + d, e / 2 - this.la().Ym / 2)
      : g.g.o.Iv(this.hf, this.la().Ai, this.la().Bi, this.la().zi);
    this.je.width = a + f + 2 * d;
    this.je.height = e;
    var h = 0;
    this.J.L
      ? this.Wh.setAttribute("x", d + f)
      : ((h = a + f),
        this.Ac.setAttribute("text-anchor", "end"),
        this.Wh.setAttribute("x", d));
    this.Wh.setAttribute("y", e / 2 - c / 2);
    Lb(this, h + d, a + f);
  } else
    (this.ni.nodeValue = this.xr()),
      g.g.o.Ka(this.Ac, "blocklyDropdownText"),
      this.Ac.setAttribute("text-anchor", "start"),
      (e = !!this.pc),
      (c = Math.max(e ? this.la().My : 0, this.la().fq)),
      (a = g.g.o.Iv(this.Ac, this.la().Ai, this.la().Bi, this.la().zi)),
      (e = e ? this.la().ul : 0),
      (d = 0),
      this.Om && (d = Ve(this, a + e, c / 2 - this.la().Ym / 2)),
      (this.je.width = a + d + 2 * e),
      (this.je.height = c),
      Lb(this, e, a);
  Mb(this);
};
function Ve(a, c, d) {
  if (!a.Om) return 0;
  var e = a.pc ? a.la().ul : 0,
    f = a.la().SE,
    h = a.la().Ym;
  a.Om.setAttribute(
    "transform",
    "translate(" + (a.J.L ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.Pv = function () {
  if (!this.Jm) return null;
  var a = this.Jm[0];
  return "object" == typeof a ? a.alt : a;
};
g.eb.ED = function (a) {
  if (!Array.isArray(a))
    throw TypeError("FieldDropdown options must be an array.");
  if (!a.length)
    throw TypeError("FieldDropdown options must not be an empty array.");
  for (var c = !1, d = 0; d < a.length; ++d) {
    var e = a[d];
    Array.isArray(e)
      ? "string" != typeof e[1]
        ? ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option id must be a string. Found " +
              e[1] +
              " in: ",
            e
          ))
        : e[0] &&
          "string" != typeof e[0] &&
          "string" != typeof e[0].src &&
          ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option must have a string label or image description. Found" +
              e[0] +
              " in: ",
            e
          ))
      : ((c = !0),
        console.error(
          "Invalid option[" +
            d +
            "]: Each FieldDropdown option must be an array. Found: ",
          e
        ));
  }
  if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.eb.prototype.ic = function (a) {
  if (this.Tc)
    switch (a.name) {
      case g.navigation.Db.Md:
        return $b(this.Tc), !0;
      case g.navigation.Db.Id:
        return (a = this.Tc), ac(a, a.wf.indexOf(a.aj), 1), !0;
      default:
        return !1;
    }
  return g.eb.v.ic.call(this, a);
};
g.Xf.register("field_dropdown", g.eb);
g.Ic = function (a, c, d) {
  this.np = !0;
  g.Ic.v.constructor.call(this, a, c, d);
  this.hs = this.gs = this.yd = null;
  this.rr = !1;
  this.s = null;
};
g.g.object.X(g.Ic, g.ze);
g.Ic.prototype.tl = "";
g.Ic.ka = function (a) {
  var c = g.g.Re(a.text);
  return new g.Ic(c, void 0, a);
};
g.Ic.prototype.Zj = !0;
g.Ic.WD = 4;
b = g.Ic.prototype;
b.nt = "text";
b.oe = function (a) {
  g.Ic.v.oe.call(this, a);
  "boolean" == typeof a.spellcheck && (this.np = a.spellcheck);
};
b.cj = function () {
  if (this.la().Sy) {
    for (var a = 0, c = 0, d = 0, e; (e = this.J.U[d]); d++) {
      for (var f = 0; e.kb[f]; f++) a++;
      e.connection && c++;
    }
    this.rr = 1 >= a && this.J.O && !c;
  } else this.rr = !1;
  this.rr ? (this.Hu = this.J.Oa()) : Hb(this);
  Ib(this);
};
b.Ti = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.eB = function () {
  if (this.rm) {
    this.hw = !1;
    var a = this.Cc;
    this.Cc = this.yd.fL;
    this.J &&
      g.h.isEnabled() &&
      g.h.Ha(new g.h.ih(this.J, "field", this.name || null, a, this.Cc));
  }
};
b.Qh = function (a) {
  this.hw = !0;
  this.Cc = a;
  this.rm || (this.Yh = !0);
};
b.nc = function () {
  this.J &&
    this.la().Sy &&
    (this.pc
      ? this.pc.setAttribute("stroke", this.J.style.zg)
      : this.J.Rb.cc.setAttribute("fill", this.la().Ky));
};
b.yj = function () {
  g.Ic.v.yj.call(this);
  if (this.rm) {
    We(this);
    var a = this.yd;
    this.hw
      ? (g.g.o.Nc(a, "blocklyInvalidInput"), g.g.va.ld(a, g.g.va.State.$y, !1))
      : (g.g.o.Ka(a, "blocklyInvalidInput"), g.g.va.ld(a, g.g.va.State.$y, !0));
  }
};
function Xe(a) {
  0 != a.np && ((a.np = !1), a.yd && a.yd.setAttribute("spellcheck", a.np));
}
b.dg = function (a, c) {
  this.s = this.J.u;
  a = c || !1;
  !a && (g.g.userAgent.lz || g.g.userAgent.Jj || g.g.userAgent.oh)
    ? Ye(this)
    : (g.ca.show(this, this.J.L, this.qL.bind(this)),
      (this.yd = this.ay()),
      (this.rm = !0),
      a || (this.yd.focus({ preventScroll: !0 }), this.yd.select()));
};
function Ye(a) {
  g.prompt(
    g.i.CHANGE_VALUE_TITLE,
    a.xd(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.ay = function () {
  var a = g.ca.ob;
  g.g.o.Ka(Gb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.np);
  var d = Jc(this.s),
    e = this.la().Ai * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Ic.WD * d + "px";
  if (this.rr) {
    e = ca(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.J.getParent() ? this.J.getParent().style.zg : this.J.style.zg;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.la().TE &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.Cc);
  c.fL = this.Cc;
  c.IC = null;
  We(this);
  this.gs = g.Aa(c, "keydown", this, this.Rw);
  this.hs = g.Aa(c, "input", this, this.yJ);
  return c;
};
b.qL = function () {
  this.rm = !1;
  this.hw = !0;
  Nb(this);
  this.Qw && this.Qw(this.Cc);
  this.gs && (g.Wa(this.gs), (this.gs = null));
  this.hs && (g.Wa(this.hs), (this.hs = null));
  var a = g.ca.ob.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.yd = null;
  g.g.o.Nc(Gb(this), "editing");
};
b.Rw = function (a) {
  if (a.keyCode == g.g.S.bq) g.ca.Ia(), g.H.tk();
  else if (a.keyCode == g.g.S.st)
    (this.yd.value = this.yd.defaultValue), g.ca.Ia(), g.H.tk();
  else if (a.keyCode == g.g.S.uG) {
    g.ca.Ia();
    g.H.tk();
    var c = this.J,
      d = !a.shiftKey,
      e = new g.Aq();
    I(e, g.F.bm(this));
    var f = e.lb;
    e.ic({ name: d ? g.navigation.Db.Id : g.navigation.Db.Md });
    (d = e.lb) &&
      d !== f &&
      ((f = d.Fa), Ga(f) && f.dg(void 0), c.u.zb && I(c.u.Ib(), d));
    a.preventDefault();
  }
};
b.yJ = function () {
  var a = this.yd.value;
  a !== this.yd.IC &&
    ((this.yd.IC = a),
    g.h.ea(!0),
    this.setValue(a),
    Nb(this),
    We(this),
    g.h.ea(!1));
};
function We(a) {
  var c = g.ca.ob,
    d = ca(a);
  c.style.width = d.right - d.left + "px";
  c.style.height = d.bottom - d.top + "px";
  a = new g.g.N(a.J.L ? d.right - c.offsetWidth : d.left, d.top);
  c.style.left = a.x + "px";
  c.style.top = a.y + "px";
}
b.gC = function () {
  return !0;
};
b.Pv = function () {
  return this.rm && this.yd ? this.yd.value : null;
};
g.Xf.register("field_input", g.Ic);
g.Ed = function (a, c, d, e, f, h) {
  this.Io = -Infinity;
  this.Go = Infinity;
  this.Em = 0;
  this.Uu = null;
  g.Ed.v.constructor.call(this, a, f, h);
  h || (Ze(this, c), $e(this, d), af(this, e), this.setValue(this.getValue()));
};
g.g.object.X(g.Ed, g.Ic);
g.Ed.prototype.tl = 0;
g.Ed.ka = function (a) {
  return new g.Ed(a.value, void 0, void 0, void 0, void 0, a);
};
g.Ed.prototype.Zj = !0;
g.Ed.prototype.oe = function (a) {
  g.Ed.v.oe.call(this, a);
  Ze(this, a.min);
  $e(this, a.max);
  af(this, a.precision);
};
function Ze(a, c) {
  null == c ? (a.Io = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Io = c));
}
function $e(a, c) {
  null == c ? (a.Go = Infinity) : ((c = Number(c)), isNaN(c) || (a.Go = c));
}
function af(a, c) {
  null == c ? (a.Em = 0) : ((c = Number(c)), isNaN(c) || (a.Em = c));
  var d = a.Em.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.Uu = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.Ed.prototype.Ti = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Io), this.Go);
  this.Em && isFinite(a) && (a = Math.round(a / this.Em) * this.Em);
  null != this.Uu && (a = Number(a.toFixed(this.Uu)));
  return a;
};
g.Ed.prototype.ay = function () {
  var a = g.Ed.v.ay.call(this);
  -Infinity < this.Io && g.g.va.ld(a, g.g.va.State.EG, this.Io);
  Infinity > this.Go && g.g.va.ld(a, g.g.va.State.DG, this.Go);
  return a;
};
g.Xf.register("field_number", g.Ed);
g.Fd = function (a, c, d, e, f) {
  this.Ok = g.Fd.PH;
  this.yH = "string" === typeof a ? a : "";
  this.je = new g.g.ef(0, 0);
  f && this.oe(f);
  c && (this.dl = c);
  f || bf(this, d, e);
};
g.g.object.X(g.Fd, g.eb);
g.Fd.ka = function (a) {
  var c = g.g.Re(a.variable);
  return new g.Fd(c, void 0, void 0, void 0, a);
};
b = g.Fd.prototype;
b.Zj = !0;
b.oe = function (a) {
  g.Fd.v.oe.call(this, a);
  bf(this, a.variableTypes, a.defaultType);
};
b.zk = function () {
  if (!this.xe) {
    var a = g.$.Ar(this.J.u, null, this.yH, this.xH);
    this.Qh(a.Na());
  }
};
b.Ix = function () {
  return (
    g.Fd.v.Ix.call(this) && (!this.la().ut || "variables_get" != this.J.type)
  );
};
b.ao = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.$.Ar(this.J.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.Na() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.V.qe(a) +
        "."
    );
  this.setValue(c.Na());
};
b.tD = function (a) {
  this.zk();
  a.id = this.xe.Na();
  a.textContent = this.xe.name;
  this.xe.type && a.setAttribute("variabletype", this.xe.type);
  return a;
};
b.Fx = function (a) {
  if (a.Pa)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Fd.v.Fx.call(this, a);
};
b.getValue = function () {
  return this.xe ? this.xe.Na() : null;
};
b.xd = function () {
  return this.xe ? this.xe.name : "";
};
b.gd = function () {
  return this.xe;
};
b.KB = function () {
  return this.xe ? this.dl : null;
};
b.Ti = function (a) {
  if (null === a) return null;
  var c = g.$.gd(this.J.u, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = cf(this))) {
    for (var e = 0; e < d.length; e++)
      if (c == d[e]) {
        d = !0;
        break a;
      }
    d = !1;
  } else d = !0;
  return d
    ? a
    : (console.warn("Variable type doesn't match this field!  Type was " + c),
      null);
};
b.Qh = function (a) {
  this.xe = g.$.gd(this.J.u, a);
  g.Fd.v.Qh.call(this, a);
};
function cf(a) {
  var c = a.lL;
  if (null === c && a.J && a.J.u) return a.J.u.Qv();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.xd()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function bf(a, c, d) {
  d = d || "";
  if (null == c || void 0 == c) c = null;
  else if (Array.isArray(c)) {
    for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
    if (!e)
      throw Error(
        "Invalid default type '" + d + "' in the definition of a FieldVariable"
      );
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    );
  a.xH = d;
  a.lL = c;
}
g.Fd.PH = function () {
  if (!this.xe)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.xd(),
    c = [];
  if (this.J && this.J.u)
    for (var d = cf(this), e = 0; e < d.length; e++)
      c = c.concat(this.J.u.oo(d[e]));
  c.sort(g.vn.DA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Na()];
  d.push([g.i.RENAME_VARIABLE, g.Ez]);
  g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.Gy]);
  return d;
};
g.Fd.prototype.LC = function (a) {
  a = a.getValue();
  if (this.J && this.J.u) {
    if (a == g.Ez) {
      g.$.ys(this.J.u, this.xe);
      return;
    }
    if (a == g.Gy) {
      this.J.u.Ph(this.xe.Na());
      return;
    }
  }
  this.setValue(a);
};
g.Fd.prototype.Wo = function () {
  return !0;
};
g.Xf.register("field_variable", g.Fd);
g.M.Qa = {};
g.ua = {};
g.ua.Math = {};
g.ua.Math.iq = 230;
g.fm([
  {
    type: "math_number",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_single",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_trig",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_TRIG_SIN}", "SIN"],
          ["%{BKY_MATH_TRIG_COS}", "COS"],
          ["%{BKY_MATH_TRIG_TAN}", "TAN"],
          ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
          ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
          ["%{BKY_MATH_TRIG_ATAN}", "ATAN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_constant",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
          ["\u03c0", "PI"],
          ["e", "E"],
          ["\u03c6", "GOLDEN_RATIO"],
          ["sqrt(2)", "SQRT2"],
          ["sqrt(\u00bd)", "SQRT1_2"],
          ["\u221e", "INFINITY"],
        ],
      },
    ],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}",
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      { type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_PRIME}", "PRIME"],
          ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"],
        ],
      },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator",
  },
  {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}",
      },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"],
  },
  {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
  },
  {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
          ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
          ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"],
        ],
      },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [
      { type: "input_value", name: "DIVIDEND", check: "Number" },
      { type: "input_value", name: "DIVISOR", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
  },
  {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "Number" },
      { type: "input_value", name: "LOW", check: "Number" },
      { type: "input_value", name: "HIGH", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}",
  },
  {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}",
  },
  {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}",
  },
  {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [
      { type: "input_value", name: "X", check: "Number" },
      { type: "input_value", name: "Y", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}",
  },
]);
g.ua.Math.bu = {
  ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
  MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
  MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
  DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
  POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
  ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
  ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
  NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
  LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
  LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
  EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
  POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
  SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
  COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
  TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
  ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
  ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
  ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
  SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
  MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
  MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
  AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
  MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
  MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
  STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
  RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}",
};
g.ga.register("math_op_tooltip", g.ga.Jq("OP", g.ua.Math.bu));
g.ua.Math.pF = {
  sb: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == D(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Wb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.Yc(a);
  },
  Yc: function (a) {
    var c = z(this, "DIVISOR");
    a ? c || M(this, "DIVISOR").Sb("Number") : c && this.Ab("DIVISOR");
  },
};
g.ua.Math.qF = function () {
  Jb(w(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.Y().Yc(a);
  });
};
g.ga.px("math_is_divisibleby_mutator", g.ua.Math.pF, g.ua.Math.qF);
g.ga.register("math_change_tooltip", g.ga.Au("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ua.Math.BF = {
  Ep: function (a) {
    "MODE" == a ? this.O.Sb("Array") : this.O.Sb("Number");
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", D(this, "OP"));
    return a;
  },
  Wb: function (a) {
    this.Ep(a.getAttribute("op"));
  },
};
g.ua.Math.AF = function () {
  Jb(
    w(this, "OP"),
    function (a) {
      this.Ep(a);
    }.bind(this)
  );
};
g.ga.px("math_modes_of_list_mutator", g.ua.Math.BF, g.ua.Math.AF);
g.qa = function (a, c, d) {
  this.Fn = g.qa.cE;
  this.Tk = g.qa.OFFSET;
  this.KD = g.qa.HG;
  this.ap = g.qa.lG;
  g.qa.v.constructor.call(this, a, c, d);
  this.Xr = this.Rq = this.Sq = this.Or = this.bo = null;
};
g.g.object.X(g.qa, g.Ic);
g.qa.prototype.tl = 0;
g.qa.ka = function (a) {
  return new g.qa(a.angle, void 0, a);
};
g.qa.prototype.Zj = !0;
g.qa.lG = 15;
g.qa.Jc = 50;
g.qa.cE = !1;
g.qa.OFFSET = 0;
g.qa.HG = 360;
g.qa.vh = g.qa.Jc - 1;
b = g.qa.prototype;
b.oe = function (a) {
  g.qa.v.oe.call(this, a);
  switch (a.mode) {
    case "compass":
      this.Fn = !0;
      this.Tk = 90;
      break;
    case "protractor":
      (this.Fn = !1), (this.Tk = 0);
  }
  var c = a.clockwise;
  "boolean" == typeof c && (this.Fn = c);
  c = a.offset;
  null != c && ((c = Number(c)), isNaN(c) || (this.Tk = c));
  c = a.wrap;
  null != c && ((c = Number(c)), isNaN(c) || (this.KD = c));
  a = a.round;
  null != a && ((a = Number(a)), isNaN(a) || (this.ap = a));
};
b.cj = function () {
  g.qa.v.cj.call(this);
  this.qD = g.g.o.P(g.g.G.du, {}, null);
  this.qD.appendChild(document.createTextNode("\u00b0"));
  this.Ac.appendChild(this.qD);
};
b.yj = function () {
  g.qa.v.yj.call(this);
  df(this);
};
b.dg = function (a) {
  g.qa.v.dg.call(
    this,
    a,
    g.g.userAgent.lz || g.g.userAgent.Jj || g.g.userAgent.oh
  );
  a = this.tv();
  g.H.uB().appendChild(a);
  g.H.Vc(this.J.style.Ih, this.J.style.zg);
  g.H.jD(this, this.uv.bind(this));
  df(this);
};
b.tv = function () {
  var a = g.g.o.P(
      g.g.G.Ji,
      {
        xmlns: g.g.o.sn,
        "xmlns:html": g.g.o.Rj,
        "xmlns:xlink": g.g.o.Mi,
        version: "1.1",
        height: 2 * g.qa.Jc + "px",
        width: 2 * g.qa.Jc + "px",
        style: "touch-action: none",
      },
      null
    ),
    c = g.g.o.P(
      g.g.G.Sp,
      { cx: g.qa.Jc, cy: g.qa.Jc, r: g.qa.vh, class: "blocklyAngleCircle" },
      a
    );
  this.bo = g.g.o.P(g.g.G.Ld, { class: "blocklyAngleGauge" }, a);
  this.Or = g.g.o.P(
    g.g.G.Tj,
    { x1: g.qa.Jc, y1: g.qa.Jc, class: "blocklyAngleLine" },
    a
  );
  for (var d = 0; 360 > d; d += 15)
    g.g.o.P(
      g.g.G.Tj,
      {
        x1: g.qa.Jc + g.qa.vh,
        y1: g.qa.Jc,
        x2: g.qa.Jc + g.qa.vh - (0 == d % 45 ? 10 : 5),
        y2: g.qa.Jc,
        class: "blocklyAngleMarks",
        transform: "rotate(" + d + "," + g.qa.Jc + "," + g.qa.Jc + ")",
      },
      a
    );
  this.Sq = g.Aa(a, "click", this, this.EI);
  this.Rq = g.Aa(c, "click", this, this.Mo, !0, !0);
  this.Xr = g.Aa(c, "mousemove", this, this.Mo, !0, !0);
  return a;
};
b.uv = function () {
  this.Sq && (g.Wa(this.Sq), (this.Sq = null));
  this.Rq && (g.Wa(this.Rq), (this.Rq = null));
  this.Xr && (g.Wa(this.Xr), (this.Xr = null));
  this.Or = this.bo = null;
};
b.EI = function () {
  g.H.pm(this);
  g.ca.Ia();
};
b.Mo = function (a) {
  var c = this.bo.ownerSVGElement.getBoundingClientRect(),
    d = a.clientX - c.left - g.qa.Jc;
  a = a.clientY - c.top - g.qa.Jc;
  c = Math.atan(-a / d);
  isNaN(c) ||
    ((c = g.g.Qa.Rm(c)),
    0 > d ? (c += 180) : 0 < a && (c += 360),
    (c = this.Fn ? this.Tk + 360 - c : 360 - (this.Tk - c)),
    ef(this, c));
};
function ef(a, c) {
  a.ap && (c = Math.round(c / a.ap) * a.ap);
  c = ff(a, c);
  c != a.Cc && ((a.Yh = !0), a.rm && (a.yd.value = String(c)), a.setValue(c));
}
function df(a) {
  if (a.bo) {
    var c = Number(a.xd()) + a.Tk,
      d = g.g.Qa.Ad(c % 360);
    c = ["M ", g.qa.Jc, ",", g.qa.Jc];
    var e = g.qa.Jc,
      f = g.qa.Jc;
    if (!isNaN(d)) {
      var h = Number(a.Fn),
        k = g.g.Qa.Ad(a.Tk),
        l = Math.cos(k) * g.qa.vh,
        m = Math.sin(k) * -g.qa.vh;
      h && (d = 2 * k - d);
      e += Math.cos(d) * g.qa.vh;
      f -= Math.sin(d) * g.qa.vh;
      d = Math.abs(Math.floor((d - k) / Math.PI) % 2);
      h && (d = 1 - d);
      c.push(
        " l ",
        l,
        ",",
        m,
        " A ",
        g.qa.vh,
        ",",
        g.qa.vh,
        " 0 ",
        d,
        " ",
        h,
        " ",
        e,
        ",",
        f,
        " z"
      );
    }
    a.bo.setAttribute("d", c.join(""));
    a.Or.setAttribute("x2", e);
    a.Or.setAttribute("y2", f);
  }
}
b.Rw = function (a) {
  g.qa.v.Rw.call(this, a);
  var c;
  a.keyCode === g.g.S.Sj
    ? (c = this.J.L ? 1 : -1)
    : a.keyCode === g.g.S.Xj
    ? (c = this.J.L ? -1 : 1)
    : a.keyCode === g.g.S.rt
    ? (c = -1)
    : a.keyCode === g.g.S.ju && (c = 1);
  if (c) {
    var d = this.getValue();
    ef(this, d + c * this.ap);
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Ti = function (a) {
  a = Number(a);
  return isNaN(a) || !isFinite(a) ? null : ff(this, a);
};
function ff(a, c) {
  c %= 360;
  0 > c && (c += 360);
  c > a.KD && (c -= 360);
  return c;
}
g.pd.register(
  ".blocklyAngleCircle {,stroke: #444;,stroke-width: 1;,fill: #ddd;,fill-opacity: .8;,},.blocklyAngleMarks {,stroke: #444;,stroke-width: 1;,},.blocklyAngleGauge {,fill: #f88;,fill-opacity: .8;,pointer-events: none;,},.blocklyAngleLine {,stroke: #f00;,stroke-width: 2;,stroke-linecap: round;,pointer-events: none;,}".split(
    ","
  )
);
g.Xf.register("field_angle", g.qa);
g.Generator = function (a) {
  this.nj = a;
  this.XE = new RegExp(this.Ze, "g");
};
g.Generator.pq = "generated_function";
b = g.Generator.prototype;
b.kq = null;
b.me = null;
b.ad = null;
b.Gd = "  ";
b.gE = 60;
b.rq = [];
b.gw = null;
function Re() {
  var a = g.j,
    c = A;
  c ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (c = g.Lg()));
  var d = [];
  a.R(c);
  c = c.hc(!0);
  for (var e = 0, f; (f = c[e]); e++) {
    var h = gf(a, f);
    Array.isArray(h) && (h = h[0]);
    h &&
      (f.O &&
        ((h = a.hD(h)),
        a.me && !f.Ej && (h = V(a.me, f) + h),
        a.ad && !f.Ej && (h += V(a.ad, f))),
      d.push(h));
  }
  d = d.join("\n");
  d = a.finish(d);
  d = d.replace(/^\s+\n/, "");
  d = d.replace(/\n\s+$/, "\n");
  return (d = d.replace(/[ \t]+\n/g, "\n"));
}
function W(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function gf(a, c) {
  !1 === a.gw &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return gf(a, r(c));
  if (c.ve()) return gf(a, ja(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.nj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Bs(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.me && !c.Ej && (d = V(a.me, c) + d),
      a.ad && !c.Ej && (d += V(a.ad, c)),
      a.Bs(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function X(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = P(a, c);
  if (!f) return "";
  c = gf(e, f);
  if ("" === c) return "";
  if (!Array.isArray(c))
    throw TypeError("Expecting tuple from value block: " + f.type);
  a = c[0];
  c = c[1];
  if (isNaN(c))
    throw TypeError("Expecting valid order from value block: " + f.type);
  if (!a) return "";
  f = !1;
  var h = Math.floor(d),
    k = Math.floor(c);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.rq.length; h++)
      if (e.rq[h][0] == d && e.rq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function hf(a, c) {
  var d = g.j;
  a = P(a, c);
  c = gf(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = W(c, d.Gd));
  return c;
}
function jf(a, c) {
  var d = g.j;
  d.kq && (a = W(V(d.kq, c), d.Gd) + a);
  d.ad && !c.Ej && (a = W(V(d.ad, c), d.Gd) + a);
  d.me && !c.Ej && (a += W(V(d.me, c), d.Gd));
  return a;
}
function V(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.Tt = "";
function kf(a, c) {
  a.Tt += c + ",";
}
b.Ze = "{leCUI8hutHZI4480Dc}";
function Y(a, c) {
  var d = g.j;
  if (!d.fk[a]) {
    var e = Q(d.Tb, a, g.pn);
    d.Bv[a] = e;
    c = c.join("\n").replace(d.XE, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Gd);
    d.fk[a] = c;
  }
  return d.Bv[a];
}
b.R = function () {};
b.Bs = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.hD = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
kf(
  g.j,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.j.Vj = 0;
g.j.lN = 1.1;
g.j.mc = 1.2;
g.j.xb = 2;
g.j.jN = 3;
g.j.fN = 3;
g.j.bN = 4.1;
g.j.nN = 4.2;
g.j.mn = 4.3;
g.j.kn = 4.4;
g.j.mN = 4.5;
g.j.oN = 4.6;
g.j.gN = 4.7;
g.j.$M = 4.8;
g.j.hN = 5;
g.j.Nt = 5.1;
g.j.jn = 5.2;
g.j.ln = 5.3;
g.j.El = 6.1;
g.j.Hi = 6.2;
g.j.dN = 7;
g.j.YF = 8;
g.j.iN = 8;
g.j.kN = 8;
g.j.sz = 9;
g.j.aN = 10;
g.j.eN = 11;
g.j.cN = 12;
g.j.Lt = 13;
g.j.Mt = 14;
g.j.qq = 15;
g.j.sh = 16;
g.j.pN = 17;
g.j.rz = 18;
g.j.hb = 99;
g.j.rq = [
  [g.j.xb, g.j.mc],
  [g.j.xb, g.j.xb],
  [g.j.mc, g.j.mc],
  [g.j.mc, g.j.xb],
  [g.j.kn, g.j.kn],
  [g.j.Nt, g.j.Nt],
  [g.j.Hi, g.j.Hi],
  [g.j.Lt, g.j.Lt],
  [g.j.Mt, g.j.Mt],
];
g.j.gw = !1;
g.j.R = function (a) {
  g.j.fk = Object.create(null);
  g.j.Bv = Object.create(null);
  g.j.Tb ? g.j.Tb.reset() : (g.j.Tb = new g.Jd(g.j.Tt));
  g.j.Tb.Gx(a.Sa);
  for (var c = [], d = g.$.PG(a), e = 0; e < d.length; e++)
    c.push(g.j.Tb.Yd(d[e], g.Jd.qt));
  a = g.$.oA(a);
  for (e = 0; e < a.length; e++) c.push(g.j.Tb.Yd(a[e].Na(), g.yc));
  c.length && (g.j.fk.variables = "var " + c.join(", ") + ";");
  this.gw = !0;
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.fk) c.push(g.j.fk[d]);
  delete g.j.fk;
  delete g.j.Bv;
  g.j.Tb.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.hD = function (a) {
  return a + ";\n";
};
g.j.PJ = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.sO = function (a) {
  return a.split(/\n/g).map(g.j.PJ).join(" + '\\n' +\n");
};
g.j.Bs = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.ma) {
    var f = a.Fe.text;
    f && ((f = g.g.ub.ID(f, g.j.gE - 3)), (e += W(f + "\n", "// ")));
    for (var h = 0; h < a.U.length; h++)
      if (a.U[h].type == g.pb) {
        var k = a.U[h].connection.sa();
        if (k) {
          f = [];
          k = q(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Fe.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += W(f, "// "));
        }
      }
  }
  a = a.Z && a.Z.sa();
  d = d ? "" : gf(g.j, a);
  return e + c + d;
};
g.j.Kg = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.hb;
  a.u.options.ci && d--;
  var h = a.u.options.ci ? "1" : "0";
  a =
    0 < d
      ? X(a, c, g.j.Hi) || h
      : 0 > d
      ? X(a, c, g.j.El) || h
      : e
      ? X(a, c, g.j.mn) || h
      : X(a, c, f) || h;
  if (g.hj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.Hi;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.El));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.mn));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.j.Qa = {};
g.j.math_number = function (a) {
  a = Number(D(a, "NUM"));
  return [a, 0 <= a ? g.j.Vj : g.j.mn];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.Hi],
      MINUS: [" - ", g.j.El],
      MULTIPLY: [" * ", g.j.Nt],
      DIVIDE: [" / ", g.j.jn],
      POWER: [null, g.j.hb],
    }[D(a, "OP")],
    d = c[0];
  c = c[1];
  var e = X(a, "A", c) || "0";
  a = X(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.xb];
};
g.j.math_single = function (a) {
  var c = D(a, "OP");
  if ("NEG" == c)
    return (
      (a = X(a, "NUM", g.j.mn) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.mn]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? X(a, "NUM", g.j.jn) || "0"
      : X(a, "NUM", g.j.hb) || "0";
  switch (c) {
    case "ABS":
      var d = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      d = "Math.sqrt(" + a + ")";
      break;
    case "LN":
      d = "Math.log(" + a + ")";
      break;
    case "EXP":
      d = "Math.exp(" + a + ")";
      break;
    case "POW10":
      d = "Math.pow(10," + a + ")";
      break;
    case "ROUND":
      d = "Math.round(" + a + ")";
      break;
    case "ROUNDUP":
      d = "Math.ceil(" + a + ")";
      break;
    case "ROUNDDOWN":
      d = "Math.floor(" + a + ")";
      break;
    case "SIN":
      d = "Math.sin(" + a + " / 180 * Math.PI)";
      break;
    case "COS":
      d = "Math.cos(" + a + " / 180 * Math.PI)";
      break;
    case "TAN":
      d = "Math.tan(" + a + " / 180 * Math.PI)";
  }
  if (d) return [d, g.j.xb];
  switch (c) {
    case "LOG10":
      d = "Math.log(" + a + ") / Math.log(10)";
      break;
    case "ASIN":
      d = "Math.asin(" + a + ") / Math.PI * 180";
      break;
    case "ACOS":
      d = "Math.acos(" + a + ") / Math.PI * 180";
      break;
    case "ATAN":
      d = "Math.atan(" + a + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [d, g.j.jn];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.mc],
    E: ["Math.E", g.j.mc],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.jn],
    SQRT2: ["Math.SQRT2", g.j.mc],
    SQRT1_2: ["Math.SQRT1_2", g.j.mc],
    INFINITY: ["Infinity", g.j.Vj],
  }[D(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = X(a, "NUMBER_TO_CHECK", g.j.ln) || "0",
    d = D(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      Y("mathIsPrime", [
        "function " + g.j.Ze + "(n) {",
        "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
        "  if (n == 2 || n == 3) {",
        "    return true;",
        "  }",
        "  // False if n is NaN, negative, is 1, or not whole.",
        "  // And false if n is divisible by 2 or 3.",
        "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {",
        "    return false;",
        "  }",
        "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {",
        "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
        "      return false;",
        "    }",
        "  }",
        "  return true;",
        "}",
      ]) +
      "(" +
      c +
      ")";
    return [e, g.j.xb];
  }
  switch (d) {
    case "EVEN":
      e = c + " % 2 == 0";
      break;
    case "ODD":
      e = c + " % 2 == 1";
      break;
    case "WHOLE":
      e = c + " % 1 == 0";
      break;
    case "POSITIVE":
      e = c + " > 0";
      break;
    case "NEGATIVE":
      e = c + " < 0";
      break;
    case "DIVISIBLE_BY":
      (a = X(a, "DIVISOR", g.j.ln) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.sz];
};
g.j.math_change = function (a) {
  var c = X(a, "DELTA", g.j.Hi) || "0";
  a = g.j.Tb.Yd(D(a, "VAR"), g.yc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = D(a, "OP");
  switch (c) {
    case "SUM":
      a = X(a, "LIST", g.j.mc) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = X(a, "LIST", g.j.hb) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = X(a, "LIST", g.j.hb) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = Y("mathMean", [
        "function " + g.j.Ze + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = X(a, "LIST", g.j.hb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = Y("mathMedian", [
        "function " + g.j.Ze + "(myList) {",
        "  var localList = myList.filter(function (x) {return typeof x == 'number';});",
        "  if (!localList.length) return null;",
        "  localList.sort(function(a, b) {return b - a;});",
        "  if (localList.length % 2 == 0) {",
        "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;",
        "  } else {",
        "    return localList[(localList.length - 1) / 2];",
        "  }",
        "}",
      ]);
      a = X(a, "LIST", g.j.hb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = Y("mathModes", [
        "function " + g.j.Ze + "(values) {",
        "  var modes = [];",
        "  var counts = [];",
        "  var maxCount = 0;",
        "  for (var i = 0; i < values.length; i++) {",
        "    var value = values[i];",
        "    var found = false;",
        "    var thisCount;",
        "    for (var j = 0; j < counts.length; j++) {",
        "      if (counts[j][0] === value) {",
        "        thisCount = ++counts[j][1];",
        "        found = true;",
        "        break;",
        "      }",
        "    }",
        "    if (!found) {",
        "      counts.push([value, 1]);",
        "      thisCount = 1;",
        "    }",
        "    maxCount = Math.max(thisCount, maxCount);",
        "  }",
        "  for (var j = 0; j < counts.length; j++) {",
        "    if (counts[j][1] == maxCount) {",
        "        modes.push(counts[j][0]);",
        "    }",
        "  }",
        "  return modes;",
        "}",
      ]);
      a = X(a, "LIST", g.j.hb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = Y("mathStandardDeviation", [
        "function " + g.j.Ze + "(numbers) {",
        "  var n = numbers.length;",
        "  if (!n) return null;",
        "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;",
        "  var variance = 0;",
        "  for (var j = 0; j < n; j++) {",
        "    variance += Math.pow(numbers[j] - mean, 2);",
        "  }",
        "  variance = variance / n;",
        "  return Math.sqrt(variance);",
        "}",
      ]);
      a = X(a, "LIST", g.j.hb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = Y("mathRandomList", [
        "function " + g.j.Ze + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = X(a, "LIST", g.j.hb) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.xb];
};
g.j.math_modulo = function (a) {
  var c = X(a, "DIVIDEND", g.j.ln) || "0";
  a = X(a, "DIVISOR", g.j.ln) || "0";
  return [c + " % " + a, g.j.ln];
};
g.j.math_constrain = function (a) {
  var c = X(a, "VALUE", g.j.hb) || "0",
    d = X(a, "LOW", g.j.hb) || "0";
  a = X(a, "HIGH", g.j.hb) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.xb];
};
g.j.math_random_int = function (a) {
  var c = X(a, "FROM", g.j.hb) || "0";
  a = X(a, "TO", g.j.hb) || "0";
  return [
    Y("mathRandomInt", [
      "function " + g.j.Ze + "(a, b) {",
      "  if (a > b) {",
      "    // Swap a and b to ensure a is smaller.",
      "    var c = a;",
      "    a = b;",
      "    b = c;",
      "  }",
      "  return Math.floor(Math.random() * (b - a + 1) + a);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.j.xb,
  ];
};
g.j.math_random_float = function () {
  return ["Math.random()", g.j.xb];
};
g.j.math_atan2 = function (a) {
  var c = X(a, "X", g.j.hb) || "0";
  return [
    "Math.atan2(" + (X(a, "Y", g.j.hb) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.jn,
  ];
};
g.lc = function (a) {
  g.lc.v.constructor.call(this, null);
  this.aD = a;
};
g.g.object.X(g.lc, g.le);
b = g.lc.prototype;
b.Um = 0;
b.Hp = 0;
b.mv = function (a) {
  g.g.o.P(
    g.g.G.Od,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.P(
    g.g.G.Ld,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.P(
    g.g.G.Sp,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.Xv = function (a) {
  this.T.ce() && g.le.prototype.Xv.call(this, a);
};
b.Pu = function () {
  this.up = g.g.o.P(g.g.G.Ji, { x: g.ta.od, y: g.ta.od }, null);
  if (this.aD.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.aD[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Kd({
    disable: !1,
    parentWorkspace: this.T.u,
    media: this.T.u.options.Oo,
    rtl: this.T.L,
    horizontalLayout: !1,
    renderer: this.T.u.options.Yo,
    rendererOverrides: this.T.u.options.Zo,
  });
  c.La = this.T.L ? g.g.ya.Nd.Xj : g.g.ya.Nd.Sj;
  if ((d = !!a)) (c.Vg = g.g.ya.Mu(a)), (c.Xd = this.kI.bind(this));
  this.s = new g.yb(c);
  this.s.Ao = !0;
  H(this.s, g.h.FH);
  a = d ? Hc(this.s, g.g.G.rd) : null;
  c = this.s.jb("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.Mb);
  this.up.appendChild(c);
  return this.up;
};
b.ui = function () {
  g.lc.v.ui.call(this);
  this.T.Qb ||
    (this.T.ce()
      ? this.ae && g.g.o.Nc(this.ae, "blocklyIconGroupReadonly")
      : (this.Jb(!1),
        this.ae && g.g.o.Ka(this.ae, "blocklyIconGroupReadonly")));
};
function lf(a) {
  var c = 2 * g.ta.od,
    d = a.s.Mb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.fc();
  if (h) {
    var k = h.zr();
    f = Math.max(f, k.pe + 20);
    e += h.Pg();
  }
  a.T.L && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.Um - e) > c || Math.abs(a.Hp - f) > c)
    (a.Um = e),
      (a.Hp = f),
      a.qc.ep(e + c, f + c),
      a.up.setAttribute("width", a.Um),
      a.up.setAttribute("height", a.Hp);
  a.T.L && a.s.Mb.setAttribute("transform", "translate(" + a.Um + ",0)");
  a.s.resize();
}
b.uJ = function () {
  this.s && Ec(this.s);
};
b.Jb = function (a) {
  if (a != this.isVisible())
    if ((g.h.Ha(new g.h.If(this.T, a, "mutator")), a)) {
      this.qc = new g.ta(
        this.T.u,
        this.Pu(),
        this.T.Rb.cc,
        this.xk,
        null,
        null
      );
      nb(this.qc, this.T.id);
      pb(this.qc, this.uJ.bind(this));
      var c = this.s.options.Vg;
      a = this.s.fc();
      c && (a.R(this.s), a.show(c));
      this.ah = this.T.Nh(this.s);
      c = q(this.ah, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ga();
      this.ah.Cs(!1);
      this.ah.Wu = !1;
      a ? ((c = 2 * a.Nb), (a = this.ah.L ? a.Pg() + c : c)) : (a = c = 16);
      this.T.L && (a = -a);
      this.ah.moveBy(a, c);
      if (this.T.As) {
        var f = this,
          h = this.T;
        h.As(this.ah);
        this.Gs = function () {
          h.As(f.ah);
        };
        H(this.T.u, this.Gs);
      }
      lf(this);
      H(this.s, this.rL.bind(this));
      this.nc();
    } else
      (this.up = null),
        this.s.I(),
        (this.ah = this.s = null),
        this.qc.I(),
        (this.qc = null),
        (this.Hp = this.Um = 0),
        this.Gs && (kb(this.T.u, this.Gs), (this.Gs = null));
};
b.rL = function (a) {
  if (!(a.iw || (a.type == g.h.Mj && "disabled" == a.element))) {
    if (!this.s.Gc()) {
      a = this.s.hc(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.Za();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.L) {
          var f = -20,
            h = this.s.fc();
          h && (f -= h.Pg());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.ah.u == this.s) {
      g.h.ea(!0);
      d = this.T;
      a = (a = d.sb()) && g.V.qe(a);
      c = d.pa;
      d.pa = !1;
      d.Jh(this.ah);
      d.pa = c;
      d.uf();
      g.Lg().zb && g.navigation.jJ(d);
      d.pa && d.Ga();
      c = (c = d.sb()) && g.V.qe(c);
      if (a != c) {
        g.h.Ha(new g.h.ih(d, "mutation", null, a, c));
        var k = g.h.uc();
        setTimeout(function () {
          g.h.ea(k);
          d.$b();
          g.h.ea(!1);
        }, g.Np);
      }
      this.s.Gc() || lf(this);
      g.h.ea(!1);
    }
  }
};
b.kI = function () {
  var a = this.s.fc();
  a = a ? a.Pg() : 0;
  return {
    pe: 0,
    Uf: 0,
    ed: 0,
    vd: 0,
    jc: this.Hp,
    Yb: this.Um - a,
    dc: 0,
    Xb: 0,
    td: 0,
    cd: this.s.L ? 0 : a,
  };
};
b.I = function () {
  this.T.jd = null;
  g.le.prototype.I.call(this);
};
g.lc.Gm = function (a, c, d) {
  if (!a || !a.Y().u) return !1;
  d = z(c, d).connection;
  var e = a.sa();
  return (e && e != c) || d.ma == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.lc.kB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.vc;
    a.ag ? d && d.options && (c = d.options.vc) : d && (c = d);
  }
  return c;
};
g.M.sw = {};
g.ua.HF = {};
g.ua.HF.iq = 260;
g.fm([
  {
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}",
  },
  {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [
      { type: "input_value", name: "ITEM" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}",
  },
  {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{ type: "input_value", name: "LIST", check: "Array" }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}",
  },
  {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}",
  },
  {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}",
  },
]);
g.M.lists_create_with = {
  R: function () {
    this.Pb = g.i.LISTS_CREATE_WITH_HELPURL;
    this.bc("list_blocks");
    this.ee = 3;
    this.Yc();
    this.ie(!0, "Array");
    this.Cj(new g.lc(["lists_create_with_item"]));
    this.bb(g.i.LISTS_CREATE_WITH_TOOLTIP);
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.ee);
    return a;
  },
  Wb: function (a) {
    this.ee = parseInt(a.getAttribute("items"), 10);
    this.Yc();
  },
  Nh: function (a) {
    var c = a.oj("lists_create_with_container");
    c.uf();
    for (var d = z(c, "STACK").connection, e = 0; e < this.ee; e++) {
      var f = a.oj("lists_create_with_item");
      f.uf();
      d.connect(f.ba);
      d = f.Z;
    }
    return c;
  },
  Jh: function (a) {
    var c = P(a, "STACK");
    for (a = []; c && !c.ve(); ) a.push(c.$x), (c = c.Z && c.Z.sa());
    for (c = 0; c < this.ee; c++) {
      var d = z(this, "ADD" + c).connection.ma;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.ee = a.length;
    this.Yc();
    for (c = 0; c < this.ee; c++) g.lc.Gm(a[c], this, "ADD" + c);
  },
  As: function (a) {
    a = P(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.$x = d && d.connection.ma;
      c++;
      a = a.Z && a.Z.sa();
    }
  },
  Yc: function () {
    this.ee && z(this, "EMPTY")
      ? this.Ab("EMPTY")
      : this.ee ||
        z(this, "EMPTY") ||
        L(N(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.ee; a++)
      if (!z(this, "ADD" + a)) {
        var c = Tb(M(this, "ADD" + a), g.ll);
        0 == a && L(c, g.i.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; z(this, "ADD" + a); ) this.Ab("ADD" + a), a++;
  },
};
g.M.lists_create_with_container = {
  R: function () {
    this.bc("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    Xb(this, "STACK");
    this.bb(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.M.lists_create_with_item = {
  R: function () {
    this.bc("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
    this.Ve(!0);
    this.Ue(!0);
    this.bb(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.M.lists_indexOf = {
  R: function () {
    var a = [
      [g.i.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.i.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.Pb = g.i.LISTS_INDEX_OF_HELPURL;
    this.bc("list_blocks");
    this.ie(!0, "Number");
    L(M(this, "VALUE").Sb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
    L(M(this, "FIND"), new g.eb(a), "END");
    this.Wc(!0);
    var c = this;
    this.bb(function () {
      return g.i.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.ci ? "0" : "-1"
      );
    });
  },
};
g.M.lists_getIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_GET_INDEX_GET, "GET"],
      [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.mu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Pb = g.i.LISTS_GET_INDEX_HELPURL;
    this.bc("list_blocks");
    a = new g.eb(a, function (d) {
      d = "REMOVE" == d;
      this.Y().DD(d);
    });
    L(M(this, "VALUE").Sb("Array"), g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
    L(L(N(this), a, "MODE"), "", "SPACE");
    N(this, "AT");
    g.i.LISTS_GET_INDEX_TAIL && L(N(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
    this.Wc(!0);
    this.ie(!0);
    this.Xe(!0);
    var c = this;
    this.bb(function () {
      var d = D(c, "MODE"),
        e = D(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "GET FROM_START":
        case "GET FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case "GET FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case "GET LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case "GET RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case "GET_REMOVE FROM_START":
        case "GET_REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case "GET_REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case "GET_REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case "GET_REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case "REMOVE FROM_START":
        case "REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case "REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case "REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case "REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          ("FROM_START" == e
            ? g.i.LISTS_INDEX_FROM_START_TOOLTIP
            : g.i.LISTS_INDEX_FROM_END_TOOLTIP
          ).replace("%1", c.u.options.ci ? "#1" : "#0");
      return f;
    });
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", z(this, "AT").type == g.pb);
    return a;
  },
  Wb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.DD(c);
    a = "false" != a.getAttribute("at");
    this.Xe(a);
  },
  DD: function (a) {
    a != !this.O &&
      (x(this, !0),
      a
        ? (this.ie(!1), this.Ve(!0), this.Ue(!0))
        : (this.Ve(!1), this.Ue(!1), this.ie(!0)));
  },
  Xe: function (a) {
    this.Ab("AT");
    this.Ab("ORDINAL", !0);
    a
      ? (M(this, "AT").Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.eb(this.mu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Xe(e);
        Vb(f, d, "WHERE");
        return null;
      }
    });
    L(z(this, "AT"), c, "WHERE");
    g.i.LISTS_GET_INDEX_TAIL && Yb(this, "TAIL", null);
  },
};
g.M.lists_setIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_SET_INDEX_SET, "SET"],
      [g.i.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.mu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Pb = g.i.LISTS_SET_INDEX_HELPURL;
    this.bc("list_blocks");
    L(M(this, "LIST").Sb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
    L(L(N(this), new g.eb(a), "MODE"), "", "SPACE");
    N(this, "AT");
    L(M(this, "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
    this.Wc(!0);
    this.Ve(!0);
    this.Ue(!0);
    this.bb(g.i.LISTS_SET_INDEX_TOOLTIP);
    this.Xe(!0);
    var c = this;
    this.bb(function () {
      var d = D(c, "MODE"),
        e = D(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "SET FROM_START":
        case "SET FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
          break;
        case "SET FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
          break;
        case "SET LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
          break;
        case "SET RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
          break;
        case "INSERT FROM_START":
        case "INSERT FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
          break;
        case "INSERT FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
          break;
        case "INSERT LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
          break;
        case "INSERT RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace(
            "%1",
            c.u.options.ci ? "#1" : "#0"
          );
      return f;
    });
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", z(this, "AT").type == g.pb);
    return a;
  },
  Wb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Xe(a);
  },
  Xe: function (a) {
    this.Ab("AT");
    this.Ab("ORDINAL", !0);
    a
      ? (M(this, "AT").Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.eb(this.mu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Xe(e);
        Vb(f, d, "WHERE");
        return null;
      }
    });
    Yb(this, "AT", "TO");
    z(this, "ORDINAL") && Yb(this, "ORDINAL", "TO");
    L(z(this, "AT"), c, "WHERE");
  },
};
g.M.lists_getSublist = {
  R: function () {
    this.WHERE_OPTIONS_1 = [
      [g.i.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.i.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.Pb = g.i.LISTS_GET_SUBLIST_HELPURL;
    this.bc("list_blocks");
    L(M(this, "LIST").Sb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    N(this, "AT1");
    N(this, "AT2");
    g.i.LISTS_GET_SUBLIST_TAIL &&
      L(N(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
    this.Wc(!0);
    this.ie(!0, "Array");
    this.Xe(1, !0);
    this.Xe(2, !0);
    this.bb(g.i.LISTS_GET_SUBLIST_TOOLTIP);
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.pb);
    a.setAttribute("at2", z(this, "AT2").type == g.pb);
    return a;
  },
  Wb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Xe(1, c);
    this.Xe(2, a);
  },
  Xe: function (a, c) {
    this.Ab("AT" + a);
    this.Ab("ORDINAL" + a, !0);
    c
      ? (M(this, "AT" + a).Sb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT" + a);
    var d = new g.eb(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.Y();
        h.Xe(a, f);
        Vb(h, e, "WHERE" + a);
        return null;
      }
    });
    L(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (Yb(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && Yb(this, "ORDINAL1", "AT2"));
    g.i.LISTS_GET_SUBLIST_TAIL && Yb(this, "TAIL", null);
  },
};
g.M.lists_sort = {
  R: function () {
    O(this, {
      message0: g.i.LISTS_SORT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [g.i.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [g.i.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [g.i.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"],
          ],
        },
        {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [
            [g.i.LISTS_SORT_ORDER_ASCENDING, "1"],
            [g.i.LISTS_SORT_ORDER_DESCENDING, "-1"],
          ],
        },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      output: "Array",
      style: "list_blocks",
      tooltip: g.i.LISTS_SORT_TOOLTIP,
      helpUrl: g.i.LISTS_SORT_HELPURL,
    });
  },
};
g.M.lists_split = {
  R: function () {
    var a = this,
      c = new g.eb(
        [
          [g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.Ep(d);
        }
      );
    this.Pb = g.i.LISTS_SPLIT_HELPURL;
    this.bc("list_blocks");
    L(M(this, "INPUT").Sb("String"), c, "MODE");
    L(M(this, "DELIM").Sb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
    this.Wc(!0);
    this.ie(!0, "Array");
    this.bb(function () {
      var d = D(a, "MODE");
      if ("SPLIT" == d) return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  Ep: function (a) {
    if (D(this, "MODE") != a) {
      var c = z(this, "INPUT").connection;
      c.Km(null);
      var d = c.sa();
      d && (c.disconnect(), d.Pa ? d.I() : this.$b());
    }
    "SPLIT" == a
      ? (this.O.Sb("Array"), z(this, "INPUT").Sb("String"))
      : (this.O.Sb("String"), z(this, "INPUT").Sb("Array"));
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", D(this, "MODE"));
    return a;
  },
  Wb: function (a) {
    this.Ep(a.getAttribute("mode"));
  },
};
g.M.XI = {};
g.ua.sd = {};
g.ua.sd.iq = 210;
g.fm([
  {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"],
        ],
      },
    ],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}",
  },
  {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{ type: "input_statement", name: "ELSE" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200f<", "LT"],
          ["\u200f\u2264", "LTE"],
          ["\u200f>", "GT"],
          ["\u200f\u2265", "GTE"],
        ],
      },
      { type: "input_value", name: "B" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"],
  },
  {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Boolean" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"],
        ],
      },
      { type: "input_value", name: "B", check: "Boolean" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"],
  },
  {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
  },
  {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}",
  },
  {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{ type: "input_value", name: "THEN" }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{ type: "input_value", name: "ELSE" }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"],
  },
]);
g.fm([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
  },
]);
g.ua.sd.bu = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ga.register("logic_op_tooltip", g.ga.Jq("OP", g.ua.sd.bu));
g.ua.sd.kt = {
  se: 0,
  pf: 0,
  Ej: !0,
  sb: function () {
    if (!this.se && !this.pf) return null;
    var a = g.g.xml.createElement("mutation");
    this.se && a.setAttribute("elseif", this.se);
    this.pf && a.setAttribute("else", 1);
    return a;
  },
  Wb: function (a) {
    this.se = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.pf = parseInt(a.getAttribute("else"), 10) || 0;
    this.QJ();
  },
  Nh: function (a) {
    var c = a.oj("controls_if_if");
    c.uf();
    for (var d = c.Z, e = 1; e <= this.se; e++) {
      var f = a.oj("controls_if_elseif");
      f.uf();
      d.connect(f.ba);
      d = f.Z;
    }
    this.pf && ((a = a.oj("controls_if_else")), a.uf(), d.connect(a.ba));
    return c;
  },
  Jh: function (a) {
    a = a.Z.sa();
    this.pf = this.se = 0;
    for (var c = [null], d = [null], e = null; a && !a.ve(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.se++;
          c.push(a.$x);
          d.push(a.eg);
          break;
        case "controls_if_else":
          this.pf++;
          e = a.eg;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.sa();
    }
    this.Yc();
    this.bD(c, d, e);
  },
  As: function (a) {
    a = a.Z.sa();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = z(this, "IF" + c),
            e = z(this, "DO" + c);
          a.$x = d && d.connection.ma;
          a.eg = e && e.connection.ma;
          c++;
          break;
        case "controls_if_else":
          e = z(this, "ELSE");
          a.eg = e && e.connection.ma;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.sa();
    }
  },
  QJ: function () {
    var a = [null],
      c = [null],
      d = null;
    z(this, "ELSE") && (d = z(this, "ELSE").connection.ma);
    for (var e = 1; z(this, "IF" + e); ) {
      var f = z(this, "DO" + e);
      a.push(z(this, "IF" + e).connection.ma);
      c.push(f.connection.ma);
      e++;
    }
    this.Yc();
    this.bD(a, c, d);
  },
  Yc: function () {
    z(this, "ELSE") && this.Ab("ELSE");
    for (var a = 1; z(this, "IF" + a); )
      this.Ab("IF" + a), this.Ab("DO" + a), a++;
    for (a = 1; a <= this.se; a++)
      L(M(this, "IF" + a).Sb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF),
        L(Xb(this, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
    this.pf && L(Xb(this, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE);
  },
  bD: function (a, c, d) {
    for (var e = 1; e <= this.se; e++)
      g.lc.Gm(a[e], this, "IF" + e), g.lc.Gm(c[e], this, "DO" + e);
    g.lc.Gm(d, this, "ELSE");
  },
};
g.ga.px("controls_if_mutator", g.ua.sd.kt, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.ua.sd.yy = function () {
  this.bb(
    function () {
      if (this.se || this.pf) {
        if (!this.se && this.pf) return g.i.CONTROLS_IF_TOOLTIP_2;
        if (this.se && !this.pf) return g.i.CONTROLS_IF_TOOLTIP_3;
        if (this.se && this.pf) return g.i.CONTROLS_IF_TOOLTIP_4;
      } else return g.i.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ga.register("controls_if_tooltip", g.ua.sd.yy);
g.ua.sd.DF = {
  onchange: function (a) {
    this.Fm || (this.Fm = [null, null]);
    var c = P(this, "A"),
      d = P(this, "B");
    c &&
      d &&
      !$a(c.O, d.O) &&
      (g.h.ea(a.group),
      (a = this.Fm[0]),
      a !== c &&
        (x(c), !a || a.Wf || a.Pa || z(this, "A").connection.connect(a.O)),
      (c = this.Fm[1]),
      c !== d &&
        (x(d), !c || c.Wf || c.Pa || z(this, "B").connection.connect(c.O)),
      this.$b(),
      g.h.ea(!1));
    this.Fm[0] = P(this, "A");
    this.Fm[1] = P(this, "B");
  },
};
g.ua.sd.CF = function () {
  this.Oe(g.ua.sd.DF);
};
g.ga.register("logic_compare", g.ua.sd.CF);
g.ua.sd.EF = {
  YC: null,
  onchange: function (a) {
    var c = P(this, "THEN"),
      d = P(this, "ELSE"),
      e = this.O.ma;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !$a(h.O, e) &&
          (g.h.ea(a.group),
          e === this.YC ? (x(this), e.Y().$b()) : (x(h), h.$b()),
          g.h.ea(!1));
      }
    this.YC = e;
  },
};
g.ga.ts("logic_ternary", g.ua.sd.EF);
g.M.ZI = {};
g.ua.cf = {};
g.ua.cf.iq = 120;
g.fm([
  {
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [
      { type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"],
        ],
      },
      { type: "input_value", name: "BOOL", check: "Boolean" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"],
  },
  {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BY", check: "Number", align: "RIGHT" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"],
  },
  {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"],
  },
  {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLOW",
        options: [
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"],
        ],
      },
    ],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"],
  },
]);
g.ua.cf.GG = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ga.register("controls_whileUntil_tooltip", g.ga.Jq("MODE", g.ua.cf.GG));
g.ua.cf.ZD = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ga.register("controls_flow_tooltip", g.ga.Jq("FLOW", g.ua.cf.ZD));
g.ua.cf.oE = {
  Mh: function (a) {
    if (!this.Qb) {
      var c = w(this, "VAR").gd(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.$.co(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.Ba = g.Ya.Kq(this, d);
        a.push(e);
      }
    }
  },
};
g.ga.ts("contextMenu_newGetVariableBlock", g.ua.cf.oE);
g.ga.register("controls_for_tooltip", g.ga.Au("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ga.register(
  "controls_forEach_tooltip",
  g.ga.Au("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.ua.cf.Vp = {
  GF: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  Ej: !0,
  IB: function (a) {
    do {
      if (-1 != g.ua.cf.Vp.GF.indexOf(a.type)) return a;
      a = Ub(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Gc && !this.u.Gc() && a.type == g.h.$s) {
      var c = g.ua.cf.Vp.IB(this);
      this.Lm(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Qb) {
        var d = g.h.uc();
        g.h.ea(a.group);
        this.ge(c);
        g.h.ea(d);
      }
    }
  },
};
g.ga.ts("controls_flow_in_loop_check", g.ua.cf.Vp);
g.$e = function (a, c, d) {
  this.wA = null;
  g.$e.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.$e, g.ze);
g.$e.prototype.tl = !1;
g.$e.ka = function (a) {
  return new g.$e(a.checked, void 0, a);
};
g.$e.bE = "\u2713";
b = g.$e.prototype;
b.Zj = !0;
b.nt = "default";
b.oe = function (a) {
  g.$e.v.oe.call(this, a);
  a.checkCharacter && (this.wA = a.checkCharacter);
};
b.cj = function () {
  g.$e.v.cj.call(this);
  g.g.o.Ka(this.Ac, "blocklyCheckbox");
  this.Ac.style.display = this.Cc ? "block" : "none";
};
b.yj = function () {
  this.ni && (this.ni.nodeValue = this.xr());
  Kb(this, this.la().OE);
};
b.xr = function () {
  return this.wA || g.$e.bE;
};
b.dg = function () {
  this.setValue(!this.Cc);
};
b.Ti = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.Qh = function (a) {
  this.Cc = mf(a);
  this.Ac && (this.Ac.style.display = this.Cc ? "block" : "none");
};
b.getValue = function () {
  return this.Cc ? "TRUE" : "FALSE";
};
b.xd = function () {
  return String(mf(this.Cc));
};
function mf(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.Xf.register("field_checkbox", g.$e);
g.M.OJ = {};
g.M.procedures_defnoreturn = {
  R: function () {
    var a = g.za.pr("", this);
    a = new g.Ic(a, g.za.ws);
    Xe(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.Cj(new g.lc(["procedures_mutatorarg"]));
    (this.u.options.Hn ||
      (this.u.options.vc && this.u.options.vc.options.Hn)) &&
      g.i.PROCEDURES_DEFNORETURN_COMMENT &&
      this.bh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
    this.bc("procedure_blocks");
    this.bb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.Ma = [];
    this.oc = [];
    this.dh(!0);
    this.eg = null;
  },
  dh: function (a) {
    this.Dr !== a &&
      (a
        ? (L(Xb(this, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO),
          z(this, "RETURN") && Yb(this, "STACK", "RETURN"))
        : this.Ab("STACK", !0),
      (this.Dr = a));
  },
  Dp: function () {
    var a = "";
    this.Ma.length &&
      (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.Ma.join(", "));
    g.h.disable();
    try {
      Vb(this, a, "PARAMS");
    } finally {
      g.h.enable();
    }
  },
  sb: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", D(this, "NAME"));
    for (var d = 0; d < this.oc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.oc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.Na());
      a && this.Zw && e.setAttribute("paramId", this.Zw[d]);
      c.appendChild(e);
    }
    this.Dr || c.setAttribute("statements", "false");
    return c;
  },
  Wb: function (a) {
    this.Ma = [];
    this.oc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.Ma.push(e);
        d = g.$.Ar(this.u, d, e, "");
        null != d
          ? this.oc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Dp();
    g.za.Ko(this);
    this.dh("false" !== a.getAttribute("statements"));
  },
  Nh: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.Ma.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.Ma[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.V.hk(c, a);
    "procedures_defreturn" == this.type
      ? Vb(a, this.Dr, "STATEMENTS")
      : a.Ab("STATEMENT_INPUT");
    g.za.Ko(this);
    return a;
  },
  Jh: function (a) {
    this.Ma = [];
    this.Zw = [];
    this.oc = [];
    for (var c = P(a, "STACK"); c && !c.ve(); ) {
      var d = D(c, "NAME");
      this.Ma.push(d);
      d = this.u.gd(d, "");
      this.oc.push(d);
      this.Zw.push(c.id);
      c = c.Z && c.Z.sa();
    }
    this.Dp();
    g.za.Ko(this);
    a = D(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Dr != a))
      if (a) this.dh(!0), g.lc.Gm(this.eg, this, "STACK"), (this.eg = null);
      else {
        a = z(this, "STACK").connection;
        if ((this.eg = a.ma)) (a = a.sa()), x(a), a.$b();
        this.dh(!1);
      }
  },
  Xi: function () {
    return [D(this, "NAME"), this.Ma, !1];
  },
  Uh: function () {
    return this.Ma;
  },
  Th: function () {
    return this.oc;
  },
  xs: function (a, c) {
    var d = this.u.$f(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.$f(c);
      for (var e = !1, f = 0; f < this.oc.length; f++)
        this.oc[f].Na() == a &&
          ((this.Ma[f] = c.name), (this.oc[f] = c), (e = !0));
      e && (this.gr(d, c.name), g.za.Ko(this));
    }
  },
  Os: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.oc.length; e++)
      if (this.oc[e].Na() == a.Na()) {
        var f = this.Ma[e];
        this.Ma[e] = c;
        d = !0;
      }
    d && (this.gr(f, c), g.za.Ko(this));
  },
  gr: function (a, c) {
    this.Dp();
    if (this.jd && this.jd.isVisible())
      for (var d = F(this.jd.s), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Jd.qf(a, D(f, "NAME")) &&
          Vb(f, c, "NAME");
  },
  Mh: function (a) {
    if (!this.Qb) {
      var c = { enabled: !0 },
        d = D(this, "NAME");
      c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.Ma.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.Ma[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.uA);
      d.appendChild(e);
      c.Ba = g.Ya.Kq(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.oc.length; d++)
          (c = { enabled: !0 }),
            (e = this.oc[d]),
            (c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.$.co(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.Ba = g.Ya.Kq(this, f)),
            a.push(c);
    }
  },
  uA: "procedures_callnoreturn",
};
g.M.procedures_defreturn = {
  R: function () {
    var a = g.za.pr("", this);
    a = new g.Ic(a, g.za.ws);
    Xe(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    L(Tb(M(this, "RETURN"), g.ll), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Cj(new g.lc(["procedures_mutatorarg"]));
    (this.u.options.Hn ||
      (this.u.options.vc && this.u.options.vc.options.Hn)) &&
      g.i.PROCEDURES_DEFRETURN_COMMENT &&
      this.bh(g.i.PROCEDURES_DEFRETURN_COMMENT);
    this.bc("procedure_blocks");
    this.bb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_DEFRETURN_HELPURL;
    this.Ma = [];
    this.oc = [];
    this.dh(!0);
    this.eg = null;
  },
  dh: g.M.procedures_defnoreturn.dh,
  Dp: g.M.procedures_defnoreturn.Dp,
  sb: g.M.procedures_defnoreturn.sb,
  Wb: g.M.procedures_defnoreturn.Wb,
  Nh: g.M.procedures_defnoreturn.Nh,
  Jh: g.M.procedures_defnoreturn.Jh,
  Xi: function () {
    return [D(this, "NAME"), this.Ma, !0];
  },
  Uh: g.M.procedures_defnoreturn.Uh,
  Th: g.M.procedures_defnoreturn.Th,
  xs: g.M.procedures_defnoreturn.xs,
  Os: g.M.procedures_defnoreturn.Os,
  gr: g.M.procedures_defnoreturn.gr,
  Mh: g.M.procedures_defnoreturn.Mh,
  uA: "procedures_callreturn",
};
g.M.procedures_mutatorcontainer = {
  R: function () {
    L(N(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
    Xb(this, "STACK");
    L(
      L(N(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS),
      new g.$e("TRUE"),
      "STATEMENTS"
    );
    this.bc("procedure_blocks");
    this.bb(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.M.procedures_mutatorarg = {
  R: function () {
    var a = new g.Ic(g.za.Cy, this.dl);
    a.tJ = a.dg;
    a.dg = function () {
      this.On = [];
      this.tJ();
    };
    L(L(N(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.Ve(!0);
    this.Ue(!0);
    this.bc("procedure_blocks");
    this.bb(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.Qw = this.AH;
    a.On = [];
    a.Qw("x");
  },
  dl: function (a) {
    var c = this.Y(),
      d = g.lc.kB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = F(c.u.cb || c.u), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.Y().id) {
        var k = D(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Qb) return a;
    (c = d.gd(a, "")) && c.name != a && d.xj(c.Na(), a);
    c || ((c = d.lf(a, "")) && this.On && this.On.push(c));
    return a;
  },
  AH: function (a) {
    var c = g.lc.kB(this.Y().u);
    if (c)
      for (var d = 0; d < this.On.length; d++) {
        var e = this.On[d];
        e.name != a && c.Ph(e.Na());
      }
  },
};
g.M.procedures_callnoreturn = {
  R: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.Ve(!0);
    this.Ue(!0);
    this.bc("procedure_blocks");
    this.Pb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
    this.Ma = [];
    this.oc = [];
    this.gi = {};
    this.Zg = null;
    this.kx = !0;
  },
  Ke: function () {
    return D(this, "NAME");
  },
  Im: function (a, c) {
    g.Jd.qf(a, this.Ke()) &&
      (Vb(this, c, "NAME"),
      this.bb(
        (this.O
          ? g.i.PROCEDURES_CALLRETURN_TOOLTIP
          : g.i.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  Dx: function (a, c) {
    var d = g.za.jo(this.Ke(), this.u),
      e = d && d.jd && d.jd.isVisible();
    e || ((this.gi = {}), (this.Zg = null));
    if (c)
      if (a.join("\n") == this.Ma.join("\n")) this.Zg = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.Aj(!1);
        this.Zg || ((this.gi = {}), (this.Zg = []));
        d = this.pa;
        this.pa = !1;
        for (var f = 0; f < this.Ma.length; f++) {
          var h = z(this, "ARG" + f);
          h &&
            ((h = h.connection.ma),
            (this.gi[this.Zg[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.Zg[f]) &&
              (h.disconnect(), h.Y().$b()));
        }
        this.Ma = [].concat(a);
        this.oc = [];
        for (f = 0; f < this.Ma.length; f++)
          (a = g.$.Ar(this.u, null, this.Ma[f], "")), this.oc.push(a);
        this.Yc();
        if ((this.Zg = c))
          for (f = 0; f < this.Ma.length; f++)
            (c = this.Zg[f]),
              c in this.gi &&
                ((h = this.gi[c]),
                g.lc.Gm(h, this, "ARG" + f) || delete this.gi[c]);
        (this.pa = d) && this.Ga();
      }
  },
  Yc: function () {
    for (var a = 0; a < this.Ma.length; a++) {
      var c = w(this, "ARGNAME" + a);
      if (c) {
        g.h.disable();
        try {
          c.setValue(this.Ma[a]);
        } finally {
          g.h.enable();
        }
      } else
        (c = new g.qd(this.Ma[a])),
          L(Tb(M(this, "ARG" + a), g.ll), c, "ARGNAME" + a).R();
    }
    for (; z(this, "ARG" + a); ) this.Ab("ARG" + a), a++;
    if ((a = z(this, "TOPROW")))
      this.Ma.length
        ? w(this, "WITH") ||
          (L(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.R())
        : w(this, "WITH") && Qb(a, "WITH");
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.Ke());
    for (var c = 0; c < this.Ma.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.Ma[c]);
      a.appendChild(d);
    }
    return a;
  },
  Wb: function (a) {
    var c = a.getAttribute("name");
    this.Im(this.Ke(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.Dx(c, d);
  },
  Uh: function () {
    return this.Ma;
  },
  Th: function () {
    return this.oc;
  },
  onchange: function (a) {
    if (this.u && !this.u.ag && a.ab)
      if (a.type == g.h.Kp && -1 != a.bj.indexOf(this.id)) {
        var c = this.Ke();
        c = g.za.jo(c, this.u);
        !c ||
          (c.type == this.Vu &&
            JSON.stringify(c.Uh()) == JSON.stringify(this.Ma)) ||
          (c = null);
        if (!c) {
          g.h.ea(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.Vu);
          var d = this.Za(),
            e = d.y + 2 * g.Pd;
          c.setAttribute("x", d.x + g.Pd * (this.L ? -1 : 1));
          c.setAttribute("y", e);
          d = this.sb();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.Ke();
          e || ((e = g.za.pr("", this)), this.Im("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.V.ik(a, this.u);
          g.h.ea(!1);
        }
      } else
        a.type == g.h.Zs
          ? ((c = this.Ke()),
            (c = g.za.jo(c, this.u)),
            c || (g.h.ea(a.group), this.I(!0), g.h.ea(!1)))
          : a.type == g.h.Mj &&
            "disabled" == a.element &&
            ((c = this.Ke()),
            (c = g.za.jo(c, this.u)) &&
              c.id == a.qb &&
              ((c = g.h.uc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.h.ea(a.group),
              a.newValue
                ? ((this.kx = this.isEnabled()), this.ge(!1))
                : this.ge(this.kx),
              g.h.ea(c)));
  },
  Mh: function (a) {
    if (this.u.Sc()) {
      var c = { enabled: !0 };
      c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.Ke(),
        e = this.u;
      c.Ba = function () {
        var f = g.za.jo(d, e);
        if (f) {
          var h = f.id;
          if (e.Sc()) {
            if ((h = h ? e.Vd(h) : null)) {
              var k = h.Za(),
                l = E(h),
                m = e.scale;
              h = (k.x + ((e.L ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.Xd();
              e.scroll(-(h - l.Yb / 2), -(k - l.jc / 2));
            }
          } else
            console.warn(
              "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
            );
          f.select();
        }
      };
      a.push(c);
    }
  },
  Vu: "procedures_defnoreturn",
};
g.M.procedures_callreturn = {
  R: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.ie(!0);
    this.bc("procedure_blocks");
    this.Pb = g.i.PROCEDURES_CALLRETURN_HELPURL;
    this.Ma = [];
    this.oc = [];
    this.gi = {};
    this.Zg = null;
    this.kx = !0;
  },
  Ke: g.M.procedures_callnoreturn.Ke,
  Im: g.M.procedures_callnoreturn.Im,
  Dx: g.M.procedures_callnoreturn.Dx,
  Yc: g.M.procedures_callnoreturn.Yc,
  sb: g.M.procedures_callnoreturn.sb,
  Wb: g.M.procedures_callnoreturn.Wb,
  Uh: g.M.procedures_callnoreturn.Uh,
  Th: g.M.procedures_callnoreturn.Th,
  onchange: g.M.procedures_callnoreturn.onchange,
  Mh: g.M.procedures_callnoreturn.Mh,
  Vu: "procedures_defreturn",
};
g.M.procedures_ifreturn = {
  R: function () {
    L(M(this, "CONDITION").Sb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
    L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Wc(!0);
    this.Ve(!0);
    this.Ue(!0);
    this.bc("procedure_blocks");
    this.bb(g.i.PROCEDURES_IFRETURN_TOOLTIP);
    this.Pb = g.i.PROCEDURES_IFRETURN_HELPURL;
    this.$i = !0;
  },
  sb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.$i));
    return a;
  },
  Wb: function (a) {
    this.$i = 1 == a.getAttribute("value");
    this.$i ||
      (this.Ab("VALUE"), L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Gc && !this.u.Gc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.YE.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = Ub(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.$i
            ? (this.Ab("VALUE"),
              L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.$i = !1))
            : "procedures_defreturn" != c.type ||
              this.$i ||
              (this.Ab("VALUE"),
              L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.$i = !0)),
          this.Lm(null),
          this.Qb || this.ge(!0))
        : (this.Lm(g.i.PROCEDURES_IFRETURN_WARNING),
          this.Qb || Wb(this) || this.ge(!1));
    }
  },
  YE: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.M.mL = {};
g.ua.$ = {};
g.ua.$.iq = 330;
g.fm([
  {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
    ],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
]);
g.ua.$.pE = {
  Mh: function (a) {
    if (!this.Qb) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.i.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.i.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < gb(this.u) },
        f = w(this, "VAR").xd();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.Ba = g.Ya.Kq(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.i.AN, enabled: !0, Ba: g.ua.$.jG(this) }),
        (f = w(this, "VAR").xd()),
        (e = {
          text: g.i.LL.replace("%1", f),
          enabled: !0,
          Ba: g.ua.$.tE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.ua.$.jG = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").gd();
    g.$.ys(c, d);
  };
};
g.ua.$.tE = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").gd();
    c.Ph(d.Na());
    Dc(c);
  };
};
g.ga.ts("contextMenu_variableSetterGetter", g.ua.$.pE);
g.j.sw = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.Vj];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.ee), d = 0; d < a.ee; d++)
    c[d] = X(a, "ADD" + d, g.j.hb) || "null";
  return ["[" + c.join(", ") + "]", g.j.Vj];
};
g.j.lists_repeat = function (a) {
  var c = Y("listsRepeat", [
      "function " + g.j.Ze + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = X(a, "ITEM", g.j.hb) || "null";
  a = X(a, "NUM", g.j.hb) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.xb];
};
g.j.lists_length = function (a) {
  return [(X(a, "VALUE", g.j.mc) || "[]") + ".length", g.j.mc];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (X(a, "VALUE", g.j.mc) || "[]") + ".length", g.j.kn];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == D(a, "END") ? "indexOf" : "lastIndexOf",
    d = X(a, "FIND", g.j.hb) || "''";
  c = (X(a, "VALUE", g.j.mc) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.ci ? [c + " + 1", g.j.Hi] : [c, g.j.xb];
};
g.j.lists_getIndex = function (a) {
  var c = D(a, "MODE") || "GET",
    d = D(a, "WHERE") || "FROM_START",
    e = X(a, "VALUE", "RANDOM" == d ? g.j.hb : g.j.mc) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.j.mc];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.j.mc];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.j.Kg(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.mc];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.xb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.Kg(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.xb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.xb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        Y("listsGetRandomItem", [
          "function " + g.j.Ze + "(list, remove) {",
          "  var x = Math.floor(Math.random() * list.length);",
          "  if (remove) {",
          "    return list.splice(x, 1)[0];",
          "  } else {",
          "    return list[x];",
          "  }",
          "}",
        ]) +
        "(" +
        e +
        ", " +
        ("GET" != c) +
        ")";
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.xb];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = Q(g.j.Tb, "tmpList", g.yc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = X(a, "LIST", g.j.mc) || "[]",
    e = D(a, "MODE") || "GET",
    f = D(a, "WHERE") || "FROM_START",
    h = X(a, "TO", g.j.sh) || "null";
  switch (f) {
    case "FIRST":
      if ("SET" == e) return d + "[0] = " + h + ";\n";
      if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
      break;
    case "LAST":
      if ("SET" == e)
        return (a = c()), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
      if ("INSERT" == e) return d + ".push(" + h + ");\n";
      break;
    case "FROM_START":
      f = g.j.Kg(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.Kg(a, "AT", 1, !1, g.j.El);
      a = c();
      if ("SET" == e)
        return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
      if ("INSERT" == e)
        return (
          a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n")
        );
      break;
    case "RANDOM":
      a = c();
      f = Q(g.j.Tb, "tmpX", g.yc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.sw.lI = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = X(a, "LIST", g.j.mc) || "[]",
    d = D(a, "WHERE1"),
    e = D(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.Kg(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.Kg(a, "AT1", 1, !1, g.j.El);
        f = c + ".length - " + f;
        break;
      case "FIRST":
        f = "0";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    switch (e) {
      case "FROM_START":
        a = g.j.Kg(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.Kg(a, "AT2", 0, !1, g.j.El);
        a = c + ".length - " + a;
        break;
      case "LAST":
        a = c + ".length";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    c = c + ".slice(" + f + ", " + a + ")";
  } else {
    f = g.j.Kg(a, "AT1");
    a = g.j.Kg(a, "AT2");
    var h = g.j.sw.lI,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      Y("subsequence" + k[d] + k[e], [
        "function " +
          g.j.Ze +
          "(sequence" +
          ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") +
          ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
          ") {",
        "  var start = " + h("sequence", d, "at1") + ";",
        "  var end = " + h("sequence", e, "at2") + " + 1;",
        "  return sequence.slice(start, end);",
        "}",
      ]) +
      "(" +
      c +
      ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") +
      ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
      ")";
  }
  return [c, g.j.xb];
};
g.j.lists_sort = function (a) {
  var c = X(a, "LIST", g.j.xb) || "[]",
    d = "1" === D(a, "DIRECTION") ? 1 : -1;
  a = D(a, "TYPE");
  var e = Y("listsGetSortCompare", [
    "function " + g.j.Ze + "(type, direction) {",
    "  var compareFuncs = {",
    '    "NUMERIC": function(a, b) {',
    "        return Number(a) - Number(b); },",
    '    "TEXT": function(a, b) {',
    "        return a.toString() > b.toString() ? 1 : -1; },",
    '    "IGNORE_CASE": function(a, b) {',
    "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },",
    "  };",
    "  var compare = compareFuncs[type];",
    "  return function(a, b) { return compare(a, b) * direction; }",
    "}",
  ]);
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.xb];
};
g.j.lists_split = function (a) {
  var c = X(a, "INPUT", g.j.mc),
    d = X(a, "DELIM", g.j.hb) || "''";
  a = D(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.xb];
};
g.j.lists_reverse = function (a) {
  return [(X(a, "LIST", g.j.xb) || "[]") + ".slice().reverse()", g.j.xb];
};
g.j.XI = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.me && (d += V(g.j.me, a));
  do {
    var e = X(a, "IF" + c, g.j.hb) || "false";
    var f = hf(a, "DO" + c);
    g.j.ad && (f = W(V(g.j.ad, a), g.j.Gd) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (z(a, "IF" + c));
  if (z(a, "ELSE") || g.j.ad)
    (f = hf(a, "ELSE")),
      g.j.ad && (f = W(V(g.j.ad, a), g.j.Gd) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      D(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.sz : g.j.YF,
    e = X(a, "A", d) || "0";
  a = X(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == D(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.Lt : g.j.Mt,
    e = X(a, "A", d);
  a = X(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.kn;
  return ["!" + (X(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == D(a, "BOOL") ? "true" : "false", g.j.Vj];
};
g.j.logic_null = function () {
  return ["null", g.j.Vj];
};
g.j.logic_ternary = function (a) {
  var c = X(a, "IF", g.j.qq) || "false",
    d = X(a, "THEN", g.j.qq) || "null";
  a = X(a, "ELSE", g.j.qq) || "null";
  return [c + " ? " + d + " : " + a, g.j.qq];
};
g.j.ZI = {};
g.j.controls_repeat_ext = function (a) {
  var c = w(a, "TIMES")
      ? String(Number(D(a, "TIMES")))
      : X(a, "TIMES", g.j.sh) || "0",
    d = hf(a, "DO");
  d = jf(d, a);
  a = "";
  var e = Q(g.j.Tb, "count", g.yc),
    f = c;
  c.match(/^\w+$/) ||
    g.hj(c) ||
    ((f = Q(g.j.Tb, "repeat_end", g.yc)),
    (a += "var " + f + " = " + c + ";\n"));
  return (
    a +
    ("for (var " +
      e +
      " = 0; " +
      e +
      " < " +
      f +
      "; " +
      e +
      "++) {\n" +
      d +
      "}\n")
  );
};
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function (a) {
  var c = "UNTIL" == D(a, "MODE"),
    d = X(a, "BOOL", c ? g.j.kn : g.j.hb) || "false",
    e = hf(a, "DO");
  e = jf(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = g.j.Tb.Yd(D(a, "VAR"), g.yc),
    d = X(a, "FROM", g.j.sh) || "0",
    e = X(a, "TO", g.j.sh) || "0",
    f = X(a, "BY", g.j.sh) || "1",
    h = hf(a, "DO");
  h = jf(h, a);
  if (g.hj(d) && g.hj(e) && g.hj(f)) {
    var k = Number(d) <= Number(e);
    a =
      "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
    c = Math.abs(Number(f));
    a =
      (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) +
      (") {\n" + h + "}\n");
  } else
    (a = ""),
      (k = d),
      d.match(/^\w+$/) ||
        g.hj(d) ||
        ((k = Q(g.j.Tb, c + "_start", g.yc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.hj(e) ||
        ((d = Q(g.j.Tb, c + "_end", g.yc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = Q(g.j.Tb, c + "_inc", g.yc)),
      (a += "var " + e + " = "),
      (a = g.hj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.Gd + e + " = -" + e + ";\n")),
      (a += "}\n"),
      (a +=
        "for (" +
        c +
        " = " +
        k +
        "; " +
        e +
        " >= 0 ? " +
        c +
        " <= " +
        d +
        " : " +
        c +
        " >= " +
        d +
        "; " +
        c +
        " += " +
        e +
        ") {\n" +
        h +
        "}\n");
  return a;
};
g.j.controls_forEach = function (a) {
  var c = g.j.Tb.Yd(D(a, "VAR"), g.yc),
    d = X(a, "LIST", g.j.sh) || "[]",
    e = hf(a, "DO");
  e = jf(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = Q(g.j.Tb, c + "_list", g.yc)), (a += "var " + f + " = " + d + ";\n"));
  d = Q(g.j.Tb, c + "_index", g.yc);
  e = g.j.Gd + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.me && (c += V(g.j.me, a));
  g.j.ad && (c += V(g.j.ad, a));
  if (g.j.me) {
    var d = g.ua.cf.Vp.IB(a);
    d && !d.Ej && (c += V(g.j.me, d));
  }
  switch (D(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.OJ = {};
g.j.procedures_defreturn = function (a) {
  var c = g.j.Tb.Yd(D(a, "NAME"), g.pn),
    d = "";
  g.j.me && (d += V(g.j.me, a));
  g.j.ad && (d += V(g.j.ad, a));
  d && (d = W(d, g.j.Gd));
  var e = "";
  g.j.kq && (e = W(V(g.j.kq, a), g.j.Gd));
  var f = hf(a, "STACK"),
    h = X(a, "RETURN", g.j.hb) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.Gd + "return " + h + ";\n");
  for (var l = [], m = a.Uh(), n = 0; n < m.length; n++)
    l[n] = g.j.Tb.Yd(m[n], g.yc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.Bs(a, d);
  g.j.fk["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (
    var c = g.j.Tb.Yd(D(a, "NAME"), g.pn), d = [], e = a.Uh(), f = 0;
    f < e.length;
    f++
  )
    d[f] = X(a, "ARG" + f, g.j.hb) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.xb];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (X(a, "CONDITION", g.j.hb) || "false") + ") {\n";
  g.j.ad && (c += W(V(g.j.ad, a), g.j.Gd));
  a.$i
    ? ((a = X(a, "VALUE", g.j.hb) || "null"),
      (c += g.j.Gd + "return " + a + ";\n"))
    : (c += g.j.Gd + "return;\n");
  return c + "}\n";
};
g.j.mL = {};
g.j.variables_get = function (a) {
  return [g.j.Tb.Yd(D(a, "VAR"), g.yc), g.j.Vj];
};
g.j.variables_set = function (a) {
  var c = X(a, "VALUE", g.j.sh) || "0";
  return g.j.Tb.Yd(D(a, "VAR"), g.yc) + " = " + c + ";\n";
};
for (var nf in g.ua.sd.kt) g.M.controls_if[nf] = g.ua.sd.kt[nf];
g.M.controls_if.R = function () {
  this.Pb = g.i.CONTROLS_IF_HELPURL;
  this.Vc(g.i.LOGIC_HUE);
  L(M(this, "IF0").Sb("Boolean"), "if (");
  L(N(this), ") {");
  Xb(this, "DO0");
  L(N(this, "TAIL"), "}");
  this.Wc(!0);
  this.Ve(!0);
  this.Ue(!0);
  this.Cj(new g.lc(["controls_if_elseif", "controls_if_else"]));
  g.ua.sd.yy.apply(this);
};
g.M.controls_if.Yc = function () {
  z(this, "ELSE") && (this.Ab("ELSEMSG"), this.Ab("ELSE"));
  for (var a = 1; z(this, "IF" + a); )
    this.Ab("IF" + a), this.Ab("TAIL" + a), this.Ab("DO" + a), a++;
  for (a = 1; a <= this.se; a++)
    L(M(this, "IF" + a).Sb("Boolean"), "} else if ("),
      L(N(this, "TAIL" + a), ") {"),
      Xb(this, "DO" + a);
  this.pf && (L(N(this, "ELSEMSG"), "} else {"), Xb(this, "ELSE"));
  Yb(this, "TAIL", null);
};
g.M.logic_compare.R = function () {
  this.Pb = g.i.LOGIC_COMPARE_HELPURL;
  this.Vc(g.i.LOGIC_HUE);
  this.ie(!0, "Boolean");
  M(this, "A");
  L(
    M(this, "B"),
    new g.eb([
      ["==", "EQ"],
      ["!=", "NEQ"],
      ["<", "LT"],
      ["<=", "LTE"],
      [">", "GT"],
      [">=", "GTE"],
    ]),
    "OP"
  );
  this.Wc(!0);
  var a = this;
  this.bb(function () {
    var c = D(a, "OP");
    return {
      EQ: g.i.LOGIC_COMPARE_TOOLTIP_EQ,
      NEQ: g.i.LOGIC_COMPARE_TOOLTIP_NEQ,
      LT: g.i.LOGIC_COMPARE_TOOLTIP_LT,
      LTE: g.i.LOGIC_COMPARE_TOOLTIP_LTE,
      GT: g.i.LOGIC_COMPARE_TOOLTIP_GT,
      GTE: g.i.LOGIC_COMPARE_TOOLTIP_GTE,
    }[c];
  });
  this.Fm = [null, null];
};
g.i.LOGIC_OPERATION_AND = "&&";
g.i.LOGIC_OPERATION_OR = "||";
g.i.LOGIC_NEGATE_TITLE = "! %1";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.M.controls_whileUntil.R = function () {
  O(this, {
    message0: "while ( %1 ) { %2 %3 }",
    args0: [
      { type: "input_value", name: "BOOL", check: "Boolean" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    tooltip: g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
    helpUrl: g.i.CONTROLS_WHILEUNTIL_HELPURL,
  });
};
g.M.controls_for.R = function () {
  O(this, {
    message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR1", text: "?" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR2", text: "?" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    helpUrl: g.i.CONTROLS_FOR_HELPURL,
  });
  var a = this;
  this.bb(function () {
    return g.i.CONTROLS_FOR_TOOLTIP.replace("%1", D(a, "VAR"));
  });
};
g.M.controls_for.onchange = function () {
  var a = w(this, "VAR").xd();
  Vb(this, a, "VAR1");
  Vb(this, a, "VAR2");
};
g.j.controls_for = function (a) {
  var c = g.j.Tb.Yd(D(a, "VAR"), g.$.pq),
    d = X(a, "FROM", g.j.sh) || "0",
    e = X(a, "TO", g.j.sh) || "0",
    f = hf(a, "DO");
  f = jf(f, a.id);
  return (
    "for (var " +
    c +
    " = " +
    d +
    "; " +
    c +
    " < " +
    e +
    "; " +
    c +
    " += 1) {\n" +
    f +
    "}\n"
  );
};
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
g.M.math_arithmetic.R = function () {
  O(this, {
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["+", "ADD"],
          ["-", "MINUS"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    helpUrl: g.i.MATH_ARITHMETIC_HELPURL,
  });
  var a = this;
  this.bb(function () {
    var c = D(a, "OP");
    return {
      ADD: g.i.MATH_ARITHMETIC_TOOLTIP_ADD,
      MINUS: g.i.MATH_ARITHMETIC_TOOLTIP_MINUS,
      MULTIPLY: g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
      DIVIDE: g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
    }[c];
  });
};
g.M.math_change.R = function () {
  O(this, {
    message0: "%1 += %2;",
    args0: [
      { type: "field_variable", name: "VAR", variable: "name" },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.VARIABLES_HUE,
    helpUrl: g.i.MATH_CHANGE_HELPURL,
  });
  var a = this;
  this.bb(function () {
    return g.i.MATH_CHANGE_TOOLTIP.replace("%1", w(a, "VAR").gd().name);
  });
};
g.j.math_change = function (a) {
  var c = X(a, "DELTA", g.j.Hi) || "0";
  return g.j.Tb.Yd(D(a, "VAR"), g.$.pq) + " += " + c + ";\n";
};
g.M.math_random_int.R = function () {
  O(this, {
    message0: "%1(%2,%3)",
    args0: [
      "Math.randomInt",
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    tooltip: g.i.MATH_RANDOM_INT_TOOLTIP,
    helpUrl: g.i.MATH_RANDOM_INT_HELPURL,
  });
};
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
g.i.LISTS_CREATE_EMPTY_TITLE = "[ ]";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "[";
g.M.lists_create_with.Yc = function () {
  z(this, "TAIL") && this.Ab("TAIL");
  this.ee && z(this, "EMPTY")
    ? this.Ab("EMPTY")
    : this.ee ||
      z(this, "EMPTY") ||
      L(N(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
  for (var a = 0; a < this.ee; a++)
    if (!z(this, "ADD" + a)) {
      var c = M(this, "ADD" + a);
      0 == a ? L(c, g.i.LISTS_CREATE_WITH_INPUT_WITH) : L(c, ",");
    }
  for (; z(this, "ADD" + a); ) this.Ab("ADD" + a), a++;
  this.ee && L(N(this, "TAIL"), "]");
};
g.M.lists_getIndex = {
  R: function () {
    O(this, {
      message0: "%1[%2]",
      args0: [
        { type: "input_value", name: "VALUE", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
      ],
      inputsInline: !0,
      output: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_GET_INDEX_HELPURL,
    });
  },
};
g.M.lists_setIndex = {
  R: function () {
    O(this, {
      message0: "%1[%2] = %3;",
      args0: [
        { type: "input_value", name: "LIST", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
        { type: "input_value", name: "TO" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_SET_INDEX_HELPURL,
    });
  },
};
g.i.LISTS_LENGTH_TITLE = "%1 . length";
g.M.variables_get.R = function () {
  this.Pb = g.i.VARIABLES_GET_HELPURL;
  this.Vc(g.i.VARIABLES_HUE);
  L(N(this), new g.Fd("name"), "VAR");
  this.ie(!0);
  this.bb(g.i.VARIABLES_GET_TOOLTIP);
};
g.M.variables_set.R = function () {
  this.Pb = g.i.VARIABLES_SET_HELPURL;
  this.Vc(g.i.VARIABLES_HUE);
  L(L(L(M(this, "VALUE"), "var"), new g.Fd("name"), "VAR"), "=");
  L(N(this), ";");
  this.Wc(!0);
  this.Ve(!0);
  this.Ue(!0);
  this.bb(g.i.VARIABLES_SET_TOOLTIP);
};
g.M.procedures_defnoreturn.R = function () {
  var a = new g.Ic("", g.za.ws);
  L(L(L(L(L(N(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  this.dh(!0);
  L(N(this), "}");
  this.Cj(new g.lc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFNORETURN_COMMENT &&
    this.bh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
  this.Vc(g.i.PROCEDURES_HUE);
  this.bb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
  this.Pb = g.i.PROCEDURES_DEFNORETURN_HELPURL;
  this.Ma = [];
  this.oc = [];
  this.dh(!0);
  this.eg = null;
};
g.M.procedures_defreturn.R = function () {
  var a = new g.Ic("", g.za.ws);
  L(L(L(L(L(N(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  L(Tb(M(this, "RETURN"), g.ll), "return");
  L(N(this), "}");
  this.Cj(new g.lc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFRETURN_COMMENT && this.bh(g.i.PROCEDURES_DEFRETURN_COMMENT);
  this.Vc(g.i.PROCEDURES_HUE);
  this.bb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
  this.Pb = g.i.PROCEDURES_DEFRETURN_HELPURL;
  this.Ma = [];
  this.oc = [];
  this.dh(!0);
  this.eg = null;
};
g.i.PROCEDURES_BEFORE_PARAMS = "";
g.M.procedures_callnoreturn.R = function () {
  this.Pb = g.i.PROCEDURES_CALLNORETURN_HELPURL;
  this.Vc(g.i.PROCEDURES_HUE);
  L(L(N(this), "", "NAME"), "(");
  L(N(this, "TAIL"), ");");
  this.Wc(!0);
  this.Ve(!0);
  this.Ue(!0);
  this.bb(g.i.PROCEDURES_CALLNORETURN_TOOLTIP);
  this.Ma = [];
  this.gi = {};
};
g.M.procedures_callnoreturn.Yc = function () {
  for (var a = 0; a < this.Ma.length; a++)
    if (!z(this, "ARG" + a)) {
      new g.qd(this.Ma[a]);
      var c = M(this, "ARG" + a);
      0 < a && L(c, ",");
      c.R();
    }
  for (; z(this, "ARG" + a); ) this.Ab("ARG" + a), a++;
  Yb(this, "TAIL", null);
};
g.M.procedures_callreturn.R = function () {
  this.Pb = g.i.PROCEDURES_CALLRETURN_HELPURL;
  this.Vc(g.i.PROCEDURES_HUE);
  L(L(N(this), "", "NAME"), "(");
  L(N(this, "TAIL"), ")");
  this.Wc(!0);
  this.ie(!0);
  this.bb(g.i.PROCEDURES_CALLRETURN_TOOLTIP);
  this.Ma = [];
  this.gi = {};
};
g.M.procedures_callreturn.Yc = g.M.procedures_callnoreturn.Yc;
delete g.M.procedures_ifreturn;
g.M.pond_scan = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: [
        "scan",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
      ],
      inputsInline: !0,
      output: "Number",
      colour: 290,
      tooltip: S("Pond_scanTooltip"),
    });
  },
};
g.j.pond_scan = function (a) {
  return ["scan(" + (X(a, "DEGREE", g.j.hb) || 0) + ")", g.j.xb];
};
g.M.pond_cannon = {
  R: function () {
    O(this, {
      message0: "%1(%2, %3);",
      args0: [
        "cannon",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
        { type: "input_value", name: "RANGE", check: "Number" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S("Pond_cannonTooltip"),
    });
  },
};
g.j.pond_cannon = function (a) {
  var c = X(a, "DEGREE", g.j.rz) || 0;
  a = X(a, "RANGE", g.j.rz) || 0;
  return "cannon(" + c + ", " + a + ");\n";
};
g.M.pond_swim = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: [
        "swim",
        { type: "input_value", name: "DEGREE", check: ["Number", "Angle"] },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S("Pond_swimTooltip"),
    });
  },
};
g.j.pond_swim = function (a) {
  return "swim(" + (X(a, "DEGREE", g.j.hb) || 0) + ");\n";
};
g.M.pond_stop = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: ["stop", ""],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S("Pond_stopTooltip"),
    });
  },
};
g.j.pond_stop = function () {
  return "stop();\n";
};
g.M.pond_health = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["health", ""],
      output: "Number",
      colour: 290,
      tooltip: S("Pond_healthTooltip"),
    });
  },
};
g.j.pond_health = function () {
  return ["health()", g.j.xb];
};
g.M.pond_speed = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["speed", ""],
      output: "Number",
      colour: 290,
      tooltip: S("Pond_speedTooltip"),
    });
  },
};
g.j.pond_speed = function () {
  return ["speed()", g.j.xb];
};
g.M.pond_getX = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["getX", ""],
      output: "Number",
      colour: 290,
      tooltip: S("Pond_locXTooltip"),
    });
  },
};
g.j.pond_getX = function () {
  return ["getX()", g.j.xb];
};
g.M.pond_getY = {
  R: function () {
    O(this, {
      message0: "%1(%2)",
      args0: ["getY", ""],
      output: "Number",
      colour: 290,
      tooltip: S("Pond_locYTooltip"),
    });
  },
};
g.j.pond_getY = function () {
  return ["getY()", g.j.xb];
};
g.M.pond_log = {
  R: function () {
    O(this, {
      message0: "%1(%2);",
      args0: ["log", { type: "input_value", name: "VALUE" }],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: S("Pond_logTooltip"),
    });
  },
};
g.j.pond_log = function (a) {
  return "log(" + (X(a, "VALUE", g.j.hb) || "''") + ");\n";
};
g.M.pond_math_number = {
  R: function () {
    this.Pb = g.i.MATH_NUMBER_HELPURL;
    this.Vc(g.i.MATH_HUE);
    L(N(this, "DUMMY"), new g.Ed(0), "NUM");
    this.ie(!0, "Number");
    this.bb(g.i.MATH_NUMBER_TOOLTIP);
  },
  sb: function () {
    var a = document.createElement("mutation");
    a.setAttribute("angle_field", w(this, "NUM").constructor == g.qa);
    return a;
  },
  Wb: function (a) {
    a = "true" == a.getAttribute("angle_field");
    this.Xx(a);
  },
  onchange: function () {
    if (this.u && this.O.ma && this.O.ma.xg) {
      var a = w(this, "NUM");
      -1 != this.O.ma.xg.indexOf("Angle")
        ? a.constructor != g.qa && this.Xx(!0)
        : a.constructor != g.Ed && this.Xx(!1);
    }
  },
  Xx: function (a) {
    g.h.disable();
    var c = z(this, "DUMMY"),
      d = w(this, "NUM"),
      e = d.getValue();
    a
      ? (Qb(c, "NUM"), (d = new g.qa("")), L(c, d, "NUM"), d.setValue(e))
      : (Qb(c, "NUM"), L(c, new g.Ed(e), "NUM"));
    this.pa && this.Ga();
    g.h.enable();
  },
};
g.M.pond_math_single = {
  R: function () {
    O(this, {
      message0: "%1 (%2)",
      args0: [
        {
          type: "field_dropdown",
          name: "OP",
          options: [
            ["Math.sqrt", "ROOT"],
            ["Math.abs", "ABS"],
            ["Math.sin_deg", "SIN"],
            ["Math.cos_deg", "COS"],
            ["Math.tan_deg", "TAN"],
            ["Math.asin_deg", "ASIN"],
            ["Math.acos_deg", "ACOS"],
            ["Math.atan_deg", "ATAN"],
          ],
        },
        { type: "input_value", name: "NUM", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: g.i.MATH_HUE,
      helpUrl: g.i.MATH_SINGLE_HELPURL,
    });
    var a = this;
    this.bb(function () {
      var c = D(a, "OP");
      return {
        ROOT: g.i.MATH_SINGLE_TOOLTIP_ROOT,
        ABS: g.i.MATH_SINGLE_TOOLTIP_ABS,
        SIN: g.i.MATH_TRIG_TOOLTIP_SIN,
        COS: g.i.MATH_TRIG_TOOLTIP_COS,
        TAN: g.i.MATH_TRIG_TOOLTIP_TAN,
        ASIN: g.i.MATH_TRIG_TOOLTIP_ASIN,
        ACOS: g.i.MATH_TRIG_TOOLTIP_ACOS,
        ATAN: g.i.MATH_TRIG_TOOLTIP_ATAN,
      }[c];
    });
  },
};
g.j.pond_math_single = function (a) {
  var c = D(a, "OP");
  a = X(a, "NUM", g.j.hb) || "0";
  switch (c) {
    case "ABS":
      c = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      c = "Math.sqrt(" + a + ")";
      break;
    case "SIN":
      c = "Math.sin_deg(" + a + ")";
      break;
    case "COS":
      c = "Math.cos_deg(" + a + ")";
      break;
    case "TAN":
      c = "Math.tan_deg(" + a + ")";
      break;
    case "ASIN":
      c = "Math.asin_deg(" + a + ")";
      break;
    case "ACOS":
      c = "Math.acos_deg(" + a + ")";
      break;
    case "ATAN":
      c = "Math.atan_deg(" + a + ")";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [c, g.j.xb];
};
g.j.pond_math_number = g.j.math_number;
g.M.pond_loc_x = g.M.pond_getX;
g.j.pond_loc_x = g.j.pond_getX;
g.M.pond_loc_y = g.M.pond_getY;
g.j.pond_loc_y = g.j.pond_getY;
g.M.pond_controls_if = g.M.controls_if;
g.j.pond_controls_if = g.j.controls_if;
g.M.pond_loops_while = g.M.controls_whileUntil;
g.j.pond_loops_while = g.j.controls_whileUntil;
g.M.pond_math_arithmetic = g.M.math_arithmetic;
g.j.pond_math_arithmetic = g.j.math_arithmetic;
g.M.pond_math_change = g.M.math_change;
g.j.pond_math_change = g.j.math_change;
var of = of || {};
function pf(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.v = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.WN = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!qf) {
  var qf,
    rf = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (rf = navigator.userAgent);
  var sf = 0 == rf.indexOf("Opera");
  qf = {
    rO: { oM: "ScriptEngine" in window },
    ZM: sf,
    af: !sf && -1 != rf.indexOf("MSIE"),
    cA: !sf && -1 != rf.indexOf("WebKit"),
  };
}
if (!tf) var tf = {};
if (!uf) var uf = {};
if (!vf) var vf = {};
if (!wf) var wf = {};
if (!xf) var xf = {};
if (!yf) var yf = {};
var zf = of.KL ? { yO: !0 } : {};
function Af() {
  throw Error("Do not instantiate directly");
}
Af.prototype.LA = null;
Af.prototype.toString = function () {
  return this.content;
};
function Bf(a) {
  if (null != a)
    switch (a.LA) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Cf() {
  Af.call(this);
}
pf(Cf, Af);
Cf.prototype.pH = zf;
function Z(a) {
  return null != a && a.pH === zf
    ? a
    : Df(String(String(a)).replace(Ef, Ff), Bf(a));
}
var Df = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.LA = e);
      return f;
    };
  })(Cf),
  Gf = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
function Ff(a) {
  return Gf[a];
}
var Ef = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Hf() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function If() {
  var a =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((gd
      ? '<a href="index.html?lang=' + Z(ed) + '">'
      : '<a href="./?lang=' + Z(ed) + '">') +
      "Codekid</a> : " +
      Z("Pond Tutor") +
      "</span>");
  if (R) {
    var c = " &nbsp; ";
    for (var d = 1; 11 > d; d++) {
      var e = "?lang=" + Z(ed) + "&level=" + Z(d);
      c +=
        " " +
        (d == R
          ? '<span class="level_number level_done" id="level' +
            Z(d) +
            '">' +
            Z(d) +
            "</span>"
          : 10 == d
          ? '<a class="level_number" id="level' +
            Z(d) +
            '" href="' +
            Z(e) +
            '">' +
            Z(d) +
            "</a>"
          : '<a class="level_dot" id="level' +
            Z(d) +
            '" href="' +
            Z(e) +
            '"></a>');
    }
  } else c = "";
  a =
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span><span id="Pond_logTooltip">Prints a number to your browser\'s console.</span></div><div style="display: none"><span id="Pond_playerName">Player</span><span id="Pond_targetName">Target</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span></div>' +
    (a +
      c +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>');
  switch (R) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      a +=
        '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Pond"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block>' +
        (5 <= R
          ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>'
          : "") +
        (7 <= R
          ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block>'
          : "") +
        (9 <= R ? '<block type="pond_stop"></block>' : "") +
        (9 <= R
          ? '<block type="pond_getX"></block><block type="pond_getY"></block>'
          : "") +
        "</category>" +
        (3 <= R
          ? '<category name="Logic">' +
            (9 <= R
              ? '<block type="controls_if"></block><block type="logic_compare"></block>'
              : "") +
            '<block type="logic_boolean"></block></category><category name="Loops"><block type="controls_whileUntil"></block></category>'
          : "") +
        '<category name="Math"><block type="pond_math_number"><mutation angle_field="false"></mutation></block></category></xml><div id="blockly"></div>';
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      a += '<div id="editor"></div>';
  }
  return (a +=
    '\n<div id="playerTarget" style="display: none">\n</div>\n\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
    (Hf() + "</div>") +
    (5 == R || 6 == R
      ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>' +
        Hf() +
        "</div>"
      : "") +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == R || 2 == R
      ? "Use the 'cannon' command to hit the target. The first parameter is the angle, the second parameter is the range. Find the right combination." +
        (1 == R
          ? '<br><br><svg height="41" width="250" class="geras-renderer classic-theme"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 222.36 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 125.01,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z M 193.4,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 221.86 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 125.51,5.5 v 27 h -36.02 M 83.89,24.3 l 3.68,-2.1 M 193.9,5.5 v 27 h -38.31 M 149.99,24.3 l 3.68,-2.1"></path><g transform="translate(89.99,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><g transform="translate(156.09,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">70</text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">cannon</text><text class="blocklyText" y="12.5" transform="translate(68.11,10)">(</text><text class="blocklyText" y="12.5" transform="translate(135.01,10)">,</text><text class="blocklyText" y="12.5" transform="translate(203.4,10)">);</text></g></svg>'
          : 2 == R
          ? "<pre>cannon(0, 70);</pre>"
          : "")
      : 3 == R || 4 == R
      ? "This target needs to be hit many times. Use a 'while (true)' loop to do something indefinitely." +
        (3 == R
          ? '<br><br><svg height="92" width="250" class="geras-renderer classic-theme"><g><path transform="translate(1,1)" fill="#498449" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path fill="#5ba55b" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 50 H 162.94 v 36 H 50 l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8 v 9 a 8,8 0 0,0 8,8 H 50 H 50 v 25 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 129.08,5 h -60.71 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 60.71 z"></path><path class="blocklyPathLight" stroke="#8cc08c" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 49.5 M 49.5,0.5 H 162.44 M 49.5,36.5 M 21.98,59.01 a 8.5,8.5 0 0,0 6.01,2.48 H 49.5 M 49.5,61.5 H 49.5 M 2.69,83.3 A 7.5,7.5 0 0,1 0.5,78 V 8 M 129.58,5.5 v 27 h -60.71 M 63.27,24.3 l 3.68,-2.1"></path><text class="blocklyText" y="12.5" transform="translate(10,10)">while&#160;(</text><text class="blocklyText" y="12.5" transform="translate(139.08,10)">)&#160;{</text><text class="blocklyText" y="12.5" transform="translate(10,66)">}</text><g transform="translate(69.37,6)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b80a5" d="m 0,0 H 58.71 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 58.21 M 58.21,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="48.71"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">true<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g></g></g></svg>'
          : 4 == R
          ? "<pre>while (true) {\n  ...\n}</pre>"
          : "")
      : 5 == R || 6 == R
      ? "This opponent moves back and forth, making it hard to hit. The 'scan' expression returns the exact range to the opponent in the specified direction." +
        (5 == R
          ? '<br><br><svg height="37" width="250" class="geras-renderer classic-theme"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,0 H 20 H 132.76 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 107.88,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 132.26 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 108.38,5.5 v 27 h -36.02 M 66.76,24.3 l 3.68,-2.1"></path><g transform="translate(72.86,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">scan</text><text class="blocklyText" y="12.5" transform="translate(50.97,10)">(</text><text class="blocklyText" y="12.5" transform="translate(117.88,10)">)</text></g></svg><br><br>'
          : 6 == R
          ? "<pre>scan(0)</pre>"
          : "") +
        "This range is exactly what the 'cannon' command needs to fire accurately."
      : 7 == R || 8 == R
      ? "This opponent is too far away to use the cannon (which has a limit of 70 meters). Instead, use the 'swim' command to start swimming towards the opponent and crash into it." +
        (7 == R
          ? '<br><br><svg height="41" width="250" class="geras-renderer classic-theme"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 40 H 139.25 v 36 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z M 110.3,5 h -36.02 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 36.02 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 39.5 M 39.5,0.5 H 138.75 M 2.69,33.3 A 7.5,7.5 0 0,1 0.5,28 V 8 M 110.8,5.5 v 27 h -36.02 M 69.18,24.3 l 3.68,-2.1"></path><g transform="translate(75.28,6)"><path transform="translate(1,1)" fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#bdc2db" d="m 0,0 H 34.02 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" style="display: none;" d="m 0.5,0.5 H 33.52 M 33.52,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="24.02"></rect><text class="blocklyText" y="12.5">0<tspan>\u00b0</tspan></text></g></g><text class="blocklyText" y="12.5" transform="translate(10,10)">swim</text><text class="blocklyText" y="12.5" transform="translate(53.39,10)">(</text><text class="blocklyText" y="12.5" transform="translate(120.3,10)">);</text></g></svg>'
          : 8 == R
          ? "<pre>swim(0);</pre>"
          : "")
      : 9 == R
      ? "This opponent is also too far away to use the cannon. But you are too weak to survive a collision. Swim towards the opponent while your horizontal location is less than than 50. Then 'stop' and use the cannon." +
        (9 == R
          ? '<br><br><svg height="37" width="250" class="geras-renderer classic-theme"><g transform="translate(8,0)"><path transform="translate(1,1)" fill="#496684" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path fill="#5b80a5" d="m 0,0 H 20 H 194.25 v 36 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z M 97.93,5 h -81.93 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 6 h 81.93 z M 184.25,5 h -38.31 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 7 h 38.31 z"></path><path class="blocklyPathLight" stroke="#8ca6c0" d="m 0.5,0.5 H 19.5 M 19.5,0.5 H 193.75 M 0.5,35.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1 M 98.43,5.5 v 26 h -81.93 M 10.9,24.3 l 3.68,-2.1 M 184.75,5.5 v 27 h -38.31 M 140.83,24.3 l 3.68,-2.1"></path><g class="blocklyEditableText" transform="translate(107.93,10)" style="cursor: default;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="32.0"></rect><text class="blocklyText" y="12.5" text-anchor="start" x="0">&lt;<tspan style="fill: rgb(91, 128, 165);"> \u25be</tspan></text></g><g transform="translate(146.93,6)"><path transform="translate(1,1)" fill="#495284" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#5b67a5" d="m 0,0 H 36.31 v 25 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#8c95c0" d="m 0.5,0.5 H 35.81 M 35.81,0.5 M 0.5,24.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><g class="blocklyEditableText" transform="translate(10,5)" style="cursor: text;"><rect rx="4" ry="4" x="-5" y="0" height="16" width="26.31"></rect><text class="blocklyText" y="12.5">50</text></g></g><g transform="translate(17,6)"><path transform="translate(1,1)" fill="#7a4984" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path fill="#995ba5" d="m 0,0 H 79.93 v 24 H 0 V 20 c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,0.5 H 79.43 M 79.43,0.5 M 0.5,23.5 V 18.5 m -7.36,-0.5 q -1.52,-5.5 0,-11 m 7.36,1 V 0.5 H 1"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">getX</text><text class="blocklyText" y="12.5" transform="translate(50.16,5)">(</text><text class="blocklyText" y="12.5" transform="translate(65.05,5)">)</text></g></g></svg><br><br><svg height="31" width="250" class="geras-renderer classic-theme"><g><path transform="translate(1,1)" fill="#7a4984" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path fill="#995ba5" d="m 0,8 A 8,8 0 0,1 8,0 H 15 l 6,4 3,0 6,-4 H 81.56 v 24 H 29.5 l -6,4 -3,0 -6,-4 H 8 a 8,8 0 0,1 -8,-8 z"></path><path class="blocklyPathLight" stroke="#b88cc0" d="m 0.5,7.5 A 7.5,7.5 0 0,1 8,0.5 H 15 l 6,4 3,0 6,-4 H 81.06 M 81.06,0.5 M 2.69,21.3 A 7.5,7.5 0 0,1 0.5,16 V 8"></path><text class="blocklyText" y="12.5" transform="translate(10,5)">stop</text><text class="blocklyText" y="12.5" transform="translate(47.71,5)">(</text><text class="blocklyText" y="12.5" transform="translate(62.6,5)">);</text></g></svg>'
          : 10 == R
          ? "<pre>getX() &lt; 50</pre><pre>stop();</pre>"
          : "")
      : 10 == R
      ? "This opponent will move away when it is hit. Swim towards it if it is out of range (70 meters)."
      : "") +
    "</div>" +
    Hf() +
    "</div>");
}
var od = "pond-tutor";
window.addEventListener("load", function () {
  document.body.innerHTML = If();
  Ed();
  ze();
  pd("runButton", Qe);
  pd("resetButton", Te);
  pd("docsButton", Oe);
  pd("closeDocs", Pe);
  Rd();
  Sd();
  pd("helpButton", Ue);
  2 > location.hash.length && !md(R) && setTimeout(Ue, 1e3);
  var a = -1 != dd.indexOf(ed),
    c = document.getElementById("blockly"),
    d = document.getElementById("editor"),
    e = document.getElementById("visualization");
  if (c) {
    var f = function () {
      c.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
      c.style.left = a ? "10px" : "420px";
      c.style.width = window.innerWidth - 440 + "px";
    };
    window.addEventListener("scroll", function () {
      f(null);
      g.Pm(A);
    });
    f(null);
    Kd();
    kf(
      g.j,
      "scan,cannon,drive,swim,stop,speed,damage,health,loc_x,getX,loc_y,getY,"
    );
    Id(
      7 == R
        ? '<xml><block type="pond_swim" x="70" y="70"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value></block></xml>'
        : '<xml><block type="pond_cannon" x="70" y="70"><value name="DEGREE"><shadow type="pond_math_number"><mutation angle_field="true"></mutation><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><mutation angle_field="false"></mutation><field name="NUM">70</field></shadow></value></block></xml>'
    );
  }
  if (d) {
    Bd = !0;
    var h = document.getElementById("containerCode");
    h.parentNode.removeChild(h);
    h = 8 == R ? "swim(0);" : "cannon(0, 70);";
    Ud();
    Id(h + "\n");
    f = function () {
      d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
      d.style.left = a ? "10px" : "420px";
      d.style.width = window.innerWidth - 440 + "px";
    };
    window.addEventListener("scroll", f);
    Td();
  }
  pd("runButton", Jf);
  window.addEventListener("resize", f);
  f(null);
  var k;
  for (h = 0; (k = Kf[h]); h++) {
    var l = S(k.name);
    l = new ne(l, k.start, k.mb);
    k.code
      ? ((k = document.getElementById(k.code).textContent), (l.EA = k))
      : (Me = l);
  }
  U.reset();
  Ce();
});
function Jf() {
  Dd = Bd ? Ad.getValue() : Re();
  Cd = Fd();
}
var Kf = [
  void 0,
  [
    { start: new g.g.N(50, 30), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(50, 70),
      mb: 99,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(70, 50), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(20, 50),
      mb: 99,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(20, 20), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(62.4264, 62.4264),
      mb: 0,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(50, 80), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(50, 20),
      mb: 0,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(90, 50), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(50, 50),
      mb: 0,
      name: "Pond_pendulumName",
      code: "playerPendulum",
    },
  ],
  [
    { start: new g.g.N(10, 50), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(50, 50),
      mb: 0,
      name: "Pond_pendulumName",
      code: "playerPendulum",
    },
  ],
  [
    { start: new g.g.N(20, 80), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(80, 20),
      mb: 99,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(50, 90), mb: 0, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(50, 10),
      mb: 99,
      name: "Pond_pendulumName",
      code: "playerPendulum",
    },
  ],
  [
    { start: new g.g.N(5, 50), mb: 99, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(95, 50),
      mb: 0,
      name: "Pond_targetName",
      code: "playerTarget",
    },
  ],
  [
    { start: new g.g.N(10, 10), mb: 50, name: "Pond_playerName", code: null },
    {
      start: new g.g.N(40, 40),
      mb: 0,
      name: "Pond_scaredName",
      code: "playerScared",
    },
  ],
][R];
Le = function (a) {
  clearTimeout(xe);
  0 != a &&
    1 == a &&
    0 == U.qn[0].Rs &&
    ((5 == R || 6 == R) && 2e5 < U.Qx
      ? ((a = document.getElementById("helpUseScan")),
        T.kp(a, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, T.Ox),
        T.Lx())
      : (window.localStorage && (window.localStorage[od + R] = Cd), T.mH()));
};
