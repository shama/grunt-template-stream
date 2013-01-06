/*
 * grunt-template-stream
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Node.js stream module, including Nodeunit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('node_version', '>= 0.8.0'),
    init.prompt('npm_test', 'grunt nodeunit -v')
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      'grunt-contrib-jshint': '~0.1.0',
      'grunt-contrib-nodeunit': '~0.1.1',
      'grunt-contrib-watch': '~0.2.0',
    };

    // generate class name
    props.cls = props.js_safe_name.charAt(0).toUpperCase() + props.js_safe_name.slice(1);

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
