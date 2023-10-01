import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import restoCardTemplate from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
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
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#cardContainer');
    const noFavoriteMessage = document.querySelector('#noFavoriteMessage');
    const favoriteRestaurantButton = document.querySelector(
      '.favorite-restaurant-button',
    );

    if (restaurants.length === 0) {
      noFavoriteMessage.textContent =
        "You haven't marked any restaurants as favorites. Time to pick your favorites!";
      favoriteRestaurantButton.textContent = 'Find your Favorite Restaurants';
      favoriteRestaurantButton.style.display = 'block'; // Tampilkan tombol
    } else {
      noFavoriteMessage.style.display = 'none'; // Sembunyikan pesan
      favoriteRestaurantButton.style.display = 'none'; // Sembunyikan tombol

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restoCardTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
