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

  // north/south
  // east/west
  // left/right by given number of degrees
  // forward in direction currently facing
  // ship starts facing east
  // position is always evaluated by a north/south + east/west value
  // directions need to know their degrees-relationship to other directions

  // for each direction
    // parse it, determine cmd and args
    // update state

  const moveNorthSouth = (dir, distance, oldNS) => {
    return dir === 'N' ? oldNS + distance : oldNS - distance;
  }

  const moveEastWest = (dir, distance, oldEW) => {
    return dir === 'E' ? oldEW + distance : oldEW - distance;
  }

  const turn = (dir, degrees, oldDir) => {
    const newDegrees = dir === 'R'
      ? (DIRECTIONS[oldDir] + degrees) % 360
      : (DIRECTIONS[oldDir] - degrees + 360)  % 360;

    return DEGREES[newDegrees];
  }

  lines.forEach(line => {
    const regex = /([NESWLRF])(\d+)/;
    const matches = line.match(regex);
    const cmd = matches[1];
    const arg = parseInt(matches[2]);

    if (['N', 'S'].includes(cmd)) {
      state = {
        ...state,
        northsouth: moveNorthSouth(cmd, arg, state.northsouth)
      }
    }

    if (['E', 'W'].includes(cmd)) {
      state = {
        ...state,
        eastwest: moveEastWest(cmd, arg, state.eastwest)
      }
    }

    if (['L', 'R'].includes(cmd)) {
      state = {
        ...state,
        direction: turn(cmd, arg, state.direction)
      };
    }

    if (cmd === 'F') {
      // move position by whichever direction it faces
      if (['N', 'S'].includes(state.direction)) {
        state = {
          ...state,
          northsouth: moveNorthSouth(state.direction, arg, state.northsouth)
        }
      }
      if (['E', 'W'].includes(state.direction)) {
        state = {
          ...state,
          eastwest: moveEastWest(state.direction, arg, state.eastwest)
        }
      }
    }
    // console.log(state);
  })

  // Manhattan distance:
  // sum of the absolute values of east/west position & north/south position
  result = Math.abs(state.northsouth) + Math.abs(state.eastwest);

  return result;
}

module.exports = fn;
