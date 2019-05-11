const webpack = require('webpack');
const merge = require('webpack-merge');
const { join } = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: join(__dirname, '../dist'),
    index: 'index.html',
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    openPage: '/',
    stats: 'normal',
  }
});
