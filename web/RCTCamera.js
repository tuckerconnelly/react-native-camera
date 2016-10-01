/* global navigator, URL */

if (!global.navigator) global.navigator = {}
require('md-gum-polyfill')

const React = require('react')

const { PropTypes, Component, createElement } = React

const CameraManager = require('./CameraManager')

class RCTCamera extends Component {
  constructor(...args) {
    super(...args)

    this.video = null
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({
      video: true,
    })
      .then(stream => {
        this.video.src = URL.createObjectURL(stream)
      })
  }

  get aspectStyles() {
    switch (this.props.aspect) {
      case CameraManager.Aspect.fit: return { objectFit: 'contain' }
      case CameraManager.Aspect.fill: return { objectFit: 'cover' }
      case CameraManager.Aspect.stretch: return { objectFit: 'fill' }
    }
    return {}
  }

  render() {
    const { children, style } = this.props

    return (
      createElement('div', null,
        createElement('video', {
          ref: c => { this.video = c },
          autoPlay: true,
          style: Object.assign({}, styles.video, this.aspectStyles, style),
        },
          children
        )
      )
    )
  }
}

RCTCamera.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  aspect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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

module.exports = RCTCamera
