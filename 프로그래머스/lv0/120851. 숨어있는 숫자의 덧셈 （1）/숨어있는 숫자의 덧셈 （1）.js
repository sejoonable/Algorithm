function solution(my_string) {
    let sum = 0;
    let monster = my_string.split("");
    for (let i = 0; i < my_string.length; i++) {
        if (Number.isInteger(+monster[i])) {
            sum += +monster[i];
        }    
    }
    return sum;
}

// 문자열 my_string 안의 자연수들만 다 더하기
// 다 나눠서 숫자만 골라내서 숫자면 더하기 아니면 말고