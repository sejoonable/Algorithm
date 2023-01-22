function solution(my_string) {
    let UpWithLow = "";
    let monster = my_string.split("");
    for (let i = 0; i < monster.length; i++) {
    if (monster[i] === monster[i].toUpperCase()) {
    UpWithLow += monster[i].toLowerCase() ;
} else if (monster[i] === monster[i].toLowerCase()) {
    UpWithLow += monster[i].toUpperCase() ;
}
    }
    return UpWithLow;
}





