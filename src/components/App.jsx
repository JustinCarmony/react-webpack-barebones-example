var React = require('react');

var HelloWorld = require('./HelloWorld');

var App = React.createClass({
    render: function(){
        return (
            <div id="app">
                <HelloWorld name="Justin" />
            </div>
        );
    }
});

module.exports = App;