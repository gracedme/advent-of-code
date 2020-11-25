const fs = require('fs');

const stream = fs.createReadStream(`input.txt`);
stream.setEncoding('utf8');
stream.on("data", fn);

function fn(input) {
    const lines = input.split('\n');
    const vowels = "aeiou".split('');

    const excludesBlacklist = str =>
        !(str.includes("ab") || str.includes("cd")
            || str.includes("pq") || str.includes("xy"));


    const excludesDoubles = str => {
        // get all unique chars from str
        // that occur more than once
        let chars = new Set(str);
        let totals = {};

        const something = chars.forEach(ch => {

        })
        // search for duplicates



        return true;
    }

    const atLeastThreeVowels = str => {

        return true;
    }

    let totalNice = 0;
    lines.forEach(line => {
        if (excludesBlacklist(line)
            && excludesDoubles(line)
            && atLeastThreeVowels(line)
        ) {
            totalNice++;
        }
    })

    console.log(totalNice);
    return totalNice;
}

module.exports = fn;