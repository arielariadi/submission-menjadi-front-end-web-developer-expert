import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import restoCardTemplate from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
        <div id="loadingIndicator" class="loading-indicator">Loading...</div>
        <div id="errorMessage" class="error-message" style="display: none;">An error occurred while loading data.</div>
        <main id="mainContent">
            <section class="content">
                <h2 class="favorite-restaurant-text">My Favorite Restaurants</h2>
                <article id="cardContainer" class="explore-restaurant-content">
                </article>
                <div class="no-favorite-container">
                    <p id="noFavoriteMessage" class="no-favorite-message"></p>
                    <a href="#" class="favorite-restaurant-button"></a>
                </div>
            </section>
        </main>
        `;
  },

  async afterRender() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');
    const restaurantsContainer = document.querySelector('#cardContainer');
    const noFavoriteMessage = document.querySelector('#noFavoriteMessage');
    const favoriteRestaurantButton = document.querySelector(
      '.favorite-restaurant-button',
    );
    const content = document.querySelector('.content');

    try {
      loadingIndicator.style.display = 'block';

      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      loadingIndicator.style.display = 'none';

      if (restaurants.length === 0) {
        noFavoriteMessage.textContent =
          "You haven't marked any restaurants as favorites. Time to pick your favorites!";
        favoriteRestaurantButton.textContent = 'Find your Favorite Restaurants';
        favoriteRestaurantButton.style.display = 'block';
      } else {
        noFavoriteMessage.style.display = 'none';
        favoriteRestaurantButton.style.display = 'none';

        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += restoCardTemplate(restaurant);
        });
      }
    } catch (error) {
      console.error(error);

      loadingIndicator.style.display = 'none';
      errorMessage.textContent = `An error occurred while loading data: ${error.message}`;
      errorMessage.style.display = 'block';
      content.style.display = 'none';
    }
  },
};

export default Favorite;
