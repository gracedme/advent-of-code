const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", findFirstBasement);

function findFirstBasement(input) {
    const floors = input.split('');
    let currentFloor = 0;
    let position = 1;

    for (let ix = 0; ix < floors.length; ix++) {
        if (floors[ix] === '(') {
            currentFloor = currentFloor + 1;
        }

        if (floors[ix] === ')') {
            currentFloor = currentFloor - 1;
        }

        if (currentFloor === -1) {
            position = ix + 1;
            break;
        }
    }

    console.log(`position: ${position}`)
    return position;
}

module.exports = findFirstBasement;