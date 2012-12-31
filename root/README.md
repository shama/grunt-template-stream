# {%= name %}

{%= description %}

[![build status](https://secure.travis-ci.org/{%= git_user %}/{%= git_repo %}.png)](http://travis-ci.org/{%= git_user %}/{%= git_repo %})

## example
```js
var {%= js_safe_name %} = require('{%= name %}');
var s = {%= js_safe_name %}();
```

```js
var {%= cls %} = require('{%= name %}').{%= cls %};
var fs = require('fs');

var s = new {%= cls %}();
fs.createReadStream('from.json').pipe(s).fs.createWriteStream('to.json');
```

## methods
_(todo)_

## install
With [npm](http://npmjs.org) do:

```
npm install {%= name %}
```

## contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [grunt](http://gruntjs.com/).

## release history
_(nothing yet)_

## license
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
