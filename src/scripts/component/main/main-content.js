<<<<<<< HEAD
class MainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent">
			<section class="content">
				<h2>Explore Restaurant</h2>
				<article id="cardContainer" class="explore-restaurant-content">
				
				</article>
			</section>
		</main>
        `;
  }
}

customElements.define('main-content', MainContent);
=======
class MainContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main id="mainContent">
			<section class="content">
				<h2>Explore Restaurant</h2>
				<article id="cardContainer" class="explore-restaurant-content">
				
				</article>
			</section>
		</main>
        `;
  }
}

customElements.define('main-content', MainContent);
>>>>>>> 0c491df (Membuat routes, home page, detail page template, dan favorite page template)
