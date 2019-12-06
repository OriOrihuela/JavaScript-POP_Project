"use strict";

// We need to import the "actionUtils" object from functionalities/index.js.
const ACTION_UTILS = require("../functionalities/index");
// These will be the necessary buttons to display/hide the graph.
const BUTTON_SHOW_ACTIONS = document.getElementById("button-show-actions");
const BUTTON_REVERSE_ACTIONS = document.getElementById(
  "button-reverse-actions"
);
// This boolean value will check if the phi graph is calculated only once.
let firstTime = true;
// Initialize a new array.
let array = new Array();
// Get the container where the graph will be displayed
const CONTAINER = document.getElementById("actions-container");
/**
 * Initialize some properties which make reference to the "CONTAINER" const.
 * - containerCss -> will contain the computed style of the CONTAINER element (read-only).
 * - height -> will contain the height of the CONTAINER element.
 * - width -> will contain the width of the CONTAINER element.
 */
let containerCss;
let actionsContainerHeight;
let actionsContainerWidth;
// This variable will check if the actual <div> element is pair when being displayed.
let pair = true;


/**
 * ---- EVENTS ----
 */


// The first event performed would be the "onclick" in the "Mostrar Eventos" button.
BUTTON_SHOW_ACTIONS.addEventListener("click", function() {
  /**
   * If the "actions-section" is hidden:
   * - We display the actions section; otherwise we hide it.
   */
  document.getElementById("actions-section").hidden
    ? showEvents()
    : hideEvents();
  /**
   * If it's the first time that the "actions-section" is displayed:
   * - We calculate the graph only once.
   */
  if (firstTime) {
    // Display the "actions-section".
    document.getElementById("actions-section").hidden = false;
    /**
     * Here we set the previous variables "height" and "width" of the "actions-container"
     * with a proper value once the container is displayed.
     */
    getHeightAndWidth(CONTAINER);
    // For each action performed by Mariano in the "ACTION_UTILS" JS object...
    Object.keys(ACTION_UTILS).forEach(action => {
      // We push the action to the array previously declared and initialized.
      array.push(ACTION_UTILS[action]);
    });
    // We sort the array of actions through their phi values.
    sortArray(array).forEach(action => {
      // We call "displayPhiValue" to show the graph.
      displayPhiValue(action);
    });
    // Set the value of "firstTime" to false;
    firstTime = false;
    /**
     * If it is not the first time that the graph is displayed,
     * then we only want to show or hide the graph, and not
     * to be calculated again.
     */
  } else {
    // We only reverse the "hidden" attribute of the "actions-section" element.
    document.getElementById(
      "actions-section"
    ).hidden = !document.getElementById("actions-section").hidden;
  }
});

// The second event performed would be the "onclick" in the "Revertir Eventos" button.
BUTTON_REVERSE_ACTIONS.addEventListener("click", function() {
  // We need to clear the childs within the "CONTAINER".
  clearPhiValues(CONTAINER);
  /**
   * Here we set the previous variables "height" and "width" of the "actions-container"
   * with a proper value once the container is displayed.
   */
  getHeightAndWidth(CONTAINER);
  // Then we reverse the order of appearance in the actions array.
  array.reverse().forEach(action => {
    // And finally we display the phi graph.
    displayPhiValue(action);
  });
});


/**
 *
 * ---- FUNCTIONALITIES ----
 */


/**
 * This function will sort the array of actions in order to once been displayed,
 * the graph actions will be sorted by its PHI values.
 * @param {JS Object} array
 */
function sortArray(array) {
  // Declare the variable "swap" to true;
  let swap = true;
  // While we need to "swap" an action...
  while (swap) {
    // We set "swap" to false, in case the array is sorted then pass.
    swap = false;
    // For each element within the array...
    for (let index = 0; index < array.length - 1; index++) {
      // If the actual phi action is greater than the next one...
      if (array[index]["phi"] > array[index + 1]["phi"]) {
        // Let's swap both elements.
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
        // Set "swap" to true to continue looking for unordered elements.
        swap = true;
      }
    }
  }
  // Finally, return the sorted array.
  return array;
}
/**
 * This function will display the action's phi in order to see it in the
 * PHI graph based on Mariano's actions.
 * @param {JS Object} action
 */
function displayPhiValue(action) {
  // We create a <div> element which will contain the PHI action bar.
  let actionDiv = createActionDiv(action);
  /**
   * We create a <span> element, which will be used as a tooltip
   * once the user displays his mouse over the action <div> element.
   */
  let span = createActionSpan(action);
  // Append the previous <span> element into the <div> element.
  actionDiv.appendChild(span);
  // Set "pair" to the opposite value just to check that if this element is pair or not.
  pair = !pair;
  // Once the <div> element is cliked...
  actionDiv.onclick = function() {
    // Display its own modal...
    displayModal();
    // ... and fill it with its own action content.
    fillModalContent(action);
  };
  // Finally, we append the <div> element to the container (PHI graph).
  CONTAINER.appendChild(actionDiv);
}
/**
 * This function will get the modal and hide it.
 */
function closeModal() {
  const MODAL = document.getElementsByClassName("modal")[0];
  MODAL.style.display = "none";
}
/**
 * This function will get the modal and display it.
 */
function displayModal() {
  const MODAL = document.getElementsByClassName("modal")[0];
  MODAL.hidden = false;
  MODAL.style.display = "block";
}
/**
 * This function will get the modal and fill its content depending of the action
 * values contained in the JS object.
 */
function fillModalContent(action) {
  // Declare "MODAL_CONTENT" const and set to it the modal HTML element.
  const MODAL_CONTENT = document.getElementsByClassName("modal-content")[0];
  // We add by reference to the "X" span the functionality to close the modal.
  MODAL_CONTENT.firstElementChild.firstElementChild.onclick = closeModal;
  /**
   * Playing with the DOM, we add certain values to the HTML predefined elements:
   * - Action name.
   * - Correlation Table values.
   * - Phi value.
   */
  MODAL_CONTENT.firstElementChild.children[1].innerHTML = `Evento: ${action.name}`;
  // Correlation Table values.
  MODAL_CONTENT.children[1].firstElementChild.firstElementChild.innerHTML = `No aparece y no se convierte: ${action.correlationTable[0][0]} veces`;
  MODAL_CONTENT.children[1].children[1].firstElementChild.innerHTML = `Aparece y no se convierte: ${action.correlationTable[0][1]} veces`;
  MODAL_CONTENT.children[1].children[2].firstElementChild.innerHTML = `No aparece y se convierte: ${action.correlationTable[1][0]} veces`;
  MODAL_CONTENT.children[1].children[3].firstElementChild.innerHTML = `Aparece y se convierte: ${action.correlationTable[1][1]} veces`;
  // Phi value.
  MODAL_CONTENT.children[2].innerHTML = `Phi: ${action.phi}`;
}
/**
 * This function will remove all the child elements wtihin a desired HTML element.
 * @param {HTML element} container
 */
function clearPhiValues(container) {
  // While the desired HTML element has child nodes...
  while (container.firstChild) {
    // Remove all of them.
    container.removeChild(container.firstChild);
  }
}
/**
 * This function will show the events/actions section where the PHI graph is set.
 */
function showEvents() {
  // Once the events are shown, change the <button> string value.
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Ocultar Eventos";
  // Change some CSS and "class" attributes of the buttons.
  document.getElementById("button-col-show").classList.remove("col-12");
  document.getElementById("button-col-show").classList.add("col-6");
  document.getElementById("button-col-reverse").hidden = false;
}
/**
 * This function will hide the events/actions section where the PHI graph is set.
 */
function hideEvents() {
  // Once the events are shown, change the <button> string value.
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Mostrar Eventos";
  // Change some CSS and "class" attributes of the buttons.
  document.getElementById("button-col-show").classList.remove("col-6");
  document.getElementById("button-col-show").classList.add("col-12");
  document.getElementById("button-col-reverse").hidden = true;
}
/**
 * This function will take the "width" and "height" read-only
 * values of the actions container to perform some CSS operations.
 * @param {HTML element} container
 */
function getHeightAndWidth(container) {
  /**
   * In this line, you obtain the CSS compiled values of the desired element
   * but in a read-only style, just to avoid value changes.
   */
  containerCss = getComputedStyle(container);
  // We add the "width" and "height" values of the container to two previous declared variables.
  actionsContainerHeight = parseInt(containerCss.height);
  actionsContainerWidth = parseInt(containerCss.width);
}
/**
 * This function will create a <div> element and style it in order to
 * be able to display a bar, which will be part of the PHI graph.
 * @param {JS object} action
 */
function createActionDiv(action) {
  // Create a <div> element.
  let actionDiv = document.createElement("div");
  // Here we add the "height" value of the <div> element depending of the action PHI value.
  actionDiv.style.height =
    ((action.phi + 1) * actionsContainerHeight) / 2 + "px";
  /**
   * Here we add the "width" value of the <div> element just dividing the container width
   * between the lenght of the array containing the actions performed by Mariano.
   */
  actionDiv.style.width = actionsContainerWidth / array.length + "px";
  // Just add to the <div> some style.
  actionDiv.style.background = pair
    ? "var(--main-color-heliotrope)"
    : "var(--main-color-maastricht_blue)";
  actionDiv.style.borderTopLeftRadius = 20 + "px";
  actionDiv.style.borderTopRightRadius = 20 + "px";
  actionDiv.classList.add("tooltip");
  // Return the <div> element.
  return actionDiv;
}
/**
 * This function will create an informational <span> HTML element just to
 * be displayed once the user points his mouse over one bar of the PHI graph.
 * @param {JS object} action
 */
function createActionSpan(action) {
  // Create a <span> element.
  let span = document.createElement("span");
  // Populate its innerHTML property with the "action.name" value.
  span.innerHTML = `${action.name} (Clica para saber más)`;
  // Add a class for styling purposes.
  span.classList.add("tooltiptext");
  // Return the <span> element.
  return span;
}
