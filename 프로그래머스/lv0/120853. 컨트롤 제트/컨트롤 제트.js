function solution(s) {
    let S = s.split(" ")
    while(S.indexOf("Z") > 0) {
        S.splice(S.indexOf("Z")-1,2)
    }
    return S.reduce((acc,cur)=>acc + +cur , 0)
}

// 만약 Z가 있으면 바로 앞의 값과 함께 사라진다. 
// 배열로 만들고
// i+1번째에 Z가 있으면 i를 사라지게 한다.
