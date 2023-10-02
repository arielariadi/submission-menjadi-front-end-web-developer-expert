const createLikeButtonTemplate = () => `
        <button class="favorite" id="likeButton">
            <i class="fa-regular fa-heart"></i> ADD TO FAVORITE
        </button>
`;

const createLikedButtonTemplate = () => `
        <button class="favorite" id="likeButton">
            <i class="fa-solid fa-heart"></i> REMOVE FROM FAVORITE
        </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
