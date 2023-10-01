import CONFIG from '../../globals/config';

const restoDetailTemplate = (resto) => `
    <div class="image-detail-wrapper">
        <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${
          resto.name
        }" />
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

        <div class="button-detail-container">
            <a href="#" class="review">Review</a>
            <button class="favorite">
                <i class="fa-regular fa-heart"></i> ADD TO FAVORITE
            </button>
        </div>
        <div class="detail-description">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                quidem nesciunt a velit consequatur saepe, dolore aut quos
                blanditiis at voluptate dolor natus facilis illum. Neque sequi quas
                earum quos enim labore reiciendis provident, ratione, alias beatae
                voluptate. Ducimus atque aliquam aspernatur sequi veniam pariatur
                nostrum rerum nobis quod, totam distinctio excepturi natus hic quos
                reprehenderit illo ipsam quibusdam consequatur exercitationem
                repellat. Ipsam, similique minus animi quae, earum nobis repellendus
                ullam eveniet delectus, incidunt reiciendis libero blanditiis
                deleniti soluta pariatur!
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

    <div class="review-container">
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
	</div>
`;

export default restoDetailTemplate;
