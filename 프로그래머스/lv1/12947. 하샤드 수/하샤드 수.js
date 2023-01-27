function solution(x) {
    let xEachSum = 0;
    let A = x.toString().split("");
    for (let i = 0; i < A.length; i++) {
        xEachSum += Number(A[i]);
    }
    if (x % xEachSum == 0) {
        return true;
    } else {
        return false;
    }
}

// 하샤드수의 조건: x의 자릿수의 합으로 x가 나누어져야 한다.

// x.toString()