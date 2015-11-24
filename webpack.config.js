const path = require('path')
const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: "babel",
    query: {
      presets: ['es2015', 'stage-0', 'react']
    }
  },
  {
    test: /\.jpg$|\.png$/,
    loaders: ['url']
  },
  {
    test: /\.svg$/,
    loaders: ['file', 'svgo-loader']
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      "style-loader",
      "css-loader"
    )
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      "style-loader",
      "css-loader",
      "sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules")
    )
  },
  {
    test: /\.json$/,
    loaders: ['json-loader']
  }
]

module.exports = [{
    entry: {
      bundle: "./app/initializers/client.js",
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'material-ui',
        'react-parallax',
        'superagent',
        'ramda',
        'angular-material/modules/css/angular-material-layout.css',
        'angular-material/modules/css/angular-material-layouts.css'
      ],
    },

    output: {
      path: "./public",
      filename: '[name].js',
      publicPath: "/"
    },

    module: {
      loaders: loaders
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
      new ExtractTextPlugin("[name].css")
    ]
  },
  {
    target: 'node',
    entry: {
      bundle: "./app/initializers/server/init.js",
    },

    output: {
      path: "./public",
      filename: 'server.[name].js',
      publicPath: "/",
      libraryTarget: "commonjs2"
    },

    module: {
      loaders: loaders
    },
    plugins: [
      new webpack.DefinePlugin({ "global.GENTLY": false }),
      new ExtractTextPlugin("[name].css")
    ]
  }
]
