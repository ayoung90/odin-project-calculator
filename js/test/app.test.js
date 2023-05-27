const app = require("../app");

describe("add", () => {
  test("adds two numbers", () => {
    expect(app.add(1, 2)).toBe(3);
  });
  test("adds two negative numbers", () => {
    expect(app.add(-5, -3)).toBe(-8);
  });
  test("adds negative and positive numbers", () => {
    expect(app.add(4, -4)).toBe(0);
  });
});

describe("subtract", () => {
  test("subtracts number from another", () => {
    expect(app.subtract(10, 4)).toBe(6);
  });
  test("adds two negative numbers", () => {
    expect(app.subtract(0, 3)).toBe(-3);
  });
});

describe("multiply", () => {
  test("multiply two numbers", () => {
    expect(app.multiply(6, 77)).toBe(462);
  });
});

describe("divide", () => {
  test("adds two numbers", () => {
    expect(app.divide(10, 2)).toBe(5);
  });
  test("handle divide by 0", () => {
    expect(app.divide(10, 0)).toBe(app.ERROR_CODES.ERROR_DIVIDE_BY_0);
  });
});

describe("operate", () => {
  test("add two numbers", () => {
    expect(app.operate("+", 1, 2)).toBe(3);
  });
  test("subtract two numbers", () => {
    expect(app.operate("-", 5, 3)).toBe(2);
  });
  test("divide two numbers", () => {
    expect(app.operate("/", 15, 5)).toBe(3);
  });
  test("multiply two numbers", () => {
    expect(app.operate("x", 2, 4)).toBe(8);
  });
  test("operation not supported", () => {
    expect(app.operate("L", 2, 4)).toBe(app.ERROR_CODES.ERROR_OP_NOT_SUPPORTED);
  });
});
