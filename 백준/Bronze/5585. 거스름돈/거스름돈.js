const input = +require('fs').readFileSync('/dev/stdin').toString();

let Don = 1000 - input;
let count = 0;
let coint_types = [500, 100, 50, 10, 5, 1]

for (coin of coint_types) {
    count += parseInt(Don/coin);
    Don %= coin
}

console.log(count)