const getTotalWrappingPaper = require('./one');
const getTotalRibbon = require("./two");

describe("part one: getTotalWrappingPaper(input)", () => {
   test("one toybox area", () => {
       expect(getTotalWrappingPaper("2x3x4")).toBe(58);
       expect(getTotalWrappingPaper("1x1x10")).toBe(43);
   });

   test("multiple toyboxen", () => {
        expect(getTotalWrappingPaper("2x3x4\n1x1x10")).toBe(101);
   })
});

describe("part two: getTotalRibbon(input)", () => {
   test("one toybox ribbon", () => {
       expect(getTotalRibbon("2x3x4")).toBe(34);
       expect(getTotalRibbon("1x1x10")).toBe(14);
       expect(getTotalRibbon("14x12x8")).toBe(1384);
   });

   test("multiple toyboxen", () => {
       expect(getTotalRibbon("2x3x4\n1x1x10\n2x3x4\n1x1x10")).toBe(96);
   });
});