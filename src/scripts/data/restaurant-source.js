import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getRestaurantsDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addNewReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
