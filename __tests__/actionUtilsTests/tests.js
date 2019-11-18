/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities
 */
"use strict";

// We need to import the diary.
const DIARY = require("../../domain/diary");

// // We need to import the createTables.js functionalities.
const ACTION_UTILS = require("../../functionalities/index");

/**
 * ---- TESTS FOR THE CALCULATE TABLES FUNCIONALITIES ----
 */
test("ACTION_UTILS is a JS object", () => {
  expect(ACTION_UTILS).toBeInstanceOf(Object);
});

test(
  " 'ACTION_UTILS' contains every action performed by Mariano as a JS object" +
    "with its own properties: name, phi and correlation table",
  () => {
    expect(ACTION_UTILS).toEqual({
      Panorama: {
        correlationTable: [
          [76, 9],
          [5, 0]
        ],
        name: "Panorama",
        phi: -0.08084520834544433
      },
      "Paris de Noia": {
        correlationTable: [
          [83, 2],
          [5, 0]
        ],
        name: "Paris de Noia",
        phi: -0.036563621206356534
      },
      "baño en a Lanzada": {
        correlationTable: [
          [76, 9],
          [5, 0]
        ],
        name: "baño en a Lanzada",
        phi: -0.08084520834544433
      },
      "caldo gallego": {
        correlationTable: [
          [81, 4],
          [5, 0]
        ],
        name: "caldo gallego",
        phi: -0.05230657809659414
      },
      caminar: {
        correlationTable: [
          [76, 9],
          [4, 1]
        ],
        name: "caminar",
        phi: 0.06859943405700354
      },
      "carne o caldeiro": {
        correlationTable: [
          [77, 8],
          [4, 1]
        ],
        name: "carne o caldeiro",
        phi: 0.08084520834544433
      },
      "caña de 1906": {
        correlationTable: [
          [74, 11],
          [5, 0]
        ],
        name: "caña de 1906",
        phi: -0.09050203323329065
      },
      chinchos: {
        correlationTable: [
          [78, 7],
          [5, 0]
        ],
        name: "chinchos",
        phi: -0.07043451251197408
      },
      choveu: {
        correlationTable: [
          [79, 6],
          [4, 1]
        ],
        name: "choveu",
        phi: 0.11068280537595927
      },
      "empanada de bacalao": {
        correlationTable: [
          [76, 9],
          [5, 0]
        ],
        name: "empanada de bacalao",
        phi: -0.08084520834544433
      },
      "feria del pulpo": {
        correlationTable: [
          [75, 10],
          [5, 0]
        ],
        name: "feria del pulpo",
        phi: -0.08574929257125442
      },
      filloas: {
        correlationTable: [
          [79, 6],
          [5, 0]
        ],
        name: "filloas",
        phi: -0.06482037235521644
      },
      "leer el Marca": {
        correlationTable: [
          [27, 58],
          [3, 2]
        ],
        name: "leer el Marca",
        phi: -0.13719886811400708
      },
      "licor cafe": {
        correlationTable: [
          [76, 9],
          [5, 0]
        ],
        name: "licor cafe",
        phi: -0.08084520834544433
      },
      "me lave los dientes": {
        correlationTable: [
          [21, 64],
          [5, 0]
        ],
        name: "me lave los dientes",
        phi: -0.3805211953235953
      },
      mejillones: {
        correlationTable: [
          [70, 15],
          [4, 1]
        ],
        name: "mejillones",
        phi: 0.014097096860865023
      },
      mencia: {
        correlationTable: [
          [76, 9],
          [4, 1]
        ],
        name: "mencia",
        phi: 0.06859943405700354
      },
      navajas: {
        correlationTable: [
          [78, 7],
          [5, 0]
        ],
        name: "navajas",
        phi: -0.07043451251197408
      },
      "pan de millo": {
        correlationTable: [
          [77, 8],
          [5, 0]
        ],
        name: "pan de millo",
        phi: -0.07575540190785703
      },
      "pementos de padron": {
        correlationTable: [
          [80, 5],
          [4, 1]
        ],
        name: "pementos de padron",
        phi: 0.12964074471043288
      },
      percebes: {
        correlationTable: [
          [77, 8],
          [0, 5]
        ],
        name: "percebes",
        phi: 0.59026798116852
      },
      queixo: {
        correlationTable: [
          [76, 9],
          [4, 1]
        ],
        name: "queixo",
        phi: 0.06859943405700354
      },
      "recortarme la barba": {
        correlationTable: [
          [81, 4],
          [5, 0]
        ],
        name: "recortarme la barba",
        phi: -0.05230657809659414
      },
      "siesta con La Vuelta": {
        correlationTable: [
          [58, 27],
          [2, 3]
        ],
        name: "siesta con La Vuelta",
        phi: 0.13719886811400708
      },
      "ver el fúbol": {
        correlationTable: [
          [76, 9],
          [5, 0]
        ],
        name: "ver el fúbol",
        phi: -0.08084520834544433
      },
      vieiras: {
        correlationTable: [
          [78, 7],
          [3, 2]
        ],
        name: "vieiras",
        phi: 0.242535625036333
      }
    });
  }
);

test("The test will check the 'typeof' for each property in the 'ACTION_UTILS' object.", () => {
  Object.keys(ACTION_UTILS).forEach(action => {
    // Checking that 'phi' is a number and 'name' is a string.
    expect(typeof ACTION_UTILS[action].phi).toBe("number");
    expect(typeof ACTION_UTILS[action].name).toBe("string");

    // Checking that the 'correlationTable' property is an array containing other arrays.
    expect(ACTION_UTILS[action].correlationTable).toBeInstanceOf(Array);
    expect(ACTION_UTILS[action].correlationTable[0]).toBeInstanceOf(Array);
    expect(ACTION_UTILS[action].correlationTable[1]).toBeInstanceOf(Array);

    // Checking that every element inside 'correlationTable' property is a number.
    expect(typeof ACTION_UTILS[action].correlationTable[0][0]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[0][1]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[1][0]).toBe("number");
    expect(typeof ACTION_UTILS[action].correlationTable[1][1]).toBe("number");
  });
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
  expect(
    ACTION_UTILS.isCorrelationTableValid([
      [1, 2],
      [3, 4]
    ])
  ).toBeTruthy();
});
