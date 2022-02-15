//Generate  Random number without using Math.random() library function from 2-digit random number sequence

var seed = 42; 
function middleSquareMethod(){
    var result = (seed * seed).toString().padStart(4,"0").slice(1,3); // extracting middle value
    seed = parseInt(result);
    return parseInt(result);
}