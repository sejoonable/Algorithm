import Foundation

func solution(_ t:String, _ p:String) -> Int {
    var tArr : [String] = []
    var pArr : [String] = []
    
    
    for i in t {
        let i = String(i)
        tArr.append(i)
    }
    
    for i in p {
        let i = String(i)
        pArr.append(i)
    }
    
    var count = 0
    
    for i in 0...tArr.count - pArr.count {
        if (Int(tArr[i...i + pArr.count - 1].joined(separator:""))! <= Int(p)!) {
            count += 1
        }
    }
    
    
    return count
}