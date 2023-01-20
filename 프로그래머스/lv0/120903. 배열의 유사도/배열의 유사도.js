let C = [];
let B = [];
function solution(s1, s2) {
    let A = s1.concat(s2)
    for(let i = 0; i < A.length; i++) {
        if (!B.includes(A[i])) {
                B.push(A[i])
            } else {
                C.push(A[i])
            }
}
    return C.length;
}


// 원소를 분해해서 같은 것들을 묶는다. 분해는 ... 똑같은 요소들의 개수를 구하는거니까 
// 2개 있으면 그 원소를 가져오자
//똑같은 요소를 어떻게 인식할 것인가. 특정 원소의 2개라는 개수를 어떻게 인식할 것인가. 삭제해서 반환하는 메서드.
// set전 - set후