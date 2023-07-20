import { expect, it } from "vitest";
import { add } from "./math";

it("should sum all number values in an array", () => {
  const numbers = [1, 2, 3];
  const expectedSum = numbers.reduce((sum, n) => sum + n);

  const sum = add(numbers);

  expect(sum).toBe(expectedSum);
});
