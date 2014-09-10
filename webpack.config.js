module.exports = {
  entry: "./index.js",
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.js$/, loader: "jsx-loader"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
