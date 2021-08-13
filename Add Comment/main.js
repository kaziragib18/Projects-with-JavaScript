//1 add button event handler
document.getElementById('submit-comment').addEventListener('click', function () {

    //2 get user comment
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;

    //3 Create comment paragraph  
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    //4 append the comment
    const CommentContainer = document.getElementById('comment-container');
    CommentContainer.appendChild(newComment);

    //5 clean text area
    commentBox.value = '';
})