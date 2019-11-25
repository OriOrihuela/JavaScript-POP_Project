"use strict";

// We need to import the DIARY.
const DIARY = require("../domain/diary");

// Here we begin to print the diary
let htmlDiary = document.getElementById("diary");

DIARY.forEach(day => {
  htmlDiary.innerHTML = JSON.stringify(day);
});
