function largestName(friendNames){
    let maxName = "";
    let maxLength = friendNames[0].length;
    for(const name of friendNames){
        if(name.length > maxLength){
            maxLength = name.length;
            maxName = name;
        }
    }
    return (maxName);
}

let myBestFriends = ['Kazi Md. Ragib', 'Sabit Ali Khan', 'Raisa Taraman Shithi', 'Fairooz Shaira', 'Mainul Islam Fahim','Md. Hasan'];

let myMaxFriend = largestName(myBestFriends);
console.log(myMaxFriend);
