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
        this[action] = Object.create(this);
        // And define a new property called "name" in it.
        Object.defineProperty(this[action], "name", {
          value: action,
          writable: false,
          enumerable: true
        });
      }
    });
  });
};

/**
 * This function goes over the DIARY and takes certain action in all the events made by day.
 * Depending if the action appears in the list of events, and Mariano transforms into an octopus or not,
 * the function sets some values into a matrix called correlationTable. Those values will be used in
 * calculatePhi function to know the required correlation between the events and the transformation of Mariano
 * into an octopus.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */
actionUtils.prototype.createCorrelationTable = function(DIARY, property) {
  // These are the values that will be displayed in the correlationTable.
  let actionAppearsAndBecameOctopus = 0;
  let actionAppearsAndNotBecameOctopus = 0;
  let actionDontAppearsAndBecameOctopus = 0;
  let actionDontAppearsAndNotBecameOctopus = 0;
  // Here we run over the DIARY, and for each "day" (JS object {})...
  DIARY.forEach(day => {
    // If that day has certain action made by Mariano...
    if (day[property].includes(this.name)) {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo
        ? actionAppearsAndBecameOctopus++
        : actionAppearsAndNotBecameOctopus++;
    } else {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo
        ? actionDontAppearsAndBecameOctopus++
        : actionDontAppearsAndNotBecameOctopus++;
    }
  });
  // Here we create a new property called "correlationTable" for each action made by day.
  this.correlationTable = [
    [actionDontAppearsAndNotBecameOctopus, actionAppearsAndNotBecameOctopus],
    [actionDontAppearsAndBecameOctopus, actionAppearsAndBecameOctopus]
  ];
};

/**
 * This function goes over all the JS objects in "actionUtils" and, for each action made by Mariano, we call the function
 * "createCorrelationTable", which will create the a new property called "correlationTable" in it.
 * @param {*} actionUtils[action] Every action registered in "actionUtils".
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */
actionUtils.prototype.createAllCorrelationTables = function() {
  // We retrieve all the actions made by Mariano, and for each one of them...
  Object.keys(actionUtils).forEach(action => {
    // We call createCorrelationTable func to create each "correlationTable" property within every action registered in "actionUtils".
    actionUtils.createCorrelationTable.call(
      actionUtils[action],
      DIARY,
      "eventos"
    );
  });
};

/**
 * This function checks if the parameters received by calculatePhi func will be the correct ones.
 * The main purpose is to return "true" if the "correlationTable" property passed by parameter is different from null,
 * undefined, has the proper length, is matrix of arrays, and each array has numbers...
 * @param {*} correlationTable Receives each "correlationTable" property in "actionUtils".
 */
actionUtils.prototype.isCorrelationTableValid = function(correlationTable) {
  return (
    correlationTable !== null &&
    correlationTable !== undefined &&
    Array.isArray(correlationTable) === true &&
    Array.isArray(correlationTable[0]) === true &&
    Array.isArray(correlationTable[1]) === true &&
    typeof correlationTable[0][0] === "number" &&
    typeof correlationTable[0][1] === "number" &&
    typeof correlationTable[1][0] === "number" &&
    typeof correlationTable[1][0] === "number" &&
    correlationTable.length === 2 &&
    correlationTable[0].length === 2 &&
    correlationTable[1].length === 2
  );
};

/**
 * The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in the
 * programming one). It is expressed as a coefficient whose value falls in the range of −1 to 1.
 * Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related:
 * if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are
 * opposite: when one is true, the other is false.
 * @param {*} this.correlationTable
 */
actionUtils.prototype.calculatePhi = function() {
  // Here we check with isCorrelationTableValid func if the parameter received is correct or not.
  if (this.isCorrelationTableValid(this.correlationTable)) {
    /**
     * this.correlationTable[1][1] YES octopus, YES action.
     * this.correlationTable[0][0] NOT octopus, NOT action.
     * this.correlationTable[1][0] YES octopus, NOT action.
     * this.correlationTable[0][1] NOT octopus, YES action.
     */
    const DIVIDEND =
      this.correlationTable[1][1] * this.correlationTable[0][0] -
      this.correlationTable[1][0] * this.correlationTable[0][1];
    /**
     * Square root of:
     * - this.correlationTable[1][0] + this.correlationTable[1][1] --> Whenever octopus is TRUE.
     * - this.correlationTable[0][0] + this.correlationTable[0][1] --> Whenever octopus is FALSE.
     * - this.correlationTable[0][1] + this.correlationTable[1][1] --> Whenever action is TRUE.
     * - this.correlationTable[0][0] + this.correlationTable[1][0] --> Whenever action is FALSE.
     */
    const DIVISOR = Math.sqrt(
      (this.correlationTable[1][0] + this.correlationTable[1][1]) *
        (this.correlationTable[0][0] + this.correlationTable[0][1]) *
        (this.correlationTable[0][1] + this.correlationTable[1][1]) *
        (this.correlationTable[0][0] + this.correlationTable[1][0])
    );
    // We assign a new property to the object called "phi", which will contain:
    this.phi = DIVIDEND / DIVISOR;
    // If the parameter received by this function is not proper, we thorw an error containing:
  } else {
    throw console.error(
      "The correlationTable passed by parameter is not correct!"
    );
  }
};

/**
 * This function sets Phi to every action made by Mariano registered in actionUtils.
 */
actionUtils.prototype.setPhi = function() {
  // Here we retrieve all the actions made by Mariano, and for each one...
  Object.keys(actionUtils).forEach(action => {
    // We call calculatePhi func to set phi as a new property to each action.
    actionUtils.calculatePhi.call(actionUtils[action]);
  });
};

module.exports = actionUtils;
