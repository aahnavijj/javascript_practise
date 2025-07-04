const str = "hello";
const stack = []
let reversed = ''
const reverseStr = (str) => {
    for(let i=0; i<str.length; i++){
        stack.push(str[i])
    }
    while(stack.length !==0){
        reversed += stack.pop()
        
    }
    
    return reversed
    
}

console.log(reverseStr(str))