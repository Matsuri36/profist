const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		template: './src/main/main.html'
  	}),
  	new CleanWebpackPlugin()
  ],
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: ['style-loader', 'css-loader']
  		},
  		{
  			test: /\.(png|jpeg|jpg|svg|gif)$/,
  			use: ['file-loader']
  		},
      {
        test: /\.ttf$/,
        use: ['file-loader']
      }
  	]
  }
};