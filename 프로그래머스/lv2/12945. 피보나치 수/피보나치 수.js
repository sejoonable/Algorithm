function solution(n) {
    let F = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        F.push((F[i-2] + F[i-1]) % 1234567)        
    } 
    return F[n]
}