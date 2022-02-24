// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

var findDuplicates = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let element = Math.abs(nums[i] - 1);
    let value = nums[element];
    if (value < 0) {
      result.push(Math.abs(nums[1]));
    } else {
      nums[element] = -nums[element]
    }

  }
  return result;
}