document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login .button .login-1');
    const createAccountButton = document.querySelector('.login .button-1 .create-account-1');

    loginButton.addEventListener('click', function() {
        // Handle login button click event
        alert('Login button clicked!');
    });

    createAccountButton.addEventListener('click', function() {
        // Handle create account button click event
        alert('Create Account button clicked!');
    });
});
