function solution(arr) {
    let a = [];

    for (let i = 0; i < arr.length; i++) {
       if ((arr[i] !== arr[i+1])) {
           a.push(arr[i])
       }
    } return a
}

    

