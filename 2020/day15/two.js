const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input, query) {
  const seedNumbers = input.split(',').map(n => parseInt(n));
  const FINAL_TURN = parseInt(query);

  let record = new Map();

  let number = 0;
  for (let turn = 0; turn < FINAL_TURN; turn++) {
    if (turn < seedNumbers.length) {
      number = seedNumbers[turn];
      record.set(number, turn + 1)
    } else if (record.has(number)) {
      const lastSpoken = record.get(number);
      record.set(number, turn);
      number = turn - lastSpoken;
    } else {
      record.set(number, turn);
      number = 0;
    }
  }

  console.log(number);

  return number;
}

module.exports = fn;
