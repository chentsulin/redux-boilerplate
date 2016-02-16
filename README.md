# redux-boilerplate

[![Build Status][travis-image]][travis-url]

> Another boilerplate for personal usage

Extend [redux counter examples](https://github.com/reactjs/redux/tree/master/examples/counter) with [react-router](https://github.com/reactjs/react-router) and [react-router-redux](https://github.com/reactjs/react-router-redux). Besides, use [chai](https://github.com/chaijs/chai) and [sinon](https://github.com/sinonjs/sinon) instead of [expect](https://github.com/mjackson/expect).

## Start

```sh
$ npm install
$ npm start
```

You can change server port using following command.

```sh
$ PORT=5000 npm start
```

## Testing

```sh
$ npm test
```

note: jsdom >= v4.0 can not work on node 0.x

## Generator

check [generator-redux-app](https://github.com/chentsulin/generator-redux-app) out.

## License

MIT © [C.T. Lin](https://github.com/chentsulin/redux-boilerplate)

[travis-image]: https://travis-ci.org/chentsulin/redux-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/chentsulin/redux-boilerplate
