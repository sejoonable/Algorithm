function solution(n) {
    let a = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            a.push(i)
        }
    } return a.sort((a,b) => {return a-b})
}
