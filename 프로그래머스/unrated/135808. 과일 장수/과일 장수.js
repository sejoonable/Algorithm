function solution(k, m, score) {
    score.sort((a,b)=> b-a)
    let Money = 0;
    
    let box = []
    
    for (let i = 1; ; i++) {
        if (m*i-1 > score.length-1) break;
        
        Money += score[m*i-1]
    }
    
    
    
    return Money * m
}



// 1 ~ k 점
// 한 상자에 m개씩
// 사과 중에 가장 낮은 점수가 p이면 한 상자 가격은 p * m
// input : 최대점수k 한상자에담기는사과수m 사과들의점수배열score
// output : 최대 이익. (상자단위로만, 남은 사과 버림.) (p0 * m) + (p1 * m) + .... 총parseInt(score.length/m)개


// 내림차순으로 배열한다.
// 가장 낮은 점수의 사과가 그 상자의 가격을 결정하므로, 내림차순으로 해서 앞에부터 담는 것이 최선이다.