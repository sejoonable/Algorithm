function solution(n, arr1, arr2) {
    let HaeDok = [];
    let imsi = [];
    
    let arr1_two = [];
    for (let i = 0; i < arr1.length; i++) {
        arr1_two.push(arr1[i].toString(2))
    }
    for (let i = 0; i < arr1_two.length; i++) {
    if (arr1_two[i].length < n) {
            arr1_two[i] = arr1_two[i].padStart(n, '0')
        }
    }
    
    
    let arr2_two = [];
    for (let i = 0; i < arr2.length; i++) {
        arr2_two.push(arr2[i].toString(2))
    }
    for (let i = 0; i < arr2_two.length; i++) {
    if (arr2_two[i].length < n) {
            arr2_two[i] = arr2_two[i].padStart(n, '0')
        }
    }
    
    for (let i = 0; i < arr1.length; i++) {
        let A = arr1_two[i].split("")
        let B = arr2_two[i].split("")
        for (let j = 0; j < arr1.length; j++) {
            if ((A[j] === "1") || (B[j] === "1")) {
                imsi.push("#")
            } else {
                imsi.push(" ")
            }
        } HaeDok.push(imsi.join(""));
        imsi = [];
    }
    return HaeDok
}

// n 

// 벽 1 
// 공백 0 

// 두 지도를 합치는 것이다.
// 이진수의 합.

// 1. arr1과 arr2를 이진수로 바꾼다.
// 2. arr1[i][j] || arr2[i][j] 가 1이면 #, 0이면 " "
// 2-1 하나라도 1이면 #으로 바꾸고, 둘다 0이면 " "으로 바꾼다. 일단 각 요소들을 비교한다. 
// arr1_two[i] arr2_two[i]
// 그럼 split으로 분해한 다음에, 암호해독기를 만든다. 즉, 반복문을 만든다. 
// arr1_two[i].split("")[j] || arr2_two[i].split("")[j] 가 1이면 #, 0이면 " "
// 이걸 배열에 넣는다. join("")하고 이걸 더 큰 배열에 넣는다. HaeDok = [];