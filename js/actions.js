"use strict";

// We need to import the DIARY.
const ACTION_UTILS = require("../functionalities/index");

let buttonShowActions = document.getElementById("button-show-actions");
let buttonReverseActions = document.getElementById("button-reverse-actions");

let firstTime = true;

let array = new Array();

const container = document.getElementById("actions-container");
let containerCss;
let pair = true;
let height;
let width;

buttonShowActions.addEventListener("click", function() {
  buttonShowActions.firstElementChild.innerHTML = "Ocultar Acciones";

  document.getElementById("button-col-show").classList.remove("col-12");
  document.getElementById("button-col-show").classList.add("col-6");
  document.getElementById("button-col-reverse").hidden = false;

  if (!document.getElementById("actions-section").hidden) {
    buttonShowActions.firstElementChild.innerHTML = "Mostrar Acciones";
    document.getElementById("button-col-show").classList.remove("col-6");
    document.getElementById("button-col-show").classList.add("col-12");
    document.getElementById("button-col-reverse").hidden = true;
  }

  if (firstTime) {
    document.getElementById("actions-section").removeAttribute("hidden");
    containerCss = getComputedStyle(container);
    height = parseInt(containerCss.height);
    width = parseInt(containerCss.width);

    Object.keys(ACTION_UTILS).forEach(action => {
      array.push(ACTION_UTILS[action]);
    }, false);

    sortArray(array).forEach(action => {
      displayPhiValues(action);
    });

    firstTime = false;
  } else {
    document.getElementById(
      "actions-section"
    ).hidden = !document.getElementById("actions-section").hidden;
  }
});

buttonReverseActions.addEventListener("click", function() {
  clearPhiValues(container);
  containerCss = getComputedStyle(container);
  height = parseInt(containerCss.height);
  width = parseInt(containerCss.width);
  array.reverse().forEach(action => {
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

function onCloseModal() {
  const modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}

function displayPhiValues(action) {
  let actionDiv = document.createElement("div");
  actionDiv.style.height = ((action.phi + 1) * height) / 2 + "px";
  actionDiv.style.width = width / array.length + "px";
  actionDiv.style.background = pair
    ? "var(--main-color-heliotrope)"
    : "var(--main-color-maastricht_blue)";
  actionDiv.style.borderTopLeftRadius = 20 + "px";
  actionDiv.style.borderTopRightRadius = 20 + "px";
  actionDiv.classList.add("tooltip");

  let span = document.createElement("span");
  span.innerHTML = `${action.name} (Clica para saber más)`;
  span.classList.add("tooltiptext");

  actionDiv.appendChild(span);
  pair = !pair;

  actionDiv.onclick = function() {
    const modal = document.getElementsByClassName("modal")[0];
    modal.removeAttribute("hidden");
    modal.style.display = "block";

    const modalContent = document.getElementsByClassName("modal-content")[0];
    console.log("modalContent.children :", modalContent.children);

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

  container.appendChild(actionDiv);
}

function clearPhiValues(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
