function solution(arr, divisor) {
    let A = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
        A.push(arr[i]);
    }   
} if (A.length === 0) {
        return [-1];
} else { return A.sort((a,b) => (a-b)) }
}

