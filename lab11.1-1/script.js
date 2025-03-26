/**
 * A simple password validation using Fetch API with POST parameters.
 * 
 * Sam Scott, McMaster University, 2025
 */
window.addEventListener("load", function() {

    /**
     * This function handles the response after the AJAX call is complete.
     * It updates the UI based on the server response.
     * @param {String} text 
     */
    function success(text) {
        let passwordInput = document.getElementById("password");
        let message = document.getElementById("message");

        // Re-enable the input field and remove the loading message
        passwordInput.disabled = false;
        passwordInput.focus(); // Set focus back to the input field
        message.textContent = "";

        if (text.trim() === "valid") {
            passwordInput.style.borderColor = "green";
            message.textContent = "Strong password!";
            message.style.color = "green";
        } else {
            passwordInput.style.borderColor = "red";
            message.textContent = text;
            message.style.color = "red";
        }
        
        console.log(text); // debug
    }

    let passwordInput = document.getElementById("password");

    passwordInput.addEventListener("input", function() {
        let password = passwordInput.value;
        let message = document.getElementById("message");

        // Disable the input field and show a loading message
        passwordInput.disabled = true;
        message.textContent = "Checking password...";
        message.style.color = "blue";

        // Construct the URL
        let url = "check_password.php";
        console.log(url); // debug

        // Do the fetch without FormData
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "password=" + encodeURIComponent(password)
        })
        .then(response => response.text())
        .then(success)
        .catch(error => {
            console.error("Error:", error);
            // Re-enable the input field and show an error message
            passwordInput.disabled = false;
            passwordInput.focus(); // Set focus back to the input field
            message.textContent = "An error occurred. Please try again.";
            message.style.color = "red";
        });
    });

});
