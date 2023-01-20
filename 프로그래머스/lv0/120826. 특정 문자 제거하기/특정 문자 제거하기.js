function solution(my_string, letter) {
    let a = my_string.split("").filter(x => !letter.split("").includes(x))
    return a.join("");
}