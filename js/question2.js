const container = document.querySelector('.game-container');
const url = 'https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating';

const loader = document.querySelector('.loader');

loader.innerHTML += `<p class="loader-text"> Game list is loading.. </p>`;

async function gameInfo() {
  try {
    const repsonse = await fetch(url);
    const json = await repsonse.json();
    const gameFacts = json.results;

    loader.innerHTML = '';

    for (let i = 0; i < gameFacts.length; i++) {
      container.innerHTML += `<a href="question3.html?id=${gameFacts[i].id}"    class="card">
                              <div class="game-image" style="background-image: url('${gameFacts[i].background_image}')"></div>
                              <div class="card-details"><h4>${gameFacts[i].name}</h4>
                              <p>Rating: ${gameFacts[i].rating}</p>
                              </div>
                              </a>`;
    }
  } catch (error) {
    container.innerHTML = errorHandler('An error have occured with the API');
  }
}

gameInfo();
