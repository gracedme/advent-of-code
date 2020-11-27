const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const lines = input.split("\n");
    console.log(lines[0]);
    let totalBrightness = 0;

    // initialize matrix to OFF
    let grid = new Array(1000);
    for (let ix = 0; ix < 1000; ix++) {
        grid[ix] = new Array(1000).fill(0);
    }

    const lightOn = (x, y) => {
        grid[x][y]++;
        totalBrightness++;
    }

    const lightOff = (x, y) => {
        if (grid[x][y] > 0) {
            grid[x][y]--;
            totalBrightness--;
        }
    }

    const toggle = (x, y) => {
        grid[x][y] += 2;
        totalBrightness += 2;
    }

    // run instructions:
    // for each position in rectangle, alter light status
    const runCommand = (cmd, x1, y1, x2, y2) => {
        for (let xx = x1; xx <= x2; xx++) {
            for (let yx = y1; yx <= y2; yx++) {
                switch (cmd) {
                    case 'turn on': lightOn(xx, yx); break;
                    case 'turn off': lightOff(xx, yx); break;
                    case 'toggle': toggle(xx, yx); break;
                    default: break;
                }
            }
        }
    };

    // parse instructions
    lines.forEach( (line, ix) => {
        const regex = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
        const matches = line.match(regex);

        runCommand(
            matches[1], // cmd
            parseInt(matches[2]), parseInt(matches[3]), // x1, y1
            parseInt(matches[4]), parseInt(matches[5])  // x2, y2
        );
    });

    console.log(`total brightness: ${totalBrightness}`)
    return totalBrightness;
}

module.exports = fn;