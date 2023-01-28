function solution(s) {
    let result = s;
    let numWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i< numWord.length; i++) {
        let ss = result.split(numWord[i]);
        result = ss.join(i);
    }
    return Number(result);
}

// s를 번역하라는 것인데

// 숫자를 기준으로 나눈다면? 그럼 문자끼리 붙여있는 건 어떡해.
