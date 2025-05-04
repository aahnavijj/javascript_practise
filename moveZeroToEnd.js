function moveZeros(nums) {
    let insertPos = 0;
  
    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[insertPos] = nums[i];
        insertPos++;
      }
      
    }
   
  console.log(insertPos)
  while(insertPos < nums.length){
      nums[insertPos] = 0;
      insertPos++
  }
    // Fill the rest with zeros
   
  
    return nums; // Optional: modifies in place, but returning for convenience
  }
  let nums = [0, 1, 0, 3, 12];
  console.log(moveZeros(nums)); 
  