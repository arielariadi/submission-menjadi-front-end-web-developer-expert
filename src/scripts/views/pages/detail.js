import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    // Menghapus elemen hero-section jika ada
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.remove();
    }

    return `
        <h2>Detail Page</h2>
        <h2>Detail Page</h2>
        <h2>Detail Page</h2>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantSource.getRestaurantsDetail(url.id);
    console.log(dataRestaurant);
  },
};

export default Detail;
