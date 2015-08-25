
### Install dependencies

There are two kinds of dependencies in this project: tools and application specific. The tools help manage and test the application.

> You can get the tools the project depends upon via [npm](https://www.npmjs.org/):

> ``` 
> npm install
> ```

> You can get the app specific dependencies via Bower:

> ```
> bower install
> ```

You should find that you have some new folders in your project:

* `node_modules` - contains the npm packages for the tools
* `bower_components` - contains app specific dependencies

> **Note:** The `bower_components` folder would normally be installed in the root folder but you may change this location through the `.bowerrc` file.


Build and Run the Application
-------------

The project is preconfigured with a simple development web server. The simplest way to start this server is:

```
gulp serve
```

----------

At development time, you should have in the background all the time:

```
gulp watch
```

which is going to:

* detect any changes to app or test scripts and consequently recompile them and run the tests
* detect any changes to index.html and static content and consequently reload them in the browser
* it will also rewire into index.html any changes in the bower dependencies

----------

At release time, you should simply run:

```
gulp
```

and when the command gets completed, the dir `dist` has all the release artifacts.

----------

To delete the `.tmp` dir (housing any temporary data) and the `dist` dir, you may run:

```
gulp clean
```


Testing
-------------

The project comes preconfigured with unit tests written in **Mocha** using **Chai** assertions and **TypeMoq** spies, which are run with the **Karma Test Runner**.

The easiest way to run the unit tests is:

```
gulp test
```

The provided Karma configuration file to run them is `karma.conf.js`


Serving the Application Files
-------------

Although the project contains only client side code and hence you may serve the files directly from the file system, it is advisable to use a web server to avoid any browser related security restrictions (aka sandboxing).

Make sure that the web server you are using is properly configured to serve static files.

