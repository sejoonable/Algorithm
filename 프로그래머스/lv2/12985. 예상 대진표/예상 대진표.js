function solution(n,a,b) {
    let count = 0;
    
    let A = a;
    let B = b;
    if(a > b) {
        a = B
        b = A
    } 
    
    while(n > 1) {
        count++
        if(b-a === 1 && a % 2 === 1 && b % 2 === 0) return count;
        
        if(a % 2 === 0) {
            a = a/2
        } else {
            a = (a+1)/2
        }
        
        if(b % 2 === 0) {
            b = b/2
        } else {
            b = (b+1)/2
        }
        n /= 2
    } return count;
}

// A와 B

// 12 34 56 78