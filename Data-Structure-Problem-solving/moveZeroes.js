// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }
};

// TC: 0(n)
// SC: 0(1)