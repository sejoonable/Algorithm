const input = +require('fs').readFileSync('/dev/stdin').toString();

let Don = 0;

Don += parseInt((1000 - input)/500) 

if ((1000 - input)%500 !== 0) {
    Don += parseInt((1000 - input)%500 / 100)
} 
if ((1000 - input)%500 % 100 !== 0) {
    Don += parseInt((1000 - input)%500 % 100 /50)
}
if ((1000 - input)%500 % 100 % 50 !== 0) {
    Don += parseInt((1000 - input)%500 % 100 % 50 /10)
}
if ((1000 - input)%500 % 100 % 50 % 10 !== 0) {
    Don += parseInt((1000 - input)%500 % 100 % 50 % 10 / 5)
}
if ((1000 - input)%500 % 100 % 50 % 10 % 5 !== 0) {
    Don += parseInt((1000 - input)%500 % 100 % 50 % 10 % 5 / 1)
}
console.log(Don)