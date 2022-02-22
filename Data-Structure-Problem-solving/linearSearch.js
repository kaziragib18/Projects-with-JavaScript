//input: linearSearch(['a','b','c', 'd', 'c'], 'c')
//output: 2 or 'not found!'
//problem: implement this linearSearch() function

// solve: steps
// function takes two parameters array and value
//interate every elemnt in array using loop

function linearSearch(array, value) {

  const length = array.length //make the array length fixed to optimize performance because array.length only calcutate one time in loop 
  for (let i = 0; i < length; i++) {
    if (array[i] === value) {
      //if array's current element equal to value that means it matches then we return 
      return i;
    }
    return "not found";
  }
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));