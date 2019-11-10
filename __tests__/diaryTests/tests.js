/**
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 * It also serves to use new JS functionalities.
 */
"use strict";

// We need to import the diary.
const DIARY = require("../../domain/diary");

/**
 * ---- TESTS FOR THE DIARY ----
 */
test("The const 'DIARY' is an array", () => {
  expect(DIARY).toBeInstanceOf(Array);
});

test("The const 'DIARY' have a length of 90 days", () => {
  expect(DIARY).toHaveLength(90);
});

test("The 'DIARY' array contains JS objects", () => {
  DIARY.forEach(element => {
    expect(element).toBeInstanceOf(Object);
  });
});

test("The const 'DIARY' contains objects with a property called 'eventos' and 'pulpo'", () => {
  DIARY.forEach(element => {
    expect(element).toHaveProperty("eventos");
    expect(element).toHaveProperty("pulpo");
  });
});

test("The property 'eventos' contains an array of strings and property 'pulpo' is a boolean", () => {
  DIARY.forEach(element => {
    expect(element["eventos"]).toBeInstanceOf(Array);
    expect(typeof element["pulpo"]).toBe("boolean");
  });
});