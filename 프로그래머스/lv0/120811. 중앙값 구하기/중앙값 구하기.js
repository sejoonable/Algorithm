function solution(array) {
    let A = array.sort(function(a,b) {return a - b;});
    return A[parseInt(A.length/2)];
}