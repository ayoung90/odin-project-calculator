const ERROR_DIVIDE_BY_0 = "Excuse me! Dividing by 0 hurts :(";

function helloWorld() {
  console.log("Hello world");
  return 0;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a + b
 */
function add(a, b) {
  return a + b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a - b
 */
function subtract(a, b) {
  return a - b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a * b
 */
function multiply(a, b) {
  return a * b;
}

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a / b
 */
function divide(a, b) {
  //handle divide by 0.
  if (b === 0) return ERROR_DIVIDE_BY_0;

  return a / b;
}

try {
  module.exports = {
    ERROR_DIVIDE_BY_0,
    add,
    subtract,
    multiply,
    divide,
  };
} catch (error) {}
