const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');

  let luggageMap = {};
  lines.forEach(line => {
    const matches = line.match(/(\w+ \w+) bags contain (no other bags|(?:\d+ \w+ \w+ bags?,? ?)+)./);
    const bag = matches[1];
    const sources = matches[2].split(', ');

    luggageMap[bag] = sources.reduce((acc, item) =>{
      if (item === "no other bags") return {};
      const details = item.split(' ');

      return {
        ...acc,
        [`${details[1]} ${details[2]}`]: parseInt(details[0])
      }
    }, {});
  });

  let lookFor = "shiny gold";

  // todo: not quite right, returns correct total + 1
  // todo: re-think the objects here, should be different data structure
  function getBagsCount(colour) {
    const children = luggageMap[colour];

    // if there are no children
    // return 1
    if (!Object.keys(children).length) return 1;

    return Object.entries(children)
      .reduce((acc, [key, val]) =>
        acc + val * getBagsCount(key), 0)
      + 1; // include container bag
  }

  const total = getBagsCount(lookFor) - 1;

  console.log(`total in ${lookFor}`, total);
  return total;
}

module.exports = fn;
