const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition =
  "You haven't marked any restaurants as favorites. Time to pick your favorites!";

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.no-favorite-container');
  I.see(firstCondition, '.no-favorite-message');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.no-favorite-message');

  I.amOnPage('/');

  I.seeElement('.card');

  // Pilih 1 restoran yang ingin ditambahkan ke favorit
  const firstRestaurantCard = locate('.card a').first();
  const firstRestaurantTitle = await I.grabTextFrom('.card-content h3');
  I.click(firstRestaurantCard);

  // Klik tombom add to favorite
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Cek restoran restoran tadi yang ditambahkan ke favorit
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantCard = locate('.card a').first();
  const likedRestauranTitle = await I.grabTextFrom('.card-content h3');

  assert.strictEqual(firstRestaurantTitle, likedRestauranTitle);

  // Buka kembali detail restoran yang ingin di unlike
  I.click(likedRestaurantCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Cek jika tidak ditemukan restoran favorit
  I.amOnPage('/#/favorite');

  I.seeElement('.no-favorite-container');
  I.see(firstCondition, '.no-favorite-message');
});
