function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}
    
    //문제를 간단하게 볼 필요가 있다. 
//?? 정렬하게되면 중복들은 어떻게 되는 건가 정렬하게되면 completion에도 중복값이 있어야 완주했다는 의미가 되므로, 이는 성립한다. 

    
    
//     let nocompletion = [];
//     for(let i = 0; i < participant.length; i++) {
//         if (!completion.includes(participant[i])) {
//             nocompletion.push(participant[i])
//         }
//     }
//         // const set = new Set(participant);
//         // let setparticipant = Array.from(set);
//         for(let i = 1; i <= participant[0].length; i++) {
//         if (participant[0].length > 2) {
//             const set = new Set(participant[0]);
//             let setparticipantindex0 = Array.from(set);
//             nocompletion.push(participant[0]);
//         }
//         }
//         //중복이 있다면,,,, 인덱스0에서 첫번째를 일단 제외하고, 나머지것에서 중복을 제거해. 그리고 넣자.
            
//         // if (participant.indexOf(participant[i]) === 0) {
//         //     nocompletion.push(participant[i])
//     return nocompletion.join('');
//     }     
    


// 1. 단 한 명만 완주 못함.
// 2. participant : 참여 선수 이름 배열
// 3. completion : 완주 선수 이름 배열
// 4. nocompletion : 완주 못한 선수 이름 배열
// 5. participant.length - 1 = completion.length 
// 6. 알파벳 소문자로만 이루어진 이름들.
// 7. 동명이인 OK. participant의 중복값을 반환하여, nocompletion에 push한다.
// 중복값을 반환하기 위해서는,,

// for문으로 돌리자.
// 만약 participant에는 있는데 completion에 없다면 그 선수를 배열에 nocompletion 넣어서 반환하면 될 것.
