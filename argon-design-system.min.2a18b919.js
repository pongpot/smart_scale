// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/argon-design-system.min.js":[function(require,module,exports) {
var big_image,
    navbar_initialized,
    transparent = !0,
    transparentDemo = !0,
    fixedTop = !1,
    backgroundOrange = !1,
    toggle_initialized = !1,
    $datepicker = $(".datepicker"),
    $collapse = $(".navbar .collapse"),
    $html = $("html"),
    $tagsinput = $(".tagsinput");

function hideNavbarCollapse(e) {
  e.addClass("collapsing-out");
}

function hiddenNavbarCollapse(e) {
  e.removeClass("collapsing-out");
}

function debounce(t, o, r) {
  var n;
  return function () {
    var e = this,
        a = arguments;
    clearTimeout(n), n = setTimeout(function () {
      n = null, r || t.apply(e, a);
    }, o), r && !n && t.apply(e, a);
  };
}

function debounce(t, o, r) {
  var n;
  return function () {
    var e = this,
        a = arguments;
    clearTimeout(n), n = setTimeout(function () {
      n = null, r || t.apply(e, a);
    }, o), r && !n && t.apply(e, a);
  };
}

-1 < navigator.platform.indexOf("Win") ? ($(".wrapper .login-page, .register-page, .card").perfectScrollbar(), 0 != $(".tab-content .table-responsive").length && $(".table-responsive").each(function () {
  new PerfectScrollbar($(this)[0]);
}), $html.addClass("perfect-scrollbar-on")) : $html.addClass("perfect-scrollbar-off"), $(document).ready(function () {
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), $('[data-toggle="popover"]').each(function () {
    color_class = $(this).data("color"), $(this).popover({
      template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  });
  var a = document.getElementById("square1"),
      t = document.getElementById("square2"),
      o = document.getElementById("square3"),
      r = document.getElementById("square4"),
      n = document.getElementById("square5"),
      l = document.getElementById("square6"),
      s = document.getElementById("square7"),
      i = document.getElementById("square8");
  0 != $(".square").length && $(document).mousemove(function (e) {
    posX = event.clientX - window.innerWidth / 2, posY = event.clientY - window.innerWidth / 6, a.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", t.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", o.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", r.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", n.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", l.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", s.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)", i.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)";
  }), ArgonKit.initNavbarImage(), $navbar = $(".navbar[color-on-scroll]"), scroll_distance = $navbar.attr("color-on-scroll") || 500, 0 != $(".navbar[color-on-scroll]").length && (ArgonKit.checkScrollForTransparentNavbar(), $(window).on("scroll", ArgonKit.checkScrollForTransparentNavbar)), $(".form-control").on("focus", function () {
    $(this).parent(".input-group").addClass("input-group-focus");
  }).on("blur", function () {
    $(this).parent(".input-group").removeClass("input-group-focus");
  }), $(".bootstrap-switch").each(function () {
    $this = $(this), data_on_label = $this.data("on-label") || "", data_off_label = $this.data("off-label") || "", $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  }), $(".carousel").carousel({
    interval: !1
  }), $(".datepicker")[0] && $(".datepicker").each(function () {
    $(".datepicker").datepicker({
      disableTouchKeyboard: !0,
      autoclose: !1
    });
  }), flatpickr(".flatpickr", {}), flatpickr(".range", {
    mode: "range"
  }), flatpickr(".datetimepicker", {
    enableTime: !0,
    dateFormat: "Y-m-d H:i"
  }), ArgonKit.initSliders();
}), $collapse.length && ($collapse.on({
  "hide.bs.collapse": function hideBsCollapse() {
    hideNavbarCollapse($collapse);
  }
}), $collapse.on({
  "hidden.bs.collapse": function hiddenBsCollapse() {
    hiddenNavbarCollapse($collapse);
  }
})), ArgonKit = {
  misc: {
    navbar_menu_visible: 0
  },
  checkScrollForTransparentNavbar: debounce(function () {
    $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : transparent || (transparent = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"));
  }, 17),
  initNavbarImage: function initNavbarImage() {
    var e = $(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),
        a = e.data("nav-image");
    $(window).width() < 991 || $("body").hasClass("burger-menu") ? null != a && e.css("background", "url('" + a + "')").removeAttr("data-nav-image").css("background-size", "cover").addClass("has-image") : null != a && e.css("background", "").attr("data-nav-image", "" + a).css("background-size", "").removeClass("has-image");
  },
  initDatePicker: function initDatePicker() {
    0 != $datepicker.length && $datepicker.datetimepicker({
      icons: {
        time: "tim-icons icon-watch-time",
        date: "tim-icons icon-calendar-60",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "tim-icons icon-minimal-left",
        next: "tim-icons icon-minimal-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    });
  },
  initSliders: function initSliders() {
    var e = document.getElementById("sliderRegular");
    0 != $("#sliderRegular").length && noUiSlider.create(e, {
      start: 40,
      connect: [!0, !1],
      range: {
        min: 0,
        max: 100
      }
    });
    e = document.getElementById("sliderDouble");
    0 != $("#sliderDouble").length && noUiSlider.create(e, {
      start: [20, 60],
      connect: !0,
      range: {
        min: 0,
        max: 100
      }
    });
  }
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9489" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/argon-design-system.min.js"], null)
//# sourceMappingURL=/argon-design-system.min.2a18b919.js.map