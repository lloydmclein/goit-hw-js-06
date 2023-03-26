function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');



let createBoxes = amount => {

  let size = 30;
 
    for (let i = 0; i <= amount; i++){
      const box = document.createElement('div');
      const color = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;
      boxes.appendChild(box);
      size += 10;

    }

}

createBtn.addEventListener('click', () => { 
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
