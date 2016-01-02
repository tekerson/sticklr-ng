const webpack = require('webpack');
const Html = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

const vendorModules = /node_modules/;

module.exports = function (options) {

  const BUILD = !!options.BUILD;

  return {
    context: __dirname,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new Html({
        template: './src/index.html',
        inject: 'body'
      }),
      new ExtractText('[name].[hash].css', {
        disable: !BUILD
      })
    ],

    entry: {
      main: './src/main.js',
      vendor: [
        'angular'
      ]
    },

    output: {
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
      path: 'public'
    },

    resolve: {
      modulesDirectories: ['src/lib', 'node_modules'],
      extensions: ['', '.js'],
      alias: {
        'angular': BUILD ? 'angular/angular.min.js' : 'angular/angular.js',
        'theme.less': 'bootstrap/less/theme.less',
        'variables.less': 'bootstrap/less/variables.less'
      }
    },

    module: {
      preLoaders: [
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: vendorModules,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'html'
        },
        {
          test: /$index\.html$/,
          loader: 'file?name=[name].[ext]'
        },
        {
          test: /\.css$/,
          loader: ExtractText.extract('style', 'css?sourceMap')
        },
        {
          test: /\.less$/,
          loader: ExtractText.extract('style', 'css!less?sourceMap')
        },

        { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader" },
        { test: /\.eot$/,    loader: "file-loader" },
        { test: /\.svg$/,    loader: "file-loader" },

        {
          test: /\.js$/,
          exclude: vendorModules,
          loader: 'eslint-loader'
        },

        { test: /angular\.js$/, loader: 'exports?angular' },
        { test: /angular\.min\.js$/, loader: 'exports?angular' }
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
