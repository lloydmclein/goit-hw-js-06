const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');



const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}


let createBoxes = amount => {

  let size = 30;
  let boxStyle = "";
 
  for (let i = 0; i < amount; i++){
   
    let color = getRandomHexColor();
        boxStyle +=
        `<div style="width: ${size}px;
                     height: ${size}px; 
                     background-color: ${color};"></div>`
   
      size += 10; 
  }
     boxes.insertAdjacentHTML("afterbegin", boxStyle);
}

createBtn.addEventListener('click', () => { 
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
