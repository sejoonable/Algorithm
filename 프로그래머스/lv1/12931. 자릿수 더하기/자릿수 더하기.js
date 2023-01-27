function solution(n) {
    let A = 0;
    let B = n.toString();
    for (let i = 0; i < B.length; i++) {
        A += parseInt(B[i]);
    }
    return A ;
}

