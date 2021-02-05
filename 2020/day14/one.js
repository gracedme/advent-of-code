const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const lines = input.split('\n');
  let checksum = 0;

  let bitmask = ``;
  let memory = {};
  const bitMaskRegex = /mask = ([01X]+)/;
  const memoryRegex = /mem\[(\d+)\] = (\d+)/;

  lines.forEach(line => {
    if (bitMaskRegex.test(line)) {
      // save the current bitmask, split into character array
      bitmask = line.match(bitMaskRegex)[1].split(''); // todo: convert to object of which bits to replace
    } else {
      // parse both the memory address and the value to be written to that address
      const matches = line.match(memoryRegex);
      const address = matches[1];
      let value = parseInt(matches[2])
        .toString(2) // convert the value to binary string
        .padStart(36, '0')
        .split(''); // split into character array

      bitmask.forEach( (ch, ix) => {
        if (ch !== 'X') {
          value[ix] = ch; // apply bitmask
        }
      });

      // join the char array into a string, convert to decimal, save to memory
      memory[address] = parseInt(value.join(''), 2);
    }
  })

  // on the assumption that the same memory addresses may be re-written with this program,
  // loop through the memory addresses and sum the decimal values
  Object.values(memory).forEach(v => { checksum += v; })
  console.log(`checksum: ${checksum}`);

  return checksum;
}

module.exports = fn;
