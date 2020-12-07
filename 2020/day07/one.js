const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');
  let result = 0;

  let map = {};
  lines.forEach(line => {
    const matches = line.match(/(\w+ \w+) bags contain (no other bags|(?:\d+ \w+ \w+ bags?,? ?)+)./);
    const bag = matches[1];
    const sources = matches[2].split(', ');

    map[bag] = sources.reduce((acc, item) =>{
      if (item === "no other bags") return 0;
      const details = item.split(' ');

      return {
        ...acc,
        [`${details[1]} ${details[2]}`]: parseInt(details[0])
      }
    }, {});
  });
  console.log(map);

  function containsColour(queryColour, colour) {
    if (colour === queryColour) return true;
    if (!map.has(queryColour)) return false;

    const something = map[queryColour];
    console.log(something);
  }

  return result;
}

module.exports = fn;
