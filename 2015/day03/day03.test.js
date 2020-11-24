const getVisitedHouses = require('./one');

describe("part one: getVisitedHouses(input)", () => {
   test("one move counts two houses", () => {
       expect(getVisitedHouses(">")).toBe(2);
   });

   test("square moves counts four houses", () => {
       expect(getVisitedHouses("^>v<")).toBe(4);
   });

   test("back-and-forth counts two houses", () => {
       expect(getVisitedHouses("^v^v^v^v^v")).toBe(2);
   });
});

describe("part two: ", () => {

});