function solution(food) {
    let foodtable = ['0'];

for (let i = food.length; i > 0; i--) {
    let j = 1
    while(parseInt(food[i] / 2) >= j) {
        foodtable.unshift(i)
        foodtable.push(i)
        j++
    }
} return foodtable.join("")
    }
    
    
// parseInt(food[i] / 2) 만큼 반복하여
// unshift(i) push(i) 한다.