module.exports = info => {
  return {
    multipleStatic: [{
      prefix: '/static',
      dir: info.baseDir + '/dist/static',
      buffer: true,
    }, {
      prefix: '/static',
      dir: info.baseDir + '/app/public',
      buffer: true,
    }]
  };
};
