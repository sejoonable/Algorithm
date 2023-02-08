function solution(num, total) {
    let result = [];
    let unshiftCount = total/num
    let pushCount = total/num
    
    if (total/num === parseInt(total/num)) {
        result.push(total/num)
        
        while(result.length < num){
            result.unshift(unshiftCount-1)
            result.push(pushCount+1)
            unshiftCount -= 1
            pushCount += 1
        }
    } else {
        unshiftCount = total/num - 0.5
        pushCount = total/num + 0.5
        
        result.unshift(unshiftCount)
        result.push(pushCount)
        
        while(result.length < num){
            result.unshift(unshiftCount-1)
            result.push(pushCount+1)
            unshiftCount -= 1
            pushCount += 1
        }
    } return result
}


// input : num=연속된수의 개수  total= 연속된 수(음수도 포함) num개를 더한 값
// output : total을 만들 수 있는 num개의 수들의 배열

