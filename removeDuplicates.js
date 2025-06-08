//two pointer approach
//[1,2,2,3,4]
//works for sorted array
var removeDuplicates = function(nums) {
    arr3.sort((a, b) => a - b); 
    let left = 0;
    for(i = 1; i <nums.length; i++){
        if(nums[left] !== nums[i]){
            left++;
            nums[left]= nums[i]
        }
    }
    return left+1
    
};