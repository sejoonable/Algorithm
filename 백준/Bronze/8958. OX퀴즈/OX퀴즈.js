const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let inputSplit = input;
let OnlyO = [];
let answer = 0;

for (let k = 1; k <= inputSplit[0]; k++) {
    let Xsplit = inputSplit[k].split("X")
    let Xfilter = Xsplit.filter((v)=>v) 
    OnlyO.push(Xfilter)
}

for (let i = 0; i < OnlyO.length; i++) {
    for (let j = 0; j < OnlyO[i].length; j++) {
        answer += OnlyO[i][j].length * (OnlyO[i][j].length + 1) / 2
    } console.log(answer)
    answer = 0;
}