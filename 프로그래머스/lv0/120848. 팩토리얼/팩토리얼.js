function solution(n) {
    let gop = 1;
    for (let i = 2; ; i++) {
        if(n - gop < 0) {
            return --i-1
        }
        gop *= i
    }
}

// 1부터 계속 하나씩 늘려가면서 곱한다음, 빼보다가,
//     뺐을 때의 값이 음수가 되면 '그전에 뺐던 값의 마지막에 곱했던 수'를 반환하면 되겠네. 