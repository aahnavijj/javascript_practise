//find the missing number/element in the array
const arr = [1, 2, 3, 5]


const length = arr.length + 1;
const sum = length * (length+1)/2;
console.log(sum);
const arrSum = arr.reduce((acc, item)=>(acc+item), 0);
console.log(arrSum)
const missingNum = sum-arrSum
console.log(missingNum)