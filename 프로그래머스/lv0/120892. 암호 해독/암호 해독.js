function solution(cipher, code) {
    let sum = "";
    let monster = cipher.split("");
    for(let i = 1; i <= monster.length/code; i++) {
        sum += monster[code * i - 1]
    }
    return sum;
}


// cipher.length() % code == 0 
// cipher 
// code의 배수번째 글자만 진짜다

// 해독암호를 리턴하라.