'use strict';

const path = require('path');
const glob = require('glob');

// external modules
const CircularDependencyPlugin = require('circular-dependency-plugin');

// entries
const entry_lve = glob.sync('./src/LveJS/**/*.js');
const entry_box2d = glob.sync('./src/External/Box2D/**/*.js');

// set webpack
module.exports = {
  // production
  // development
  mode: 'production',
  entry: {
    'LveJS': [
      ...entry_lve,
      ...entry_box2d
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
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
      }
    ]
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