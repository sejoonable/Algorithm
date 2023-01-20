function solution(array, n) {
    return (array.filter((x) => x == n)).length;
}

// n이 포함되어있는가의 여부는 중요하지 않아.
// 그럼 분해해서 그것만 따로 모을까? 그래서 length해보면 되잖아
// 아니다 필터로 원소를 n과 같은 걸로만 바꾸면 되잖아

// array 
// n