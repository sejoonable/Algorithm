function solution(n) {
    if (Number.isInteger(Math.sqrt(n))) {
        return ((Math.sqrt(n))+1) ** 2
    } else {
        return -1
    }
}


// n가 양의 정수 x의 제곱이면 return x+1의 제곱
// n이 양의 정수 x의 제곱이 아니면 return -1