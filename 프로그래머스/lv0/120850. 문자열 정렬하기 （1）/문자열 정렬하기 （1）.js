function solution(my_string) {
    let b = [];
let a = my_string.split("");
for (let i = 0; i < a.length; i++) {
  if (!isNaN(a[i])) {
      b.push(+a[i])
  } 
} return b.sort((a,b)=>a-b);
}

