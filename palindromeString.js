const str = 'hello';

const reduce = () => {
  const res =   str.split('').reduce((rev, char) => char + rev, '');
 
  return  res === str
}

console.log(reduce())



//method 2, this also works if the input is a string

const method2 = ()=>{
    const res = str.split('').reverse().join('')
    return res
}



//method 3 if the input is a number (most recommended)

let x = 78987

const palindrome = () => {
    let rev=0
    let temp = x
    
    while(temp != 0){
        let remainder = temp%10;
        rev = rev*10 + remainder;
        temp= Math.floor(temp / 10)
        
    }
    console.log(rev)
    return (rev == x)
}


const result = palindrome()
console.log(result)


//method 4 convert the  number insto string and compare both (less recommended)

let x2 = 78987

const palindrome2 = () => {
    const res = x2.toString().split(' ').reverse().join(' ')
    console.log(res)
    
    return res === x2.toString()
}


const result2 = palindrome2()
console.log(result2)