function solution(numbers) {
    let a = [];
    for (let i=0; i < numbers.length; i++) {
        for (let j=0; j < numbers.length; j++) {
            if(i != j) {
                a.push((numbers[i] + numbers[j]))
            }
            
            } 
    } let b = [...new Set(a)]
    return b.sort((a,b)=>a-b);
}

// 1번째에 i번째를 다 더하고
// 2번째에 i번째를 다 더하고
// ...

// set.add()
// set에 넣으면 중복은 다 사라지니까.

// let b = a[i] + a[!i] 

// c.push(b[i])
// c.split("")