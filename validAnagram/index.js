function isAnagram(s,t){
    if(s.length !== t.length){
        return false
    }
    let sortedWord1 = s.split('').sort.join('')
    let sortedWord2 = t.split('').sort.join('')

    return sortedWord1 === sortedWord2
}