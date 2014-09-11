/** @jsx React.DOM */
require('./template.less');
var React = require('react');
var MenuBar = require('./components/MenuBar');

var pages = [
  {name: "Home"},
  {name: "Messages"},
  {name: "live"}
];

React.renderComponent(
  <MenuBar data={pages} />,
  document.getElementById('sampleapp')
);
