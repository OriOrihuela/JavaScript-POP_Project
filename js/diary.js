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
    // Here, we change the col size of the calendar, depending if we have selected a day or not.
    document.getElementById("col-calendar").classList.remove("col-12");
    document.getElementById("col-calendar").classList.add("col-6");
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
  // This for runs over all "spans" elements passed by parameter.
  for (let index = 0; index < spansSelected.length; index++) {
    // Initialize the variable "element" for each element within the array.
    const element = spansSelected[index];
    // If the element has the "circle" class, then remove it.
    if (element.classList.contains("circle"))
      element.classList.remove("circle");
  }
}

/**
 * This function assigns a day from Mariano's diary to an "p" HTML element in the user view.
 * Depending on wether Mariano transforms into an octopus or not, there will be displayed an octopus as
 * an image or not.
 * @param {JS Object} day
 */
function displayDay(day) {
  /**
   * In this line, we get the <img> HTML element with id "pop-image" and set to it
   * and image, depending on whether Mariano transforms into octopus or not that day.
   */
  document
    .getElementById("pop-image")
    .setAttribute(
      "src",
      day.pulpo ? "/pop.45fff62b.png" : "/canitaBrava.3e228692.png"
    );
  /**
   * In this line, we get the <h3> HTML element with id "popor-not" and change its value,
   * depending on whether Mariano transforms into octopus or not that day.
   */
  document.getElementById("pop-or-not").innerHTML = day.pulpo
    ? "Mariano se transforma"
    : "Mariano no se transforma";
  /**
   * Here we get the <p> HTML element with id "eventos" and pass the value of
   * the property "eventos" contained in the actual day.
   */
  document.getElementById("eventos").innerHTML = day["eventos"].join(", ");
  /**
   * Just because a day has been selected in the calendar, we need to display
   * the card where the information about that day will be seen.
   */
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
