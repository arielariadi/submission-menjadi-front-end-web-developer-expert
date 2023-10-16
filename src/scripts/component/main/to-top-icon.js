class ToTopIcon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button href="javascript:void(0)" class="to-top" aria-label="Scroll to Top">
			<i class="fa-solid fa-chevron-up"></i>
		</button>
        `;

    const toTopButton = this.querySelector('.to-top');
    toTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
}

customElements.define('to-top-icon', ToTopIcon);
