function solution(d, budget) {
    let count = 0;
    let e = d.sort((a,b)=>{return a-b})
    for (let i = 0; i < d.length; i++) {
        if (budget - e[i] >= 0) {
            budget -= e[i]
            count += 1;
        }
    } return count;
}
