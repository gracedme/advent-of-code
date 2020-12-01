const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  // read all input
  // sort numbers by size
  // subtract smallest number from 2020
  // check if remainder exists in number list
  // stop when 2020 sum is found

  const lines = input
    .split('\n')
    .map(i => parseInt(i))
    .sort((a,b) => a - b);

  let total = 0;
  let found = false;
  for (let ix = 0; !found && ix < lines.length; ix++) {
    const diff = 2020 - lines[ix];
    found = lines.includes(diff);
    if (found) {
      total = lines[ix] * diff;
      console.log(lines[ix], diff);
    }
  }

  console.log(total);
  return total;
}

module.exports = fn;