import reverseString from "../scripts/reverseString";

test.only("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
