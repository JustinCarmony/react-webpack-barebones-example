module.exports = {
    /* This is the default setting for webpack */
    target: "web",
    /* Generate source-maps for browser side debugging */
    devtool: "source-map",
    /* Entry file to start building from. This is where you will want to start
     * your project.  If you wanted to build multiple entry points you could 
     * list them below.
     */
    entry: {
        main: "./src/main"
    },
    /* Defines where to output the final built files. The [name] definition
     * is based off of the entry point's name. This example will generate
     * a main.bundle.js in the public/build directory.
     */
    output: {
        path: "./public/build",
        filename: "[name].bundle.js"
    },
    resolve: {
        /* Defines where it can load modules from. Since we've installed our 
         * JS dependencies through npm, it can look in the node_modules
         * directory. If you use bower, you can add 'bower_components'
         * to the list.
         */
        modulesDirectories: ['node_modules'],
        /* List extensions to load in require() statements. The '' entry
         * is needed to allow you to require src/main.jsx as require('src/main.jsx')
         */
        extensions: ['', '.js', '.jsx']
    },

    /* Defines what modules to use */
    module: {
        /* Loaders are how webpack compiles and builds the JSX extensions */
        loaders: [
            /* Any file with a .jsx extension will go through the jsx-loader */
            { test: /\.jsx$/, loader: "jsx-loader?harmony" }
        ]
    }
};