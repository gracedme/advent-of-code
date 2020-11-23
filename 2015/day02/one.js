const fs = require('fs');

const filename = process.argv[2];

const stream = fs.createReadStream(filename);
stream.setEncoding('utf8');
stream.on("data", getTotalWrappingPaper);

function getTotalWrappingPaper(input) {
    const toys = input.split('\n');
    let totalPaper = 0;

    // for each line, get wrapping paper area
    toys.forEach((val, ix) => {
        // split line into length, width, height
        const dimensions = val.split('x');

        // calculate rectangle areas
        const rectangles = [
            parseInt(dimensions[0]) * parseInt(dimensions[1]),
            parseInt(dimensions[0]) * parseInt(dimensions[2]),
            parseInt(dimensions[1]) * parseInt(dimensions[2])
        ]
        .sort((a, b) => a - b);

        // calculate surface area
        const wrappingPaper = rectangles.reduce((a, c) => a + 2 * c, rectangles[0]);

        // add to total
        totalPaper += wrappingPaper;
        console.log(`totalPaper: ${totalPaper}`)
    });

    return totalPaper;
}

module.exports = getTotalWrappingPaper;