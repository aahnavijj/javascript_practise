const nums = [1, 2, 3, 4, 5, 6, 7]


const target = 3

const rotateArray = (nums, target) => {
    const rotate1 = nums.slice(0,target+1)
    console.log(rotate1)
    const rotate2 = nums.slice(target+1)
    console.log(rotate2)
    const response = [...rotate2, ...rotate1]
    console.log(response)
    
}

rotateArray(nums, target)