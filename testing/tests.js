/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// We need to import the diary.
const DIARY = require("../domain/diary").DIARY;

// // We need to import the createTables.js functionalities.
const CREATE_TABLES = require("../functionalities/createTables");

// We need to import phi.function.js functionalities.
const calculatePhi = require("../functionalities/phi").calculatePhi;

/**
 * CONSOLE LOGS TO TEST THE BEHAVIOUR.
 * - The 1st one creates the JS object "tables", which contains all the actions made by Mariano everyday as new JS objects.
 *
 * - The 2nd checks that a new property called "name" is put into every JS object "action".
 * 
 * - The 3r one checks "correlationTable" and "phi" properties are inserted and their values calcualted.
 */

let tables = CREATE_TABLES.getAllActions(DIARY, "eventos");
console.table(tables);
console.log();

CREATE_TABLES.addNewProperty(tables, "name", null, null, null);
console.table(tables);
console.log();

CREATE_TABLES.addNewProperty(
  tables,
  "correlationTable",
  CREATE_TABLES.createTable,
  [DIARY, "eventos"],
  "name"
);
CREATE_TABLES.addNewProperty(
  tables,
  "phi",
  calculatePhi,
  null,
  "correlationTable"
);
console.table(tables);

// - Code to print the tables JS object in the browser. -

// Object.keys(tables).forEach(action => {
//   var z = document.createElement("p");
//   // console.table('action :', action);
//   z.innerHTML =
//     tables[action].name +
//     ": " +
//     tables[action].correlationTable +
//     ", " +
//     tables[action].phi;
//   document.getElementById("test").appendChild(z);
// });
