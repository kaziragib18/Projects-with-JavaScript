//find the longest string in array and its index

function findLongestString(names) {

  let longestName = '';

  for (var name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
    //this loop goes over the element
  }
  return [longestName, names.indexOf(longestName)]
}
console.log(findLongestString(['Kazi Ragib', 'Sabit Ali', 'Raisa Taraman Shathi', 'Fairooz Shaira']));