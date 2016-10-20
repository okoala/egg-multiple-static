module.exports = info => {
  return {
    multipleStatic: [{
      prefix: '/static',
      dir: info.baseDir + '/dist/static',
      buffer: true,
    }]
  };
};
