import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testEmail = "test@test.com";

    generateToken(testEmail, (err, token) => {
      done();

      try {
        // The assertion below would fail -> needs to be wrapped in a try/catch block to get expected output
        //   expect(token).toBe(2);

        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate a token value", () => {
    const testEmail = "test@test.com";

    // When not using async/await, we should return a Promise assertion to ensure Vitest waits for the Promise to resolve
    return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
  });

  it("should generate a token value (async/await)", async () => {
    const testEmail = "test@test.com";
    const token = await generateTokenPromise(testEmail);

    expect(token).toBeDefined();
  });
});
