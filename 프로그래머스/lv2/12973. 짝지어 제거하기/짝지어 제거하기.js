function solution(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        
        if (stack[stack.length -1] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    } 
    if (stack.length > 0) {
        return 0
    } else {
        return 1
    }
}   
    
//     for (let i = 97; i <= 122; i++) {
        
//         let S = s
        
//         s = s.split(String.fromCharCode(i)+String.fromCharCode(i)).join("")
        
//         if (S.length !== s.length) {
//             i = 96
//         }
//         } 
    
    
    
//     if (s.length > 0) {
//         return 0
//     } else {
//         return 1
//     }
// }
    
// 아스키 코드로 반복문을 최대한 줄인다.




//     s = s.split("")
//     for (let i = 0; i < s.length -1; i++) {
        
//         if (s[i] === s[i+1]) {
//             s.splice(i,2)
//             i = -1;
//         }
//     } 
//     if (s.length === 0) {
//         return 1
//     } else {
//         return 0
//     }
// }

