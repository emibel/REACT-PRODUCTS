import { BASE_URL, fetchIntercept } from './constants';

const products = {
  fetchProducts() {
    return fetchIntercept(`${BASE_URL}/products`);
  },
};

export default products;
