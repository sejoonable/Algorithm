function solution(my_string) {
    let my_string_Arr = my_string.split("");
    let my_string_Arr_Map = my_string_Arr.map((v)=>Number(v));
    let my_string_Arr_Map_OnlySoo = my_string_Arr_Map.join("").split("NaN")
    let my_string_Arr_Map_OnlySoo_filter = my_string_Arr_Map_OnlySoo.filter((v)=> v)
    let A = my_string_Arr_Map_OnlySoo_filter.map((v) => +v)
    return A.reduce((acc,cur) => acc + cur, 0)
}

// 스트링을 for문으로 탐색
// 만약 뒤에 숫자가 있다면 문자열로 더한다.
// 만약 뒤에 숫자가 없다면 숫자로 더한다.
//     문자열로 더한 것들을 숫자형으로 변환시켜 함께 더한다.
//     문자열을 ''로 만든다.


