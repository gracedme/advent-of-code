const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`)
  stream.setEncoding('utf8')
  stream.on('data', fn)
}

// practice re-write: part one
function fn(input) {
  const lines = input.split('\n').sort((a, b) => a - b);
  const joltages = [0].concat(lines.map(i => parseInt(i)));
  const largestAdaptor = joltages[joltages.length - 1] + 3;
  joltages.push(largestAdaptor);

  let n1s = 0;
  let n3s = 0;

  joltages.forEach((joltage, ix) => {
    const diff = joltages[ix + 1] - joltage
    if (diff === 1) n1s++
    if (diff === 3) n3s++
  });

  return n1s * n3s;
}

module.exports = fn

// dynamic programming:

// build a graph
// using a Map, the keys are nodes and the values are the set of adjacent nodes
// to count all paths: memoize results of recursive path counting function

const memo = new Map();
const countPaths = (start, end, count) => {
  if (memo.has(start)) {
    return memo.get(start);
  }

  if (start === end) {
    count++;
    memo.set(start, count);
    return count;
  } else {
    const neighbours = adjacencyList.get(start);
    for (let neighbour of neighbours) {
      // the pathcount of a current node to the end is equal to
      // the sum of the paths of its adjacent nodes to the end node
      count += countPaths(neighbour, end, count);
      memo.set(start, count);
    }
  }
}