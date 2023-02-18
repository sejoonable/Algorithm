function solution(arr) {
    let gop = 1
    let result = 0
    let count = 0
    let flag = true
    while(flag) {
        for(let i = 1; i < arr.length; i++) {
        if (arr[0] * gop % arr[i] === 0) {
            result = arr[0] * gop
            count += 1
        } else {
            break;
        }
        if (count === arr.length -1) {
            flag = false
        } 
        }
        count = 0
        gop++
        
    } return result
}
