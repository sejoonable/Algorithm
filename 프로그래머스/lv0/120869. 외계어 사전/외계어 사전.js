function solution(spell, dic) {
    spell = spell.sort().join("")
    
    for (let i = 0; i < dic.length; i++) {
        dic[i] = dic[i].split("").sort().join("")
    }
    
    if (dic.includes(spell)) {
        return 1
    } else {
        return 2
    }
    
}

// 일단, spell을 정렬하고 join한다.
// dic도 각각을 정렬한다.
// 각각이 spell을 포함하고 있으면 return 1 마지막까지 없으면 return 2