const strs = ["dog", "racecar", "car"]
let prefix = strs[0]

const longestPrefix = ()=> {
    for(let i = 1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,prefix.length-1);
            if (prefix === "") return ""; 
        }
        
    }
   
    return prefix;

}

console.log(longestPrefix())