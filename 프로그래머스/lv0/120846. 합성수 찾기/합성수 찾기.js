function solution(n) {
    let count = 0;
    for(let i = 4; i <= n; i++) {
        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                count += 1;
                break;
            }
        } 
    } return count;
}

// 약수의 개수가 세 개 이상인 수를 합성수
// 1과 자기자신 외에 약수를 가지는 수.

// for