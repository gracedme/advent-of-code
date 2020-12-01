const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input, query) {
    const operations = {
        AND: (a, b) => a & b,
        OR: (a, b) => a | b,
        LSHIFT: (a, b) => a << b,
        RSHIFT: (a, b) => a >> b,
        NOT: (a, b) => b ^ 65535
    };

    const patterns = {
        VALUE: /^(\w+) -> (\w+)/gi,
        NOT: /^NOT (\w+) -> (\w+)/gi,
        BINARY: /^(\w+) (\w+) (\w+) -> (\w+)/gi
    }

    const lines = input.split('\n');

    // read and parse each line
    // save the wire source in a lookup data structure
    // calculate wire signal recursively

    const lookup = wire => {
        const first = wires[wire];

        // if first is not a number, find next source
        //
    }


    const parse = str => {
        if (!isNaN(parseInt(str))) {
            console.log("number");
            return parseInt(str);
        }
        if (str.startsWith("NOT")) {
            console.log("NOT operator");
            const matches = str.match(/NOT (.*)/);
            const source = matches[1];


        }
        if (str.test(/(.*) (.*) (.*)/)) {
            console.log("binary operator");
        }
    }



    // initialize wires, assume the queried wire exists
    const wires = {
        [query]: 0
    };

    // read each line from input
    // parse line into commands, w/ differing grammar
    // add to wires
    lines.forEach(line => {
        const regex = /^(.*) -> (.*)$/;
        const matches = line.match(regex);
        wires[matches[2]] = parse(matches[1]);
    })
    console.log(wires);


    // query: recursively calculate signal
    const calculate = wire => {
        const source = wires[wire];

    };



    return wires[query];
}

module.exports = fn;