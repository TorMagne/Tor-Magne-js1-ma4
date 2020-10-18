const gameDetails = document.querySelector('.game-details');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url = 'https://api.rawg.io/api/games/' + id;

const loader = document.querySelector('.loader');

loader.innerHTML += `<p class="loader-text"> Game list is loading.. </p>`;

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    loader.innerHTML = '';

    createHtml(details);
  } catch (error) {
    gameDetails.innerHTML = errorHandler('An error have occured with the API');
  }
}

fetchDetails();

function createHtml(details) {
  gameDetails.innerHTML = `<h1>${details.name}</h1>
                           <div class="game-image"
                           style="background-image: url('${details.background_image}')"></div>
                           <div class="game-description"> ${details.description}</div>
                           <time class="game-date">Released: ${details.released}</time>`;
}
