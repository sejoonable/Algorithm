function solution(price, money, count) {
    let chong = 0;
    for (let i = 1; i <= count; i++) {
        chong += price * i
    } 
    if (money < chong) {
        return (chong - money)
    } else {
        return 0
    }
}