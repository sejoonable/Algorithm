function solution(n) {
    let countN1 = 0;
    let countQ1 = 0;

    for (let q = n + 1; ; q++) {
        let N = n.toString(2);
        let Q = q.toString(2);
        
        for (let i = 0; i < (Q.length > N.length ? Q.length : N.length); i++) {
            if (N[i] === '1') countN1 += 1
            if (Q[i] === '1') countQ1 += 1
            
        } 
        if (countN1 === countQ1) return q
        countN1 = 0;
        countQ1 = 0;
        
    }
}