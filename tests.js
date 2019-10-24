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
const addNewProperty = require("./createTables").addNewProperty;
const getAllActions = require("./createTables").getAllActions;
const setTest = require("./createTables").setTest;

// We need to import phi.function.js functionalities.
const calculatePhi = require("./phi").calculatePhi;

/**
 * CONSOLE LOGS TO TEST THE BEHAVIOUR.
 * - The 1st one checks the number of occurencies that the "vieiras" action occurs, counting as well
 *   if Manolo gets transformed or not (correlationTable);
 *
 * - The 2nd and 3rd one check if the variable "tables" has every action made by Mariano and its correlationTable value.
 *
 * - The 4th one checks if the variable "tables" has every action made by Mariano and its correlationTable and phi values.
 */
// let table = createTable(DIARY, "vieiras", "eventos");

// // 1st test -> Returns true.
// console.log(
//   table[1][1] === 2 &&
//     table[0][1] === 7 &&
//     table[1][0] === 3 &&
//     table[0][0] === 78
// );
// console.log();

let table = getAllActions(DIARY, "eventos");

addNewProperty(
  table,
  "correlationTable",
  createTable,
  [DIARY, "eventos"],
  "name"
);
addNewProperty(table, "phi", calculatePhi, null, "correlationTable");

// 2nd test -> Returns true.
console.log(table);
console.log();

// 3rd test -> Returns all the actions compressed into a JS object. Every action has its correlationTable value.
// console.log(tables);
// console.log();

// Here we set the "phi" property to every action registered, using its own correlationTable.
// setPhi(tables);

// 4th test -> Returns all the actions compressed into a JS object. Every action has its correlationTable and phi values.
// console.log(tables);
