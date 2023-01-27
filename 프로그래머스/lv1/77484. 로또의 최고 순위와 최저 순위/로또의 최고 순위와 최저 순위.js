function solution(lottos, win_nums) {
    let general = [];
    let win = [];
    let winRank = [];
    for (let i = 0; i < win_nums.length; i++) { 
    if (lottos[i] === 0) {
        win.push(lottos[i])
    }
    if (lottos.indexOf(win_nums[i]) !== -1) {
        general.push(win_nums[i])
        win.push(win_nums[i])
    }
} 
    switch(win.length) {
        case 6 : winRank.push(1)
        break;
        case 5 : winRank.push(2)
        break;
        case 4 : winRank.push(3)
        break;
        case 3 : winRank.push(4)
        break;
        case 2 : winRank.push(5)
        break;
        default : winRank.push(6)
    }
    
    switch(general.length) {
        case 6 : winRank.push(1)
        break;
        case 5 : winRank.push(2)
        break;
        case 4 : winRank.push(3)
        break;
        case 3 : winRank.push(4)
        break;
        case 2 : winRank.push(5)
        break;
        default : winRank.push(6)
    }
    
    
        
    return winRank;
}



// lottos에 0이 있다면, 그 0은 바뀔 수 있다. 

// 일단 일치하는 걸 확인한다. 그럼 바로 최저등수를 구할 수 있다. 
// 정렬하고 비교해도 될까? 그럼 안되지. 왜냐하면 중간에 다른 숫자가 생기면 뒤에는 다 틀려버리니까.
// 일치하는 걸 확인하기 위한 방법.
// indexOf로 확인한다? == -1 

// 2개
