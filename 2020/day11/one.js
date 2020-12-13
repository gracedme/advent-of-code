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

  const adjacentSeats = (x, y, grid) => {
    let count = 0
    for (let row = -1; row <= 1; row++) {
      const rowAdj = x + row;
      if (rowAdj < 0 || rowAdj >= length) continue; // edge of grid

      for (let col = -1; col <=1; col++) {
        const colAdj = y + col;
        if (colAdj < 0 || colAdj >= width) continue; // edge of grid, columns
        if (x === rowAdj && y === colAdj) continue;  // ignore self

        if (grid[rowAdj][colAdj] === OCCUPIED) count++;
      }
    }
    return count;
  }

  let totalOccupiedSeats = 0;
  let lastTotal = 1000; // some value other than initialized zero

  let grid = rfdc(lines);
  let nextGrid = rfdc(lines);

  while (lastTotal !== totalOccupiedSeats) {
    lastTotal = totalOccupiedSeats;
    totalOccupiedSeats = 0;
    grid.forEach((row, rowIx) => {
      let nextRow = [];
      for (let colIx = 0; colIx < width; colIx++) {
        const adjacentOccupied = adjacentSeats(rowIx, colIx, grid);
        let nextSeatState = grid[rowIx][colIx];

        if (grid[rowIx][colIx] === EMPTY && adjacentOccupied === 0) {
          nextSeatState = OCCUPIED;
        } else if (grid[rowIx][colIx] === OCCUPIED && adjacentOccupied >= 4) {
          nextSeatState = EMPTY;
        }

        nextRow.push(nextSeatState);
      }
      const str = nextRow.join('');
      totalOccupiedSeats += str.split(OCCUPIED).length - 1

      nextGrid[rowIx] = str;
    })

    grid = rfdc(nextGrid);
  }
  console.log(totalOccupiedSeats);

  return totalOccupiedSeats;
}

module.exports = fn;
