const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');

describe("day 7", () => {
  const testInputOne = `faded blue bags contain no other bags.
dim bronze bags contain 5 vibrant plum bags, 3 light red bags, 2 dotted black bags, 1 faded blue bag.
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
dotted black bags contain no other bags.`;
  describe("part 1", () => {

    test("sample input", () => {
      expect(one(testInputOne)).toBe(5);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(254);
    })
  });

  describe("part 2", () => {
    const testInputTwo = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

    test("sample input one", () => {
      expect(two(testInputOne)).toBe(32);
    });

    test("sample input two", () => {
      expect(two(testInputTwo)).toBe(126);
    })

    test("actual input", () => {
      expect(two(ACTUAL_INPUT)).toBe(6006);
    })
  })
});
