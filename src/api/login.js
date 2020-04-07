import { BASE_URL, fetchIntercept } from './constants';
import queryString from 'query-string';

const login = {

  // With REAL API
  // fetchSignIn(loginData) {
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(loginData)
  //   }
  //   return fetchIntercept(`${BASE_URL}/signIn`, options);
  // },

  // With JSON SERVER 
  fetchSignIn(loginData) {
    const query = queryString.stringify(loginData);
    const options = {
      method: "GET",
    }
    return fetchIntercept(`${BASE_URL}/signIn?${query}`, options);
  },

  fetchSignUp(loginData) {
    const options = {
      method: "POST",
      body: JSON.stringify(loginData)
    }
    return fetchIntercept(`${BASE_URL}/signUp`, options);
  },
};

export default login;
