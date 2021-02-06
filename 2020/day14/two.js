const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function Node(data) {
  this.data = data;
  this.children = [];

  this.addChild = (node) => {
    this.children[this.children.length] = node;
  }

  this.getChildren = () => this.children;
}

function generateTree(mask, node) {
  // console.log(mask, node);
  if (mask.length > 0) {
    if (mask[0] === 'X') {
      // branch X into two nodes
      node.addChild(new Node(0));
      node.addChild(new Node(1));
    } else {
      // no branching
      node.addChild(new Node(mask[0]));
    }

    node.getChildren().forEach(child => generateTree(mask.substr(1), child));
  }
}

function getAddresses(node, address = '') {
    address += node.data;
    const addresses = [];

    if (node.children.length === 0) {
      addresses.push(address);
    } else {
      node.getChildren().forEach(child => addresses.push(...getAddresses(child, address)))
    }

    return addresses;
}

function fn(input) {
  const lines = input.split('\n');
  let checksum = 0;

  let bitmask = ``;
  let memory = {};
  const bitMaskRegex = /mask = ([01X]+)/;
  const memoryRegex = /mem\[(\d+)\] = (\d+)/;

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

      const root = new Node(bitmask[0]);
      generateTree(bitmask.substr(1), root);

      const adds = getAddresses(root);
      console.log(adds);
    }
  })

  console.log(`checksum: ${checksum}`);

  return checksum;
}

module.exports = fn;
