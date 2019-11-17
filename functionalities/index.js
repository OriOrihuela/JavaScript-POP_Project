/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// Import of the Mariano's DIARY.
const DIARY = require("../domain/diary");

// Here we declare the JS object "actionUtils", which will contain the necessary functionalities.
let actionUtils = Object.create(Object);

actionUtils.prototype.createCorrelationTable = require('./correlationTables.js').createCorrelationTable;
actionUtils.prototype.isCorrelationTableValid = require('./correlationTables.js').isCorrelationTableValid;
actionUtils.prototype.calculatePhi = require('./phi.js').calculatePhi;


/**
 * This function goes over the Mariano's DIARY and recovers into an array all the actions made
 * by him everyday.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */
actionUtils.prototype.getAllActions = function(DIARY, property) {
    // For each "day" (JS object {}) in the DIARY...
    DIARY.forEach(day => {
        // For each "action" made that "day"...
        day[property].forEach(action => {
            // If "actionUtils" does not have that "action" property, we create another JS object into it.
            if (!this.hasOwnProperty(action)) {
                // We link the new JS object to "actionUtils" using this operator.
                this[action] = new Action(action);
            }
        });
    });
};

actionUtils.getAllActions.call(actionUtils, DIARY, "eventos");

function Action(name) {

    let action = Object.create(actionUtils);

    Object.defineProperty(action, "name", {
        value: name,
        writable: false,
        enumerable: true
    });

    action.createCorrelationTable(DIARY, "eventos")
    action.calculatePhi()

    return action;

}

module.exports = actionUtils;