function validateForm(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username.trim() === '' || password.trim() === '') {
        displayErrorMessage('Username and password are required.');
        return;
    }

    
    if (username !== 'example_user' || password !== 'password123') {
        displayErrorMessage('Invalid username or password.');
        return;
    }

    
    const hashedPassword = hashPassword(password);
    

    
    window.location.href = 'dashboard.html';
}

function hashPassword(password) {
    return md5(password);
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}
