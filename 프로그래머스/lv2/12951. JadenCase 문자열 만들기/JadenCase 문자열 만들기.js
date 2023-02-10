function solution(s) {
    s = s.split(" ")
    let A = [];
    let So = "";
    

    for(let i = 0; i< s.length; i++) {
        for(let j = 0; j<s[i].length; j++) {
            if (j !== 0) {
                So += s[i][j].toLowerCase()  
            } else {
                So += s[i][j].toUpperCase()
            }
        } A.push(So)
        So = ""
    }
    
    return A.join(" ")
}