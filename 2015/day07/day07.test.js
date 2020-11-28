const one = require('./one');
// const two = require('./two');

describe("day 07 tests", () => {
    describe("part one: what signal is on wire a?", () => {
        test("extrapolated puzzle examples", () => {
            expect(one("123 -> x", "x")).toBe(123);
            expect(one("500 -> e\nNOT e -> f", "f")).toBe(-51);

            expect(one("9 -> p\np LSHIFT 2 -> q", "q")).toBe(36);
            expect(one("-9 -> p\np RSHIFT 2 -> q", "q")).toBe(2);

            expect(one("123 -> x\n246 -> y\nx AND y -> z", "z")).toBe(0);
            expect(one("123 -> x\n246 -> y\nx OR y -> z", "z")).toBe(0);
        });
    })

    describe("part two: ", () => {
        test("puzzle examples", () => {

        });
    });
});