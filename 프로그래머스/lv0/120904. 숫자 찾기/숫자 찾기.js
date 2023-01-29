function solution(num, k) {
    for (let i = 0; i < String(num).length; i++) {
        if (k === +String(num)[i]) {
        return i+1;
    }
    } return -1
    
}

