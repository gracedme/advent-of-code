const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');

describe("day ", () => {
  describe("part 1", () => {
    const input = {
      'abc': 3,
      'a\nb\nc': 3,
      'ab\nac': 3,
      'a\na\na\na': 1,
      'b': 1
    };

    test("individual puzzle examples", () => {
      for (const key in input) {
        expect(one(key)).toBe(input[key]);
      }
    });

    test("batch input", () => {
      expect(one(Object.keys(input).join('\n\n'))).toBe(11);
    });

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(6596);
    })
  });

  describe("part 2", () => {
    const input = {
      'abc': 3,
      'a\nb\nc': 0,
      'ab\nac': 1,
      'a\na\na\na': 1,
      'b': 1
    };

    test("individual puzzle examples", () => {
      for (const key in input) {
        expect(two(key)).toBe(input[key]);
      }
    });

    test("batch input", () => {
      expect(two(Object.keys(input).join('\n\n'))).toBe(6);
    });

    test("actual input", () => {
      expect(two(ACTUAL_INPUT)).toBe(3219);
    })
  })
});
