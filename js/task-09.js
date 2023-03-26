let getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector('.color');
const magicBtn = document.querySelector('.change-color');
magicBtn.addEventListener('click', () => {
  
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorName.textContent;
  
});

