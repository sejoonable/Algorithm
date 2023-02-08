function solution(common) {
    let gongcha;
    let gongbhi;
    
    
        if (common[1] - common[0] === common[2] - common[1]) {
            gongcha = common[1] - common[0]
            return common[common.length-1] + gongcha
        } else {
            gongbhi = parseInt(common[1]/common[0])
            return common[common.length-1] * gongbhi
        }
}



// input : 등비수열 or 등차수열.
// output : 마지막 원소 다음으로 올 숫자.

// 등비수열인지 등차수열인지 파악.
// 공비 공차 구하기.
// 마지막 항에 공비 공차 적용해주기