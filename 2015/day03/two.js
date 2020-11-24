const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const moves = input.split('');
    let santaPath = ["0,0"];
    let robotSantaPath = ["0,0"];
    let visitedHouses = new Set();
    visitedHouses.add("0,0"); // new Set("0,0") would make a new Set of chars

    moves.forEach( (move, ix) => {
        const santa = ix % 2 === 0;

        const coords = santa
            ? santaPath[santaPath.length - 1].split(",")
            : robotSantaPath[robotSantaPath.length - 1].split(",")
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
        santa ? santaPath.push(house) : robotSantaPath.push(house);
        if (!visitedHouses.has(house)) {
            visitedHouses.add(house);
        }
    });
    console.log('total santa path length:', santaPath.length);
    console.log('total robot santa path length:', robotSantaPath.length);
    console.log('total visited houses:', visitedHouses.size);

    return visitedHouses.size;
}

module.exports = fn;