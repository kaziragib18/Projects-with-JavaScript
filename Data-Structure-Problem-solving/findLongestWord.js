function findLongestWord(str) {
  var words = str.split(" ");

  console.log(words);

  var longest = "";

  // for(var i = 0; i < words.length; i++){
  //   console.log(words[i])
  // }
  //this loop goes over the indexes

  for (var word of words) {
    if (word.length > longest.length) longest = word;
    //this loop goes over the element
  }
  return longest;

  //return longest.length; for finding the length of the longest word
}

findLongestWord("Someday world will be a better place and everything will be at peace")


//method 2 with js library

function findLongestWord2(str) {
  //split to convert it to array
  //here sort method will sort array of string in decending order longest to smallest 
  return str.split(" ").sort(function (a, b) {
    return b.length - a.length
  })[0]
}
findLongestWord2("Someday world will be a better place and everything will be at peace")

