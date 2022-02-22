//remove falsy value from array

const mixedArr = [
  "kazi",
  undefined,
  "React Developer",
  false,
  "Node js Developer",
  "",
  "Anime",
  40,
  "Cooking",
  true,
  "Movie",
  NaN
];

//falsy value : false, undefined, '', NaN, 0 

// const trueArray = mixedArr.filter(Boolean)
//simple way to use only the Boolean function which cheack the element is true or false

const trueArray = mixedArr.filter(function (element) {
  //we can use filter method
  //we have to give a function in filter method
  //the function will go through all elements
  if (element) {
    return true;
  } else {
    return false
  }

})

console.log(trueArray);


//Remove falsy value from object

const obj = {
  a: "kazi",
  b: undefined,
  c: "React Developer",
  d: false,
  e: "Node js Developer",
  f: "",
  g: "Anime",
  h: 40,
  i: "Cooking",
  j: true,
  k: "Movie",
  l: NaN
};

const truthyobject = function (obj) {
  for (let i in obj) {
    if (!obj[i]) { //access the property of object [i]
      //if object elemnt is falsy delete the element
      delete obj[i] //delete current element
    }
  }
  return obj;
}

console.log(truthyobject(obj));