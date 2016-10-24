/* global navigator, URL */

class CameraManager {
  constructor() {
    this.Aspect = {
      fit: 'fit',
      fill: 'fill',
      stretch: 'stretch',
    }
    this.BarCodeType = {}
    this.CaptureMode = {
      still: 'still',
      video: 'video',
    }
    this.CaptureTarget = {
      cameraRoll: 'cameraRoll',
      disk: 'disk',
      temp: 'temp',
    }
    this.CaptureQuality = {
      high: 'high',
      medium: 'medium',
      low: 'low',
      photo: 'photo',
    }
    this.Type = {
      front: 'front',
      back: 'back',
    }
    this.Orientation = {
      auto: 'auto',
      landscapeLeft: 'landscapeLeft',
      landscapeRight: 'landscapeRight',
      portrait: 'portrait',
      portraitUpsideDown: 'portraitUpsideDown',
    }
    this.FlashMode = {
      on: 'on',
      off: 'off',
      auto: 'auto',
    }
    this.TorchMode = {
      on: 'on',
      off: 'off',
      auto: 'auto',
    }

    // Mock so it doesn't fail when .getUserMedia fails (eg, when the user tries
    // to capture without granting permission)
    this.mediaRecorder = { stop: () => 0 }
  }

  capture() {
    return navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
      .then(stream => {
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
      })
      .then(() => new Promise(resolve => {
        this.mediaRecorder.start()

        const chunks = []
        this.mediaRecorder.ondataavailable = e => chunks.push(e.data)

        this.mediaRecorder.onstop = () => {
          const data = new Blob(chunks, { type: 'video/webm' })
          const path = URL.createObjectURL(data)

          resolve({ path, data })
        }
      }))
  }

  stopCapture() {
    this.mediaRecorder.stop()
  }

  getFOV() {

  }

  hasFlash() {

  }
}

module.exports = new CameraManager()
