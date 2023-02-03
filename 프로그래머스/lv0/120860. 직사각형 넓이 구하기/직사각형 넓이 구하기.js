function solution(dots) {
    let dots0 =[];
    let dots1 =[];
    
    for (let i = 0; i < dots.length; i++) {
        dots0.push(dots[i][0])
        dots1.push(dots[i][1])
    }
    
    let dots0Set = [...new Set(dots0)] 
    let dots1Set = [...new Set(dots1)] 
    
    
    let garo = Math.abs(dots0Set[1]-dots0Set[0])
    let sero = Math.abs(dots1Set[1]-dots1Set[0])  
    
    let result = garo * sero
    
    return result
}

