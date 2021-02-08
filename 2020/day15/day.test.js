const one = require('./one');
const two = require('./two');


describe("day 15", () => {
  const testInput = `0,3,6`;
  const ACTUAL_INPUT = `18,11,9,0,5,1`;
  describe("part 1", () => {
    test("test input", () => {
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
      expect(two(testInput, 7)).toBe(1);
      expect(two(testInput, 10)).toBe(0);
      expect(two(testInput, 2020)).toBe(436);
      // not sure how to generalize for the cases without 0 as a seed number
      // expect(two(testInput, `3,1,2`, 2020)).toBe(1836);
      expect(two(testInput, 30000000)).toBe(175594);
    })

    test("actual input", () => {
      expect(two(ACTUAL_INPUT, 30000000)).toBe(116590);
    })
  })
});
