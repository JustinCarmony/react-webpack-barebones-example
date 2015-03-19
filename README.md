React Webpack Barebones Example
===============================

This is a barebones, minimalist example of how to use [React](http://facebook.github.io/react/) with [webpack](http://webpack.github.io/). Thanks to Thomas Deutsch's [react-webpack](https://github.com/ThomasDeutsch/react-webpack) repo which we pulled from as an example.

This example repo is primarly for people who have existing projects. You can look and see what minimal files / settings are needed for integrating react and webpack into your project. If you're looking for a starter boiler plate for a new project I'd recommend either [react-webpack](https://github.com/ThomasDeutsch/react-webpack) for a simple starter or [react-stater](https://github.com/webpack/react-starter) for a starter with all the possible bells & whistles. 

### Install

Download this repository to your local project folder and run ``npm install`` from the folder where the package.json is located.


### System Requirements

Install [node.js](http://nodejs.org/download/) and [git](http://git-scm.com/downloads).

After node.js is installed, run this command to install the webpack cli tool:

```bash
npm install webpack -g 
```

### Build

Run ``webpack`` to build your project into the ``public/build/main.bundle.js``. Run ``webpack -watch`` from your project folder to continuously watch for changes and re-build your ``public/build/main.bundle.js`` file. To test you  can simply open your ``public/index.html`` file in a browser.

## More Bells & Whistles

 - [webpack with gulp](http://webpack.github.io/docs/usage-with-gulp.html) - If you prefer to use gulp for your build/watch commands.
 - [webpack loaders](http://webpack.github.io/docs/list-of-loaders.html) - A list of possible loaders to let webpack handle your SASS, LESS, CSS bundling. See [react-webpack](https://github.com/ThomasDeutsch/react-webpack) as an example.

Know of any other userful things to checkout for someone implementing React + Webpack? Make a pull request and add them to the list!