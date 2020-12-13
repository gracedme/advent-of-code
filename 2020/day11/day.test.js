const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day 11", () => {
  const testInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(testInput)).toBe(37);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(2243);
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
