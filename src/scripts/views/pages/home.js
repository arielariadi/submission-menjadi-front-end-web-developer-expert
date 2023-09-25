import RestaurantSource from '../../data/restaurant-source';
import restoCardTemplate from '../templates/resto-card';

const Home = {
  async render() {
    return `
        <main-content></main-content>
        `;
  },

  async afterRender() {
    // const restaurants = await RestaurantSource.getRestaurants();
    const restaurantsContainer = document.getElementById('cardContainer');
    const data = await RestaurantSource.getRestaurants();

    data.restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += restoCardTemplate(resto);
    });
  },
};

export default Home;
