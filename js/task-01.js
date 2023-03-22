const categoriesList = document.querySelectorAll("#categories > .item");
const numberOfCategories = categoriesList.length;

console.log(`Number of categories : ${numberOfCategories}`);

categoriesList.forEach((category) => {
    const header = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('ul>li').length;
  
    console.log(`Category: ${header}`);
    console.log(`Elements: ${elements}`);
});