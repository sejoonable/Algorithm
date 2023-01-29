const input = +require('fs').readFileSync('/dev/stdin').toString();

let fiveInt = parseInt(input/5)
while (fiveInt >= 0) {
    let threeInt = parseInt((input - fiveInt * 5)/3)
    let namuge = (input - fiveInt * 5)%3
    if (namuge !== 0) {
    fiveInt -= 1;
}   else {
    console.log(fiveInt + threeInt); 
    break;
}}  if(fiveInt < 0) {
    console.log(-1)
}