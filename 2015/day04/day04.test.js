const getLowestNumber = require('./one');

describe("part one: getLowestNumber(input)", () => {
    test("puzzle examples", () => {
        expect(getLowestNumber("abcdef")).toBe(609043);
        expect(getLowestNumber("pqrstuv")).toBe(1048970);
    });
});