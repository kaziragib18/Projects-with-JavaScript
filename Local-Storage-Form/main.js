// Variables
const tweetList = document.getElementById('tweet-list');


// Event Listeners
eventListeners();

function eventListeners() {
     // Form Submission
     document.querySelector('#form').addEventListener('submit', newTweet);

     // Remove tweet from the list
     tweetList.addEventListener('click', removeTweet);

     // Document
     document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

