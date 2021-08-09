// Show first name of the array that has a length of 5 in output as string 

let arr = ["kazi", 'Ragib', "Mustafa", "Suva", "Fahim", "Abdullah", "Shithi"]
function perfectFriend(friend) {
	if (arr.length == 0) {
		output = "Please enter at least one name";
		return output;
	}
	else {
		for (var i = 0; i < friend.length; i++) {
			if (friend[i].length === 5) {
				return friend[i];
			}
		}
	}
}
console.log(perfectFriend(arr));
	