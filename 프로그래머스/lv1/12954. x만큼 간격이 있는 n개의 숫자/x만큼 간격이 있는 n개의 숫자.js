function solution(x, n) {
    let a = x;
    let answer = [x];
    for (let i = 2; i<=n; i++) {
        a += x
        answer.push(a)
    } return answer
        
}