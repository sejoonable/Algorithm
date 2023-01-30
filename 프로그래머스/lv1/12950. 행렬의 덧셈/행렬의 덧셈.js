function solution(arr1, arr2) {
    let mini = [];
    let dap = [];
    for(let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            mini.push(arr1[i][j] + arr2[i][j])
        } dap.push(mini)
        mini = [];
    } return dap;
}