func solution(_ s:String) -> String {
    
    var sArr : [String] = []
    var count = 0

    for i in s {
        let i = String(i)
        
        if (i == " ") {
            sArr.append(" ")
            count = 0
            continue;
        }
        
        // 맨처음
        // 홀수번째
        // 짝수번째
        if (count == 0) {
            sArr.append(i.uppercased())
        } else if (count % 2 == 1) {
            sArr.append(i.lowercased())
        } else if (count % 2 == 0) {
            sArr.append(i.uppercased())
        }
        
        count += 1
    }
    return sArr.joined(separator:"")
}




// func solution(_ s:String) -> String {
//     var sArr = s.components(separatedBy:" ")
//     var resultArr : [String] = []
//     var count = 0
//     var preJ = "imsi"
//     var count2 = 0
    
//     //첫 문자를 일단 대문자로
    
//     for i in sArr {
//         var i = String(i)
        
//             var a = i[i.startIndex].uppercased()
//             resultArr.append(a)
//             preJ = a
        
//         for j in i {
//             var j = String(j)

//             // 맨 처음만 넘기기
//             if (count == 0) {
//                 count += 1
//                 continue;
//             }
//             // 첫번째 넘기기로는 해결할 수 없어서 두 번째 이후 넘기기를 따로 만들었음. count2는 이 반복문이 끝나고 나서 초기화 되기에 무한반복을 방지할 수 있음.
//             if (resultArr.count > 2 && count2 == 0 && resultArr.suffix(2)[resultArr.suffix(2).startIndex] == " ") {
//                 count2 += 1
//                 continue;
//             }
            
            
            
//             if (preJ != preJ.uppercased()) {
//                 resultArr.append(j.uppercased())
//                 preJ = j.uppercased()
//             } else {
//                 resultArr.append(j.lowercased())
//                 preJ = j.lowercased()
//             }
//         }
//         resultArr.append(" ")
//         count2 = 0
//     }
    
//     resultArr.removeLast()
//     return resultArr.joined(separator:"")
    
// }

// // 1. 공백으로 문자열 분리
// // 2. 분리된 문자열 당 배열에 구분해서 넣는다.
// // 2-1 반복문을 하나 더 만들어서 끝날때마다 공백으로 나눈다. 