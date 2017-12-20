var webpack = require('webpack'),
	merge = require('webpack-merge'),
	baseConfig = require('./base');

module.exports = merge(baseConfig, {
	devServer: {
		hot: true,
		historyApiFallback: true
	},
});