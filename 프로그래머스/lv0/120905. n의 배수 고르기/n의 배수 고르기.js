function solution(n, numlist) {
    let monster = [];
    for(let i = 0; i < numlist.length; i++) {
        if (numlist[i] % n == 0) {
            monster.push(numlist[i])
        }    
    }
    return monster;
}