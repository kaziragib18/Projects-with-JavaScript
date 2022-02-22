//count the number of same word used in a sentence
// find the position of that word where it found first

//we can use regular expression to the  match() string method

const sentence = "learn to code, it will always a great idea to learn new technology and to becme a great coder you must learn the basics"

const matches = sentence.match(/learn/gi); // i flag for case insensitive //g flag is global for finding all the matching word not just the first

//const occurances = matches.length; //find how many time i found the same word
const occurances = matches ? matches.length : 0;

console.log(occurances); // 3

//we need to find the word "learn" when it is found first in what postion
//we can use string method search() to find the position

let position = sentence.search(/learn/i);

position = position >= 0 ? position : "not found";
//if posion is positive or its not found

console.log(position);