const one = require('./one');
const two = require('./two');

const TEST_INPUT = `939
7,13,x,x,59,x,31,19`;

const ACTUAL_INPUT = `1015292
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,743,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,643,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`;

describe("day ", () => {
  const testInput = ``;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(TEST_INPUT)).toBe(295);
    })

    test("actual input", () => {
      // expect(one(ACTUAL_INPUT)).toBe();
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
