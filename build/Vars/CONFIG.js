const path = require('path')


module.exports = {

  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, '../../'),
      exclude: /(node_modules)|(dist)|(External)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  node: {
    fs: 'empty'
  }

}