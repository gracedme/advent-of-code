const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  let lines = [0].concat(input.split('\n').map(i => parseInt(i)).sort((a, b) => a - b));
  const largestAdaptor = lines.pop();
  const deviceAdaptor = largestAdaptor + 3;
  lines = lines.concat(largestAdaptor, deviceAdaptor);
  const diffs = lines.reduce((acc, line, ix) => {
    const diff = lines[ix + 1] - lines[ix]

    if (ix === lines.length - 1) {
      return acc;
    }

    if (diff === 1) return { ...acc, ones: acc.ones + 1 }
    if (diff === 3) return { ...acc, threes: acc.threes + 1 }
  }, { ones: 0, threes: 0 })

  console.log("product of count of ones and threes: ", diffs.ones * diffs.threes);
  return diffs;
}

module.exports = fn;
