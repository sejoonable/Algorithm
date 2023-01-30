function solution(numbers) {
    let count = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.indexOf(i) === -1) {
            count += i
        }
    } return count;
}


