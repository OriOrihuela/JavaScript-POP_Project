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
  eventos: ["mejillones", "caminar", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", "filloas", "me lave los dientes", "siesta con La Vuelta", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["mejillones", "chinchos", "me lave los dientes", "Panorama", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["caldo gallego", "licor cafe", "me lave los dientes", "mencia", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "pementos de padron", "me lave los dientes", "caminar", "siesta con La Vuelta", "Paris de Noia"],
  pulpo: false
}, {
  eventos: ["caldo gallego", "filloas", "me lave los dientes", "caña de 1906", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["queixo", "me lave los dientes", "mencia", "leer el Marca", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["pan de millo", "recortarme la barba", "me lave los dientes", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "me lave los dientes", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "chinchos", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "siesta con La Vuelta", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["navajas", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["vieiras", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "mencia", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", "chinchos", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "choveu", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "me lave los dientes", "caminar", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "licor cafe", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "chinchos", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "licor cafe", "me lave los dientes", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "percebes", "mencia", "siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["feria del pulpo", "licor cafe", "me lave los dientes", "mencia", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "licor cafe", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["percebes", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "caminar", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "licor cafe", "mencia", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "licor cafe", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "pementos de padron", "choveu", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "chinchos", "me lave los dientes", "caña de 1906", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "recortarme la barba", "leer el Marca", "Paris de Noia"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "filloas", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "me lave los dientes", "choveu", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "filloas", "ver el fúbol", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["pan de millo", "me lave los dientes", "caminar", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "percebes", "leer el Marca"],
  pulpo: true
}, {
  eventos: ["queixo", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "caminar", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "caminar", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "Panorama", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", "recortarme la barba", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "percebes", "pementos de padron", "leer el Marca"],
  pulpo: true
}, {
  eventos: ["mejillones", "percebes", "me lave los dientes", "choveu", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "percebes", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "chinchos", "me lave los dientes", "caminar", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "percebes", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "me lave los dientes", "Panorama", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "percebes", "me lave los dientes", "mencia", "leer el Marca", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["navajas", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "me lave los dientes", "mencia", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", "pementos de padron", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["feria del pulpo", "chinchos", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "filloas", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", "me lave los dientes", "caminar", "siesta con La Vuelta", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["caldo gallego", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["pementos de padron", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["caldo gallego", "me lave los dientes", "mencia", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["vieiras", "pementos de padron", "ver el fúbol", "leer el Marca", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["mejillones", "filloas", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "licor cafe", "me lave los dientes", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["vieiras", "percebes", "caminar", "siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["pan de millo", "recortarme la barba", "mencia", "siesta con La Vuelta", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", "percebes", "me lave los dientes", "leer el Marca", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "me lave los dientes", "ver el fúbol", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["mejillones", "choveu", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["mejillones", "percebes", "choveu", "siesta con La Vuelta"],
  pulpo: true
}, {
  eventos: ["feria del pulpo", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["carne o caldeiro", "licor cafe", "leer el Marca", "baño en a Lanzada"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "percebes", "me lave los dientes", "Panorama", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["queixo", "me lave los dientes", "caña de 1906", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["navajas", "me lave los dientes", "leer el Marca"],
  pulpo: false
}, {
  eventos: ["pan de millo", "me lave los dientes", "ver el fúbol", "siesta con La Vuelta"],
  pulpo: false
}, {
  eventos: ["empanada de bacalao", "percebes", "me lave los dientes", "siesta con La Vuelta"],
  pulpo: false
}];
module.exports = DIARY;
},{}],"functionalities/correlationTables.js":[function(require,module,exports) {
/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";
/**
 *  CorrelationTables
 *
 * These are all the functions that are needed to create the correlation tables.
 *
 */
// Import of the Mariano's DIARY.

var DIARY = require("../domain/diary");
/**
 * This function goes over the DIARY and takes certain action in all the events made by day.
 * Depending if the action appears in the list of events, and Mariano transforms into an octopus or not,
 * the function sets some values into a matrix called correlationTable. Those values will be used in
 * calculatePhi function to know the required correlation between the events and the transformation of Mariano
 * into an octopus.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */


function createCorrelationTable(DIARY, property) {
  var _this = this;

  // These are the values that will be displayed in the correlationTable.
  var actionAppearsAndBecameOctopus = 0;
  var actionAppearsAndNotBecameOctopus = 0;
  var actionDontAppearsAndBecameOctopus = 0;
  var actionDontAppearsAndNotBecameOctopus = 0; // Here we run over the DIARY, and for each "day" (JS object {})...

  DIARY.forEach(function (day) {
    // If that day has certain action made by Mariano...
    if (day[property].includes(_this.name)) {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo ? actionAppearsAndBecameOctopus++ : actionAppearsAndNotBecameOctopus++;
    } else {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo ? actionDontAppearsAndBecameOctopus++ : actionDontAppearsAndNotBecameOctopus++;
    }
  }); // Here we create a new property called "correlationTable" for each action made by day.

  this.correlationTable = [[actionDontAppearsAndNotBecameOctopus, actionAppearsAndNotBecameOctopus], [actionDontAppearsAndBecameOctopus, actionAppearsAndBecameOctopus]];
  /**
   * In case that the 'correlationTable' property not contains the necessary values, 
   * the value will be set to null.
   */

  if (!this.isCorrelationTableValid(this.correlationTable)) {
    this.correlationTable = null;
    alert("SOMETHING WENT WRONG...");
  }
}
/**
 * This function checks if the parameters received by calculatePhi func will be the correct ones.
 * The main purpose is to return "true" if the "correlationTable" property passed by parameter is different from null,
 * undefined, has the proper length, is a matrix of arrays, and each array has numbers...
 * @param {*} correlationTable Receives each "correlationTable" property in "actionUtils".
 */


function isCorrelationTableValid(correlationTable) {
  return correlationTable !== null && correlationTable !== undefined && Array.isArray(correlationTable) === true && Array.isArray(correlationTable[0]) === true && Array.isArray(correlationTable[1]) === true && typeof correlationTable[0][0] === "number" && typeof correlationTable[0][1] === "number" && typeof correlationTable[1][0] === "number" && typeof correlationTable[1][0] === "number" && correlationTable.length === 2 && correlationTable[0].length === 2 && correlationTable[1].length === 2;
} // Here we export the functionality.


exports.createCorrelationTable = createCorrelationTable;
exports.isCorrelationTableValid = isCorrelationTableValid;
},{"../domain/diary":"domain/diary.js"}],"functionalities/phi.js":[function(require,module,exports) {
/**
 *  PHI
 *
 * This are all the functions that are needed to calculate phi
 *
 */

/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";
/**
 * The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in the
 * programming one). It is expressed as a coefficient whose value falls in the range of −1 to 1.
 * Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related:
 * if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are
 * opposite: when one is true, the other is false.
 *
 */

function calculatePhi() {
  /**
   * this.correlationTable[1][1] YES octopus, YES action.
   * this.correlationTable[0][0] NOT octopus, NOT action.
   * this.correlationTable[1][0] YES octopus, NOT action.
   * this.correlationTable[0][1] NOT octopus, YES action.
   */
  var DIVIDEND = this.correlationTable[1][1] * this.correlationTable[0][0] - this.correlationTable[1][0] * this.correlationTable[0][1];
  /**
   * Square root of:
   * - this.correlationTable[1][0] + this.correlationTable[1][1] --> Whenever octopus is TRUE.
   * - this.correlationTable[0][0] + this.correlationTable[0][1] --> Whenever octopus is FALSE.
   * - this.correlationTable[0][1] + this.correlationTable[1][1] --> Whenever action is TRUE.
   * - this.correlationTable[0][0] + this.correlationTable[1][0] --> Whenever action is FALSE.
   */

  var DIVISOR = Math.sqrt((this.correlationTable[1][0] + this.correlationTable[1][1]) * (this.correlationTable[0][0] + this.correlationTable[0][1]) * (this.correlationTable[0][1] + this.correlationTable[1][1]) * (this.correlationTable[0][0] + this.correlationTable[1][0])); // We assign a new property to the object called "phi", which will contain:

  this.phi = DIVIDEND / DIVISOR; // If the parameter received by this function is not proper, we thorw an error containing:
} // Here we export the functionality.


exports.calculatePhi = calculatePhi;
},{}],"functionalities/index.js":[function(require,module,exports) {
/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict"; // Import of the Mariano's DIARY.

var DIARY = require("../domain/diary"); // Here we declare the JS object "actionUtils", which will contain the necessary functionalities.


var actionUtils = Object.create(Object);
actionUtils.prototype.createCorrelationTable = require("./correlationTables.js").createCorrelationTable;
actionUtils.prototype.isCorrelationTableValid = require("./correlationTables.js").isCorrelationTableValid;
actionUtils.prototype.calculatePhi = require("./phi.js").calculatePhi;
/**
 * This function goes over the Mariano's DIARY and recovers into an array all the actions made
 * by him everyday.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */

actionUtils.prototype.getAllActions = function (DIARY, property) {
  var _this = this;

  // For each "day" (JS object {}) in the DIARY...
  DIARY.forEach(function (day) {
    // For each "action" made that "day"...
    day[property].forEach(function (action) {
      // If "actionUtils" does not have that "action" property, we create another JS object into it.
      if (!_this.hasOwnProperty(action)) {
        // We link the new JS object to "actionUtils" using this operator.
        _this[action] = new Action(action);
      }
    });
  });
};
/**
 * In this line, we call the function 'getAllActions' to retrieve all
 * the actions done by Mariano and include them into 'actionUtils'.
 */


actionUtils.getAllActions.call(actionUtils, DIARY, "eventos");
/**
 * The 'Action' constructor is used to create a new JS object for each action performed by Mariano in his DIARY.
 * This new object will be kepy in 'actionUtils' as a new property.
 * @param {*} name The name of the action performed by Mariano.
 */

function Action(name) {
  // Here we create a new JS object called 'action' which will delegate from 'actionUtils'.
  var action = Object.create(actionUtils); // We define to that new object a property called 'name', with its own name as a value.

  Object.defineProperty(action, "name", {
    value: name,
    writable: false,
    enumerable: true,
    configurable: false
  }); // For every action, we will create their own 'correlationTable' and 'phi' properties.

  action.createCorrelationTable(DIARY, "eventos");
  action.calculatePhi();
  return action;
}

module.exports = actionUtils;
},{"../domain/diary":"domain/diary.js","./correlationTables.js":"functionalities/correlationTables.js","./phi.js":"functionalities/phi.js"}],"js/actions.js":[function(require,module,exports) {
"use strict"; // We need to import the "actionUtils" object from functionalities/index.js.

var ACTION_UTILS = require("../functionalities/index"); // These will be the necessary buttons to display/hide the graph.


var BUTTON_SHOW_ACTIONS = document.getElementById("button-show-actions");
var BUTTON_REVERSE_ACTIONS = document.getElementById("button-reverse-actions"); // This boolean value will check if the phi graph is calculated only once.

var firstTime = true; // Initialize a new array.

var array = new Array(); // Get the container where the graph will be displayed

var CONTAINER = document.getElementById("actions-container");
/**
 * Initialize some properties which make reference to the "CONTAINER" const.
 * - containerCss -> will contain the computed style of the CONTAINER element (read-only).
 * - height -> will contain the height of the CONTAINER element.
 * - width -> will contain the width of the CONTAINER element.
 */

var containerCss;
var actionsContainerHeight;
var actionsContainerWidth; // This variable will check if the actual <div> element is pair when being displayed.

var pair = true;
/**
 * ---- EVENTS ----
 */
// The first event performed would be the "onclick" in the "Mostrar Eventos" button.

BUTTON_SHOW_ACTIONS.addEventListener("click", function () {
  /**
   * If the "actions-section" is hidden:
   * - We display the actions section; otherwise we hide it.
   */
  document.getElementById("actions-section").hidden ? showEvents() : hideEvents();
  /**
   * If it's the first time that the "actions-section" is displayed:
   * - We calculate the graph only once.
   */

  if (firstTime) {
    // Display the "actions-section".
    document.getElementById("actions-section").hidden = false;
    /**
     * Here we set the previous variables "height" and "width" of the "actions-container"
     * with a proper value once the container is displayed.
     */

    getHeightAndWidth(CONTAINER); // For each action performed by Mariano in the "ACTION_UTILS" JS object...

    Object.keys(ACTION_UTILS).forEach(function (action) {
      // We push the action to the array previously declared and initialized.
      array.push(ACTION_UTILS[action]);
    }); // We sort the array of actions through their phi values.

    sortArray(array).forEach(function (action) {
      // We call "displayPhiValue" to show the graph.
      displayPhiValue(action);
    }); // Set the value of "firstTime" to false;

    firstTime = false;
    /**
     * If it is not the first time that the graph is displayed,
     * then we only want to show or hide the graph, and not
     * to be calculated again.
     */
  } else {
    // We only reverse the "hidden" attribute of the "actions-section" element.
    document.getElementById("actions-section").hidden = !document.getElementById("actions-section").hidden;
  }
}); // The second event performed would be the "onclick" in the "Revertir Eventos" button.

BUTTON_REVERSE_ACTIONS.addEventListener("click", function () {
  // We need to clear the childs within the "CONTAINER".
  clearPhiValues(CONTAINER);
  /**
   * Here we set the previous variables "height" and "width" of the "actions-container"
   * with a proper value once the container is displayed.
   */

  getHeightAndWidth(CONTAINER); // Then we reverse the order of appearance in the actions array.

  array.reverse().forEach(function (action) {
    // And finally we display the phi graph.
    displayPhiValue(action);
  });
});
/**
 *
 * ---- FUNCTIONALITIES ----
 */

/**
 * This function will sort the array of actions in order to once been displayed,
 * the graph actions will be sorted by its PHI values.
 * @param {JS Object} array
 */

function sortArray(array) {
  // Declare the variable "swap" to true;
  var swap = true; // While we need to "swap" an action...

  while (swap) {
    // We set "swap" to false, in case the array is sorted then pass.
    swap = false; // For each element within the array...

    for (var index = 0; index < array.length - 1; index++) {
      // If the actual phi action is greater than the next one...
      if (array[index]["phi"] > array[index + 1]["phi"]) {
        // Let's swap both elements.
        var aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux; // Set "swap" to true to continue looking for unordered elements.

        swap = true;
      }
    }
  } // Finally, return the sorted array.


  return array;
}
/**
 * This function will display the action's phi in order to see it in the
 * PHI graph based on Mariano's actions.
 * @param {JS Object} action
 */


function displayPhiValue(action) {
  // We create a <div> element which will contain the PHI action bar.
  var actionDiv = createActionDiv(action);
  /**
   * We create a <span> element, which will be used as a tooltip
   * once the user displays his mouse over the action <div> element.
   */

  var span = createActionSpan(action); // Append the previous <span> element into the <div> element.

  actionDiv.appendChild(span); // Set "pair" to the opposite value just to check that if this element is pair or not.

  pair = !pair; // Once the <div> element is cliked...

  actionDiv.onclick = function () {
    // Display its own modal...
    displayModal(); // ... and fill it with its own action content.

    fillModalContent(action);
  }; // Finally, we append the <div> element to the container (PHI graph).


  CONTAINER.appendChild(actionDiv);
}
/**
 * This function will get the modal and hide it.
 */


function closeModal() {
  var MODAL = document.getElementsByClassName("modal")[0];
  MODAL.style.display = "none";
}
/**
 * This function will get the modal and display it.
 */


function displayModal() {
  var MODAL = document.getElementsByClassName("modal")[0];
  MODAL.hidden = false;
  MODAL.style.display = "block";
}
/**
 * This function will get the modal and fill its content depending of the action
 * values contained in the JS object.
 */


function fillModalContent(action) {
  // Declare "MODAL_CONTENT" const and set to it the modal HTML element.
  var MODAL_CONTENT = document.getElementsByClassName("modal-content")[0]; // We add by reference to the "X" span the functionality to close the modal.

  MODAL_CONTENT.firstElementChild.firstElementChild.onclick = closeModal;
  /**
   * Playing with the DOM, we add certain values to the HTML predefined elements:
   * - Action name.
   * - Correlation Table values.
   * - Phi value.
   */

  MODAL_CONTENT.firstElementChild.children[1].innerHTML = "Evento: ".concat(action.name); // Correlation Table values.

  MODAL_CONTENT.children[1].firstElementChild.firstElementChild.innerHTML = "No aparece y no se convierte: ".concat(action.correlationTable[0][0], " veces");
  MODAL_CONTENT.children[1].children[1].firstElementChild.innerHTML = "Aparece y no se convierte: ".concat(action.correlationTable[0][1], " veces");
  MODAL_CONTENT.children[1].children[2].firstElementChild.innerHTML = "No aparece y se convierte: ".concat(action.correlationTable[1][0], " veces");
  MODAL_CONTENT.children[1].children[3].firstElementChild.innerHTML = "Aparece y se convierte: ".concat(action.correlationTable[1][1], " veces"); // Phi value.

  MODAL_CONTENT.children[2].innerHTML = "Phi: ".concat(action.phi);
}
/**
 * This function will remove all the child elements wtihin a desired HTML element.
 * @param {HTML element} container
 */


function clearPhiValues(container) {
  // While the desired HTML element has child nodes...
  while (container.firstChild) {
    // Remove all of them.
    container.removeChild(container.firstChild);
  }
}
/**
 * This function will show the events/actions section where the PHI graph is set.
 */


function showEvents() {
  // Once the events are shown, change the <button> string value.
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Ocultar Eventos"; // Change some CSS and "class" attributes of the buttons.

  document.getElementById("button-col-show").classList.remove("col-12");
  document.getElementById("button-col-show").classList.add("col-6");
  document.getElementById("button-col-reverse").hidden = false;
}
/**
 * This function will hide the events/actions section where the PHI graph is set.
 */


function hideEvents() {
  // Once the events are shown, change the <button> string value.
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Mostrar Eventos"; // Change some CSS and "class" attributes of the buttons.

  document.getElementById("button-col-show").classList.remove("col-6");
  document.getElementById("button-col-show").classList.add("col-12");
  document.getElementById("button-col-reverse").hidden = true;
}
/**
 * This function will take the "width" and "height" read-only
 * values of the actions container to perform some CSS operations.
 * @param {HTML element} container
 */


function getHeightAndWidth(container) {
  /**
   * In this line, you obtain the CSS compiled values of the desired element
   * but in a read-only style, just to avoid value changes.
   */
  containerCss = getComputedStyle(container); // We add the "width" and "height" values of the container to two previous declared variables.

  actionsContainerHeight = parseInt(containerCss.height);
  actionsContainerWidth = parseInt(containerCss.width);
}
/**
 * This function will create a <div> element and style it in order to
 * be able to display a bar, which will be part of the PHI graph.
 * @param {JS object} action
 */


function createActionDiv(action) {
  // Create a <div> element.
  var actionDiv = document.createElement("div"); // Here we add the "height" value of the <div> element depending of the action PHI value.

  actionDiv.style.height = (action.phi + 1) * actionsContainerHeight / 2 + "px";
  /**
   * Here we add the "width" value of the <div> element just dividing the container width
   * between the lenght of the array containing the actions performed by Mariano.
   */

  actionDiv.style.width = actionsContainerWidth / array.length + "px"; // Just add to the <div> some style.

  actionDiv.style.background = pair ? "var(--main-color-heliotrope)" : "var(--main-color-maastricht_blue)";
  actionDiv.style.borderTopLeftRadius = 20 + "px";
  actionDiv.style.borderTopRightRadius = 20 + "px";
  actionDiv.classList.add("tooltip"); // Return the <div> element.

  return actionDiv;
}
/**
 * This function will create an informational <span> HTML element just to
 * be displayed once the user points his mouse over one bar of the PHI graph.
 * @param {JS object} action
 */


function createActionSpan(action) {
  // Create a <span> element.
  var span = document.createElement("span"); // Populate its innerHTML property with the "action.name" value.

  span.innerHTML = "".concat(action.name, " (Clica para saber m\xE1s)"); // Add a class for styling purposes.

  span.classList.add("tooltiptext"); // Return the <span> element.

  return span;
}
},{"../functionalities/index":"functionalities/index.js"}],"C:/Users/Ori/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58526" + '/');

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
},{}]},{},["C:/Users/Ori/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/actions.js"], null)
//# sourceMappingURL=/actions.0af2d199.js.map