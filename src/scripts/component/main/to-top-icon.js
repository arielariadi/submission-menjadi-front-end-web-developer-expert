class ToTopIcon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="javascript:void(0)" class="to-top">
			<i class="fa-solid fa-chevron-up"></i>
		</a>
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
