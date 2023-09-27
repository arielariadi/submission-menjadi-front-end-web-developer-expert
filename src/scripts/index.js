/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */

// Style
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/detail-restaurant.css';
import '../styles/detail-responsive.css';

// Component
import './component/header/app-bar.js';
import './component/main/hero-section.js';
import './component/main/main-content.js';
import './component/main/to-top-icon.js';
import './component/footer/footer-bar.js';

// JavaScript
import App from './views/app';

/* Toggle Navbar */
const app = new App({
  button: document.getElementById('hamburger'),
  drawer: document.getElementById('drawer'),
  content: document.querySelector('main'),
});
/* End Toggle Navbar */

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

/* to Top Icon */
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
/* End to Top Iconn */
