import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw an error for an empty string", () => {
    const input = "";
    const resultFn = () => validateNotEmpty(input);

    expect(resultFn).toThrow();
  });

  it("should throw an error for non-string values", () => {
    const numInput = 12;
    const boolInput = true;
    const arrayInput = [];
    const objInput = {};

    const numResultFn = () => validateNotEmpty(numInput);
    const boolResultFn = () => validateNotEmpty(boolInput);
    const arrayResultFn = () => validateNotEmpty(arrayInput);
    const objResultFn = () => validateNotEmpty(objInput);

    expect(numResultFn).toThrow();
    expect(boolResultFn).toThrow();
    expect(arrayResultFn).toThrow();
    expect(objResultFn).toThrow();
  });

  it("should throw an error for nullish values", () => {
    const input1 = null;
    const input2 = undefined;

    const resultFn1 = () => validateNotEmpty(input1);
    const resultFn2 = () => validateNotEmpty(input2);

    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
  });

  it("should not throw an error for a non-empty string", () => {
    const input = "hello";
    const resultFn = () => validateNotEmpty(input);

    expect(resultFn).not.toThrow();
  });

  it("should use the error message if one is passed", () => {
    const input = "";
    const errorMessage = "Something went wrong!";
    const resultFn = () => validateNotEmpty(input, errorMessage);

    expect(resultFn).toThrowError(/Something went wrong!/);
  });
});
