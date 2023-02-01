function solution(n) {
    let count = 0;
    let mini = 0;
    for (let i=0; i<=n; i++) {
        if (i > n/2) {break;}
        for (let j=i+1; j<=n; j++) {
            if (mini === n) {count+=1; mini=0; break;}
            if (mini > n) {mini=0; break;}
            mini += j
        }
    } return count+1;//자기자신포함
}


// input : n
// output : (다 더하면 n이 되는 연속된 수들)의 개수

// 1부터 더하다가 
// n이 되면 count+1 break;
// 넘어서면 2부터 더하기 