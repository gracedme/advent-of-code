const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day ", () => {
  describe("part 1", () => {
    test("test input", () => {
      expect(one(`R8,U5,L5,D3\nU7,R6,D4,L4`)).toBe(6);
      expect(one(`R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83`)).toBe(159);
      expect(one(`R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7`)).toBe(135);
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toBe(280);
    })
  });

  describe("part 2", () => {
    test("test input", () => {
      // expect(two(testInput)).toBe();
    })

    test("actual input", () => {
      // expect(two(ACTUAL_INPUT)).toBe();
    })
  })
});
