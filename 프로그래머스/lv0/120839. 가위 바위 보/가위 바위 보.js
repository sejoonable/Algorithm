function solution(rsp) {
    let monster = rsp.split("") ;
    let count = "" ;
    for (let i = 0; i < monster.length; i++) {
    if (rsp[i] == "2") {
        count += "0" ;
    } else if (rsp[i] == "0") {
        count += "5" ;
    } else {
        count += "2" ;
    }
    }
    return count;
}

