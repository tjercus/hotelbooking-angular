
Based on https://github.com/florinn/angular-typescript-gulp-seed, thanks and credits for setting up the skeleton to build on.

### What does it show?

This application is by no means 'feature complete', 'best practise' or using all of Angular's abilities.

It does show
 * using a modern build chain with Gulp and TypeScript
 * using Angular 1 so as to be able to migrate to Angular 2 with minor effort
 * using a router (ui-router) which has comparable features to the one in Angular2 

Notes
 * validation is programmed into the components. I tried to use Angular's built in formvalidation and two higly regarded plugins
  , but could not get them 100% working. Besides I prefer not to place validation logic in templates.
 * unti testing, integration testing and functional testing is still under development


### Install dependencies

> ``` 
> npm install
> bower install
> ```

### Build and Run the Application

The project is preconfigured with a simple development web server. The simplest way to start this server is:

```
gulp serve
```

Or

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

