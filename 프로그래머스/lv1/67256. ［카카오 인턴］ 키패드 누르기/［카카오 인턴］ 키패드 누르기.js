function solution(numbers, hand) {
    let result = "";
    let keyPad = {
    1:[0,0], 2:[1,0], 3:[2,0],
    4:[0,1], 5:[1,1], 6:[2,1],
    7:[0,2], 8:[1,2], 9:[2,2],
    '*':[0,3], 0:[1,3], '#':[2,3],
    }
    let Lh = [0,3]
    let Rh = [2,3]
    
    for (let i = 0; i < numbers.length; i++) {
    let distanceLh = 
        Math.abs(keyPad[numbers[i]][0] - Lh[0]) +
        Math.abs(keyPad[numbers[i]][1] - Lh[1])

    let distanceRh = 
        Math.abs(keyPad[numbers[i]][0] - Rh[0]) +
        Math.abs(keyPad[numbers[i]][1] - Rh[1])
    
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            Lh = keyPad[numbers[i]]
            result += 'L'
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            Rh = keyPad[numbers[i]]
            result += 'R'
        } else {
            if (distanceLh > distanceRh) {
                Rh = keyPad[numbers[i]]
                result += 'R'
            } else if (distanceLh < distanceRh) {
                Lh = keyPad[numbers[i]]
                result += 'L'
            } else if (distanceLh = distanceRh && hand === "right") {
                Rh = keyPad[numbers[i]]
                result += 'R'
            } else if (distanceLh = distanceRh && hand === "left") {
                Lh = keyPad[numbers[i]]
                result += 'L'
            }
        } 
}   return result
}


// numbers[i]가 일때,,,
// 1 4 7   L  Lh는 여기로 바뀜.   Lh == keyPad[numbers[i]]
// 3 6 9   R  Rh는 여기로 바뀜.   Rh == keyPad[numbers[i]]
// 2 5 8 0    거리계산해서, 가까운 곳. distance. 같으면 hand Lh든 Rh든 바뀜.

// Lh = keyPad[numbers[i-1]]