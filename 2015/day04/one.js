const fs = require('fs');
const md5 = require('blueimp-md5');

const zeroes = process.argv[2];
console.log(zeroes);

const stream = fs.createReadStream(`${__dirname}/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(secretKey) {
    let hash = "";
    let n = 0;

    while (n < Number.MAX_SAFE_INTEGER && !hash.startsWith(zeroes)) {
        n += 1;
        hash = md5(`${secretKey}${n}`);
    }

    console.log(`n: ${n} hash: ${hash}`);
    return n;
}

module.exports = fn;