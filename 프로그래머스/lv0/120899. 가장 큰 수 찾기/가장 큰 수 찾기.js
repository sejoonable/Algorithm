function solution(array) {
    let a = [];
    a.push(Math.max(...array));
    let c = array.indexOf(Math.max(...array));
    a.push(c)
    return a;
}