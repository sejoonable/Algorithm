function solution(s) {
    let S = s.split("")
    let Dap = []
    
    for(let i in S) {
        if (Dap.map(v=>v.name).indexOf(S[i]) === -1) {
            Dap.push({name: S[i], index: i, dap: -1})
        } else {
            Dap.push({
                name: S[i], 
                index: i, 
                dap:i - +Dap.map(v=>v.index)[Dap.map(v=>v.name).lastIndexOf(S[i])]
            })
            
            
        }
        
    } return Dap.map(v=> +v.dap)
}

// input = 문자열.
// output = input문자열의 각각 알파벳의 앞에 동일한 알파벳이 있는 지를 판별하고 있다면 가장 가까운 거리를, 없다면 -1을 반환하여 각각을 배열로 만들어 리턴한다.

// 문자를 다 나눈다. 알파벳을 일단 하나씩 넣는다. 인덱스도 같이 넣는다. return값도 같이 넣는다. (객체로 가야겠죠.)
// 만약에 같은 알파벳이 들어온다면, 전에 있던 인덱스와 지금의 인덱스와 뺀다. 그리고, 인덱스를 현재의 인덱스로 교체한다. return 값을 뺀 값으로 교체한다.
// 이런 식으로 계속 뒤로 가면서 