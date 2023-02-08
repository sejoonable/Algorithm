function solution(dots) {
    let a = []
    
    for (let i = 0; i < dots.length-1; i++) {
        for (let j = i+1; j < dots.length; j++) {
            let A = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0])
            
            if(a.includes(A)) return 1
            a.push(A)
            console.log(a)
        }
    } return 0
}



// 다돌려서 기울기만 같으면 된다.