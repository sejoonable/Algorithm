function solution(my_string) {
    let my_set = new Set(my_string)
    let my_stringNoJungBok = Array.from(my_set)
    return my_stringNoJungBok.join("");
}

