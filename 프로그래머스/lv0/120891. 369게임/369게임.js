function solution(order) {
    let str = String(order);
    let count = 0;
    let orderArr = str.split("");
    for (let i = 0; i < orderArr.length; i++) {
        if ((orderArr[i] == 3) || (orderArr[i] == 6) || (orderArr[i] == 9)) {
            count += 1;
        }
    } return count;
}

// 배열로 만들어서
// 반복문 돌려서
// 3 6 9 가 있으면 
// 카운트 올린다.