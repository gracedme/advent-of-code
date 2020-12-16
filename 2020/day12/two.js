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

  let ship = {
    'northsouth': 0,
    'eastwest': 0,
    'direction': 'E'
  };
  let waypoint = {
    'northsouth': 1,
    'eastwest': 10,
  };

  const moveNorthSouth = (dir, distance, oldNS) => {
    return dir === 'N' ? oldNS + distance : oldNS - distance;
  }

  const moveEastWest = (dir, distance, oldEW) => {
    return dir === 'E' ? oldEW + distance : oldEW - distance;
  }

  // waypoint at E10, 4N w/ R90 --> 4E, 10S
  // fn returns new direction
  const turn = (dir, degrees, prevDir) => {
    const newDegrees = dir === 'R'
      ? (DIRECTIONS[prevDir] + degrees) % 360
      : (DIRECTIONS[prevDir] - degrees + 360)  % 360;

    return DEGREES[newDegrees];
  }

  // todo: move ship towards waypoint position for specified number of iterations
  const moveShipToWaypoint = (iterations) => {}

  lines.forEach(line => {
    const regex = /([NESWLRF])(\d+)/;
    const matches = line.match(regex);
    const cmd = matches[1];
    const arg = parseInt(matches[2]);

    if (['N', 'S'].includes(cmd)) {
      waypoint[`northsouth`] = moveNorthSouth(cmd, arg, waypoint.northsouth)
    }

    if (['E', 'W'].includes(cmd)) {
      waypoint[`eastwest`] = moveEastWest(cmd, arg, waypoint.eastwest)
    }

    if (['L', 'R'].includes(cmd)) {
      const ns = waypoint.northsouth > 0 ? 'N' : 'S';
      const ew = waypoint.eastwest > 0 ? 'E' : 'W';
      const newNsDir = turn(cmd, arg, ns);
      const newEwDir = turn(cmd, arg, ew);

      const newNsDistance = waypoint.northsouth > 0 && ['W', 'S'].includes(newNsDir)
        ? waypoint.northsouth * (-1)
        : waypoint.northsouth;

      const newEwDistance = waypoint.eastwest > 0 && ['W', 'S'].includes(newEwDir)
        ? waypoint.eastwest * (-1)
        : waypoint.eastwest;

      waypoint[`northsouth`] = (['N', 'S'].includes(newNsDir)) ? newNsDistance : newEwDistance;
      waypoint[`eastwest`] = (['E', 'W'].includes(newEwDir)) ? newEwDistance : newNsDistance;
    }

    if (cmd === 'F') {
      const newShipPosition = moveShipToWaypoint(arg);
    }
    console.log(ship, waypoint);
  })

  // Manhattan distance:
  // sum of the absolute values of east/west position & north/south position
  result = Math.abs(ship.northsouth) + Math.abs(ship.eastwest);

  return result;
}

module.exports = fn;
