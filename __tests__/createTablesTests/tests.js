/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// We need to import the diary.
const DIARY = require("../../domain/diary").DIARY;

// // We need to import the createTables.js functionalities.
const CREATE_TABLES_FUNCS = require("../../functionalities/createTables");

// We need to import phi.function.js functionalities.
const PHI_FUNCS = require("../../functionalities/phi");

/**
 * ---- TESTS FOR THE CALCULATE TABLES FUNCIONALITIES ----
 */
test("The 'getAllActions' creates a new JS object", () => {
  expect(tables).toBeInstanceOf(Object);
});

test("The 'getAllActions' keeps all the actions done by Mariano (26) as new properties, with a JS object as value", () => {
  let tables = CREATE_TABLES_FUNCS.getAllActions(DIARY, "eventos");
  expect(tables).toStrictEqual({
    Panorama: {},
    "Paris de Noia": {},
    "baño en a Lanzada": {},
    "caldo gallego": {},
    caminar: {},
    "carne o caldeiro": {},
    "caña de 1906": {},
    chinchos: {},
    choveu: {},
    "empanada de bacalao": {},
    "feria del pulpo": {},
    filloas: {},
    "leer el Marca": {},
    "licor cafe": {},
    "me lave los dientes": {},
    mejillones: {},
    mencia: {},
    navajas: {},
    "pan de millo": {},
    "pementos de padron": {},
    percebes: {},
    queixo: {},
    "recortarme la barba": {},
    "siesta con La Vuelta": {},
    "ver el fúbol": {},
    vieiras: {}
  });
});

test("The 'createTable' function creates the correlationTable of the matrix introduced as parameter", () => {
  const CORRELATION_TABLE = CREATE_TABLES_FUNCS.createTable(
    DIARY,
    "eventos",
    "vieiras"
  );

  expect(CORRELATION_TABLE).toBeInstanceOf(Array);

  expect(CORRELATION_TABLE[0]).toBeInstanceOf(Array);
  expect(CORRELATION_TABLE[1]).toBeInstanceOf(Array);

  expect(typeof CORRELATION_TABLE[0][0]).toBe("number");
  expect(typeof CORRELATION_TABLE[0][1]).toBe("number");
  expect(typeof CORRELATION_TABLE[1][0]).toBe("number");
  expect(typeof CORRELATION_TABLE[1][1]).toBe("number");
});

let tables = CREATE_TABLES_FUNCS.getAllActions(DIARY, "eventos");
CREATE_TABLES_FUNCS.addNewProperty(tables, "name", null, null, null);
CREATE_TABLES_FUNCS.addNewProperty(
  tables,
  "correlationTable",
  CREATE_TABLES_FUNCS.createTable,
  [DIARY, "eventos"],
  "name"
);
CREATE_TABLES_FUNCS.addNewProperty(
  tables,
  "phi",
  PHI_FUNCS.calculatePhi,
  null,
  "correlationTable"
);

test(
  "The 'addNewProperty' function adds a new property with a default value (the action itself)" +
    "to every action made by Mariano",
  () => {
    expect(tables).toHaveProperty("mejillones.name", "mejillones");
    expect(tables).toHaveProperty("vieiras.name", "vieiras");
    expect(tables).toHaveProperty(
      "me lave los dientes.name",
      "me lave los dientes"
    );
  }
);

test(
  "The 'addNewProperty' function adds a new property called 'correlationTable' to every action made by Mariano," +
    "using another property called 'name' from the action itself.",
  () => {
    expect(tables).toHaveProperty("mejillones.correlationTable", [
      [70, 15],
      [4, 1]
    ]);
    expect(tables).toHaveProperty("vieiras.correlationTable", [
      [78, 7],
      [3, 2]
    ]);
    expect(tables).toHaveProperty("me lave los dientes.correlationTable", [
      [21, 64],
      [5, 0]
    ]);
  }
);

test(
  "The 'addNewProperty' function adds a new property called 'phi' to every action made by Mariano," +
    "using another property called 'correlationTable' from the action itself.",
  () => {
    expect(tables).toHaveProperty("mejillones.phi", 0.014097096860865023);
    expect(tables).toHaveProperty("vieiras.phi", 0.242535625036333);
    expect(tables).toHaveProperty(
      "me lave los dientes.phi",
      -0.3805211953235953
    );
  }
);
