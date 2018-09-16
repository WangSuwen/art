var webpack = require('webpack');
var path = require('path');
var webpackConf = require('./base');
webpackConf.mode = 'development';
webpackConf.devtool = 'source-map';
webpackConf.devServer = {
	contentBase: path.resolve(__dirname, '..', 'build/dist'),
	port: 9000,
};
new webpack.DefinePlugin({
    'progress.env.NODE_ENV': 'development'
});

module.exports = webpackConf;