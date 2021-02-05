const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function TreeNode(value) {
  this.value = value;
  this.children = [];
}

function Tree() {
  this._root = null;
}

// pre-order recursive DFS
Tree.prototype.traverse = () => {
  helper(this._root);

  function helper(node) {
    if (!node) return;

    console.log(node.value);
    node.children.forEach(n => helper(n));
  }
}

function fn(input) {
  const lines = input.split('\n');
  let checksum = 0;

  let bitmask = ``;
  let memory = {};
  const bitMaskRegex = /mask = ([01X]+)/;
  const memoryRegex = /mem\[(\d+)\] = (\d+)/;

  const generateTree = (address, node) => {
    console.log(address);

    if (address[0] === 'X') {
      node.children.push(new TreeNode(0));
      node.children.push(new TreeNode(1));
    } else{
      node.children.push(new TreeNode(address[0]));
    }

    if (address.length > 1) {
      node.children.forEach(child => generateTree(address.substr(1), child));
    }
  }

  lines.forEach(line => {
    // check for bitmask or memory address line
    if (bitMaskRegex.test(line)) {
      // save the current bitmask, split into character array
      bitmask = line.match(bitMaskRegex)[1];
    } else {
      // parse both the memory address and the value to be written to that address
      const matches = line.match(memoryRegex);
      const address = matches[1];
      let value = parseInt(matches[2])
        .toString(2) // convert the value to binary string
        .padStart(36, '0')
        .split(''); // split into character array

      const root = new TreeNode(0);
      generateTree(bitmask, root);


      // join the char array into a string, convert to decimal, save to memory
      memory[address] = parseInt(value.join(''), 2);
    }
  })

  Object.values(memory).forEach(v => { checksum += v; })
  console.log(`checksum: ${checksum}`);

  return checksum;
}

module.exports = fn;
