import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

global.structuredClone = jest.fn((val) => {
  return JSON.parse(JSON.stringify(val));
});

describe('Favorite restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      },
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
