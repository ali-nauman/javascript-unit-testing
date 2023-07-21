import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should validate a non-empty string", () => {
    const input = " this is a non-empty string!! ";
    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).not.to.throw();
  });

  it("should throw an error when passed an empty string", () => {
    const input = "";
    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).to.throw();
  });

  it("should throw an error when passed a string containing only whitespace", () => {
    const input = "       ";
    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).to.throw();
  });

  it("should throw an error when passed a non-string value", () => {
    const input = {};
    const resultFn = () => validateStringNotEmpty(input);

    expect(resultFn).to.throw();
  });
});

describe("validateNumber()", () => {
  it("should validate a number", () => {
    const input = 10;
    const resultFn = () => validateNumber(input);

    expect(resultFn).to.not.throw();
  });

  it("should throw an error when passed a non-number", () => {
    const boolResultFn = () => validateNumber(true);
    const stringResultFn = () => validateNumber("1");
    const objResultFn = () => validateNumber({});
    const arrayResultFn = () => validateNumber([]);

    expect(boolResultFn).to.throw();
    expect(stringResultFn).to.throw();
    expect(objResultFn).to.throw();
    expect(arrayResultFn).to.throw();
  });
});
