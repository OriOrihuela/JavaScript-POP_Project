/**
 *  CorrelationTables
 * 
 * This are all the functions that are needed to create the correlation tables
 * 
 */

/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";


// Import of the Mariano's DIARY.
const DIARY = require("../domain/diary");


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
            day.pulpo ?
                actionAppearsAndBecameOctopus++
                :
                actionAppearsAndNotBecameOctopus++;
        } else {
            // If that day Mariano gets transformed or not into an octopus...
            day.pulpo ?
                actionDontAppearsAndBecameOctopus++
                :
                actionDontAppearsAndNotBecameOctopus++;
        }
    });
    // Here we create a new property called "correlationTable" for each action made by day.
    this.correlationTable = [
        [actionDontAppearsAndNotBecameOctopus, actionAppearsAndNotBecameOctopus],
        [actionDontAppearsAndBecameOctopus, actionAppearsAndBecameOctopus]
    ];

    if (this.isCorrelationTableValid(!this.correlationTable)) {
        this.correlationTable = null;
        alert("SOMETHING WENT WRONG...")
    }
};

/**
 * This function checks if the parameters received by calculatePhi func will be the correct ones.
 * The main purpose is to return "true" if the "correlationTable" property passed by parameter is different from null,
 * undefined, has the proper length, is matrix of arrays, and each array has numbers...
 * @param {*} correlationTable Receives each "correlationTable" property in "actionUtils".
 */

function isCorrelationTableValid(correlationTable) {
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



exports.createCorrelationTable = createCorrelationTable;
exports.isCorrelationTableValid = isCorrelationTableValid;