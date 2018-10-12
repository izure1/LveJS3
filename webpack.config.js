'use strict';

const path = require('path');

// external modules
const CircularDependencyPlugin = require('circular-dependency-plugin');

// set webpack
module.exports = {
  // production
  // development
  mode: 'development',
  entry: {
    'LveJS': './src/LveJS/Core.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'Lve',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname),
      exclude: /(node_modules)|(dist)|(External)/,
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: true
        }
      }
    }]
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    })
  ],
  node: {
    fs: 'empty'
  }
};