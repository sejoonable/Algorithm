function solution(balls, share) {
    return Fac(balls) / (Fac(balls-share) * Fac(share));
}

function Fac(num) {
    let Dap = BigInt(1);
    for(let i = 2; i <= num; i++) {
        Dap *= BigInt(i)
    } return Dap
}

