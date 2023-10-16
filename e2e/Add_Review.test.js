Feature('Add New Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('posting review', ({ I }) => {
  const reviewerName = 'Name of Test E2E';
  const reviewText = 'Text of Test E2E';

  I.seeElement('.card');

  // Pilih restoran pertama
  const firstRestaurantCard = locate('.card a').first();
  I.click(firstRestaurantCard);

  // Lakukan test
  I.seeElement('.review-form');
  I.fillField('reviewerName', reviewerName);
  I.fillField('reviewText', reviewText);
  I.click('#submitReview');

  // Cek test
  I.scrollTo('.review-container');
  I.see(reviewerName, '.review-details h3');
  I.see(reviewText, '.review-content p');
});
