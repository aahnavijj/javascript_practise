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
let num11 = 15;
let num22 = 12;
const cal = ()=>{
   while(num11!= num22){
    if(num11>num22){
        num11 = num11-num22
    }else{
        num22 = num22 - num11
    }
}
return num11
}


console.log(cal())