function solution(score) {
    let scoreBox = [];
    for (let i = 0; i < score.length; i++) {
        scoreBox.push({name : i+1, value : (score[i][0] + score[i][1]) / 2})
    }
    
    let result = scoreBox.sort((a,b)=>(b.value - a.value))
    
    for (let i=1; i <= result.length; i++) {
        result[i-1].key = i
        
        if(i>=2) {
        if(result[i-2].value === result[i-1].value) {
            result[i-1].key = result[i-2].key
        }
        }
        // 중복된 등수를 매기는 조건문
    }
    
    result = scoreBox.sort((a,b)=>(a.name - b.name))
    
    console.log(result)
    return result.map(x => x.key)
    
    
}


// input : 영어점수와 수학점수
// output : 영어점수와 수학점수의 평균을 기준으로 매긴 등수를 담은 배열

// 일단 평균을 구한다. 
// 각 값을 구별한 다음, 평균으로 정렬한다.
// 평균으로 정렬한 다음, 등수를 매긴다.
// 처음의 구별한 값으로 다시 정렬 시킨다.
// 등수로 반환한다.