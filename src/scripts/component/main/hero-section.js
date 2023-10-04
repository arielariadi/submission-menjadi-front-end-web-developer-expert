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
					<a href="#cardContainer" class="cta">Explore</a>
				</div>
			</div>
		</div>
        `;
  }
}

customElements.define('hero-section', HeroSection);
