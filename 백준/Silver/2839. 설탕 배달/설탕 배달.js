const input = +require('fs').readFileSync('/dev/stdin').toString();

let N = input

let Five = parseInt(N / 5)
let Three = parseInt(N / 3)
while (Five > -1) {
N = input
N -= Five*5
if (N === 0) {
    console.log(Five) 
    break;
}

Three = parseInt(N / 3)
N -= Three*3
if (N === 0) {
    console.log(Five+Three) 
    break;
}

Five--
}
if (N > 0) {console.log(-1)}