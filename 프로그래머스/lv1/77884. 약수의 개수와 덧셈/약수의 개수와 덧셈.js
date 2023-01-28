function solution(left, right) {
let jinAksoo = [];
let Aksoo = [];
    for (let i=left; i<=right; i++) {
        for (let n = 1; n <= i; n++) {
            if (i % n === 0) {
                Aksoo.push(n)
        }} if (Aksoo.length % 2 !== 0) {
            jinAksoo.push(-i);
        } else {
            jinAksoo.push(i);
        } 
        Aksoo.length = 0;
    }
    return jinAksoo.reduce((cnt,num)=>cnt+=num,0);
}
