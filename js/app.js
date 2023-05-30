/**
 * Core app methods
 */

/** Store all global error codes */
const ERROR_CODES = {
  ERROR_DIVIDE_BY_0: "Excuse me! Dividing by 0 hurts :(",
  ERROR_OP_NOT_SUPPORTED: "Operation not supported",
};

/** Store all available operations for calculator */
const operations = {
  "+": add,
  "-": subtract,
  x: multiply,
  "/": divide,
  "=": equals,
};

/**
 * Applies an operation to two numbers
 * @param {String} sign either (+, -, *, /)
 * @param {Number} a
 * @param {Number} b
 * @returns Result of applying sign on a & b
 */
function operate(sign, a, b) {
  if (!(sign in operations)) return ERROR_CODES.ERROR_OP_NOT_SUPPORTED;

  return operations[sign](Number(a), Number(b));
}

/**
 * Adds two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a + b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a - b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a * b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns Number - result of a / b
 */
function divide(a, b) {
  //handle divide by 0.
  if (b === 0) return ERROR_CODES.ERROR_DIVIDE_BY_0;

  return a / b;
}

function equals(a, b) {
  return a;
}

// handle any browser errors raised by module export
// exports used in unit tests
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
