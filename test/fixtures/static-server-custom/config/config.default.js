const path = require('path');

module.exports = info => {
  const exports = {};

  exports.multipleStatic = [{
    prefix: '/static-custom',
    dir: path.join(info.baseDir, 'dist/static')
  }];

  return exports;
};
