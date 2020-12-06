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

  const isValidField = ([key, val]) => {
    switch (key) {
      case 'byr': return parseInt(val) >= 1920 && parseInt(val) <= 2002;
      case 'ecl': return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);
      case 'eyr': return parseInt(val) >= 2020 && parseInt(val) <= 2030;
      case 'hcl': return val.match(/^#[0-9a-f]{6}$/);
      case 'hgt': {
        const matches = val.match(/^(\d{2,3})(cm|in)$/);
        if (!matches) return false;
        const height = matches[1];
        const unit = matches[2];

        if (unit === 'cm' && height >= 150 && height <= 193 ) return true;
        return (unit === 'in' && height >= 59 && height <= 76);
      }
      case 'iyr': return parseInt(val) >= 2010 && parseInt(val) <= 2020;
      case 'pid': return val.match(/^[0-9]{9}$/);
      case 'cid': return true;
      default: return false;
    }
  };

  const isValid = pp => {
    if (pp.length < requiredFields.length
      || pp.length >= (requiredFields.length + 2)) {
      return false;
    }

    let valid = true;
    for (let ix = 0; ix < pp.length; ix++) {
      const pair = pp[ix].split(':');
      if (!isValidField(pair)
        || (pair[0] === 'cid' && pp.length === requiredFields.length)
      ) {
        valid = false;
        break;
      }
    }

    return valid;
  }

  for (let ix = 0; ix < passports.length; ix++) {
    const pairs = passports[ix].split(/\s/)
    if (isValid(pairs)) totalValid++;
    // else console.log("invalid", pairs);
  }

  console.log(totalValid);
  return totalValid;
}

module.exports = fn;