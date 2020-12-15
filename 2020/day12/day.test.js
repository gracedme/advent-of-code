const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day 12", () => {
  const testInput = `F10
N3
F7
R90
F11`;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(testInput)).toBe(25);
    })

    test("actual input", () => {
       expect(one(ACTUAL_INPUT)).toBe(0);
       // 1400: too high
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
