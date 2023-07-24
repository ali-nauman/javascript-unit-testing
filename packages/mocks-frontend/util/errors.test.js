import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain the provided statusCode, message and data", () => {
    const testStatus = 200;
    const testMessage = "Test";
    const testData = { key: "test" };

    const error = new HttpError(testStatus, testMessage, testData);

    expect(error).toHaveProperty("statusCode", testStatus);
    expect(error).toHaveProperty("message", testMessage);
    expect(error).toHaveProperty("data", testData);
  });

  it("should contain undefined as data if none is provided", () => {
    const testStatus = 200;
    const testMessage = "Test";

    const error = new HttpError(testStatus, testMessage);

    expect(error).toHaveProperty("statusCode", testStatus);
    expect(error).toHaveProperty("message", testMessage);
    expect(error).toHaveProperty("data", undefined);
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError).toHaveProperty("message", testMessage);
  });
});
