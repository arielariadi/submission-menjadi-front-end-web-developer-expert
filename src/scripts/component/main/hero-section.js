<<<<<<< HEAD
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
			<div class="hero-text">
				<h1>Culinary Craftsmanship</h1>
				<p>Elevate Your Dining Experience</p>
				<div class="cta-container">
					<a href="#mainContent" class="cta">Explore</a>
				</div>
			</div>
		</div>
        `;
  }
}

customElements.define('hero-section', HeroSection);
=======
// class HeroSection extends HTMLElement {
//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     this.innerHTML = `
//     <div class="hero">
// 			<div class="hero-text">
// 				<h1>Culinary Craftsmanship</h1>
// 				<p>Elevate Your Dining Experience</p>
// 				<div class="cta-container">
// 					<a href="#mainContent" class="cta">Explore</a>
// 				</div>
// 			</div>
// 		</div>
//         `;
//   }
// }

// customElements.define('hero-section', HeroSection);

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    // Mengambil path saat ini
    const currentPath = window.location.pathname;

    // Cek jika berada di halaman favorit
    if (currentPath !== '/favorite') {
      this.innerHTML = `
        <div class="hero">
          <div class="hero-text">
            <h1>Culinary Craftsmanship</h1>
            <p>Elevate Your Dining Experience</p>
            <div class="cta-container">
              <a href="#mainContent" class="cta">Explore</a>
            </div>
          </div>
        </div>
      `;
    } else {
      this.innerHTML = ''; // Hapus elemen hero-section
    }
  }
}

customElements.define('hero-section', HeroSection);
>>>>>>> 0c491df (Membuat routes, home page, detail page template, dan favorite page template)
