const path = require('path')


module.exports = {
  entry: {
    'LveJS.Modal': './src/LveJS.Modal/Core.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: 'LveModal',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}