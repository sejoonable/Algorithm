function solution(n) {
    let Sosoo = [];
    
    function isSosoo(n) {
    for (let x of Sosoo) {
        if (x > Math.sqrt(n)) return true;
        if (Number.isInteger(n/x)) return false;
        } return true;
}
    
    for (let i=2; i <= n; i++) {
        if (isSosoo(i)) {Sosoo.push(i)}
    } return Sosoo.length;
}


// if (i가 1부터 n까지 계속 돌면서 소수인지를 확인한다. 소수이면은 넣어서 돌린다.)