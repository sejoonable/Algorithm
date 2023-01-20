let mea = [];
function solution(n) {
    for (let i=1; i<=n; i++) {
        if (n%i == 0) {
            mea.push(i);
        }
    } return mea.length;
}


// n의 약수를 구해라