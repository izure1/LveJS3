'use strict'

const config_common = require('./build/Common.config')
const config_lve = require('./build/Lve.config')
const config_modal = require('./build/Modal.config')

// set webpack
module.exports = [

  Object.assign({}, config_common, config_lve),
  Object.assign({}, config_common, config_modal)

]