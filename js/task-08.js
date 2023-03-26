
const loginForm = document.querySelector('.login-form');

console.log(loginForm.elements.email);
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent page reload

    const email = loginForm.elements.email;
    const password = loginForm.elements.password;

    if (!email.value || !password.value) {
        alert('All fields must be filled in');
        return;
    }
   
    const formData = {
        email: email.value,
        password: password.value,
    };

    console.log(formData);
    loginForm.reset();

    });