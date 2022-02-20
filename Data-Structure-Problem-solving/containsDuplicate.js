// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true
//solve one
function containsDuplicate(nums) {
  //create memory
  //go through arrary & see if what i see now, is somthing i see before 
  //if my number is never seen before put in memory
  //if my number is does exists memory, return true

  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = 'does not have duplicates';
    } else {
      return true;
    }
  }
  return false;

};
containsDuplicate();

//time complexity : O(n)
//space complexity : O(n)


//solve two
//[1,1,2,3]
//sort our input array (O nlogn)
function containsDuplicate2(nums) {
  nums.sort((a, b) => { return b - a });
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i])
      return true;
  }
  return false;
}
containsDuplicate2();


//solve 3
// using Set()
function containsDuplicate3(nums) {
  let numbers = new Set();
  for (let num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num)
    } else {
      return true;
    }
  }
  return false;
}