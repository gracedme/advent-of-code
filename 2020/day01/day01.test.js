const one = require('./one');
const two = require('./two');

describe("day 01", () => {
   describe("part 1", () => {
      test("puzzle examples", () => {
         expect(one("1721\n979\n366\n299\n675\n1456")).toBe(514579);
      })
   });

   describe("part 2", () => {
      test("puzzle examples", () => {
         expect(two("1721\n979\n366\n299\n675\n1456")).toBe(241861950);
      })
   })
});