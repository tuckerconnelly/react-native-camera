import { Platform } from 'react-native-universal'

let Camera

switch (Platform.OS) {
  case 'ios':
    Camera = require('./Camera.js')
    break
  case 'android':
    Camera = require('./Camera.js')
    break
  case 'web':
    Camera = require('./CameraWeb.js')
    break
}

export default Camera.default
