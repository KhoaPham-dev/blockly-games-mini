// Automatically generated file.  Do not edit!

"use strict";
var f = {
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
  k = "ace ar fa he mzn ps ur".split(" "),
  l = window.BlocklyGamesLang,
  m = window.BlocklyGamesLanguages,
  n = /\.html$/.test(window.location.pathname);
function p(a, b) {
  return (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)")))
    ? decodeURIComponent(a[1].replace(/\+/g, "%20"))
    : b;
}
p("level", "NaN");
function q() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != k.indexOf(l) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", l);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var b = [], c = 0; c < m.length; c++) {
      var e = m[c];
      b.push([f[e], e]);
    }
    b.sort(function (h, g) {
      return h[0] > g[0] ? 1 : h[0] < g[0] ? -1 : 0;
    });
    for (c = a.options.length = 0; c < b.length; c++) {
      var d = b[c];
      e = d[1];
      d = new Option(d[0], e);
      e == l && (d.selected = !0);
      a.options.add(d);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (c = 1; 10 >= c; c++)
    (a = document.getElementById("level" + c)),
      (b = !!t(c)),
      a && b && (a.className += " level_done");
  (c = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(u, 1);
}
function v() {
  var a = document.getElementById("languageMenu");
  a = encodeURIComponent(a.options[a.selectedIndex].value);
  var b = window.location.search;
  b =
    1 >= b.length
      ? "?lang=" + a
      : /[?&]lang=[^&]*/.test(b)
      ? b.replace(/([?&]lang=)[^&]*/, "$1" + a)
      : b.replace(/\?/, "?lang=" + a + "&");
  window.location =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    b;
}
function t(a) {
  var b = w;
  try {
    var c = window.localStorage[b + a];
  } catch (e) {}
  return c;
}
function x(a) {
  var b;
  (b = document.getElementById(a))
    ? ((b = b.textContent), (b = b.replace(/\\n/g, "\n")))
    : (b = null);
  return null === b ? "[Unknown message: " + a + "]" : b;
}
function u() {
  if (!n) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function (c) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var b = document.createElement("script");
    b.async = 1;
    b.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(b);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
var y = {};
function z(a, b, c, e, d) {
  y[a] && y[a].abort();
  y[a] = new XMLHttpRequest();
  y[a].onload = function () {
    if (200 === this.status) c && c.call(this);
    else if (e) e.call(this);
    else {
      var h = x("Games_httpRequestError") + "\nXHR status: " + this.status;
      if ("object" === typeof BlocklyDialogs) {
        var g = document.getElementById("linkButton");
        BlocklyDialogs.D(g, h);
      } else alert(h);
    }
    y[a] = null;
  };
  d = d || "POST";
  y[a].open(d, a);
  "POST" === d &&
    y[a].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  y[a].send(b);
}
var A = A || {};
function B(a, b) {
  function c() {}
  c.prototype = b.prototype;
  a.F = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
  a.A = function (e, d, h) {
    return b.prototype[d].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!C) {
  var C,
    D = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (D = navigator.userAgent);
  var E = 0 == D.indexOf("Opera");
  C = {
    B: { o: "ScriptEngine" in window },
    u: E,
    s: !E && -1 != D.indexOf("MSIE"),
    v: !E && -1 != D.indexOf("WebKit"),
  };
}
if (!F) var F = {};
if (!G) var G = {};
if (!H) var H = {};
if (!I) var I = {};
if (!J) var J = {};
if (!K) var K = {};
var L = A.m ? { C: !0 } : {};
function M() {
  throw Error("Do not instantiate directly");
}
M.prototype.g = null;
M.prototype.toString = function () {
  return this.content;
};
function N(a) {
  if (null != a)
    switch (a.g) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function O() {
  M.call(this);
}
B(O, M);
O.prototype.h = L;
function P(a) {
  return null != a && a.h === L ? a : Q(String(String(a)).replace(R, S), N(a));
}
var Q = (function (a) {
    function b() {}
    b.prototype = a.prototype;
    return function (c, e) {
      var d = new b();
      d.content = String(c);
      void 0 !== e && (d.g = e);
      return d;
    };
  })(O),
  T = {
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
function S(a) {
  return T[a];
}
var R = /[\x00\x22\x26\x27\x3c\x3e]/g;
var U;
var w = "gallery",
  V = !0,
  W = !1,
  X = "";
function Y() {
  if (!W && V) {
    document.getElementById("loading").style.visibility = "visible";
    var a = "/gallery-api/view?app=" + encodeURIComponent(U);
    X && (a += "&cursor=" + encodeURIComponent(X));
    z(
      a,
      "",
      Z,
      function () {
        console.warn("Load returned status " + this.status);
        V = W = !1;
        401 === this.status && (location = "/admin");
      },
      "GET"
    );
    W = !0;
  }
}
function Z() {
  W = !1;
  document.getElementById("loading").style.visibility = "hidden";
  var a = JSON.parse(this.responseText);
  a.more || (V = !1);
  X = a.cursor;
  for (var b = 0; b < a.data.length; b++) {
    var c = a.data[b],
      e = document.createElement("div");
    var d = c.app;
    var h = c.uuid,
      g = c.thumb,
      r = c.title,
      aa = c["public"];
    c = c.key;
    d =
      '<div class="galleryThumb">' +
      (c
        ? '<input type="checkbox" id="publish-' +
          P(c) +
          '"' +
          (aa ? " checked " : "") +
          'onchange="Gallery.publish(this)">'
        : "") +
      '<a href="/' +
      P(d) +
      "?level=10#" +
      P(h) +
      '"><img src="' +
      P(g) +
      '"></a></div><div class="galleryTitle"><a href="/' +
      P(d) +
      "?level=10#" +
      P(h) +
      '">' +
      P(r) +
      "</a></div>";
    e.innerHTML = d;
    document.getElementById("gallery").appendChild(e);
  }
}
function ba() {
  document.getElementById("loading").getBoundingClientRect().top <=
    (window.innerHeight || document.documentElement.clientHeight) && Y();
}
window.addEventListener("load", function () {
  U = p("app", "");
  var a = "admin" == U;
  if (!a && -1 == ["turtle", "movie", "music"].indexOf(U))
    throw Error("Unknown app: " + U);
  a && (document.body.className = "admin");
  document.body.innerHTML =
    '<div style="display: none"><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span></div>';
  var b = a ? "" : x("Games_" + U) + " : ";
  a = document.body;
  var c = document.body.innerHTML;
  b = { lang: l, appName: b, i: n };
  var e = P(b.appName) + "Gallery";
  e =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((b.i
      ? '<a href="index.html?lang=' + P(b.lang) + '">'
      : '<a href="./?lang=' + P(b.lang) + '">') +
      "Codekid</a> : " +
      P(e) +
      "</span>");
  if (b.level) {
    for (var d = " &nbsp; ", h = b.j + 1, g = 1; g < h; g++) {
      var r = "?lang=" + P(b.lang) + "&level=" + P(g);
      d +=
        " " +
        (g == b.level
          ? '<span class="level_number level_done" id="level' +
            P(g) +
            '">' +
            P(g) +
            "</span>"
          : g == b.j
          ? '<a class="level_number" id="level' +
            P(g) +
            '" href="' +
            P(r) +
            '">' +
            P(g) +
            "</a>"
          : '<a class="level_dot" id="level' +
            P(g) +
            '" href="' +
            P(r) +
            '"></a>');
    }
    b = d;
  } else b = "";
  a.innerHTML =
    c +
    (e +
      b +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select></td></tr></table><div id="gallery"></div><div id="loading"><img src="common/loading.gif"></div>');
  Y();
  q();
  document.getElementById("languageMenu").addEventListener("change", v, !0);
  setInterval(ba, 200);
});
window.Gallery || (window.Gallery = {});
window.Gallery.publish = function (a) {
  var b = Number(a.checked);
  a = "key=" + encodeURIComponent(a.id.substring(8)) + "&public=" + b;
  z("/gallery-api/admin", a);
};
