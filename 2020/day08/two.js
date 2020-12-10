const fs = require('fs');
const rfdc = require('rfdc')();

const filename = process.argv[2]

if (filename) {
  const stream = fs.createReadStream(__dirname + `/${filename}`);
  stream.setEncoding('utf8');
  stream.on("data", fn);
}

function fn(input) {
  const instructions = input.split('\n');
  let state = {
    cursorPosition: 0,
    accumulator: 0,
    visitedAddresses: [],
    validProgramFound: false
  }

  // for each line in program, check if instruction is nop or jmp
  while (!state.validProgramFound
      && !state.visitedAddresses.includes(state.cursorPosition)
      && state.cursorPosition < instructions.length
  ) {
    const [op, num] = instructions[state.cursorPosition].split(' ');

    if (op !== 'acc') {
      const newState = testCandidate(state);

      if (newState.validProgramFound) {
        console.log("final state:", state, "new state", newState);
        return newState.accumulator;
      }
    }
    state.visitedAddresses.push(state.cursorPosition);

    if (op === 'acc') {
      state.accumulator += parseInt(num);
      state.cursorPosition++;
    }

    // if yes, save current state and flip instruction
    if (op === 'nop') state.cursorPosition++;
    if (op === 'jmp') state.cursorPosition += parseInt(num);
  }

  // attempt to execute to end of program, by checking if it hits one beyond last line
  // if infinite loop locates, restore state and try next instruction

  function testCandidate(givenState, testing) {
    const alteredState = rfdc(givenState);
    let swap = true;

    while (!alteredState.validProgramFound
        && !alteredState.visitedAddresses.includes(alteredState.cursorPosition)
    ) {
      let [op, num] = instructions[alteredState.cursorPosition].split(' ');
      alteredState.visitedAddresses.push(alteredState.cursorPosition);

      if (swap && op !== 'acc') {
        if (op === 'nop') {
          op = 'jmp';
          if (parseInt(num) === 0) {
            return alteredState; // a jmp +0 is an infinite loop
          }
        } else if (op === 'jmp') {
          op = 'nop';
        }
        swap = false;
      }

      if (op === 'acc') {
        alteredState.accumulator += parseInt(num);
        alteredState.cursorPosition++;
      }
      if (op === 'nop') alteredState.cursorPosition++;
      if (op === 'jmp') alteredState.cursorPosition += parseInt(num);

      if (alteredState.cursorPosition === instructions.length) {
        return {
          ...alteredState,
          validProgramFound: true
        };
      } else if (alteredState.cursorPosition > instructions.length) {
        return alteredState;
      }
    }

    return alteredState;
  }
}

module.exports = fn;
