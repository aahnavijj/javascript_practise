const str = 'swiss';
let obj = {}

const firstRepeatingChar = ()=>{
    for(let i = 0; i<str.length; i++){
        if(str[i] in obj ){
            obj[str[i]] += 1
            
        }else{
            obj[str[i]]=1
        }
    }
    
    return obj
    
}


firstRepeatingChar()
const firstOccurance = Object.keys(obj).find(item=>obj[item]=== 1)
console.log(firstOccurance)
