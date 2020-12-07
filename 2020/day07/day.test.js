const one = require('./one');
const two = require('./two');

const actualInput = ``;

describe("day 7", () => {
  describe("part 1", () => {
    const sampleInput = `faded blue bags contain no other bags.
dim bronze bags contain 5 posh coral bags, 3 wavy lavender bags, 2 dotted coral bags, 1 bright beige bag.
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
dotted black bags contain no other bags.`;
    test("sample input", () => {
      expect(one(sampleInput)).toBe(4);
    })

    test("actual input", () => {
      // expect(one(actualInput)).toBe();
    })
  });

  describe("part 2", () => {
    test("actual input", () => {
      // expect(two(actualInput)).toBe();
    })
  })
});
