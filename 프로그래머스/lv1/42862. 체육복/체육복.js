function solution(n, lost, reserve) {
    let gyeop = 0;
    let ret = 0;
    let count = 0;
     for(let i = n; i > 0; i--) {
        if(reserve.includes(i) && lost.includes(i)) {
            lost.splice(lost.indexOf(i), 1) //겹치는 걸 없애버림.
            reserve.splice(reserve.indexOf(i), 1)
        }
     }
         
    for(let i = n; i > 0; i--) {
        if(reserve.includes(i)) {
            count += 1;
        } //여벌이 있고 도난당하지 않았으니, 빌려줄 수 있는 상태를 count=1로 표시.
        if (lost.includes(i+1) && (count===1)) {
            ret += 1; 
            delete lost[lost.indexOf(i+1)]
        } else if((lost.includes(i-1)) && (i-1>0) && (count===1)) {
            ret += 1; 
            delete lost[lost.indexOf(i-1)]
                     //중복을 없애기 위해 그 값이 이미 빌려줬으면 delete를 시킨다. 
            //문제는 null이 되어버리기 때문에, lost와 reserve의 겹치는 값을 해결 못한다. -> 미리 해버리자.
        }
        count = 0;
    } return (n - lost.length + ret); //전체학생수 - 여벌이없는학생수  + 빌려주는값(정확하지가 않잖아) 
}//전체학생수 - 여벌을 못받은 학생수

// 앞에 reserve가 있을때 뒤에 준다.
// 그럼 뒤에 reserve가 있을때는 어떡하지?
//     지금 3이 4한테 준거잖아.
//특이케이스!: reserve가 빌려줄 수 없을 수도 있다.

// n명
// reserve 여벌로 가져온 학생들 : 여벌은 하나. : 만약 도난 당했으면 빌려줄 수 없음. 받을필요도 X
// lost 없는 학생들
// i번째는 i-1 i+1 에게만 빌려줄 수 있음.

// 1번째부터 시작해서 
// 만약 reserve에 i번째가 있으면 카운트 하나 추가.
// (lost에 i+1번째가 있으면, 카운트가 1일때,) return 하나 추가! 카운트 초기화.
// 밀려서 빌려주기는 안된다!!!


