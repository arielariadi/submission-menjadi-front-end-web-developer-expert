import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import restoDetailTemplate from '../templates/resto-detail';

const Detail = {
  async render() {
    // Menghapus elemen hero-section jika ada
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.remove();
    }

    return `
      <section id="detailRestaurant" class="detail-restaurant">

      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantSource.getRestaurantsDetail(url.id);
    const detailRestaurantContainer =
      document.getElementById('detailRestaurant');

    detailRestaurantContainer.innerHTML += restoDetailTemplate(
      dataRestaurant.restaurant,
    );
  },
};

export default Detail;
