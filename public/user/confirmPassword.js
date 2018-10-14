

window.onload = function() {

    const password = document.getElementById("password")
    const confirm_password = document.getElementById("confirm_password");

    function validatePassword() {

        if (password.value != confirm_password.value) {

            confirm_password.classList.add("is-invalid");
            confirm_password.setCustomValidity("Passwords don't match, please try again");

        } else {

            confirm_password.classList.remove("is-invalid");
            confirm_password.setCustomValidity('');
        };
    };

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

};
