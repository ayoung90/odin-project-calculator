/*
 * Functionality relating to working with the DOM
 */

let calcResult, calcNumber, op;

const resultScreen = document.querySelector("#resultScreen");

/**
 * Set result screen to provided value
 * @param {String} input
 */
function updateResult(input) {
  resultScreen.innerText = input;
}

/**
 * Set the number clicked OR append additional numbers (if one already set)
 * Updates resultscreen to show input number
 * @param {Event} e
 */
function setNumber(e) {
  if (calcNumber === null) {
    calcNumber = e.target.dataset.key;
  } else {
    calcNumber = calcNumber + e.target.dataset.key;
  }
  updateResult(calcNumber);
}

/**
 * Applies the Operation selected
 * Updates resultscreen to show effect of the operation
 * @param {Event} e
 */
function setOperation(e) {
  calcResult = operate(op, calcResult, calcNumber);

  op = e.target.dataset.key;

  updateResult(calcResult);

  calcNumber = "";
}

/**
 * Init/reset global variables and result screen
 * Called on load to setup application
 */
function init() {
  calcResult = 0;
  calcNumber = "";
  op = "+";
  updateResult(0);
}

init();

const numKeys = document.querySelectorAll("#numpad .key");
numKeys.forEach((key) => key.addEventListener("click", setNumber));

const opKeys = document.querySelectorAll("#operations .key");
opKeys.forEach((key) => key.addEventListener("click", setOperation));

const clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", init);
