// import { React, PropTypes, Component } from 'react-native'
//
// export default class Camera extends Component {
//   static constants = {
//     Aspect: {
//       fit: 'fit',
//       fill: 'fill',
//       stretch: 'stretch',
//     },
//
//     CaptureMode: {
//       still: 'still',
//       video: 'video',
//     },
//
//     CaptureTarget: {
//       cameraRoll: 'cameraRoll',
//       disk: 'disk',
//       temp: 'temp',
//     },
//
//     CaptureQuality: {
//       high: 'high',
//       medium: 'medium',
//       low: 'low',
//       photo: 'photo',
//     },
//
//     Type: {
//       front: 'front',
//       back: 'back',
//     },
//
//     Orientation: {
//       auto: 'auto',
//       landscapeLeft: 'landscapeLeft',
//       landscapeRight: 'landscapeRight',
//       portrait: 'portrait',
//       portraitUpsideDown: 'portraitUpsideDown',
//     },
//
//     FlashMode: {
//       on: 'on',
//       off: 'off',
//       auto: 'auto',
//     },
//
//     TorchMode: {
//       on: 'on',
//       off: 'off',
//       auto: 'auto',
//     },
//   };
//
//   static propTypes = {
//     aspect: PropTypes.string,
//     captureAudio: PropTypes.bool,
//   };
//
//   static defaultPropTypes = {
//     aspect: Camera.constants.Aspect.fill,
//     captureAudio: true,
//   };
//
//   componentDidMount() {
//     navigator.getUserMedia =
//       navigator.getUserMedia ||
//       navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia ||
//       navigator.msGetUserMedia
//
//     const video = this.refs.video
//
//     if (!navigator.getUserMedia) return
//
//     navigator.getUserMedia({ audio: true, video: true }, stream => {
//       video.src = URL.createObjectURL(stream)
//     })
//   }
//
//   render() {
//     return <video ref="video" {...this.props} />
//   }
// }

export default () => 0
