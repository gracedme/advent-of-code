const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  let lines = input.split('\n').map(i => parseInt(i)).sort((a, b) => a - b);
  const outlet = 0;
  const largestAdaptor = lines.pop();
  const builtInDeviceAdaptor = largestAdaptor + 3;
  lines = [outlet].concat(lines, largestAdaptor, builtInDeviceAdaptor);

  // build representation of graph
  // a map where the map's keys are nodes
  // and a node maps to its set of adjacent nodes
  const adjacencyList = new Map();
  lines.forEach((n, ix) => {
    let neighbours = [];
    for (let i = 1; i <= 3; i++) {
      if (lines[ix + i] <= (n + 3)) {
        neighbours.push(lines[ix + i]);
      }
    }
    adjacencyList.set(n, new Set(neighbours));
  })
  console.log(adjacencyList);

  let iterations = 0;
  const memo = new Map();
  const countPaths = (start, end, count) => {
    iterations++;
    if (memo.has(start)) {
      return memo.get(start);
    }

    if (start === end) {
      count++;
      memo.set(start, count);
      return count;
    }
    else {
      const neighbours = adjacencyList.get(start);
      for (let neighbour of neighbours) {
        count += countPaths(neighbour, end, count)
        memo.set(start, count);
      }
    }

    return count;
  }
  const count = countPaths(outlet, builtInDeviceAdaptor, 0);

  console.log("memo", memo, "iterations", iterations);
  console.log("path count:", count);

  return count;
}

module.exports = fn;
