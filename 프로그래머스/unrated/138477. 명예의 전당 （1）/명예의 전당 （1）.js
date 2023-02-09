function solution(k, score) {
    let mini = [];
    let result = [];

    
    
    for(let i = 0; i < score.length; i++) {
        mini.push(score[i])
        mini.sort((a,b) => b-a)
        
        if(i < k-1) {
            result.push(mini[i]) 
            continue
        }
        
        mini.length = k
        
        result.push(mini[k-1])
    } return result
}

// input : k(명예의 전당 최대 개수), score
// output: 매일 발표되는 최하위 점수를 담은 배열(명예의 전당 내에서의 최하위 점수)