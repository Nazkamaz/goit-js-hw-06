const allCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategoriesEl.length}`);

allCategoriesEl.forEach(element => {
const getElementTitle = element.querySelector('h2');
const getElementItem = element.querySelectorAll('li');

console.log(`Category: ${getElementTitle.textContent}`);
console.log(`Elements: ${getElementItem.length}`);

});