const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');
  const TIME = parseInt(lines[0]);
  const BUSES = lines[1].split(',').filter(b => b !== 'x')

  console.log(TIME, BUSES);
  let result = 0;
  let firstBus = 0;
  let diff = TIME % firstBus;
  result = firstBus * diff;

  BUSES.forEach(b => {
    const d = TIME % b;
  })



  return result;
}

module.exports = fn;
