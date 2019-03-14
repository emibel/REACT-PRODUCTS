export const BASE_URL = 'http://localhost:8100/api';

const HEADERS = {
  'Content-Type': 'application/json',
};

export const setAuthorizationToken = (token) => {
  if(token) {
    Object.assign(HEADERS, {
      'Authorization': `Bearer ${token}`,
    });
  }
}

export const fetchIntercept = (endpoint, options = {}) => {
  const fetchOptions = {
    ...options,
    headers: {
      ...HEADERS,
      ...options.headers,
    },
  };

  return fetch(endpoint, fetchOptions).then(response => {
    // try {
      if ((!response.ok || response.httpStatusCode) && !options.canHandleErrors) {
        throw Error(response.message || response.status);
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      }
      return response;
    // }
    // catch {

    // }
  });
};
