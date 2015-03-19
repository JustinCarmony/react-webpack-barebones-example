var React = require('react');

var HelloWorld = React.createClass({
    getDefaultProp: function(){
        name: 'James'
    },
    /* propTypes: function(){
        name: React.PropTypes.string
    }, */
    render: function(){
        return (
            <h1>Hello World, {this.props.name}</h1>
        );
    }
});

module.exports = HelloWorld;