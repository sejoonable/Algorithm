function solution(s, n) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let sASCII = s.charCodeAt(i)    
        if(sASCII > 64 && sASCII < 91) {
            sASCII += n
            if(sASCII > 90) {
                sASCII -= 26
            }
        } else if (sASCII > 96 && sASCII < 123) {
            sASCII += n
            if(sASCII > 122) {
                sASCII -= 26
            }
        } 
        let sString = String.fromCharCode(sASCII);
          result += sString;
    }
    return result;
}





// function solution(s, n) {
// let SSplitCopy = s
// hoo = SSplitCopy.replace('A',1)
// hoo = SSplitCopy.replace('B',2)
// hoo = SSplitCopy.replace('C',3)
// hoo = SSplitCopy.replace('D',4)
// hoo = SSplitCopy.replace('E',5)
// hoo = SSplitCopy.replace('F',6)
// hoo = SSplitCopy.replace('G',7)
// hoo = SSplitCopy.replace('H',8)
// hoo = SSplitCopy.replace('I',9)
// hoo = SSplitCopy.replace('J',10)
// hoo = SSplitCopy.replace('K',11)
// hoo = SSplitCopy.replace('L',12)
// hoo = SSplitCopy.replace('M',13)
// hoo = SSplitCopy.replace('N',14)
// hoo = SSplitCopy.replace('O',15)
// hoo = SSplitCopy.replace('P',16)
// hoo = SSplitCopy.replace('Q',17)
// hoo = SSplitCopy.replace('R',18)
// hoo = SSplitCopy.replace('S',19)
// hoo = SSplitCopy.replace('T',20)
// hoo = SSplitCopy.replace('U',21)
// hoo = SSplitCopy.replace('V',22)
// hoo = SSplitCopy.replace('W',23)
// hoo = SSplitCopy.replace('X',24)
// hoo = SSplitCopy.replace('Y',25)
// hoo = SSplitCopy.replace('Z',26)
    
// hoo = SSplitCopy.replace('a',27)
// hoo = SSplitCopy.replace('b',28)
// hoo = SSplitCopy.replace('c',29)
// hoo = SSplitCopy.replace('d',30)
// hoo = SSplitCopy.replace('e',31)
// hoo = SSplitCopy.replace('f',32)
// hoo = SSplitCopy.replace('g',33)
// hoo = SSplitCopy.replace('h',34)
// hoo = SSplitCopy.replace('i',35)
// hoo = SSplitCopy.replace('j',36)
// hoo = SSplitCopy.replace('k',37)
// hoo = SSplitCopy.replace('l',38)
// hoo = SSplitCopy.replace('m',39)
// hoo = SSplitCopy.replace('n',40)
// hoo = SSplitCopy.replace('o',41)
// hoo = SSplitCopy.replace('p',42)
// hoo = SSplitCopy.replace('q',43)
// hoo = SSplitCopy.replace('r',44)
// hoo = SSplitCopy.replace('s',45)
// hoo = SSplitCopy.replace('t',46)
// hoo = SSplitCopy.replace('u',47)
// hoo = SSplitCopy.replace('v',48)
// hoo = SSplitCopy.replace('w',49)
// hoo = SSplitCopy.replace('x',50)
// hoo = SSplitCopy.replace('y',51)
// hoo = SSplitCopy.replace('z',52)
//     return hoo;
//     let test = hoo.split("").map((v)=> {
//         if(v < 27) {
//             return (v+n) % 26;
//         } else {
//             return (v+n) % 52;
//         }
//     });
//     return test
// }


// split하고. 

// 각각의 문자마다 번호를 부여한다.
// 문자열을 split 한다음 모두 번호로 바꿔준다.
// 그 번호에 미는 만큼을 더해준다. // 부여한 숫자를 초과해버리면 나머지를 이용해서 초기화하면 되지! % 53   