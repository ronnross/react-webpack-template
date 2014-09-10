/** @jsx React.DOM */
var React = require('react');

var data = [
  {name: "Home"},
  {name: "Messages"},
  {name: "live"}
];
//module.exports = React.renderComponent(<h1>Hello React!</h1>, document.body);
var MenuBar = React.createClass({
    render: function() {
      return (
        <nav>
          <MenuItem data={this.props.data} />
          <MenuItemRight />
        </nav>
      );
    }
});

var MenuItem = React.createClass({
  render: function() {
    var menuNodes = this.props.data.map(function (menuItem){
      return (
        <li>
          <a href="#">{menuItem.name}</a>
        </li>
      );
    });
    return (
      <div className="">
        {menuNodes}
      </div>
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

React.renderComponent(
  <MenuBar data={data} />,
  document.getElementById('content')
);

module.exports = MenuBar;
