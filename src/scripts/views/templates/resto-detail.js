import CONFIG from '../../globals/config';

const restoDetailTemplate = (resto) => `
    <div class="image-detail-wrapper">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
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
`;

export default restoDetailTemplate;
