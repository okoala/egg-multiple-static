'use strict';

module.exports = app => {
  const index = app.config.coreMiddleware.indexOf('bodyParser');
  if (index === -1) {
    app.config.coreMiddleware.push('multipleStatic');
  } else {
    app.config.coreMiddleware.splice(index, 0, 'multipleStatic');
  }
};
