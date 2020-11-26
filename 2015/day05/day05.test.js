const one = require('./one');
const two = require('./two');

describe("part one: get total nice strings", () => {
   test("nice strings", () => {
       expect(one("ugknbfddgicrmopn\naaa")).toBe(2);
       expect(one("aaa")).toBe(1);
   });

   test("excludes blacklist", () => {
       expect(one("haegwjzuvuyypxyu")).toBe(0);
   });
   test("has consecutive duplicate characters", () => {
       expect(one("jchzalrnumimnmhp")).toBe(0);
   });
   test("has at least three vowels", () => {
       expect(one("dvszwmarrgswjxmb")).toBe(0);
   })
});

describe("part two: get total nice strings", () => {
    test("nice strings", () => {
        expect(two("qjhvhtzxzqqjkmpb")).toBe(1);
        expect(two("xxyxx")).toBe(1);
        expect(two("qjhvhtzxzqqjkmpb\nxxyxx")).toBe(2);
    });

    test("does not have aba pattern", () => {
        expect(two("uurcxstgmygtbstg")).toBe(0);
    });
    test("does not have repeated distinct pair", () => {
        expect(two("ieodomkazucvgmuy")).toBe(0);
    });
});