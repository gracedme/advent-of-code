const one = require('./one');
const two = require('./two');


describe("day 15", () => {
  const ACTUAL_INPUT = `18,11,9,0,5,1`;
  describe("part 1", () => {
    test("test input", () => {
      const testInput = `0,3,6`;

      expect(one(testInput, 7)).toBe(1);
      expect(one(testInput, 10)).toBe(0);
      expect(one(testInput, 2020)).toBe(436);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT, 2020)).toBe(959);
    })
  });

  describe("part 2", () => {
    test("test input", () => {
      // expect(two(testInput)).toBe();
    })

    test("actual input", () => {
      // expect(two(ACTUAL_INPUT)).toBe();
    })
  })
});
