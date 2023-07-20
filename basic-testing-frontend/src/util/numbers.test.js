import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a numeric string", () => {
  const input = "2";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should return NaN for a non-numeric string", () => {
  const input = "foo";
  const expectedResult = NaN;

  const result = transformToNumber(input);

  expect(result).toBe(expectedResult);
});

it("should return NaN if given no argument", () => {
  const expectedResult = NaN;

  const result = transformToNumber();

  expect(result).toBe(expectedResult);
});
