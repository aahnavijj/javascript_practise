const str = "(a+b)*(c+d)";
const obj = {
    ")": "(",
    "]": "[",
    "}": "{"
    
}
const newArr = []


const balancedParanthesis = (str)=>{
    for(let i=0; i<str.length; i++){
        if(('([{').includes(str[i])){
            newArr.push(str[i])
        }else if((')]}').includes(str[i])){
           if (newArr.pop() !== obj[str[i]]) return false
            
        }
    }
    return newArr.length === 0
    
}

console.log(balancedParanthesis(str))