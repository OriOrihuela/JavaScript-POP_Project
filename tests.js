/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// We need to import the diary.
const DIARY = require("./diary").DIARY;

// We need to import the createTables.js functionalities.
const createTable = require("./createTables").createTable;
const getAllTables = require("./createTables").getAllTables;

// We need to import phi.function.js functionalities.
const setPhi = require("./phi").setPhi;

/**
 * CONSOLE LOGS TO TEST THE BEHAVIOUR.
 * - The 1st one checks the number of occurencies that the "vieiras" action occurs, counting as well
 *   if Manolo gets transformed or not (correlationTable);
 *
 * - The 2nd and 3rd one check if the variable "tables" has every action made by Mariano and its correlationTable value.
 *
 * - The third one checks if the variable "tables" has every action made by Mariano and its correlationTable and phi values.
 */
let table = createTable(DIARY, "vieiras", "eventos");

// Returns true.
console.log(
  table[1][1] === 2 &&
    table[0][1] === 7 &&
    table[1][0] === 3 &&
    table[0][0] === 78
);
console.log();

let tables = getAllTables(DIARY);

// Returns true.
console.log(tables.hasOwnProperty("vieiras"));
console.log();

// Returns all the actions compressed into a JS object. Every action has its correlationTable value.
console.log(tables);
console.log();

setPhi(tables);

// Returns all the actions compressed into a JS object. Every action has its correlationTable and phi values.
console.log(tables);
