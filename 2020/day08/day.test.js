const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');

describe("day 08", () => {
  const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(testInput)).toBe(5);
    });

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(1766);
    })
  });

  describe("part 2", () => {
    test("test input", () => {
      expect(two(testInput)).toBe(8);
    });

    test("actual input", () => {
      expect(two(ACTUAL_INPUT)).toBe(1639);
    })
  })
});
