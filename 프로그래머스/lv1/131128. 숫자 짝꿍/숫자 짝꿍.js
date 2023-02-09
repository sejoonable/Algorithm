function solution(X, Y) {
    let Xsplit = X.split("");
    let Ysplit = Y.split("");
    let result = '';
    
//     Xsplit.sort((a,b)=>b-a)
//     Ysplit.sort((a,b)=>b-a)
    
    for (let i = 0; i <= 9; i++) {
        let X = Xsplit.filter(v => v === String(i)).length 
        let Y = Ysplit.filter(v => v === String(i)).length 
        result += String(i).repeat(Math.min(X, Y))
    }
    
    
    // Y.length까지 i를 돌린다는 것 자체가 문제다. includes와 합쳐져서 아주 난장판이다
//     for (let i = 0; i < Y.length; i++) {
//         if (Xsplit.includes(Ysplit[i])) {
            
//             Xsplit[Xsplit.indexOf(Ysplit[i])] = "a"
//             //이렇게 되면, 짝궁이 아닌 수도 인클루즈되어서 들어간다. 짝궁이 되었으면 Xsplit에서 빼주자.
            
//             result.push(Ysplit[i])
//         }
//     }
        if (result === "") return '-1'
        if (+result === 0) return "0"
    
        // result = result.split("")
        // result.sort((a,b)=>b-a)
        // result = BigInt(result.join("")).toString()
    
        return result.split("").sort((a,b)=>b-a).join("")
}

// input : 두 정수
// output : 짝꿍 : 두 정수에서 겹치는 각각의 숫자들로 만들 수 있는 가장 큰 정수