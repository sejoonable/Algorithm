function solution(s) {
    let S = s.split(" ").map((v,i)=>Number(v)).sort((a,b)=>a-b)
    let So = S.shift()
    let Dae = S.pop()
    return `${So} ${Dae}`
}