function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return week[new Date(`2016-${a}-${b}`).getDay()];
}

// 1. 2016년이 윤년이라는 것을 전제로 한다.
// 2. a월 b일의 요일을 구하기 위해서는 달력을 가져오면 된다.
// 3. 5월 24일은 "TUE"
// 4. 달력을 가져오려면,,, 5월 24일을 기준으로 