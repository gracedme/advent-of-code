const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n')
  const BUSES = lines[1].split(',')
    .map((id, remainder) => ({ id, remainder }))
    .filter(o => o.id !== 'x')
    .map(o => ({ id: parseInt(o.id), remainder: o.remainder }))

  console.log(BUSES);

  let timestamp = BUSES.shift().id;
  let periodIncrement = timestamp;
  for (let { id, remainder } of BUSES) {
      while ((timestamp + remainder) % id !== 0) {
        timestamp += periodIncrement
      }
      periodIncrement *= id
  }

  console.log(`earliest aligned bus schedule time: ${timestamp}`);
  return timestamp;
}

module.exports = fn;
