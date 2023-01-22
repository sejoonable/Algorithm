function solution(my_string) {
    let sum = "";
    let monster = my_string.split("");
    for (let i = 0; i < monster.length; i++) {
        if (monster[i] != "a" && monster[i] !="e" && monster[i] !="i" && monster[i] !="o" && monster[i] !="u") {
            sum += monster[i]
        }
    }
    return sum;
}
