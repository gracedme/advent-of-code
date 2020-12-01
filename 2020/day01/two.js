const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  const lines = input
    .split('\n')
    .map(i => parseInt(i))
    .sort((a,b) => a - b);

  let total = 0;
  let found = false;
  for (let ix = 0; !found && ix < lines.length; ix++) {
    for (let jx = ix + 1; !found && jx < lines.length; jx++) {
      const diff = 2020 - lines[ix] - lines[jx];
      found = lines.includes(diff);
      if (found) {
        total = lines[ix] * lines[jx] * diff;
        console.log(lines[ix], lines[jx], diff);
      }
    }
  }

  console.log(total);
  return total;
}

module.exports = fn;