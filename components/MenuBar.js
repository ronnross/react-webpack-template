/** @jsx React.DOM */
var React = require('react/addons');

var MenuBar = React.createClass({
    render: function() {
      return (
        <nav>
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
