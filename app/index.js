var React = require('react');
var ReactDOM = require('react-dom');

require('./sass/style.scss');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
