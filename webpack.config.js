const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: path.resolve(__dirname, "node_modules/"), use: 'babel-loader'},
      {test: /\.css$/, exclude: '/node_modules/', use: ['css-loader', 'style-loader']}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}