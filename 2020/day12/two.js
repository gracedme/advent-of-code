const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');

  let ship = {
    'northsouth': 0,
    'eastwest': 0,
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
      const currentNS = waypoint.northsouth;
      const currentEW = waypoint.eastwest;
      if ((cmd === 'L' && arg === 90) || (cmd === 'R' && arg === 270)) {
        waypoint.northsouth = currentEW;
        waypoint.eastwest = currentNS * (-1);
      } else if ((cmd === 'R' && arg === 90) || (cmd === 'L' && arg === 270)) {
        waypoint.eastwest = currentNS;
        waypoint.northsouth = currentEW * (-1);
      } else if (arg === 180) {
        waypoint.northsouth = currentNS * (-1);
        waypoint.eastwest = currentEW * (-1);
      }
    }

    if (cmd === 'F') {
      ship.northsouth += waypoint.northsouth * arg;
      ship.eastwest += waypoint.eastwest * arg;    }

    // console.log(ship, waypoint);
  })

  // Manhattan distance:
  // sum of the absolute values of east/west position & north/south position
  let result = Math.abs(ship.northsouth) + Math.abs(ship.eastwest);
  console.log(result);

  return result;
}

module.exports = fn;
