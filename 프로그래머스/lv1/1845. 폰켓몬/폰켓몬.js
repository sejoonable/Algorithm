function solution(nums) {
    let setNums = new Set(nums); 
    if(nums.length/2 > [...setNums].length) {
        return [...setNums].length;
    } else if (nums.length/2 <= [...setNums].length) {
        return nums.length/2
    }
}

// N/2 가져가라.
// 같은 종류 폰켓몬은 같은 번호다.
// 최대한 많은 종류의 폰켓몬.
// nums.length는 항상 짝수

// 중복을 없애고, 
//     첫번째 원소를 포함한 (nums.length/2)개를 고르면 되는거잖아. 

