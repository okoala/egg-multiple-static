'use strict';

const staticCache = require('koa-static-cache');
const compose = require('koa-compose');
const assert = require('assert');
const mkdirp = require('mkdirp');

module.exports = (options, app) => {
  const middlewares = [];

  assert.strictEqual(Array.isArray(options), true,
    'Options Must be set a array type.');

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    assert.strictEqual(typeof option.dir, 'string',
      'Must set `app.config.static.dir` when static plugin enable');

    // ensure directory exists
    mkdirp.sync(option.dir);

    app.loggers.coreLogger.info('[egg-static] starting static serve %s -> %s',
      option.prefix, option.dir);

    middlewares.push(staticCache(option));
  }

  return compose(middlewares);
};
