const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

// find the closest point where two wires cross
// closest determined by Manhattan distance from starting port
// coordinates are LR and UD directions, represented by integers away from starting position 0,0
function fn(input) {
  // parse one wire, split by commas
  const wires = input.split('\n');
  let result = 0;
  const wireOne = wires[0].split(',')
  const wireTwo = wires[1].split(',')

  const getWirePath = (wire) => {
    // initial coordinates of each wire
    let position = {x: 0, y: 0};
    let coordinates = [];

    wire.forEach(movement => {
      const regex = /([LRUD])(\d+)/;
      const matches = movement.match(regex);
      const direction = matches[1];
      let distance = parseInt(matches[2]); // todo: const

      if (['L', 'D'].includes(direction)) {
        distance = 0 - distance;
      }

      // todo: easy to read, but repetitive
      if (['L', 'R'].includes(direction)) {
        for (let ix = (direction === 'R' ? 0 : distance); // todo: hard to read
             ix < (direction === 'R' ? distance : 0);
             ix++
        ) {
          position = {
            x: position.x + (direction === 'R' ? 1 : -1),
            y: position.y
          }
          coordinates.push(`X${position.x}Y${position.y}`);
        }

      } else {
        for (let iy = (direction === 'U' ? 0 : distance); // todo: hard to read
             iy < (direction === 'U' ? distance : 0);
             iy++
        ) {
          position = {
            x: position.x,
            y: position.y + (direction === 'U' ? 1 : -1),
          }
          coordinates.push(`X${position.x}Y${position.y}`);
        }
      }
    })

    return coordinates;
  }

  const binarySearch = (array, target) => {
    let first = 0;
    let last = array.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (array[middle] === target) {
        found = true;
        position = middle;
      } else if (array[middle] > target) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
    return position;
  }

  // calculate Manhattan distance of each point
  const manhattan = (x, y) => Math.abs(x) + Math.abs(y);

  const pathOne = getWirePath(wireOne).sort( (a, b) => a > b ? 1 : -1);
  const pathTwo = getWirePath(wireTwo).sort( (a, b) => a > b ? 1 : -1);

  let shortestManhattan;
  pathOne.forEach(coordinate => {
    if (coordinate !== 'X0Y0' && pathTwo.includes(coordinate)) { // todo: refactor to use binary search
      const regex = /X(-?\d+)Y(-?\d+)/;
      const matches = coordinate.match(regex);
      const distance = manhattan(matches[1], matches[2]);
      if (shortestManhattan === undefined || distance < shortestManhattan) {
        shortestManhattan = distance;
      }
    }
  })

  return shortestManhattan;
}

module.exports = fn;
