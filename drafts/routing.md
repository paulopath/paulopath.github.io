

## Routing
Routing with Node.JS starts by declaring a set of module objects for performing the opened file's required functions.
_node_
```js

// built-in HTTP modules
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){ ... }

```
After this initial declaration, the objects are used to declare class methods (i.e. methods defined in a separate file).

Although Node.JS makes available all the functionality necessary to run a file server, its functionality can be simplified and expanded via node modules in the open source community.

As an example, Express.js is a web framework that simplifies routing by declaring JavaScript objects in this way:

_express_
```js
var express = require('express');
var router = express.Router();

router.get( '/api', function(req, res) { ... })

```
### Objects

The built-in `http` and `url` modules serve as a bridge between the browser and `http.Server`. The former is an event listener, and the latter is a variable that can be used to parse request objects made by the client. 

Below is an example from _w3schools_ demonstrating how these two built-in modules are used to create a server:

_native nodes_
```javascript

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

```
The example also demonstrates the use of another module: `fs`, the File System API. 

To read from the server, `fs` can take a number of arguments, the first of which is to handle an exception `if(err){ ... }`; in other words, the first argument is reserved for responding to a client when their request cannot be found (i.e. for the `404, { ... }` exception handler).

_express router object_
```javascript

feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);

```
Express simplifies server routing by abstracting variables that are less variable, such as error exception handlers. In the above example, `if(err) { ... }` is used optionally to provide yours truly with a response to the developer console.


## Browser > UI Routing

_vue.js_
```pug

#app
  form(@submit="checkForm", method="post")
    input(id="feedback-form-title" type="text")
  router-view(name="feedback-messages")

script(src="https://unpkg.com/vue/dist/vue.js")
script(src="https://unpkg.com/vue-router/dist/vue-router.js")
script.
  const router = new VueRouter({ ... })

```
The `router-view` element is a _vue component_ for rendering server markup with data entered via the `input` element: `name="feedback-form-title"`. The method of delivery is identified in the `form` element, a direct descendant of `#app`, and sibling of the other vue component: `router-view`.

Upon submission, the `checkForm` variable will trigger _form validation_ via the `post` method.
