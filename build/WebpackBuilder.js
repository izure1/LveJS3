const path = require('path')
const CONFIG = require('./Vars/CONFIG')


class WebpackBuilder {

  static __getCommonSetting(entryPoint, filename, library) {

    let entry = {}
    entry[filename] = entryPoint

    return {
      ...CONFIG,
      entry,
      output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        library,
        libraryExport: 'default',
        libraryTarget: 'umd'
      }
    }

  }

  static exportToProduction() {

    let build = WebpackBuilder.__getCommonSetting(...arguments)
    build.mode = 'production'

    return build

  }

  static exportToDevelopment(name, entry) {

    let build = WebpackBuilder.__getCommonSetting(...arguments)
    build.mode = 'development'

    return build

  }

}


module.exports = WebpackBuilder