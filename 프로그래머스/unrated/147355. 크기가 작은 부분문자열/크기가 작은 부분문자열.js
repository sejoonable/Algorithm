function solution(t, p) {
    let count = 0;
    let tcopy = t.split("")
    let T = [];
    for (let i = 0; i < t.length-p.length+1; i++) {
        T.push(tcopy.splice(i, p.length))
        tcopy = t.split("")
    }
    
    
    for (let i in T) {
        T[i] = T[i].join("")
        if (T[i] <= p) {
            count++
        }
    }
    console.log(T)
    
    return count
}


// p의 length만큼 t를 끊는다. 
// 한 칸씩 밀려가면서 이를 반복한다.

// 3개씩 끊는다.
// t를 3개
// slice(i,p)