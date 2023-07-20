import { expect, it } from "vitest";
import { add } from "./math";

it("should sum all number values in an array", () => {
  const numbers = [1, 2, 3];
  const expectedSum = numbers.reduce((sum, n) => sum + n);

  const sum = add(numbers);

  expect(sum).toBe(expectedSum);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];
  const expectedSum = numbers.reduce((sum, n) => sum + +n, 0);

  const sum = add(numbers);

  expect(sum).toBe(expectedSum);
});
