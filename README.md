# egg-multiple-static

Support multiple static server plugin for egg, base on [koa-static-cache](https://github.com/koajs/static-cache).

## Install

```bash
$ npm i egg-multiple-static --save
```

## Usage

- plugin.js

```js
exports.multipleStatic = {
  enable: true,
  package: 'egg-multiple-static',
};
```


## Configuration

Support all configurations in [koa-static-cache](https://github.com/koajs/static-cache).

## License

[MIT](LICENSE)
