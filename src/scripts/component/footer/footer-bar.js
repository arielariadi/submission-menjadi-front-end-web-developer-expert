class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
			<div class="social-media">
				<a
					href="https://www.instagram.com/ariell_ard29/?next=%2F&hl=id"
					target="_blank"
					><i class="fa-brands fa-instagram"></i
				></a>
				<a href="https://www.facebook.com/arielariadi29/" target="_blank"
					><i class="fa-brands fa-facebook"></i
				></a>
				<a
					href="https://www.linkedin.com/in/muhammad-ariel-ariadi-a7a2901b2/"
					target="_blank"
					><i class="fa-brands fa-linkedin"></i
				></a>
			</div>
			<div class="menu">
				<a href="/">Home</a>
				<a href="#">Favorite</a>
				<a
					href="https://www.linkedin.com/in/muhammad-ariel-ariadi-a7a2901b2/"
					target="_blank"
					>About Us</a
				>
			</div>
			<div class="copyright">
				<p>&copy 2023 | Submission Dicoding | My.Restoo</p>
			</div>
		</footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
