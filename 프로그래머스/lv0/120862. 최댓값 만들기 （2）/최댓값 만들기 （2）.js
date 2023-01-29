function solution(numbers) {
    let a = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
                a.push(numbers[i] * numbers[j])
             
        }       
    }   return Math.max.apply(null,a) 
}
    

    
    
//     두 개를 곱해서 최고.
// 조건 
//     1. 두 개의 부호가 같아야 함.
//     2. 절댓값이 가장 커야함.
    
//     그냥 다 곱해볼까?
//         다 곱해서 +인 것들은 넣고 아닌 건 넣지 말고.
//     거기서 제일 큰 것을 하면 되잖아. 원소의 길이는 100이 최대니까 그렇게 