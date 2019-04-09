const path = require('path')


module.exports = {
  entry: {
    'LveJS.Interface': './src/LveJS.Interface/Core.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: 'LveJSInterface',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}