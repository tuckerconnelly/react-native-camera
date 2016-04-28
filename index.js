import { Platform } from 'react-native'
// import IOSCamera from './index.ios.js'
// import AndroidCamera from './index.android.js'
import WebCamera from './index.web.js'

let Camera

// switch (Platform.OS) {
//   case 'ios':
//     Camera = IOSCamera
//     break
//   case 'android':
//     Camera = AndroidCamera
//     break
//   case 'web':
//     Camera = WebCamera
//     break
// }

export default WebCamera
