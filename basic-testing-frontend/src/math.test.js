import { expect, it } from "vitest";
import { add } from "./math";

it("should sum all number values in an array", () => {
  const sum = add([1, 2, 3]);

  expect(sum).toBe(6);
});
