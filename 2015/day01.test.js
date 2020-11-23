const countFloors = require('./day01');

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