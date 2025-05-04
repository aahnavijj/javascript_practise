const arr = [1, [2, [3, 4]], 5]
let res = []

const flatenArr = (arr) => {
 arr.map((item)=>{
     if(Array.isArray(item)){
         return flatenArr(item)
     }else{
        res.push(item)
     }
 })
    
}

flatenArr(arr)
console.log(res)