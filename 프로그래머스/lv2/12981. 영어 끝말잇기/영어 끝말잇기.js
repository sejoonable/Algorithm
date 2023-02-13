function solution(n, words) {
    let stack = [words[0][0]]
    let man;
    let banbok;
    
    for (let i = 0; i < words.length; i++) {
        console.log(stack[stack.length-1][stack[stack.length-1].length -1])
        if((!stack.includes(words[i])) && (stack[stack.length-1][stack[stack.length-1].length -1] === words[i][0])) {
            stack.push(words[i])
        } else {
            if ( (i+1)%n !== 0 ) {
                man = (i+1)%n
            } else {
                man = n
            }
            
            if ((i+1) % n !== 0 ) {
                banbok = parseInt((i+1)/n) + 1
            } else {
                banbok = parseInt((i+1)/n)
            }
            
            return [man, banbok]
        }
    } 
    console.log(stack)
    return [0,0]
}

// input 워드
// output 탈락하는사람번호와 그차례 를 배열로


// 1. 틀린 경우.
// 2. 같은 단어가 나온 경우.