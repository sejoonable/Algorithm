function solution(s) {
    let sArr = s.split("")
    if (s.length % 2 == 0){
        let A = [sArr[s.length/2 -1], sArr[s.length/2]];
        return A.join("")
    } else {
        let A = sArr[Math.floor(s.length/2)];
        return A
    }
}