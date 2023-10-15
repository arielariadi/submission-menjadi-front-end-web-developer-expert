/* Batal Menyukai restaurant:
  1. Film sudah disukai. (Done)
  2. Widget untuk batal menyukai film ditampilkan. (Done)
  3. Widget pembatalan ditekan oleh pengguna. (Done)
  4. Film dihapus dari daftar film yang disukai. (Done)
     a. Film berhasil dihapus. (Done)
     b. Ternyata film tidak ada dalam daftar film yang disukai. (Done)
*/

import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = jest.fn((val) => {
  return JSON.parse(JSON.stringify(val));
});

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
