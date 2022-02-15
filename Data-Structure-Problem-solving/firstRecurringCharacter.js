//Brute force

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) input.length = j;
    }
  }
  return input[input.length]
} //0(n^2)

firstRecurringCharacter([2, 5, 1, 4, 5, 3, 2, 4])


//hash table
function firstRecurringCharacter2(input) {
  let hmap = {};
  for (let i = 0; i < input.length; i++) { // loop through items put it in the map
    if (hmap[input[i]] !== undefined) {
      //as soon as found existing key in map return
      return input[i]
    } else {
      hmap[input[i]] = i
    }
    console.log(hmap);
  }
  return undefined;
} //O(n)
//space complexity increased to O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])
