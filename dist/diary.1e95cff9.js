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
})({"domain/diary.js":[function(require,module,exports) {
/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict"; // This is the Mariano's DIARY.

var DIARY = [{
  eventos: ["mejillones", " caminar", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", " filloas", " me lave los dientes", " siesta con La Vuelta", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["mejillones", " chinchos", " me lave los dientes", " Panorama", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: [" caldo gallego", " licor cafe", " me lave los dientes", " mencia", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: [" feria del pulpo", " pementos de padron", " me lave los dientes", " caminar", " siesta con La Vuelta", " Paris de Noia"],
  pulpo: false
}, {
  eventos: [" caldo gallego", " filloas", " me lave los dientes", " caña de 1906", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: [" queixo", " me lave los dientes", " mencia", " leer el Marca", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: [" pan de millo", " recortarme la barba", " me lave los dientes", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " me lave los dientes", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " chinchos", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " siesta con La Vuelta", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["navajas", " me lave los dientes", " ver el fúbol", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["vieiras", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " mencia", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", " chinchos", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " choveu", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " me lave los dientes", " caminar", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " me lave los dientes", " choveu", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " licor cafe", " me lave los dientes", " ver el fúbol", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " chinchos", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " licor cafe", " me lave los dientes", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " percebes", " mencia", " siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["feria del pulpo", " licor cafe", " me lave los dientes", " mencia", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " licor cafe", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["percebes", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " caminar", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " licor cafe", " mencia", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " licor cafe", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " pementos de padron", " choveu", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " chinchos", " me lave los dientes", " caña de 1906", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " recortarme la barba", " leer el Marca", " Paris de Noia"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " filloas", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " me lave los dientes", " choveu", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " filloas", " ver el fúbol", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", " me lave los dientes", " caminar", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " percebes", " leer el Marca"],
  pulpo: true
}, {
  eventos: ["queixo", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " caminar", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " caminar", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " me lave los dientes", " ver el fúbol", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " Panorama", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", " recortarme la barba", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " percebes", " pementos de padron", " leer el Marca"],
  pulpo: true
}, {
  eventos: ["mejillones", " percebes", " me lave los dientes", " choveu", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " percebes", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " chinchos", " me lave los dientes", " caminar", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " percebes", " me lave los dientes", " ver el fúbol", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " me lave los dientes", " Panorama", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " percebes", " me lave los dientes", " mencia", " leer el Marca", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["navajas", " me lave los dientes", " ver el fúbol", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " me lave los dientes", " mencia", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", " pementos de padron", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", " chinchos", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " filloas", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", " me lave los dientes", " caminar", " siesta con La Vuelta", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["caldo gallego", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["pementos de padron", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["caldo gallego", " me lave los dientes", " mencia", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["vieiras", " pementos de padron", " ver el fúbol", " leer el Marca", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["mejillones", " filloas", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " licor cafe", " me lave los dientes", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", " percebes", " caminar", " siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["pan de millo", " recortarme la barba", " mencia", " siesta con La Vuelta", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", " percebes", " me lave los dientes", " leer el Marca", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " me lave los dientes", " ver el fúbol", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", " choveu", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", " percebes", " choveu", " siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["feria del pulpo", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", " licor cafe", " leer el Marca", " baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " percebes", " me lave los dientes", " Panorama", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", " me lave los dientes", " caña de 1906", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", " me lave los dientes", " leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", " me lave los dientes", " ver el fúbol", " siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", " percebes", " me lave los dientes", " siesta con La Vuelta"],
  pulpo: false
}];
module.exports = DIARY;
},{}],"js/diary.js":[function(require,module,exports) {
"use strict"; // We need to import the DIARY.

var DIARY = require("../domain/diary"); // Here we begin to print the diary


var calendar = document.getElementById("calendar"); // Here we initialize the counter for the number of days in the calendar.

var daysInCalendar = 1;
DIARY.forEach(function (day) {
  // Here we create the "span" element which will contain the number of the day in the diary.
  var dayToAdd = document.createElement("span"); // We acces to the stringfied value in "dayToAdd" and set it the actual value of the counter.

  dayToAdd.innerHTML = daysInCalendar; // Here we add an "onclick" event to every "span" which is being created dynamically.

  dayToAdd.onclick = function () {
    // Gather all the info about the current day in the Diary.
    displayDay(day); // Get all the "span" elements in the HTML.

    var spansSelected = document.getElementsByTagName("span"); // Call the "removeCircleClass" function to remove the class "circle" if needed.

    removeCircleClass(spansSelected); // Once the "span" element is clicked, we add to it the class "circle".

    dayToAdd.classList.add("circle"); // Here, we change the col size of the calendar, depending if we have selected a day or not.

    document.getElementById("col-calendar").classList.remove("col-12");
    document.getElementById("col-calendar").classList.add("col-6");
  }; // Increment the counter of days in the calendar.


  daysInCalendar++; // We append to the "div" element with id "calendar" the new "span" created.

  calendar.appendChild(dayToAdd);
});
/**
 * This function will remove the class "circle" for every element into the array passed by parameter
 * if the element itself has the class "circle"
 * @param {HTMLSpanElement} spansSelected
 */

function removeCircleClass(spansSelected) {
  // This for runs over all "spans" elements passed by parameter.
  for (var index = 0; index < spansSelected.length; index++) {
    // Initialize the variable "element" for each element within the array.
    var element = spansSelected[index]; // If the element has the "circle" class, then remove it.

    if (element.classList.contains("circle")) element.classList.remove("circle");
  }
}
/**
 * This function assigns a day from Mariano's diary to an "p" HTML element in the user view.
 * Depending on wether Mariano transforms into an octopus or not, there will be displayed an octopus as
 * an image or not.
 * @param {JS Object} day
 */


function displayDay(day) {
  /**
   * In this line, we get the <img> HTML element with id "pop-image" and set to it
   * and image, depending on whether Mariano transforms into octopus or not that day.
   */
  document.getElementById("pop-image").setAttribute("src", day.pulpo ? "/pop.45fff62b.png" : "/canitaBrava.3e228692.png");
  /**
   * Here we get the <p> HTML element with id "eventos" and pass the value of
   * the property "eventos" contained in the actual day.
   */

  document.getElementById("eventos").innerHTML = day["eventos"];
  /**
   * Just because a day has been selected in the calendar, we need to display
   * the card where the information about that day will be seen.
   */

  removeHidden(document.getElementById("card-container"));
}
/**
 * This function checks if the element passed by parameter has the attr "hidden" set.
 * If so, removes the attr.
 * @param {HTMLElement} element
 */


function removeHidden(element) {
  if (element.hasAttribute("hidden")) element.removeAttribute("hidden");
}
},{"../domain/diary":"domain/diary.js"}],"C:/Users/Ori/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54046" + '/');

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
},{}]},{},["C:/Users/Ori/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/diary.js"], null)
//# sourceMappingURL=/diary.1e95cff9.js.map