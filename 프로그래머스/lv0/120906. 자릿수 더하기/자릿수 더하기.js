function solution(n) {
    let numb = String(n).split("")
    let sum = 0;
    for(let i = 0; i < numb.length; i++) {
        sum += +numb[i]
    }
    return sum;
}
// split

// list로 만든다. split한다. 각각을 더한다. 