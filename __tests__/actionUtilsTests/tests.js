/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// We need to import the diary.
const DIARY = require("../../domain/diary");

// // We need to import the createTables.js functionalities.
const ACTION_UTILS = require("../../functionalities/actionUtils");

/**
 * ---- TESTS FOR THE CALCULATE TABLES FUNCIONALITIES ----
 */
test("ACTION_UTILS is a JS object", () => {
  expect(ACTION_UTILS).toBeInstanceOf(Object);
});

ACTION_UTILS.getAllActions(DIARY, "eventos");

test("The 'getAllActions' keeps all the actions done by Mariano (26) as new properties, with a JS object as value", () => {
  expect(ACTION_UTILS).toEqual({
    mejillones: { name: "mejillones" },
    caminar: { name: "caminar" },
    "siesta con La Vuelta": { name: "siesta con La Vuelta" },
    "pan de millo": { name: "pan de millo" },
    filloas: { name: "filloas" },
    "me lave los dientes": { name: "me lave los dientes" },
    "baño en a Lanzada": { name: "baño en a Lanzada" },
    chinchos: { name: "chinchos" },
    Panorama: { name: "Panorama" },
    "caldo gallego": { name: "caldo gallego" },
    "licor cafe": { name: "licor cafe" },
    mencia: { name: "mencia" },
    "feria del pulpo": { name: "feria del pulpo" },
    "pementos de padron": { name: "pementos de padron" },
    "Paris de Noia": { name: "Paris de Noia" },
    "caña de 1906": { name: "caña de 1906" },
    queixo: { name: "queixo" },
    "leer el Marca": { name: "leer el Marca" },
    "recortarme la barba": { name: "recortarme la barba" },
    "empanada de bacalao": { name: "empanada de bacalao" },
    "carne o caldeiro": { name: "carne o caldeiro" },
    navajas: { name: "navajas" },
    "ver el fúbol": { name: "ver el fúbol" },
    vieiras: { name: "vieiras" },
    choveu: { name: "choveu" },
    percebes: { name: "percebes" }
  });
});

test("The 'createAllCorrelationTables' function creates all the correlationTables for every action made by Mariano", () => {
  ACTION_UTILS.createAllCorrelationTables();

  Object.keys(ACTION_UTILS).forEach(action => {
    expect(ACTION_UTILS[action]).toHaveProperty("correlationTable");

    expect(ACTION_UTILS[action].correlationTable).toBeInstanceOf(Array);
    expect(ACTION_UTILS[action].correlationTable[0]).toBeInstanceOf(Array);
    expect(ACTION_UTILS[action].correlationTable[1]).toBeInstanceOf(Array);

    expect(typeof ACTION_UTILS[action].correlationTable[0][0]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[0][1]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[1][0]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[1][1]).toBe("number");
  });

  expect(ACTION_UTILS["mejillones"]).toHaveProperty("correlationTable", [
    [70, 15],
    [4, 1]
  ]);
  expect(ACTION_UTILS["vieiras"]).toHaveProperty("correlationTable", [
    [78, 7],
    [3, 2]
  ]);
  expect(ACTION_UTILS["me lave los dientes"]).toHaveProperty(
    "correlationTable",
    [[21, 64], [5, 0]]
  );
});

test("The 'setPhi' func will call 'calculatePhi' func and set it in every action made by Mariano.", () => {
  ACTION_UTILS.createAllCorrelationTables();
  ACTION_UTILS.setPhi();

  Object.keys(ACTION_UTILS).forEach(action => {
    expect(ACTION_UTILS[action]).toHaveProperty("phi");
  });

  expect(ACTION_UTILS).toHaveProperty("mejillones.phi", 0.014097096860865023);
  expect(ACTION_UTILS).toHaveProperty("vieiras.phi", 0.242535625036333);
  expect(ACTION_UTILS).toHaveProperty(
    "me lave los dientes.phi",
    -0.3805211953235953
  );
});

test("The 'isCorrelationTableValid' method returns false in case it does not receive a proper correlationTable", () => {
  expect(ACTION_UTILS.isCorrelationTableValid(null)).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid("hola")).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid(undefined)).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[]])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid(["hola", []])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[], "hola"])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[], undefined])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([undefined, []])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([null, []])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[], null])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[1], [1, 2]])).toBeFalsy();
  expect(ACTION_UTILS.isCorrelationTableValid([[1, 2], [1]])).toBeFalsy();
});

test("The 'isCorrelationTableValid' function returns true in case it receives a proper correlationTable", () => {
  expect(ACTION_UTILS.isCorrelationTableValid([[1, 2], [3, 4]])).toBeTruthy();
});
