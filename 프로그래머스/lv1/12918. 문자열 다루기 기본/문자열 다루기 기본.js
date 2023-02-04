function solution(s) {
    let S = s.split("")
    let count = 0;
    
    if (S.length !== 4 && S.length !== 6) return false
    
    S.forEach((v) => {if(isNaN(v)) count+=1})
    
    if(count > 0) return false
    return true
}