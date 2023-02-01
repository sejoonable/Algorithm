function solution(my_str, n) {
    let mini = [];
    let Dap = [];
    let my_strSplit = my_str.split("");
    for (let i = 0; i < my_str.length; i++) {
        mini.push(my_strSplit[i])
        
        if (mini.length === n) {
            Dap.push(mini.join(""));
            mini = [];
        }
    } if (mini.length !== 0) Dap.push(mini.join(""));
    return Dap
}