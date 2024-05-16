function isUnique(string) {
    let storage = {};
    for (let i = 0; i < string.length; i++) {
        if (storage[string[i]]) {
            return false
        }
        storage[string[i]] = 1
    }
    return true
}

console.log(isUnique('asdfaasdfasfda'))