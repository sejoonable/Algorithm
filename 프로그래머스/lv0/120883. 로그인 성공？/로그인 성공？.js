function solution(id_pw, db) {
    // 알파벳소문자숫자, 숫자만
    // 아이디는 같을 수 없다. 비밀번호는 괜춘.
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0]) {
            if (id_pw[1] === db[i][1]) {
                return "login"
            } else {
                return "wrong pw"
            }
        }
    } return "fail"
}

// input : 로그인정보, 회원정보
// output : 회원정보에 로그인정보가 있으면 return "login" 아이디가 일치하지 않으면 return "fail" 비밀번호만 일치하지 않으면 
// return "wrong pw"