const arr =[3, 1, 7, 5, 9]
let min = arr[0];
let max = arr[0]
const sort = () => {
  for (let i= 1; i<arr.length; i++){
      if(arr[i]<min){
          min=arr[i]
      }
      if(arr[i]>max){
          max=arr[i]
      }
  }
  return{ min,max}
}




console.log(sort())