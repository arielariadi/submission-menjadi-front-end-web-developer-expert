class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#mainContent" tabindex="0" class="skip-link" aria-label="Menuju ke konten utama">Menuju ke konten utama</a>
		<header class="navbar-container">
			<div class="logo">
				<a class="navbar-brand" href="/" aria-label="Logo Website">
					<i class="fa-solid fa-store"></i>
					My.<span>Restoo</span></a
				>
				<button id="hamburger" class="hamburger-icon">☰</button>
			</div>
			<!-- <div class="hamburger-icon">
			</div> -->

			<nav id="drawer">
				<ul class="navbar-list">
					<li class="nav-item"><a href="/" aria-label="Menu home">Home</a></li>
					<li class="nav-item"><a href="#/favorite" aria-label="Menu favorite">Favorite</a></li>
					<li class="nav-item">
						<a
							href="https://www.linkedin.com/in/muhammad-ariel-ariadi-a7a2901b2/"
							target="_blank" aria-label="Menu about me"
							>About Us</a
						>
					</li>
				</ul>
			</nav>
		</header>
        `;
  }
}

customElements.define('app-bar', AppBar);
