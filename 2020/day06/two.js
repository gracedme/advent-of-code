const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const groups = input.split('\n\n')
  let sumOfGroupYesCount = 0;

  for (let ix = 0; ix < groups.length; ix++) {
    const people = groups[ix].split('\n');
    const chars = people.join('').split('').sort(); // lol
    const wholeGroupResponded = chars.filter((ch, i, self) => {
      return self[i + people.length - 1] && self[i] === self[i + people.length - 1]
    })

    sumOfGroupYesCount += wholeGroupResponded.length;
  }

  console.log(`sum of all group totals: ${sumOfGroupYesCount}`)
  return sumOfGroupYesCount;
}

module.exports = fn;
