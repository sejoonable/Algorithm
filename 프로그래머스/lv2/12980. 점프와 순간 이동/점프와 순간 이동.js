function solution(n)
{
    
    let nowCount = 1;
    
    while(n !== 1) {
        if(n % 2 === 0) {
            n /= 2
        } else {
            n -= 1
            nowCount += 1
        }
    } 
    
    return nowCount
}