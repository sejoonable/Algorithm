function solution(dots) {
    let a = [];
    let giulgi;
    for(let i = 0; i < dots.length-1; i++) {
        for(let j = i+1; j < dots.length; j++) {
        giulgi = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0])
        
        if(a.includes(giulgi)) return 1
        a.push(giulgi)
        }
    } return 0
}


// 다돌려서 기울기만 같으면 된다.