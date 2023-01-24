function solution(age) {
    let a = String(age).split("");
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '0') {
        a[i] = 'a'
    } else if (a[i] === '1') {
        a[i] = 'b'
    } else if (a[i] === '2') {
        a[i] = 'c'
    } else if (a[i] === '3') {
        a[i] = 'd'
    } else if (a[i] === '4') {
        a[i] = 'e'
    } else if (a[i] === '5') {
        a[i] = 'f'
    } else if (a[i] === '6') {
        a[i] = 'g'
    } else if (a[i] === '7') {
        a[i] = 'h'
    } else if (a[i] === '8') {
        a[i] = 'i'
    } else if (a[i] === '9') {
        a[i] = 'j'
    }
    } return a.join("");
}
              

