const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  },
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'my-restoo-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'my.restoo',
};

export default CONFIG;
