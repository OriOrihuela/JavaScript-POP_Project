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
      // We call "displayPhiValues" to show the graph.
      displayPhiValues(action);
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
    displayPhiValues(action);
  });
});
/**
 *
 * @param {JS Object} array
 */
function sortArray(array) {
  let swap = true;

  while (swap) {
    swap = false;

    for (let index = 0; index < array.length - 1; index++) {
      if (array[index]["phi"] > array[index + 1]["phi"]) {
        let aux = array[index];
        array[index] = array[index + 1];
        array[index + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}

function displayPhiValues(action) {
  let actionDiv = createActionDiv(action);

  let span = createActionTooltipSpan(action);

  actionDiv.appendChild(span);
  pair = !pair;

  actionDiv.onclick = function() {
    const modal = document.getElementsByClassName("modal")[0];
    modal.hidden = false;
    modal.style.display = "block";

    const modalContent = document.getElementsByClassName("modal-content")[0];
    
    modalContent.children[0].onclick = onCloseModal;
    modalContent.children[0].children[1].innerHTML = `Evento: ${action.name}`;
    modalContent.children[0].children[1].classList.add("modal-title");
    
    document.getElementById(
      "firstElement"
    ).innerHTML = `No aparece y no se convierte: ${action.correlationTable[0][0]} veces`;
    document.getElementById(
      "secondElement"
    ).innerHTML = `Aparece y no se convierte: ${action.correlationTable[0][1]} veces`;
    document.getElementById(
      "thirdElement"
    ).innerHTML = `No aparece y se convierte: ${action.correlationTable[1][0]} veces`;
    document.getElementById(
      "forthElement"
    ).innerHTML = `Aparece y se convierte: ${action.correlationTable[1][1]} veces`;
    modalContent.children[2].innerHTML = `Phi: ${action.phi}`;
  };

  CONTAINER.appendChild(actionDiv);
}

function onCloseModal() {
  const modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function clearPhiValues(container) {
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
  }
}

function showEvents() {
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Ocultar Eventos";
  document.getElementById("button-col-show").classList.remove("col-12");
  document.getElementById("button-col-show").classList.add("col-6");
  document.getElementById("button-col-reverse").hidden = false;
}

function hideEvents() {
  BUTTON_SHOW_ACTIONS.firstElementChild.innerHTML = "Mostrar Eventos";
  document.getElementById("button-col-show").classList.remove("col-6");
  document.getElementById("button-col-show").classList.add("col-12");
  document.getElementById("button-col-reverse").hidden = true;
}

function getHeightAndWidth(container) {
  containerCss = getComputedStyle(container);
  actionsContainerHeight = parseInt(containerCss.height);
  actionsContainerWidth = parseInt(containerCss.width);
}

function createActionDiv(action) {
  let actionDiv = document.createElement("div");
  actionDiv.style.height =
    ((action.phi + 1) * actionsContainerHeight) / 2 + "px";
  actionDiv.style.width = actionsContainerWidth / array.length + "px";
  actionDiv.style.background = pair
    ? "var(--main-color-heliotrope)"
    : "var(--main-color-maastricht_blue)";
  actionDiv.style.borderTopLeftRadius = 20 + "px";
  actionDiv.style.borderTopRightRadius = 20 + "px";
  actionDiv.classList.add("tooltip");
  return actionDiv;
}

function createActionTooltipSpan(action) {
  let span = document.createElement("span");
  span.innerHTML = `${action.name} (Clica para saber más)`;
  span.classList.add("tooltiptext");
  return span;
}
