Object.defineProperty(exports,"__esModule",{value:true});exports.constants=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNativeUniversal=require('react-native-universal');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var CameraManager=_reactNativeUniversal.NativeModules.CameraManager||_reactNativeUniversal.NativeModules.CameraModule;
var CAMERA_REF='camera';

function convertNativeProps(props){
var newProps=_extends({},props);
if(typeof props.aspect==='string'){
newProps.aspect=Camera.constants.Aspect[props.aspect];
}

if(typeof props.flashMode==='string'){
newProps.flashMode=Camera.constants.FlashMode[props.flashMode];
}

if(typeof props.orientation==='string'){
newProps.orientation=Camera.constants.Orientation[props.orientation];
}

if(typeof props.torchMode==='string'){
newProps.torchMode=Camera.constants.TorchMode[props.torchMode];
}

if(typeof props.type==='string'){
newProps.type=Camera.constants.Type[props.type];
}

if(typeof props.captureQuality==='string'){
newProps.captureQuality=Camera.constants.CaptureQuality[props.captureQuality];
}

if(typeof props.captureMode==='string'){
newProps.captureMode=Camera.constants.CaptureMode[props.captureMode];
}

// do not register barCodeTypes if no barcode listener
if(typeof props.onBarCodeRead!=='function'){
newProps.barCodeTypes=[];
}

newProps.barcodeScannerEnabled=typeof props.onBarCodeRead==='function';

return newProps;
}var

Camera=function(_Component){_inherits(Camera,_Component);_createClass(Camera,[{key:'setNativeProps',value:function setNativeProps(















































































props){
this.refs[CAMERA_REF].setNativeProps(props);
}}]);

function Camera(){_classCallCheck(this,Camera);var _this=_possibleConstructorReturn(this,(Camera.__proto__||Object.getPrototypeOf(Camera)).call(this));_this.



























































_onBarCodeRead=function(data){
if(_this.props.onBarCodeRead){
_this.props.onBarCodeRead(data);
}
};_this.state={isAuthorized:false,isRecording:false};return _this;}_createClass(Camera,[{key:'componentWillMount',value:function componentWillMount(){var _convertNativeProps,captureMode,hasVideoAndAudio,check,isAuthorized;return regeneratorRuntime.async(function componentWillMount$(_context){while(1){switch(_context.prev=_context.next){case 0:this._addOnBarCodeReadListener();_convertNativeProps=convertNativeProps({captureMode:this.props.captureMode});captureMode=_convertNativeProps.captureMode;hasVideoAndAudio=this.props.captureAudio&&captureMode===Camera.constants.CaptureMode.video;check=hasVideoAndAudio?Camera.checkDeviceAuthorizationStatus:Camera.checkVideoAuthorizationStatus;if(!check){_context.next=10;break;}_context.next=8;return regeneratorRuntime.awrap(check());case 8:isAuthorized=_context.sent;this.setState({isAuthorized:isAuthorized});case 10:case'end':return _context.stop();}}},null,this);}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._removeOnBarCodeReadListener();if(this.state.isRecording){this.stopCapture();}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(newProps){var onBarCodeRead=this.props.onBarCodeRead;if(onBarCodeRead&&!newProps.onBarCodeRead){this._addOnBarCodeReadListener(newProps);}}},{key:'_addOnBarCodeReadListener',value:function _addOnBarCodeReadListener(props){var _ref=props||this.props;var onBarCodeRead=_ref.onBarCodeRead;this._removeOnBarCodeReadListener();if(onBarCodeRead){this.cameraBarCodeReadListener=_reactNativeUniversal.Platform.select({ios:_reactNativeUniversal.NativeAppEventEmitter.addListener('CameraBarCodeRead',this._onBarCodeRead),android:_reactNativeUniversal.DeviceEventEmitter.addListener('CameraBarCodeReadAndroid',this._onBarCodeRead)});}}},{key:'_removeOnBarCodeReadListener',value:function _removeOnBarCodeReadListener(){var listener=this.cameraBarCodeReadListener;if(listener){listener.remove();}}},{key:'render',value:function render(){var style=[styles.base,this.props.style];var nativeProps=convertNativeProps(this.props);return _react2.default.createElement(RCTCamera,_extends({ref:CAMERA_REF},nativeProps));}},{key:'capture',value:function capture(

options){
var props=convertNativeProps(this.props);
options=_extends({
audio:props.captureAudio,
barCodeTypes:props.barCodeTypes,
mode:props.captureMode,
playSoundOnCapture:props.playSoundOnCapture,
target:props.captureTarget,
quality:props.captureQuality,
type:props.type,
title:'',
description:'',
mirrorImage:props.mirrorImage},
options);


if(options.mode===Camera.constants.CaptureMode.video){
options.totalSeconds=options.totalSeconds>-1?options.totalSeconds:-1;
options.preferredTimeScale=options.preferredTimeScale||30;
this.setState({isRecording:true});
}

return CameraManager.capture(options);
}},{key:'stopCapture',value:function stopCapture()

{
if(this.state.isRecording){
this.setState({isRecording:false});
return CameraManager.stopCapture();
}
return Promise.resolve("Not Recording.");
}},{key:'getFOV',value:function getFOV()

{
return CameraManager.getFOV();
}},{key:'hasFlash',value:function hasFlash()

{
if(_reactNativeUniversal.Platform.OS==='android'){
var props=convertNativeProps(this.props);
return CameraManager.hasFlash({
type:props.type});

}
return CameraManager.hasFlash();
}}]);return Camera;}(_react.Component);Camera.constants={Aspect:CameraManager.Aspect,BarCodeType:CameraManager.BarCodeType,Type:CameraManager.Type,CaptureMode:CameraManager.CaptureMode,CaptureTarget:CameraManager.CaptureTarget,CaptureQuality:CameraManager.CaptureQuality,Orientation:CameraManager.Orientation,FlashMode:CameraManager.FlashMode,TorchMode:CameraManager.TorchMode};Camera.propTypes=_extends({},_reactNativeUniversal.View.propTypes,{aspect:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),captureAudio:_react.PropTypes.bool,captureMode:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),captureQuality:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),captureTarget:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),defaultOnFocusComponent:_react.PropTypes.bool,flashMode:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),keepAwake:_react.PropTypes.bool,onBarCodeRead:_react.PropTypes.func,barcodeScannerEnabled:_react.PropTypes.bool,onFocusChanged:_react.PropTypes.func,onZoomChanged:_react.PropTypes.func,mirrorImage:_react.PropTypes.bool,barCodeTypes:_react.PropTypes.array,orientation:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),playSoundOnCapture:_react.PropTypes.bool,torchMode:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number]),type:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.number])});Camera.defaultProps={aspect:CameraManager.Aspect.fill,type:CameraManager.Type.back,orientation:CameraManager.Orientation.auto,captureAudio:true,captureMode:CameraManager.CaptureMode.still,captureTarget:CameraManager.CaptureTarget.cameraRoll,captureQuality:CameraManager.CaptureQuality.high,defaultOnFocusComponent:true,flashMode:CameraManager.FlashMode.off,playSoundOnCapture:true,torchMode:CameraManager.TorchMode.off,mirrorImage:false,barCodeTypes:Object.values(CameraManager.BarCodeType)};Camera.checkDeviceAuthorizationStatus=CameraManager.checkDeviceAuthorizationStatus;Camera.checkVideoAuthorizationStatus=CameraManager.checkVideoAuthorizationStatus;Camera.checkAudioAuthorizationStatus=CameraManager.checkAudioAuthorizationStatus;exports.default=Camera;


var constants=exports.constants=Camera.constants;

var RCTCamera=(0,_reactNativeUniversal.requireNativeComponent)('RCTCamera',Camera);

var styles=_reactNativeUniversal.StyleSheet.create({
base:{}});