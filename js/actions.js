"use strict";

// We need to import the DIARY.
const ACTION_UTILS = require("../functionalities/index");

let actionsContainer = document.getElementById("actions-container");

let buttonShowActions = document.getElementById("button-show-actions");

let firstTime = true;

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
            actionDiv.style.width = width / (array.length) + "px";
            actionDiv.style.background = (pair) ? "blue" : "black";
            pair = !pair;

            actionDiv.onclick = function() {

                const modal = document.getElementsByClassName("modal")[0];
                modal.removeAttribute("hidden");
                const modalCss = getComputedStyle(modal);
                //modalCss.display = "block";
                modal.style.display = "block";


                const modalContent = document.getElementsByClassName("modal-content")[0];

                modalContent.children[0].onclick = onCloseModal;
                modalContent.children[1].innerHTML = action.name;
                modalContent.children[2].innerHTML = action.correlationTable;
                modalContent.children[3].innerHTML = action.phi;
            };

            container.appendChild(actionDiv);
        });

        firstTime = false;

    } else {

        document.getElementById("actions-section").hidden = !document.getElementById("actions-section").hidden;

    }


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