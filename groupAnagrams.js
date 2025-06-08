const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//[["eat","tea","ate"], ["tan","nat"], ["bat"]]

const anagramGroups = (strs) => {
    let map = {}
    
    for(let i=0; i<strs.length; i++){
        const sorted = strs[i].split('').sort().join('')
        console.log(sorted)
        if(!map[sorted]){
            map[sorted] = []
        }
        map[sorted].push(strs[i])
    }
    console.log(map)
    return map
    
}

const result = anagramGroups(strs)
console.log(result)
const value = Object.values(result)
console.log(value)