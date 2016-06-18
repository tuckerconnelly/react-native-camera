import React, { PropTypes, Component } from 'react'

export default class Camera extends Component {
  static constants = {
    Aspect: {
      fit: 'fit',
      fill: 'fill',
      stretch: 'stretch',
    },

    CaptureMode: {
      still: 'still',
      video: 'video',
    },

    CaptureTarget: {
      cameraRoll: 'cameraRoll',
      disk: 'disk',
      temp: 'temp',
    },

    CaptureQuality: {
      high: 'high',
      medium: 'medium',
      low: 'low',
      photo: 'photo',
    },

    Type: {
      front: 'front',
      back: 'back',
    },

    Orientation: {
      auto: 'auto',
      landscapeLeft: 'landscapeLeft',
      landscapeRight: 'landscapeRight',
      portrait: 'portrait',
      portraitUpsideDown: 'portraitUpsideDown',
    },

    FlashMode: {
      on: 'on',
      off: 'off',
      auto: 'auto',
    },

    TorchMode: {
      on: 'on',
      off: 'off',
      auto: 'auto',
    },
  };

  static propTypes = {
    aspect: PropTypes.string,
    captureAudio: PropTypes.bool,

    style: PropTypes.object,
    children: PropTypes.node,
  };

  static defaultPropTypes = {
    aspect: Camera.constants.Aspect.fill,
    captureAudio: true,

    style: {},
  };

  componentDidMount() {
    const { video } = this.refs

    navigator.mediaDevices.getUserMedia({
      audio: this.props.captureAudio,
      video: true,
    })
      .then(stream => {
        video.src = URL.createObjectURL(stream)
      })
  }

  get aspectStyles() {
    switch (this.props.aspect) {
      case Camera.constants.Aspect.fit: return { objectFit: 'contain' }
      case Camera.constants.Aspect.fill: return { objectFit: 'cover' }
      case Camera.constants.Aspect.stretch: return { objectFit: 'fill' }
    }
    return {}
  }

  render() {
    const { children, style, ...other } = this.props
    return (
      <div {...other}>
        <video
          ref="video"
          autoPlay
          style={{ ...styles.video, ...this.aspectStyles, ...style }} />
        {children}
      </div>
    )
  }
}

const styles = {
  video: {
    display: 'flex',
    flex: 1,

    width: '100%',
    height: '100%',

    transform: 'rotateY(180deg)',
  },
}
