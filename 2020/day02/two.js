const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  const lines = input.split('\n');

  const validPasswords = lines.filter(line => {
    const data = line
      .match(/(?<pos1>\d+)-(?<pos2>\d+) (?<letter>\w): (?<password>\w+)/)
      .groups;
    const pw = data.password.split('');
    const firstMatch = pw[data.pos1 - 1] === data.letter ? 1 : 0;
    const secondMatch = pw[data.pos2 - 1] === data.letter ? 1 : 0;

    // with no logical XOR in JS, use the bitwise operator
    return firstMatch ^ secondMatch;
  })

  console.log(validPasswords.length);
  return validPasswords.length;
}

module.exports = fn;