function solution(sides) {
    for (let i = 0; i < sides.length; i++)
    if (Math.max(...sides) < (sides[0] + sides[1] + sides[2] - Math.max(...sides))) {
        return 1;
    } else {
        return 2;
    }
}



// a+b > c가장큰것
// if에서 다 돌려버리면 여러개가 나오겠지... 제일 작은 변이 <왼쪽의 피연산자가 되면 무조건 성립이다.

//가장큰것 < 작은것 + 작은것 이 성립하면 된다.