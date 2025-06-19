const s = "abcb"
const res = new Set();
let maxLen = 0
let left = 0
let longestSubstring = ''

const longestSubStr = (s) => {
    for(let i =0; i<s.length; i++){
        while(res.has(s[i])){
            res.delete(s[left])
            console.log(res, "inside delte")
            left++
            
        }
        console.log(res)
        res.add(s[i])
        console.log(res, "after ")
        
        if(i-left+1 > maxLen){
             maxLen = Math.max(maxLen, i - left + 1);
             longestSubstring = s.slice(left, i + 1);

        }
       

    }
    return {maxLen, longestSubstring}
    
    
    
}

console.log(longestSubStr(s).longestSubstring)
