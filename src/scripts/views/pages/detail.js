import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import restoDetailTemplate from '../templates/resto-detail';
import swal from 'sweetalert';
import '../templates/like-button';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div id="loadingIndicator" class="loading-indicator">
      Loading...
    </div>
    <div id="errorMessage" class="error-message">
    
    </div>

      <section id="detailRestaurant" class="detail-restaurant">
       
      </section>
      
      <section class="review-form">
        <h2>Leave a Review</h2>
        <form id="reviewForm">
          <div class="form-group">
            <label for="reviewerName">Name:</label>
            <input type="text" id="reviewerName" name="reviewerName" autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="reviewText">Review:</label>
            <textarea
              id="reviewText"
              name="reviewText"
              rows="6"
              ></textarea>
          </div>
          <div class="form-group">
            <button id="submitReview" type="submit">Submit Review</button>
          </div>
        </form>
      </div>
	  </section>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');
    const detailRestaurantContainer =
      document.getElementById('detailRestaurant');
    const reviewFormContainer = document.querySelector('.review-form');
    let dataRestaurant;

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      dataRestaurant = await RestaurantSource.getRestaurantsDetail(url.id);

      detailRestaurantContainer.innerHTML += restoDetailTemplate(
        dataRestaurant.restaurant,
      );
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: dataRestaurant.restaurant,
      });

      loadingIndicator.style.display = 'none';
      detailRestaurantContainer.style.display = 'block';
    } catch (error) {
      console.error(error);

      loadingIndicator.style.display = 'none';
      errorMessage.textContent = `An error occurred while loading daata: ${error.message}`;
      errorMessage.style.display = 'block';
      reviewFormContainer.style.display = 'none';
    }

    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const reviewerNameInput = document.getElementById('reviewerName');
      const reviewTextInput = document.getElementById('reviewText');

      if (!reviewerNameInput.value || !reviewTextInput.value) {
        swal('Submit Failed', 'Please write your review', 'error');
        return;
      }

      const review = {
        id: dataRestaurant.restaurant.id,
        name: reviewerNameInput.value,
        review: reviewTextInput.value,
      };

      await RestaurantSource.addNewReview(review);

      const reviewCardContainer = document.querySelector(
        '.review-card-container',
      );
      const newReviewCard = `
        <div class="review-card">
          <div class="review-wrapper">
            <div class="review-image">
              <i class="fa-solid fa-user-pen"></i>
            </div>
            <div class="review-details">
              <h3>${review.name}</h3>
              <p>${new Date().toISOString().split('T')[0]}</p>
            </div>
          </div>
          <div class="review-content">
            <p>${review.review}</p>
          </div>
        </div>`;
      reviewCardContainer.innerHTML += newReviewCard;

      swal('Submit Success', 'Your review has been posted', 'success');

      reviewerNameInput.value = '';
      reviewTextInput.value = '';
    });
  },
};

export default Detail;
