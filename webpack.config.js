'use strict'

const WebpackBuilder = require('./build/WebpackBuilder')

// set webpack
module.exports = [

  WebpackBuilder.exportToProduction('./src/LveJS/Core.js', 'LveJS.min', 'LveJS'),
  WebpackBuilder.exportToProduction('./src/LveJS.Modal/Core.js', 'LveJS.Modal.min', 'LveJSModal'),
  WebpackBuilder.exportToProduction('./src/LveJS.Interface/Core.js', 'LveJS.Interface.min', 'LveJSInterface'),
  
  WebpackBuilder.exportToDevelopment('./src/LveJS/Core.js', 'LveJS', 'LveJS'),
  WebpackBuilder.exportToDevelopment('./src/LveJS.Modal/Core.js', 'LveJS.Modal', 'LveJSModal'),
  WebpackBuilder.exportToDevelopment('./src/LveJS.Interface/Core.js', 'LveJS.Interface', 'LveJSInterface'),

]