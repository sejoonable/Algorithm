function solution(new_id) {
    let G;
    let A = new_id.toLowerCase()
    let B = A.replace(/[^\w\-\.]/g,'');
    let C = B.replace(/[\.]{2,}/g,'.');
    let D = C.replace(/^\./,"");
    let F = D.replace(/\.$/,""); 
    if (!F) {
        F = "a"
    }
    if (F.length >= 16) {
        G = F.slice(0,15).replace(/\.$/,"")
    } else if (F.length <= 2) {
        G = F.padEnd(3,F[F.length-1])
    } else {
        return F
    }
                 
    return G
}