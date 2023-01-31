function solution(n) {
    let a = [];
    for (let i = 2; i <= n; i++) {
        if (n === 1) break;
        if (n % i === 0) {
            a.push(i)
            n = n/i;
            i--
        }  
    } 
    let A = [...new Set(a)]
    return A
}



// 나눠지는 수가 있네? n이 나눠지니까 나눠진 수로 n을 교체한다.
// 그리고 다시 한 번 i로 나눠본다. 안 나눠지면 continue
