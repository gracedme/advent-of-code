const one = require('./one');
const two = require('./two');

const actualInput = `BFBFBBBRLL
BFFBBBBRRR
FFBBFBFLLL
FFBBBBBRLR
BFFBFBFRRL
BFFBFFBRLL
FBBFBFBRLL
FFBFFBBLLR
BFBBBFFRRR
FBFFFFBLLL
FFFFFFBRRR
FBBFBFFRRR
FFBBBBFRLL
BFFBBFBLRR
BFFFFBFRRL
FFFFFBFRLL
FBFFBFFRRR
BFBFBBBLLR
FBFFBBBLRR
FBBBBBFRLR
FFBFFBBRLR
FBBFFFFRRL
FFFFFBBRRL
FFBBFBFRLL
BFFBBBBLLL
FFFFBFFRRL
FBBFFFFLLR
FFBBBBBLLR
FBFBBFBRRR
FBFFBBFRRL
BFBFBFBRLL
BFFBBBBLLR
FBBBBFFLLR
FFBFBBFRLL
BBFFFFBRRL
FBFFFBBLLL
FFFFBBBLLR
FFBBFFFRLL
BFBFFBBRLL
FFBBBFBLLR
FFBBFFFRRR
BFFFBBBRLL
FBFBBFFRLR
FBBFBBBRRR
FBBBBBBRRR
BFFBFFFRRR
BFFBBBFLLL
BFBFFFBLLL
BFFBFBFLLR
FBFFFFBLRL
BFFBBFFLRR
BFBFBFFLLL
BBFFFBFLRL
BFFFBBBLLL
FFBBBBBLLL
BFFFFFFRLL
FFBBBBBLRL
FBFBBBBLLR
FFBBFBBLRL
FBBFBFBLRL
FBBFBBBLRR
BFFBFBBRRR
BFFBBFFLRL
FBFBBFFLLR
BFBBBFFLRR
FBBBFFBLRL
FBFBBBBRLL
FFFFBFFLLL
BBFFFBFRRR
BFBFBBFLRR
FBBFBFFLLL
FBBBBFBRRR
FFFFBBFRRR
FBBFFBFLLL
FBBBFFBRRR
BFFBBBBLRL
FFFFBFBRLL
FBBFFFBRRR
FBFBBFFRLL
BFFFFBFRRR
FFBBBFFLRR
FBBFBBFLLR
BBFFFFBRRR
BFFBFBFLLL
FFFBBBFLLR
FFBFFBFLRL
FFBFBBBLRL
FBFFFBBRRL
BFFBFBBLLR
BFBBFBBRLR
BFBBFFFRRL
FBFBFFFLLR
FFBBBFFLLR
BFBBBFFLLR
BFBFBFBLLR
BBFFFBFLLL
FFBBFBFRRR
BFFFBBFRRR
FBFFBBFRLR
BFBBBBFRLL
BBFFFFBLLR
FFFBFBBLLR
FBFFBFBRRR
FFBFBFBRRR
FFFFFBBRLL
BFFFFBFLLR
FBBFBBFLRR
FBFFFFFRRL
FBBFBFBLLR
BFFFFBBLLL
FBBBBBFLLL
FBBFFBFRRR
BBFFBFBLRL
BFFFBFFRRL
BFFFFFBLLR
FFFBBFBRLR
FBFFBFFRLR
BFBFBFFLLR
BFFFBBFLRL
FFFFBFFLLR
BFFBFFFRLR
FBFBFBFLRR
FBBBBBBRLR
BFBFBFFLRL
BFFFBFBLLR
BBFFBFFLLR
BFFBBBBLRR
FFFBBFFRRR
FBBFBBBLRL
FFBBBFBRLR
FBBBFBFRLR
FBBBBFFLRL
FFBFBFFRLR
BBFFFFFLRL
FFFBBBBLRL
FBFBBBFLRL
BFFBFFFRRL
FFBFFBFRLR
FBFBFFFLRR
FBFBFFBRRL
FBFBBBBLRL
BFBBBBBLLL
BBFFFFBLRR
BFFFBFFLRR
FBBBBBFRRR
FBFFBBBLRL
BBFFFBBRLL
BFBFBFBRRR
BFFBFBBLRR
FFBBFBBRLL
FFFFFBBRLR
BFFFBFBRRL
FFFBFBBLLL
FFFFBFBRRR
FBBFFBBLRR
BFFFFBBLRR
FFBFFFBLRL
FFBFBFBLRR
FBBBBFFRRR
FBFFBFBLRL
BFBFFBBLLL
FBBFFFFLLL
FBBFFBBLLR
FFBFBFFRLL
FBFBBBFRRR
BFFFBFFRLL
FFBFBFBRLL
FFBBFBFLRL
FFBBFBBLLR
FBFBBFBLRL
BBFFFFFRRR
FBBFFBBLRL
BFBFFBBLLR
FFFFFBBLLL
FFBBBBFRRL
FFBBFFFLLL
FFFBFFBRLL
FFBFBBFLLR
BFFFBBBRLR
FBFFBBFRRR
FBBFFFFRLL
FFFBBBFRLR
FFBBFFBRRR
BFBFFFFLRR
BBFFBBFLLR
BFFBFFBLRL
BBFFBFFLRR
FFFBFFBRRR
BFFFBBBLRR
BFBFFBFRLR
FFFBFFFRRR
FFBFBBBRLR
BFBFBBFRLR
BBFFBFFRRL
BFBFBFFRLR
FBBFFFFRLR
FBFBFBBRLL
FFBBBFBRLL
FFBFFFFRRR
BFFBFBBLRL
FFFBFBFRLR
FBBFFFBLRL
FFBFFFFLRL
BBFFBBFRLL
FFFFFFBRRL
BFFBFFBLRR
BFFFFFFRRL
BFFBBFBLRL
FBBFFFFLRL
FFFBBFFRLR
BFBBFFFRLR
FFBBFBBLRR
FFBFBBBLLR
FFBBBBFLRR
FFBFBFFLLL
FFFBFFFLLL
FFBFBFFLRL
BFBFFFBLRL
FBFFFFFLRR
BFBBBBFRRR
FBBFBBFLLL
FFFBBFFLLR
FFBFBBBLLL
BBFFBFFLLL
FBFFBFBRLR
BFBBBBFLRR
FBBBFBFRRL
BFFBBBBRRL
BFBBFFFLLL
BFBBFBFRRR
BFFBFBBLLL
FBBBBBFRRL
FFFBFBFRRL
FFBBBBFLLL
FBBFBBBLLL
FBFFBFFLLR
BFBBBBBLRR
FBFFFFFLLL
BFFFBBBRRL
FBFFFBBRLL
BFBBFBBLRR
FBBBFBBRLR
BBFFBFBLLR
BBFFFFBRLL
BFBBFBFLLR
FBBFFBFLRL
BBFFFBFRRL
BFFFBBBLRL
FBBBBFBRRL
BFBFBFBRRL
FFBFFBBRRR
FBBFFBBLLL
BFFBFFFRLL
FFFFBFFRLR
FFBFFBBRLL
FBBBFFFLRL
FFBFBFBRRL
BFBBBFFLLL
FBBBBFBLLL
FFFBBBBLRR
FBFFFFBRLR
FFBBBBFLRL
BFBBBBFRRL
FFFFBBFLLL
BFFFBBBLLR
FFFBBBBRRL
FBBBFBFLLL
BFFFFFBLRL
FFFBFBBRRL
BFFBBFBRLL
FBFBBFBLRR
FBBBFFFLLL
BFBFFFFRRL
FBBBBFFRLL
BFBFFBBLRL
FBBBBFBRLL
FBBFFBBRLR
FFBBBFBRRL
FFFBBFFLRL
BFBBFBFRLL
FBBFBBFRLL
FBFBBBFLLR
FBFFBFBRLL
BFFFBFFRRR
BFBFBBFLRL
FBBBBBFLRR
FFFFBBFRRL
BFBBFFBRRR
FBBFFFBLRR
BFBBBFBLLR
FBBBBFBRLR
BFBFFFFRLL
FFFBBBFLLL
BFFFBFFLLL
FBFBFFBRLL
BBFFFFFLLL
FFFFFBBLRR
BFFFFFFLRR
BFFBFBFLRR
FFFBFFBLLR
BFFFFFFLLR
FBFFBBBRRR
FFFFBFBLLR
BFFBBFFLLL
FFFFFBBLLR
BFBBBFBRRL
FBFFBBBRLR
BBFFFFBLRL
FFBFFBFLLL
FBFFFFBLRR
FFFBFBFLLR
FFBFFFFLLR
FFFFFBFLRL
BBFFFBBLLL
BFFBFBFRRR
FBBBFFFLLR
BFBBBFBLLL
FBFFFFFRRR
FBFFBBFLRL
BFFBBFBLLR
FBBFFBFRLR
FFFFFBFRRL
FFBFFBBLLL
BFBFFBFRLL
BFBBFFFRLL
FBBBFBFRLL
FBFBFFFLLL
BBFFFBBLRR
FFFBFBFLLL
BBFFBFBLRR
FFBBFBFLRR
BFFBBFFRLR
FBFBFBBRLR
FBBFFBBRRR
FFBFFFBRRR
BFBBFBBLRL
FFFBFFFRLL
BFBBFBFLRL
BFBFBBBLLL
FBFBBFFLRL
FFBFBBBRRL
FFFBFFBRRL
FFBFFFFRLR
FFFFBBBRRR
FFFFBFBLLL
FFBFFBFRRR
FFBFFBFLRR
FFFBBFFRLL
FBBBFFFRLR
FFBFFFBRLL
FBBBFBFRRR
FBFFFBFLRR
FBBBFBFLRL
FBFBFFFRRL
BFBFFFFLRL
FFBBFFBLRL
BBFFBFBLLL
FBFBBBBRRR
FBBFFFBLLR
FBBFBFFRRL
FFBFBFBLLR
BFFBBBFLRR
FBFBFFBLRL
FBFFBBBLLL
FFBFBBFRRL
BFFBFFFLLR
FBBBFBBLRL
BFFBBFBRLR
BFFFBFBRLL
BFFFFBBRRR
FBFFBBFLLR
FFBFFFBRRL
FFBBBBBRRL
BFFBBBBRLR
BFFFBFBRLR
FBBBBBBLLL
BFFFBFBRRR
FFBBBFFRLR
FBBBFBFLLR
FBFBFBFRRR
FBFBBBBLLL
BFBFBFBRLR
FFFFBFFLRR
BFFBFBBRLL
BFBFFFBLLR
BFBBFBBLLL
FBFFBBBLLR
FBBFBBFRRR
FFFBFFFLLR
FFFBFBBRLL
BFBFFBFLLR
BFFFFBBLRL
FBFBBFBLLL
FBBFFBFRLL
BFBBBBFRLR
BFBFFFBRLL
BBFFFBFRLR
FFFFBBBLRL
BFBBFFBLRL
BBFFBBFRRL
FFBBBFBLLL
FBFBFBFLRL
FBBBBBBRRL
FFFFFBBRRR
FFFFFBFRRR
FBFFFBBRRR
BFFBBFBRRL
BBFFFFFRLL
FFFBFFBRLR
FFBBFFFRRL
FBFBFFFRLR
BFFBBBFRLR
BFBBBBFLRL
FBFFBFBRRL
FFBFBBBRRR
FFFFBBFRLL
FFFFBBBRLL
FBBFFFBLLL
BFBBFBBRRR
BFFBBBFRLL
BFFFBFFRLR
FBFBFFBLLL
BFFFFBBRLL
BBFFBFFLRL
BFBBBBBLRL
BFFFFBBRRL
BFFBFFFLRL
BBFFBBFRLR
BFBBFBFLLL
BBFFBFFRLR
FBBFBBBRLL
FFFBFBFLRR
BFBFFBFLLL
FFFFBBFLRR
FFFBBBBLLL
BFBFFFFRRR
FBFBBBFRLL
FFBBFFFLRR
FBFBBBFRLR
BFFFBBFLLR
BFBBBBBLLR
BFFBFFBRRR
FBBBFFBRLR
BFBFBBFLLL
FBFFFFFRLR
BFFFFFFLLL
BFFBFFBRLR
BBFFFFBRLR
BBFFBFBRLR
FBFBFBBLRR
BFFFBBFLRR
FBFFBBBRLL
FFFFBBFLRL
FFBFFBBLRL
FBFFBBFLLL
FBFBBFFLLL
FFBBFFBRLR
BFFFBBBRRR
BBFFFBBLLR
BFFBBBFLRL
BBFFFBBRLR
FBBBBBBLLR
FBFBBFFRRR
FBFFBBFRLL
FFFBBFBRLL
FFFBFBBRLR
FBFFBFFLLL
FFBBBBBLRR
FBFFFFFLLR
FBFFFBBLRL
FBFFBFBLRR
FFBBBBFRRR
FBBBFFFRRL
FFFFBBFLLR
FFFFFBFLRR
BBFFBBFLLL
FBFBFBBLLL
FBFBFFBRRR
FBFFBFFLRR
FBBFFFFLRR
FBBFBFFLLR
BFFBBBFRRR
FFBBBBBRRR
BFFFFFBRLR
BFFBFBFRLR
FFFFBFFRLL
BFBFFBBRLR
BFBBFFFLRL
FBFFFFBLLR
FFBFFBFRLL
BBFFFBBLRL
FBBFFBFLRR
BFFFFBBRLR
BFBBFBBRRL
FBBFBFBRRR
BFFFBFFLRL
FFBBFBBRRL
FFFBFFBLRR
FBBFBFBRRL
BFBFBBFLLR
BBFFFBBRRL
FFBFBBFLRL
FFBFFFBLRR
FBFFBFBLLR
BFBFFBBRRL
BFFBFFFLRR
BFBBBFBRRR
FFBFBBBLRR
BFFFFFBRRL
BFBFBFFRRL
FFBFFBBRRL
FBBBBFBLRL
BFBFFFFRLR
FBBBFFFRRR
BBFFBBFLRR
FFBFBFBRLR
FBBBFBBLRR
FFBFBBBRLL
BFFBBFFRRL
BBFFBFBRLL
FBBBFBBRRR
FBFFFFFLRL
FFBBFFBLLR
FBBFBBBRRL
FFFFBBBRLR
FBBFBBBRLR
FBBBBFBLLR
FFBFBFBLLL
BFFFBBFRRL
FBFFFBFRRL
BFBFBBBRRR
FBFBFBBLRL
BFBFBFFRRR
FFBBBBBRLL
FFFBBBFRRL
FFBBFFBLRR
BFBBBFBLRR
FBBBBBBLRR
FBFFFBBLLR
FBBFBFFLRL
FFBBBFFLRL
FFBFFBFLLR
FFFBBFFRRL
FFFFBFBRRL
FBFBBFBRRL
BFBBFFBLLL
BFFBFBBRRL
FFFFBBBRRL
BBFFFFFRRL
BFFBFFBRRL
FFFBBBFRLL
FFBFBBFRLR
BBFFFBFRLL
BFBBFBBRLL
FFFBFBBRRR
FBBFFFBRRL
FBFBFBFRLL
FBBFFFFRRR
BFBFFBFRRL
FBBBFBFLRR
FFBFBFBLRL
FFBBBBFLLR
FFFFFBFLLR
FFBFFFBLLL
BBFFBFFRLL
FFFBBBBRRR
FFBFFBBLRR
BFFFFFFLRL
FFFBBBFLRL
FBFFFBFLLR
BBFFFBFLRR
BFBFFFBRLR
BFFFBBFRLR
BFBFBBFRRL
BFBFFBBRRR
FFBFBBFLLL
FFFBBFBLLL
FFBBFFBRRL
FBFBBBFLLL
BFFFFFFRLR
BBFFFBFLLR
FBBFBFFRLL
FBFBFFBLRR
FBBFBFBRLR
FBFFBBBRRL
BFFBBFFRLL
BFFBFFBLLL
BFBBFBFRRL
FFFBFBFLRL
FFBBFBBRLR
FBBBBBFLRL
BBFFBFBRRL
FFFFBFBLRR
FFBFBFFRRL
FBFBBBBLRR
FFFFBFFRRR
BBFFBBFLRL
BFBBBBFLLL
FBBFBFBLRR
FBBBBBBRLL
FFFBBBBRLR
BBFFFFFRLR
FBFFFFFRLL
BFBBFFBLLR
BFFFFBFRLR
FFBBBFFRRL
FFBBBFFRLL
BFFBBFBLLL
FFFBBBFRRR
BFFFFFBRRR
FBFFFBFRLL
FBBFBFFLRR
BFFFFFBLRR
BFBFBFBLRL
BFBBBFFLRL
FFBFFFFRLL
FBFBFBFRLR
BFFFBBFRLL
FFBBFBFRLR
FBFBBFBLLR
FBFFBFFRRL
FBBBBFFLRR
BFBFBBBRLR
BFBBBFFRRL
FFFBFBBLRL
FBBBFFBLRR
BFBFFBFLRL
BFFFFFBRLL
BFFFBFFLLR
BFBBBFBRLR
FFFBFFFLRR
FBFBFBFRRL
FBFBFFFLRL
FBBFBBBLLR
BFBFFFFLLR
FBFFFBFLLL
FBBFBBFRLR
FBBFFFBRLL
FFFBFFBLRL
FBFBBFBRLR
BFBBFFFRRR
BFBFBFFRLL
FBFBFBBRRL
FFFBFBFRLL
FBBFFBBRLL
BFFBFBFLRL
BFFFFBBLLR
BFFFFFFRRR
BFBBBFBLRL
FFFBBFFLLL
FBBBFBBRLL
FFFBFFBLLL
FBFFFBFRRR
BFBFFBFLRR
FFBFFFFLRR
BFBBBFFRLR
FBFBFFBLLR
FFBFBBFRRR
FFBBFFBLLL
FFBFFFFLLL
BFFBBFBRRR
FFFBBBFLRR
FFBBFFBRLL
FFBBFBBLLL
BFFFFBFLLL
FFFBBFBRRR
FFBFFFFRRL
FFFBBFBRRL
BFFBBBFRRL
FBBBFFBRLL
FBFBFBBLLR
FBBBFBBRRL
BFBFBBBRRL
BFBFBFFLRR
BFFFFFBLLL
BFBFBBFRLL
FBBBBBFRLL
BFFFBFBLRL
FBFBBBBRLR
FBFFFBFLRL
FFBFBFFRRR
BFBFBFBLLL
BFBBFFBRLL
FBBBBBBLRL
BFFFBBFLLL
FBBFBBFLRL
FFFFBBFRLR
BFBFFFBRRR
FFBFBFFLRR
FFFFFBFLLL
FBFBFFFRRR
FBFFFBFRLR
FBFBBFBRLL
BFBFFBFRRR
BFBBFFBRLR
FBBBBFFRRL
BFBFFFFLLL
BFBFFFBLRR
FBFBBBBRRL
BFFFBFBLRR
FFBBFBFLLR
FBBBFFBRRL
FFFFFBFRLR
FFFBBFBLLR
FBFFBFFLRL
FFFBFBFRRR
BBFFBFBRRR
BFBBBBFLLR
BFBBBBBRLR
FFBBFFFLRL
FBBBFFBLLR
BFBFBFBLRR
FFBFBFFLLR
FBFFBFFRLL
FFBFFFBLLR
BFBBFBFRLR
FBBBFBBLLL
BFBBBBBRLL
FBFBFFBRLR
FFBBBFBLRR
FBBFFBFLLR
FFFBBFBLRL
FBFBBBFLRR
FBBBFFFLRR
FBFFFFBRRR
FFFFFBBLRL
FFBBBBFRLR
BFFBFBFRLL
BFFFFBFRLL
BFFFBFBLLL
BFBBBFBRLL
FFFBFFFRLR
FBBBFFBLLL
FBFBBFFLRR
FFFBFBBLRR
BFBFFFBRRL
FFBBBFFRRR
FBFFFFBRLL
FFFBBFBLRR
FFFFFFBRLR
FFFBBBBLLR
FFFBFFFRRL
FBBFFBBRRL
FBBBBFBLRR
FBFFBFBLLL
FFBFFFBRLR
BFFBBBFLLR
FFFBBBBRLL
FFFFBBBLRR
FFFBBFFLRR
BBFFFFFLLR
FFFFBFBLRL
BFBFBBBLRR
FBBFFFBRLR
FBFFFBBRLR
FBFFBBFLRR
BFBBFBFLRR
FBFBFFFRLL
BBFFBFFRRR
BFFBBBBRLL
BFBBFFBRRL
BFFBBFFLLR
BFBFBBFRRR
FBFBFBFLLL
FBBBFFFRLL
FFBBFBBRRR
FFBBBFFLLL
BFFBFFFLLL
BFBFFBBLRR
FFFFBFBRLR
FBFBBBFRRL
FFFFBBBLLL
FBBBBBFLLR
BFBFBBBLRL
BBFFFFFLRR
BFFBFFBLLR
BFBBFFBLRR
FBBBFBBLLR
FFBFBBFLRR
FBFBFBFLLR
FBFBFBBRRR
BFFFFBFLRL
FFFBFFFLRL
BBFFFBBRRR
BFBBFFFLRR
FFFFBFFLRL
BFFBBFFRRR
BFFBFBBRLR
FFBBBFBRRR
FFBBFBFRRL
FBBFFBFRRL
FBBFBBFRRL
FBBFBFBLLL
BFBBBBBRRL
FFBBFFFLLR
FFBBBFBLRL
FFBBFFFRLR
BFBBFBBLLR
FFBFFBFRRL
FBBBBFFLLL
BFFFFBFLRR
BFBBBFFRLL
BFBBBBBRRR
BBFFFFBLLL
FBFFFBBLRR
FBBBBFFRLR
FBBFBFFRLR
FBFBBFFRRL
FBFFFFBRRL`;

describe("day 05", () => {
  describe("part 1", () => {
    const boardingPasses = {
      'FBFBBFFRLR': 357,
      'BFFFBBFRRR': 567,
      'FFFBBBFRRR': 119,
      'BBFFBBFRLL': 820
    };
    test("individual puzzle examples", () => {
      for (const key in boardingPasses) {
        expect(one(key)).toBe(boardingPasses[key]);
      }
    })

    test("max ID of puzzle examples", () => {
      expect(one(Object.keys(boardingPasses).join('\n\n'))).toBe(820);
    })

    test("actual input", () => {
      expect(one(actualInput)).toBe(822);
    });
  });

  describe("part 2", () => {
    test("puzzle examples", () => {
      // expect(two(actualInput)).toBe();
    })
  })
});