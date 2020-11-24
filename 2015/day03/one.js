// set up INFINITE grid structure
// parse each direction
// only need to record whether or not a space has been delivered to ever
// "at least one present"
// count total visited houses, not total visits

// visits = a Set of X-Y pairs

/**
 * (0, 0) > (1, 0) > (2, 0) V (2, -1) V (2, -2)
 * (2, -2) < (1, -2) ^ (1, -1) < (0, -1) ^ (0, 0)
 */

const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const moves = input.split('');
    let gridPath = [];
    let visitedHouses = new Set();
    gridPath.push("0,0");
    visitedHouses.add("0,0");

    moves.forEach(move => {
        const coords = gridPath[gridPath.length - 1].split(",");
        const x = parseInt(coords[0]);
        const y = parseInt(coords[1]);
        let house = ``;
        switch (move) {
           case 'v':
               house = `${x - 1},${y}`;
               break;
           case '^':
               house = `${x + 1},${y}`;
               break;
           case '>':
               house = `${x},${y + 1}`;
               break;
           case '<':
               house = `${x},${y - 1}`;
               break;
       }
       gridPath.push(house);
       if (!visitedHouses.has(house)) {
           visitedHouses.add(house);
       }
    });
    console.log('total path length:', gridPath.length);
    console.log('total visited houses:', visitedHouses.size);

    return visitedHouses.size;
}

module.exports = fn;