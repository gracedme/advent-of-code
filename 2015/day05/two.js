const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const lines = input.split('\n');

    const letterPairAtLeastTwiceWithoutOverlap = str => {
        let found = false;
        for (let ix = 0; ix < str.length - 3; ix++) {
            if (str.substring(2 + ix).includes(str.substring(ix, 2 + ix))) {
                found = true;
            }
        }

        return found;
    }

    const letterRepeatedWithOneLetterBetween = str =>
        str.split('')
            .filter((ch, ix) => ch === str[ix + 2])
            .length > 0;

    let totalNice = 0;
    lines.forEach(line => {
        if (letterPairAtLeastTwiceWithoutOverlap(line)
            && letterRepeatedWithOneLetterBetween(line)
        ) {
            totalNice++;
        }
    })

    console.log(totalNice);
    return totalNice;
}

module.exports = fn;