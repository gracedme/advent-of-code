const one = require('./one');
const two = require('./two');

describe("day 06 tests", () => {
    describe("part one: how many lights are on", () => {
        test("puzzle examples", () => {
            expect(one("toggle 0,0 through 999,0")).toBe(1000);
            expect(one("turn on 499,499 through 500,500")).toBe(4);
        });

        test("toggle sequences", () => {
            expect(one(`toggle 0,0 through 99,0\ntoggle 499,499 through 500,500`)).toBe(104);
            expect(one(`turn on 0,0 through 99,0\ntoggle 50,0 through 499,0`)).toBe(450);
        });
    })

    describe("part two: how totally bright is it? like so bright", () => {
        test("puzzle examples", () => {
            expect(two("turn on 0,0 through 0,0")).toBe(1);
            expect(two("toggle 0,0 through 999,999")).toBe(2000000);
        });

        test("toggle sequences", () => {
            expect(two(`toggle 0,0 through 99,0\ntoggle 499,499 through 500,500`)).toBe(208);
            expect(two(`toggle 0,0 through 99,0\nturn off 50,0 through 499,0`)).toBe(150);
        });
    });
});