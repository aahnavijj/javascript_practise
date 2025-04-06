//two pointer approach

var removeDuplicates = function(nums) {
    let left = 0;
    for(i = 1; i <nums.length; i++){
        if(nums[left] !== nums[i]){
            left++;
            nums[left]= nums[i]
        }
    }
    return left+1
    
};