function solution(quiz) {
    
    let result = [];
    for(let i=0; i < quiz.length; i++) {
        let A = quiz[i].split(" ")
        
        if(A[1] === "+") {
            if (+A[0] + +A[2] === +A[4]) {
                result.push("O")
            } else {
                result.push("X")
            }
        }
        
        if(A[1] === "-") {
            if (+A[0] - +A[2] === +A[4]) {
                result.push("O")
            } else {
                result.push("X")
            }
        }
    }
    return result;
}
// 주어진 조건을 최대한 활용할 것. 범용성을 생각하다간 아무것도 못한다.


// 그럼 일단 연산을 가능하게 만들어야 한다.
// 연산을 가능하게 만들기 위해선 문자열 형태가 아니게 만들어야 한다.
// 일단 배열에서 하나씩 뽑는다.
// 뽑은 문자열을 

// input : 숫자와 연산자가 문자열 형태로 원소로 있는 배열
// output : 각 원소들의 배열이 옳다면 O를, 틀리면 X를 출력하여 순서대로 배열 형태로 리턴.