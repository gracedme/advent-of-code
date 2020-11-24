const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", getTotalRibbon);

function getTotalRibbon(input) {
    const toys = input.split('\n');
    let totalRibbon = 0;
    let count = 1;

    // for each line, get wrapping paper area
    toys.forEach(val => {
        // split line into length, width, height
        const dimensions = val.split('x');

        // calculate rectangle areas
        const rectangles = [
            2 * (parseInt(dimensions[0]) + parseInt(dimensions[1])),
            2 * (parseInt(dimensions[0]) + parseInt(dimensions[2])),
            2 * (parseInt(dimensions[1]) + parseInt(dimensions[2]))
        ].sort((a, b) => a - b);
        const smallestFace = rectangles[0];
        console.log(`smallestFace: ${smallestFace}`);

        // calculate surface area
        const volume = dimensions[0] * dimensions[1] * dimensions[2];
        console.log(`volume: ${volume}`);
        const ribbon = smallestFace + volume;

        // add to total
        totalRibbon += ribbon;
        console.log(`totalRibbon: ${totalRibbon}`);
        console.log(count);
        count++;

    });
    return totalRibbon;
}

module.exports = getTotalRibbon;