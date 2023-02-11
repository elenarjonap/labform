window.onload = function() {
  const userName = document.getElementById("username");
  const userNameError = document.getElementById("nameError");

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  const password = document.getElementById("password");
  const passwordError = document.getElementById("passError");

  const password2 = document.getElementById("password2");
  const confirmError = document.getElementById("confirmError");

  form.addEventListener("submit", e =>{
    e.preventDefault()
    
    let userNameValid = true;
    let emailValid = true;
    let passwordValid = true;
    let password2Valid = true;

    if (userName.value.length === 0) {
      userNameValid = false;
      userNameError.textContent = 'Rellene este campo';
      userName.classList.add("invalid");
      userName.classList.remove('valid');
    }
    if (email.value.length === 0) {
      emailValid = false;
      emailError.textContent = 'Rellene este campo';
      email.classList.add("invalid");
      email.classList.remove('valid');
    }
    if (password.value.length === 0) {
      passwordValid = false;
      passwordError.textContent = 'Rellene este campo';
      password.classList.add("invalid");
      password.classList.remove('valid');
    }
    if (password2.value.length === 0) {
      password2Valid = false;
      confirmError.textContent = 'Rellene este campo';
      password2.classList.add("invalid");
      password2.classList.remove('valid');
    }

    let regexUserName = /^[a-zA-Z]+$/;
    if (userNameValid && !regexUserName.test(userName.value)) {
      userNameValid = false;
      userNameError.textContent = 'El nombre de usuario solo puede contener letras';
      userName.classList.add("invalid");
      userName.classList.remove('valid');
    }

    let regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (emailValid && !regexEmail.test(email.value)) {
      emailValid = false;
      emailError.textContent = 'Email inválido';
      email.classList.add("invalid");
      email.classList.remove('valid');
    }

   if (passwordValid && password.value.length > 8) {
      passwordValid = false;
      passwordError.textContent = 'No debe tener más de 8 caracteres';
      password.classList.add("invalid");
      password.classList.remove('valid');
    }

    if (password2Valid && password.value !== password2.value) {
      password2Valid = false;
      confirmError.textContent = 'Las contraseñas no coinciden';
      password2.classList.add("invalid");
      password2.classList.remove('valid');
    }

    if (userNameValid) {
      userNameError.textContent = '';
      userName.classList.remove('invalid');
      userName.classList.add('valid');
    }
    if (emailValid) {
      emailError.textContent = '';
      email.classList.remove('invalid');
      email.classList.add('valid');
    }
    if (passwordValid) {
      passwordError.textContent = '';
      password.classList.remove('invalid');
      password.classList.add('valid');
    }
    if (password2Valid) {
      confirmError.textContent = '';
      password2.classList.remove('invalid');
      password2.classList.add('valid');
    }

    if (userNameValid && emailValid && passwordValid && password2Valid) {
      alert("La inscripcción ha sido correcta");
    }
  })
};

