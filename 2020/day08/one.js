const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const instructions = input.split('\n');
  let accumulator = 0;
  let visitedAddresses = [];
  let ix = 0;

  while (!visitedAddresses.includes(ix)) {
    const [op, num] = instructions[ix].split(' ');
    const arg = parseInt(num);
    visitedAddresses.push(ix);

    if (op === 'nop') ix++;
    if (op === 'jmp') ix += arg;
    if (op === 'acc') {
      accumulator += arg;
      ix++;
    }
  }

  console.log("final accumulator before infinite loop:", accumulator);
  return accumulator;
}

module.exports = fn;
