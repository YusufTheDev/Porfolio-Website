//Yusuf Khan 400565596
//April 03, 2025
//This javascript file validates the form inputs for name and email address.

window.addEventListener('load', function() {
    let form = document.getElementById('submitform');
    form.addEventListener('submit', function(event) {
        let error = document.getElementById('error');
        error.textContent = "";
        error.style.display = "none";

        let email = form.email.value.trim();
        let nameInput = form.name.value.trim();

        // Validate Name
        if (nameInput === "") {
            event.preventDefault();
            error.textContent = "Name cannot be empty.";
            error.style.display = 'block';
            return;
        }

        // Validate Email - Basic Structure
        if (!email.includes('@') || !email.includes('.')) { 
            event.preventDefault();
            error.textContent = "Your email address must contain an '@' and a '.'.";
            error.style.display = 'block';
            return;
        }

        // Prevent Spaces in Email
        if (email.includes(' ')) {
            event.preventDefault();
            error.textContent = "Email address cannot contain spaces.";
            error.style.display = 'block';
            return;
        }

        // Extract Email Parts
        let emailParts = email.split('@');
        if (emailParts.length !== 2) {
            event.preventDefault();
            error.textContent = "Invalid email format.";
            error.style.display = 'block';
            return;
        }

        let emailname = emailParts[0];
        let temp = emailParts[1];
        let tempParts = temp.split('.');

        // Ensure valid domain structure
        if (tempParts.length < 2) {
            event.preventDefault();
            error.textContent = "The email address must contain a top-level domain (after the last .).";
            error.style.display = 'block';
            return;
        }

        let domain = tempParts[0];
        let tld = tempParts[1];

        // Validate Each Part
        if (emailname === '') {
            event.preventDefault();
            error.textContent = "The email address must contain a name (before @).";
            error.style.display = 'block';
        } else if (domain === '') {
            event.preventDefault();
            error.textContent = "The email address must contain a domain (between @ and .).";
            error.style.display = 'block';
        } else if (tld === '') {
            event.preventDefault();
            error.textContent = "The email address must contain a top-level domain (after the last .).";
            error.style.display = 'block';
        } else {
            error.style.display = 'none';
        }
    });
});
