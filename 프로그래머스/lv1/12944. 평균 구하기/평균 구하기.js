function solution(arr) {
    let arrSum = arr.reduce((sum,cur)=>sum+=cur,0);
    return arrSum/arr.length
}