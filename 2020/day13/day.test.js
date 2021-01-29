const one = require('./one');
const two = require('./two');

const TEST_INPUT = `939
7,13,x,x,59,x,31,19`;

const ACTUAL_INPUT = `1015292
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,743,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,643,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`;

describe("day 13", () => {
  describe("part 1", () => {
    test("test input", () => {
      expect(one(TEST_INPUT)).toBe(295);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(3215);
    })
  });

  describe("part 2", () => {
    const test_input_a = `\n17,x,13,19`;
    const test_input_b = `\n67,7,59,61`;
    const test_input_c = `\n67,x,7,59,61`;
    const test_input_d = `\n67,7,x,59,61`;
    const test_input_e = `\n1789,37,47,1889`;

    test("test input", () => {
      expect(two(TEST_INPUT)).toBe(1068781);
    })

    test("test small examples", () => {
      expect(two(test_input_a)).toBe(3417);
      expect(two(test_input_b)).toBe(754018);
      expect(two(test_input_c)).toBe(779210);
      expect(two(test_input_d)).toBe(1261476);
      expect(two(test_input_e)).toBe(1202161486);
    })

    test("actual input", () => {
      expect(two(ACTUAL_INPUT)).toBe(1001569619313439);
    })
  })
});
