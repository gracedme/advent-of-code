const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
  const hasAllFields = pp => pp.hasOwnProperty("byr")
      && pp.hasOwnProperty("iyr")
      && pp.hasOwnProperty("eyr")
      && pp.hasOwnProperty("hgt")
      && pp.hasOwnProperty("hcl")
      && pp.hasOwnProperty("ecl")
      && pp.hasOwnProperty("pid");

  const passports = input.split(/\s\s/) // chunk passport groups
      .map(pp => pp.split(/\s/)) // isolate key:val pairs
      .map(pp => pp
        .map(p => p.split(':')) // split into [key, val]
        .reduce((acc, current) => { // create an obj instead of array
          if (current[0] && current[1]) acc[current[0]] = current[1];
          return acc;
        }, {})
      )
    .filter(pp => hasAllFields(pp))

  console.log(passports.length);
  return passports.length;
}

module.exports = fn;