const fs = require('fs');
const rfdc = require('rfdc')();

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

const EMPTY = 'L';
const OCCUPIED = '#';
const FLOOR = '.';

function fn(input) {
  const lines = input.split('\n');
  const width = lines[0].length;
  const length = lines.length;

  const DIRECTIONS = {
    'nw': { x: -1, y: -1},
    'n': { x: -1, y: 0},
    'ne': { x: -1, y: 1},
    'w': { x: 0, y: -1},
    'e': { x: 0, y: 1},
    'sw': { x: 1, y: -1},
    's': { x: 1, y: 0},
    'se': { x: 1, y: 1},
  };

  const hasVisibleOccupiedSeat = (x, y, grid, dir, offset) => {
    const adjX = x + (DIRECTIONS[dir].x * offset);
    if (adjX < 0 || adjX >= length) return false;

    const adjY = y + (DIRECTIONS[dir].y * offset);
    if (adjY < 0 || adjY >= width) return false;

    const state = grid[adjX][adjY];

    if (state === FLOOR) return hasVisibleOccupiedSeat(x, y, grid, dir, offset + 1);

    return state === OCCUPIED;
  }

  const getVisibleOccupiedSeats = (x, y, grid) => {
    let map = [];

    for (let dir in DIRECTIONS) {
      if (hasVisibleOccupiedSeat(x, y, grid, dir, 1)) map.push(dir);
    }

    return map.length;
  }

  let totalOccupiedSeats = 0;
  let lastTotal = -1; // some value other than initialized zero, not being picky here

  let currentGrid = rfdc(lines);
  let nextGrid = rfdc(lines);

  while (lastTotal !== totalOccupiedSeats) {
    lastTotal = totalOccupiedSeats;
    totalOccupiedSeats = 0;

    currentGrid.forEach((row, rowIx) => {
      const nextRow = [];
      for (let colIx = 0; colIx < width; colIx++) {
        const totalOccupied = getVisibleOccupiedSeats(rowIx, colIx, currentGrid);
        const nextSeatState =
          (currentGrid[rowIx][colIx] === EMPTY && totalOccupied === 0)
            ? OCCUPIED
            : (currentGrid[rowIx][colIx] === OCCUPIED && totalOccupied >= 5)
                ? EMPTY
                : currentGrid[rowIx][colIx]

        nextRow.push(nextSeatState);
      }
      const str = nextRow.join('');
      totalOccupiedSeats += str.split(OCCUPIED).length - 1

      nextGrid[rowIx] = str;
    })

    currentGrid = rfdc(nextGrid);
  }
  console.log(totalOccupiedSeats);

  return totalOccupiedSeats;
}

module.exports = fn;
