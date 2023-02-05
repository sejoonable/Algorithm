function solution(babbling) {
    let a = ["aya", "ye", "woo", "ma" ]
    let count = 0;
    
    
    for (let i in babbling) {
        for (let j in a) {
            if (babbling[i].includes(a[j])) {
                babbling[i] = babbling[i].replace(a[j], "X") 
                }
        }
    
    
    babbling[i] = babbling[i].replace(/X/gi,"")
    if (babbling[i].length === 0) count++
    }
    return count
}


// output : babbling의 각 문자열이 배열 a의 값만으로만!! 이루어진 경우의 수.

// babbling의 문자열 각각에서 a 문자열 각각을 찾는다.
// 찾으면 카운트한다. 근데 어떻게 찾을까?
// split join으로 하면 문자열이 합쳐지면서, 원래는 안되는 발음이 생긴다.
// 삭제가 아니라, 그 자리에 다른 걸 채워주면 되지 않을까?
//!!!!!!!!!!! 여기서 replace를 사용한다!!!!