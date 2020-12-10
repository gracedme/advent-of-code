const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day 09", () => {
  const testPreamble = 5;
  const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
  describe("part 1", () => {
    test("test input", () => {
      expect(one(testInput, testPreamble)).toBe(127);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT, 25)).toBe(25918798);
    })
  });

  describe("part 2", () => {
    test("actual input", () => {
      // expect(two(ACTUAL_INPUT)).toBe();
    })
  })
});
