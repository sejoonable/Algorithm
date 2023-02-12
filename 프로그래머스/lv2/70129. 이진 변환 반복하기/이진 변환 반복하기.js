function solution(s) {
    let S = s;
    let count0 = 0;
    let counter = 0;
    let result = [];
    
    while (S !== '1') {
        for(let i = 0; i < S.length; i++) {
            if( S[i] === '0' ) count0++
        }
        
        S = S.split(0).join("")
        
        S = S.length.toString(2)
        
        counter += 1
    }
    result.push(counter)
    result.push(count0)
    return result
    
}