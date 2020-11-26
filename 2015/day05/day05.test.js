const fn = require('./one');

describe("part one: getTotalNiceStrings(input)", () => {
   test("nice strings", () => {
       expect(fn("ugknbfddgicrmopn\naaa")).toBe(2);
       expect(fn("aaa")).toBe(1);
   });

   test("excludes blacklist", () => {
       expect(fn("haegwjzuvuyypxyu")).toBe(0);
   });
   test("has consecutive duplicate characters", () => {
       expect(fn("jchzalrnumimnmhp")).toBe(0);
   });
   test("has at least three vowels", () => {
       expect(fn("dvszwmarrgswjxmb")).toBe(0);
   })
});