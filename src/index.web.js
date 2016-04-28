import React from './React'
const { PropTypes, Component } = React

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
      video: { width: 1920, height: 1080 },
    })
      .then(stream => {
        video.src = URL.createObjectURL(stream)
        // HACK Chrome isn't updating video immediately, remove
        // setTimeout when bug is figured out
        setTimeout(() => this.forceUpdate(), 1000)
      })
  }

  get aspectStyles() {
    if (!this.refs.video) return {}

    const { innerWidth, innerHeight } = window
    switch (this.props.aspect) {
      case Camera.constants.Aspect.fit:
        return innerWidth > innerHeight ?
          { height: '100%' } :
          { width: '100%' }
      case Camera.constants.Aspect.fill:
        return innerWidth > innerHeight ?
          { width: '100%' } :
          { height: '100%' }
      case Camera.constants.Aspect.stretch:
        return { width: '100%', height: '100%' }
    }
    return {}
  }

  render() {
    const { style, ...other } = this.props

    return (
      <div
        style={{ ...styles.base, ...style }}
        {...other}>
        <video
          ref="video"
          style={{
            ...styles.video,
            ...this.aspectStyles,
          }} />
      </div>
    )
  }
}

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
  },

  video: {
    objectFit: 'cover',
  },
}
