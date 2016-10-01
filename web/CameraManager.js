/* global navigator, URL */

class CameraManager {
  capture() {

  }

  stopCapture() {

  }

  getFOV() {

  }

  hasFlash() {

  }
}

CameraManager.Aspect = {
  fit: 'fit',
  fill: 'fill',
  stretch: 'stretch',
}
CameraManager.BarCodeType = {}
CameraManager.CaptureMode = {
  still: 'still',
  video: 'video',
}
CameraManager.CaptureTarget = {
  cameraRoll: 'cameraRoll',
  disk: 'disk',
  temp: 'temp',
}
CameraManager.CaptureQuality = {
  high: 'high',
  medium: 'medium',
  low: 'low',
  photo: 'photo',
}
CameraManager.Type = {
  front: 'front',
  back: 'back',
}
CameraManager.Orientation = {
  auto: 'auto',
  landscapeLeft: 'landscapeLeft',
  landscapeRight: 'landscapeRight',
  portrait: 'portrait',
  portraitUpsideDown: 'portraitUpsideDown',
}
CameraManager.FlashMode = {
  on: 'on',
  off: 'off',
  auto: 'auto',
}
CameraManager.TorchMode = {
  on: 'on',
  off: 'off',
  auto: 'auto',
}

module.exports = CameraManager
