function solution(price) {
    if (price >= 100000 && price < 300000) {
        return parseInt(price * ((100 - 5)/100));
    } else if (price >= 300000 && price < 500000) {
        return parseInt(price * ((100 - 10)/100));
    } else if (price >= 500000) {
        return parseInt(price * ((100 - 20)/100));
    } else {
        return parseInt(price);
    }
}

