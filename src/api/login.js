import { BASE_URL, fetchIntercept } from './constants';

const login = {
  fetchSignIn(loginData) {
    const options = {
      method: "POST",
      body: JSON.stringify(loginData)
    }
    return fetchIntercept(`${BASE_URL}/signIn`, options);
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
