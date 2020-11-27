const one = require('./one');

describe("part one: how many lights are on", () => {
    test("puzzle examples", () => {
        expect(one("toggle 0,0 through 999,0")).toBe(1000);
        expect(one("turn on 499,499 through 500,500")).toBe(4);
    });

    test("toggle sequences", () => {
        expect(one(`toggle 0,0 through 99,0\ntoggle 499,499 through 500,500`)).toBe(104);
        expect(one(`turn on 0,0 through 99,0\ntoggle 49,0 through 500,0`)).toBe(450);
    });
})