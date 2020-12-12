const one = require('./one');
const two = require('./two');
const ACTUAL_INPUT = require('./input');


describe("day ", () => {
  const smallTestInput = `16
10
15
5
1
11
7
19
6
12
4`;

  const largeTestInput = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

  describe("part 1", () => {
    test("test input", () => {
      expect(one(smallTestInput)).toStrictEqual({ ones: 7, threes: 5 });
    })

    test("test input", () => {
      expect(one(largeTestInput)).toStrictEqual({ ones: 22, threes: 10 });
    })

    test("actual input", () => {
      expect(one(ACTUAL_INPUT)).toStrictEqual({ ones: 69, threes: 33 });
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
