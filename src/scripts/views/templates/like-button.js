const createLikeButtonTemplate = () => `
        <button aria-label="like this restaurant" class="favorite" id="likeButton">
            <i class="fa-regular fa-heart"></i> ADD TO FAVORITE
        </button>
`;

const createLikedButtonTemplate = () => `
        <button aria-label="unlike this restaurant" class="favorite" id="likeButton">
            <i class="fa-solid fa-heart"></i> REMOVE FROM FAVORITE
        </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
