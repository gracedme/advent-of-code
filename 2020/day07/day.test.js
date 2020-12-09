const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');

describe("day 7", () => {
  describe("part 1", () => {
    const testInput = `faded blue bags contain no other bags.
dim bronze bags contain 5 vibrant plum bags, 3 light red bags, 2 dotted black bags, 1 faded blue bag.
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
dotted black bags contain no other bags.`;
    test("sample input", () => {
      expect(one(testInput)).toBe(5);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(254);
    })
  });

  describe("part 2", () => {
    test("actual input", () => {
      // expect(two(ACTUAL_INPUT)).toBe
      // ();
    })
  })
});
