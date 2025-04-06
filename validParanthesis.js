const string = "({[]})";
let mapping = { ')': '(', '}': '{', ']': '[' }; // Closing to Opening match
 let stack = [];

const checkValidString = () => {
    for (let char of string){
       
        if(char in mapping){
            if(stack.length>0 && mapping[char] === stack[stack.length-1]){
                stack.pop()
            }else{
                return false;
            }
        }else{
            stack.push(char)
        }
    }
    return stack.length === 0
    
}

console.log(checkValidString())