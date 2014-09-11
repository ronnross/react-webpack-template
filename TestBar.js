/** @jsx React.DOM */
var React = require('react/addons');


//module.exports = React.renderComponent(<h1>Hello React!</h1>, document.body);
var TestBar = React.createClass({
    render: function() {
      return (
        <nav>
          <TestItem data={this.props.data} />
          <MenuItemRight />
        </nav>
      );
    }
});

var TestItem = React.createClass({
  render: function() {
    var menuNodes = this.props.data.map(function (menuItem){
      return (
        <li>
          <a href="#">{menuItem.name}</a>
        </li>
      );
    });
    return (
      <ul>
        {menuNodes}
      </ul>
    );
  }
});

var MenuItemRight = React.createClass({
  render: function() {
    return (
      <div>Right menu</div>
    );
  }
});


module.exports = TestBar;
