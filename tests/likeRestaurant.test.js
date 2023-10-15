/* Batal Menyukai restaurant:
  1. restaurant belum disukai. (Done)
  2. Widget untuk menyukai restaurant ditampilkan. (Done)
  3. Widget menyukai restaurant ditekan oleh pengguna. (Done)
  4. restaurant ditambahkan ke daftar restaurant yang disukai. (Done)
     a. restaurant berhasil ditambahkan. (Done)
     b. Ternyata restaurant sudah disukai. (Done)
        i. Tidak perlu menyimpan kembali. (Done)
     c. Data restaurant tidak memiliki ID. (Done)
        i. Sistem tidak memproses penyimpanan. (Done)
        ii. Sistem tidak gagal. (Done)

    TODO:
    1. Memberi nama yang lebih berbeda untuk createLikeButtonTemplate dan createLikedButtonTemplate. (Done)
    2. Alur negatif: sistem tidak memproses penyimpanan dan menyebabkan kegagalan jika menyimpan Restaurant tanpa ID. (Done)
 */

import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

global.structuredClone = jest.fn((val) => {
  return JSON.parse(JSON.stringify(val));
});

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan restaurant berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan restaurant dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
