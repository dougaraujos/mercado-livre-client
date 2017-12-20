var webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path'),
	resolve = require('path').resolve;

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		resolve('src/index.js')
	],
	output:{
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['react', ['es2015', {"modules": false, "loose": true} ],'stage-0']
				}
			}],
		}, {
			test: /\.s?css$/,
			loader: ExtractTextPlugin.extract(`css-loader?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader`)
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'url-loader?limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.(jpg|jpeg|gif|png|webp)$/,
     		loader: 'file-loader?name=assets/images/[name].[ext]'
		},
		{
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=assets/fonts/[name].[ext]'
		}]
	},
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		})
	]
}