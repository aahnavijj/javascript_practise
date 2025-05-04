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

//two pointer approach
let arr3 = [1, 2, 2, 3, 4, 4];



let left = 0;
const removeDuplicate = (arr) => {
for(let i = 1; i<arr.length; i++){
if(arr[left] !== arr[i]){
left++;
arr[left] = arr[i]
}


}
return arr.slice(0, left+1)
}

console.log(removeDuplicate(arr3))