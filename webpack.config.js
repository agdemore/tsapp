module.export = {
  entry: {},
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/assets'
  },

  devtool: 'source-map',

  resolve: {
    extentions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};
