const Html = require('html-webpack-plugin');
const CommonsChunk = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractText = require('extract-text-webpack-plugin');

const vendorModules = /node_modules/;

module.exports = function (options) {

  const BUILD = !!options.BUILD;

  return {
    context: __dirname,
    plugins: [
      new CommonsChunk('vendors', 'vendors.bundle.js'),
      new Html({
        template: './src/index.html',
        inject: 'body'
      }),
      new ExtractText('[name].[hash].css', {
        disable: !BUILD
      })
    ],

    entry: {
      main: [
        './src/index.html',
        './src/main.js'
      ],
      vendors: ['angular', 'angular-material']
    },

    output: {
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      path: 'public'
    },

    resolve: {
      modulesDirectories: ['src/lib', 'node_modules'],
      extensions: ['', '.js']
    },

    module: {
      preLoaders: [
        {
          test: /\.js$/,
          exclude: vendorModules,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: vendorModules,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.css$/,
          loader: ExtractText.extract('style', 'css?sourceMap')
        }
      ]
    },

    devtool: BUILD ? 'eval' : 'source-map',

    devServer: {
      contentBase: './public',
      stats: {
        modules: false,
        cached: false,
        colors: true,
        chunk: false
      }
    }
  };

};
