import { Platform } from 'react-native-universal'

let Camera

switch (Platform.OS) {
  case 'ios':
    Camera = require('./Camera')
    break
  case 'android':
    Camera = require('./Camera')
    break
  case 'web':
    Camera = require('./CameraWeb')
    break
}

export default Camera.default
