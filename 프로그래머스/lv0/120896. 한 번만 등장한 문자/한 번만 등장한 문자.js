function solution(s) {
    let S = s.split("").sort()
    let Joong = [];
    let noJoong = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== S[i+1] && S[i] !== S[i-1]) {
            noJoong.push(S[i])
        }
    } return noJoong.join("")
}

// 앞뒤로 비교해서 다르면 넣는다. 뒤만 비교하면 됨.

