function solution(n) {
    let A = n.toString().split("")
    let B = A.reverse()
    let C = B.map((x) => (parseInt(x)))
    return C;
}

