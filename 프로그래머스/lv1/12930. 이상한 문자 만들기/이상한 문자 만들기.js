function solution(s) {
    let A = s.split(" ");
    let B = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
          if (j % 2 === 0) {
            B.push(A[i][j].toUpperCase());
        } else if (j % 2 !== 0) {
            B.push(A[i][j].toLowerCase());
        } 
        } if (i < A.length - 1) {
            B.push(" "); }
    }
    return B.join("");
}

// S를 ""기준으로 나눈다 
// 각각의 것들에서 중복 for문을 사용해 만든다.
// A[i] 번째 것에서 또 i를 돌리면 되겠지...
// A[i] 하나씩 따로. 

// 띄어쓰기 만드는 법
// A[i]와 i를 이용하자. 

