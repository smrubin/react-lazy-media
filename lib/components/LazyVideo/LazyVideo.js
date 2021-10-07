"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyVideoWithRef = exports.LazyVideo = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ReactLazyMedia = require("../../ReactLazyMedia");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LazyVideo =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyVideo, _Component);

  function LazyVideo() {
    _classCallCheck(this, LazyVideo);

    return _possibleConstructorReturn(this, _getPrototypeOf(LazyVideo).apply(this, arguments));
  }

  _createClass(LazyVideo, [{
    key: "componentDidMount",
    // Update lazyLoad after first rendering of every image
    value: function componentDidMount() {
      _ReactLazyMedia.ReactLazyMedia.getInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          id = _this$props.id,
          controls = _this$props.controls,
          width = _this$props.width,
          height = _this$props.height,
          src = _this$props.src,
          poster = _this$props.poster,
          autoplay = _this$props.autoplay,
          preload = _this$props.preload,
          muted = _this$props.muted,
          playsinline = _this$props.playsinline,
          loop = _this$props.loop,
          forwardedRef = _this$props.forwardedRef;
      var mediaType = src.split('.').pop(); //Only supporting mp4 and webm (for now?)

      if (mediaType !== 'mp4' && mediaType !== 'webm') {
        return null;
      } //TODO: Add support for autoplaying videos


      return _react["default"].createElement("video", {
        ref: forwardedRef,
        className: _classnames["default"].apply(void 0, ['lazy'].concat(_toConsumableArray(classes))),
        id: id,
        width: width,
        height: height,
        "data-poster": poster,
        controls: controls,
        autoPlay: autoplay,
        playsInline: playsinline,
        muted: muted,
        loop: loop,
        preload: preload ? 'auto' : 'none'
      }, _react["default"].createElement("source", {
        src: src,
        type: "video/".concat(mediaType)
      }));
    }
  }]);

  return LazyVideo;
}(_react.Component);

exports.LazyVideo = LazyVideo;

_defineProperty(LazyVideo, "propTypes", {
  classes: _propTypes["default"].arrayOf(_propTypes["default"].string),
  controls: _propTypes["default"].bool,
  id: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  poster: _propTypes["default"].string,
  autoplay: _propTypes["default"].bool,
  preload: _propTypes["default"].bool,
  playsinline: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  loop: _propTypes["default"].bool
});

_defineProperty(LazyVideo, "defaultProps", {
  classes: [],
  controls: true,
  autoplay: false,
  preload: false,
  loop: false,
  playsinline: true,
  muted: true
});

var LazyVideoWithRef = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(LazyVideo, _extends({
    forwardedRef: ref
  }, props));
});

exports.LazyVideoWithRef = LazyVideoWithRef;