// script.js
function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation for demo purposes
    if (username === "Wasay" && password === "dash") {
        // Redirect to a dashboard or perform other actions upon successful login
        alert("Login successful!");
        errorMessage.textContent = "";
        window.location.href = "board.html"; // Redirect to a dashboard page
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
}
