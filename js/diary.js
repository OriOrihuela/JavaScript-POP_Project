"use strict";

// We need to import the DIARY.
const DIARY = require("../domain/diary");

// Here we begin to print the diary
let calendar = document.getElementById("calendar");

// Here we initialize the counter for the number of days in the calendar.
let daysInCalendar = 1;

DIARY.forEach(day => {
  // Here we create the "span" element which will contain the number of the day in the diary.
  let dayToAdd = document.createElement("span");
  // We acces to the stringfied value in "dayToAdd" and set it the actual value of the counter.
  dayToAdd.innerHTML = daysInCalendar;
  // Here we add an "onclick" event to every "span" which is being created dynamically.
  dayToAdd.onclick = function() {
    // Gather all the info about the current day in the Diary.
    displayDay(day);
    // Get all the "span" elements in the HTML.
    var spansSelected = document.getElementsByTagName("span");
    // Call the "removeCircleClass" function to remove the class "circle" if needed.
    removeCircleClass(spansSelected);
    // Once the "span" element is clicked, we add to it the class "circle".
    dayToAdd.classList.add("circle");
  };
  // Increment the counter of days in the calendar.
  daysInCalendar++;
  // We append to the "div" element with id "calendar" the new "span" created.
  calendar.appendChild(dayToAdd);
});

/**
 * This function will remove the class "circle" for every element into the array passed by parameter
 * if the element itself has the class "circle"
 * @param {HTMLSpanElement} spansSelected
 */
function removeCircleClass(spansSelected) {
  for (let index = 0; index < spansSelected.length; index++) {
    const element = spansSelected[index];
    if (element.classList.contains("circle")) {
      element.classList.remove("circle");
    }
  }
}

/**
 * 
 * @param {JS Object} day 
 */
function displayDay(day) {
  document
    .getElementById("pop-image")
    .setAttribute(
      "src",
      day.pulpo ? "/pop.45fff62b.png" : "/canitaBrava.3e228692.png"
    );
  document.getElementById("eventos").innerHTML = day["eventos"];
  removeHidden(document.getElementById("card-container"));
}

/**
 * This function checks if the element passed by parameter has the attr "hidden" set.
 * If so, removes the attr.
 * @param {HTMLElement} element 
 */
function removeHidden(element) {
  if (element.hasAttribute("hidden")) element.removeAttribute("hidden");
}
