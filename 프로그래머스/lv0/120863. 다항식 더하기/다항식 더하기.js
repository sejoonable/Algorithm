function solution(polynomial) {
    let polysplit = polynomial.split(" + ")
    let x = [];
    let sangsoo = [];
    
    for (let i in polysplit) {
        if(polysplit[i].includes("x")) {
            x.push(polysplit[i])
        } else {
            sangsoo.push(polysplit[i])
        }
    } 
    
    let sangsoohap = sangsoo.reduce((sum,cur) => sum + +cur,0)
    
    let xsplit = [];
    for (let i in x) {
        xsplit.push(x[i].split("x")[0])
    }
    
    
    for (let i in xsplit) {
        if (xsplit[i] === "") {
            xsplit[i] = xsplit[i].replace("",1)
        } 
    } console.log(xsplit)
    let xsum = xsplit.reduce((sum,cur)=> sum + +cur, 0)
    if( xsum === 1 ) {
        if( sangsoohap > 0 ) {
            return `x + ${sangsoohap}`
        } else {
            return `x`
        }
    } else if( xsum > 0 && sangsoohap > 0 ) {
        return `${xsum}x + ${sangsoohap}`
    } else if ( xsum > 0 && sangsoohap === 0 ) {
        return `${xsum}x`
    } else if ( xsum === 0 && sangsoohap > 0 ) {
        return `${sangsoohap}`
    } else {
        return ""
    }
}

// x의 계수가 0 초과이고 상수항도 0 초과이면, 당연히 상수항을 가진 일차식
// x가 0 초과이고 상수항이 0이면, 상수항이 없는 일차식
// x가 0이고 상수항이 0 초과라면, 상수항만