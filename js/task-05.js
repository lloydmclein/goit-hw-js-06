const inPut = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

inPut.addEventListener('input', () => {
    outPut.textContent = inPut.value ? inPut.value : 'Anonymus';
});