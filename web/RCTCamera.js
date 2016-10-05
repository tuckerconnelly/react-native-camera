/* global navigator, URL */

const React = require('react')

const { PropTypes, Component, createElement } = React

const CameraManager = require('./CameraManager')
const pick = require('lodash/pick')

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
    const { View } = require('react-native-web')
    const { children } = this.props

    const other = pick(this.props, Object.keys(View.propTypes))

    return (
      createElement(View, other,
        createElement('video', {
          ref: c => { this.video = c },
          autoPlay: true,
          style: Object.assign({}, styles.video, this.aspectStyles),
        }),
        children
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
    width: '100%',
    height: '100%',

    transform: 'rotateY(180deg)',
  },
}

module.exports = RCTCamera
