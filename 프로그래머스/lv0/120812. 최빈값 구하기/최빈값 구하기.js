function solution(array) {
    let count1 = 0;
    let count2 = 0;
    let count1Moa = [];
    let Dap = ''
    array.sort((a,b)=>{return a-b})
    
    if (array.length === 1) {
        return array[0]
    }
    for (let i = 0; i<array.length; i++) {
        if(array[i] == array[i+1]) {
            count1 += 1
        } else {
            if (count1 > count2) {
                count2 = count1
                Dap = array[i]
            } else if (count1 === count2) {
                count1Moa.push(count1)
            }
            count1 = 0;
        }
    } 
    if (count1Moa.includes(count2)) return -1 ;
    return (Dap)
}


// 0부터 array.length-1전까지 반복문을 돌린다... i번째와 i+1번째가 같으면 카운트를 하나 올린다. -> 값으 구별이 안된다.
// -> 카운트 2를 만든다. 카운트 2에는 가장 큰값을 저장할 것이고, 카운트 1은 임시다.
// -> 그리고 i+1과 i번째가 같지 않은 상태가 생기면,  
//     if문으로.. (count1 > count2) count1을 count2에 비교한다
// 카운트1이 작으면 그냥 넘어가고 카운트1이 더 크다면 카운트2에 카운트 1을 저장한다.
// 카운트 2에 1을 더해서 리턴

// 최빈값이 여러개인 경우를 위해서 count3를 만든다. count1은 임시. count2는 최빈. count3은 최빈에 비교하는 전의 값.
// count3의 설계. count3에 count1을 다 넣고, 만약 count2가 count3안에 존재한다면, -1을 리턴한다.
// 근데 가장 큰 값도 count3에 들어간다. count1이 count2보다 클때, 카운트2에 카운트1 값이 할당되니까(최빈값이 정해지니까), 그러면 같을때 count3의 값에 넣으면, 최빈값들만 count3에 넣을 수 있게 된다. 아니지, 애초에 같을때, 즉, count1과 count2가 같다는 소리는, 최빈값이 두 번 나왔다는 소리다. 이 때, 카운트3에 그 값을 넣는다. 바로 -1을 출력하지 않는 이유는 그 뒤에 더 큰 최빈값이 있을 수 있기 때문. 만약에 더 큰 최빈값이 나오지 않는다면, count2에는 전에 넣었던 최빈값이 존재할 것이고, count3에도 동일하게 존재할 것이다. count3에 존재하면 -1이라고 식을 짰을때, 문제는 가장 큰 값이 count3에 들어간다는 것이었는데, count1과 count2가 같을 때만 count3에 넣는다면 가장 큰 값은 들어가지 않고 중복되는 최빈값을 추출할 수 있다.

// 원소의 길이가 1일 때는, 앞 뒤를 비교할 수 없으니, 무조건 1이다.

// 이 논리구조의 전제는 정렬이다.