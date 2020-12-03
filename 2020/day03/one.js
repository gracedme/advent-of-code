const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

const TREE = "#";
const RIGHT = 3;
const DOWN = 1;

function fn(input) {
  const lines = input.split('\n');
  const divisor = lines[0].length - 1;
  let totalTrees = 0;
  let col = 0;

  for (let row = DOWN; row < lines.length; row += DOWN) {
    col = col + RIGHT < divisor
      ? col = col + RIGHT
      : col = (col + RIGHT) % divisor;

    if (lines[row][col] === TREE) {
      totalTrees++;
    }
    // console.log(`row: ${row}, col: ${col}, val: ${lines[row][col]}, totalTrees: ${totalTrees}\n\n`);
  }

  console.log(`total trees @ slope ${RIGHT}R ${DOWN}D: ${totalTrees}`);
  return totalTrees;
}

module.exports = fn;
