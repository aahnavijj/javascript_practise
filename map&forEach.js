//difference between map and foreach

let arr = [1, 2, 2, 3, 4, 4];



const mapResult=()=>{

const result = arr.map((item)=>item+2)
return result

}

const EachResult=()=>{
const res2 = arr.forEach((item, i)=>{
return arr[i] =  item+2
})
return res2

}


console.log(mapResult())
console.log(EachResult())
console.log(arr)