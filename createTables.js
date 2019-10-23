/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

/**
 * This function goes over the DIARY and takes certain action in all the events made by day.
 * Depending if the action appears in the list of events, and Mariano transforms into an octopus or not,
 * the function sets some values into a matrix called correlationTable. Those values will be used in
 * calculatePhi function to know the required correlation between the events and the transformation of Mariano
 * into an octopus.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} action For example, "eating pasta".
 * @param {*} property The "eventos" property to get checked everyday.
 */
function createTable(DIARY, action, property) {
  // These are the values that will be displayed in the correlationTable.
  let actionAppearsAndBecameOctopus = 0;
  let actionAppearsAndNotBecameOctopus = 0;
  let actionDontAppearsAndBecameOctopus = 0;
  let actionDontAppearsAndNotBecameOctopus = 0;

  // Here we run over the DIARY, and for each "day" (JS object {})...
  DIARY.forEach(day => {
    // If that day has the "action" value...
    if (day[property].includes(action)) {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo
        ? actionAppearsAndBecameOctopus++
        : actionAppearsAndNotBecameOctopus++;
      // If that day does not have the "action" value...
    } else {
      // If that day Mariano gets transformed or not into an octopus...
      day.pulpo
        ? actionDontAppearsAndBecameOctopus++
        : actionDontAppearsAndNotBecameOctopus++;
    }
  });
  // Here we return the correlation table that will be placed as a new property value for each action made by day.
  return [
    [actionDontAppearsAndNotBecameOctopus, actionAppearsAndNotBecameOctopus],
    [actionDontAppearsAndBecameOctopus, actionAppearsAndBecameOctopus]
  ];
}

/**
 * This function goes over the Mariano's DIARY and recovers into an array all the actions made
 * by him everyday.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 * @param {*} property The "eventos" property to get checked everyday.
 */
function getAllActions(DIARY, property) {
  // Initialize a new array.
  let list = [];

  // For each "day" (JS object {})...
  DIARY.forEach(day => {
    // For each "action" made that "day"...
    day[property].forEach(action => {
      // If the previous initialized array does not have that action, we push it into it.
      if (!list.includes(action)) {
        list.push(action);
      }
    });
  });
  // Return of the list of actions made every day by Mariano.
  return list;
}

/**
 * This function gets the DIARY as parameter and gets all the actions made by Mariano everyday,
 * and creating the necessary correlationTables for each action. The main functionalities are delegated
 * to getAllActions and createTable functions.
 * @param {*} DIARY The DIARY of Mariano, placed in diary.js.
 */
function getAllTables(DIARY) {
  // Initialize the JS object.
  let tables = {};

  // We call the getAllActions function and for each action...
  getAllActions(DIARY, "eventos").forEach(action => {
    /**
     * Set the action into the previous JS object variable "tables" and also create another
     * JS object ("correlationTable") into the same action property.
     */
    tables[action] = {
      correlationTable: createTable(DIARY, action, "eventos")
    };
  });
  // Return of all the actions made by Mariano and their respectives correlationTables.
  return tables;
}

// Here we export the desired functionalities.
module.exports = { createTable, getAllTables };
