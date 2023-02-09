function solution(number, limit, power) {
    let mini = 1;
    let result = []
    
    for(let i = 1; i <= number; i++) {
        for(let j = 1; j <= i/2; j++) {
           if(i % j === 0) {
               mini += 1
           }
        } 
        result.push(mini)
        mini = 1
    } 
    return result.map(n => n > limit ? power : n).reduce((sum, cur)=> sum + cur, 0)
}

// 기사 번호의 약수 개수에 해당하는 공격력의 무기
// 공격력의 제한수치를 정했고, 제한수치를 넘긴 무기를 구매해야 되는 경우에는 일정한 공격력의 무기를 구매해야 한다.
// 무기 공격력 1당 1kg철이 필요하다.

// input : number기사단원수 limit공격력제한수치 power제한수치넘었을때사용할공격력
// output : 무기를 모두 만들기 위해 필요한 철의 무게.
