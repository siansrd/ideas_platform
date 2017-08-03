config = {
  entry: __dirname + "/src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        }
      }
    ]
  },
  devtool: 'source-map'
}

module.exports = config;
