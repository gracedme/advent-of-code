const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const requiredFields = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];
  let totalValid = 0;

  const passports = input.split(/\s\s/);

  const isValid = pp => {
    if (pp.length < requiredFields.length) return false;

    let valid = true;
    for (let ix = 0; ix < pp.length; ix++) {
      if (requiredFields.indexOf(pp[ix].substr(0, 3)) === -1 && pp.length === requiredFields.length) {
        valid = false;
      }
    }

    return valid;
  }

  for (let ix = 0; ix < passports.length; ix++) {
    const pairs = passports[ix].split(/\s/)
    if (isValid(pairs)) {
      totalValid++;
    }
  }

  console.log(totalValid);
  return totalValid;
}

module.exports = fn;