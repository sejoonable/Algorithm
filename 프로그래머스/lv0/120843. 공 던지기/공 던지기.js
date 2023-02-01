function solution(numbers, k) {
    let A = 1
    for (let i = 0; i < k-1; i++) {
        if (numbers.indexOf(A + 2) === -1) {
            A = (A + 2) % numbers.length
        } else {
            A = A + 2  
        }
    } return A
}



