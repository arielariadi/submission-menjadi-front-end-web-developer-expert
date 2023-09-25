/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */

// Style
import '../styles/main.css';
import '../styles/responsive.css';

// Component
import './component/header/app-bar.js';
import './component/main/hero-section.js';
import './component/main/main-content.js';
import './component/main/to-top-icon.js';
import './component/footer/footer-bar.js';

// JavaScript
import App from './views/app';

<<<<<<< HEAD
// Data json
import dataJson from '../public/data/DATA.json';

/* Toggle Navbar */
// const menu = document.getElementById('hamburger');
// const main = document.querySelector('main');
// const hero = document.querySelector('.hero');
// const drawer = document.getElementById('drawer');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });
=======
/* Toggle Navbar */
>>>>>>> 0c491df (Membuat routes, home page, detail page template, dan favorite page template)

const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('drawer'),
  content: document.querySelector('main'),
});
/* End Toggle Navbar */

<<<<<<< HEAD
/* Get dataJson */

function getDataRestaurant(data) {
  let restoContainer = '';

  data.restaurants.forEach((resto) => {
    restoContainer += `
		<div class="card">
				<img src="${resto.pictureId}" alt="${resto.name}" />
				<div class="card-content">
						<p class="card-city">${resto.city}</p>
						<h3 class="card-name">${resto.name}</h3>
						<div class="rating-container">
							<i class="fa-solid fa-star"></i>
							<p class="card-rating ">${resto.rating}</p>
						</div>
						<p class="card-desc">
							${resto.description}
						</p>
				</div>
		</div>
		`;
  });

  document.getElementById('cardContainer').innerHTML = restoContainer;
}

getDataRestaurant(dataJson);
/* End Get dataJson */

/* Max Description */
const cardContents = document.querySelectorAll('.card-desc');
const maxLength = 150;

cardContents.forEach((cardContent) => {
  const text = cardContent.textContent;
  if (text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength);
    cardContent.textContent = truncatedText.trim() + '...';
  }
});
/* End Max Description */
=======
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
>>>>>>> 0c491df (Membuat routes, home page, detail page template, dan favorite page template)

/* to Top Icon */
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
/* End to Top Icon */
