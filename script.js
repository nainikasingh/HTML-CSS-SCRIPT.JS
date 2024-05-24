document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registrationForm = document.getElementById("registration-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;
        // Implement login functionality here
        console.log("Logging in with email:", email, "and password:", password);
        // Example: You can send a request to your backend for authentication
    });

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("registration-name").value;
        const email = document.getElementById("registration-email").value;
        const phone = document.getElementById("registration-phone").value;
        const password = document.getElementById("registration-password").value;
        // Implement registration functionality here
        console.log("Registering with name:", name, "email:", email, "phone:", phone, "and password:", password);
        // Example: You can send a request to your backend to create a new user
    });
});
