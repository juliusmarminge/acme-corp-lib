import { expect, test } from "bun:test";

test("smoke", () => {
  expect(1).toBe(1);
  expect(1).not.toBe(0);
});
