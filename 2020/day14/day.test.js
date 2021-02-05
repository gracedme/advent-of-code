const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day 14", () => {
  describe("part 1", () => {
    test("test input", () => {
      const testInput = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;
      expect(one(testInput)).toBe(165);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(7817357407588);
    })
  });

  describe("part 2", () => {
    test("test input", () => {
      const smolInput = `mask = 00X1001X
mem[42] = 100`;
      const testInput = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;
      expect(two(smolInput)).toBe(208);
    })

    test("actual input", () => {
      // expect(two(ACTUAL_INPUT)).toBe();
    })
  })
});
