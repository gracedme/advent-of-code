const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  const lines = input.split('\n');
  let result = 0;

  return result;
}

module.exports = fn;


/***
 * tests template
 *

const one = require('./one');
const two = require('./two');

describe("day ", () => {
  describe("part 1", () => {
    test("puzzle examples", () => {
      expect(one("")).toBe();
    })
  });

  describe("part 2", () => {
    test("puzzle examples", () => {
      expect(two("")).toBe();
    })
  })
});

*/
