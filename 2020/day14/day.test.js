const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day 14", () => {
  const testInput = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(testInput)).toBe(165);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(7817357407588);
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
