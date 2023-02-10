const button = document.querySelector('button');
const restaurants = document.querySelectorAll('.restaurants');

const randomRestaurant = event => {
    let suggest = document.createElement('h3');
    suggest.textContent = restaurants[Math.floor(Math.random() * restaurants.length)].outerText
    document.querySelector('footer').appendChild(suggest);
}

button.addEventListener('click', randomRestaurant);