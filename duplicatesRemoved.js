const arr = [1, 2, 2, 3, 4, 4, 5]
const duplicatesRemoved = () =>{
    return [...new Set(arr)];
}

console.log(duplicatesRemoved())




//another way of doing it 
const arr2 = [1, 2, 2, 3, 4, 4, 5]
const duplicatesRemoved2 = [];

for(let i = 0; i<arr2.length; i++){
    if(!duplicatesRemoved2.includes(arr[i])){
        duplicatesRemoved2.push(arr[i])
    }
}

console.log(duplicatesRemoved2)