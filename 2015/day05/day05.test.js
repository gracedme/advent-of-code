const fn = require('./one');

describe("part one: getTotalNiceStrings(input)", () => {
   test("examples", () => {
       expect(fn("ugknbfddgicrmopn\naaa")).toBe(2);
       expect(fn("aaa")).toBe(1);
       expect(fn("jchzalrnumimnmhp\nhaegwjzuvuyypxyu\ndvszwmarrgswjxmb")).toBe(0);
   });
});