function solution(chicken) {
    let coupon = chicken;
    let count = 0;
    
    while (coupon > 9) {
        count += Math.floor(coupon/10)
        //추가치킨의수
        coupon = Math.floor(coupon/10) + coupon%10
        //현재 쿠폰의 수
    } return count
}






// function solution(chicken) {
//     let mok = parseInt(chicken/10);
//     let namuge = chicken%10
//     let chooga = mok;
//     // 추가를 10으로 계속 나눠줘야 하는 거잖아.
//     // 값 갱신을 하려면, 몫을 담을 값을 따로 만들어야 한다.
//     coupon(mok)
    
//     function coupon (mok) {
//         while(mok >= 10) {
//         namuge += mok % 10
//         mok = parseInt(mok / 10)
//         chooga += mok
//         } 
    
//     // 쿠폰의 마지막의 나머지는 반영이 안되므로 따로 더해준다.
//         namuge += mok 
//         if (namuge >= 10) {
//             let A = namuge
//             coupon(A)
//         }
//     }
    
    
//     return chooga
    
    
//     chicken을 일단 10으로 나누면, 쿠폰 한 장 당의 추가닭의 개수가 나온다.
//     그 쿠폰 한 장 당의 닭의 개수에 또 10으로 나누면 추가추가닭의 개수가 나온다.


// 치킨을 꼐속 나눈다 10으로. 쿠폰 10장당의 추가닭 개수.
// 그럼 추가닭에 또 10으로 나누면 쿠폰 10장 당의 추가닭 개수.
// 또 추가닭 개수를 10으로 나누면 추가닭 개수가 나온다.
// 그럼 마지막에 시켜먹은 쿠폰은 반영이 안된다. 쿠폰이 일단 남아는 있을 건데.

// input : 시켜먹은 치킨의 수
// ouput : 받을 수 있는 최대 서비스 치킨의 수

