import React from './React'
const { Platform } = React

let Camera

switch (Platform.OS) {
  case 'ios':
    Camera = require('./index.ios.js')
    break
  case 'android':
    Camera = require('./index.android.js')
    break
  case 'web':
    Camera = require('./index.web.js')
    break
}

export default Camera.default
