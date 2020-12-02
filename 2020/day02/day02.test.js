const one = require('./one');
const two = require('./two');

describe("day 02", () => {
  describe("part 1", () => {
    test("puzzle examples", () => {
      expect(one("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")).toBe(2);
    })
  });

  describe("part 2", () => {
    test("puzzle examples", () => {
      expect(two("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")).toBe(1);
    })
  })
});