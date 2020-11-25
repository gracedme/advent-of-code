const fs = require('fs');
const md5 = require('blueimp-md5');

const stream = fs.createReadStream(`${__dirname}/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(secretKey) {
    let hash = "";
    let n = 0;

    while (n < Number.MAX_SAFE_INTEGER && !hash.startsWith("00000")) {
        n += 1;
        hash = md5(`${secretKey}${n}`);
    }

    console.log(`n: ${n} hash: ${hash}`);
    return n;

    // read input into string
    // add an integer
    // get hash
}

module.exports = fn;