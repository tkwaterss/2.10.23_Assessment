const button = document.querySelector('button');
const restaurants = document.querySelectorAll('.restaurants');

const randomRestaurant = event => {
    let suggest = document.createElement('h3');
    suggest.textContent = restaurants[Math.floor(Math.random() * restaurants.length)].outerText
    document.querySelector('footer').appendChild(suggest);
}

const changeColor = event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
}
const reverseColor = event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black'
}

button.addEventListener('click', randomRestaurant);
button.addEventListener('mouseover', changeColor);
button.addEventListener('mouseout', reverseColor);

