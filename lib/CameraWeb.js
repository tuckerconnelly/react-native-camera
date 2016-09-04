Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint-disable react/no-string-refs */
/* global navigator, URL */

if(!global.navigator)global.navigator={};

require('md-gum-polyfill');
var React=require('react');var

PropTypes=React.PropTypes;var Component=React.Component;var

Camera=function(_Component){_inherits(Camera,_Component);function Camera(){_classCallCheck(this,Camera);return _possibleConstructorReturn(this,(Camera.__proto__||Object.getPrototypeOf(Camera)).apply(this,arguments));}_createClass(Camera,[{key:'componentDidMount',value:function componentDidMount()


































































{var
video=this.refs.video;

navigator.mediaDevices.getUserMedia({
audio:this.props.captureAudio,
video:true}).

then(function(stream){
video.src=URL.createObjectURL(stream);
});
}},{key:'render',value:function render()










{var _props=
this.props;var children=_props.children;var style=_props.style;
return(
React.createElement('div',null,
React.createElement('video',{
ref:'video',
autoPlay:true,
style:_extends({},styles.video,this.aspectStyles,style)}),
children));


}},{key:'aspectStyles',get:function get(){switch(this.props.aspect){case Camera.constants.Aspect.fit:return{objectFit:'contain'};case Camera.constants.Aspect.fill:return{objectFit:'cover'};case Camera.constants.Aspect.stretch:return{objectFit:'fill'};}return{};}}]);return Camera;}(Component);Camera.constants={Aspect:{fit:'fit',fill:'fill',stretch:'stretch'},CaptureMode:{still:'still',video:'video'},CaptureTarget:{cameraRoll:'cameraRoll',disk:'disk',temp:'temp'},CaptureQuality:{high:'high',medium:'medium',low:'low',photo:'photo'},Type:{front:'front',back:'back'},Orientation:{auto:'auto',landscapeLeft:'landscapeLeft',landscapeRight:'landscapeRight',portrait:'portrait',portraitUpsideDown:'portraitUpsideDown'},FlashMode:{on:'on',off:'off',auto:'auto'},TorchMode:{on:'on',off:'off',auto:'auto'}};Camera.propTypes={aspect:PropTypes.string,captureAudio:PropTypes.bool,style:PropTypes.object,children:PropTypes.node};Camera.defaultPropTypes={aspect:Camera.constants.Aspect.fill,captureAudio:true,style:{}};exports.default=Camera;


var styles={
video:{
display:'flex',
flex:1,

width:'100%',
height:'100%',

transform:'rotateY(180deg)'}};