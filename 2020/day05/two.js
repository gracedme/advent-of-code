const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

// maxId: 822 BBFFBBFRRL
// minId: 13  FFFFFFBRLR

function fn(input) {
  const lines = input.split('\n');
  let middleId = 0;
  let seatIds = [];

  lines.forEach(line => {
    const binary = line
      .replace(/[F|L]/g, "0")
      .replace(/[B|R]/g, "1");
    const row = parseInt(binary.substr(0, 7), 2);
    const col = parseInt(binary.substr(7), 2);
    seatIds.push(row * 8 + col);
  })

  seatIds.sort((a, b) => a - b);
  for (let ix = 1; ix < seatIds.length - 1; ix++) { // skip first and last seat
    if ((seatIds[ix] + 2) === seatIds[ix + 1]) {
      middleId = seatIds[ix] + 1;
    }
  }

  console.log("middle seat ID:", middleId)
  return middleId;
}

module.exports = fn;