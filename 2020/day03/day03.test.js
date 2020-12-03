const one = require('./one');

describe("day 03", () => {
  describe("part 1: count total trees along toboggan path", () => {
    test("puzzle examples", () => {
      expect(one(`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`)).toBe(7);
    })
  });

});