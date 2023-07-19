// Get the elements from the document
var registerForm = document.getElementById("register-form");
var registerEmail = document.getElementById("register-email");
var registerPassword = document.getElementById("register-password");
var registerButton = document.getElementById("register-button");
var registerMessage = document.getElementById("register-message");

var loginForm = document.getElementById("login-form");
var loginEmail = document.getElementById("login-email");
var loginPassword = document.getElementById("login-password");
var loginButton = document.getElementById("login-button");
var loginMessage = document.getElementById("login-message");

// Define a function to register a user
function registerUser() {
    
    // Get the email and password from the input fields
    var email = registerEmail.value;
    var password = registerPassword.value;

    // Check if the email and password are not empty
    if (email && password) {

        // Check if the email is already registered in the local storage
        if (localStorage.getItem(email)) {

            // Display an error message
            registerMessage.textContent = "This email is already registered.";
            registerMessage.classList.add("error");
            registerMessage.classList.remove("success");

        } else {

            // Store the email and password in the local storage
            localStorage.setItem(email, password);

            // Display a success message
            registerMessage.textContent = "You have successfully registered.";
            registerMessage.classList.add("success");
            registerMessage.classList.remove("error");

            // Clear the input fields
            registerEmail.value = "";
            registerPassword.value = "";
        }
        
    } else {

        // Display an error message
        registerMessage.textContent = "Please enter a valid email and password.";
        registerMessage.classList.add("error");
        registerMessage.classList.remove("success");
        
    }
    
}

// Define a function to login a user
function loginUser() {

     // Get the email and password from the input fields
     var email = loginEmail.value;
     var password = loginPassword.value;

     // Check if the email and password are not empty
     if (email && password) {

         // Check if the email is registered in the local storage
         if (localStorage.getItem(email)) {

             // Check if the password matches the stored password
             if (localStorage.getItem(email) === password) {

                 // Display a success message
                 loginMessage.textContent = "You have successfully logged in.";
                 loginMessage.classList.add("success");
                 loginMessage.classList.remove("error");

                 // Clear the input fields
                 loginEmail.value = "";
                 loginPassword.value = "";

                 // Redirect to the dashboard page with the email as a query parameter
                 window.location.href = "dashboard.html?email=" + email;

             } else {

                 // Display an error message
                 loginMessage.textContent = "Incorrect password.";
                 loginMessage.classList.add("error");
                 loginMessage.classList.remove("success");

             }

         } else {

             // Display an error message
             loginMessage.textContent = "This email is not registered.";
             loginMessage.classList.add("error");
             loginMessage.classList.remove("success");

         }

     } else {

         // Display an error message
         loginMessage.textContent = "Please enter a valid email and password.";
         loginMessage.classList.add("error");
         loginMessage.classList.remove("success");

     }

}

// Add event listeners to the buttons
registerButton.addEventListener("click", registerUser);
loginButton.addEventListener("click", loginUser);
