function solution(s){
    if(s[0] === ")") return false
    if(s[s.length-1] === "(") return false
    
    let S = s
    let Stack = [];
    
    for (let i = 0; i < S.length; i++) {
        
        
        if (Stack[Stack.length - 1] === '(' && s[i] === ')') {
            Stack.pop()
        } else {
            Stack.push(s[i])
        }
    } 
    if(Stack.length !== 0) return false
    return true
}
    
    
    
//     if(s.length % 2 !== 0) return false
    
//     for(let i = 0; i < S.length/2 +1; i++) {
//         if(s === "") return true
//         if(s[0] === ")") return false
//         if(s[s.length-1] === "(") return false
    
//         s=s.split("()").join("")
//     }
    
//         return false
// ()를 하나씩 삭제
