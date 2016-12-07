## Requirements

- Install Node
    - on OSX, install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows, use the installer available at [nodejs.org](http://nodejs.org/)
    - On OSX you can alleviate the need to run as sudo by [following John Papa's instructions](http://jpapa.me/nomoresudo)
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Clone this repo and run the content locally:
```bash
$ npm install
$ gulp serve-dev
```
- `npm install` will install the required node libraries under `node_modules` and then call `bower install` which will install the required client-side libraries under `bower_components`.
- `gulp serve-dev` will serve up the Angular application in a browser window. It is designed for an efficient development process. As you make changes to the code, the browser will update to reflect the changes immediately.

When you are ready to build the application for production, run the following command:
```bash
$ gulp serve-build
```

This will build a production-ready package in the `/build` folder.

## Folder Structure

The folder structure is somewhat simplified and flatter compared to John Papa's [Gulp Patterns](https://github.com/johnpapa/gulp-patterns) project. The description below includes reasons for some of my customizations.

### Highest Level Structure

```
/bower_components
/build
/node_modules
/src
/test
```

- `bower_components:` Bower components downloaded by `bower install` (do not check in)

- `build:` Production build (do not check in)

- `node_modules:` Node.js modules downloaded by `npm install` (do not check in)

- `src:` contains all the client source files including HTML, styles (in SASS format), JavaScript and images

- `test:` contains client tests. This folder is intentionally kept separate from client source because I expect many different types of tests in this folder (unit, integration, acceptance). On real projects, the number of test files can easily exceed the number of source files, hence I like to keep the clutter away from the real source - just my preference!

### Source Folder Structure

```
/src
    /components
    /core
    /framework
    /images
    /app.module.js
    /app.scss
    /index.html
```
 
- `index.html`
- `app.scss`
- `app.module.js`

Below this level you will find various folders that arrange the application's functionality into logical modules.

- `framework:` Container for reusable services such as logging, exception handling, routing, security, local storage etc. These services are expected to work out-of-the-box without any changes for most applications. The template provides sample implementations for the first three. (This folder is called `blocks` in the gulp-patterns project.)

- `core:` Contains functionality that is shared across the application and will probably need customization for a specific application. This includes directives, filters and services and styles common to the entire application.

- `components:` Contains all the components of the application. We recommend thinking of an Angular application as a tree of components, starting with the `app` component as the root of this tree.

- `images:` Images used in the application.

## Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp autotest`

    Runs a watch to run all unit tests.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the build folder

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

### Building Production Code

- `gulp html`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp html` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.