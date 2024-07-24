const loginForm = document.querySelector(".login-form");
function loginFormEl(event) {
    event.preventDefault();
    const formLogin = {
        email: loginForm.elements.email.value.trim(),
        password: loginForm.elements.password.value.trim(),
    };

    if (formLogin.email === "" || formLogin.password === "") {
    alert("All form fields must be filled in");
    }
    
    console.log(formLogin)
    loginForm.reset();
}

loginForm.addEventListener("submit", loginFormEl);
