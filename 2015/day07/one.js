const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input, query) {
    const lines = input.split('\n');

    // initialize wires, assume the queried wire exists
    const wires = {
        [query]: 0
    };

    // read each line from input
    // parse line into commands, w/ differing grammar
    // add to wires
    lines.forEach(line => {
        const regex = /^(.*) -> ([a-z]{1,2})$/;
        const matches = line.match(regex);
        wires[matches[2]] = parse(matches[1]);
    })
    console.log(wires);

    const parse = str => {
        if (str.test(/([\d]*) -> [a-z]{1,2}/)) {
            // numerical assign
            console.log("number");

        }
        if (str.test(/NOT [a-z]{1,2} -> [a-z]{1,2}/)) {
            // NOT
            console.log("NOT operator");
        }
        if (str.test(/(.*) (.*) (.*) -> [a-z]{1,2}/)) {
            // binary operator
            console.log("binary operator");
        }
    }

    // query: recursively calculate signal
    const calculate = wire => {
        const source = wires[wire];

    };



    return wires[query];
}

module.exports = fn;