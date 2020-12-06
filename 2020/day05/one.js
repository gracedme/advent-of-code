const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');
  let maxSeatId = 0;

  lines.forEach(line => {
    const binary = line
      .replace(/[F|L]/g, "0")
      .replace(/[B|R]/g, "1");
    const row = parseInt(binary.substr(0, 7), 2);
    const col = parseInt(binary.substr(7), 2);
    const seatId = row * 8 + col;
    if (seatId > maxSeatId) maxSeatId = seatId;
  })

  console.log("max seat ID:", maxSeatId)
  return maxSeatId;
}

module.exports = fn;