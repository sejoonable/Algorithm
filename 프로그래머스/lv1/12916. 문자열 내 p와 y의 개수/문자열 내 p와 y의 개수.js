function solution(s){
    let pCount = 0;
    let sCount = 0;
    let S = s.split("")
    
    S.forEach((v)=>{
        if(v === 'p' || v === 'P') {
            pCount += 1 
        } else if(v === 'y' || v === 'Y') {
            sCount += 1
        }
    })
    if(pCount === sCount) {
        return true
    } else {
        return false
    }
}