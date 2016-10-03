if (!global.navigator) global.navigator = {}
require('md-gum-polyfill')

module.exports = {
  CameraManager: require('./CameraManager'),
  RCTCamera: require('./RCTCamera'),
}
