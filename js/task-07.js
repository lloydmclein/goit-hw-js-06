const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.value = 16;

input.addEventListener('input', () => {
    text.style.fontSize = `${input.value}px`
});
