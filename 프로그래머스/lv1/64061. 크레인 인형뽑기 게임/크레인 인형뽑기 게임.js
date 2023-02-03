function solution(board, moves) {
    let busket = [];
    let count = 0;
    moves.forEach(move => {
        for(let i = 0; i < board.length; i++) {
            if (board[i][move-1] === 0) {
                continue;
            } else {
                if (busket[busket.length-1] === board[i][move-1]) {
                    busket.pop()
                    count += 2
                } else {
                    busket.push(board[i][move-1])
                } board[i][move-1] = 0
            }
            break;
        }   
    }) 
    return count
}

// board = [
//     [0,0,0,0,0],
//     [0,0,1,0,3],
//     [0,2,5,0,1],
//     [4,2,4,4,2],
//     [3,5,1,3,1]
// ]

// moves = [1,5,3,5,1,2,1,4]

// output : 인형들을 바스켓에 넣었을 때 터진 인형 수. (인형들은 연속 2개가 같으면 터진다.)
// 바스켓을 만든다.
// 인형들을 구분해서 넣는다.
// 만약에 바스켓의 맨 위에 있는 인형과 
// 넣을 인형이 같으면 카운트를 2올리고 바스켓 맨 위의 인형을 삭제한다.

// 같지 않으면 넣을 인형을 바스켓에 넣는다.

// 두 모든 행동 뒤에는 빼온 곳에 0을 넣는다.

// 무브스의 각 숫자들은 board의 원소들의 인덱스+1 이다.
// moves[k]   board[i][moves-1]

// 그러면 무브스의 각각의 원소들로 일단 돌려야겠네.

