function solution(n) {
     let A = [...n.toString()]
     let B = A.sort((a,b) => (b-a))
     let C = ""
     for (let i = 0; i < B.length; i++) {
         C += B[i]
     }
     return Number(C);
}
