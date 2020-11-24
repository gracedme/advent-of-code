const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {

}

module.exports = fn;