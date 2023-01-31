function solution(i, j, k) {
    let count = 0;
    for (; i <= j; i++) {
    for (let x of i.toString().split("")) {
    if (x === k.toString()) {
        count++
    } 
    }
    }   return count
}


    

