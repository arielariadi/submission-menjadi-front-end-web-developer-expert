class ToTopIcon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#" class="to-top">
			<i class="fa-solid fa-chevron-up"></i>
		</a>
        `;
  }
}

customElements.define('to-top-icon', ToTopIcon);
