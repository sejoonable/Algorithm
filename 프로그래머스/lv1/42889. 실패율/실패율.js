function solution(N, stages) {
    let varStageslength = stages.length;
    let silPae = [];
    let imsi_count = 0;
    for(let j=1; j <= N; j++) {
        for (let i=0; i < stages.length; i++) {
            if(stages[i] === j) {
                imsi_count += 1;
            }
        } silPae.push(imsi_count/varStageslength);
        varStageslength -= imsi_count;
        imsi_count = 0;
    } 
    // i번 째에 있는 것이, i+1의 실패율이다.
    // 즉, i번 째에 i+1의 값을 매긴다. 
    // 그 전의 실패율로 배열을 하고,
    // i+1의 값으로 변환을 시키면 그만이다.
    let silPaeCopy = []
    for (let i=0; i<silPae.length; i++) {
        silPaeCopy.push({name:i+1, value:silPae[i]})
    }
    let silPaeCopySort = silPaeCopy.sort((a,b)=>(b.value-a.value))
    return silPaeCopySort.map(obj => obj.name);
}


// 같은 숫자의 개수.

// 배열에서 i랑 같은 게 몇 개 인지 파악한다. 1부터 시작해서 그 개수를 더해나간다. 후의 실패율을 구하기 위함임.
// 무조건 1의 도전자의 수는 stages.length의 개수와 같다. 실패율은 '위에서 구한 값/stages.length'이다
// 2는,, '2의개수/(stages.length-(i-1의 개수)'
// 3은.. '3의개수/((stages.length-(i-1의 개수)-2의개수)'
// 2번은 1 2 둘 다를 포함
// 3번은 1 2 3 다 포함
// 4번은 1 2 3 4 다 포함

// 실패율을 구했으니, 값을 구별한다음, 그 전 값으로 배열한다.
// 값 구별을 인덱스로 미리 해둬야 한다. i = i+1 으로. 해두면 순서를 정렬했을때, 다시 값구별을 해둔 값으로 리턴하면 된다.
