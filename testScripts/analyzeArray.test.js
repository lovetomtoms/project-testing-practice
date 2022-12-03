import analyzeArray from "../scripts/analyzeArray";

test("analyze", () => {
  expect(analyzeArray([1, 2, 3])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
