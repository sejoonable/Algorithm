function solution(keyinput, board) {
    let result = [0,0]
    
        for(let i = 0; i < keyinput.length; i++) {
            if (keyinput[i] === "up") {
                result[1] += 1 
                if (parseInt(board[1]/2) < Math.abs(result[1]))  result[1] -= 1 ;
            } else if (keyinput[i] === "down") {
                result[1] -= 1 
                if (parseInt(board[1]/2) < Math.abs(result[1]))  result[1] += 1 ;
            } else if (keyinput[i] === "left") {
                result[0] -= 1 
                if (parseInt(board[0]/2) < Math.abs(result[0]))  result[0] += 1 ;
            } else if (keyinput[i] === "right") {
                result[0] += 1 
                if (parseInt(board[0]/2) < Math.abs(result[0]))  result[0] -= 1 ;
            }
            
        } return result
    }

// 그 다음 결과값이 범위를 넘어갔을 때 컨티뉴를 시켜야 되는데,
//     지금은 그 값이면 무조건 진행을 안되게 해놨으니까 막힐수밖에 없지.
//     만약 커지게 되면 그 때 다시 줄이면 되지.
// let result = [0,0]
// up    result[0]   result[1]+1 
// down  result[0]   result[1]-1 
// left  result[0]-1 result[1] 
// right result[0]+1 result[1] 

// board/2가 최대 board/2가 최대

// board[0]/2 === result[0]  continue
// board[1]/2 === result[1]  continue

