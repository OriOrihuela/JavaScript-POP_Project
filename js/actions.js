"use strict";

// We need to import the DIARY.
const ACTION_UTILS = require("../functionalities/index");

let actionsContainer = document.getElementById("actions-container");

let showActions = document.getElementById("show-actions");

showActions.addEventListener("click", function() {
  Object.keys(ACTION_UTILS).forEach(action => {
    let actionContainer = document.createElement("div");
    let actionName = document.createElement("p");
    let phi = document.createElement("p");

    actionName.innerHTML = action["name"];
    phi.innerHTML = action["phi"];
    
    actionContainer.appendChild(actionName);
    actionContainer.appendChild(phi);
    actionsContainer.appendChild(actionContainer);
  }, false);
});
