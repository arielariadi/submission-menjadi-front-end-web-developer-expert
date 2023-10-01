const createLikeButtonTemplate = () => `
        <a href="#" class="review">Review</a>
        <button class="favorite" id="likeButton">
            <i class="fa-regular fa-heart"></i> ADD TO FAVORITE
        </button>
`;

const createLikedButtonTemplate = () => `
        <a href="#" class="review">Review</a>
        <button class="favorite" id="likeButton">
            <i class="fa-solid fa-heart"></i> REMOVE FROM FAVORITE
        </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
