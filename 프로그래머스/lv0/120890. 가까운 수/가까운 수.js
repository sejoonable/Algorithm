function solution(array, n) {
    array.push(n)
    array.sort((a,b)=>{return a-b})    
    if (Math.abs(n - array[array.indexOf(n) -1]) > Math.abs(n - array[array.indexOf(n) +1])) {
        return array[array.indexOf(n) +1]
    } else {
        return array[array.indexOf(n) -1]
    }
}
