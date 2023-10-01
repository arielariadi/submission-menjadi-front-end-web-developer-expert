import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import restoDetailTemplate from '../templates/resto-detail';

const Detail = {
  async render() {
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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: dataRestaurant.restaurant,
    });
  },
};

export default Detail;
