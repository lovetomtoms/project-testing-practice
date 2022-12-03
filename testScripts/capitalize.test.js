import capitalize from "../scripts/capitalize";

test("I'm the one", () => {
  expect(capitalize("jim")).toBe("Jim");
});

test("I'm the two", () => {
  expect(capitalize("Paul")).toBe("Paul");
});
