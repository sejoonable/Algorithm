const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let size = (Number(input[0]));
    let count = "" ;
    for (let i = 1; i <= size; i++) {
        count += ("*".repeat(i) + "\n");
    } console.log(count);
});

