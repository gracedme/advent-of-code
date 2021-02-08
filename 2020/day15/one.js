const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input, query) {
  const numbers = input.split(',').map(n => parseInt(n));
  const FINAL_TURN = parseInt(query);

  // initialize
  let record = {};
  let lastSpoken = null;
  let turn = 1;
  numbers.forEach(n => {
    record[n] = { prev: null, last: turn };
    lastSpoken = n;
    turn++;
  })

  while (turn <= FINAL_TURN) {
    if (record.hasOwnProperty(lastSpoken) && record[lastSpoken].prev === null) {
      lastSpoken = 0;
    } else {
      lastSpoken = record[lastSpoken].last - record[lastSpoken].prev;
    }

    if (record.hasOwnProperty(lastSpoken)) {
      record[lastSpoken].prev = record[lastSpoken].last;
      record[lastSpoken].last = turn;
    } else {
      record[lastSpoken] = { prev: null, last: turn };
    }

    turn++;
  }
  console.log(lastSpoken);

  return lastSpoken;
}

module.exports = fn;
