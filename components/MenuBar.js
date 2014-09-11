/** @jsx React.DOM */
var React = require('react/addons');
var Alert = require('react-bootstrap').Alert;

var MenuBar = React.createClass({
    render: function() {
      return (
        <nav>
          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <img src={this.props.imagesrc} alt="react logo" />
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

module.exports = MenuBar;
