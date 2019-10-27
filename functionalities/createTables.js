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
function createTable(DIARY, property, action) {
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
  let tables = {};

  // For each "day" (JS object {})...
  DIARY.forEach(day => {
    // For each "action" made that "day"...
    day[property].forEach(action => {
      // If the previous initialized array does not have that action, we push it into it.
      if (!Object.hasOwnProperty(action)) {
        tables[action] = {};
      }
    });
  });
  // Return of the list of actions made every day by Mariano.
  return tables;
}

/**
 * This functions receives the JS object that contains as properties all the actions that Mariano writes on his DIARY.
 * These actions are also JS objects which will contain their own properties, as for example the name of the object, the
 * correlationTable to calculate phi or just phi.
 * @param {*} object The JS object that will be used.
 * @param {*} property The new property that will be added.
 * @param {*} method The optional method that can be put just in case the propety needs some functionality.
 * @param {*} methodArgs The optional args that the optinal method could need.
 * @param {*} objectProperty A previous property in the JS object to be used in case it's needed to create a new one.
 */
function addNewProperty(object, property, method, methodArgs, objectProperty) {
  /**
   * Here we get the JS object, retrieve the keys, and for each "action" == key (another JS object) in it...
   */
  Object.keys(object).forEach(action => {
    // If it's needed some functionality to calculate the new property value...
    if (method !== null && method !== undefined) {
      /**
       * We simply add the new property to the JS object, passing the main JS object,
       * the new property to be added, a method,
       * the optional args for the method and the name of an
       * existing property in the JS object to be used.
       */
      createNewProperty.call(
        object[action],
        property,
        method,
        methodArgs,
        objectProperty
      );
      // If there is no functionality to calculate the new property value...
    } else {
      // At least, the new property will contain its JS object name at least.
      object[action][property] = action;
    }
  });
}

/**
 * This function takes a JS object and creates a new property into it.
 * @param {*} property The property to be created.
 * @param {*} method A method in case the value needs to be calculated by some funcionality.
 * @param {*} args The args of the previous method.
 * @param {*} objectProperty A previous property from the JS object in case it is needed.
 */
function createNewProperty(property, method, args, objectProperty) {
  // If another property from the JS object is needed to create a new one...
  if (objectProperty !== null || objectProperty !== undefined) {
    // If the args for the methods are not required...
    args === null || args === undefined
      ? /**
    The new property will be created calling the method, which takes as parameters the JS object and a previous property.
   */
        (this[property] = method.call(this, this[objectProperty]))
      : /**
    Or in case the args are needed, the method receives them and also uses a previous property in the JS object property.
  */
        (this[property] = method(...args, this[objectProperty]));

    // If another property from the JS object is not needed to create a new one...
  } else {
    // If the args for the methods are not required...
    args === null || args === undefined
      ? /**
    The new property will be created calling the method, which takes as parameters the JS object and a previous property.
   */
        (this[property] = method.call(this))
      : /**
    Or in case the args are needed, the method receives them and also uses a previous property in the JS object property.
  */
        (this[property] = method(...args));
  }
}

// Here we export the desired functionalities.
module.exports = { addNewProperty, createTable, getAllActions };
