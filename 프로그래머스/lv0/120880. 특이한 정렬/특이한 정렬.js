function solution(numlist, n) {
    let a = [];
    let b;
    
    for (let i in numlist) {
        a.push({name : numlist[i] , value : Math.abs(numlist[i] - n)})
    }
    a = a.sort((a,b) => a.value - b.value)
    
    // 밸류가 같으면 따로 분리해서 네임으로 내림차순 시킨다. 그리고 다시 넣어준다.
    for (let i = 0; i<a.length-1; i++) {
        if (a[i].value === a[i+1].value) {
        b = a.slice(i,i+2)
        b.sort((a,b) => b.name - a.name)
            a.splice(i, 2, ...b)
            b = []
        // b = b.sort((a,b)=>(b.name - a.name))
    }
    }
    
    
    return a.map(v=>v.name)
}

// 가까운 수를 구하려면
// 각각을 n으로 뺐을때, 그 값이 작은 거가 제일 앞으로 와야겠네.
// 그러러면, 그 차이를 밸류로 만들어서 정렬시켜야 되겠네.


// 차이의 절대값이 같다면, 그 부호를 비교해서 플러스가 나오는 값이 앞으로 오면 되겠다.
// !! 이는 힘들 것 같다. 왜냐하면, 절대값으로 바꾼 다음에 다시 원래의 밸류값으로 바꿔서 비교를 한다음 정렬해야 하는데,
// 그런 로직은 짜기가 힘들다.. 그렇기에 차라리, 밸류값이 같다면 네임이 더큰 

// 왜냐하면 그 차이가 똑같다면 더 큰값을 앞에 두라고 했으니까.


