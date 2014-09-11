/** @jsx React.DOM */
require('./styles/menubar.less');
var React = require('react');
var reactimage = require('./images/react.png');
var MenuBar = require('./components/MenuBar');

var pages = [
  {name: "Home"},
  {name: "Messages"},
  {name: "live"}
];

React.renderComponent(
  <MenuBar data={pages} imagesrc={reactimage} />,
  document.getElementById('sampleapp')
);
