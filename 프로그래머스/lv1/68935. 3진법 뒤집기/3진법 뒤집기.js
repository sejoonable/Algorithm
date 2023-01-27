function solution(n) {
    let A = n.toString(3).split("").reverse().join("")
    return parseInt(A, 3)
}

// n을 3진법으로 표현
// -> reverse()
// -> 이것을 10진법으로 표현해서 리턴