const path = require('path')


module.exports = {
  entry: {
    'LveJS': './src/LveJS/Core.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    library: 'Lve',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}