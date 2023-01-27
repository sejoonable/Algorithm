function solution(answers) {
let a = [1, 2, 3, 4, 5]
let b = [2, 1, 2, 3, 2, 4, 2, 5]
let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
let countA = 0;
let countB = 0;
let countC = 0;
let result = [];
for (let i = 0; i < answers.length; i++) {
    if(answers[i] === a[i % 5]) {
        countA += 1
    }
    if(answers[i] === b[i % 8]) {
        countB += 1
    }
    if(answers[i] === c[i % 10]) {
        countC += 1
    }
} if (Math.max(countA,countB,countC) === countA) {
    result.push(1)
} if (Math.max(countA,countB,countC) === countB) {
    result.push(2)
} if (Math.max(countA,countB,countC) === countC) {
    result.push(3)
}
    return result
}
