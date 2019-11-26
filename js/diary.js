"use strict";

// We need to import the DIARY.
const DIARY = require("../domain/diary");

// Here we begin to print the diary
let htmlDiary = document.getElementById("diary");

let daysInCalendar = 1;
let index = 0;

DIARY.forEach(() => {
    let dayToAdd = document.createElement("span");
    dayToAdd.innerHTML = daysInCalendar;
    dayToAdd.onclick = function() {
        getDay(this.innerHTML - 1);
    }
    index++;
    daysInCalendar++;
    htmlDiary.appendChild(dayToAdd);
});


function getDay(day) {


    console.log(DIARY[day]);

}

// DIARY.forEach(day => {
//   let node = document.createElement("ul");
//   day["eventos"].forEach(action => {
//     let actionToAdd = document.createElement("li");
//     actionToAdd.innerHTML = action;
//     node.appendChild(actionToAdd);
//   })
//   htmlDiary.appendChild(node);
// });