const arr = [100, 4, 200, 1, 3, 2]
const map = new Set(arr)
let max = 0
let longestSeq = []

const arrayCalc = (map) => {
   
     for (let num of map) {
   
        if(!map.has(num-1)){
           
                 let count = 1
                 let tempSeq = [num];
                 
            let currentNo =num;
            while(map.has(currentNo+1)){
                currentNo+=1
                count++
               tempSeq.push(currentNo)
                
            }
            
       
            if(max<count){
                max = count;
                longestSeq = tempSeq
                
            }
            
        }
        
    
        
    }
        return {max, longestSeq}
    
}


console.log(arrayCalc(map).longestSeq)

console.log(arrayCalc(map).max)