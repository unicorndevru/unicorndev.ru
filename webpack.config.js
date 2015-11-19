module.exports = {
  entry: "./client/js/main.js",
  output: {
    path: "./public",
    filename: "bundle.js",
    publicPath: "/"
  },

  devServer: {
    inline: true,
    contentBase: "./public"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  }
}
