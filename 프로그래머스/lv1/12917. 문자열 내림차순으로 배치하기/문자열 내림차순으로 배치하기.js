function solution(s) {
    let A = s.split("").sort().reverse().join("");
    return A;
}

// 배열로 다 나눠서 
// sort쓰면 배열이 되어야 되는데,,,
// join은 다시 문자열로 합치는 거고.