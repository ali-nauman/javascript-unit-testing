import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a numeric string", () => {
  const input = "2";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
  expect(result).toBe(+input);
});

it("should return NaN for a non-numeric string", () => {
  const input1 = "foo";
  const input2 = {};

  const result1 = transformToNumber(input1);
  const result2 = transformToNumber(input2);

  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});

it("should return NaN if given no argument", () => {
  const expectedResult = NaN;

  const result = transformToNumber();

  expect(result).toBe(expectedResult);
});
