function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200);  // 선분들이 놓일 공간
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}













// function solution(lines) {
//     let count = 0;
//     lines.sort((a,b)=>a[0]-b[0])
    
//     for (let i = 0; i < lines.length-1; i++) {
//         if (lines[i][1] - lines[i+1][0] > 0) {
//             count += lines[i][1] - lines[i+1][0]
//            } 
//             if (lines[i][1] - lines[i+1][1] > 0) {count -= lines[i][1] - lines[i+1][1]}
//             if (lines[i][0] - lines[i+1][0] > 0) {count -= lines[i][0] - lines[i+1][0]}   
//             // 첫째 식은 i+1의 last가 i의 last보다 큰 걸 가정하고 계산한 것이기에 i가 완전히 포함될 떄를 고려해서 뺴줘야 한다.
//             // 첫째 식은 i+1의 first가 i의 first보다 큰 걸 가정하고 계산한 것이기에 i가 완전히 포함될 때를 고려해서 빼줘야 한다.
        
//     } console.log(lines)
    
//     if (lines[0][1] - lines[lines.length-1][0] > 0) {
//         count -= lines[0][1] - lines[lines.length-1][0]       
//     }
//     if (lines[0][1] - lines[lines.length-1][1] > 0) {count -= lines[0][1] - lines[lines.length-1][1]}
//     if (lines[0][0] - lines[lines.length-1][0] > 0) {count -= lines[0][0] - lines[lines.length-1][0]}
//     // 위의 식은 차례로 세 개가 겹치지 않을 경우를 전제하고 계산한 것이기에, 첫째수직선과 셋째 수직선의 겹치는 부분을 빼줘야 한다.
//     //첫째 식은 i+1의 last가 i의 last보다 큰 걸 가정하고 계산한 것이기에 i가 완전히 포함될 떄를 고려해서 뺴줘야 한다.
//      // 첫째 식은 i+1의 first가 i의 first보다 큰 걸 가정하고 계산한 것이기에 i가 완전히 포함될 때를 고려해서 빼줘야 한다.
//     return count
// }



// // input : 세 선분의 시작 끝 좌표가 주어진 2차원 배열.
// // output : 선분이 겹치는 부분의 길이를 모두 더한 값.

// // 겹치는 부분의 길이를 구하면 끝나는 문제.
// // 처음first과 끝last을 이용해야 겠죠.

// // i의 last가 i+1의 first보다 크다면? i last - i+1 first = 양수 ( 겹친다.) 
// //이런식으로 구했을때, 중복해서 길이를 더하는 경우가 생긴다.
// // 중복한다는 걸 인식하는 것이 첫번재 단계이다.
// //첫 번째와 세번째가 겹치는 게 문제이므로, lines[0][1] - lines[lines.length-1][0] >0

// // 작다면? i last - i+1 first = 음수 ( 겹치지않는다.) 


