import RestaurantSource from '../../data/restaurant-source';
import restoCardTemplate from '../templates/resto-card';

const Home = {
  async render() {
    return `
    <div id="loadingIndicator" class="loading-indicator">
      Loading...
    </div>
    <div id="errorMessage" class="error-message" style="display: none;">
      An error occurred while loading data.
    </div>
    
    <hero-section></hero-section>
    <main-content></main-content>
        `;
  },

  async afterRender() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');
    const restaurantsContainer = document.getElementById('cardContainer');
    const heroSection = document.querySelector('.hero');

    try {
      loadingIndicator.style.display = 'block';

      const data = await RestaurantSource.getRestaurants();

      loadingIndicator.style.display = 'none';

      data.restaurants.forEach((resto) => {
        restaurantsContainer.innerHTML += restoCardTemplate(resto);
      });
    } catch (error) {
      console.error(error);

      loadingIndicator.style.display = 'none';
      errorMessage.textContent = `An error occurred while loading data: ${error.message}`;
      errorMessage.style.display = 'block';
      restaurantsContainer.style.display = 'block';
      heroSection.style.display = 'none';
    }
  },
};

export default Home;
