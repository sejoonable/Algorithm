function solution(phone_number) {
    let A = phone_number.split("")
    let B = A.splice(-4,20,"*")
    return B.join("").padStart(phone_number.length,"*")
}