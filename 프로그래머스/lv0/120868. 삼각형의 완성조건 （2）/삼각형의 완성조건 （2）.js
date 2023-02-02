function solution(sides) {
    sides.sort((a,b)=>{return a-b})    
    let count = 0;
    for (let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) {
        count += 1
    }
    for (let i = sides[1]+1; i < sides[0]+sides[1]; i++) {
        count += 1
    } return count
}

// sides[0]+A > long
// A > sides[1] - sides[0]
// 11 7 A 5 6 7 8 9 10 11

// 11 7 12 13 14 15 16 17



