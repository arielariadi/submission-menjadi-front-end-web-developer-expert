import CONFIG from '../../globals/config';
import { createLikeRestaurantButtonTemplate } from './like-button';

const restoDetailTemplate = (resto) => `
    <div class="image-detail-wrapper">
        <img src="${CONFIG.BASE_IMAGE_URL.LARGE}${resto.pictureId}" alt="${
          resto.name
        }" crossorigin="anonymous" />
    </div>

    <div class="detail-content">
        <div class="restaurant-detail-head">
            <h1>${resto.name}</h1>
            <div class="rating-detail-container">
                <i class="fa-solid fa-star detail"></i>
                <p class="card-rating-detail">${resto.rating}</p>
            </div>
        </div>

        <div class="city-address-detail-container">
            <i class="fa-solid fa-location-dot"></i>
            <p class="detail-city">${resto.city}</p>
            <p class="detail-road">${resto.address}</p>
        </div>

        <div class="restaurant-detail-category-container">
        ${resto.categories
          .map(
            (category) => `
        <div>${category.name}</div>
        `,
          )
          .join('')}
    </div>

    <div id="likeButtonContainer" class="button-detail-container">
          ${createLikeRestaurantButtonTemplate()}
        </div>
        
        <div class="detail-description">
            <p>
                ${resto.description}
            </p>
        </div>
    </div>

    <div class="menus-detail-container">
		<div class="food-text">
			<h2>Foods</h2>
		</div>

    <div class="foods-container">   
            ${resto.menus.foods
              .map(
                (food) => `
                <div class="food-item">
                    <i class="fa-solid fa-bowl-food"></i>
                    <p>${food.name}</p>
                </div>
                `,
              )
              .join('')}   
    </div>

        <div class="drink-text">
			<h2>Drinks</h2>
		</div>

    <div class="drinks-container">
            ${resto.menus.drinks
              .map(
                (drink) => `
                <div class="food-item">
                <i class="fa-solid fa-martini-glass"></i>
                <p>${drink.name}</p>
            </div>
                `,
              )
              .join('')}  
        </div>
    </div>

    <div id="reviewContainer" class="review-container">
      <div class="review-text">
        <h2>Reviews</h2>
      </div>

		  <div class="review-card-container">
        ${resto.customerReviews
          .map(
            (review) => `
            
			<div class="review-card">
				<div class="review-wrapper">
					<div class="review-image">
						<i class="fa-solid fa-user-pen"></i>
					</div>

					<div class="review-details">
						<h3>${review.name}</h3>
						<p>${review.date}</p>
					</div>
				</div>

				<div class="review-content">
					<p>
						${review.review}
					</p>
				</div>
			</div>
        `,
          )
          .join('')}
    </div>
`;

export default restoDetailTemplate;
