const fs = require('fs');

const stream = fs.createReadStream(__dirname + `/input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const lines = input.split('\n');

    const excludesBlacklist = str =>
        !(str.includes("ab") || str.includes("cd")
            || str.includes("pq") || str.includes("xy"));

    const includesDoubles = str =>
        str.split('')
            .filter((ch, ix) => ch === str[ix + 1])
            .length > 0;

    const atLeastThreeVowels = str =>
        str.split('')
            .filter(ch => ['a', 'e', 'i', 'o', 'u'].includes(ch))
            .length >= 3;

    let totalNice = 0;
    lines.forEach(line => {
        if (excludesBlacklist(line)
            && includesDoubles(line)
            && atLeastThreeVowels(line)
        ) {
            totalNice++;
        }
    })

    console.log(totalNice);
    return totalNice;
}

module.exports = fn;