function solution(board) {
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if (board[i][j] === 1) {
                if (board[i-1] !== undefined) {
                    if (board[i-1][j-1] !== 1 && j-1 > -1) {board[i-1][j-1] = 2};
                    
                    if (board[i-1][j] !== 1) {board[i-1][j] = 2};
                    
                    if (board[i-1][j+1] !== 1 && j+1 < board.length) {board[i-1][j+1] = 2};
                }
                
                if (board[i][j-1] !== 1 && j-1 > -1) {board[i][j-1] = 2};
                if (board[i][j+1] !== 1 && j+1 < board.length) {board[i][j+1] = 2} ;
                
                if (board[i+1] !== undefined) {
                    if (board[i+1][j-1] !== 1 && j-1 > -1) {board[i+1][j-1] = 2};
                    
                    if (board[i+1][j] !== 1) {board[i+1][j] = 2};
                    
                    if (board[i+1][j+1] !== 1 && j+1 < board.length) {board[i+1][j+1] = 2};
                    
                }
            }
        }
    } 
    let count = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] === 0) count += 1
            }
        }
    return count
}

// [[0, 0, 0, 0, 0], 
//  [0, 0, 0, 0, 0], 
//  [0, 0, 0, 0, 0], 
//  [0, 0, 1, 0, 0], 
//  [0, 0, 0, 0, 0]]



// a[i-1][j-1] a[i-1][j] a[i-1][j+1]
// a[i][j-1] a[i][j] a[i][j+1]
// a[i+1][j-1] a[i+1][j] a[i+1][j+1]



// input: 지뢰판을 표시한 2차원 배열.
// output : 안전한 지역의 칸수를 리턴

// 지뢰가 있는 지역과 그 인접 지역을 구하면 되겠네요...