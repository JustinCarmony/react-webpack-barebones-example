var React = require('react');

var App = require('./components/App');

if(typeof document !== "undefined")
{
    React.render(<App />, document.body);
}