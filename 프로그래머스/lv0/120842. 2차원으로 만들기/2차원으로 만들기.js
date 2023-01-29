function solution(num_list, n) {
let new_num_list = [];
let mini_num_list = [];
    for (let i = 0; i < num_list.length; i++) {
        mini_num_list.push(num_list[i])
        if (mini_num_list.length === n) {
            new_num_list.push(mini_num_list);
            mini_num_list = [];
        }
    } return new_num_list;
}