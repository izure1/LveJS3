'use strict'

const config_common = require('./build/Common.config')
const config_core = require('./build/Core.config')
const config_modal = require('./build/Modal.config')
const config_interface = require('./build/Interface.config')

// set webpack
module.exports = [

  {
    ...config_common,
    ...config_core,
  },

  {
    ...config_common,
    ...config_modal,
  },

  {
    ...config_common,
    ...config_interface,
  },

]