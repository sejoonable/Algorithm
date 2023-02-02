function solution(s) {
    let S = s.split(" ")
    while(S.indexOf("Z") > 0) {
        S.splice(S.indexOf("Z")-1,2)
    }
    return S.reduce((acc,cur)=>acc + +cur , 0)
}