import CONFIG from '../../globals/config';

const restoCardTemplate = (resto) => `
    <div class="card">
        <a href="#/detail/${resto.id}">
            <img class="lazyload" data-src="${
              CONFIG.BASE_IMAGE_URL.SMALL + resto.pictureId
            }" alt="${resto.name}" crossorigin="anonymous" />
        </a>
        <div class="card-content">
                <p class="card-city">${resto.city}</p>
                <h3 class="card-name">${resto.name}</h3>
                <div class="rating-container">
                    <i class="fa-solid fa-star"></i>
                    <p class="card-rating">${resto.rating}</p>
                </div>
                <p class="card-desc">
                    ${truncateText(resto.description, 150)}
                </p>
        </div>
    </div>
`;

// Fungsi untuk memotong teks jika lebih dari panjang maksimum
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength).trim() + '...';
  }
  return text;
}

export default restoCardTemplate;
