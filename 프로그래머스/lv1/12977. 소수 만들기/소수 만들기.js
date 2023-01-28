function solution(nums) {
  let sosoo = [];
for(let i = 0; i<nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
        for(let k = j + 1; k < nums.length; k++) {
            if (isSosoo(nums[i], nums[j], nums[k])) sosoo.push('a')
            }
        }
    } 
    return sosoo.length;
}

function isSosoo(x,y,z) {
    for (let l = 2; l < (x + y + z); l++) {
               if ((x + y + z) % l == 0) return false;
} return true;
}
