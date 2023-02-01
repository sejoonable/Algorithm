function solution(numbers) {
    let numEng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < numEng.length; i++) {
        numbers = numbers.split(numEng[i]).join(i)
    } return +numbers
}

