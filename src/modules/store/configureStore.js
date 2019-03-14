/* eslint-disable global-require */

switch (process.env.NODE_ENV) {
  // case 'production':
  //   module.exports = require('./configureStore.prod');
  //   break;

  case 'development':
  default:
    module.exports = require('./configureStore.dev');
    break;
}
