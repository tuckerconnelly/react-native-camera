Object.defineProperty(exports,"__esModule",{value:true});var _reactNativeUniversal=require('react-native-universal');

var Camera=void 0;

switch(_reactNativeUniversal.Platform.OS){
case'ios':
Camera=require('./Camera');
break;
case'android':
Camera=require('./Camera');
break;
case'web':
Camera=require('./CameraWeb');
break;}exports.default=


Camera.default;