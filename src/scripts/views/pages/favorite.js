const Favorite = {
  async render() {
    // Menghapus elemen hero-section jika ada
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.remove();
    }

    return `
      <h2>Favorite Page</h2>
      <h2>Favorite Page</h2>
      <h2>Favorite Page</h2>
    `;
  },

  async afterRender() {},
};

export default Favorite;
