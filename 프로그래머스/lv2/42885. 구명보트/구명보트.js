function solution(people, limit) {
    people.sort((a,b) => b - a)
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < people.length; i++) {
        if(stack[stack.length-1] + people[i] <= limit) {
            count += 1
            stack.pop()
        } else {
            stack.push(people[i])
        }
    } count += stack.length
    return count
}




//     people.sort((a,b)=>b-a)
//     let count = 0;
    
//     for (let i = 0; i < people.length; i++) {
//         for (let j = i+1; j < people.length; j++) {
//             if (people[i] + people[j] <= limit) {
//                 count += 1
//                 delete people[i]
//                 delete people[j]
//                 break;
//             }
//         } 
//         if (typeof people[i] === "number") {
//             count += 1
//             delete people[i]
//         }
//     }
//     return count
// }