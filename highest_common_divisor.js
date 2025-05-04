const num1 = 15;
const num2 = 12;
console.log(num1%1)
    let large = 1;
    let res = [];
const calc = () => {
    const smaller = Math.min(num1, num2)

    for(let i=1; i<smaller; i++){
        if(num1%i === 0 && num2%i === 0){
          res.push(i);
        if(i>large){
            large = i
        }  
        }
      
       
    }
    return large 
}


console.log(calc())
console.log(res, "res here")



//optimal solution (Euclidean algorithm)
let a = 15;
let b = 12;
const cal = (a,b)=>{
    if(b === 0){
        return a
    }else{
        return cal(b, a%b)
    }
   
}


console.log(cal(a,b))



