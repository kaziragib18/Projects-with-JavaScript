// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


// brute force solution:
// generate all possible substrings then check to see whether or not they have repeating Characters nad find which one is the longest one

// time complexity: O(n)^3

var lengthOfLongestSubstring = function (s) {
  //nested for loops to compute all of the substring in the string // O(n^2)
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.substring(i, j + 1)
      // console.log(substring); // generate all possible substrings 
      if (checkUnique(substring)) {
        //record length in variable max

        // if (substring.length > max) {
        //   max = substring.length;
        // }

        //update max only if substring.length is greater than current max value
        max = Math.max(max, substring.length);
      }
    }
  }
  return max;
};

const checkUnique = (s) => {
  //to keep track of what character are contain in my string
  const set = new Set()
  for (let i = 0; i < s.length; i++) {

    //if char is see in the set before
    if (set.has(s[i])) {
      return false;
    }
    //loop through aall char & each step add each char in the set
    set.add(s[i])

  }
  return true;
}

//Hashmap solution:
//time complexity : O(n)
//space is constant time
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let i = 0;
  let map = {}

  for (let j = 0; j < s.length; j++) {
    //2. check if i seen before then repeating char needs to be located to grater or equal to my begining index
    if (map[s[j]] != undefined && map[s[j]] >= i) {
      //3. update starting point and exclude begining char
      i = map[s[j]] + 1
    }
    //1. record which char i have seen
    map[s[j]] = j
    // console.log(s[j], ":", map)

    //4. update my maximum length
    max = Math.max(max, j - i + 1)
  }
  return max;
};


//Set solution: Sliding window algorithm
//time complexity : O(n)
//space is constant time
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let i = 0;
  let set = new Set()

  for (let j = 0; j < s.length; j++) {

    while (set.has(s[j])) {
      set.delete(s[i])
      i++;
      //while loop will end after deleting the intial repeating char 
    }
    //1. instead of recording char in a map record in a set
    set.add[s[j]]
    // console.log(s[j], ":", set)
    max = Math.max(max, j - i + 1)
    console.log(s.substring(i, j + 1), ":", set);
  }
  return max;
};
