const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  const lines = input.split('\n');

  const validPasswords = lines.filter(line => {
    // TIL: Named Groups https://javascript.info/regexp-groups#named-groups
    const data = line.match(/(?<min>\d+)-(?<max>\d+) (?<letter>\w): (?<pw>\w+)/).groups;
    const letters = data.pw
      .split('')
      .filter(ch => ch === data.letter);

    return letters.length >= data.min
        && letters.length <= data.max;
  })

  console.log(validPasswords.length);

  return validPasswords.length;

}

module.exports = fn;