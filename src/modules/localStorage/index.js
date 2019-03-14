import { has } from 'lodash';
import { setAuthorizationToken } from 'api/constants';
import log from '../../helpers/log';

export const deleteLocalStorageValue = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    log.error(error);
  }
};

export const getLocalStorageValue = (key, defaultValue = null) => {
  try {
    const value = localStorage.getItem(key);
    const deSerializedValue = JSON.parse(value);

    return deSerializedValue || defaultValue;
  } catch (error) {
    log.error(error);
    return defaultValue;
  }
};

export const setLocalStorageValue = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);

    localStorage.setItem(key, serializedValue);
  } catch (error) {
    log.error(error);
  }
};


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState);

    if (has(state, 'session.token')) {
      setAuthorizationToken(state.session.token);
    }
    return state;
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // throw error;
  }
};
