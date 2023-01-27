function solution(n) {
    if (n % 2 == 0) {
        let count = ''
        count += '수박'.repeat(parseInt(n/2))
    return count;
} else if (n % 2 != 0) {
    let count = '수'
    count +=  '박수'.repeat(parseInt(n/2))
    return count;
}
}
