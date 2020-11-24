const getSantaVisitedHouses = require('./one');
const getRobotAndSantaVisitedHouses = require('./two')

describe("part one: getSantaVisitedHouses(input)", () => {
   test("one move counts two houses", () => {
       expect(getSantaVisitedHouses(">")).toBe(2);
   });

   test("square moves counts four houses", () => {
       expect(getSantaVisitedHouses("^>v<")).toBe(4);
   });

   test("back-and-forth counts two houses", () => {
       expect(getSantaVisitedHouses("^v^v^v^v^v")).toBe(2);
   });
});

describe("part two: getSantaVisitedHouses(input)", () => {
    test("santa and robot santa alternate", () => {
        expect(getRobotAndSantaVisitedHouses("^v")).toBe(3);
        expect(getRobotAndSantaVisitedHouses("^>v<")).toBe(3);
        expect(getRobotAndSantaVisitedHouses("^v^v^v^v^v")).toBe(11);
    });
});