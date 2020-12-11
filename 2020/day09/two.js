const fs = require('fs');

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input, sum) {
  const lines = input.split('\n');
  let result = 0;

  console.log("sum to find:", sum);

  // given a potential first index, find the last index of the sum
  const testConsecutiveSum = ix => {
    let testSum = 0;
    for (let lx = ix; lx < lines.length; lx++) {
      testSum += parseInt(lines[lx]);
      if (testSum > sum) return false;
      if (testSum === sum) return lx;
    }
  };

  // for every possible first index, find the consecutive number array that sums to the target sum
  const getConsecutive = () => {
    let consecutiveSum = [];
    for (let firstIx = 0; firstIx < lines.length; firstIx++) {
      const lastIx = testConsecutiveSum(firstIx);
      if (lastIx) {
        consecutiveSum = lines.slice(firstIx, lastIx + 1).map(i => parseInt(i)).sort();
        break;
      }
    }
    return consecutiveSum;
  }

  const consecutiveArray = getConsecutive();
  console.log(consecutiveArray);
  result = consecutiveArray[0] + consecutiveArray.pop(); // add the highest and lowest consecutive numbers
  console.log(result);
  return result;
}

module.exports = fn;
