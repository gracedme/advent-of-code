const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input, preamble) {
  const lines = input.split('\n');
  let result = 0;

  const testNumber = ix => {
    const current = parseInt(lines[ix])
    for (let lx = (ix - preamble); lx < ix; lx++) {
      for (let rx = (lx + 1); rx < ix; rx++) {
        if (current === parseInt(lines[lx]) + parseInt(lines[rx])) return true;
      }
    }
    return false;
  }

  for (let ix = preamble; ix < lines.length; ix++) {
    if (!testNumber(ix)) {
      result = parseInt(lines[ix]);
      break;
    }
  }

  console.log("result", result);
  return result;
}

module.exports = fn;
