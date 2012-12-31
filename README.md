# Grunt Template Stream

> A Stream template for [grunt-init](https://github.com/gruntjs/grunt-init)

## Install
* Install grunt-init with: `npm grunt-init@0.2.x -g`
* Download this template with: `git clone git://github.com/shama/grunt-template-stream.git ~/.grunt-init/stream`

## Use
Within an empty folder run `grunt-init stream` and answer the questions.

## Features
<ul>
<li>A readable/writable stream template in <code>index.js</code>.</li>
<li>A function that returns a new instance as well as exposes the class.<br/>
<pre>
var m = require('module');
var Module = require('module').Module;
// m === new Module();
</pre>
</li>

<li><code>.travis.yml</code> with a travis badge in the <code>README.md</code>.</li>
<li>Has an <code>.editorconfig</code> file.</li>
</ul>

## Contributing
Please send a pull request if you think you can make this template better.

## License
Copyright (c) 2013 Kyle Robinson Young 
Licensed under the MIT license.
