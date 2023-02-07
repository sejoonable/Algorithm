function solution(a, b, n) {
    let count = 0;
    
    while (n >= a) {
        //가지고 있는 병의 수 n
        
        count += parseInt(n/a)*b
        n = parseInt(n/a)*b + n%a
        
        
        console.log(n)
    }
    return count
}

// 빈병 a개를 주면
// 콜라 b병을 준다.
// 빈병 n개를 주면 몇개를 줄까?
    
    
// n을 a로 나눈 몫* b는 받는 병의 수이다. 그 나머지는 남는 병의 수다.
// 즉 n = parseInt(n/a)*b + n%a 이다