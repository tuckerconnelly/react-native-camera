let React

// HACK Differentiates import depending on if we're running in server,
// web client, or react native
// See tuckerconnelly/carbon-ui/src/react.js
if (process && !global.__BUNDLE_START_TIME__) React = require('react-native-web')
else React = require('react-native')

export default React
