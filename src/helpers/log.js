/* eslint no-console: 0 */
export default {
  error: message => {
    if (process.env.NODE_ENV === 'development') console.error(message);
  },
  log: message => {
    if (process.env.NODE_ENV === 'development') console.log(message);
  },
};
