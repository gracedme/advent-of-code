const getTotalWrappingPaper = require('./one');

describe("part one: getTotalWrappingPaper(input)", () => {
   test("one toybox area", () => {
       expect(getTotalWrappingPaper("2x3x4")).toBe(58);
       expect(getTotalWrappingPaper("1x1x10")).toBe(43);
   });

   test("multiple toyboxen", () => {
        expect(getTotalWrappingPaper("2x3x4\n1x1x10")).toBe(101);
   })
});