window.addEventListener('load', function() {
    let form = document.getElementById('tipform');
    form.addEventListener('submit', function(event) {
        let email = form.emailaddress.value;
        let confirmemail = form.confirmemailaddress.value;
        let errorMessage = document.getElementById('error-message');

        if (email != confirmemail) {
            event.preventDefault();
            errorMessage.textContent = "Email addresses do not match.";
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });
});