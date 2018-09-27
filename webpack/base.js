/**
 * webpack 4.16.2
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				}
			},
			{
				test: /\.(scss|less|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					}, {
            /**
             *  自动补全 浏览器前缀，配置 postcss.config.js 
             *  并 配合  autoprefixer 包 使用
             */
            loader: 'postcss-loader'
          }
				]
			}, {
          test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
          loader: 'file-loader?name=files/[hash:8].[ext]'
      }, {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader?limit=8000&name=images/[name].[hash:8].[ext]'
      },
		]
  },
  plugins: [
    // 自动将入口js 文件插入到Html页面中。
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
		
    new MiniCssExtractPlugin({ filename: 'style.css' }),
	],

	entry: {
		app: './src/app.js'
	},

	output: {
		filename: '[name].[chunkhash].js',// [chunkhash]：每次只会把修改过的文件进行重新构建；[hash]：会把所有文件都重新进行构建
    path: path.resolve(__dirname, '../build'),
    // chunkFilename: '[name].[chunkhash:5].chunk.js',
  },
  optimization: {
    // minimize: true, // 压缩js，4.0 替换掉了 UglifyJsPlugin
    splitChunks: {
      chunks: "async",
      minSize: 3000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~', // chunk name 与 chunkhash值之间的 分隔符
      name: true,
      cacheGroups: {
        /**
         * 将 node_modules 中的代码 压缩成一个 叫 vendors 的js文件中。
         * 用于缓存
         * 我们自己的代码 打入到 entry 选项 配置的js 中。
         */
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          maxSize: 102400, // 以 Byte 为单位
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  resolve: {
    alias: (function (src) {
      var fs = require('fs');
      var moduleAlias = {
        '@root': src
      };
      return fs
        .readdirSync(src)
        .filter(function (dir) {
          try {
            return fs.statSync(path.resolve(src, dir)).isDirectory();
          } catch (e) {
            return false;
          }
        })
        .reduce(function (moduleAlias, dir) {
          moduleAlias['@' + dir] = path.resolve(src, dir);
          return moduleAlias;
        }, moduleAlias);
    })(path.resolve(__dirname, '../src'))
  },
};