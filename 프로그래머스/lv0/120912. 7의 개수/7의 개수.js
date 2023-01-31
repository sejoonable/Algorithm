function solution(array) {
    let count = 0;
    let A = array.join("").split("")
    for (let i = 0; i < A.length; i++) {
        if (A[i] === '7') {
            count +=1
        }
    } return count
}
