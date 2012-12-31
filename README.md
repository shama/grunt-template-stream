# Grunt Template Stream

> A Stream template for [grunt-init](https://github.com/gruntjs/grunt-init)

## Install
* Install grunt-init with: `npm grunt-init@0.2.x -g`
* Download this template with: `git clone git://github.com/shama/grunt-template-stream.git ~/.grunt-init/stream`

## Use
Within an empty folder run `grunt-init stream` and answer the questions.

## Features
* A readable/writable stream template in `index.js`.
* A function that returns a new instance as well as exposes the class.<br/>
```js
var m = require('module');
var Module = require('module').Module;
// m === new Module();
```
* `.travis.yml` with a travis badge in the `README.md`.
* `.editorconfig` file.

## Contributing
Please send a pull request if you think you can make this template better.

## License
Copyright (c) 2013 Kyle Robinson Young 
Licensed under the MIT license.
