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
  let cursorPosition = 0;

  while (!visitedAddresses.includes(cursorPosition)) {
    const [op, num] = instructions[cursorPosition].split(' ');
    visitedAddresses.push(cursorPosition);

    if (op === 'nop') cursorPosition++;
    if (op === 'jmp') cursorPosition += parseInt(num);
    if (op === 'acc') {
      accumulator += parseInt(num);
      cursorPosition++;
    }
  }

  console.log("final accumulator before infinite loop:", accumulator);
  return accumulator;
}

module.exports = fn;
