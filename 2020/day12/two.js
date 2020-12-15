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

  const DIRECTIONS = {
    N: 0,
    E: 90,
    S: 180,
    W: 270
  }

  const DEGREES = {
    0: 'N',
    90: 'E',
    180: 'S',
    270: 'W'
  }

  let state = {
    'northsouth': 0,
    'eastwest': 0,
    'direction': 'E'
  }

  // todo: move waypoint
  const moveNorthSouth = (dir, distance, oldNS) => {}

  // todo: move waypoint
  const moveEastWest = (dir, distance, oldEW) => {}

  // todo: rotate waypoint position "around" ship
  // waypoint at E10, 4N --> 4E, 10S
  const turn = (dir, degrees, oldDir) => {}

  // todo: move ship towards waypoint position for specified number of iterations
  const moveShipToWaypoint = (iterations) => {}

  lines.forEach(line => {
    const regex = /([NESWLRF])(\d+)/;
    const matches = line.match(regex);
    const cmd = matches[1];
    const arg = parseInt(matches[2]);

    if (['N', 'S'].includes(cmd)) {}

    if (['E', 'W'].includes(cmd)) {}

    if (['L', 'R'].includes(cmd)) {}

    if (cmd === 'F') {}
    // console.log(state);
  })

  // Manhattan distance:
  // sum of the absolute values of east/west position & north/south position
  result = Math.abs(state.northsouth) + Math.abs(state.eastwest);

  return result;
}

module.exports = fn;
