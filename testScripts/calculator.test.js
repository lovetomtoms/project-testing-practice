import calculator from "../scripts/calculator";

test("sum", () => {
  expect(calculator.sum(2, 1)).toBe(3);
});

test("subtract", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiply", () => {
  expect(calculator.multiply(2, 1)).toBe(2);
});

test("divide", () => {
  expect(calculator.divide(2, 1)).toBe(2);
});
