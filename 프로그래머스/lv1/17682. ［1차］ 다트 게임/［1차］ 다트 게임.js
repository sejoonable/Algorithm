function solution(dartResult) {
    let Dot = dartResult.split("")
    let Dap = [];
    let answer = 0;
    
    for(let i = 0; i < Dot.length; i++) {
    if (Dot[i] < 10 && i !== 0) {
        Dap.push(answer)
        answer = 0;
    }
    
        
    if (Dot[i] === '1' && Dot[i+1] === "0") {
        answer += 10
        Dot.splice([i+1],1)
    } else if (Dot[i] < 10) {
        answer += +Dot[i]
    }
    
    if (Dot[i] === 'S') {answer **= 1}
    
    if (Dot[i] === 'D') {answer **= 2}
    
    if (Dot[i] === 'T') {answer **= 3}
    
    if (Dot[i] === '*') {
        answer *= 2
        Dap[Dap.length-1] *= 2
        //바로 전 거에 *2해준다.
    }
    
    if (Dot[i] === '#') {answer *= (-1)}
    }//for문이 끝나고 나머지를 못넣어줬으니.
    Dap.push(answer)
    return Dap.reduce((sum,cur)=>sum + cur, 0)
}
//     3번
//     0~10점
//     점수with S D T 1제곱 2제곱 3제곱
//      S == **1, D == **2, T == **3
    
//     옵션 * # 해당점수와바로전에얻는점수를각2배로만듬. 해당점수마이너스
//      * == *2, # == *-1
//     * 처음에도 나올 수 있음. 해당점수에만 적용
     
//     * 중첩가능
    
//     * # 중첩되면 2배 마이너스
//     S D T 각 점수마다 하나씩 존재
//     * # 점수마다 둘 중 하나만 존재, 존재하지 않을 수도 있음.

// split("")으로 나눈다.
// 각각을 다 변환해서 조건문을 만든다.

// 첫번째'*' 3번째에 있음.




