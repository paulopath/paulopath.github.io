---
title: Node CLI Apps
questions:
 - how npm-init works
 - how to create CLI apps
---

# Q/A > JSON file
To create a node `package.json` file, the _NPM 

_example/init/basic-init.js_
```js

exports.flavor = prompt("what's your favorite flavor of ice cream buddy?", "I LIKE THEM ALL")

```

```terminal

npm init [-f|--force|-y|--yes]

```

_Usage_
```js

var init = require('init-package-json')
var path = require('path')

// a path to a promzard module.  In the event that this file is
// not found, one will be provided for you.
var initFile = path.resolve(process.env.HOME, '.npm-init')

// the dir where we're doin stuff.
var dir = process.cwd()

// extra stuff that gets put into the PromZard module's context.
// In npm, this is the resolved config object.  Exposed as 'config'
// Optional.
var configData = { some: 'extra stuff' }

// Any existing stuff from the package.json file is also exposed in the
// PromZard module as the `package` object.  There will also be free
// vars for:
// * `filename` path to the package.json file
// * `basename` the tip of the package dir
// * `dirname` the parent of the package dir

init(dir, initFile, configData, function (er, data) {
  // the data's already been written to {dir}/package.json
  // now you can do stuff with it
})

```

## Refs
[npm-init](https://docs.npmjs.com/cli/init)
[init-package-json](https://github.com/npm/init-package-json)
[commander.js](https://github.com/tj/commander.js)
[awesome npm](https://github.com/sindresorhus/awesome-npm)
[npm git-topic](https://github.com/topics/npm)
