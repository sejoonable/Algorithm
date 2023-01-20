function solution(numbers, num1, num2) {
    A = numbers.splice(num1,num2-num1+1);
    return (A);
}


// numbers[num1] ~ numbers[num2]
// 3 ~ 5  