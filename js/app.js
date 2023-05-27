/** Store all global error codes */
const ERROR_CODES = {
  ERROR_DIVIDE_BY_0: "Excuse me! Dividing by 0 hurts :(",
  ERROR_OP_NOT_SUPPORTED: "Operation not supported",
};

let calcResult, calcNumber;

/** Store all avaliable operations for calculator */
const operations = {
  "+": add,
  "-": subtract,
  x: multiply,
  "/": divide,
};

/**
 *
 * @param {String} sign either (+, -, *, /)
 * @param {*} a
 * @param {*} b
 * @returns
 */
function operate(sign, a, b) {
  if (!(sign in operations)) return ERROR_CODES.ERROR_OP_NOT_SUPPORTED;

  return operations[sign](a, b);
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
  if (b === 0) return ERROR_CODES.ERROR_DIVIDE_BY_0;

  return a / b;
}

try {
  module.exports = {
    ERROR_CODES,
    add,
    subtract,
    divide,
    multiply,
    operate,
  };
} catch (error) {}
