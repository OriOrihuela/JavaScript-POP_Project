"use strict";

// We need to import the DIARY.
const ACTION_UTILS = require("../functionalities/index");

let actionsContainer = document.getElementById("actions-container");

let buttonShowActions = document.getElementById("button-show-actions");

let array = new Array();

buttonShowActions.addEventListener("click", function() {
  document.getElementById("actions-section").removeAttribute("hidden");

  Object.keys(ACTION_UTILS).forEach(action => {
    array.push(ACTION_UTILS[action]);
  }, false);

  sortArray(array).forEach(action => {
    let actionContainer = document.createElement("div");
    let actionDiv = document.createElement("div");
    let height = 300/action.phi;
    actionDiv.style.height = ( height > 0) ? height + "px": height * -1 + "px";
    console.log('actionDiv.style.height :', actionDiv.style.height);
    actionDiv.style.width = screen.width / (array.length - 1) + "px";
    actionDiv.style.color = "black";

    // phi.onclick = function() {
    //   alert("Hello");
    // };

    actionContainer.appendChild(actionDiv);
    actionsContainer.appendChild(actionContainer);
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
