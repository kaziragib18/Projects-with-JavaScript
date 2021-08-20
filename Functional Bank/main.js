// User email
document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'xyz@gmail.com' && userPassword == 'secret'){
        window.location.href ='banking.html';
    }
    else{
        const errorMessage = document.getElementById('error-message')
        errorMessage.style.display = 'block';
    }
})