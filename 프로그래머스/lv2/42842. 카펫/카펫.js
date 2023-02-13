function solution(brown, yellow) {
    let capet = brown + yellow
    
    for (let width=3; width <= capet/2; width++) {
        if(capet % width === 0) {
            let height = capet / width
            if((width-2)*(height-2)===yellow) {
                if(width>=height) {
                    return [width, height]
                }
            }
        }
    }
    }


// 가로 >= 세로,   최소3