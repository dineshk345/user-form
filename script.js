document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const userName = document.getElementById('userName').value;
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Display welcome message
    welcomeMessage.textContent = `Welcome, ${userName}!`;
    
    // Clear the input field
    document.getElementById('userName').value = '';
});
