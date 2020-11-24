const countFloors = require('./one');
const findFirstBasement = require('./two');

describe("part one: countFloors(input)", () => {
    test("go up one floor for (", () => {
        expect(countFloors("(((")).toBe(3);
    });

    test("go down one floor for )", () => {
        expect(countFloors(")))))")).toBe(-5);
    });

    test("mixed ( and ) calculate the 10th floor", () => {
        expect(countFloors("((()((()((()((()((()")).toBe(10);
    });

    test("equal ( and ) returns ground floor 0", () => {
        expect(countFloors(")))(()))((((")).toBe(0);
    });
});

describe("part two: findFirstBasement(input)", () => {
    test("returns location of first sum that equals floor -1 (basement)", () => {
        expect(findFirstBasement(")")).toBe(1);
        expect(findFirstBasement("()())")).toBe(5);
    })
})