"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyImage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ReactLazyMedia = require("../../ReactLazyMedia");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var LazyImage =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyImage, _Component);

  function LazyImage() {
    _classCallCheck(this, LazyImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LazyImage).apply(this, arguments));
  }

  _createClass(LazyImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _ReactLazyMedia.ReactLazyMedia.getInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alt = _this$props.alt,
          classes = _this$props.classes,
          id = _this$props.id,
          lqip = _this$props.lqip,
          src = _this$props.src,
          width = _this$props.width,
          height = _this$props.height,
          onError = _this$props.onError;
      return _react["default"].createElement("img", {
        alt: alt,
        className: _classnames["default"].apply(void 0, ['lazy'].concat(_toConsumableArray(classes))),
        src: lqip,
        "data-src": src,
        height: height,
        id: id,
        width: width,
        onError: onError
      });
    }
  }]);

  return LazyImage;
}(_react.Component);

exports.LazyImage = LazyImage;

_defineProperty(LazyImage, "propTypes", {
  alt: _propTypes["default"].string,
  classes: _propTypes["default"].arrayOf(_propTypes["default"].string),
  id: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  lqip: _propTypes["default"].string,
  // Low-quality image placeholder
  onError: _propTypes["default"].func
});

_defineProperty(LazyImage, "defaultProps", {
  classes: []
});