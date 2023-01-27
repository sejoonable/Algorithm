let A;
function solution(strings, n) {
    for (let i = 0; i < strings.length; i++) {
        let nn = strings[i][n];
        strings[i] = (nn+strings[i]);
        
    } 
    A = strings.sort();
    A = A.map(x => x.substr(1));
    return A;
}
// strings 반복문 돌려서 n번째 글자 빼온다 
// -> 빼온 i번째word에 n번째 글자를 i번째word의 앞에다가 붙이고 다시 정의한다. [ 재정의?]
// -> 정의한 것들을 배열하고 정의한다. A 
// -> A 각각의 앞 글자를 뗀다. B로 정의
// -> 출력

// # x의 0번째 없애고 다시 합치기.