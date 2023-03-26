const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = validationInput.dataset.length;
  const inputLength = validationInput.value.length;
  
    if (inputLength === +expectedLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
  }
    
     
});


