function solution(a, b) {
    let count = 0;
    for(let i in a) {
        count += a[i]*b[i]
    }
    return count
}