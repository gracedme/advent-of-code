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
    const chars = groups[ix].split('\n').join('').split(''); // lol
    const unique = [...new Set(chars)];

    sumOfGroupYesCount += unique.length;
  }

  console.log(`sum of all group totals: ${sumOfGroupYesCount}`)
  return sumOfGroupYesCount;
}

module.exports = fn;
