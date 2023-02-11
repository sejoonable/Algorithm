function solution(A,B){
    A.sort((a,b) => a - b)
    B.sort((a,b) => b - a)
    let c = 0;
    for (let i = 0; i < A.length; i++) {
        c += A[i] * B[i]
    } return c
}