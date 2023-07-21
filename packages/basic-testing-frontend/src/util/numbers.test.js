import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of numbers if an array of string numbers is passed", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided ", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
