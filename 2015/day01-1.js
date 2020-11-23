const fs = require('fs');

const filename = process.argv[2];

const stream = fs.createReadStream(filename);
stream.setEncoding('utf8');
stream.on("data", countFloors);

function countFloors(input) {
    const allInstructions = input.split('');
    const up = allInstructions.filter(i => i === "(").length;
    const down = allInstructions.filter(i => i === ")").length;

    const finalFloor = up - down;
    console.log(finalFloor);

    return finalFloor;
}

module.exports = countFloors;