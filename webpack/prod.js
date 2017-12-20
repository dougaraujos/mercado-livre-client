var webpack = require('webpack'),
	merge = require('webpack-merge'),
	resolve = require('path').resolve,
	baseConfig = require('./base');

module.exports = merge(baseConfig, {
	output: {
		filename: 'bundle.js',
		path: resolve('dist'),
		publicPath: '/'
	}
});