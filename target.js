const nums = [2,7,11,15]
const target = 9
let indices = []

const sumToTarget = (nums) => {
  const numMap = {}; // key: number, value: index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
    console.log(numMap)
  }
}
console.log(sumToTarget(nums))