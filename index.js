/** @jsx React.DOM */

var React = require('react');
var MenuBar = require('./components/MenuBar');

var data = [
  {name: "Home"},
  {name: "Messages"},
  {name: "live"}
];

var test = 'test';

React.renderComponent(
  <MenuBar data={data} />,
  document.getElementById('sampleapp')
);
