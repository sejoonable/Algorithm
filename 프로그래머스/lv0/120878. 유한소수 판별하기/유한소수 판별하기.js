function solution(a, b) {
    let A = a;
    let B = b;
    
  let c = 0; 
  while(b !== 0){ 
    c = a % b; 
    a = b; 
    b = c; 
  } 
    
    function isSosoo(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) return false
        } return true
    }
    
    for(let i = 3; i <= B/a; i++) {
            if(i == 5) continue;
        
            if (isSosoo(i)) {
                if (B/a % i === 0)
                return 2
            }
        }

   return 1
   
}

//최대공약수를 구한다.
//only 소인수가 2와 5만 있어야 한다.