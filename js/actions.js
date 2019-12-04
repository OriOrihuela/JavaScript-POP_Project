"use strict";

// We need to import the DIARY.
const ACTION_UTILS = require("../functionalities/index");

let buttonShowActions = document.getElementById("button-show-actions");
let buttonReverseActions = document.getElementById("button-reverse-actions");

let firstTime = true;
let changeButtonText = false;

let array = new Array();

buttonShowActions.addEventListener("click", function() {
  if (firstTime) {
    document.getElementById("actions-section").removeAttribute("hidden");

    Object.keys(ACTION_UTILS).forEach(action => {
      array.push(ACTION_UTILS[action]);
    }, false);

    const container = document.getElementById("actions-container");
    const containerCss = getComputedStyle(container);
    const height = parseInt(containerCss.height);
    const width = parseInt(containerCss.width);
    let pair = true;

    sortArray(array).forEach(action => {
      let actionDiv = document.createElement("div");
      actionDiv.style.height = ((action.phi + 1) * height) / 2 + "px";
      actionDiv.style.width = width / array.length + "px";
      actionDiv.style.background = pair
        ? "var(--main-color-heliotrope)"
        : "var(--main-color-maastricht_blue)";
      actionDiv.style.borderTopLeftRadius = 20 + "px";
      actionDiv.style.borderTopRightRadius = 20 + "px";
      pair = !pair;

      actionDiv.onclick = function() {
        const modal = document.getElementsByClassName("modal")[0];
        modal.removeAttribute("hidden");
        modal.style.display = "block";

        const modalContent = document.getElementsByClassName(
          "modal-content"
        )[0];

        modalContent.children[0].onclick = onCloseModal;
        modalContent.children[1].innerHTML = action.name;
        modalContent.children[2].innerHTML = action.correlationTable;
        modalContent.children[3].innerHTML = action.phi;
      };

      container.appendChild(actionDiv);
    });

    firstTime = false;
  } else {
    document.getElementById(
      "actions-section"
    ).hidden = !document.getElementById("actions-section").hidden;
  }
});

buttonReverseActions.addEventListener("click", function() {});
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

function onCloseModal() {
  const modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}
