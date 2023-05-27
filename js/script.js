/**
 * Functionality relating to working with the DOM
 */
let calcResult, calcNumber, op;

const resultScreen = document.querySelector("#resultScreen");
function updateResult(input) {
  resultScreen.innerText = input;
}

function setNumber(e) {
  if (calcNumber === null) {
    calcNumber = e.target.dataset.key;
  } else {
    calcNumber = calcNumber + e.target.dataset.key;
  }
  updateResult(calcNumber);
}

function setOp(e) {
  calcResult = operate(op, calcResult, calcNumber);

  op = e.target.dataset.key;

  updateResult(calcResult);

  calcNumber = "";
}

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
opKeys.forEach((key) => key.addEventListener("click", setOp));

const clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", init);
