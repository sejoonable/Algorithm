function solution(A, B) {
    if(A==B) return 0
    
    let C = [];
    
    A = A.split("")
    
    for(let i = 0; i < A.length; i++) {
        A.unshift(A.pop())
        C.push(A.join(""))
    }
    
    if(C.includes(B)) return C.indexOf(B)+1
    
    return -1
}

// pop해서 unshift

// input: A=before B=after밀고난결과값
// output : A가 B가 될 수 있으면 최소횟수를, 없다면 -1 안밀어도 되면 0

// 하나씩 밀어서 다 만들어보고 새로운 배열에 넣는다.
// B가 새로운 배열에 있으면 1. 없으면 -1