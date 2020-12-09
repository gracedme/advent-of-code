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

  let shinyGoldContainers = new Set();
  let lookFor = "shiny gold";
  const queue = [lookFor];

  while (queue.length) {
    const lookForBag = queue.shift();
    for (let colour in luggageMap) {
      if (luggageMap[colour].hasOwnProperty(lookForBag)) {
        shinyGoldContainers.add(colour);
        if (!queue.includes(colour)) queue.push(colour);
      }
    }
  }

  console.log("containers", shinyGoldContainers);
  return shinyGoldContainers.size;
}

module.exports = fn;
