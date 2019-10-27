/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities.
 */
"use strict";

// We need to import phi.function.js functionalities.
const PHI_FUNCS = require("../../functionalities/phi");

/**
 * ---- TESTS FOR PHI FUNCTIONALITIES ----
 */
test("The 'isCorrelationTableValid' method returns false in case it does not receive a proper correlationTable", () => {
  expect(PHI_FUNCS.isCorrelationTableValid(null)).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid("hola")).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid(undefined)).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[]])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid(["hola", []])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[], "hola"])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[], undefined])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([undefined, []])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([null, []])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[], null])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[1], [1, 2]])).toBeFalsy();
  expect(PHI_FUNCS.isCorrelationTableValid([[1, 2], [1]])).toBeFalsy();
});

test("The 'isCorrelationTableValid' function returns true in case it receives a proper correlationTable", () => {
  expect(PHI_FUNCS.isCorrelationTableValid([[1, 2], [3, 4]])).toBeTruthy();
});

test("The 'calculatePhi' function returns 'The correlationTable passed by parameter is not correct!'" + 
"in case it receives an improper parameter, previously checked by 'isCorrelationTableValid' function", () => {
  expect(PHI_FUNCS.calculatePhi(null)).toBe('The correlationTable passed by parameter is not correct!');
});

test("The 'calculatePhi' function returns a number", () => {
  expect(typeof PHI_FUNCS.calculatePhi([[1, 2], [3, 4]])).toBe("number");
});

test("The 'calculatePhi' function returns a number between -1 and 1", () => {
  expect(PHI_FUNCS.calculatePhi([[1, 2], [3, 4]])).toBeLessThanOrEqual(1);
  expect(PHI_FUNCS.calculatePhi([[34, 76], [0, 4]])).toBeGreaterThanOrEqual(-1);

  expect(PHI_FUNCS.calculatePhi([[10, 21], [3, 54]])).toBeLessThanOrEqual(1);
  expect(PHI_FUNCS.calculatePhi([[10, 21], [3, 54]])).toBeGreaterThanOrEqual(-1);

  expect(PHI_FUNCS.calculatePhi([[11, 72], [33, 64]])).toBeLessThanOrEqual(1);
  expect(PHI_FUNCS.calculatePhi([[11, 72], [33, 64]])).toBeGreaterThanOrEqual(-1);
});