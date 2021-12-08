const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ourUlel = document.querySelector('#ingredients');
const ItemIngredientsEl = ingredients
  .map(ingredient => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add('item');
    ingredientsEl.textContent = `${ingredient}`;
  return ingredientsEl;
  })
  ;

ourUlel.append(...ItemIngredientsEl);
console.log(ourUlel);