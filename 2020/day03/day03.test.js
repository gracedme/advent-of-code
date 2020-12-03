const one = require('./one');
const two = require('./two');

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

  // describe("part 2", () => {
  //   test("puzzle examples", () => {
  //     expect(two("")).toBe();
  //   })
  // })
});