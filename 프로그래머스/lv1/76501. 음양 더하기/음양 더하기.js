function solution(absolutes, signs) {
    let a = [];
    for (let i = 0 ; i < signs.length; i++) {
        if (signs[i] === true) {
            a.push(+absolutes[i])
        } else {
            a.push(-absolutes[i])
        }
    } return a.reduce((sum,cur)=>sum+=cur,0)
}

