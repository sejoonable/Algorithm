function solution(emergency) {
    let a = [] ;
    let emergencyKey = [];
    let emergencyCopy = Object.assign([],emergency);
    
    emergencyCopy.sort((a,b) => b-a)
    for(let i = 0; i < emergencyCopy.length; i++) {
        emergencyKey.push({name:i+1, value:emergencyCopy[i]})
    }
    emergencyKey.sort((a,b) => {return (b.value - a.value)})
    
    
    //emergencyKey의 키값으로 emergency의 값들을 변환해준다.
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < emergency.length; j++) {
            if (emergencyKey[j]['value'] === emergency[i]) {
                a.push(emergencyKey[j]['name'])
        }
    }
}  return a
}

// 응급도에 따라서 바꾸는 거잖아?
    
//     먼저 정렬을 하고. 거기에 1부터 번호를 매긴다. !!! -> 그럼 그 전의 순서를 기억하지 못해.
// 다시 그 정렬로 돌아가야 하는데...
// 그럼 먼저 구별을 해놨으니까. 
// 결국 가장 큰 수가 1로 바뀌는 것이니까. 
// 일단 각 값들에 키값을 붙인다.
// 굳이?? 

//     간단하게 생각해.
//     큰 순서대로 값을 붙여주면 되는 것이지.
    
//     emergency에 키값등르 붙여줘
//     내림차순으로 배열해
//     값값값 값의크기의순서
    
//     정렬해서 키값을 붙여주고
//     리플레이스를 하면 되겠네.
// if (emergencyKey[j]["value"].indexOf(emergency[i])) {
    
// }
// emergency[i] => 일치하는 밸류가 있다면 그 키의 이름으로 변환한다. emergencyKey[key]
// emergency로 돌아가서. emergency값을 emergencyKey의 이름으로 바꾸는 것이다.